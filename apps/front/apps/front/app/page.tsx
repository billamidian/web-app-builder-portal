import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Zap, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              🚀 Launch Your Web App in Days, Not Months
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your Web App
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Push Button Simple
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From idea to production-ready web application. We handle the technical complexity while you focus on
              growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="https://buy.stripe.com/9B614o7SC0RuanG4ee8IU0S" target="_blank">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link href="#what-you-can-build-section">See What You Can Build</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Build Section */}
      <section id="what-you-can-build-section" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What You Can Build</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From simple landing pages to complex SaaS platforms, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS Platforms",
                description: "Multi-tenant applications with user management, billing, and analytics",
                image: "/web-app-development.png",
                features: ["User Authentication", "Payment Integration", "Admin Dashboard", "API Development"],
              },
              {
                title: "E-commerce Sites",
                description: "Full-featured online stores with inventory management and payment processing",
                image: "/web-app-builder-portal.png",
                features: ["Product Catalog", "Shopping Cart", "Order Management", "Payment Gateway"],
              },
              {
                title: "Business Portals",
                description: "Internal tools and customer portals for streamlined business operations",
                image: "/admin-interface.png",
                features: ["Role-based Access", "Document Management", "Workflow Automation", "Reporting"],
              },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-gray-300">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Session Section */}
      <section id="strategy-session-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Start with a Strategy Session</h2>
            <p className="text-xl text-gray-300 mb-12">
              Every successful project starts with understanding your vision. Let's discuss your ideas and create a
              roadmap to success.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Users,
                  title: "Understand Your Vision",
                  description: "We dive deep into your business goals and user needs",
                },
                {
                  icon: Zap,
                  title: "Technical Planning",
                  description: "Choose the right technology stack and architecture",
                },
                {
                  icon: Clock,
                  title: "Timeline & Budget",
                  description: "Get a clear roadmap with realistic timelines and costs",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="https://buy.stripe.com/9B614o7SC0RuanG4ee8IU0S" target="_blank">
                Book Your Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to build a web application?",
                  answer:
                    "Timeline varies based on complexity, but most projects are completed within 4-12 weeks. We'll provide a detailed timeline during your strategy session.",
                },
                {
                  question: "What technologies do you use?",
                  answer:
                    "We use modern, proven technologies like Next.js, React, Node.js, and PostgreSQL. The exact stack depends on your project requirements.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes! We offer maintenance packages and ongoing support to ensure your application stays secure and up-to-date.",
                },
                {
                  question: "Can you work with my existing team?",
                  answer:
                    "We can collaborate with your existing developers or work independently based on your preferences.",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Build Your Web App?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's turn your idea into a reality. Book a strategy session today and get started.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="https://buy.stripe.com/9B614o7SC0RuanG4ee8IU0S" target="_blank">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
