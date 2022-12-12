export default function CardOwner({ image, name, nim }) {
  return (
    <div className="p-3 rounded-lg bg-greensm w-3/4 lg:w-56 shadow-xl">
      <div className="w-full h-44 lg:h-28 flex flex-col items-center justify-center">
        <div className="bg-gray-400 rounded-full w-24 h-24 flex flex-col items-center justify-center">
          {image}
        </div>
      </div>
      <div className="flex flex-col items-center text-white text-center py-5 overflow-hidden h-24">
        <p className="font-medium text-sm">{name}</p>
        <p className="font-normal text-sm">{nim}</p>
      </div>
    </div>
  );
}
CardOwner.defaultProps = {
  image: "",
  name: "Owner Name",
  nim: "ownernamenim",
};
