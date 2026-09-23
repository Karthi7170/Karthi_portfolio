"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "INTRO", href: "/#about" },
  { name: "SERVICES", href: "/#services" },
  { name: "WORK", href: "/#work" },
  { name: "CONTACT", href: "/#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={scrolled ? "sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl" : "sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl"}>
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#c8ff00] text-xs font-black text-black">KK</span>
          <div>
            <div className="text-xs font-black uppercase tracking-[0.08em]">Karthikeyan K</div>
            <div className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/35">Vibe Coder</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-[10px] font-bold tracking-[0.15em] text-white/45 transition-colors hover:text-[#c8ff00]">
              {item.name}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className="hidden h-10 items-center rounded-full border border-[#c8ff00]/50 px-5 text-[10px] font-black uppercase tracking-[0.12em] transition-colors hover:bg-[#c8ff00] hover:text-black lg:inline-flex">
          Start a project ↗
        </Link>

        <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center border border-white/10 lg:hidden" aria-label="Toggle navigation">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 px-2 py-4 text-xs font-black tracking-[0.14em] text-white/65">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
