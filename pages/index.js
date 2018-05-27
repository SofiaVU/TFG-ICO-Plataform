import React from 'react';
import {Col, label, Button, ListGroup, Navbar, Nav, NavItem} from 'react-bootstrap';

import { default as Web3} from 'web3';
import contractArtifact from '../build/contracts/IcoDDBB.json'
import contractERC20 from '../build/contracts/createERC20_v2.json'
import { default as contract } from 'truffle-contract'

// REACT COMPONENTS
import Formu from '../components/Formu'
import IcoList from '../components/IcoList'



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
		});
		this.formCliked = this.formCliked.bind(this);
		this.registerNewICO = this.registerNewICO.bind(this);
		this.deployNewERC20 = this.deployNewERC20.bind(this);
		this.updateList = this.updateList.bind(this);
		this.executeTransfer = this.executeTransfer.bind(this);
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

				console.log(last.valueOf());


	            this.setState({
					lastICO: last.valueOf(),
				});	
			}
		});
		console.log("eventReg watch has been started");

		this.setState({
			contrato: contrato,
			event_Register: eventReg,			
		});	

	}


	/*
	* Metodo que recibe props del componente Form con la info introducida
	*/
	formCliked (formInfo) {

		console.log("formInfo recieved");
		//console.log(formInfo);

		// Guardar nueva ICO en Smart Contract IcoDDBB.sol
		this.registerNewICO(formInfo);

		// Desplegar ERC20 de la new ICO
		this.deployNewERC20(formInfo);	

		// Actualizar listado de ICos
		this.updateList();

	}

	/*
	* Se conecta con la blockchain para interactuar con el smart contract IcoDDBB.sol
	*/
	registerNewICO(info) {
		console.log(">>>>REGISTER<<<<<<");
		//console.log(info);

		//register(string name, string opppening, string clossing)
		this.state.contrato.register(info.icoName, info.tokenName, info.OpeningDate, info.ClossingDate, info.tokenPrice, {from: account, gas:2000000})
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
		//createERC20 (string tName, string  tSymbol, uint nDecimals, uint256  initialSup, uint256 p_buy, address owner)
		var contrato = await theERC20.deployed();
		//console.log("Contrato =", contrato);
		arrayERC20.push(contrato);
		//console.log("array lenght" + arrayERC20.length);
		
		contrato.setERC2Params(info.tokenName, info.symbol, info.tokenDecimals, info.tokenTotalSupply, info.tokenPrice, account,
			{from: account, gas:200000}).then((res, err) => {
				if(!err){
					console.log(">>>>> PARAMs SET <<<<<<");
				}else{
					console.log(err);
				}
			});		

		// EVENTO
		// event Transfer(address indexed from, address indexed to, uint256 value)
		var eventTransfer = contrato.Transfer();
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
			}
		});
		console.log("eventTransfer watch has been started");

		this.setState({
			event_Transfer: eventTransfer,			
		});
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
	executeTransfer(contract){

		//console.log("TRAZA 4");
		//console.log(contract);
		contract.transfer(account, 100, {from: account, gas:200000});

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


	/*
	* Metodo render que renderiza la vista ppal
	*/
	render() {

		return(
			<div>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
				<Navbar inverse collapseOnSelect>
		            <Navbar.Header>
		                <h1 className="cabName" style={{color: "white", fontSize: "4vh", float: "left", marginLeft:"-100px"}}><strong>ICO PLATAFORM by svu</strong></h1>
		            </Navbar.Header>
		        </Navbar>

		        <Col md={5} style={{borderRight: "solid"}}>											
					<Formu formCliked={this.formCliked}/>											
				</Col>

				<Col md={7} >
						<IcoList ICOarray={this.state.id_Array}  instancia={this.state.contrato} arrayERC20={arrayERC20} getERC20contract={this.executeTransfer}/>
					</Col>

			</div>
		);

	}
}