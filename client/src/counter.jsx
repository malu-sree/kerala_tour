import { memo } from "react"

function Counter({increment}){
    function show(){
        console.log('show')
        return 'show'
    }
    return(
        <>
        <button onClick={increment}>INC</button>
        </>
    )
}
export default memo(Counter)