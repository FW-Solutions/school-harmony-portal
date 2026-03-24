import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import schoolLogo from "@/assets/school-logo.jpeg";
import {
  LayoutDashboard,
  DollarSign,
  Wallet,
  ClipboardCheck,
  BookOpen,
  Monitor,
  Award,
  Menu,
  X,
  LogOut,
  Bell,
  User,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Fees", icon: DollarSign, path: "/fees" },
  { label: "Salary", icon: Wallet, path: "/salary" },
  { label: "Attendance", icon: ClipboardCheck, path: "/attendance" },
  { label: "Assignments", icon: BookOpen, path: "/assignments" },
  { label: "CBT", icon: Monitor, path: "/cbt" },
  { label: "Results", icon: Award, path: "/results" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground transform transition-transform duration-200 lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-5 py-6 border-b border-sidebar-border">
            <img src={schoolLogo} alt="Anointed Int'l Group of Schools" className="w-12 h-12 rounded-lg object-cover" />
            <div className="min-w-0">
              <h1 className="text-sm font-bold text-sidebar-primary leading-tight truncate">Anointed Int'l</h1>
              <p className="text-xs text-sidebar-foreground/70">Group of Schools</p>
            </div>
            <button className="lg:hidden ml-auto" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-3 py-4 border-t border-sidebar-border">
            <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/50 transition-colors">
              <LogOut className="w-5 h-5" />
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center gap-4 px-4 sm:px-6 py-3 bg-card border-b border-border">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6 text-foreground" />
          </button>
          <div className="flex-1" />
          <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-border">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="hidden sm:block text-sm font-medium text-foreground">Admin</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
