import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Subscription } from '@/types';

interface SubscriptionContextType {
  subscriptions: Subscription[];
  addSubscription: (subscription: Omit<Subscription, 'id'>) => void;
  removeSubscription: (id: string) => void;
  totalMonthlySpend: number;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

// Initial Mock Data
const INITIAL_SUBSCRIPTIONS: Subscription[] = [
  {
    id: '1',
    name: 'Netflix',
    plan: 'Premium',
    amount: 22.99,
    currency: 'USD',
    nextPaymentDate: '2026-02-15',
    category: 'Entertainment'
  },
  {
    id: '2',
    name: 'Adobe Creative Cloud',
    plan: 'All Apps',
    amount: 54.99,
    currency: 'USD',
    nextPaymentDate: '2026-02-28',
    category: 'Productivity'
  },
  {
      id: '3',
      name: 'Spotify',
      plan: 'Duo',
      amount: 14.99,
      currency: 'USD',
      nextPaymentDate: '2026-02-10',
      category: 'Music'
  }
];

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(INITIAL_SUBSCRIPTIONS);

  const addSubscription = (newSub: Omit<Subscription, 'id'>) => {
    const subscription: Subscription = {
      ...newSub,
      id: Math.random().toString(36).substr(2, 9), // Simple ID generation
    };
    setSubscriptions(prev => [subscription, ...prev]);
  };

  const removeSubscription = (id: string) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
  };

  const totalMonthlySpend = subscriptions.reduce((total, sub) => total + sub.amount, 0);

  return (
    <SubscriptionContext.Provider value={{ subscriptions, addSubscription, removeSubscription, totalMonthlySpend }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscriptions = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscriptions must be used within a SubscriptionProvider');
  }
  return context;
};
