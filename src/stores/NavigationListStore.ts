"use client";
import { create } from "zustand";
import { aboutList, careerList, connectList } from "../data/NavigationData";
import type { NavigationPageItem } from "../../types/NavigationListItem";

type NavigationListActions = {
  setSelectedPage: (page: NavigationPageItem) => void;
  getAdjacentCategoryPages: (page: NavigationPageItem | undefined) => {
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

const categoryOrder = ["about", "career", "connect"] as const;
type CategoryType = (typeof categoryOrder)[number];

type NavigationList = {
  [K in CategoryType]: NavigationPageItem[];
};

const navigationPages: NavigationList = {
  about: aboutList,
  career: careerList,
  connect: connectList,
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
    getAdjacentCategoryPages: (page) => {
      const { pages } = get();
      if (!page) {
        return pages.about[0];
      }
      console.log(pages);
      let currentCategory: CategoryType | undefined;
      let currentCategoryIndex = -1;

      for (let i = 0; i < categoryOrder.length; i++) {
        const category = categoryOrder[i];
        if (pages[category].some((item) => item.id === page.id)) {
          currentCategory = category;
          currentCategoryIndex = i;
          break;
        }
      }

      if (currentCategoryIndex === -1 || currentCategory === undefined) {
        return {};
      }

      const previousCategoryIndex =
        currentCategoryIndex > 0 ? currentCategoryIndex - 1 : undefined;
      const previousCategory =
        previousCategoryIndex !== undefined
          ? categoryOrder[previousCategoryIndex]
          : undefined;

      const nextCategoryIndex =
        currentCategoryIndex < categoryOrder.length - 1
          ? currentCategoryIndex + 1
          : undefined;
      const nextCategory =
        nextCategoryIndex !== undefined
          ? categoryOrder[nextCategoryIndex]
          : undefined;

      console.log(previousCategoryIndex + " previouscategoryindex");
      console.log(previousCategory + " previousCategory");
      console.log(nextCategoryIndex + " nextCategoryIndex");
      console.log(nextCategory + " nextCategory");

      return {
        previousCategoryPage: previousCategory
          ? pages[previousCategory][0]
          : undefined,
        previousCategoryPageName: previousCategory,
        nextCategoryPage: nextCategory ? pages[nextCategory][0] : undefined,
        nextCategoryPageName: nextCategory,
      };
    },
    getPageBasedOnHash: (hash: string) => {
      if (!hash) return aboutList[0]; // Default to the first about page

      const { pages } = get();
      const flattenedPages = [
        ...pages.about,
        ...pages.career,
        ...pages.connect,
      ];
      const pageIndex = flattenedPages.findIndex((item) => item.hash === hash);

      // Return the found page or default to the first about page if not found
      return pageIndex !== -1 ? flattenedPages[pageIndex] : aboutList[0];
    },
  },
}));

export const useNavigationPageList = () =>
  useNavigationListStore((state) => state.pages);
export const useNavigationSelectedPage = () =>
  useNavigationListStore((state) => state.selectedPage);
export const useNavigationActions = () =>
  useNavigationListStore((state) => state.actions);
