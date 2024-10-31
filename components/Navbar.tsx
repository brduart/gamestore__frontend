import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="container text-white flex p-5">
        <div className="w-[8rem]">
          <Image alt="" src={"/Logo.png"} width={75} height={75} />
        </div>
        <nav className="flex-1 flex justify-center items-center">
          <ul className=" w-[70%] flex justify-around">
            <li>
              <Link href={"/"} className="text-[13px]">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[13px]">
                Categorias
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[13px]">
                Mais vendidos
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[13px]">
                Ofertas
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-[9rem]  flex items-center justify-center text-center">
          <Link
            href={"/"}
            className="inline-block bg-white text-black w-[85%] py-2.5 rounded-xl"
          >
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
