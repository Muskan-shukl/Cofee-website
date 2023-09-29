import React, { useContext, useState } from "react";
import './contact.css'
import Header from "../header";
import GlobalContext from "../../context/context";
const Contact=()=>{
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        address:'',
        message:'',
    })
    const {data, setData } = useContext(GlobalContext),
    handleSubmit = ()=>{
        setData([...data, formData])
        
    }
    

    return(
        <>
        <section className="contact">
            <Header/>
            <div className=" h-primary ">
                
                <h1 >Contact Us</h1>
            </div>
                
                <div id="contact-box">
                    <form action="">
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="text" name="Name" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label for="name">Email:</label>
                            <input type="Email" name="Name" id="Email" placeholder="Enter your Email" />
                        </div>
                        <div className="form-group">
                            <label for="name">Phone:</label>
                            <input type="phone" name="Name" id="honep" placeholder="Enter your phone" />
                        </div>
                        <div className="form-group">
                            <label for="name">Message:</label>
                            <textarea name="Message" id="Message" cols="10" rows="5"></textarea>
                        </div>
                        <button onSubmit={()=>handleSubmit()}>Submit</button>
                    </form>
                </div>

            </section>

        </>
    )
}
export default Contact