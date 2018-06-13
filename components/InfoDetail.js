import React from 'react';
import ReactDOM from 'react-dom';

import {Col,Button,form, label, FieldGroup,FormGroup,ControlLabel, FormControl} from 'react-bootstrap';



export default class IfoDetail extends React.Component {

	constructor(props){
        super(props);
    }

	render(){
		return(
			<div>
				<h1> ICO NAME {this.props.IcoID}</h1>				
				<h3> All info a continuacion </h3>
			</div>
		);
	}

}