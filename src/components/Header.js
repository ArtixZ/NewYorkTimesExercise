import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="app-header flex-row justify-center align-center">
          <div style={{flex: 1}} />      
          <div style={{flex: 1}} className="flex-row justify-center align-center">
            <span className="title">THE TIMES</span>
          </div>
          <div style={{flex: 1}} className="flex-row justify-end">          
            <input className="search-box" type="text" name="search" placeholder="Search" />
          </div>
        </div>
        <div className="nav-bar flex-row justify-center align-center paddingLeftRight">
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center active">
            <div>Home</div>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <a >World</a>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <a>U.S.</a>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <a>Politics</a>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <a>N.Y.</a>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <a>More</a>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
