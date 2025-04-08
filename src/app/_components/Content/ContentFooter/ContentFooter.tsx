import { useNavigationActions, useNavigationSelectedPage } from "@/stores/NavigationListStore"
import FooterButton from "./ContentFooterButton"

function Footer() {
  const selectedPage = useNavigationSelectedPage()
  const navigationActions = useNavigationActions()
  const { previousCategory, nextCategory } = navigationActions.getAdjacentCategories(selectedPage)

  return (
    <footer className=" bg-SecondaryGray pt-10">
      <div className="pt-4 pb-7 md:py-8 px-4 md:px-8 flex justify-between select-none">
        <FooterButton
          direction="previous"
          isDisabled={!previousCategory}
          onMouseDown={() => navigationActions.setSelectedPage(previousCategory!)}
          name={previousCategory}
        />
        <FooterButton
          direction="next"
          isDisabled={!nextCategory}
          onMouseDown={() => navigationActions.setSelectedPage(nextCategory!)}
          name={nextCategory}
        />
      </div>
    </footer>
  )
}

export default Footer
