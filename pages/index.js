import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CardBenefit from "../components/card/cardBenefit";
import Layout from "../components/layout/layout";
import { UseCart } from "../components/UseCart/UseCart";

export default function Index() {
  const { cart, setcart } = useContext(UseCart);
  const [reptcart, setReptCart] = useState([]);
  useEffect(() => {
    function getCart() {
      setReptCart(cart);
    }
    getCart();
  }, []);
  return (
    <Layout title={"Home"}>
      <section className="flex flex-col sm:flex-row py-5 font-Poppins">
        <div className="w-1/2">
          <h1 className="text-darkgreen font-bold text-3xl">
            Exchange your plastic waste for money
          </h1>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/2 overflow-hidden">
          <Image
            src={"/assets/home-ew.png"}
            width={600}
            height={400}
            alt="Home"
            priority
          ></Image>
        </div>
      </section>
      <section className="border-t">
        <div className="flex flex-col sm:flex-row py-5 items-start">
          <div className="flex-grow space-y-2 w-1/2">
            <h2 className="text-darkgreen font-bold text-2xl w-3/4">
              Whats our bussiness Benefit
            </h2>
            <p className="font-light text-sm w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-0 items-center md:space-y-4 sm:space-x-6 sm:space-y-8 w-2/2">
            <CardBenefit image={"/assets/go-green.png"} />
            <CardBenefit image={"/assets/go-green.png"} />
            <CardBenefit image={"/assets/go-green.png"} />
          </div>
        </div>
      </section>
      <section className="py-10">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce &amp; Marketing
              pages.
            </p>
            <a
              href="#"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="ml-2 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </section>
    </Layout>
  );
}
