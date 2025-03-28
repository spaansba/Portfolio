import React from "react"
import ContentFooter from "./ContentFooter/ContentFooter"

function Content() {
  return (
    <div className="flex flex-col w-full h-full relative">
      {/* Scrollable content area with padding bottom to ensure content isn't hidden behind footer */}
      <div className="flex-grow overflow-y-auto pb-16">
        {/* Your tall content */}
        <div className="h-[20000px]">
          {/* Main content goes here */}
          Content
        </div>
      </div>

      {/* Fixed footer at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <ContentFooter />
      </div>
    </div>
  )
}

export default Content
