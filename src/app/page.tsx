import Image from "next/image";
import { FiCoffee } from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

export default function Home() {
  return (
    <div className="w-full h-full">
      <header className="flex justify-center items-center bg-stone-900 h-24">
        <FiCoffee className="mr-4 h-7 w-7" />
        <p className="font-bold text-2xl">Coffee Talks</p>
      </header>
      <main className="flex p-5 space-x-5">
        <Sidebar />
        <div className=" w-full bg-stone-900 grid justify-items-center content-center rounded-xl p-2">
          <Post />
        </div>
      </main>
    </div>
  );
}
