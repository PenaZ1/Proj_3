import React from "react";

import Destination from "../components/Destination";
import MapContainer from "../components/MapContainer";

const axios = require('axios');

const testLogin = () => {
    axios.get('/api/loggedin').then((res) => {
        console.log(res.data)
    });
}

const TakeOffPage = () => {
    testLogin();
    return (
        <div>
            <MapContainer />
            <Destination />
        </div>
    )
}

export default TakeOffPage;