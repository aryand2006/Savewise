import React, { useState } from 'react';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { SubscriptionList } from '@/components/dashboard/SubscriptionList';
import { YieldVaultCard } from '@/components/dashboard/YieldVaultCard';
import { DailyTransactions } from '@/components/dashboard/DailyTransactions';
import { SmartDecisionCard } from '@/components/dashboard/SmartDecisionCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AddSubscriptionModal } from '@/components/subscriptions/AddSubscriptionModal';
import { AddFundsModal } from '@/components/dashboard/AddFundsModal';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddFundsOpen, setIsAddFundsOpen] = useState(false);

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <DailyTransactions />
             <SmartDecisionCard />
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-8">
            <YieldVaultCard onDeposit={() => setIsAddFundsOpen(true)} />
        </div>
      </div>

      <AddSubscriptionModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
      
      <AddFundsModal
        isOpen={isAddFundsOpen}
        onClose={() => setIsAddFundsOpen(false)}
      />
    </div>
  );
};
