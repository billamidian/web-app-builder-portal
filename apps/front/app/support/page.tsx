"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, MessageSquare, Send, User } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "Hello! I'm your AI assistant. How can I help you with your web app today?" },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputMessage.trim()) return

    // Add user message
    setChatMessages([...chatMessages, { sender: "user", text: inputMessage }])

    // Simulate bot response
    setTimeout(() => {
      let botResponse =
        "I'm analyzing your question. For complex issues, you might want to book a consultation with our team."

      if (inputMessage.toLowerCase().includes("database")) {
        botResponse =
          "For database integration, we recommend checking our resources page for database services. We have guides for MongoDB, Firebase, and Supabase. Would you like me to point you to specific resources?"
      } else if (inputMessage.toLowerCase().includes("design")) {
        botResponse =
          "For design assistance, check out our resources page for design tools. We recommend Figma for UI/UX design. Would you like some tips on designing your web app?"
      } else if (inputMessage.toLowerCase().includes("deploy") || inputMessage.toLowerCase().includes("hosting")) {
        botResponse =
          "For deployment and hosting, we recommend Vercel for Next.js applications, Netlify for static sites, or AWS for more complex setups. Check our resources page for more details."
      }

      setChatMessages((prev) => [...prev, { sender: "bot", text: botResponse }])
    }, 1000)

    setInputMessage("")
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Need help with your web app project? Get support through our AI chatbot or contact our team directly.
      </p>

      <Tabs defaultValue="chatbot" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
          <TabsTrigger value="contact">Contact Form</TabsTrigger>
        </TabsList>

        <TabsContent value="chatbot" className="mt-0">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>AI Support Assistant</CardTitle>
              <CardDescription>Ask questions about web app development, resources, or your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] overflow-y-auto mb-4 space-y-4 p-4 border rounded-lg">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type your question here..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <div className="text-sm text-muted-foreground flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                For complex issues, consider booking a consultation
              </div>
              <Button variant="outline" asChild>
                <Link href="/pricing">Book Consultation</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Contact Our Team</CardTitle>
              <CardDescription>Fill out this form and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <div className="text-sm text-muted-foreground flex items-center">
                <User className="h-4 w-4 mr-2" />
                Prefer to talk to a human? Book a consultation call
              </div>
              <Button variant="outline" asChild>
                <Link href="/pricing">Book Consultation</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">How do I get started with the App Wizard?</h3>
            <p className="text-muted-foreground">
              Simply navigate to the App Wizard page from the main navigation and follow the step-by-step process. The
              wizard will guide you through defining your app idea, features, target audience, and more.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">What resources do you recommend for beginners?</h3>
            <p className="text-muted-foreground">
              For beginners, we recommend starting with our Resources page, which has curated tools and services. The
              Timeline page will also help you understand the development process step by step.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">How can I track my progress?</h3>
            <p className="text-muted-foreground">
              Use our Timeline page to track your progress through the development process. You can check off completed
              tasks and see what steps are coming next in your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
