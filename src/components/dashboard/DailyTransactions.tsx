import React from 'react';
import { Card } from '@/components/ui/Card';
import { ShoppingBag, Coffee, Car, AlertCircle } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const RECENT_TRANSACTIONS = [
    { id: 1, merchant: 'Whole Foods Market', category: 'Groceries', amount: 84.50, date: 'Today', icon: ShoppingBag, color: 'text-orange-400 bg-orange-400/10' },
    { id: 2, merchant: 'Starbucks', category: 'Food & Drink', amount: 6.25, date: 'Today', icon: Coffee, color: 'text-amber-700 bg-amber-700/10' },
    { id: 3, merchant: 'Uber', category: 'Transport', amount: 14.20, date: 'Yesterday', icon: Car, color: 'text-gray-400 bg-gray-400/10' },
    { id: 4, merchant: 'Trader Joes', category: 'Groceries', amount: 45.10, date: 'Yesterday', icon: ShoppingBag, color: 'text-orange-400 bg-orange-400/10' },
];

export const DailyTransactions = () => {
    return (
        <Card className="h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Daily Spend</h3>
                <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">Visa Integration Ready</span>
            </div>

            <div className="space-y-4">
                {RECENT_TRANSACTIONS.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${tx.color} flex items-center justify-center`}>
                                <tx.icon size={18} />
                            </div>
                            <div>
                                <h4 className="font-medium text-sm">{tx.merchant}</h4>
                                <p className="text-xs text-gray-400">{tx.category}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="font-bold block">{formatCurrency(tx.amount)}</span>
                            <span className="text-xs text-gray-500">{tx.date}</span>
                        </div>
                    </div>
                ))}

                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg mt-4 flex gap-3 items-start">
                    <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                    <div>
                        <p className="text-xs text-red-300 font-medium">Spending Alert</p>
                        <p className="text-[10px] text-red-400/80 leading-relaxed">
                            You've spent $140 on Groceries this week, which is 15% higher than your average.
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
};
