export default function DeliveryComponent() {
  return (
    <>
      {/* CHANGED: Swapped w-[1300px] for w-full max-w-7xl and added a rounded border look */}
      <div className="w-full max-w-7xl bg-white border border-slate-200/60 rounded-3xl pt-8 pb-4 px-4 sm:px-6 lg:px-8 mx-auto shadow-sm">
        <h2 className="text-3xl font-black text-gray-900 mb-6 text-center uppercase tracking-tight">
          Quick Delivery App
        </h2>

        {/* CHANGED: Made grid stack vertically on mobile (grid-cols-1) and split on desktop (md:grid-cols-2) */}
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* CHANGED: Made image fluid (w-full max-w-[550px]) so it scales down natively */}
          <div className="w-full flex justify-center">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
              alt="Delivery App Preview"
              className="w-full max-w-[550px] h-auto object-contain my-4 drop-shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-left px-2">
            <p className="text-[#00df9a] font-bold uppercase tracking-wider text-sm">
              Get the App
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold py-2 text-slate-800 leading-tight">
              Limitless Convenient On-Demand
            </h1>
            <p className="text-slate-500 text-justify text-sm sm:text-base leading-relaxed mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              eius natus, molestias amet esse qui alias voluptatem eaque
              mollitia, nam excepturi laudantium aliquam, sunt rem! Perspiciatis
              eos ab blanditiis officia!
            </p>

            {/* CHANGED: Button aligns to center on mobile, and shifts left (md:mx-0) on desktop */}
            <button className="bg-fuchsia-800 hover:bg-fuchsia-600 w-[200px] rounded-xl py-3 text-md font-semibold my-6 mx-auto md:mx-0 text-white transition-all ease-in-out duration-300 cursor-pointer shadow-lg shadow-fuchsia-800/20">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
