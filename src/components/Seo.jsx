// Per-page metadata. React 19 automatically hoists <title>, <meta> and <link>
// rendered anywhere in the tree into <head>, so no external helmet library
// is required. Note: this is client-side only — for crawler/social-share
// reliability the site should later be prerendered/SSG'd.
const SITE_NAME = 'Aurvium';
const SITE_URL = 'https://aurvium.com';

export default function Seo({ title, description, path = '' }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Finance Architecture`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </>
  );
}
