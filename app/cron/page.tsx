"use client";

import React, { useEffect, useState } from "react";

function page() {
  const [trigger, setTrigger] = useState<{ message: string } | null>();

  const fetchdata = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API}/grabnews`, {
      method: "Post",
    });

    const data = await res.json();
    setTrigger(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="flex m-6 h-screen justify-center items-center text-3xl font-extrabold text-red-400">
      Scrapping triggered! - {trigger?.message}
    </div>
  );
}

export default page;
