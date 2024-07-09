import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Info, Calendar, Users, Mail } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import Membership from "./pages/Membership.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "#home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "About Us",
    to: "#about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Events",
    to: "#events",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Membership",
    to: "/membership",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="membership" element={<Membership />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;