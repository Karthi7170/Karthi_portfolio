import Link from "next/link"
import { ArrowRight, ArrowUpRight, Code2, Cpu, Github, Layers3, Mail, Smartphone } from "lucide-react"

const services = [
  {
    number: "01",
    title: "FULL STACK DEVELOPMENT",
    icon: Code2,
    text: "Responsive, production-ready websites and web apps built with modern frameworks, clean UX, and launch-focused engineering.",
  },
  {
    number: "02",
    title: "FRONTEND DEVELOPMENT",
    icon: Layers3,
    text: "Premium interfaces with strong visual hierarchy, animation, mobile responsiveness, accessibility, and fast interactions.",
  },
  {
    number: "03",
    title: "APP DEVELOPMENT",
    icon: Smartphone,
    text: "Mobile-first product experiences, prototypes, dashboards, and practical app interfaces designed around real user flows.",
  },
  {
    number: "04",
    title: "AI & AUTOMATION",
    icon: Cpu,
    text: "AI-assisted workflows, integrations, smart tools, and automations that reduce repetitive work and improve digital products.",
  },
]

const projects = [
  {
    number: "01",
    title: "NEW ROYAL TILES",
    tag: "BUSINESS WEBSITE",
    description: "A premium digital showroom experience with branch discovery, tile visualisation, enquiries, and responsive product presentation.",
    href: "https://royaltiles.vercel.app",
  },
  {
    number: "02",
    title: "SUGUMAR PORTFOLIO",
    tag: "CREATIVE PORTFOLIO",
    description: "A cinematic portfolio built for a video editor with motion-first storytelling, project showcases, and a premium visual identity.",
    href: "https://sugumar-portfolio-beta.vercel.app",
  },
  {
    number: "03",
    title: "VIP-HUNTER",
    tag: "AUTOMATION PRODUCT",
    description: "A focused job-discovery product that helps organise role searches, matching, and application workflows in one experience.",
    href: "https://vip-hunter.vercel.app",
  },
]

export default function Home() {
  return (
    <div className="bg-[#050505] text-white">
      <section className="hero-stage relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_35%,rgba(199,255,0,0.10),transparent_23%),linear-gradient(to_bottom,#050505_0%,#070707_70%,#050505_100%)]" />
        <div className="grid-noise absolute inset-0 -z-10 opacity-45" />

        <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[1500px] flex-col px-5 pb-7 pt-8 sm:px-8 lg:px-14">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
            <span>Karthikeyan K</span>
            <span className="hidden sm:block">Vibe Coder · Developer · AI Builder</span>
            <span>Chennai / India</span>
          </div>

          <div className="relative flex flex-1 items-center justify-center py-8">
            <div className="pointer-events-none absolute inset-x-0 top-[13%] z-0 text-center">
              <h1 className="hero-title select-none text-[clamp(5.2rem,15vw,14rem)] font-black uppercase leading-[0.72] tracking-[-0.08em]">
                PORTFOLIO
              </h1>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.42em] text-white/35">
                Ideas to interface. Interface to product.
              </p>
            </div>

            <div className="hero-portrait relative z-10 h-[560px] w-[min(84vw,520px)] sm:h-[650px] lg:h-[720px]">
              <img
                src="/karthikeyan-night.webp"
                alt="Karthikeyan K"
                className="h-full w-full object-cover object-[50%_24%]"
              />
            </div>

            <div className="absolute bottom-[8%] left-0 z-20 hidden max-w-[260px] lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8ff00]">Digital builder</p>
              <p className="mt-3 text-sm leading-6 text-white/50">
                I build websites, app experiences, AI workflows, and digital products with a strong focus on clarity and usability.
              </p>
            </div>

            <div className="absolute bottom-[8%] right-0 z-20 hidden text-right lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">Available for projects</p>
              <Link href="/#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#c8ff00]">
                Let&apos;s build something <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              <span>Web</span>
              <span>Apps</span>
              <span>AI</span>
              <span>Automation</span>
              <span>Product UX</span>
            </div>
            <Link href="/#work" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#c8ff00]">
              Explore selected work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 bg-[#070707]">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-32">
          <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]">
            <img
              src="/karthikeyan-editorial.webp"
              alt="Karthikeyan K portrait"
              className="h-full min-h-[620px] w-full object-cover object-center grayscale-[0.12]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c8ff00]">Profile / 2026</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
                Technology should feel simple to the user, even when the work behind it is complex.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="section-label">Intro</p>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl">
              I build digital
              <span className="block text-[#c8ff00]">experiences.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              I&apos;m Karthikeyan K — a vibe coder and developer who uses AI-assisted development, modern web technology,
              and product thinking to turn ideas into clean, useful, launch-ready experiences.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                ["01", "Modern websites", "Responsive, fast and built for real users."],
                ["02", "App experiences", "Clear mobile-first flows and interfaces."],
                ["03", "AI workflows", "Useful integrations and smart automation."],
                ["04", "Product delivery", "From rough brief to deployed version."],
              ].map(([n, title, text]) => (
                <div key={n} className="bg-[#080808] p-6">
                  <span className="text-[10px] font-black text-[#c8ff00]">{n}</span>
                  <h3 className="mt-6 text-lg font-bold uppercase">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/40">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10">
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Capabilities</p>
              <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.045em] sm:text-6xl">What I build</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/45">
              A focused set of digital capabilities inspired by the reference portfolio — simplified, sharper, and adapted to my own work.
            </p>
          </div>

          <div className="border-t border-white/10">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <details key={service.title} className="service-row group border-b border-white/10" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-5 py-6 sm:gap-8 sm:py-8">
                    <span className="w-8 text-[10px] font-black text-white/30">{service.number}</span>
                    <div className="grid h-10 w-10 place-items-center border border-white/10 text-white/45 group-open:border-[#c8ff00]/50 group-open:text-[#c8ff00]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="flex-1 text-lg font-black uppercase tracking-[-0.02em] sm:text-2xl">{service.title}</h3>
                    <span className="service-plus text-2xl font-light text-[#c8ff00]">+</span>
                  </summary>
                  <div className="pb-8 pl-[4.6rem] pr-6 sm:pl-[7rem]">
                    <p className="max-w-2xl text-sm leading-7 text-white/45">{service.text}</p>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-white/10 bg-[#070707]">
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Selected work</p>
              <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.045em] sm:text-6xl">Live builds</h2>
            </div>
            <Link href="/projects" className="text-xs font-black uppercase tracking-[0.16em] text-[#c8ff00]">
              View all projects
            </Link>
          </div>

          <div className="space-y-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-strip group grid gap-5 border border-white/10 bg-[#090909] p-6 transition-all hover:border-[#c8ff00]/45 sm:p-8 lg:grid-cols-[0.12fr_0.7fr_1.25fr_0.25fr] lg:items-center"
              >
                <span className="text-[10px] font-black text-[#c8ff00]">{project.number}</span>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">{project.tag}</p>
                  <h3 className="mt-2 text-xl font-black uppercase sm:text-2xl">{project.title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-white/42">{project.description}</p>
                <div className="lg:text-right">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#c8ff00] group-hover:bg-[#c8ff00] group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(199,255,0,0.10),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-32">
          <div>
            <p className="section-label">Get in touch</p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Have an idea?
              <span className="block text-[#c8ff00]">Let&apos;s build it.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-md text-sm leading-7 text-white/50">
              Website, app, portfolio, AI workflow, automation, or something experimental — send the requirement and I&apos;ll help shape the build.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:karthifreelancer7170@gmail.com" className="accent-button">
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a href="https://github.com/Karthi7170" target="_blank" rel="noreferrer" className="outline-button">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
