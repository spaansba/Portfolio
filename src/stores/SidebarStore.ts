import { create } from "zustand"

type SidebarActions = {
  toggleSidebarOpen: () => void
  setForceCloseSidebar: (shouldForceClose: boolean) => void
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
    toggleSidebarOpen: () => {
      set((state) => ({
        isSidebarOpen: !state.isSidebarOpen,
      }))
    },
    setForceCloseSidebar: (shouldForceClose: boolean) => {
      set(() => ({
        isForcedClosed: shouldForceClose,
      }))
    },
    getSidebarWidth: (isMobile: boolean) => {
      if (isMobile) {
        return {
          open: "320px",
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
