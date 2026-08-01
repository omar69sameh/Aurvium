import { Component } from 'react';
import { Link } from 'react-router-dom';

// Catches render errors in the route tree and shows a branded fallback
// instead of a blank white screen.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Render error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <section className="max-w-max_width mx-auto px-gutter py-section_v_padding flex flex-col items-start gap-stack_md min-h-[60vh] justify-center">
        <div className="flex items-center gap-stack_sm">
          <span className="gold-dash"></span>
          <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-primary">Something broke</p>
        </div>
        <h1 className="font-display-lg text-headline-md md:text-display-lg text-on-surface max-w-2xl">
          A part of this page didn&apos;t load correctly.
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-xl">
          Try reloading the page. If it keeps happening, reach us at{' '}
          <a className="text-primary hover:underline" href="mailto:hello@aurvium.com">hello@aurvium.com</a>.
        </p>
        <div className="flex gap-stack_md mt-stack_sm">
          <Link
            to="/"
            onClick={this.handleReset}
            className="btn-swipe bg-iron-ink text-surface-container-low px-stack_lg py-4 font-label-sm text-label-sm uppercase inline-block"
          >
            <span className="relative z-10">Back to home</span>
          </Link>
        </div>
      </section>
    );
  }
}
