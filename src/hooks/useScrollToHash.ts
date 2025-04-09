import { useNavigationActions } from "@/stores/NavigationListStore"
import { useEffect, useState } from "react"
import useIsMobileDevice from "./useIsMobileDevice"
import { usePathname } from "next/navigation"

export const useScrollToHash = () => {
  const navigationActions = useNavigationActions()
  const [isScrolling, setIsScrolling] = useState(false)
  const isMobile = useIsMobileDevice()
  const pathname = usePathname()

  // Handle scrolling to elements when page loads or path changes
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollToHash")
    if (!scrollTo) return

    setIsScrolling(true)

    // Small delay to ensure the DOM is ready
    const timeoutId = setTimeout(() => {
      const targetElement = document.querySelector(scrollTo)

      if (targetElement) {
        // Get the y position of the element
        const yPosition = targetElement.getBoundingClientRect().top + window.scrollY

        // Scroll to element - Adjust offset for header height
        window.scrollTo({
          top: yPosition - 73, // Header height
          behavior: "instant", // Using instant to avoid animation issues
        })

        // Update the selected page in the navigation
        const page = navigationActions.getPageBasedOnHash(scrollTo)
        if (page) {
          navigationActions.setSelectedPage(page)
        }
      }

      // Clear the stored hash
      sessionStorage.removeItem("scrollToHash")

      // Reset scrolling state
      setTimeout(() => setIsScrolling(false), 500)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname, navigationActions])

  // Handle intersection observation for updating navigation on scroll
  useEffect(() => {
    if (typeof window === "undefined" || isScrolling) return

    const sections = document.querySelectorAll("[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const page = navigationActions.getPageBasedOnHash(`#${id}`)
            if (page) {
              navigationActions.setSelectedPage(page)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: isMobile ? "-20px 0px -70% 0px" : "-100px 0px -80% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [isScrolling, isMobile, navigationActions])
}
