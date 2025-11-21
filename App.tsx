import React, { useState, useMemo } from 'react';
import { COURSE_CONTENT } from './constants';
import { Topic } from './types';
import { Sidebar } from './components/Sidebar';
import { CodeBlock } from './components/CodeBlock';
import { MenuIcon } from './components/Icons';

export default function App() {
  // Flatten topics to easily find next/prev or default
  const allTopics = useMemo(() => {
    return COURSE_CONTENT.chapters.flatMap(c => c.topics);
  }, []);

  const [currentTopic, setCurrentTopic] = useState<Topic>(allTopics[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handlers
  const handleTopicSelect = (topic: Topic) => {
    setCurrentTopic(topic);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find adjacent topics for navigation buttons
  const currentIndex = allTopics.findIndex(t => t.id === currentTopic.id);
  const prevTopic = allTopics[currentIndex - 1];
  const nextTopic = allTopics[currentIndex + 1];

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar 
        chapters={COURSE_CONTENT.chapters}
        currentTopicId={currentTopic.id}
        onSelectTopic={handleTopicSelect}
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0 z-30">
          <div className="flex items-center gap-3">
             <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-md"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <span className="font-semibold text-slate-800 truncate w-48">
              {currentTopic.title}
            </span>
          </div>
        </header>

        {/* Main Content Scroll Area */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50 scroll-smooth">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 lg:py-16">
            
            {/* Breadcrumb / Topic ID */}
            <div className="mb-6">
               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Topic {currentTopic.id}
               </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-8">
              {currentTopic.title}
            </h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed">
                {currentTopic.content}
              </p>

              {currentTopic.codeSnippet && (
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    代码示例 (Code Example)
                  </h3>
                  <CodeBlock code={currentTopic.codeSnippet} />
                </div>
              )}
            </div>

            {/* Navigation Footer */}
            <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevTopic ? (
                <button
                  onClick={() => handleTopicSelect(prevTopic)}
                  className="group flex flex-col items-start p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                >
                  <span className="text-xs font-medium text-slate-400 group-hover:text-blue-600 mb-1">上一节</span>
                  <span className="text-slate-700 font-semibold group-hover:text-blue-800">{prevTopic.title}</span>
                </button>
              ) : <div />}

              {nextTopic ? (
                <button
                  onClick={() => handleTopicSelect(nextTopic)}
                  className="group flex flex-col items-end p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-right"
                >
                  <span className="text-xs font-medium text-slate-400 group-hover:text-blue-600 mb-1">下一节</span>
                  <span className="text-slate-700 font-semibold group-hover:text-blue-800">{nextTopic.title}</span>
                </button>
              ) : <div />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}