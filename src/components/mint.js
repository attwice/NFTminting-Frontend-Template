import React, { useState, useEffect } from "react";
import {Button} from "react-bootstrap";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../contract-abi.json");
const contractAddress = "0x751A9a39AF7E70C37916262644e4D0b8fa018CDE";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contract = new web3.eth.Contract(contractABI, contractAddress);  

const mintNFT = async(amount, price) => {  
  const {address} = await getCurrentWalletConnected();
  if (address === "") {
    return {
      success: false, 
      status: "❗Please make sure wallet connected.",           
    }
  }  
  else {      
    contract.methods.mint(amount).send({from: address, gasPrice: 80000000000, gas: 160000*amount, value: (amount * price)})
    .on("confirmation", function () {      
    })
    .on('error', async function (error, receipt) {
      console.log(error);      
    }); 

    return {
      status: "",
    }   
    
  }
}    

const Mint = () => {
  const [walletAddress, setWallet] = useState("");  
  const [show, setShow] = useState(false);
  const [tokenNumber, setTokenNumber] = useState(1);
  const [status, setStatus] = useState(""); 
  const publicsale = true;
  const [supply, setSupply] = useState(0);

  const handleClose = () => setShow(false);  
  const publicsale_price = 30000000000000000;

  const handleShow = async () => {  
    setShow(true);   
  };

  const onMintHandle = () => {       
    setStatus("Mint not allowed!");
  };

  const decreaseTokenNumber = () => {
    if (tokenNumber === 1) {
      return;
    }
    setTokenNumber(tokenNumber - 1);
  }

  const onMintPressed = async () => {          
    const { status } = await mintNFT(tokenNumber, publicsale_price); 
      setStatus(status);         
  };

  useEffect(() => {    
    async function fetchData() {
      const {address} = await getCurrentWalletConnected();      
      contract.methods.totalSupply().call().then((_supply) => {        
        setSupply(_supply);
      }).catch((err) => console.log(err))
      setWallet(address);    
      addWalletListener(); 
    }
    fetchData();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);          
        } else {
          setWallet("");          
        }
      });
    } else {
         
    }
  } 

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();    
    setWallet(walletResponse.address);
  };

  return (
    <div className="mint-container purple-text">
      <div className="mint-header text-center" id="mint">
        Mint
      </div>
      <div className="mint-panel">
        <div className="mint-title pt-4 pt-md-5">
          Mint Donkeys
        </div>
        <div className="mint-narration">
          Get you own crazy, funky, funny, dirty Donkey here. 
          They are here to make people laugh after the pandemic and have a fun time within the communtiy. 
          Our main goal is to find each of these Dirty Donkeys a owner where they will battle it out between who is the most dirty out of all of them.
        </div>
        <div className="collage">
          <img src="./images/ALL GIF.gif" alt="" width="150" height="150"/>
        </div>
        <div className="mint-price">
          Max per Tx 20<br />
          Only 0.03 Eth Each
        </div>
        <div className="text-center">
          <Button className="connect-btn mt-3" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? (                    
              "" +
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
              ) : (
                <span>Connect</span>
              )
            } 
          </Button>
        </div>
        <div className="mint-status text-center">
          {supply} / 9999 Sold Out 
        </div>
        <div className="text-center">
          <Button className="mint-btn mb-3 mb-md-5" onClick={handleShow}>
            Mint
          </Button>
        </div>
      </div>  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mint some Dirty Donkeys</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="./images/ALL GIF.gif" alt="" style={{maxWidth: "220px"}}/>
          <div className="mint-number">
            <button type="button" onClick={decreaseTokenNumber}><span aria-hidden="true">-</span></button>
            <Form>
              <Form.Label>
                { tokenNumber }
              </Form.Label>                  
              {status ? <div>{status}</div> 
                : <div></div>}
            </Form>                
            {(tokenNumber < 20) ? <button type="button" onClick={() => setTokenNumber(tokenNumber + 1)}><span aria-hidden="true">+</span></button> 
              : <button type="button" onClick={() => setTokenNumber(tokenNumber)}><span aria-hidden="true">+</span></button>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          {(!publicsale) ? <Button variant="primary" onClick={onMintHandle}>Mint</Button> 
            : <Button variant="primary" onClick={onMintPressed}>Mint</Button>
          }              
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>               
    </div>
  );  
};

export default Mint;