import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetAllCourses } from "../../course/query/CourseHookQuery.tsx";
import { 
  Search, 
  BookOpen, 
  Star, 
  TrendingUp, 
  Award, 
  Users, 
  Sparkles,
  BookOpenCheck
} from "lucide-react";

export default function HomeComponent() {
  const { data: courses, isLoading, isError } = useGetAllCourses();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const searchQuery = searchParams.get("search") || "";

  // Helper to generate deterministic ratings and review counts for realism
  const getRating = (id: number) => {
    const ratings = [4.5, 4.6, 4.7, 4.8, 4.9];
    return ratings[(id * 7) % ratings.length];
  };

  const getReviewCount = (id: number) => {
    return ((id * 317) % 800) + 45;
  };

  const getOriginalPrice = (fees: number) => {
    if (fees === 0) return 0;
    return Math.floor(fees * 3.5) + 0.99;
  };

  // Filter courses based on query and category
  const filteredCourses = courses?.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || 
      course.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Programming", "Economics", "Maths"];

  if (isError) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-black">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md text-center border border-rose-100">
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-slate-500 mb-6">We couldn't retrieve the courses list. Please check your connection or try again later.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-md shadow-indigo-600/20 transition cursor-pointer"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white py-20 px-6 overflow-hidden">
        {/* Decorative Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Heading and description */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/15 border border-white/10 rounded-full text-xs font-semibold text-indigo-300 transition-colors">
              <Sparkles size={14} className="text-yellow-400" />
              <span>Unlock your true learning potential today</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Learn Without Limits. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300">
                Succeed Without Borders.
              </span>
            </h1>
            
            <p className="text-lg text-indigo-100/80 max-w-xl font-medium">
              Explore thousands of top-rated interactive courses taught by real-world experts. Build coding, math, and business skills with ease.
            </p>

            {/* Quick Stats Banner */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl font-bold text-white">10k+</p>
                <p className="text-xs text-indigo-200/60">Active Students</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">350+</p>
                <p className="text-xs text-indigo-200/60">Premium Courses</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4.9★</p>
                <p className="text-xs text-indigo-200/60">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Glassmorphism Card Graphics */}
          <div className="md:col-span-5 hidden md:block">
            <div className="relative flex justify-center items-center">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-95" />
              
              {/* Main Card Graphic */}
              <div className="relative bg-white/5 border border-white/15 backdrop-blur-md rounded-3xl p-8 shadow-2xl w-full max-w-sm flex flex-col justify-between aspect-square">
                <div className="flex justify-between items-start">
                  <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg shadow-indigo-600/30">
                    <BookOpenCheck size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/20">
                    LEARN FROM HOME
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                    <h2 className="text-xl font-bold text-white">Become a Master</h2>
                    <p className="text-xs text-indigo-200/70">Expertise on demand. High quality videos, interactive programming environments, quizzes and certificate of completion.</p>
                  </div>

                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border border-slate-900 bg-indigo-100 flex items-center justify-center font-bold text-indigo-900 text-xs shadow-sm">A</div>
                    <div className="w-8 h-8 rounded-full border border-slate-900 bg-purple-100 flex items-center justify-center font-bold text-purple-900 text-xs shadow-sm">K</div>
                    <div className="w-8 h-8 rounded-full border border-slate-900 bg-amber-100 flex items-center justify-center font-bold text-amber-900 text-xs shadow-sm">S</div>
                    <div className="w-8 h-8 rounded-full border border-slate-900 bg-indigo-950 flex items-center justify-center font-semibold text-white text-xs shadow-sm">+99</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs text-indigo-200/60 font-semibold">
                  <span className="flex items-center gap-1"><Users size={12} /> 12K+ Enrolled</span>
                  <span className="flex items-center gap-1 text-yellow-400"><Star size={12} className="fill-yellow-400" /> 4.9 Rating</span>
                </div>
              </div>

              {/* Float badge 1 */}
              <div className="absolute -top-6 -right-6 bg-white text-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 animate-bounce">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold text-lg">
                  📈
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 leading-none">Economics</p>
                  <p className="text-xs font-black text-slate-800 mt-1">Marketing 101</p>
                </div>
              </div>

              {/* Float badge 2 */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-lg">
                  💻
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 leading-none">Programming</p>
                  <p className="text-xs font-black text-slate-800 mt-1">Vite + React 19</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COURSE DIRECTORY --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <BookOpen className="text-indigo-600" />
              Start learning now
            </h2>
            <p className="text-slate-500 mt-1">Choose from our selected list of course offerings designed for you.</p>
          </div>

          {/* Search Indicator */}
          {searchQuery && (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100">
              <Search size={12} />
              <span>Filtered by search: "{searchQuery}"</span>
              <button 
                onClick={() => setSearchParams({})} 
                className="text-indigo-400 hover:text-indigo-700 font-bold ml-1 cursor-pointer bg-transparent border-none"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200/80 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                (selectedCategory.toLowerCase() === category.toLowerCase())
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/10"
                  : "bg-white text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4 animate-pulse">
                <div className="bg-slate-200 h-40 w-full rounded-xl" />
                <div className="space-y-2">
                  <div className="bg-slate-200 h-4 w-1/3 rounded" />
                  <div className="bg-slate-200 h-6 w-full rounded" />
                  <div className="bg-slate-200 h-4 w-2/3 rounded" />
                </div>
                <div className="bg-slate-200 h-8 w-full rounded-xl" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredCourses?.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 max-w-lg mx-auto p-8 shadow-sm">
            <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No courses match your criteria</h3>
            <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">Try clearing your filters or testing other searches to explore alternative subjects.</p>
            <div className="mt-6 flex justify-center gap-3">
              <button 
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchParams({});
                }} 
                className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-xl text-sm hover:bg-indigo-700 transition cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          </div>
        )}

        {/* Course Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses?.map((course) => {
              const rating = getRating(course.courseId);
              const reviews = getReviewCount(course.courseId);
              const originalPrice = getOriginalPrice(course.fees);

              return (
                <div
                  key={course.courseId}
                  className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Thumbnail / Header */}
                  <div className="relative aspect-video w-full overflow-hidden bg-indigo-50 border-b border-slate-100 flex items-center justify-center">
                    {course.imageBase64 ? (
                      <img
                        src={`data:image/jpeg;base64,${course.imageBase64}`}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      // Geometric Gradient Graphic if no image
                      <div className="w-full h-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white p-4">
                        <BookOpen size={36} className="mb-2 opacity-80" />
                        <span className="text-xs uppercase font-extrabold tracking-widest opacity-60">
                          {course.category}
                        </span>
                      </div>
                    )}

                    {/* Category Label */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      {course.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-800 text-md leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      
                      <p className="text-xs text-slate-400 font-medium">
                        Instructor: <span className="text-slate-600 font-semibold">{course.teacherName}</span>
                      </p>

                      {/* Ratings stars */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-amber-600">{rating.toFixed(1)}</span>
                        <div className="flex text-amber-500">
                          {[1, 2, 3, 4].map((starIdx) => (
                            <Star key={starIdx} size={12} className="fill-amber-500" />
                          ))}
                          <Star size={12} className={rating >= 4.8 ? "fill-amber-500" : ""} />
                        </div>
                        <span className="text-[10px] text-slate-400">({reviews})</span>
                      </div>
                    </div>

                    {/* Pricing and Actions */}
                    <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-indigo-600">
                          ${course.fees}
                        </span>
                        {originalPrice > 0 && (
                          <span className="text-xs text-slate-400 line-through">
                            ${originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Enroll Button */}
                      <button className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-lg text-xs font-bold transition-all duration-200 transform group-hover:scale-102 flex items-center gap-1 cursor-pointer border-none">
                        <TrendingUp size={12} />
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
