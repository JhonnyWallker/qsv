function NavBar() {
  return (
    <div className="flex row justify-around m-5 items-center">
      <div className="columns-2 flex items-center gap-5">
        <div className="w-44">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1698078698/gradual-1-0_qa02dr.png"
            alt="Corrientes Gradual"
            title="Corrientes Gradual"
            className="size-full"
          />
        </div>

        <ul className="flex row gap-10">
          <li>Home</li>
          <li>Gobierno</li>
          <li>About</li>
        </ul>
      </div>

      <div><input type="search" placeholder="Buscar" className="border-slate-600" /></div>
      <div className="bg-red-600">reloj</div>
    </div>
  );
}

export default NavBar;
