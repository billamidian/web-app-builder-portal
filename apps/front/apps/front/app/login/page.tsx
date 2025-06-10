"use client"

import type React from "react"

import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { gql } from "@/lib/generated/gql"

const LOGIN_MUTATION = gql(`
  mutation Login($input: LoginDto!) {
    login(input: $input) {
      user {
        id
        email
        name
        role
      }
      token
    }
  }
`)

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await login({
        variables: {
          input: { email, password },
        },
      })

      if (result.data?.login) {
        // Redirect based on user role
        const role = result.data.login.user.role
        if (role === "admin") {
          router.push("/admin")
        } else {
          router.push("/dashboard")
        }
      }
    } catch (err) {
      console.error("Login error:", err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-600 text-sm">{error.message}</div>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
          <div className="mt-4 text-sm text-gray-600">
            <p>Demo credentials:</p>
            <p>Admin: admin@pushbuttonbuild.com / admin123</p>
            <p>User: user@example.com / user123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
