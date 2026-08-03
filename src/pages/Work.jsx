import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Equation from '../components/Equation';
import Figure from '../components/Figure';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
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
      <Seo
        title="Notes"
        description="The thinking, not the war stories — first-principles notes on the architecture of finance systems."
        path="/work"
      />
      <section className="pt-10 pb-section_v_padding border-b border-outline-variant max-w-max_width mx-auto px-gutter">
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

      {/* Notes index — the issue contents */}
      <section className="max-w-max_width mx-auto px-gutter py-stack_lg border-b border-outline-variant/50">
        <p className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-outline mb-stack_md">In this issue</p>
        <ol className="grid md:grid-cols-3 gap-px bg-outline-variant/40 border border-outline-variant/40">
          {[
            { id: 'note-breaking-point', n: '01', label: 'Pattern', title: 'Why finance systems start breaking around $10–15M ARR' },
            { id: 'note-discrepancy', n: '02', label: 'Investigation', title: 'How to investigate a metrics discrepancy' },
            { id: 'note-erp', n: '03', label: 'Principle', title: "A new ERP doesn't fix a broken finance process" },
          ].map((n) => (
            <li key={n.id} className="bg-surface-bright/40">
              <a href={`#${n.id}`} className="group flex flex-col gap-2 h-full px-stack_md py-stack_lg transition-colors duration-300 hover:bg-primary/[0.06]">
                <span className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-primary">{n.n} / {n.label}</span>
                <span className="font-headline-md text-lg text-on-surface group-hover:text-primary transition-colors duration-300">{n.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-section_v_padding flex flex-col gap-section_v_padding max-w-max_width mx-auto px-gutter">
        {/* ── Note 01 ─────────────────────────────────────────────────────── */}
        <article id="note-breaking-point" className="grid lg:grid-cols-[minmax(0,18rem)_1fr] gap-stack_lg lg:gap-16 scroll-mt-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="font-eyebrow-mono text-label-sm text-primary uppercase tracking-widest">01 / Pattern</span>
            <p className="font-display-lg text-2xl md:text-3xl italic text-on-surface-variant leading-snug mt-stack_md border-l-2 border-primary pl-stack_md">
              One source of truth before automation.
            </p>
          </div>

          <div className="flex flex-col gap-stack_lg">
            <h2 className="font-headline-md text-headline-md text-on-surface max-w-[24ch]">Why finance systems start breaking around $10–15M ARR</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-stack_md leading-relaxed max-w-[68ch]">
              <p>Below roughly $10M ARR, most finance functions run fine on a spreadsheet, a Stripe export, and one person who understands both. That&apos;s not a failure — it&apos;s proportionate. The volume is low enough that manual reconciliation is genuinely faster than building anything more formal.</p>
            </div>

            <Figure variant="breakpoint" label="Where manual stops scaling" caption="Manual reconciliation cost against ARR — illustrative" className="w-full" />

            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-stack_md leading-relaxed max-w-[68ch]">
              <p>Somewhere past that point, three things tend to happen at once: contract structures get more complex (multi-year deals, usage-based components, discounts that don&apos;t map cleanly to a simple monthly number), the board and investors start asking harder questions on a tighter timeline, and the volume of transactions makes manual reconciliation genuinely error-prone rather than just tedious. None of these show up as a single dramatic failure. They show up as a slow accumulation of small disagreements — this month&apos;s MRR doesn&apos;t quite match last month&apos;s methodology, an auditor asks a question nobody can answer confidently, a board slide gets corrected the week after it&apos;s presented.</p>
              <p>The mistake is treating each disagreement as its own one-off problem to patch. They&apos;re usually symptoms of the same root cause: the systems were never designed to agree with each other, because nobody had to make them agree while the company was smaller. Fixing the pattern means designing one shared definition of the metrics that matter, and one path for the data to flow — not fixing each spreadsheet error as it&apos;s discovered.</p>
            </div>
          </div>
        </article>

        {/* ── Note 02 ─────────────────────────────────────────────────────── */}
        <article id="note-discrepancy" className="grid lg:grid-cols-[minmax(0,18rem)_1fr] gap-stack_lg lg:gap-16 scroll-mt-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="font-eyebrow-mono text-label-sm text-primary uppercase tracking-widest">02 / Investigation</span>
            <p className="font-display-lg text-2xl md:text-3xl italic text-on-surface-variant leading-snug mt-stack_md border-l-2 border-primary pl-stack_md">
              Separate definition problems from data problems.
            </p>
          </div>

          <div className="flex flex-col gap-stack_lg">
            <h2 className="font-headline-md text-headline-md text-on-surface max-w-[24ch]">How to investigate a metrics discrepancy</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-[68ch]">
              <p>When two systems disagree on a number — MRR, ARR, churn, whatever it is — the instinct is to start checking the data. That&apos;s usually the wrong place to start. Data errors are real, but they&apos;re less common than they look, and chasing them first wastes time. This is the order that actually finds the root cause fastest:</p>
            </div>

            <Equation />

            {/* the 5 steps, on a channel */}
            <ol className="relative">
              <div className="absolute left-[15px] top-3 bottom-3 w-px bg-primary/30" aria-hidden="true"></div>
              {[
                { n: '01', h: "Write down each system's exact definition first.", p: 'Not what you assume it measures — what it’s actually configured to count. “MRR” in a billing tool and “MRR” in a board deck are frequently not the same calculation, and nobody wrote that down anywhere.' },
                { n: '02', h: 'Check timing before you check totals.', p: 'A huge share of “discrepancies” are really just two systems recognizing the same event on different dates — a deal counted at signature in one place and at activation in another.' },
                { n: '03', h: 'Trace one specific account through every system it touches.', p: 'Not a sample, not an average — one real account, followed by hand from the CRM to the billing tool to the ledger to the report. Whatever breaks along that single path is very likely breaking everywhere.' },
                { n: '04', h: "Decide if it's a data problem or a definition problem.", p: 'These need completely different fixes. A data problem needs a data fix. A definition problem needs an actual decision about which definition is correct — and until that decision gets made and documented, the discrepancy will simply reappear next quarter in a new place.' },
                { n: '05', h: 'Fix the definition before you fix the data.', p: 'Reconciling this month’s numbers without agreeing on the definition just means doing this exact exercise again next quarter.' },
              ].map((s) => (
                <li key={s.n} className="relative pl-12 pb-stack_lg last:pb-0">
                  <span className="absolute left-0 top-0 z-10 w-8 h-8 rounded-full bg-iron-ink text-surface-bright flex items-center justify-center font-eyebrow-mono text-[11px]">{s.n}</span>
                  <h4 className="font-eyebrow-mono text-label-sm uppercase text-on-surface font-bold tracking-wider">{s.h}</h4>
                  <p className="font-body-md text-on-surface-variant mt-2 max-w-[64ch]">{s.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </article>

        {/* ── Note 03 ─────────────────────────────────────────────────────── */}
        <article id="note-erp" className="grid lg:grid-cols-[minmax(0,18rem)_1fr] gap-stack_lg lg:gap-16 scroll-mt-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="font-eyebrow-mono text-label-sm text-primary uppercase tracking-widest">03 / Principle</span>
            <p className="font-display-lg text-2xl md:text-3xl italic text-on-surface-variant leading-snug mt-stack_md border-l-2 border-primary pl-stack_md">
              Design the process before choosing the software.
            </p>
          </div>

          <div className="flex flex-col gap-stack_lg">
            <h2 className="font-headline-md text-headline-md text-on-surface max-w-[24ch]">A new ERP doesn&apos;t fix a broken finance process</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-stack_md leading-relaxed max-w-[68ch]">
              <p>A common (and expensive) assumption: the reporting is unreliable because the tool is wrong, so the fix is a better tool — usually a move from spreadsheets or a lightweight system to something like NetSuite or Sage Intacct.</p>
              <p>The tool is rarely the actual problem. An ERP doesn&apos;t have opinions about how revenue should be recognized, what counts as churn, or when a deal should hit the books — it faithfully executes whatever rules and definitions it&apos;s given. If those rules were inconsistent before the migration, the new system just enforces the same inconsistency at higher cost and with a longer implementation timeline.</p>
            </div>

            <Figure variant="flow" label="What the design produces" caption="One agreed path for the data — illustrative" className="w-full" />

            <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-[68ch]">
              <p>The migrations that actually work start with the process design, not the software selection: agree on the definitions, map how money should move end to end, decide the recognition logic — and only then pick the system that can hold that design. Done in the other order, the company ends up with a more expensive spreadsheet that happens to have a login screen.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="band-fade-to-footer text-surface-container-low py-section_v_padding">
        <div className="max-w-max_width mx-auto px-gutter flex flex-wrap justify-between items-center gap-stack_lg">
          <h2 className="font-headline-md text-headline-md m-0 text-surface-bright max-w-xl">Recognize this pattern in your own systems?</h2>
          <Link to="/contact" className="btn-pill btn-gold shrink-0">Get in Touch</Link>
        </div>
      </section>
    </motion.div>
  );
}
