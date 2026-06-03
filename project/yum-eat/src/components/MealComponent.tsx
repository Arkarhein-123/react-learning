import { mealData } from "../data/data";

export default function MealComponent() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto py-8">
        <h1 className="text-black text-3xl font-extrabold text-center py-4 uppercase">
          Meals
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {mealData.map((item) => (
            <div
              key={item.id}
              className="border-none hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-50 object-cover rounded-lg bo"
              />
              <div className="flex justify-between py-2 px-4">
                <p className="bg-orange-700 h-17 rounded-full -mt-10 text-white px-2 py-4 border-8">{item.price}</p>
                <h3 className="font-bold text-lg text-center">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
