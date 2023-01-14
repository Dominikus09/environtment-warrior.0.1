import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CardBenefit from "../components/card/cardBenefit";
import Layout from "../components/layout/layout";
import { UseCart } from "../components/UseCart/UseCart";

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
    <Layout title={"Home"} cart={reptcart}>
      <section
        id="judul"
        className="flex flex-col sm:flex-row py-5 font-Poppins"
      >
        <div
          className="w-full h-72 bg-no-repeat relative"
          style={{ background: "url('/assets/home-ew.png')" }}
        >
          {/* <Image
            className=" bg-fixed"
            src={"/assets/home-ew.png"}
            width={1500}
            height={400}
            alt="Home"
            priority
          ></Image> */}
          <div className="md:w-1/2 w-full md:px-0 px-6 h-screen">
            <h1 className="text-black font-bold text-4xl md:text-5xl">
              Exchange your plastic waste for money
            </h1>
            {/* <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p> */}

            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-semibold border px-2 py-1 rounded-md border-black cursor-pointer hover:bg-slate-50">
              <Link href={"/exchange"}>Exchange your PET</Link>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="border-t">
        <div className="flex flex-col py-20 items-center">
          <div className="space-y-2 text-center">
            <h2 className="text-darkgreen font-bold text-3xl">About Us</h2>
            <div className="flex flex-col items-center">
              <p className="font-light text-base w-8/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="py-2 underline text-greensm">
              <Link href={"/about"}>{"More"}</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="flex flex-col sm:flex-row py-24 items-center md:items-start md:space-y-0 space-y-10">
          <div className="flex flex-col items-center md:flex-grow space-y-2 w-3/4 md:w-1/2 text-center md:text-left">
            <h2 className="text-darkgreen font-bold text-2xl w-3/4">
              Whats our bussiness Benefit
            </h2>
            <p className="font-light text-sm w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-2 items-center md:space-y-4 sm:space-x-6 space-y-3 w-2/2 justify-center">
            <CardBenefit image={"/assets/go-green.png"} />
            <CardBenefit image={"/assets/go-green.png"} />
            <CardBenefit image={"/assets/go-green.png"} />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="text-center py-14">
          <h4 className="font-medium text-3xl">News</h4>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-4">
          <div className="w-3/4 lg:w-1/4">
            <div className="w-full h-96 lg:h-60 rounded-md bg-slate-400"></div>
            <p className="py-4 text-center">Berita tentang keberhailan</p>
          </div>
          <div className="w-3/4 lg:w-1/4">
            <div className="w-full h-96 lg:h-60 rounded-md bg-slate-400"></div>
            <p className="py-4 text-center">Berita tentang keberhailan</p>
          </div>
          <div className="w-3/4 lg:w-1/4">
            <div className="w-full h-96 lg:h-60 rounded-md bg-slate-400"></div>
            <p className="py-4 text-center">Berita tentang keberhailan</p>
          </div>
          <div className="w-3/4 lg:w-1/4">
            <div className="w-full h-96 lg:h-60 rounded-md bg-slate-400"></div>
            <p className="py-4 text-center">Berita tentang keberhailan</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
