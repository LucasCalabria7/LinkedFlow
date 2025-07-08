'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Bell, Shield, Building2, CreditCard, Trash2 } from 'lucide-react';
import DashboardLayout from '@/layouts/DashboardLayout';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    security: true
  });

  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    company: 'LinkedFlow Inc.',
    role: 'Administrator'
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleProfileChange = (key: string, value: string) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="mt-2 text-slate-600">Manage your account settings and preferences.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <nav className="space-y-2">
                  <a href="#profile" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </a>
                  <a href="#notifications" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </a>
                  <a href="#security" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                    <Shield className="h-4 w-4" />
                    <span>Security</span>
                  </a>
                  <a href="#organization" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                    <Building2 className="h-4 w-4" />
                    <span>Organization</span>
                  </a>
                  <a href="#billing" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                    <CreditCard className="h-4 w-4" />
                    <span>Billing</span>
                  </a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Settings */}
            <Card id="profile" className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">Profile Information</CardTitle>
                <CardDescription>Update your personal information and profile details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                      {profile.firstName[0]}{profile.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">Change Avatar</Button>
                    <p className="text-xs text-slate-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      value={profile.firstName}
                      onChange={(e) => handleProfileChange('firstName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      value={profile.lastName}
                      onChange={(e) => handleProfileChange('lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={profile.company}
                      onChange={(e) => handleProfileChange('company', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      value={profile.role}
                      onChange={(e) => handleProfileChange('role', e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card id="notifications" className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified about updates and activities.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-slate-500">Receive email updates about your account activity</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-slate-500">Get push notifications in your browser</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Summary</Label>
                    <p className="text-sm text-slate-500">Receive a weekly summary of your activities</p>
                  </div>
                  <Switch
                    checked={notifications.weekly}
                    onCheckedChange={(checked) => handleNotificationChange('weekly', checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Security Alerts</Label>
                    <p className="text-sm text-slate-500">Get notified about security events</p>
                  </div>
                  <Switch
                    checked={notifications.security}
                    onCheckedChange={(checked) => handleNotificationChange('security', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card id="security" className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">Security</CardTitle>
                <CardDescription>Manage your account security settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Password</h4>
                    <p className="text-sm text-slate-500 mb-4">Last changed 3 months ago</p>
                    <Button variant="outline">Change Password</Button>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Two-Factor Authentication</h4>
                    <p className="text-sm text-slate-500 mb-4">Add an extra layer of security to your account</p>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Active Sessions</h4>
                    <p className="text-sm text-slate-500 mb-4">Manage devices where you're signed in</p>
                    <Button variant="outline">View Sessions</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-red-600">Danger Zone</CardTitle>
                <CardDescription>Irreversible and destructive actions.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Delete Account</h4>
                    <p className="text-sm text-slate-500 mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}