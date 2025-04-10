"use client";
import React from "react";
import Image from "next/image";
import MobileHamburger from "./MobileHamburger";
import PageHeaderNavigationDisplay from "./PageHeaderNavigation";
import {
  useMobileSidebarActions,
  useIsMobileSidebarOpen,
} from "@/stores/MobileSidebarStore";
import { X } from "lucide-react";
function PageHeader() {
  const mobileSidebarActions = useMobileSidebarActions();
  const isMobileSidebarOpen = useIsMobileSidebarOpen();

  const handleHeaderClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath.endsWith("/about")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.href = window.location.origin + "/about";
    }
  };

  return (
    <>
      <div className="bg-SecondaryGray border-TertiaryGray flex items-center justify-between border-b-[1px] px-[10px] py-3">
        <button
          aria-label="Go to about me"
          className="flex cursor-pointer items-center gap-3"
          onMouseDown={handleHeaderClick}
        >
          <div className="ring-TertiaryGray relative size-12 flex-shrink-0 overflow-hidden ring-[1px]">
            <Image
              draggable={false}
              src="/images/BartSpaans.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-1.5">
              <h3 className="text-TextGray text-[14px] font-semibold">
                Frontend Developer
              </h3>
            </div>
            <div className="flex gap-2">
              <h2 className="truncate text-[18px] leading-tight font-bold text-white">
                Bart Spaans
              </h2>
            </div>
          </div>
        </button>

        <div className="flex items-center gap-1 md:gap-8">
          <PageHeaderNavigationDisplay />
          {isMobileSidebarOpen ? (
            <button
              onClick={() =>
                mobileSidebarActions.toggleMobileSidebarOpen(false)
              }
              className="hover:bg-TertiaryGray rounded-full p-2 text-white transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          ) : (
            <MobileHamburger />
          )}
        </div>
      </div>
    </>
  );
}

export default PageHeader;
