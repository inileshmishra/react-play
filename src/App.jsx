import Header, {Profile, Logo, Footer} from "./Header";
import Compute from "./compute"
import StateExample from "./srateExample"
import Counter from "./counter"
import Toggle from "./toggle"
function App() {
  let x = 10;
  let y = 20;

  function name(){
    return "John";
  }
  return(
    <>
      <Toggle/>
      <Counter/>
      <Header/>
      <Compute/>
      <h1>Hellow {name()}</h1>
      <p>My age is {x+y}</p>
      <Profile/>
      <Logo/>
      <Footer/>
      <StateExample/>
    </>
  )
}

export default App;  