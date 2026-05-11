import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { MoreHorizontal } from 'lucide-react';

const RevenueChart = ({ data }) => {
  return (
    <section className="xl:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Revenue Stream</h2>
          <p className="text-sm font-medium text-slate-500">Overview of earnings vs forecast</p>
        </div>
        <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors border border-slate-100">
          <MoreHorizontal className="w-5 h-5 text-slate-400" />
        </button>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} 
              dy={20}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{payload[0].payload.day}</p>
                      <p className="text-lg font-bold mt-1">${payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="url(#lineGradient)" 
              strokeWidth={5}
              dot={{ r: 0 }}
              activeDot={{ r: 8, strokeWidth: 4, fill: '#fff', stroke: '#3b82f6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default RevenueChart;
