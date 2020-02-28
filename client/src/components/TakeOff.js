import React, { useState, useEffect } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
const axios = require('axios');

function TakeOff(props) {
    const [userChoice, setuserChoice] = useState("");
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('/api/locations').then((res) => {
            setLocations(res.data);
        }).catch((err) => {
            if (err) throw err
        });
    }, []);

    function validateForm() {
        return userChoice.length;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Accordion>
                    {locations.map((key, index) => {
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                        {locations[index].name}
                                    </Accordion.Toggle>
                                </Card.Header>
                            </Card>
                        )
                    })}
                </Accordion>
            </form>
        </div>
    )
}

export default TakeOff;
