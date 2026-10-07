import ContactForm from "./components/ContactForm";

const services = [
  {
    code: "SVC.01",
    title: "Website Development",
    desc: "Custom, high-performance websites engineered for speed, scalability, and conversion — from corporate sites to complex web platforms.",
  },
  {
    code: "SVC.02",
    title: "Web Applications",
    desc: "Robust, scalable web applications built with modern frameworks, tailored to streamline your operations and enhance user engagement.",
  },
  {
    code: "SVC.03",
    title: "SaaS Platforms",
    desc: "End-to-end SaaS product development — architecture, multi-tenancy, subscription billing, and infrastructure designed to scale.",
  },
  {
    code: "SVC.04",
    title: "Mobile Applications",
    desc: "Native and cross-platform iOS & Android apps crafted for performance, seamless UX, and long-term maintainability.",
  },
  {
    code: "SVC.05",
    title: "Desktop Applications",
    desc: "Powerful, secure desktop software for Windows, macOS, and Linux — optimized for enterprise and operational efficiency.",
  },
  {
    code: "SVC.06",
    title: "CRM & ERP Systems",
    desc: "Tailored CRM and ERP solutions that unify operations, automate workflows, and give real-time visibility across the business.",
  },
  {
    code: "SVC.07",
    title: "AI Automation",
    desc: "Intelligent automation powered by AI/ML — from workflow automation to custom AI agents that cut manual work and boost output.",
  },
  {
    code: "SVC.08",
    title: "API Development & Integration",
    desc: "Secure, well-documented APIs and third-party integrations that connect systems and enable seamless data flow.",
  },
  {
    code: "SVC.09",
    title: "Cloud Solutions",
    desc: "Cloud architecture, migration, and DevOps on AWS, Azure, and GCP — built for reliability, security, and cost efficiency.",
  },
  {
    code: "SVC.10",
    title: "UI/UX Design",
    desc: "Research-driven design that balances aesthetics with usability, creating intuitive experiences your users will love.",
  },
  {
    code: "SVC.11",
    title: "Software Consulting",
    desc: "Strategic technology consulting to get architecture, platform, and roadmap decisions right before a single line is written.",
  },
];

const process = [
  { n: "01", title: "Discover", desc: "We map your goals, users, and constraints into a scoped technical plan." },
  { n: "02", title: "Design", desc: "Wireframes and UI systems validated with you before any code is written." },
  { n: "03", title: "Build", desc: "Iterative development in weekly sprints, with staging environments you can test." },
  { n: "04", title: "Ship & Support", desc: "Production deployment, monitoring, and an ongoing support arrangement." },
];

const stack = [
  "React / Next.js", "Node.js", "TypeScript", "Python", "Swift / Kotlin",
  "Flutter", "PostgreSQL", "AWS / GCP / Azure", "Docker / Kubernetes",
  "Salesforce / HubSpot", "OpenAI / Anthropic APIs", "Stripe",
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-ink/80 border-b border-line">
        <nav className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
          <div className="font-display font-bold text-[19px] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-signal shadow-[0_0_0_4px_var(--signal-dim)]" />
            Forge&nbsp;&amp;&nbsp;Loop
          </div>
          <div className="hidden md:flex gap-9 font-mono text-[12.5px] uppercase tracking-wider text-fg-dim">
            <a href="#services" className="hover:text-fg transition-colors">Services</a>
            <a href="#process" className="hover:text-fg transition-colors">Process</a>
            <a href="#stack" className="hover:text-fg transition-colors">Stack</a>
            <a href="#contact" className="hover:text-fg transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="font-mono text-[12.5px] px-4 py-2.5 border border-line-strong rounded-md hover:border-signal hover:bg-signal-dim transition-colors whitespace-nowrap"
          >
            Start a project →
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="border-b border-line py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-widest text-wire mb-6">
              <span className="w-[22px] h-px bg-wire" />
              Software Engineering Studio
            </div>
            <h1 className="font-display font-bold text-[clamp(38px,5vw,62px)] leading-[1.04] tracking-tight mb-6">
              We build the software your <span className="text-signal">roadmap</span> is waiting on.
            </h1>
            <p className="text-[17px] text-fg-dim max-w-[520px] mb-9">
              Forge & Loop is a full-stack engineering studio — websites, applications, and platforms designed, built, and shipped by senior engineers, not templates.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="#contact"
                className="font-mono text-[13px] tracking-wide bg-signal text-[#14110A] font-medium rounded-md px-6 py-3.5 inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform hover:shadow-[0_8px_24px_rgba(242,183,5,0.22)]"
              >
                Book a discovery call →
              </a>
              <a
                href="#services"
                className="font-mono text-[13px] tracking-wide rounded-md px-5.5 py-3.5 border border-line-strong hover:border-fg-dim transition-colors"
              >
                View services
              </a>
            </div>
          </div>

          <div className="rounded-[10px] border border-line bg-ink-raised overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
              <span className="w-2.5 h-2.5 rounded-full bg-fg-faint/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-fg-faint/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-fg-faint/50" />
              <span className="font-mono text-[11.5px] text-fg-faint ml-2 tracking-wide">forge-loop — build</span>
            </div>
            <div className="px-5.5 py-6 font-mono text-[13.5px] leading-[1.9] text-fg-dim min-h-[230px]">
              <div><span className="text-wire">$</span> forge scope --client=you</div>
              <div className="text-fg">→ product: web / mobile / SaaS</div>
              <div className="text-fg">→ stack: resolved</div>
              <div className="text-fg">→ team: senior engineers assigned</div>
              <div><span className="text-wire">$</span> forge deploy --target=production</div>
              <div className="text-fg">✓ shipped<span className="inline-block w-[7px] h-3.5 bg-signal ml-0.5 cursor-blink align-middle" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="border-b border-line py-5">
        <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-between gap-4 font-mono text-xs uppercase tracking-wider text-fg-faint">
          <span>Web & Mobile Engineering</span>
          <span>SaaS & Platform Builds</span>
          <span>AI Automation</span>
          <span>Cloud & DevOps</span>
          <span>Concept to production</span>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 border-b border-line">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-end gap-6 flex-wrap mb-13">
            <div>
              <span className="block font-mono text-[12.5px] uppercase tracking-widest text-wire mb-3.5">
                What we build
              </span>
              <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-tight max-w-xl">
                Eleven disciplines, one accountable team.
              </h2>
            </div>
            <p className="text-fg-dim max-w-[360px] text-[15px]">
              Every engagement is staffed end-to-end — no handoffs between a design shop and a dev shop and a hosting vendor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
            {services.map((s) => (
              <div key={s.code} className="group bg-ink hover:bg-ink-raised transition-colors px-7 py-8 relative">
                <span className="absolute top-7.5 right-7 w-[7px] h-[7px] rounded-full bg-line-strong group-hover:bg-wire group-hover:shadow-[0_0_0_4px_rgba(63,217,199,0.14)] transition-all" />
                <span className="block font-mono text-xs text-fg-faint tracking-wide mb-5">{s.code}</span>
                <h3 className="font-display font-semibold text-[19px] mb-2.5 tracking-tight">{s.title}</h3>
                <p className="text-fg-dim text-[14.5px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 border-b border-line">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-end gap-6 flex-wrap mb-13">
            <div>
              <span className="block font-mono text-[12.5px] uppercase tracking-widest text-wire mb-3.5">
                How we work
              </span>
              <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-tight max-w-xl">
                A build process with no black boxes.
              </h2>
            </div>
            <p className="text-fg-dim max-w-[360px] text-[15px]">
              Fixed checkpoints, visible progress, and a single point of contact throughout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {process.map((s) => (
              <div key={s.n} className="pt-5 border-t border-line-strong">
                <span className="block font-mono text-xs text-signal mb-3.5">{s.n}</span>
                <h4 className="font-display font-semibold text-[17px] mb-2">{s.title}</h4>
                <p className="text-fg-dim text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-24 border-b border-line">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-end gap-6 flex-wrap mb-13">
            <div>
              <span className="block font-mono text-[12.5px] uppercase tracking-widest text-wire mb-3.5">
                Tooling
              </span>
              <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-tight max-w-xl">
                Modern, boring-on-purpose infrastructure.
              </h2>
            </div>
            <p className="text-fg-dim max-w-[360px] text-[15px]">
              We choose proven technology so your platform is maintainable by any competent team, not just us.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <span key={s} className="font-mono text-[12.5px] px-3.5 py-2.5 border border-line-strong rounded-full text-fg-dim">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28">
        <div className="max-w-6xl mx-auto px-8">
          <div className="rounded-2xl border border-line-strong px-8 sm:px-14 py-16 text-center bg-[radial-gradient(ellipse_at_top,rgba(242,183,5,0.06),transparent_60%)]">
            <span className="flex justify-center font-mono text-[12.5px] uppercase tracking-widest text-wire mb-4">
              Get started
            </span>
            <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-tight mb-4">
              Tell us what you&apos;re building.
            </h2>
            <p className="text-fg-dim max-w-[480px] mx-auto mb-10">
              Prepare a brief to share with us for a scoped plan, timeline, and estimate.
            </p>
            <div className="max-w-[480px] mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center flex-wrap gap-4">
          <div className="font-display font-bold text-base flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-signal" />
            Forge&nbsp;&amp;&nbsp;Loop
          </div>
          <div className="flex gap-7 font-mono text-xs uppercase tracking-wider text-fg-faint">
            <a href="#services" className="hover:text-fg transition-colors">Services</a>
            <a href="#process" className="hover:text-fg transition-colors">Process</a>
            <a href="#contact" className="hover:text-fg transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
