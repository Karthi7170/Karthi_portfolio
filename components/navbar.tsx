"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-white/10 bg-black/85 backdrop-blur-xl" : "border-transparent bg-[#050505]/80 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
        <Link href="/" className="leading-none">
          <div className="text-sm font-black tracking-[-0.02em] text-white">
            Karthikeyan <span className="text-emerald-300">K.</span>
          </div>
          <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">Vibe Coder</div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-xs font-semibold text-white/55 transition-colors hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full border border-emerald-300/45 px-5 text-xs font-bold text-white transition-colors hover:bg-emerald-300 hover:text-black"
          >
            Start a Project
            <span className="ml-2 grid h-5 w-5 place-items-center rounded-full bg-emerald-300 text-[10px] text-black">↗</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-[1440px] gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/65 hover:bg-white/[0.04] hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-emerald-300 px-4 py-3 text-center text-sm font-bold text-black"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
