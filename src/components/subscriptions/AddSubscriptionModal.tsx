import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Sparkles, Loader2, Check, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { cn, formatCurrency } from '@/lib/utils';
import { useSubscriptions } from '@/context/SubscriptionContext';

interface Plan {
    name: string;
    price: number;
}


const MOCK_PLANS: Record<string, Plan[]> = {
    netflix: [
        { name: 'Standard with ads', price: 6.99 },
        { name: 'Standard', price: 15.49 },
        { name: 'Premium', price: 22.99 },
    ],
    hulu: [
        { name: 'Hulu (With Ads)', price: 7.99 },
        { name: 'Hulu (No Ads)', price: 17.99 },
        { name: 'Hulu + Live TV', price: 76.99 },
    ],
    spotify: [
        { name: 'Individual', price: 10.99 },
        { name: 'Duo', price: 14.99 },
        { name: 'Family', price: 16.99 },
        { name: 'Student', price: 5.99 },
    ],
};

interface AddSubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddSubscriptionModal = ({ isOpen, onClose }: AddSubscriptionModalProps) => {
    const { addSubscription } = useSubscriptions();
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [serviceName, setServiceName] = useState('');
    const [planName, setPlanName] = useState('');
    const [amount, setAmount] = useState('');
    const [nextPayment, setNextPayment] = useState('');

    
    // AI Analysis State
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [availablePlans, setAvailablePlans] = useState<Plan[] | null>(null);

    const handleAnalyze = () => {
        if (!serviceName) return;
        
        setIsAnalyzing(true);
        setAvailablePlans(null);

        // Simulate AI API call
        setTimeout(() => {
            const key = serviceName.toLowerCase();
            const plans = MOCK_PLANS[key] || [];
            
            // If strict match fails, try partial includes for demo purposes
            if (plans.length === 0) {
                 const foundKey = Object.keys(MOCK_PLANS).find(k => key.includes(k));
                 if (foundKey) {
                     setAvailablePlans(MOCK_PLANS[foundKey]);
                 } else {
                     setAvailablePlans([]); // No plans found
                 }
            } else {
                setAvailablePlans(plans);
            }
            
            setIsAnalyzing(false);
        }, 1000);
    };

    const selectPlan = (plan: Plan) => {
        setPlanName(plan.name);
        setAmount(plan.price.toString());
        setAvailablePlans(null); // Clear selection UI after picking
    };

    const resetForm = () => {
        setServiceName('');
        setPlanName('');
        setAmount('');
        setNextPayment('');
        setAvailablePlans(null);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        addSubscription({
            name: serviceName,
            plan: planName,
            amount: parseFloat(amount),
            currency: 'USD',
            nextPaymentDate: nextPayment || new Date().toISOString().split('T')[0],
            category: 'Uncategorized'
        });

        setStep('success');
    };

    if (step === 'success') {
        const annualCost = parseFloat(amount) * 12;
        const potentialYield = annualCost * 0.052; // 5.2% APY logic

        return (
            <Modal isOpen={isOpen} onClose={handleClose} title="Subscription Added">
                <div className="flex flex-col items-center py-6 animate-in fade-in zoom-in duration-300">
                    <div className="h-16 w-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                        <Check className="h-8 w-8 text-emerald-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{serviceName} Added</h3>
                    <p className="text-gray-400 mb-8">{planName} • {formatCurrency(parseFloat(amount))}/mo</p>

                    <div className="w-full bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <ShieldCheck size={18} className="text-emerald-400" />
                            <span className="font-semibold text-sm text-white">Yield Vault™ Opportunity</span>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Projected Annual Cost</span>
                                <span className="text-white font-medium">{formatCurrency(annualCost)}/yr</span>
                            </div>
                            <div className="flex justify-between text-sm bg-white/5 p-2 rounded-lg">
                                <span className="text-gray-300 flex items-center gap-2">
                                    <TrendingUp size={14} className="text-emerald-400" />
                                    Potential Yield Savings
                                </span>
                                <span className="text-emerald-400 font-bold">+{formatCurrency(potentialYield)}/yr</span>
                            </div>
                            <p className="text-xs text-blue-300/80 mt-2 leading-relaxed">
                                Tip: By funding your Yield Vault, you could offset ~5.2% of this bill automatically through XRPL DeFi yields.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full">
                        <Button variant="ghost" className="flex-1" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white" onClick={handleClose}>
                            Go to Vault <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </Modal>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Add New Subscription">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <div className="flex gap-2 items-end">
                        <div className="flex-1">
                            <Input 
                                placeholder="Service Name (e.g. Netflix)" 
                                label="Service Name" 
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                                required
                            />
                        </div>
                        <Button 
                            type="button" 
                            variant={availablePlans ? "outline" : "secondary"}
                            onClick={handleAnalyze}
                            disabled={isAnalyzing || !serviceName}
                            className="mb-[1px]"
                        >
                            {isAnalyzing ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} className={availablePlans ? "text-primary" : "text-yellow-400"} />}
                            <span className="hidden sm:inline ml-2">{isAnalyzing ? 'Analyzing...' : 'Auto-Detect Plans'}</span>
                        </Button>
                    </div>
                    
                    {/* Plans Selection Area */}
                    {availablePlans && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-200 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                            <div className="p-3 bg-white/5 border-b border-white/5 flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-300">Select a plan found by AI</span>
                                <button type="button" onClick={() => setAvailablePlans(null)} className="text-xs text-gray-500 hover:text-white">Dismiss</button>
                            </div>
                            {availablePlans.length > 0 ? (
                                <div className="max-h-48 overflow-y-auto">
                                    {availablePlans.map((plan, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => selectPlan(plan)}
                                            className="w-full text-left px-4 py-3 hover:bg-primary/20 hover:text-primary transition-colors flex justify-between items-center border-b border-white/5 last:border-0 group"
                                        >
                                            <span className="font-medium">{plan.name}</span>
                                            <span className="text-gray-400 group-hover:text-primary font-bold">{formatCurrency(plan.price)}</span>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-4 text-center text-sm text-gray-500">
                                    No plans found for this service. Please enter details manually.
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <Input 
                    placeholder="Plan Details" 
                    label="Plan Name" 
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    required
                />
                
                <div className="grid grid-cols-2 gap-4">
                    <Input 
                        type="number" 
                        placeholder="0.00" 
                        label="Monthly Cost" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        step="0.01"
                    />
                    <Input 
                        type="date" 
                        label="Next Payment"
                        value={nextPayment}
                        onChange={(e) => setNextPayment(e.target.value)}
                        required
                    />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                    <Button type="button" variant="ghost" onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Add Subscription</Button>
                </div>
            </form>
        </Modal>
    );
};
