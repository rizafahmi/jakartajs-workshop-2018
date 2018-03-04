import React, { Component } from "react";
import { Layout } from "antd";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "./components/NavBar";
import CreateMeetup from "./components/CreateMeetup";
import Home from "./components/Home";
import { incrementAction } from "./redux/actions";

import "./App.css";

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meetups: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/meetups").then(response => {
      setTimeout(() => {
        this.setState({ meetups: response.data });
        this.props.increment();
      }, 5000);
    });
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <NavBar />
          </Header>
          <Content>
            <h1>{this.props.counter}</h1>
            <Route
              exact
              path="/"
              render={() => <Home meetups={this.state.meetups} />}
            />
            <Route path="/create" component={CreateMeetup} />
          </Content>
          <Footer>&copy; 2018 JakartaJS</Footer>
        </Layout>
      </Router>
    );
  }
}

const styles = {
  container: { backgroundColor: "mediumaquamarine", fontSize: 25 }
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incrementAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
