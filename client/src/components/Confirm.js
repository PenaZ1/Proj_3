import React, { useEffect } from "react";
import { ButtonGroup, Button, Dropdown, DropdownButton, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../appReducer";
import '../App.css';

const Confirm = () => {
    //pull in state and dispatch from context to use to calculate distance between takeoff and destination
    const { state, dispatch } = useAppContext();


    const YesClick = () => {
        window.location.href = "/enjoy";
    }
    const TakeOffClick = () => {
        window.location.href = "/takeoff";
    }
    const DestinationClick = () => {
        window.location.href = "/destination";
    }
    const CancelClick = () => {
        window.location.href = "/";
    }
    const takeOffPoint = [];
    const destinationPoint = [];
    //conditional for if user selects yes to go to payment component, if no goes back to
    //destination component

    // TODO: this isnt returning updated state :/ 
    console.log(state);

    return (
        <Card border="warning" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Confirm Purchase</Card.Title>
                <br></br>
                <ListGroup className="list-group-flush">
                    {/* append distance between user choices of destination  */}
                    <ListGroupItem>Distance: 135mi</ListGroupItem>
                    <br></br>
                    {/* append in result of logic to handle cost of trips */}
                    <ListGroupItem>Cost: $270</ListGroupItem>
                    <br></br>
                </ListGroup>
                <ButtonGroup >
                    <Button onClick={YesClick}>Yes</Button>
                    <DropdownButton as={ButtonGroup} title="No" id="bg-vertical-dropdown-1">
                        <Dropdown.Item eventKey="1" onClick={TakeOffClick}>TakeOff</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={DestinationClick}>Destination</Dropdown.Item>
                    </DropdownButton>
                    <Button onClick={CancelClick}>Cancel</Button>
                </ButtonGroup>
            </Card.Body>
        </Card >
    )
}

export default Confirm;