import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    Completed: "bg-emerald-50 text-emerald-600 border-emerald-100 ring-emerald-500/10",
    Pending: "bg-amber-50 text-amber-600 border-amber-100 ring-amber-500/10",
    Shipped: "bg-blue-50 text-blue-600 border-blue-100 ring-blue-500/10",
    Cancelled: "bg-rose-50 text-rose-600 border-rose-100 ring-rose-500/10"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-bold rounded-lg border ring-1 ring-inset ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
        status === 'Completed' ? 'bg-emerald-500' : 
        status === 'Pending' ? 'bg-amber-500' : 
        status === 'Shipped' ? 'bg-blue-500' : 'bg-rose-500'
      }`} />
      {status}
    </span>
  );
};

const OrdersTable = ({ orders }) => {
  return (
    <section className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-sm">
      <div className="p-10 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Recent Transactions</h2>
          <p className="text-sm font-medium text-slate-500 mt-1">A list of the latest orders from your store</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-slate-50 text-slate-600 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-slate-100 transition-colors">
            Filter
          </button>
          <button className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
            Export All
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="py-6 px-10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Transaction ID</th>
              <th className="py-6 px-10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Customer</th>
              <th className="py-6 px-10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Date & Time</th>
              <th className="py-6 px-10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Status</th>
              <th className="py-6 px-10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr 
                key={order.id} 
                className="group hover:bg-slate-50/80 transition-colors cursor-pointer"
              >
                <td className="py-6 px-10">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">#TRX-{1000 + order.id}</span>
                </td>
                <td className="py-6 px-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm border border-white">
                      {order.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-bold text-slate-900">{order.name}</span>
                  </div>
                </td>
                <td className="py-6 px-10">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{order.date}</span>
                    <span className="text-[10px] font-medium text-slate-400">12:34 PM</span>
                  </div>
                </td>
                <td className="py-6 px-10">
                  <StatusBadge status={order.status} />
                </td>
                <td className="py-6 px-10 text-right">
                  <span className="text-lg font-bold text-slate-900 tracking-tight">{order.amount}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex justify-center">
        <button className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">
          Load More Transactions
        </button>
      </div>
    </section>
  );
};

export default OrdersTable;
