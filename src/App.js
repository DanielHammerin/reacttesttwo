import React, { Component } from 'react';
import './App.css';
import PageHeader from './PageModules/PageHeader';
import PageThreadList from './PageModules/PageThreadList';
import ChatBox from './PageModules/ChatBox';
import PageFooter from './PageModules/PageFooter';
import {ThreadMocks} from './Mocks/ThreadMock';
import {PageLinks} from './Mocks/HeaderLinksMock';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="pageContent">
                    <PageHeader links={PageLinks}/>
                    <div className="pageMainContent">
                        <PageThreadList threads={ThreadMocks}/>
                        <div className="asideContainer">
                            <ChatBox />
                        </div>
                    </div>
                    <PageFooter />
                </div>
            </div>
        );
    }
}

export default App;