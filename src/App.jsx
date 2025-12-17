import { useState } from "react";
import logo from "./assets/logo.jpeg";


const trackLead = () => {
  if (window.fbq) {
    window.fbq("track", "Lead");
  }
};


export default function App() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <div className="flex items-center gap-10 px-8 py-4 rounded-2xl bg-[#0F1117]/90 border border-white/10 backdrop-blur-xl shadow-2xl">

    {/* Brand */}
<div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Business Junction Logo"
    className="h-8 w-auto object-contain"
  />
  <span className="text-sm font-semibold tracking-wide text-white">
    Business Junction
  </span>
</div>

    {/* Navigation */}
    <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
      <a href="#about" className="hover:text-white transition">About</a>
      <a href="#process" className="hover:text-white transition">Process</a>
      <a href="#testimonials" className="hover:text-white transition">Stories</a>
      <a href="#faq" className="hover:text-white transition">FAQ</a>
    </nav>

    {/* CTA */}
    <a
     href="#lead-form"
     onClick={trackLead}
     className="ml-4 px-5 py-2 rounded-xl text-sm font-medium text-black bg-white hover:bg-white/90 transition"
    >
    Get Started
    </a>


  </div>
</header>

      {/* ================= HERO ================= */}
<section className="relative overflow-hidden pt-32 pb-28 px-6 bg-[#0B0D12] text-white">
  
  {/* mesh background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.10),transparent_40%)]"></div>

  {/* noise overlay */}
  <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      {/* badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-8 text-sm font-medium text-white/80">
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        Trusted by 1,000+ members
      </div>

      {/* headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
        A Smarter Way to
        <br />
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Build Reliable Income
        </span>
      </h1>

      {/* description */}
      <p className="text-lg text-white/70 max-w-xl mb-10">
        Business Junction helps individuals enter ethical income systems with
        clear guidance, real structure, and long-term sustainability.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4">
        <a
        href="#lead-form"
        onClick={trackLead}
        className="px-8 py-4 rounded-xl font-semibold bg-white text-black hover:bg-white/90 transition"
      >
       Get Started
      </a>

        <a
          href="#process"
          className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-white/80 hover:bg-white/10 transition"
        >
          See How It Works
        </a>
      </div>
    </div>

    {/* RIGHT GLASS CARD */}
    <div className="relative">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-2xl"></div>

      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
        <ul className="space-y-6 text-white/80 text-lg">
          <li className="flex items-start gap-4">
            <span className="text-emerald-400 text-xl">✓</span>
            Flexible participation — no rigid schedules
          </li>
          <li className="flex items-start gap-4">
            <span className="text-emerald-400 text-xl">✓</span>
            No prior experience required
          </li>
          <li className="flex items-start gap-4">
            <span className="text-emerald-400 text-xl">✓</span>
            Transparent systems with real mentorship
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>

      {/* ================= STATS ================= */}
<section className="relative py-24 px-6 bg-white overflow-hidden">
  
  {/* Decorative background blur */}
  <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-indigo-200/40 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-14">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Trusted Performance
      </p>
      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Proven Results That Build Confidence
      </h3>
    </div>

    {/* Stats Grid */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
      {[
        { n: "10K+", l: "Leads Guided" },
        { n: "5+", l: "Years Experience" },
        { n: "100%", l: "Transparent Process" },
        { n: "24/7", l: "Dedicated Support" },
      ].map((s, i) => (
        <div
          key={i}
          className="group rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-md p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
        >
          <p className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
            {s.n}
          </p>
          <p className="text-slate-600 font-medium group-hover:text-slate-800 transition">
            {s.l}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative py-28 px-6 bg-slate-50 scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] bg-indigo-300/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* Left Content */}
    <div>
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        About Us
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
        Why Choose{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Business Junction
        </span>
        ?
      </h2>

      <p className="text-slate-600 text-lg mb-10 max-w-xl">
        We believe income opportunities should be simple, ethical, and accessible.
        Our approach is built on guidance, transparency, and long-term value —
        never pressure.
      </p>

      {/* Value Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          "Personal mentoring",
          "Proven income models",
          "Long-term growth mindset",
          "Supportive community",
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-bold">
              ✔
            </span>
            <span className="text-slate-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right Card */}
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/40 to-cyan-400/40 blur-xl"></div>

      <div className="relative bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-xl border border-slate-200/60">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
          Who Can Join?
        </h3>
        <p className="text-slate-700 text-lg leading-relaxed">
          Students, working professionals, homemakers, and retirees —
          anyone motivated to build income ethically with proper guidance
          and a long-term vision.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* ================= PROCESS ================= */}
<section
  id="process"
  className="relative py-28 px-6 bg-white scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-20 left-1/4 w-[420px] h-[420px] bg-indigo-200/40 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    {/* Section Heading */}
    <div className="mb-20">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Simple Process
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        How It{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Works
        </span>
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        A clear, guided path designed to help you start confidently and grow
        sustainably — without confusion or pressure.
      </p>
    </div>

    {/* Steps */}
    <div className="grid gap-8 md:grid-cols-4">
      {[
        {
          title: "Submit Details",
          desc: "Share basic information so we understand your goals and availability.",
        },
        {
          title: "Get Guidance",
          desc: "Receive personalized direction from our experienced mentors.",
        },
        {
          title: "Start Activity",
          desc: "Begin with structured, ethical activities at your own pace.",
        },
        {
          title: "Earn & Grow",
          desc: "Build steady income while developing long-term skills.",
        },
      ].map((step, i) => (
        <div
          key={i}
          className="group relative rounded-2xl bg-white border border-slate-200/60 p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Step Number */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-700 to-violet-700 text-white flex items-center justify-center font-bold shadow-lg">
              {i + 1}
            </div>
          </div>

          <h3 className="mt-8 mb-3 text-lg font-extrabold text-slate-900">
            {step.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {step.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= FORM ================= */}
<section
  id="lead-form"
  className="relative py-28 px-6 bg-slate-50 scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-indigo-300/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Get Started
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
        Submit Your Details for{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Personal Guidance
        </span>
      </h2>

      <p className="text-lg text-slate-600 mb-8 max-w-lg">
        Complete the form and our team will reach out to understand your goals
        and guide you through suitable, ethical income opportunities.
      </p>

      {/* Trust Points */}
      <div className="space-y-4 text-slate-600">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            ✓
          </span>
          <span>No pressure or hidden commitments</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            ✓
          </span>
          <span>One-to-one guidance from experienced mentors</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            ✓
          </span>
          <span>Your information remains secure and confidential</span>
        </div>
      </div>
    </div>

    {/* FORM CONTAINER */}
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30 blur-xl"></div>

      <div className="relative rounded-2xl border border-slate-200/60 bg-white/90 backdrop-blur-md shadow-2xl overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSedPlnL6oD0Tdc1G05N-QOYETWXAZcl1hRUyW84F4z8lIK9IA/viewform?embedded=true"
          className="w-full h-[540px] border-0"
          title="Business Junction Lead Form"
        />
      </div>
    </div>

  </div>
</section>

      {/* ================= TESTIMONIALS ================= */}
      <section
  id="testimonials"
  className="relative py-28 px-6 bg-white scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] bg-indigo-200/40 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    {/* Section Heading */}
    <div className="mb-20">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Testimonials
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Real People.{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Real Results
        </span>
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Hear from individuals who have taken the first step and experienced
        clarity, confidence, and steady progress.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid gap-8 md:grid-cols-2 text-left">
      <Testimonial name="Ramesh" role="Retired" />
      <Testimonial name="Lakshmi" role="Homemaker" />
      <Testimonial name="Rahul" role="Student" />
      <Testimonial name="Suresh" role="Job Seeker" />
    </div>

  </div>
</section>

      {/* ================= FAQ ================= */}
<section
  id="faq"
  className="relative py-28 px-6 bg-slate-50 scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-indigo-300/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-4xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Help Center
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="mt-4 text-slate-600">
        Clear answers to common questions before you get started.
      </p>
    </div>

    {/* FAQ Items */}
    <div className="space-y-4">
      {[
        {
          q: "Is prior experience required?",
          a: "No prior experience is needed. You will receive complete guidance and structured support from our team.",
        },
        {
          q: "Is this part-time or full-time?",
          a: "You can participate part-time or full-time, depending on your availability and goals.",
        },
        {
          q: "Is the process ethical and transparent?",
          a: "Yes. Our approach is fully ethical, transparent, and focused on long-term sustainability.",
        },
      ].map((f, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200/60 bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-slate-900"
          >
            <span>{f.q}</span>
            <span
              className={`text-xl transition-transform ${
                openFaq === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          {openFaq === i && (
            <div className="px-6 pb-5 text-slate-600 leading-relaxed">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-300 py-14 px-6 text-center">
  <p className="text-xl font-extrabold mb-2">
    <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
      Business Junction
    </span>
  </p>

  <p className="text-slate-400 mb-6">
    Ethical Income Opportunities with Guidance and Transparency
  </p>

  <div className="w-24 h-px bg-slate-700 mx-auto mb-6"></div>

  <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-6">
    <a href="#about" className="hover:text-white transition">About</a>
    <a href="#process" className="hover:text-white transition">Process</a>
    <a href="#faq" className="hover:text-white transition">FAQ</a>
    <a href="#lead-form"    onClick={trackLead} className="hover:text-white transition">Contact</a>
  </div>

  <p className="text-xs text-slate-500">
    © {new Date().getFullYear()} Business Junction. All rights reserved.
  </p>
</footer>

    </div>
  );
}

/* ================= COMPONENT ================= */

function Testimonial({ name, role }) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">

      <p className="text-slate-600 leading-relaxed mb-6">
        “Business Junction provided clear guidance, ethical practices, and the
        confidence to move forward with a structured income path.”
      </p>

      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>

    </div>
  );
}
