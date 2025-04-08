import React, { useState } from "react"
import { Copy, Check, CheckCheck } from "lucide-react"
import StringWithLink from "./StringWithLink"
import { GoToPageOrScroll } from "@/helpers/GoToPageOrScroll"

type SectionHeaderTitleProps = {
  title: string
  urlHash?: string
  pathName?: string
  showPaddingTop: boolean
}

function SectionHeaderTitle({ title, urlHash, showPaddingTop, pathName }: SectionHeaderTitleProps) {
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
    if (!urlHash || !pathName) {
      return
    }
    GoToPageOrScroll(urlHash, pathName)
  }

  return (
    <div
      className={`flex items-center justify-center select-none ${
        showPaddingTop ? "pt-8 md:pt-30" : ""
      }  pb-4 sm:pb-5 md:pb-10`}
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
