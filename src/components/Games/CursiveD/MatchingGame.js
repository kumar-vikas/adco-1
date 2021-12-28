import './MatchingGame.css';
import GetData from './data/GetData';
import Tile from './components/Tile';
import React, {useState, useEffect, useRef} from 'react';
import Overley from './components/Overlay';
import Cover from './components/Cover';

var correctCount = 0;
var clicks=0;
var clickedButtons=[];

function MatchingGame() {
  var Data = processData(GetData());
  const MAX_CLICKS = 2;
  
  const rightAudio = new Audio("./assets/audio/correct.mp3");
  const wrongAudio = new Audio("./assets/audio/incorrect.mp3");

  const [status, setStatus] = useState([...Data]);
  const [allDone, setAllDone] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [bgMusicOn, setBGMucisOn] = useState(true);
  
  useEffect(() => {
    var bgMusic = new Audio("./assets/audio/bgLoop.mp3");
    bgMusic.load(); 
    bgMusic.oncanplaythrough = function (){
      bgMusic.play();
    }
    return () =>{
      bgMusic.pause();
      bgMusic = null;
    }
  }, []);
  

  var tileFuncArr=[];
  var tileFuncs = {
    tileFunc1: useRef(),
    tileFunc2: useRef(),
    tileFunc3: useRef(),
    tileFunc4: useRef(),
    tileFunc5: useRef(),
    tileFunc6: useRef(),
    tileFunc7: useRef(),
    tileFunc8: useRef(),
    tileFunc9: useRef(),
    tileFunc10: useRef(),
    tileFunc11: useRef(),
    tileFunc12: useRef(),
    tileFunc13: useRef(),
    tileFunc14: useRef(),
    tileFunc15: useRef(),
    tileFunc16: useRef(),
  }
  
  tileFuncArr = [tileFuncs.tileFunc1, tileFuncs.tileFunc2, tileFuncs.tileFunc3, tileFuncs.tileFunc4,
                  tileFuncs.tileFunc5, tileFuncs.tileFunc6,  tileFuncs.tileFunc7, tileFuncs.tileFunc8,
                  tileFuncs.tileFunc9, tileFuncs.tileFunc10,  tileFuncs.tileFunc11, tileFuncs.tileFunc12,
                  tileFuncs.tileFunc13, tileFuncs.tileFunc14,  tileFuncs.tileFunc15, tileFuncs.tileFunc16,
                ];
  function processData(_data){
    _data.map((item, index)=>{        
        item.state = "normal";
        _data[item.match-1] = {id:(item.match), image:"a"+(index+1), match:(index+1), state: "normal"}
    });
    return _data;
  }
   useEffect(() => {
    if(!status.length){
      setStatus([...Data]);
    }
    //setIsActive(isActive);
  }, [status]);
  
  function tileClickHandler(elem){
    setIsActive(false);
    //console.log("clicks: ", clicks);    
    clickedButtons[clicks] = {id: elem.id, match: elem.getAttribute("data-match")};
    if(++clicks === MAX_CLICKS){
      clicks=0;      
      checkAnswer();
      return;
    }
    setTimeout(()=>{
      setIsActive(true);
    },400);
  }
  
  function checkAnswer(){
    let audio;
    let correct=true;
    if(clickedButtons[0].id === clickedButtons[1].match){
      audio = rightAudio;      
      Data[clickedButtons[0].id-1].state = "done";
      Data[clickedButtons[1].id-1].state = "done";
      correctCount++;
    }else{
      audio = wrongAudio;
      correct =false;
      Data[clickedButtons[0].id-1].state = "normal";
      Data[clickedButtons[1].id-1].state = "normal";
    }
    audio.setAttribute("data-correct", correct);
    audio.addEventListener("ended",onEnd);
    audio.play();
  }
  function resetGame(){
    setAllDone(false);
    Data = processData(GetData());
    correctCount=0;
    setStatus([...[]]);    
  }

  function resetGame2(){
    setAllDone(false);
    resetGame();
  }
  function resetAllDone(){
    setAllDone(false);
  }

  function onEnd(e){
    let correct = (e.currentTarget.getAttribute("data-correct") === 'true');
    //console.log("2222222set active....");
    setIsActive(true);
    tileFuncArr[clickedButtons[0].id-1].current(correct);
    tileFuncArr[clickedButtons[1].id-1].current(correct);
    //console.log(correctCount, Data.length);   
     if(correctCount === Data.length/2){
      setTimeout(()=>{
        setAllDone(true);
      }, 1000);      
    }
    
  }
  
  return (
    <div id="app-container" className="App">
      <div className="tile-wrap">
          {            
            status.map((item, index) => {
              return <Tile key={index} info={item} ref={tileFuncArr[index]} clickHandler={tileClickHandler}/>
            })
          }
      </div>
      {!isActive && <Cover/>}
      {allDone && <Overley reset={resetGame2} hide={resetAllDone}/>}
    </div>
  );
}

export default MatchingGame;
