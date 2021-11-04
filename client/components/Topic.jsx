import React from 'react';
import {Link} from "react-router-dom";
import Images from "../assets/images.js"

const Topics = (props) => {
    const {category, topic, index} = props;
    const link = "/topics/"+category+"/"+topic;
    console.log(link)
    return (
        <div className="topic">
            <img className="topic-image"
                src={
                    Images[index]
                }/>
            <span className="topic-desc">
                <div>Description</div>
               <div> 
                    <Link to={link} className="languages">
                        <button>Explore</button>
                    </Link>
                </div> 
            </span>


        </div>

    );
};
export default Topics;
