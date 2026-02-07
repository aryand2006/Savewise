import React from 'react';
import { Card } from '@/components/ui/Card';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, ShieldCheck } from 'lucide-react';

const PERFORMANCE_DATA = [
  { day: 'Jan 1', value: 4.80 },
  { day: 'Jan 5', value: 4.85 },
  { day: 'Jan 10', value: 4.90 },
  { day: 'Jan 15', value: 4.95 },
  { day: 'Jan 20', value: 5.05 },
  { day: 'Jan 25', value: 5.12 },
  { day: 'Feb 1', value: 5.20 },
];

export const YieldVaultCard = () => {
    return (
        <Card className="relative overflow-hidden flex flex-col min-h-[320px]">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-semibold z-10 relative flex items-center gap-2">
                        Yield Vault™
                        <ShieldCheck size={14} className="text-emerald-400" />
                    </h3>
                    <p className="text-xs text-blue-400 mt-0.5 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        Run on XRP Ledger
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-emerald-400 font-bold bg-emerald-400/10 px-2.5 py-1 rounded-md text-sm border border-emerald-400/20">
                        5.20% APY
                    </span>
                </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-6 p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="space-y-1">
                    <span className="text-gray-400 block">XRPL Validated Rate</span>
                    <span className="font-medium text-gray-200">4.50%</span>
                </div>
                <div className="space-y-1 border-l border-white/10 pl-3">
                    <span className="text-gray-400 block">Trust Line Boost</span>
                     <span className="font-medium text-emerald-400">+0.70% Boost</span>
                </div>
            </div>

            {/* Chart */}
            <div className="flex-1 w-full -ml-2 mb-2 relative">
                <div className="absolute top-0 right-4 text-[10px] text-gray-500 font-mono">30 DAY PERFORMANCE</div>
                <ResponsiveContainer width="100%" height={120}>
                    <AreaChart data={PERFORMANCE_DATA}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip 
                             contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', fontSize: '12px', borderRadius: '8px' }}
                             itemStyle={{ color: '#10b981' }}
                             formatter={(val: number) => [`${val}%`, 'APY']}
                             labelStyle={{display: 'none'}}
                             cursor={{ stroke: '#ffffff20' }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#10b981" 
                            strokeWidth={2}
                            fillOpacity={1} 
                            fill="url(#colorValue)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

             <div className="pt-4 border-t border-white/5 flex justify-between text-sm items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center ring-1 ring-emerald-500/20">
                        <TrendingUp size={16} className="text-emerald-400" />
                    </div>
                    <div>
                         <p className="text-xs text-gray-400">Lifetime Earnings</p>
                         <p className="font-bold text-white tracking-wide">+$1,240.50</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-400">Next Payout</p>
                    <p className="font-medium text-white">Mar 01</p>
                </div>
            </div>
        </Card>
    );
};
