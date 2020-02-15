import React, { useState } from "react";
import { ButtonGroup, Button, Dropdown, DropdownButton } from "react-bootstrap";

function Confirm(props) {
    //conditional for if user selects yes to go to payment component, if no goes back to
    //destination component
    return (
        <ButtonGroup >
            <Button>Yes</Button>
            <DropdownButton as={ButtonGroup} title="No" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">TakeOff</Dropdown.Item>
                <Dropdown.Item eventKey="2">Destination</Dropdown.Item>
            </DropdownButton>
            <Button>Cancel</Button>
        </ButtonGroup>
    )
}

export default Confirm;