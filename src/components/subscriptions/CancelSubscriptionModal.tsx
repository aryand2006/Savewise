import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useSubscriptions } from '@/context/SubscriptionContext';

interface CancelSubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    subscriptionId: string | null;
    subscriptionName: string;
}

export const CancelSubscriptionModal = ({ 
    isOpen, 
    onClose, 
    subscriptionId, 
    subscriptionName 
}: CancelSubscriptionModalProps) => {
    const { removeSubscription } = useSubscriptions();
    const [step, setStep] = useState<'confirm' | 'processing' | 'success'>('confirm');

    useEffect(() => {
        if (isOpen) {
            setStep('confirm');
        }
    }, [isOpen]);

    const handleConfirm = () => {
        setStep('processing');
        
        // Simulate API call to provider
        setTimeout(() => {
            if (subscriptionId) {
                removeSubscription(subscriptionId);
                setStep('success');
                
                // Close after showing success briefly
                setTimeout(() => {
                    onClose();
                }, 1500);
            }
        }, 2000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={step === 'success' ? 'Cancellation Confirmed' : 'Cancel Subscription'}>
            <div className="p-4 flex flex-col items-center text-center space-y-6">
                
                {step === 'confirm' && (
                    <>
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                             <AlertTriangle className="text-red-500" size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
                            <p className="text-gray-400">
                                You are about to cancel your <span className="text-white font-semibold">{subscriptionName}</span> subscription. 
                                Savewise will attempt to automatically process this cancellation.
                            </p>
                        </div>
                        <div className="flex gap-3 w-full pt-4">
                            <Button variant="secondary" className="flex-1" onClick={onClose}>
                                Keep Plan
                            </Button>
                            <Button variant="destructive" className="flex-1" onClick={handleConfirm}>
                                Yes, Cancel Plan
                            </Button>
                        </div>
                    </>
                )}

                {step === 'processing' && (
                    <div className="py-8 space-y-4">
                         <Loader2 className="animate-spin text-blue-500" size={48} />
                         <p className="text-gray-400">Connecting to {subscriptionName} secure portal...</p>
                    </div>
                )}

                {step === 'success' && (
                    <div className="py-8 space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center animate-in zoom-in duration-300">
                             <CheckCircle2 className="text-emerald-500" size={32} />
                        </div>
                         <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white">Unsubscribed!</h3>
                            <p className="text-gray-400">Your subscription has been successfully cancelled.</p>
                         </div>
                    </div>
                )}
            </div>
        </Modal>
    );
};
