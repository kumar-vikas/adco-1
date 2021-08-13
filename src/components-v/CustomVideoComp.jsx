import React, {Component} from "react";

function CustomVideoComp(props){
    
    return(
        <div id="videocont">
            <div id="video-container">
                
                <video id="videotag" width="640" height="365">
                    <source src="video/pg62.mp4" type="video/mp4"/>
                </video>
                
                <div id="video-controls">
                    <button type="button" id="play-pause">Play</button>
                    <input type="range" id="seek-bar" value="0"/>
                    <button type="button" id="mute">Mute</button>
                    <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1"/>
                    <button type="button" id="full-screen">Full-Screen</button>
                </div>
            </div>
        </div>
    )
}

export default CustomVideoComp;