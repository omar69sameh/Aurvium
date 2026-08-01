import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ChannelRule from '../components/ChannelRule';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

// Scroll-triggered animations
const scrollRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const cardRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 }
  }
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
      {/* Hero — document-style, ledger restraint */}
      <section className="max-w-max_width mx-auto px-gutter pt-section_v_padding pb-stack_lg">
        <div className="rise flex flex-col items-start gap-stack_lg">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary tracking-[0.28em]">For Finance Teams Outgrowing Their Systems</p>
          </div>

          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-[1.06] max-w-4xl">
            <span className="block">The numbers don&apos;t agree,</span>
            <span className="block italic text-stone">and everyone has a theory why.</span>
          </h1>

          <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant">
            Trust decays when the board deck doesn&apos;t reconcile with the data warehouse. We design the technical architecture that ensures your ERP, billing, and reporting engines speak one language.
          </p>

          <div className="flex flex-wrap items-center gap-x-stack_lg gap-y-stack_md mt-stack_sm">
            <Link
              to="/work"
              className="bg-iron-ink text-surface-container-low px-stack_lg py-4 font-label-sm text-label-sm uppercase inline-block transition-opacity duration-300 hover:opacity-90 active:scale-[0.98]"
            >
              Read our thinking
            </Link>
            <Link
              to="/services"
              className="group font-label-sm text-label-sm uppercase text-on-surface inline-flex items-center gap-2 pb-1 border-b border-outline hover:border-primary hover:text-primary transition-colors duration-300"
            >
              What we do
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <ChannelRule className="mt-section_v_padding" />
      </section>


      {/* Recognition Section (Sound Familiar?) */}
      <section className="bg-surface-container-low py-section_v_padding relative overflow-hidden">
        {/* Parallax background element */}
        <motion.div 
          className="absolute -left-40 top-1/4 w-80 h-80 rounded-full bg-primary/3 blur-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        />
        
        <div className="max-w-max_width mx-auto px-gutter grid md:grid-cols-2 gap-stack_lg relative z-10">
          <motion.div 
            className="flex flex-col gap-stack_md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scrollRevealVariants}
          >
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
          </motion.div>
          <motion.ul 
            className="flex flex-col gap-stack_md border-l border-outline-variant pl-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainerVariants}
          >
            {["Close takes longer every quarter, not shorter.", "The board deck number and the internal number don't quite match — again.", "Nobody can state your MRR definition without checking three places first.", "The ERP conversation keeps coming up, and keeps getting tabled.", "Revenue recognition still happens by hand, in a spreadsheet, right before the close."].map((text, idx) => (
              <motion.li key={idx} className="flex items-start gap-stack_md" variants={cardRevealVariants}>
                <span className="gold-dash mt-3 shrink-0"></span>
                <p className="font-body-md text-on-surface">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <div className="max-w-max_width mx-auto px-gutter"><div className="hairline-subtle w-full border-b"></div></div>

      {/* Investigation Teaser Section */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding relative">
        <motion.div 
          className="bg-surface-container-high p-stack_lg md:p-section_v_padding_mobile relative overflow-hidden flex flex-col md:flex-row gap-stack_lg items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scrollRevealVariants}
        >
          <div className="flex-1 flex flex-col gap-stack_md relative z-10">
            <div className="flex items-center gap-stack_sm">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">How We Think</p>
            </div>
            <h2 className="font-headline-md text-headline-md">Not a pitch. A way of working through the problem.</h2>
            <p className="font-body-md text-on-surface-variant max-w-lg mt-auto pt-4 border-t border-outline-variant/30">
              That's the kind of thinking Aurvium — an independent finance architecture studio — is built around.
            </p>
          </div>

          <div className="flex-1 w-full relative bg-surface p-stack_lg border border-outline-variant flex flex-col justify-center">
            <div className="flex items-center gap-stack_sm mb-4">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">Investigation</p>
            </div>
            <h3 className="font-headline-md text-2xl mb-4">How to investigate a metrics discrepancy</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              When two systems disagree on a number, the instinct is to start checking the data. That's usually the wrong place to start. Data errors are real, but they're less common than they look, and chasing them first wastes time…
            </p>
            <Link className="font-label-sm text-label-sm uppercase text-primary font-bold hover:underline inline-block mt-auto" to="/work">
              Read the full note →
            </Link>
          </div>
        </motion.div>
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

        <div className="mt-stack_lg grid md:grid-cols-2 gap-x-stack_lg relative z-10">
          {[
            { num: "01", title: "The right system, chosen once", body: "Not re-evaluated every 18 months because the last choice didn't fit." },
            { num: "02", title: "Revenue numbers that hold up", body: "In the board deck, the ledger, and the audit file — the same number, every time." },
            { num: "03", title: "A close without the fire drill", body: "The process breaks in the same place every quarter — until it's actually redesigned." },
            { num: "04", title: "One number everyone trusts", body: "The board, the warehouse, and the auditor, finally looking at the same figure." }
          ].map((item) => (
            <div
              key={item.num}
              className="group flex gap-stack_md py-stack_lg border-b border-outline-variant/50"
            >
              <span className="font-display-lg text-5xl md:text-6xl leading-none text-primary/25 group-hover:text-primary/60 tabular-nums shrink-0 transition-colors duration-500">{item.num}</span>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="font-headline-md text-xl md:text-2xl text-on-surface">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-stack_lg relative z-10">
          <Link to="/services" className="btn-swipe border border-outline text-on-surface px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:border-primary hover:text-primary inline-block">
            <span>See how, in detail →</span>
          </Link>
        </div>
      </section>

      {/* Approach Summary (Timeline) */}
      <section className="bg-surface-container-low py-section_v_padding relative overflow-hidden">
        {/* Parallax background element */}
        <motion.div 
          className="absolute -right-40 top-1/3 w-80 h-80 rounded-full bg-primary/3 blur-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        />
        
        <div className="max-w-max_width mx-auto px-gutter flex flex-col gap-stack_lg relative z-10">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">How We Work</p>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md mb-4">Discovery. Design. Getting it live.</h2>
            <p className="font-body-lg text-on-surface-variant max-w-3xl">A defined engagement with a defined outcome — not a retainer, not a subscription.</p>
          </div>
          <motion.div 
            className="grid md:grid-cols-3 gap-stack_lg relative mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainerVariants}
          >
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -z-10 translate-y-[-50%]"></div>
            {[
              { letter: "A", title: "Discovery", desc: "We look at the systems you actually have — Stripe, spreadsheets, whatever ERP exists — and find exactly where they'll break first." },
              { letter: "B", title: "Design", desc: "A scoped architecture for the data flow, recognition logic, and reporting layer your stage actually requires." },
              { letter: "C", title: "Getting It Live", desc: "Configured directly where it's ours to configure. Where it needs specialist engineering, we stay the architectural authority — reviewing and validating the result either way." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                className="grid-hover-effect flex flex-col gap-stack_sm bg-surface-container-low p-stack_md border border-outline-variant md:border-none hover:shadow-lg hover:border-primary transition-all duration-300"
                variants={cardRevealVariants}
                whileHover="hover"
              >
                <div className="w-12 h-12 bg-iron-ink text-surface-container flex items-center justify-center font-eyebrow-mono text-lg mb-stack_md">{step.letter}</div>
                <h4 className="font-headline-md text-xl">{step.title}</h4>
                <p className="font-body-md text-on-surface-variant">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-4">
            <Link to="/approach" className="btn-swipe border border-outline text-on-surface px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:border-primary hover:text-primary inline-block">
              <span>Our Process →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Principle Banner */}
      <section className="bg-iron-ink py-section_v_padding text-surface-container-low relative overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        />
        
        <motion.div 
          className="max-w-max_width mx-auto px-gutter text-center flex flex-col items-center gap-stack_lg relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="gold-dash bg-primary-fixed-dim"></span>
          <h2 className="font-display-lg text-headline-md md:text-display-lg max-w-4xl text-surface-bright">
            "We don't oversell. We deliver systems that work quietly and correctly — the way good infrastructure should."
          </h2>
        </motion.div>
      </section>
      
      {/* Contact CTA - Full Bleed Dark Band */}
      <section className="bg-iron-ink py-section_v_padding text-surface-container-low relative overflow-hidden w-full">
        <motion.div 
          className="absolute -right-40 top-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        />
        
        <motion.div 
          className="max-w-max_width mx-auto px-gutter flex flex-col gap-stack_lg relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-headline-md text-headline-md max-w-2xl text-surface-bright">Every finance system was designed. Even the accidental ones.</h2>
          <p className="font-body-lg text-surface-variant">Tell us where yours might need a second look.</p>
          <div className="mt-4">
            <Link to="/contact" className="btn-swipe btn-swipe-dark bg-primary text-iron-ink px-stack_lg py-4 font-label-sm text-label-sm uppercase active:scale-95 inline-block">
              <span>Get in Touch</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
