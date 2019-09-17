import React, { Component } from 'react';
import Trends from './trends.js';
class Otros extends Component {
    render() {
        return (
            <div>
                 <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Search</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your search"/>
  </div></form>
  <h1>Trends</h1>
  <Trends trends = {this.props.trends}/>
            </div>          
        );
    }
}

export default Otros;