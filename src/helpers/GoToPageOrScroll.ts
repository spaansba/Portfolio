import { redirect } from "next/navigation"

export function GoToPageOrScroll(urlHash?: string, desiredPathName?: string) {
  const currentPathName = window.location.pathname
  if (currentPathName == desiredPathName) {
    if (!urlHash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      // If urlHash exists, scroll to that element
      const targetElement = document.querySelector(urlHash)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  } else {
    if (urlHash) {
      redirect(`${desiredPathName}${urlHash}`)
    } else {
      redirect(`${desiredPathName}`)
    }
  }
}
