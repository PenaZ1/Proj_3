import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/EnterBtn.css"
class EnterBtn extends Component {
    handleClick() {
        window.location.href = "login";
    }
    render() {
        const btnStyle = {
            margin: "auto",
        };
        return (

            <div id="EnterBtn">
                <Button style={{ btnStyle }} onClick={this.handleClick}>Welcome</Button>
            </div>
        )

    }

}

export default EnterBtn