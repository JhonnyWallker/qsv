"use client";

import Link from "next/link";
import LoadingNew from "../loading";
import { useEffect, useState } from "react";
import Search from "./Search";

async function getData() {
  const dato = await fetch("https://whippo-eq6x.onrender.com/api/noticias");
  const data = await dato.json();
  return data.results.reverse();
}

function News() {
  const [load, setLoad] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getData().then((data) => {
      setLoad(data);
      setIsLoading(false);
    });
  }, []);

  const [search, setSearch] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  let result = [];

  result = load.filter((item) => item.title.toLowerCase().includes(search));

  return (
    <>
      {/* <div className="justify-center md:m-3 hidden md:flex md:justify-between gap-3 2xl:mx-80">
        <Search handler={handler} />
      </div> */}
      <div className="justify-center md:m-3 hidden md:flex gap-3 2xl:mx-80">
        <Link
          href="https://www.corrientes.gob.ar/"
          target="blank"
          className="hidden md:inline-flex"
        >
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677775249/logo-corrientes_rzqz0i.png"
            alt="Corrientes Somos Todos"
            title="Corrientes Somos Todos"
            className="w-80 mx-auto"
          />
        </Link>
      </div>
      {result.length === 0 && !isLoading && (
        <div className="h-screen text-center text-2xl text-slate-500">
          No se encontraron resultados
        </div>
      )}

      <div className="grid grid-col md:grid-cols-2 gap-3 md:m-3 lg:grid-cols-3 xl:m-3 2xl:mx-80">
        {isLoading ? (
          <LoadingNew />
        ) : (
          result.map((post, index) => (
            <Link
              href={`noticias/${post._id}`}
              key={post._id}
              className={`w-auto mx-auto rounded mt-5 hover:text-qsv-red hover:bg-white ${
                index === 0 ? "lg:col-span-3" : ""
              }`}
            >
              <h5
                className={`mb-3 ml-3 text-sm underline decoration-solid font-bold ${
                  index === 0 ? "lg:hidden" : ""
                }`}
              >
                {post.category}
              </h5>
              <img
                src={post.image_url}
                alt={post.title}
                className={`w-auto ${index === 0 ? "lg:hidden" : ""}`}
              />

              <div className={`m-3`}>
                <h3
                  className={`font-sans font-bold text-lg  ${
                    index === 0 ? "lg:text-2xl mb-5 underline decoration-solid" : ""
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`text-slate-500 m-1 text-xs ${
                    index === 0 ? "lg:text-lg lg:mb-5" : ""
                  }`}
                >
                  {post.description}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default News;
