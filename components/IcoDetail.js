import React from 'react';
import {ListGroupItem, Button} from 'react-bootstrap';

export default class IcoDetail extends React.Component {

	/*
	* CONSTRUCTOR
	*/
	constructor(props){
        super(props);
        this.state =({ 
            name: null,
            openingDate: null,
            closingDate: null,
            price: null,
            token: null,
        });
        this.getName = this.getName.bind(this);
        this.getOpeningDate = this.getOpeningDate.bind(this);
        this.getClosingDate = this.getClosingDate.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.transfer = this.transfer.bind(this);
             
    }

    async getName() {
    	
    	var name = await this.props.instancia.getICOnameByID.call(this.props.ico);
    	this.setState({name: name});

    }

    async getOpeningDate(){
    	
    	var date = await this.props.instancia.getOpeningDateNameByID.call(this.props.ico);    	
    	//console.log(date);

    	this.setState({openingDate: date});
    }

    async getClosingDate(){
    	
    	var date = await this.props.instancia.getClosingDateNameByID.call(this.props.ico);    	
    	//console.log(date);

    	this.setState({closingDate: date});
    }

    async getPrice() {
    	
    	var tprice = await this.props.instancia.getTokenPriceByID.call(this.props.ico);
    	tprice = tprice.toNumber();
    	this.setState({price: tprice});

    }

    async getTokenName() {
    	
    	var token = await this.props.instancia.getTokenNameByID.call(this.props.ico);
    	this.setState({token: token});

    }

    transfer(){
    	// function transfer( address _to, uint256 _value) public
    	//this.props.ERC20contrato;
    	//enviar a index el contrato del ERC20 para hacer ahi la transfer

    }
   

    render(){
        let ico = this.props.ico;
        //console.log(this.props.instancia);
        
        if(this.state.name == null && this.state.tokenName == null && this.state.openingDate == null){
            this.getName();
            this.getTokenName(ico);
            this.getOpeningDate();
            this.getClosingDate();
            this.getPrice();
        }
    	return(
    		<tr>
                <td>{this.state.name}</td>
                <td>{this.state.openingDate}</td>
                <td>{this.state.closingDate}</td>
                <td>{this.state.token}</td>
                <td>{this.state.price} ethers/toker</td>
                <td><Button onclick={this.transfer}>Buy tokens</Button></td>
            </tr>
    	);
	}

}