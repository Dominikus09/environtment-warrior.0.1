import Image from "next/image";
import FormSignIn from "../../components/form/formSignIn";
import Layout from "../../components/layout/layout";

export default function Signin() {
  return (
    <Layout title={"signin"}>
      <div className="flex">
        <div className="w-7/12 h-fit flex flex-col items-center justify-center">
          <Image
            src="/assets/earth.png"
            alt="eart"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="w-5/12 border-l flex flex-col items-center justify-center">
          <FormSignIn />
        </div>
      </div>
    </Layout>
  );
}
