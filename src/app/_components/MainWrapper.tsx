"use server";
import Footer from "./Content/ContentFooter/Footer";
import Header from "./Content/PageHeader/Header";
import ProfileInfo from "./Content/PageHeader/ProfileInfo";
import DesktopNavigationWrapper from "./Navigation/DesktopNavigation/DesktopNavigationWrapper";
import MobileNavigationWrapper from "./Navigation/MobileNavigation/MobileNavigationWrapper";

async function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <header className="bg-SecondaryGray fixed top-0 right-0 left-0 z-30">
          <Header>
            <ProfileInfo />
          </Header>
        </header>

        <div className="mt-18.25 grid h-[calc(100vh-73px)] grid-cols-[auto_1fr] overflow-hidden">
          <aside className="hidden md:block" aria-label="Main navigation">
            <DesktopNavigationWrapper />
          </aside>

          <main
            id="contentwrapper"
            className="scrollbar-custom overflow-auto"
            role="main"
            aria-label="Main content"
          >
            {children}
            <Footer />
          </main>

          <MobileNavigationWrapper />
        </div>
      </div>
    </>
  );
}

export default MainWrapper;
