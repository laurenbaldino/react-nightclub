import React from "react";
import { Card, CardTitle, Button, Input, Label, Form } from "reactstrap";

class AddClub extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      id: "",
      location: "",
      genre: "",
      maxCapacity: "",
    };
  }

  render(props) {
    return (
      <Card style={{ width: 500, height: 450, backgroundColor: "lightgrey" }}>
        <CardTitle tag="h5">Add Club</CardTitle>
        <Form>
          <Label>Club Name</Label>
          <Input
            type="text"
            placeholder="Club Arcane"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          ></Input>
          <Label>ID</Label>
          <Input
            type="text"
            placeholder="arcane"
            value={this.state.id}
            onChange={(e) => this.setState({ id: e.target.value })}
          ></Input>
          <Label>Location</Label>
          <Input
            type="text"
            placeholder="Rochester, NY"
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          ></Input>
          <Label>Genre</Label>
          <Input
            type="text"
            placeholder="Rock"
            value={this.state.genre}
            onChange={(e) => this.setState({ genre: e.target.value })}
          ></Input>
          <Label>Max Capacity</Label>
          <Input
            type="text"
            placeholder="100"
            value={this.state.maxCapacity}
            onChange={(e) => this.setState({ maxCapacity: e.target.value })}
          ></Input>
          <Button
            style={{ backgroundColor: "green", marginLeft: 200 }}
            onClick={() =>
              this.props.addClub({
                name: this.state.name,
                id: this.state.id,
                location: this.state.location,
                genre: this.state.genre,
                maxCapacity: this.state.maxCapacity,
              })
            }
          >
            {" "}
            Add
          </Button>
        </Form>
      </Card>
    );
  }
}

export default AddClub;
