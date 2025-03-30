import { create } from "zustand"

type SidebarActions = {
  toggleSidebarOpen: (shouldSidebarBeOpen?: boolean) => void
  getSidebarWidth: (isMobile: boolean) => { open: string; closed: string }
}

type SidebarStore = {
  isSidebarOpen: boolean
  isForcedClosed: boolean
  actions: SidebarActions
}

const useSidebarStore = create<SidebarStore>((set, get) => ({
  name: "sidebar-store",
  isSidebarOpen: true,
  isForcedClosed: false,
  actions: {
    toggleSidebarOpen: (shouldSidebarBeOpen?: boolean) => {
      set((state) => ({
        isSidebarOpen:
          shouldSidebarBeOpen !== undefined ? shouldSidebarBeOpen : !state.isSidebarOpen,
      }))
    },
    getSidebarWidth: (isMobile: boolean) => {
      if (isMobile) {
        return {
          open: "205px",
          closed: "49px",
        }
      } else {
        return {
          open: "205px",
          closed: "49px",
        }
      }
    },
  },
}))

export const useIsSidebarForcedClosed = () => useSidebarStore((state) => state.isForcedClosed)
export const useIsSidebarOpen = () => useSidebarStore((state) => state.isSidebarOpen)
export const useSidebarActions = () => useSidebarStore((state) => state.actions)
