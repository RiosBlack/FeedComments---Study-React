import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillPenFill } from "react-icons/bs";

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className='overflow-hidden bg-stone-900 w-64 grid justify-items-center rounded-xl'>
      <Image className='object-cover w-full h-16' src='https://avatars.githubusercontent.com/u/87489750?v=4' width={100} height={100} alt='' />
      <Image className='object-cover rounded-full border-2 border-green-700' src='https://avatars.githubusercontent.com/u/87489750?v=4' width={100} height={100} alt='' />
      <div className='grid justify-items-center'>
        <strong className='mt-2 text-xl font-bold'>
          Douglas Rios
        </strong>
        <span className='text-sm'>
          Web Developer
        </span>
      </div>
      <footer className='flex items-center space-x-2 p-2 border-2 rounded-xl border-green-700 text-green-600 m-3'>
        <BsFillPenFill />
        <Link href='' >Editar seu perfil</Link>
      </footer>
    </aside>
  )
}