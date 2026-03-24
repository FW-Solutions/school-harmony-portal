import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Monitor, PlayCircle, CheckCircle, Clock } from "lucide-react";

const exams = [
  { title: "English Language Mid-Term", class: "SS 1", questions: 50, duration: "45 mins", status: "In Progress", participants: "45/48" },
  { title: "Mathematics Quiz 3", class: "JSS 2A", questions: 30, duration: "30 mins", status: "Scheduled", participants: "-" },
  { title: "Basic Science Test", class: "Primary 6", questions: 25, duration: "20 mins", status: "Completed", participants: "38/38" },
  { title: "Civic Education", class: "SS 2", questions: 40, duration: "40 mins", status: "Completed", participants: "42/44" },
  { title: "Physics Practical", class: "SS 3", questions: 20, duration: "60 mins", status: "Scheduled", participants: "-" },
];

const statusStyles: Record<string, string> = {
  "In Progress": "bg-primary/10 text-primary",
  Scheduled: "bg-warning/10 text-warning",
  Completed: "bg-success/10 text-success",
};

export default function CBT() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Computer-Based Testing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Exams" value="34" icon={Monitor} variant="primary" />
          <StatCard title="Active Now" value="3" icon={PlayCircle} variant="secondary" />
          <StatCard title="Completed" value="28" icon={CheckCircle} variant="accent" />
          <StatCard title="Scheduled" value="3" icon={Clock} variant="default" />
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Exams</h3>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Create Exam
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  {["Exam Title", "Class", "Questions", "Duration", "Status", "Participants"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {exams.map((e, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{e.title}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{e.class}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{e.questions}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{e.duration}</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[e.status]}`}>{e.status}</span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{e.participants}</td>
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
