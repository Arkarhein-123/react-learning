import { useState } from "react";
import { mealData } from "../data/data";

export default function MealComponents() {
  const [foods, setFoods] = useState(mealData);
  const findByCategory = (category: string) => {
    setFoods(mealData.filter((item) => item.category === category));
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-black font-extrabold text-center text-3xl">
          Our Meal
        </h1>
        <div className="flex flex-col lg:flex-row justify-center">
          <button
            className="m-1 border-orange-500 text-white bg-orange-500 
            hover:bg-white hover:text-orange-500 py-1 px-3 rounded-2xl cursor-pointer"
            onClick={() => setFoods(mealData)}
          >
            All
          </button>

          <button
            className="m-1 border-orange-500 text-white bg-orange-500 
            hover:bg-white hover:text-orange-500 py-1 px-3 rounded-2xl cursor-pointer"
            onClick={() => findByCategory("pizza")}
          >
            Pizza
          </button>

          <button
            className="m-1 border-orange-500 text-white bg-orange-500 
            hover:bg-white hover:text-orange-500 py-1 px-3 rounded-2xl cursor-pointer"
            onClick={() => findByCategory("chicken")}
          >
            Chicken
          </button>

          <button
            className="m-1 border-orange-500 text-white bg-orange-500 
            hover:bg-white hover:text-orange-500 py-1 px-3 rounded-2xl cursor-pointer"
            onClick={() => findByCategory("salad")}
          >
            Salad
          </button>

          <button
            className="m-1 border-orange-500 text-white bg-orange-500 
            hover:bg-white hover:text-orange-500 py-1 px-3 rounded-2xl cursor-pointer"
            onClick={() => findByCategory("burger")}
          >
            Burger
          </button>

          <button
            className="m-1 border-orange-500 text-white bg-orange-500 
            hover:bg-white hover:text-orange-500 py-1 px-3 rounded-2xl cursor-pointer"
            onClick={() => findByCategory("fish")}
          >
            Fish
          </button>

          <button
            className="m-1 border-orange-500 text-white bg-orange-500 
            hover:bg-white hover:text-orange-500 py-1 px-3 rounded-2xl cursor-pointer"
            onClick={() => findByCategory("veg")}
          >
            Veg
          </button>

          <button
            className="m-1 border-orange-500 text-white bg-orange-500 
            hover:bg-white hover:text-orange-500 py-1 px-3 rounded-2xl cursor-pointer"
            onClick={() => findByCategory("seafood")}
          >
            Seafood
          </button>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {foods.map((item) => (
            <div
              key={item.id}
              className="border-none hover:scale-115 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="flex justify-between py-2 px-4">
                <p
                  className="bg-orange-700 h-18 rounded-full 
                        -mt-10 px-2 text-white py-4 border-8"
                >
                  {item.price}
                </p>
                <h4 className="font-mono text-lg text-center">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
