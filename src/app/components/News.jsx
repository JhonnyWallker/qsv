"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

async function getData() {
  const dato = await fetch("https://whippo-eq6x.onrender.com/api/noticias");
  const data = await dato.json();
  return data.results.reverse();
}

function News() {
  const [load, setLoad] = useState([]);

  useEffect(() => {
    getData().then(data => setLoad(data));
  }, []);

  return (
    <>
      <div className="grid grid-col md:grid-cols-2 gap-3 md:m-3 lg:grid-cols-3 xl:mx-96">
        {load.map((post, index) => (
          <Link
            href='#'
            key={post._id}
            className={`w-auto mx-auto rounded hover:text-gradual-yell ${
              index === 0 ? "lg:col-span-2 h-auto lg:relative" : ""
            }`}
          >
             <h5 className="bg-gradual-yellow absolute text-xs mt-2 z-10 p-1 w-32">{post.category}</h5>
            <img src={post.image_url} alt={post.title} className={`w-auto  ${
              index === 0 ? "lg:brightness-50" : ""
            }`} />
           
            <div className={`m-3 ${
              index === 0 ? "lg:absolute lg:bottom-0" : ""
            }`}>
              <h3 className={`font-sans font-bold text-lg ${
              index === 0 ? "lg:text-white lg:text-xl" : ""
            }`}>{post.title}</h3>
              <p className={`text-slate-500 m-1 text-xs ${
              index === 0 ? "lg:text-white lg:text-lg" : ""
            }`}>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default News;
