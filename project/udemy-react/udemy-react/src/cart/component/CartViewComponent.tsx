import { Link } from "react-router-dom";
import useCart from "../useCart";
import type { EnrolledDto } from "../dto/EnrolledDto";
import { enrolledCourseRequest } from "../../course/service/CourseService";

export default function CartViewComponent() {
  const { items, removeItem, clearCart } = useCart();

  const checkoutHandler = async () => {
    const ids = items.map((item) => item.courseId);
    console.log(ids);
    const enrolledDto: EnrolledDto = {
      courseIds : ids,
    };
    try{
      const successString = await enrolledCourseRequest(enrolledDto);
      console.log("Success String from check : ",successString);
      clearCart();
    }catch(e){
      console.log("Api Error:=>" , e);
    }
  };

  const totalFees = items ? items.reduce((sum, item) => sum + item.fees, 0) : 0;

  if (!items || items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our courses and find something to learn!
        </p>
        <Link
          to="/"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded"
        >
          Keep Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <p className="text-gray-700 font-semibold mb-4">
        {items.length} Courses in Cart
      </p>

      {/* Main Layout / Udemy Layout ပုံစံ 2 ခြမ်းခွဲခြင်း */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Course List / ဘယ်ဘက်ခြမ်း: Course များစာရင်း */}
        <div className="lg:col-span-2 divide-y divide-gray-200 border-t border-b border-gray-200">
          {items.map((item) => (
            <div
              key={item.courseId}
              className="py-4 flex flex-col sm:flex-row gap-4 justify-between items-start"
            >
              {/* Course Thumbnail & Info */}
              <div className="flex gap-4 flex-1">
                <img
                  src={`data:image/jpeg;base64,${item.imageBase64}`}
                  alt={item.title}
                  className="w-28 h-20 object-cover rounded border border-gray-200 flex-shrink-0"
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 text-base md:text-lg hover:text-purple-700 cursor-pointer line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">By {item.teacherName}</p>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Action and Price / ဖျက်ရန် ခလုတ်နှင့် ဈေးနှုန်း */}
              <div className="flex sm:flex-col justify-between sm:items-end w-full sm:w-auto pt-2 sm:pt-0 gap-2">
                <span className="text-xl font-bold text-purple-700 order-2 sm:order-1">
                  ${item.fees.toLocaleString()}
                </span>
                <button
                  onClick={() => removeItem(item.courseId)}
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium underline order-1 sm:order-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Clear Cart Button */}
          <div className="pt-4 text-right">
            <button
              onClick={clearCart}
              className="text-sm text-red-600 hover:text-red-800 font-semibold"
            >
              Clear All Items
            </button>
          </div>
        </div>

        {/* Right Side: Total Summary Card / ညာဘက်ခြမ်း: ငွေရှင်းရန် Summary ကတ် */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 lg:sticky lg:top-4">
          <h2 className="text-gray-600 font-semibold text-lg mb-1">Total:</h2>
          <div className="text-3xl font-extrabold text-gray-900 mb-4">
            ${totalFees.toLocaleString()}
          </div>

          <button
            onClick={checkoutHandler}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-4 rounded text-center transition-colors mb-4"
          >
            Proceed to Checkout
          </button>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-500 text-center">
              30-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
