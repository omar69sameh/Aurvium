import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ChannelRule from '../components/ChannelRule';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const FACTS = [
  { k: '$5–30M', v: 'ARR SaaS companies' },
  { k: 'Project', v: 'Based, not retainer' },
  { k: 'Fixed', v: 'Scope & deliverable' },
  { k: 'Independent', v: 'Finance architecture studio' },
];

const PRINCIPLES = [
  { n: '01', t: 'Trace every number', d: 'Always trace a number back to its origin before trusting it.' },
  { n: '02', t: 'Definition vs Data', d: 'Separate definition problems from data problems — they need different fixes.' },
  { n: '03', t: 'Process before tool', d: 'Design the process before choosing the software.' },
  { n: '04', t: 'One Source of Truth', d: 'One source of truth before automation.' },
  { n: '05', t: 'Workaround Permanence', d: 'Every manual workaround becomes permanent if nobody owns it.' },
  { n: '06', t: 'Boring is Beautiful', d: 'Good finance systems become boring.' },
];

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

      {/* 1 — Opening statement */}
      <section className="max-w-max_width mx-auto px-gutter pt-10 pb-stack_lg">
        <div className="flex items-center gap-stack_sm">
          <span className="gold-dash"></span>
          <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary tracking-[0.28em]">Architectural Intent</p>
        </div>

        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-[1.04] mt-stack_md max-w-4xl">
          Why Aurvium <span className="italic text-stone">exists.</span>
        </h1>

        {/* 2 — The problem, as the lead narrative beat */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[62ch] mt-stack_lg">
          Aurvium is an independent finance architecture studio. Most finance problems don&apos;t start in the finance team — they start years earlier, when a definition never gets agreed on, a system evolves without anyone designing it, and a workaround quietly becomes permanent.
        </p>

        {/* facts — supporting the opening, hairline only */}
        <dl className="mt-section_v_padding_mobile grid grid-cols-2 lg:grid-cols-4 border-t border-outline-variant/60">
          {FACTS.map((f) => (
            <div key={f.v} className="border-b border-outline-variant/60 lg:border-b-0 lg:border-r last:lg:border-r-0 py-stack_lg pr-stack_md">
              <dt className="font-display-lg text-2xl md:text-3xl text-on-surface leading-none">{f.k}</dt>
              <dd className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-outline mt-3">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3 — Where it comes from, as a pull-statement */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <div className="grid lg:grid-cols-[minmax(0,14rem)_1fr] gap-stack_lg lg:gap-16 items-start">
          <div className="flex items-center gap-stack_sm lg:pt-4">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Where it comes from</p>
          </div>

          <div className="border-l-2 border-primary pl-stack_lg">
            <p className="font-display-lg text-2xl md:text-4xl leading-snug text-on-surface max-w-[42ch]">
              That pattern doesn&apos;t come from theory. It comes from watching it happen repeatedly inside growing SaaS companies — the same architectural questions surfacing every time.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[62ch] mt-stack_lg">
              After seeing it enough times, it became clear these weren&apos;t isolated operational problems. They were architecture problems. Aurvium exists to solve them deliberately, once, rather than repeatedly.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — The name, as the centrepiece */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <ChannelRule />

        <div className="flex flex-col items-center text-center mt-section_v_padding_mobile">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Why the name?</p>
          </div>
          <h2 className="font-display-lg text-headline-md md:text-display-lg mt-stack_md max-w-3xl">The channel value moves through.</h2>

          <svg width="104" height="121" viewBox="0 0 72 84" fill="none" aria-hidden="true" className="mt-section_v_padding_mobile">
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

          {/* Aur + -vium resolving into the name */}
          <div className="w-full max-w-3xl mt-stack_lg grid md:grid-cols-2 gap-stack_lg">
            {[
              { w: 'Aur', d: 'Latin for gold — the oldest unit of financial value.' },
              { w: '-vium', d: 'A path, a channel, a conduit.' },
            ].map((p) => (
              <div key={p.w} className="border-t border-outline-variant/60 pt-stack_md">
                <p className="font-display-lg text-4xl text-primary">{p.w}</p>
                <p className="font-body-md text-on-surface-variant mt-2">{p.d}</p>
              </div>
            ))}
          </div>

          <p className="font-display-lg text-5xl md:text-7xl text-on-surface mt-section_v_padding_mobile leading-none">Aurvium</p>
          <p className="font-eyebrow-mono text-label-sm uppercase tracking-[0.28em] text-outline mt-stack_md">The channel value moves through</p>

          <p className="font-body-md text-on-surface-variant max-w-[62ch] mt-stack_lg">
            Aurum is Latin for gold — the oldest unit of financial value. &quot;-vium&quot; evokes a path, a channel. Together, Aurvium is the idea that financial value should move through systems intentionally designed, not accidentally assembled.
          </p>
        </div>

        <ChannelRule className="mt-section_v_padding" />
      </section>

      {/* 5 — Principles, light numbered set */}
      <section className="max-w-max_width mx-auto px-gutter pb-section_v_padding">
        <div className="max-w-2xl">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">How We Approach a Problem</p>
          </div>
          <h2 className="font-display-lg text-headline-md mt-stack_md">A few things that don&apos;t change.</h2>
        </div>

        <ol className="mt-stack_lg grid md:grid-cols-2 lg:grid-cols-3 gap-x-stack_lg">
          {PRINCIPLES.map((p) => (
            <li key={p.n} className="group flex gap-stack_md py-stack_lg border-b border-outline-variant/50">
              <span className="font-display-lg text-4xl leading-none text-primary/25 tabular-nums shrink-0 transition-colors duration-500 group-hover:text-primary/70">
                {p.n}
              </span>
              <div>
                <h3 className="font-headline-md text-xl text-on-surface">{p.t}</h3>
                <p className="font-body-md text-on-surface-variant mt-2">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 6 — Closing quote + Get in Touch */}
      <section className="band-darkest py-section_v_padding text-center">
        <div className="max-w-3xl mx-auto px-gutter">
          <span className="gold-dash bg-primary-fixed-dim"></span>
          <p className="font-display-lg text-headline-md md:text-display-lg leading-tight text-surface-bright mt-stack_lg">
            &ldquo;Serious without being stiff. Modern without being trendy. It speaks the language of CFOs but <span className="italic text-primary-fixed">thinks like an engineer.</span>&rdquo;
          </p>
        </div>
      </section>

      <section className="band-fade-to-footer py-section_v_padding text-center">
        <div className="max-w-max_width mx-auto px-gutter">
          <Link to="/contact" className="btn-pill btn-gold">Get in Touch</Link>
        </div>
      </section>
    </motion.div>
  );
}
