import Image from "next/image";
import { useState } from "react";

export default function CardProductCart({ item, funcCart, cart }) {
  const [product, setProduct] = useState(item);
  function plus(e) {
    funcCart((prev) =>
      prev.map((item, index) =>
        item.id === product.id
          ? { ...prev[index], qty: prev[index].qty + 1 }
          : item
      )
    );
  }
  function minus(e) {
    funcCart((prev) =>
      prev.map((item, index) =>
        item.id === product.id
          ? {
              ...prev[index],
              qty: prev[index].qty > 0 ? prev[index].qty - 1 : 0,
            }
          : item
      )
    );
  }

  return (
    <div className="p-2 rounded-md border flex">
      <div className="rounded-md h-24 bg-neutral-400 overflow-hidden flex flex-col items-center justify-center w-2/12">
        <Image
          src={product?.img}
          width={125}
          height={100}
          alt="Product"
          title={product?.title}
        />
      </div>
      <div className="px-2 flex-grow h-fit">
        <div className="h-5/6">
          <h4 className="font-medium">{product?.title}</h4>
          <p className="text-xs font-light">{product?.desc}</p>
          <p className="text-xs">
            <span className="font-medium">Stock : </span> {product?.stock}
          </p>
        </div>
        <div>
          <p className="flex flex-col products-start justify-end h-10">
            ${product?.price}
          </p>
        </div>
      </div>
      <div className="w-2/12 flex flex-col item-center justify-center">
        <div className="flex item-center">
          <button
            className="hover:bg-neutral-200 h-8 w-8 rounded-full flex flex-col items-center justify-center"
            onClick={(e) => {
              minus(e);
            }}
          >
            -
          </button>
          <p className="px-4 py-1">{item?.qty}</p>
          <button
            className="hover:bg-neutral-200 h-8 w-8 rounded-full flex flex-col items-center justify-center"
            onClick={(e) => {
              plus(e);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div
        className="px-2 flex flex-col item-center justify-center cursor-pointer text-xs text-red-600"
        onClick={() => {
          funcCart(cart.filter((value) => value.id !== product.id));
        }}
      >
        Remove
      </div>
    </div>
  );
}
