import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CardProductCart from "../../components/card/cardProductCard";
import Layout from "../../components/layout/layout";
import { UseCart } from "../../components/UseCart/UseCart";

export default function Index() {
  const { cart, setCart } = useContext(UseCart);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    function countTotal() {
      var st = cart.map((item, index) => item.qty * item.price);
      var ft = st.reduce((accum, a) => accum + a, 0);
      setSubTotal(ft);
    }
    countTotal();
  }, [cart]);

  return (
    <Layout title={"Cart"} cart={cart}>
      <section className="py-5 font-Poppins">
        <h1 className="text-darkgreen font-medium text-xl py-3">Your Cart</h1>
        <div className="border-t-2 border-neutral-300 flex">
          <div className="w-8/12 p-2 space-y-1">
            {cart?.map((item, index) => (
              <CardProductCart
                key={index}
                item={item}
                funcCart={setCart}
                cart={cart}
              />
            ))}
          </div>
          <div className="w-4/12">
            <div className="rounded-md shadow-md border border-neutral-300 p-2 my-2">
              <h2 className="py-1 font-medium text-base border-b border-neutral-400">
                Cart Totals
              </h2>
              <div className="text-xs py-3">
                <div className="min-h-[150px] space-y-1">
                  {cart?.map((item, index) => (
                    <div className="flex justify-between" key={index}>
                      <p>
                        {item.qty} x {item.title}
                      </p>
                      <p>$ {item.qty * item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-4">
                  <p>Sub Total</p>
                  <p>$ {subTotal}</p>
                </div>
              </div>
              <div className="text-sm space-y-4 py-2">
                <div className="flex justify-between">
                  <p>Total Price</p>
                  <p>$ {subTotal}</p>
                </div>
                {/* <button className="rounded-md py-2 bg-green-600 hover:bg-green-400 text-white w-full">
                  Checkout
                </button> */}
                <Link href={"/cart/payment"}>
                  <div className="rounded-md py-2 bg-green-600 hover:bg-green-400 text-white w-full">
                    Checkout
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
