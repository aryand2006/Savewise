import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { MoreVertical, ExternalLink } from 'lucide-react';

const MOCK_SUBSCRIPTIONS = [
  { id: 1, name: 'Netflix', plan: 'Premium Ultra HD', amount: 22.99, logo: 'N', color: 'bg-red-600', nextPayment: 'Feb 14, 2026', status: 'Active' },
  { id: 2, name: 'Spotify', plan: 'Duo Plan', amount: 14.99, logo: 'S', color: 'bg-green-500', nextPayment: 'Feb 20, 2026', status: 'Active' },
  { id: 3, name: 'Adobe Creative Cloud', plan: 'All Apps', amount: 54.99, logo: 'A', color: 'bg-blue-600', nextPayment: 'Feb 28, 2026', status: 'Active' },
  { id: 4, name: 'OpenAI', plan: 'ChatGPT Plus', amount: 20.00, logo: 'O', color: 'bg-emerald-600', nextPayment: 'Mar 01, 2026', status: 'Active' },
];

export const SubscriptionList = () => {
  return (
    <Card className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Active Subscriptions</h2>
        <Button variant="ghost" size="sm">View All</Button>
      </div>

      <div className="space-y-4">
        {MOCK_SUBSCRIPTIONS.map((sub) => (
          <div key={sub.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full ${sub.color} flex items-center justify-center text-white font-bold`}>
                {sub.logo}
              </div>
              <div>
                <h4 className="font-medium">{sub.name}</h4>
                <p className="text-sm text-gray-400">{sub.plan}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="font-bold">{formatCurrency(sub.amount)}</p>
                <p className="text-xs text-gray-500">Next: {sub.nextPayment}</p>
              </div>
              <button className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
