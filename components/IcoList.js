import React from 'react';
import {ListGroup, Table, thead, tbody} from 'react-bootstrap';
import IcoDetail from '../components/IcoDetail'


export default class IcoList extends React.Component {

	/*
    * constructor que maneja las props recibidas y la enví al componente padre
    */
    constructor(props){
        super(props);        
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
    		return(<IcoDetail key={index} ico={icoID} instancia={this.props.instancia} ERC20contrato={this.props.arrayERC20[icoID]}/>);
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