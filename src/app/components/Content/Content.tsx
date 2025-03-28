import { useNavigationSelectedItem } from "@/app/stores/NavigationListStore"
import React from "react"

function Content() {
  const selectedItem = useNavigationSelectedItem()
  console.log(selectedItem.id)
  return <div>Content</div>
}

export default Content
