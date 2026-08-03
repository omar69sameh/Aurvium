import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
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
      <Seo
        title="About"
        description="Aurvium is an independent finance architecture studio. Most finance problems don't start in the finance team — they start years earlier, in systems no one designed on purpose."
        path="/about"
      />
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

        {/* Who this is for, in structured facts */}
        <div className="w-full mt-stack_lg grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/50 border border-outline-variant/50 text-left">
          {[
            { k: '$5–30M', v: 'ARR SaaS companies' },
            { k: 'Project', v: 'Based, not retainer' },
            { k: 'Fixed', v: 'Scope & deliverable' },
            { k: 'Independent', v: 'Finance architecture studio' },
          ].map((s) => (
            <div key={s.v} className="bg-surface-bright/40 px-stack_md py-stack_lg">
              <p className="font-display-lg text-2xl md:text-3xl text-on-surface leading-none">{s.k}</p>
              <p className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-outline mt-3">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead statement — set as a statement, not a boxed paragraph */}
      <section className="pb-section_v_padding max-w-max_width mx-auto px-gutter">
        <motion.div className="grid lg:grid-cols-[minmax(0,16rem)_1fr] gap-stack_lg lg:gap-16 items-start" {...sectionReveal}>
          <div className="flex items-center gap-stack_sm lg:pt-3">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Where it comes from</p>
          </div>
          <p className="font-display-lg text-2xl md:text-3xl leading-snug text-on-surface-variant max-w-[46ch]">
            That pattern doesn&apos;t come from theory. It comes from watching it happen repeatedly inside growing SaaS companies — the same architectural questions surfacing every time.
            <span className="block mt-stack_md font-body-lg text-body-lg text-on-surface-variant/90 max-w-[62ch]">
              After seeing it enough times, it became clear these weren&apos;t isolated operational problems. They were architecture problems. Aurvium exists to solve them deliberately, once, rather than repeatedly.
            </span>
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

      <section className="py-section_v_padding border-t border-outline-variant/50 w-full">
        <div className="max-w-max_width mx-auto px-gutter">
          <motion.div className="grid lg:grid-cols-2 gap-stack_lg lg:gap-16 items-center" {...sectionReveal}>
            <div>
              <div className="flex items-center gap-stack_sm">
                <span className="gold-dash"></span>
                <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Why the name?</p>
              </div>
              <h2 className="font-display-lg text-headline-md mt-4 mb-stack_md">The channel value moves through.</h2>
              <p className="font-body-md text-on-surface-variant max-w-[62ch]">
                Aurum is Latin for gold — the oldest unit of financial value. &quot;-vium&quot; evokes a path, a channel. Together, Aurvium is the idea that financial value should move through systems intentionally designed, not accidentally assembled.
              </p>
            </div>

            {/* Etymology lockup — the mark's gold gap is the channel */}
            <figure className="figure p-stack_lg md:p-12 flex flex-col items-center gap-stack_lg">
              <svg width="72" height="84" viewBox="0 0 72 84" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="etymGold" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#B8922A" stopOpacity="0" />
                    <stop offset="16%" stopColor="#B8922A" />
                    <stop offset="84%" stopColor="#B8922A" />
                    <stop offset="100%" stopColor="#B8922A" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points="36,1 65,35 7,35" fill="#1A1916" />
                <polygon points="7,49 65,49 36,83" fill="#1A1916" />
                <rect x="2" y="39.3" width="68" height="3.4" fill="url(#etymGold)" />
              </svg>

              <div className="w-full grid grid-cols-2 gap-px bg-outline-variant/50 border border-outline-variant/50">
                {[
                  { w: 'Aur', d: 'Latin for gold — the oldest unit of financial value.' },
                  { w: '-vium', d: 'A path, a channel, a conduit.' },
                ].map((p) => (
                  <div key={p.w} className="bg-surface-bright/50 px-stack_md py-stack_md text-center">
                    <p className="font-display-lg text-2xl text-primary">{p.w}</p>
                    <p className="font-eyebrow-mono text-label-sm text-outline mt-2 leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>

              <figcaption className="text-center">
                <p className="font-display-lg text-3xl md:text-4xl text-on-surface">Aurvium</p>
                <p className="font-eyebrow-mono text-label-sm uppercase tracking-[0.24em] text-outline mt-2">The channel value moves through</p>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      <section className="bg-iron-ink py-section_v_padding text-center">
        <motion.div className="max-w-2xl mx-auto px-gutter space-y-stack_lg" {...sectionReveal}>
          <p className="font-display-lg text-headline-md leading-relaxed text-surface-bright">
            &ldquo;Serious without being stiff. Modern without being trendy. It speaks the language of CFOs but <span className="italic text-primary-fixed">thinks like an engineer.</span>&rdquo;
          </p>
          <div className="pt-stack_md">
            <Link to="/contact" className="btn-pill btn-gold">Get in Touch</Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
