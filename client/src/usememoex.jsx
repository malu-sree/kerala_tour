import { useState,useMemo } from "react"
function Usememoex(){
    const [count,setCount]=useState(0)
    const[number,setNumber]=useState(0)
    const[square,setSquare]=useState(0)

    const inccount=()=>{
        console.log("working")
        setCount(count+1)
    }

    // function squarenumber(e){
    //          setNumber(e.target.value)
    //          let sq=Math.pow(Number(e.target.value),2)
    //          setSquare(sq)
    //         console.log('square', sq)

    // }

    const changeValue=(e)=>{
        setNumber(e.target.value)
    }

    const squareResult=useMemo(()=>{
      return  squarenumber(number)
    },[number])
    return(
        <>
        

         <button onClick={inccount}>
            INC COUNT
         </button>
         <div>
            output:{count}
         </div>
         <button>
            NUMBER
         </button>
         <input type="text" onChange={changeValue}/>  
         <div>
            output:{squareResult}
         </div>      

        </>
    )
}
function squarenumber(number){
    console.log("square")
    return Math.pow(Number(number),2)}


export default Usememoex