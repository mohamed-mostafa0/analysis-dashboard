import React from 'react';

const PerformanceGauge = ({ percentage = 75 }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <section className="bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm flex flex-col">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Performance</h2>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle 
              cx="96" cy="96" r={radius} 
              stroke="currentColor" strokeWidth="12" fill="transparent" 
              className="text-slate-100" 
            />
            <circle 
              cx="96" cy="96" r={radius} 
              stroke="currentColor" strokeWidth="12" fill="transparent" 
              strokeDasharray={circumference} 
              strokeDashoffset={offset} 
              strokeLinecap="round" 
              className="text-blue-600 transition-all duration-1000" 
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-slate-900 tracking-tight">{percentage}%</span>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Efficiency</span>
          </div>
        </div>
        <div className="mt-12 space-y-4 w-full">
          {[
            { label: 'Conversion', value: '4.2%', color: 'bg-emerald-500' },
            { label: 'Retention', value: '88%', color: 'bg-blue-500' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-xs font-bold text-slate-600">{item.label}</span>
              </div>
              <span className="text-sm font-bold text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceGauge;
