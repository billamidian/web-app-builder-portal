import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

interface ResourceCard {
  title: string
  description: string
  link: string
  linkText: string
}

const developmentTools: ResourceCard[] = [
  {
    title: "Visual Studio Code",
    description:
      "A lightweight but powerful source code editor with built-in support for JavaScript, TypeScript and Node.js.",
    link: "https://code.visualstudio.com/",
    linkText: "Download VS Code",
  },
  {
    title: "GitHub",
    description: "A platform for version control and collaboration that lets you and others work together on projects.",
    link: "https://github.com/",
    linkText: "Sign up for GitHub",
  },
  {
    title: "Figma",
    description: "A collaborative interface design tool that's taking design teams by storm.",
    link: "https://www.figma.com/",
    linkText: "Try Figma",
  },
  {
    title: "Postman",
    description: "A collaboration platform for API development that simplifies each step of the API lifecycle.",
    link: "https://www.postman.com/",
    linkText: "Get Postman",
  },
  {
    title: "Chrome DevTools",
    description: "A set of web developer tools built directly into the Google Chrome browser.",
    link: "https://developers.google.com/web/tools/chrome-devtools",
    linkText: "Learn DevTools",
  },
  {
    title: "npm",
    description: "The world's largest software registry, with approximately 1.3 million packages.",
    link: "https://www.npmjs.com/",
    linkText: "Explore npm",
  },
]

const hostingServices: ResourceCard[] = [
  {
    title: "Vercel",
    description:
      "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    link: "https://vercel.com/",
    linkText: "Deploy on Vercel",
  },
  {
    title: "Netlify",
    description: "An all-in-one platform for automating modern web projects.",
    link: "https://www.netlify.com/",
    linkText: "Try Netlify",
  },
  {
    title: "AWS",
    description: "A comprehensive and broadly adopted cloud platform, offering over 200 fully featured services.",
    link: "https://aws.amazon.com/",
    linkText: "Explore AWS",
  },
  {
    title: "Google Cloud Platform",
    description: "A suite of cloud computing services that runs on the same infrastructure that Google uses.",
    link: "https://cloud.google.com/",
    linkText: "Try GCP",
  },
  {
    title: "DigitalOcean",
    description: "Cloud services designed for developers that make it simple to launch in the cloud.",
    link: "https://www.digitalocean.com/",
    linkText: "Get started",
  },
]

const databaseServices: ResourceCard[] = [
  {
    title: "MongoDB Atlas",
    description: "The global cloud database service for modern applications.",
    link: "https://www.mongodb.com/cloud/atlas",
    linkText: "Try MongoDB Atlas",
  },
  {
    title: "Supabase",
    description:
      "An open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, and realtime subscriptions.",
    link: "https://supabase.io/",
    linkText: "Start with Supabase",
  },
  {
    title: "Firebase",
    description: "A platform developed by Google for creating mobile and web applications.",
    link: "https://firebase.google.com/",
    linkText: "Get started with Firebase",
  },
  {
    title: "Amazon RDS",
    description: "Makes it easy to set up, operate, and scale a relational database in the cloud.",
    link: "https://aws.amazon.com/rds/",
    linkText: "Learn about RDS",
  },
  {
    title: "PlanetScale",
    description: "The database for developers. PlanetScale is a MySQL-compatible serverless database platform.",
    link: "https://planetscale.com/",
    linkText: "Try PlanetScale",
  },
]

const frameworksLibraries: ResourceCard[] = [
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
    linkText: "Learn React",
  },
  {
    title: "Next.js",
    description: "The React Framework for Production.",
    link: "https://nextjs.org/",
    linkText: "Get started with Next.js",
  },
  {
    title: "Vue.js",
    description: "The Progressive JavaScript Framework.",
    link: "https://vuejs.org/",
    linkText: "Learn Vue.js",
  },
  {
    title: "Angular",
    description: "A platform for building mobile and desktop web applications.",
    link: "https://angular.io/",
    linkText: "Try Angular",
  },
  {
    title: "Svelte",
    description: "A radical new approach to building user interfaces.",
    link: "https://svelte.dev/",
    linkText: "Learn Svelte",
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework packed with classes that can be composed to build any design.",
    link: "https://tailwindcss.com/",
    linkText: "Get started with Tailwind",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Here you'll find all the tools, services, and resources you need to build your web application. We've curated
        the best options in each category to help you get started quickly.
      </p>

      <Tabs defaultValue="development" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="development">Development Tools</TabsTrigger>
          <TabsTrigger value="hosting">Hosting Services</TabsTrigger>
          <TabsTrigger value="databases">Database Services</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks & Libraries</TabsTrigger>
        </TabsList>

        <TabsContent value="development" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentTools.map((tool, index) => (
              <ResourceCard key={index} resource={tool} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hosting" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostingServices.map((service, index) => (
              <ResourceCard key={index} resource={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="databases" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {databaseServices.map((db, index) => (
              <ResourceCard key={index} resource={db} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="frameworks" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworksLibraries.map((framework, index) => (
              <ResourceCard key={index} resource={framework} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ResourceCard({ resource }: { resource: ResourceCard }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            {resource.linkText} <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
