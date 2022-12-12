import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CartIcon from "../icon/cart";
import PhotoProfile from "../profile/profile";

export default function Navbar({ cartLength, fixed }) {
  const { asPath } = useRouter();
  const [cart, setCart] = useState(cartLength?.length ? cartLength?.length : 0);
  const navbar = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Product",
      route: "/product",
    },
    {
      name: "Sign In",
      route: "/auth/signin",
    },
  ];

  useEffect(() => {
    function renderCart() {
      setCart(cartLength?.length);
    }
    renderCart();
  }, [cartLength]);

  return (
    <nav
      className={`z-50 w-full bg-white py-4 border-b flex px-10 ${
        fixed ? "fixed" : ""
      }`}
    >
      <div className="text-darkgreen font-bold text-xl cursor-pointer ">
        <Link href={"/"} className="flex items-center space-x-2">
          {/* <Image src={"/favicon.png"} alt="logo" width={35} height={35}></Image> */}
          <h2>Environment Warrior</h2>
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
        <div
          className={`px-3 py-1 rounded-md hover:text-darkgreen border border-darkgreen hover:bg-white cursor-pointer text-sm ${
            asPath === "/auth/signup"
              ? "bg-white text-greensm"
              : "bg-greensm text-white"
          }`}
        >
          <Link href={"/auth/signup"}>Sign Up</Link>
        </div>
        <div className="relative">
          <Link href={"/cart"}>
            {cart > 0 ? (
              <div className="text-[9px] bottom-0 right-0 font-semibold text-white p-1 rounded-full h-4 w-4 bg-green-500 flex flex-col items-center justify-center absolute">
                {cart}
              </div>
            ) : null}
            <CartIcon asPath={asPath} cart={cartLength} />
          </Link>
        </div>
        <div>
          <PhotoProfile />
        </div>
      </div>
    </nav>
  );
}
