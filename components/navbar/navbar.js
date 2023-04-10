import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CartIcon from "../icon/cart";
import PhotoProfile from "../profile/profile";
import { motion } from "framer-motion";

export default function Navbar({ cartLength, fixed }) {
  const { asPath } = useRouter();
  const [cart, setCart] = useState(cartLength?.length ? cartLength?.length : 0);
  const [triger, setTriger] = useState({
    onScroll: false,
  });
  const navbar = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    // {
    //   name: "Product",
    //   route: "/product",
    // },
    {
      name: "Blog",
      route: "/blog",
    },
    {
      name: "Exchange",
      route: "/exchange",
    },
    // {
    //   name: "Admin",
    //   route: "/Admin/exchange/sending",
    // },
    // {
    //   name: "Sign In",
    //   route: "/auth/signin",
    // },
  ];

  useEffect(() => {
    function renderCart() {
      setCart(cartLength?.length);
    }
    renderCart();
  }, [cartLength]);

  return (
    <nav
      className={`z-50 w-full py-4 border- backdrop-blur-xl bg-white/40 flex px-10 ${
        fixed ? "fixed" : ""
      } ${triger?.onScroll ? "shadow-md" : ""}`}
    >
      <div className="text-darkgreen font-bold text-xl cursor-pointer ">
        <Link href={"/"} className="flex items-center space-x-2">
          <Image
            src={"/assets/LogoPikaNoBG.png"}
            alt="logo"
            width={60}
            height={60}
          ></Image>
          <div>
            <motion.h2
              initial={{ fontSize: 24 }}
              whileInView={{ fontSize: 20 }}
              transition={{ duration: 1 }}
              className="text-"
            >
              Plastik Kita
            </motion.h2>
            <p className="text-sm font-normal">
              Solusi Ramah Lingkungan untuk Pengelolaan Sampah Plastik PET.
            </p>
          </div>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <div className="hidden sm:flex space-x-3 font-Poppins items-center text-darkgreen">
        {navbar.map((item, index) => (
          <div
            key={index}
            className={`group group-hover:text-lg cursor-pointer ${
              item.route == asPath ? "text-base" : "text-sm"
            }`}
          >
            <Link href={item.route}> {item.name}</Link>
            <div
              className={`h-[2px] w-full bg-darkgreen rounded-xl group-hover:block duration-200 ${
                item.route == asPath ? "block" : "hidden"
              }`}
            ></div>
          </div>
        ))}
        {/* <div
          className={`px-3 py-1 rounded-md hover:text-darkgreen border border-darkgreen hover:bg-white cursor-pointer text-sm ${
            asPath === "/auth/signup"
              ? "bg-white text-greensm"
              : "bg-greensm text-white"
          }`}
        >
          <Link href={"/auth/signup"}>Sign Up</Link>
        </div> */}
        {/* <div className="relative">
          <Link href={"/cart"}>
            {cart > 0 ? (
              <div className="text-[9px] bottom-0 right-0 font-semibold text-white p-1 rounded-full h-4 w-4 bg-green-500 flex flex-col items-center justify-center absolute">
                {cart}
              </div>
            ) : null}
            <CartIcon asPath={asPath} cart={cartLength} />
          </Link>
        </div> */}
        {/* <div>
          <PhotoProfile />
        </div>
        <div className="font-medium">Rp 5.000,00</div> */}
      </div>
    </nav>
  );
}
