import React, { use } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigationActions, useNavigationSelectedPage } from "@/app/stores/NavigationListStore"
import FooterButton from "./ContentFooterButton"

function Footer() {
  const selectedPage = useNavigationSelectedPage()
  const navigationActions = useNavigationActions()
  const { previousPage, nextPage } = navigationActions.getAdjacentPages(selectedPage)

  return (
    <footer className="border-t border-TertiaryGray bg-SecondaryGray">
      <div className="py-4 px-8 flex justify-between items-center mt-auto">
        <FooterButton
          direction="previous"
          isDisabled={!previousPage}
          onMouseDown={() => navigationActions.setSelectedPage(previousPage!)}
          name={previousPage?.name}
        />
        <FooterButton
          direction="next"
          isDisabled={!nextPage}
          onMouseDown={() => navigationActions.setSelectedPage(nextPage!)}
          name={nextPage?.name}
        />
      </div>
    </footer>
  )
}

export default Footer
