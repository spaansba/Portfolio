import React from "react"

function AboutParagraph() {
  return (
    <>
      <p className="font-medium text-base md:text-lg  text-TextGray leading-relaxed">
        I am a self-taught hobby frontend developer from Rotterdam, The Netherlands. I aspire to
        become a full-time frontend developer.
      </p>

      <div className="mt-5">
        <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full py-2 px-4 md:py-3 md:px-6 transition-colors duration-300 text-sm font-medium">
          View My Projects
        </button>
      </div>
    </>
  )
}

export default AboutParagraph
