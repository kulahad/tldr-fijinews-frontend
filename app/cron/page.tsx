import React from "react";

async function page() {
  const data = await fetch("https://tldr-fijinews-api.onrender.com/grabnews");
  const trigger: string = await data.json();

  return <div>{trigger}</div>;
}

export default page;
