/**
 * Korean Hangul & Dueum Law (두음법칙) processing utilities
 */

// Chosung, Jungsung, Jongsung tables
const CHOSUNG = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const JUNGSUNG = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
  'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

const JONGSUNG = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ',
  'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

export interface HangulDecomposed {
  chosung: string;
  jungsung: string;
  jongsung: string;
  chosungIndex: number;
  jungsungIndex: number;
  jongsungIndex: number;
}

export function isHangulSyllable(char: string): boolean {
  if (!char || char.length !== 1) return false;
  const code = char.charCodeAt(0);
  return code >= 0xAC00 && code <= 0xD7A3;
}

export function decomposeHangul(char: string): HangulDecomposed | null {
  if (!isHangulSyllable(char)) return null;
  const code = char.charCodeAt(0) - 0xAC00;
  const jongsungIndex = code % 28;
  const jungsungIndex = Math.floor((code % (21 * 28)) / 28);
  const chosungIndex = Math.floor(code / (21 * 28));

  return {
    chosung: CHOSUNG[chosungIndex],
    jungsung: JUNGSUNG[jungsungIndex],
    jongsung: JONGSUNG[jongsungIndex],
    chosungIndex,
    jungsungIndex,
    jongsungIndex
  };
}

export function composeHangul(chosungIndex: number, jungsungIndex: number, jongsungIndex: number): string {
  const code = 0xAC00 + (chosungIndex * 21 * 28) + (jungsungIndex * 28) + jongsungIndex;
  return String.fromCharCode(code);
}

/**
 * Standard Korean Dueum Law (두음법칙) implementation
 * 국립국어원 표준 두음법칙 규정:
 * 1. ㄴ두음법칙: '녀, 뇨, 뉴, 니, 녜' 등이 첫머리에 올 때 '여, 요, 유, 이, 예'로 바뀜.
 * 2. ㄹ두음법칙(1): '랴, 려, 례, 료, 류, 리' 등이 첫머리에 올 때 '야, 여, 예, 요, 유, 이'로 바뀜.
 * 3. ㄹ두음법칙(2): '라, 래, 로, 뢰, 루, 르' 등이 첫머리에 올 때 '나, 내, 노, 뇌, 누, 느'로 바뀜.
 * 추가: '력' -> '역' 또는 '녁', '률/열' 등 관용적 허용
 */

// Direct special mappings for complete accuracy and rare cases
const SPECIAL_DUEUM_MAP: Record<string, string[]> = {
  // ㄴ -> ㅇ
  '녀': ['여'], '뇨': ['요'], '뉴': ['유'], '니': ['이'], '녜': ['예'],
  '냑': ['약'], '냘': ['얄'], '냠': ['얌'], '녑': ['엽'], '녕': ['영'],
  '녱': ['옐'], '늿': ['읏'],

  // ㄹ -> ㅇ (모음: ㅑ, ㅕ, ㅖ, ㅛ, ㅠ, ㅣ)
  '랴': ['야'], '려': ['여'], '례': ['예'], '료': ['요'], '류': ['유'], '리': ['이'],
  '량': ['양'], '력': ['역', '녁'], '련': ['연'], '렬': ['열'], '렴': ['염'], '렵': ['엽'],
  '령': ['영'], '룡': ['용'], '륙': ['육'], '륜': ['윤'], '률': ['율'],
  '륭': ['융'], '린': ['인'], '림': ['임'], '립': ['입'], '략': ['약'],
  '랸': ['얀'], '럄': ['얌'],

  // ㄹ -> ㄴ (모음: ㅏ, ㅐ, ㅗ, ㅚ, ㅜ, ㅡ)
  '라': ['나'], '락': ['낙'], '란': ['난'], '랄': ['날'], '람': ['남'], '랍': ['납'], '랑': ['낭'],
  '래': ['내'], '랙': ['낵'], '랜': ['낸'], '램': ['냄'], '랩': ['냅'], '랭': ['냉'],
  '로': ['노'], '록': ['녹'], '론': ['논'], '롱': ['농'], '뢰': ['뇌'],
  '루': ['누'], '룩': ['눅'], '룬': ['눈'], '룰': ['눌'], '룸': ['눔'], '룹': ['눕'], '룽': ['눙'],
  '르': ['느'], '륵': ['늑'], '른': ['는'], '를': ['늘'], '름': ['늠'], '릅': ['늡'], '릉': ['능']
};

/**
 * Returns all valid next starting letters given the previous ending character.
 * Includes the original character as the first element.
 */
export function getDueumVariants(char: string): string[] {
  if (!char || char.length !== 1) return [char];
  
  const results = new Set<string>();
  results.add(char);

  // 1. Direct table lookup
  if (SPECIAL_DUEUM_MAP[char]) {
    SPECIAL_DUEUM_MAP[char].forEach(v => results.add(v));
  }

  // 2. Algorithmic decomposition lookup
  const decomp = decomposeHangul(char);
  if (decomp) {
    const { chosungIndex, jungsungIndex, jongsungIndex } = decomp;
    const chosungChar = CHOSUNG[chosungIndex];

    // Check ㄴ (index 2) -> ㅇ (index 11) for vowels ㅕ(6), ㅛ(12), ㅠ(17), ㅣ(20), ㅖ(7)
    if (chosungChar === 'ㄴ') {
      const targetVowels = [6, 12, 17, 20, 7]; // ㅕ, ㅛ, ㅠ, ㅣ, ㅖ
      if (targetVowels.includes(jungsungIndex)) {
        results.add(composeHangul(11, jungsungIndex, jongsungIndex)); // ㅇ
      }
    }

    // Check ㄹ (index 5)
    if (chosungChar === 'ㄹ') {
      // ㅑ(2), ㅕ(6), ㅖ(7), ㅛ(12), ㅠ(17), ㅣ(20) -> ㅇ (11)
      const yVowels = [2, 6, 7, 12, 17, 20];
      if (yVowels.includes(jungsungIndex)) {
        results.add(composeHangul(11, jungsungIndex, jongsungIndex)); // ㅇ
      }

      // ㅏ(0), ㅐ(1), ㅗ(8), ㅚ(11), ㅜ(13), ㅡ(18) -> ㄴ (2)
      const simpleVowels = [0, 1, 8, 11, 13, 18];
      if (simpleVowels.includes(jungsungIndex)) {
        results.add(composeHangul(2, jungsungIndex, jongsungIndex)); // ㄴ
      }
    }
  }

  return Array.from(results);
}

/**
 * Verifies if `nextWord` can legally follow `prevWord` under Korean word chain & dueum law.
 */
export function canChainWords(prevWord: string, nextWord: string): { valid: boolean; dueumApplied: boolean; expectedStarts: string[] } {
  if (!prevWord || !nextWord) {
    return { valid: false, dueumApplied: false, expectedStarts: [] };
  }

  const lastChar = prevWord.trim().slice(-1);
  const firstChar = nextWord.trim().charAt(0);
  const validStarts = getDueumVariants(lastChar);

  const valid = validStarts.includes(firstChar);
  const dueumApplied = valid && firstChar !== lastChar;

  return {
    valid,
    dueumApplied,
    expectedStarts: validStarts
  };
}

/**
 * Known killer endings ("한방 단어" 종결 음절)
 * Endings that have very few or zero starting words in modern Korean dictionaries
 */
export const KILLER_ENDINGS = new Set([
  '녘', '릇', '듐', '튬', '늄', '륨', '쁨', '윷', '엌', '탉', '늣', '릎',
  '늬', '읖', '퓸', '슘', '뮴', '켬', '늧', '돝', '늅', '긎', '늗'
]);

export function isKillerEnding(char: string): boolean {
  return KILLER_ENDINGS.has(char);
}
