import {useState} from "react";

function StateExample(){


    const [fruit, setFruit] = useState("banana")

    function clickMe(){
        if(fruit === "Apple"){
            setFruit("Banana")
        } else{
            setFruit("Apple")
        }
    }
    return(
        <div>
            <h3>Fruit: {fruit}</h3>
            <button onClick={()=>clickMe()}>Click me</button>
        </div>
    )
}

export default StateExample;