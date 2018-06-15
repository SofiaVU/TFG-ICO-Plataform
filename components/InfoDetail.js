import React from 'react';
import ReactDOM from 'react-dom';
import { default as contract } from 'truffle-contract';

import {Row, Col,Button,form, label, FieldGroup,FormGroup,ControlLabel, FormControl} from 'react-bootstrap';
import contractERC20 from '../build/contracts/createERC20_v2.json'

import BalancesList from '../components/BalancesList'



export default class IfoDetail extends React.Component {

	constructor(props){
        super(props);
        this.state =({ 
        	instance: null, 
            nameICO: null,
            tokenAddr: null,
            tokenName: null,
            tokenSymbol: null,
            tokenDecimals: null,
            openingDate: null,
            closingDate: null,
            price: null,
            token: null,
            totalSupply: null,
            actualSupply: null, 
            arrayEvents: null,
        });
        this.getInfoFromICOBB = this.getInfoFromICOBB.bind(this);
        this.getInfoFromERC20 = this.getInfoFromERC20.bind(this);
        this.getAllPastEvents = this.getAllPastEvents.bind(this);
    }

    async componentWillMount() {
    	var theERC20 = contract(contractERC20);
        theERC20.setProvider(web3.currentProvider);

        var tokenAdd = await this.props.contrato.getTokenAddressByID.call(this.props.IcoID);

        var instancia = theERC20.at(tokenAdd);

        var miArray = new Array();

        this.setState({
        	instance: instancia,
        });

        var miArray = new Array();

        var events = await instancia.allEvents({fromBlock:0, toBlock: "latest"});
    	events.get((err, logs)=>{
    		
    		console.log(logs[i]);
    		for (var i=0; i < logs.length; i++){
    			console.log(i);
    			var miEvent = new Object();
    			miEvent.from = logs[i].args.from;
    			miEvent.to = logs[i].args.to;
    			miEvent.value = logs[i].args.value.toNumber();

    			//console.log(miEvent.from); console.log(miEvent.to); console.log(miEvent.value);
    			miArray.push(miEvent);

    		}
    	});
    	console.log(miArray);
    	this.setState({arrayEvents: miArray});
    }

    async getInfoFromICOBB() {
    	var contrato = this.props.contrato;
    	var icoName =  await contrato.getICOnameByID(this.props.IcoID);
    	var oDate = await contrato.getOpeningDateNameByID.call(this.props.IcoID);
    	var cDate = await contrato.getClosingDateNameByID.call(this.props.IcoID);
    	this.setState({
    		nameICO: icoName,
    		openingDate: oDate,
    		closingDate: cDate,
    	});

    	var tokenAdd = await contrato.getTokenAddressByID.call(this.props.IcoID);
    	this.getInfoFromERC20(tokenAdd);
    }

    async getInfoFromERC20(addr) {
    	/*var theERC20 = contract(contractERC20);
        theERC20.setProvider(web3.currentProvider);

        var instance = theERC20.at(addr);*/
        var tokName = await this.state.instance.tokenName();
        var symbol = await this.state.instance.symbol();
        var decimals = await this.state.instance.decimals();
        var dec = decimals.toNumber();
        var tokPrice = await this.state.instance.buyPrice();
        var tprice = tokPrice.toNumber();
        var supp = await this.state.instance.totalSupply();
        var totSupply = supp.toNumber();
        var aSupp = await this.state.instance.actualSupply();
        var actSupply = aSupp.toNumber();

    	this.setState({
    		tokenAddr: addr,
            tokenName: tokName,
            tokenSymbol: symbol,
            price: tprice,
            totalSupply: totSupply,
            actualSupply: actSupply,
            tokenDecimals: dec, 
        });

    }

    async getAllPastEvents(instancia){
    	//console.log("AAAAAQUIIII");
    	
    	var miArray = new Array();

        var events = await instancia.allEvents({fromBlock:0, toBlock: "latest"});
    	events.get((err, logs)=>{
    		/*var aux = JSON.stringify(logs);
    		console.log(JSON.stringify(logs));
    		this.setState({
    			prueba: aux,
    		});
    		return aux;*/
    		console.log(logs[i]);
    		for (var i=0; i < logs.length; i++){
    			console.log(i);
    			var miEvent = new Object();
    			miEvent.from = logs[i].args.from;
    			miEvent.to = logs[i].args.to;
    			miEvent.value = logs[i].args.value.toNumber();

    			console.log(miEvent.from);
    			console.log(miEvent.to);
    			console.log(miEvent.value);
    			miArray.push(miEvent);

    		}
    	});
    	console.log(miArray);
    	this.setState({arrayEvents: miArray});
    }

	render(){
		this.getInfoFromICOBB();
		return(
			<div>
				<Row className="show-grid">
					<Col xs={12} md={6}>
						<ul className="list-group">
							<li className="list-group-item">
								<h1><strong>ICO NAME {this.state.nameICO}</strong></h1>				
								<h3><strong>Token name:</strong> {this.state.tokenName} </h3>
								<h3><strong>Token symbol:</strong> {this.state.tokenSymbol} </h3>
								<h3><strong>ICO Opening Date:</strong> {this.state.openingDate} </h3>
								<h3><strong>ICO Closing Date:</strong> {this.state.closingDate} </h3>
								<h3><strong>{this.state.tokenName} Price:</strong>  {this.state.price} ether's </h3>
								<h3><strong>Total Supply of {this.state.tokenName} in contract:</strong> {this.state.totalSupply}</h3>
								<h3><strong>Actual Supply of {this.state.tokenName} in contract:</strong> {this.state.actualSupply}</h3>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={6}>
						<ul className="list-group">
							<li className="list-group-item">
								<h1><strong>INFO TO ADD TOKEN TO METAMASK</strong></h1>
								<h3><strong>Token Smart Contract Addres:</strong></h3><h4> {this.state.tokenAddr}</h4>
								<h3><strong>Token symbol:</strong> {this.state.tokenSymbol}</h3>
								<h3><strong>Token Decimals Of precision:</strong> {this.state.tokenDecimals}</h3> 
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<h1>BALANCES</h1>
					<BalancesList arrayEvents={this.state.arrayEvents} 
						total={this.state.totalSupply} 
						actual={this.state.actualSupply} 
					/>
 				</Row>
				
			</div>
		);
	}

}