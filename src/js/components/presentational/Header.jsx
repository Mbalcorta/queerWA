import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  constructor({headers}){
    super(); 
    this.headers = headers; 
  }
  render(){
  var headerDivs = this.headers.map((header, index) => {
    if(index === 0){
      return <li key={index}><i className="logo">{header}</i></li>
    } else {
      return <li key={index}><i className="rightNav">{header}</i></li>
    }
    
  })
   return( 
    <div className="headerWrapper">
      <ul className="header">
        {headerDivs}
      </ul>
    </div>)
  }
}

export default Header;