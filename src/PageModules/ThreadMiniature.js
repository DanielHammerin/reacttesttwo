import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ThreadMiniature = (props) => {
    const {image} = props.thread.image.toLowerCase();
    console.log(image);
        return (
            <div className="threadSmallContainer">
                <div className="threadTop">
                    <h1>{props.thread.title}</h1>
                    <h3 className="App-intro">
                        <Router>
                            <Route>
                                <Link to={props.thread.location}>Reply>></Link>
                            </Route>
                        </Router>
                    </h3>
                    <h2 id="repliesCount">Replies: {props.thread.repliesCount}</h2>
                </div>
                <div className="originalPost">
                    <div className="originalPostImageContainer">
                        <img className="imageThumbnail" src={image} alt="ImageBroken"/>
                    </div>
                    <div className="originalPostText">
                        <p>{props.thread.message}</p>
                    </div>
                </div>
            </div>
        );
};

export default ThreadMiniature;