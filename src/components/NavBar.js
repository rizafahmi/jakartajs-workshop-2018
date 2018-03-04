import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Create Meetup</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
