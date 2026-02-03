import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MouseHalo from './components/effects/MouseHalo';
import BackToTop from './components/common/BackToTop';
import PageTransition from './components/effects/PageTransition';
import styles from './App.module.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

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
  return (
    <ThemeProvider>
      <Router>
        <div className={styles.app}>
          <MouseHalo />
          <BackToTop />
          <Navbar />
          <main className={styles.main}>
            <AnimatedRoutes />
          </main>
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
