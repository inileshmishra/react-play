function Header() {
    return(
        <div>
            <h1>Header</h1>
        </div>
    )
}

export function Profile() {
    return(
        <div>
            Profile Image
        </div>
    )
}

export function Logo (){
    let logo;
    return(
        <div>
            Logo Path : {logo? logo : "No logo found"}
        </div>
    )
}

 export function Footer(){
    function clickMe(fruit){
        alert(fruit);
    }

    return(
        <div>
            <button onClick={()=>clickMe("Apple")}>clickMe</button>
        </div>
    )
}

function clickMe(){
    alert("Button Clicked");
}
export default Header;