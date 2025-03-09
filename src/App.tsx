
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import IntelliAgent from "./pages/IntelliAgent";
import HowItWorks from "./pages/HowItWorks";
import AdaptiveIntelligence from "./pages/AdaptiveIntelligence";
import Documentation from "./pages/Documentation";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AgentBuilder from "./pages/AgentBuilder";
import AiChatSpace from "./pages/AiChatSpace";
import CodeStudio from "./pages/CodeStudio";
import ResearchSpace from "./pages/ResearchSpace";
import ContentAgent from "./pages/ContentAgent";
import Subscription from "./pages/Subscription";
import Profile from "./pages/Profile";

// Protected route wrapper component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Apply light theme to body
    document.body.classList.add('light-theme');
    
    return () => {
      document.body.classList.remove('light-theme');
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="cosmic-bg"></div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/intelliagent" element={<IntelliAgent />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/adaptive-intelligence" element={<AdaptiveIntelligence />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected routes */}
            <Route path="/agent-builder" element={
              <ProtectedRoute><AgentBuilder /></ProtectedRoute>
            } />
            <Route path="/ai-chat" element={
              <ProtectedRoute><AiChatSpace /></ProtectedRoute>
            } />
            <Route path="/code-studio" element={
              <ProtectedRoute><CodeStudio /></ProtectedRoute>
            } />
            <Route path="/research-space" element={
              <ProtectedRoute><ResearchSpace /></ProtectedRoute>
            } />
            <Route path="/content-agent" element={
              <ProtectedRoute><ContentAgent /></ProtectedRoute>
            } />
            <Route path="/subscription" element={
              <ProtectedRoute><Subscription /></ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute><Profile /></ProtectedRoute>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
