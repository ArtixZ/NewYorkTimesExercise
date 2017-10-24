import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearchRes, clearSearchRes } from '../actions'
import SearchPage from './SearchPage';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state={
      searchVal: ''
    }
  }
  
  onSearchChange = (e) => {
    this.setState({
      searchVal: e.target.value
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const { getSearchRes } = this.props;
      getSearchRes(this.state.searchVal);      
    }
  }

  goOutFromSearch = () => {
    const { clearSearchRes } = this.props;
    clearSearchRes();
  }

  render() {
    console.log(this.props.searchRes, this.props.location)
    const { searchRes, location } = this.props;
    return (
      <div>
        <div className="app-header flex-row justify-center align-center">
          <div style={{flex: 1}} />      
          <div style={{flex: 1}} className="flex-row justify-center align-center">
            <span className="title">THE TIMES</span>
          </div>
          <div style={{flex: 1}} className="flex-row justify-end">          
            <input className="search-box" type="text" name="search" placeholder="Search" value={this.state.searchVal} onChange={this.onSearchChange} onKeyPress={this.handleKeyPress}/>
          </div>
        </div>
        <div className="nav-bar flex-row justify-center align-center paddingLeftRight">
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center active">
            <div className="tag">Home</div>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <div className="tag">World</div>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <div className="tag">U.S.</div>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <div className="tag">Politics</div>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <div className="tag">N.Y.</div>
          </div>
          <div style={{flex: 1}} className="max-height flex-row justify-center align-center">
            <div className="tag">More</div>
          </div>
        </div>
        { searchRes ?
          <SearchPage 
            location={location.pathname}
            goBack={this.goOutFromSearch}
            searchRes={searchRes}
          />
          : this.props.children
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {searchRes: state.searchRes}
};

export default connect(mapStateToProps, { 
  getSearchRes,
  clearSearchRes
})(Header);