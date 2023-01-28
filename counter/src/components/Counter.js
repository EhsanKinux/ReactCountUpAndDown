import {useState} from 'react'
import "./counter.css"

const Counter = () => {
    const [number, setNumber] = useState(0);

    const IncreaseNumber = () =>{
      setNumber(number + 1);
    }
  
    const DecreaseNumber = () => {
      setNumber(number - 1);
    }
  return (
    <>
    <div className="container">
        <button className="btn" onClick={IncreaseNumber}>increasing</button>
        <div className="number">{number}</div>
        <button className="btn" onClick={DecreaseNumber}>decreasing</button>
    </div>
    </>
  )
}

export default Counter