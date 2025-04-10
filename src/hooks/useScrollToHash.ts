"use client";
import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import { useEffect, useState } from "react";
import useIsMobileDevice from "./useIsMobileDevice";
import { aboutList } from "@/data/NavigationData";
import type { NavigationPageItem } from "../../types/NavigationListItem";

export const useScrollToHash = () => {
  const navigationActions = useNavigationActions();
  const [isScrolling, setIsScrolling] = useState(false);
  const isMobile = useIsMobileDevice();
  const selectedPage = useNavigationSelectedPage();

  // Cache of current intersection ratios for all sections
  const sectionVisibility = new Map();

  // Function to determine which section is most visible
  const updateMostVisibleSection = () => {
    const newMostVisible = checkIfNewMostVisible();

    if (newMostVisible && maxRatio > 0) {
      // Only update if different from current selected page
      if (newMostVisible.name !== selectedPage.name) {
        navigationActions.setSelectedPage(newMostVisible);
      }
    }

    // Update UI if we found a visible section with sufficient visibility
  };

  const checkIfNewMostVisible = (): NavigationPageItem | null => {
    const viewportHeight = window.innerHeight;
    const viewportCenter = window.scrollY + viewportHeight / 2;
    let maxRatio = 0;
    let closestToCenterDistance = Infinity; // Track distance to viewport center
    let newMostVisible: NavigationPageItem | null = null;
    // Find section with best visibility score (combination of ratio and center position)
    sectionVisibility.forEach((intersectionRatio, id) => {
      const element = document.getElementById(id);
      if (!element) return;

      // Get element's center position relative to viewport
      const rect = element.getBoundingClientRect();
      const elementCenter = window.scrollY + rect.top + rect.height / 2;
      const distanceToCenter = Math.abs(elementCenter - viewportCenter);

      console.log(`  ${id} element details:`);
      console.log(`    - ratio: ${intersectionRatio.toFixed(2)}`);
      console.log(
        `    - distance from center: ${Math.round(distanceToCenter)}px`,
      );

      // Prioritize elements with higher visibility ratio
      // For similar ratios (within 0.1), prefer the one closer to center
      const isMuchMoreVisible = intersectionRatio > maxRatio + 0.1;
      const isSlightlyMoreVisible =
        intersectionRatio > maxRatio - 0.1 &&
        intersectionRatio <= maxRatio + 0.1;
      const isCloserToCenter = distanceToCenter < closestToCenterDistance;

      console.log(`    - isMuchMoreVisible: ${isMuchMoreVisible}`);
      console.log(`    - isSlightlyMoreVisible: ${isSlightlyMoreVisible}`);
      console.log(`    - isCloserToCenter: ${isCloserToCenter}`);

      if (isMuchMoreVisible || (isSlightlyMoreVisible && isCloserToCenter)) {
        maxRatio = intersectionRatio;
        closestToCenterDistance = distanceToCenter;
        const page = navigationActions.getPageBasedOnHash(`#${id}`);
        if (page) newMostVisible = page;
      }
    });
    return newMostVisible;
  };

  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollToHash");
    if (!scrollTo) {
      return;
    }
    setIsScrolling(true);
    const timeoutId = setTimeout(() => {
      const targetElement = document.querySelector(scrollTo);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      sessionStorage.removeItem("scrollToHash");
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Configure and create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        let hasChanges = false;

        console.log("--- Intersection Observer entries ---");
        entries.forEach((entry) => {
          const id = entry.target.id;
          console.log(
            `Section: ${id}, ratio: ${entry.intersectionRatio.toFixed(2)}, isIntersecting: ${entry.isIntersecting}`,
          );

          // Update our visibility map
          if (entry.isIntersecting) {
            sectionVisibility.set(id, entry.intersectionRatio);
            hasChanges = true;
          } else {
            // If section is no longer intersecting, remove it or set to 0
            if (sectionVisibility.has(id)) {
              sectionVisibility.set(id, 0);
              hasChanges = true;
            }
          }
        });

        // Only recalculate most visible section if there were changes
        if (hasChanges) {
          updateMostVisibleSection();
        }
      },
      {
        root: null, // Use viewport instead of a specific container
        threshold: [
          0, 0.01, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
        ],
        rootMargin: "-20% 0px -20% 0px", // Focus more on the center of the viewport
      },
    );

    // Observe all sections with data-observe attribute
    const sections = document.querySelectorAll("[data-observe]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isScrolling, navigationActions, isMobile, selectedPage.name]);
};
