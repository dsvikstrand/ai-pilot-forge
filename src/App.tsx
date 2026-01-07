import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import AgenticWorkflows from "./pages/AgenticWorkflows";
import CustomAI from "./pages/CustomAI";
import AIReadinessTest from "./pages/AIReadinessTest";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Define all page routes (without language prefix)
const PageRoutes = () => (
  <Routes>
    {/* Redirect root to Swedish */}
    <Route path="/" element={<Navigate to="/sv" replace />} />
    <Route path="/services" element={<Services />} />
    <Route path="/custom-ai" element={<CustomAI />} />
    <Route path="/agentic-workflows" element={<AgenticWorkflows />} />
    <Route path="/ai-readiness-test" element={<AIReadinessTest />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    {/* Swedish routes - same components, language derived from URL */}
    <Route path="/sv" element={<Index />} />
    <Route path="/sv/services" element={<Services />} />
    <Route path="/sv/custom-ai" element={<CustomAI />} />
    <Route path="/sv/agentic-workflows" element={<AgenticWorkflows />} />
    <Route path="/sv/ai-readiness-test" element={<AIReadinessTest />} />
    <Route path="/sv/about" element={<About />} />
    <Route path="/sv/contact" element={<Contact />} />
    <Route path="/sv/privacy" element={<Privacy />} />
    <Route path="/sv/blog" element={<Blog />} />
    <Route path="/sv/blog/:slug" element={<BlogPost />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <PageRoutes />
          </TooltipProvider>
        </LanguageProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
