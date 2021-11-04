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

                <div className="nav-items">
                    <Link to="/" className="languages">
                        <button>Home</button>
                    </Link>
                    <button>ABOUT</button>
                    <button>CONTRIBUTE</button>
                    <button>GITHUB</button>
                </div>
            </div>
        </div>
    );
};
export default Nav;
