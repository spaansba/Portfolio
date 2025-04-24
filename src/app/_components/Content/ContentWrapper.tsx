"use client";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import React from "react";

function ContentWrapper({ children }: { children: React.ReactNode }) {
  useScrollToHash();
  return (
    <div className="mx-1 overflow-x-clip overflow-y-auto md:mx-8 xl:mx-auto xl:max-w-5xl">
      <div className="flex flex-col gap-10 p-3.5 md:gap-20 md:px-6 md:py-8">
        {children}
      </div>
    </div>
  );
}

export default ContentWrapper;
