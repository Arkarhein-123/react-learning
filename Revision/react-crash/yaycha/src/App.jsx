import { useState } from "react";
import List from "./List";
import Item from "./Item";

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello World", name: "Arkar" },
    { id: 2, content: "React is Fun", name: "Hein" },
    { id: 3, content: "Spring Boot is Fun", name: "Orion" }
  ]);
  const remove = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  return (
    <div className="container w-50 my-5">
      <h1>YayCha</h1>
      <List>
        {
          data.map(item => (
            <Item key={item.id} item={item} remove={remove} />
          ))
        }
      </List>
    </div>
  )
}
