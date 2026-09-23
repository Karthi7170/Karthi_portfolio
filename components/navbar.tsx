"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["SERVICE", "#services"],
  ["PROJECT", "#work"],
  ["CONTACT", "#contact"],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    handler()
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header className={scrolled ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl" : "fixed inset-x-0 top-0 z-50 bg-transparent"}>
      <div className="mx-auto flex h-[76px] w-[min(1380px,calc(100%-48px))] max-w-[calc(100%-32px)] items-center justify-between">
        <Link href="#home" className="text-[11px] font-black uppercase tracking-[0.08em] text-white">
          Karthikeyan K
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => (
            <Link key={label} href={href} className="text-[9px] font-bold tracking-[0.08em] text-white/55 transition-colors hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center border border-white/15 md:hidden" aria-label="Toggle navigation">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
          {navItems.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-xs font-black tracking-[0.1em] text-white/65">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
