import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import { UseCart } from "../../../components/UseCart/UseCart";

export default function Complete() {
  const { cart, setCart } = useContext(UseCart);
  const { asPath, push } = useRouter();
  const [reptcart, setReptCart] = useState([]);
  const [image, setImage] = useState("");
  const [date, setDate] = useState(new Date());
  const [radio, setRadio] = useState("");
  const [con, setCon] = useState(false);

  useEffect(() => {
    function getCart() {
      setReptCart(cart);
    }
    getCart();
  }, []);

  function inputOnchange(e) {
    const { name, value } = e.target;
    setRadio(value);
  }

  const navigation = [
    {
      name: "Sending",
      route: "/Admin/exchange/sending",
    },
    {
      name: "Process",
      route: "/Admin/exchange/process",
    },
    {
      name: "Complete",
      route: "/Admin/exchange/complete",
    },
    // {
    //   name: "Complete",
    //   route: "//exchange/complete",
    // },
  ];

  return (
    <Layout title={"exchange"} cart={reptcart}>
      <section className="font-Poppins py-5 space-y-4">
        <div className="text-center lg:text-start">
          <h1 className="text-darkgreen font-bold text-2xl">Exchange</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <div className="border rounded-md flex items-center">
        {navigation.map((item, index) => (
          <div
            key={index}
            className={`group group-hover:text-lg cursor-pointer px-3 py-2 ${
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
      </div>
      <section>
        {/* Layout */}
        <div className="flex w-full space-x-4 divide-x">
          {/* left */}
          <div className="w-1/2 space-y-4 my-4">
            <div className="border border-gray-500 rounded-md px-3 py-1">
              <div className="flex items-center justify-between border-b border-gray-500 py-1">
                <div className="font-medium text-lg">ID00A1</div>
                <div>14 - 01 - 2023</div>
              </div>
              <div className="flex">
                <div className="py-2 px-4">
                  <input type="checkbox" />
                </div>
                <div className="w-1/2 py-2">
                  <div className="flex items-center justify-between">
                    <div className="font-normal">Check Poin</div>
                    <div>Binus Square</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-normal">Address</div>
                    <div>Jln. Kemang, no.2</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-normal">Weight</div>
                    <div>1 Kg</div>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <div className="font-medium">Complete</div>
                </div>
              </div>
            </div>
          </div>
          {/* Rigth */}
          <div className="w-1/2"></div>
        </div>
      </section>
    </Layout>
  );
}
