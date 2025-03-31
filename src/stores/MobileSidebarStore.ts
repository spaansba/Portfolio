import { create } from "zustand"

type MobileSidebarActions = {
  toggleMobileSidebarOpen: (shouldSidebarBeOpen?: boolean) => void
}

type MobileSidebarStore = {
  isMobileSidebarOpen: boolean
  actions: MobileSidebarActions
}

const useMobileSidebarStore = create<MobileSidebarStore>((set) => ({
  name: "mobile-sidebar-store",
  isMobileSidebarOpen: false,
  actions: {
    toggleMobileSidebarOpen: (shouldSidebarBeOpen?: boolean) => {
      set((state) => ({
        isMobileSidebarOpen:
          shouldSidebarBeOpen !== undefined ? shouldSidebarBeOpen : !state.isMobileSidebarOpen,
      }))
    },
  },
}))

export const useIsMobileSidebarOpen = () =>
  useMobileSidebarStore((state) => state.isMobileSidebarOpen)
export const useMobileSidebarActions = () => useMobileSidebarStore((state) => state.actions)
