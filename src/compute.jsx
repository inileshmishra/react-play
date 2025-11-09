function Compute(){
    let x = 10;
    let y = 20;
    let result;

    function comp(a, b, c){
        if(c=== "+"){
            return a + b;
        }else if(c=== "-"){
            return a - b;
        }else if(c=== "*"){
            return a * b;
        }
    }
    return(
        <div>
            <p>Result: {comp(x,y,"+")}</p>
        </div>
    )
}

export default Compute;