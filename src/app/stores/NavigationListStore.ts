import { create } from "zustand"
import {
  Info,
  User,
  Mail,
  Phone,
  Calendar,
  FileText,
  BookOpen,
  Download,
  Link,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"
import type { NavigationPageItem } from "../../../types/NavigationListItem"

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
  resources: NavigationPageItem[]
  contact: NavigationPageItem[]
}

const aboutList: NavigationPageItem[] = [
  {
    id: "about-10",
    name: "About me",
    icon: Info,
    onMouseDown: () => {},
  },
  {
    id: "about-20",
    name: "Biography",
    icon: User,
    onMouseDown: () => {},
  },
  {
    id: "about-30",
    name: "Experience",
    icon: Calendar,
    onMouseDown: () => {},
  },
  {
    id: "about-40",
    name: "Skills",
    icon: FileText,
    onMouseDown: () => {},
  },
]

const contactList: NavigationPageItem[] = [
  {
    id: "contact-10",
    name: "Email",
    icon: Mail,
    onMouseDown: () => {},
  },
  {
    id: "contact-20",
    name: "Phone",
    icon: Phone,
    onMouseDown: () => {},
  },
  {
    id: "contact-30",
    name: "Social Media",
    icon: Twitter,
    onMouseDown: () => {},
  },
  {
    id: "contact-40",
    name: "LinkedIn",
    icon: Linkedin,
    onMouseDown: () => {},
  },
]

const resourcesList: NavigationPageItem[] = [
  {
    id: "resources-10",
    name: "Documentation",
    icon: BookOpen,
    onMouseDown: () => {},
  },
  {
    id: "resources-20",
    name: "Downloads",
    icon: Download,
    onMouseDown: () => {},
  },
  {
    id: "resources-30",
    name: "Useful Links",
    icon: Link,
    onMouseDown: () => {},
  },
  {
    id: "resources-40",
    name: "GitHub Repository",
    icon: Github,
    onMouseDown: () => {},
  },
]

// Get a flattened array of all pages in the correct order
const getAllPages = (items: NavigationList): NavigationPageItem[] => {
  // Flatten all lists in the order they should appear
  return [...items.about, ...items.resources, ...items.contact]
}

const useNavigationListStore = create<NavigationListStore>((set, get) => ({
  name: "navigation-list-store",
  pages: {
    about: aboutList,
    resources: resourcesList,
    contact: contactList,
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
      const flattenedPages = [...pages.about, ...pages.resources, ...pages.contact]
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
