
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LectureVideos from "./pages/LectureVideos";
import Voting from "./pages/Voting";
import ClassroomTracking from "./pages/ClassroomTracking";
import Login from "./pages/Login";
import Layout from "./components/Layout";

function App() {
  // Create a client for each render instead of at module level
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/lectures" element={<Layout><LectureVideos /></Layout>} />
            <Route path="/voting" element={<Layout><Voting /></Layout>} />
            <Route path="/classroom-tracking" element={<Layout><ClassroomTracking /></Layout>} />
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
