import React, { Component } from 'react';
import Tweet from './tweet.js';
class Tweets extends Component {
    render() {
        return (
            <div>
                {this.props.tweets.map((e) => <div key={e.content}>
                <Tweet avatar = {e.avatar} first_name={e.first_name} last_name={e.last_name} nick={e.nick} date={e.date} content={e.content} retweets={e.retweets}/>
    </div>)}
            </div>
        );
    }
}

export default Tweets;