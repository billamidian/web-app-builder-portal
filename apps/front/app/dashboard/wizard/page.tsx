"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

export default function WizardPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the form data here
    alert("App idea submitted successfully! Check your dashboard for next steps.")
  }

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">App Wizard</h1>
        <p className="text-muted-foreground mb-8">
          Let's define your app idea step by step. This wizard will help you clarify your concept, identify your target
          audience, and plan your features.
        </p>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-10 h-10 rounded-full border 
                  ${
                    currentStep > index + 1
                      ? "bg-primary text-primary-foreground"
                      : currentStep === index + 1
                        ? "border-primary text-primary"
                        : "text-muted-foreground"
                  }`}
              >
                {currentStep > index + 1 ? <Check className="h-5 w-5" /> : index + 1}
              </div>
            ))}
          </div>
          <div className="relative">
            <div
              className="absolute top-0 left-0 h-1 bg-primary"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
            <div className="h-1 w-full bg-muted"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>App Idea</CardTitle>
                <CardDescription>Start by describing your app idea in a few sentences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="app-name">App Name</Label>
                  <Input id="app-name" placeholder="Enter a name for your app" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="app-description">App Description</Label>
                  <Textarea
                    id="app-description"
                    placeholder="Describe what your app does and the problem it solves"
                    rows={5}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" disabled>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>Define the key features of your application.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="core-features">Core Features</Label>
                  <Textarea
                    id="core-features"
                    placeholder="List the essential features your app needs to have"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nice-to-have">Nice-to-Have Features</Label>
                  <Textarea
                    id="nice-to-have"
                    placeholder="List additional features that would be good to have but aren't essential"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="future-features">Future Features</Label>
                  <Textarea
                    id="future-features"
                    placeholder="List features you might want to add in the future"
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Target Audience</CardTitle>
                <CardDescription>Define who your app is for.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-users">Primary Users</Label>
                  <Textarea
                    id="primary-users"
                    placeholder="Describe your primary user demographic (age, occupation, tech-savviness, etc.)"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-needs">User Needs</Label>
                  <Textarea
                    id="user-needs"
                    placeholder="What problems or needs does your app address for these users?"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-goals">User Goals</Label>
                  <Textarea id="user-goals" placeholder="What do users want to achieve with your app?" rows={3} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Competitors</CardTitle>
                <CardDescription>Identify similar apps and how yours will be different.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="direct-competitors">Direct Competitors</Label>
                  <Textarea
                    id="direct-competitors"
                    placeholder="List apps that solve the same problem as yours"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="indirect-competitors">Indirect Competitors</Label>
                  <Textarea
                    id="indirect-competitors"
                    placeholder="List apps that solve similar problems or target the same audience"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="differentiation">Your Differentiation</Label>
                  <Textarea
                    id="differentiation"
                    placeholder="How will your app be different or better than existing solutions?"
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>Technical Requirements</CardTitle>
                <CardDescription>Define the technical aspects of your application.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platforms">Platforms</Label>
                  <Textarea
                    id="platforms"
                    placeholder="Which platforms will your app support? (Web, iOS, Android, etc.)"
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="integrations">Integrations</Label>
                  <Textarea
                    id="integrations"
                    placeholder="List any third-party services or APIs your app will need to integrate with"
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech-stack">Technology Stack Preferences</Label>
                  <Textarea
                    id="tech-stack"
                    placeholder="Do you have any preferences for technologies, frameworks, or languages?"
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Textarea
                    id="timeline"
                    placeholder="What's your expected timeline for development and launch?"
                    rows={2}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button type="submit">Submit</Button>
              </CardFooter>
            </Card>
          )}
        </form>
      </div>
    </div>
  )
}
