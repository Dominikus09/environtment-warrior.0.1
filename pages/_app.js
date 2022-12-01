import { useState } from "react";
import { UseCart } from "../components/UseCart/UseCart";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  return (
    <UseCart.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </UseCart.Provider>
  );
}

export default MyApp;
