import ListItems from "./ListItems";

export default function Items({ items, handleCheck, handleDelete }) {
  return (
    <ul className="divide-y divide-gray-100 p-4 space-y-2">
      {items.map((item) => (
        <ListItems
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
