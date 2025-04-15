export const setAdjacent = (direction: "next" | "prev") => {
  const activeIndex = activeProject.index;
  if (direction === "next") {
    console.log("current ", activeProject.index);

    const nextIndex = (activeIndex + 1) % SmallProjects.length;
    console.log("next ", nextIndex);
    setActiveProject(SmallProjects[nextIndex]);
  } else {
    const prevIndex =
      (activeIndex - 1 + SmallProjects.length) % SmallProjects.length;
    setActiveProject(SmallProjects[prevIndex]);
  }
};
