import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Performance Optimization: Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Approach = lazy(() => import('./pages/Approach'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();

  return (
    <Layout>
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary font-eyebrow-mono tracking-widest uppercase">Loading...</div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
