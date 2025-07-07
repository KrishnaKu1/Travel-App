import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Users,
  Shield,
  TrendingUp,
  AlertTriangle,
  Globe,
  DollarSign,
  MapPin,
  Star,
  Activity,
  Settings,
  FileText,
} from "lucide-react";

export default function AdminDashboard() {
  const platformStats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+8.2%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Agents",
      value: "1,234",
      change: "+12%",
      icon: MapPin,
      color: "text-green-600",
    },
    {
      title: "Platform Revenue",
      value: "$156,890",
      change: "+18%",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.1",
      icon: Star,
      color: "text-yellow-600",
    },
  ];

  const recentActivity = [
    {
      type: "user_registration",
      description: "New agent registration: Sarah Johnson",
      time: "2 minutes ago",
      status: "pending",
    },
    {
      type: "booking",
      description: "New booking completed: $1,250",
      time: "15 minutes ago",
      status: "success",
    },
    {
      type: "review",
      description: "Review flagged for moderation",
      time: "1 hour ago",
      status: "warning",
    },
    {
      type: "agent_verification",
      description: "Agent verification completed: Mike Chen",
      time: "2 hours ago",
      status: "success",
    },
  ];

  const pendingActions = [
    {
      title: "Agent Approvals",
      count: 23,
      description: "New agents waiting for verification",
      urgency: "high",
    },
    {
      title: "Content Moderation",
      count: 12,
      description: "Reviews and profiles to moderate",
      urgency: "medium",
    },
    {
      title: "Support Tickets",
      count: 8,
      description: "Escalated customer support issues",
      urgency: "high",
    },
    {
      title: "Payment Issues",
      count: 3,
      description: "Payment disputes to resolve",
      urgency: "critical",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Platform overview and management tools
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{stat.change}</span> from
                    last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Admin Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Pending Actions */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      Pending Actions
                    </CardTitle>
                    <CardDescription>
                      Items requiring your immediate attention
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingActions.map((action, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{action.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {action.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold mb-1">
                              {action.count}
                            </div>
                            <Badge
                              variant={
                                action.urgency === "critical"
                                  ? "destructive"
                                  : action.urgency === "high"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {action.urgency}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              activity.status === "success"
                                ? "bg-green-500"
                                : activity.status === "warning"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">
                              {activity.description}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-base">Platform Health</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">System Status</span>
                      <Badge variant="default">Operational</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">API Response Time</span>
                      <span className="text-sm font-medium">142ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Active Sessions</span>
                      <span className="text-sm font-medium">3,247</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage agents, customers, and platform users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>User management coming soon...</p>
                    <p className="text-sm">
                      CRUD operations for all platform users
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Moderation</CardTitle>
                <CardDescription>
                  Review and moderate platform content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Content moderation coming soon...</p>
                    <p className="text-sm">
                      Approve profiles, itineraries, and reviews
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>
                  Detailed insights and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <BarChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Analytics dashboard coming soon...</p>
                    <p className="text-sm">
                      Track bookings, revenue, and user engagement
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>
                  Configure platform features and policies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Platform settings coming soon...</p>
                    <p className="text-sm">
                      Manage subscriptions, notifications, and policies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reports & Audit Logs</CardTitle>
                <CardDescription>
                  Generate reports and view system audit logs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Reports and audit logs coming soon...</p>
                    <p className="text-sm">
                      Export data and track all admin actions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
