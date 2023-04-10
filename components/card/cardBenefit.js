export default function CardBenefit({ image, title, desc }) {
  return (
    <div className="p-3 rounded-lg w-80 h-40 py-10 md:py-4 md:w-60 shadow-xl bg-white shadow-neutral-300 hover:scale-110 hover:duration-500 cursor-pointer">
      <div className="w-full h-10 flex flex-col items-center justify-center">
        <img src={image} alt="Benefit" width={50} height={50} title={title} />
      </div>
      <div className="flex flex-col items-center text-center py-3">
        <p className="font-medium text-sm">{title}</p>
        <p className="font-normal text-sm text-neutral-500 w-56">{desc}</p>
      </div>
    </div>
  );
}
CardBenefit.defaultProps = {
  image: "",
  title: "Benefit",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
};
