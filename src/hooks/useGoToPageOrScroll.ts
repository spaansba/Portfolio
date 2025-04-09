"use client"

import { useRouter } from "next/navigation" // Changed from next/router

export function useGoToPageOrScroll() {
  const router = useRouter()

  // Return a function to be called when needed
  return (urlHash?: string, desiredPathName?: string) => {
    const currentPathName = window.location.pathname

    if (currentPathName === desiredPathName) {
      if (!urlHash) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        // If urlHash exists, scroll to that element
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
        localStorage.setItem("scrollToHash", urlHash)
      }
      router.push(desiredPathName || "/")
    }
  }
}
