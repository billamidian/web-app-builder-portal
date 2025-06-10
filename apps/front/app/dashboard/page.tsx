import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Lightbulb, Users, CheckCircle, LifeBuoy } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Member Dashboard</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Welcome to your PushButtonBuild.com dashboard. Access all the tools and resources you need to build your web
        application.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Lightbulb className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>App Wizard</CardTitle>
            <CardDescription>Define your app idea, features, target audience, and analyze competitors</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/dashboard/wizard">Start Wizard</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Code className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Resources</CardTitle>
            <CardDescription>Access tools, services, and accounts needed for your development journey</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/dashboard/resources">View Resources</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CheckCircle className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Timeline</CardTitle>
            <CardDescription>
              Follow a step-by-step checklist to ensure you're on track with your project
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/dashboard/timeline">View Timeline</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <LifeBuoy className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Support</CardTitle>
            <CardDescription>Get help with our AI-powered chatbot or schedule a consultation call</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/dashboard/support">Get Support</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Book a Call</CardTitle>
            <CardDescription>Schedule a consultation with our team to discuss your project</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/booking">Book Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
        <div className="bg-muted/50 p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Define your app idea</span> - Use the App Wizard to clarify
              your concept, features, and target audience
            </li>
            <li>
              <span className="font-medium text-foreground">Check the timeline</span> - Review the development process
              and track your progress
            </li>
            <li>
              <span className="font-medium text-foreground">Explore resources</span> - Find the tools and services
              you'll need for your project
            </li>
            <li>
              <span className="font-medium text-foreground">Get support</span> - Use our chatbot or book a call if you
              need assistance
            </li>
          </ol>
          <div className="mt-6">
            <Button asChild>
              <Link href="/dashboard/wizard">
                Start with the App Wizard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
