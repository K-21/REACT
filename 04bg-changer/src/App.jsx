import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [color, setColor] = useState("olive");
  
 

  return (
    <>
      <div className='ww-full h-screen  duration-200' style={{background: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor("red")} className='outline-none px-4p py-1 w-20 rounded-full shadow-lg text-black'style={{background:"red"}}>Red{}</button>   
            <button onClick={()=>setColor("Green")} className='outline-none px-4p py-1 w-20 rounded-full shadow-lg text-black'style={{background:"green"}} >{}Green{}</button>
            <button onClick={()=>setColor("orange")} className='outline-none px-4p py-1 w-20 rounded-full shadow-lg text-black' style={{background:"orange"}}>{}Orange{}</button>       
          </div>
        </div>
      </div>
    </>
  );
}

export default App;