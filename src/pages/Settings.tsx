import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { User, Bell, Shield, Wallet, LogOut, Moon, HelpCircle } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account preferences and app settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <Card className="p-2 h-fit space-y-1">
          {[
            { icon: User, label: 'Profile' },
            { icon: Bell, label: 'Notifications' },
            { icon: Shield, label: 'Security' },
            { icon: Wallet, label: 'Payment Methods' },
            { icon: Moon, label: 'Appearance' },
            { icon: HelpCircle, label: 'Help & Support' },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
              <item.icon size={18} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          <div className="h-px bg-white/5 my-2" />
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left text-red-400 hover:bg-red-400/10">
            <LogOut size={18} />
            <span className="font-medium">Sign Out</span>
          </button>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <form className="space-y-4">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
                  A
                </div>
                <Button variant="outline" size="sm">Change Photo</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" defaultValue="Aryan" />
                <Input label="Last Name" defaultValue="Daga" />
              </div>
              <Input label="Email Address" defaultValue="aryan@example.com" type="email" />
              <Input label="Phone Number" defaultValue="+1 (555) 000-0000" />
              
              <div className="pt-4 text-right">
                <Button>Save Changes</Button>
              </div>
            </form>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div>
                  <h4 className="font-medium">Currency</h4>
                  <p className="text-sm text-gray-400">Display currency throughout the app</p>
                </div>
                <select className="bg-white/10 border-none rounded-lg text-sm p-2 text-white focus:ring-2 focus:ring-primary">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-gray-400">Receive weekly summary reports</p>
                </div>
                <div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
