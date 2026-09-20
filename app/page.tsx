import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Rocket,
  Smartphone,
  Sparkles,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Premium websites and web apps that are fast, responsive, easy to use, and ready to launch.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    text: "Clean mobile-first app experiences, practical prototypes, and product interfaces built around real user needs.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    text: "AI integrations, assistants, smart workflows, automations, and tools that reduce repetitive work.",
  },
  {
    icon: Layers3,
    title: "Product & UI Build",
    text: "From rough idea to polished interface — structure, UX, implementation, testing, and deployment in one workflow.",
  },
]

const projects = [
  {
    number: "01",
    title: "Sugumar Portfolio",
    type: "Creative Portfolio",
    description:
      "A cinematic portfolio for a video editor, built around motion, video-first storytelling, and a premium viewing experience.",
    stack: ["Next.js", "GSAP", "Video UX"],
    href: "https://sugumar-portfolio-beta.vercel.app",
  },
  {
    number: "02",
    title: "New Royal Tiles",
    type: "Business Website",
    description:
      "A customer-focused digital showroom with branch discovery, tile visualisation, calculators, WhatsApp enquiry flows, and mobile-first UX.",
    stack: ["Next.js", "Visualizer", "Local SEO"],
    href: "https://royaltiles.vercel.app",
  },
  {
    number: "03",
    title: "VIP-Hunter",
    type: "Automation Product",
    description:
      "A job discovery system that scans public employer feeds, filters relevant roles, scores matches, and simplifies the daily search process.",
    stack: ["Next.js", "Automation", "Supabase"],
    href: "https://vip-hunter.vercel.app",
  },
]

const process = [
  ["01", "Understand", "We define the goal, user, and the exact problem the product should solve."],
  ["02", "Design", "I shape the structure, visual direction, user flow, and the first working experience."],
  ["03", "Build", "AI-assisted development speeds up implementation while the product logic stays intentional."],
  ["04", "Ship", "I test the experience, connect the required services, deploy it, and refine what matters."],
]

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#050505] text-white">
      <section className="relative isolate border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(35,255,200,0.07),transparent_30%),linear-gradient(to_bottom,#080808,#050505)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:46px_46px]" />

        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr_0.9fr] lg:gap-5 lg:px-10 lg:py-6 xl:px-16">
          <div className="relative z-10 pt-5 lg:pt-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Available for digital builds
            </div>
            <h1 className="max-w-[610px] text-[clamp(4rem,8.3vw,8.7rem)] font-black leading-[0.78] tracking-[-0.075em]">
              <span className="block">Build</span>
              <span className="outline-text block">Digital</span>
              <span className="block">Futures</span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/50 sm:text-base">
              I help ideas become clear, useful digital products — from the first screen to the final deployment.
            </p>
          </div>

          <div className="relative order-first mx-auto h-[460px] w-full max-w-[430px] lg:order-none lg:h-[680px] lg:max-w-none">
            <div className="absolute inset-x-[8%] bottom-0 top-[4%] rounded-[2rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent" />
            <div className="hero-photo-mask absolute inset-0">
              <Image
                src="/karthikeyan-hero.jpg"
                alt="Karthikeyan K"
                fill
                priority
                sizes="(max-width: 1024px) 430px, 36vw"
                className="object-cover object-[50%_22%]"
              />
            </div>
            <div className="absolute bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/65 px-5 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Karthikeyan K
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">Vibe Coder · Digital Builder</div>
            </div>
          </div>

          <div className="relative z-10 pb-4 lg:pb-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Think. Build. Ship.</p>
            <h2 className="max-w-md text-3xl font-black leading-[1.02] tracking-[-0.045em] sm:text-4xl xl:text-5xl">
              Web. Apps. AI. Built around your idea.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              I&apos;m <strong className="font-semibold text-white">Karthikeyan K</strong>, a vibe coder and developer.
              I build modern websites, app experiences, AI integrations, automations, and digital products with a clear,
              user-friendly approach.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-300 px-5 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
              >
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-emerald-300/50 hover:text-emerald-300"
              >
                View Work
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-white/45">
              <a href="https://github.com/Karthi7170" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <Github className="h-4 w-4 text-emerald-300" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/karthikeyan-k-950311208" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <Linkedin className="h-4 w-4 text-emerald-300" /> LinkedIn
              </a>
              <a href="mailto:karthifreelancer7170@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-emerald-300" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/[0.015]">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35 sm:justify-between sm:px-8 lg:px-16">
            <span>Web Development</span>
            <span className="hidden h-1 w-1 rounded-full bg-emerald-300 sm:block" />
            <span>App Development</span>
            <span className="hidden h-1 w-1 rounded-full bg-emerald-300 sm:block" />
            <span>AI & Automation</span>
            <span className="hidden h-1 w-1 rounded-full bg-emerald-300 sm:block" />
            <span>Product Experience</span>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">About me</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              I make technology feel simpler.
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-white/75 sm:text-2xl sm:leading-10">
              I&apos;m Karthikeyan K. I use AI-assisted development, modern web technologies, and practical product
              thinking to turn rough ideas into polished digital experiences.
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              My focus is not adding technology just because it looks impressive. The product should be easy to
              understand, responsive on every device, useful to the people using it, and straightforward to maintain.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Clear communication", "Mobile-first thinking", "Launch-ready delivery"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-xs font-medium text-white/60">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">What I can help with</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                One partner for the digital side of your idea.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/45">
              Need a website, an app experience, an AI workflow, or help shaping the full product? I can take it from
              concept to a working first version.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="group bg-[#090909] p-7 transition-colors hover:bg-[#0d0d0d] sm:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-emerald-300/25 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/20 transition-colors group-hover:text-emerald-300" />
                  </div>
                  <h3 className="mt-10 text-2xl font-bold tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/45">{service.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mb-12">
          <p className="section-kicker">Selected work</p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">Real builds. Live products.</h2>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
              View project details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <article key={project.title} className="premium-project group">
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.18fr_0.85fr_1.2fr_0.5fr] lg:items-center lg:p-10">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-emerald-300">{project.number}</span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] sm:text-3xl">{project.title}</h3>
                </div>
                <div>
                  <p className="max-w-xl text-sm leading-7 text-white/48">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:text-right">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold transition-colors hover:border-emerald-300/50 hover:text-emerald-300"
                  >
                    View Live <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-12 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="section-kicker">How I work</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Simple process. Clear progress.</h2>
            </div>
            <p className="max-w-xl self-end text-sm leading-7 text-white/45">
              You do not need a perfect technical brief. Start with the problem or idea — I&apos;ll help turn it into a
              clear, buildable plan.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {process.map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-black p-6">
                <span className="font-mono text-xs font-bold text-emerald-300">{number}</span>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/42">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_85%_20%,rgba(46,255,203,0.14),transparent_28%),#090909] p-7 sm:p-10 lg:p-14">
            <Sparkles className="absolute right-8 top-8 h-6 w-6 text-emerald-300/60" />
            <p className="section-kicker">Have an idea?</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl">
                  Let&apos;s turn it into something people can use.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/48 sm:text-base">
                  Website, app, AI workflow, automation, or a product idea — send me the requirement and we can shape the
                  right solution.
                </p>
              </div>
              <div className="lg:text-right">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-300 px-6 text-sm font-bold text-black">
                  Start a Project <Rocket className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
