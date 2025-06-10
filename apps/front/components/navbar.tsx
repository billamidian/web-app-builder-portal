"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Web App Builder Portal
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/portal"
            >
              Portal
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/admin"
            >
              Admin
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search or other components can go here */}
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
