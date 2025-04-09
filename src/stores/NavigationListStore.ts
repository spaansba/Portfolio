"use client"
import { create } from "zustand"
import { aboutList, careerList, connectList, resourcesList } from "../data/NavigationData"
import type { NavigationPageItem } from "../../types/NavigationListItem"

type NavigationListActions = {
  setSelectedPage: (page: NavigationPageItem) => void
  getAdjacentCategoryPages: (page: NavigationPageItem) => {
    previousCategoryPage?: NavigationPageItem
    previousCategoryPageName?: CategoryType
    nextCategoryPage?: NavigationPageItem
    nextCategoryPageName?: CategoryType
  }
  getPageBasedOnHash: (hash: string) => NavigationPageItem
}

type NavigationListStore = {
  selectedPage: NavigationPageItem
  actions: NavigationListActions
  pages: NavigationList
}

const categoryOrder = ["about", "career", "resources", "connect"] as const
type CategoryType = (typeof categoryOrder)[number]

type NavigationList = {
  [K in CategoryType]: NavigationPageItem[]
}

const useNavigationListStore = create<NavigationListStore>((set, get) => ({
  name: "navigation-list-store",
  pages: {
    about: aboutList,
    career: careerList,
    resources: resourcesList,
    connect: connectList,
  },
  selectedPage: aboutList[0],
  actions: {
    setSelectedPage: (page) => {
      if (page.isOutsideLink) {
        return
      }

      set(() => ({
        selectedPage: page,
      }))
    },
    getAdjacentCategoryPages: (page) => {
      const { pages } = get()

      let currentCategory: CategoryType | undefined
      let currentCategoryIndex = -1

      for (let i = 0; i < categoryOrder.length; i++) {
        const category = categoryOrder[i]
        if (pages[category].some((item) => item.id === page.id)) {
          currentCategory = category
          currentCategoryIndex = i
          break
        }
      }

      if (currentCategoryIndex === -1 || currentCategory === undefined) {
        return {}
      }

      // Get previous category (if exists)
      const previousCategoryIndex = currentCategoryIndex > 0 ? currentCategoryIndex - 1 : undefined
      const previousCategory =
        previousCategoryIndex !== undefined ? categoryOrder[previousCategoryIndex] : undefined

      // Get next category (if exists)
      const nextCategoryIndex =
        currentCategoryIndex < categoryOrder.length - 1 ? currentCategoryIndex + 1 : undefined
      const nextCategory =
        nextCategoryIndex !== undefined ? categoryOrder[nextCategoryIndex] : undefined

      return {
        previousCategoryPage: previousCategory ? pages[previousCategory][0] : undefined,
        previousCategoryPageName: previousCategory,
        nextCategoryPage: nextCategory ? pages[nextCategory][0] : undefined,
        nextCategoryPageName: nextCategory,
      }
    },
    getPageBasedOnHash: (hash: string) => {
      const { pages } = get()
      const flattenedPages = [...pages.about, ...pages.career, ...pages.resources, ...pages.connect]
      const pageIndex = flattenedPages.findIndex((item) => item.hash === hash)

      return flattenedPages[pageIndex]
    },
  },
}))

export const useNavigationPageList = () => useNavigationListStore((state) => state.pages)
export const useNavigationSelectedPage = () => useNavigationListStore((state) => state.selectedPage)
export const useNavigationActions = () => useNavigationListStore((state) => state.actions)
