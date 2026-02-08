import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Loader2, Check, CreditCard, Landmark, Wallet, Smartphone, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn exists, used in other files

interface AddFundsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type PaymentMethod = 'bank' | 'card' | 'apple' | 'google' | 'crypto';

export const AddFundsModal = ({ isOpen, onClose }: AddFundsModalProps) => {
    const [step, setStep] = useState<'amount' | 'method' | 'processing' | 'success'>('amount');
    const [amount, setAmount] = useState('');
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

    const presetAmounts = [50, 100, 500, 1000];

    const handleAmountSubmit = () => {
        if (!amount) return;
        setStep('method');
    };

    const handlePayment = (method: PaymentMethod) => {
        setSelectedMethod(method);
        setStep('processing');
        // Simulate API call
        setTimeout(() => {
            setStep('success');
        }, 2000);
    };

    const handleClose = () => {
        setStep('amount');
        setAmount('');
        setSelectedMethod(null);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Add Funds to Yield Vault™">
            <div className="space-y-6">
                
                {/* Step 1: Amount Selection */}
                {step === 'amount' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="text-center space-y-2">
                             <label className="text-sm text-gray-400">How much would you like to deposit?</label>
                            <div className="relative max-w-[200px] mx-auto">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-white h-8 w-8" />
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0"
                                    className="w-full bg-transparent border-none text-center text-5xl font-bold text-white placeholder:text-gray-700 focus:outline-none focus:ring-0 appearance-none m-0"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            {presetAmounts.map((amt) => (
                                <button
                                    key={amt}
                                    onClick={() => setAmount(amt.toString())}
                                    className="py-2 px-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium transition-colors"
                                >
                                    ${amt}
                                </button>
                            ))}
                        </div>

                        <Button 
                            className="w-full h-12 text-lg" 
                            disabled={!amount}
                            onClick={handleAmountSubmit}
                        >
                            Select Payment Method
                        </Button>
                    </div>
                )}

                {/* Step 2: Payment Method */}
                {step === 'method' && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-300">
                        <div className="text-center mb-6">
                            <span className="text-3xl font-bold text-white">${amount}</span>
                            <p className="text-gray-400 text-sm">Select funding source</p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <button
                                onClick={() => handlePayment('apple')}
                                className="group flex items-center justify-between p-4 rounded-xl bg-black border border-white/10 hover:border-white/30 transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-white text-black">
                                        <div className="font-bold font-sans text-xs tracking-tighter">Pay</div>
                                    </div>
                                    <span className="font-medium">Apple Pay</span>
                                </div>
                                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">Fastest</span>
                            </button>

                            <button
                                onClick={() => handlePayment('crypto')}
                                className="group flex items-center justify-between p-4 rounded-xl bg-[#232323] border border-white/10 hover:border-blue-400/50 transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                                        <Wallet size={18} />
                                    </div>
                                    <span className="font-medium">Crypto Wallet</span>
                                </div>
                                <span className="text-xs text-gray-400 group-hover:text-blue-400">Connect Wallet</span>
                            </button>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handlePayment('card')}
                                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                >
                                    <CreditCard size={24} className="text-purple-400" />
                                    <span className="text-sm">Debit Card</span>
                                </button>
                                <button
                                    onClick={() => handlePayment('bank')}
                                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                >
                                    <Landmark size={24} className="text-emerald-400" />
                                    <span className="text-sm">Bank (ACH)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Processing */}
                {step === 'processing' && (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-in fade-in zoom-in duration-300">
                        <Loader2 className="h-16 w-16 text-emerald-400 animate-spin" />
                        <div className="text-center space-y-1">
                            <h3 className="font-semibold text-lg">Processing Deposit...</h3>
                            <p className="text-sm text-gray-400">Securing funds on XRP Ledger</p>
                        </div>
                    </div>
                )}

                {/* Step 4: Success */}
                {step === 'success' && (
                    <div className="flex flex-col items-center justify-center py-8 space-y-6 animate-in fade-in zoom-in duration-300">
                        <div className="h-20 w-20 bg-emerald-500/20 rounded-full flex items-center justify-center">
                            <Check className="h-10 w-10 text-emerald-400" />
                        </div>
                        <div className="text-center space-y-2">
                            <h3 className="font-bold text-2xl text-white">Deposit Successful!</h3>
                            <p className="text-gray-400">
                                <span className="text-white font-semibold">${amount}</span> has been added to your Yield Vault.
                            </p>
                        </div>
                        <div className="w-full p-4 bg-white/5 rounded-lg border border-white/10 flex justify-between items-center text-sm">
                            <span className="text-gray-400">New Est. Monthly Yield</span>
                            <span className="text-emerald-400 font-bold">
                                +${((Number(amount) * 0.052) / 12).toFixed(2)}/mo
                            </span>
                        </div>
                        <Button className="w-full" onClick={handleClose}>
                            Return to Dashboard
                        </Button>
                    </div>
                )}

            </div>
        </Modal>
    );
};
