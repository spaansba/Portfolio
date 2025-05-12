"use client";
import { useNavigationActions } from "@/stores/NavigationListStore";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export function useNavigationWithScroll() {
  const router = useRouter();
  const navigationActions = useNavigationActions();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearScrollTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Reset scrolling state with timeout
  const resetScrollingState = () => {
    clearScrollTimeout();

    timeoutRef.current = setTimeout(() => {
      navigationActions.setIsScrolling(false);
      timeoutRef.current = null;
    }, 700);
  };

  const goToPageOrScroll = (urlHash?: string, desiredPathName?: string) => {
    const currentPathName = window.location.pathname;
    if (currentPathName === desiredPathName) {
      scrollPage(urlHash);
    } else {
      goToPage(urlHash, desiredPathName);
    }
  };

  const goToPage = (urlHash?: string, desiredPathName?: string) => {
    // if (urlHash) {
    //   sessionStorage.setItem("scrollToHash", urlHash);
    // }
    // router.push(desiredPathName || "/");
    if (urlHash) {
      router.push(`${desiredPathName}${urlHash}`);
    } else {
      router.push(`${desiredPathName}`);
    }
  };

  const scrollToElement = (element: Element | null) => {
    if (element) {
      navigationActions.setIsScrolling(true);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollPage = (urlHash?: string) => {
    navigationActions.setIsScrolling(true);
    if (!urlHash) {
      const contentWrapper = document.getElementById("contentwrapper");
      scrollToElement(contentWrapper);
    } else {
      const targetElement = document.querySelector(urlHash);
      scrollToElement(targetElement);
    }
    resetScrollingState();
  };

  return { goToPageOrScroll, goToPage };
}
