import React from "react"

type ProjectTitleProps = {
  title: string
  isLeftAlign: boolean
  isHovered: boolean
}

function ProjectTitle({ title, isLeftAlign, isHovered }: ProjectTitleProps) {
  return (
    <>
      <div
        className={`${isLeftAlign ? "left-0" : "right-0"} absolute w-[1px]  top-0 bottom-0 ${
          isHovered ? "bg-TextGrayWhite opacity-60" : "bg-TertiaryGray"
        }`}
      />
      <div className={`relative flex items-center w-full   ${isLeftAlign ? "" : "justify-end"}`}>
        <div
          className={`w-full h-[1px] ${
            isHovered ? "bg-TextGrayWhite opacity-60" : "bg-TertiaryGray"
          }`}
        />

        <div
          className={`absolute ${
            isLeftAlign ? "left-0 ml-4" : "right-0 mr-4"
          } px-5  bg-SecondaryGray`}
        >
          <h2 className="font-semibold text-3xl text-white">{title}</h2>
        </div>
      </div>
    </>
  )
}

export default ProjectTitle
