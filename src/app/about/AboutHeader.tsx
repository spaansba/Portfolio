import React, { useState } from "react";
import Image from "next/image";
import useIsMobileDevice from "@/hooks/useIsMobileDevice";
import AboutParagraph from "./AboutParagraph";
function AboutHeader() {
  const isMobile = useIsMobileDevice();
  return (
    <div className="group/intro pt-4 md:px-[20px]">
      <div className="flex flex-row items-start gap-1 md:gap-10 lg:gap-20">
        <div className="pt-2.5 md:max-w-[500px] md:pt-0">
          <h3 className="text-TextGray mb-0.5 text-xs md:mb-2 md:text-sm">
            Hi, my name is
          </h3>
          <h1 className="mb-0.5 text-3xl font-bold text-white md:mb-2 md:text-5xl">
            Bart Spaans.
          </h1>
          <h2 className="text-lg font-semibold text-white md:text-3xl">
            I build things for the web.
          </h2>
          {!isMobile && (
            <div className="pt-5">
              <AboutParagraph />
            </div>
          )}
        </div>

        <div className="relative mb-6 ml-4 size-[100px] flex-shrink-0 sm:size-[150px] md:mb-0 md:ml-0 md:size-[200px] lg:size-[300px]">
          <div
            className={`border-TertiaryGray group-hover/intro:border-TextGrayWhite absolute top-[10px] right-[-10px] size-full border-[1px] opacity-60 transition-colors md:top-[30px] md:right-[-30px]`}
          />
          <Image
            draggable={false}
            src="/images/BartSpaans.jpg"
            alt="Profile picture"
            sizes="(max-width: 768px) 100px, (max-width: 1024px) 200px, 300px"
            fill
            quality={90}
            className="object-cover"
            priority
          />
        </div>
      </div>
      {isMobile && <AboutParagraph />}
    </div>
  );
}

export default AboutHeader;
