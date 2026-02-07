import { Home, CreditCard, PieChart, Settings, LogOut, Wallet } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-white/5 bg-surface/30 backdrop-blur-xl h-screen flex flex-col p-6 fixed left-0 top-0">
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
          <Wallet className="text-white w-5 h-5" />
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          SaveWise
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        <SidebarItem icon={Home} label="Dashboard" href="/" />
        <SidebarItem icon={CreditCard} label="Subscriptions" href="/subscriptions" />
        <SidebarItem icon={PieChart} label="Analytics" href="/analytics" />
        <SidebarItem icon={Settings} label="Settings" href="/settings" />
      </nav>

      <div className="pt-6 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 transition-colors w-full rounded-xl hover:bg-white/5">
          <LogOut size={20} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
