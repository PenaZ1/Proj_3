import React from "react";

import TakeOff from "../components/TakeOff";
import MapContainer from "../components/MapContainer";
import Navigation from "../components/Navigation";

const TakeOffPage = () => {
    return (
        <div>
            <Navigation />
            <MapContainer />
            <TakeOff />
        </div>
    )
}

export default TakeOffPage;