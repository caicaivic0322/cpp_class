import { FC } from 'react';
import { Chapter, Topic } from '../types';
import { ChevronRightIcon, BookOpenIcon } from './Icons';

interface SidebarProps {
  chapters: Chapter[];
  currentTopicId: string;
  onSelectTopic: (topic: Topic) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ 
  chapters, 
  currentTopicId, 
  onSelectTopic, 
  isOpen, 
  onCloseMobile 
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onCloseMobile}
      />

      {/* Sidebar Container */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out flex flex-col h-full border-r border-slate-800 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0 bg-slate-900">
          <BookOpenIcon className="w-6 h-6 text-blue-500 mr-3" />
          <span className="font-bold text-lg text-white tracking-tight">C++语法基础 by vic cai</span>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-6 px-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="space-y-6">
            {chapters.map((chapter) => (
              <div key={chapter.id}>
                <h3 className="px-3 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {chapter.title}
                </h3>
                <div className="space-y-0.5">
                  {chapter.topics.map((topic) => {
                    const isActive = currentTopicId === topic.id;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => onSelectTopic(topic)}
                        className={`w-full flex items-center text-left px-3 py-2 rounded-lg text-sm transition-colors group ${
                          isActive 
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' 
                            : 'hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span className={`mr-3 font-mono text-xs ${isActive ? 'text-blue-200' : 'text-slate-500 group-hover:text-slate-400'}`}>
                          {topic.id}
                        </span>
                        <span className="truncate">{topic.title.split(' ').slice(1).join(' ')}</span>
                        {isActive && <ChevronRightIcon className="w-4 h-4 ml-auto opacity-75" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-slate-800 text-xs text-center text-slate-500">
          <div className="mb-1">&copy; {new Date().getFullYear()} C++语法基础 by vic cai</div>
          <div>tel：15592899868</div>
        </div>
      </aside>
    </>
  );
};