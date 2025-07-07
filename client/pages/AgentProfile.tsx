import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PackageCard from "@/components/common/PackageCard";
import {
  MapPin,
  Star,
  Calendar,
  Users,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Award,
  CheckCircle,
  Camera,
  Languages,
  Briefcase,
  Heart,
  Share2,
  Flag,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export default function AgentProfile() {
  const { id } = useParams();
  const [showContactDialog, setShowContactDialog] = useState(false);

  // Mock agent data - in real app, fetch by ID
  const agent = {
    id: "1",
    name: "Sofia Rodriguez",
    title: "Barcelona Travel Expert",
    company: "Mediterranean Journeys",
    location: "Barcelona, Spain",
    profileImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b4c0?w=400&h=400&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 127,
    responseTime: "2 hours",
    languages: ["English", "Spanish", "Catalan", "French"],
    experience: "8+ years",
    completedTrips: 89,
    verified: true,
    memberSince: "2018",
    specialties: [
      "Cultural Tours",
      "Food & Wine",
      "Architecture",
      "Art & Museums",
      "Family Travel",
    ],
    destinations: [
      "Barcelona",
      "Spain",
      "Valencia",
      "Seville",
      "Madrid",
      "Mallorca",
    ],
    description:
      "Passionate about showcasing the rich culture and hidden gems of Barcelona and Spain. As a local expert with over 8 years of experience, I specialize in creating authentic experiences that go beyond typical tourist attractions. From Gaudí's architectural masterpieces to secret tapas bars, I'll help you discover the real Barcelona.",
    achievements: [
      "Top 10 Barcelona Agent 2023",
      "Cultural Tourism Expert Certification",
      "Michelin Guide Certified",
      "Family Travel Specialist",
    ],
    stats: {
      responseRate: 98,
      repeatCustomers: 65,
      averageTripRating: 4.9,
      bookingSuccess: 95,
    },
    contact: {
      website: "www.mediterraneanjourneys.com",
      phone: "+34 123 456 789",
      email: "sofia@mediterraneanjourneys.com",
    },
    reviews: [
      {
        id: "1",
        customerName: "John Smith",
        rating: 5,
        date: "2024-01-15",
        comment:
          "Sofia created an absolutely incredible itinerary for our Barcelona trip. Her local knowledge and attention to detail made our vacation unforgettable. Highly recommended!",
        tripType: "Cultural Tour",
      },
      {
        id: "2",
        customerName: "Emma Johnson",
        rating: 5,
        date: "2024-01-10",
        comment:
          "Amazing experience! Sofia took us to hidden gems we never would have found on our own. The food recommendations were spot on, and her passion for Barcelona really showed.",
        tripType: "Food & Wine Tour",
      },
      {
        id: "3",
        customerName: "Michael Chen",
        rating: 4,
        date: "2024-01-05",
        comment:
          "Great service and local expertise. Sofia was very responsive and helped us customize our itinerary perfectly for our family with young kids.",
        tripType: "Family Tour",
      },
    ],
  };

  // Mock packages for this agent
  const agentPackages = [
    {
      id: "1",
      agentId: "1",
      title: "Barcelona Cultural Heritage & Gastronomy Experience",
      description: "Immerse yourself in Barcelona's rich culture",
      shortDescription:
        "Explore Barcelona's architectural marvels and taste authentic Catalan cuisine",
      price: 1250,
      currency: "USD",
      priceType: "per_person",
      originalPrice: 1450,
      duration: { days: 7, nights: 6 },
      destinations: ["Barcelona", "Girona", "Montserrat"],
      startLocation: "Barcelona Airport",
      endLocation: "Barcelona Airport",
      category: "cultural",
      themes: ["Food & Wine", "Architecture", "History"],
      difficulty: "easy",
      media: [
        {
          id: "1",
          type: "image",
          url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
          caption: "Barcelona skyline",
        },
      ],
      itinerary: [],
      inclusions: [],
      exclusions: [],
      minParticipants: 2,
      maxParticipants: 12,
      fitnessLevel: "low",
      languages: ["English", "Spanish"],
      availabilityCalendar: [],
      bookingPolicy: {
        cancellationPolicy: "Free cancellation up to 48 hours before",
        paymentTerms: "50% deposit required",
        refundPolicy: "Full refund for cancellations 48+ hours prior",
      },
      specialOffers: [],
      status: "active",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-20",
      publishedAt: "2024-01-20",
      stats: {
        views: 324,
        inquiries: 28,
        bookings: 12,
        rating: 4.8,
        reviewCount: 15,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cover Image */}
      <div className="relative h-48 md:h-64 lg:h-80">
        <img
          src={agent.coverImage}
          alt={`${agent.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="relative -mt-16 md:-mt-20 mb-8">
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-4 ring-background">
                  <AvatarImage src={agent.profileImage} alt={agent.name} />
                  <AvatarFallback className="text-2xl">
                    {agent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {agent.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl md:text-3xl font-bold">
                        {agent.name}
                      </h1>
                      {agent.verified && (
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <Award className="h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg font-medium text-primary mb-1">
                      {agent.title}
                    </p>
                    <p className="text-muted-foreground mb-2">
                      {agent.company}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{agent.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Member since {agent.memberSince}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{agent.rating}</span>
                        <span className="text-muted-foreground">
                          ({agent.reviewCount} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          Responds in {agent.responseTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 md:min-w-[200px]">
                    <Dialog
                      open={showContactDialog}
                      onOpenChange={setShowContactDialog}
                    >
                      <DialogTrigger asChild>
                        <Button size="lg" className="w-full">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Contact Agent
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Contact {agent.name}</DialogTitle>
                          <DialogDescription>
                            Send a message to discuss your travel plans
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Name</Label>
                              <Input id="name" placeholder="Your name" />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="travelers">Travelers</Label>
                              <Input
                                id="travelers"
                                type="number"
                                placeholder="2"
                                min="1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="date">Travel Date</Label>
                              <Input id="date" type="date" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              placeholder="Tell me about your travel plans..."
                              rows={4}
                            />
                          </div>
                          <Button className="w-full">Send Message</Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {agent.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {agent.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Destinations</h4>
                        <div className="flex flex-wrap gap-2">
                          {agent.destinations.map((destination, index) => (
                            <Badge key={index} variant="outline">
                              {destination}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {agent.languages.map((language, index) => (
                            <Badge key={index} variant="outline">
                              <Languages className="h-3 w-3 mr-1" />
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Achievements</h4>
                        <ul className="space-y-1">
                          {agent.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-yellow-500" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="packages" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">
                    {agent.name}'s Packages
                  </h3>
                  <Badge variant="secondary">
                    {agentPackages.length} packages
                  </Badge>
                </div>

                <div className="grid gap-6">
                  {agentPackages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      package={pkg}
                      showAgent={false}
                      variant="list"
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-6">
                  {agent.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-semibold">
                              {review.customerName}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {review.tripType}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {review.comment}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="stats" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Response Rate</span>
                          <span>{agent.stats.responseRate}%</span>
                        </div>
                        <Progress value={agent.stats.responseRate} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Repeat Customers</span>
                          <span>{agent.stats.repeatCustomers}%</span>
                        </div>
                        <Progress value={agent.stats.repeatCustomers} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Booking Success</span>
                          <span>{agent.stats.bookingSuccess}%</span>
                        </div>
                        <Progress value={agent.stats.bookingSuccess} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Numbers</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Completed Trips
                        </span>
                        <span className="font-semibold">
                          {agent.completedTrips}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Years Experience
                        </span>
                        <span className="font-semibold">
                          {agent.experience}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Average Trip Rating
                        </span>
                        <span className="font-semibold">
                          {agent.stats.averageTripRating}/5
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Languages Spoken
                        </span>
                        <span className="font-semibold">
                          {agent.languages.length}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Completed Trips</span>
                  </div>
                  <span className="font-semibold">{agent.completedTrips}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Response Time</span>
                  </div>
                  <span className="font-semibold">{agent.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Experience</span>
                  </div>
                  <span className="font-semibold">{agent.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Languages</span>
                  </div>
                  <span className="font-semibold">
                    {agent.languages.length}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://${agent.contact.website}`}
                    className="text-primary hover:underline text-sm"
                  >
                    {agent.contact.website}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{agent.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{agent.contact.email}</span>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trust & Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Identity Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Background Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Licensed Professional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Insured Business</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
