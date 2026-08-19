import { useState } from "react";

export function Change() {
    const [data, setData] = useState("");

    const handleClick = () => {
        setData(document.querySelector("#txt").value);
    };

    return (
        <>
            <input type="text" id="txt" />
            <button onClick={handleClick}>Fetch Data</button>
            <h1>{data}</h1>
        </>
    );
}