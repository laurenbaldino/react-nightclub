import React from "react";
import {
  Button,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Card,
} from "reactstrap";

class Club extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentCapacity: 0,
      selectedClub: "",
    };
  }

  increment() {
    this.setState({
      currentCapacity: this.state.currentCapacity + 1,
    });
  }

  decrement() {
    this.setState({
      currentCapacity: this.state.currentCapacity - 1,
    });
  }


  render(props) {
    return (
      <div>
        <Card
          style={{
            backgroundColor:
              this.state.currentCapacity >= this.props.maxCapacity
                ? "Red"
                : this.state.currentCapacity >= this.props.maxCapacity * 0.8
                ? "Yellow"
                : "#2ecc8f",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">{this.props.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Location: {this.props.location}
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Genre: {this.props.genre}
            </CardSubtitle>
            <CardText>
              <input
                type="text"
                defaultValue={this.state.currentCapacity}
                id="underground"
                style={{ "text-align": "center" }}
              ></input>
              <h6 id="heading-underground">
                {this.state.currentCapacity >= this.props.maxCapacity
                  ? "No one allowed in!"
                  : this.state.currentCapacity >= this.props.maxCapacity * 0.8
                  ? "Warn the bouncers!"
                  : "Welcome"}
              </h6>
            </CardText>
            <Button
              color="info"
              style={{ marginRight: "10px" }}
              disabled={this.state.currentCapacity >= this.props.maxCapacity}
              onClick={() => this.increment()}
            >
              +
            </Button>
            <Button
              color="primary"
              style={{ marginRight: "10px" }}
              disabled={this.state.currentCapacity <= 0}
              onClick={() => this.decrement()}
            >
              -
            </Button>
            <Button style={{ marginRight: "100px", backgroundColor: "red" }} onClick={() => this.props.onDelete(this.props.id)}
            >Remove</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Club;
