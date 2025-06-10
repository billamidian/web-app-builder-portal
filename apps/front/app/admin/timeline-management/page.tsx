"use client"

import { useState } from "react"
import { CheckCircle, Clock, AlertCircle, Plus, Trash2, Save, Eye, ArrowUp, ArrowDown, Edit } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function TimelineManagementPage() {
  // Initial project data - in a real app, this would come from an API or database
  const [project, setProject] = useState({
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
  })

  // Initial phases data
  const [phases, setPhases] = useState([
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
  ])

  // State for editing
  const [editingPhaseId, setEditingPhaseId] = useState(null)
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [newPhase, setNewPhase] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "pending",
  })
  const [newTask, setNewTask] = useState({
    name: "",
    date: "",
    status: "pending",
  })
  const [isAddingPhase, setIsAddingPhase] = useState(false)
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [addingTaskToPhaseId, setAddingTaskToPhaseId] = useState(null)
  const [editingProject, setEditingProject] = useState(false)
  const [editedProject, setEditedProject] = useState({ ...project })

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

  // Function to add a new phase
  const handleAddPhase = () => {
    const id = `phase-${Date.now()}`
    const newPhaseObj = {
      id,
      ...newPhase,
      progress: 0,
      tasks: [],
    }

    setPhases([...phases, newPhaseObj])
    setNewPhase({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "pending",
    })
    setIsAddingPhase(false)

    toast({
      title: "Phase added",
      description: `${newPhase.name} has been added to the timeline.`,
    })
  }

  // Function to add a new task to a phase
  const handleAddTask = (phaseId) => {
    const id = `task-${Date.now()}`
    const taskObj = {
      id,
      ...newTask,
    }

    const updatedPhases = phases.map((phase) => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          tasks: [...phase.tasks, taskObj],
        }
      }
      return phase
    })

    setPhases(updatedPhases)
    setNewTask({
      name: "",
      date: "",
      status: "pending",
    })
    setIsAddingTask(false)
    setAddingTaskToPhaseId(null)

    toast({
      title: "Task added",
      description: `${newTask.name} has been added to the phase.`,
    })
  }

  // Function to delete a phase
  const handleDeletePhase = (phaseId) => {
    const updatedPhases = phases.filter((phase) => phase.id !== phaseId)
    setPhases(updatedPhases)

    toast({
      title: "Phase deleted",
      description: "The phase has been removed from the timeline.",
    })
  }

  // Function to delete a task
  const handleDeleteTask = (phaseId, taskId) => {
    const updatedPhases = phases.map((phase) => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          tasks: phase.tasks.filter((task) => task.id !== taskId),
        }
      }
      return phase
    })

    setPhases(updatedPhases)

    toast({
      title: "Task deleted",
      description: "The task has been removed from the phase.",
    })
  }

  // Function to update phase status and progress
  const updatePhaseProgress = (phaseId) => {
    const updatedPhases = phases.map((phase) => {
      if (phase.id === phaseId) {
        const completedTasks = phase.tasks.filter((task) => task.status === "completed").length
        const totalTasks = phase.tasks.length
        const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

        let status = "pending"
        if (progress === 100) {
          status = "completed"
        } else if (progress > 0) {
          status = "in-progress"
        }

        return {
          ...phase,
          progress,
          status,
        }
      }
      return phase
    })

    setPhases(updatedPhases)

    // Update overall project progress
    const totalProgress = updatedPhases.reduce((sum, phase) => sum + phase.progress, 0)
    const overallProgress = Math.round(totalProgress / updatedPhases.length)

    setProject({
      ...project,
      progress: overallProgress,
    })

    toast({
      title: "Progress updated",
      description: "The phase progress has been recalculated.",
    })
  }

  // Function to update task status
  const handleUpdateTaskStatus = (phaseId, taskId, newStatus) => {
    const updatedPhases = phases.map((phase) => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          tasks: phase.tasks.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                status: newStatus,
              }
            }
            return task
          }),
        }
      }
      return phase
    })

    setPhases(updatedPhases)

    // Update phase progress
    updatePhaseProgress(phaseId)
  }

  // Function to move a phase up or down
  const handleMovePhase = (phaseId, direction) => {
    const newPhases = [...phases]
    const phaseIndex = newPhases.findIndex((phase) => phase.id === phaseId)

    // Check if we can move in the requested direction
    if ((direction === "up" && phaseIndex === 0) || (direction === "down" && phaseIndex === newPhases.length - 1)) {
      return
    }

    // Calculate target index
    const targetIndex = direction === "up" ? phaseIndex - 1 : phaseIndex + 1

    // Swap phases
    const temp = newPhases[phaseIndex]
    newPhases[phaseIndex] = newPhases[targetIndex]
    newPhases[targetIndex] = temp

    setPhases(newPhases)

    toast({
      title: "Phase moved",
      description: `Phase moved ${direction}.`,
    })
  }

  // Function to save project changes
  const handleSaveProject = () => {
    setProject(editedProject)
    setEditingProject(false)

    toast({
      title: "Project updated",
      description: "Project details have been saved.",
    })
  }

  // Function to publish timeline to portal
  const handlePublishTimeline = () => {
    // In a real app, this would send the data to an API
    toast({
      title: "Timeline published",
      description: "The timeline has been published to the portal.",
      variant: "success",
    })
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Timeline Management</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => window.open("/portal/timeline", "_blank")}>
            <Eye className="mr-2 h-4 w-4" />
            Preview Portal View
          </Button>
          <Button onClick={handlePublishTimeline}>
            <Save className="mr-2 h-4 w-4" />
            Publish Timeline
          </Button>
        </div>
      </div>

      {/* Project Overview */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Edit the main project information</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setEditedProject({ ...project })
              setEditingProject(true)
            }}
          >
            <Edit className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-medium mb-2">Project Name</h3>
              <p>{project.name}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Timeline</h3>
              <p>
                {project.startDate} - {project.estimatedCompletion}
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Current Progress</h3>
              <div className="flex items-center gap-2">
                <Progress value={project.progress} className="h-2 flex-1" />
                <span>{project.progress}%</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Current Phase</h3>
              <p>{project.currentPhase}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Next Milestone</h3>
              <p>
                {project.nextMilestone.name} ({project.nextMilestone.date})
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Days Remaining</h3>
              <p>{project.nextMilestone.daysRemaining} days until next milestone</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Project Dialog */}
      <Dialog open={editingProject} onOpenChange={setEditingProject}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Project Details</DialogTitle>
            <DialogDescription>
              Update the main project information that appears at the top of the timeline.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input
                id="project-name"
                value={editedProject.name}
                onChange={(e) => setEditedProject({ ...editedProject, name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input
                  id="start-date"
                  value={editedProject.startDate}
                  onChange={(e) => setEditedProject({ ...editedProject, startDate: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="end-date">Estimated Completion</Label>
                <Input
                  id="end-date"
                  value={editedProject.estimatedCompletion}
                  onChange={(e) => setEditedProject({ ...editedProject, estimatedCompletion: e.target.value })}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="current-phase">Current Phase</Label>
              <Select
                value={editedProject.currentPhase}
                onValueChange={(value) => setEditedProject({ ...editedProject, currentPhase: value })}
              >
                <SelectTrigger id="current-phase">
                  <SelectValue placeholder="Select phase" />
                </SelectTrigger>
                <SelectContent>
                  {phases.map((phase) => (
                    <SelectItem key={phase.id} value={phase.name}>
                      {phase.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="next-milestone-name">Next Milestone Name</Label>
              <Input
                id="next-milestone-name"
                value={editedProject.nextMilestone.name}
                onChange={(e) =>
                  setEditedProject({
                    ...editedProject,
                    nextMilestone: { ...editedProject.nextMilestone, name: e.target.value },
                  })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="milestone-date">Milestone Date</Label>
                <Input
                  id="milestone-date"
                  value={editedProject.nextMilestone.date}
                  onChange={(e) =>
                    setEditedProject({
                      ...editedProject,
                      nextMilestone: { ...editedProject.nextMilestone, date: e.target.value },
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="days-remaining">Days Remaining</Label>
                <Input
                  id="days-remaining"
                  type="number"
                  value={editedProject.nextMilestone.daysRemaining}
                  onChange={(e) =>
                    setEditedProject({
                      ...editedProject,
                      nextMilestone: { ...editedProject.nextMilestone, daysRemaining: Number.parseInt(e.target.value) },
                    })
                  }
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingProject(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveProject}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Phases Management */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Timeline Phases</h2>
        <Button onClick={() => setIsAddingPhase(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Phase
        </Button>
      </div>

      {/* Add Phase Dialog */}
      <Dialog open={isAddingPhase} onOpenChange={setIsAddingPhase}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Phase</DialogTitle>
            <DialogDescription>Create a new phase for the project timeline.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="phase-name">Phase Name</Label>
              <Input
                id="phase-name"
                value={newPhase.name}
                onChange={(e) => setNewPhase({ ...newPhase, name: e.target.value })}
                placeholder="e.g., Research"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phase-description">Description</Label>
              <Textarea
                id="phase-description"
                value={newPhase.description}
                onChange={(e) => setNewPhase({ ...newPhase, description: e.target.value })}
                placeholder="Brief description of this phase"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="phase-start-date">Start Date</Label>
                <Input
                  id="phase-start-date"
                  value={newPhase.startDate}
                  onChange={(e) => setNewPhase({ ...newPhase, startDate: e.target.value })}
                  placeholder="e.g., June 1, 2025"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phase-end-date">End Date</Label>
                <Input
                  id="phase-end-date"
                  value={newPhase.endDate}
                  onChange={(e) => setNewPhase({ ...newPhase, endDate: e.target.value })}
                  placeholder="e.g., June 15, 2025"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phase-status">Initial Status</Label>
              <Select value={newPhase.status} onValueChange={(value) => setNewPhase({ ...newPhase, status: value })}>
                <SelectTrigger id="phase-status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddingPhase(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddPhase}>Add Phase</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Phases List */}
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <Card key={phase.id} className="relative">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {renderStatusIcon(phase.status)}
                  <CardTitle>{phase.name}</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  {renderStatusBadge(phase.status)}
                  <div className="flex">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleMovePhase(phase.id, "up")}
                      disabled={index === 0}
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleMovePhase(phase.id, "down")}
                      disabled={index === phases.length - 1}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDeletePhase(phase.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardDescription>
                {phase.startDate} - {phase.endDate}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">{phase.description}</p>
                <div className="flex items-center gap-2">
                  <Progress value={phase.progress} className="h-2 flex-1" />
                  <span className="text-sm">{phase.progress}%</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Tasks</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setAddingTaskToPhaseId(phase.id)
                      setIsAddingTask(true)
                    }}
                  >
                    <Plus className="mr-1 h-3 w-3" />
                    Add Task
                  </Button>
                </div>

                <div className="border rounded-md">
                  {phase.tasks.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">No tasks added yet</div>
                  ) : (
                    <div className="divide-y">
                      {phase.tasks.map((task) => (
                        <div key={task.id} className="p-3 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Select
                              value={task.status}
                              onValueChange={(value) => handleUpdateTaskStatus(phase.id, task.id, value)}
                            >
                              <SelectTrigger className="w-[110px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                              </SelectContent>
                            </Select>
                            <span>{task.name}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{task.date}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600 h-8 w-8"
                              onClick={() => handleDeleteTask(phase.id, task.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" onClick={() => updatePhaseProgress(phase.id)}>
                Recalculate Progress
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Add Task Dialog */}
      <Dialog open={isAddingTask} onOpenChange={setIsAddingTask}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogDescription>Add a task to the selected phase.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="task-name">Task Name</Label>
              <Input
                id="task-name"
                value={newTask.name}
                onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                placeholder="e.g., Create wireframes"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="task-date">Due Date</Label>
              <Input
                id="task-date"
                value={newTask.date}
                onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                placeholder="e.g., June 10, 2025"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="task-status">Status</Label>
              <Select value={newTask.status} onValueChange={(value) => setNewTask({ ...newTask, status: value })}>
                <SelectTrigger id="task-status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsAddingTask(false)
                setAddingTaskToPhaseId(null)
              }}
            >
              Cancel
            </Button>
            <Button onClick={() => handleAddTask(addingTaskToPhaseId)}>Add Task</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Actions Section */}
      <div className="mt-8 flex justify-end">
        <Button onClick={handlePublishTimeline} className="bg-green-600 hover:bg-green-700">
          <Save className="mr-2 h-4 w-4" />
          Publish Timeline to Portal
        </Button>
      </div>
    </div>
  )
}
