import { GoToPageOrScroll } from "@/helpers/GoToPageOrScroll"
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

export const aboutList: NavigationPageItem[] = [
  {
    id: "about-10",
    name: "About me",
    icon: UserCircle,
    onMouseDown: (item: NavigationPageItem) => {
      GoToPageOrScroll(item.hash, item.path)
    },
    isOutsideLink: false,
    path: "/about",
    hash: "#intro",
  },
  {
    id: "about-20",
    name: "Projects",
    icon: Package,
    onMouseDown: (item: NavigationPageItem) => {
      GoToPageOrScroll(item.hash, item.path)
    },
    isOutsideLink: false,
    path: "/about",
    hash: "#projects",
  },
  {
    id: "about-30",
    name: "Smaller Projects",
    icon: Workflow,
    onMouseDown: (item: NavigationPageItem) => {
      GoToPageOrScroll(item.hash, item.path)
    },
    isOutsideLink: false,
    path: "/about",
    hash: "#smallprojects",
  },
]

export const careerList: NavigationPageItem[] = [
  {
    id: "career-10",
    name: "Work Experience",
    icon: BriefcaseBusiness,
    onMouseDown: (item: NavigationPageItem) => {
      GoToPageOrScroll(item.hash, item.path)
    },
    isOutsideLink: false,
    path: "/career",
    hash: "#workexperience",
  },
  {
    id: "career-20",
    name: "Studies",
    icon: GraduationCap,
    onMouseDown: (item: NavigationPageItem) => {
      GoToPageOrScroll(item.hash, item.path)
    },
    isOutsideLink: false,
    path: "/career",
    hash: "#studies",
  },
]

export const resourcesList: NavigationPageItem[] = [
  {
    id: "resources-10",
    name: "Feed",
    icon: Rss,
    onMouseDown: (item: NavigationPageItem) => {
      GoToPageOrScroll(item.hash, item.path)
    },
    isOutsideLink: false,
    path: "/resources",
    hash: "#studies",
  },
]

export const connectList: NavigationPageItem[] = [
  {
    id: "connect-10",
    name: "Contact",
    icon: Mail,
    onMouseDown: () => {},
    isOutsideLink: false,
  },
  {
    id: "connect-20",
    name: "Github",
    icon: Github,
    onMouseDown: () => {
      window.open("https://github.com/spaansba", "_blank")
    },
    isOutsideLink: true,
  },
  {
    id: "connect-30",
    name: "LinkedIn",
    icon: Linkedin,
    onMouseDown: () => {
      window.open("https://www.linkedin.com/in/bart-spaans", "_blank")
    },
    isOutsideLink: true,
  },
]
