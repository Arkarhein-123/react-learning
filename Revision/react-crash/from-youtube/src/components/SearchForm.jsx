
import { FaSearch } from "react-icons/fa";

export default function SearchForm({ searchItem, setSearchItem }) {


  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto my-4 flex max-w-md items-center px-4"
    >
      <div className="relative flex w-full items-center">
        {/* Search Icon (ရှာဖွေရေး အိုင်ကွန်) */}
        <div className="absolute left-3 pointer-events-none text-gray-400">
          <FaSearch className="text-base" />
        </div>

        {/* Input Field (စာရိုက်သည့်နေရာ) */}
        <input
          type="text"
          role="searchBox"
          placeholder="Search Items"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-black text-lg outline-none shadow-sm transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-50"
        />
      </div>
    </form>
  );
}
