import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ChannelRule from '../components/ChannelRule';
import Figure from '../components/Figure';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="page-transition"
    >
      <Seo
        title="Finance Architecture"
        description="Aurvium designs the technical architecture that keeps your ERP, billing, and reporting engines speaking one language — so the board deck reconciles with the data warehouse."
        path="/"
      />
      {/* Hero — full-bleed, gradient ground, figure alongside */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-max_width mx-auto px-gutter pt-section_v_padding pb-stack_lg relative">
          <div className="rise grid lg:grid-cols-[1.05fr_0.95fr] gap-stack_lg lg:gap-16 items-center">
            <div className="flex flex-col items-start gap-stack_lg">
              <div className="flex items-center gap-stack_sm">
                <span className="gold-dash"></span>
                <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary tracking-[0.28em]">For Finance Teams Outgrowing Their Systems</p>
              </div>

              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-[1.04]">
                <span className="block">The numbers don&apos;t agree,</span>
                <span className="block italic text-stone">and everyone has a theory why.</span>
              </h1>

              <p className="font-body-lg text-body-lg max-w-xl text-on-surface-variant">
                Trust decays when the board deck doesn&apos;t reconcile with the data warehouse. We design the technical architecture that ensures your ERP, billing, and reporting engines speak one language.
              </p>

              <div className="flex flex-wrap items-center gap-x-stack_lg gap-y-stack_md mt-stack_sm">
                <Link to="/work" className="btn-pill btn-primary">Read our thinking</Link>
                <Link
                  to="/services"
                  className="group font-label-sm text-label-sm uppercase text-on-surface inline-flex items-center gap-2 pb-1 border-b border-outline hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  What we do
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            <Figure variant="converge" label="Board deck vs. warehouse" caption="Two systems, reconciling to one number — illustrative" className="w-full" />
          </div>

          <ChannelRule className="mt-section_v_padding" />
        </div>
      </section>


      {/* Recognition Section (Sound Familiar?) */}
      <section className="py-section_v_padding relative">
        <div className="max-w-max_width mx-auto px-gutter grid md:grid-cols-2 gap-stack_lg lg:gap-16 relative z-10">
          <div className="flex flex-col gap-stack_md">
            <div className="flex items-center gap-stack_sm">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Sound Familiar?</p>
            </div>
            <h2 className="font-headline-md text-headline-md">What finance looks like once it's outgrown the systems that built it.</h2>
            <p className="font-body-md text-on-surface-variant">
              The usual response is to blame the closest thing — "the controller needs to work harder," "we need better software," "we need another analyst." None of those are wrong exactly. They're just aimed at the wrong layer.
            </p>
            <p className="font-body-md text-on-surface-variant font-medium mt-2">
              These aren't separate problems. They're symptoms of one design problem — a finance system nobody ever built on purpose.
            </p>
          </div>
          <ul className="flex flex-col gap-stack_md border-l border-outline-variant pl-gutter">
            {["Close takes longer every quarter, not shorter.", "The board deck number and the internal number don't quite match — again.", "Nobody can state your MRR definition without checking three places first.", "The ERP conversation keeps coming up, and keeps getting tabled.", "Revenue recognition still happens by hand, in a spreadsheet, right before the close."].map((text, idx) => (
              <li key={idx} className="flex items-start gap-stack_md">
                <span className="gold-dash mt-3 shrink-0"></span>
                <p className="font-body-md text-on-surface">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="max-w-max_width mx-auto px-gutter"><div className="hairline-subtle w-full border-b"></div></div>

      {/* How We Think — tight hierarchy leading to the featured note */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding relative">
        <div className="grid lg:grid-cols-2 gap-stack_lg lg:gap-16 items-center">
          {/* The idea — title, then a small supporting line right beneath it */}
          <div className="flex flex-col gap-stack_md max-w-xl">
            <div className="flex items-center gap-stack_sm">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">How We Think</p>
            </div>
            <h2 className="font-headline-md text-headline-md leading-tight">Not a pitch. A way of working through the problem.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant/90">
              That&apos;s the kind of thinking Aurvium — an independent finance architecture studio — is built around.
            </p>
          </div>

          {/* The featured note — modern rounded card, its button ends the flow */}
          <div className="rounded-2xl bg-surface-bright/50 backdrop-blur-sm p-stack_lg md:p-10 border border-outline-variant/70 shadow-[0_24px_60px_-34px_rgba(26,25,22,0.4)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
            <div className="flex items-center gap-stack_sm mb-4">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">Investigation</p>
            </div>
            <h3 className="font-headline-md text-2xl mb-4">How to investigate a metrics discrepancy</h3>
            <p className="font-body-md text-on-surface-variant mb-8">
              When two systems disagree on a number, the instinct is to start checking the data. That&apos;s usually the wrong place to start. Data errors are real, but they&apos;re less common than they look, and chasing them first wastes time…
            </p>
            <Link className="group font-label-sm text-label-sm uppercase text-primary font-bold inline-flex items-center gap-2 mt-auto" to="/work">
              Read the full note
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-max_width mx-auto px-gutter"><div className="hairline-subtle w-full border-b"></div></div>

      {/* Typical Situations — the calls we get */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Typical Situations</p>
          </div>
          <h2 className="font-headline-md text-headline-md">The kind of call we usually get.</h2>
        </div>

        <ul className="mt-stack_lg border-t border-outline-variant/60 relative z-10">
          {[
            "We're planning an ERP move and want to get the design right before we build.",
            "The board deck doesn't reconcile with our internal numbers.",
            "Revenue recognition has become a manual process every month-end.",
            "We're heading into due diligence and the numbers need to hold up.",
            "Pricing changed, and billing is more complicated than the system was built for.",
            "Reporting worked fine until it didn't — now nothing scales."
          ].map((quote, idx) => (
            <li
              key={idx}
              className="group flex items-baseline gap-stack_md md:gap-stack_lg py-stack_md md:py-8 border-b border-outline-variant/60 hover:pl-2 transition-[padding] duration-300"
            >
              <span className="font-eyebrow-mono text-label-sm text-primary/70 tabular-nums shrink-0">0{idx + 1}</span>
              <p className="font-display-lg text-2xl md:text-3xl italic text-on-surface-variant group-hover:text-on-surface leading-snug transition-colors duration-300">
                &ldquo;{quote}&rdquo;
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="max-w-max_width mx-auto px-gutter"><div className="hairline-subtle w-full border-b"></div></div>

      {/* What Changes — what's different afterward */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">What Changes</p>
          </div>
          <h2 className="font-headline-md text-headline-md mb-3">What becomes permanently easier.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Not what we do — what&apos;s different afterward.</p>
        </div>

        <div className="mt-stack_lg flex flex-col gap-section_v_padding_mobile relative z-10">
          {/* Row 1 — outcomes 01–02 beside the growth chart */}
          <div className="grid lg:grid-cols-2 gap-stack_lg lg:gap-16 items-center">
            <div className="flex flex-col">
              {[
                { num: "01", title: "The right system, chosen once", body: "Not re-evaluated every 18 months because the last choice didn't fit." },
                { num: "02", title: "Revenue numbers that hold up", body: "In the board deck, the ledger, and the audit file — the same number, every time." }
              ].map((item) => (
                <div key={item.num} className="flex gap-stack_md py-stack_md border-b border-outline-variant/50">
                  <span className="font-display-lg text-5xl md:text-6xl leading-none text-primary/25 tabular-nums shrink-0">{item.num}</span>
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="font-headline-md text-xl md:text-2xl text-on-surface">{item.title}</h3>
                    <p className="font-body-md text-on-surface-variant">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Figure variant="growth" label="Reporting that scales" caption="Revenue that holds up as you grow — illustrative" className="w-full" />
          </div>

          {/* Row 2 — the MRR bridge beside outcomes 03–04 */}
          <div className="grid lg:grid-cols-2 gap-stack_lg lg:gap-16 items-center">
            <Figure variant="waterfall" label="MRR bridge" caption="New + Expansion − Contraction − Churn → Net MRR — illustrative" className="w-full lg:order-1" />
            <div className="flex flex-col lg:order-2">
              {[
                { num: "03", title: "A close without the fire drill", body: "The process breaks in the same place every quarter — until it's actually redesigned." },
                { num: "04", title: "One number everyone trusts", body: "The board, the warehouse, and the auditor, finally looking at the same figure." }
              ].map((item) => (
                <div key={item.num} className="flex gap-stack_md py-stack_md border-b border-outline-variant/50">
                  <span className="font-display-lg text-5xl md:text-6xl leading-none text-primary/25 tabular-nums shrink-0">{item.num}</span>
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="font-headline-md text-xl md:text-2xl text-on-surface">{item.title}</h3>
                    <p className="font-body-md text-on-surface-variant">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-stack_lg relative z-10">
          <Link to="/services" className="btn-pill btn-ghost">See how, in detail →</Link>
        </div>
      </section>

      {/* Approach Summary — How We Work */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding relative">
        <div className="flex flex-col gap-stack_lg">
          <div className="max-w-2xl">
            <div className="flex items-center gap-stack_sm">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">How We Work</p>
            </div>
            <h2 className="font-headline-md text-headline-md mt-stack_sm mb-3">Discovery. Design. Getting it live.</h2>
            <p className="font-body-lg text-on-surface-variant">A defined engagement with a defined outcome — not a retainer, not a subscription.</p>
          </div>

          {/* Connected process timeline — the three steps on one channel */}
          <div className="relative mt-stack_md">
            <ol className="grid gap-stack_lg md:grid-cols-3 md:gap-stack_md relative">
              {/* horizontal channel line running node-center to node-center (desktop) */}
              <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-primary/40" aria-hidden="true"></div>
              {[
                { num: "01", title: "Discovery", desc: "We look at the systems you actually have — Stripe, spreadsheets, whatever ERP exists — and find exactly where they'll break first." },
                { num: "02", title: "Design", desc: "A scoped architecture for the data flow, recognition logic, and reporting layer your stage actually requires." },
                { num: "03", title: "Getting It Live", desc: "Configured directly where it's ours to configure. Where it needs specialist engineering, we stay the architectural authority — reviewing and validating the result either way." }
              ].map((step) => (
                <li key={step.num} className="relative flex flex-col gap-stack_sm md:pr-stack_lg">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-iron-ink text-surface-bright flex items-center justify-center font-eyebrow-mono text-sm">{step.num}</div>
                  <h3 className="font-headline-md text-xl mt-stack_sm">{step.title}</h3>
                  <p className="font-body-md text-on-surface-variant">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-stack_md">
            <Link to="/approach" className="btn-pill btn-ghost">Our Process →</Link>
          </div>
        </div>
      </section>

      {/* Dark Principle Banner — full-bleed band */}
      <section className="bg-iron-ink text-surface-container-low py-section_v_padding mt-section_v_padding_mobile">
        <div className="max-w-max_width mx-auto px-gutter flex flex-col items-center text-center gap-stack_lg">
          <span className="gold-dash bg-primary-fixed-dim"></span>
          <h2 className="font-display-lg text-headline-md md:text-display-lg max-w-4xl text-surface-bright">
            &ldquo;We don&apos;t oversell. We deliver systems that work quietly and correctly — the way good infrastructure should.&rdquo;
          </h2>
        </div>
      </section>

      {/* Contact CTA — full-bleed dark band */}
      <section className="bg-hero-dark text-surface-container-low py-section_v_padding">
        <div className="max-w-max_width mx-auto px-gutter flex flex-col md:flex-row md:items-end md:justify-between gap-stack_lg">
          <div className="max-w-2xl flex flex-col gap-stack_md">
            <h2 className="font-headline-md text-headline-md text-surface-bright">Every finance system was designed. Even the accidental ones.</h2>
            <p className="font-body-lg text-surface-variant">Tell us where yours might need a second look.</p>
          </div>
          <Link to="/contact" className="btn-pill btn-gold shrink-0">Get in Touch</Link>
        </div>
      </section>
    </motion.div>
  );
}
