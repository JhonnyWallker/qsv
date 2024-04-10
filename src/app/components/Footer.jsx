import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black h-auto p-10 pb-14">
      <div className="border-b-2 border-t-2 border-black p-10 flex flex-col md:flex-row justify-center gap-5">
        <Link href="/">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1711476730/qsv-light-100x30_rcp55l.png"
            alt="qsv"
            className="w-44 mx-auto"
            title="qsv"
          />
        </Link>
        <Link href="https://www.corrientes.gob.ar/" target="blank">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1710788777/ctes-somos-todos_mlqdal_knuy5z.png"
            alt="Corrientes Somos Todos"
            className="w-52 mx-auto"
            title="Corrientes Somos Todos"
          />
        </Link>
      </div>
      <p className="text-center text-sm text-white">
        © Copyright 2024 qsv Corrientes - Todos los Derechos Reservados
      </p>
    </div>
  );
}

export default Footer;
