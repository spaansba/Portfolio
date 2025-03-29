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
import type { NavigationPageItem } from "../../../types/NavigationListItem"

export const aboutList: NavigationPageItem[] = [
  {
    id: "about-10",
    name: "About me",
    icon: Info,
    onMouseDown: () => {},
  },
  {
    id: "about-20",
    name: "Work Experience",
    icon: Briefcase,
    onMouseDown: () => {},
  },
  {
    id: "about-30",
    name: "Study",
    icon: GraduationCap,
    onMouseDown: () => {},
  },
]

export const projectList: NavigationPageItem[] = [
  {
    id: "project-10",
    name: "Websites",
    icon: Globe,
    onMouseDown: () => {},
  },
  {
    id: "project-20",
    name: "Extensions",
    icon: PuzzleIcon,
    onMouseDown: () => {},
  },
  {
    id: "project-30",
    name: "Other",
    icon: Package,
    onMouseDown: () => {},
  },
]

export const resourcesList: NavigationPageItem[] = [
  {
    id: "resources-10",
    name: "Feed",
    icon: Rss,
    onMouseDown: () => {},
  },
]

export const connectList: NavigationPageItem[] = [
  {
    id: "connect-10",
    name: "Mail",
    icon: Mail,
    onMouseDown: () => {},
  },
  {
    id: "connect-20",
    name: "Github",
    icon: Github,
    onMouseDown: () => {},
  },
  {
    id: "connect-30",
    name: "LinkedIn",
    icon: Linkedin,
    onMouseDown: () => {},
  },
]
