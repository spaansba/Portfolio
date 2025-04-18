"use client";
import { SmallProjects, type Project } from "@/data/ProjectData";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import SmallProjectCarouselItem from "./SmallProjectCarouselItem";
import { useEffect, useState } from "react";
import SwiperNavigationCubes from "@/app/_components/SwiperNavigationCubes";

export function SmallProjectWrapper() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [slidesPerView, setSlidesPerView] = useState(
    swiperRef?.slidesPerViewDynamic() ?? 2,
  );
  const [currentProject, setCurrentProject] = useState<Project>(
    SmallProjects[0],
  );

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        autoHeight={false}
        breakpointsBase={"container"}
        breakpoints={{
          1: {
            slidesPerView: 1,
          },
          750: {
            slidesPerView: 2,
          },
        }}
        onSlideChange={(swiper) => {
          setCurrentSlideIndex(swiper.activeIndex);
          // setSlidesPerView(swiper.slidesPerViewDynamic());
        }}
        onSlidesUpdated={(swiper) => {
          setSlidesPerView(swiper.slidesPerViewDynamic());
        }}
      >
        {SmallProjects.map((project) => (
          <SwiperSlide key={project.index} className="h-full">
            <SmallProjectCarouselItem project={project} key={project.index} />
          </SwiperSlide>
        ))}
      </Swiper>
      {SmallProjects.length > 1 && (
        <div className="pt-4">
          <SwiperNavigationCubes
            swiperRef={swiperRef}
            totalSlides={
              slidesPerView === 2
                ? SmallProjects.length - 1
                : SmallProjects.length
            }
            currentSlide={currentSlideIndex}
          />
        </div>
      )}
    </>
  );
}
