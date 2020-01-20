import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";

class LabelHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: []
    };
  }

  handleSubmit = route => {
    this.props.updateUrl(route);
  };

  render() {
    return (
      <Segment>
        <div>
          <Form>
            <Form.Group>
              <Form.Button
                content="Foods"
                onClick={() =>
                  this.handleSubmit("http://localhost:3005/services/food")
                }
              />
              <Form.Button
                content="Events"
                onClick={() =>
                  this.handleSubmit("http://localhost:3005/services/event")
                }
              />
            </Form.Group>
          </Form>
        </div>
      </Segment>
    );
  }
}

export default LabelHandler;
