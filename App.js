import React from "react";
import "./App.css";
import Club from "./components/Club";
import ClubEditor from "./components/ClubEditor";
import AddClub from "./components/AddClub";

import { Container, Row, Col, Card } from "reactstrap";

let intialClubs = [
  {
    name: "Club Arcane",
    id: "arcane",
    location: "Rochester, NY",
    genre: "Rock",
    maxCapacity: "100",
  },
  {
    name: "Club Underground",
    id: "underground",
    location: "Boston, MA",
    genre: "Pop",
    maxCapacity: "50",
  },
  {
    name: "Club Soda",
    id: "soda",
    location: "New York, NY",
    genre: "Metal",
    maxCapacity: "20",
  },
  {
    name: "Studio 52",
    id: "studio",
    location: "Chicago, IL",
    genre: "Alternative",
    maxCapacity: "52",
  },
];

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      clubs: intialClubs,
    };
  }

  deleteClub = (id) => {
    this.setState((prevState) => ({
      clubs: prevState.clubs.filter((club) => club.id !== id),
    }));
  };

  setClubs = (newClubs) => {
    this.setState({ clubs: newClubs });
    console.log(this.state);
  };

  addClub = (newClub) => {
    const newClubs = [...this.state.clubs, newClub];
    this.setState({ clubs: newClubs });
  };

  render() {
    console.log("rerendering", this.state.clubs);
    return (
      <Container>
        <h1> Nightclub Capacity Tracker</h1>
        <h4>
          Each time someone enters/ leaves the club, select the correct club and
          click the appropriate button.
        </h4>
        <Row>
          <Col className="club-container">
            {this.state.clubs.map((club) => (
              <Club
                key={club.id}
                name={club.name}
                id={club.id}
                location={club.location}
                genre={club.genre}
                maxCapacity={club.maxCapacity}
                onDelete={this.deleteClub}
              />
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: 500 }}>
              <ClubEditor clubs={this.state.clubs} setClubs={this.setClubs} />
            </Card>
          </Col>
          <Col>
            <Card>
              <AddClub addClub={this.addClub} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
