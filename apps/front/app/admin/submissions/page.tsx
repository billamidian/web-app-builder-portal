"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Download, Eye, MoreHorizontal, Search, Trash2 } from "lucide-react"

interface FormSubmission {
  id: string
  formType: string
  name: string
  email: string
  date: string
  status: string
  data: Record<string, any>
}

export default function SubmissionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")
  const [isViewSubmissionOpen, setIsViewSubmissionOpen] = useState(false)
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null)

  // Mock data
  const submissions: FormSubmission[] = [
    {
      id: "sub_1",
      formType: "App Wizard",
      name: "John Doe",
      email: "john@example.com",
      date: "2023-05-20",
      status: "New",
      data: {
        "App Name": "TaskMaster",
        "App Description": "A productivity app for teams to manage tasks and projects.",
        "Core Features": "Task creation, assignment, due dates, progress tracking, team collaboration",
        "Nice-to-Have Features": "File attachments, time tracking, reporting",
        "Future Features": "AI task prioritization, integration with other tools",
        "Primary Users": "Small to medium businesses, project managers, team leads",
        "User Needs": "Better organization, clear task ownership, deadline management",
        "User Goals": "Improve team productivity, reduce missed deadlines, better visibility",
        "Direct Competitors": "Asana, Trello, Monday.com",
        Differentiation: "Simpler interface, faster onboarding, more affordable",
        Platforms: "Web, iOS, Android",
        Integrations: "Google Workspace, Microsoft 365, Slack",
        "Tech Stack Preferences": "React, Node.js",
        Timeline: "3 months for MVP",
      },
    },
    {
      id: "sub_2",
      formType: "Contact Form",
      name: "Jane Smith",
      email: "jane@example.com",
      date: "2023-05-19",
      status: "Responded",
      data: {
        Subject: "Question about Production Build",
        Message:
          "I'm interested in the Production Build option. Can you provide more details about what's included and the typical timeline?",
      },
    },
    {
      id: "sub_3",
      formType: "App Wizard",
      name: "Robert Johnson",
      email: "robert@example.com",
      date: "2023-05-18",
      status: "In Progress",
      data: {
        "App Name": "HealthTrack",
        "App Description": "A health and fitness tracking application for individuals.",
        "Core Features": "Workout tracking, meal planning, progress charts",
        "Nice-to-Have Features": "Social sharing, coach integration, custom workout plans",
        "Future Features": "AI-generated meal plans, integration with fitness devices",
        "Primary Users": "Fitness enthusiasts, people on weight loss journeys",
        "User Needs": "Track progress, stay motivated, follow structured plans",
        "User Goals": "Improve fitness, lose weight, build healthy habits",
        "Direct Competitors": "MyFitnessPal, Fitbit App, Strava",
        Differentiation: "More comprehensive tracking, better visualization, community support",
        Platforms: "iOS, Android",
        Integrations: "Apple Health, Google Fit, fitness wearables",
        "Tech Stack Preferences": "React Native, Firebase",
        Timeline: "4 months for initial release",
      },
    },
    {
      id: "sub_4",
      formType: "Contact Form",
      name: "Emily Davis",
      email: "emily@example.com",
      date: "2023-05-17",
      status: "New",
      data: {
        Subject: "Partnership Opportunity",
        Message:
          "I represent a design agency and we're interested in partnering with PushButtonBuild to offer combined services to our clients. Would love to discuss this further.",
      },
    },
    {
      id: "sub_5",
      formType: "App Wizard",
      name: "Michael Brown",
      email: "michael@example.com",
      date: "2023-05-16",
      status: "Completed",
      data: {
        "App Name": "PropertyPro",
        "App Description": "A real estate management platform for property managers and landlords.",
        "Core Features": "Property listings, tenant management, maintenance requests, payment tracking",
        "Nice-to-Have Features": "Document signing, tenant screening, automated reminders",
        "Future Features": "AI-powered property valuation, virtual tours",
        "Primary Users": "Property managers, landlords, real estate investors",
        "User Needs": "Streamline property management, reduce paperwork, improve tenant communication",
        "User Goals": "Save time, reduce vacancies, increase rental income",
        "Direct Competitors": "Buildium, AppFolio, Propertyware",
        Differentiation: "More affordable, easier to use, better tenant portal",
        Platforms: "Web, iOS, Android",
        Integrations: "Payment processors, credit check services, accounting software",
        "Tech Stack Preferences": "React, Node.js, MongoDB",
        Timeline: "6 months for full version",
      },
    },
    {
      id: "sub_6",
      formType: "Contact Form",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      date: "2023-05-15",
      status: "Responded",
      data: {
        Subject: "Technical Support",
        Message:
          "I'm having trouble with the App Wizard. After completing all the steps, I don't see the submit button. Can you help me resolve this issue?",
      },
    },
    {
      id: "sub_7",
      formType: "App Wizard",
      name: "David Taylor",
      email: "david@example.com",
      date: "2023-05-14",
      status: "In Progress",
      data: {
        "App Name": "EventMaster",
        "App Description": "An event planning and management platform for organizers and attendees.",
        "Core Features": "Event creation, ticketing, attendee management, scheduling",
        "Nice-to-Have Features": "Mobile check-in, event analytics, speaker management",
        "Future Features": "AI matchmaking for networking, virtual event integration",
        "Primary Users": "Event organizers, conference planners, attendees",
        "User Needs": "Streamline event planning, improve attendee experience, track metrics",
        "User Goals": "Increase attendance, improve engagement, reduce planning time",
        "Direct Competitors": "Eventbrite, Cvent, Hopin",
        Differentiation: "More comprehensive features, better user experience, affordable pricing",
        Platforms: "Web, iOS, Android",
        Integrations: "Payment processors, email marketing tools, CRM systems",
        "Tech Stack Preferences": "React, Node.js, PostgreSQL",
        Timeline: "5 months for initial release",
      },
    },
    {
      id: "sub_8",
      formType: "Contact Form",
      name: "Jennifer Martinez",
      email: "jennifer@example.com",
      date: "2023-05-13",
      status: "New",
      data: {
        Subject: "Pricing Question",
        Message:
          "I'm interested in the Production Build option but have a limited budget. Do you offer any payment plans or discounts for startups?",
      },
    },
  ]

  // Filter submissions based on search query and active tab
  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.formType.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "app-wizard") return matchesSearch && submission.formType === "App Wizard"
    if (activeTab === "contact") return matchesSearch && submission.formType === "Contact Form"
    if (activeTab === "new") return matchesSearch && submission.status === "New"

    return matchesSearch
  })

  // Pagination
  const submissionsPerPage = 8
  const totalPages = Math.ceil(filteredSubmissions.length / submissionsPerPage)
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * submissionsPerPage,
    currentPage * submissionsPerPage,
  )

  const handleViewSubmission = (submission: FormSubmission) => {
    setSelectedSubmission(submission)
    setIsViewSubmissionOpen(true)
  }

  // Count by type and status
  const appWizardCount = submissions.filter((s) => s.formType === "App Wizard").length
  const contactFormCount = submissions.filter((s) => s.formType === "Contact Form").length
  const newSubmissionsCount = submissions.filter((s) => s.status === "New").length

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Form Submissions</h1>
      <p className="text-muted-foreground mb-8">View and manage form submissions from users.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">App Wizard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appWizardCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Contact Forms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contactFormCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newSubmissionsCount}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <TabsList className="mb-0">
            <TabsTrigger value="all">All Submissions</TabsTrigger>
            <TabsTrigger value="app-wizard">App Wizard</TabsTrigger>
            <TabsTrigger value="contact">Contact Form</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search submissions..."
                className="pl-8 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <SubmissionsTable submissions={paginatedSubmissions} onViewSubmission={handleViewSubmission} />
        </TabsContent>

        <TabsContent value="app-wizard" className="mt-0">
          <SubmissionsTable submissions={paginatedSubmissions} onViewSubmission={handleViewSubmission} />
        </TabsContent>

        <TabsContent value="contact" className="mt-0">
          <SubmissionsTable submissions={paginatedSubmissions} onViewSubmission={handleViewSubmission} />
        </TabsContent>

        <TabsContent value="new" className="mt-0">
          <SubmissionsTable submissions={paginatedSubmissions} onViewSubmission={handleViewSubmission} />
        </TabsContent>
      </Tabs>

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

      {/* View Submission Dialog */}
      <Dialog open={isViewSubmissionOpen} onOpenChange={setIsViewSubmissionOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedSubmission?.formType} Submission</DialogTitle>
            <DialogDescription>
              Submitted by {selectedSubmission?.name} ({selectedSubmission?.email}) on {selectedSubmission?.date}
            </DialogDescription>
          </DialogHeader>
          {selectedSubmission && (
            <div className="py-4">
              <div className="grid gap-4">
                {Object.entries(selectedSubmission.data).map(([key, value]) => (
                  <div key={key}>
                    <h3 className="font-medium text-sm">{key}</h3>
                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedSubmission.status === "New"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : selectedSubmission.status === "Responded"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : selectedSubmission.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {selectedSubmission.status}
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  Mark as Responded
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface SubmissionsTableProps {
  submissions: FormSubmission[]
  onViewSubmission: (submission: FormSubmission) => void
}

function SubmissionsTable({ submissions, onViewSubmission }: SubmissionsTableProps) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Form Type</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                No submissions found
              </TableCell>
            </TableRow>
          ) : (
            submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{submission.formType}</TableCell>
                <TableCell className="font-medium">{submission.name}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.date}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      submission.status === "New"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : submission.status === "Responded"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : submission.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {submission.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onViewSubmission(submission)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
