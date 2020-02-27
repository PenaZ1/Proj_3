import React from "react";
import MapContainer from "../components/MapContainer";
import Destination from "components/Destination";
import Navigation from "components/Navigation";

const DestinationPage = () => {
    return (
        <div>
            <Navigation />
            <MapContainer />
            <Destination />
        </div>
    )
}

export default DestinationPage;