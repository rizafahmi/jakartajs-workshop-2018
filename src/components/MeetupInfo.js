import React from "react";

class MeetupInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { info } = this.props;
    return (
      <div>
        <h1>{info.name.toUpperCase()}</h1>
      </div>
    );
  }
}

export default MeetupInfo;
