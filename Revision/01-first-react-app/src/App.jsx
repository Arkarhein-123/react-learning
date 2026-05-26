//  const welcome = {
//   greet : "Hello",
//   title : "React"

import Header from "./components/Header";

//  }
function getTitle(title){
  return title;
}

let myArr = [1,2,3,4,5,6,7,8,9,10];

 function App(){ 
  return (
    <>
      <h1>Hello {getTitle("React")}</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
      <button>Search</button>

      <p>My Array Data</p>
      <ul>
        {myArr.map((data)=>{
          return <li key={data}>{data}</li>
        })}
      </ul>

      <Header/>
    </>
  );
}

export default App;
