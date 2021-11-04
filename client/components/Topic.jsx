import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Images from "../assets/images.js"
import SpecTopicDisplay from "./SpecTopicDisplay.jsx"

const Topics = (props) => {

    const {category, topic, index, topicTitle} = props;
    const link = "/topics/" + category + "/" + topic;
    return (
        <Router>
        <div className="topic">
            <img className="topic-image"
                src={
                    Images[index] // array of images from assets folder
                }/>
            <span className="topic-desc-container">
                <Link to={link}
                    className="topicName">
                    <div>{topicTitle}</div>
                </Link>
                {/*Need to make description dynamic  */}
                <div className="topic-desc">Description</div>
            </span>
           
                <Switch>
                    <Route exact path="/topics/:topicId/:topicName"
                        render={() => <SpecTopicDisplay propTopicName ={"true"}/>}/>
                </Switch>
          
        </div>
        </Router>
    );
};
export default Topics;
