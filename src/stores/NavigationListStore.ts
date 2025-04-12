"use client";
import { create } from "zustand";
import type { NavigationPageItem } from "../../types/NavigationListItem";
import {
  navigationPages,
  type CategoryType,
  type NavigationList,
} from "../data/NavigationData";

type NavigationListActions = {
  setSelectedPage: (page: NavigationPageItem) => void;
  getAdjacentCategoryPages: (category: CategoryType) => {
    previousCategoryPage?: NavigationPageItem;
    previousCategoryPageName?: CategoryType;
    nextCategoryPage?: NavigationPageItem;
    nextCategoryPageName?: CategoryType;
  };
  getPageBasedOnHash: (hash: string) => NavigationPageItem;
};

type NavigationListStore = {
  selectedPage: NavigationPageItem | undefined;
  actions: NavigationListActions;
  pages: NavigationList;
};

const useNavigationListStore = create<NavigationListStore>((set, get) => ({
  name: "navigation-list-store",
  pages: navigationPages,
  selectedPage: undefined, // there is no page on ssr and cant set it to about[0] for if someone comes in on /career etc
  actions: {
    setSelectedPage: (page) => {
      if (page.isOutsideLink) {
        return;
      }

      set(() => ({
        selectedPage: page,
      }));
    },
    getAdjacentCategoryPages: (category: CategoryType) => {
      const { pages } = get();
      const categories = Object.keys(pages) as CategoryType[];

      const currentCategoryIndex = categories.findIndex(
        (cat) => cat === category,
      );

      const previousCategoryName =
        currentCategoryIndex > 0
          ? (categories[currentCategoryIndex - 1] as CategoryType)
          : undefined;

      const nextCategoryName =
        currentCategoryIndex < categories.length - 1
          ? (categories[currentCategoryIndex + 1] as CategoryType)
          : undefined;

      const previousCategoryPage = previousCategoryName
        ? pages[previousCategoryName][0]
        : undefined;

      const nextCategoryPage = nextCategoryName
        ? pages[nextCategoryName][0]
        : undefined;

      return {
        previousCategoryPage,
        previousCategoryPageName: previousCategoryName,
        nextCategoryPage,
        nextCategoryPageName: nextCategoryName,
      };
    },
    getPageBasedOnHash: (hash: string) => {
      const { pages } = get();
      if (!hash) return pages.about[0]; // Default to the first about page

      const flattenedPages = [
        ...pages.about,
        ...pages.career,
        ...pages.connect,
      ];

      const pageIndex = flattenedPages.findIndex((item) => item.hash === hash);

      // Return the found page or default to the first about page if not found
      return pageIndex !== -1 ? flattenedPages[pageIndex] : pages.about[0];
    },
  },
}));

export const useNavigationPageList = () =>
  useNavigationListStore((state) => state.pages);
export const useNavigationSelectedPage = () =>
  useNavigationListStore((state) => state.selectedPage);
export const useNavigationActions = () =>
  useNavigationListStore((state) => state.actions);
