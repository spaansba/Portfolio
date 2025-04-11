"use server";
import ContentFooter from "./content/contentFooter/ContentFooter";
import PageHeader from "./content/pageHeader/PageHeader";
import DesktopNavigation from "./navigation/desktopNavigation/DesktopNavigationWrapper";
import MobileNavigation from "./navigation/mobileNavigation/MobileNavigationWrapper";
import ProfileInfo from "./content/pageHeader/ProfileInfo";
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
