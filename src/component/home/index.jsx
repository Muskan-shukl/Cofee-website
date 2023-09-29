import React from "react";

import './home.css'
import Header from "../header";
import { useNavigate } from "react-router-dom";
const Home = () =>{
  const navigate=useNavigate()
  const click=()=>{
    return navigate('/order')
   }
    return(
      <>
      <div className="home">
      <Header/>
        <h1>Discover the taste of real coffee</h1>
        <button onClick={()=>click()}>ORDER NOW</button>
      </div>
      </>  
    )
}
export default Home