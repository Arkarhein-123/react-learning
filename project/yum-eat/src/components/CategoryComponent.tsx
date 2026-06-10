import { categories } from "../data/data";

export default function CategoryComponent() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1 className="text-black text-4xl font-extrabold text-center py-4 uppercase">
        Trending Categories
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-5 px-2">
        {categories.map((item) => (
          <div
            key={item.id}
            className="p-4 flex justify-center items-center 
                        hover:scale-0 duration-300 ease-in-out cursor-pointer
                    "
          >
            <img
              src={item.image}
              className="w-40 object-cover rounded-xl h-10 cursor-pointer shadow-xl"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
