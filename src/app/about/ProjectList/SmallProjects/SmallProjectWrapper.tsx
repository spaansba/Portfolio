"use client";
import { SmallProjects } from "@/data/ProjectData";
import Carousel, { type ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavigationCubes from "../../../_components/NavigationCubes";
import SmallProjectCarouselItem from "./SmallProjectCarouselItem";
export function SmallProjectWrapper() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        //Sadly we cant put it to infite because the carouselstate is bugged within react-multi-carousel
        // infinite={true}
        showDots={false}
        arrows={false}
        centerMode={false}
        swipeable={true}
        draggable={true}
        autoPlay={false}
        keyBoardControl={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup />}
      >
        {SmallProjects.map((project) => (
          <SmallProjectCarouselItem project={project} key={project.index} />
        ))}
      </Carousel>
    </>
  );
}

export const CustomButtonGroup = (props: ButtonGroupProps) => {
  return <NavigationCubes ButtonGroupProps={props} />;
};
