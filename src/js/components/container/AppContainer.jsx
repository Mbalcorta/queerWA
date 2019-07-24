import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import Header from "../presentational/Header.jsx"
class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: "home",
      headers: ["Queer Seattle","Home", "About", "Search", "Contact"]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    let currentPage = this.state.page;
    let contentOfPage = null; 
   
    return (
      <div id="wrapper">
        <Header headers={this.state.headers}/>
      </div>
    );
  }
}

export default AppContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;