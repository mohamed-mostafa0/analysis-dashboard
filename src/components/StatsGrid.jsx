import React from 'react';
import { DollarSign, ShoppingCart, Users, ArrowUpRight } from 'lucide-react';

const MiniSparkline = ({ color }) => (
  <svg className="w-16 h-8 overflow-visible" viewBox="0 0 100 40">
    <path
      d="M0 35 Q 25 10, 50 25 T 100 5"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const StatCard = ({ label, value, change, icon: Icon, color, bg }) => (
  <div className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group relative overflow-hidden">
    <div className="flex items-start justify-between relative z-10">
      <div className={`${bg} p-4 rounded-2xl`}>
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div className="flex flex-col items-end">
        <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
          {change} <ArrowUpRight className="w-3 h-3 ml-1" />
        </span>
        <div className="mt-2">
          <MiniSparkline color={color} />
        </div>
      </div>
    </div>
    <div className="mt-6 relative z-10">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{label}</p>
      <h3 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">{value}</h3>
    </div>
  </div>
);

const StatsGrid = () => {
  const stats = [
    { label: 'Total Revenue', value: '$24,580.00', change: '+12.5%', icon: DollarSign, color: '#3b82f6', bg: 'bg-blue-500/10' },
    { label: 'Active Orders', value: '1,245', change: '+8.2%', icon: ShoppingCart, color: '#8b5cf6', bg: 'bg-purple-500/10' },
    { label: 'New Customers', value: '326', change: '+14.1%', icon: Users, color: '#f59e0b', bg: 'bg-orange-500/10' }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </section>
  );
};

export default StatsGrid;
export { StatCard, MiniSparkline };
