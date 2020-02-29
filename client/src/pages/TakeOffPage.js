import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../appReducer";
import MapContainer from "../components/MapContainer";
import Navigation from "../components/Navigation";
import TakeOff from "../components/TakeOff";


const TakeOffPage = (props) => {
    const { state, dispatch } = useAppContext();
    const [center, setCenter] = useState({ lat: 34.9611583, lng: -89.8456639 });


    const handleLocClick = (lat, lng) => {
        setCenter({ lat: lat, lng: lng });
    }

    //go to a new route when fired
    const confirmClick = () => {
        window.location.href = "/destination";
    }

    //set variable so we know what we're sending in dispatch
    const takeOffLoc = center;

    const confirm = () => {
        // handle getting the lat/long here, and push to DB, or figure out how to pass as props.
        dispatch(["SET_TAKEOFF", takeOffLoc])

        //trigger new route
        confirmClick()
    }

    return (
        <div>
            <Navigation />
            <MapContainer center={center} />
            <ListGroup>
                <ListGroupItem as="li" active>Please select your take off location!
                <Button variant="secondary" size="sm" onClick={confirm}>Confirm</Button>
                </ListGroupItem>
            </ListGroup>
            <TakeOff handleLocClick={handleLocClick} />
        </div>
    )
}

export default TakeOffPage;