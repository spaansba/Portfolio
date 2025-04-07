import React from "react"

type ProjectTitleProps = {
  title: string
  isLeftAlign: boolean
}

function ProjectTitle({ title, isLeftAlign }: ProjectTitleProps) {
  return (
    <>
      <div
        className={`${
          isLeftAlign ? "left-0" : "right-0"
        } absolute w-[1px] top-0 bottom-0 bg-TertiaryGray`}
      />
      <div
        className={`relative flex items-center w-full my-6 md:my-8 ${
          isLeftAlign ? "" : "justify-end"
        }`}
      >
        <div className="w-full h-[1px] bg-TertiaryGray" />

        <div
          className={`absolute ${
            isLeftAlign ? "left-0 ml-4 md:ml-10" : "right-0 mr-4 md:mr-10"
          } px-3 md:px-4 bg-SecondaryGray`}
        >
          <h2 className="font-semibold text-lg md:text-3xl text-white">{title}</h2>
        </div>
      </div>
    </>
  )
}

export default ProjectTitle
