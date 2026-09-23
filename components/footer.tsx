import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-black uppercase tracking-[-0.04em]">Karthikeyan K<span className="text-[#c8ff00]">.</span></p>
            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">Web · Apps · AI · Digital Products</p>
          </div>

          <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
            <a href="https://github.com/Karthi7170" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#c8ff00]"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/karthikeyan-k-950311208" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#c8ff00]"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="mailto:karthifreelancer7170@gmail.com" className="flex items-center gap-2 hover:text-[#c8ff00]"><Mail className="h-4 w-4" /> Email</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Karthikeyan K</span>
          <span>Designed & built with AI-assisted development</span>
        </div>
      </div>
    </footer>
  )
}
