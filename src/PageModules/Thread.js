import React from 'react';

const ThreadMiniature = (props) => {
        return (
            <div className="threadSmallContainer">
                <div className="threadTop">
                    <h1>{props.thread.title}</h1>
                    <h3>Reply>></h3>
                    <h2 id="repliesCount">Replies: {props.thread.repliesCount}</h2>
                </div>
                <div className="originalPost">
                    <div className="originalPostImageContainer"></div>
                    <div className="originalPostText">
                        <p>{props.thread.message}</p>
                    </div>
                </div>
            </div>
        );
};

export default ThreadMiniature;