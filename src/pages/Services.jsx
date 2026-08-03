import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Seo from '../components/Seo';
import Figure from '../components/Figure';

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
      <Seo
        title="Services"
        description="What changes once your finance systems are fixed — from ERP architecture and revenue recognition to MRR/ARR reporting that every system agrees on."
        path="/services"
      />
      {/* Hero Section */}
      <section className="max-w-max_width mx-auto px-gutter pt-10 pb-section_v_padding">
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

      {/* What changes — bento: each outcome self-contained, tile sizes vary */}
      <section className="max-w-max_width mx-auto px-gutter pb-section_v_padding grid md:grid-cols-3 gap-stack_md items-stretch">
        {[
          {
            n: '01 / CHOICE', title: 'The right system, chosen once',
            desc: "An honest read on what you're actually running today, and what fits your size and budget — so you're not re-evaluating tools every 18 months.",
            variant: 'flow', figLabel: 'The architecture we leave behind', figCap: 'Stripe → pipeline → ERP → reporting — illustrative',
            needs: ["You're choosing between finance/billing tools and don't have someone to vet them properly", "Nobody can say with confidence what your current setup can and can't handle", "You're planning an ERP move and want a second opinion before committing"]
          },
          {
            n: '02 / INTEGRITY', title: 'Revenue numbers that hold up',
            desc: "Recognition logic designed so revenue is counted the same way everywhere it's reported — in the board deck, the ledger, and the audit file, not just wherever it was last checked.",
            variant: 'revrec', figLabel: 'Revenue recognition schedule', figCap: 'Deferred burns down as revenue is recognized over the term — illustrative',
            needs: ["Recognition is still a manual spreadsheet exercise every close", "Auditors have flagged your revenue schedule as a risk area", "You're introducing usage-based or multi-element contracts"]
          },
          {
            n: '03 / FLOW', title: 'A close without the fire drill',
            desc: "How money actually moves through your stack — Stripe, HubSpot, your ledger — redesigned at the exact point it breaks, instead of patched around it every quarter.",
            variant: 'cycletime', figLabel: 'Days to close', figCap: 'Close cycle time, quarter over quarter — illustrative',
            needs: ["Stripe and your ledger disagree and nobody's sure which one is right", "Collections, AR aging, or billing exceptions are handled by memory, not process", "Every close involves the same manual fire drill"]
          },
          {
            n: '04 / ALIGNMENT', title: 'One number everyone trusts',
            desc: "KPI definitions and a reporting structure so the board deck, the data warehouse, and the audit file are finally looking at the same figure.",
            variant: 'converge', figLabel: 'Board deck vs. warehouse', figCap: 'Two systems reconciling to one number — illustrative',
            needs: ["Board reporting and finance's internal numbers don't quite match", "Churn and expansion analysis gets rebuilt by hand every quarter", "Nobody can explain a metric's exact definition on demand"]
          }
        ].map((p, idx) => {
          // Bento: tiles 01 and 04 run wide (text + chart side by side),
          // 02 and 03 run narrow (stacked). Varying size, not left/right rhythm.
          const wide = idx === 0 || idx === 3;
          return (
            <article
              key={p.n}
              className={`rounded-2xl border border-outline-variant/70 bg-surface-bright/40 p-stack_lg md:p-10 flex flex-col transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-[0_24px_60px_-34px_rgba(26,25,22,0.4)] ${
                wide ? 'md:col-span-2' : ''
              }`}
            >
              <div className={wide ? 'grid lg:grid-cols-2 gap-stack_lg lg:gap-12 items-center' : 'flex flex-col'}>
                <div>
                  <span className="font-label-sm text-label-sm text-outline mb-4 block">{p.n}</span>
                  <h3 className="font-headline-md text-2xl md:text-headline-md mb-stack_md text-on-surface">{p.title}</h3>
                  <p className="text-on-surface-variant mb-stack_lg font-body-md">{p.desc}</p>
                  <div className="border-t border-outline-variant pt-stack_md">
                    <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-tertiary mb-2 block">You need this if</span>
                    <ul className="space-y-2">
                      {p.needs.map((need) => (
                        <li key={need} className="flex items-start gap-2">
                          <Icon name="check_small" className="text-primary shrink-0 mt-0.5" size={18} />
                          <span className="text-on-surface-variant font-data-table text-data-table">{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Figure
                  bare
                  variant={p.variant}
                  label={p.figLabel}
                  caption={p.figCap}
                  className={wide ? 'w-full' : 'w-full mt-stack_lg'}
                />
              </div>
            </article>
          );
        })}
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

      {/* Dark Principle Banner — full-bleed band */}
      <section className="band-darkest text-surface-container-low py-section_v_padding mt-section_v_padding_mobile">
        <div className="max-w-max_width mx-auto px-gutter flex flex-col items-center text-center gap-stack_lg">
          <span className="gold-dash bg-primary-fixed-dim"></span>
          <h2 className="font-display-lg text-headline-md md:text-display-lg max-w-[68rem] text-surface-bright">
            &ldquo;We understand how finance systems work, regardless of which tools you happen to be running them on.&rdquo;
          </h2>
        </div>
      </section>

      {/* Contact Section — full-bleed dark band */}
      <section className="band-fade-to-footer text-surface-container-low py-section_v_padding">
        <div className="max-w-max_width mx-auto px-gutter flex flex-wrap justify-between items-center gap-stack_lg">
          <h2 className="font-headline-md text-headline-md m-0 text-surface-bright max-w-xl">Not sure which of these you need?</h2>
          <Link to="/contact" className="btn-pill btn-gold shrink-0">Get in Touch</Link>
        </div>
      </section>
    </motion.div>
  );
}
