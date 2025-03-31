import { create } from "zustand"

type DesktopSidebarActions = {
  toggleDesktopSidebarOpen: (shouldSidebarBeOpen?: boolean) => void
}

type DesktopSidebarStore = {
  isDesktopSidebarOpen: boolean
  actions: DesktopSidebarActions
}

const useDesktopSidebarStore = create<DesktopSidebarStore>((set) => ({
  name: "desktop-sidebar-store",
  isDesktopSidebarOpen: true,
  actions: {
    toggleDesktopSidebarOpen: (shouldSidebarBeOpen?: boolean) => {
      set((state) => ({
        isDesktopSidebarOpen:
          shouldSidebarBeOpen !== undefined ? shouldSidebarBeOpen : !state.isDesktopSidebarOpen,
      }))
    },
  },
}))

export const useIsDesktopSidebarOpen = () =>
  useDesktopSidebarStore((state) => state.isDesktopSidebarOpen)
export const useDesktopSidebarActions = () => useDesktopSidebarStore((state) => state.actions)
