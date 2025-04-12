import { useNavigationPageList } from "@/stores/NavigationListStore";
import Link from "next/link";
import React from "react";

// Add a link for every outside link in connect
function ContactLinks() {
  const pages = useNavigationPageList();
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {pages.connect
        .filter((page) => page.isOutsideLink)
        .map((page) => (
          <button
            key={page.id}
            onMouseDown={page.onMouseDown}
            aria-label={`go to ${page.name}`}
          >
            <page.icon
              size={19}
              className={`text-TextGray hover:text-fgButton transition-colors duration-300`}
            />
          </button>
        ))}
    </div>
  );
}

export default ContactLinks;
