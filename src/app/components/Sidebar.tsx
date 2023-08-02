import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillPenFill } from "react-icons/bs";

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className='overflow-hidden bg-red-900 w-20'>
      <Image className='object-cover rounded-full' src='https://avatars.githubusercontent.com/u/87489750?v=4' width={100} height={100} alt='' />
      <div className='grid'>
        <strong>
          Douglas Rios
        </strong>
        <span>
          Web Developer
        </span>
      </div>
      <footer className='flex'>
        <BsFillPenFill />
        <Link href='' >Editar seu perfil</Link>
      </footer>
    </aside>
  )
}