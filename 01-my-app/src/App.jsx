// import {ConditionalRender} from "./components/*";
import CounterComponent from "./components/CounterComponent";
// import Loop from "./components/loop";

export default function App() {
  return (
    <>
      {/* <PersonInfo name = "Thamas" occupation = "Web Developer" country = "Myanmar" greet = {() => "Technologa , Achakana Technologa"}/>
      <PersonInfo name = "Arkar Hein" occupation = "Designer" country ="England" greet = {() => "God Damn!" }/>
      <PersonInfo name="Htet Arkar" occupation="It Assistatnt" country="England" greet = {() => "Why are you gay.."}>
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" 
          width={300} height={400} border={2} />
      </PersonInfo> */}
      {/* <ConditionalRender/> */}
      {/* <Loop/> */}
      <CounterComponent/>
    </>
  )
}
