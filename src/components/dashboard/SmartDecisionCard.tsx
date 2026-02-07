import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowRight, BrainCircuit, Check, X } from 'lucide-react';
import { formatCurrency } from '@/lib/utils'; // Assuming this exists

export const SmartDecisionCard = () => {
    const [view, setView] = useState<'summary' | 'analysis'>('summary');

    if (view === 'analysis') {
        return (
            <Card className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/20 relative overflow-hidden h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2">
                        <BrainCircuit size={18} className="text-purple-400" />
                        AI Analysis
                    </h3>
                    <button onClick={() => setView('summary')} className="text-xs text-gray-400 hover:text-white">Close</button>
                </div>
                
                <div className="space-y-4 flex-1">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Current Monthly</span>
                            <span className="line-through decoration-red-400/50">$15.49/mo</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-emerald-400">Prepay Annual</span>
                            <span className="text-white">$11.60/mo</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Decision Matrix</p>
                        <div className="flex items-center gap-2 text-sm">
                            <Check size={14} className="text-emerald-400" />
                            <span>Usage frequency: High (24h/week)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Check size={14} className="text-emerald-400" />
                            <span>Churn Risk: Low (&lt;5%)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                             <Check size={14} className="text-emerald-400" />
                             <span>Cashflow Impact: Neutral</span>
                         </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-center text-sm mb-3">AI Confidence: <span className="text-emerald-400 font-bold">94% Match</span></p>
                    <div className="flex gap-2">
                         <Button size="sm" variant="outline" className="flex-1" onClick={() => setView('summary')}>Skip</Button>
                         <Button size="sm" className="flex-1 bg-white text-purple-900 hover:bg-gray-100">Switch & Save</Button>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-500/20 relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-3 opacity-20">
                <Sparkles size={64} className="text-white" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-purple-500/20">
                        Decision Support
                    </span>
                </div>
                
                <h3 className="font-semibold mb-2">Netflix Optimization</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Based on your 6-month viewing habit, identifying a <span className="text-white font-semibold">94% confidence</span> opportunity to save <span className="text-emerald-400 font-bold">$46.80</span>.
                </p>
                
                <Button 
                    size="sm" 
                    variant="secondary" 
                    className="w-full border-white/10 hover:bg-white/10 gap-2 group"
                    onClick={() => setView('analysis')}
                >
                    View Analysis <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform"/>
                </Button>
            </div>
        </Card>
    );
};
