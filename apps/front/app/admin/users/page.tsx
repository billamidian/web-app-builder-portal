"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  ChevronLeft,
  Calendar,
  CreditCard,
  FileText,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Building,
  Tag,
  Plus,
  Download,
  Send,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for users
const mockUsers = [
  {
    id: "u1",
    name: "Alex Johnson",
    email: "alex@example.com",
    company: "TechCorp Inc.",
    role: "CEO",
    status: "active",
    joinDate: "2023-01-15",
    lastActive: "2023-05-21T14:30:00",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "USA",
    },
    tags: ["High Value", "Enterprise"],
    onboardingProgress: 85,
    totalSpent: 2499,
    avatar: "/letter-a-abstract.png",
    payments: [
      { id: "p1", date: "2023-01-20", amount: 299, status: "completed", description: "Strategy Session" },
      { id: "p2", date: "2023-02-05", amount: 2200, status: "completed", description: "Custom Platform Build" },
    ],
    submissions: [
      { id: "s1", date: "2023-01-16", type: "Requirements", title: "Initial Project Requirements" },
      { id: "s2", date: "2023-01-25", type: "Feedback", title: "Design Feedback" },
    ],
    activity: [
      { id: "a1", date: "2023-05-21T14:30:00", type: "login", description: "Logged in to dashboard" },
      { id: "a2", date: "2023-05-20T10:15:00", type: "view", description: "Viewed resources page" },
      { id: "a3", date: "2023-05-18T16:45:00", type: "download", description: "Downloaded project timeline" },
    ],
    notes: [
      {
        id: "n1",
        date: "2023-01-17",
        author: "Sarah Admin",
        content: "Client is interested in expanding to mobile apps in Q3",
      },
      {
        id: "n2",
        date: "2023-02-10",
        author: "Mike Support",
        content: "Provided additional resources for API integration",
      },
    ],
  },
  {
    id: "u2",
    name: "Samantha Lee",
    email: "samantha@example.com",
    company: "Health Innovations",
    role: "Director",
    status: "active",
    joinDate: "2023-02-03",
    lastActive: "2023-05-19T09:45:00",
    phone: "+1 (555) 987-6543",
    address: {
      street: "456 Market St",
      city: "Chicago",
      state: "IL",
      zip: "60601",
      country: "USA",
    },
    tags: ["Healthcare", "Technical"],
    onboardingProgress: 100,
    totalSpent: 4750,
    avatar: "/abstract-letter-s.png",
    payments: [
      { id: "p3", date: "2023-02-05", amount: 299, status: "completed", description: "Strategy Session" },
      { id: "p4", date: "2023-02-20", amount: 3500, status: "completed", description: "Custom Platform Build" },
      { id: "p5", date: "2023-04-10", amount: 950, status: "completed", description: "Additional Features" },
    ],
    submissions: [
      { id: "s3", date: "2023-02-06", type: "Requirements", title: "Healthcare Platform Requirements" },
      { id: "s4", date: "2023-03-15", type: "Content", title: "Platform Content Submission" },
    ],
    activity: [
      { id: "a4", date: "2023-05-19T09:45:00", type: "login", description: "Logged in to dashboard" },
      { id: "a5", date: "2023-05-19T10:30:00", type: "edit", description: "Updated company profile" },
      { id: "a6", date: "2023-05-15T14:20:00", type: "support", description: "Opened support ticket #45678" },
    ],
    notes: [
      {
        id: "n3",
        date: "2023-02-10",
        author: "Sarah Admin",
        content: "Client has strict HIPAA compliance requirements",
      },
      { id: "n4", date: "2023-04-15", author: "Mike Support", content: "Discussed potential phase 2 features for Q4" },
    ],
  },
  {
    id: "u3",
    name: "David Wilson",
    email: "david@example.com",
    company: "Solo Entrepreneur",
    role: "Founder",
    status: "pending",
    joinDate: "2023-05-10",
    lastActive: "2023-05-10T16:20:00",
    phone: "+1 (555) 234-5678",
    address: {
      street: "789 Oak Ave",
      city: "Austin",
      state: "TX",
      zip: "78701",
      country: "USA",
    },
    tags: ["New", "Startup"],
    onboardingProgress: 25,
    totalSpent: 299,
    avatar: "/letter-d-floral.png",
    payments: [{ id: "p6", date: "2023-05-10", amount: 299, status: "completed", description: "Strategy Session" }],
    submissions: [{ id: "s5", date: "2023-05-12", type: "Requirements", title: "Initial Project Outline" }],
    activity: [
      { id: "a7", date: "2023-05-10T16:20:00", type: "signup", description: "Created account" },
      { id: "a8", date: "2023-05-10T16:35:00", type: "payment", description: "Completed initial payment" },
    ],
    notes: [
      {
        id: "n5",
        date: "2023-05-11",
        author: "Sarah Admin",
        content: "New client with limited budget but high potential",
      },
    ],
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [newNote, setNewNote] = useState("")
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "USA",
    tags: [] as string[],
  })

  // Filter users based on search term
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleUserClick = (user: any) => {
    setSelectedUser(user)
  }

  const handleBackClick = () => {
    setSelectedUser(null)
  }

  const handleAddNote = () => {
    if (!newNote.trim()) return

    // In a real app, you would save this to your backend
    console.log("Adding note:", newNote)

    // For demo purposes, we'll just show it was added
    alert("Note added: " + newNote)
    setNewNote("")
  }

  const handleAddUser = () => {
    if (!newUser.name.trim() || !newUser.email.trim()) {
      alert("Name and email are required")
      return
    }

    // Generate a new user ID
    const newId = `u${mockUsers.length + 1}`

    // Create the new user object
    const userToAdd = {
      id: newId,
      name: newUser.name,
      email: newUser.email,
      company: newUser.company || "Not specified",
      role: newUser.role || "User",
      status: "pending" as const,
      joinDate: new Date().toISOString().split("T")[0],
      lastActive: new Date().toISOString(),
      phone: newUser.phone || "Not provided",
      address: {
        street: newUser.street || "Not provided",
        city: newUser.city || "Not provided",
        state: newUser.state || "Not provided",
        zip: newUser.zip || "Not provided",
        country: newUser.country,
      },
      tags: newUser.tags,
      onboardingProgress: 0,
      totalSpent: 0,
      avatar: `/placeholder.svg?height=40&width=40&text=${newUser.name.charAt(0)}`,
      payments: [],
      submissions: [],
      activity: [
        {
          id: "a1",
          date: new Date().toISOString(),
          type: "signup",
          description: "Account created by admin",
        },
      ],
      notes: [],
    }

    // In a real app, you would save this to your backend
    console.log("Adding user:", userToAdd)

    // For demo purposes, we'll add it to the mock data
    mockUsers.push(userToAdd)

    // Reset form and close dialog
    setNewUser({
      name: "",
      email: "",
      company: "",
      role: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "USA",
      tags: [],
    })
    setIsAddUserOpen(false)

    alert(`User ${newUser.name} added successfully!`)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatDateTime = (dateTimeString: string) => {
    return new Date(dateTimeString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-4">
      {!selectedUser ? (
        // User List View
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Users</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>Create a new user account. Required fields are marked with *.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={newUser.name}
                          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newUser.email}
                          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={newUser.company}
                          onChange={(e) => setNewUser({ ...newUser, company: e.target.value })}
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CEO">CEO</SelectItem>
                            <SelectItem value="CTO">CTO</SelectItem>
                            <SelectItem value="Director">Director</SelectItem>
                            <SelectItem value="Manager">Manager</SelectItem>
                            <SelectItem value="Developer">Developer</SelectItem>
                            <SelectItem value="Founder">Founder</SelectItem>
                            <SelectItem value="User">User</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={newUser.phone}
                        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Address</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          value={newUser.street}
                          onChange={(e) => setNewUser({ ...newUser, street: e.target.value })}
                          placeholder="Street Address"
                        />
                        <Input
                          value={newUser.city}
                          onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
                          placeholder="City"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <Input
                          value={newUser.state}
                          onChange={(e) => setNewUser({ ...newUser, state: e.target.value })}
                          placeholder="State"
                        />
                        <Input
                          value={newUser.zip}
                          onChange={(e) => setNewUser({ ...newUser, zip: e.target.value })}
                          placeholder="ZIP"
                        />
                        <Select
                          value={newUser.country}
                          onValueChange={(value) => setNewUser({ ...newUser, country: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USA">USA</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                            <SelectItem value="UK">UK</SelectItem>
                            <SelectItem value="Australia">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddUser}>Add User</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="max-w-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Users ({filteredUsers.length})</CardTitle>
              <CardDescription>Manage your users and their account details</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Onboarding</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Last Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow
                      key={user.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => handleUserClick(user)}
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                            <div className="text-xs text-muted-foreground">{user.company}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === "active" ? "default" : "outline"}>
                          {user.status === "active" ? "Active" : "Pending"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={user.onboardingProgress} className="w-[60px]" />
                          <span className="text-xs text-muted-foreground">{user.onboardingProgress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>${user.totalSpent}</TableCell>
                      <TableCell>{formatDate(user.joinDate)}</TableCell>
                      <TableCell>{formatDateTime(user.lastActive)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      ) : (
        // User Detail View
        <>
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" size="sm" onClick={handleBackClick}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Users
            </Button>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={selectedUser.avatar || "/placeholder.svg"} alt={selectedUser.name} />
                <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">{selectedUser.name}</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{selectedUser.email}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Send className="mr-2 h-4 w-4" />
                Message
              </Button>
              <Button size="sm">Edit User</Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {selectedUser.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p>{selectedUser.address.street}</p>
                          <p>
                            {selectedUser.address.city}, {selectedUser.address.state} {selectedUser.address.zip}
                          </p>
                          <p>{selectedUser.address.country}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge variant={selectedUser.status === "active" ? "default" : "outline"} className="mt-1">
                          {selectedUser.status === "active" ? "Active" : "Pending"}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Role</p>
                        <p>{selectedUser.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Joined</p>
                        <p>{formatDate(selectedUser.joinDate)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Active</p>
                        <p>{formatDateTime(selectedUser.lastActive)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Onboarding Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Overall Progress</span>
                          <span className="text-sm text-muted-foreground">{selectedUser.onboardingProgress}%</span>
                        </div>
                        <Progress value={selectedUser.onboardingProgress} className="h-2" />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Strategy Session</span>
                            <Badge variant="outline">Completed</Badge>
                          </div>
                          <Progress value={100} className="h-1" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Requirements Gathering</span>
                            <Badge variant="outline">
                              {selectedUser.onboardingProgress >= 50 ? "Completed" : "In Progress"}
                            </Badge>
                          </div>
                          <Progress
                            value={
                              selectedUser.onboardingProgress >= 50
                                ? 100
                                : selectedUser.onboardingProgress >= 25
                                  ? 50
                                  : 0
                            }
                            className="h-1"
                          />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Platform Setup</span>
                            <Badge variant="outline">
                              {selectedUser.onboardingProgress >= 75
                                ? "Completed"
                                : selectedUser.onboardingProgress >= 50
                                  ? "In Progress"
                                  : "Not Started"}
                            </Badge>
                          </div>
                          <Progress
                            value={
                              selectedUser.onboardingProgress >= 75
                                ? 100
                                : selectedUser.onboardingProgress >= 50
                                  ? 50
                                  : 0
                            }
                            className="h-1"
                          />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Launch</span>
                            <Badge variant="outline">
                              {selectedUser.onboardingProgress === 100 ? "Completed" : "Not Started"}
                            </Badge>
                          </div>
                          <Progress value={selectedUser.onboardingProgress === 100 ? 100 : 0} className="h-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>Total spent: ${selectedUser.totalSpent}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedUser.payments.map((payment: any) => (
                        <TableRow key={payment.id}>
                          <TableCell>{formatDate(payment.date)}</TableCell>
                          <TableCell>{payment.description}</TableCell>
                          <TableCell>${payment.amount}</TableCell>
                          <TableCell>
                            <Badge variant={payment.status === "completed" ? "default" : "outline"}>
                              {payment.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="submissions">
              <Card>
                <CardHeader>
                  <CardTitle>Form Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedUser.submissions.map((submission: any) => (
                        <TableRow key={submission.id}>
                          <TableCell>{formatDate(submission.date)}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{submission.type}</Badge>
                          </TableCell>
                          <TableCell>{submission.title}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {selectedUser.activity.map((activity: any) => (
                      <div key={activity.id} className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-background">
                            {activity.type === "login" && <Calendar className="h-5 w-5 text-primary" />}
                            {activity.type === "view" && <FileText className="h-5 w-5 text-primary" />}
                            {activity.type === "download" && <Download className="h-5 w-5 text-primary" />}
                            {activity.type === "edit" && <FileText className="h-5 w-5 text-primary" />}
                            {activity.type === "support" && <MessageSquare className="h-5 w-5 text-primary" />}
                            {activity.type === "signup" && <Plus className="h-5 w-5 text-primary" />}
                            {activity.type === "payment" && <CreditCard className="h-5 w-5 text-primary" />}
                          </div>
                          <div className="h-full w-px bg-border" />
                        </div>
                        <div className="pb-8">
                          <div className="text-sm text-muted-foreground">{formatDateTime(activity.date)}</div>
                          <div className="font-medium mt-1">{activity.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Notes</CardTitle>
                  <CardDescription>Internal notes about this user</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-4">
                      {selectedUser.notes.map((note: any) => (
                        <div key={note.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium">{note.author}</div>
                            <div className="text-sm text-muted-foreground">{formatDate(note.date)}</div>
                          </div>
                          <p>{note.content}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="text-sm font-medium mb-2">Add Note</h4>
                      <div className="space-y-2">
                        <Textarea
                          placeholder="Add a note about this user..."
                          value={newNote}
                          onChange={(e) => setNewNote(e.target.value)}
                        />
                        <Button onClick={handleAddNote}>Add Note</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}
