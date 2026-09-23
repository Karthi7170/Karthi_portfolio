"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#work"],
  ["Contact", "#contact"],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={scrolled ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl" : "fixed inset-x-0 top-0 z-50 bg-transparent"}>
      <div className="mx-auto flex h-[76px] w-[min(1360px,calc(100%-64px))] max-w-[calc(100%-32px)] items-center justify-between">
        <Link href="#home" className="leading-none">
          <div className="text-[18px] font-black tracking-[-0.04em] text-white">Karthikeyan <span className="text-[#c8ff18]">K.</span></div>
          <div className="mt-2 text-[8px] font-semibold tracking-[0.42em] text-white/45">VIBE CODER</div>
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {links.map(([label, href], index) => (
            <Link key={label} href={href} className="relative text-[12px] font-medium text-white/55 transition-colors hover:text-white">
              {label}
              {index === 0 && <span className="absolute left-1/2 top-7 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#c8ff18] shadow-[0_0_12px_rgba(200,255,24,.75)]" />}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="hidden h-[42px] items-center gap-5 rounded-full border border-[#c8ff18]/70 px-6 text-[11px] font-semibold text-white lg:inline-flex">
          Let&apos;s Talk
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#c8ff18] text-black"><ArrowRight className="h-4 w-4" /></span>
        </Link>

        <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center border border-white/15 lg:hidden" aria-label="Toggle navigation">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-xs font-bold text-white/70">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
