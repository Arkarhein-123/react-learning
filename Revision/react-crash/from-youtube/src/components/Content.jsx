import Items from "./Items";

export default function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      <main className="min-h-screen bg-gray-100 py-10 px-4">
        {/* Container Box */}
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {items.length ? (
            <Items
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ) : (
            <div className="text-center py-10 text-gray-400">
              <p className="text-lg font-medium">Your list is empty.</p>
              <p className="text-sm">စာရင်းထဲမှာ ဘာမှမရှိတော့ပါဘူး။</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
