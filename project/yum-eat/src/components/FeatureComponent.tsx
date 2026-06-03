import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Importing images from assets
import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";

export default function FeatureComponent() {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
      title: "Crispy Deals!",
      discount: "Get 50% OFF on all gourmet burgers today.",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
      title: "Cheesy Goodness",
      discount: "Buy 1 Get 1 Free on Large Pepperoni Pizzas.",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
      title: "Sizzling Woks",
      discount: "Free delivery on all traditional fried rice items.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* ─── SPLIDE CAROUSEL BLOCK ─── */}
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          speed: 1000,
          arrows: false,
          pagination: true,
        }}
        className="rounded-2xl shadow-md overflow-hidden"
      >
        {sliders.map((slide, index) => (
          <SplideSlide key={index}>
            <div
              className="w-full h-48 sm:h-72 bg-center bg-cover relative"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6" />
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <span className="bg-fuchsia-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                  Limited Offer
                </span>
                <h2 className="text-xl sm:text-3xl font-black mt-1.5 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 font-medium tracking-tight drop-shadow-sm">
                  {slide.discount}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* ─── FOOD SELECTION ITEMS WORKSPACE ─── */}
      <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mt-8 text-left">
        Popular Dishes Near You
      </h1>
      <p className="text-slate-500 mt-1 text-sm sm:text-base text-left">
        Fresh meals delivered straight to your doorstep. Select your favorite
        items below.
      </p>

      {/* Responsive Grid System Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="h-36 bg-slate-100 rounded-xl mb-3 overflow-hidden">
            <img
              src={food1}
              className="w-full h-full object-cover"
              alt="Burger"
            />
          </div>
          <h4 className="font-bold text-slate-800 text-left">
            Crispy Chicken Burger
          </h4>
          <p className="text-xs text-slate-400 mt-1 text-left">
            Served with hot french fries and dip sauce.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="h-36 bg-slate-100 rounded-xl mb-3 overflow-hidden">
            <img
              src={food2}
              className="w-full h-full object-cover"
              alt="Pizza"
            />
          </div>
          <h4 className="font-bold text-slate-800 text-left">
            Pepperoni Overload Pizza
          </h4>
          <p className="text-xs text-slate-400 mt-1 text-left">
            Freshly baked mozzarella crust dough base.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="h-36 bg-slate-100 rounded-xl mb-3 overflow-hidden">
            <img
              src={food3}
              className="w-full h-full object-cover"
              alt="Rice"
            />
          </div>
          <h4 className="font-bold text-slate-800 text-left">
            Special Fried Rice
          </h4>
          <p className="text-xs text-slate-400 mt-1 text-left">
            Traditional roasted style with choice of meat.
          </p>
        </div>
      </div>
    </div>
  );
}
