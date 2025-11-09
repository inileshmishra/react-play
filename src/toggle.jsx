import {useState} from "react";


function Toggle(){

    const [toggle, setToggle] = useState(1);

    return(
        <>
        <h3>Toggle</h3>
        <button onClick={()=>setToggle(toggle + 1)}>Toggle</button>

        {
            toggle == 1? <h3>Nilesh</h3>
            : toggle ==2 ? <h3>Rajesh</h3>
            : toggle == 3 ? <h3>Suresh</h3>
            : <h3>No name</h3>
        }
        </>
    )
}

export default Toggle;