"use client"
import { useRouter } from "next/navigation"

export function useGoToPageOrScroll() {
  const router = useRouter()

  return (isFirst: boolean, urlHash?: string, desiredPathName?: string) => {
    const currentPathName = window.location.pathname

    if (currentPathName === desiredPathName) {
      if (!urlHash || isFirst) {
        const contentWrapper = document.getElementById("contentwrapper")
        console.log(contentWrapper)
        if (contentWrapper) {
          contentWrapper.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      } else {
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
