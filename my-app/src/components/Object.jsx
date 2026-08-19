import { useState } from "react";

function Object(){
    const[ value,setValue] = useState("")
    const [obj,setObj] = useState({
        name:"ABC",
        age:25,
        address:"Panchkula"
    })
    const hancleClick=()=>{
        setObj({...obj,name:value});
    }
    return(
        <>
            <p>{obj.name}</p>
            <p>{obj.age}</p>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
            <button onClick={hancleClick}>Change Name</button>
        </>
    )
}
export default Object;