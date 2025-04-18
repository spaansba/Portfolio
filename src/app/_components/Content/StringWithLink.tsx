"use client";
import type { LucideIcon } from "lucide-react";
import React from "react";
import FastButton from "../FastButton";

type StringWithLinkProps = {
  title: string;
  Icon: LucideIcon;
  handleMouseDown: () => void;
  titleStyles?: string;
  iconSize?: number;
  ariaLabel: string;
  isMirrored?: boolean;
};

function StringWithLink({
  title,
  Icon,
  handleMouseDown,
  titleStyles = "",
  iconSize = 20,
  ariaLabel,
  isMirrored = false,
}: StringWithLinkProps) {
  return (
    <FastButton
      className="group relative inline-flex cursor-pointer items-center"
      onClick={handleMouseDown}
      aria-label={ariaLabel || `Navigate to ${title} section`}
    >
      <div className="flex items-center">
        <h2 className={titleStyles}>{title}</h2>
        <div
          className={`text-TextGray absolute opacity-0 group-hover:opacity-100 hover:text-white ${
            isMirrored ? "right-full mr-3" : "left-full ml-3"
          } `}
        >
          <Icon size={iconSize} />
        </div>
      </div>
    </FastButton>
  );
}

export default StringWithLink;
