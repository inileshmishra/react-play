import {useState} from "react";
const Counter =()=>{
    const [count, setCount] = useState(0);
    const [decrement, setDecremeent] = useState(10);
    return(
        <div>
            <h2>Counter</h2>
      
            <h3>Count: {count}</h3>
            <h3>Decrement: {decrement}</h3>

            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setDecremeent(decrement-1)}>Decrement</button>
        </div>
    )
}

export default Counter;