import { useContext, useEffect, useState } from "react";
import CardProduct from "../../components/card/cardProduct";
import Layout from "../../components/layout/layout";
import { UseCart } from "../../components/UseCart/UseCart";

export default function Index() {
  const { cart, setCart } = useContext(UseCart);
  const [load, setLoad] = useState(false);
  const [reptcart, setReptCart] = useState(cart);

  useEffect(() => {
    function getCart() {
      setReptCart(cart);
    }
    getCart();
  }, [load, cart]);
  const products = [
    {
      title: "Sendok Makan",
      desc: "Sendoc makan daur ulang!",
      price: 2000,
      img: "/assets/product.jpg",
      categories: "Sendok",
      qty: 0,
      stock: 5,
      id: 1,
    },
    {
      title: "Gaerpu Makan",
      desc: "Sendoc makan daur ulang!",
      price: 2000,
      img: "/assets/product1.png",
      categories: "Sendok",
      qty: 0,
      stock: 5,
      id: 2,
    },
    {
      title: "piring Makan",
      desc: "Sendoc makan daur ulang!",
      price: 2000,
      img: "/assets/product2.jpg",
      categories: "Sendok",
      qty: 0,
      stock: 5,
      id: 3,
    },
    {
      title: "piring Makan",
      desc: "Sendoc makan daur ulang!",
      price: 2000,
      img: "/assets/product2.jpg",
      categories: "Sendok",
      qty: 0,
      stock: 5,
      id: 4,
    },
    {
      title: "piring Maka kkn",
      desc: "Sendoc makan daur ulang!",
      price: 2000,
      img: "/assets/product2.jpg",
      categories: "Sendok",
      qty: 0,
      stock: 5,
      id: 5,
    },
    {
      title: "piring Maka kkn",
      desc: "Sendoc makan daur ulang!",
      price: 2000,
      img: "/assets/product2.jpg",
      categories: "Sendok",
      qty: 0,
      stock: 5,
      id: 6,
    },
  ];

  function handleAdd(e) {
    setCart((prev) =>
      prev.some((item) => item.id === e.id) ? prev : [...prev, e]
    );
  }
  return (
    <Layout title={"Product"} cart={reptcart}>
      <section className="font-Poppins py-5">
        <div className="py-4 flex flex-col items-center text-center">
          <h1 className="text-darkgreen font-bold text-2xl">Product</h1>
          <p className="text-sm font-normal sm:w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="py-4 border-t">
          <h2 className="text-darkgreen font-medium text-xl">
            Shop Equipment <button>cek</button>
          </h2>
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
            {products?.map((item, index) => (
              <div key={index}>
                <CardProduct
                  key={index}
                  item={item}
                  funcLoad={setLoad}
                  funcAdd={handleAdd}
                  setCart={setCart}
                  qtyProduct={cart?.filter((value) => value.id === item.id)[0]}
                  added={cart?.some((value) => value.id === item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
