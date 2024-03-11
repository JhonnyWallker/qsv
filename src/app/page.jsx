import Image from "next/image";
import Clock from "./components/Clock";
import MovilNav from "./components/MovilNav";
import News from "./components/News";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-w-screen h-auto p-5 bg-gradual-yellow fixed top-0 left-0 right-0 z-40">
        <div className="flex flex-col mx-auto gap-3 md:flex-row md:justify-between w-full xl:mx-96">
          <div>
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1710094097/ctes-gradual-dark-30x117_a7z5f0.png"
              alt="Corrientes Gradual"
              className="w-44 md:w-44 mx-auto 3xl:w-64"
            />
          </div>
          <div className="hidden md:inline-flex">
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1710108318/ctes-somos-todos_mlqdal.png"
              alt="Corrientes Somos Todos"
              className="w-52 mx-auto"
            />
          </div>
          <div className="mx-auto md:mx-0">
            <Clock />
          </div>
        </div>
      </main>

      <div className="mt-[150px] mb-[150px]">
        <News />
      </div>
      <div className="md:bottom-0">
        <Footer />
      </div>
      {/* <div className="fixed bottom-0 left-0 right-0 md:invisible">
        <MovilNav />
      </div> */}
    </>
  );
}
