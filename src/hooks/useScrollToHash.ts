import { useEffect } from "react"

export const useScrollToHash = () => {
  useEffect(() => {
    const scrollTo = localStorage.getItem("scrollToHash")
    console.log(scrollTo)
    if (!scrollTo) {
      return
    }
    const timeoutId = setTimeout(() => {
      const targetElement = document.querySelector(scrollTo)
      console.log(targetElement)
      console.log("Target element:", targetElement)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      localStorage.removeItem("scrollToHash")
    }, 200) // 100ms delay

    // Cleanup function to clear the timeout if component unmounts
    return () => clearTimeout(timeoutId)
  }, [])
}
