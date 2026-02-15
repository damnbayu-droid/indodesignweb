import { cn } from "@/lib/utils";

interface CodeWindowProps {
    className?: string;
    code?: string;
    filename?: string;
}

export function CodeWindow({ className, filename = "App.tsx", code }: CodeWindowProps) {
    const defaultCode = `import React from 'react';

export default function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <p>Building the future...</p>
    </div>
  );
}`;

    return (
        <div className={cn("rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl font-mono text-sm", className)}>
            {/* Code Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#2a2a2a] border-b border-white/5">
                <span className="text-xs text-gray-400">{filename}</span>
                <div className="flex gap-1.5 opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
            </div>

            {/* Code Content */}
            <div className="p-4 overflow-x-auto text-gray-300">
                <pre>
                    <code className="language-tsx">
                        {code || defaultCode}
                    </code>
                </pre>
            </div>
        </div>
    );
}
