import React, { Component } from "react";
import { Form, Segment} from "semantic-ui-react";

//needs to send a list of markers
class LabelHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event:"",
    };
  }

  handleSubmit = (event) => {
    const {event} = this.state;

    const event = event;

    this.props.socket.emit(`services/${event}`, event);
  };
  

  render() {

    return (
      <Segment> 
        <div>
          <Form >
            <Form.Group>
              <Form.Button content="Foods" onSubmit={this.handleSubmit("")}/>
              <Form.Button content="Consumables" onSubmit={this.handleSubmit("")}/>
            </Form.Group>
          </Form>
        </div>
      </Segment>
    );
  }
}

export default LabelHandler;
