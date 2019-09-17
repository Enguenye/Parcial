import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="card w-75">
  <div className="card-body">
    <h5 className="card-title"></h5>
    {this.props.menu.map((e) => <div key={e.text}>
    <div className="container">
    <img src={e.image} alt="Snow"/>
    <button className="btn"></button>
    <p className="card-text">{e.text}</p>
            </div>
                            
                            
                        </div>)}
  </div>
</div>
 </div>
        );
    }
}

export default Menu;