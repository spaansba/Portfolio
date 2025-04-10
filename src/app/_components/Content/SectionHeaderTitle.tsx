"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import StringWithLink from "./StringWithLink";
import useIsMobileDevice from "@/hooks/useIsMobileDevice";

type SectionHeaderTitleProps = {
  title: string;
  urlHash?: string;
};

function SectionHeaderTitle({ title, urlHash }: SectionHeaderTitleProps) {
  const [isCopied, setIsCopied] = useState(false);
  const isMobile = useIsMobileDevice();
  // Copy the url + hash to the clipboard and go to the selection
  const handleClick = () => {
    if (!isMobile) {
      navigator.clipboard
        .writeText(window.location.origin + window.location.pathname + urlHash)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy hash:", err);
        });
    }

    if (!urlHash) return;

    const targetElement = document.querySelector(urlHash);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex items-center justify-center pt-2 pb-8 select-none md:pb-10">
      <StringWithLink
        titleStyles="text-white font-bold text-center text-3xl md:text-5xl"
        title={title}
        Icon={isCopied ? Check : Copy}
        handleMouseDown={handleClick}
        ariaLabel={`Navigate to ${title} section`}
      />
    </div>
  );
}

export default SectionHeaderTitle;
