import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo img-fluid img-thumbnail">
        <br/>
        <Jumbotron style={{'backgroundImage': `url("assets/images/cutebabybg13.png")`}} ></Jumbotron>
        <h4 className="bg-warning m-4 p-2 animated fadeInDown instructions">{props.message}</h4>
    </div>
);

export default Instructions;