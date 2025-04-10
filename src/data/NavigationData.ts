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
    name: "Intro",
    icon: UserCircle,
    isOutsideLink: false,
    path: "/about",
    hash: "#intro",
  },
  {
    id: "about-20",
    name: "Projects",
    icon: Package,
    isOutsideLink: false,
    path: "/about",
    hash: "#projects",
  },
  {
    id: "about-30",
    name: "Small Projects",
    icon: Workflow,
    isOutsideLink: false,
    path: "/about",
    hash: "#smallprojects",
  },
]

export const careerList: NavigationPageItem[] = [
  {
    id: "career-10",
    name: "Work",
    icon: BriefcaseBusiness,
    isOutsideLink: false,
    path: "/career",
    hash: "#work",
  },
  {
    id: "career-20",
    name: "Studies",
    icon: GraduationCap,
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
    onMouseDown: () => {
      window.open("mailto:bartspaans96@gmail.com", "_blank")
    },
    isOutsideLink: true,
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
