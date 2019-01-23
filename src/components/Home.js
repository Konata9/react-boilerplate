import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Here is the Home.</h2>
        <Link to="/hello">To helo</Link>
      </div>
    );
  }
}
