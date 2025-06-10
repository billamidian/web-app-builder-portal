import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cookies } from "next/headers"
import { ApolloClientProvider } from "@/lib/apollo-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PushButtonBuild - Web App Builder Portal",
  description: "Build your web application with ease",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const isAdminOrPortal = cookieStore.get("isAdminOrPortal")?.value === "true"

  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              {!isAdminOrPortal && <Navbar />}
              <main className="flex-1">{children}</main>
              {!isAdminOrPortal && <Footer />}
            </div>
          </ThemeProvider>
        </ApolloClientProvider>
      </body>
    </html>
  )
}
