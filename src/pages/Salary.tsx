import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Wallet, Users, CheckCircle, Clock } from "lucide-react";

const salaryRecords = [
  { name: "Mr. Ogundimu A.", role: "Senior Teacher", amount: "₦185,000", status: "Paid", month: "March 2026" },
  { name: "Mrs. Adeyemi F.", role: "Head Teacher", amount: "₦220,000", status: "Paid", month: "March 2026" },
  { name: "Mr. Chukwu E.", role: "Teacher", amount: "₦150,000", status: "Pending", month: "March 2026" },
  { name: "Miss Bello Z.", role: "Teacher", amount: "₦150,000", status: "Paid", month: "March 2026" },
  { name: "Mr. Nwosu K.", role: "Lab Technician", amount: "₦120,000", status: "Pending", month: "March 2026" },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
};

export default function Salary() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Salary Management</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Monthly Payroll" value="₦12.8M" icon={Wallet} variant="primary" />
          <StatCard title="Total Staff" value="86" icon={Users} variant="secondary" />
          <StatCard title="Paid This Month" value="72" icon={CheckCircle} variant="accent" />
          <StatCard title="Pending" value="14" icon={Clock} variant="default" />
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Salary Records</h3>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Process Payroll
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  {["Staff Name", "Role", "Amount", "Status", "Month"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {salaryRecords.map((r, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{r.name}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.role}</td>
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{r.amount}</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[r.status]}`}>{r.status}</span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.month}</td>
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
