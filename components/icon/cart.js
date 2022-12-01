import Image from "next/image";
import { UseContext, useState } from "react";

export default function CartIcon({ asPath }) {
  return (
    <div
      className={`p-2 rounded-full hover:bg-neutral-200 focus:bg-neutral-200 cursor-pointer ${
        asPath == "/cart" ? "bg-neutral-200" : "bg-white"
      }`}
      title="Cart"
    >
      <Image src={"/assets/cart.png"} width={22} height={22} alt="cart" />
    </div>
  );
}
