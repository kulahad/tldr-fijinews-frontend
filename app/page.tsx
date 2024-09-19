"use client";

import { ModeToggle } from "@/components/ModeToggle";
import News from "@/components/news";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState<News[] | null>();

  const fetchNewsFromAPI = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API}/news`, {
      mode: "cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const posts: News[] = await data.json();
    setArticles(posts);
  };

  useEffect(() => {
    fetchNewsFromAPI();
  }, []);

  return (
    <main className="flex flex-col">
      <nav className="sticky flex top-0 h-16 z-10 bg-[--background]">
        <div className=" w-full flex justify-between items-center mx-6 my-auto ">
          <p className="font-extrabold text-xl ">TLDR Fiji News</p>
          <ModeToggle />
        </div>
      </nav>
      <Suspense fallback={<div className="m-auto">Loading...</div>}>
        <div className="flex flex-col justify-evenly mx-8">
          {articles &&
            articles
              .sort((a, b) => a.publish_time.localeCompare(b.publish_time))
              .map((article, id) => <News key={id} {...article} />)}
        </div>
      </Suspense>
    </main>
  );
}
