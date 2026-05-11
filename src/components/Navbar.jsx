import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-6 md:px-12 sticky top-0 z-30">
      <div className="flex items-center gap-6">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <Menu className="w-5 h-5 text-slate-600" />
        </button>
        <div className="hidden md:flex items-center gap-3 bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-200/50 group focus-within:border-blue-600/50 focus-within:ring-4 focus-within:ring-blue-600/5 focus-within:ring-blue-600/5 transition-all">
          <Search className="w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none focus:ring-0 text-sm w-72 font-medium placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-slate-600 font-semibold text-xs uppercase tracking-widest hover:text-slate-900 transition-colors">
          Feedback
        </button>
        <div className="h-6 w-[1px] bg-slate-200 hidden sm:block"></div>
        <button className="p-2.5 hover:bg-slate-50 rounded-xl transition-colors relative group">
          <Bell className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white"></span>
        </button>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:-translate-y-0.5 active:translate-y-0">
          Download
        </button>
      </div>
    </header>
  );
};

export default Navbar;
