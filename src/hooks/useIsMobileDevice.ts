import { useLayoutEffect, useRef, useState } from "react"

/**
 * Custom hook to detect if the current device is a mobile device based on screen width
 * Only triggers state updates when crossing the breakpoint threshold
 */
function useIsMobileDevice(breakpoint = 680): boolean | undefined {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
  const currentWidth = useRef(typeof window !== "undefined" ? window.innerWidth : 0)
  useLayoutEffect(() => {
    setIsMobile(currentWidth.current < breakpoint)

    const handleResize = () => {
      const windowWidth = window.innerWidth
      const wasMobile = currentWidth.current < breakpoint
      const isMobileNow = windowWidth < breakpoint

      if (wasMobile !== isMobileNow) {
        setIsMobile(isMobileNow)
      }

      currentWidth.current = windowWidth
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}

export default useIsMobileDevice
