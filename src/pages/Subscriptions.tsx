import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { formatCurrency } from '@/lib/utils';
import { AddSubscriptionModal } from '@/components/subscriptions/AddSubscriptionModal';

const MOCK_SUBSCRIPTIONS = [
  { id: 1, name: 'Netflix', plan: 'Premium Ultra HD', amount: 22.99, logo: 'N', color: 'bg-red-600', nextPayment: '2026-02-14', status: 'Active', category: 'Entertainment' },
  { id: 2, name: 'Spotify', plan: 'Duo Plan', amount: 14.99, logo: 'S', color: 'bg-green-500', nextPayment: '2026-02-20', status: 'Active', category: 'Music' },
  { id: 3, name: 'Adobe Creative Cloud', plan: 'All Apps', amount: 54.99, logo: 'A', color: 'bg-blue-600', nextPayment: '2026-02-28', status: 'Active', category: 'Software' },
  { id: 4, name: 'OpenAI', plan: 'ChatGPT Plus', amount: 20.00, logo: 'O', color: 'bg-emerald-600', nextPayment: '2026-03-01', status: 'Active', category: 'AI Tools' },
  { id: 5, name: 'Amazon Prime', plan: 'Annual', amount: 139.00, logo: 'P', color: 'bg-blue-400', nextPayment: '2026-06-15', status: 'Active', category: 'Shopping' },
  { id: 6, name: 'PlayStation Plus', plan: 'Extra', amount: 14.99, logo: 'P', color: 'bg-indigo-600', nextPayment: '2026-03-10', status: 'Paused', category: 'Gaming' },
];

export const Subscriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter subscriptions based on search
  const filteredSubs = MOCK_SUBSCRIPTIONS.filter(sub => 
    sub.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sub.category.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredSubs.map((sub) => (
          <Card key={sub.id} className="group hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl ${sub.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                {sub.logo}
              </div>
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                sub.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-yellow-500/10 text-yellow-400'
              }`}>
                {sub.status}
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
                <span>{new Date(sub.nextPayment).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
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
        ))}
      </div>

      <AddSubscriptionModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
    </div>
  );
};
