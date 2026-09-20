import Link from "next/link"
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Film, MapPinned } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "Sugumar Portfolio",
    category: "Creative Portfolio",
    icon: Film,
    live: "https://sugumar-portfolio-beta.vercel.app",
    summary:
      "A cinematic portfolio for a video editor, designed to make the work feel immersive instead of presenting it as a standard gallery.",
    challenge:
      "Create a premium creative identity with motion, video-first presentation, and an experience that still works smoothly on smaller screens.",
    result:
      "A polished portfolio with cinematic storytelling, responsive layout, scroll-led interaction, and a strong visual identity.",
    highlights: ["Cinematic hero", "GSAP interactions", "Responsive video UX", "Premium creative presentation"],
    stack: ["Next.js", "React", "TypeScript", "GSAP"],
  },
  {
    number: "02",
    title: "New Royal Tiles",
    category: "Business Website",
    icon: MapPinned,
    live: "https://royaltiles.vercel.app",
    summary:
      "A customer-friendly website for a multi-branch tile showroom, built to make discovery, visualisation, enquiry, and showroom visits easier.",
    challenge:
      "Turn an offline showroom business into a useful digital buying journey rather than a basic brochure website.",
    result:
      "A mobile-first experience with room visualisation, tile calculations, branch discovery, local search structure, and WhatsApp-led conversion.",
    highlights: ["Room visualiser", "Tile calculator", "Four branch finder", "WhatsApp enquiry journey"],
    stack: ["Next.js", "Responsive UX", "Local SEO", "Visualizer"],
  },
  {
    number: "03",
    title: "VIP-Hunter",
    category: "Automation Product",
    icon: BriefcaseBusiness,
    live: "https://vip-hunter.vercel.app",
    summary:
      "A focused job discovery tool that reduces repetitive searching by filtering public employer feeds around role, location, and experience preferences.",
    challenge:
      "Make daily job discovery faster and more relevant without inventing vacancies or depending on expensive AI calls.",
    result:
      "A repeatable search workflow with ATS feed scanning, filtering, local scoring, deduplication, and scheduled automation.",
    highlights: ["ATS feed scanning", "Local match scoring", "Supabase-ready workflow", "Scheduled search"],
    stack: ["Next.js", "TypeScript", "Automation", "Supabase"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-[1240px] px-5 pb-12 pt-20 sm:px-8 lg:pb-16 lg:pt-28">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-white/45 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
        <p className="section-kicker mt-10">Portfolio</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">
          Real projects with a clear job to do.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/48">
          These projects show how I approach different problems — creative presentation, business conversion, and workflow automation.
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] space-y-5 px-5 pb-24 sm:px-8 lg:pb-32">
        {projects.map((project) => {
          const Icon = project.icon
          return (
            <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090909]">
              <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.82fr_1.18fr] lg:p-12">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.18em] text-emerald-300">{project.number}</span>
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-emerald-300/25 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">{project.category}</p>
                  <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">{project.title}</h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/48">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex h-11 items-center rounded-full bg-emerald-300 px-5 text-sm font-bold text-black"
                  >
                    View Live Project <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">Challenge</p>
                    <p className="mt-3 text-sm leading-7 text-white/50">{project.challenge}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">Result</p>
                    <p className="mt-3 text-sm leading-7 text-white/50">{project.result}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">Highlights</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.highlights.map((item) => (
                        <div key={item} className="rounded-xl border border-white/10 px-4 py-3 text-xs font-medium text-white/55">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <section className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/45">
            Share the idea, reference, or problem. You do not need to prepare a technical document first.
          </p>
          <Link href="/contact" className="mt-7 inline-flex h-11 items-center rounded-full bg-emerald-300 px-5 text-sm font-bold text-black">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}
