import React from 'react';
import { Card } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend 
} from 'recharts';
import { TrendingUp, AlertCircle, CheckCircle2, DollarSign, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Mock Data
const SPENDING_DATA = [
  { name: 'Subscriptions', value: 245, color: '#3b82f6' },
  { name: 'Recurring (Rent/Utils)', value: 1200, color: '#8b5cf6' },
  { name: 'Day-to-day (Food/Transport)', value: 650, color: '#10b981' },
  { name: 'Savings', value: 400, color: '#f59e0b' },
];

const MONTHLY_TREND_DATA = [
  { month: 'Sep', budget: 2400, actual: 2350 },
  { month: 'Oct', budget: 2400, actual: 2550 },
  { month: 'Nov', budget: 2500, actual: 2450 },
  { month: 'Dec', budget: 2500, actual: 2800 }, // Holiday spending high
  { month: 'Jan', budget: 2500, actual: 2200 }, // New year resolution low
  { month: 'Feb', budget: 2500, actual: 2095 }, // Current projection
];

const INSIGHTS = [
  {
    id: 1,
    type: 'warning',
    title: 'Subscription Spike Detected',
    description: 'Your subscription spending is 15% higher than last month due to the renewal of Amazon Prime.',
    action: 'Review Subscriptions'
  },
  {
    id: 2,
    type: 'success',
    title: 'Under Budget',
    description: 'Great job! You are currently $405 under your monthly budget projection.',
    action: 'Add to Savings'
  },
  {
    id: 3,
    type: 'info',
    title: 'Recurring Payment Tomorrow',
    description: 'Rent ($1,200) is scheduled to be deducted tomorrow.',
    action: 'Dismiss'
  }
];

export const Analytics = () => {
  const totalBudget = 2500;
  const currentSpend = 2095;
  const percentage = Math.round((currentSpend / totalBudget) * 100);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Intelligent Budget Planner</h1>
        <p className="text-gray-400 mt-1">AI-powered tracking for accurate financial planning.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-500/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Wallet className="text-blue-400" size={24} />
            </div>
            <span className="text-xs font-medium bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">
              Feb 2026
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Monthly Budget</p>
            <h3 className="text-2xl font-bold">{formatCurrency(totalBudget)}</h3>
          </div>
          <div className="mt-4 w-full bg-blue-950 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-400 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-xs text-blue-300 mt-2">{percentage}% utilized</p>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/20">
          <div className="flex justify-between items-start mb-4">
             <div className="p-3 bg-purple-500/20 rounded-xl">
              <DollarSign className="text-purple-400" size={24} />
            </div>
          </div>
           <div className="space-y-1">
            <p className="text-gray-400 text-sm">Actual Spending</p>
            <h3 className="text-2xl font-bold">{formatCurrency(currentSpend)}</h3>
          </div>
           <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
             <CheckCircle2 size={14} />
             <span>On track to save {formatCurrency(totalBudget - currentSpend)}</span>
           </div>
        </Card>

         <Card className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 border-emerald-500/20">
          <div className="flex justify-between items-start mb-4">
             <div className="p-3 bg-emerald-500/20 rounded-xl">
              <TrendingUp className="text-emerald-400" size={24} />
            </div>
          </div>
           <div className="space-y-1">
            <p className="text-gray-400 text-sm">Projected Savings</p>
            <h3 className="text-2xl font-bold">{formatCurrency(4860)}</h3>
          </div>
           <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
             <span>Annual projection based on current habits</span>
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Spending Breakdown */}
        <Card className="lg:col-span-2 min-h-[400px]">
          <h3 className="text-xl font-bold mb-6">Spending Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={SPENDING_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {SPENDING_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: number) => formatCurrency(value)}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {SPENDING_DATA.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold">{formatCurrency(item.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* AI Insights Panel */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h3 className="text-xl font-bold">Smart Insights</h3>
          </div>
          
          <div className="space-y-4">
            {INSIGHTS.map((insight) => (
              <Card key={insight.id} className="border-l-4 border-l-primary relative overflow-hidden">
                <div className={`absolute top-0 right-0 p-4 opacity-10`}>
                  {insight.type === 'warning' ? <AlertCircle size={48} /> : <CheckCircle2 size={48} />}
                </div>
                <h4 className="font-bold mb-1 flex items-center gap-2">
                  {insight.type === 'warning' && <AlertCircle size={16} className="text-yellow-400" />}
                  {insight.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {insight.description}
                </p>
                <button className="text-primary text-sm font-medium hover:text-blue-400 transition-colors">
                  {insight.action} →
                </button>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white">
            <h3 className="font-bold mb-2">Want deeper analysis?</h3>
            <p className="text-sm text-blue-100 mb-4">Connect your main bank account for real-time tracking.</p>
            <Button size="sm" variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-100 border-none">
              Connect Account
            </Button>
          </Card>
        </div>

        {/* Budget vs Actual Chart */}
        <Card className="lg:col-span-3 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Budget vs. Actual (6 Months)</h3>
            <div className="flex gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-3 h-3 rounded-full bg-blue-500" /> Budget
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-3 h-3 rounded-full bg-purple-500" /> Actual
                </div>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_TREND_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="month" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="budget" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="actual" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};
