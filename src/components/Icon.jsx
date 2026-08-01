// Inline SVG icons — replaces the render-blocking Material Symbols web font.
// Only the glyphs the app actually uses are included.
const paths = {
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrow_forward: <path d="M4 12h15M13 6l6 6-6 6" />,
  check_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </>
  ),
  check_small: <path d="M5 12.5l4 4 10-11" />,
};

export default function Icon({ name, className = '', size, strokeWidth = 1.75, ...props }) {
  const glyph = paths[name];
  if (!glyph) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {glyph}
    </svg>
  );
}
