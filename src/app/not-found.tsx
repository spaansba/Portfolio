import { redirect } from "next/navigation"
function NotFound() {
  redirect("/about")
}

export default NotFound
