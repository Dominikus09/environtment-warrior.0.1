import Image from "next/image";
import FormSignUp from "../../components/form/formSignup";
import Layout from "../../components/layout/layout";

export default function Signup() {
  return (
    <Layout title={"signup"}>
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
          <FormSignUp />
        </div>
      </div>
    </Layout>
  );
}
