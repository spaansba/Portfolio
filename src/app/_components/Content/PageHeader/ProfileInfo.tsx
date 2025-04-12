"use server";
import React from "react";
import Image from "next/image";

function ProfileInfo() {
  return (
    <div className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-70">
      <div className="relative size-12 flex-shrink-0 overflow-hidden">
        <Image
          draggable={false}
          src="/images/BartSpaans.jpg"
          alt="Profile picture"
          fill
          sizes="48px"
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-center gap-1.5">
          <h3 className="text-TextGray text-[14px] font-semibold">
            Frontend Developer
          </h3>
        </div>
        <div className="flex gap-2">
          <h2 className="truncate text-[18px] leading-tight font-bold text-white">
            Bart Spaans
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
