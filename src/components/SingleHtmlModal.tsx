import React, { useState } from 'react';
import { Copy, Check, Download, ExternalLink, X, Code2 } from 'lucide-react';

interface SingleHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleHtmlModal: React.FC<SingleHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch('/standalone_game.html')
        .then((res) => res.text())
        .then((data) => {
          setHtmlContent(data);
          setLoading(false);
        })
        .catch(() => {
          setHtmlContent('<!-- 단일 HTML 코드를 불러오는 데 실패했습니다. -->');
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback copy
      const textArea = document.createElement('textarea');
      textArea.value = htmlContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'word_chain_game.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleOpenRaw = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-3xl flex flex-col max-h-[85vh] shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                단일 HTML 파일 다운로드 & 소스 코드
              </h3>
              <p className="text-xs text-slate-500">
                HTML + CSS + JavaScript가 모두 포함된 완전 독립형 단일 파일
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

        {/* Action bar */}
        <div className="px-5 py-3 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs text-slate-600">
            <span>브라우저에서 더블 클릭만으로 오프라인에서도 즉시 실행 가능합니다.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenRaw}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>새 창에서 바로 실행</span>
            </button>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-900 rounded-lg transition flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '복사 완료!' : '전체 코드 복사'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition flex items-center gap-1.5 shadow-xs shadow-amber-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>HTML 파일 다운로드 (.html)</span>
            </button>
          </div>
        </div>

        {/* Code View */}
        <div className="flex-1 p-4 bg-slate-950 overflow-auto font-mono text-xs text-slate-300">
          {loading ? (
            <div className="p-8 text-center text-slate-500">단일 HTML 파일을 불러오는 중입니다...</div>
          ) : (
            <pre className="whitespace-pre overflow-x-auto leading-relaxed select-all">
              <code>{htmlContent}</code>
            </pre>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>크기: ~32KB · 외부 서버 통신 없이 100% 로컬 동작</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg font-medium text-slate-700 transition"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
