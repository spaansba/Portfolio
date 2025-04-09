"use client"
import { useRouter } from "next/navigation"

export function useGoToPageOrScroll() {
  const router = useRouter()

  return (urlHash?: string, desiredPathName?: string) => {
    const currentPathName = window.location.pathname

    if (currentPathName === desiredPathName) {
      // Same page navigation - handle smooth scrolling
      if (!urlHash) {
        // If no hash, scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        // If hash exists, scroll to element
        const targetElement = document.querySelector(urlHash)
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
