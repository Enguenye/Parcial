import React, { Component } from 'react';
import Menu from './menu.js';
import Tweets from './tweets.js';
import Otros from './otros.js';
class App extends Component {
    render() {
        console.log(this.props.todo.tweets);
        return (
            <div className="row">
            <div className="col"><Menu menu = {this.props.todo.menu}/> </div>
            <div className="col"><Tweets tweets= {this.props.todo.tweets}/> </div>
            <div className="col"><Otros trends={this.props.todo.trends}/> </div>
            </div>
        );
    }
}

export default App;