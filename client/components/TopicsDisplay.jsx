import React from 'react';
import {useParams} from 'react-router-dom';
import {getTopic, getResource, getTopics} from "../../data/api.js";
import Topic from "./Topic.jsx";


const TopicsDisplay = () => {
    const topics = getTopics();
    const {topicId} = useParams();

    const title = topics.find(({id}) => id === topicId).name;

    const resource = topics.find(({id}) => id === topicId).resources;


    const currentTopic = resource.map(({
        id,
        topicName
    }, idx) => { // return <Topic src ={src} key={idx} />
        return <Topic category={topicId}
            topicTitle
            ={topicName}
            topic={id}
            index
            ={idx}
            key={idx}/>
    });

    return (
        <div className="topicsDisplay">
            <div className="topicTitle">
                <h1>{title}</h1>
            </div>
            {currentTopic} </div>

    );
};
export default TopicsDisplay;
