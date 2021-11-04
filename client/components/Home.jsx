import React from 'react';
import {Link} from "react-router-dom";
import TopicsDisplay from "./TopicsDisplay.jsx";


const Home = () => {
    return (
        <div>
            <div className="title">
                DevBoK
                <div className="sub">
                    The Developer's Body of Knowledge
                </div>
            </div>

            <div className="userInput">
                <label>X-Query:
                </label>
                <input/>
            </div>
            <div className="topics">
                <Link to="/topics/languages" className="languages">
                    <button>Languages</button>
                </Link>
                <Link to="/topics/tech_stack" className="tech_stack">
                    <button>Tech Stack</button>
                </Link>
                <Link to="/topics/Algorithms" className="tech_stack">
                    <button>Algorithms</button>
                </Link>
                <Link to="/topics/Articles" className="tech_stack">
                    <button>Articles</button>
                </Link>
                <Link to="/topics/Memes" className="tech_stack">
                    <button>Memes</button>
                </Link>
                <Link to="/topics/Hack_Music" className="tech_stack">
                    <button>Hack Music</button>
                </Link>
            </div>
        </div>
    );
};
export default Home;
