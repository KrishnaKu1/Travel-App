import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plane,
  Menu,
  User,
  Settings,
  LogOut,
  MapPin,
  Star,
  Calendar,
} from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"customer" | "agent" | "admin">(
    "customer",
  );

  const navigation = [
    { name: "Browse Agents", href: "/browse-agents", icon: MapPin },
    { name: "Travel Packages", href: "/packages", icon: Calendar },
    { name: "Top Destinations", href: "/destinations", icon: Star },
    { name: "How it Works", href: "/how-it-works", icon: Calendar },
  ];

  const agentNavigation = [
    { name: "Dashboard", href: "/agent/dashboard", icon: Settings },
    { name: "My Packages", href: "/agent/packages", icon: Calendar },
    { name: "My Itineraries", href: "/agent/itineraries", icon: MapPin },
    { name: "Customers", href: "/agent/customers", icon: User },
  ];

  const currentNav = userType === "agent" ? agentNavigation : navigation;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <Plane className="h-8 w-8 text-primary" />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-accent"></div>
          </div>
          <span className="text-xl font-bold text-foreground">Wanderly</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {currentNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">John Doe</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      john@example.com
                    </p>
                    <Badge variant="secondary" className="w-fit text-xs">
                      {userType === "agent"
                        ? "Travel Agent"
                        : userType === "admin"
                          ? "Admin"
                          : "Customer"}
                    </Badge>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <Plane className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">Wanderly</span>
                </div>

                <nav className="flex flex-col space-y-2">
                  {currentNav.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-2 p-2 rounded-md text-sm font-medium transition-colors hover:bg-accent ${
                          location.pathname === item.href
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>

                {!isLoggedIn && (
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button variant="ghost" className="justify-start">
                      Sign In
                    </Button>
                    <Button className="justify-start">Get Started</Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
