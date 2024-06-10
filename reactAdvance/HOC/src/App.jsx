import { useState } from 'react'
import Com2 from './component/Com2'
import './App.css'
import Comp1 from './component/Comp1'
import Data from './component/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Com2/>
      <Comp1/>
      <Data/>
    </div>
  )
}

export default App
