import React from 'react';
import {Link} from "react-router-dom";
import Images from "../assets/images.js"

const Topics = (props) => {
    const {category, topic, index, topicTitle} = props;
    const link = "/topics/" + category + "/" + topic;
    console.log(link)
    return (
        <div className="topic">
            <img className="topic-image"
                src={
                    Images[index]
                }
                />
            <span className="topic-desc">
                <Link to={link}
                    className="topicName">
                    <div>{topicTitle}</div>
                </Link>
                <div>Description</div>
            </span>


        </div>

    );
};
export default Topics;
