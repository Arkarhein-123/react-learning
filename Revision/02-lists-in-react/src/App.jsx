import ConditionalRender from "./components/ConditionalRender";
import CounterComponent from "./components/CounterComponent";
import Loop from "./components/Loop";
import MyInfo from "./components/MyInfo";


function App() {
  return <div>
    <MyInfo name="Arkar Hein" age={22} parent="Orion" country="Myanmar" greet={() => "Hello What's Up?"}  />
    <CounterComponent/>
    <ConditionalRender/>
    <Loop/>
  </div>;
}

export default App;
