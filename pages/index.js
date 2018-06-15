import React from 'react';
import {Col, label, Button, ListGroup, Navbar, Nav, NavItem} from 'react-bootstrap';

import { default as Web3} from 'web3';
import contractArtifact from '../build/contracts/IcoDDBB.json'
import contractERC20 from '../build/contracts/createERC20_v2.json'
import { default as contract } from 'truffle-contract'

// REACT COMPONENTS
import Formu from '../components/Formu'
import IcoList from '../components/IcoList'
import BarraNav from '../components/BarraNav'
import InfoDetail from '../components/InfoDetail'



// TODO ESTO SOBRA PORQUE USAMOS LA EXTENSION METAMASK
var web3;
if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	//  Especificamos el provider 
	// empleando chrome con MetaMask el provider es injectado automaticamente
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
} 

var account = web3.eth.accounts[0];

var arrayERC20 = new Array(); // guarda los contratos de los tokens creados

export default class App extends React.Component {

	/* 
	* Constructor que define el estado del componente
	*/
	constructor(props){
		super(props);

		this.state = ({
			contrato: null,
			lastICO: null,
			event_Register: null,
			/*event_CreateToken: null, */
			event_Transfer: null, 
			id_Array: null,
			nav: 0, 
			icoClicked: null,
		});
		this.formCliked = this.formCliked.bind(this);
		this.registerNewICO = this.registerNewICO.bind(this);
		this.deployNewERC20 = this.deployNewERC20.bind(this);
		this.updateList = this.updateList.bind(this);
		this.executeTransfer = this.executeTransfer.bind(this);
		this.navControl = this.navControl.bind(this);		
		this.clickedICO = this.clickedICO.bind(this);
	}

	/*
	* Métdo invocado 1 vez antes de que el render inicial ocurra 
	*/ 
	async componentWillMount() {

		var theContract = contract(contractArtifact);

		theContract.setProvider(web3.currentProvider);

		// CONTRATO		
		var contrato = await theContract.deployed(); // ESTO YA ME GUARDA EL CONTRATO
		//console.log("Contrato =", contrato);

		// EVENTO 
		var eventReg = contrato.Register();
		/* Event Params: Register(uint id, string name, string opppening, string clossing, address icoOwner) */
		//console.log(event);

		// LANZAMOS WATCH
		eventReg.watch((err, event) => {
			//console.log(event);
			if (err){
				console.log(err);
			} else {
				console.log("This is the event!");
				//console.log(event);
				console.log("ICO was created/registered by: " + event.args.icoOwner);

				var icoId = event.args.id;

				console.log("The last ICO was given the following ID: " + icoId);

				var last = new Object();
				last.id = event.args.id;
				last.name = event.args.name;
				last.opppeningDate = event.args.opppening;
				last.clossingDate = event.args.clossing;
				last.owner = event.args.icoOwner;

				//console.log(last.valueOf());


	            this.setState({
					lastICO: last.valueOf(),
				});	
				this.updateList();
			}
		});
		console.log("eventReg watch has been started");

		this.setState({
			contrato: contrato,
			event_Register: eventReg,			
		});
		this.updateList();

	}


	/*
	* Metodo que recibe props del componente Form con la info introducida
	*/
	async formCliked (formInfo) {

		console.log("formInfo recieved");
		//console.log(formInfo);

		// Desplegar ERC20 de la new ICO
		var tokenAddr =  await this.deployNewERC20(formInfo);
		console.log("TRAZA 2: " + tokenAddr);	

		// Guardar nueva ICO en Smart Contract IcoDDBB.sol
		this.registerNewICO(formInfo, tokenAddr);		

		// Actualizar listado de ICos
		this.updateList();
		this.setState({nav: 0});

	}

	/*
	* Se conecta con la blockchain para interactuar con el smart contract IcoDDBB.sol
	*/
	registerNewICO(info, tokenAdd) {
		console.log(">>>>REGISTER<<<<<<");
		//console.log(info);
		
		var add = tokenAdd;
		console.log("AAAAAQUIIIIIIIII");
		console.log(add);

		//register(string name, string opppening, string clossing)
		//register(string name, address token,  string opppening, string clossing)
		this.state.contrato.register(info.icoName, add, info.OpeningDate, info.ClossingDate, {from: account, gas:2000000})
		.then(res => {
			console.log(">>>>>>>>>>>> +1 succes");
		})
        .catch(err => {
			console.log("ERROR", err);
        });

	}

	/*
	* Método que despliega sobre la Blockhain el nuevo ERC20 creado
	*/
	async deployNewERC20(info) {
		console.log(">>>>DEPLOY ERC20<<<<<<");
		//console.log(info);
		
		var theERC20 = contract(contractERC20);

		theERC20.setProvider(web3.currentProvider);
		

		// CONTRATO	
		// New instance of the Smart Contract -> NUEW TOKEN
		var tokenInstance = await theERC20.new({from: account, gas:2000000}).then(function(instanciaERC20){
			// print addr of the new token 
			console.log(">>>>>>>>> NEW TOKEN <<<<<<<<<<<");
			console.log(instanciaERC20.address);
			return (instanciaERC20);
		});
		//console.log("Contrato: " + tokenInstance);		

		tokenInstance.setERC2Params(info.tokenName, info.symbol, info.tokenDecimals, info.tokenTotalSupply, info.tokenPrice, account,
			{from: account, gas:200000}).then((res, err) => {
				if(!err){
					console.log(">>>>> PARAMs SET <<<<<<");
				}else{
					console.log(err);
				}
		});

		// Actualizamos array
		arrayERC20.push(tokenInstance); //arrayERC20.push(contrato);
		//console.log("array lenght" + arrayERC20.length);

		
		//var tok = await tokenInstance.tokenName();
		console.log("TOKEN NAME " + await tokenInstance.tokenName());
		

		// EVENTO
		// event Transfer(address indexed from, address indexed to, uint256 value)
		var eventTransfer = tokenInstance.Transfer();//contrato.Transfer();
		//console.log(eventTransfer);

		// LANZAMOS WATCH
		eventTransfer.watch((err, event) => {
			//console.log(event);
			if (err){
				console.log(err);
			} else {
				console.log("This is the Transfer event!");
				//console.log(event);
				console.log(">>>>> TANSFER MADE <<<<<");
				console.log("Anamount of " + event.args.value + " tokens have been transfered to " + event.args.to);
				//updateList();
			}
		});
		console.log("eventTransfer watch has been started");

		this.setState({
			event_Transfer: eventTransfer,			
		});

		// RETURN THE ADDRESS OF THE CONTRACT CREATED ABOVE
		console.log("TRAZA 1: " + tokenInstance.address);
		return tokenInstance.address;
	}


	/*
	* Metodo que pide a la Blockchain el array de id's de las ICOs
	*/
	async updateList(){
		console.log("UPDATE ICO LIST ");
		var idArray = [] 
		idArray = await this.state.contrato.getIdIcos.call();
		//console.log("ARRAY");
		//console.log(idArray);

		this.setState({ id_Array: idArray});

	}


	/*
	*
	*/
	async executeTransfer(contractID){

		console.log("TRAZA 4");
		console.log(contractID);

		//contract.transfer(account, 100, {from: account, gas:200000});
		//console.log(this.state.contrato)
		var theContract = await this.state.contrato.getTokenAddressByID.call(contractID);

		var theERC20 = contract(contractERC20);
        theERC20.setProvider(web3.currentProvider);
        console.log(theContract);

        var instance = theERC20.at(theContract);
        instance.transfer(account, 100, {from: account, gas:200000});

	}

	/*
	* Invocado inmediatamente antes de que un componente se desmonte del DOM
	*/
	componentWillUnmount(){
		// TEAR DOWN WATCH
		this.state.event_Register.stopWatching();
		//this.state.event_CreateToken.stopWatching();
		this.state.event_Transfer.stopWatching();
		console.log("watch's have been tore down");
	}

	navControl(updatedState){
		this.setState({nav: updatedState});

	}
	clickedICO(id) {
		this.setState({icoClicked: id});
	}


	/*
	* Metodo render que renderiza la vista ppal
	*/
	render() {

		switch (this.state.nav) {
			case  0: 
				return (
					<div>
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
						<BarraNav navControl={this.navControl}/>
						<Col md={2} />
						<Col xs={12} md={8}>
							<IcoList ICOarray={this.state.id_Array}  
								instancia={this.state.contrato} 
								arrayERC20={arrayERC20} 
								getERC20contract={this.executeTransfer}
								navControl={this.navControl}
								clickedICO={this.clickedICO}
							/>
						</Col>
					</div>
				);
				break;

			case 1:
				return(
					<div>
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
						<BarraNav navControl={this.navControl}/>
						<Col md={2} />
						<Col xs={12} md={8}>
							<Formu formCliked={this.formCliked}/>
						</Col>
					</div>
				);
				break;

			case 2:
				return(
					<div>
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
						<BarraNav navControl={this.navControl}/>
						<Col md={2} />
						<Col xs={12} md={8}>
							<InfoDetail IcoID={this.state.icoClicked}
								contrato={this.state.contrato}
							/>
						</Col>
					</div>
				);
				break;

			default:
				return(
					<div>
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
						<BarraNav navControl={this.navControl}/>
						<Col md={2} />
						<Col xs={12} md={8}>
							<IcoList ICOarray={this.state.id_Array}  
								instancia={this.state.contrato} 
								arrayERC20={arrayERC20} 
								getERC20contract={this.executeTransfer}
							/>
						</Col>
					</div>
				);
		}

		/*return(
			<div>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
				<BarraNav navControl={this.navControl}/>
				
		        <Col md={5} style={{borderRight: "solid"}}>											
					<Formu formCliked={this.formCliked}/>											
				</Col>

				<Col md={7} >
						<IcoList ICOarray={this.state.id_Array}  instancia={this.state.contrato} arrayERC20={arrayERC20} getERC20contract={this.executeTransfer}/>
					</Col>

			</div>
		);*/

	}
}