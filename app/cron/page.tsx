import React from "react";

async function page() {
  const data = await fetch("https://tldr-fijinews-api.onrender.com/grabnews", {
    method: "Post",
  });
  const trigger: { message: string } = await data.json();
  console.log(trigger);

  return (
    <div className="flex m-6 w-screen h-screen justify-center items-center text-3xl font-extrabold text-red-400">
      Scrapping triggered! - {trigger.message}
    </div>
  );
}

export default page;
