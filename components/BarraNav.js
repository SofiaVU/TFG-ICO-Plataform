import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Col, label, Button, ListGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


export default class BarraNav extends React.Component {

    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        event.preventDefault();
        //alert(`selected ${eventKey}`);
        this.props.navControl(eventKey);
    }

  render () {
    return (
      <Navbar inverse collapseOnSelect style={{height: "75px"}} onSelect={k => this.handleSelect(k)}>
          <Navbar.Header>
            <Navbar.Brand>
              <ul style={{listStyle: "none"}}>
                <li><a style={{color: "white", fontSize: "3vh",  marginLeft: "25px"}}>ICO FACTORY</a></li>
                <li><a style={{color: "white", fontSize: "1.75vh"}}>Created by SOFÍA VIDAL URRIZA</a></li>
              </ul>
            </Navbar.Brand>                    
          </Navbar.Header>
          <Navbar.Collapse>                    
            <Nav pullRight>
              <NavItem style={{color: "white", fontSize: "3vh",  marginLeft: "25px"}} eventKey={0}>Home</NavItem>
              <NavItem style={{color: "white", fontSize: "3vh",  marginLeft: "25px"}} eventKey={1}>Create ICO</NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );        
  }
}