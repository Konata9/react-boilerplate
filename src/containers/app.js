import React, { Component } from "react";
import { Link } from "react-router-dom";
import { hot } from "react-hot-loader/root";

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <nav>
          <ul>
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
