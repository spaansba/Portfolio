import { create } from "zustand"
import { aboutList, careerList, connectList, resourcesList } from "../data/NavigationData"
import type { NavigationPageItem } from "../../types/NavigationListItem"

type NavigationListActions = {
  setSelectedPage: (page: NavigationPageItem) => void
  getAdjacentPages: (page: NavigationPageItem) => {
    previousPage?: NavigationPageItem
    nextPage?: NavigationPageItem
  }
}

type NavigationListStore = {
  selectedPage: NavigationPageItem
  actions: NavigationListActions
  pages: NavigationList
}

type NavigationList = {
  about: NavigationPageItem[]
  career: NavigationPageItem[]
  resources: NavigationPageItem[]
  connect: NavigationPageItem[]
}

const useNavigationListStore = create<NavigationListStore>((set, get) => ({
  name: "navigation-list-store",
  pages: {
    about: aboutList,
    career: careerList,
    resources: resourcesList,
    connect: connectList,
  },
  selectedPage: aboutList[0], // Default to first item in about list
  actions: {
    setSelectedPage: (page) => {
      set(() => ({
        selectedPage: page,
      }))
    },
    getAdjacentPages: (page) => {
      const { pages } = get()
      const flattenedPages = [...pages.about, ...pages.resources, ...pages.connect]
      const pageIndex = flattenedPages.findIndex((item) => item.id === page.id)

      if (pageIndex === -1) {
        return {}
      }
      const previousPage = pageIndex > 0 ? flattenedPages[pageIndex - 1] : undefined
      const nextPage = pageIndex < flattenedPages.length ? flattenedPages[pageIndex + 1] : undefined
      return {
        previousPage: previousPage,
        nextPage: nextPage,
      }
    },
  },
}))

export const useNavigationPageList = () => useNavigationListStore((state) => state.pages)
export const useNavigationSelectedPage = () => useNavigationListStore((state) => state.selectedPage)
export const useNavigationActions = () => useNavigationListStore((state) => state.actions)
