import Image from "next/image";
import { FiCoffee } from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

export default function Home() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/87489750?v=4',
        name: 'Douglas Rios',
        role: 'Autor do projeto de estudo',
      },
      content: [
        {type: 'paragraph', content: 'Fala pessoal',},
        {type: 'paragraph', content: 'Acabei de publicar meu novo projeto. Corre lá e confere.'},
        {type: 'link', content: 'www.google.com'},
      ],
      publishedAt: new Date('2023-10-5 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/87489750?v=4',
        name: 'Teste',
        role: 'Testador oficial',
      },
      content: [
        {type: 'paragraph', content: 'Fala pessoal',},
        {type: 'paragraph', content: 'Acabei de publicar meu novo projeto. Corre lá e confere.'},
        {type: 'link', content: 'www.google.com'},
      ],
      publishedAt: new Date('2022-10-5 20:00:00'),
    }
  ]

  return (
    <div className="w-full h-full">
      <header className="flex justify-center items-center bg-stone-900 h-24">
        <FiCoffee className="mr-4 h-7 w-7" />
        <p className="font-bold text-2xl">Coffee Talks</p>
      </header>
      <main className="flex p-5 space-x-5">
        <Sidebar />
        <div className=" w-full bg-stone-900 grid justify-items-center content-center rounded-xl p-2">
          {posts.map(post => {
            return (
              <Post
              author={post.author},
              content={post.content},
              publishedAt={post.publishedAt}
              />
            )
          })}
        </div>
      </main>
    </div>
  );
}
