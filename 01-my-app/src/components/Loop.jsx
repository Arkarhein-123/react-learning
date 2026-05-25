export default function Loop() {
  const fruits = ["apple", "banana", "cherry"];
  return (
    <>
      {fruits &&
        fruits.length > 0 &&
        fruits.map((fruits, index) => {
          return <li key={index}>{fruits}</li>;
        })}
    </>
  );
}
