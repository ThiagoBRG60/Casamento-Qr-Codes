import { create } from "zustand"

interface VideoStore {
   isPlaying: boolean
   isDarkMode: boolean
   linksVisible: boolean
   setIsPlaying: () => void
   setIsDarkMode: () => void
   setLinksVisible: () => void
}

const useVideoStore = create<VideoStore>((set) => ({
   isPlaying: false,
   isDarkMode: false,
   linksVisible: false,
   setIsPlaying: () => set((state) => ({isPlaying: !state.isPlaying})),
   setIsDarkMode: () => set((state) => ({isDarkMode: !state.isDarkMode})),
   setLinksVisible: () => set({linksVisible: true})
}))

export {useVideoStore}