"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simple validation
      if (!email || !password) {
        setError("Please enter both email and password")
        setIsLoading(false)
        return
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters")
        setIsLoading(false)
        return
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Set authentication in localStorage
      localStorage.setItem("isAuthenticated", "true")

      // For demo purposes, any email containing "admin" will be considered an admin
      // In a real app, this would be determined by the backend
      const isAdmin = email.includes("admin")
      localStorage.setItem("isAdmin", isAdmin ? "true" : "false")

      // Show success toast
      toast({
        title: isAdmin ? "Admin login successful" : "Login successful",
        description: isAdmin ? "Welcome to the admin dashboard" : "Welcome to your portal",
      })

      // Redirect based on user role - only to /admin or /portal
      if (isAdmin) {
        router.push("/admin")
      } else {
        router.push("/portal")
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <img src="/plogo.jpg" alt="Logo" className="h-12 w-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Alert className="mb-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Demo Login Information</AlertTitle>
            <AlertDescription>
              For admin access, use an email containing &quot;admin&quot; (e.g., admin@example.com)
              <br />
              For regular user access, use any other email
              <br />
              Password must be at least 6 characters
            </AlertDescription>
          </Alert>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="p-0 h-auto text-sm" type="button">
                  Forgot password?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-sm text-muted-foreground text-center mt-2">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
