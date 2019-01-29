import React, { Component } from "react";
import { Link } from "react-router-dom";

import avatar from "./../assets/avatar.png";

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="content-wrapper">
        <div className="avatar">
          <img src={avatar} alt="kizunaai" />
        </div>
        <nav>
          <ul className="link-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hello">To Hello</Link>
            </li>
            <li>
              <Link to="/display">To Display</Link>
            </li>
            <li>
              <Link to="/display" target="_blank">
                To Dis
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    );
  }
}
