"use client"

import type React from "react"
import { useRef, useState } from "react"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import { ArrowLeft, Mail, Phone, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_rmrfi9p",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_z97wyye",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "5uVDO8f6LjnDh8rmd",
      )

      if (result.status === 200) {
        toast({ title: "Message sent", description: "Thanks. I will get back to you soon." })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Message not sent",
        description: "Please try again or contact me directly by email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-[1240px] px-5 pb-12 pt-20 sm:px-8 lg:pb-16 lg:pt-28">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-white/45 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
        <p className="section-kicker mt-10">Contact</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">
          Tell me what you want to build.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/48">
          A short explanation is enough. Share the idea, the problem, or a reference website — I&apos;ll help make the next step clear.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-5 px-5 pb-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-32">
        <div className="rounded-[1.75rem] border border-white/10 bg-[#090909] p-6 sm:p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs text-white/55">Name</Label>
                <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className="h-12 rounded-xl border-white/10 bg-black text-white placeholder:text-white/25" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs text-white/55">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required className="h-12 rounded-xl border-white/10 bg-black text-white placeholder:text-white/25" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-xs text-white/55">What do you need?</Label>
              <Input id="subject" name="subject" placeholder="Website, app, AI automation, portfolio..." value={formData.subject} onChange={handleChange} required className="h-12 rounded-xl border-white/10 bg-black text-white placeholder:text-white/25" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs text-white/55">Project brief</Label>
              <Textarea id="message" name="message" placeholder="What should it do? Who is it for? Do you already have a design, website, or reference?" rows={8} value={formData.message} onChange={handleChange} required className="rounded-xl border-white/10 bg-black text-white placeholder:text-white/25" />
            </div>

            <button type="submit" disabled={isSubmitting} className="inline-flex h-12 w-full items-center justify-center rounded-full bg-emerald-300 px-6 text-sm font-bold text-black disabled:opacity-50">
              {isSubmitting ? "Sending..." : "Send Project Brief"}
              {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </button>
          </form>
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#090909] p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">Direct contact</p>
            <a href="mailto:karthifreelancer7170@gmail.com" className="mt-7 flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 text-emerald-300" />
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="mt-1 break-all text-sm text-white/40">karthifreelancer7170@gmail.com</div>
              </div>
            </a>
            <a href="tel:+919944754339" className="mt-6 flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 text-emerald-300" />
              <div>
                <div className="text-sm font-semibold">Phone</div>
                <div className="mt-1 text-sm text-white/40">+91 99447 54339</div>
              </div>
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-emerald-300/20 bg-emerald-300/[0.055] p-7">
            <p className="text-sm font-bold">Good information to include</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/45">
              <p>• What you want to build</p>
              <p>• Who will use it</p>
              <p>• Any reference website or screenshot</p>
              <p>• The most important feature for version one</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
