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

export default function Work() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="page-transition"
    >
      <section className="py-section_v_padding border-b border-outline-variant max-w-max_width mx-auto px-gutter">
        <div className="flex flex-col gap-stack_md">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">Critical Perspective</span>
          </div>
          <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface max-w-3xl">
            The thinking, <span className="italic font-light text-primary-container">not the war stories.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-stack_md">
            In the architecture of finance, operational excellence is rarely found in anecdotal "wins." It is built on rigorous first principles and a structural understanding of how capital flow impacts organizational integrity.
          </p>
        </div>
      </section>

      <section className="py-section_v_padding flex flex-col gap-section_v_padding max-w-max_width mx-auto px-gutter">
        <motion.article className="grid grid-cols-1 md:grid-cols-12 gap-gutter group" {...sectionReveal}>
          <div className="md:col-span-3 flex flex-col gap-stack_sm">
            <span className="font-eyebrow-mono text-label-sm text-primary uppercase">Pattern</span>
          </div>
          <div className="md:col-span-9 flex flex-col gap-stack_lg">
            <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">Why finance systems start breaking around $10–15M ARR</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-stack_md leading-relaxed">
              <p>Below roughly $10M ARR, most finance functions run fine on a spreadsheet, a Stripe export, and one person who understands both. That&apos;s not a failure — it&apos;s proportionate. The volume is low enough that manual reconciliation is genuinely faster than building anything more formal.</p>
              <p>Somewhere past that point, three things tend to happen at once: contract structures get more complex (multi-year deals, usage-based components, discounts that don&apos;t map cleanly to a simple monthly number), the board and investors start asking harder questions on a tighter timeline, and the volume of transactions makes manual reconciliation genuinely error-prone rather than just tedious. None of these show up as a single dramatic failure. They show up as a slow accumulation of small disagreements — this month&apos;s MRR doesn&apos;t quite match last month&apos;s methodology, an auditor asks a question nobody can answer confidently, a board slide gets corrected the week after it&apos;s presented.</p>
              <p>The mistake is treating each disagreement as its own one-off problem to patch. They&apos;re usually symptoms of the same root cause: the systems were never designed to agree with each other, because nobody had to make them agree while the company was smaller. Fixing the pattern means designing one shared definition of the metrics that matter, and one path for the data to flow — not fixing each spreadsheet error as it&apos;s discovered.</p>
            </div>
            <div className="bg-surface-container-low p-stack_lg border-l-2 border-primary-fixed-dim">
              <span className="font-eyebrow-mono text-label-sm uppercase text-primary mb-2 block tracking-widest">Principle</span>
              <p className="font-body-md text-on-surface italic">One source of truth before automation.</p>
            </div>
          </div>
          <div className="md:col-start-4 md:col-span-9 border-t border-outline-variant/30 pt-stack_md mt-stack_sm"></div>
        </motion.article>

        <motion.article className="grid grid-cols-1 md:grid-cols-12 gap-gutter group" {...sectionReveal} transition={{ delay: 0.1 }}>
          <div className="md:col-span-3 flex flex-col gap-stack_sm">
            <span className="font-eyebrow-mono text-label-sm text-primary uppercase">Investigation</span>
          </div>
          <div className="md:col-span-9 flex flex-col gap-stack_lg">
            <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">How to investigate a metrics discrepancy</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-stack_md leading-relaxed">
              <p>When two systems disagree on a number — MRR, ARR, churn, whatever it is — the instinct is to start checking the data. That&apos;s usually the wrong place to start. Data errors are real, but they&apos;re less common than they look, and chasing them first wastes time. This is the order that actually finds the root cause fastest:</p>

              <div className="grid grid-cols-1 gap-stack_md my-stack_lg">
                <div className="grid-hover-effect border border-outline-variant p-stack_md flex gap-stack_md items-start bg-surface-container-low">
                  <span className="font-data-table text-primary font-bold text-lg mt-0.5">01</span>
                  <div>
                    <h4 className="font-eyebrow-mono text-label-sm uppercase text-on-surface font-bold">Write down each system&apos;s exact definition first.</h4>
                    <p className="text-label-sm mt-1 text-on-surface-variant">Not what you assume it measures — what it&apos;s actually configured to count. &quot;MRR&quot; in a billing tool and &quot;MRR&quot; in a board deck are frequently not the same calculation, and nobody wrote that down anywhere.</p>
                  </div>
                </div>

                <div className="grid-hover-effect border border-outline-variant p-stack_md flex gap-stack_md items-start bg-surface-container-low">
                  <span className="font-data-table text-primary font-bold text-lg mt-0.5">02</span>
                  <div>
                    <h4 className="font-eyebrow-mono text-label-sm uppercase text-on-surface font-bold">Check timing before you check totals.</h4>
                    <p className="text-label-sm mt-1 text-on-surface-variant">A huge share of &quot;discrepancies&quot; are really just two systems recognizing the same event on different dates — a deal counted at signature in one place and at activation in another.</p>
                  </div>
                </div>

                <div className="grid-hover-effect border border-outline-variant p-stack_md flex gap-stack_md items-start bg-surface-container-low">
                  <span className="font-data-table text-primary font-bold text-lg mt-0.5">03</span>
                  <div>
                    <h4 className="font-eyebrow-mono text-label-sm uppercase text-on-surface font-bold">Trace one specific account through every system it touches.</h4>
                    <p className="text-label-sm mt-1 text-on-surface-variant">Not a sample, not an average — one real account, followed by hand from the CRM to the billing tool to the ledger to the report. Whatever breaks along that single path is very likely breaking everywhere.</p>
                  </div>
                </div>

                <div className="grid-hover-effect border border-outline-variant p-stack_md flex gap-stack_md items-start bg-surface-container-low">
                  <span className="font-data-table text-primary font-bold text-lg mt-0.5">04</span>
                  <div>
                    <h4 className="font-eyebrow-mono text-label-sm uppercase text-on-surface font-bold">Decide if it&apos;s a data problem or a definition problem.</h4>
                    <p className="text-label-sm mt-1 text-on-surface-variant">These need completely different fixes. A data problem needs a data fix. A definition problem needs an actual decision about which definition is correct — and until that decision gets made and documented, the discrepancy will simply reappear next quarter in a new place.</p>
                  </div>
                </div>

                <div className="grid-hover-effect border border-outline-variant p-stack_md flex gap-stack_md items-start bg-surface-container-low">
                  <span className="font-data-table text-primary font-bold text-lg mt-0.5">05</span>
                  <div>
                    <h4 className="font-eyebrow-mono text-label-sm uppercase text-on-surface font-bold">Fix the definition before you fix the data.</h4>
                    <p className="text-label-sm mt-1 text-on-surface-variant">Reconciling this month&apos;s numbers without agreeing on the definition just means doing this exact exercise again next quarter.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-stack_lg border-l-2 border-primary-fixed-dim">
              <span className="font-eyebrow-mono text-label-sm uppercase text-primary mb-2 block tracking-widest">Principle</span>
              <p className="font-body-md text-on-surface italic">Separate definition problems from data problems.</p>
            </div>
          </div>
          <div className="md:col-start-4 md:col-span-9 border-t border-outline-variant/30 pt-stack_md mt-stack_sm"></div>
        </motion.article>

        <motion.article className="grid grid-cols-1 md:grid-cols-12 gap-gutter group" {...sectionReveal} transition={{ delay: 0.2 }}>
          <div className="md:col-span-3 flex flex-col gap-stack_sm">
            <span className="font-eyebrow-mono text-label-sm text-primary uppercase">Principle</span>
          </div>
          <div className="md:col-span-9 flex flex-col gap-stack_lg">
            <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">A new ERP doesn&apos;t fix a broken finance process</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-stack_md leading-relaxed">
              <p>A common (and expensive) assumption: the reporting is unreliable because the tool is wrong, so the fix is a better tool — usually a move from spreadsheets or a lightweight system to something like NetSuite or Sage Intacct.</p>
              <p>The tool is rarely the actual problem. An ERP doesn&apos;t have opinions about how revenue should be recognized, what counts as churn, or when a deal should hit the books — it faithfully executes whatever rules and definitions it&apos;s given. If those rules were inconsistent before the migration, the new system just enforces the same inconsistency at higher cost and with a longer implementation timeline.</p>
              <p>The migrations that actually work start with the process design, not the software selection: agree on the definitions, map how money should move end to end, decide the recognition logic — and only then pick the system that can hold that design. Done in the other order, the company ends up with a more expensive spreadsheet that happens to have a login screen.</p>
            </div>
            <div className="bg-surface-container-low p-stack_lg border-l-2 border-primary-fixed-dim">
              <span className="font-eyebrow-mono text-label-sm uppercase text-primary mb-2 block tracking-widest">Principle</span>
              <p className="font-body-md text-on-surface italic">Design the process before choosing the software.</p>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="bg-surface py-section_v_padding text-on-surface border-t border-outline-variant">
        <div className="max-w-max_width mx-auto px-gutter flex flex-wrap justify-between items-center gap-6">
          <h2 className="font-headline-md text-headline-md m-0">Recognize this pattern in your own systems?</h2>
          <Link to="/contact" className="btn-swipe bg-iron-ink text-surface-container-low px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:text-white inline-block">
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
