"use client";

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // Disable browser's scroll restoration feature
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top on mount (e.g. on refresh)
    window.scrollTo(0, 0);
  }, []);

  return null;
}
