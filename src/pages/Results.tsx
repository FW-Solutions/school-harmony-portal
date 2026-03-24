import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Award, TrendingUp, Users, BarChart3 } from "lucide-react";

const results = [
  { student: "Adewale John", class: "SS 2A", subject: "Mathematics", score: 85, grade: "A", remark: "Excellent" },
  { student: "Okafor Grace", class: "JSS 1B", subject: "English", score: 72, grade: "B", remark: "Very Good" },
  { student: "Ibrahim Musa", class: "Primary 6", subject: "Science", score: 91, grade: "A", remark: "Excellent" },
  { student: "Eze Chioma", class: "SS 1A", subject: "Physics", score: 58, grade: "C", remark: "Good" },
  { student: "Balogun Tunde", class: "JSS 3A", subject: "History", score: 45, grade: "D", remark: "Fair" },
  { student: "Akinola Bimpe", class: "Primary 4", subject: "Mathematics", score: 78, grade: "B", remark: "Very Good" },
];

const gradeStyles: Record<string, string> = {
  A: "bg-success/10 text-success",
  B: "bg-primary/10 text-primary",
  C: "bg-warning/10 text-warning",
  D: "bg-destructive/10 text-destructive",
  F: "bg-destructive/20 text-destructive",
};

export default function Results() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Results</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Average Score" value="71.5%" icon={BarChart3} variant="primary" />
          <StatCard title="Pass Rate" value="88.3%" icon={TrendingUp} variant="secondary" />
          <StatCard title="Results Published" value="1,180" icon={Award} variant="accent" />
          <StatCard title="Students Assessed" value="1,200" icon={Users} variant="default" />
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Recent Results</h3>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Upload Results
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  {["Student", "Class", "Subject", "Score", "Grade", "Remark"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{r.student}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.class}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.subject}</td>
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{r.score}%</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${gradeStyles[r.grade]}`}>{r.grade}</span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.remark}</td>
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
