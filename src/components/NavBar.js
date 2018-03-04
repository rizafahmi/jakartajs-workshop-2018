import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="create">
          <Link to="/create">Create Meetup</Link>
        </Menu.Item>
        <Menu.Item key="explore">Explore</Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
