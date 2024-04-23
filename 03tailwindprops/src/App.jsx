import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

const  details={
      name:"Suresh Agrawal",
      City:"Mumabi",
      State: "Maharashtra",
      Country:"India"
}
//console.log(details);// can see in the console the details of objects

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="kritika" post="Engineer" d={details}/>{/*in this way we can directly pass any value to jsx and use it as per our needs */}
      {/* by using variable={} we can pass array,objects etc which we get from database or somewhere and pass it on as it is we can use this*/}
      <Card src="https://images.pexels.com/photos/5709296/pexels-photo-5709296.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Card username='Radhika'post ="8 std" src="https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </>
  )
}

export default App
