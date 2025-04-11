"use server";
import ContentFooter from "./content/contentFooter/ContentFooter";
import PageHeader from "./content/pageHeader/PageHeader";
import DesktopNavigation from "./navigation/desktopNavigation/DesktopNavigationWrapper";
import MobileNavigation from "./navigation/mobileNavigation/MobileNavigationWrapper";
import ProfileInfo from "./content/pageHeader/ProfileInfo";

async function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] overflow-hidden">
      <header className="bg-SecondaryGray sticky top-0 z-30">
        <PageHeader>
          <ProfileInfo />
        </PageHeader>
      </header>

      <div className="relative grid grid-cols-[auto_1fr] overflow-hidden">
        <div className="hidden md:block">
          <DesktopNavigation />
        </div>
        <main id="contentwrapper" className="scrollbar-custom overflow-auto">
          {children}
          <ContentFooter />
        </main>
        <div className="md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}

export default MainWrapper;
