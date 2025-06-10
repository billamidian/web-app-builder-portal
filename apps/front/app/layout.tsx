import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web App Builder Portal",
  description: "A portal for members who want to build a web app",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Don't show navbar on admin or portal pages
  const isAdminOrPortal =
    typeof window !== "undefined" &&
    (window.location.pathname.startsWith("/admin") || window.location.pathname.startsWith("/portal"))

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            {!isAdminOrPortal && <Navbar />}
            <main className="flex-1">{children}</main>
            {!isAdminOrPortal && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
