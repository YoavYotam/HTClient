//This is your top level React component, you may change everything

import React from "react";
import { Header, Container } from "semantic-ui-react";
import LabelHandler from "./labelhandler";
import MapHandler from "./maphandler";
import io from "socket.io-client";

const socket = io("http://localhost:3005");   //establishes 1 connection

/*Data will be here, the messages will be handled from MessageHandler to server
  the messages recieved from server will be inserted to the data -here using connectionHandler().
  chatRoom will use this data to show the messages.
  if a message's userName in chatRoom is the same as the currentUser, then it will be colored differently.
*/

//
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      markers:[
        {lat: 31.262191169003636,lng: 34.79842185974121 },
        {lat: 31.252191169003636,lng: 34.79842185974121 },
        {lat: 31.262191169003636,lng: 34.78842185974121 },
        {lat: 31.252191169003636,lng: 34.78842185974121 },
      ]
    };
  }
  componentDidMount() {
    this.connectionHandler();
  }

  connectionHandler = () => {
    socket.on("connect", function() {});
    socket.on("disconnect", function() {});
    socket.on(`services/${event}`, ack => {
      this.setState({ markers: [...ack]});
      // console.log(`ack - lat (App) :`+ack[0].lat);
      // console.log(`ack - lng(App) :`+ack[0].lng);
      // console.log(`lat (App) :`+this.state.markers[0].lat);
      // console.log(`lng (App) :`+this.state.markers[0].lng);
    });
  };

  render() {
    // const { marker} = this.state;
    return (
      <div className="main">
        <div className="header">
          <Header as="h2">
            Welcome to HomeTown App!
          </Header>
        </div>

        <div>
          <Container className={"map"}>
            <MapHandler receivedMarkers={this.state.markers} />
          </Container>
        </div>

        <Container className={"labels"}>
          <LabelHandler 
            socket={socket}
          />
        </Container>
      </div>
    );
  }
}

export default App;
