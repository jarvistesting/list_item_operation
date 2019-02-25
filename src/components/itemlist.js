import React from 'react';
import './../App.css';
import { Button } from 'reactstrap';

const itemlist = (props)=> {
    return (
        <li className="style_li">
            <span style={{marginRight:'10px'}}>{props.children}</span>
            <Button color="danger" outline size="sm" type="button" onClick={props.delEvent}>Delete</Button>
        </li>
    )
}

export default itemlist;