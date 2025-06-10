import type React from "react"
import type { Metadata } from "next"
import "./calendar.css"

export const metadata: Metadata = {
  title: "Booking Calendar | PushButtonBuild",
  description: "Book a strategy session with PushButtonBuild",
  robots: {
    index: false,
    follow: false,
  },
}

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-white">{children}</div>
}
