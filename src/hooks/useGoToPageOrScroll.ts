"use client";
import { useRouter } from "next/navigation";

export function useGoToPageOrScroll() {
  const router = useRouter();

  return (urlHash?: string, desiredPathName?: string) => {
    const currentPathName = window.location.pathname;

    if (currentPathName === desiredPathName) {
      if (!urlHash) {
        const contentWrapper = document.getElementById("contentwrapper");
        if (contentWrapper) {
          contentWrapper.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        const targetElement = document.querySelector(urlHash);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    } else {
      // if (urlHash) {
      //   sessionStorage.setItem("scrollToHash", urlHash);
      // }
      // router.push(desiredPathName || "/");
      router.push(`${desiredPathName}${urlHash}` || "/");
    }
  };
}
