import React from 'react';
import {ListGroup, Table, thead, tbody} from 'react-bootstrap';
import IcoDetail from '../components/IcoDetail'


export default class IcoList extends React.Component {

	/*
    * constructor que maneja las props recibidas y la enví al componente padre
    */
    constructor(props){
        super(props); 
        this.getIDfromDetail = this.getIDfromDetail.bind(this);      
    }

    /*
    *
    */
    getIDfromDetail(id){

        // Recibe de IcoDetail el id de la ICO sobre la que se ha pulsado
        // envia a index el contratoERC20 de dicha ICO
        //console.log("TRAZA 2");
        console.log(id);
        this.props.getERC20contract(this.props.arrayERC20[id]);
        //console.log("TRAZA 3");
        //console.log(this.props.arrayERC20[id]);

    }

    /*
    * Renderizado del componente: maneja la lista de icos
    */
    render(){

    	if(this.props.ICOarray === null){
    		return(
    			<p> Cargando... </p>
    		);
    	}

    	//lista procedente de componente padre
        let lista = [];

    	lista = this.props.ICOarray.map((icoID,index) => {
    		return(<IcoDetail key={index} ico={icoID} instancia={this.props.instancia} getID={this.getIDfromDetail}/>);
            //return(<IcoDetail key={index} ico={icoAddr} instancia={this.props.instancia} />);

    	});

        var instanciaContrato = this.props.instancia;

    	// devolvemos la lista
    	return(
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Opening date</th>
                            <th>Closing date</th>
                            <th>Token name</th>
                            <th>Token price (in ether)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista}                        
                    </tbody>            
                </Table>
            </div>
    	);
    }

}