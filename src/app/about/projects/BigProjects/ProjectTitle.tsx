import React from "react"

type ProjectTitleProps = {
  title: string
  isLeftAlign: boolean
}

function ProjectTitle({ title, isLeftAlign }: ProjectTitleProps) {
  return (
    <>
      <div
        className={`${isLeftAlign ? "left-0" : "right-0"} absolute w-[1px] top-0 bottom-0 
          bg-TertiaryGray group-hover/project:bg-TextGrayWhite group-hover/project:opacity-60`}
      />
      <div className={`relative flex items-center w-full ${isLeftAlign ? "" : "justify-end"}`}>
        <div
          className={`w-full h-[1px] bg-TertiaryGray group-hover/project:bg-TextGrayWhite group-hover/project:opacity-60`}
        />

        <div
          className={`absolute ${
            isLeftAlign
              ? "left-0 ml-4 group-hover/project:ml-6 group-hover/project:pl-7"
              : "right-0 mr-4 group-hover/project:mr-6 group-hover/project:pr-7"
          } bg-SecondaryGray transition-all duration-300 px-5`}
        >
          <h2 className="font-semibold text-3xl text-white">{title}</h2>
        </div>
      </div>
    </>
  )
}

export default ProjectTitle
