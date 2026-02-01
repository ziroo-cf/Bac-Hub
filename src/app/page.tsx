'use client'; //(useState)

import { useState } from 'react';
import { bacData } from './data'; // تأكد من مسار الملف الصحيح

export default function Home() {
  // first tab 
  const [activeTab, setActiveTab] = useState(bacData[0].id);

  // change tab 
  const currentSubject = bacData.find((subject) => subject.id === activeTab);

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      
      {/* 1. Header Section */}
      <header className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight">
          Bac<span className="text-blue-500">Hub</span> 🎓
        </h1>
        <p className="text-gray-500 text-lg">أحسن المصادر لي محتاج فبلاصة وحدة</p>
      </header>

      {/* 2. Tabs Navigation */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {bacData.map((subject) => (
            <button
              key={subject.id}
              onClick={() => setActiveTab(subject.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                ${activeTab === subject.id 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'}
              `}
            >
              <span>{subject.icon}</span>
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
              className="group block bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* icons */}
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center text-xl
                    ${res.type === 'video' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}
                  `}>
                    {res.type === 'video' ? '▶️' : '📄'}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                      {res.title}
                    </h3>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {res.type === 'video' ? 'Youtube' : 'Document'}
                    </span>
                  </div>
                </div>

                {/* arrow */}
                <span className="text-gray-300 group-hover:text-blue-500 transition-colors">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
        
        {/* without subject yet */}
        {currentSubject?.resources.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            لا توجد مصادر مضافة لهذه المادة بعد.
          </div>
        )}
      </div>

    </main>
  );
}