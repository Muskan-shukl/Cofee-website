import { useState } from "react"
import GlobalContext from "./context"

const GlobalProvider=({children})=>{
    const[data,setData]=useState([]);
    const[name,setName]=useState("")
    const[email,setEmail]=useState('')
    return(
        <GlobalContext.Provider
        value={
            {
                data, setData,
                name,setName,
                email,setEmail,
            }
        }
        >
        {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider