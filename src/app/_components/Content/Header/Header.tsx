import React from "react"
import { useNavigationSelectedPage } from "@/stores/NavigationListStore"

function Header() {
  const selectedPage = useNavigationSelectedPage()

  return (
    <div className="h-[50px] min-h-[50px] bg-SecondaryGray border-b border-TertiaryGray flex items-center px-6 backdrop-blur-sm bg-opacity-90 z-[100]">
      <h1 className="text-white text-sm font-medium">{selectedPage?.name || "Home"}</h1>
    </div>
  )
}

export default Header
