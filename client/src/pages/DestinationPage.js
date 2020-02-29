import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../appReducer";
import Destination from "components/Destination";
import MapContainer from "../components/MapContainer";
import Navigation from "components/Navigation";
import '../App.css';



const DestinationPage = (props) => {
    const { state, dispatch } = useAppContext();
    const [center, setCenter] = useState({ lat: 34.9611583, lng: -89.8456639 });

    const handleLocClick = (lat, lng) => {
        setCenter({ lat: lat, lng: lng });
    }

    const confirmClick = () => {
        window.location.href = "/confirm";
    }

    const destinationLoc = center;

    const confirm = () => {
        dispatch(["SET_DESTINATION", destinationLoc])
        confirmClick()
    }


    return (
        <div>
            <Navigation />
            <MapContainer center={center} />
            <ListGroup>
                <ListGroupItem as="li" active>Please select your destination!</ListGroupItem>
            </ListGroup>
            <Destination handleLocClick={handleLocClick} />
            <Button variant="secondary" size="lg" onClick={confirm}>Confirm</Button>
        </div>
    )
}

export default DestinationPage;