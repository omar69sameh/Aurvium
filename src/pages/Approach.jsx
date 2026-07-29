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
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: '-50px' }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
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
        <div className="mt-16 border-b hairline-gold w-full"></div>
      </section>

      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding bg-surface-container-low">
        <div className="mb-16">
          <div className="gold-dash"></div>
          <h2 className="font-display-lg text-headline-md mb-2">The Architectural Path</h2>
          <div className="w-full border-b hairline-gold"></div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div className="flex flex-col" variants={staggerItem}>
            <span className="font-eyebrow-mono text-display-lg-mobile text-primary-container opacity-50 mb-4">00</span>
            <h3 className="font-eyebrow-mono text-label-sm uppercase mb-4 font-bold">Initial Fit Conversation</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              A short video call — no preparation required. The only goal is answering three questions: is this genuinely a finance-systems problem, is Aurvium the right studio for it, and is Discovery the right first step. No consulting, no diagnosis, no solution design happens here.
            </p>
            <div className="mt-auto border-t border-outline-variant/30 pt-4 text-xs font-data-table text-on-surface-variant/80">
              <span className="block font-bold text-tertiary">Typical duration:</span> 20–30 minutes
              <br />
              <span className="block font-bold text-tertiary mt-2">You get:</span> A clear yes or no on fit — no obligation either way
            </div>
          </motion.div>

          <motion.div className="flex flex-col" variants={staggerItem}>
            <span className="font-eyebrow-mono text-display-lg-mobile text-primary-container opacity-50 mb-4">01</span>
            <h3 className="font-eyebrow-mono text-label-sm uppercase mb-4 font-bold">Discovery</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              The first paid engagement. We look at what actually exists today — Stripe configuration, spreadsheet logic, whatever ERP or lack of one — and identify exactly where it will break first as you scale, and how urgently.
            </p>
            <div className="mt-auto border-t border-outline-variant/30 pt-4 text-xs font-data-table text-on-surface-variant/80">
              <span className="block font-bold text-tertiary">You get:</span> A written findings report with a prioritized risk list
            </div>
          </motion.div>

          <motion.div className="flex flex-col" variants={staggerItem}>
            <span className="font-eyebrow-mono text-display-lg-mobile text-primary-container opacity-50 mb-4">02</span>
            <h3 className="font-eyebrow-mono text-label-sm uppercase mb-4 font-bold">Design</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              A scoped architecture for the specific systems you need — the data flow, revenue recognition logic, reporting structure, or process redesign — sized to your current stage, not a generic template.
            </p>
            <div className="mt-auto border-t border-outline-variant/30 pt-4 text-xs font-data-table text-on-surface-variant/80">
              <span className="block font-bold text-tertiary">You get:</span> A written design document and implementation plan
            </div>
          </motion.div>

          <motion.div className="flex flex-col" variants={staggerItem}>
            <span className="font-eyebrow-mono text-display-lg-mobile text-primary-container opacity-50 mb-4">03</span>
            <h3 className="font-eyebrow-mono text-label-sm uppercase mb-4 font-bold">Getting It Live</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              We configure directly within standard, vendor-supported tools. Where the work genuinely needs specialist engineering — a custom ERP build, custom integrations — we clearly define what needs to be built, work alongside the relevant implementation partner where useful, and can recommend the right type of specialist if needed. Either way, Aurvium reviews and validates that what gets built matches the design.
            </p>
            <div className="mt-auto border-t border-outline-variant/30 pt-4 text-xs font-data-table text-on-surface-variant/80">
              <span className="block font-bold text-tertiary">You get:</span> A live, documented setup, validated against the design
            </div>
          </motion.div>
        </motion.div>
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
        <p className="font-body-md text-on-surface-variant mt-8 max-w-4xl italic">
          Aurvium owns the design. It may participate in delivery, but it never promises to own every aspect of implementation. When specialist work is required, Aurvium remains the architectural authority — reviewing, guiding, and validating that the implementation reflects the intended design, whether the work is performed directly, by your team, or by an external partner.
        </p>
      </section>

      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <div className="mb-16">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Why This Way</p>
          </div>
          <h2 className="font-display-lg text-headline-md mb-2 mt-4">The alternatives, and where they fall short.</h2>
          <div className="w-full border-b hairline-gold"></div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-surface-container border-b-2 border-primary-container">
                <th className="p-6 text-left font-eyebrow-mono text-label-sm uppercase text-outline tracking-widest">Alternative</th>
                <th className="p-6 text-left font-eyebrow-mono text-label-sm uppercase text-on-surface tracking-widest">Why it falls short</th>
              </tr>
            </thead>
            <tbody className="font-data-table text-data-table">
              <tr className="border-b border-outline-variant hover:bg-surface-container transition-all duration-300">
                <td className="p-6 font-bold uppercase text-on-surface">Hiring in-house</td>
                <td className="p-6 text-on-surface-variant">
                  Slow to recruit for, expensive to carry at this stage, and the first hire is usually a generalist — not someone who&apos;s spent years specifically on finance systems design.
                </td>
              </tr>
              <tr className="border-b border-outline-variant hover:bg-surface-container transition-all duration-300">
                <td className="p-6 font-bold uppercase text-on-surface">Outsourced bookkeeping / fractional CFO firms</td>
                <td className="p-6 text-on-surface-variant">
                  They maintain the books that already exist. They don&apos;t design the systems those books depend on — so the underlying fragility never actually gets addressed.
                </td>
              </tr>
              <tr className="border-b border-outline-variant hover:bg-primary-container/5 transition-all duration-300">
                <td className="p-6 font-bold uppercase text-primary">Aurvium</td>
                <td className="p-6 text-on-surface-variant">
                  Closer to an architecture firm than an accounting firm. Engaged for a defined design, with a clear, honest plan for getting it live — not a recurring service line.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <motion.div className="relative bg-inverse-surface p-16 text-center overflow-hidden" {...sectionReveal}>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg text-surface-bright mb-8">Ready for an initial conversation?</h2>
            <p className="font-body-lg text-surface-variant/80 max-w-xl mx-auto mb-12">
              Tell us where your system is causing friction. We will schedule a short 20–30 minute fit conversation.
            </p>
            <Link to="/contact" className="btn-swipe bg-primary text-surface px-12 py-4 font-eyebrow-mono text-eyebrow-mono uppercase tracking-widest hover:text-white transition-all duration-300 inline-block active:scale-95">
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
