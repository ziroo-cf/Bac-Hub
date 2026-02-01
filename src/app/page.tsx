'use client'; //(useState)

import { useState } from 'react';
import { bacData } from './data'; 

export default function Home() {
  // first tab 
  const [activeTab, setActiveTab] = useState(bacData[0].id);

  // change tab 
  const currentSubject = bacData.find((subject) => subject.id === activeTab);
  
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e6e3] p-4 md:p-8 font-sans selection:bg-[#2563eb] selection:text-white ">
    
      {/* 1. Header Section */}
      <header className="max-w-3xl mx-auto text-center mb-12 pt-2">
        <span className="bg-[#1e3a5f] text-[#93c5fd] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block border border-[#2563eb]">
          إصدار 2026 🚀
        </span>
  
        <h1 className="text-5xl font-black text-[#ffffff] mb-4 tracking-tight">
          Bac<span className="text-[#3b82f6]">Hub</span> <span className="text-4xl">🎓</span>
        </h1>
  
        <p className="text-[#9ca3af] text-xl font-medium max-w-md mx-auto leading-relaxed">
          أحسن المصادر لي محتاج <span className="text-[#3b82f6] underline underline-offset-8">فبلاصة وحدة</span>
        </p>
      </header>

      {/* 2. Tabs Navigation */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {bacData.map((subject) => (
            <button
              key={subject.id}
              onClick={() => setActiveTab(subject.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 border
                ${activeTab === subject.id 
                  ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-lg shadow-blue-500/20 scale-105' 
                  : 'bg-[#1a1a1a] text-[#9ca3af] border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#252525] shadow-sm'}
              `}
            >
              <span className="filter grayscale-[0.2]">{subject.icon}</span>
              <span>{subject.subjectName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Resources Grid */}
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {currentSubject?.resources.map((res, index) => (
            <a
              key={index}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#1a1a1a] p-5 rounded-xl border border-[#2a2a2a] shadow-sm hover:border-[#2563eb]/50 hover:bg-[#252525] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* icons */}
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center text-xl border
                    ${res.type === 'video' 
                      ? 'bg-[#1a0f0f] text-[#ff6b6b] border-[#3a1f1f]' 
                      : 'bg-[#0f1a2a] text-[#60a5fa] border-[#1f2a3a]'}
                  `}>
                    {res.type === 'video' ? '▶️' : '📄'}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-[#e8e6e3] group-hover:text-[#3b82f6] transition-colors">
                      {res.title}
                    </h3>
                    <span className="text-xs text-[#6b7280] uppercase tracking-wider">
                      {res.type === 'video' ? 'Youtube' : 'Document'}
                    </span>
                  </div>
                </div>

                {/* arrow */}
                <span className="text-[#6b7280] group-hover:text-[#3b82f6] transition-colors font-bold">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
        
        {/* without subject yet */}
        {currentSubject?.resources.length === 0 && (
          <div className="text-center py-10 text-[#6b7280]">
            لا توجد مصادر مضافة لهذه المادة بعد.
          </div>
        )}
      </div>
    </main>
  );
}