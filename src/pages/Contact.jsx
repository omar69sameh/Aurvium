import { useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Where submissions are sent. Set this to a form endpoint (e.g. Formspree,
// Basin, or your own serverless function) to deliver straight to an inbox.
// While it's empty, the form falls back to composing an email in the visitor's
// own mail client so the primary contact path still works.
const FORM_ENDPOINT = '';
const CONTACT_EMAIL = 'hello@aurvium.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: '', email: '', company: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    // Clear a field's error as soon as the visitor starts correcting it.
    setErrors((prev) => (prev[id] ? { ...prev, [id]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your work email.';
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    if (!form.message.trim()) next.message = 'Please describe what’s breaking.';
    return next;
  };

  const submitViaMailto = () => {
    const subject = encodeURIComponent(`Diagnostic intake — ${form.company.trim() || form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany & approx. ARR: ${form.company}\n\nWhat's breaking:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'submitting') return;

    // Honeypot: a real user never fills a hidden field. Silently accept and stop.
    if (honeypot) {
      setStatus('success');
      return;
    }

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      } else {
        submitViaMailto();
      }
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Contact form submission failed:', error);
      setStatus('error');
    }
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
      <Seo
        title="Contact"
        description="Tell us where your finance system is breaking — reconciliation, recognition, or reporting. We reply within one business day."
        path="/contact"
      />
      <section className="max-w-max_width mx-auto px-gutter pt-10 pb-section_v_padding flex flex-col items-start gap-stack_md">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-outline-variant bg-surface-container-low/60">
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
                  <p className="font-body-md text-on-surface-variant leading-relaxed font-light">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7 bg-surface-container-high/70 rounded-2xl p-stack_lg md:p-10 border border-outline-variant" {...sectionReveal}>
            {status === 'success' ? (
              <div className="flex flex-col gap-stack_md h-full justify-center" role="status" aria-live="polite">
                <div className="flex items-center gap-4">
                  <div className="w-[22px] h-[2px] bg-primary"></div>
                  <span className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary tracking-[0.2em]">Received</span>
                </div>
                <h3 className="font-display-lg text-headline-md text-on-surface">Thank you — your note is on its way.</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {FORM_ENDPOINT
                    ? 'We reply within one business day to schedule the Initial Fit Conversation.'
                    : 'Your email client should have opened with the details ready to send. If it didn’t, email us directly at '}
                  {!FORM_ENDPOINT && (
                    <a className="text-primary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  )}
                  {!FORM_ENDPOINT && '.'}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-pill btn-primary w-full md:w-auto mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-stack_lg" onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from real users, catches bots. */}
                <div aria-hidden="true" className="hidden">
                  <label htmlFor="company_website">Company website</label>
                  <input
                    id="company_website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-eyebrow-mono text-label-sm uppercase text-on-surface-variant" htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="bg-transparent border-b border-outline py-3 px-0 font-body-md placeholder:text-outline-variant focus:border-primary transition-colors outline-none"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? 'true' : undefined}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    required
                  />
                  {errors.name && <p id="name-error" role="alert" className="font-body-md text-sm text-error">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-eyebrow-mono text-label-sm uppercase text-on-surface-variant" htmlFor="email">Work email</label>
                  <input
                    id="email"
                    className="bg-transparent border-b border-outline py-3 px-0 font-body-md placeholder:text-outline-variant focus:border-primary transition-colors outline-none"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && <p id="email-error" role="alert" className="font-body-md text-sm text-error">{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-eyebrow-mono text-label-sm uppercase text-on-surface-variant" htmlFor="company">Company &amp; approx. ARR</label>
                  <input
                    id="company"
                    className="bg-transparent border-b border-outline py-3 px-0 font-body-md placeholder:text-outline-variant focus:border-primary transition-colors outline-none"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-eyebrow-mono text-label-sm uppercase text-primary" htmlFor="message">What&apos;s breaking?</label>
                  <textarea
                    id="message"
                    className="bg-transparent border border-outline p-4 font-body-md placeholder:text-outline-variant focus:border-primary transition-colors resize-none outline-none"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={errors.message ? 'true' : undefined}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                  ></textarea>
                  {errors.message && <p id="message-error" role="alert" className="font-body-md text-sm text-error">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p role="alert" className="font-body-md text-sm text-error">
                    Something went wrong sending your message. Please try again, or email us at{' '}
                    <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                  </p>
                )}

                <button
                  className="btn-pill btn-primary w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
