import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    // console.log(abc);

    const HandleAdd= () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce =() =>{
        const newCount = count - 1;
        setCount(newCount);
    }


    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>counter: {count}</h3>
            <button onClick={HandleAdd}>add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}