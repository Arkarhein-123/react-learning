const list = [
  {
    title: "React",
    url: "https://react.dev/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function ListLoop(){
    return (
        <>
            <h2>My List Titles</h2>
    <ul>
      {list.map((item, index)=>{
        return <li key={index}>Title : {item.title}</li>
      })}
    </ul>
        </>
    )
}

export default ListLoop;