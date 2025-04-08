import React, { useState } from "react"
import { Copy, Check } from "lucide-react"

type SectionHeaderTitleProps = {
  title: string
  urlHash?: string
  showPaddingTop: boolean
}

function SectionHeaderTitle({ title, urlHash, showPaddingTop }: SectionHeaderTitleProps) {
  const [isCopied, setIsCopied] = useState(false)

  // Copy the url + has to the clipboard and go to the selection
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

  return (
    <div
      className={`flex items-center justify-center select-none ${
        showPaddingTop ? "pt-8 md:pt-30" : ""
      }  pb-4 sm:pb-5 md:pb-10`}
    >
      <div
        className="relative inline-flex items-center group cursor-pointer"
        onMouseDown={handleClick}
        role="button"
        aria-label={`Navigate to ${title} section`}
      >
        <div className="text-white font-bold text-center text-3xl md:text-5xl mr-5">{title}</div>
        <button
          className="opacity-0 group-hover:opacity-100 text-TextGray hover:text-white"
          aria-label="Copy section URL"
        >
          {isCopied ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>
    </div>
  )
}

export default SectionHeaderTitle
