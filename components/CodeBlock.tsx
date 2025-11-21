import React from 'react';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="relative group my-6 rounded-lg overflow-hidden bg-slate-900 shadow-lg ring-1 ring-white/10">
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-xs text-slate-400 font-mono bg-slate-800 px-2 py-1 rounded">C++</div>
      </div>
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm leading-relaxed font-mono text-slate-50">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};