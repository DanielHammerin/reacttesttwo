import React, { Component } from 'react';
import MessageList from './ChatMessageList';
import io from 'socket.io-client';

const DUMMY_DATA = [
    {
        author: "Johan",
        message: "Hvem er do?"
    }, {
        author: "Preben",
        message: "De er jeg!"
    }, {
        author: "Ludde",
        message: "Skarru hao en lapp?"
    }, {
        author: "RalleBoj",
        message: "Pleased to meet!"
    }, {
        author: "Mich",
        message: "Hallo?!"
    }, {
        author: "Jocke",
        message: "ARGHUIOUPTU"
    }, {
        author: "Viktor",
        message: "*Yttrar uppenbara saker*"
    }, {
        author: "RalleBoj",
        message: "TYST VIKTOR!"
    }
];



class ChatApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatname: sessionStorage.getItem('chatusername'),
            message: '',
            messages: DUMMY_DATA
        };

        this.socket = io('localhost:8000');

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            //console.log('New Message! ' + data.author + ': ' + data.message);
            //console.log(sessionStorage.getItem('chatusername'));
            this.setState({ messages: [...this.state.messages, data] });
            //console.log(this.state.messages);
        };

        this.submit = ev => {
            ev.preventDefault();
            if (this.isNewUser()) {
                this.setUserName();
            }
            else {
                this.sendMessage();
            }
        };

        this.onEnterPress = (e) => {
            if (e.keyCode === 13 && e.shiftKey === false) {
                e.preventDefault();
                this.sendMessage();
            }
        };
    }

    sendMessage() {
        this.setState({ chatname: sessionStorage.getItem('chatusername') });
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.chatname,
            message: this.state.message
        });
        this.setState({ message: '' });
    }

    setUserName() {
        let newUserName = prompt('Please enter a name for yourself.');

        if (!this.isNullOrWhiteSpace(newUserName) && newUserName.length <= 20) {
            sessionStorage.setItem('chatusername', newUserName);
            this.setState({ chatname: newUserName });
        }
        else if (newUserName.length > 20) {
            alert('Maybe a shorter name is better. ');
            this.setUserName();
        }
        else {
            alert('Please no whitespace-only names or similar.');
            this.setUserName();
        }
    }

    isNewUser() {
        return this.isNullOrWhiteSpace(sessionStorage.getItem('chatusername'));
    }

    isNullOrWhiteSpace(str) {
        return (!str || str.length === 0 || /^\s*$/.test(str) || str === null);
    }

    render() {
        return (
            <div className="chatBox">
                <div className="conversationBox">
                    <MessageList messages={this.state.messages} />
                </div>
                <div className="newMessageBoxContainer">
                    <textarea className="chatNewMessageTextBox" value={this.state.message} onKeyDown={this.onEnterPress} onChange={ev => this.setState({ message: ev.target.value })} />
                    <div className="sendNewMessageButtonContainer">
                        <button id="chatSendMessageButton" onClick={this.submit} >Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatApp;