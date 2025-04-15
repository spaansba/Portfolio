"use client";
import { SmallProjects, type Project } from "@/data/ProjectData";
import { useState } from "react";
import SmallProjectContent from "./SmallProjectContent";
import NavigationCubes from "../../../_components/NavigationCubes";
import Carousel, { type ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallProjectCarouselItem from "./SmallProjectCarouselItem";
function SmallProjectWrapper() {
  const [activeProject, setActiveProject] = useState<Project>(SmallProjects[0]);

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

  const CustomButtonGroup = (props: ButtonGroupProps) => {
    return (
      <NavigationCubes
        ButtonGroupProps={props}
        totalItems={SmallProjects.length}
        currentIndex={activeProject.index}
      />
    );
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={false}
        arrows={false}
        centerMode={false}
        swipeable={true}
        draggable={true}
        autoPlay={false}
        keyBoardControl={true}
        renderButtonGroupOutside={true}
        beforeChange={(nextSlide) => {
          // We need to do this because the ButtonGroupProps.carouselState is bugged and never gives the correct index
          const normalizedNextSlide = (nextSlide + 1) % SmallProjects.length;
          console.log(normalizedNextSlide);
          setActiveProject(SmallProjects[normalizedNextSlide]);
        }}
        customButtonGroup={<CustomButtonGroup />}
      >
        {SmallProjects.map((project) => (
          <SmallProjectCarouselItem project={project} key={project.index} />
        ))}
      </Carousel>
    </>
  );
}

export default SmallProjectWrapper;
