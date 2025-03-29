import {
  Briefcase,
  Github,
  Globe,
  GraduationCap,
  Info,
  Linkedin,
  Mail,
  Package,
  PuzzleIcon,
  Rss,
} from "lucide-react"
import type { NavigationPageItem } from "../../types/NavigationListItem"
import { redirect } from "next/navigation"

export const aboutList: NavigationPageItem[] = [
  {
    id: "about-10",
    name: "About me",
    icon: Info,
    onMouseDown: () => {
      redirect("/about")
    },
  },
  {
    id: "about-20",
    name: "Work Experience",
    icon: Briefcase,
    onMouseDown: () => {
      redirect("/about")
    },
  },
  {
    id: "about-30",
    name: "Study",
    icon: GraduationCap,
    onMouseDown: () => {
      redirect("/about")
    },
  },
]

export const projectList: NavigationPageItem[] = [
  {
    id: "project-10",
    name: "Websites",
    icon: Globe,
    onMouseDown: () => {
      redirect("/projects")
    },
  },
  {
    id: "project-20",
    name: "Extensions",
    icon: PuzzleIcon,
    onMouseDown: () => {
      redirect("/projects")
    },
  },
  {
    id: "project-30",
    name: "Other",
    icon: Package,
    onMouseDown: () => {
      redirect("/projects")
    },
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
  },
]

export const connectList: NavigationPageItem[] = [
  {
    id: "connect-10",
    name: "Mail",
    icon: Mail,
    onMouseDown: () => {
      redirect("/connect")
    },
  },
  {
    id: "connect-20",
    name: "Github",
    icon: Github,
    onMouseDown: () => {
      redirect("/connect")
    },
  },
  {
    id: "connect-30",
    name: "LinkedIn",
    icon: Linkedin,
    onMouseDown: () => {
      redirect("/connect")
    },
  },
]
