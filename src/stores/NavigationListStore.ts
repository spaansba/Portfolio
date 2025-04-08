import { create } from "zustand"
import { aboutList, careerList, connectList, resourcesList } from "../data/NavigationData"
import type { NavigationPageItem } from "../../types/NavigationListItem"

type NavigationListActions = {
  setSelectedPage: (page: NavigationPageItem | CategoryType) => void
  getAdjacentCategories: (page: NavigationPageItem) => {
    previousCategory?: CategoryType
    nextCategory?: CategoryType
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
      // If a category string is passed
      if (typeof page === "string") {
        const firstPageInCategory = get().pages[page as CategoryType][0]
        set(() => ({
          selectedPage: firstPageInCategory,
        }))
        return
      }

      // If a page object is passed
      if (page.isOutsideLink) {
        return
      }

      set(() => ({
        selectedPage: page,
      }))
    },
    getAdjacentCategories: (page) => {
      const { pages } = get()

      const currentCategory = categoryOrder.find((category) =>
        pages[category].some((item) => item.id === page.id)
      )

      if (!currentCategory) {
        return {}
      }

      const currentIndex = categoryOrder.indexOf(currentCategory)

      const previousCategory = currentIndex > 0 ? categoryOrder[currentIndex - 1] : undefined
      const nextCategory =
        currentIndex < categoryOrder.length - 1 ? categoryOrder[currentIndex + 1] : undefined

      return { previousCategory, nextCategory }
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
