import { useNavigationActions } from "@/stores/NavigationListStore"
import { useEffect, useState } from "react"
import useIsMobileDevice from "./useIsMobileDevice"

export const useScrollToHash = () => {
  const navigationActions = useNavigationActions()
  const [isScrolling, setIsScrolling] = useState(false)
  const isMobile = useIsMobileDevice()
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollToHash")
    if (!scrollTo) {
      return
    }
    setIsScrolling(true)
    const timeoutId = setTimeout(() => {
      const targetElement = document.querySelector(scrollTo)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      sessionStorage.removeItem("scrollToHash")
      setTimeout(() => {
        setIsScrolling(false)
      }, 700)
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const sections = document.querySelectorAll("[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            const id = entry.target.id
            const page = navigationActions.getPageBasedOnHash(`#${id}`)
            navigationActions.setSelectedPage(page)
          }
        })
      },
      {
        root: null,
        rootMargin: isMobile ? "500px 0px -70% 0px" : "-400px 0px -99% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [isScrolling, navigationActions, isMobile])
}
