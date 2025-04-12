import {
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Package,
  UserCircle,
  Workflow,
} from "lucide-react";
import type { NavigationPageItem } from "../../types/NavigationListItem";

export const categoryOrder = ["about", "career", "connect"] as const;
export type CategoryType = (typeof categoryOrder)[number];

export type NavigationList = {
  [K in CategoryType]: NavigationPageItem[];
};

// Add an id to each NavigationPageItem programmatically
function createNavigationList2(list: {
  [K in CategoryType]: Omit<NavigationPageItem, "id" | "category">[];
}): NavigationList {
  const result = {} as NavigationList;
  let index = 0;
  Object.entries(list).map(([category, items]) => {
    const typedCategory = category as CategoryType;
    result[typedCategory] = items.map((item) => {
      return {
        ...item,
        id: index++,
        category: typedCategory,
      };
    });
  });

  return result;
}

export const navigationPages: NavigationList = createNavigationList2({
  about: [
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
  ],
  career: [
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
  ],
  connect: [
    {
      name: "Contact",
      icon: Mail,
      isOutsideLink: false,
      path: "/contact",
      hash: "#contact",
    },
    {
      name: "Github",
      icon: Github,
      onMouseDown: () => {
        window.open("https://github.com/spaansba", "_blank");
      },
      isOutsideLink: true,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      onMouseDown: () => {
        window.open("https://www.linkedin.com/in/bart-spaans", "_blank");
      },
      isOutsideLink: true,
    },
  ],
});
