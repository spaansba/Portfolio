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
      // Different page navigation - use Next.js router
      if (urlHash) {
        // Store the hash to handle after navigation
        sessionStorage.setItem("scrollToHash", urlHash)
      } else {
        sessionStorage.removeItem("scrollToHash")
      }

      // Use Next.js router for navigation
      router.push(desiredPathName || "/")
    }
  }
}
