import React , {useState} from 'react';

import Icon from "./components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card , CardBody , Container , Button ,Col ,Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'; // inside node-module

import './App.css';

const itemArray = new Array(9).fill("empty");


const App = () => {

  const [isCross , setIsCross] = useState(false);
  const [winMessage , setWinMessage] = useState("");
  const [tieMessage , setTieMessage] = useState("");



  const reloadGame = () => {
    setIsCross(false); // setting it to default
    setWinMessage("");
    itemArray.fill("empty",0,9);
  };


  
  //match draw
  const isTie = () => {

    if(itemArray[0] !== "empty" && 
        itemArray[1] !== "empty" && 
        itemArray[2] !== "empty" && 
        itemArray[3] !== "empty" && 
        itemArray[4] !== "empty" && 
        itemArray[5] !== "empty" && 
        itemArray[6] !== "empty" && 
        itemArray[7] !== "empty" && 
        itemArray[8] !== "empty"){
          setTieMessage("Its a Tie");
        }
  }


  const checkIsWinner = () => {
    if(itemArray[0]=== itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty")
    {
      setWinMessage(`${itemArray[0]} WON`)
    } 
    else if (itemArray[3]=== itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !== "empty")
    {
      setWinMessage(`${itemArray[3]} WON`)
    }
    else if(itemArray[6]=== itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6] !== "empty")
    {
      setWinMessage(`${itemArray[6]} WON`)
    }
    else if(itemArray[0]=== itemArray[3] && itemArray[3] === itemArray[6] && itemArray[0] !== "empty")
    {
      setWinMessage(`${itemArray[0]} WON`)
    }
    else if(itemArray[1]=== itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1] !== "empty")
    {
      setWinMessage(`${itemArray[1]} WON`)
    }
    else if(itemArray[2]=== itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2] !== "empty")
    {
      setWinMessage(`${itemArray[2]} WON`)
    }
    else if(itemArray[0]=== itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0] !== "empty")
    {
      setWinMessage(`${itemArray[0]} WON`)
    }
    else if(itemArray[2]=== itemArray[4] && itemArray[4] === itemArray[6] && itemArray[2] !== "empty")
    {
      setWinMessage(`${itemArray[2]} WON`)
    }
  };

  
  //this method verifies that the icon should change or not
  const changeItem = itemNumber => {
    if(winMessage){
      //toast take 2 parameters 1st is message and 2nd is where/ what type of toast
      return toast(winMessage , {type:"info"});
    }

    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }else{
      return toast("already filled" , {type:"error"});
    }

    //to be checked after every move
    checkIsWinner();
    isTie();
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-white text-uppercase text-center">
                {winMessage}
              </h1>
              <Button 
                color="info"
                block
                onClick={reloadGame}
               >
                 Relaod the game 
              </Button>
            </div>
          ): (tieMessage ? (
            <div className="mb-2 mt-2">
            <h1 className="text-white text-uppercase text-center">
              {tieMessage}
            </h1>
            <Button 
              color="info"
              block
              onClick={reloadGame}
             >
               Relaod the game 
            </Button>
          </div>
          ): (
            <h1 className="text-center text-white">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          ))}
          <br></br>
          <br></br>
          <br></br>
          <div className="grid">
            {itemArray.map((item , index) => (
              <Card color="info" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
