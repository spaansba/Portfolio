import { useWindowSize } from "@uidotdev/usehooks"
import { useState, useEffect } from "react"

/**
 * Custom hook to detect if the current device is a mobile device based on screen width
 */
function useIsMobileDevice(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (typeof width === "number") {
      setIsMobile(width < breakpoint)
    }
  }, [width, breakpoint])

  return isMobile
}

export default useIsMobileDevice
