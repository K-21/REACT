import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let Counter=15
const [Counter, setCounter] = useState(10)
/*variable=counter,function/method=Setcounter also in usestate needs to 
initalize something it can be [],boolean ,number and function as well
*/
const addValue = () =>{
  /*
  Counter++
  console.log(Counter);}
*/
setCounter(Counter +1) //this method will update the value of counter and increment by 1 even if decalre counter n times
// setCounter(Counter +1) 
// setCounter(Counter +1)

// batching= the process of grouping multiple state updates into a single update function. 
/*
This is done to optimize performance and prevent unnecessary re-renders of the component
this arrow function will return previous count plus one and then will execute the nextline 
which will update the value by 4 times at once instead of one by one as we have declared setCounter function called 4 times cld batching
*/

setCounter((prevCount)=> prevCount+1 ) 
setCounter((prevCount)=> prevCount+1 )
setCounter((prevCount)=> prevCount+1 )
setCounter((prevCount)=> prevCount+1 )
} 

/*
if we combine line 26 and 37 to 40 it will update the count value to 5 instead of 4 times
*/ 
const removevalue=()=>{
 setCounter(Counter-1)
 
} 
return (
    <>
    <h1>My first React course(simple){Counter}</h1>
    <h2>Counter value:{Counter}{/*variable injection*/}</h2>
    <button onClick={addValue}>Add Value</button>
    {" "} {/*Spacing b/w 2 button*/}
    <button onClick={removevalue}>Remove Value</button>
    <p>Footer: </p>
    </>
  )
}

export default App