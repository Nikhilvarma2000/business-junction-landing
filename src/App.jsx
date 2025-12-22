import { useState } from "react";
import logo from "./assets/logo.jpeg";

const trackLead = () => {
  if (window.fbq) {
    window.fbq("track", "Lead");
  }
};


export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
    const [showForm, setShowForm] = useState(false);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 inset-x-0 z-50">
  <div className="mx-auto max-w-7xl px-4 pt-4">
    <div className="flex items-center justify-between">

      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Business Junction Logo"
          className="h-6 sm:h-7 w-auto object-contain"
        />
        <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
          Business Junction
        </span>
      </div>

      {/* Right: CTA */}
      <a
        href="#lead-form"
        onClick={trackLead}
        className="
          relative inline-flex items-center
          px-4 py-1.5 sm:px-5 sm:py-2
          text-xs sm:text-sm font-semibold
          rounded-full
          bg-white text-black
          transition-all duration-300
          hover:scale-[1.03]
          hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]
          active:scale-95
        "
      >
        Get Started
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 to-violet-500/30 blur-xl opacity-0 hover:opacity-100 transition"></span>
      </a>

    </div>
  </div>
</header>


      {/* ================= HERO ================= */}
<section className="relative overflow-hidden pt-36 pb-32 px-6 bg-[#0B0D12] text-white">

  {/* mesh background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.16),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.14),transparent_40%)]"></div>

  {/* noise overlay */}
  <div className="absolute inset-0 opacity-[0.12] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  <div className="relative max-w-4xl mx-auto text-center">

{/* HERO LOGO */}
<div className="flex justify-center mb-8 md:mb-10">
  <img
    src="/logo.png"
    alt="Business Junction Logo"
    className="
      h-auto
      w-[65%]          /* MOBILE – unchanged */
      sm:w-[60%]       /* LARGE MOBILE – unchanged */
      md:w-[420px]     /* DESKTOP – REDUCED */
      lg:w-[480px]     /* LARGE DESKTOP – REDUCED */
      object-contain
      drop-shadow-xl
    "
  />
</div>



    {/* badge */}
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-10 text-sm font-semibold text-white/80">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      Opportunities Open — Limited Intake
    </div>

    {/* headline */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8">
      Your First Step Toward a
      <br />
      <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
        Better Income & Secure Future
      </span>
    </h1>

    {/* description */}
    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
      Looking for an opportunity to earn without stress?
      Whether you are unemployed, retired, a homemaker, or a student,
      Business Junction enables ethical business opportunities you can start immediately.
    </p>

    {/* highlights */}
    <div className="flex flex-col sm:flex-row justify-center gap-6 text-white/85 mb-14">
      <div className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">✓</span>
        Part-time or Full-time
      </div>
      <div className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">✓</span>
        Work from home or locally
      </div>
      <div className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">✓</span>
        No prior experience required
      </div>
    </div>

    {/* CTA */}
    <div className="flex justify-center">
      <a
        href="#lead-form"
        onClick={trackLead}
        className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)]"
      >
        Get Started Today
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 blur-xl opacity-0 group-hover:opacity-100 transition"></span>
      </a>
    </div>

    {/* trust note */}
    <p className="mt-6 text-sm text-white/50">
      No pressure • No hidden fees • Guided support
    </p>

  </div>
</section>

     {/* ================= TESTIMONIALS ================= */}

{/* Reviews Section */}
<section className="relative py-24 px-6 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-16">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Reviews
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Trusted by{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Real People
        </span>
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Hear genuine experiences from individuals who transformed their income,
        confidence, and future with Business Junction.
      </p>
    </div>

    {/* Reviews Grid */}
    <div className="grid gap-8 md:grid-cols-2">
      <Testimonial
        name="Sai Kumar"
        role="Part-Time Professional"
        quote="I was earning 50 thousand every month by working part-time. Before Business Junction, all my salary was sufficient for Emi's, house rent, and children's fees only.  After joining Business Junction, I got a second source of income, I bought my dream car, and I got financial freedom.it was a genuine and very good company." />

      <Testimonial
        name="Prasad"
        role="Aspiring Entrepreneur"
        quote="I was earning 55 thousand every month by working part-time.Before joining Business Junction I don't have any knowledge in business (zero knowledge), but Business Junction provided all the training from scratch to the pro level. now I can do any kind of business, whether it is service-based or product-based."   />

      <Testimonial
        name="Chandrakant"
        role="Career Seeker"
        quote="I was earning 60 thousand every month, but I was struggling to find a stable job. When Business Junction gave me this opportunity, it completely changed my life. I strongly suggest everyone join and utilize this opportunity."
      />

      <Testimonial
        name="Raj Kumar"
        role="Working Professional"
        quote="I was earning 60 thousand every month. Business Junction has given me financial freedom and a platform to build a future for my children and myself."    />
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

    {/* LEFT CONTENT (UNCHANGED – MINIMAL) */}
    <div>
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Get Started
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
        Submit Your Details for{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          the Next Step
        </span>
      </h2>

      <p className="text-lg text-slate-600 mb-8 max-w-lg">
        Fill out a short form and our team will personally contact you.
      </p>
    </div>

    {/* FORM PREVIEW (ENHANCED VISUAL FOCUS) */}
    <div className="relative">

      {/* Card with lift + glow */}
      <div
        className="
          relative rounded-2xl border border-slate-200
          bg-white shadow-xl overflow-hidden
          transition-all duration-500
          hover:-translate-y-2
          hover:shadow-[0_30px_80px_rgba(99,102,241,0.25)]
        "
      >
        {/* subtle edge glow */}
        <div className="absolute inset-0 rounded-2xl border border-indigo-400/20 pointer-events-none"></div>

        {/* Form preview (no blur – looks accessible) */}
        <div className="pointer-events-none opacity-60">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSedPlnL6oD0Tdc1G05N-QOYETWXAZcl1hRUyW84F4z8lIK9IA/viewform?embedded=true"
            className="w-full h-[520px] border-0"
            title="Business Junction Lead Form Preview"
          />
        </div>

        {/* Overlay CTA (PULSE + LIVE EFFECT) */}
        <button
          onClick={() => {
            trackLead();    //pixel fires here
            setShowForm(true);
          }}
          className="
            absolute inset-0 z-10 flex flex-col items-center justify-center
            bg-white/60 backdrop-blur-sm
            text-center
            animate-pulse hover:animate-none
            transition
            focus:outline-none
          "
          aria-label="Open lead form"
        >
          {/* Icon with live indicator */}
          <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold">
            →
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"></span>
          </div>

          <p className="text-xl font-semibold text-slate-900 mb-1">
           Click here to sumbit your details
          </p>
          <p className="text-sm text-slate-600">
            Takes less than 1 minute
          </p>
        </button>
      </div>
    </div>
  </div>

  {/* MODAL WITH INTERACTIVE FORM (UNCHANGED) */}
  {showForm && (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden">

        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-slate-900">
            Submit Your Details
          </h3>
          <button
            onClick={() => setShowForm(false)}
            className="text-slate-500 hover:text-slate-900 text-xl"
            aria-label="Close form"
          >
            ✕
          </button>
        </div>

        <div className="h-[75vh] overflow-y-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSedPlnL6oD0Tdc1G05N-QOYETWXAZcl1hRUyW84F4z8lIK9IA/viewform?embedded=true"
            className="w-full h-full border-0"
            title="Business Junction Lead Form"
          />
        </div>
      </div>
    </div>
  )}
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
        { n: "10K+", l: "People Guided" },
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

      {/* ================= What You Get  ================= */}
      <section
  id="what-you-get"
  className="relative py-32 px-6 bg-white overflow-hidden"
>
  {/* soft background accents */}
  <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[120px]"></div>
  <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-100/60 rounded-full blur-[120px]"></div>

  <div className="relative max-w-6xl mx-auto">

    {/* heading */}
    <div className="max-w-3xl mb-24">
      <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-4">
        What You Get
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
        Simple. Honest.{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Built for Everyone.
        </span>
      </h2>
    </div>

    {/* content layout */}
    <div className="grid lg:grid-cols-2 gap-x-24 gap-y-20">

      {/* left: benefits */}
      <div className="space-y-10">
        {[
          "Trusted income opportunities",
          "Guidance & training provided",
          "Suitable for all age groups",
          "Ethical and transparent system",
          "Growth-oriented ecosystem",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="mt-1 flex-shrink-0">
              <span className="block w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold shadow-md">
                ✓
              </span>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* right: closing message */}
      <div className="flex items-center">
        <div>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
            Don’t Miss This Opportunity
          </h3>

          <p className="text-lg text-slate-600 mb-10">
            Thousands have already taken the first step.
            <br />
            <span className="font-semibold text-slate-800">
              Now it’s your turn.
            </span>
          </p>

          <div className="space-y-4 text-lg text-slate-700">
            <p className="flex items-center gap-3">
              <span className="text-indigo-600 text-xl">→</span>
              Submit your details today
            </p>
            <p className="flex items-center gap-3">
              <span className="text-indigo-600 text-xl">→</span>
              Get guidance from Business Junction experts
            </p>
            <p className="flex items-center gap-3">
              <span className="text-indigo-600 text-xl">→</span>
              Start building your income journey
            </p>
          </div>
        </div>
      </div>

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

{/* ================= CONTACT INFO ================= */}
<section className="relative py-16 px-6 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-12">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Contact Us
      </p>
      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        We’re Here to Help
      </h3>
      <p className="mt-4 text-slate-600 max-w-xl mx-auto">
        Have questions or need guidance? Reach out to us directly — our team is happy to assist you.
      </p>
    </div>

    {/* Contact Cards */}
    <div className="grid sm:grid-cols-2 gap-8">

      {/* Phone */}
      <a
        href="tel:9347927074"
        className="group flex items-center gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
      >
        <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
          ☎
        </div>

        <div>
          <p className="text-sm text-slate-500 font-medium">Phone Number</p>
          <p className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">
            93479 27074
          </p>
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:businessjunctionindia@gmail.com"
        className="group flex items-center gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
      >
        <div className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center text-2xl font-bold">
          ✉
        </div>

        <div>
          <p className="text-sm text-slate-500 font-medium">Email Address</p>
          <p className="text-xl font-bold text-slate-900 group-hover:text-violet-600 transition break-all">
            businessjunctionindia@gmail.com
          </p>
        </div>
      </a>

    </div>
  </div>
</section>

{/* ================= FLOATING WHATSAPP ================= */}
<a
  href="https://wa.me/919347927074?text=Hello%20Business%20Junction%2C%20I%20am%20interested%20in%20your%20opportunity."
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed bottom-6 right-6 z-[9999]
    flex items-center gap-3
    px-5 py-3 rounded-full
    bg-[#25D366]
    text-white font-semibold
    shadow-xl
    hover:scale-105 hover:shadow-2xl
    transition-all duration-300
  "
  aria-label="Chat on WhatsApp"
>
  {/* WhatsApp Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-6 h-6 fill-white"
  >
    <path d="M19.11 17.93c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM16.03 3C9.4 3 4 8.37 4 15c0 2.63.86 5.06 2.31 7.03L4 29l7.14-2.25C13.03 27.55 14.49 28 16.03 28c6.63 0 12.03-5.37 12.03-12S22.66 3 16.03 3z" />
  </svg>

  <span className="text-sm sm:text-base">
    Chat on WhatsApp
  </span>
</a>

{/* ================= FLOATING APPLY BUTTON ================= */}
<button
  onClick={() => {
    trackLead();      //  Pixel fires here
    setShowForm(true); //  Opens your existing form modal
  }}
  className="
    fixed bottom-24 right-6 z-[9999]
    flex items-center gap-3
    px-5 py-3 rounded-full
    bg-indigo-600
    text-white font-semibold
    shadow-xl
    hover:bg-indigo-700
    hover:scale-105 hover:shadow-2xl
    transition-all duration-300
  "
  aria-label="Apply Now"
>
  {/* Icon */}
  <span className="text-lg">📝</span>

  <span className="text-sm sm:text-base">
    Apply Now
  </span>
</button>


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
function Testimonial({ name, role, quote }) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">

      <p className="text-slate-600 leading-relaxed mb-6">
        “{quote}”
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
