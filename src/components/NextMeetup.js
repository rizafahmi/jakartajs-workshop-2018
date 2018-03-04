import React from "react";

class NextMeetup extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillReceiveProps(nextProps) {
    console.log("ComponentWillReceiveProps: ", nextProps);
  }
  componentWillUpdate(nextProps) {
    console.log("compoentWillUpdate", nextProps);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps);
  }
  render() {
    return (
      <div>
        <h2>Meetups</h2>
        {this.props.meetups.length > 0 ? (
          <ul>
            {this.props.meetups.map(meetup => (
              <li key={meetup.id}>{meetup.title}</li>
            ))}
          </ul>
        ) : (
          <h2>Loading data...</h2>
        )}
        <input type="text" name="title" />
        <button onClick={this.props.addMeetup}>Add new meetup</button>
      </div>
    );
  }
}

export default NextMeetup;
