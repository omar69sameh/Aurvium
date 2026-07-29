import { motion } from 'framer-motion';

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

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="page-transition"
    >
      <section className="max-w-max_width mx-auto px-gutter pt-24 pb-section_v_padding flex flex-col items-start gap-stack_md">
        <div className="flex items-center gap-4">
          <div className="w-[22px] h-[2px] bg-primary"></div>
          <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary tracking-[0.2em]">Diagnostic Intake</span>
        </div>
        <h1 className="font-display-lg text-display-lg max-w-2xl leading-none">
          Tell us where <span className="italic text-primary-container">it&apos;s breaking.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
          A short description of the system that&apos;s causing pain — reconciliation, recognition, reporting — is more useful than &quot;let&apos;s chat.&quot;
        </p>
        <div className="w-full h-[1px] bg-outline-variant mt-8 border-b"></div>
      </section>


      <section className="pb-section_v_padding max-w-max_width mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant bg-surface-container-low">
          <div className="grid-hover-effect p-8 border-b md:border-b-0 md:border-r border-outline-variant flex flex-col gap-4">
            <span className="font-eyebrow-mono text-label-sm text-outline">01 / ENGAGEMENT</span>
            <h3 className="font-display-lg text-headline-md text-on-surface">1. You reach out</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">Using the form below, or directly by email. We reply within one business day.</p>
          </div>
          <div className="grid-hover-effect p-8 border-b md:border-b-0 md:border-r border-outline-variant flex flex-col gap-4">
            <span className="font-eyebrow-mono text-label-sm text-outline">02 / CALIBRATION</span>
            <h3 className="font-display-lg text-headline-md text-on-surface">2. Initial Fit Conversation</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">20–30 minutes on a video call. No pitch, no diagnosis — just whether this is a fit, on both sides.</p>
          </div>
          <div className="grid-hover-effect p-8 flex flex-col gap-4">
            <span className="font-eyebrow-mono text-label-sm text-outline">03 / ARCHITECTURE</span>
            <h3 className="font-display-lg text-headline-md text-on-surface">3. Discovery, if it&apos;s a fit</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">The first paid engagement, exactly as described on the Approach page.</p>
          </div>
        </div>
      </section>

      <section className="pb-section_v_padding max-w-max_width mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack_lg">
          <motion.div className="lg:col-span-5 flex flex-col gap-stack_lg order-first lg:order-last" {...sectionReveal}>
            <div className="border-l-2 border-primary-container pl-6 py-2">
              <h4 className="font-eyebrow-mono text-label-sm uppercase text-primary tracking-widest mb-4">What Happens Next</h4>
              <div className="flex flex-col gap-stack_md">
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  This form starts a conversation, not an engagement. The first step is a short Initial Fit Conversation — 20–30 minutes over video, no preparation required — to understand whether this is genuinely a finance-systems problem and whether Discovery is the right first step. If it is, the paid Discovery engagement begins from there.
                </p>
              </div>
            </div>
            
            <div className="border-l-2 border-primary-container pl-6 py-2">
              <h4 className="font-eyebrow-mono text-label-sm uppercase text-primary tracking-widest mb-4">Direct Contact</h4>
              <div className="flex flex-col gap-stack_md">
                <div>
                  <p className="font-eyebrow-mono text-label-sm text-outline uppercase mb-1">Email</p>
                  <a className="font-display-lg text-headline-md text-on-surface hover:text-primary transition-colors" href="mailto:hello@aurvium.com">hello@aurvium.com</a>
                </div>
                <div>
                  <p className="font-eyebrow-mono text-label-sm text-outline uppercase mb-1">Response time</p>
                  <p className="font-body-md text-on-surface-variant leading-relaxed font-light">Within one business day, to schedule the Initial Fit Conversation</p>
                </div>
                <div>
                  <p className="font-eyebrow-mono text-label-sm text-outline uppercase mb-1">Based in</p>
                  <p className="font-body-md text-on-surface-variant leading-relaxed font-light">[ City, region ]</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7 bg-surface-container-high p-stack_lg border border-outline-variant" {...sectionReveal}>
            <form className="flex flex-col gap-stack_lg" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="font-eyebrow-mono text-label-sm uppercase text-on-surface-variant" htmlFor="name">Name</label>
                <input id="name" className="bg-transparent border-b border-outline py-3 px-0 font-body-md placeholder:text-outline-variant focus:border-primary transition-colors outline-none" type="text" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-eyebrow-mono text-label-sm uppercase text-on-surface-variant" htmlFor="email">Work email</label>
                <input id="email" className="bg-transparent border-b border-outline py-3 px-0 font-body-md placeholder:text-outline-variant focus:border-primary transition-colors outline-none" type="email" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-eyebrow-mono text-label-sm uppercase text-on-surface-variant" htmlFor="company">Company &amp; approx. ARR</label>
                <input id="company" className="bg-transparent border-b border-outline py-3 px-0 font-body-md placeholder:text-outline-variant focus:border-primary transition-colors outline-none" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-eyebrow-mono text-label-sm uppercase text-primary" htmlFor="message">What&apos;s breaking?</label>
                <textarea id="message" className="bg-transparent border border-outline p-4 font-body-md placeholder:text-outline-variant focus:border-primary transition-colors resize-none outline-none" rows={5} required></textarea>
              </div>
              <button className="btn-swipe w-full md:w-max px-12 py-4 bg-on-background text-surface font-eyebrow-mono uppercase tracking-[0.2em] text-sm active:scale-95" type="submit">
                <span className="relative z-10">Send</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
