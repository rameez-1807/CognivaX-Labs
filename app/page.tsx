'use client'
import { useState } from 'react'
import { ArrowUpRight, Bot, BrainCircuit, Check, Cloud, Code2, Database, LockKeyhole, Menu, Network, Sparkles, X, Zap } from 'lucide-react'

const capabilities = [
  { icon: BrainCircuit, title: 'Generative AI', text: 'LLM applications, enterprise knowledge assistants, RAG systems and AI copilots.' },
  { icon: Bot, title: 'AI Agents', text: 'Agentic workflows that reason, retrieve context and execute business actions.' },
  { icon: Zap, title: 'Intelligent Automation', text: 'AI-powered workflows that reduce repetitive work and accelerate operations.' },
  { icon: Code2, title: 'Digital Engineering', text: 'Modern web platforms, APIs, applications and product engineering.' },
  { icon: Database, title: 'Data & Analytics', text: 'Data platforms, analytics and intelligence designed for decisions at scale.' },
  { icon: Cloud, title: 'Cloud & DevOps', text: 'Cloud-native architecture, deployment automation, reliability and scale.' },
]
const builds = [
  ['01','Enterprise AI Knowledge Assistant','Search, understand and answer questions across company documents and knowledge.','RAG • LLM • Vector Search'],
  ['02','Intelligent Document Processing','Extract structured business data from invoices, contracts, reports and forms.','AI • OCR • Workflow Automation'],
  ['03','AI Customer Operations Agent','Connect conversational AI to business rules, knowledge and internal systems.','Agents • APIs • Guardrails'],
]

export default function Home() {
  const [open, setOpen] = useState(false)
  return <main className="noise overflow-hidden">
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070d]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 via-indigo-400 to-violet-500 text-sm font-black text-slate-950">CX</span><span>Cogniva<span className="text-cyan-300">X</span> <span className="text-white/45">Labs</span></span></a>
        <div className="hidden items-center gap-7 text-sm text-white/65 md:flex"><a href="#capabilities" className="hover:text-white">Capabilities</a><a href="#builds" className="hover:text-white">What we build</a><a href="#approach" className="hover:text-white">Approach</a><a href="#contact" className="hover:text-white">Contact</a></div>
        <a href="#contact" className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium hover:bg-white/10 md:block">Start a conversation <ArrowUpRight className="ml-1 inline h-4 w-4" /></a>
        <button onClick={()=>setOpen(!open)} className="rounded-lg border border-white/10 p-2 md:hidden" aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </div>
      {open && <div className="border-t border-white/10 px-6 py-5 md:hidden"><div className="flex flex-col gap-5 text-white/70"><a onClick={()=>setOpen(false)} href="#capabilities">Capabilities</a><a onClick={()=>setOpen(false)} href="#builds">What we build</a><a onClick={()=>setOpen(false)} href="#approach">Approach</a><a onClick={()=>setOpen(false)} href="#contact">Contact</a></div></div>}
    </nav>

    <section id="top" className="grid-bg relative flex min-h-screen items-center pt-24">
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/65"><Sparkles className="h-4 w-4 text-cyan-300"/> AI • TECHNOLOGY • CONSULTING</div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">Engineering <span className="gradient-text">intelligence</span> for the modern enterprise.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">CognivaX Labs turns emerging technology into production-ready AI systems, intelligent automation and scalable digital solutions.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#capabilities" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-100">Explore capabilities <ArrowUpRight className="ml-1 inline h-4 w-4"/></a><a href="#builds" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10">See what we build</a></div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[.18em] text-white/35"><span>AI Engineering</span><span>Automation</span><span>Cloud</span><span>Data</span><span>Security</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-violet-500/10 blur-2xl"/>
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[.035] p-5 shadow-glow backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-white/40"><span>COGNIVAX / INTELLIGENCE ENGINE</span><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-emerald-400"/>ONLINE</span></div>
            <div className="grid gap-3 py-6 sm:grid-cols-2">
              {[['01','Understand','Documents • Data • Context'],['02','Reason','Models • Rules • Memory'],['03','Act','Tools • APIs • Workflows'],['04','Measure','Evaluation • Security • Cost']].map(([n,t,s])=><div key={n} className="rounded-2xl border border-white/10 bg-black/20 p-5"><span className="text-xs text-cyan-300/70">{n}</span><h3 className="mt-5 text-lg font-medium">{t}</h3><p className="mt-2 text-sm leading-6 text-white/40">{s}</p></div>)}
            </div>
            <div className="rounded-2xl border border-indigo-300/10 bg-indigo-400/[.06] p-5"><div className="mb-3 flex items-center gap-2 text-sm"><Network className="h-4 w-4 text-cyan-300"/> Business workflow</div><div className="flex items-center gap-2 text-xs text-white/45"><span className="rounded-lg bg-white/5 px-3 py-2">User</span><span>→</span><span className="rounded-lg bg-white/5 px-3 py-2">AI Agent</span><span>→</span><span className="rounded-lg bg-white/5 px-3 py-2">Tools</span><span>→</span><span className="rounded-lg bg-white/5 px-3 py-2">Outcome</span></div></div>
          </div>
        </div>
      </div>
    </section>

    <section id="capabilities" className="mx-auto max-w-7xl px-6 py-28"><div className="max-w-2xl"><p className="text-sm font-medium uppercase tracking-[.2em] text-cyan-300">Capabilities</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Technology built around business outcomes.</h2><p className="mt-5 leading-7 text-white/50">From strategy and prototypes to production systems, we bring AI and engineering together.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({icon:Icon,title,text})=><article key={title} className="group rounded-3xl border border-white/10 bg-white/[.025] p-7 transition hover:-translate-y-1 hover:bg-white/[.045]"><div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5"><Icon className="h-5 w-5 text-cyan-300"/></div><h3 className="mt-6 text-xl font-medium">{title}</h3><p className="mt-3 text-sm leading-7 text-white/45">{text}</p><div className="mt-6 text-xs font-medium text-white/30 group-hover:text-white/60">EXPLORE →</div></article>)}</div></section>

    <section id="builds" className="border-y border-white/10 bg-white/[.018]"><div className="mx-auto max-w-7xl px-6 py-28"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-medium uppercase tracking-[.2em] text-cyan-300">CognivaX Builds</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Proof through engineering.</h2></div><p className="max-w-md text-sm leading-7 text-white/45">Use these as portfolio prototypes, then replace them with your real client work and measurable outcomes.</p></div><div className="mt-12 grid gap-4">{builds.map(([n,t,d,stack])=><article key={n} className="grid gap-6 rounded-3xl border border-white/10 bg-[#080b13] p-7 md:grid-cols-[90px_1fr_auto] md:items-center"><div className="text-4xl font-semibold text-white/15">{n}</div><div><h3 className="text-xl font-medium">{t}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-white/45">{d}</p><p className="mt-4 text-xs uppercase tracking-[.15em] text-cyan-300/70">{stack}</p></div><ArrowUpRight className="hidden h-5 w-5 text-white/30 md:block"/></article>)}</div></div></section>

    <section id="approach" className="mx-auto max-w-7xl px-6 py-28"><div className="grid gap-14 lg:grid-cols-2"><div><p className="text-sm font-medium uppercase tracking-[.2em] text-cyan-300">Our approach</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">From AI idea to production system.</h2><p className="mt-6 max-w-xl leading-8 text-white/50">We focus on practical implementation: clear business problems, rapid validation, robust engineering and measurable outcomes.</p></div><div className="grid gap-3">{[['01','Discover','Map the business problem, data and opportunity.'],['02','Prototype','Build a focused proof of concept and validate value.'],['03','Engineer','Harden architecture, security, reliability and UX.'],['04','Scale','Deploy, monitor, optimize and continuously improve.']].map(([n,t,d])=><div key={n} className="flex gap-5 rounded-2xl border border-white/10 p-5"><span className="text-sm text-cyan-300/60">{n}</span><div><h3 className="font-medium">{t}</h3><p className="mt-1 text-sm leading-6 text-white/40">{d}</p></div></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-6 pb-28"><div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[.03] to-cyan-400/10 p-8 sm:p-12"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm uppercase tracking-[.2em] text-cyan-300">Built for the next wave</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Don't stop at an AI demo. Build the system around it.</h2><p className="mt-4 max-w-2xl leading-7 text-white/45">Security, data, integrations, evaluation and operations matter just as much as the model.</p></div><div className="grid gap-2 text-sm text-white/55"><span><Check className="mr-2 inline h-4 w-4 text-cyan-300"/>Production-minded</span><span><Check className="mr-2 inline h-4 w-4 text-cyan-300"/>Enterprise-ready</span><span><Check className="mr-2 inline h-4 w-4 text-cyan-300"/>Outcome-focused</span></div></div></div></section>

    <section id="contact" className="border-t border-white/10"><div className="mx-auto max-w-7xl px-6 py-28"><div className="max-w-3xl"><p className="text-sm font-medium uppercase tracking-[.2em] text-cyan-300">Start a conversation</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Have an AI or technology challenge?</h2><p className="mt-6 text-lg leading-8 text-white/45">Tell us what you're trying to build. We'll help turn the idea into a practical roadmap.</p><a href="mailto:hello@cognivaxlabs.com" className="mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950">hello@cognivaxlabs.com <ArrowUpRight className="ml-2 h-4 w-4"/></a></div></div></section>

    <footer className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between"><div>© 2026 CognivaX Labs. All rights reserved.</div><div className="flex gap-5"><a href="#top" className="hover:text-white">Back to top ↑</a><a href="#contact" className="hover:text-white">Contact</a></div></div></footer>
  </main>
}
