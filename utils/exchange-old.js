export default function oldExchange() {
  return (
    <>
      <div className="border rounded-md flex items-center">
        {navigation.map((item, index) => (
          <div
            key={index}
            className={`group group-hover:text-lg cursor-pointer px-3 py-2 ${
              item.route == asPath ? "text-base" : "text-sm"
            }`}
          >
            <Link href={item.route}> {item.name}</Link>
            <div
              className={`h-[2px] w-full bg-darkgreen rounded-xl group-hover:block duration-200 ${
                item.route == asPath ? "block" : "hidden"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <section>
        {/* Layout */}
        <div className="flex w-full space-x-4 divide-x">
          {/* left */}
          <div className="w-1/2 space-y-4 my-4">
            <div className="flex flex-col justify-between w-full">
              <label
                htmlFor="checkpoin"
                className="text-base font-normal text-gray-600"
              >
                Check Point
              </label>
              <select
                name=""
                id=""
                className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-base focus:ring-1"
              >
                <option value="">Binus Square</option>
              </select>
              {/* <p className="text-[9px] text-gray-500">ex : example@email.com</p> */}
            </div>
            <div className="flex flex-col justify-between w-full">
              <label
                htmlFor="checkpoin"
                className="text-base font-normal text-gray-600"
              >
                Address
              </label>
              <input
                type="text"
                placeholder="Jln.Sudirman no.6"
                className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-base focus:ring-1"
              />
              {/* <p className="text-[9px] text-gray-500">ex : example@email.com</p> */}
            </div>
            <div className="flex items-center space-x-4 w-full">
              <label
                htmlFor="checkpoin"
                className="text-base font-normal text-gray-600"
              >
                Trash Weight
              </label>
              <input
                type="number"
                placeholder="0"
                className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-20 rounded-md sm:text-base focus:ring-1"
              />
              <p className="text-gray-500">Kg</p>
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className="text-base font-normal text-gray-600">Date</div>
              <div className="flex space-x-2 my-2">
                {datearray.map((item, index) => (
                  <div
                    key={index}
                    className="relative border px-2 py-1 bg-white border-black rounded-md cursor-pointer"
                    style={{
                      backgroundColor: `${
                        item.values === radio
                          ? "rgb(76 110 89)"
                          : "rgb(255 255 255)"
                      }`,
                      color: `${item.values === radio ? "white" : "black"}`,
                    }}
                  >
                    <div className="text-sm">{item.values}</div>
                    <input
                      id={item.id}
                      name={item.name}
                      type="radio"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      value={item.values}
                      onChange={inputOnchange}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full space-y-5">
              <label
                htmlFor="checkpoin"
                className="text-base font-normal text-gray-600"
              >
                Upload Image Trash
              </label>
              <div className="p-2 border rounded-md border-gray-300 min-h-[100px] flex flex-col items-center justify-center">
                <div
                  style={{ display: `${con ? "none" : ""}` }}
                  className="text-gray-500 font-normal"
                >
                  Upload Your Image of Trash
                </div>
                <img
                  src={image}
                  style={{ display: `${con ? "" : "none"}` }}
                  onError={(e) => setCon(false)}
                  alt="Profile"
                  className="w-fit"
                  width={100}
                  height={100}
                />
              </div>
              <input
                id="dropzone-file"
                type="file"
                onChange={(e) => {
                  loadFotoOnchange(e);
                  setCon(true);
                }}
                name={"image"}
                accept="image/*"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
              />
            </div>
            <div
              onClick={() => {
                push("/exchange/status");
              }}
              className="w-full px-3 py-2 text-lg font-normal border rounded-md bg-darkgreen text-white cursor-pointer hover:text-greensm hover:bg-white border-greensm flex flex-col items-center shadow-md"
            >
              Sending
            </div>
          </div>
          {/* <div className="w-[2px] h-screen bg-greensm rounded-xl opacity-50"></div> */}
          {/* Rigth */}
          <div className="w-1/2"></div>
        </div>
      </section>
    </>
  );
}
