import React, { Component } from 'react';

class Trends extends Component {
    render() {
        return (
            <div>
                {this.props.trends.map((e) => <div key={e.hashtag}>
    <div className="container">
    <p className="card-text">{e.hashtag}</p>
    <p className="card-text">{e.teweets}</p>
            </div>
                            
                            
                        </div>)}
            </div>
        );
    }
}

export default Trends;