import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="app-header flex-row justify-center align-center">
          <div style={{flex: 1}} />      
          <div style={{flex: 1}} className="flex-row justify-center align-center">
            <span className="title">THE TIMES</span>
          </div>
          <div style={{flex: 1}}>          
            <input className="" type="text" name="search" placeholder="Search" />
          </div>
      </div>
    );
  }
}
