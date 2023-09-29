import React, { useContext } from "react";
import './order.css'
import Header from "../header";
import GlobalContext from "../../context/context";

const Order=()=>{
  const { data, setData } = useContext(GlobalContext);
console.log(data)
    return(
        <>
        <div className="container">
        <Header/>
        <h1 className="order"><i>COFFEE ORDER FORM</i></h1>
        <div className="f">
        <form>
          
  Cafe Name:<input type="text" id="fname" name="cname"placeholder="enter your cafe name"/><br></br> 
  
 First Name: <input type="text" id="fname" name="fname"placeholder="enter your first name"/><br></br>

 Last Name: <input  type="text" id="lname" name="lname"placeholder="enter your last name"/><br></br>
  <div className="phone">
  Phone Number: <input  type="text" id="pnumber" name="PNumber"placeholder="enter your Phone number"/><br></br>
  </div>
<div className="email">
    
    Email: <input className="email" type="text" id="Email" name="Email"placeholder="enter your email"/><br></br>
    Address:<input className="address" type="text" id="address" name="address"placeholder="enter your Address"/><br></br>

</div>
 
<div className="city">
City:<input className="city" type="text" id="City" name="city"placeholder="enter your city"/><br></br> 
</div>
  
  <button>Order Now</button>
</form></div>
</div>
        </>
    )
}
export default Order