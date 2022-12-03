import Image from "next/image";

export default function CardProduct({
  item,
  funcAdd,
  added,
  setCart,
  qtyProduct,
  funcLoad,
}) {
  function plus(e) {
    setCart((prev) =>
      prev.map((value, index) =>
        value.id === item.id
          ? { ...prev[index], qty: prev[index].qty + 1 }
          : value
      )
    );
  }
  function minus(e) {
    setCart((prev) =>
      prev.map((value, index) =>
        value.id === item.id
          ? {
              ...prev[index],
              qty: prev[index].qty > 0 ? prev[index].qty - 1 : 0,
            }
          : value
      )
    );
  }
  let triger = added && qtyProduct.qty > 0;
  return (
    <div className="p-2 border bg-white border-darkgreen rounded-xl shadow-xl cursor-pointer">
      <div className="rounded-md w-full h-40 bg-greensm flex flex-col items-center justify-center overflow-hidden">
        <Image
          src={item?.img}
          width={300}
          height={300}
          alt="Product"
          title={item?.title}
          priority
        />
      </div>
      <div className="py-2">
        <div className="text-black font-semibold">{item?.category}</div>
        <p className="font-normal">{item?.title}</p>
        <p className="text-xs">{item?.desc}</p>
        <div className="w-full h-14"></div>
        <p className="text-base py-4">Rp {item?.price},00</p>
        <div className="flex flex-col items-center justify-center">
          {triger ? (
            <div
              className={`flex item-center duration-1000 ease-in-out delay-200 translate-y-4 ${
                triger ? "translate-y-0" : "translate-y-10"
              }`}
            >
              <button
                className="hover:bg-neutral-200 h-8 w-8 rounded-full flex flex-col items-center justify-center"
                onClick={(e) => {
                  minus(e);
                }}
              >
                -
              </button>
              <p className="px-4 py-1">{qtyProduct?.qty}</p>
              <button
                className="hover:bg-neutral-200 h-8 w-8 rounded-full flex flex-col items-center justify-center"
                onClick={(e) => {
                  plus(e);
                  funcLoad(true);
                }}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="w-full py-1 flex flex-col items-center justify-center bg-greensm rounded-md border border-greensm text-white hover:bg-white hover:text-greensm"
              onClick={(e) => {
                funcAdd(item);
                plus(e);
                funcLoad(true);
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

CardProduct.defaultProps = {
  item: {
    category: "Category",
    title: "Product Name",
    desc: "0 ml",
    price: "0.000",
    image: "",
  },
};
