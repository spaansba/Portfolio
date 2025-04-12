import type { CategoryType } from "@/data/NavigationData";
import type { LucideIcon } from "lucide-react";

export type NavigationPageItem = {
  id: number;
  category: CategoryType;
  name: string;
  icon: LucideIcon;
  onMouseDown?: () => void;
  isOutsideLink: boolean;
  path?: string;
  hash?: string;
};
