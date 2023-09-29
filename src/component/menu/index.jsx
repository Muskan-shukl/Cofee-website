import React, { useEffect } from "react";
import './menu.css'
import service1 from '../../asserts/image/service1.jpg'
import service2 from '../../asserts/image/services2.jpg'
import service4 from '../../asserts/image/services4.jpg'
import menu5 from '../../asserts/image/menu 4.jpg'
import menu6 from '../../asserts/image/menu6.jpg'
import menu9 from '../../asserts/image/menu9.png'
import Header from '../header'

const Menu=()=>{
    useEffect(()=>{

    },[]
    )
    return(
        <>
        
        <section className="menu">
            <Header/>
            <h1 className="heading"><i>Our Menu</i> </h1>
            <div className="bax-container">
            <div className="box">
                <img src={service1} height={100} width={100} />
                <h3>tasty and healty</h3>
                <div className="price">$15.99 <span>20.99</span></div>
                <button>add to cart</button>
            </div>
 <div className="box">
                <img src={service2}height={100} width={100} />
                <h3>tasty and healty</h3>
                <div className="price">$15.99 <span>20.99</span></div>
                <button>add to cart</button>
            </div>
             <div className="box">
                <img src={service4}height={100} width={100} />
                <h3>tasty and healty</h3>
                <div className="price">$15.99 <span>20.99</span></div>
                <button>add to cart</button>
            </div>
              <div className="box">
                <img src={menu5} height={100} width={100}/>
                <h3>tasty and healty</h3>
                <div className="price">$15.99 <span>20.99</span></div>
                <button>add to cart</button>
            </div>
              <div className="box">
                <img src={menu6}height={100} width={100} />
                <h3>tasty and healty</h3>
                <div className="price">$15.99 <span>20.99</span></div>
                <button>add to cart</button>
            </div>
             <div className="box">
                <img src={menu9}height={100} width={100} />
                <h3>tasty and healty</h3>
                <div className="price">$15.99 <span>20.99</span></div>
                <button>add to cart</button>
            </div>
            </div>
        </section>
        </>
    )
}
export default Menu