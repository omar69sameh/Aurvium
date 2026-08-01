import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const sections = [
  {
    heading: 'What we collect',
    body: 'When you use the contact form or email us directly, we receive the details you choose to send — your name, work email, company, approximate ARR, and the message describing what you need. We do not ask for more than that, and we collect nothing you do not actively submit.',
  },
  {
    heading: 'How we use it',
    body: 'We use your information for a single purpose: to respond to your enquiry and, if it is a fit, to scope an engagement. We do not sell it, rent it, or share it with third parties for marketing.',
  },
  {
    heading: 'How long we keep it',
    body: 'We retain correspondence only as long as needed to serve you and to meet our own record-keeping obligations. If you would like your details removed, email us and we will delete them.',
  },
  {
    heading: 'Your choices',
    body: 'You can request access to, correction of, or deletion of the personal data we hold about you at any time by contacting us at the address below.',
  },
  {
    heading: 'Contact',
    body: 'Questions about this policy or your data can be sent to hello@aurvium.com. Aurvium is based in Cairo, Egypt.',
  },
];

export default function Privacy() {
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
        title="Privacy Policy"
        description="How Aurvium handles the information you share through our contact form and email."
        path="/privacy"
      />
      <section className="max-w-max_width mx-auto px-gutter pt-24 pb-section_v_padding flex flex-col items-start gap-stack_md">
        <div className="flex items-center gap-stack_sm">
          <span className="gold-dash"></span>
          <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary tracking-[0.2em]">Privacy</span>
        </div>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-2xl leading-none">
          What we do with <span className="italic text-primary-container">your information.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
          A short, plain-language summary. This is a simple marketing site with a contact form — there is not much to it, and we keep it that way on purpose.
        </p>
        <div className="w-full h-[1px] bg-outline-variant mt-8"></div>
      </section>

      <section className="pb-section_v_padding max-w-max_width mx-auto px-gutter">
        <div className="flex flex-col gap-stack_lg max-w-2xl">
          {sections.map((section) => (
            <div key={section.heading} className="border-l-2 border-primary-container pl-6 py-2 flex flex-col gap-3">
              <h2 className="font-eyebrow-mono text-label-sm uppercase text-primary tracking-widest">{section.heading}</h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">{section.body}</p>
            </div>
          ))}
          <p className="font-eyebrow-mono text-label-sm uppercase text-outline mt-4">Last updated: August 2026</p>
        </div>
      </section>
    </motion.div>
  );
}
