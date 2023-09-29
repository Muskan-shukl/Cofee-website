import { createContext } from "react";
const initialValue={
    data:[],
    setData:()=>{},
    name:[],
    setName:()=>{},
    email:[],
    setEmail:()=>{}
    
}
const GlobalContext = createContext(initialValue);
export default GlobalContext;