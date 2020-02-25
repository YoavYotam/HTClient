import React from "react";
import { Header, Container,} from "semantic-ui-react";
import LabelHandler from "./labelhandler";
import MapHandler from "./maphandler";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      route: "http://localhost:3005/services/food",
    };
  }

  updateUrl = route => {
    this.setState({ route:route }); 
  };

  render() {
    const { route } = this.state;
    return (
      <div className="main">
        <div className="header">
          <Header as="h2">Welcome to Your HomeTown</Header>
        </div>

        <div >
          <Container className={"map"}>
            <MapHandler route={route} />
          </Container>
        </div>

        <Container className={"container"}>
          <LabelHandler updateUrl={this.updateUrl} />
        </Container>
      </div>
    );
  }
}

export default App;
