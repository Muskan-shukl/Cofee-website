import React from "react";
import './header.css'
import logo from '../../asserts/image/logo.jpg'
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate = useNavigate()
     const clickHandl=()=>{
    return navigate('/home')
   }
   const clickHandler=()=>{
    return navigate('/about')
   }
   const clickHandle=()=>{
    return navigate('/menu')
   }
   const click=()=>{
    return navigate('/order')
   }
   const clickhand=()=>{
    return navigate('/contact')
   }
  
    return(
        <>
        <nav>
            <ul>
                <img src={logo} height={50} width={50}/>
                <li className="logo"><i>coffee</i> </li>

                <li onClick={()=>clickHandl()}>HOME</li>
                <li onClick={()=>clickHandler()}>ABOUT</li>
                <li onClick={()=>clickHandle()}>MENU</li>
                <li onClick={()=>click()}>ORDER</li>
                <li onClick={()=>clickhand()}>CONTACT</li>
            </ul>
        </nav>
        </>
    )
}
export default Header