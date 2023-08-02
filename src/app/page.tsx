import Image from 'next/image'
import { FiCoffee } from "react-icons/fi";
import Sidebar from './components/Sidebar';



export default function Home() {
  return (
    <div className='w-full h-full'>
      <header className="flex justify-center items-center bg-stone-900 h-24">
        <FiCoffee className='mr-4 h-7 w-7' />
        <p className='font-bold text-2xl'>Coffee Talks</p>
      </header>
      <main>
        <Sidebar />
        <body>
          
        </body>
      </main>
    </div>
  )
}
