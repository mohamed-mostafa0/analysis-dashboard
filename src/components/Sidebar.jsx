import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  ChevronRight, 
  MoreHorizontal 
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <button className={`
    w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
    ${active 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 translate-x-1' 
      : 'text-slate-500 hover:bg-slate-100/80 hover:text-slate-900 hover:translate-x-1'}
  `}>
    <Icon className={`w-5 h-5 ${active ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
    <span className="font-semibold text-sm tracking-tight">{label}</span>
    {active && <ChevronRight className="w-4 h-4 ml-auto opacity-70" />}
  </button>
);

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 w-72 bg-white border-r border-slate-200/60 z-50 transform transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          <div className="p-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/30 rotate-3 group hover:rotate-0 transition-transform cursor-pointer">
                <BarChart3 className="text-white w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tighter text-slate-900 leading-none">VELOCITY</h2>
                <p className="text-[10px] text-blue-600 font-bold uppercase tracking-[0.2em] mt-1">Sales Hub</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
            <div className="px-4 py-3">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.15em]">Core Platform</p>
            </div>
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
            <SidebarItem icon={ShoppingCart} label="Order Management" />
            <SidebarItem icon={Package} label="Inventory" />
            <SidebarItem icon={Users} label="Customers" />
            <SidebarItem icon={BarChart3} label="Insights" />
            
            <div className="px-4 pt-6 pb-3">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.15em]">Operations</p>
            </div>
            <SidebarItem icon={Bell} label="Notifications" />
            <SidebarItem icon={Settings} label="Preferences" />
          </nav>

          <div className="p-6 mt-auto">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-slate-200 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-900 flex items-center justify-center text-white font-bold shadow-md shadow-slate-200">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">John Doe</p>
                  <p className="text-[11px] text-slate-500 font-medium truncate">Standard Plan</p>
                </div>
                <MoreHorizontal className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
