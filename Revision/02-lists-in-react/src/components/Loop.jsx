import React from "react"

let list = [
    {
        name : "Arkar Hein",
        age :22,
        country : "Myanmar"
    },
    {
        name : "Orion",
        age :23,
        country : "Japan"
    }
]

export default function Loop() {
  return (
    <div>
        <ul>
            {list.map(
                (item, index) =>{
                    return (
                        <React.Fragment key={index}>
                        <li>{item.name}</li>
                        <li>{item.age}</li> 
                        <li>{item.country}</li>
                    </React.Fragment> 
                    )    
                }
            )}
        </ul>
    </div>
  )
}
