import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo">
        <Jumbotron style={{'background-image': `url("assets/images/cutebabybg3.png")`}} >
            <h3 className=" animated fadeInDown instructions">{props.message}</h3>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Jumbotron>
    </div>
);

export default Instructions;