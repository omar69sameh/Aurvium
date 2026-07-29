import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="page-transition"
    >
      <section className="py-section_v_padding flex flex-col items-center text-center max-w-max_width mx-auto px-gutter">
        <div className="w-full flex flex-col items-center">
          <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-on-surface-variant mb-stack_md">
            <span className="gold-dash"></span>Architectural Intent
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack_lg max-w-3xl">
            Why Aurvium <span className="italic font-light text-primary-container">exists.</span>
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant mb-stack_lg">
            Aurvium is an independent finance architecture studio. Most finance problems don't start in the finance team — they start years earlier, when a definition never gets agreed on, a system evolves without anyone designing it, and a workaround quietly becomes permanent.
          </p>
          <div className="w-full h-px bg-primary-container mt-stack_lg"></div>
        </div>
      </section>

      <section className="pb-section_v_padding max-w-max_width mx-auto px-gutter">
        <motion.div className="bg-surface-container-high p-stack_lg md:p-section_v_padding_mobile border border-outline-variant" {...sectionReveal}>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            That pattern doesn&apos;t come from theory. It comes from watching it happen repeatedly inside growing SaaS companies — different companies, different software, the same architectural questions surfacing every time. After seeing it enough times, it became clear these weren&apos;t isolated operational problems. They were architecture problems. Aurvium exists to solve them deliberately, once, rather than repeatedly.
          </p>
        </motion.div>
      </section>

      <section className="py-section_v_padding border-t border-outline-variant max-w-max_width mx-auto px-gutter">
        <div className="mb-stack_lg">
          <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-on-surface-variant mb-stack_sm flex items-center">
            <span className="gold-dash"></span>How We Approach a Problem
          </span>
          <h2 className="font-display-lg text-headline-md">A few things that don&apos;t change.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-outline-variant">
          <motion.div className="grid-hover-effect p-stack_lg border-r border-b border-outline-variant bg-surface group" {...sectionReveal}>
            <span className="font-eyebrow-mono text-eyebrow-mono text-primary mb-stack_md block">01</span>
            <h3 className="font-display-lg text-body-lg font-bold mb-stack_md transition-colors">Trace every number</h3>
            <p className="font-body-md text-on-surface-variant">Always trace a number back to its origin before trusting it.</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border-r border-b border-outline-variant bg-surface group" {...sectionReveal} transition={{ delay: 0.1 }}>
            <span className="font-eyebrow-mono text-eyebrow-mono text-primary mb-stack_md block">02</span>
            <h3 className="font-display-lg text-body-lg font-bold mb-stack_md transition-colors">Definition vs Data</h3>
            <p className="font-body-md text-on-surface-variant">Separate definition problems from data problems — they need different fixes.</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border-r border-b border-outline-variant bg-surface group" {...sectionReveal} transition={{ delay: 0.2 }}>
            <span className="font-eyebrow-mono text-eyebrow-mono text-primary mb-stack_md block">03</span>
            <h3 className="font-display-lg text-body-lg font-bold mb-stack_md transition-colors">Process before tool</h3>
            <p className="font-body-md text-on-surface-variant">Design the process before choosing the software.</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border-r border-b border-outline-variant bg-surface group" {...sectionReveal}>
            <span className="font-eyebrow-mono text-eyebrow-mono text-primary mb-stack_md block">04</span>
            <h3 className="font-display-lg text-body-lg font-bold mb-stack_md transition-colors">One Source of Truth</h3>
            <p className="font-body-md text-on-surface-variant">One source of truth before automation.</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border-r border-b border-outline-variant bg-surface group" {...sectionReveal} transition={{ delay: 0.1 }}>
            <span className="font-eyebrow-mono text-eyebrow-mono text-primary mb-stack_md block">05</span>
            <h3 className="font-display-lg text-body-lg font-bold mb-stack_md transition-colors">Workaround Permanence</h3>
            <p className="font-body-md text-on-surface-variant">Every manual workaround becomes permanent if nobody owns it.</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border-r border-b border-outline-variant bg-surface group" {...sectionReveal} transition={{ delay: 0.2 }}>
            <span className="font-eyebrow-mono text-eyebrow-mono text-primary mb-stack_md block">06</span>
            <h3 className="font-display-lg text-body-lg font-bold mb-stack_md transition-colors">Boring is Beautiful</h3>
            <p className="font-body-md text-on-surface-variant">Good finance systems become boring.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-section_v_padding border-t border-outline-variant w-full bg-surface-container-low">
        <div className="max-w-max_width mx-auto px-gutter">
          <motion.div {...sectionReveal}>
            <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-on-surface-variant mb-stack_md block">Why the name?</span>
            <h2 className="font-display-lg text-headline-md mb-stack_md italic">"Why the name?"</h2>
            <div className="p-stack_lg bg-surface-container border-l-4 border-primary max-w-3xl">
              <p className="font-body-md text-on-surface-variant">
                Aurum is Latin for gold — the oldest unit of financial value. &quot;-vium&quot; evokes a path, a channel. Together, Aurvium is the idea that financial value should move through systems intentionally designed, not accidentally assembled.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-inverse-surface py-section_v_padding text-surface-container max-w-max_width mx-auto px-gutter text-center mb-section_v_padding">
        <motion.div className="max-w-2xl mx-auto space-y-stack_lg" {...sectionReveal}>
          <p className="font-display-lg text-headline-md leading-relaxed text-surface-bright">
            &quot;Serious without being stiff. Modern without being trendy. It speaks the language of CFOs but <span className="italic text-primary-fixed">thinks like an engineer.</span>&quot;
          </p>
          <div className="pt-stack_lg">
            <Link to="/contact" className="btn-swipe bg-primary text-on-primary px-10 py-stack_md font-eyebrow-mono text-eyebrow-mono uppercase tracking-widest hover:text-white inline-block">
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
