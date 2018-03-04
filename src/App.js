import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/NavBar";
import MeetupInfo from "./components/MeetupInfo";
import NextMeetup from "./components/NextMeetup";

const data = {
  meetupInfo: {
    name: "JakartaJS",
    photoUrl: "",
    location: "Jakarta",
    about: "This is meetup for JavaScript ninjas."
  },
  members: [
    { name: "Andi", email: "andi@gmail.com" },
    { name: "Budi", email: "budi@gmail.com" },
    { name: "Wati", email: "wati@gmail.com" }
  ],
  organizers: [
    { name: "Hengki", email: "hengki@jakartajs.org" },
    { name: "Sofian", email: "sofian@jakartajs.org" }
  ],
  meetups: [
    {
      title: "JakartaJS Workshop 2018",
      description: "....",
      status: "next",
      date: new Date(),
      location: "Hacktiv8"
    },
    {
      title: "JakartaJS Meetup With Kudo",
      description: "...",
      status: "past",
      date: new Date(),
      location: "Kudo"
    }
  ]
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = data;
  }
  render() {
    return (
      <div>
        <NavBar />
        <MeetupInfo info={this.state.meetupInfo} />
        <NextMeetup meetups={this.state.meetups} addMeetup={() => this.setState({meetups: this.state.meetups.concat({title: 'another new meetup'})})} />
        {/*<About />
        <PastMeetups />
        */}
      </div>
    );
  }
}

export default App;
