import React from "react"
import Image from "next/image"
import MobileHamburger from "./MobileHamburger"
import HeaderNavigationDisplay from "./PageHeaderNavigation"
function Header() {
  const handleHeaderClick = () => {
    const currentPath = window.location.pathname
    // If we are on about page scroll smoothly up, otherwise go to about page
    if (currentPath.endsWith("/about")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      window.location.href = window.location.origin + "/about"
    }
  }
  return (
    <>
      <div className="px-[10px] py-3 bg-SecondaryGray border-b-[1px] border-r-[1px] flex items-center justify-between border-TertiaryGray">
        <button
          aria-label="Go to about me"
          className="flex items-center gap-3 cursor-pointer"
          onMouseDown={handleHeaderClick}
        >
          <div className="relative size-12  overflow-hidden ring-[1px] ring-TertiaryGray flex-shrink-0">
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
            <div className="flex items-center gap-1.5 ">
              <h3 className="text-[14px] text-TextGray   font-semibold">Frontend Developer</h3>
            </div>
            <div className="flex gap-2">
              <h2 className="text-white text-[18px] font-bold leading-tight truncate">
                Bart Spaans
              </h2>
            </div>
          </div>
        </button>

        <div className="flex gap-3 md:gap-8 items-center">
          <HeaderNavigationDisplay />
          <MobileHamburger />
        </div>
      </div>
    </>
  )
}

export default Header
