import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CardBenefit from "../components/card/cardBenefit";
import Layout from "../components/layout/layout";
import { UseCart } from "../components/UseCart/UseCart";
import { motion } from "framer-motion";

export default function Index() {
  const { cart } = useContext(UseCart);
  const [reptcart, setReptCart] = useState([]);
  useEffect(() => {
    function getCart() {
      setReptCart(cart);
    }
    getCart();
  }, []);

  const blog = [
    {
      title: "Berita tentang keberhailan",
      alt: "inchs",
      img: "/assets/blog/pexels-inchs-6702766.jpg",
    },
    {
      title: "Berita tentang keberhailan",
      alt: "marta-ortigosa",
      img: "/assets/blog/pexels-marta-ortigosa-3480494.jpg",
    },
    {
      title: "Berita tentang keberhailan",
      alt: "lucien-wanda",
      img: "/assets/blog/pexels-lucien-wanda-2827735.jpg",
    },
    {
      title: "Berita tentang keberhailan",
      alt: "magda-ehlers",
      img: "/assets/blog/pexels-magda-ehlers-2602537.jpg",
    },
  ];

  return (
    <Layout title={"Home"} cart={reptcart}>
      <section id="judul" className="flex flex-col sm:flex-row font-Poppins">
        <div className="w-full h-screen relative">
          <div className="w-full h-screen md:h-full bg-slate-400 overflow-hidden">
            <img
              src="/assets/pexels-catherine-sheila-2409022.jpg"
              alt="pexels-catherine-sheila"
              className="aspect-auto 16/9"
            />
          </div>
        </div>
      </section>
      <section id="about" className="border-t">
        <div className="flex flex-col pt-40 pb-20 items-center">
          <div className="space-y-2 text-center">
            <motion.h2
              initial={{ y: 250, opacity: 0 }}
              whileInView={{ y: -10, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-darkgreen font-bold text-3xl"
            >
              About Us
            </motion.h2>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              whileInView={{ y: -10, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <p className="font-light text-base w-8/12">
                Perusahaan pengelola plastik PET terbaik dengan solusi
                pengelolaan sampah plastik PET yang ramah lingkungan. Kami siap
                membantu dalam pengumpulan, daur ulang, dan pemrosesan sampah
                plastik PET.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              whileInView={{ y: -10, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-2 underline text-greensm"
            >
              <Link href={"/about"}>{"More"}</Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="flex flex-col sm:flex-row py-24 items-center md:items-start md:space-y-0 space-y-10">
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:flex-grow space-y-2 w-3/4 md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-darkgreen font-bold text-2xl w-3/4">
              Whats our bussiness Benefit
            </h2>
            <p className="font-light text-sm w-3/4">
              Komitmen kami pada solusi pengelolaan sampah plastik PET yang
              ramah lingkungan menghasilkan produk berkualitas tinggi.
              Keunggulan kami adalah manfaat bisnis yang memberikan nilai tambah
              bagi pelanggan.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row md:space-x-2 items-center md:space-y-0 sm:space-x-6 space-y-3 justify-center px-8">
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              whileInView={{ y: -10, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CardBenefit
                image={"/assets/go-green.png"}
                title={"Ramah lingkungan"}
                desc={
                  "Solusi daur ulang sampah plastik PET yang ramah lingkungan"
                }
              />
            </motion.div>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              whileInView={{ y: -10, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CardBenefit
                image={"/assets/go-green.png"}
                title={"Efektif"}
                desc={
                  "Meningkatkan kebersihan dan kesehatan lingkungan sekitar"
                }
              />
            </motion.div>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              whileInView={{ y: -10, opacity: 1 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
            >
              <CardBenefit
                image={"/assets/go-green.png"}
                title={"Berkualitas"}
                desc={
                  "Menghasilkan produk berkualitas tinggi yang dapat digunakan kembali"
                }
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-10 px-10">
        <div className="text-center py-14">
          <motion.h2
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: -10, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-darkgreen font-bold text-3xl"
          >
            Blog
          </motion.h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-4">
          {blog?.map((item, index) => (
            <motion.div
              initial={{ y: 200, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 + index * 0.2 }}
              viewport={{ once: true }}
              className="w-3/4 lg:w-1/4 cursor-pointer"
              key={index}
            >
              <div className="w-full h-96 lg:h-60 rounded-md overflow-hidden hover:scale-105 hover:duration-500">
                <img src={item?.img} alt={item?.alt} className="w-72 h-60" />
              </div>
              <p className="py-4 font-Poppins font-light text-center">
                {item?.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
