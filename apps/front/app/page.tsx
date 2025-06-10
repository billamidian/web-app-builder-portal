import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  Rocket,
  DollarSign,
  Globe,
  Target,
  Clock,
  ChevronDown,
  Star,
  Quote,
  Layers,
  Lightbulb,
  Users,
  TrendingUp,
  MessageSquare,
  AlertTriangle,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Cpu,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col bg-[#111] text-white">
      {/* Hero Section */}
      <section
        id="hero-section"
        role="region"
        aria-labelledby="hero-title"
        className="w-full min-h-screen flex items-center relative overflow-hidden bg-black"
      >
        <div className="absolute inset-0 vercel-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent"></div>
        <div className="container relative px-4 md:px-6 z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-8 text-sm font-medium tracking-wide text-blue-400 bg-blue-950/50 rounded-md border border-blue-900/50 vercel-border shadow-lg shadow-blue-900/20 animate-subtle-pulse">
              Limited Time: Strategy Calls Just $299
            </div>
            <h1
              id="hero-title"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-white"
            >
              Build the Platform the World's Been Waiting For
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              You know the feeling. That lightning-bolt idea that hit during a client call. The solution you wished
              existed in your industry. The scribbled notes, voice memos, and visions of what could be—if someone just
              built it.
              <br />
              <br />
              Now, you can be the one who does.
              <br />
              <br />
              Your insight. Our AI-powered tech. Real-world impact. We help you bring it to life—without writing a
              single line of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 border border-gray-200 h-14 px-8 text-lg transition-all duration-300 hover:scale-105"
              >
                <Link
                  href="https://buy.stripe.com/9B614o7SC0RuanG4ee8IU0S"
                  className="flex items-center text-black"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Book Your Strategy Call <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-16 flex items-center justify-center space-x-3 text-gray-400">
              <div className="flex -space-x-2">
                {[
                  { letter: "S", bg: "bg-blue-500" },
                  { letter: "M", bg: "bg-green-500" },
                  { letter: "A", bg: "bg-purple-500" },
                  { letter: "J", bg: "bg-orange-500" },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-black ${avatar.bg} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {avatar.letter}
                  </div>
                ))}
              </div>
              <span className="text-sm ml-1">100+ entrepreneurs launched this month</span>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-blue-400" />
          </div>
        </div>
      </section>

      {/* Meet Alex Section */}
      <section
        id="meet-alex-section"
        role="region"
        aria-labelledby="meet-alex-title"
        className="py-24 bg-[#0a0a0a] relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2
              id="meet-alex-title"
              className="text-3xl md:text-5xl font-bold mb-10 text-white text-center leading-tight tracking-tight"
            >
              Meet Alex — and Maybe You
            </h2>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
              <p>
                It's 10 p.m. on a Tuesday. Alex stares at a half-finished slide deck, wishing the quarterly report would
                write itself. Slack keeps pinging, but Alex's brain is somewhere else—on that scribbled note taped to
                the laptop:
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-[#111] rounded-r-lg vercel-border">
                <p className="text-xl italic text-blue-300">
                  "There has to be a better way to manage client feedback."
                </p>
              </blockquote>
              <p>
                Sound familiar? Maybe your note says inventory, wellness plans, or legal paperwork. Whatever it is, the
                thought will not leave you alone.
              </p>
              <p className="font-semibold text-white">
                Here's what Alex doesn't know yet: That obsession isn't a distraction—it's a calling.
              </p>
            </div>

            <div className="mt-16 bg-[#111] rounded-xl p-10 relative overflow-hidden vercel-border-glow transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <Lightbulb className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center leading-tight">
                  The Moment Everything Clicks
                </h3>
                <p className="text-xl text-gray-400 mb-5 text-center leading-relaxed">
                  Scrolling LinkedIn at midnight (again), Alex sees a headline that stops the scroll:
                </p>
                <p className="text-lg italic text-center text-gray-300 bg-black/30 p-4 rounded-md vercel-border mb-6">
                  "Dario Amodei warns AI could eliminate 20% of jobs—but smart people are using it to become
                  irreplaceable."
                </p>
                <p className="text-xl text-gray-400 mb-5 text-center leading-relaxed">
                  Wait. What if the same AI threatening traditional employment could be the key to finally building that
                  idea? Alex books a $299 Strategy Call with PushButtonBuild "just to explore."
                </p>
                <p className="text-xl text-gray-400 text-center leading-relaxed">
                  Forty-five minutes later, there's clarity. A roadmap. A realistic timeline measured in days, not
                  years. A budget that won't require venture capital or a second mortgage. Most importantly—proof that
                  the idea isn't crazy.
                </p>
                <p className="text-xl text-green-400 font-semibold mt-6 text-center leading-relaxed">
                  Alex sleeps like a kid on Christmas Eve for the first time in months.
                </p>
                <p className="text-xl text-white font-semibold mt-4 text-center leading-relaxed">
                  Seven days later? A complete platform with database, API, and paying customers. Alex's boss becomes
                  the first enterprise customer. The "side project" starts generating more monthly revenue than
                  quarterly bonuses ever did. The brain rewiring has begun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Right Now Is Your Chapter One Section */}
      <section
        id="chapter-one-section"
        role="region"
        aria-labelledby="chapter-one-title"
        className="py-24 bg-black relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2
              id="chapter-one-title"
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight"
            >
              Why Right Now Is Your Chapter One
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-green-400" />,
                title: "The Perfect Storm Is Here",
                text: "While Dario Amodei warns that AI could eliminate 10-20% of white-collar jobs in the next five years, we see something different: the greatest entrepreneurial opportunity window in human history. The same technology threatening traditional employment is now your secret weapon.",
              },
              {
                icon: <Users className="h-8 w-8 text-green-400" />,
                title: "You Can Move Like a Team of Ten",
                text: "AI codes, designs, writes copy, handles customer service, and runs marketing campaigns. The biggest barrier to starting a business—finding people who could build your idea—just disappeared.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
                title: "Your Paycheck Is Your Superpower",
                text: "Everyone says \"start when you have nothing to lose.\" That's backwards. Start when you're comfortable. Desperation makes you lead with fear. When your bills are covered, you can be patient. Patient people win. Your salary isn't holding you back—it's funding your experiments.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-green-400" />,
                title: "$5K Gets You Further Than $1M Used To",
                text: "What once required venture capital now requires a few thousand dollars. The tools are accessible. The distribution is free. The barriers are gone. What used to cost $50K+ and take six months can now be done for up to 97% less in a matter of days.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl p-8 vercel-border-glow-green hover:bg-[#151515] transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-[1.03]"
              >
                <div className="h-16 w-16 rounded-xl bg-green-900/20 flex items-center justify-center mb-6 group-hover:bg-green-900/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white leading-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can You Build Section */}
      <section
        id="what-you-can-build-section"
        role="region"
        aria-labelledby="what-you-can-build-title"
        className="py-24 bg-[#0a0a0a] relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2
              id="what-you-can-build-title"
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight"
            >
              What Can You Build?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Your idea isn't just "cool." It's capable of changing things.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <DollarSign className="h-8 w-8 text-blue-400" />,
                title: "Launch a Platform That Earns",
                text: "Build a service, marketplace, or tool people are eager to pay for. Complete with database, API, and payment processing—ready to accept money from day one.",
              },
              {
                icon: <Brain className="h-8 w-8 text-blue-400" />,
                title: "Solve Problems No One Else Is Tackling",
                text: "Use your insider knowledge to create innovation your field hasn't seen before. That inefficiency everyone accepts as \"normal\"? You're about to make it obsolete.",
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-400" />,
                title: "Make a Meaningful Impact",
                text: "Transform how your industry, your community—or even the world—solves a real problem. Standing on the shoulders of AI giants, you can build what used to require entire teams.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl p-8 vercel-border-glow-blue hover:bg-[#151515] transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-[1.03]"
              >
                <div className="h-16 w-16 rounded-xl bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-blue-900/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white leading-tight">{item.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hidden Truth Section */}
      <section
        id="hidden-truth-section"
        role="region"
        aria-labelledby="hidden-truth-title"
        className="py-24 bg-black relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="hidden-truth-title"
              className="text-3xl md:text-5xl font-bold mb-10 text-white tracking-tight leading-tight"
            >
              The Hidden Truth Nobody Tells You
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Building rewires your brain in ways that transform your entire life:
            </p>
            <div className="space-y-8 text-left">
              {[
                {
                  icon: <Cpu className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />,
                  text: "You stop thinking in job descriptions and start thinking in systems.",
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />,
                  text: "Revenue opportunities jump out of random conversations.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />,
                  text: "Once you realize you can make money while you sleep, your relationship with time changes forever.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#181818] p-6 rounded-lg vercel-border flex items-start space-x-4 transition-all duration-300 hover:bg-[#202020] hover:shadow-lg hover:scale-[1.02]"
                >
                  {item.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.text}</h3>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-400 mt-12 leading-relaxed">
              Your peer group shifts. You start hanging out with people who make things happen instead of people who
              make excuses. When the next wave of layoffs hits, you'll be in the group that's hiring.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials-section"
        role="region"
        aria-labelledby="testimonials-title"
        className="py-24 bg-[#0a0a0a] relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="testimonials-title"
                className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight"
              >
                What Our Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#111] rounded-xl p-8 vercel-border relative shadow-xl shadow-gray-900/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                <div className="absolute -top-5 -left-5 bg-blue-900/30 rounded-full p-3">
                  <Quote className="h-7 w-7 text-blue-400" />
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  "I had this idea for a fitness platform for years but couldn't afford developers. PushButtonBuild
                  helped me launch in just 2 weeks for a fraction of the cost! Now I have 500+ paying members."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Sarah Johnson</p>
                    <p className="text-gray-400">Fitness Coach</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#111] rounded-xl p-8 vercel-border relative shadow-xl shadow-gray-900/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                <div className="absolute -top-5 -left-5 bg-blue-900/30 rounded-full p-3">
                  <Quote className="h-7 w-7 text-blue-400" />
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  "My client portal would have cost $60K with traditional development. With PushButtonBuild, I spent
                  under $3K and now have a platform my clients love. It's generating $12K/month in recurring revenue."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Michael Chen</p>
                    <p className="text-gray-400">Financial Advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Has Changed the Rules Section */}
      <section id="ai-rules-section" role="region" aria-labelledby="ai-rules-title" className="py-24 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2
              id="ai-rules-title"
              className="text-3xl md:text-5xl font-bold mb-16 text-white text-center tracking-tight leading-tight"
            >
              AI Has Changed the Rules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="h-8 w-8 text-blue-400" />,
                  title: "Launch in Hours,\nNot Months",
                  text: "AI-powered development\naccelerates everything you build. Complete platforms with databases and APIs deployed in days.",
                  glowClass: "vercel-border-glow",
                },
                {
                  icon: <DollarSign className="h-8 w-8 text-green-400" />,
                  title: "Avoid High Dev\nCosts",
                  text: "We've cut traditional costs\nby up to 97% using\nsmarter systems. No venture capital required.",
                  glowClass: "vercel-border-glow-green",
                  iconBg: "bg-green-900/20 group-hover:bg-green-900/30",
                },
                {
                  icon: <Target className="h-8 w-8 text-red-400" />,
                  title: "Focus on Your\nIdea",
                  text: "You bring insight. We build\nthe vehicle that turns it\ninto impact. You're building on OpenAI, Shopify, Cloudflare, Stripe—infrastructure that used to require teams now fits in your laptop.",
                  glowClass: "vercel-border-glow-red",
                  iconBg: "bg-red-900/20 group-hover:bg-red-900/30",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#111] rounded-xl p-8 ${item.glowClass} hover:bg-[#151515] transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-[1.03]`}
                >
                  <div
                    className={`h-16 w-16 rounded-xl ${
                      item.iconBg || "bg-blue-900/20 group-hover:bg-blue-900/30"
                    } flex items-center justify-center mb-6 mx-auto transition-colors`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white text-center tracking-tight leading-tight h-[4.5rem] flex items-center justify-center whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-center leading-relaxed min-h-[4.5rem] flex items-center justify-center whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Math That Changes Everything Section */}
      <section id="math-section" role="region" aria-labelledby="math-title" className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="math-title"
              className="text-3xl md:text-5xl font-bold mb-10 text-white tracking-tight leading-tight"
            >
              The Math That Changes Everything
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Here's what keeps successful entrepreneurs up at night (in the best way):
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-[#111] p-8 rounded-xl vercel-border transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold text-red-400 mb-4">Traditional Path:</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Trade time for money. Linear returns for linear effort. Income stops when you stop.
                </p>
              </div>
              <div className="bg-[#111] p-8 rounded-xl vercel-border-glow-green transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Business Path:</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Build a $2,000/month profit platform. That's <span className="font-bold">$24,000/year</span> in your
                  pocket.
                </p>
              </div>
            </div>
            <p className="text-2xl text-blue-400 font-medium mt-12 tracking-tight leading-tight">
              Your ideas deserve more than a Google Doc.
            </p>
          </div>
        </div>
      </section>

      {/* AI Is For Everyone Section */}
      <section
        id="ai-for-everyone-section"
        role="region"
        aria-labelledby="ai-for-everyone-title"
        className="py-24 bg-black relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="ai-for-everyone-title"
              className="text-3xl md:text-5xl font-bold mb-12 text-white tracking-tight leading-tight"
            >
              AI Is For Everyone...
            </h2>
            <div className="text-xl text-gray-400 mb-12 leading-relaxed">
              <p className="mb-3">Doctors. Lawyers. Athletes. Business owners. Coaches. Creators. Consultants.</p>
              <p>Entrepreneurs. Salespeople. Factory workers. Anyone with a vision.</p>
            </div>
            <div className="space-y-5 text-xl text-gray-400 leading-relaxed">
              <p>They didn't have tech teams.</p>
              <p>They didn't have 6-figure budgets.</p>
              <p>They had a need. An idea. A drive.</p>
              <div className="h-px w-24 bg-blue-900 mx-auto my-8"></div>
              <p>They booked this exact call.</p>
              <p>They trusted us.</p>
              <p>And now they're live—with real platforms solving real problems.</p>
            </div>
            <p className="text-2xl text-blue-400 font-medium mt-12 tracking-tight leading-tight">
              You're closer than you think.
            </p>
          </div>
        </div>
      </section>

      {/* The World Needs Your Vision Section */}
      <section
        id="world-needs-vision-section"
        role="region"
        aria-labelledby="world-needs-vision-title"
        className="py-24 bg-[#0a0a0a] relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 vercel-grid opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="world-needs-vision-title"
              className="text-3xl md:text-5xl font-bold mb-12 text-white tracking-tight leading-tight"
            >
              The World Needs Your Vision
            </h2>
            <p className="text-2xl text-white mb-12 leading-relaxed">
              You're not just building an app. You're creating a...
            </p>
            <div className="bg-[#111] rounded-xl p-8 mb-12 vercel-border shadow-xl shadow-gray-900/20">
              <div className="text-left max-w-xl mx-auto space-y-6">
                {[
                  {
                    num: 1,
                    title: "Solution",
                    desc: "That addresses a problem others have overlooked or accepted as normal.",
                  },
                  {
                    num: 2,
                    title: "Tool",
                    desc: "That makes what was once difficult, time-consuming, or expensive suddenly accessible.",
                  },
                  {
                    num: 3,
                    title: "Transformation",
                    desc: "That shifts how people work, connect, or experience something important to them.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-green-900/40 flex items-center justify-center mr-5 mt-1 flex-shrink-0">
                      <span className="text-green-400 font-bold text-lg">{item.num}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5 text-xl text-gray-400 leading-relaxed">
              <p>Something that closes a gap only you've noticed.</p>
              <p>That relieves a frustration only you've named.</p>
              <p>That helps, heals, empowers, or connects.</p>
            </div>
            <div className="mt-12 relative">
              <div className="absolute -inset-1 bg-blue-500/20 blur-xl rounded-full"></div>
              <p className="text-2xl text-blue-400 font-medium tracking-tight leading-relaxed relative">
                If it lives in your head, you're already halfway there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Call Section */}
      <section
        id="strategy-session-section"
        role="region"
        aria-labelledby="strategy-session-title"
        className="py-24 bg-black relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="strategy-session-title"
                className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight"
              >
                Your 30-Minute Strategy Call — $299
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                This isn't a sales call. It's a build strategy session for visionaries ready to move.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[#111] rounded-xl p-8 vercel-border relative overflow-hidden group shadow-xl shadow-gray-900/20">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
                <h3 className="text-2xl font-bold mb-8 text-white relative z-10 tracking-tight">What We'll Uncover</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    {
                      title: "Your Vision",
                      desc: "What your idea is really solving and how we bring it to life",
                      icon: <Lightbulb className="h-6 w-6 text-green-400" />,
                    },
                    {
                      title: "Your Audience",
                      desc: "Who it's for and why they'll pay",
                      icon: <Users className="h-6 w-6 text-green-400" />,
                    },
                    {
                      title: "Your Features",
                      desc: "What you need for a complete platform (and what you don't)",
                      icon: <Layers className="h-6 w-6 text-green-400" />,
                    },
                    {
                      title: "Your Roadmap",
                      desc: "The exact path from idea to profitable platform in 3-7 days",
                      icon: <Rocket className="h-6 w-6 text-green-400" />,
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-[#181818]"
                    >
                      <div className="mr-5 mt-1 flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0a0a0a] rounded-xl p-8 vercel-border-glow relative overflow-hidden group shadow-xl shadow-blue-900/20">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>
                <h3 className="text-2xl font-bold mb-8 text-white relative z-10 tracking-tight">Why It Works</h3>
                <div className="space-y-6 mb-10 relative z-10">
                  {[
                    {
                      text: "Clarify your vision and validate market demand",
                      icon: <Brain className="h-6 w-6 text-blue-400" />,
                    },
                    {
                      text: "Identify your competitive advantage using insider knowledge",
                      icon: <Target className="h-6 w-6 text-blue-400" />,
                    },
                    {
                      text: "Get a clear plan for full platform development and launch",
                      icon: <BookOpen className="h-6 w-6 text-blue-400" />,
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center p-4 rounded-lg transition-all duration-300 hover:bg-[#111111]"
                    >
                      <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center mr-5 flex-shrink-0">
                        {item.icon}
                      </div>
                      <p className="text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-950/70 p-5 rounded-lg mb-10 relative z-10 border border-blue-800/50 shadow-md">
                  <p className="text-blue-300 leading-relaxed font-medium">
                    The $299 is credited toward your build when you move forward.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-100 border border-gray-200 h-14 rounded-lg relative z-10 text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <Link
                    href="https://buy.stripe.com/9B614o7SC0RuanG4ee8IU0S"
                    className="flex items-center justify-center w-full text-black"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Book Your Strategy Session <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-center text-sm text-gray-500 mt-4 relative z-10">
                  (Limited spots available this month)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" role="region" aria-labelledby="faq-title" className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2
              id="faq-title"
              className="text-3xl md:text-5xl font-bold mb-16 text-white text-center tracking-tight leading-tight"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Will I own the platform?",
                  a: "Yes. Everything we build is 100% yours. Complete with database, API, and payment processing. Monetize it, scale it, and take it wherever you like.",
                },
                {
                  q: "How long does development take?",
                  a: "Complete platforms launch in 3-7 days. We'll have something online for you in hours. It's amazing what AI can do when you know how to harness it.",
                },
                {
                  q: "What if I'm not technical?",
                  a: "Perfect. You don't need to write code, manage developers, or deal with tech headaches. You bring the vision and industry insight. We translate dreams into production-ready code.",
                },
                {
                  q: "Is the $299 refundable?",
                  a: "No—but it's credited toward your build. We deliver strategic value that goes far beyond consultation.",
                },
                {
                  q: "How much will development cost?",
                  a: "Our average client invests around $3,000. Some are $1,500 while others are $5,000+. You get a complete platform with database, API, and payment processing—not an MVP that needs months of additional work.",
                },
                {
                  q: "What happens once it's built?",
                  a: "Full marketing suite available: social media tools, 700M-contact database, website builders, and more. We have you covered from build to scale.",
                },
                {
                  q: "Can I do this myself?",
                  a: "Sort of, but you'd need to spend months figuring out which tools, resources, flows, prompts, and APIs actually work. We bring 20 years of development experience plus deep AI understanding to make it all happen.",
                },
              ].map((faqItem) => (
                <div
                  key={faqItem.q}
                  className="bg-[#111] p-8 rounded-xl vercel-border hover:vercel-border-glow transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-[1.01]"
                >
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors tracking-tight">
                    {faqItem.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{faqItem.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Plot Twist If You Wait Section */}
      <section
        id="plot-twist-section"
        role="region"
        aria-labelledby="plot-twist-title"
        className="py-24 bg-black relative"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <AlertTriangle className="h-16 w-16 text-red-500 animate-pulse" />
            </div>
            <h2
              id="plot-twist-title"
              className="text-3xl md:text-5xl font-bold mb-10 text-white tracking-tight leading-tight"
            >
              The Plot Twist If You Wait
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Here's the uncomfortable truth: AI won't pause for your comfort zone.
            </p>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>While you're wondering "what if," someone else is shipping your idea.</p>
              <p>
                While you're waiting for the "perfect time," others are using the same AI tools to become irreplaceable.
              </p>
            </div>
            <p className="text-2xl text-red-400 font-semibold mt-12 mb-8 tracking-tight leading-tight">
              The riskiest thing you can do is not start.
            </p>
            <div className="bg-[#111] p-8 rounded-xl vercel-border-glow-red shadow-xl shadow-red-900/20">
              <p className="text-xl text-white leading-relaxed">
                Building isn't risky anymore—it's insurance. It's an excuse to learn skills that AI can't replace. It's
                a way to meet people building the future. It's fun as heck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" role="region" aria-labelledby="cta-title" className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 vercel-grid opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-title" className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight">
              Get Started Today
            </h2>
            <p className="text-xl text-blue-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's make what's been sitting in your head—real.
            </p>
            <div className="bg-[#111] p-10 rounded-2xl vercel-border-glow mb-12 relative overflow-hidden group hover:bg-[#151515] transition-colors shadow-xl shadow-blue-900/20 hover:scale-[1.02]">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">30-Minute Strategy Call</h3>
                <div className="flex items-center justify-center gap-5 mb-8">
                  <span className="text-lg line-through opacity-70 text-gray-500">$599</span>
                  <span className="text-4xl font-bold text-white tracking-tight">$299</span>
                </div>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 border border-gray-200 h-14 px-10 text-lg rounded-lg shadow-lg shadow-blue-900/50 transition-all duration-300 hover:scale-105 font-medium"
                >
                  <Link
                    href="https://buy.stripe.com/9B614o7SC0RuanG4ee8IU0S"
                    className="flex items-center text-black"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    👉 I'm Ready To Build My Idea <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <p className="text-sm text-blue-400 tracking-wide">
              Limited spots available. 100% satisfaction guaranteed or your money back.
            </p>
          </div>
        </div>
      </section>

      {/* P.S. Section */}
      <section id="ps-section" role="region" aria-label="Final Message" className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center bg-[#111] p-8 rounded-xl vercel-border shadow-lg shadow-gray-900/10">
            <p className="text-xl text-gray-300 leading-relaxed">
              <span className="font-bold text-white">P.S.</span> — There's a reason your idea won't leave you alone.
              Trust your gut. The convergence of AI tools, global distribution, and minimal startup costs has created a
              once-in-history moment where anyone with vision can build something remarkable. Don't let this moment pass
              you by.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Progress Indicator & Scroll to top button */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#111] z-50">
        <div className="h-full bg-green-500" style={{ width: "var(--scroll-progress, 0%)" }}></div>
      </div>
      <button
        className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black hover:scale-110"
        id="scroll-to-top"
        aria-label="Scroll to top"
        style={{ opacity: "var(--scroll-back-opacity, 0)", visibility: "var(--scroll-back-visibility, hidden)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const updateScroll = () => {
              const scrollTop = window.scrollY;
              const docHeight = document.body.offsetHeight - window.innerHeight;
              const scrollPercent = docHeight > 0 ? (scrollTop / docHeight * 100) : 0;
              document.documentElement.style.setProperty('--scroll-progress', scrollPercent + '%');
              
              const scrollToTopButton = document.getElementById('scroll-to-top');
              if (scrollToTopButton) {
                if (scrollTop > 300) {
                  scrollToTopButton.style.opacity = '1';
                  scrollToTopButton.style.visibility = 'visible';
                } else {
                  scrollToTopButton.style.opacity = '0';
                  scrollToTopButton.style.visibility = 'hidden';
                }
              }
            };
            window.addEventListener('scroll', updateScroll);
            updateScroll(); // Initial call
            
            const scrollToTopButton = document.getElementById('scroll-to-top');
            if (scrollToTopButton) {
                scrollToTopButton.addEventListener('click', function() {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              });
            }
          });
        `,
        }}
      />
    </div>
  )
}
