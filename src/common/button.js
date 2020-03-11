import React from "react";
import {Button} from "semantic-ui-react";

const button = (props) => {
    return(
        <Button onClick={props.onClick} color={'black'}>{props.title}</Button> || null
    )
};

export default button;
