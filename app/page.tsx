import { ModeToggle } from "@/components/ModeToggle";
import News from "@/components/news";

export default async function Home() {
  const data = await fetch("https://tldr-fijinews-api.onrender.com/news");
  const posts: News[] = await data.json();

  return (
    <main className="flex flex-col">
      <nav className="sticky flex top-0 h-16 z-10 bg-[--background]">
        <div className=" w-full flex justify-between items-center mx-6 my-auto ">
          <p className="font-extrabold text-xl ">TLDR Fiji News</p>
          <ModeToggle />
        </div>
      </nav>
      <div className="flex flex-col justify-evenly mx-8">
        {posts.map((article, id) => (
          <News key={id} {...article} />
        ))}
      </div>
    </main>
  );
}
