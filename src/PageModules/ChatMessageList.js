import React, { Component } from 'react';

class MessageList extends Component {
    render() {
        return (
            <ul className="chatMessageList">
                {this.props.messages.map(message => {
                    return (
                        <li key={message.id}>
                            <div>
                                {message.author + ': '}
                            </div>
                            <div>
                                {message.message}
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default MessageList;