import ContentFooter from "./Content/ContentFooter/ContentFooter";
import PageHeader from "./Content/PageHeader/PageHeader";
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigationWrapper";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigationWrapper";

function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] overflow-hidden">
      <header className="bg-SecondaryGray sticky top-0 z-30">
        <PageHeader />
      </header>

      <div className="grid grid-cols-[auto_1fr] overflow-hidden">
        <DesktopNavigation />
        <main id="contentwrapper" className="scrollbar-custom overflow-auto">
          {children}
          <ContentFooter />
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
}

export default MainWrapper;
