import React from "react";
import { Form, Input, Button } from "antd";

class CreateMeetup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form>
        <h2>Create meetup</h2>
        <Form.Item>
          <Input placeholder="Title..." type="text" name="title" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Description" type="text" name="description" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="location" type="text" name="location" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {" "}
          Save
        </Button>
      </Form>
    );
  }
}

export default CreateMeetup;
