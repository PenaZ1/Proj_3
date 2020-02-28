import React, { useState } from "react";

import TakeOff from "../components/TakeOff";
import MapContainer from "../components/MapContainer";
import Navigation from "../components/Navigation";

const TakeOffPage = () => {
    const [center,setCenter] = useState({lat: 34.9611583, lng: -89.8456639});

    const handleLocClick = (lat,lng) => {
        setCenter({lat: lat,lng: lng});
    }
    console.log(center)

    return (
        <div>
            <Navigation />
            <MapContainer center={center}/>
            <TakeOff handleLocClick = {handleLocClick}/>
        </div>
    )
}

export default TakeOffPage;
