import React, { Component } from "react";
import { Link } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import avatar from "./../assets/avatar.png";

class App extends Component {
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
          </ul>
        </nav>
        {children}
      </div>
    );
  }
}

export default hot(App);
