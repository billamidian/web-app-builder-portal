import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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

const pricingTiers: PricingTier[] = [
  {
    name: "Consultation + Portal Access",
    description: "Get expert advice and access to our self-service portal",
    price: "$299",
    features: [
      { text: "60-minute consultation call", included: true },
      { text: "Full access to the PushButtonBuild portal", included: true },
      { text: "App Wizard for planning your project", included: true },
      { text: "Development timeline and checklist", included: true },
      { text: "Curated resources and tools", included: true },
      { text: "AI support assistant", included: true },
      { text: "Self-guided implementation", included: true },
      { text: "Email support for portal questions", included: true },
    ],
    buttonText: "Book a Call",
    buttonLink: "/booking",
  },
  {
    name: "Production Build",
    description: "We build your web app for you in 3-5 days",
    price: "$1,500+",
    features: [
      { text: "Initial consultation call", included: true },
      { text: "Complete web app development", included: true },
      { text: "3-5 day delivery timeframe", included: true },
      { text: "UI/UX design implementation", included: true },
      { text: "Frontend and backend development", included: true },
      { text: "Database setup and configuration", included: true },
      { text: "Deployment to production", included: true },
      { text: "30 days of post-launch support", included: true },
    ],
    buttonText: "Book a Call",
    buttonLink: "/booking",
    highlighted: true,
  },
]

export default function PricingPage() {
  return (
    <div className="container py-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Pricing & Services</h1>
        <p className="text-muted-foreground">
          Choose the option that works best for your needs and timeline. Build it yourself with our guidance or let us
          handle everything for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <Card key={index} className={`flex flex-col ${tier.highlighted ? "border-primary shadow-lg" : ""}`}>
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.name === "Consultation + Portal Access" && (
                  <span className="text-muted-foreground"> one-time fee</span>
                )}
                {tier.name === "Production Build" && (
                  <span className="text-muted-foreground"> depending on complexity</span>
                )}
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

      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">How quickly can I get my web app built?</h3>
            <p className="text-muted-foreground">
              With our Production Build option, we can deliver your web app in just 3-5 days depending on complexity. If
              you choose to build it yourself with our portal access, the timeline will depend on your own pace and
              availability.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">What determines the price for the Production Build?</h3>
            <p className="text-muted-foreground">
              The final price starts at $1,500 and depends on factors like the number of features, complexity of the
              design, database requirements, and third-party integrations needed. During our consultation, we'll provide
              a specific quote based on your requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">What technologies do you use?</h3>
            <p className="text-muted-foreground">
              We specialize in modern web technologies including React, Next.js, Node.js, and various database
              solutions. We'll recommend the best tech stack for your specific project needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Do you offer ongoing maintenance?</h3>
            <p className="text-muted-foreground">
              Yes, we offer maintenance packages after the initial development period. These can be customized based on
              your needs and can include bug fixes, security updates, and minor feature enhancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
