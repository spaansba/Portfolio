"use client"
import React, { useState, useEffect, useRef } from "react"
import { Copy, Check } from "lucide-react"
import StringWithLink from "./StringWithLink"

type SectionHeaderTitleProps = {
  title: string
  urlHash?: string
  pathName?: string
}

function SectionHeaderTitle({ title, urlHash }: SectionHeaderTitleProps) {
  const [isCopied, setIsCopied] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Copy the url + hash to the clipboard and go to the selection
  const handleClick = () => {
    navigator.clipboard
      .writeText(window.location.origin + window.location.pathname + urlHash)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      })
      .catch((err) => {
        console.error("Failed to copy hash:", err)
      })
    if (!urlHash) {
      return
    }
    const targetElement = document.querySelector(urlHash)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    if (!urlHash || typeof window === "undefined") return

    const options = {
      root: null, // viewport
      rootMargin: "-100px 0px -70% 0px", // trigger when section's top is 100px from viewport top
      threshold: 0, // trigger as soon as any part of the element is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update URL without causing navigation
          const newUrl = `${window.location.pathname}${urlHash}`
          window.history.replaceState(null, "", newUrl)
        }
      })
    }, options)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [urlHash])

  return (
    <div
      ref={sectionRef}
      id={urlHash?.replace("#", "") || undefined}
      className={`flex items-center justify-center select-none pb-4 sm:pb-5 md:pb-10`}
    >
      <StringWithLink
        titleStyles="text-white font-bold text-center text-3xl md:text-5xl"
        title={title}
        Icon={isCopied ? Check : Copy}
        handleMouseDown={handleClick}
        ariaLabel={`Navigate to ${title} section`}
      />
    </div>
  )
}

export default SectionHeaderTitle
