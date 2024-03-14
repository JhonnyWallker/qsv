async function data(id) {
  const dato = await fetch(
    `https://whippo-eq6x.onrender.com/api/noticias/${id}`
  );
  const data = await dato.json();
  return data.noticia;
}

async function PageDetails({ params }) {
  const contenido = await data(params.id);

  return (
    <div className="m-4 2xl:mx-96 mt-[150px] mb-[150px]">
      <h1 className="text-md 2xl:text-2xl font-bold uppercase">
        {contenido.title}
      </h1>
      <p className="text-slate-500 text-sm 2xl:text-lg mt-20">
        {contenido.description}
      </p>
      <div className="mt-20">
        <img
          className="w-auto md:w-1/2 md:float-left me-7 mb-5"
          src={contenido.image_url}
          alt={contenido.title}
          title={contenido.title}
        />
      </div>

      <p className="text-sm 2xl:text-md whitespace-pre-line h-auto min-h-[800px]">
        {contenido.content}
      </p>
    </div>
  );
}

export default PageDetails;
