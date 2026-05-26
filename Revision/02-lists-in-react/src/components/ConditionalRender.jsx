import { useState } from "react";

export default function ConditionalRender() {
    const [changeBehaviour, setChangeBehaviour] = useState(0);
  return (
    <div>
        <button onClick={()=> setChangeBehaviour(!changeBehaviour)}>Change</button>
        {changeBehaviour ? <h1>You are Gay.</h1> : <h1>You are Guy.</h1>}
    </div>
  )
}
