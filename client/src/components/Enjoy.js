import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/EnterBtn.css";
import "../App.css";

class Enjoy extends Component {
    handleClick() {
        window.location.href = "login";
    }
    render() {
        const btnStyle = {
            margin: "auto",
        };
        return (
            <>
                <h2 id="cloudTitle"><b>Happy</b> TakeOff</h2> <br />
                <div id="EnterBtn">
                    <Button size="lg" style={{ btnStyle }} onClick={this.handleClick}>Back to Start</Button>
                </div>
            </>
        )

    }

}

export default Enjoy;
