import { create } from "zustand"
import type { NavigationBaseItem } from "../../../types/NavigationListItem"
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

type NavigationListActions = {
  setSelectedItemById: (id: string) => void
}

type NavigationListStore = {
  selectedItem: NavigationBaseItem
  actions: NavigationListActions
  items: NavigationList
}

type NavigationList = {
  about: NavigationBaseItem[]
  resources: NavigationBaseItem[]
  contact: NavigationBaseItem[]
}

const aboutList: NavigationBaseItem[] = [
  {
    id: "about-10",
    name: "About me",
    icon: Info,
  },
  {
    id: "about-20",
    name: "Biography",
    icon: User,
  },
  {
    id: "about-30",
    name: "Experience",
    icon: Calendar,
  },
  {
    id: "about-40",
    name: "Skills",
    icon: FileText,
  },
]

const contactList: NavigationBaseItem[] = [
  {
    id: "contact-10",
    name: "Email",
    icon: Mail,
  },
  {
    id: "contact-20",
    name: "Phone",
    icon: Phone,
  },
  {
    id: "contact-30",
    name: "Social Media",
    icon: Twitter,
  },
  {
    id: "contact-40",
    name: "LinkedIn",
    icon: Linkedin,
  },
]

const resourcesList: NavigationBaseItem[] = [
  {
    id: "resources-10",
    name: "Documentation",
    icon: BookOpen,
  },
  {
    id: "resources-20",
    name: "Downloads",
    icon: Download,
  },
  {
    id: "resources-30",
    name: "Useful Links",
    icon: Link,
  },
  {
    id: "resources-40",
    name: "GitHub Repository",
    icon: Github,
  },
]

const findItemById = (items: NavigationList, id: string): NavigationBaseItem => {
  const item = Object.values(items)
    .flat()
    .find((item) => item.id === id)
  return item ?? contactList[0]
}

const useNavigationListStore = create<NavigationListStore>((set) => ({
  name: "navigation-list-store",
  items: {
    about: aboutList,
    resources: resourcesList,
    contact: contactList,
  },
  selectedItem: aboutList[0], // Default to first item in about list
  actions: {
    setSelectedItemById: (id) => {
      set((state) => {
        const foundItem = findItemById(state.items, id)
        return {
          selectedItem: foundItem,
        }
      })
    },
  },
}))

export const useNavigationListItems = () => useNavigationListStore((state) => state.items)
export const useNavigationSelectedItem = () => useNavigationListStore((state) => state.selectedItem)
export const useNavigationListActions = () => useNavigationListStore((state) => state.actions)
