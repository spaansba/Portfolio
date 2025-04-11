import {
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Package,
  Rss,
  UserCircle,
  Workflow,
} from "lucide-react"
import type { NavigationPageItem } from "../../types/NavigationListItem"

// Add an id to each NavigationPageItem programmatically
function createNavigationList(
  category: string,
  items: Omit<NavigationPageItem, "id">[]
): NavigationPageItem[] {
  return items.map((item, index) => ({
    ...item,
    id: `${category}-${(index + 1) * 10}`,
  }))
}

export const aboutList = createNavigationList("about", [
  {
    name: "Intro",
    icon: UserCircle,
    isOutsideLink: false,
    path: "/about",
    hash: "#intro",
  },
  {
    name: "Projects",
    icon: Package,
    isOutsideLink: false,
    path: "/about",
    hash: "#projects",
  },
  {
    name: "Small Projects",
    icon: Workflow,
    isOutsideLink: false,
    path: "/about",
    hash: "#smallprojects",
  },
])

export const careerList = createNavigationList("career", [
  {
    name: "Work",
    icon: BriefcaseBusiness,
    isOutsideLink: false,
    path: "/career",
    hash: "#work",
  },
  {
    name: "Studies",
    icon: GraduationCap,
    isOutsideLink: false,
    path: "/career",
    hash: "#studies",
  },
])

export const resourcesList = createNavigationList("resources", [
  {
    name: "Feed",
    icon: Rss,
    isOutsideLink: false,
    path: "/resources",
    hash: "#studies",
  },
])

export const connectList = createNavigationList("connect", [
  {
    name: "Contact",
    icon: Mail,
    isOutsideLink: false,
    path: "/contact",
    hash: "#contactform",
  },
  {
    name: "Github",
    icon: Github,
    onMouseDown: () => {
      window.open("https://github.com/spaansba", "_blank")
    },
    isOutsideLink: true,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    onMouseDown: () => {
      window.open("https://www.linkedin.com/in/bart-spaans", "_blank")
    },
    isOutsideLink: true,
  },
])
