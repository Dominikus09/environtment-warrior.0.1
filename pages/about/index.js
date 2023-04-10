import { useContext, useEffect, useState } from "react";
import CardOwner from "../../components/card/cardOwner";
import Layout from "../../components/layout/layout";
import { UseCart } from "../../components/UseCart/UseCart";

export default function Index() {
  const { cart, setCart } = useContext(UseCart);
  const [reptcart, setReptCart] = useState([]);
  const [owner, setOwner] = useState([
    {
      name: "DOMINIKUS ANDIKA KURNIAWAN",
      nim: "2440056972",
      image: "/assets/ownerImage/dominikus-image.jpg",
    },
    {
      name: "WISESA GIAN KRESNOMUKTI PRAMIARTO",
      nim: "2440005952",
      image: "/assets/ownerImage/wisesa-image.jpg",
    },
    {
      name: "GALUH RHAKA WIRATAMA",
      nim: "2440041560",
      image: "/assets/ownerImage/raka-image.jpg",
    },
    {
      name: "MARCIAS LAURENSI DIVINASTO",
      nim: "2440094421",
      image: "/assets/ownerImage/marcias-image.jpg",
    },
  ]);

  useEffect(() => {
    function getCart() {
      setReptCart(cart);
    }
    getCart();
  }, []);
  return (
    <Layout title={"About"} cart={reptcart}>
      <section className="font-Poppins py-10 px-10 space-y-4">
        <div className="text-center lg:text-start">
          <h1 className="text-darkgreen font-bold text-2xl text-center">
            About Us
          </h1>
          <p className="text-base font-light indent-10 mt-10">
            Perusahaan pengelola plastik PET kami menawarkan solusi ramah
            lingkungan untuk mengelola sampah plastik PET. Kami menyediakan
            layanan pengumpulan, daur ulang, dan pemrosesan sampah plastik PET
            untuk menghasilkan produk berkualitas tinggi yang dapat digunakan
            kembali. Tim ahli kami menggunakan teknologi modern dan metode yang
            berkelanjutan untuk memastikan pengelolaan sampah plastik PET yang
            efektif dan efisien. Jika Anda membutuhkan solusi pengelolaan sampah
            plastik PET yang andal, kami siap membantu. Hubungi kami hari ini
            untuk informasi lebih lanjut.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-x-3 lg:px-28">
          {/* {true ? (
            owner?.map((item, index) => (
              <CardOwner
                name={item.name}
                nim={item.nim}
                image={item.image}
                key={index}
              />
            ))
          ) : (
            <div className="animate-pulse">Loading...</div>
          )} */}
        </div>
      </section>
      <section></section>
    </Layout>
  );
}
