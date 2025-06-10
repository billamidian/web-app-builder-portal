"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download, ExternalLink, Search, Settings } from "lucide-react"
import Link from "next/link"

interface Payment {
  id: string
  customer: string
  email: string
  amount: string
  status: string
  date: string
  type: string
}

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isStripeSettingsOpen, setIsStripeSettingsOpen] = useState(false)

  // Mock data
  const payments: Payment[] = [
    {
      id: "pay_1NqJXY2eZvKYlo2C0M6M5",
      customer: "John Doe",
      email: "john@example.com",
      amount: "$299.00",
      status: "Completed",
      date: "2023-05-20",
      type: "Consultation",
    },
    {
      id: "pay_1NqJW32eZvKYlo2C9U7Y8",
      customer: "Jane Smith",
      email: "jane@example.com",
      amount: "$1,500.00",
      status: "Completed",
      date: "2023-05-19",
      type: "Production Build",
    },
    {
      id: "pay_1NqJVL2eZvKYlo2C7T5R2",
      customer: "Robert Johnson",
      email: "robert@example.com",
      amount: "$299.00",
      status: "Completed",
      date: "2023-05-18",
      type: "Consultation",
    },
    {
      id: "pay_1NqJU92eZvKYlo2C5S3P6",
      customer: "Emily Davis",
      email: "emily@example.com",
      amount: "$1,800.00",
      status: "Completed",
      date: "2023-05-17",
      type: "Production Build",
    },
    {
      id: "pay_1NqJSR2eZvKYlo2C3Q1N0",
      customer: "Michael Brown",
      email: "michael@example.com",
      amount: "$299.00",
      status: "Completed",
      date: "2023-05-16",
      type: "Consultation",
    },
    {
      id: "pay_1NqJR52eZvKYlo2C1O9L4",
      customer: "Sarah Wilson",
      email: "sarah@example.com",
      amount: "$299.00",
      status: "Failed",
      date: "2023-05-15",
      type: "Consultation",
    },
    {
      id: "pay_1NqJPm2eZvKYlo2C9M7J8",
      customer: "David Taylor",
      email: "david@example.com",
      amount: "$1,500.00",
      status: "Completed",
      date: "2023-05-14",
      type: "Production Build",
    },
    {
      id: "pay_1NqJNZ2eZvKYlo2C7K5H2",
      customer: "Jennifer Martinez",
      email: "jennifer@example.com",
      amount: "$299.00",
      status: "Refunded",
      date: "2023-05-13",
      type: "Consultation",
    },
    {
      id: "pay_1NqJM72eZvKYlo2C5I3F6",
      customer: "James Anderson",
      email: "james@example.com",
      amount: "$2,200.00",
      status: "Completed",
      date: "2023-05-12",
      type: "Production Build",
    },
    {
      id: "pay_1NqJKp2eZvKYlo2C3G1D0",
      customer: "Lisa Thomas",
      email: "lisa@example.com",
      amount: "$299.00",
      status: "Completed",
      date: "2023-05-11",
      type: "Consultation",
    },
  ]

  // Filter payments based on search query
  const filteredPayments = payments.filter(
    (payment) =>
      payment.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Pagination
  const paymentsPerPage = 8
  const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage)
  const paginatedPayments = filteredPayments.slice((currentPage - 1) * paymentsPerPage, currentPage * paymentsPerPage)

  // Calculate total revenue
  const totalRevenue = payments
    .filter((payment) => payment.status === "Completed")
    .reduce((sum, payment) => {
      const amount = Number.parseFloat(payment.amount.replace("$", "").replace(",", ""))
      return sum + amount
    }, 0)

  // Count by type
  const consultationCount = payments.filter((p) => p.type === "Consultation" && p.status === "Completed").length
  const productionCount = payments.filter((p) => p.type === "Production Build" && p.status === "Completed").length

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Payment Management</h1>
      <p className="text-muted-foreground mb-8">Manage payments, view transactions, and configure Stripe settings.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{consultationCount}</div>
            <p className="text-xs text-muted-foreground mt-1">${(consultationCount * 299).toLocaleString()} revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Production Builds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productionCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              ${(totalRevenue - consultationCount * 299).toLocaleString()} revenue
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search payments..."
            className="pl-8 w-full md:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={() => setIsStripeSettingsOpen(true)}>
            <Settings className="mr-2 h-4 w-4" />
            Stripe Settings
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-mono text-xs">{payment.id}</TableCell>
                <TableCell>
                  <div>{payment.customer}</div>
                  <div className="text-sm text-muted-foreground">{payment.email}</div>
                </TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.type}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      payment.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : payment.status === "Failed"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {payment.status}
                  </span>
                </TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`https://dashboard.stripe.com/payments/${payment.id}`} target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View in Stripe</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <div className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      )}

      {/* Stripe Settings Dialog */}
      <Dialog open={isStripeSettingsOpen} onOpenChange={setIsStripeSettingsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Stripe Settings</DialogTitle>
            <DialogDescription>Configure your Stripe integration settings.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="api-key" className="text-right">
                API Key
              </Label>
              <Input id="api-key" type="password" defaultValue="sk_test_..." className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="webhook-secret" className="text-right">
                Webhook Secret
              </Label>
              <Input id="webhook-secret" type="password" defaultValue="whsec_..." className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mode" className="text-right">
                Mode
              </Label>
              <Select defaultValue="test">
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="test">Test Mode</SelectItem>
                  <SelectItem value="live">Live Mode</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
