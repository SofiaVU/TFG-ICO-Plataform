pragma solidity ^0.4.4;

contract IcoDDBB   {
    
    struct ICO {
        uint id;
        string name;
        string openningDate;
        string clossingDate;
        address owner; 
        //address ERC2contract; // guardo la dir del contrato que crea el token de la ico asociado
    }
    
    //mapping (address => ICO) private icoListAdd;
    //address[] public addrIcos;
   
    mapping (uint => ICO) private icoList; // Diccionario (id -> ICO)
    uint[] public arrayIdICOs; // todos los id's
    uint id_counter = 0;
    
    address public owner;
    
    // EVENTS
    event Register(uint id, string name, string opppening, string clossing, address icoOwner);
    
    /*
    * Constructor del Smart Contract
    */
    function IcoDDBB() public {
        owner = msg.sender;
    }
    
    /*
    * Funcion registart una nueva ICO en la plataforma
    */
    function register(string name, string opppening, string clossing) public {
       
       icoList[id_counter] = ICO(id_counter, name, opppening, clossing, msg.sender);
       arrayIdICOs.push(id_counter);
       
       Register(id_counter, name, opppening, clossing, msg.sender);// lanzamos evento 
       
       id_counter = id_counter + 1; // actualizamos contador de ICOs
    }
    
    //////////////////////////////////////////////////////////////////////////
    //                                                                      //
    //                      GETTER FUNCTIONS                                //
    //                                                                      //
    //////////////////////////////////////////////////////////////////////////
    
    
    /*
    * Devuelve el numero de ICOs creadas/registradas
    */
    function numberOfIcos() public constant returns (uint) {
        return arrayIdICOs.length;
    }
    
    /*
    * Devuleve el array con todos los id's nde las ICOs
    */
    function getIdIcos ()  public constant returns (uint[]) {
        return arrayIdICOs;
    }
    
    /*
    * Devuleve el nombre de la ICO dado su id
    */
    function getICOnameByID(uint id) public constant returns (string) {
        return icoList[id].name;
    }
    
    /*
    * Devuleve la fecha de apertura de la ICO dado su id
    */
    function getOpenningDateNameByID(uint id) public constant returns (string) {
        return icoList[id].openningDate;
    }
    
    /*
    * Devuleve la fecha de apertura de la ICO dado su id
    */
    function getClossingDateNameByID(uint id) public constant returns (string) {
        return icoList[id].clossingDate;
    }
    
    /*
    * Devuleve el creador  de la ICO dado su id
    */
    function getOwnerAddeByID(uint id) public constant returns (address) {
        return icoList[id].owner;
    }
}