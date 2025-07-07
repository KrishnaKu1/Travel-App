import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
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
      <div className="container mx-auto flex h-16 md:h-18 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 min-w-0 flex-shrink-0"
        >
          <div className="relative">
            <Plane className="h-7 w-7 md:h-8 md:w-8 text-primary" />
            <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-accent"></div>
          </div>
          <span className="text-lg md:text-xl font-bold text-foreground hidden xs:block">
            Wanderly
          </span>
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
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Get Started button - always visible */}
          <Button
            size="sm"
            className="h-9 px-3 md:px-4 text-xs md:text-sm"
            asChild
          >
            <Link to="/join-as-agent">Get Started</Link>
          </Button>

          {!isLoggedIn ? (
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-9 px-3 md:px-4 text-xs md:text-sm"
                asChild
              >
                <Link to="/agent/sign-in">Agent Login</Link>
              </Button>
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
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden h-9 w-9 p-0 touch-manipulation"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center space-x-3 p-6 pb-4 border-b">
                  <div className="relative">
                    <Plane className="h-7 w-7 text-primary" />
                    <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-xl font-bold">Wanderly</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 py-4">
                  <div className="space-y-1">
                    {currentNav.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors touch-manipulation ${
                            location.pathname === item.href
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-accent hover:text-accent-foreground"
                          }`}
                        >
                          <Icon className="h-5 w-5 flex-shrink-0" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </nav>

                {/* Bottom Actions */}
                {!isLoggedIn && (
                  <div className="p-6 pt-4 border-t bg-muted/30">
                    <div className="space-y-3">
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-12 text-base"
                        asChild
                      >
                        <Link to="/agent/sign-in">
                          <User className="mr-3 h-5 w-5" />
                          Agent Login
                        </Link>
                      </Button>
                      <Button className="w-full h-12 text-base" asChild>
                        <Link to="/join-as-agent">Get Started</Link>
                      </Button>
                    </div>
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
