import Clock from "./Clock";
import Link from "next/link";

function Nav() {
  return (
    <div className="flex min-w-screen h-auto p-5 bg-white fixed top-0 left-0 right-0 z-40">
      <div className="flex flex-col mx-auto gap-3 md:flex-row md:justify-between w-full 2xl:mx-80">
        <Link href="/">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1711476720/qsv-dark-100x30_fl553m.png"
            alt="qsv"
            title="qsv"
            className="w-44 md:w-44 mx-auto 3xl:w-64"
          />
        </Link>

        <div className="mx-auto md:mx-0">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default Nav;
