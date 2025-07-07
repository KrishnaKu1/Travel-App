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
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Calendar,
  Users,
  MapPin,
  Star,
  TrendingUp,
  Plus,
  Eye,
  MessageCircle,
  DollarSign,
  Clock,
} from "lucide-react";

export default function AgentDashboard() {
  const stats = [
    {
      title: "Total Bookings",
      value: "127",
      change: "+12%",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "Revenue This Month",
      value: "$15,420",
      change: "+18%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Itineraries",
      value: "23",
      change: "+5%",
      icon: MapPin,
      color: "text-purple-600",
    },
    {
      title: "Average Rating",
      value: "4.9",
      change: "+0.2",
      icon: Star,
      color: "text-yellow-600",
    },
  ];

  const recentBookings = [
    {
      id: "1",
      customer: "Sarah Johnson",
      destination: "Barcelona City Tour",
      date: "2024-03-15",
      status: "confirmed",
      amount: "$850",
    },
    {
      id: "2",
      customer: "Mike Chen",
      destination: "Mediterranean Coast",
      date: "2024-03-20",
      status: "pending",
      amount: "$1,200",
    },
    {
      id: "3",
      customer: "Emma Wilson",
      destination: "Gaudi Architecture Tour",
      date: "2024-03-25",
      status: "confirmed",
      amount: "$650",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Agent Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Sofia! Here's your business overview.
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              View Public Profile
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Itinerary
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
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

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="itineraries">Itineraries</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Bookings */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>
                      Your latest customer bookings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{booking.customer}</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.destination}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {booking.date}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{booking.amount}</p>
                            <Badge
                              variant={
                                booking.status === "confirmed"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start">
                      <Plus className="mr-2 h-4 w-4" />
                      Create New Itinerary
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Message Customers
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart className="mr-2 h-4 w-4" />
                      View Analytics
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Manage Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Profile Completion */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-base">
                      Profile Completion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} />
                      <p className="text-xs text-muted-foreground">
                        Complete your profile to attract more customers
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="itineraries">
            <Card>
              <CardHeader>
                <CardTitle>My Itineraries</CardTitle>
                <CardDescription>
                  Manage your travel itineraries and packages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Itinerary management coming soon...</p>
                    <p className="text-sm">
                      Create, edit, and manage your travel packages
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>
                  View and manage customer bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Booking management coming soon...</p>
                    <p className="text-sm">
                      Track all your customer bookings and payments
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  Communicate with your customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Customer management coming soon...</p>
                    <p className="text-sm">
                      Manage inquiries, reviews, and communications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your agent profile and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Profile management coming soon...</p>
                    <p className="text-sm">
                      Update your profile, credentials, and settings
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
