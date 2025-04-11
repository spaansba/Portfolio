"use server";
import ContentFooter from "./Content/ContentFooter/ContentFooter";
import PageHeader from "./Content/PageHeader/PageHeader";
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigationWrapper";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigationWrapper";
import ProfileInfo from "./Content/PageHeader/ProfileInfo";
import { isMobileDevice } from "../_server/device";

async function MainWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = await isMobileDevice();
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] overflow-hidden">
      <header className="bg-SecondaryGray sticky top-0 z-30">
        <PageHeader>
          <ProfileInfo />
        </PageHeader>
      </header>

      <div className="relative grid grid-cols-[auto_1fr] overflow-hidden">
        <DesktopNavigation />
        <main id="contentwrapper" className="scrollbar-custom overflow-auto">
          {children}
          <ContentFooter />
        </main>
        <MobileNavigation />
      </div>
    </div>
  );
}

export default MainWrapper;
