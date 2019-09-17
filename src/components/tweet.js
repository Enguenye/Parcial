import React, { Component } from 'react';

class Tweet extends Component {
    render() {

        return (
            <div>
                <div className="card w-75">
  <div className="card-body">
      <div className="row-2"><img src={this.props.avatar} alt="Snow"/>
      <h5 className="card-title">{this.props.first_name} {this.props.nick}</h5></div>
    
    <p className="card-text">{this.props.content}</p> 
    <p className="card-text">{this.props.date}</p>
    <div className="row"><p  className="btn btn-success">Retweet</p>
    <p  className="btn btn-danger">Favourite</p></div>
  </div>
</div>
            </div>
        );
    }
}

export default Tweet;