"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, CheckCircle2, Circle, Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

interface TimelineItem {
  id: string
  title: string
  description: string
  tasks: {
    id: string
    label: string
    completed: boolean
  }[]
}

export default function TimelinePage() {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([
    {
      id: "planning",
      title: "Planning Phase",
      description: "Define your app concept and requirements",
      tasks: [
        { id: "idea", label: "Complete the App Wizard", completed: false },
        { id: "research", label: "Research competitors and market", completed: false },
        { id: "features", label: "Prioritize features (MVP vs. future)", completed: false },
        { id: "wireframes", label: "Create basic wireframes", completed: false },
      ],
    },
    {
      id: "setup",
      title: "Project Setup",
      description: "Set up your development environment and tools",
      tasks: [
        { id: "tools", label: "Install development tools", completed: false },
        { id: "repo", label: "Create a Git repository", completed: false },
        { id: "framework", label: "Choose and set up your framework", completed: false },
        { id: "hosting", label: "Set up hosting and deployment", completed: false },
      ],
    },
    {
      id: "design",
      title: "Design Phase",
      description: "Create the visual design for your application",
      tasks: [
        { id: "ui-design", label: "Design UI components", completed: false },
        { id: "responsive", label: "Ensure responsive design", completed: false },
        { id: "accessibility", label: "Implement accessibility features", completed: false },
        { id: "design-system", label: "Create a design system", completed: false },
      ],
    },
    {
      id: "development",
      title: "Development Phase",
      description: "Build the core functionality of your application",
      tasks: [
        { id: "frontend", label: "Develop frontend components", completed: false },
        { id: "backend", label: "Set up backend and API", completed: false },
        { id: "database", label: "Configure database", completed: false },
        { id: "auth", label: "Implement authentication", completed: false },
        { id: "features", label: "Build core features", completed: false },
      ],
    },
    {
      id: "testing",
      title: "Testing Phase",
      description: "Test your application thoroughly",
      tasks: [
        { id: "unit-tests", label: "Write unit tests", completed: false },
        { id: "integration-tests", label: "Perform integration testing", completed: false },
        { id: "user-testing", label: "Conduct user testing", completed: false },
        { id: "performance", label: "Test performance and optimization", completed: false },
      ],
    },
    {
      id: "launch",
      title: "Launch Phase",
      description: "Prepare for and execute your app launch",
      tasks: [
        { id: "final-review", label: "Perform final review and testing", completed: false },
        { id: "deployment", label: "Deploy to production", completed: false },
        { id: "monitoring", label: "Set up monitoring and analytics", completed: false },
        { id: "marketing", label: "Execute marketing plan", completed: false },
      ],
    },
  ])

  const toggleTask = (phaseId: string, taskId: string) => {
    setTimelineItems(
      timelineItems.map((phase) => {
        if (phase.id === phaseId) {
          return {
            ...phase,
            tasks: phase.tasks.map((task) => {
              if (task.id === taskId) {
                return { ...task, completed: !task.completed }
              }
              return task
            }),
          }
        }
        return phase
      }),
    )
  }

  const calculateProgress = () => {
    const totalTasks = timelineItems.reduce((acc, phase) => acc + phase.tasks.length, 0)
    const completedTasks = timelineItems.reduce(
      (acc, phase) => acc + phase.tasks.filter((task) => task.completed).length,
      0,
    )
    return Math.round((completedTasks / totalTasks) * 100)
  }

  const progress = calculateProgress()

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Project Timeline</h1>
        <p className="text-muted-foreground mb-6">
          Follow this checklist to stay on track with your web app development journey.
        </p>

        <Card className="mb-8">
          <CardHeader className="pb-4">
            <CardTitle>Overall Progress</CardTitle>
            <CardDescription>Track your progress through the development process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{progress}% complete</span>
                <span className="text-sm text-muted-foreground">{progress === 100 ? "Completed" : "In progress"}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {timelineItems.map((phase) => {
            const phaseProgress = Math.round(
              (phase.tasks.filter((task) => task.completed).length / phase.tasks.length) * 100,
            )

            return (
              <AccordionItem key={phase.id} value={phase.id} className="border rounded-lg px-6">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center w-full">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 
                      ${phaseProgress === 100 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}
                    >
                      {phaseProgress === 100 ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-medium">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                    <div className="ml-4 text-sm font-medium">{phaseProgress}%</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-4">
                    {phase.tasks.map((task) => (
                      <div key={task.id} className="flex items-start space-x-3">
                        <Checkbox
                          id={`${phase.id}-${task.id}`}
                          checked={task.completed}
                          onCheckedChange={() => toggleTask(phase.id, task.id)}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor={`${phase.id}-${task.id}`}
                            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                              task.completed ? "line-through text-muted-foreground" : ""
                            }`}
                          >
                            {task.label}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        <div className="mt-8 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            <span>Need help with any of these steps? Check our resources or get support.</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link href="/resources">View Resources</Link>
            </Button>
            <Button asChild>
              <Link href="/support">
                Get Support <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
