import React from 'react';
import {Link} from "react-router-dom";
import Category from "./TopicsDisplay.jsx";


const Nav = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    DevBoK
                </div>
                
                <div className="nav-list">
                    <Link to="/" className="languages">
                        <button>Home</button>
                    </Link>
                    <div className="nav-items">ABOUT</div>
                    <div className="nav-items">CONTRIBUTE</div>
                    <div className="nav-items">GITHUB</div>
                </div>
            </div>
        </div>
    );
};
export default Nav;
