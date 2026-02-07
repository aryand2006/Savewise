import React, { useState } from 'react';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { SubscriptionList } from '@/components/dashboard/SubscriptionList';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AddSubscriptionModal } from '@/components/subscriptions/AddSubscriptionModal';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Welcome back, Aryan
          </h1>
          <p className="text-gray-400 mt-1">Here's your financial overview for February.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => navigate('/analytics')}>
             <Sparkles size={16} className="text-yellow-400" />
             AI Insights
          </Button>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus size={18} />
            Add Subscription
          </Button>
        </div>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <SubscriptionList />
        </div>
        
        <div className="lg:col-span-1 space-y-8">
            <Card className="relative overflow-hidden">
                <h3 className="font-semibold mb-4 z-10 relative">Yield Vault Performance</h3>
                <div className="h-48 bg-black/20 rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden group cursor-pointer hover:border-white/10 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center pb-8 opacity-50">
                        {/* CSS Chart */}
                        <div className="flex items-end gap-2 h-32">
                           <div className="w-3 bg-blue-500/40 rounded-t-sm h-[40%]"></div>
                           <div className="w-3 bg-blue-500/50 rounded-t-sm h-[60%]"></div>
                           <div className="w-3 bg-blue-500/60 rounded-t-sm h-[50%]"></div>
                           <div className="w-3 bg-blue-500/70 rounded-t-sm h-[70%]"></div>
                           <div className="w-3 bg-blue-500/80 rounded-t-sm h-[85%]"></div>
                           <div className="w-3 bg-blue-500 rounded-t-sm h-[95%]"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-between text-sm items-center">
                    <span className="text-gray-400">Current APY</span>
                    <span className="text-emerald-400 font-bold bg-emerald-400/10 px-2 py-1 rounded-md">5.2%</span>
                </div>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-20">
                    <Sparkles size={64} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2 relative z-10">Smart Recommendation</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed relative z-10">
                    Switching <span className="text-white font-semibold">Netflix</span> to an annual plan could save you <span className="text-emerald-400 font-bold">$45.00</span> this year.
                </p>
                <Button size="sm" variant="secondary" className="w-full relative z-10 border-white/10 hover:bg-white/10">
                    Review Details
                </Button>
            </Card>
        </div>
      </div>

      <AddSubscriptionModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
    </div>
  );
};
