"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Users,
  CreditCard,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Mail,
  Bell,
  Search,
  Menu,
  HelpCircle,
  User,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Suspense } from "react"

interface AdminLayoutProps {
  children: React.ReactNode
}

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
  badge?: string
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New user registered",
      description: "John Doe just created an account",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Payment received",
      description: "You received a payment of $199",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "New form submission",
      description: "A new contact form was submitted",
      time: "3 hours ago",
      read: true,
    },
  ])

  const navItems: NavItem[] = [
    {
      href: "/admin",
      label: "Overview",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/users",
      label: "Users",
      icon: <Users className="mr-2 h-4 w-4" />,
      badge: "New",
    },
    {
      href: "/admin/payments",
      label: "Payments",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/email",
      label: "Email",
      icon: <Mail className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/submissions",
      label: "Form Submissions",
      icon: <FileText className="mr-2 h-4 w-4" />,
      badge: "3",
    },
    {
      href: "/admin/timeline-management",
      label: "Timeline Management",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/settings",
      label: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  useEffect(() => {
    // Check if user is authenticated and is an admin
    const authStatus = localStorage.getItem("isAuthenticated")
    const adminStatus = localStorage.getItem("isAdmin")

    setIsAuthenticated(authStatus === "true")
    setIsAdmin(adminStatus === "true")
    setIsLoading(false)

    if (authStatus !== "true") {
      router.push("/login")
    } else if (adminStatus !== "true") {
      // If authenticated but not admin, redirect to portal
      router.push("/portal")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("isAdmin")
    router.push("/login")
  }

  const markAllNotificationsAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    if (!pathname) return []

    const segments = pathname.split("/").filter(Boolean)
    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`
      return {
        href,
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
      }
    })
  }

  const breadcrumbs = generateBreadcrumbs()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated || !isAdmin) {
    return null // Will redirect in the useEffect
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen bg-muted/10">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-30 border-r bg-background shadow-sm">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="font-bold text-xl">Admin Portal</div>
            </div>

            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start mb-1 relative"
                  asChild
                >
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </Button>
              ))}
            </nav>

            <div className="p-4 border-t mt-auto">
              <Button variant="outline" className="w-full flex items-center justify-start" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-40">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="font-bold text-xl">Admin Portal</div>
              </div>

              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto p-2">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start mb-1 relative"
                    asChild
                  >
                    <Link href={item.href}>
                      {item.icon}
                      {item.label}
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </Button>
                ))}
              </nav>

              <div className="p-4 border-t mt-auto">
                <Button variant="outline" className="w-full flex items-center justify-start" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="flex-1 md:pl-64">
          {/* Header */}
          <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <div className="hidden md:flex flex-1 items-center">
              {/* Breadcrumbs */}
              <nav className="flex items-center text-sm text-muted-foreground">
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.href} className="flex items-center">
                    {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
                    <Link
                      href={crumb.href}
                      className={
                        index === breadcrumbs.length - 1 ? "font-medium text-foreground" : "hover:text-foreground"
                      }
                    >
                      {crumb.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-2 md:gap-4 ml-auto">
              {/* Help */}
              <Button variant="ghost" size="icon" asChild>
                <Link href="/admin/help">
                  <HelpCircle className="h-5 w-5" />
                  <span className="sr-only">Help</span>
                </Link>
              </Button>

              {/* Theme Toggle */}
              <ModeToggle />

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadNotificationsCount > 0 && (
                      <span className="absolute top-1 right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    )}
                    <span className="sr-only">Notifications</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="flex items-center justify-between p-2">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <Button variant="ghost" size="sm" onClick={markAllNotificationsAsRead} className="text-xs h-8">
                      Mark all as read
                    </Button>
                  </div>
                  <DropdownMenuSeparator />
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">No notifications</div>
                  ) : (
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-3 hover:bg-muted cursor-pointer ${!notification.read ? "bg-muted/50" : ""}`}
                        >
                          <div className="font-medium text-sm">{notification.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">{notification.description}</div>
                          <div className="text-xs text-muted-foreground mt-1">{notification.time}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="cursor-pointer justify-center">
                    <Link href="/admin/notifications" className="w-full text-center">
                      View all notifications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/admin-interface.png" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/admin/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-4 md:p-6">{children}</main>

          {/* Footer */}
          <footer className="border-t py-4 px-6 text-center text-sm text-muted-foreground">
            <p>© 2025 Web App Builder Portal. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Suspense>
  )
}
