import { useEffect,useState,useRef } from "react";
import axios from 'axios'
 function ExuseEffect(){
    const [count,setCount]=useState(0)
    const [value,setValue]=useState(1)
    const[record,setRecord]=useState([])

    const refElement=useRef(null)
    // useEffect(()=>{
    //     console.log("useEffect")
    // })
    //  useEffect(()=>{
    //     console.log("value")
    //  },[value])
    
useEffect(()=>{
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>{console.log(json);setRecord(json)})
    //         //  const price=refElement.current;
    //         //  price['name'].value=record[0].price;
           axios.get('https://fakestoreapi.com/products')
           .then((res)=>{

            setRecord(res.data)
           })
           .catch(err=>console.log(err))

})
    return (
        <>
       {/* <button onClick={()=>{
        setCount(count+1)
       }}>Count</button>
       <p>{count}</p>
       <br/>
       <button onClick={()=>{
        setValue(value+1)
       }}>Value</button>
       <p>{value}</p> */}
       {
        record.length>0&&
        record.map((item)=>{
            return(
                <p key={item.id}>
                   Title: {item.title}

                   <input name="price" ref={refElement} type="text" />
                   <img src={item.image} style={{width:'100px' , height:'100px'}}/>
                </p>
            )
        })
       }

        </>
    )
 }
 export default ExuseEffect