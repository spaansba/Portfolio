"use client";
import React from "react";
import MobileHamburger from "./MobileHamburger";
import PageHeaderNavigationDisplay from "./PageHeaderNavigation";
import FastButton from "../../FastButton";
function Header({ children }: React.PropsWithChildren) {
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
        <FastButton
          aria-label="Go to about me"
          className={`flex cursor-pointer items-center gap-3`}
          onClick={handleHeaderClick}
        >
          {children}
        </FastButton>
        <div className="flex items-center gap-1 md:mr-10 md:gap-8">
          <PageHeaderNavigationDisplay />
          <MobileHamburger />
        </div>
      </div>
    </>
  );
}

export default Header;
