import React from 'react';
import { X, BookOpen, Sparkles, ShieldAlert } from 'lucide-react';

interface DueumHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DueumHelperModal: React.FC<DueumHelperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-lg p-5 shadow-2xl border border-slate-100 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                끝말잇기 규칙 & 두음법칙 안내
              </h3>
              <p className="text-xs text-slate-500">
                국립국어원 표준 두음법칙 및 한방단어 판정 기준
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Rules Content */}
        <div className="space-y-4 text-xs text-slate-700 max-h-[60vh] overflow-y-auto pr-1">
          
          {/* Rule 1: Dueum Law */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-blue-900 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>두음법칙(頭音法則) 자동 적용 규칙</span>
            </div>
            <p className="leading-relaxed text-slate-600">
              한국어 맞춤법에 따라 단어의 첫머리에 오기 어려운 자음(ㄴ, ㄹ)이 모음의 성질에 맞춰 자동으로 부드러운 소리로 변환되어 이어질 수 있습니다:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 font-mono text-[11px]">
              <div className="bg-white p-2 rounded-lg border border-blue-100/80">
                <span className="font-bold text-blue-700 block mb-0.5">ㄹ ➔ ㅇ 변환</span>
                <span>'령' ➔ '영' (대통령 ➔ 영화)</span><br/>
                <span>'력' ➔ '역' (수력 ➔ 역사)</span><br/>
                <span>'리' ➔ '이' (요리 ➔ 이유)</span><br/>
                <span>'류' ➔ '유' (종류 ➔ 유리)</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-blue-100/80">
                <span className="font-bold text-blue-700 block mb-0.5">ㄹ ➔ ㄴ 변환</span>
                <span>'로' ➔ '노' (철로 ➔ 노래)</span><br/>
                <span>'락' ➔ '낙' (음악 ➔ 낙타)</span><br/>
                <span>'라' ➔ '나' (신라 ➔ 나비)</span><br/>
                <span>'루' ➔ '누' (선루 ➔ 눈물)</span>
              </div>
            </div>
            <p className="text-[11px] text-blue-800">
              💡 원래 글자로 시작해도 되고, 두음법칙이 적용된 변환 글자로 시작해도 모두 인정됩니다!
            </p>
          </div>

          {/* Rule 2: Killer Attack Words */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>한방 단어 (즉시 승리 판정)</span>
            </div>
            <p className="leading-relaxed text-slate-600">
              한국어 사전에 해당 글자로 시작하는 표준 명사가 없어 상대방이 단어를 이어갈 수 없는 종결 단어입니다:
            </p>
            <div className="bg-white p-2 rounded-lg border border-amber-200/60 font-mono text-[11px] space-y-1">
              <div><strong className="text-amber-700">대표 한방 글자:</strong> 녘, 릇, 듐, 튬, 늄, 륨, 쁨, 윷, 엌, 탉, 늣, 릎 등</div>
              <div className="text-slate-500">예시: 해질녘, 밥그릇, 알루미늄, 리튬, 나트륨, 기쁨, 수탉, 부엌</div>
            </div>
            <p className="text-[11px] text-amber-800">
              ⚡ 플레이어가 한방 단어를 사용하면 컴퓨터가 항복하고 즉시 승리합니다!
            </p>
          </div>

          {/* Rule 3: Word Length & Duplicates */}
          <div className="border border-slate-200 rounded-xl p-3 space-y-1.5">
            <span className="font-bold text-slate-800 block">기타 표준 경기 규칙</span>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
              <li><strong>중복 금지</strong>: 이미 게임 중에 사용된 단어는 다시 사용할 수 없습니다.</li>
              <li><strong>글자 수 제한</strong>: 기본 2글자 이상 (설정에서 3글자 모드 변경 가능).</li>
              <li><strong>제한 시간</strong>: 턴당 타이머(10초~30초) 내에 제출하지 못하면 타임오버 패배 처리됩니다.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
};
