import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BrowseAgents from "./pages/BrowseAgents";
import AgentDashboard from "./pages/AgentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BrowsePackages from "./pages/BrowsePackages";
import PackageDetail from "./pages/PackageDetail";
import CreatePackage from "./pages/CreatePackage";
import ManagePackages from "./pages/ManagePackages";
import AdminPackages from "./pages/AdminPackages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse-agents" element={<BrowseAgents />} />
          <Route path="/packages" element={<BrowsePackages />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/agent/dashboard" element={<AgentDashboard />} />
          <Route path="/agent/packages" element={<ManagePackages />} />
          <Route path="/agent/create-package" element={<CreatePackage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/packages" element={<AdminPackages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
