import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

export default function NotFound() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="page-transition"
    >
      <Seo title="Page not found" description="The page you were looking for doesn't exist." />
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding flex flex-col items-start gap-stack_md min-h-[60vh] justify-center">
        <div className="flex items-center gap-stack_sm">
          <span className="gold-dash"></span>
          <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">Error 404</p>
        </div>
        <h1 className="font-display-lg text-headline-md md:text-display-lg text-on-surface max-w-2xl">
          This page doesn&apos;t <span className="italic text-primary-container">exist.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          The address may have changed, or the page was never here. Everything else is still where you left it.
        </p>
        <div className="flex flex-wrap gap-stack_md mt-stack_sm">
          <Link to="/" className="btn-swipe bg-iron-ink text-surface-container-low px-stack_lg py-4 font-label-sm text-label-sm uppercase inline-block">
            <span className="relative z-10">Back to home</span>
          </Link>
          <Link to="/contact" className="btn-swipe border border-outline text-on-surface px-stack_lg py-4 font-label-sm text-label-sm uppercase inline-block">
            <span className="relative z-10">Get in touch →</span>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
