import React, { useState, Component } from "react";
import { ButtonGroup, Button, Dropdown, DropdownButton, Card, ListGroup, ListGroupItem } from "react-bootstrap";
const distfrom = require('distance-from');

class Confirm extends Component {
    YesClick() {
        window.location.href = "/enjoy";
    }
    TakeOffClick() {
        window.location.href = "/takeoff";
    }
    DestinationClick() {
        window.location.href = "/destination";
    }
    CancelClick() {
        window.location.href = "/";
    }
    //conditional for if user selects yes to go to payment component, if no goes back to
    //destination component
    render() {
        const takeOffPoint = [];
        const destinationPoint = [];
        return (
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Confirm Purchase</Card.Title>
                    <br></br>
                    <ListGroup className="list-group-flush">
                        {/* append distance between user choices of destination  */}
                        <ListGroupItem>Distance:</ListGroupItem>
                        <br></br>
                        {/* append in result of logic to handle cost of trips */}
                        <ListGroupItem>Cost:</ListGroupItem>
                        <br></br>
                    </ListGroup>
                    <ButtonGroup >
                        <Button onClick={this.YesClick}>Yes</Button>
                        <DropdownButton as={ButtonGroup} title="No" id="bg-vertical-dropdown-1">
                            <Dropdown.Item eventKey="1" onClick={this.TakeOffClick}>TakeOff</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={this.DestinationClick}>Destination</Dropdown.Item>
                        </DropdownButton>
                        <Button onClick={this.CancelClick}>Cancel</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card >
        )
    }

}

export default Confirm;