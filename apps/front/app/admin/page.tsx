import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Manage users, payments, and form submissions from this central dashboard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
              12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,456</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
              8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Form Submissions</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
              3% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>Latest user registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Doe", email: "john@example.com", date: "2023-05-20" },
                { name: "Jane Smith", email: "jane@example.com", date: "2023-05-19" },
                { name: "Robert Johnson", email: "robert@example.com", date: "2023-05-18" },
                { name: "Emily Davis", email: "emily@example.com", date: "2023-05-17" },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{user.date}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-right">
              <Link href="/admin/users" className="text-primary hover:underline">
                View all users
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>Latest payment transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "John Doe", amount: "$299", date: "2023-05-20", status: "Completed" },
                { user: "Jane Smith", amount: "$1,500", date: "2023-05-19", status: "Completed" },
                { user: "Robert Johnson", amount: "$299", date: "2023-05-18", status: "Completed" },
                { user: "Emily Davis", amount: "$1,800", date: "2023-05-17", status: "Completed" },
              ].map((payment, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{payment.user}</p>
                    <p className="text-sm text-muted-foreground">{payment.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{payment.date}</p>
                    <p className="text-sm text-green-500">{payment.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-right">
              <Link href="/admin/payments" className="text-primary hover:underline">
                View all payments
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
