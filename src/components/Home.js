import React from "react";

import NextMeetup from "./NextMeetup";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/*<MeetupInfo info={this.state.meetupInfo} /> */}
        <NextMeetup
          meetups={this.props.meetups}
          addMeetup={() =>
            this.setState({
              meetups: this.state.meetups.concat({
                title: "another new meetup",
                id: 3
              })
            })
          }
        />
        {/* <About />
        <PastMeetups />
        */}
      </div>
    );
  }
}

export default Home;
