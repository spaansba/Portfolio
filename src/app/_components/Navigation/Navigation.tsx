// "use client"
// import useIsMobileDevice from "@/hooks/useIsMobileDevice"
// import { useNavigationPageList } from "@/stores/NavigationListStore"
// import DesktopNavigationSection from "./DesktopNavigation/DesktopNavigationSection"
// import MobileNavigationSection from "./MobileNavigation/MobileNavigationSection"

// function Navigation() {
//   const pages = useNavigationPageList()
//   // Use different section component based on device type
//   const SectionComponent = isMobile ? MobileNavigationSection : DesktopNavigationSection

//   return (
//     <div className={`select-none ${isMobile ? "pt-2" : "pt-3 absolute inset-0 scrollbar-hide"}`}>
//       <ul className="space-y-6">
//         {Object.entries(pages).map(([sectionTitle, sectionItems]) => (
//           <SectionComponent key={sectionTitle} title={sectionTitle} pages={sectionItems} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Navigation
