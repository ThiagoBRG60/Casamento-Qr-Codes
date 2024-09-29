'use client'
import { useVideoStore } from "@/store/videoStore"
import { FileText, MapPin, Moon, Sun, Users } from "lucide-react"
import Button from "../Button/Button"
import { useEffect, useState } from "react"

const Links = () => {
   const {isDarkMode, setIsDarkMode, linksVisible} = useVideoStore()
   const [isHidden, setIsHidden] = useState(true)

   const cardLinks = [
      {icon: <Users size={24}/>, text: 'Lista de Convidados'},
      {icon: <MapPin size={24}/>, text: 'Local do Evento'},
      {icon: <FileText size={24}/>, text: 'Formulário'},
   ]

   const handleHidden = () => {
      if (linksVisible) {
         setTimeout(() => {
            setIsHidden(false)
         }, 1000);
      }
   }

   useEffect(() => {
      handleHidden()
   }, [linksVisible])

  return (
    <section className={`${isHidden ? 'hidden' : 'flex animate-linksCardScale'} w-full min-h-screen py-5 px-[10px] flex-col justify-center items-center transition duration-300 ${isDarkMode && 'bg-gray-900'}`}>
      <div className={`max-w-3xl w-full rounded-lg shadow-2xl overflow-hidden p-6 transition duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between mb-[30px]">
          <h1 className={`font-bold text-xl transition duration-300 ${isDarkMode ? 'text-white' : 'text-yellow-700'}`}>
            Nosso Casamento
          </h1>
          <Button 
            className={`${isDarkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-purple-200 hover:bg-purple-300'} transition-transform duration-300 transform hover:scale-105`}
            onClick={setIsDarkMode}>
            {isDarkMode ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-purple-600" />}
          </Button>
        </div>
        <nav>
            <ul className="flex flex-col gap-[15px]">
               {cardLinks.map((link, index) => (
                  <li key={index}>
                     <a href="/" 
                        className={`flex items-center gap-[15px] p-4 rounded-lg transition duration-300 shadow-md 
                           ${isDarkMode ? 'bg-white/20 hover:bg-white/30 text-white': 'bg-[#fed7aa] hover:bg-[#fec89a] text-[#b5651d]'}`}>
                        <span>
                           {link.icon}
                        </span>
                        <p className="font-medium">
                           {link.text}
                        </p>
                     </a>
                  </li>
               ))}
            </ul>
        </nav>
      </div>
    </section>
  )
}

export default Links