import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"

function Content() {
  return (
    <div className="h-full flex flex-col">
      {/* Scrollable content area with momentum scrolling on iOS */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden webkit-overflow-scrolling-touch">
        {/* Your content goes here */}
        <div className="p-6 h-[20000px]">
          {/* Main content goes here */}
          Content
        </div>
        {/* Safe area bottom padding */}
        <div className="h-[env(safe-area-inset-bottom,16px)]" />
      </div>

      {/* Fixed footer */}
      <div className="sticky bottom-0 z-10 bg-SecondaryGray">
        <ContentFooter />
        {/* Safe area padding for mobile */}
        <div className="h-[env(safe-area-inset-bottom,24px)] md:h-[env(safe-area-inset-bottom,16px)]" />
      </div>
    </div>
  )
}

export default Content
