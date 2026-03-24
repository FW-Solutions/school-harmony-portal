import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Fees from "./pages/Fees.tsx";
import Salary from "./pages/Salary.tsx";
import Attendance from "./pages/Attendance.tsx";
import Assignments from "./pages/Assignments.tsx";
import CBT from "./pages/CBT.tsx";
import Results from "./pages/Results.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/cbt" element={<CBT />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
