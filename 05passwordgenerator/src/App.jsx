// study bout callback ,useEffect
import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")

  const generatepassword =useCallback( ()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPOQSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str+="0123456789";
    if(char) str+= "!#@$%^&*()_+";
    for(let i=0;i<length;i++)
    {
      let cha = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(cha)// in this char at works as index of char and pickup the char frpm string and save it in pass
    }
    setpassword(pass)// in this set will update the value of password taken from pass
  },[length,number,char]) // this will work when we change thing too frequently

  useEffect(()=>{
    generatepassword()
  },[length,number,char])

  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select()
  }

  const passwordref=useRef(null)

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text" ref={passwordref} value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readonly />
              <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button>
            </div>
            <div className='flex text-sm gap-x-5'>
              <div className='flex items-center gap-x-1'>
                  <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setlength(e.target.value)}/>
                  <label htmlFor='length'>Length:{length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input type='checkbox' defaultChecked={number} onChange={()=>{setnumber((prev)=> !prev)}}/>
                  <label htmlFor='numberInput'>Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input type='checkbox' defaultChecked={char} onChange={()=>{setchar((prev)=> !prev)}}/>
                  <label htmlFor='charInput'>Character</label>
              </div>
            </div>
      </div>
    </>
  )
}

export default App
