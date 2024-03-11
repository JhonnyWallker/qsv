function Footer() {
  return (
    <div className="bg-gradual-yellow h-auto p-10 pb-14">
      <div className="border-b-2 border-t-2 border-black p-10 flex flex-col md:flex-row justify-center gap-5">
        <div>
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1710094097/ctes-gradual-dark-30x117_a7z5f0.png"
            alt="Corrientes Gradual"
            className="w-44 mx-auto"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1710108318/ctes-somos-todos_mlqdal.png"
            alt="Corrientes Somos Todos"
            className="w-52 mx-auto"
          />
        </div>
      </div>
      <p className="text-center text-sm">
        © Copyright 2024 Corrientes Gradual - Todos los Derechos Reservados
      </p>
    </div>
  );
}

export default Footer;
