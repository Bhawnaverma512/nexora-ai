import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ClipboardCheck,
  Headphones,
  Menu,
  MessageSquareText,
  Network,
  PhoneCall,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import workflowImage from "@/assets/nexora-workflow.jpg";
import { Button } from "@/components/ui/button";
import { submitContactRequest } from "@/lib/contact.functions";

const BOOKING_URL = "https://www.northstarai.online";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Case studies", to: "/case-studies" },
] as const;

const services = [
  { title: "Thinking it through together", text: "Find the right opportunities before choosing the technology.", icon: Sparkles },
  { title: "A friendly voice on the phone", text: "Answer enquiries and help callers find their next step, around the clock.", icon: Headphones },
  { title: "Tools that talk to each other", text: "Connect everyday tools and make repeatable work happen automatically.", icon: Workflow },
  { title: "A helpful chat on your site", text: "Give website visitors useful answers and a clear path to support.", icon: MessageSquareText },
  { title: "Follow-ups that never slip", text: "Follow up with leads and customers at the moments that matter.", icon: AudioLines },
  { title: "Numbers that make sense", text: "Turn the information you already have into clearer decisions.", icon: BarChart3 },
];

const useCases = [
  { title: "Dental clinics", detail: "Handle appointment enquiries and routine calls, even after hours.", icon: PhoneCall },
  { title: "Real estate", detail: "Respond to property questions and sort new enquiries sooner.", icon: Network },
  { title: "Retail teams", detail: "Answer common order questions and keep customers informed.", icon: Bot },
  { title: "Service businesses", detail: "Coordinate bookings, reminders and follow-ups in one flow.", icon: ClipboardCheck },
  { title: "Small agencies", detail: "Streamline lead nurturing and routine client administration.", icon: Workflow },
];

const processSteps = [
  { number: "01", title: "Discover", description: "We learn how your business works and where time goes." },
  { number: "02", title: "Strategize", description: "Together, we shape a practical plan around your priorities." },
  { number: "03", title: "Implement", description: "We build and connect solutions with your existing systems." },
  { number: "04", title: "Optimize", description: "We review what is working and refine the experience." },
];

const faqs = [
  { question: "Is AI right for a small business?", answer: "It can be, when it solves a real, recurring problem. We start with your current processes and recommend practical opportunities rather than technology for its own sake." },
  { question: "Will we need to replace our current tools?", answer: "Not necessarily. Many solutions can connect to tools you already use. We discuss compatibility and any requirements before implementation." },
  { question: "How much does it cost?", answer: "Scope depends on your goals, existing tools and the level of integration. We’ll discuss your needs and provide a tailored quote before work begins." },
  { question: "How do we get started?", answer: "Share a little about your business through the consultation form. We’ll use that to understand what you’re looking to improve." },
];

const pageContent = {
  about: {
    eyebrow: "A practical partner in progress",
    title: "AI should make the workday feel lighter.",
    intro: "Nexora AI helps small businesses bring useful artificial intelligence into the way they already work — with care, clear priorities and a focus on everyday outcomes.",
    sections: [
      { label: "Our point of view", title: "Useful beats complicated.", copy: "The best solution is the one your team can actually use. We take time to understand the bottlenecks, then shape a human-centered approach that fits your tools and goals." },
      { label: "Our expertise", title: "From first idea to connected workflow.", copy: "Our work spans AI consulting for small business, voice reception, chatbot development, workflow automation, marketing automation and business data analysis." },
    ],
  },
  services: {
    eyebrow: "Small business AI services",
    title: "The right tools for the work you do every day.",
    intro: "Start with one frustrating task or connect a larger process. Every engagement is shaped around the needs of your business.",
    sections: [],
  },
  industries: {
    eyebrow: "Solutions for real work",
    title: "Built around the way your business serves people.",
    intro: "From a missed call to a slow follow-up, practical automation can make everyday customer experiences more consistent.",
    sections: [],
  },
  "how-it-works": {
    eyebrow: "A clear path from idea to impact",
    title: "Thoughtful from the first conversation.",
    intro: "You know your business. We help you find where AI and automation can make a meaningful difference — then build a plan with you.",
    sections: [],
  },
  pricing: {
    eyebrow: "Straightforward scope, tailored pricing",
    title: "The right level of support for what comes next.",
    intro: "Every business starts from a different place. Choose a starting point and we’ll shape a scope that fits your goals and systems.",
    sections: [],
  },
  "case-studies": {
    eyebrow: "Real-world possibilities",
    title: "Imagine what a little more time could change.",
    intro: "The scenarios below are illustrative examples of common small-business challenges — not client case studies or verified results.",
    sections: [],
  },
  contact: {
    eyebrow: "Start a conversation",
    title: "Shall we make your week a little lighter?",
    intro: "Let’s discover how AI can simplify your operations, save valuable time and help your business grow.",
    sections: [],
  },
} as const;

type PageKey = keyof typeof pageContent;

type PagePath = "/" | "/about" | "/services" | "/industries" | "/how-it-works" | "/pricing" | "/case-studies" | "/contact" | "/privacy" | "/terms";

function PageLink({ to, children, className = "", onClick }: { to: PagePath; children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <Button asChild variant="ghost" className={className}>
      <Link to={to} onClick={onClick}>{children}</Link>
    </Button>
  );
}

export function Logo() {
  return <span className="inline-flex items-center gap-3">
    <svg width="46" height="50" viewBox="0 0 38 42" fill="none" aria-hidden="true">
      <path d="M3 40V19C3 9.6 10.2 2 19 2s16 7.6 16 17v21H3Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 40V19C3 9.6 10.2 2 19 2s16 7.6 16 17v21" stroke="none" />
      <path d="M11.5 31V15.5c0-.6.7-.9 1.1-.4L25.4 30c.4.5 1.1.2 1.1-.4V15" stroke="var(--cyan)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="9" r="1.6" fill="var(--cyan)" />
    </svg>
    <span className="flex flex-col leading-none">
      <span className="font-display text-[30px] tracking-[-0.03em]">Nexora</span>
      <span className="mt-1.5 font-mono text-[9px] tracking-[0.32em] text-cyan">PRACTICAL · AI</span>
    </span>
  </span>;
}

export function NexoraHeader() {
  const [open, setOpen] = useState(false);
  const mobileNavItems: { label: string; to: PagePath }[] = [...navItems, { label: "Contact", to: "/contact" }];
  return (
    <>
      <div className="border-b border-foreground/15 bg-ink-soft px-5 py-2 text-center font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
        ✦ made for owner-run businesses — free first conversation ✦
      </div>
      <header className="relative z-20 border-b border-foreground/15 bg-background">
        <div className="mx-auto flex min-h-[78px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-10">
          <Link to="/" aria-label="Nexora AI home" className="flex items-center gap-3 text-foreground">
            <Logo />
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => <PageLink key={item.to} to={item.to} className="text-[13px] text-muted-foreground hover:text-foreground">{item.label}</PageLink>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden h-10 rounded-full bg-cyan px-4 text-[13px] font-semibold text-primary-foreground hover:bg-cyan-bright sm:inline-flex">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a consultation <ArrowUpRight size={15} /></a>
            </Button>
            <Button variant="ghost" size="icon" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="xl:hidden">
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && <nav aria-label="Mobile navigation" className="grid gap-1 border-t border-foreground/15 px-5 py-4 xl:hidden">
          {mobileNavItems.map((item) => <PageLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="justify-start text-muted-foreground" >{item.label}</PageLink>)}
        </nav>}
      </header>
    </>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-6 font-mono text-[12px] tracking-[0.04em] text-cyan">( {children} )</p>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mb-10 max-w-2xl"><Eyebrow>{eyebrow}</Eyebrow><h2 className="text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">{title}</h2>{description && <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground">{description}</p>}</div>;
}

function ServiceGrid() {
  return <ol className="relative ml-5 border-l border-cyan/30 md:ml-6">{services.map(({ title, text, icon: Icon }, index) => <li key={title} className="group relative pb-10 pl-10 last:pb-0 md:pl-14">
    <span className="absolute -left-[22px] top-0 flex h-11 w-11 items-center justify-center rounded-full border border-cyan/50 bg-background text-cyan shadow-[0_0_0_6px_var(--background)] transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan group-hover:text-background group-hover:shadow-[0_0_0_6px_var(--background),0_0_28px_var(--cyan)]"><Icon size={19} strokeWidth={1.6} /></span>
    <div className="grid gap-3 rounded-2xl border border-transparent p-4 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-card/50 md:grid-cols-[1.1fr_1fr] md:gap-10 md:p-5">
      <div className="flex items-baseline gap-5"><span aria-hidden className="font-display text-[56px] italic leading-none text-outline transition-colors group-hover:text-cyan sm:text-[72px]">{String(index + 1).padStart(2, "0")}</span><h3 className="text-[26px] leading-[1.1] tracking-tight text-foreground transition-colors group-hover:text-cyan-bright sm:text-[32px]">{title}</h3></div>
      <p className="border-l border-foreground/15 pl-5 font-display text-[18px] italic leading-8 text-muted-foreground md:mt-2">{text}</p>
    </div>
  </li>)}</ol>;
}

function UseCaseGrid() {
  return <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{useCases.map(({ title, detail, icon: Icon }) => <article key={title} className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-cyan/60">
    <Icon size={20} className="mb-4 text-cyan" strokeWidth={1.5} /><h3 className="text-[26px] leading-tight text-foreground">{title}</h3><p className="mt-3 max-w-xs text-[15px] leading-7 text-muted-foreground">{detail}</p>
  </article>)}</div>;
}

function Steps({ numbered = false }: { numbered?: boolean }) {
  return <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">{processSteps.map((step, index) => <li key={step.number} className="relative">
    <p className="font-display text-[88px] italic leading-none text-transparent [-webkit-text-stroke:1px_var(--cyan)]">{step.number}</p>
    <span aria-hidden="true" className="my-5 block h-px w-full border-t border-dashed border-cyan/50" />
    <h3 className="text-[26px] text-foreground">{step.title}</h3><p className="mt-3 max-w-[16rem] text-[15px] leading-7 text-muted-foreground">{step.description}</p><span className="sr-only">Step {index + 1} of 4{numbered ? "" : ""}</span>
  </li>)}</ol>;
}

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setStatus("sending");
    setErrorMessage("");
    try {
      await submitContactRequest({ data: {
        fullName: String(values.get("fullName") ?? ""),
        businessName: String(values.get("businessName") ?? ""),
        email: String(values.get("email") ?? ""),
        phone: String(values.get("phone") ?? ""),
        requirements: String(values.get("requirements") ?? ""),
      } });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Your request couldn't be sent. Please check your details and try again.");
    }
  }

  return <form onSubmit={handleSubmit} className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
    <label className="grid gap-2 text-[13px] text-foreground">Full name<input name="fullName" required minLength={2} maxLength={100} autoComplete="name" placeholder="Your name" className="form-field" /></label>
    <label className="grid gap-2 text-[13px] text-foreground">Business name<input name="businessName" required minLength={2} maxLength={120} autoComplete="organization" placeholder="Your business" className="form-field" /></label>
    <label className="grid gap-2 text-[13px] text-foreground">Email address<input name="email" type="email" required maxLength={255} autoComplete="email" placeholder="you@business.com" className="form-field" /></label>
    <label className="grid gap-2 text-[13px] text-foreground">Phone number <span className="text-muted-foreground">(optional)</span><input name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="Your number" className="form-field" /></label>
    <label className="grid gap-2 text-[13px] text-foreground sm:col-span-2">What would you like to improve?<textarea name="requirements" required minLength={10} maxLength={3000} rows={5} placeholder="Tell us about a task, process or goal on your mind…" className="form-field resize-y" /></label>
    <div className="sm:col-span-2">
      <Button type="submit" disabled={status === "sending"} className="h-12 rounded-full bg-cyan px-5 font-semibold text-primary-foreground hover:bg-cyan-bright">{status === "sending" ? "Sending…" : "Book your free consultation"}<ArrowRight size={16} /></Button>
      <p aria-live="polite" className={`mt-4 text-sm ${status === "success" ? "text-cyan" : "text-muted-foreground"}`}>{status === "success" ? "Thank you — your consultation request has been received." : status === "error" ? errorMessage : "Your details are only used to respond to your request."}</p>
    </div>
  </form>;
}

function FaqList() {
  return <div className="border-t border-foreground/15">{faqs.map((faq) => <details key={faq.question} className="group border-b border-foreground/15 py-5">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15px] font-medium text-foreground">{faq.question}<ChevronDown size={17} className="shrink-0 text-cyan transition-transform group-open:rotate-180" /></summary>
    <p className="max-w-2xl pt-4 pr-6 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
  </details>)}</div>;
}

function HomePage() {
  return <>
    <section className="relative overflow-hidden border-b border-foreground/15">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-14 md:min-h-[610px] md:grid-cols-[1.02fr_0.98fr] md:gap-8 md:px-10 md:pb-20 md:pt-16">
        <div className="relative z-10 max-w-2xl"><Eyebrow>for businesses run by real people</Eyebrow><h1 className="text-balance text-[48px] leading-[1.02] text-foreground sm:text-[72px]">Give your day <em>back</em> to the work you love.</h1><p className="mt-7 max-w-md text-[17px] leading-8 text-muted-foreground">We quietly take over the missed calls, the follow-ups and the copy-paste chores — so your team can get back to the people in front of them.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="h-12 rounded-full bg-cyan px-5 text-primary-foreground hover:bg-cyan-bright"><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a free consultation <ArrowRight size={16} /></a></Button><Button asChild variant="outline" className="h-12 rounded-full border-foreground/30 bg-transparent px-5 text-foreground hover:bg-foreground/5 hover:text-foreground"><Link to="/services">Explore our services</Link></Button></div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground"><span className="flex items-center gap-2"><Check size={14} className="text-cyan" /> Plain language, no jargon</span><span className="flex items-center gap-2"><Check size={14} className="text-cyan" /> Works with the tools you already use</span></div>
        </div>
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.75rem] border border-foreground/20 bg-ink-soft">
          <img src={workflowImage} alt="Connected small-business systems, customer conversations and business insights" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
          
          <div className="absolute bottom-4 left-4 whitespace-nowrap rounded-full border border-foreground/20 bg-background/80 px-4 py-2 backdrop-blur-md"><p className="flex items-center gap-2 text-xs font-medium text-foreground"><span className="size-1.5 rounded-full bg-cyan" /> Your business, in sync</p><p className="mt-1 font-mono text-[11px] text-muted-foreground">people · process · possibility</p></div>
                  </div>
      </div>
    </section>
    <PartnerBand className="pb-6 pt-2"/>
    <section className="overflow-hidden border-b border-foreground/15 py-5" aria-hidden="true"><div className="marquee-track font-display text-4xl italic tracking-tight text-foreground/80 sm:text-5xl">{[0,1].map((k)=><div key={k} className="flex shrink-0 items-center gap-8 pr-8">{["fewer missed calls","faster follow-ups","calmer inboxes","happier customers","more evenings off","less copy-paste"].map((w,i)=><span key={w} className="flex items-center gap-8"><span className={i%2?"text-outline":"text-gold-gradient"}>{w}</span><span className="text-cyan not-italic">✦</span></span>)}</div>)}</div></section>
    <section className="site-section"><div className="mb-10 max-w-3xl"><Eyebrow>What we do</Eyebrow><h2 className="text-balance text-[44px] font-medium leading-[1.05] text-foreground sm:text-[64px]">Fewer chores.<br /><em className="text-gold-gradient pr-2">More of the good stuff.</em></h2><p className="mt-6 max-w-xl text-[16px] leading-8 text-muted-foreground">We pair small-business know-how with thoughtful AI business automation to solve everyday problems — <em className="font-display text-foreground">not create new ones.</em></p></div><ServiceGrid/><div className="mt-7"><Button asChild variant="ghost" className="px-0 text-cyan hover:bg-transparent hover:text-cyan-bright"><Link to="/services">See all services <ArrowRight size={15} /></Link></Button></div></section>
    <section className="border-y border-foreground/15 bg-ink-soft"><div className="site-section"><SectionHeading eyebrow="Built for your world" title="Made for the places people actually walk into." description="From a busy reception desk to a growing pipeline, start where the friction is."/><UseCaseGrid/></div></section>
    <section className="site-section"><SectionHeading eyebrow="A clear way forward" title="It starts with a conversation, not a pitch." description="We work alongside you, from spotting the opportunity through to improving the solution over time."/><Steps/><div className="mt-7"><Button asChild variant="ghost" className="px-0 text-cyan hover:bg-transparent hover:text-cyan-bright"><Link to="/how-it-works">Learn how we work <ArrowRight size={15} /></Link></Button></div></section>
    <section className="border-y border-foreground/15 bg-ink-soft"><div className="site-section"><SectionHeading eyebrow="Start with a conversation" title="Start small. Grow when it feels right." description="Whether you have a clear plan or just a recurring headache, we’ll help you find a sensible place to begin."/><div className="grid gap-10 md:grid-cols-3">{[{ title:"Starter", text:"A focused first step to explore an opportunity." },{ title:"Growth", text:"Connected automation for growing teams." },{ title:"Enterprise", text:"A tailored approach to complex systems." }].map((item) => <article key={item.title} className="border-t border-foreground/30 pt-6"><p className="font-mono text-[12px] text-cyan">Engagement</p><h3 className="mt-5 text-xl font-medium text-foreground">{item.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{item.text}</p><Button asChild variant="ghost" className="mt-5 px-0 text-foreground hover:bg-transparent hover:text-cyan"><Link to="/pricing">Request a quote <ArrowRight size={15} /></Link></Button></article>)}</div></div></section>
    <section className="site-section"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionHeading eyebrow="A note from our clients" title="Words from our clients." description="We’re building our client stories. Testimonials will appear here when they’re available and approved."/><p className="border-l border-cyan py-1 pl-4 text-[13px] text-muted-foreground">Client feedback coming soon — no testimonials have been published yet.</p></div><div><SectionHeading eyebrow="Good questions" title="Things people ask us."/><FaqList/></div></div></section>
    <ContactSection compact />
  </>;
}

function ContactSection({ compact = false }: { compact?: boolean }) {
  return <section className="border-y border-foreground/15 bg-ink-soft" id="consultation"><div className="site-section"><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><div><Eyebrow>{compact ? "Your next step" : "Tell us what is on your mind"}</Eyebrow><h2 className="max-w-lg text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">Shall we make your week a little lighter?</h2><p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">Let’s discover how AI can simplify your operations, save valuable time and help your business grow.</p><p className="mt-8 text-[13px] text-muted-foreground">A thoughtful conversation. No pressure to have it all figured out.</p></div><div><ConsultationForm/></div></div></div></section>;
}

function ServicePage() {
  return <>
    <section className="border-b border-foreground/15"><div className="site-section pb-12 sm:pb-16"><SectionHeading eyebrow="Our services" title="Practical AI services, made to fit your business." description="Choose a starting point, then shape a solution around your processes, people and priorities."/><ServiceGrid/></div></section>
    <ContactSection compact/>
  </>;
}

function IndustryPage() {
  return <><section className="border-b border-foreground/15"><div className="site-section pb-12 sm:pb-16"><SectionHeading eyebrow="Industries we support" title="Useful in the places customers need you most." description="Illustrative examples of ways small business AI services can help across different day-to-day settings."/><UseCaseGrid/></div></section><ContactSection compact/></>;
}

function ProcessPage() {
  return <><section className="border-b border-foreground/15"><div className="site-section pb-12 sm:pb-16"><SectionHeading eyebrow="How we work" title="A clear four-step process. Built around your business." description="You stay close to every decision. We keep the work grounded in your people, systems and goals."/><Steps numbered/><div className="mt-16 grid gap-8 sm:grid-cols-3"><p className="text-sm leading-6 text-muted-foreground"><span className="mb-2 block text-foreground">Start with listening</span>We learn the work before suggesting a tool.</p><p className="text-sm leading-6 text-muted-foreground"><span className="mb-2 block text-foreground">Build for adoption</span>We keep the experience clear for the people using it.</p><p className="text-sm leading-6 text-muted-foreground"><span className="mb-2 block text-foreground">Improve together</span>We make room to adjust as your needs evolve.</p></div></div></section><ContactSection compact/></>;
}

function PricingPage() {
  const plans = [
    { name: "Starter", tagline: "A focused first step", details: ["Identify a practical opportunity", "Plan a focused automation", "Guidance on next steps"] },
    { name: "Growth", tagline: "Connect the important pieces", details: ["Multiple workflows and tools", "Chatbot or marketing automation", "Implementation and refinement"] },
    { name: "Enterprise", tagline: "A custom-fit engagement", details: ["Complex systems and integrations", "Tailored AI implementation plan", "Ongoing optimization options"] },
  ];
  return <><section className="border-b border-foreground/15"><div className="site-section pb-12 sm:pb-16"><SectionHeading eyebrow="Pricing" title="A tailored quote. No made-up price tags." description="Your investment depends on the scope, integrations and support you need. We’ll discuss your goals and provide a clear quote before work begins."/><div className="grid gap-12 md:grid-cols-3">{plans.map((plan) => <article key={plan.name} className="border-t border-foreground/30 pt-6"><p className="font-mono text-[12px] text-cyan">Engagement</p><h3 className="mt-5 text-2xl font-medium text-foreground">{plan.name}</h3><p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p><ul className="mt-8 grid gap-4 border-t border-foreground/15 pt-6">{plan.details.map((detail) => <li key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check size={15} className="mt-1 shrink-0 text-cyan"/>{detail}</li>)}</ul><Button asChild className="mt-8 h-11 w-full rounded-full bg-cyan text-primary-foreground hover:bg-cyan-bright"><Link to="/contact">Request a quote <ArrowRight size={15}/></Link></Button></article>)}</div></div></section><ContactSection compact/></>;
}

function CaseStudiesPage() {
  return <><section className="border-b border-foreground/15"><div className="site-section pb-12 sm:pb-16"><SectionHeading eyebrow="Illustrative scenarios" title="Small changes can reshape the workday." description="These are examples of potential approaches, not confirmed client projects, results or testimonials."/><div className="grid gap-x-16 gap-y-14 md:grid-cols-2">{[
    { type: "Dental practice · Example scenario", title: "More time for patients, fewer interruptions.", body: "An AI voice receptionist could answer routine questions, help with appointment enquiries and route more complex calls to the right person.", icon: Headphones },
    { type: "Real estate · Example scenario", title: "A quicker first response to new enquiries.", body: "An automated lead flow could gather basic property interests and make sure a suitable team member follows up.", icon: Network },
    { type: "Retail shop · Example scenario", title: "Keep customers in the loop.", body: "A connected support workflow could answer common order questions and share relevant updates through existing channels.", icon: MessageSquareText },
    { type: "Service team · Example scenario", title: "A smoother booking journey.", body: "A booking workflow could coordinate enquiry capture, reminders and follow-ups around the team's current process.", icon: Workflow },
  ].map(({type,title,body,icon:Icon})=><article key={type} className="border-t border-foreground/30 pt-6"><Icon className="mb-7 text-cyan" size={21}/><p className="font-mono text-[12px] text-muted-foreground">{type}</p><h3 className="mt-4 max-w-md text-xl font-medium leading-snug text-foreground">{title}</h3><p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{body}</p></article>)}</div></div></section><ContactSection compact/></>;
}

function AboutPage() {
  return <><section className="border-b border-foreground/15"><div className="site-section grid gap-12 pb-12 sm:pb-16 lg:grid-cols-[1fr_0.85fr]"><div><SectionHeading eyebrow="About Nexora AI" title="Make AI work for the people behind your business." description="Nexora AI helps small businesses use artificial intelligence to improve everyday operations — from customer communication to the workflows behind the scenes."/><p className="max-w-xl text-sm leading-7 text-muted-foreground">Our approach focuses on practical implementation, customized strategies and measurable business priorities. Save time, reduce manual effort and create more room to grow — without needing to become an AI expert first.</p></div><div className="relative min-h-[280px] overflow-hidden border border-foreground/15"><img src={workflowImage} alt="Connected business systems and information flows" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-background/35"/><div className="absolute bottom-5 left-5 border border-foreground/20 bg-card/90 px-4 py-3"><span className="text-sm font-medium text-foreground">Technology that feels human.</span></div></div></div></section>
    <section className="border-b border-foreground/15 bg-ink-soft"><div className="site-section"><div className="grid gap-8 sm:grid-cols-2">{pageContent.about.sections.map((item)=><article key={item.label} className="border-l border-cyan pl-6"><Eyebrow>{item.label}</Eyebrow><h2 className="text-2xl font-medium text-foreground">{item.title}</h2><p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{item.copy}</p></article>)}</div></div></section><ContactSection compact/></>;
}

function ContactPage() {
  return <><section className="border-b border-foreground/15"><div className="site-section pb-12 sm:pb-16"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><Eyebrow>{pageContent.contact.eyebrow}</Eyebrow><h1 className="max-w-lg text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">{pageContent.contact.title}</h1><p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">{pageContent.contact.intro}</p><p className="mt-8 max-w-md text-sm leading-7 text-muted-foreground">Tell us what you’re looking to improve. Whether you have a specific project in mind or are exploring the possibilities, we’ll start with your business needs.</p></div><div className="border border-foreground/15 p-5 sm:p-8"><ConsultationForm/></div></div></div></section></>;
}

export function ContentPage({ page }: { page: PageKey }) {
  const content = pageContent[page];
  return <>
    {page !== "contact" && <section className="relative overflow-hidden border-b border-foreground/15"><div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:pb-20 sm:pt-20 lg:px-10"><div className="max-w-4xl"><Eyebrow>{content.eyebrow}</Eyebrow><h1 className="text-balance text-[44px] leading-[1.04] text-foreground sm:text-[64px]">{content.title}</h1><p className="mt-6 max-w-2xl text-[16px] leading-7 text-muted-foreground">{content.intro}</p><Button asChild className="mt-8 h-12 rounded-full bg-cyan px-5 text-primary-foreground hover:bg-cyan-bright"><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a free consultation <ArrowRight size={16}/></a></Button></div></div></section>}
    {page === "about" && <AboutPage/>}
    {page === "services" && <ServicePage/>}
    {page === "industries" && <IndustryPage/>}
    {page === "how-it-works" && <ProcessPage/>}
    {page === "pricing" && <PricingPage/>}
    {page === "case-studies" && <CaseStudiesPage/>}
    {page === "contact" && <ContactPage/>}
    {page === "about" && <section className="border-b border-foreground/15"><div className="site-section"><SectionHeading eyebrow="Where we focus" title="People, processes and progress."/><div className="grid gap-10 md:grid-cols-3">{[{title:"Save time",text:"Let automation take care of repeatable work."},{title:"Reduce costs",text:"Use people and tools more efficiently."},{title:"Grow faster",text:"Make it easier to serve, support and follow up."}].map(x=><article key={x.title} className="border-t border-foreground/30 pt-5"><h3 className="text-lg font-medium text-foreground">{x.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{x.text}</p></article>)}</div></div></section>}
  </>;
}

export function HomeRouteContent() {
  return <HomePage/>;
}

function PartnerBand({ className = "" }: { className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-10 ${className}`}><a href="https://www.northstarai.online" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-start justify-between gap-3 rounded-2xl border border-cyan/30 bg-card/50 px-6 py-5 transition-all hover:border-cyan/70 hover:shadow-[0_12px_40px_-18px_var(--cyan)] sm:flex-row sm:items-center"><span className="font-mono text-[12px] uppercase tracking-[0.25em] text-muted-foreground">In partnership with</span><span className="inline-flex items-center gap-2 font-display text-2xl italic text-foreground transition-colors group-hover:text-cyan">North Star AI <span className="font-sans text-sm not-italic text-muted-foreground">· northstarai.online</span><ArrowUpRight size={18} className="text-cyan"/></span></a></div>;
}

export function NexoraFooter() {
  return <footer className="bg-background">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-10 md:grid-cols-[1.1fr_0.9fr_1fr] md:py-16">
      <div><Link to="/" aria-label="Nexora AI home" className="text-foreground"><Logo /></Link><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Technology that feels human.</p></div>
      <div><p className="mb-4 font-mono text-[12px] text-muted-foreground">Explore</p><div className="grid grid-cols-2 gap-x-5 gap-y-2">{[...navItems,{label:"Contact",to:"/contact"}].map((item)=><Link key={item.to} to={item.to} className="py-1 text-[13px] text-foreground/75 transition-colors hover:text-cyan">{item.label}</Link>)}</div></div>
      <div className="md:text-right"><p className="mb-4 font-mono text-[12px] text-muted-foreground">Let’s talk</p><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-cyan">Book your free consultation <ArrowUpRight size={15}/></a><p className="mt-6 text-[12px] text-muted-foreground">Social profiles coming soon</p></div>
    </div>
    <div className="overflow-hidden px-5 sm:px-10"><p aria-hidden="true" className="wordmark select-none text-center text-[26vw] text-foreground/[0.07]">nexora</p></div>
    <div className="border-t border-foreground/15"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10"><span>© {new Date().getFullYear()} Nexora AI. All rights reserved.</span><div className="flex gap-5"><Link to="/privacy" className="hover:text-foreground">Privacy policy</Link><Link to="/terms" className="hover:text-foreground">Terms</Link></div></div></div>
  </footer>;
}

export function NexoraLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground"><NexoraHeader/><main>{children}</main><NexoraFooter/></div>;
}

export function LegalPage({ page }: { page: "privacy" | "terms" }) {
  const privacy = page === "privacy";
  return <section className="min-h-[65vh] border-b border-foreground/15"><div className="mx-auto max-w-3xl px-5 py-16 sm:py-24"><Eyebrow>{privacy ? "Privacy" : "Terms"}</Eyebrow><h1 className="text-4xl font-medium text-foreground">{privacy ? "Privacy policy" : "Terms of use"}</h1><p className="mt-6 text-sm leading-7 text-muted-foreground">This page is a draft placeholder and is not legal advice. Nexora AI should replace it with its approved {privacy ? "privacy policy" : "terms of use"} before publishing the website to customers.</p><div className="mt-10 border-t border-foreground/15 pt-7"><h2 className="text-lg font-medium text-foreground">Consultation requests</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">Information submitted through the consultation form is stored privately so the Nexora AI team can respond. The business owner should add its approved details about data use, retention and contact rights here.</p></div></div></section>;
}