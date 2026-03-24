import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { DollarSign, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const feeRecords = [
  { student: "Adewale John", class: "SS 2A", amount: "₦75,000", status: "Paid", date: "2026-03-20" },
  { student: "Okafor Grace", class: "JSS 1B", amount: "₦65,000", status: "Partial", date: "2026-03-18" },
  { student: "Ibrahim Musa", class: "Primary 6", amount: "₦50,000", status: "Paid", date: "2026-03-17" },
  { student: "Eze Chioma", class: "SS 1A", amount: "₦75,000", status: "Unpaid", date: "-" },
  { student: "Balogun Tunde", class: "JSS 3A", amount: "₦65,000", status: "Paid", date: "2026-03-15" },
  { student: "Akinola Bimpe", class: "Primary 4", amount: "₦45,000", status: "Partial", date: "2026-03-14" },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-success/10 text-success",
  Partial: "bg-warning/10 text-warning",
  Unpaid: "bg-destructive/10 text-destructive",
};

export default function Fees() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Fee Management</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Expected" value="₦93.6M" icon={DollarSign} variant="primary" />
          <StatCard title="Total Collected" value="₦78.2M" icon={TrendingUp} variant="secondary" />
          <StatCard title="Outstanding" value="₦15.4M" icon={AlertCircle} variant="accent" />
          <StatCard title="Fully Paid Students" value="892" icon={CheckCircle} variant="default" />
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Fee Records</h3>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Record Payment
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  {["Student", "Class", "Amount", "Status", "Date"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {feeRecords.map((r, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{r.student}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.class}</td>
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{r.amount}</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[r.status]}`}>{r.status}</span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.date}</td>
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
