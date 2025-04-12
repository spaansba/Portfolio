"use client";
import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import FooterButton from "./ContentFooterButton";
import { useGoToPageOrScroll } from "@/hooks/useGoToPageOrScroll";
import FooterName from "./FooterName";
import type { NavigationPageItem } from "../../../../../types/NavigationListItem";

function ContentFooter() {
  const selectedPage = useNavigationSelectedPage();
  const navigationActions = useNavigationActions();

  const {
    previousCategoryPage,
    previousCategoryPageName,
    nextCategoryPage,
    nextCategoryPageName,
  } = navigationActions.getAdjacentCategoryPages(selectedPage);

  const CapitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleOnClickFooter = (page: NavigationPageItem | undefined) => {
    if (page) {
      goToPage(page.hash, page.path);
      navigationActions.setSelectedPage(page);
    }
  };

  const goToPage = useGoToPageOrScroll();
  return (
    <footer className="bg-SecondaryGray mb:pb-7 relative flex justify-between px-4 pt-6 pb-20 select-none md:px-8 md:py-8">
      <FooterButton
        direction="previous"
        isDisabled={!previousCategoryPage}
        onMouseDown={() => {
          handleOnClickFooter(previousCategoryPage);
        }}
        name={
          previousCategoryPageName
            ? CapitalizeFirstLetter(previousCategoryPageName)
            : ""
        }
      />
      <div className="text-TextGray absolute left-1/2 flex h-full -translate-x-1/2 items-start text-center text-sm">
        <FooterName />
      </div>
      <FooterButton
        direction="next"
        isDisabled={!nextCategoryPage}
        onMouseDown={() => handleOnClickFooter(nextCategoryPage)}
        name={
          nextCategoryPageName
            ? CapitalizeFirstLetter(nextCategoryPageName)
            : ""
        }
      />
    </footer>
  );
}

export default ContentFooter;
