import React, { Component } from 'react';
import Thread from './ThreadMiniature';

class ThreadList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            threadList: this.props.threads
        }
    }
    render() {
        let threadComponentList = this.state.threadList.map(function(thread) {
           return <Thread thread={thread}/>
        });
        return (
            <div className="threadListContainer">
                <ul>
                    {threadComponentList}
                </ul>
            </div>  
        );
    }
}

export default ThreadList;