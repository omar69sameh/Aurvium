// Branded figures. Data charts use dummy/illustrative numbers until real data
// is wired in — swap the `data` arrays (or the whole body) when ready.
const INK = '#1A1916';
const STONE = '#8A867E';
const GOLD = '#b8922a';
const GILT = '#D4AF5A';
const GRID = 'rgba(26,25,22,0.08)';
const MONO = "'IBM Plex Mono', monospace";

/* ── Growth: revenue that holds up as you scale ──────────────────────────── */
function GrowthChart() {
  const pts = '0,150 70,140 140,120 210,128 280,96 350,84 420,58 490,52 560,30 620,20';
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto" role="img" aria-label="Illustrative growth chart">
      {[40, 80, 120, 160].map((y) => <line key={y} x1="0" y1={y} x2="640" y2={y} stroke={GRID} strokeWidth="1" />)}
      <polyline points={`0,200 ${pts} 640,200`} fill="url(#figGold)" opacity="0.18" />
      <polyline points={pts} fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="620" cy="20" r="5" fill={GOLD} />
      <circle cx="620" cy="20" r="10" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <defs>
        <linearGradient id="figGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GILT} /><stop offset="100%" stopColor={GILT} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Flow: the system architecture we leave behind ───────────────────────── */
function FlowDiagram() {
  const nodes = [
    { x: 20, label: 'STRIPE' }, { x: 180, label: 'PIPELINE' },
    { x: 340, label: 'ERP' }, { x: 500, label: 'REPORTING' },
  ];
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto" role="img" aria-label="Illustrative system diagram">
      <line x1="120" y1="110" x2="520" y2="110" stroke={GOLD} strokeWidth="1.5" opacity="0.5" />
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y="80" width="120" height="60" rx="10" fill="none" stroke="#4e4636" strokeWidth="1.5" />
          <rect x={n.x} y="80" width="4" height="60" rx="2" fill={GOLD} />
          <text x={n.x + 62} y="115" textAnchor="middle" fontFamily={MONO} fontSize="12" letterSpacing="1.5" fill={INK}>{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── Converge: two systems reconciling to one number ─────────────────────── */
function ConvergeChart() {
  const A = [[40, 52], [160, 68], [280, 58], [400, 82], [520, 98], [600, 116]];
  const B = [[40, 152], [160, 136], [280, 148], [400, 128], [520, 120], [600, 116]];
  const line = (a) => a.map((p) => p.join(',')).join(' ');
  const gap = line(A) + ' ' + line([...B].reverse());
  return (
    <svg viewBox="0 0 640 200" className="w-full h-auto" role="img" aria-label="Illustrative reconciliation chart">
      {[50, 100, 150].map((y) => <line key={y} x1="0" y1={y} x2="640" y2={y} stroke={GRID} strokeWidth="1" />)}
      <polygon points={gap} fill={GOLD} opacity="0.1" />
      <polyline points={line(A)} fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={line(B)} fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="600" cy="116" r="5" fill={GOLD} />
      <circle cx="600" cy="116" r="11" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <text x="44" y="42" fontFamily={MONO} fontSize="10" fill={INK}>Board deck</text>
      <text x="44" y="172" fontFamily={MONO} fontSize="10" fill={GOLD}>Data warehouse</text>
    </svg>
  );
}

/* ── Waterfall: MRR bridge (New + Expansion − Contraction − Churn) ────────── */
function WaterfallChart() {
  const steps = [
    { label: 'Start', kind: 'total', v: 420 }, { label: 'New', kind: 'up', v: 85 },
    { label: 'Expan.', kind: 'up', v: 40 }, { label: 'Contr.', kind: 'down', v: 25 },
    { label: 'Churn', kind: 'down', v: 30 }, { label: 'Net', kind: 'total', v: 490 },
  ];
  const baseline = 190, top = 20, plotL = 44, plotR = 628, maxV = 560;
  const y = (val) => baseline - (val / maxV) * (baseline - top);
  const slot = (plotR - plotL) / steps.length, bw = slot * 0.52;
  let run = 0;
  const bars = steps.map((s, i) => {
    let lo, hi, color;
    if (s.kind === 'total') { lo = 0; hi = s.v; run = s.v; color = INK; }
    else if (s.kind === 'up') { lo = run; hi = run + s.v; run += s.v; color = GOLD; }
    else { lo = run; hi = run - s.v; run -= s.v; color = STONE; }
    const yTop = y(Math.max(lo, hi));
    return { x: plotL + i * slot + (slot - bw) / 2, y: yTop, h: Math.max(2, y(Math.min(lo, hi)) - yTop), color, label: s.label };
  });
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto" role="img" aria-label="Illustrative MRR waterfall">
      <line x1={plotL} y1={baseline} x2={plotR} y2={baseline} stroke={GRID} strokeWidth="1.5" />
      {bars.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={bw} height={b.h} rx="3" fill={b.color} />
          <text x={b.x + bw / 2} y={baseline + 16} textAnchor="middle" fontFamily={MONO} fontSize="9.5" fill={STONE}>{b.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── Cycle time: days-to-close shrinking each quarter ─────────────────────── */
function CycleTimeChart() {
  const data = [{ q: 'Q1', v: 12 }, { q: 'Q2', v: 10 }, { q: 'Q3', v: 7 }, { q: 'Q4', v: 5 }, { q: 'Q5', v: 4 }];
  const baseline = 190, top = 20, plotL = 44, plotR = 628, maxV = 13;
  const y = (val) => baseline - (val / maxV) * (baseline - top);
  const slot = (plotR - plotL) / data.length, bw = slot * 0.5;
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto" role="img" aria-label="Illustrative close cycle time">
      <line x1={plotL} y1={baseline} x2={plotR} y2={baseline} stroke={GRID} strokeWidth="1.5" />
      {data.map((d, i) => {
        const x = plotL + i * slot + (slot - bw) / 2, yTop = y(d.v);
        return (
          <g key={d.q}>
            <rect x={x} y={yTop} width={bw} height={baseline - yTop} rx="3" fill={i === data.length - 1 ? GOLD : INK} opacity={i === data.length - 1 ? 1 : 0.82} />
            <text x={x + bw / 2} y={yTop - 8} textAnchor="middle" fontFamily={MONO} fontSize="10" fill={INK}>{d.v}d</text>
            <text x={x + bw / 2} y={baseline + 16} textAnchor="middle" fontFamily={MONO} fontSize="9.5" fill={STONE}>{d.q}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Rev rec: deferred burndown vs recognized ramp over a contract term ───── */
function RevRecChart() {
  const months = 12, total = 120, baseline = 190, top = 20, plotL = 40, plotR = 628;
  const y = (val) => baseline - (val / total) * (baseline - top);
  const x = (m) => plotL + (m / months) * (plotR - plotL);
  const recog = [], defer = [];
  for (let m = 0; m <= months; m++) { recog.push([x(m), y(10 * m)]); defer.push([x(m), y(total - 10 * m)]); }
  const line = (a) => a.map((p) => p.join(',')).join(' ');
  const area = `${plotL},${baseline} ${line(recog)} ${plotR},${baseline}`;
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto" role="img" aria-label="Illustrative revenue recognition schedule">
      <line x1={plotL} y1={baseline} x2={plotR} y2={baseline} stroke={GRID} strokeWidth="1.5" />
      <polygon points={area} fill={GILT} opacity="0.16" />
      <polyline points={line(recog)} fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
      <polyline points={line(defer)} fill="none" stroke={INK} strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
      <text x={plotL + 4} y={y(15)} fontFamily={MONO} fontSize="10" fill={INK}>Deferred</text>
      <text x={plotR - 74} y={y(108)} fontFamily={MONO} fontSize="10" fill={GOLD}>Recognized</text>
    </svg>
  );
}

/* ── Breakpoint: manual cost rising against scale, crossing ~$10–15M ARR ─── */
function BreakpointChart() {
  const baseline = 178, top = 24, plotL = 44, plotR = 620;
  const x = (arr) => plotL + (arr / 30) * (plotR - plotL);        // $0–30M ARR
  const y = (c) => baseline - (c / 100) * (baseline - top);        // cost index
  // manual effort compounds; designed architecture stays ~flat
  const manual = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30].map((a) => [x(a), y(3 + Math.pow(a / 30, 2.1) * 100)]);
  const designed = [0, 30].map((a) => [x(a), y(14 + a * 0.5)]);
  const line = (p) => p.map((q) => q.join(',')).join(' ');
  const bandL = x(10), bandR = x(15);
  return (
    <svg viewBox="0 0 640 210" className="w-full h-auto" role="img" aria-label="Illustrative cost versus scale breakpoint">
      {[60, 110, 160].map((gy) => <line key={gy} x1={plotL} y1={gy} x2={plotR} y2={gy} stroke={GRID} strokeWidth="1" />)}
      {/* the breaking-point band */}
      <rect x={bandL} y={top} width={bandR - bandL} height={baseline - top} fill={GOLD} opacity="0.1" />
      <text x={(bandL + bandR) / 2} y={top - 8} textAnchor="middle" fontFamily={MONO} fontSize="9.5" fill={GOLD}>$10–15M ARR</text>
      <line x1={plotL} y1={baseline} x2={plotR} y2={baseline} stroke={GRID} strokeWidth="1.5" />
      <polyline points={line(designed)} fill="none" stroke={STONE} strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
      <polyline points={line(manual)} fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x={plotL + 6} y={y(92)} fontFamily={MONO} fontSize="10" fill={GOLD}>Manual reconciliation cost</text>
      <text x={plotR - 128} y={y(26)} fontFamily={MONO} fontSize="10" fill={STONE}>Designed architecture</text>
      <text x={plotL} y={baseline + 16} fontFamily={MONO} fontSize="9.5" fill={STONE}>$0</text>
      <text x={plotR - 26} y={baseline + 16} fontFamily={MONO} fontSize="9.5" fill={STONE}>$30M</text>
    </svg>
  );
}

const VARIANTS = { growth: GrowthChart, flow: FlowDiagram, converge: ConvergeChart, waterfall: WaterfallChart, cycletime: CycleTimeChart, revrec: RevRecChart, breakpoint: BreakpointChart };

export default function Figure({ variant = 'growth', label = 'Figure', caption = 'Illustrative — sample data', className = '' }) {
  const Chart = VARIANTS[variant] || GrowthChart;
  return (
    <figure className={`figure ${className}`}>
      <div className="flex items-center justify-between px-5 py-3 border-b border-outline-variant/60">
        <span className="font-eyebrow-mono text-label-sm uppercase tracking-widest text-primary">{label}</span>
        <span className="font-eyebrow-mono text-label-sm uppercase tracking-wider text-outline">Illustrative</span>
      </div>
      <div className="p-6">
        <Chart />
      </div>
      <figcaption className="px-5 pb-4 font-eyebrow-mono text-label-sm text-outline">{caption}</figcaption>
    </figure>
  );
}
