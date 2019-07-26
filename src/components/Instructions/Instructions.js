import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo">
        <Jumbotron style={{'background-image': `url("assets/images/cutebabybg13.png")`}} ></Jumbotron>
        <h4 className="bg-warning m-4 p-2 animated fadeInDown instructions">{props.message}</h4>
    </div>
);

export default Instructions;