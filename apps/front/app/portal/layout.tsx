import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen flex-col">
        {/* Portal Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 flex">
              <Link href="/" className="flex items-center gap-2">
                <img src="/plogo.jpg" alt="PushButtonBuild Logo" className="w-8 h-8" />
                <span className="hidden font-bold sm:inline-block">PushButtonBuild Portal</span>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center space-x-4">
                <Link href="/portal" className="text-sm font-medium transition-colors hover:text-primary">
                  Dashboard
                </Link>
                <Link href="/portal/wizard" className="text-sm font-medium transition-colors hover:text-primary">
                  App Wizard
                </Link>
                <Link href="/portal/resources" className="text-sm font-medium transition-colors hover:text-primary">
                  Resources
                </Link>
                <Link href="/portal/support" className="text-sm font-medium transition-colors hover:text-primary">
                  Support
                </Link>
                <Link href="/portal/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                  Pricing
                </Link>
              </nav>
              <div className="flex items-center space-x-2">
                <ModeToggle />
                <Button variant="outline" size="sm" asChild>
                  <Link href="/login">Logout</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-4 px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 PushButtonBuild Portal. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}
