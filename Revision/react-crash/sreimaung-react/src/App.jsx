import ChangeColor from "./components/ChangeColor"
import Item from "./components/Item"
import List from "./components/List"
import StateExample from "./components/StateExample"


function App() {
  return (
    <>
      <ChangeColor />
      <List>
        <Item name="Item 1" price="1000" />
        <Item name="Item 2" price="2000" />
        <Item name="Item 3" price="3000" />
      </List>

      {/* State example */}
      <StateExample />
    </>
  )
}

export default App
