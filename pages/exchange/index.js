import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CardOwner from "../../components/card/cardOwner";
import Layout from "../../components/layout/layout";
import { UseCart } from "../../components/UseCart/UseCart";

export default function Index() {
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

  function loadFotoOnchange(e) {
    const { files } = e.target;

    if (files) {
      const view = new FileReader();
      if (files[0] && files[0].type.includes("image")) {
        view.readAsDataURL(files[0]);
      }
      view.onload = function () {
        const result = view.result;
        setImage(result);
      };
    }
  }
  const navigation = [
    {
      name: "Exchange",
      route: "/exchange",
    },
    {
      name: "Status",
      route: "/exchange/status",
    },
    // {
    //   name: "Proccessed",
    //   route: "/exchange/Proccessed",
    // },
    // {
    //   name: "Complete",
    //   route: "//exchange/complete",
    // },
  ];

  const datearray = [
    {
      name: "dateopt",
      id: date.getUTCDate(),
      values:
        date.getUTCDate().toString() + "-" + date.getMonth() + 1 + "-" + "2023",
    },
    {
      name: "dateopt",
      id: date.getUTCDate() + 1,
      values:
        (date.getUTCDate() + 1).toString() +
        "-" +
        date.getMonth() +
        1 +
        "-" +
        "2023",
    },
    {
      name: "dateopt",
      id: date.getUTCDate() + 2,
      values:
        (date.getUTCDate() + 2).toString() +
        "-" +
        date.getMonth() +
        1 +
        "-" +
        "2023",
    },
    {
      name: "dateopt",
      id: date.getUTCDate() + 3,
      values:
        (date.getUTCDate() + 3).toString() +
        "-" +
        date.getMonth() +
        1 +
        "-" +
        "2023",
    },
    {
      name: "dateopt",
      id: date.getUTCDate() + 4,
      values:
        (date.getUTCDate() + 4).toString() +
        "-" +
        date.getMonth() +
        1 +
        "-" +
        "2023",
    },
  ];
  return (
    <Layout title={"exchange"} cart={reptcart}>
      <section className="font-Poppins py-10 px-10 space-y-4 flex flex-col items-center justify-center h-screen">
        <div className="text-center lg:text-start space-y-2">
          <h1 className="text-darkgreen font-bold text-5xl">Comming Soon!</h1>
          <div className="text-gray-500">
            Fitur baru segera hadir! Nikmati pengalaman pengelolaan sampah
            plastik PET yang lebih baik, efektif, dan efisien.
          </div>
          <div className="text-gray-500">
            Tunggu kejutan selanjutnya dari kami!
          </div>
        </div>
      </section>
    </Layout>
  );
}
