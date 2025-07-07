import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AgentCard from "@/components/common/AgentCard";
import {
  Search,
  Filter,
  MapPin,
  Star,
  SlidersHorizontal,
  Grid3X3,
  List,
} from "lucide-react";

export default function BrowseAgents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [minRating, setMinRating] = useState([4.0]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock data for agents
  const agents = [
    {
      id: "1",
      name: "Sofia Rodriguez",
      location: "Barcelona, Spain",
      rating: 4.9,
      reviewCount: 127,
      specialties: ["Cultural Tours", "Food & Wine", "Architecture"],
      profileImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b4c0?w=400&h=400&fit=crop&crop=face",
      verified: true,
      responseTime: "2 hours",
      priceRange: "$150-300/day",
      completedTrips: 89,
    },
    {
      id: "2",
      name: "Kenji Tanaka",
      location: "Tokyo, Japan",
      rating: 5.0,
      reviewCount: 89,
      specialties: [
        "Traditional Culture",
        "Modern Cities",
        "Cherry Blossom Tours",
      ],
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      verified: true,
      responseTime: "1 hour",
      priceRange: "$200-400/day",
      completedTrips: 156,
    },
    {
      id: "3",
      name: "Maria Santos",
      location: "Rio de Janeiro, Brazil",
      rating: 4.8,
      reviewCount: 156,
      specialties: ["Adventure", "Nature", "Beaches"],
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      verified: true,
      responseTime: "3 hours",
      priceRange: "$100-250/day",
      completedTrips: 73,
    },
    {
      id: "4",
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      rating: 4.7,
      reviewCount: 203,
      specialties: ["Historical Sites", "Desert Safari", "Cultural Heritage"],
      verified: true,
      responseTime: "4 hours",
      priceRange: "$80-200/day",
      completedTrips: 94,
    },
    {
      id: "5",
      name: "Emma Thompson",
      location: "London, UK",
      rating: 4.9,
      reviewCount: 178,
      specialties: ["City Tours", "Museums", "Royal Heritage"],
      verified: true,
      responseTime: "1 hour",
      priceRange: "$180-350/day",
      completedTrips: 112,
    },
    {
      id: "6",
      name: "Raj Patel",
      location: "Mumbai, India",
      rating: 4.8,
      reviewCount: 145,
      specialties: ["Spiritual Tours", "Street Food", "Bollywood"],
      verified: true,
      responseTime: "2 hours",
      priceRange: "$60-150/day",
      completedTrips: 87,
    },
  ];

  const locations = [
    "All Locations",
    "Europe",
    "Asia",
    "Americas",
    "Africa",
    "Oceania",
    "Barcelona, Spain",
    "Tokyo, Japan",
    "Rio de Janeiro, Brazil",
    "Cairo, Egypt",
    "London, UK",
    "Mumbai, India",
  ];

  const specialties = [
    "All Specialties",
    "Cultural Tours",
    "Adventure",
    "Food & Wine",
    "Nature",
    "Historical Sites",
    "City Tours",
    "Beaches",
    "Spiritual Tours",
    "Wildlife",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Find Your Perfect Travel Agent
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Connect with verified local experts from around the world
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="lg:sticky lg:top-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search agents..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Separator />

                {/* Location */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Location
                  </label>
                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Specialty */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Specialty
                  </label>
                  <Select
                    value={selectedSpecialty}
                    onValueChange={setSelectedSpecialty}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}/day
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    min={0}
                    step={50}
                    className="w-full"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Minimum Rating: {minRating[0].toFixed(1)}★
                  </label>
                  <Slider
                    value={minRating}
                    onValueChange={setMinRating}
                    max={5}
                    min={1}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Results header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Showing {agents.length} agents
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Select defaultValue="rating">
                  <SelectTrigger className="w-36 md:w-40 h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Top Rated</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none h-9 w-9 p-0"
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none h-9 w-9 p-0"
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results grid */}
            <div
              className={`grid gap-4 md:gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
