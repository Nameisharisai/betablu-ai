
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import DeepResearch from "./pages/DeepResearch";
import ContentAgent from "./pages/ContentAgent";
import Subscription from "./pages/Subscription";
import Profile from "./pages/Profile";
import AdvancedCodeSpace from "./pages/AdvancedCodeSpace";
import AdvancedCodeSpaceExplained from "./pages/AdvancedCodeSpaceExplained";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/intelliagent" element={
            <ProtectedRoute>
              <IntelliAgent />
            </ProtectedRoute>
          } />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/adaptive-intelligence" element={<AdaptiveIntelligence />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/agent-builder" element={
            <ProtectedRoute>
              <AgentBuilder />
            </ProtectedRoute>
          } />
          <Route path="/ai-chat" element={
            <ProtectedRoute>
              <AiChatSpace />
            </ProtectedRoute>
          } />
          <Route path="/code-studio" element={
            <ProtectedRoute>
              <CodeStudio />
            </ProtectedRoute>
          } />
          <Route path="/research-space" element={
            <ProtectedRoute>
              <ResearchSpace />
            </ProtectedRoute>
          } />
          <Route path="/deep-research" element={
            <ProtectedRoute>
              <DeepResearch />
            </ProtectedRoute>
          } />
          <Route path="/content-agent" element={
            <ProtectedRoute>
              <ContentAgent />
            </ProtectedRoute>
          } />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/advanced-code-space" element={
            <ProtectedRoute>
              <AdvancedCodeSpace />
            </ProtectedRoute>
          } />
          <Route path="/advanced-code-space-explained" element={<AdvancedCodeSpaceExplained />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
