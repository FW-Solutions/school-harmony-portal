import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { ClipboardCheck, Users, UserX, TrendingUp } from "lucide-react";

const classes = [
  { name: "Primary 1", total: 42, present: 40, absent: 2, rate: "95.2%" },
  { name: "Primary 4", total: 38, present: 35, absent: 3, rate: "92.1%" },
  { name: "JSS 1A", total: 45, present: 43, absent: 2, rate: "95.6%" },
  { name: "JSS 2B", total: 40, present: 36, absent: 4, rate: "90.0%" },
  { name: "SS 1A", total: 48, present: 45, absent: 3, rate: "93.8%" },
  { name: "SS 2A", total: 44, present: 42, absent: 2, rate: "95.5%" },
];

export default function Attendance() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Attendance</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Today's Rate" value="94.2%" icon={ClipboardCheck} variant="primary" />
          <StatCard title="Present Today" value="1,176" icon={Users} variant="secondary" />
          <StatCard title="Absent Today" value="72" icon={UserX} variant="accent" />
          <StatCard title="Weekly Average" value="93.8%" icon={TrendingUp} variant="default" />
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Class Attendance - Today</h3>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Mark Attendance
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  {["Class", "Total", "Present", "Absent", "Rate"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {classes.map((c, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{c.name}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{c.total}</td>
                    <td className="px-5 py-3.5 text-sm text-success font-medium">{c.present}</td>
                    <td className="px-5 py-3.5 text-sm text-destructive font-medium">{c.absent}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-[80px] h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-success rounded-full" style={{ width: c.rate }} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{c.rate}</span>
                      </div>
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
