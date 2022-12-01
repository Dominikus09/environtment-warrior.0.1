import { useContext, useEffect, useState } from "react";
import CardOwner from "../../components/card/cardOwner";
import Layout from "../../components/layout/layout";
import { UseCart } from "../../components/UseCart/UseCart";

export default function Index() {
  const { cart, setCart } = useContext(UseCart);
  const [reptcart, setReptCart] = useState([]);
  useEffect(() => {
    function getCart() {
      setReptCart(cart);
    }
    getCart();
  }, []);
  return (
    <Layout title={"About"} cart={reptcart}>
      <section className="font-Poppins py-5 space-y-4">
        <div className="">
          <h1 className="text-darkgreen font-bold text-2xl">About Us</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex space-x-3">
          {false ? (
            data?.map((item, index) => <CardOwner key={index} />)
          ) : (
            <div className="animate-pulse">Loading...</div>
          )}
        </div>
      </section>
      <section></section>
    </Layout>
  );
}
