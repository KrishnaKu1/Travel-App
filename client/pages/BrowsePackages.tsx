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
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PackageCard from "@/components/common/PackageCard";
import PackageFilters from "@/components/common/PackageFilters";
import { Search, Grid3X3, List, MapPin } from "lucide-react";
import { Package, PackageFilter } from "@shared/packages";

export default function BrowsePackages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");
  const [filters, setFilters] = useState<PackageFilter>({});

  // Mock data for packages
  const packages: Package[] = [
    {
      id: "1",
      agentId: "agent-1",
      title: "Barcelona Cultural Heritage & Gastronomy Experience",
      description:
        "Immerse yourself in Barcelona's rich culture and culinary traditions",
      shortDescription:
        "Explore Barcelona's architectural marvels and taste authentic Catalan cuisine with local experts.",
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
      languages: ["English", "Spanish", "Catalan"],
      availabilityCalendar: [],
      bookingPolicy: {
        cancellationPolicy: "Free cancellation up to 48 hours before",
        paymentTerms: "50% deposit required",
        refundPolicy: "Full refund for cancellations 48+ hours prior",
      },
      specialOffers: [
        {
          id: "1",
          title: "Early Bird Discount",
          description: "20% off for bookings made 30 days in advance",
          discountType: "percentage",
          discountValue: 20,
          validFrom: "2024-01-01",
          validTo: "2024-12-31",
          usedCount: 0,
        },
      ],
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
    {
      id: "2",
      agentId: "agent-2",
      title: "Tokyo Modern & Traditional Discovery",
      description:
        "Experience the perfect blend of ancient traditions and cutting-edge modernity",
      shortDescription:
        "From serene temples to bustling tech districts, discover all facets of Tokyo.",
      price: 2100,
      currency: "USD",
      priceType: "per_person",
      duration: { days: 10, nights: 9 },
      destinations: ["Tokyo", "Nikko", "Kamakura"],
      startLocation: "Narita Airport",
      endLocation: "Narita Airport",
      category: "cultural",
      themes: ["Traditional Culture", "Modern Cities", "Technology"],
      difficulty: "moderate",
      media: [
        {
          id: "2",
          type: "image",
          url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
          caption: "Tokyo at night",
        },
      ],
      itinerary: [],
      inclusions: [],
      exclusions: [],
      minParticipants: 1,
      maxParticipants: 8,
      fitnessLevel: "medium",
      languages: ["English", "Japanese"],
      availabilityCalendar: [],
      bookingPolicy: {
        cancellationPolicy: "Free cancellation up to 72 hours before",
        paymentTerms: "30% deposit required",
        refundPolicy: "Full refund for cancellations 72+ hours prior",
      },
      specialOffers: [],
      status: "active",
      createdAt: "2024-01-10",
      updatedAt: "2024-01-18",
      publishedAt: "2024-01-18",
      stats: {
        views: 489,
        inquiries: 35,
        bookings: 8,
        rating: 4.9,
        reviewCount: 12,
      },
    },
    {
      id: "3",
      agentId: "agent-3",
      title: "Brazilian Adventure: Rio to Amazon",
      description: "Experience Brazil's vibrant culture and pristine nature",
      shortDescription:
        "From Rio's beaches to Amazon rainforest, discover Brazil's natural wonders.",
      price: 1800,
      currency: "USD",
      priceType: "per_person",
      duration: { days: 12, nights: 11 },
      destinations: ["Rio de Janeiro", "Manaus", "Amazon Rainforest"],
      startLocation: "Rio de Janeiro Airport",
      endLocation: "Manaus Airport",
      category: "adventure",
      themes: ["Nature", "Wildlife", "Beaches", "Culture"],
      difficulty: "challenging",
      media: [
        {
          id: "3",
          type: "image",
          url: "https://images.unsplash.com/photo-1544356260-b9b1b9e31e7c?w=800&h=600&fit=crop",
          caption: "Amazon rainforest",
        },
      ],
      itinerary: [],
      inclusions: [],
      exclusions: [],
      minParticipants: 4,
      maxParticipants: 16,
      fitnessLevel: "high",
      languages: ["English", "Portuguese"],
      availabilityCalendar: [],
      bookingPolicy: {
        cancellationPolicy: "Free cancellation up to 14 days before",
        paymentTerms: "40% deposit required",
        refundPolicy: "Partial refund for cancellations 14+ days prior",
      },
      specialOffers: [],
      status: "active",
      createdAt: "2024-01-08",
      updatedAt: "2024-01-16",
      publishedAt: "2024-01-16",
      stats: {
        views: 267,
        inquiries: 19,
        bookings: 5,
        rating: 4.7,
        reviewCount: 8,
      },
    },
    {
      id: "4",
      agentId: "agent-4",
      title: "Egyptian Mysteries: Cairo & Luxor Explorer",
      description:
        "Uncover the secrets of ancient Egypt with expert archaeologists",
      shortDescription:
        "Visit pyramids, temples, and tombs with professional archaeological guides.",
      price: 1650,
      currency: "USD",
      priceType: "per_person",
      duration: { days: 8, nights: 7 },
      destinations: ["Cairo", "Luxor", "Valley of Kings"],
      startLocation: "Cairo Airport",
      endLocation: "Cairo Airport",
      category: "cultural",
      themes: ["History", "Architecture", "Archaeology"],
      difficulty: "moderate",
      media: [
        {
          id: "4",
          type: "image",
          url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800&h=600&fit=crop",
          caption: "Great Pyramid of Giza",
        },
      ],
      itinerary: [],
      inclusions: [],
      exclusions: [],
      minParticipants: 6,
      maxParticipants: 20,
      fitnessLevel: "medium",
      languages: ["English", "Arabic"],
      availabilityCalendar: [],
      bookingPolicy: {
        cancellationPolicy: "Free cancellation up to 7 days before",
        paymentTerms: "50% deposit required",
        refundPolicy: "Full refund for cancellations 7+ days prior",
      },
      specialOffers: [],
      status: "active",
      createdAt: "2024-01-12",
      updatedAt: "2024-01-19",
      publishedAt: "2024-01-19",
      stats: {
        views: 412,
        inquiries: 31,
        bookings: 9,
        rating: 4.6,
        reviewCount: 11,
      },
    },
    {
      id: "5",
      agentId: "agent-5",
      title: "London Royal Heritage & Modern Culture",
      description:
        "Experience London's royal history and contemporary cultural scene",
      shortDescription:
        "From royal palaces to modern galleries, discover London's rich heritage.",
      price: 1450,
      currency: "USD",
      priceType: "per_person",
      duration: { days: 6, nights: 5 },
      destinations: ["London", "Windsor", "Greenwich"],
      startLocation: "Heathrow Airport",
      endLocation: "Heathrow Airport",
      category: "cultural",
      themes: ["Royal Heritage", "Museums", "Art"],
      difficulty: "easy",
      media: [
        {
          id: "5",
          type: "image",
          url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
          caption: "London skyline",
        },
      ],
      itinerary: [],
      inclusions: [],
      exclusions: [],
      minParticipants: 2,
      maxParticipants: 15,
      fitnessLevel: "low",
      languages: ["English"],
      availabilityCalendar: [],
      bookingPolicy: {
        cancellationPolicy: "Free cancellation up to 48 hours before",
        paymentTerms: "30% deposit required",
        refundPolicy: "Full refund for cancellations 48+ hours prior",
      },
      specialOffers: [],
      status: "active",
      createdAt: "2024-01-14",
      updatedAt: "2024-01-21",
      publishedAt: "2024-01-21",
      stats: {
        views: 356,
        inquiries: 24,
        bookings: 7,
        rating: 4.8,
        reviewCount: 9,
      },
    },
    {
      id: "6",
      agentId: "agent-6",
      title: "Mumbai Bollywood & Street Food Adventure",
      description:
        "Dive into Mumbai's film industry and incredible street food culture",
      shortDescription:
        "Experience Bollywood studios and taste authentic Mumbai street food.",
      price: 850,
      currency: "USD",
      priceType: "per_person",
      duration: { days: 5, nights: 4 },
      destinations: ["Mumbai", "Film City"],
      startLocation: "Mumbai Airport",
      endLocation: "Mumbai Airport",
      category: "cultural",
      themes: ["Bollywood", "Street Food", "Local Culture"],
      difficulty: "easy",
      media: [
        {
          id: "6",
          type: "image",
          url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop",
          caption: "Mumbai street scene",
        },
      ],
      itinerary: [],
      inclusions: [],
      exclusions: [],
      minParticipants: 3,
      maxParticipants: 12,
      fitnessLevel: "low",
      languages: ["English", "Hindi", "Marathi"],
      availabilityCalendar: [],
      bookingPolicy: {
        cancellationPolicy: "Free cancellation up to 24 hours before",
        paymentTerms: "25% deposit required",
        refundPolicy: "Full refund for cancellations 24+ hours prior",
      },
      specialOffers: [],
      status: "active",
      createdAt: "2024-01-16",
      updatedAt: "2024-01-22",
      publishedAt: "2024-01-22",
      stats: {
        views: 198,
        inquiries: 16,
        bookings: 4,
        rating: 4.7,
        reviewCount: 6,
      },
    },
  ];

  const handleFiltersChange = (newFilters: PackageFilter) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const getActiveFiltersCount = () => {
    return Object.keys(filters).filter((key) => {
      const value = filters[key as keyof PackageFilter];
      return Array.isArray(value) ? value.length > 0 : value !== undefined;
    }).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Travel Packages</h1>
          <p className="text-muted-foreground">
            Discover curated travel experiences from expert local agents
          </p>
        </div>

        {/* Search and Quick Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search packages, destinations, or themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="duration-short">
                    Duration: Short to Long
                  </SelectItem>
                  <SelectItem value="duration-long">
                    Duration: Long to Short
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick filter badges */}
          {getActiveFiltersCount() > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm text-muted-foreground">
                Active filters:
              </span>
              {filters.destinations?.map((dest) => (
                <Badge key={dest} variant="secondary">
                  <MapPin className="h-3 w-3 mr-1" />
                  {dest}
                </Badge>
              ))}
              {filters.category?.map((cat) => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
              {filters.priceRange && (
                <Badge variant="secondary">
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
                className="h-6 px-2 text-xs"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <PackageFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-muted-foreground">
                  Showing {packages.length} packages
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results grid */}
            <div
              className={`space-y-6 ${
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 space-y-0"
                  : ""
              }`}
            >
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  package={pkg}
                  variant={viewMode}
                  showAgent={true}
                />
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
