import Link from "next/link";

export default function FormSignIn() {
  return (
    <form className="w-3/4 px-10 text-md space-y-3">
      <h2 className="text-xl font-medium mb-10">Sign In</h2>
      <div className="flex flex-col justify-between w-full">
        <label htmlFor="" className="text-sm font-normal text-gray-600">
          Email
        </label>
        <input
          type="text"
          className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <p className="text-[9px] text-gray-500">ex : example@email.com</p>
      </div>
      <div className="flex flex-col justify-between w-full">
        <label htmlFor="" className="text-sm font-normal text-gray-600">
          Password
        </label>
        <input
          type="password"
          className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </div>
      <div className="pt-10 w-full">
        <button className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-400">
          Sign In
        </button>
        <div className="py-2 flex text-xs space-x-2">
          <p className="">Dont have any account?</p>
          <Link href={"/auth/signup"} className={"text-green-500 font-medium"}>
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
