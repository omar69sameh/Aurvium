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

// Hero animations
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const floatingDashVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  float: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, delay: 0.8, ease: "easeOut" }
  }
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1,
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Home() {
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
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding flex flex-col items-start gap-stack_lg relative overflow-hidden">
        {/* Animated background accent */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="relative z-10 flex flex-col gap-stack_sm"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-center gap-stack_sm" variants={heroItemVariants}>
            <motion.span 
              className="gold-dash"
              variants={floatingDashVariants}
              animate="visible"
              initial="hidden"
              onAnimationComplete={() => {
                // Start floating animation after initial reveal
              }}
            />
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">For Finance Teams Outgrowing Their Systems</p>
          </motion.div>
          
          <motion.h1 
            className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight"
            variants={heroItemVariants}
          >
            <motion.span className="block" variants={heroItemVariants}>
              The numbers don't agree,
            </motion.span>
            <motion.span className="block italic text-primary-container" variants={heroItemVariants}>
              and everyone has a theory why.
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p 
          className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant relative z-10"
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Trust decays when the board deck doesn't reconcile with the data warehouse. We design the technical architecture that ensures your ERP, billing, and reporting engines speak one language.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-stack_md mt-stack_sm relative z-10"
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={buttonVariants}>
            <Link to="/work" className="btn-swipe bg-iron-ink text-surface-container-low px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:text-white transition-all duration-300 block">
              <span className="relative z-10">Read our thinking</span>
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Link to="/services" className="btn-swipe border border-outline text-on-surface px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:border-primary hover:text-primary transition-all duration-300 block">
              <span className="relative z-10">What we do →</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full mt-stack_lg hairline-gold origin-left"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      </section>


      {/* Recognition Section (Sound Familiar?) */}
      <section className="bg-surface-container-low py-section_v_padding">
        <div className="max-w-max_width mx-auto px-gutter grid md:grid-cols-2 gap-stack_lg">
          <motion.div className="flex flex-col gap-stack_md" {...sectionReveal}>
            <div className="flex items-center gap-stack_sm">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Sound Familiar?</p>
            </div>
            <h2 className="font-headline-md text-headline-md">What finance looks like once it's outgrown the systems that built it.</h2>
            <p className="font-body-md text-on-surface-variant">
              The usual response is to blame the closest thing — "the controller needs to work harder," "we need better software," "we need another analyst." None of those are wrong exactly. They're just aimed at the wrong layer.
            </p>
            <p className="font-body-md text-on-surface-variant font-medium mt-2">
              These aren't separate problems. They're symptoms of one design problem — a finance system nobody ever built on purpose.
            </p>
          </motion.div>
          <motion.ul className="flex flex-col gap-stack_md border-l border-outline-variant pl-gutter" {...sectionReveal}>
            <li className="flex items-start gap-stack_md">
              <span className="gold-dash mt-3 shrink-0"></span>
              <p className="font-body-md text-on-surface">Close takes longer every quarter, not shorter.</p>
            </li>
            <li className="flex items-start gap-stack_md">
              <span className="gold-dash mt-3 shrink-0"></span>
              <p className="font-body-md text-on-surface">The board deck number and the internal number don't quite match — again.</p>
            </li>
            <li className="flex items-start gap-stack_md">
              <span className="gold-dash mt-3 shrink-0"></span>
              <p className="font-body-md text-on-surface">Nobody can state your MRR definition without checking three places first.</p>
            </li>
            <li className="flex items-start gap-stack_md">
              <span className="gold-dash mt-3 shrink-0"></span>
              <p className="font-body-md text-on-surface">The ERP conversation keeps coming up, and keeps getting tabled.</p>
            </li>
            <li className="flex items-start gap-stack_md">
              <span className="gold-dash mt-3 shrink-0"></span>
              <p className="font-body-md text-on-surface">Revenue recognition still happens by hand, in a spreadsheet, right before the close.</p>
            </li>
          </motion.ul>
        </div>
      </section>

      <div className="max-w-max_width mx-auto px-gutter"><div className="hairline-subtle w-full border-b"></div></div>

      {/* Investigation Teaser Section */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding">
        <motion.div className="bg-surface-container-high p-stack_lg md:p-section_v_padding_mobile relative overflow-hidden flex flex-col md:flex-row gap-stack_lg items-stretch" {...sectionReveal}>
          <div className="flex-1 flex flex-col gap-stack_md relative z-10">
            <div className="flex items-center gap-stack_sm">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">How We Think</p>
            </div>
            <h2 className="font-headline-md text-headline-md">Not a pitch. A way of working through the problem.</h2>
            <p className="font-body-md text-on-surface-variant max-w-lg mt-auto pt-4 border-t border-outline-variant/30">
              That's the kind of thinking Aurvium — an independent finance architecture studio — is built around.
            </p>
          </div>

          <div className="flex-1 w-full relative bg-surface p-stack_lg border border-outline-variant flex flex-col justify-center">
            <div className="flex items-center gap-stack_sm mb-4">
              <span className="gold-dash"></span>
              <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">Investigation</p>
            </div>
            <h3 className="font-headline-md text-2xl mb-4">How to investigate a metrics discrepancy</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              When two systems disagree on a number, the instinct is to start checking the data. That's usually the wrong place to start. Data errors are real, but they're less common than they look, and chasing them first wastes time…
            </p>
            <Link className="font-label-sm text-label-sm uppercase text-primary font-bold hover:underline inline-block mt-auto" to="/work">
              Read the full note →
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="max-w-max_width mx-auto px-gutter"><div className="hairline-subtle w-full border-b"></div></div>

      {/* Typical Situations (Quotes) */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding flex flex-col gap-stack_lg">
        <div className="flex items-center gap-stack_sm">
          <span className="gold-dash"></span>
          <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">Typical Situations</p>
        </div>
        <h2 className="font-headline-md text-headline-md mb-2">The kind of call we usually get.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-stack_lg">
          <motion.div className="grid-hover-effect p-stack_lg border border-outline-variant bg-surface-container-low flex flex-col gap-stack_md" {...sectionReveal}>
            <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
            <p className="font-body-md italic text-on-surface">"We're planning an ERP move and want to get the design right before we build."</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border border-outline-variant bg-surface-container-low flex flex-col gap-stack_md" {...sectionReveal} transition={{ delay: 0.1 }}>
            <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
            <p className="font-body-md italic text-on-surface">"The board deck doesn't reconcile with our internal numbers."</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border border-outline-variant bg-surface-container-low flex flex-col gap-stack_md" {...sectionReveal} transition={{ delay: 0.2 }}>
            <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
            <p className="font-body-md italic text-on-surface">"Revenue recognition has become a manual process every month-end."</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border border-outline-variant bg-surface-container-low flex flex-col gap-stack_md" {...sectionReveal} transition={{ delay: 0.3 }}>
            <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
            <p className="font-body-md italic text-on-surface">"We're heading into due diligence and the numbers need to hold up."</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border border-outline-variant bg-surface-container-low flex flex-col gap-stack_md" {...sectionReveal} transition={{ delay: 0.4 }}>
            <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
            <p className="font-body-md italic text-on-surface">"Pricing changed, and billing is more complicated than the system was built for."</p>
          </motion.div>
          <motion.div className="grid-hover-effect p-stack_lg border border-outline-variant bg-surface-container-low flex flex-col gap-stack_md" {...sectionReveal} transition={{ delay: 0.5 }}>
            <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
            <p className="font-body-md italic text-on-surface">"Reporting worked fine until it didn't — now nothing scales."</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-max_width mx-auto px-gutter"><div className="hairline-subtle w-full border-b"></div></div>

      {/* Value Pillars Grid */}
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding flex flex-col gap-stack_lg">
        <div className="flex items-center gap-stack_sm">
          <span className="gold-dash"></span>
          <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">What Changes</p>
        </div>
        <div>
          <h2 className="font-headline-md text-headline-md mb-4">What becomes permanently easier.</h2>
          <p className="font-body-lg text-on-surface-variant">Not what we do — what's different afterward.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mt-4">
          <motion.div className="grid-hover-effect flex flex-col gap-stack_md p-stack_md border border-outline-variant bg-surface-container-low" {...sectionReveal}>
            <p className="font-eyebrow-mono text-primary">01</p>
            <h3 className="font-headline-md text-2xl">The right system, chosen once</h3>
            <p className="font-body-md text-on-surface-variant">Not re-evaluated every 18 months because the last choice didn't fit.</p>
          </motion.div>
          <motion.div className="grid-hover-effect flex flex-col gap-stack_md p-stack_md border border-outline-variant bg-surface-container-low" {...sectionReveal} transition={{ delay: 0.1 }}>
            <p className="font-eyebrow-mono text-primary">02</p>
            <h3 className="font-headline-md text-2xl">Revenue numbers that hold up</h3>
            <p className="font-body-md text-on-surface-variant">In the board deck, the ledger, and the audit file — the same number, every time.</p>
          </motion.div>
          <motion.div className="grid-hover-effect flex flex-col gap-stack_md p-stack_md border border-outline-variant bg-surface-container-low" {...sectionReveal} transition={{ delay: 0.2 }}>
            <p className="font-eyebrow-mono text-primary">03</p>
            <h3 className="font-headline-md text-2xl">A close without the fire drill</h3>
            <p className="font-body-md text-on-surface-variant">The process breaks in the same place every quarter — until it's actually redesigned.</p>
          </motion.div>
          <motion.div className="grid-hover-effect flex flex-col gap-stack_md p-stack_md border border-outline-variant bg-surface-container-low" {...sectionReveal} transition={{ delay: 0.3 }}>
            <p className="font-eyebrow-mono text-primary">04</p>
            <h3 className="font-headline-md text-2xl">One number everyone trusts</h3>
            <p className="font-body-md text-on-surface-variant">The board, the warehouse, and the auditor, finally looking at the same figure.</p>
          </motion.div>
        </div>
        <div className="mt-4">
          <Link to="/services" className="btn-swipe border border-outline text-on-surface px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:border-primary hover:text-primary inline-block">
            <span>Our Approach →</span>
          </Link>
        </div>
      </section>

      {/* Approach Summary (Timeline) */}
      <section className="bg-surface-container-low py-section_v_padding">
        <div className="max-w-max_width mx-auto px-gutter flex flex-col gap-stack_lg">
          <div className="flex items-center gap-stack_sm">
            <span className="gold-dash"></span>
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-stone">How We Work</p>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md mb-4">Discovery. Design. Getting it live.</h2>
            <p className="font-body-lg text-on-surface-variant max-w-3xl">A defined engagement with a defined outcome — not a retainer, not a subscription.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-stack_lg relative mt-4">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -z-10 translate-y-[-50%]"></div>
            <motion.div className="grid-hover-effect flex flex-col gap-stack_sm bg-surface-container-low p-stack_md border border-outline-variant md:border-none" {...sectionReveal}>
              <div className="w-12 h-12 bg-iron-ink text-surface-container flex items-center justify-center font-eyebrow-mono text-lg mb-stack_md">A</div>
              <h4 className="font-headline-md text-xl">Discovery</h4>
              <p className="font-body-md text-on-surface-variant">We look at the systems you actually have — Stripe, spreadsheets, whatever ERP exists — and find exactly where they'll break first.</p>
            </motion.div>
            <motion.div className="grid-hover-effect flex flex-col gap-stack_sm bg-surface-container-low p-stack_md border border-outline-variant md:border-none" {...sectionReveal} transition={{ delay: 0.1 }}>
              <div className="w-12 h-12 bg-iron-ink text-surface-container flex items-center justify-center font-eyebrow-mono text-lg mb-stack_md">B</div>
              <h4 className="font-headline-md text-xl">Design</h4>
              <p className="font-body-md text-on-surface-variant">A scoped architecture for the data flow, recognition logic, and reporting layer your stage actually requires.</p>
            </motion.div>
            <motion.div className="grid-hover-effect flex flex-col gap-stack_sm bg-surface-container-low p-stack_md border border-outline-variant md:border-none" {...sectionReveal} transition={{ delay: 0.2 }}>
              <div className="w-12 h-12 bg-iron-ink text-surface-container flex items-center justify-center font-eyebrow-mono text-lg mb-stack_md">C</div>
              <h4 className="font-headline-md text-xl">Getting It Live</h4>
              <p className="font-body-md text-on-surface-variant">Configured directly where it's ours to configure. Where it needs specialist engineering, we stay the architectural authority — reviewing and validating the result either way.</p>
            </motion.div>
          </div>
          <div className="mt-4">
            <Link to="/approach" className="btn-swipe border border-outline text-on-surface px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:border-primary hover:text-primary inline-block">
              <span>Our Process →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Principle Banner */}
      <section className="bg-iron-ink py-section_v_padding text-surface-container-low">
        <div className="max-w-max_width mx-auto px-gutter text-center flex flex-col items-center gap-stack_lg">
          <span className="gold-dash bg-primary-fixed-dim"></span>
          <h2 className="font-display-lg text-headline-md md:text-display-lg max-w-4xl text-surface-bright">
            "We don't oversell. We deliver systems that work quietly and correctly — the way good infrastructure should."
          </h2>
        </div>
      </section>
      
      {/* Contact */}
      <section className="bg-surface py-section_v_padding text-on-surface">
        <div className="max-w-max_width mx-auto px-gutter flex flex-col gap-stack_lg">
          <h2 className="font-headline-md text-headline-md max-w-2xl">Every finance system was designed. Even the accidental ones.</h2>
          <p className="font-body-lg text-on-surface-variant">Tell us where yours might need a second look.</p>
          <div className="mt-4">
            <Link to="/contact" className="btn-swipe bg-iron-ink text-surface-container-low px-stack_lg py-4 font-label-sm text-label-sm uppercase hover:text-white inline-block">
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
