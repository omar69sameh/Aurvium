import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

// Animate on mount (not scroll) so content is always visible regardless of
// the browser's IntersectionObserver timing.
const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function Approach() {
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
        title="Approach"
        description="A defined engagement with a defined outcome: discovery, design, and getting it live — not a retainer, not a subscription."
        path="/approach"
      />
      <section className="max-w-max_width mx-auto px-gutter pt-24 pb-section_v_padding">
        <div className="max-w-3xl">
          <div className="gold-dash"></div>
          <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary mb-4">Approach</p>
          <h1 className="font-display-lg text-display-lg mb-8 leading-tight">
            A defined engagement, <span className="italic text-outline">not a retainer.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            The contact form starts a conversation, not an engagement. From there, everything runs in defined, scoped phases, with a fixed price and a fixed deliverable at each one — no ongoing service line to renew.
          </p>
        </div>

        {/* Scannable anchors — the engagement in four facts */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/50 border border-outline-variant/50">
          {[
            { k: '20–30 min', v: 'Initial fit call' },
            { k: 'Fixed', v: 'Scope & price' },
            { k: 'One', v: 'Defined outcome' },
            { k: 'No', v: 'Retainer, no subscription' },
          ].map((s) => (
            <div key={s.v} className="bg-surface-bright/40 px-stack_md py-stack_lg">
              <p className="font-display-lg text-3xl md:text-4xl text-on-surface leading-none">{s.k}</p>
              <p className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-outline mt-3">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <div className="mb-16">
          <div className="gold-dash"></div>
          <h2 className="font-display-lg text-headline-md mb-2">The Architectural Path</h2>
          <div className="w-full border-b hairline-gold"></div>
        </div>
        {/* Vertical channel timeline — the engagement on one gold spine */}
        <ol className="relative">
          {/* the channel itself */}
          <div className="absolute left-[22px] top-3 bottom-3 w-px bg-primary/35" aria-hidden="true"></div>

          {[
            {
              num: '00', title: 'Initial Fit Conversation',
              desc: 'A short video call — no preparation required. The only goal is answering three questions: is this genuinely a finance-systems problem, is Aurvium the right studio for it, and is Discovery the right first step. No consulting, no diagnosis, no solution design happens here.',
              duration: '20–30 minutes',
              gets: 'A clear yes or no on fit — no obligation either way',
            },
            {
              num: '01', title: 'Discovery',
              desc: 'The first paid engagement. We look at what actually exists today — Stripe configuration, spreadsheet logic, whatever ERP or lack of one — and identify exactly where it will break first as you scale, and how urgently.',
              gets: 'A written findings report with a prioritized risk list',
            },
            {
              num: '02', title: 'Design',
              desc: 'A scoped architecture for the specific systems you need — the data flow, revenue recognition logic, reporting structure, or process redesign — sized to your current stage, not a generic template.',
              gets: 'A written design document and implementation plan',
            },
            {
              num: '03', title: 'Getting It Live',
              desc: 'We configure directly within standard, vendor-supported tools. Where the work genuinely needs specialist engineering — a custom ERP build, custom integrations — we clearly define what needs to be built, work alongside the relevant implementation partner where useful, and can recommend the right type of specialist if needed. Either way, Aurvium reviews and validates that what gets built matches the design.',
              gets: 'A live, documented setup, validated against the design',
            },
          ].map((step) => (
            <li key={step.num} className="relative pl-16 pb-section_v_padding_mobile last:pb-0">
              {/* node on the spine */}
              <span className="absolute left-0 top-0 z-10 w-11 h-11 rounded-full bg-iron-ink text-surface-bright flex items-center justify-center font-eyebrow-mono text-sm">
                {step.num}
              </span>

              <div className="grid lg:grid-cols-[1fr_auto] gap-stack_lg lg:gap-16 items-start">
                <div className="max-w-[68ch]">
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3">{step.title}</h3>
                  <p className="font-body-md text-on-surface-variant">{step.desc}</p>
                </div>

                {/* right-side detail rail */}
                <dl className="lg:w-64 shrink-0 border-l-2 border-primary/40 pl-stack_md space-y-stack_md">
                  {step.duration && (
                    <div>
                      <dt className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-tertiary">Typical duration</dt>
                      <dd className="font-data-table text-data-table text-on-surface-variant mt-1">{step.duration}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-tertiary">You get</dt>
                    <dd className="font-data-table text-data-table text-on-surface-variant mt-1">{step.gets}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <div className="mb-12">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">The Boundary</p>
          </div>
          <h2 className="font-display-lg text-headline-md mt-4">What Aurvium owns.</h2>
          <p className="font-body-lg text-on-surface-variant mt-4 max-w-3xl">
            The same way an architect doesn&apos;t pour the concrete but remains responsible for the integrity of the design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-outline-variant">
          <motion.div className="grid-hover-effect p-stack_lg md:p-12 bg-surface-container border-b md:border-b-0 md:border-r border-outline-variant" {...sectionReveal}>
            <h3 className="font-eyebrow-mono text-label-sm uppercase mb-8 text-primary font-bold tracking-widest">Aurvium owns</h3>
            <ul className="space-y-5 font-body-md text-on-surface-variant">
              <li>Understanding the problem</li>
              <li>Designing the solution</li>
              <li>Defining the architecture</li>
              <li>Documenting the design</li>
              <li>Validating that what&apos;s built matches the design</li>
            </ul>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg md:p-12 bg-surface" {...sectionReveal} transition={{ delay: 0.1 }}>
            <h3 className="font-eyebrow-mono text-label-sm uppercase mb-8 text-secondary font-bold tracking-widest">Not necessarily</h3>
            <ul className="space-y-5 font-body-md text-on-surface-variant">
              <li>ERP implementation</li>
              <li>Software development</li>
              <li>Custom integrations</li>
              <li>Complex engineering work</li>
              <li>Vendor delivery</li>
            </ul>
          </motion.div>
        </div>
        <p className="font-body-md text-on-surface-variant mt-8 max-w-[68ch] italic">
          Aurvium owns the design. It may participate in delivery, but it never promises to own every aspect of implementation. When specialist work is required, Aurvium remains the architectural authority — reviewing, guiding, and validating that the implementation reflects the intended design, whether the work is performed directly, by your team, or by an external partner.
        </p>
      </section>

      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <div className="grid lg:grid-cols-[minmax(0,20rem)_1fr] gap-stack_lg lg:gap-16 items-start">
          {/* lead-in, beside the matrix */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-stack_sm">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Why This Way</p>
            </div>
            <h2 className="font-display-lg text-headline-md mt-4">The alternatives, and where they fall short.</h2>
          </div>

          {/* comparison matrix — Aurvium row carries the gold */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[36rem]">
              <thead>
                <tr className="border-b-2 border-primary-container">
                  <th className="py-4 pr-6 text-left font-eyebrow-mono text-label-sm uppercase text-outline tracking-widest w-1/3">Alternative</th>
                  <th className="py-4 text-left font-eyebrow-mono text-label-sm uppercase text-on-surface tracking-widest">Why it falls short</th>
                </tr>
              </thead>
              <tbody className="font-data-table text-data-table align-top">
                <tr className="border-b border-outline-variant">
                  <td className="py-6 pr-6 font-bold uppercase text-on-surface">Hiring in-house</td>
                  <td className="py-6 text-on-surface-variant">
                    Slow to recruit for, expensive to carry at this stage, and the first hire is usually a generalist — not someone who&apos;s spent years specifically on finance systems design.
                  </td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="py-6 pr-6 font-bold uppercase text-on-surface">Outsourced bookkeeping / fractional CFO firms</td>
                  <td className="py-6 text-on-surface-variant">
                    They maintain the books that already exist. They don&apos;t design the systems those books depend on — so the underlying fragility never actually gets addressed.
                  </td>
                </tr>
                <tr className="bg-primary/[0.07] border-l-2 border-primary">
                  <td className="py-6 px-6 font-bold uppercase text-primary">Aurvium</td>
                  <td className="py-6 pr-6 text-on-surface">
                    Closer to an architecture firm than an accounting firm. Engaged for a defined design, with a clear, honest plan for getting it live — not a recurring service line.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-iron-ink py-section_v_padding text-center">
        <motion.div className="max-w-max_width mx-auto px-gutter" {...sectionReveal}>
          <h2 className="font-display-lg text-headline-md md:text-display-lg text-surface-bright mb-6">Ready for an initial conversation?</h2>
          <p className="font-body-lg text-surface-variant/80 max-w-xl mx-auto mb-10">
            Tell us where your system is causing friction. We will schedule a short 20–30 minute fit conversation.
          </p>
          <Link to="/contact" className="btn-pill btn-gold">Get in Touch</Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
