"use server";
import React from "react";
import Image from "next/image";

function ProfileInfo() {
  console.log("server");
  return (
    <>
      <div className="ring-TertiaryGray relative size-12 flex-shrink-0 overflow-hidden ring-[1px]">
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
    </>
  );
}

export default ProfileInfo;
