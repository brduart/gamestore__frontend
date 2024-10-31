import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen flex items-center justify-center border-b-[1px] border-line">
      <div className="container text-white flex p-3">
        <div className="w-[8rem]">
          <Image alt="" src={"/Logo.png"} width={75} height={75} />
        </div>
        <nav className="flex-1 flex justify-center items-center">
          <ul className=" w-[70%] flex justify-around font-semibold text-[14px]">
            <li>
              <Link href={"/"} className="">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="">
                Categorias
              </Link>
            </li>
            <li>
              <Link href={"/"} className="">
                Mais vendidos
              </Link>
            </li>
            <li>
              <Link href={"/"} className="">
                Ofertas
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-[10rem]  flex items-center justify-center text-center">
          <Link
            href={"/"}
            className="inline-block bg-white text-black w-[85%] py-2.5 rounded-xl text-[14px] font-semibold"
          >
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
