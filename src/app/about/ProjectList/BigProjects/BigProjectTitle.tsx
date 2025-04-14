"use server";
type BigProjectTitleProps = {
  title: string;
  isLeftAlign: boolean;
  isFinished: boolean;
};

function BigProjectTitle({
  title,
  isLeftAlign,
  isFinished,
}: BigProjectTitleProps) {
  return (
    <>
      <div
        className={`${isLeftAlign ? "left-0" : "right-0"} bg-TertiaryGray group-hover/project:bg-TextGrayWhite absolute top-0 bottom-0 w-[1px] group-hover/project:opacity-60`}
      />
      <div
        className={`relative flex w-full items-center ${isLeftAlign ? "" : "justify-end"}`}
      >
        <div
          className={`bg-TertiaryGray group-hover/project:bg-TextGrayWhite h-[1px] w-full group-hover/project:opacity-60`}
        />

        <div
          className={`absolute ${
            isLeftAlign
              ? "left-0 ml-4 group-hover/project:ml-6 group-hover/project:pl-7"
              : "right-0 mr-4 group-hover/project:mr-6 group-hover/project:pr-7"
          } bg-SecondaryGray px-5 transition-all duration-300`}
        >
          <h2
            className="text-3xl font-semibold text-white"
            title={`${!isFinished ? "Work in Progress" : ""}`}
          >
            {title}
            <span className="text-TextGrayWhite"> {!isFinished && `*`}</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default BigProjectTitle;
