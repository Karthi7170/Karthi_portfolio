import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react"

const services = [
  { no: "01", title: "AI FULL STACK DEVELOPMENT", bullets: ["Next.js", "React", "Node.js", "REST APIs", "Databases"], text: "End-to-end web products with AI-assisted development, scalable architecture, responsive interfaces, APIs and deployment." },
  { no: "02", title: "FRONTEND DEVELOPMENT", bullets: ["React", "Next.js", "Tailwind CSS", "UI Systems", "Responsive Design"], text: "Modern, accessible interfaces with strong visual hierarchy, smooth interactions, performance and mobile responsiveness." },
  { no: "03", title: "BACKEND & API DEVELOPMENT", bullets: ["Node.js", "APIs", "SQL", "Auth", "Integrations"], text: "Practical backend systems and integrations for data, authentication, business workflows and connected applications." },
  { no: "04", title: "AI & AUTOMATION", bullets: ["OpenAI", "AI Agents", "Prompt Engineering", "Automation", "Workflow Tools"], text: "AI integrations and automations that reduce repetitive work, improve workflows and add intelligent product capabilities." },
  { no: "05", title: "MOBILE DEVELOPMENT", bullets: ["Mobile UI", "PWA", "Responsive Apps", "Product UX", "Prototyping"], text: "Mobile-first product experiences, web apps and prototypes designed around simple flows and clear user actions." },
  { no: "06", title: "DEVOPS & TOOLS", bullets: ["Git & GitHub", "Vercel", "CI/CD", "VS Code", "Deployment"], text: "Reliable development workflows with source control, deployment, testing and modern AI-assisted developer tools." },
]

const projects = [
  { no: "01", title: "NEW ROYAL TILES", kind: "BUSINESS WEBSITE", tone: "tiles", href: "/projects" },
  { no: "02", title: "SUGUMAR PORTFOLIO", kind: "CREATIVE PORTFOLIO", tone: "film", href: "/projects" },
  { no: "03", title: "VIP-HUNTER", kind: "JOB AUTOMATION", tone: "jobs", href: "/projects" },
  { no: "04", title: "KARTHI PORTFOLIO", kind: "PERSONAL WEBSITE", tone: "portfolio", href: "/projects" },
]

export default function Home() {
  return (
    <div className="ref-site bg-black text-white">
      <section className="ref-hero" id="home">
        <div className="ref-shell">
          <div className="ref-hero-stage">
            <div className="ref-portfolio-word" aria-hidden="true">PORTFOLIO</div>
            <div className="ref-hero-person"><img src="/karthikeyan-night.webp" alt="Karthikeyan K" /></div>
            <div className="ref-role"><strong>Vibe Coder</strong><span>Developer</span></div>
            <Link href="#contact" className="ref-contact-pill">Contact</Link>
            <div className="ref-scroll-dot"><span>SCROLL</span><i /></div>
          </div>
        </div>
      </section>

      <section className="ref-intro" id="about">
        <div className="ref-shell">
          <div className="ref-intro-grid">
            <div className="ref-intro-photo"><img src="/karthikeyan-editorial.webp" alt="Karthikeyan K" /></div>
            <div className="ref-intro-copy">
              <h2 className="ref-metal-title">Intro</h2>
              <div className="ref-copy-card">
                <p>Hey, I&apos;m <strong>Karthikeyan K.</strong> I&apos;m a vibe coder and developer who loves turning ideas into modern websites, app experiences and useful AI-powered products. I combine rapid AI-assisted development with practical product thinking, clean interfaces and real deployment.</p>
                <p className="mt-4">I work across web development, app experiences, AI integrations, automation, testing and deployment.</p>
              </div>
            </div>
          </div>
          <div className="ref-tech-marquee">
            {["JavaScript","TypeScript","Tailwind CSS","React.js","Next.js","Node.js","REST APIs","SQL","Git","GitHub","Vercel","AI","Automation","Testing","Figma"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="ref-services" id="services">
        <div className="ref-shell">
          <div className="ref-services-head"><h2 className="ref-metal-title ref-what-title">WHAT WE<br/>CAN DO</h2></div>
          <div className="ref-service-list">
            {services.map((service) => (
              <details key={service.no} className="ref-service-row">
                <summary>
                  <span className="ref-service-no">{service.no}</span>
                  <span className="ref-service-title">{service.title}</span>
                  <ArrowDownRight className="ref-service-arrow" />
                </summary>
                <div className="ref-service-open">
                  <div className="ref-service-bullets">{service.bullets.map((bullet) => <span key={bullet}>▪ {bullet}</span>)}</div>
                  <p>{service.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-work" id="work">
        <div className="ref-shell">
          <div className="ref-work-head">
            <h2><span className="ref-metal-inline">SELECTED</span> <em>work</em></h2>
            <p>Selected real-time builds across business websites, creative portfolios, automation and digital products.</p>
          </div>
          <div className="ref-projects">
            {projects.map((project, index) => (
              <article key={project.no} className={"ref-project " + (index % 2 ? "is-reverse" : "")}>
                <div className={"ref-project-visual " + project.tone}>
                  <span>{project.kind}</span><strong>{project.title}</strong>
                </div>
                <div className="ref-project-copy">
                  <span className="ref-project-no">{project.no}</span>
                  <h3>{project.title}</h3>
                  <p>A polished digital experience focused on simple navigation, clear communication, responsive behavior and a premium visual finish.</p>
                  <div className="ref-project-actions">
                    <Link href={project.href} className="ref-live-btn">Live Demo <ArrowUpRight className="h-3 w-3" /></Link>
                    <a href="https://github.com/Karthi7170" target="_blank" rel="noreferrer" className="ref-github-btn">GitHub <Github className="h-3 w-3" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-contact" id="contact">
        <div className="ref-shell">
          <div className="ref-contact-grid">
            <div className="ref-contact-details">
              <span className="ref-small-label">GET IN TOUCH</span>
              <a className="ref-big-email" href="mailto:karthifreelancer7170@gmail.com">karthifreelancer7170@gmail.com</a>
              <p>Available for freelance projects, collaborations and modern digital product builds.</p>
              <div className="ref-socials">
                <a href="https://github.com/Karthi7170" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href="https://www.linkedin.com/in/karthikeyan-k-950311208" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
                <a href="mailto:karthifreelancer7170@gmail.com" aria-label="Email"><Mail /></a>
              </div>
            </div>
            <form className="ref-contact-form" action="mailto:karthifreelancer7170@gmail.com" method="post" encType="text/plain">
              <input name="name" placeholder="Your name" />
              <input name="email" type="email" placeholder="Your email" />
              <textarea name="message" rows={5} placeholder="Write something..." />
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="ref-footer-row">
            <div><span>Connect with me</span><a href="mailto:karthifreelancer7170@gmail.com">karthifreelancer7170@gmail.com</a></div>
            <div className="ref-footer-cta"><strong>Let&apos;s build something</strong><p>Open for freelance opportunities and collaborations.</p><a href="mailto:karthifreelancer7170@gmail.com">Get in touch</a></div>
          </div>
          <div className="ref-footer-links"><Link href="#home">Home</Link><Link href="#about">About</Link><Link href="#services">Services</Link><Link href="#work">Projects</Link></div>
        </div>
      </section>
    </div>
  )
}
