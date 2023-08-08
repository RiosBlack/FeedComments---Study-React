import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Post({}: Props) {
  return (
    <article>
      <header>
        <div>
          <Image className='object-cover rounded-full border-2 border-orange-400 outline outline-4 outline-stone-900' src='https://avatars.githubusercontent.com/u/87489750?v=4' width={100} height={100} alt='' />
          <strong>Douglas Rios</strong>
          <span>Web Developer</span>
        </div>
        <time title='10 de janeiro às 15:40h' dateTime='2022-01-10 15:40:00' suppressHydrationWarning>Publicado a 1 hora</time>
      </header>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, enim cumque veniam neque accusamus repellat totam, architecto at illo expedita eos nulla beatae? Atque nemo dolores molestiae nisi distinctio. Suscipit.
      </div>
    </article>
  )
}