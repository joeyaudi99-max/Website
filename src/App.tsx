import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/effects/PageTransition';
import styles from './App.module.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load heavy effect components to reduce initial bundle
const LoadingScreen = lazy(() => import('./components/effects/LoadingScreen'));
const MouseHalo = lazy(() => import('./components/effects/MouseHalo'));
const BackToTop = lazy(() => import('./components/common/BackToTop'));
const ToastContainer = lazy(() => import('react-toastify').then(module => ({ default: module.ToastContainer })));

// Loading fallback component
const PageLoader = () => (
  <div className={styles.pageLoader}>
    <div className={styles.spinner}></div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<PageLoader />}>
            <PageTransition><Home /></PageTransition>
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<PageLoader />}>
            <PageTransition><About /></PageTransition>
          </Suspense>
        } />
        <Route path="/portfolio" element={
          <Suspense fallback={<PageLoader />}>
            <PageTransition><Portfolio /></PageTransition>
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<PageLoader />}>
            <PageTransition><Contact /></PageTransition>
          </Suspense>
        } />
        {/* Catch-all route - redirect any unmatched paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    // Defer loading of heavy components until page is interactive
    const timer = setTimeout(() => {
      setIsInteractive(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Suspense fallback={<div />}>
        {showLoading && <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />}
      </Suspense>
      <Router>
        <div className={styles.app}>
          <Suspense fallback={null}>
            {isInteractive && <MouseHalo />}
          </Suspense>
          <Suspense fallback={null}>
            {isInteractive && <BackToTop />}
          </Suspense>
          <Navbar />
          <main className={styles.main}>
            <AnimatedRoutes />
          </main>
          <Footer />
          <Suspense fallback={null}>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              draggable
              theme="colored"
            />
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
