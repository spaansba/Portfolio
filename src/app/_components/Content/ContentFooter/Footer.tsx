"use client";
import {
  useNavigationActions,
  useNavigationSelectedPage,
} from "@/stores/NavigationListStore";
import FooterButton from "./ContentFooterButton";
import FooterName from "./FooterName";
import { useNavigationWithScroll } from "@/hooks/useNavigationWithScroll";
import type { NavigationPageItem } from "@/data/NavigationData";

function Footer() {
  const selectedPage = useNavigationSelectedPage();
  const navigationActions = useNavigationActions();
  const navigationWithScroll = useNavigationWithScroll();
  if (!selectedPage) return null;
  const {
    previousCategoryPage,
    previousCategoryPageName,
    nextCategoryPage,
    nextCategoryPageName,
  } = navigationActions.getAdjacentCategoryPages(selectedPage.category);

  const CapitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleOnClickFooter = (page: NavigationPageItem | undefined) => {
    if (page) {
      navigationWithScroll.goToPage(page.hash, page.path);
      navigationActions.setSelectedPage(page);
    }
  };

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

export default Footer;
