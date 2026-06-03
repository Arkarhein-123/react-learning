import { useState } from "react";

export default function ChangeColor() {
    const [colorClass, setColorClass] = useState("");
  return (
          <div className={`w-50 h-25 mx-auto my-5 rounded-3xl ${colorClass}`} >
              <button className="btn btn-primary py-2 px-5 mx-3 my-5" onClick={() => setColorClass("bg-info")}>Info</button>
              <button className="btn btn-primary py-2 px-5 mx-3 my-5" onClick={() => setColorClass("bg-warning")}>Warning</button>
          </div >
  )
}
