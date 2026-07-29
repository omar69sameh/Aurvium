import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Hero animations
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const floatingDashVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  float: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, delay: 0.8, ease: "easeOut" }
  }
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1,
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
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

const parallaxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

function TypewriterHeadline() {
  const line2Text = "and everyone has a theory why.";
  
  const { displayedText: line2Display, isComplete: line2Complete } = useTypewriter(
    line2Text, 
    100, 
    600
  );

  return (
    <motion.h1 
      className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="block">
        The numbers don&apos;t agree,
      </span>
      <span className="block italic text-primary-container relative">
        {line2Display}
        {!line2Complete && (
          <motion.span 
            className="inline-block w-1 h-[1.2em] bg-primary ml-1 align-text-bottom"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        )}
      </span>
    </motion.h1>
  );
}

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
      {/* Hero Section */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding flex flex-col items-start gap-stack_lg relative overflow-hidden">
        {/* Animated background accent */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="relative z-10 flex flex-col gap-stack_sm"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-center gap-stack_sm" variants={heroItemVariants}>
            <motion.span 
              className="gold-dash"
              variants={floatingDashVariants}
              animate="visible"
              initial="hidden"
              onAnimationComplete={() => {
                // Start floating animation after initial reveal
              }}
            />
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">For Finance Teams Outgrowing Their Systems</p>
          </motion.div>
          
          <TypewriterHeadline />
        </motion.div>

        <motion.p 
          className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant relative z-10"
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Trust decays when the board deck doesn't reconcile with the data warehouse. We design the technical architecture that ensures your ERP, billing, and reporting engines speak one language.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-stack_md mt-stack_sm relative z-10"
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={buttonVariants}>
            <Link to="/work" className="btn-swipe bg-iron-ink text-surface-container-low px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:text-white transition-all duration-300 block">
              <span className="relative z-10">Read our thinking</span>
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Link to="/services" className="btn-swipe border border-outline text-on-surface px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:border-primary hover:text-primary transition-all duration-300 block">
              <span className="relative z-10">What we do →</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full mt-stack_lg hairline-gold origin-left"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
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

      {/* Typical Situations (Quotes) */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding flex flex-col gap-stack_lg relative overflow-hidden">
        {/* Parallax background element */}
        <motion.div 
          className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-primary/3 blur-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        />
        
        <div className="relative z-10">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Typical Situations</p>
          </div>
          <h2 className="font-headline-md text-headline-md mb-2">The kind of call we usually get.</h2>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-stack_lg relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainerVariants}
        >
          {["We're planning an ERP move and want to get the design right before we build.", "The board deck doesn't reconcile with our internal numbers.", "Revenue recognition has become a manual process every month-end.", "We're heading into due diligence and the numbers need to hold up.", "Pricing changed, and billing is more complicated than the system was built for.", "Reporting worked fine until it didn't — now nothing scales."].map((quote, idx) => (
            <motion.div 
              key={idx}
              className="grid-hover-effect p-stack_lg border border-outline-variant bg-surface-container-low flex flex-col gap-stack_md hover:shadow-lg hover:border-primary transition-all duration-300"
              variants={cardRevealVariants}
              whileHover="hover"
            >
              <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
              <p className="font-body-md italic text-on-surface">"{quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="max-w-max_width mx-auto px-gutter"><div className="hairline-subtle w-full border-b"></div></div>

      {/* Value Pillars Grid */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding flex flex-col gap-stack_lg relative overflow-hidden">
        {/* Parallax background element */}
        <motion.div 
          className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-primary/3 blur-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        />
        
        <div className="relative z-10">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">What Changes</p>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md mb-4">What becomes permanently easier.</h2>
            <p className="font-body-lg text-on-surface-variant">Not what we do — what's different afterward.</p>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mt-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainerVariants}
        >
          {[
            { num: "01", title: "The right system, chosen once", desc: "Not re-evaluated every 18 months because the last choice didn't fit." },
            { num: "02", title: "Revenue numbers that hold up", desc: "In the board deck, the ledger, and the audit file — the same number, every time." },
            { num: "03", title: "A close without the fire drill", desc: "The process breaks in the same place every quarter — until it's actually redesigned." },
            { num: "04", title: "One number everyone trusts", desc: "The board, the warehouse, and the auditor, finally looking at the same figure." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="grid-hover-effect flex flex-col gap-stack_md p-stack_md border border-outline-variant bg-surface-container-low hover:shadow-lg hover:border-primary transition-all duration-300"
              variants={cardRevealVariants}
              whileHover="hover"
            >
              <p className="font-eyebrow-mono text-primary">{item.num}</p>
              <h3 className="font-headline-md text-2xl">{item.title}</h3>
              <p className="font-body-md text-on-surface-variant">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-4">
          <Link to="/services" className="btn-swipe border border-outline text-on-surface px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:border-primary hover:text-primary inline-block">
            <span>Our Approach →</span>
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
