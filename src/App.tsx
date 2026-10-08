/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Sparkles, 
  HelpCircle, 
  Download, 
  SendHorizontal, 
  Trophy, 
  Flame, 
  Info,
  Clock,
  Layers,
  Zap,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { canChainWords, getDueumVariants, isKillerEnding, isHangulSyllable } from './utils/koreanRules.ts';
import { WORD_LIST, WORD_INDEX, findWordInDictionary, WordEntry } from './data/words.ts';
import { sound } from './utils/sound.ts';
import { SingleHtmlModal } from './components/SingleHtmlModal.tsx';
import { DueumHelperModal } from './components/DueumHelperModal.tsx';

interface HistoryRecord {
  id: string;
  word: string;
  player: 'user' | 'computer';
  dueumApplied: boolean;
  isAttack: boolean;
  meaning?: string;
  category?: string;
  timestamp: Date;
}

type Difficulty = 'easy' | 'normal' | 'hard';

interface OpponentProfile {
  name: string;
  role: string;
  avatar: string;
  description: string;
  speech: string;
}

const OPPONENTS: Record<Difficulty, OpponentProfile> = {
  easy: {
    name: "퐁퐁이",
    role: "초보 햄스터 봇",
    avatar: "🐹",
    description: "순하고 쉬운 단어를 주로 사용하는 말랑말랑 친구",
    speech: "안녕! 나랑 같이 재미있게 끝말잇기하자!"
  },
  normal: {
    name: "루미",
    role: "단어 요정",
    avatar: "🧚‍♀️",
    description: "풍부한 어휘력과 센스 있는 두음법칙을 구사하는 친구",
    speech: "어떤 단어를 꺼내실지 정말 기대돼요!"
  },
  hard: {
    name: "알파독",
    role: "끝말잇기 달인",
    avatar: "🐶",
    description: "어려운 받침과 한방 전략을 꿰뚫고 있는 절대 고수",
    speech: "어디 제 빈틈을 찾아보시죠. 만만치 않을 겁니다!"
  }
};

const COMPUTER_QUOTES = {
  start: [
    "게임을 시작합니다! 원하는 단어로 힘차게 출발해 보세요!",
    "준비 완료! 첫 단어는 무엇인가요?",
    "오늘의 멋진 어휘 대결, 기대할게요!"
  ],
  thinking: [
    "음... 잠시만요, 사전을 스캔하는 중...",
    "그 글자로 시작하는 단어가 어디 있더라...",
    "오호! 흥미로운 단어를 쓰셨군요!",
    "머릿속 단어 상자를 탈탈 털어보는 중이에요!"
  ],
  attackReaction: [
    "으악! 한방 단어라니... 자비가 없으시네요!",
    "이 글자는 도저히 이어갈 수가 없어요...!",
    "완벽한 일격이었습니다! 무릎을 탁 칩니다!"
  ],
  victoryTaunt: [
    "후후! 이번 승부는 제가 이겼네요~",
    "더 갈고닦아 다음 판에 다시 도전해 보세요!",
    "짜릿한 승리였습니다!"
  ],
  defeatAdmit: [
    "더 이상 이어갈 단어가 없어요... 패배를 인정합니다! 🏳️",
    "대단한 어휘력이세요! 제가 졌습니다!",
    "한 수 배웠습니다! 다음엔 꼭 이길 거예요!"
  ]
};

export default function App() {
  // Game States
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  const [currentWord, setCurrentWord] = useState<string>('');
  const [turn, setTurn] = useState<'user' | 'computer'>('user');
  const [inputVal, setInputVal] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<{ text: string; type: 'info' | 'error' | 'success' }>({
    text: "두음법칙이 자동 적용됩니다. 원하는 단어를 입력해 시작하세요!",
    type: 'info'
  });

  // Settings
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const [timerDuration, setTimerDuration] = useState<number>(15);
  const [timeRemaining, setTimeRemaining] = useState<number>(15);
  const [minWordLength, setMinWordLength] = useState<number>(2);
  const [isAudioOn, setIsAudioOn] = useState<boolean>(true);

  // Gameplay metrics
  const [combo, setCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [gameResult, setGameResult] = useState<{ won: boolean; message: string } | null>(null);

  // Character Dialogue
  const [speechBubble, setSpeechBubble] = useState<string>(OPPONENTS.normal.speech);

  // Modals
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState<boolean>(false);
  const [isRuleModalOpen, setIsRuleModalOpen] = useState<boolean>(false);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync sound controller state
  useEffect(() => {
    sound.enabled = isAudioOn;
  }, [isAudioOn]);

  // Scroll history on change
  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Handle Turn Timer
  useEffect(() => {
    if (isGameOver || timerDuration <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setTimeRemaining(timerDuration);
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0.1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }
        return Math.max(0, +(prev - 0.1).toFixed(1));
      });
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [turn, isGameOver, timerDuration]);

  const handleTimeOut = () => {
    if (isGameOver) return;
    if (turn === 'user') {
      sound.playError();
      handleGameOver(false, "제한 시간(타임오버)이 초과되어 패배하였습니다! ⏰");
    } else {
      handleGameOver(true, "컴퓨터가 시간 내에 단어를 찾지 못해 승리하셨습니다! 🎉");
    }
  };

  // Reset Game
  const resetGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setHistory([]);
    setUsedWords(new Set());
    setCurrentWord('');
    setTurn('user');
    setInputVal('');
    setCombo(0);
    setIsGameOver(false);
    setGameResult(null);
    setTimeRemaining(timerDuration);
    setSpeechBubble(OPPONENTS[difficulty].speech);
    setStatusMsg({
      text: "게임이 초기화되었습니다. 새로운 단어를 입력해 보세요!",
      type: 'info'
    });
    sound.playPop();
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  // Handle Game Over
  const handleGameOver = (won: boolean, message: string) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsGameOver(true);
    setGameResult({ won, message });

    if (won) {
      sound.playVictory();
      setSpeechBubble(getRandomItem(COMPUTER_QUOTES.defeatAdmit));
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      sound.playDefeat();
      setSpeechBubble(getRandomItem(COMPUTER_QUOTES.victoryTaunt));
    }
  };

  function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Next target characters
  const targetChars = currentWord
    ? getDueumVariants(currentWord.slice(-1))
    : [];

  // Validation function
  const validateWord = (raw: string) => {
    const word = raw.trim();

    if (word.length < minWordLength) {
      return { ok: false, reason: `최소 ${minWordLength}글자 이상이어야 합니다.` };
    }

    // Verify all characters are standard Hangul
    for (let i = 0; i < word.length; i++) {
      if (!isHangulSyllable(word.charAt(i))) {
        return { ok: false, reason: "한글 음절만 입력 가능합니다." };
      }
    }

    // Duplicate check
    if (usedWords.has(word)) {
      return { ok: false, reason: `'${word}'은(는) 이미 사용된 단어입니다!` };
    }

    // Chain check if not first word
    let dueumApplied = false;
    if (currentWord) {
      const chainCheck = canChainWords(currentWord, word);
      if (!chainCheck.valid) {
        const lastChar = currentWord.slice(-1);
        const options = chainCheck.expectedStarts.join(" 또는 ");
        return { ok: false, reason: `'${options}'(으)로 시작해야 합니다! ('${lastChar}'의 끝말)` };
      }
      dueumApplied = chainCheck.dueumApplied;
    }

    return {
      ok: true,
      word,
      dueumApplied,
      isAttack: isKillerEnding(word.slice(-1))
    };
  };

  // Submit Player Word
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isGameOver || turn !== 'user') return;

    const check = validateWord(inputVal);
    if (!check.ok || !check.word) {
      sound.playError();
      setStatusMsg({ text: check.reason || "유효한 단어가 아닙니다.", type: 'error' });
      return;
    }

    const word = check.word;
    const dueumApplied = !!check.dueumApplied;
    const isAttack = !!check.isAttack;
    const wordDictEntry = findWordInDictionary(word);

    // Register User Move
    sound.playPop();
    const newRecord: HistoryRecord = {
      id: `${Date.now()}-user`,
      word,
      player: 'user',
      dueumApplied,
      isAttack,
      meaning: wordDictEntry?.meaning,
      category: wordDictEntry?.category,
      timestamp: new Date()
    };

    setHistory((prev) => [...prev, newRecord]);
    setUsedWords((prev) => new Set(prev).add(word));
    setCurrentWord(word);
    setInputVal('');

    // Combo streak
    const nextCombo = combo + 1;
    setCombo(nextCombo);
    if (nextCombo > maxCombo) setMaxCombo(nextCombo);
    sound.playCombo(nextCombo);

    // Check if player executed a winning attack word
    const nextVariants = getDueumVariants(word.slice(-1));
    const availableComputerResponses: WordEntry[] = [];
    nextVariants.forEach((v) => {
      const pool = WORD_INDEX.get(v) || [];
      pool.forEach((cand) => {
        if (!usedWords.has(cand.word) && cand.word !== word && cand.word.length >= minWordLength) {
          availableComputerResponses.push(cand);
        }
      });
    });

    if (isAttack || availableComputerResponses.length === 0) {
      setSpeechBubble(getRandomItem(COMPUTER_QUOTES.attackReaction));
      setStatusMsg({
        text: `⚡ 강력한 한방 단어 '${word}'! 상대방이 이을 수 없습니다.`,
        type: 'success'
      });
      setTimeout(() => {
        handleGameOver(true, `「${word}」! 컴퓨터가 '${nextVariants.join('/')}'(으)로 시작하는 단어를 찾지 못해 항복했습니다! 🏆`);
      }, 700);
      return;
    }

    // Pass turn to computer
    setTurn('computer');
    setStatusMsg({ text: `「${word}」 접수 완료! 컴퓨터가 생각하고 있습니다...`, type: 'info' });
    setSpeechBubble(getRandomItem(COMPUTER_QUOTES.thinking));

    // Execute Computer Move
    executeComputerTurn(word, new Set([...usedWords, word]));
  };

  // Computer AI Response
  const executeComputerTurn = (prevWord: string, currentUsedSet: Set<string>) => {
    sound.playComputerTurn();
    const lastChar = prevWord.slice(-1);
    const variants = getDueumVariants(lastChar);

    const candidates: WordEntry[] = [];
    variants.forEach((v) => {
      const list = WORD_INDEX.get(v) || [];
      list.forEach((entry) => {
        if (!currentUsedSet.has(entry.word) && entry.word.length >= minWordLength) {
          candidates.push(entry);
        }
      });
    });

    // Simulated Thinking Delay for realistic play
    const thinkTime = Math.min(1600, Math.max(800, 600 + Math.random() * 800));

    setTimeout(() => {
      if (candidates.length === 0) {
        handleGameOver(true, `컴퓨터가 '${variants.join('/')}'(으)로 시작하는 단어를 찾지 못했습니다. 플레이어 승리! 🏆`);
        return;
      }

      // Difficulty based selection
      let picked: WordEntry;
      if (difficulty === 'hard') {
        const attackWords = candidates.filter((w) => isKillerEnding(w.word.slice(-1)));
        if (attackWords.length > 0 && Math.random() < 0.65) {
          picked = getRandomItem(attackWords);
        } else {
          picked = getRandomItem(candidates);
        }
      } else if (difficulty === 'easy') {
        const safeWords = candidates.filter((w) => !isKillerEnding(w.word.slice(-1)));
        picked = safeWords.length > 0 ? getRandomItem(safeWords) : getRandomItem(candidates);
      } else {
        picked = getRandomItem(candidates);
      }

      const dueumApplied = picked.word.charAt(0) !== lastChar;
      const isAttack = isKillerEnding(picked.word.slice(-1));

      const compRecord: HistoryRecord = {
        id: `${Date.now()}-comp`,
        word: picked.word,
        player: 'computer',
        dueumApplied,
        isAttack,
        meaning: picked.meaning,
        category: picked.category,
        timestamp: new Date()
      };

      setHistory((prev) => [...prev, compRecord]);
      setUsedWords((prev) => new Set(prev).add(picked.word));
      setCurrentWord(picked.word);
      sound.playPop();

      setSpeechBubble(`"${picked.word}"(으)로 받았습니다! 다음 차례는 당신이에요.`);

      if (isAttack) {
        setStatusMsg({
          text: `⚠️ 컴퓨터의 기습 한방 공격! '${getDueumVariants(picked.word.slice(-1)).join('/')}'(으)로 반격하세요!`,
          type: 'error'
        });
      } else {
        setStatusMsg({
          text: `컴퓨터가 「${picked.word}」을(를) 제출했습니다. 제시어의 마지막 글자로 이어주세요!`,
          type: 'info'
        });
      }

      setTurn('user');
      setTimeout(() => inputRef.current?.focus(), 50);
    }, thinkTime);
  };

  const timerPct = timerDuration > 0
    ? Math.max(0, Math.min(100, (timeRemaining / timerDuration) * 100))
    : 100;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-between antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Global Navigation Bar */}
      <header className="w-full max-w-4xl px-4 py-3 border-b border-slate-200/90 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center font-black text-lg shadow-sm shadow-amber-200">
            끝
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-slate-900 text-base leading-none">
                끝말잇기 마스터
              </h1>
              <span className="hidden sm:inline-block text-[11px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/70">
                두음법칙 & 한방단어 판정
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              지능형 컴퓨터 AI와 함께하는 정통 국어 끝말잇기 게임
            </p>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Rules info */}
          <button
            onClick={() => setIsRuleModalOpen(true)}
            className="p-2 sm:px-2.5 sm:py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition border border-transparent hover:border-slate-200 flex items-center gap-1"
            title="게임 규칙 및 두음법칙 설명"
          >
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">규칙 안내</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              setIsAudioOn(!isAudioOn);
              if (!isAudioOn) sound.playPop();
            }}
            className="p-2 sm:px-2.5 sm:py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition border border-transparent hover:border-slate-200 flex items-center gap-1"
            title={isAudioOn ? "소리 끄기" : "소리 켜기"}
          >
            {isAudioOn ? <Volume2 className="w-4 h-4 text-amber-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            <span className="hidden sm:inline">{isAudioOn ? "효과음 켜짐" : "음소거"}</span>
          </button>

          {/* Download Single HTML Button */}
          <button
            onClick={() => setIsHtmlModalOpen(true)}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition flex items-center gap-1 border border-slate-200/80 shadow-2xs"
            title="단일 HTML 파일 다운로드"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden sm:inline">단일 HTML 소스</span>
          </button>

          {/* Restart Button */}
          <button
            onClick={resetGame}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-900 rounded-lg transition flex items-center gap-1 shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>새 게임</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl px-4 py-4 flex-1 flex flex-col gap-4">
        
        {/* Top Arena Dashboard */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Opponent AI Profile Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-2xl shadow-xs">
                  {OPPONENTS[difficulty].avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-sm">
                      {OPPONENTS[difficulty].name}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {OPPONENTS[difficulty].role}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {OPPONENTS[difficulty].description}
                  </p>
                </div>
              </div>

              {/* Turn indicator */}
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                turn === 'computer' 
                  ? 'bg-amber-100 text-amber-800 animate-pulse' 
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {turn === 'computer' ? '생각 중...' : '대기'}
              </span>
            </div>

            {/* Character speech bubble */}
            <div className="mt-3 bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-xs text-slate-600 relative">
              <span className="italic">"{speechBubble}"</span>
            </div>
          </div>

          {/* Current Word Center Stage */}
          <div className="md:col-span-2 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 rounded-2xl p-5 text-white shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-amber-100 font-medium">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                <span>현재 이어갈 단어</span>
              </span>

              {/* Dueum law indicator */}
              {targetChars.length > 1 && (
                <span className="bg-white/20 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[11px] font-medium">
                  두음법칙 적용: {currentWord.slice(-1)} ➔ {targetChars[1]}
                </span>
              )}
            </div>

            {/* Giant display word */}
            <div className="my-2 text-center">
              <div className="text-3xl sm:text-4xl font-black tracking-wide drop-shadow-xs">
                {currentWord || "자유 시작"}
              </div>
              <p className="text-xs text-amber-100/90 mt-1">
                {currentWord
                  ? findWordInDictionary(currentWord)?.meaning || "이전 턴에 등록된 단어입니다."
                  : "첫 번째 단어를 아무거나 입력하여 게임을 시작하세요!"}
              </p>
            </div>

            {/* Target Letters Banner */}
            <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs">
              <div className="flex items-center gap-1.5 text-amber-100">
                <span>다음 시작 글자:</span>
                <span className="bg-white text-amber-900 font-extrabold px-2.5 py-0.5 rounded-md text-sm shadow-xs">
                  {targetChars.length > 0 ? targetChars.join(' / ') : '자유 시작'}
                </span>
              </div>

              {/* Turn state */}
              <div className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${turn === 'user' ? 'bg-emerald-300 animate-ping' : 'bg-slate-300'}`}></span>
                <span className="font-bold text-amber-50">
                  {turn === 'user' ? '나의 차례' : '컴퓨터 차례'}
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* Turn Timer Bar & Stats Bar */}
        <section className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-slate-700 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>턴 제한시간:</span>
                <span className="font-mono font-bold text-slate-900">
                  {timerDuration > 0 ? `${timeRemaining.toFixed(1)}초` : '무제한'}
                </span>
              </div>

              <div className="h-3 w-px bg-slate-200" />

              <div className="flex items-center gap-1 text-slate-600">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>이은 단어:</span>
                <span className="font-mono font-bold text-slate-900">{history.length}개</span>
              </div>
            </div>

            {/* Combo streak */}
            {combo > 1 && (
              <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-bounce" />
                <span>연속 {combo}콤보!</span>
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-100 ${
                timerPct > 50 
                  ? 'bg-blue-500' 
                  : timerPct > 20 
                    ? 'bg-amber-500' 
                    : 'bg-rose-500 animate-pulse'
              }`}
              style={{ width: `${timerPct}%` }}
            />
          </div>
        </section>

        {/* Middle History Stream (Chat Bubbles) */}
        <section className="bg-white rounded-2xl border border-slate-200/90 flex flex-col h-[280px] sm:h-[340px] shadow-sm overflow-hidden">
          <div className="px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">단어 릴레이 기록</span>
              <span>·</span>
              <span>총 {history.length}개 완료</span>
            </div>
            <span className="text-[11px] text-slate-400">아래로 갈수록 최신 단어</span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {history.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-2">
                <Sparkles className="w-8 h-8 text-amber-400 stroke-1" />
                <p className="text-sm font-medium text-slate-600">
                  첫 단어를 입력하고 게임을 시작해 보세요!
                </p>
                <p className="text-xs text-slate-400 max-w-xs">
                  '사과', '하늘', '바다' 등 원하는 한글 단어를 입력창에 넣고 엔터를 누르세요.
                </p>
              </div>
            ) : (
              history.map((item) => {
                const isUser = item.player === 'user';
                return (
                  <div 
                    key={item.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} text-xs`}
                  >
                    <div className="text-[10px] text-slate-400 mb-1 px-1 flex items-center gap-1 font-medium">
                      <span>{isUser ? '나 (플레이어)' : `${OPPONENTS[difficulty].name} (컴퓨터)`}</span>
                    </div>

                    <div className={`max-w-[85%] sm:max-w-[70%] p-3 rounded-2xl shadow-2xs ${
                      isUser 
                        ? 'bg-amber-500 text-white rounded-tr-xs' 
                        : 'bg-slate-100 text-slate-800 border border-slate-200/80 rounded-tl-xs'
                    }`}>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-base font-extrabold tracking-wide">
                          {item.word}
                        </span>

                        {item.dueumApplied && (
                          <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                            isUser ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'
                          }`}>
                            두음법칙
                          </span>
                        )}

                        {item.isAttack && (
                          <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                            isUser ? 'bg-rose-600 text-white' : 'bg-rose-100 text-rose-700'
                          }`}>
                            한방 공격⚡
                          </span>
                        )}

                        {item.category && (
                          <span className={`text-[10px] opacity-75`}>
                            ({item.category})
                          </span>
                        )}
                      </div>

                      {item.meaning && (
                        <p className={`mt-1 text-[11px] leading-relaxed ${
                          isUser ? 'text-amber-100' : 'text-slate-500'
                        }`}>
                          {item.meaning}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })
            )}
            <div ref={historyEndRef} />
          </div>
        </section>

        {/* Input Bar & Submission Form */}
        <section className="bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-sm">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                disabled={isGameOver || turn !== 'user'}
                placeholder={
                  isGameOver
                    ? "게임이 종료되었습니다. '새 게임'을 눌러주세요."
                    : turn === 'computer'
                      ? "컴퓨터가 단어를 고르고 있습니다..."
                      : currentWord
                        ? `'${targetChars.join('/')}'(으)로 시작하는 단어를 입력하세요`
                        : "시작 단어를 입력하세요 (예: 나비, 사과, 비행기)"
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
                autoComplete="off"
              />
              {inputVal && (
                <button
                  type="button"
                  onClick={() => setInputVal('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 p-1"
                >
                  지우기
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={isGameOver || turn !== 'user' || !inputVal.trim()}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold rounded-xl text-sm transition shadow-sm shadow-amber-200 flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>입력</span>
              <SendHorizontal className="w-4 h-4" />
            </button>
          </form>

          {/* Feedback & Rule hint */}
          <div className="mt-2.5 px-1 flex flex-wrap items-center justify-between text-xs gap-1">
            <div className="flex items-center gap-1.5">
              {statusMsg.type === 'error' ? (
                <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              ) : statusMsg.type === 'success' ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              ) : (
                <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              )}
              <span className={
                statusMsg.type === 'error'
                  ? 'text-rose-600 font-medium'
                  : statusMsg.type === 'success'
                    ? 'text-emerald-600 font-medium'
                    : 'text-slate-500'
              }>
                {statusMsg.text}
              </span>
            </div>

            <div className="text-[11px] text-slate-400">
              규칙: {minWordLength}글자 이상 · 중복 금지 · 두음법칙 자동
            </div>
          </div>
        </section>

        {/* Game Customization Options Drawer */}
        <section className="bg-white rounded-xl border border-slate-200/80 p-3 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
          
          {/* Difficulty selector */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">난이도:</span>
            <div className="flex items-center p-0.5 bg-slate-100 rounded-lg">
              {(['easy', 'normal', 'hard'] as Difficulty[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setDifficulty(mode);
                    setSpeechBubble(OPPONENTS[mode].speech);
                    sound.playPop();
                  }}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition ${
                    difficulty === mode
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {mode === 'easy' ? '초보 🐹' : mode === 'normal' ? '보통 🧚‍♀️' : '달인 🐶'}
                </button>
              ))}
            </div>
          </div>

          {/* Timer selector */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">제한시간:</span>
            <div className="flex items-center p-0.5 bg-slate-100 rounded-lg">
              {[10, 15, 30, 0].map((sec) => (
                <button
                  key={sec}
                  type="button"
                  onClick={() => {
                    setTimerDuration(sec);
                    sound.playPop();
                  }}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition ${
                    timerDuration === sec
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {sec === 0 ? '무제한' : `${sec}초`}
                </button>
              ))}
            </div>
          </div>

          {/* Min syllable length */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">글자수:</span>
            <div className="flex items-center p-0.5 bg-slate-100 rounded-lg">
              {[2, 3].map((len) => (
                <button
                  key={len}
                  type="button"
                  onClick={() => {
                    setMinWordLength(len);
                    sound.playPop();
                  }}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition ${
                    minWordLength === len
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {len === 2 ? '2글자 이상' : '3글자 이상 (하드)'}
                </button>
              ))}
            </div>
          </div>

        </section>

      </main>

      {/* Game Result Modal */}
      {isGameOver && gameResult && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl w-full max-w-sm p-6 text-center shadow-2xl border border-slate-100 flex flex-col items-center animate-in fade-in zoom-in-95 duration-150">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-3 shadow-inner ${
              gameResult.won ? 'bg-amber-100' : 'bg-slate-100'
            }`}>
              {gameResult.won ? '🏆' : '😢'}
            </div>

            <h3 className={`text-xl font-black ${
              gameResult.won ? 'text-amber-600' : 'text-slate-800'
            }`}>
              {gameResult.won ? '승리하셨습니다!' : '아쉽게 패배했습니다'}
            </h3>

            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {gameResult.message}
            </p>

            {/* Scorecard */}
            <div className="w-full bg-slate-50 rounded-xl p-3 my-4 border border-slate-100 grid grid-cols-2 gap-2 text-left">
              <div>
                <span className="text-[11px] text-slate-400 block">이은 단어 수</span>
                <span className="text-base font-bold text-slate-900 font-mono">
                  {history.length}개
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">최고 콤보</span>
                <span className="text-base font-bold text-amber-600 font-mono">
                  {maxCombo}콤보
                </span>
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <button
                onClick={resetGame}
                className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-sm transition shadow-sm shadow-amber-200"
              >
                다시 시작하기
              </button>
              <button
                onClick={() => setIsGameOver(false)}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl text-sm transition"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rules Modal */}
      <DueumHelperModal 
        isOpen={isRuleModalOpen} 
        onClose={() => setIsRuleModalOpen(false)} 
      />

      {/* Single HTML Source / Download Modal */}
      <SingleHtmlModal 
        isOpen={isHtmlModalOpen} 
        onClose={() => setIsHtmlModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="w-full max-w-4xl px-4 py-3 border-t border-slate-200/80 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-1">
        <div className="flex items-center gap-2">
          <span>끝말잇기 마스터 (Word Chain Master)</span>
          <span>·</span>
          <span>표준 국어 두음법칙 자동 적용</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsHtmlModalOpen(true)}
            className="hover:text-amber-600 underline underline-offset-2 transition"
          >
            단일 HTML 파일 다운로드
          </button>
          <span>·</span>
          <button 
            onClick={() => setIsRuleModalOpen(true)}
            className="hover:text-amber-600 underline underline-offset-2 transition"
          >
            두음법칙 안내
          </button>
        </div>
      </footer>

    </div>
  );
}
