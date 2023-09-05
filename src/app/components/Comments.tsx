import Image from "next/image"
import { AiOutlineLike } from 'react-icons/ai';
import { BsTrash } from "react-icons/bs";
type Props = {}

export default function Comments({}: Props) {
  return (
    <div className="p-2">
      <div className="flex">
        <Image
              className="w-14 h-14 object-cover rounded-xl border-2 border-orange-400 outline outline-4 outline-stone-900"
              src="https://avatars.githubusercontent.com/u/87489750?v=4"
              width={100}
              height={100}
              alt=""
            />
          <div className=" bg-stone-700 w-full ml-2 rounded-md p-2 flex-1">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2 items-center">
                  <strong className="mt-2 text-orange-400">Douglas Rios</strong>
                  <p>(você)</p>
                </div>
                <button>
                  <BsTrash />
                </button>
              </div>
              <time
              title="10 de janeiro às 15:40h"
              dateTime="2022-01-10 15:40:00"
              suppressHydrationWarning
              className="text-orange-400"
              >
                Cerca de 1 hora atrás
              </time>
            </div>
            <p>Comentário</p>
          </div>
      </div>
      <button className="flex space-x-2 items-center ml-16 mt-2 font-bold text-stone-600 hover:text-stone-400">
        < AiOutlineLike />
        <p>Aplaudir</p>
        <span>02</span>
      </button>
    </div>
  )
}