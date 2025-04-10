"use client";
import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import { useEffect, useState } from "react";
import useIsMobileDevice from "./useIsMobileDevice";
import { aboutList } from "@/data/NavigationData";
import type { NavigationPageItem } from "../../types/NavigationListItem";
import { useSectionVisibility } from "./useSectionVisibility";

export const useScrollToHash = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useSectionVisibility();
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
};
