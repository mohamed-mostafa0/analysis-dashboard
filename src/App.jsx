import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatsGrid from './components/StatsGrid';
import RevenueChart from './components/RevenueChart';
import PerformanceGauge from './components/PerformanceGauge';
import OrdersTable from './components/OrdersTable';

const salesData = [
  { day: "Mon", sales: 1200 },
  { day: "Tue", sales: 1800 },
  { day: "Wed", sales: 1500 },
  { day: "Thu", sales: 2200 },
  { day: "Fri", sales: 2800 },
  { day: "Sat", sales: 3200 },
  { day: "Sun", sales: 2900 }
];

const recentOrders = [
  { id: 1, name: "Ahmed Ali", date: "2026-05-10", status: "Completed", amount: "$120" },
  { id: 2, name: "Sara Mohamed", date: "2026-05-09", status: "Pending", amount: "$85" },
  { id: 3, name: "Omar Hassan", date: "2026-05-09", status: "Shipped", amount: "$240" },
  { id: 4, name: "Lina Adel", date: "2026-05-08", status: "Completed", amount: "$310" },
  { id: 5, name: "Karim Samir", date: "2026-05-08", status: "Cancelled", amount: "$55" }
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-600/10 selection:text-blue-600">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-6 md:p-12">
          <div className="max-w-[1400px] mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-1">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900">Velocity Overview</h1>
                <p className="text-slate-500 font-medium">Monitoring your performance in real-time.</p>
              </div>
              <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
                {['Daily', 'Weekly', 'Monthly'].map((period) => (
                  <button 
                    key={period}
                    className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      period === 'Weekly' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <StatsGrid />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <RevenueChart data={salesData} />
              <PerformanceGauge percentage={75} />
            </div>

            <OrdersTable orders={recentOrders} />
          </div>
        </main>
      </div>
    </div>
  );
}
