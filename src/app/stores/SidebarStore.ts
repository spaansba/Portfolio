import { create } from "zustand"

type SidebarActions = {
  toggleSidebarOpen: () => void
}

type SidebarStore = {
  isSidebarOpen: boolean
  actions: SidebarActions
}

const useSidebarStore = create<SidebarStore>((set) => ({
  name: "sidebar-store",
  isSidebarOpen: true,

  actions: {
    toggleSidebarOpen: () => {
      set((state) => ({
        isSidebarOpen: !state.isSidebarOpen,
      }))
    },
  },
}))

export const useIsSidebarOpen = () => useSidebarStore((state) => state.isSidebarOpen)
export const useSidebarActions = () => useSidebarStore((state) => state.actions)
