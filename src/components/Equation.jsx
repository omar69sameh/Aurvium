// Mono equation block — the most on-brand "figure" (ledger, not screen).
// Default: the reconciliation identity that underpins the investigation note.
export default function Equation({
  label = 'The reconciliation identity',
  lhs = 'System A − System B',
  terms = ['Σ (timing)', 'Σ (definition)', 'Σ (data errors)'],
  caption = 'Every discrepancy resolves into one of three buckets — fix the definition before the data.',
  className = '',
}) {
  return (
    <figure className={`figure ${className}`}>
      <div className="flex items-center justify-between px-5 py-3 border-b border-outline-variant/60">
        <span className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-primary">{label}</span>
        <span className="font-eyebrow-mono text-label-sm uppercase tracking-wider text-outline">Identity</span>
      </div>
      <div className="px-6 py-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center">
        <span className="font-eyebrow-mono text-lg md:text-2xl text-on-surface tabular-nums">{lhs}</span>
        <span className="font-eyebrow-mono text-lg md:text-2xl text-primary">=</span>
        {terms.map((t, i) => (
          <span key={t} className="flex items-center gap-x-4">
            {i > 0 && <span className="font-eyebrow-mono text-lg md:text-2xl text-primary">+</span>}
            <span className="font-eyebrow-mono text-lg md:text-2xl text-on-surface">{t}</span>
          </span>
        ))}
      </div>
      <figcaption className="px-5 pb-4 font-eyebrow-mono text-label-sm text-outline text-center">{caption}</figcaption>
    </figure>
  );
}
