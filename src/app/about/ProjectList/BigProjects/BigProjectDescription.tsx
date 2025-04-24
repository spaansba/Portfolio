"use client";
import FastButton from "@/app/_components/FastButton";
import { useState } from "react";

type BigProjectDescriptionProps = {
  description: string[];
};

function BigProjectDescription({ description }: BigProjectDescriptionProps) {
  const [showButton] = useState(description.length > 1);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-white">
      <p className="text-base">{description[0]}</p>

      {showButton && (
        <div
          className={`transition-all ease-in-out ${expanded ? "max-h-[1000px] opacity-100 duration-500" : "max-h-0 overflow-hidden opacity-0 duration-300"}`}
        >
          {description.slice(1).map((paragraph, index) => (
            <p key={index} className="mt-2 text-base">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {showButton && (
        <FastButton
          onClick={() => setExpanded(!expanded)}
          className="text-fgButton hover:text-fgButtonHover mt-2 cursor-pointer text-sm font-medium focus:outline-none"
          aria-label={`${expanded ? "Show Less" : "Read More"}`}
        >
          {expanded ? "Show Less" : "Read More"}
        </FastButton>
      )}
    </div>
  );
}

export default BigProjectDescription;
