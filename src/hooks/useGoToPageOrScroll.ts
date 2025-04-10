"use client"
import { useRouter } from "next/navigation"

export function useGoToPageOrScroll() {
  const router = useRouter()

  return (urlHash?: string, desiredPathName?: string) => {
    const currentPathName = window.location.pathname
    if (currentPathName === desiredPathName) {
      // Same page navigation - handle smooth scrolling
      if (!urlHash) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        const targetElement = document.querySelector(urlHash)
        console.log(targetElement)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    } else {
      if (urlHash) {
        sessionStorage.setItem("scrollToHash", urlHash)
      }
      router.push(desiredPathName || "/")
    }
  }
}
