import Link from "next/link"
import { ArrowLeft, ArrowRight, Bot, Code2, Layers3, Rocket, Smartphone, Workflow } from "lucide-react"

const capabilities = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Professional websites and web applications with responsive layouts, clean structure, strong performance, and a premium visual finish.",
    points: ["Business websites", "Portfolio websites", "Web applications"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    text: "Mobile-first product experiences and app prototypes focused on clear navigation, useful features, and practical user flows.",
    points: ["App interfaces", "MVP prototypes", "Mobile-first experiences"],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    text: "AI integrations that support a real workflow — assistants, content tools, intelligent interfaces, and task automation.",
    points: ["AI assistants", "AI integrations", "Smart workflows"],
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Simple systems that connect data, scheduled jobs, APIs, notifications, and repetitive business tasks.",
    points: ["Workflow automation", "Scheduled jobs", "API integrations"],
  },
  {
    icon: Layers3,
    title: "Product & UI Build",
    text: "I can take a rough product idea and shape the structure, interface, interactions, and first deployable version.",
    points: ["UX structure", "UI implementation", "Prototype to production"],
  },
  {
    icon: Rocket,
    title: "Deployment & Improvement",
    text: "Launch support, responsive fixes, performance cleanup, integration checks, and practical iteration after release.",
    points: ["Vercel deployment", "Responsive QA", "Performance refinement"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-[1240px] px-5 pb-14 pt-20 sm:px-8 lg:pb-20 lg:pt-28">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-white/45 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
        <p className="section-kicker mt-10">Services</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">
          Digital development without the unnecessary complexity.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/48">
          Whether you need one focused website or a larger product idea, I help you choose what actually needs to be built and move it toward launch.
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="bg-[#090909] p-7 sm:p-8">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-emerald-300/25 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-8 text-2xl font-black tracking-[-0.035em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/45">{item.text}</p>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-xs font-medium text-white/45">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_90%_20%,rgba(46,255,203,0.12),transparent_24%),#090909] p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
              <p className="section-kicker">Not sure what you need?</p>
              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.045em] sm:text-4xl">
                Tell me the outcome you want. We can work backward from there.
              </h2>
            </div>
            <div className="lg:text-right">
              <Link href="/contact" className="inline-flex h-11 items-center rounded-full bg-emerald-300 px-5 text-sm font-bold text-black">
                Discuss your idea <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
