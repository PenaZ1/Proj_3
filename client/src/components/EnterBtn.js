import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
//import "./Login.css";

class EnterBtn extends Component {
    constructor(props) {
        super(props) 

            this.state = {
                message: "Hi!"
            }
        }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button>Enter</button>
            </div>
        )

    }

}

export default EnterBtn