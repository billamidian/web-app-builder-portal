"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(authStatus === "true")
    setIsLoading(false)

    if (authStatus !== "true") {
      router.push("/login")
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in the useEffect
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
        <div className="flex flex-col h-full py-6 px-4">
          <div className="font-bold text-lg mb-8 px-2">PushButtonBuild.com</div>
          <nav className="space-y-1 flex-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/wizard">App Wizard</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/resources">Resources</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/timeline">Timeline</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/support">Support</Link>
            </Button>
          </nav>
          <div className="pt-4 border-t">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                localStorage.removeItem("isAuthenticated")
                router.push("/")
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden w-full fixed top-0 z-50 border-b bg-background">
        <div className="flex items-center justify-between p-4">
          <div className="font-bold">PushButtonBuild.com</div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              localStorage.removeItem("isAuthenticated")
              router.push("/")
            }}
          >
            Logout
          </Button>
        </div>
        <div className="flex overflow-x-auto border-t">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/wizard">Wizard</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/resources">Resources</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/timeline">Timeline</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/support">Support</Link>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 md:pl-64">
        <div className="md:pt-0 pt-24">{children}</div>
      </div>
    </div>
  )
}
