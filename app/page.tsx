import Link from "next/link"
import { ArrowRight, Github, Instagram, Linkedin, Mail, MonitorSmartphone, Smartphone, Sparkles, WandSparkles } from "lucide-react"

const services = [
  { icon: MonitorSmartphone, title: "Web Development", text: "Modern, responsive, high-performance websites" },
  { icon: Smartphone, title: "App Development", text: "Cross-platform applications" },
  { icon: Sparkles, title: "AI Solutions", text: "Integrations, automations and smart tools" },
  { icon: WandSparkles, title: "UI/UX Design", text: "Clean and user-friendly experiences" },
]

const works = [
  { title: "New Royal Tiles", subtitle: "Showroom Website", tag: "Web", href: "https://royaltiles.vercel.app", cls: "royal" },
  { title: "Sugumar", subtitle: "Portfolio Website", tag: "Web", href: "https://sugumar-portfolio-beta.vercel.app", cls: "sugumar" },
  { title: "VIP-Hunter", subtitle: "AI Job Platform", tag: "AI", href: "https://vip-hunter.vercel.app", cls: "hunter" },
]

export default function Home() {
  return (
    <div className="shot-page">
      <section className="shot-hero" id="home">
        <div className="shot-hero-glow" />
        <div className="shot-hero-inner">
          <div className="shot-left">
            <div className="shot-kicker"><span /> VIBE CODER</div>

            <h1 className="shot-title">
              <span>PORT</span>
              <span>FOLIO<i /></span>
            </h1>

            <div className="shot-flow">
              <span>Ideas</span><b>→</b><span>Design</span><b>→</b><span>Develop</span><b>→</b><span>Real Products</span>
            </div>

            <div className="shot-actions">
              <Link href="#work" className="shot-primary">View My Work <ArrowRight /></Link>
              <Link href="#contact" className="shot-secondary">Let&apos;s Talk</Link>
            </div>
          </div>

          <div className="shot-center">
            <div className="shot-person">
              <img src="/karthikeyan-night.webp" alt="Karthikeyan K" />
            </div>

            <div className="shot-signature">
              <strong>Karthikeyan K.</strong>
              <span>DEVELOPER</span>
              <span>CREATIVE THINKER</span>
              <span>PROBLEM SOLVER</span>
            </div>
          </div>

          <aside className="shot-right">
            <div className="shot-side-line"><i /></div>
            <div className="shot-based">
              <span>BASED IN</span>
              <strong>CHENNAI, INDIA</strong>
            </div>

            <h2>
              I BUILD<br />
              MODERN<br />
              <em>WEBSITES,</em><br />
              <em>APPS & AI</em><br />
              SOLUTIONS.
            </h2>

            <p>Turning ideas into powerful digital experiences with clean design and real functionality.</p>

            <div className="shot-scroll">
              <span>SCROLL DOWN</span>
              <b />
              <i />
            </div>
          </aside>

          <div className="shot-stats">
            <div><strong>3+</strong><span>Projects Completed</span></div>
            <div><strong>Happy</strong><span>Clients</span></div>
            <div><strong>Web / App / AI</strong><span>Focus Areas</span></div>
            <div><strong>Always</strong><span>Learning</span></div>
          </div>
        </div>
      </section>

      <section className="shot-dashboard" id="about">
        <div className="shot-dashboard-inner">
          <div className="shot-about">
            <div className="shot-section-label"><i /> ABOUT ME</div>
            <h3>More than<br />just a <em>developer.</em></h3>
            <p>
              I&apos;m Karthikeyan K, a Vibe Coder who loves building modern digital products.
              I turn ideas into real-world websites, applications and AI-powered solutions with
              a focus on clean design, performance and user experience.
            </p>
            <Link href="#contact" className="shot-know">Know More <ArrowRight /></Link>
          </div>

          <div className="shot-about-photo">
            <div className="shot-photo-card">
              <img src="/karthikeyan-editorial.webp" alt="Karthikeyan K portrait" />
            </div>
            <div className="shot-script">Build.<br />Create.<br />Grow.</div>
            <div className="shot-circle-copy">KARTHIKEYAN K • VIBE CODER • DEVELOPER •</div>
          </div>

          <div className="shot-services" id="services">
            <div className="shot-section-label"><i /> MY SERVICES</div>
            <div className="shot-service-stack">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div className="shot-service-row" key={service.title}>
                    <div className="shot-service-icon"><Icon /></div>
                    <div><strong>{service.title}</strong><span>{service.text}</span></div>
                    <ArrowRight className="shot-row-arrow" />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="shot-work" id="work">
            <div className="shot-section-label"><i /> SELECTED WORK</div>
            <div className="shot-work-track">
              {works.map((work) => (
                <a key={work.title} href={work.href} target="_blank" rel="noreferrer" className={"shot-work-card " + work.cls}>
                  <span className="shot-card-tag">{work.tag}</span>
                  <div className="shot-card-fill" />
                  <div className="shot-card-copy">
                    <strong>{work.title}</strong>
                    <span>{work.subtitle}</span>
                  </div>
                  <div className="shot-card-go">↗</div>
                </a>
              ))}
            </div>
            <Link href="/projects" className="shot-view-all">View All Projects <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <footer className="shot-footer" id="contact">
        <div className="shot-footer-inner">
          <div className="shot-brand">Karthikeyan K<span>.</span></div>
          <div className="shot-footer-copy">LET&apos;S BUILD SOMETHING AMAZING TOGETHER.</div>
          <div className="shot-socials">
            <a href="https://github.com/Karthi7170" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/karthikeyan-k-950311208" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="mailto:karthifreelancer7170@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
