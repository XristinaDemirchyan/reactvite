import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function hanedlCounter (e:React.MouseEvent<HTMLButtonElement,MouseEvent>):void{


  }

  return (
   <div>
    <button onClick={()=> setCount(c => c+1)}>Plus</button>
    <span style={{margin:"10px", padding:"10px", color:"darkblue"}}>{count}</span>
    <button onClick={()=> setCount(c => c-1)}>Minus</button>
   </div>
  )
}

export default App
