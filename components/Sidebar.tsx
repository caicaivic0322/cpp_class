import React from 'react';
import { Chapter, Topic } from '../types';
import { ChevronRightIcon, BookOpenIcon } from './Icons';

interface SidebarProps {
  chapters: Chapter[];
  currentTopicId: string;
  onSelectTopic: (topic: Topic) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  chapters, 
  currentTopicId, 
  onSelectTopic,
  isOpen,
  onCloseMobile
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-slate-200
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:flex-shrink-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center gap-3 h-16 px-6 border-b border-slate-100 bg-slate-50">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
             <BookOpenIcon className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-slate-800 tracking-tight">C++ MasterClass</span>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-4rem)] py-4">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="mb-6 px-4">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
                {chapter.title}
              </h3>
              <div className="space-y-0.5">
                {chapter.topics.map((topic) => {
                  const isActive = currentTopicId === topic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        onSelectTopic(topic);
                        onCloseMobile();
                      }}
                      className={`
                        w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between group
                        ${isActive 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                      `}
                    >
                      <span>{topic.title}</span>
                      {isActive && <ChevronRightIcon className="w-4 h-4 opacity-100" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          
          <div className="mt-8 px-6 text-xs text-slate-400 pb-8">
            <p>Designed for Students</p>
            <p>© 2025 C++ Learning</p>
          </div>
        </div>
      </aside>
    </>
  );
};