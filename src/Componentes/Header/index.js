import React from 'react';
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
    return ( 
            <header>
            <Link to="#"> </Link>
            <div className="menu">
                <box-icon name="menu"> </box-icon>
                </div>
                <a href="#">  
                    <div className="logo">
                <img src={Nike} alt="logo" width="150" />
            </div>
            </a>
            <ul>
            <li>
                <Link to="/"> START </Link>
            </li>   
            <li>
        <Link to="/productos"> PRODUCTS </Link>
            </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"> </box-icon>
                <span className="item__total">0</span>
            </div>          
            </header>
    );
}