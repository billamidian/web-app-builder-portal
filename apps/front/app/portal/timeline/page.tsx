import { CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TimelinePage() {
  // Project data - in a real app, this would come from an API or database
  const project = {
    name: "Web Application Development",
    startDate: "March 15, 2025",
    estimatedCompletion: "August 30, 2025",
    currentPhase: "Development",
    progress: 45,
    nextMilestone: {
      name: "Backend API Completion",
      date: "June 10, 2025",
      daysRemaining: 12,
    },
  }

  // Timeline phases with tasks
  const phases = [
    {
      id: "planning",
      name: "Planning",
      description: "Project scope definition and requirements gathering",
      startDate: "March 15, 2025",
      endDate: "April 5, 2025",
      status: "completed",
      progress: 100,
      tasks: [
        { id: "p1", name: "Initial consultation", status: "completed", date: "March 15, 2025" },
        { id: "p2", name: "Requirements gathering", status: "completed", date: "March 22, 2025" },
        { id: "p3", name: "Project scope document", status: "completed", date: "March 29, 2025" },
        { id: "p4", name: "Timeline approval", status: "completed", date: "April 5, 2025" },
      ],
    },
    {
      id: "design",
      name: "Design",
      description: "UI/UX design and prototyping",
      startDate: "April 6, 2025",
      endDate: "May 10, 2025",
      status: "completed",
      progress: 100,
      tasks: [
        { id: "d1", name: "Wireframing", status: "completed", date: "April 15, 2025" },
        { id: "d2", name: "UI design", status: "completed", date: "April 25, 2025" },
        { id: "d3", name: "Prototype creation", status: "completed", date: "May 5, 2025" },
        { id: "d4", name: "Design approval", status: "completed", date: "May 10, 2025" },
      ],
    },
    {
      id: "development",
      name: "Development",
      description: "Frontend and backend implementation",
      startDate: "May 11, 2025",
      endDate: "July 15, 2025",
      status: "in-progress",
      progress: 40,
      tasks: [
        { id: "dev1", name: "Environment setup", status: "completed", date: "May 15, 2025" },
        { id: "dev2", name: "Frontend development", status: "in-progress", date: "June 15, 2025" },
        { id: "dev3", name: "Backend API development", status: "in-progress", date: "June 30, 2025" },
        { id: "dev4", name: "Database implementation", status: "pending", date: "July 10, 2025" },
        { id: "dev5", name: "Integration", status: "pending", date: "July 15, 2025" },
      ],
    },
    {
      id: "testing",
      name: "Testing",
      description: "Quality assurance and bug fixing",
      startDate: "July 16, 2025",
      endDate: "August 15, 2025",
      status: "pending",
      progress: 0,
      tasks: [
        { id: "t1", name: "Unit testing", status: "pending", date: "July 20, 2025" },
        { id: "t2", name: "Integration testing", status: "pending", date: "July 30, 2025" },
        { id: "t3", name: "User acceptance testing", status: "pending", date: "August 10, 2025" },
        { id: "t4", name: "Bug fixes", status: "pending", date: "August 15, 2025" },
      ],
    },
    {
      id: "deployment",
      name: "Deployment",
      description: "Application launch and handover",
      startDate: "August 16, 2025",
      endDate: "August 30, 2025",
      status: "pending",
      progress: 0,
      tasks: [
        { id: "dep1", name: "Deployment preparation", status: "pending", date: "August 16, 2025" },
        { id: "dep2", name: "Server configuration", status: "pending", date: "August 20, 2025" },
        { id: "dep3", name: "Application deployment", status: "pending", date: "August 25, 2025" },
        { id: "dep4", name: "Final handover", status: "pending", date: "August 30, 2025" },
      ],
    },
  ]

  // Helper function to render status badge
  const renderStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>
      case "pending":
        return <Badge className="bg-slate-500 hover:bg-slate-600">Pending</Badge>
      default:
        return null
    }
  }

  // Helper function to render status icon
  const renderStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "pending":
        return <AlertCircle className="h-5 w-5 text-slate-500" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Project Timeline</h1>

      {/* Project Overview */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Overall completion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Progress value={project.progress} className="h-2 mb-2" />
              <p className="text-2xl font-bold">{project.progress}% Complete</p>
              <p className="text-sm text-muted-foreground">
                Started: {project.startDate}
                <br />
                Est. Completion: {project.estimatedCompletion}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Current Phase</CardTitle>
            <CardDescription>Active development stage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">{project.currentPhase}</h3>
              <p className="text-sm text-muted-foreground">
                {phases.find((phase) => phase.name === project.currentPhase)?.description}
              </p>
              {renderStatusBadge("in-progress")}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Next Milestone</CardTitle>
            <CardDescription>Upcoming deadline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">{project.nextMilestone.name}</h3>
              <p className="text-sm text-muted-foreground">
                Due: {project.nextMilestone.date}
                <br />
                {project.nextMilestone.daysRemaining} days remaining
              </p>
              <Badge className="bg-amber-500 hover:bg-amber-600 w-fit">Approaching</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline View Options */}
      <Tabs defaultValue="timeline" className="mb-8">
        <TabsList>
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          <TabsTrigger value="checklist">Checklist View</TabsTrigger>
        </TabsList>

        {/* Timeline View */}
        <TabsContent value="timeline">
          <div className="relative mt-8 pl-8 border-l-2 border-border">
            {phases.map((phase, index) => (
              <div key={phase.id} className={`mb-12 relative ${index === phases.length - 1 ? "mb-0" : ""}`}>
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[25px] h-12 w-12 rounded-full flex items-center justify-center 
                  ${
                    phase.status === "completed"
                      ? "bg-green-100 dark:bg-green-900/20"
                      : phase.status === "in-progress"
                        ? "bg-amber-100 dark:bg-amber-900/20"
                        : "bg-slate-100 dark:bg-slate-900/20"
                  }`}
                >
                  {renderStatusIcon(phase.status)}
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{phase.name}</CardTitle>
                      {renderStatusBadge(phase.status)}
                    </div>
                    <CardDescription>
                      {phase.startDate} - {phase.endDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{phase.description}</p>
                    <Progress value={phase.progress} className="h-2 mb-4" />

                    <div className="space-y-3">
                      <h4 className="font-medium">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.tasks.map((task) => (
                          <li key={task.id} className="flex items-center gap-2">
                            {renderStatusIcon(task.status)}
                            <span className={task.status === "completed" ? "line-through text-muted-foreground" : ""}>
                              {task.name} - {task.date}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {phase.status === "in-progress" && <Button className="mt-4">View Details</Button>}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Checklist View */}
        <TabsContent value="checklist">
          <div className="space-y-6 mt-6">
            {phases.map((phase) => (
              <Card key={phase.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      {renderStatusIcon(phase.status)}
                      {phase.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{phase.progress}%</span>
                      {renderStatusBadge(phase.status)}
                    </div>
                  </div>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="divide-y">
                    {phase.tasks.map((task) => (
                      <li key={task.id} className="py-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {renderStatusIcon(task.status)}
                          <span className={task.status === "completed" ? "line-through text-muted-foreground" : ""}>
                            {task.name}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">{task.date}</div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Actions Section */}
      <div className="flex flex-wrap gap-4 justify-end">
        <Button variant="outline">Download Timeline</Button>
        <Button variant="outline">Share Timeline</Button>
        <Button>Request Update</Button>
      </div>
    </div>
  )
}
