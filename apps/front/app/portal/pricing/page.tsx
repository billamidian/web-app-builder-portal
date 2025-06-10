import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, HelpCircle, Server, Code } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PricingTier {
  name: string
  description: string
  price: string
  features: {
    text: string
    included: boolean
    tooltip?: string
  }[]
  buttonText: string
  buttonLink: string
  highlighted?: boolean
}

const developmentTiers: PricingTier[] = [
  {
    name: "Basic Development",
    description: "Simple web applications with standard features",
    price: "$499",
    features: [
      { text: "Up to 5 pages", included: true },
      { text: "Basic authentication", included: true },
      { text: "Contact form", included: true },
      { text: "Responsive design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "1 revision round", included: true },
      { text: "Database integration", included: false },
      { text: "Custom API development", included: false },
    ],
    buttonText: "Get Started",
    buttonLink: "/booking",
  },
  {
    name: "Standard Development",
    description: "Feature-rich applications with database integration",
    price: "$1,499",
    features: [
      { text: "Up to 10 pages", included: true },
      { text: "Advanced authentication", included: true },
      { text: "Database integration", included: true },
      { text: "API development", included: true },
      { text: "Admin dashboard", included: true },
      { text: "Payment integration", included: true },
      { text: "2 revision rounds", included: true },
      { text: "Custom animations", included: false },
    ],
    buttonText: "Get Started",
    buttonLink: "/booking",
    highlighted: true,
  },
  {
    name: "Premium Development",
    description: "Complex applications with advanced features",
    price: "$2,999",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Complex database architecture", included: true },
      { text: "Advanced API development", included: true },
      { text: "Custom animations", included: true },
      { text: "Third-party integrations", included: true },
      { text: "Advanced analytics", included: true },
      { text: "3 revision rounds", included: true },
      { text: "Performance optimization", included: true },
    ],
    buttonText: "Get Started",
    buttonLink: "/booking",
  },
]

const hostingTiers: PricingTier[] = [
  {
    name: "Basic Hosting",
    description: "For small applications with moderate traffic",
    price: "$39.99",
    features: [
      { text: "99.9% uptime guarantee", included: true },
      { text: "5GB storage", included: true },
      { text: "50GB bandwidth", included: true },
      { text: "SSL certificate", included: true },
      { text: "Daily backups", included: true },
      { text: "Basic monitoring", included: true },
      { text: "CDN integration", included: false },
      { text: "Dedicated resources", included: false },
    ],
    buttonText: "Subscribe",
    buttonLink: "/booking",
  },
  {
    name: "Business Hosting",
    description: "For growing applications with higher traffic",
    price: "$59.99",
    features: [
      { text: "99.95% uptime guarantee", included: true },
      { text: "20GB storage", included: true },
      { text: "200GB bandwidth", included: true },
      { text: "SSL certificate", included: true },
      { text: "Hourly backups", included: true },
      { text: "Advanced monitoring", included: true },
      { text: "CDN integration", included: true },
      { text: "Shared resources", included: true },
    ],
    buttonText: "Subscribe",
    buttonLink: "/booking",
    highlighted: true,
  },
  {
    name: "Enterprise Hosting",
    description: "For high-traffic applications requiring top performance",
    price: "$99.99",
    features: [
      { text: "99.99% uptime guarantee", included: true },
      { text: "50GB storage", included: true },
      { text: "500GB bandwidth", included: true },
      { text: "SSL certificate", included: true },
      { text: "Real-time backups", included: true },
      { text: "Premium monitoring", included: true },
      { text: "Global CDN", included: true },
      { text: "Dedicated resources", included: true },
    ],
    buttonText: "Subscribe",
    buttonLink: "/booking",
  },
]

export default function PricingPage() {
  return (
    <div className="container py-10">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Pricing & Services</h1>
        <p className="text-muted-foreground">
          Choose the development and hosting options that best fit your project requirements and budget.
        </p>
      </div>

      <Tabs defaultValue="development" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="development" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Development
          </TabsTrigger>
          <TabsTrigger value="hosting" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            Hosting
          </TabsTrigger>
        </TabsList>

        <TabsContent value="development">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {developmentTiers.map((tier, index) => (
              <Card key={index} className={`flex flex-col ${tier.highlighted ? "border-primary shadow-lg" : ""}`}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground"> one-time fee</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <span className="block h-4 w-4 rounded-full border-2 border-muted" />
                          )}
                        </div>
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.text}
                          {feature.tooltip && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-4 w-4 inline ml-1 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={tier.highlighted ? "default" : "outline"}>
                    <Link href={tier.buttonLink}>{tier.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hosting">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hostingTiers.map((tier, index) => (
              <Card key={index} className={`flex flex-col ${tier.highlighted ? "border-primary shadow-lg" : ""}`}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground"> /month</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <span className="block h-4 w-4 rounded-full border-2 border-muted" />
                          )}
                        </div>
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.text}
                          {feature.tooltip && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-4 w-4 inline ml-1 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={tier.highlighted ? "default" : "outline"}>
                    <Link href={tier.buttonLink}>{tier.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">What's included in the development packages?</h3>
            <p className="text-muted-foreground">
              Our development packages include design, development, testing, and deployment of your web application.
              Each tier offers different levels of complexity and features, from simple websites to complex applications
              with advanced functionality.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">How long does development take?</h3>
            <p className="text-muted-foreground">
              Development timelines vary based on the package: Basic typically takes 1-2 weeks, Standard 2-4 weeks, and
              Premium 4-8 weeks. These timelines can vary based on project complexity and revision requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Can I upgrade my hosting plan later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade your hosting plan at any time as your needs grow. The transition is seamless and
              we'll handle all the technical aspects of migrating your application to the new hosting environment.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Do you offer custom development outside these packages?</h3>
            <p className="text-muted-foreground">
              If your project requires custom features or functionality not covered in our standard packages, we offer
              custom development services. Contact us for a personalized quote based on your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
