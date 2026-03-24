import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Users, DollarSign, ClipboardCheck, BookOpen, TrendingUp, GraduationCap } from "lucide-react";

const recentActivities = [
  { action: "Fee payment received", detail: "John Adewale - ₦75,000", time: "2 mins ago" },
  { action: "Assignment submitted", detail: "JSS 2A - Mathematics", time: "15 mins ago" },
  { action: "CBT exam started", detail: "SS 1 - English Language", time: "30 mins ago" },
  { action: "Salary disbursed", detail: "March 2026 - Teaching staff", time: "1 hour ago" },
  { action: "Attendance marked", detail: "Primary 5 - 42/45 present", time: "2 hours ago" },
];

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground text-sm mt-1">Welcome back, Admin. Here's your school overview.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <StatCard title="Total Students" value="1,248" icon={Users} trend="+12 this term" variant="primary" />
          <StatCard title="Fees Collected" value="₦18.5M" icon={DollarSign} trend="+8% vs last month" variant="secondary" />
          <StatCard title="Attendance Today" value="94.2%" icon={ClipboardCheck} variant="accent" />
          <StatCard title="Pending Assignments" value="23" icon={BookOpen} variant="default" />
          <StatCard title="Staff Count" value="86" icon={GraduationCap} variant="primary" />
          <StatCard title="CBT Exams Active" value="3" icon={TrendingUp} variant="secondary" />
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivities.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: "Record Fee Payment", color: "bg-primary text-primary-foreground" },
                { label: "Mark Attendance", color: "bg-secondary text-secondary-foreground" },
                { label: "Create Assignment", color: "bg-accent text-accent-foreground" },
                { label: "Schedule CBT Exam", color: "bg-primary text-primary-foreground" },
                { label: "View Results", color: "bg-secondary text-secondary-foreground" },
              ].map((action) => (
                <button
                  key={action.label}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${action.color} hover:opacity-90 transition-opacity`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
