import { useNavigationActions, useNavigationSelectedPage } from "@/stores/NavigationListStore"
import FooterButton from "./ContentFooterButton"
import { useGoToPageOrScroll } from "@/hooks/useGoToPageOrScroll"
import FooterName from "./FooterName"

function ContentFooter() {
  const selectedPage = useNavigationSelectedPage()
  const navigationActions = useNavigationActions()
  const { previousCategoryPage, previousCategoryPageName, nextCategoryPage, nextCategoryPageName } =
    navigationActions.getAdjacentCategoryPages(selectedPage)
  const CapitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const goToPage = useGoToPageOrScroll()
  return (
    <footer className="bg-SecondaryGray pt-6 pb-20 mb:pb-7 md:py-8 px-4 md:px-8 flex justify-between select-none">
      <FooterButton
        direction="previous"
        isDisabled={!previousCategoryPage}
        onMouseDown={() => {
          if (previousCategoryPage) {
            navigationActions.setSelectedPage(previousCategoryPage)
            goToPage(previousCategoryPage.hash, previousCategoryPage.path)
          }
        }}
        name={previousCategoryPageName ? CapitalizeFirstLetter(previousCategoryPageName) : ""}
      />
      <div className="text-TextGray text-center text-sm">
        <FooterName />
      </div>
      <FooterButton
        direction="next"
        isDisabled={!nextCategoryPage}
        onMouseDown={() => {
          if (nextCategoryPage) {
            navigationActions.setSelectedPage(nextCategoryPage!)
            goToPage(nextCategoryPage.hash, nextCategoryPage.path)
          }
        }}
        name={nextCategoryPageName ? CapitalizeFirstLetter(nextCategoryPageName) : ""}
      />
    </footer>
  )
}

export default ContentFooter
