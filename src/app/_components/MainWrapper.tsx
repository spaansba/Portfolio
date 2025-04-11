"use server";
import ContentFooter from "./content/contentFooter/ContentFooter";
import PageHeader from "./content/PageHeader/PageHeader";
import ProfileInfo from "./content/PageHeader/ProfileInfo";
import DesktopNavigationWrapper from "./navigation/desktopNavigation/DesktopNavigationWrapper";
import MobileNavigationWrapper from "./navigation/MobileNavigation/MobileNavigationWrapper";

async function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden">
      <header className="bg-SecondaryGray fixed top-0 right-0 left-0 z-30">
        <PageHeader>
          <ProfileInfo />
        </PageHeader>
      </header>

      <div className="grid h-[calc(100vh-73px)] grid-cols-[auto_1fr] mt-[73px] overflow-hidden">
        <div className="hidden md:block">
          <DesktopNavigationWrapper />
        </div>
        <main id="contentwrapper" className="scrollbar-custom overflow-auto">
          {children}
          <ContentFooter />
        </main>
        <div className="absolute bottom-0 left-0 right-0 md:hidden">
          <MobileNavigationWrapper />
        </div>
      </div>
    </div>
  );
}

export default MainWrapper;
