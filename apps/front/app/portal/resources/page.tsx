import type React from "react"
import { Check, ChevronRight, ExternalLink, Github, Globe, Server, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ResourceStep {
  id: string
  title: string
  description: string
  link: string
  linkText: string
  icon: React.ReactNode
  category: "essential" | "recommended" | "optional"
}

const resourceSteps: ResourceStep[] = [
  {
    id: "github",
    title: "Create a GitHub Account",
    description:
      "Set up a GitHub account to manage your code repositories, collaborate with others, and track changes to your codebase.",
    link: "https://github.com/signup",
    linkText: "Sign up for GitHub",
    icon: <Github className="h-8 w-8" />,
    category: "essential",
  },
  {
    id: "vercel",
    title: "Set up Vercel Account",
    description:
      "Create a Vercel account to deploy your frontend applications with ease. Vercel provides continuous deployment, preview URLs, and serverless functions.",
    link: "https://vercel.com/signup",
    linkText: "Sign up for Vercel",
    icon: <Globe className="h-8 w-8" />,
    category: "essential",
  },
  {
    id: "neon",
    title: "Create Neon.tech Database",
    description:
      "Set up a serverless PostgreSQL database with Neon.tech. Perfect for modern applications with its scalability and branching features.",
    link: "https://neon.tech/",
    linkText: "Sign up for Neon",
    icon: <Database className="h-8 w-8" />,
    category: "essential",
  },
  {
    id: "digitalocean",
    title: "Set up Digital Ocean Account",
    description:
      "Create a Digital Ocean account for hosting backend services, databases, or applications that require more control than serverless platforms.",
    link: "https://www.digitalocean.com/",
    linkText: "Sign up for Digital Ocean",
    icon: <Server className="h-8 w-8" />,
    category: "recommended",
  },
  {
    id: "gcp",
    title: "Set up Google Cloud Platform",
    description:
      "Create a GCP account to access a wide range of cloud services including compute, storage, databases, machine learning, and more.",
    link: "https://cloud.google.com/",
    linkText: "Sign up for GCP",
    icon: <Cloud className="h-8 w-8" />,
    category: "recommended",
  },
  {
    id: "aws",
    title: "Set up AWS Account",
    description:
      "Create an AWS account to access the world's most comprehensive cloud platform with over 200 services from data centers globally.",
    link: "https://aws.amazon.com/",
    linkText: "Sign up for AWS",
    icon: <Cloud className="h-8 w-8" />,
    category: "optional",
  },
  {
    id: "mongodb",
    title: "Set up MongoDB Atlas",
    description: "Create a MongoDB Atlas account for a fully-managed cloud database service for modern applications.",
    link: "https://www.mongodb.com/cloud/atlas/register",
    linkText: "Sign up for MongoDB Atlas",
    icon: <Database className="h-8 w-8" />,
    category: "optional",
  },
  {
    id: "supabase",
    title: "Set up Supabase Account",
    description:
      "Create a Supabase account for an open source Firebase alternative with authentication, database, and storage services.",
    link: "https://supabase.com/",
    linkText: "Sign up for Supabase",
    icon: <Database className="h-8 w-8" />,
    category: "optional",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Development Resources Checklist</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Follow this step-by-step guide to set up all the accounts and services you'll need for your web application
        development journey. We've organized them by priority to help you get started quickly.
      </p>

      <div className="mb-8 flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-green-600">
            Essential
          </Badge>
          <span className="text-sm text-muted-foreground">Must-have services to get started</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-blue-600">
            Recommended
          </Badge>
          <span className="text-sm text-muted-foreground">Strongly suggested for most projects</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-gray-600">
            Optional
          </Badge>
          <span className="text-sm text-muted-foreground">Useful for specific use cases</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-8">
          {resourceSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div
                className={`absolute left-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background p-2 
                ${
                  step.category === "essential"
                    ? "bg-green-600"
                    : step.category === "recommended"
                      ? "bg-blue-600"
                      : "bg-gray-600"
                }`}
              >
                <Check className="h-4 w-4 text-white" />
              </div>

              <Card className="ml-16">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {step.icon}
                      <CardTitle>{step.title}</CardTitle>
                    </div>
                    <Badge
                      variant="outline"
                      className={`
                      ${
                        step.category === "essential"
                          ? "border-green-600 text-green-600"
                          : step.category === "recommended"
                            ? "border-blue-600 text-blue-600"
                            : "border-gray-600 text-gray-600"
                      }`}
                    >
                      {step.category.charAt(0).toUpperCase() + step.category.slice(1)}
                    </Badge>
                  </div>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Step {index + 1} of {resourceSteps.length}
                  </div>
                  <Button asChild>
                    <a href={step.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      {step.linkText} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 border rounded-lg bg-muted/50">
        <h2 className="text-xl font-semibold mb-4">Need Help Setting Up?</h2>
        <p className="mb-4">
          If you need assistance with any of these services or have questions about which ones are right for your
          project, our team is here to help.
        </p>
        <Button asChild>
          <a href="/portal/support">
            Get Support <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}
