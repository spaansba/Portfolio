"use client";
import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import FooterButton from "./ContentFooterButton";
import { useGoToPageOrScroll } from "@/hooks/useGoToPageOrScroll";
import FooterName from "./FooterName";

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
  const goToPage = useGoToPageOrScroll();
  return (
    <footer className="bg-SecondaryGray mb:pb-7 flex justify-between px-4 pt-6 pb-20 select-none md:px-8 md:py-8">
      <FooterButton
        direction="previous"
        isDisabled={!previousCategoryPage}
        onMouseDown={() => {
          if (previousCategoryPage) {
            navigationActions.setSelectedPage(previousCategoryPage);
            goToPage(previousCategoryPage.hash, previousCategoryPage.path);
          }
        }}
        name={
          previousCategoryPageName
            ? CapitalizeFirstLetter(previousCategoryPageName)
            : ""
        }
      />
      <div className="text-TextGray flex items-center text-center text-sm">
        <FooterName />
      </div>
      <FooterButton
        direction="next"
        isDisabled={!nextCategoryPage}
        onMouseDown={() => {
          if (nextCategoryPage) {
            navigationActions.setSelectedPage(nextCategoryPage!);
            goToPage(nextCategoryPage.hash, nextCategoryPage.path);
          }
        }}
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
