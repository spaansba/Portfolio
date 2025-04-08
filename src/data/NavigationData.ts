import {
  UserCircle,
  Workflow,
  Package,
  FolderKanban,
  GraduationCap,
  Globe,
  Rss,
  Mail,
  Github,
  Linkedin,
  BriefcaseBusiness,
} from "lucide-react"
import type { NavigationPageItem } from "../../types/NavigationListItem"
import { redirect } from "next/navigation"

export const aboutList: NavigationPageItem[] = [
  {
    id: "about-10",
    name: "About me",
    icon: UserCircle,
    onMouseDown: () => {
      redirect("/about")
    },
    isOutsideLink: false,
  },
  {
    id: "about-20",
    name: "Projects",
    icon: Package,
    onMouseDown: () => {
      redirect("/about#mainprojects")
    },
    isOutsideLink: false,
  },
  {
    id: "about-30",
    name: "Small Projects",
    icon: Workflow,
    onMouseDown: () => {
      redirect("/about#smallprojects")
    },
    isOutsideLink: false,
  },
]

export const careerList: NavigationPageItem[] = [
  {
    id: "career-10",
    name: "Work Experience",
    icon: BriefcaseBusiness,
    onMouseDown: () => {
      redirect("/career")
    },
    isOutsideLink: false,
  },
  {
    id: "career-20",
    name: "Studies",
    icon: GraduationCap,
    onMouseDown: () => {
      redirect("/career#studies")
    },
    isOutsideLink: false,
  },
]

export const resourcesList: NavigationPageItem[] = [
  {
    id: "resources-10",
    name: "Feed",
    icon: Rss,
    onMouseDown: () => {
      redirect("/resources")
    },
    isOutsideLink: false,
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
