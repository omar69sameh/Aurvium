// The signature divider: two hairlines held apart by a gap — echoing the
// split-diamond mark (the "-vium" channel). Used to separate sections.
export default function ChannelRule({ className = '' }) {
  return (
    <div className={`channel-rule ${className}`} aria-hidden="true">
      <span className="ln"></span>
      <span className="gap"></span>
      <span className="ln"></span>
    </div>
  );
}
