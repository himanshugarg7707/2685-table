import { useState} from "react";

export function Counter(){
    const [count,setCount] = useState(0);

    function handleIncreaseCount(){
        setCount(count+1)
    console.log(count)
    }
    return (
        <>
            <h1>
                Count Value : {count}
            </h1>
            <button onClick={handleIncreaseCount}>Increase Count</button>
        </>
    )
}