import { useState,useCallback } from "react"
import Counter from "./counter"
function Usecallbackex(){
    const [count,setCount]=useState(0)
    const increment=()=>{
        console.log("count")
      setCount(prevCount=>prevCount+1)
        setCount(prevCount=>prevCount+1)

     }
    // const increment=useCallback(()=>{
        
    //     console.log("count")
    //     setCount(prevCount=>prevCount+1)
    // },[])
    return(
        <>
        <Counter increment={increment}/>
        <br/>
          Count:{count}
          <br/>
        <button onClick={()=>{
            setCount(prevCount=>prevCount-1)
        }}>DEC</button>
        </>
    )
}
export default Usecallbackex