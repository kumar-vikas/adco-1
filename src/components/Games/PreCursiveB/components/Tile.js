import React, {useState } from "react";
import './Tile.css';
import getImage from './imageMapping';
import { forwardRef } from "react";

const Tile = forwardRef((props, ref) =>{
    var data = props.info;
    const [status, setStatus] = useState(data.state);
    ref.current = resetTile;

    function cardClickHandler(e){
       //console.log("click", data.state);
        data.state = "clicked";
        setStatus(data.state);
        //e.currentTarget.classList.add("clicked");
        props.clickHandler(e.currentTarget);
        //setTimeout(resetTile, 3000);
    }

    function resetTile(correct){
        data.state = correct?"done":"normal";
        setStatus(data.state);
    }
    if(status === "normal"){
        //console.log("its NORMAL..");
        return(
            <button id={data.id} data-match={data.match} className = "flip-card tile normal" onClick={cardClickHandler}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    </div>
                    <div className="flip-card-back">
                    <img className="card-image" src={getImage(data.image)} alt={data.image}/>    
                    </div>
                </div>
            </button>
        )
    } else if(status === "clicked"){
        //console.log("its clicked.....");
        return(
            <button id={data.id} data-match={data.match} className="flip-card tile clicked" onClick={cardClickHandler}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    </div>
                    <div className="flip-card-back">
                    <img className="card-image" src={getImage(data.image)} alt={data.image}/>    
                    </div>
                </div>
            </button>
        )
    }else if(status === "done"){
        //console.log("its done");
        return(
            <button id={data.id} data-match={data.match} className="flip-card tile clicked done" disabled onClick={cardClickHandler}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    </div>
                    <div className="flip-card-back">
                    <img className="card-image" src={getImage(data.image)} alt={data.image}/>    
                    </div>
                </div>
            </button> 
        )
    }
})
export default Tile;