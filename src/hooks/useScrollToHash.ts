"use client"
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
      }, 300)
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const sections = document.querySelectorAll("[data-observe]")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          const id = entry.target.id
          console.log(id)
          const page = navigationActions.getPageBasedOnHash(`#${id}`)
          navigationActions.setSelectedPage(page)
        }
      })
    })

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
