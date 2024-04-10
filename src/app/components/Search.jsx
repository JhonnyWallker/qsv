import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Search({ handler }) {
  return (
    <div className="relative w-96 h-10 md:mb-[50px]">
      <input
        onChange={handler}
        type="search"
        name="search"
        id="search"
        placeholder="Buscar"
        className="w-full h-full rounded-full p-3 pl-8 text-black bg-slate-200 focus:outline-none placeholder-black"
      />
      <MagnifyingGlassIcon className="absolute right-8 top-2 h-6 w-6 text-black" />
    </div>
  );
}

export default Search;
