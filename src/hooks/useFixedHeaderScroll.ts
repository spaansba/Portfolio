"use client";

import { useEffect } from "react";

/**
 * Hook to fix scrolling behavior with fixed headers
 * This ensures that when clicking on anchor links, content doesn't get hidden behind fixed header
 */
export default function useFixedHeaderScroll() {
  useEffect(() => {
    // Find all anchor links that lead to sections on the page
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    // Function to handle click events on anchors
    const handleClick = (e: Event) => {
      e.preventDefault();

      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href")?.slice(1);

      if (!targetId) return;

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get the height of the fixed header
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight + 15 : 80; // Add padding

        // Calculate position accounting for header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;

        // Scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    // Add click event listener to all internal links
    internalLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // Clean up
    return () => {
      internalLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);
}
