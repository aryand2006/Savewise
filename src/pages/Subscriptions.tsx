import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { formatCurrency } from '@/lib/utils';
import { AddSubscriptionModal } from '@/components/subscriptions/AddSubscriptionModal';
import { useSubscriptions } from '@/context/SubscriptionContext';

// Helper to generate UI props for subs
const getSubUI = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('netflix')) return { color: 'bg-red-600', logo: 'N' };
    if (n.includes('spotify')) return { color: 'bg-green-500', logo: 'S' };
    if (n.includes('adobe')) return { color: 'bg-blue-600', logo: 'A' };
    if (n.includes('prime') || n.includes('amazon')) return { color: 'bg-blue-400', logo: 'P' };
    if (n.includes('gpt') || n.includes('openai')) return { color: 'bg-emerald-600', logo: 'O' };
    return { color: 'bg-indigo-600', logo: name.charAt(0).toUpperCase() };
};

export const Subscriptions = () => {
  const { subscriptions } = useSubscriptions();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter subscriptions based on search
  const filteredSubs = subscriptions.filter(sub => 
    sub.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (sub.category || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Subscriptions</h1>
          <p className="text-gray-400 mt-1">Manage and track your recurring payments.</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus size={18} />
          Add Subscription
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <Input 
            placeholder="Search subscriptions..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="hidden md:flex">
          <Filter size={18} />
          Filter
        </Button>
      </div>

      {/* Subscriptions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubs.map((sub) => {
          const ui = getSubUI(sub.name);
          return (
            <Card key={sub.id} className="group hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl ${ui.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                    {ui.logo}
                </div>
                <span className={`px-2 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400`}>
                    Active
                </span>
                </div>
                
                <h3 className="font-bold text-lg">{sub.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{sub.plan}</p>
                
                <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Cost</span>
                    <span className="font-semibold">{formatCurrency(sub.amount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Next Payment</span>
                    <span>{new Date(sub.nextPaymentDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Category</span>
                    <span>{sub.category}</span>
                </div>
                </div>

                <div className="mt-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="sm" variant="secondary" className="flex-1">Manage</Button>
                <Button size="sm" variant="outline" className="flex-1">Details</Button>
                </div>
            </Card>
          );
        })}
      </div>

      <AddSubscriptionModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
    </div>
  );
};
