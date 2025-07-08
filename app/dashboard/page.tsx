import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Building2, Activity, ArrowUpRight, Plus } from 'lucide-react';
import DashboardLayout from '@/layouts/DashboardLayout';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Active Projects',
      value: '48',
      change: '+8%',
      trend: 'up',
      icon: Building2
    },
    {
      title: 'Workflow Efficiency',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'System Health',
      value: '99.8%',
      change: '+0.1%',
      trend: 'up',
      icon: Activity
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'New project created',
      user: 'Sarah Johnson',
      time: '2 minutes ago',
      type: 'create'
    },
    {
      id: 2,
      action: 'Workflow completed',
      user: 'Mike Chen',
      time: '15 minutes ago',
      type: 'complete'
    },
    {
      id: 3,
      action: 'Team member added',
      user: 'Alex Rivera',
      time: '1 hour ago',
      type: 'user'
    },
    {
      id: 4,
      action: 'Report generated',
      user: 'Emma Davis',
      time: '2 hours ago',
      type: 'report'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="mt-2 text-slate-600">Welcome back! Here's what's happening with your organization.</p>
          </div>
          <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="flex items-center text-xs text-green-600 mt-1">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <Card className="lg:col-span-2 border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-900">Recent Activity</CardTitle>
              <CardDescription>Latest updates from your team and projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Activity className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                      <p className="text-sm text-slate-500">by {activity.user}</p>
                    </div>
                    <div className="flex-shrink-0 text-xs text-slate-400">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-900">Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Create New Workflow
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Invite Team Member
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Building2 className="h-4 w-4 mr-2" />
                Manage Projects
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-900">Performance Overview</CardTitle>
              <CardDescription>Your organization's performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Workflow Completion Rate</span>
                  <span className="text-sm font-medium text-slate-900">94.2%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Team Productivity</span>
                  <span className="text-sm font-medium text-slate-900">87.5%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '87.5%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Resource Utilization</span>
                  <span className="text-sm font-medium text-slate-900">76.8%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '76.8%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-900">Upcoming Tasks</CardTitle>
              <CardDescription>Your priority tasks for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                  <span className="text-sm text-slate-900">Review project proposals</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                  <span className="text-sm text-slate-900">Team standup meeting</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                  <span className="text-sm text-slate-900">Update workflow documentation</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                  <span className="text-sm text-slate-900">Client presentation prep</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}