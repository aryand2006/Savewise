import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency, getSubUI } from '@/lib/utils';
import { MoreVertical, ExternalLink } from 'lucide-react';
import { useSubscriptions } from '@/context/SubscriptionContext';
import { useNavigate } from 'react-router-dom';

export const SubscriptionList = () => {
  const { subscriptions } = useSubscriptions();
  const navigate = useNavigate();

  return (
    <Card className="flex-1">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Active Subscriptions</h2>
        <Button variant="ghost" size="sm" onClick={() => navigate('/subscriptions')}>View All</Button>
      </div>

      <div className="space-y-2">
        {subscriptions.slice(0, 3).map((sub) => {
          const ui = getSubUI(sub.name);
          return (
            <div key={sub.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${ui.color} flex items-center justify-center text-white font-bold text-xs`}>
                    {ui.logo}
                </div>
                <div>
                    <h4 className="font-medium text-sm">{sub.name}</h4>
                    <p className="text-xs text-gray-400">{sub.plan || 'Standard'}</p>
                </div>
                </div>

                <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="font-bold text-sm">{formatCurrency(sub.amount)}</p>
                    <p className="text-[10px] text-gray-500">Next: {new Date(sub.nextPaymentDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</p>
                </div>
                <button className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={16} />
                </button>
                </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
