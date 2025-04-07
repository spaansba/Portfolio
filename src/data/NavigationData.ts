import { Briefcase, Github, Globe, Info, Linkedin, Mail, PuzzleIcon, Rss } from "lucide-react"
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
    name: "Projects",
    icon: Briefcase,
    onMouseDown: () => {
      redirect("/about#mainprojects")
    },
  },
  {
    id: "about-30",
    name: "Small Projects",
    icon: Briefcase,
    onMouseDown: () => {
      redirect("/about#smallprojects")
    },
  },
]

export const careerList: NavigationPageItem[] = [
  {
    id: "career-10",
    name: "Work Experience",
    icon: Globe,
    onMouseDown: () => {
      redirect("/career")
    },
  },
  {
    id: "career-20",
    name: "Studies",
    icon: PuzzleIcon,
    onMouseDown: () => {
      redirect("/career#studies")
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
