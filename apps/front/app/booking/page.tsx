"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="container py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-4 py-12">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold">Booking Request Received</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Thank you for your interest in scheduling a strategy session. We'll review your request and contact you
              within 1 business day to confirm your appointment.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
              Submit Another Request
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Book a Consultation</h1>
        <p className="text-muted-foreground mb-8">
          Schedule a call with our team to discuss your web app project. We'll help you clarify your idea, identify
          technical requirements, and create a development plan.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Request a Strategy Session</CardTitle>
            <CardDescription>
              Fill out the form below to request a 30-minute strategy session. We'll contact you to confirm a time that
              works for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(123) 456-7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferred-time">Preferred Time</Label>
                  <Select defaultValue="morning">
                    <SelectTrigger id="preferred-time">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                      <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-description">Tell us about your project</Label>
                <Textarea
                  id="project-description"
                  placeholder="Briefly describe your web app idea and what you hope to achieve..."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="how-heard">How did you hear about us?</Label>
                <Select defaultValue="search">
                  <SelectTrigger id="how-heard">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Submitting..." : "Request Strategy Session"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll contact you within 1 business day to confirm your appointment.
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">During the Call</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>We'll discuss your app idea and business goals</li>
                <li>Identify key features and technical requirements</li>
                <li>Explore potential challenges and solutions</li>
                <li>Discuss timeline and budget considerations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">After the Call</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>You'll receive a summary of our discussion</li>
                <li>We'll provide a high-level project plan</li>
                <li>You'll get access to our member resources (if applicable)</li>
                <li>We'll follow up with next steps based on your needs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
