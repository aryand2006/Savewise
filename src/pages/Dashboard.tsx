import React, { useState } from 'react';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { SubscriptionList } from '@/components/dashboard/SubscriptionList';
import { YieldVaultCard } from '@/components/dashboard/YieldVaultCard';
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
            <YieldVaultCard />

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
