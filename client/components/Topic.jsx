import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Images from "../assets/images.js"
import SpecTopicDisplay from "./SpecTopicDisplay.jsx"

const Topics = (props) => {

    const {category, topic, index, topicTitle} = props;
    const link = "/topics/" + category + "/" + topic;
    console.log(link)
    return (

        <div className="topic">
            <img className="topic-image"
                src={
                    Images[index]
                }/>
            <span className="topic-desc-container">
                <Link to={link}
                    className="topicName">
                    <div>{topicTitle}</div>
                </Link>
                <div className="topic-desc">Description</div>
            </span>
        </div>
    );
};
export default Topics;
