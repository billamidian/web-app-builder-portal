"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Code,
  Eye,
  MoreHorizontal,
  Save,
  Search,
  Send,
  Trash2,
  Star,
  StarOff,
  RefreshCcw,
  Archive,
  Mail,
  MailOpen,
  Reply,
  Forward,
  Paperclip,
  Plus,
  File,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

interface EmailTemplate {
  id: string
  name: string
  subject: string
  lastEdited: string
  status: "active" | "draft" | "archived"
}

interface EmailLog {
  id: string
  recipient: string
  subject: string
  status: "delivered" | "opened" | "clicked" | "failed" | "bounced"
  sentAt: string
}

interface EmailMessage {
  id: string
  from: {
    name: string
    email: string
    avatar?: string
  }
  to: string[]
  subject: string
  body: string
  date: string
  time: string
  read: boolean
  starred: boolean
  labels: string[]
  hasAttachments: boolean
  attachments?: {
    name: string
    size: string
    type: string
  }[]
  folder: "inbox" | "sent" | "drafts" | "trash" | "archive"
}

export default function EmailPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isTemplateEditorOpen, setIsTemplateEditorOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [activeInboxTab, setActiveInboxTab] = useState<string>("inbox")
  const [selectedEmails, setSelectedEmails] = useState<string[]>([])
  const [selectedEmail, setSelectedEmail] = useState<EmailMessage | null>(null)
  const [isComposeOpen, setIsComposeOpen] = useState(false)
  const [composeData, setComposeData] = useState({
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    body: "",
  })
  const [isReplyOpen, setIsReplyOpen] = useState(false)
  const [replyData, setReplyData] = useState({
    to: "",
    subject: "",
    body: "",
  })

  // Mock data for templates
  const templates: EmailTemplate[] = [
    {
      id: "template_1",
      name: "Welcome Email",
      subject: "Welcome to PushButtonBuild.com!",
      lastEdited: "2023-05-20",
      status: "active",
    },
    {
      id: "template_2",
      name: "Consultation Confirmation",
      subject: "Your Consultation is Confirmed",
      lastEdited: "2023-05-19",
      status: "active",
    },
    {
      id: "template_3",
      name: "Payment Receipt",
      subject: "Receipt for Your Payment",
      lastEdited: "2023-05-18",
      status: "active",
    },
    {
      id: "template_4",
      name: "App Wizard Submission",
      subject: "We've Received Your App Idea",
      lastEdited: "2023-05-17",
      status: "active",
    },
    {
      id: "template_5",
      name: "Follow-up Email",
      subject: "Following Up on Your Project",
      lastEdited: "2023-05-16",
      status: "draft",
    },
  ]

  // Mock data for email logs
  const emailLogs: EmailLog[] = [
    {
      id: "email_1",
      recipient: "john@example.com",
      subject: "Welcome to PushButtonBuild.com!",
      status: "delivered",
      sentAt: "2023-05-20 14:30:22",
    },
    {
      id: "email_2",
      recipient: "jane@example.com",
      subject: "Your Consultation is Confirmed",
      status: "opened",
      sentAt: "2023-05-19 10:15:45",
    },
    {
      id: "email_3",
      recipient: "robert@example.com",
      subject: "Receipt for Your Payment",
      status: "clicked",
      sentAt: "2023-05-18 16:22:10",
    },
    {
      id: "email_4",
      recipient: "emily@example.com",
      subject: "We've Received Your App Idea",
      status: "delivered",
      sentAt: "2023-05-17 09:45:33",
    },
    {
      id: "email_5",
      recipient: "michael@example.com",
      subject: "Welcome to PushButtonBuild.com!",
      status: "failed",
      sentAt: "2023-05-16 11:20:18",
    },
    {
      id: "email_6",
      recipient: "sarah@example.com",
      subject: "Your Consultation is Confirmed",
      status: "bounced",
      sentAt: "2023-05-15 13:10:05",
    },
    {
      id: "email_7",
      recipient: "david@example.com",
      subject: "Receipt for Your Payment",
      status: "delivered",
      sentAt: "2023-05-14 15:40:27",
    },
    {
      id: "email_8",
      recipient: "jennifer@example.com",
      subject: "We've Received Your App Idea",
      status: "opened",
      sentAt: "2023-05-13 08:55:12",
    },
  ]

  // Mock data for inbox emails
  const emails: EmailMessage[] = [
    {
      id: "msg_1",
      from: {
        name: "John Doe",
        email: "john@example.com",
        avatar: "/letter-a-abstract.png",
      },
      to: ["admin@pushbuttonbuild.com"],
      subject: "Question about my app project",
      body: `<p>Hi there,</p>
      <p>I've been working on my app project and I have a few questions about the timeline and next steps. Could we schedule a quick call to discuss?</p>
      <p>I'm particularly interested in understanding how we can integrate payment processing and user authentication.</p>
      <p>Best regards,<br>John</p>`,
      date: "2023-05-21",
      time: "14:30",
      read: false,
      starred: false,
      labels: ["client"],
      hasAttachments: false,
      folder: "inbox",
    },
    {
      id: "msg_2",
      from: {
        name: "Jane Smith",
        email: "jane@example.com",
        avatar: "/abstract-letter-s.png",
      },
      to: ["admin@pushbuttonbuild.com"],
      subject: "Feedback on my dashboard design",
      body: `<p>Hello,</p>
      <p>I've reviewed the dashboard design you sent over and I have some feedback. Overall, I think it looks great, but I have a few suggestions for improvements:</p>
      <ol>
        <li>Could we add a summary section at the top?</li>
        <li>The chart colors are a bit too similar - can we make them more distinct?</li>
        <li>I'd like to see a mobile version as well</li>
      </ol>
      <p>I've attached a document with more detailed feedback.</p>
      <p>Thanks,<br>Jane</p>`,
      date: "2023-05-20",
      time: "11:15",
      read: true,
      starred: true,
      labels: ["client", "design"],
      hasAttachments: true,
      attachments: [
        {
          name: "dashboard-feedback.pdf",
          size: "1.2 MB",
          type: "application/pdf",
        },
      ],
      folder: "inbox",
    },
    {
      id: "msg_3",
      from: {
        name: "Robert Johnson",
        email: "robert@example.com",
        avatar: "/letter-d-floral.png",
      },
      to: ["admin@pushbuttonbuild.com"],
      subject: "Invoice #1234 Payment Confirmation",
      body: `<p>Dear Admin,</p>
      <p>This email confirms that payment for Invoice #1234 has been processed successfully.</p>
      <p>Payment details:</p>
      <ul>
        <li>Amount: $1,500.00</li>
        <li>Date: May 19, 2023</li>
        <li>Payment method: Credit Card</li>
        <li>Transaction ID: TRX-789012</li>
      </ul>
      <p>The receipt is attached to this email.</p>
      <p>Thank you for your business!</p>
      <p>Regards,<br>Robert Johnson<br>Accounting Department</p>`,
      date: "2023-05-19",
      time: "09:45",
      read: true,
      starred: false,
      labels: ["finance"],
      hasAttachments: true,
      attachments: [
        {
          name: "receipt-1234.pdf",
          size: "856 KB",
          type: "application/pdf",
        },
      ],
      folder: "inbox",
    },
    {
      id: "msg_4",
      from: {
        name: "Emily Davis",
        email: "emily@example.com",
      },
      to: ["admin@pushbuttonbuild.com"],
      subject: "New feature request for my app",
      body: `<p>Hello team,</p>
      <p>I'd like to request a new feature for my application. After gathering feedback from early users, I think it would be valuable to add a notification system.</p>
      <p>Users should be able to:</p>
      <ul>
        <li>Receive notifications when new content is added</li>
        <li>Customize which notifications they receive</li>
        <li>See a notification center within the app</li>
      </ul>
      <p>Could you provide an estimate for adding this feature?</p>
      <p>Thanks,<br>Emily</p>`,
      date: "2023-05-18",
      time: "16:20",
      read: false,
      starred: false,
      labels: ["client", "feature-request"],
      hasAttachments: false,
      folder: "inbox",
    },
    {
      id: "msg_5",
      from: {
        name: "Michael Brown",
        email: "michael@example.com",
      },
      to: ["admin@pushbuttonbuild.com"],
      subject: "Partnership opportunity",
      body: `<p>Hi there,</p>
      <p>I'm reaching out from TechPartners Inc. We specialize in marketing for tech products and services, and I think there could be a great opportunity for us to collaborate.</p>
      <p>We've helped similar companies increase their client base by 30% through targeted marketing campaigns.</p>
      <p>Would you be available for a quick call next week to discuss potential partnership opportunities?</p>
      <p>Best regards,<br>Michael Brown<br>Business Development Manager<br>TechPartners Inc.</p>`,
      date: "2023-05-17",
      time: "13:10",
      read: true,
      starred: true,
      labels: ["partnership"],
      hasAttachments: false,
      folder: "inbox",
    },
    {
      id: "msg_6",
      from: {
        name: "Sarah Wilson",
        email: "sarah@example.com",
      },
      to: ["admin@pushbuttonbuild.com"],
      subject: "Bug report: Login issues on mobile",
      body: `<p>Hello support team,</p>
      <p>I'm experiencing issues with the login functionality on my mobile device. When I try to log in, I get an error message saying "Authentication failed" even though I'm sure my credentials are correct.</p>
      <p>Steps to reproduce:</p>
      <ol>
        <li>Open the app on iOS (iPhone 13, iOS 16.2)</li>
        <li>Enter email and password</li>
        <li>Tap the login button</li>
      </ol>
      <p>This happens consistently, but works fine on desktop.</p>
      <p>I've attached a screenshot of the error.</p>
      <p>Thanks for your help,<br>Sarah</p>`,
      date: "2023-05-16",
      time: "10:30",
      read: true,
      starred: false,
      labels: ["bug", "support"],
      hasAttachments: true,
      attachments: [
        {
          name: "error-screenshot.png",
          size: "245 KB",
          type: "image/png",
        },
      ],
      folder: "inbox",
    },
    {
      id: "msg_7",
      from: {
        name: "David Taylor",
        email: "david@example.com",
      },
      to: ["admin@pushbuttonbuild.com"],
      subject: "Upcoming maintenance notification",
      body: `<p>Dear PushButtonBuild users,</p>
      <p>We will be performing scheduled maintenance on our servers this weekend. During this time, the platform may be temporarily unavailable.</p>
      <p>Maintenance details:</p>
      <ul>
        <li>Date: Saturday, May 27, 2023</li>
        <li>Time: 2:00 AM - 5:00 AM UTC</li>
        <li>Expected downtime: 1-2 hours</li>
      </ul>
      <p>We apologize for any inconvenience this may cause and appreciate your understanding as we work to improve our infrastructure.</p>
      <p>Best regards,<br>David Taylor<br>System Administrator</p>`,
      date: "2023-05-15",
      time: "08:45",
      read: false,
      starred: false,
      labels: ["system"],
      hasAttachments: false,
      folder: "inbox",
    },
    {
      id: "msg_8",
      from: {
        name: "Jennifer Martinez",
        email: "jennifer@example.com",
      },
      to: ["admin@pushbuttonbuild.com"],
      subject: "Content update request",
      body: `<p>Hello,</p>
      <p>I need to update some content on my website. Specifically, I'd like to:</p>
      <ul>
        <li>Update the pricing page with new plans</li>
        <li>Add a new team member to the About Us page</li>
        <li>Revise the FAQ section with new questions and answers</li>
      </ul>
      <p>I've attached a document with all the new content.</p>
      <p>How soon can these changes be implemented?</p>
      <p>Thanks,<br>Jennifer</p>`,
      date: "2023-05-14",
      time: "15:20",
      read: true,
      starred: false,
      labels: ["client", "content"],
      hasAttachments: true,
      attachments: [
        {
          name: "content-updates.docx",
          size: "520 KB",
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
      ],
      folder: "inbox",
    },
    {
      id: "msg_9",
      from: {
        name: "Admin",
        email: "admin@pushbuttonbuild.com",
      },
      to: ["john@example.com"],
      subject: "Re: Question about my app project",
      body: `<p>Hi John,</p>
      <p>Thanks for reaching out about your app project. I'd be happy to schedule a call to discuss the timeline and next steps.</p>
      <p>For payment processing, we typically integrate with Stripe or PayPal, and for authentication, we use either Firebase Auth or a custom solution depending on your needs.</p>
      <p>How does tomorrow at 2:00 PM work for a call?</p>
      <p>Best regards,<br>Admin</p>`,
      date: "2023-05-21",
      time: "15:45",
      read: true,
      starred: false,
      labels: ["client"],
      hasAttachments: false,
      folder: "sent",
    },
    {
      id: "msg_10",
      from: {
        name: "Admin",
        email: "admin@pushbuttonbuild.com",
      },
      to: ["sarah@example.com"],
      subject: "Re: Bug report: Login issues on mobile",
      body: `<p>Hi Sarah,</p>
      <p>Thank you for reporting this issue. We're investigating the login problem on iOS devices.</p>
      <p>In the meantime, could you try clearing your browser cache and cookies, then attempt to log in again?</p>
      <p>We'll keep you updated on our progress.</p>
      <p>Best regards,<br>Support Team</p>`,
      date: "2023-05-16",
      time: "11:30",
      read: true,
      starred: false,
      labels: ["bug", "support"],
      hasAttachments: false,
      folder: "sent",
    },
    {
      id: "msg_11",
      from: {
        name: "Admin",
        email: "admin@pushbuttonbuild.com",
      },
      to: ["team@pushbuttonbuild.com"],
      subject: "Weekly team meeting agenda",
      body: `<p>Hi team,</p>
      <p>Here's the agenda for our weekly meeting tomorrow:</p>
      <ol>
        <li>Project updates (10 min)</li>
        <li>Client feedback discussion (15 min)</li>
        <li>New feature prioritization (20 min)</li>
        <li>Open issues and blockers (15 min)</li>
      </ol>
      <p>Please come prepared to discuss your current projects and any challenges you're facing.</p>
      <p>Best regards,<br>Admin</p>`,
      date: "2023-05-13",
      time: "17:00",
      read: true,
      starred: false,
      labels: ["internal"],
      hasAttachments: false,
      folder: "drafts",
    },
  ]

  // Filter templates based on search query
  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.subject.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Filter logs based on search query
  const filteredLogs = emailLogs.filter(
    (log) =>
      log.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.status.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Filter emails based on search query and active folder
  const filteredEmails = emails.filter(
    (email) =>
      (email.from.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.from.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.body.toLowerCase().includes(searchQuery.toLowerCase())) &&
      email.folder === activeInboxTab,
  )

  // Pagination for logs
  const logsPerPage = 5
  const totalLogPages = Math.ceil(filteredLogs.length / logsPerPage)
  const paginatedLogs = filteredLogs.slice((currentPage - 1) * logsPerPage, currentPage * logsPerPage)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1000)
  }

  const handleEditTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template)
    setIsTemplateEditorOpen(true)
  }

  const handlePreviewTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template)
    setIsPreviewOpen(true)
  }

  const handleSelectEmail = (email: EmailMessage) => {
    setSelectedEmail(email)

    // Mark as read if it wasn't already
    if (!email.read) {
      // In a real app, you would update this on the server
      // For now, we'll just update it in our local state
      const updatedEmails = emails.map((e) => (e.id === email.id ? { ...e, read: true } : e))
      // In a real implementation, you would update the emails state here
    }
  }

  const handleSelectAllEmails = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedEmails(filteredEmails.map((email) => email.id))
    } else {
      setSelectedEmails([])
    }
  }

  const handleToggleEmailSelection = (emailId: string) => {
    if (selectedEmails.includes(emailId)) {
      setSelectedEmails(selectedEmails.filter((id) => id !== emailId))
    } else {
      setSelectedEmails([...selectedEmails, emailId])
    }
  }

  const handleStarEmail = (emailId: string, starred: boolean) => {
    // In a real app, you would update this on the server
    // For now, we'll just log it
    console.log(`Email ${emailId} starred: ${!starred}`)
  }

  const handleDeleteSelected = () => {
    // In a real app, you would delete these emails on the server
    // For now, we'll just log it
    console.log(`Deleting emails: ${selectedEmails.join(", ")}`)
    setSelectedEmails([])
  }

  const handleMarkAsRead = () => {
    // In a real app, you would update these on the server
    // For now, we'll just log it
    console.log(`Marking emails as read: ${selectedEmails.join(", ")}`)
    setSelectedEmails([])
  }

  const handleArchiveSelected = () => {
    // In a real app, you would archive these emails on the server
    // For now, we'll just log it
    console.log(`Archiving emails: ${selectedEmails.join(", ")}`)
    setSelectedEmails([])
  }

  const handleRefresh = () => {
    // In a real app, you would fetch new emails from the server
    // For now, we'll just log it
    console.log("Refreshing emails")
  }

  const handleCompose = () => {
    setIsComposeOpen(true)
    setComposeData({
      to: "",
      cc: "",
      bcc: "",
      subject: "",
      body: "",
    })
  }

  const handleSendEmail = () => {
    // In a real app, you would send the email via an API
    console.log("Sending email:", composeData)
    setIsComposeOpen(false)
    // Show success message
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleReply = () => {
    if (!selectedEmail) return

    setIsReplyOpen(true)
    setReplyData({
      to: selectedEmail.from.email,
      subject: `Re: ${selectedEmail.subject}`,
      body: `\n\n-------- Original Message --------\nFrom: ${selectedEmail.from.name} <${selectedEmail.from.email}>\nDate: ${selectedEmail.date} ${selectedEmail.time}\nSubject: ${selectedEmail.subject}\n\n${selectedEmail.body.replace(/<[^>]*>/g, "")}`,
    })
  }

  const handleSendReply = () => {
    // In a real app, you would send the reply via an API
    console.log("Sending reply:", replyData)
    setIsReplyOpen(false)
    // Show success message
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const getFolderCount = (folder: string) => {
    return emails.filter((email) => email.folder === folder).length
  }

  const getUnreadCount = (folder: string) => {
    return emails.filter((email) => email.folder === folder && !email.read).length
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Email Management</h1>
      <p className="text-muted-foreground mb-8">Manage email templates and view email logs using Resend.</p>

      {showSuccess && (
        <Alert className="mb-6 bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800">
          <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle className="text-green-600 dark:text-green-400">Success</AlertTitle>
          <AlertDescription className="text-green-600 dark:text-green-400">
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="inbox" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="templates">Email Templates</TabsTrigger>
          <TabsTrigger value="logs">Email Logs</TabsTrigger>
          <TabsTrigger value="settings">Resend Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="inbox" className="mt-0">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Email Sidebar */}
            <div className="w-full md:w-64 space-y-4">
              <Button className="w-full" onClick={handleCompose}>
                <Plus className="mr-2 h-4 w-4" />
                Compose
              </Button>

              <div className="space-y-1">
                <Button
                  variant={activeInboxTab === "inbox" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveInboxTab("inbox")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Inbox
                  {getUnreadCount("inbox") > 0 && (
                    <Badge variant="secondary" className="ml-auto">
                      {getUnreadCount("inbox")}
                    </Badge>
                  )}
                </Button>
                <Button
                  variant={activeInboxTab === "sent" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveInboxTab("sent")}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Sent
                  <Badge variant="outline" className="ml-auto">
                    {getFolderCount("sent")}
                  </Badge>
                </Button>
                <Button
                  variant={activeInboxTab === "drafts" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveInboxTab("drafts")}
                >
                  <File className="mr-2 h-4 w-4" />
                  Drafts
                  <Badge variant="outline" className="ml-auto">
                    {getFolderCount("drafts")}
                  </Badge>
                </Button>
                <Button
                  variant={activeInboxTab === "archive" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveInboxTab("archive")}
                >
                  <Archive className="mr-2 h-4 w-4" />
                  Archive
                </Button>
                <Button
                  variant={activeInboxTab === "trash" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveInboxTab("trash")}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Trash
                </Button>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium mb-2 px-2">Labels</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                    Client
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    Support
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    Finance
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                    Internal
                  </Button>
                </div>
              </div>
            </div>

            {/* Email Content */}
            <div className="flex-1">
              {selectedEmail ? (
                <div className="border rounded-md">
                  {/* Email View Header */}
                  <div className="p-4 border-b flex items-center justify-between">
                    <Button variant="ghost" onClick={() => setSelectedEmail(null)}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={handleReply}>
                        <Reply className="mr-2 h-4 w-4" />
                        Reply
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Forward className="mr-2 h-4 w-4" />
                        Forward
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleStarEmail(selectedEmail.id, selectedEmail.starred)}
                      >
                        {selectedEmail.starred ? (
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ) : (
                          <StarOff className="h-4 w-4" />
                        )}
                        <span className="sr-only">Star</span>
                      </Button>
                    </div>
                  </div>

                  {/* Email Subject */}
                  <div className="p-4 border-b">
                    <h2 className="text-xl font-bold">{selectedEmail.subject}</h2>
                    <div className="flex items-center mt-2">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage
                          src={selectedEmail.from.avatar || "/placeholder.svg"}
                          alt={selectedEmail.from.name}
                        />
                        <AvatarFallback>{selectedEmail.from.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">
                          {selectedEmail.from.name}{" "}
                          <span className="text-muted-foreground font-normal">&lt;{selectedEmail.from.email}&gt;</span>
                        </div>
                        <div className="text-sm text-muted-foreground">To: {selectedEmail.to.join(", ")}</div>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">
                        {selectedEmail.date} at {selectedEmail.time}
                      </div>
                    </div>
                    {selectedEmail.labels.length > 0 && (
                      <div className="flex mt-2 space-x-2">
                        {selectedEmail.labels.map((label, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {label}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Email Body */}
                  <div className="p-4">
                    <div dangerouslySetInnerHTML={{ __html: selectedEmail.body }} />
                  </div>

                  {/* Attachments */}
                  {selectedEmail.hasAttachments && selectedEmail.attachments && (
                    <div className="p-4 border-t">
                      <h3 className="font-medium mb-2">Attachments</h3>
                      <div className="space-y-2">
                        {selectedEmail.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center p-2 border rounded-md">
                            <Paperclip className="h-4 w-4 mr-2 text-muted-foreground" />
                            <div>
                              <div className="font-medium">{attachment.name}</div>
                              <div className="text-xs text-muted-foreground">{attachment.size}</div>
                            </div>
                            <Button variant="ghost" size="sm" className="ml-auto">
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {/* Email List Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="select-all"
                        className="mr-2"
                        checked={selectedEmails.length === filteredEmails.length && filteredEmails.length > 0}
                        onCheckedChange={handleSelectAllEmails}
                      />
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" onClick={handleRefresh} disabled={selectedEmails.length > 0}>
                          <RefreshCcw className="h-4 w-4" />
                          <span className="sr-only">Refresh</span>
                        </Button>
                        {selectedEmails.length > 0 && (
                          <>
                            <Button variant="ghost" size="sm" onClick={handleArchiveSelected}>
                              <Archive className="h-4 w-4" />
                              <span className="sr-only">Archive</span>
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleDeleteSelected}>
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleMarkAsRead}>
                              <MailOpen className="h-4 w-4" />
                              <span className="sr-only">Mark as read</span>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search emails..."
                        className="pl-8 w-[200px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Email List */}
                  <div className="border rounded-md overflow-hidden">
                    {filteredEmails.length === 0 ? (
                      <div className="p-8 text-center text-muted-foreground">No emails found</div>
                    ) : (
                      <div className="divide-y">
                        {filteredEmails.map((email) => (
                          <div
                            key={email.id}
                            className={`flex items-start p-4 hover:bg-muted/50 cursor-pointer ${!email.read ? "bg-blue-50 dark:bg-blue-900/10" : ""}`}
                            onClick={() => handleSelectEmail(email)}
                          >
                            <div className="flex items-center mr-4">
                              <Checkbox
                                checked={selectedEmails.includes(email.id)}
                                onCheckedChange={() => handleToggleEmailSelection(email.id)}
                                onClick={(e) => e.stopPropagation()}
                                className="mr-2"
                              />
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleStarEmail(email.id, email.starred)
                                }}
                              >
                                {email.starred ? (
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ) : (
                                  <Star className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div className="font-medium truncate">
                                  {activeInboxTab === "sent" ? `To: ${email.to.join(", ")}` : email.from.name}
                                </div>
                                <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">{email.date}</div>
                              </div>
                              <div className="font-medium truncate mb-1">{email.subject}</div>
                              <div className="text-sm text-muted-foreground truncate">
                                {email.body.replace(/<[^>]*>/g, "").substring(0, 100)}...
                              </div>
                              <div className="flex items-center mt-1">
                                {email.hasAttachments && <Paperclip className="h-3 w-3 text-muted-foreground mr-1" />}
                                {email.labels.map((label, index) => (
                                  <Badge key={index} variant="outline" className="mr-1 text-xs">
                                    {label}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="mt-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search templates..."
                className="pl-8 w-full md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              onClick={() => {
                setSelectedTemplate(null)
                setIsTemplateEditorOpen(true)
              }}
            >
              Create Template
            </Button>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Last Edited</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTemplates.map((template) => (
                  <TableRow key={template.id}>
                    <TableCell className="font-medium">{template.name}</TableCell>
                    <TableCell>{template.subject}</TableCell>
                    <TableCell>{template.lastEdited}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          template.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : template.status === "draft"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {template.status.charAt(0).toUpperCase() + template.status.slice(1)}
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
                          <DropdownMenuItem onClick={() => handleEditTemplate(template)}>Edit</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handlePreviewTemplate(template)}>Preview</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 focus:text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="logs" className="mt-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search email logs..."
                className="pl-8 w-full md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sent At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.recipient}</TableCell>
                    <TableCell>{log.subject}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          log.status === "delivered"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : log.status === "opened"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : log.status === "clicked"
                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                                : log.status === "failed" || log.status === "bounced"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>{log.sentAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalLogPages > 1 && (
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
                Page {currentPage} of {totalLogPages}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalLogPages))}
                disabled={currentPage === totalLogPages}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="settings" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Resend API Settings</CardTitle>
              <CardDescription>Configure your Resend.com email service integration.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="resend-api-key">API Key</Label>
                <Input id="resend-api-key" type="password" defaultValue="re_xxxxxxxxxx" />
                <p className="text-xs text-muted-foreground">
                  Your Resend API key. Keep this secret and never expose it to the browser.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="from-email">Default From Email</Label>
                <Input id="from-email" type="email" defaultValue="hello@pushbuttonbuild.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reply-to">Default Reply-To Email</Label>
                <Input id="reply-to" type="email" defaultValue="support@pushbuttonbuild.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="verified-domain">Verified Domain</Label>
                <Input id="verified-domain" defaultValue="pushbuttonbuild.com" />
                <p className="text-xs text-muted-foreground">
                  You must verify domain ownership in the Resend dashboard before sending emails.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="track-opens">Track Opens</Label>
                  <p className="text-sm text-muted-foreground">Track when recipients open your emails</p>
                </div>
                <Switch id="track-opens" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="track-clicks">Track Clicks</Label>
                  <p className="text-sm text-muted-foreground">Track when recipients click links in your emails</p>
                </div>
                <Switch id="track-clicks" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Settings
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Template Editor Dialog */}
      <Dialog open={isTemplateEditorOpen} onOpenChange={setIsTemplateEditorOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedTemplate ? "Edit Email Template" : "Create Email Template"}</DialogTitle>
            <DialogDescription>
              {selectedTemplate
                ? "Make changes to the existing email template."
                : "Create a new email template for your communications."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="template-name" className="text-right">
                Name
              </Label>
              <Input
                id="template-name"
                defaultValue={selectedTemplate?.name || ""}
                className="col-span-3"
                placeholder="e.g., Welcome Email"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="template-subject" className="text-right">
                Subject
              </Label>
              <Input
                id="template-subject"
                defaultValue={selectedTemplate?.subject || ""}
                className="col-span-3"
                placeholder="e.g., Welcome to PushButtonBuild.com!"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="template-content" className="text-right pt-2">
                Content
              </Label>
              <div className="col-span-3 space-y-2">
                <Tabs defaultValue="design" className="w-full">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="design">Design</TabsTrigger>
                    <TabsTrigger value="html">HTML</TabsTrigger>
                    <TabsTrigger value="text">Plain Text</TabsTrigger>
                  </TabsList>
                  <TabsContent value="design" className="border rounded-md p-4 min-h-[300px]">
                    <p className="text-muted-foreground text-center pt-12">
                      Visual email editor would be integrated here
                    </p>
                  </TabsContent>
                  <TabsContent value="html">
                    <Textarea
                      className="font-mono text-sm min-h-[300px]"
                      defaultValue={`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Welcome to PushButtonBuild.com</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; color: #333333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="color: #0070f3; margin-bottom: 10px;">Welcome to PushButtonBuild.com!</h1>
      <p style="font-size: 16px;">We're excited to help you turn your expertise into a digital reality.</p>
    </div>
    
    <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h2 style="color: #333; margin-top: 0;">Getting Started</h2>
      <p>Here are a few things you can do right now:</p>
      <ul>
        <li>Complete the App Wizard to define your app idea</li>
        <li>Explore our resources for development tools and services</li>
        <li>Check out the timeline to understand the development process</li>
        <li>Book a consultation call if you need personalized guidance</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
      <a href="https://pushbuttonbuild.com/dashboard" style="background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Go to Dashboard</a>
    </div>
    
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 14px; color: #666;">
      <p>If you have any questions, simply reply to this email or contact our support team.</p>
      <p>© 2023 PushButtonBuild.com. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`}
                    />
                  </TabsContent>
                  <TabsContent value="text">
                    <Textarea
                      className="font-mono text-sm min-h-[300px]"
                      defaultValue={`Welcome to PushButtonBuild.com!

We're excited to help you turn your expertise into a digital reality.

GETTING STARTED
Here are a few things you can do right now:
- Complete the App Wizard to define your app idea
- Explore our resources for development tools and services
- Check out the timeline to understand the development process
- Book a consultation call if you need personalized guidance

Visit your dashboard: https://pushbuttonbuild.com/dashboard

If you have any questions, simply reply to this email or contact our support team.

© 2023 PushButtonBuild.com. All rights reserved.`}
                    />
                  </TabsContent>
                </Tabs>
                <div className="flex items-center space-x-2">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    Available variables: {"{name}"}, {"{email}"}, {"{login_link}"}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="template-status" className="text-right">
                Status
              </Label>
              <Select defaultValue={selectedTemplate?.status || "draft"}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setIsTemplateEditorOpen(false)}>
              Cancel
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => handlePreviewTemplate(selectedTemplate || templates[0])}>
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button type="submit">Save Template</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Template Preview Dialog */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Email Preview</DialogTitle>
            <DialogDescription>Preview how your email will appear to recipients.</DialogDescription>
          </DialogHeader>
          <div className="border rounded-md p-4 bg-white">
            <div className="border-b pb-2 mb-4">
              <div className="text-sm text-muted-foreground">
                From: PushButtonBuild &lt;hello@pushbuttonbuild.com&gt;
              </div>
              <div className="text-sm text-muted-foreground">To: John Doe &lt;john@example.com&gt;</div>
              <div className="text-sm text-muted-foreground">
                Subject: {selectedTemplate?.subject || "Welcome to PushButtonBuild.com!"}
              </div>
            </div>
            <iframe
              srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Welcome to PushButtonBuild.com</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; color: #333333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="color: #0070f3; margin-bottom: 10px;">Welcome to PushButtonBuild.com!</h1>
      <p style="font-size: 16px;">We're excited to help you turn your expertise into a digital reality.</p>
    </div>
    
    <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h2 style="color: #333; margin-top: 0;">Getting Started</h2>
      <p>Here are a few things you can do right now:</p>
      <ul>
        <li>Complete the App Wizard to define your app idea</li>
        <li>Explore our resources for development tools and services</li>
        <li>Check out the timeline to understand the development process</li>
        <li>Book a consultation call if you need personalized guidance</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
      <a href="https://pushbuttonbuild.com/dashboard" style="background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Go to Dashboard</a>
    </div>
    
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 14px; color: #666;">
      <p>If you have any questions, simply reply to this email or contact our support team.</p>
      <p>© 2023 PushButtonBuild.com. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`}
              className="w-full h-[400px] border-0"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPreviewOpen(false)}>
              Close
            </Button>
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Send Test Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Compose Email Dialog */}
      <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Compose Email</DialogTitle>
            <DialogDescription>Create and send a new email</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email-to" className="text-right">
                To
              </Label>
              <Input
                id="email-to"
                value={composeData.to}
                onChange={(e) => setComposeData({ ...composeData, to: e.target.value })}
                className="col-span-3"
                placeholder="recipient@example.com"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email-cc" className="text-right">
                CC
              </Label>
              <Input
                id="email-cc"
                value={composeData.cc}
                onChange={(e) => setComposeData({ ...composeData, cc: e.target.value })}
                className="col-span-3"
                placeholder="cc@example.com"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email-bcc" className="text-right">
                BCC
              </Label>
              <Input
                id="email-bcc"
                value={composeData.bcc}
                onChange={(e) => setComposeData({ ...composeData, bcc: e.target.value })}
                className="col-span-3"
                placeholder="bcc@example.com"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email-subject" className="text-right">
                Subject
              </Label>
              <Input
                id="email-subject"
                value={composeData.subject}
                onChange={(e) => setComposeData({ ...composeData, subject: e.target.value })}
                className="col-span-3"
                placeholder="Email subject"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="email-body" className="text-right pt-2">
                Message
              </Label>
              <div className="col-span-3">
                <Textarea
                  id="email-body"
                  value={composeData.body}
                  onChange={(e) => setComposeData({ ...composeData, body: e.target.value })}
                  className="min-h-[200px]"
                  placeholder="Write your message here..."
                />
                <div className="flex items-center mt-2">
                  <Button variant="outline" size="sm" className="mr-2">
                    <Paperclip className="h-4 w-4 mr-1" />
                    Attach File
                  </Button>
                  <Select defaultValue="normal">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsComposeOpen(false)}>
              Cancel
            </Button>
            <Button variant="outline">Save as Draft</Button>
            <Button onClick={handleSendEmail}>
              <Send className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reply Email Dialog */}
      <Dialog open={isReplyOpen} onOpenChange={setIsReplyOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Reply to Email</DialogTitle>
            <DialogDescription>Reply to the selected email</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reply-to" className="text-right">
                To
              </Label>
              <Input
                id="reply-to"
                value={replyData.to}
                onChange={(e) => setReplyData({ ...replyData, to: e.target.value })}
                className="col-span-3"
                readOnly
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reply-subject" className="text-right">
                Subject
              </Label>
              <Input
                id="reply-subject"
                value={replyData.subject}
                onChange={(e) => setReplyData({ ...replyData, subject: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="reply-body" className="text-right pt-2">
                Message
              </Label>
              <div className="col-span-3">
                <Textarea
                  id="reply-body"
                  value={replyData.body}
                  onChange={(e) => setReplyData({ ...replyData, body: e.target.value })}
                  className="min-h-[200px]"
                />
                <div className="flex items-center mt-2">
                  <Button variant="outline" size="sm" className="mr-2">
                    <Paperclip className="h-4 w-4 mr-1" />
                    Attach File
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReplyOpen(false)}>
              Cancel
            </Button>
            <Button variant="outline">Save as Draft</Button>
            <Button onClick={handleSendReply}>
              <Send className="mr-2 h-4 w-4" />
              Send Reply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
