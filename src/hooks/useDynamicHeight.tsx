import React, { useEffect, useState } from "react"

type DynamicHeightOptions = {
  /** Percentage of viewport height to use for calculation (e.g., 0.15 means 15% of screen height) */
  scaleFactor: number
  /** Minimum height in pixels that the element can be, regardless of screen size */
  minHeight: number
  /** Maximum height in pixels that the element can be, regardless of screen size */
  maxHeight: number
  /** Minimum screen height in pixels before the element is hidden, put to 0 if you never want to hide */
  minScreenHeight: number
}

type DynamicHeightResult = {
  height: string
  isVisible: boolean
}

/**
 * A custom hook that provides responsive height calculations based on viewport dimensions.
 * This hook dynamically adjusts an element's height based on screen size and can hide
 * the element entirely on screens smaller than a specified threshold.
 */
function useDynamicHeight({
  scaleFactor,
  minHeight,
  maxHeight,
  minScreenHeight,
}: DynamicHeightOptions): DynamicHeightResult {
  const [height, setHeight] = useState("40px")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const calculateDimensions = () => {
      const screenTooSmall = window.innerHeight < minScreenHeight
      setIsVisible(!screenTooSmall)
      const calculatedHeight = Math.round(window.innerHeight * scaleFactor)
      const constrainedHeight = Math.min(Math.max(calculatedHeight, minHeight), maxHeight)
      setHeight(`${constrainedHeight}px`)
    }
    calculateDimensions()
    window.addEventListener("resize", calculateDimensions)
    return () => window.removeEventListener("resize", calculateDimensions)
  }, [scaleFactor, minHeight, maxHeight, minScreenHeight])

  return { height, isVisible }
}

export default useDynamicHeight
