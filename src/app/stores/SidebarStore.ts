import { create } from "zustand"

type SidebarActions = {
  toggleSidebarOpen: () => void
  setForceCloseSidebar: (shouldForceClose: boolean) => void
}

type SidebarStore = {
  isSidebarOpen: boolean
  isForcedClosed: boolean
  actions: SidebarActions
}

const useSidebarStore = create<SidebarStore>((set) => ({
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
  },
}))

export const useIsSidebarForcedClosed = () => useSidebarStore((state) => state.isForcedClosed)
export const useIsSidebarOpen = () => useSidebarStore((state) => state.isSidebarOpen)
export const useSidebarActions = () => useSidebarStore((state) => state.actions)
