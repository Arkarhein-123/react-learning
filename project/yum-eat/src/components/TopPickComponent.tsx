import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { topPicks } from "../data/data";

export default function TopPickComponent() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1 className="text-black font-extrabold text-3xl text-center py-4 uppercase">
        Top Picks
      </h1>

      <Splide
        hasTrack={false} // Use this to take control of the track
        options={{
          type: "loop", // Rewinds or loops the slides
          autoplay: true, // Enables autoplay
          interval: 2200, // Time in milliseconds (5000ms = 5 seconds)
          pauseOnHover: true, // Optional: Pauses autoplay when user hovers over the slider
          resetProgress: false,
          perPage: 4,
          gap: "1rem",
          arrows: true,
          pagination: false,
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 2 },
            1024: { perPage: 3 },
          },
        }}
      >
        {/* Explicitly add the Track wrapper */}
        <SplideTrack>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                {/* REMOVED opacity-0 and group-hover:opacity-100 */}
                {/* Now the overlay is always visible */}
                <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-between p-6 transition-opacity duration-300">
                  <div>
                    <p className="font-bold text-xl">{item.title}</p>
                    <p className="font-bold text-xl">{item.price}</p>
                  </div>
                  <button className="border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-black cursor-pointer transition duration-300 w-fit">
                    Add to Cart
                  </button>
                </div>

                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
}
