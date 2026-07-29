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

export default function Services() {
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
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <div className="flex flex-col gap-stack_md">
          <div className="flex items-center">
            <span className="gold-dash"></span>
            <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">Services</span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl">
            What changes, <span className="italic text-tertiary">once this is fixed.</span>
          </h1>
          <p className="font-body-lg text-body-lg max-w-3xl text-on-surface-variant mt-4">
            This is built for finance teams who've outgrown spreadsheet-driven reporting and can't quite get every system to agree on the same number. Finance data usually lives across Stripe, HubSpot, a general ledger, and a dozen spreadsheets — the tools matter less than whether the system connecting them makes sense. That's true whether you're on QuickBooks today or preparing for NetSuite tomorrow.
          </p>
          <div className="w-full border-b hairline-gold mt-stack_lg"></div>
        </div>
      </section>

      {/* Pillar Grid */}
      <section className="pb-section_v_padding max-w-max_width mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack_lg">
          {/* Pillar 1 */}
          <motion.div className="grid-hover-effect bg-surface-container p-stack_lg border border-transparent flex flex-col justify-between group" {...sectionReveal}>
            <div>
              <span className="font-label-sm text-label-sm text-outline mb-4 block">01 / CHOICE</span>
              <h3 className="font-headline-md text-headline-md mb-stack_md text-on-surface">The right system, chosen once</h3>
              <p className="text-on-surface-variant mb-stack_lg font-body-md">An honest read on what you're actually running today, and what fits your size and budget — so you're not re-evaluating tools every 18 months.</p>
              <div className="border-t border-outline-variant pt-stack_md">
                <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-tertiary mb-2 block">You need this if</span>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">You're choosing between finance/billing tools and don't have someone to vet them properly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Nobody can say with confidence what your current setup can and can't handle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">You're planning an ERP move and want a second opinion before committing</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div className="grid-hover-effect bg-surface-container p-stack_lg border border-transparent flex flex-col justify-between group" {...sectionReveal} transition={{ delay: 0.1 }}>
            <div>
              <span className="font-label-sm text-label-sm text-outline mb-4 block">02 / INTEGRITY</span>
              <h3 className="font-headline-md text-headline-md mb-stack_md text-on-surface">Revenue numbers that hold up</h3>
              <p className="text-on-surface-variant mb-stack_lg font-body-md">Recognition logic designed so revenue is counted the same way everywhere it's reported — in the board deck, the ledger, and the audit file, not just wherever it was last checked.</p>
              <div className="border-t border-outline-variant pt-stack_md">
                <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-tertiary mb-2 block">You need this if</span>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Recognition is still a manual spreadsheet exercise every close</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Auditors have flagged your revenue schedule as a risk area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">You're introducing usage-based or multi-element contracts</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div className="grid-hover-effect bg-surface-container p-stack_lg border border-transparent flex flex-col justify-between group" {...sectionReveal}>
            <div>
              <span className="font-label-sm text-label-sm text-outline mb-4 block">03 / FLOW</span>
              <h3 className="font-headline-md text-headline-md mb-stack_md text-on-surface">A close without the fire drill</h3>
              <p className="text-on-surface-variant mb-stack_lg font-body-md">How money actually moves through your stack — Stripe, HubSpot, your ledger — redesigned at the exact point it breaks, instead of patched around it every quarter.</p>
              <div className="border-t border-outline-variant pt-stack_md">
                <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-tertiary mb-2 block">You need this if</span>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Stripe and your ledger disagree and nobody's sure which one is right</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Collections, AR aging, or billing exceptions are handled by memory, not process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Every close involves the same manual fire drill</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div className="grid-hover-effect bg-surface-container p-stack_lg border border-transparent flex flex-col justify-between group" {...sectionReveal} transition={{ delay: 0.1 }}>
            <div>
              <span className="font-label-sm text-label-sm text-outline mb-4 block">04 / ALIGNMENT</span>
              <h3 className="font-headline-md text-headline-md mb-stack_md text-on-surface">One number everyone trusts</h3>
              <p className="text-on-surface-variant mb-stack_lg font-body-md">KPI definitions and a reporting structure so the board deck, the data warehouse, and the audit file are finally looking at the same figure.</p>
              <div className="border-t border-outline-variant pt-stack_md">
                <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-tertiary mb-2 block">You need this if</span>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Board reporting and finance's internal numbers don't quite match</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Churn and expansion analysis gets rebuilt by hand every quarter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_small</span>
                    <span className="text-on-surface-variant font-data-table text-data-table">Nobody can explain a metric's exact definition on demand</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capability Note: AI Callout */}
      <section className="py-section_v_padding border-t border-b border-outline-variant max-w-max_width mx-auto px-gutter">
        <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-stack_lg items-center" {...sectionReveal}>
          <div className="md:col-span-4">
            <div className="flex items-center mb-stack_sm">
              <span className="gold-dash"></span>
              <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-on-surface">Capability Note</span>
            </div>
            <h2 className="font-headline-md text-headline-md">AI as Operational Infrastructure</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-body-lg text-body-lg text-on-surface-variant italic">
              We use AI extensively where it meaningfully improves finance operations — documentation, reconciliation, reporting, and workflow design. We don&apos;t sell AI projects. We use modern tools to build better finance systems, the same way we&apos;d use any other tool that actually earns its place.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Dark Principle Banner */}
      <section className="bg-iron-ink py-section_v_padding text-surface-container-low mt-section_v_padding">
        <div className="max-w-max_width mx-auto px-gutter text-center flex flex-col items-center gap-stack_lg">
          <span className="gold-dash bg-primary-fixed-dim"></span>
          <h2 className="font-display-lg text-headline-md md:text-display-lg max-w-4xl text-surface-bright">
            "We understand how finance systems work, regardless of which tools you happen to be running them on."
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface py-section_v_padding text-on-surface">
        <div className="max-w-max_width mx-auto px-gutter flex flex-wrap justify-between items-center gap-6">
          <h2 className="font-headline-md text-headline-md m-0">Not sure which of these you need?</h2>
          <Link to="/contact" className="btn-swipe bg-iron-ink text-surface-container-low px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:text-white inline-block">
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
