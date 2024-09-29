'use client'
import { Moon, Pause, Play, Sun, X } from "lucide-react"
import Button from "../Button/Button"
import { useVideoStore } from "@/store/videoStore"
import { useRef, useState } from "react"
import { useParams } from "next/navigation"

const VideoCard = () => {
   const {isPlaying, setIsPlaying, isDarkMode, setIsDarkMode, linksVisible, setLinksVisible} = useVideoStore()
   const [hidden, setHidden] = useState('flex')
   const videoRef = useRef<HTMLVideoElement | null>(null)
   const {id} = useParams()

   const handlePlay = () => {
      setIsPlaying()
      if (videoRef.current) {
         videoRef.current.volume = 0.2
         isPlaying ? videoRef.current.pause() : videoRef.current.play()
      }
   }

   const handleHidden = () => {
      setLinksVisible()
      setTimeout(() => {
         setHidden('hidden')
      }, 1000);
   }

  return (
    <section className={`${linksVisible && 'animate-videoCardFade'} ${hidden} w-full min-h-screen py-10 px-[10px] items-center justify-center transition duration-300
            ${isDarkMode && 'bg-gray-900'}`}>
      <div className="relative max-w-3xl w-full rounded-lg shadow-lg overflow-hidden">
         <div className={`relative ${isPlaying ? "" : "after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gray-950 after:bg-opacity-50 after:pointer-events-none"}`}>
            {!isPlaying && <Play onClick={handlePlay} size={60} className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-pink-600 z-10 cursor-pointer p-3 bg-black bg-opacity-50 rounded-full"/>}
            <video onEnded={handleHidden} src={`/videos/video-${id}.mp4`} ref={videoRef} onClick={handlePlay}/>
         </div>
         <div className={`p-4 gridVideoInfo transition duration-300 xs:p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`font-bold text-lg titleGrid transition duration-300 xs:text-xl ${isDarkMode ? 'text-white' : 'text-yellow-700'}`}>
               Convite Especial Para Você!
            </h2>
            <div className="flex gap-[10px] buttonsGrid md:justify-self-end">
               <Button onClick={handlePlay} className={`${isDarkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-pink-200 hover:bg-pink-300'}`}>
                  {isPlaying ? <Pause size={24} className={isDarkMode ? 'text-white' : 'text-pink-600'} /> : <Play size={24} className={isDarkMode ? 'text-white' : 'text-pink-600'} />}
               </Button>
               <Button onClick={setIsDarkMode} className={`${isDarkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-purple-200 hover:bg-purple-300'}`}>
                  {isDarkMode ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-purple-600" />}
               </Button>
               <Button onClick={handleHidden} className={`${isDarkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-red-200 hover:bg-red-300'}`}>
                  <X size={24} className={isDarkMode ? 'text-white' : 'text-red-600'} />
               </Button>
            </div>
            <p className={`text-center py-3 descriptionGrid ${isDarkMode ? 'text-white' : 'text-black'}`}>
               Estamos felizes em convidar você para celebrar nosso casamento.
            </p>
         </div>
      </div>
    </section>
  )
}

export default VideoCard