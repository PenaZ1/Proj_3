import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/EnterBtn.css"
class EnterBtn extends Component {
    constructor(props) {
        super(props) 

            this.state = {
                message: "Hi!"
            }
        }
    handleClick(){
        window.location.href="login";
    }
    
    render() {
        return (
            <div id="EnterBtn">
                <span>{this.state.message}</span> <br/>
                <Button onClick={this.handleClick}>Enter</Button>
            </div>
        )

    }

}

export default EnterBtn