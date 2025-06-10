import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Code, FileText, HelpCircle, MessageSquare, Users } from "lucide-react"
import Link from "next/link"

export default function PortalDashboard() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Portal</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Access all the tools and resources you need to build your web application. Get started by exploring the options
        below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Getting Started</span>
            </div>
            <CardTitle className="mt-4">Resources</CardTitle>
            <CardDescription>
              Access curated tools, services, and resources to help you build your web application.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/portal/resources">
                View Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Help Center</span>
            </div>
            <CardTitle className="mt-4">Support</CardTitle>
            <CardDescription>
              Get help with your web app project through our AI chatbot or contact our team directly.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/portal/support">
                Get Support <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Code className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Development</span>
            </div>
            <CardTitle className="mt-4">App Wizard</CardTitle>
            <CardDescription>Use our step-by-step wizard to plan and define your web application.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/portal/wizard">
                Start Wizard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Progress</span>
            </div>
            <CardTitle className="mt-4">Timeline</CardTitle>
            <CardDescription>
              Track your progress through the development process with our interactive timeline.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/portal/timeline">
                View Timeline <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Consultation</span>
            </div>
            <CardTitle className="mt-4">Pricing</CardTitle>
            <CardDescription>View our pricing options and book a consultation call with our team.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/portal/pricing">
                View Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Community</span>
            </div>
            <CardTitle className="mt-4">Forum</CardTitle>
            <CardDescription>Connect with other developers and get help from the community.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/portal/forum">
                Join Forum <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-muted/50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-medium">New Resources Added</h3>
              <p className="text-sm text-muted-foreground">We've added new resources for database integration.</p>
              <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-medium">Support Chat Improved</h3>
              <p className="text-sm text-muted-foreground">Our AI support assistant has been upgraded.</p>
              <p className="text-xs text-muted-foreground mt-1">5 days ago</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
            <div>
              <h3 className="font-medium">New Pricing Options</h3>
              <p className="text-sm text-muted-foreground">Check out our updated pricing and service options.</p>
              <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
