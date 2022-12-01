import Image from "next/image";

export default function PhotoProfile() {
  return (
    <div
      className="bg-neutral-500 border-2 rounded-full h-10 w-10 overflow-hidden flex flex-col items-center justify-center cursor-pointer"
      title="Profile"
    >
      <Image src={"/assets/default.png"} width={60} height={60} alt="Profile" />
    </div>
  );
}
