import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
} from "reactstrap";

export default function ClubEditor(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const changeField = (value, field) => {
    if (props.clubs[selected] === undefined) {
      return;
    }
    let newClubs = [...props.clubs];
    newClubs[selected][field] = value;
    console.log(newClubs);
    props.setClubs(newClubs);
  };

  return (
    <Card style={{ backgroundColor: "lightgrey" }}>
      <CardBody>
        <CardTitle tag="h5">Club Editor</CardTitle>
        <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
          <DropdownToggle caret>select club</DropdownToggle>
          <DropdownMenu>
            {props.clubs.map((club, index) => {
              return (
                <DropdownItem
                  onClick={(e) => setSelected(e.target.value)}
                  key={club.id}
                  value={index}
                >
                  {club.name}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
          <div>
            <Label>Club Name</Label>
            <Input
              type="text"
              value={props.clubs[selected]?.name}
              onChange={(e) => changeField(e.target.value, "name")}
            />
          </div>
          <div>
            <Label>ID</Label>
            <Input
              type="text"
              value={props.clubs[selected]?.id}
              onChange={(e) => changeField(e.target.value, "id")}
            />
          </div>
          <div>
            <Label>Club Location</Label>
            <Input
              type="text"
              value={props.clubs[selected]?.location}
              onChange={(e) => changeField(e.target.value, "location")}
            />
          </div>
          <div>
            <Label>Genre</Label>
            <Input
              type="text"
              value={props.clubs[selected]?.genre}
              onChange={(e) => changeField(e.target.value, "genre")}
            />
          </div>
          <div>
            <Label>Max Capacity</Label>
            <Input
              type="number"
              value={props.clubs[selected]?.maxCapacity}
              onChange={(e) => changeField(e.target.value, "maxCapacity")}
            />
          </div>
        </Dropdown>
      </CardBody>
    </Card>
  );
}
