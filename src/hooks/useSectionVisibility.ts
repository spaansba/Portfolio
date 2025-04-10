import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import { useEffect } from "react";
import type { NavigationPageItem } from "../../types/NavigationListItem";

export const useSectionVisibility = (isScrolling: boolean) => {
  const navigationActions = useNavigationActions();
  const selectedPage = useNavigationSelectedPage();

  const sectionVisibility = new Map();

  const updateMostVisibleSection = () => {
    const result = checkIfNewMostVisible();
    if (result && result.page && result.ratio > 0) {
      if (result.page.name !== selectedPage?.name) {
        navigationActions.setSelectedPage(result.page);
      }
    }
  };

  const checkIfNewMostVisible = (): {
    page: NavigationPageItem | null;
    ratio: number;
  } => {
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

      // Prioritize elements with higher visibility ratio
      // For similar ratios (within 0.1), prefer the one closer to center
      const isMuchMoreVisible = intersectionRatio > maxRatio + 0.1;
      const isSlightlyMoreVisible =
        intersectionRatio > maxRatio - 0.1 &&
        intersectionRatio <= maxRatio + 0.1;
      const isCloserToCenter = distanceToCenter < closestToCenterDistance;

      if (isMuchMoreVisible || (isSlightlyMoreVisible && isCloserToCenter)) {
        maxRatio = intersectionRatio;
        closestToCenterDistance = distanceToCenter;
        const page = navigationActions.getPageBasedOnHash(`#${id}`);
        newMostVisible = page;
      }
    });

    return { page: newMostVisible, ratio: maxRatio };
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        let hasChanges = false;
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            sectionVisibility.set(id, entry.intersectionRatio);
            hasChanges = true;
          } else {
            if (sectionVisibility.has(id)) {
              sectionVisibility.set(id, 0);
              hasChanges = true;
            }
          }
        });

        if (hasChanges) {
          updateMostVisibleSection();
        }
      },
      {
        root: null,
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    const sections = document.querySelectorAll("[data-observe]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [navigationActions, sectionVisibility]);
};
