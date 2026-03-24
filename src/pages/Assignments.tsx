import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { BookOpen, Clock, CheckCircle, FileText } from "lucide-react";

const assignments = [
  { title: "Quadratic Equations", subject: "Mathematics", class: "SS 1A", due: "2026-03-26", submissions: "32/48", status: "Active" },
  { title: "Essay Writing", subject: "English", class: "JSS 2B", due: "2026-03-25", submissions: "28/40", status: "Active" },
  { title: "Photosynthesis Report", subject: "Biology", class: "SS 2A", due: "2026-03-24", submissions: "44/44", status: "Closed" },
  { title: "Nigerian History", subject: "History", class: "JSS 3A", due: "2026-03-28", submissions: "10/42", status: "Active" },
  { title: "Basic Fractions", subject: "Mathematics", class: "Primary 5", due: "2026-03-27", submissions: "0/38", status: "Active" },
];

const statusStyles: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Closed: "bg-muted text-muted-foreground",
};

export default function Assignments() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Assignments</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Assignments" value="47" icon={BookOpen} variant="primary" />
          <StatCard title="Active" value="23" icon={Clock} variant="secondary" />
          <StatCard title="Completed" value="24" icon={CheckCircle} variant="accent" />
          <StatCard title="Submissions Today" value="156" icon={FileText} variant="default" />
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Recent Assignments</h3>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Create Assignment
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  {["Title", "Subject", "Class", "Due Date", "Submissions", "Status"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {assignments.map((a, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{a.title}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{a.subject}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{a.class}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{a.due}</td>
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{a.submissions}</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[a.status]}`}>{a.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
