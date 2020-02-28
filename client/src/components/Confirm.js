import React, { useState, Component } from "react";
import { ButtonGroup, Button, Dropdown, DropdownButton, Card } from "react-bootstrap";

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
        return (
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Confirm Purchase</Card.Title>
                    <Card.Text>
                        {/* this space is for appending user choices of destination and takeoff along with cost/mileage */}
                    </Card.Text>
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