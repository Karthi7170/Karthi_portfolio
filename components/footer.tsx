import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div className="max-w-lg">
            <div className="text-lg font-black tracking-[-0.03em]">
              Karthikeyan <span className="text-emerald-300">K.</span>
            </div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">Vibe Coder · Developer · AI Builder</div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
              I build clear, modern digital products across web development, app experiences, AI integrations, and automation.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Navigate</p>
            <div className="mt-4 grid gap-3 text-sm text-white/55">
              <Link href="/#about" className="hover:text-white">About Me</Link>
              <Link href="/#services" className="hover:text-white">Services</Link>
              <Link href="/#portfolio" className="hover:text-white">Portfolio</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Connect</p>
            <div className="mt-4 flex gap-3">
              <a href="https://github.com/Karthi7170" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-button">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/karthikeyan-k-950311208" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-button">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:karthifreelancer7170@gmail.com" aria-label="Email" className="social-button">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Karthikeyan K. All rights reserved.</p>
          <p>Built with AI-assisted development and product thinking.</p>
        </div>
      </div>
    </footer>
  )
}
