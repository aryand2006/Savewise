import { TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';
import { useSubscriptions } from '@/context/SubscriptionContext';

interface StatsCardProps {
  label: string;
  value: number;
  trend?: number;
  icon: any;
  subValue?: string;
}

const StatsCard = ({ label, value, trend, icon: Icon, subValue }: StatsCardProps) => (
  <Card className="relative overflow-hidden group hover:border-white/10 transition-colors">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={64} />
    </div>
    <div className="flex flex-col gap-1">
      <p className="text-gray-400 text-sm font-medium">{label}</p>
      <h3 className="text-2xl font-bold">{formatCurrency(value)}</h3>
      {trend && (
        <div className={`flex items-center gap-1 text-sm ${trend > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{Math.abs(trend)}% vs last month</span>
        </div>
      )}
      {subValue && <p className="text-gray-500 text-xs mt-1">{subValue}</p>}
    </div>
  </Card>
);

export const DashboardStats = () => {
  const { totalMonthlySpend, subscriptions } = useSubscriptions();

  // Simulated calculations
  const totalBudget = 2500;
  const remainingBudget = Math.max(0, totalBudget - totalMonthlySpend - 1850); // 1850 for other expenses
  
  // Proj yearly yield based on 5% APY of remaining monthly * 12
  const yearlySavings = remainingBudget * 12;
  const projectedYield = yearlySavings * 0.05;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatsCard 
        label="Total Balance" 
        value={12450.00} 
        trend={2.5} 
        icon={DollarSign} 
        subValue="Available in yield vault"
      />
      <StatsCard 
        label="Monthly Cost" 
        value={totalMonthlySpend} 
        trend={-5.2} 
        icon={Calendar}
        subValue={`Across ${subscriptions.length} subscriptions`} 
      />
      <StatsCard 
        label="Proj. Savings" 
        value={yearlySavings} 
        trend={12.4} 
        icon={TrendingUp}
        subValue="Annual projection" 
      />
      <StatsCard 
        label="Est. Yield" 
        value={projectedYield} 
        trend={0} 
        icon={TrendingUp}
        subValue="~5.0% APY" 
      />
    </div>
  );
};
