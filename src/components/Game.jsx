import React, { Component } from 'react';
import infoBtn from "../images/info-btn.png";
import game129 from "../images/game129.png";
import { MyConsumer } from './context';
import info143 from "../images/info-i143.png";
import customContext from "./customContext";

import MatchingGameCA from './Games/CursiveA/MatchingGame';
import MatchingGameCB from './Games/CursiveB/MatchingGame';
import MatchingGameCC from './Games/CursiveC/MatchingGame';
import MatchingGameCD from './Games/CursiveD/MatchingGame';

import MatchingGamePCA from './Games/PreCursiveA/MatchingGame';
import MatchingGamePCB from './Games/PreCursiveB/MatchingGame';
import MatchingGamePCC from './Games/PreCursiveC/MatchingGame';
import MatchingGamePCD from './Games/PreCursiveD/MatchingGame';


class Game extends Component{
    constructor(props){
        super(props);
		this.actImg = null;
		this.state = {
			help:"Play the game and match the letters!",
			infDiagVis:'none'
		}
		this.getQueryStr = window.location.search;
		this.tab="";
    }
	
	componentDidMount(){
		this.props.setVisibility(this.props.history);
	}

	componentWillReceiveProps(props, state){
		if(props.location.name != null){
			if(this.state.name != props.state.activeTab){
				props.updateActiveTab(this.state.name);
			}
		}
	}

	abc() {
		if(this.getQueryStr.indexOf("?") > -1){
			var tabName = this.tabname; 
			var cc = tabName;
			if(cc.includes("-")){
			  cc = cc.replace("-", "");
			}
			var cust = customContext();
			this.actImg = cust[cc].a5;
			
			let finalTabName = tabName.split("");
			finalTabName.splice(finalTabName.length-1, 0, " ");
			//console.log("TAB!!:  ", finalTabName.join(""),tabName);
			let fname = finalTabName.join("").replace("Pre", "Pre-");
			//console.log(fname);

			var cust = customContext();
			var r = document.documentElement;
			r.style.setProperty("--tabColors", cust[cc].tColor);
			r.style.setProperty("--tabOuter", cust[cc].tOuter);
			r.style.setProperty("--tabBorder", cust[cc].tBorder);
			return <p className="activity-name">{fname}</p>;
		}
		return <MyConsumer>
		  {
			(a) =>{
			  if(a.activeTab != null){
				var cc = a.activeTab.replace(" ", "");
				if(cc.includes("-")){
				  cc = cc.replace("-", "");
				}
				this.actImg = a.getImg[cc].a5;
			  }
			  return <p className="activity-name">{a.activeTab}</p>
			}
		  }
		  </MyConsumer>
	  }

	getGame(){
		console.log("GET GAME FOR: ", this.tab);
		switch(this.tab){
			case "PreCursiveA":
				return <MatchingGamePCA/>
			case "PreCursiveB":
				return <MatchingGamePCB/>
			case "PreCursiveC":
				return <MatchingGamePCC/>
			case "PreCursiveD":
				return <MatchingGamePCD/>
			case "CursiveA":
				return <MatchingGameCA/>
			case "CursiveB":
				return <MatchingGameCB/>
			case "CursiveC":
				return <MatchingGameCC/>
			case "CursiveD":
				return <MatchingGameCD/>
		}
	}

	getTabName(){
		console.log("TABNAMSSSSSSSSSSSSSS");
		var tname="";	
		if(this.getQueryStr.indexOf("?") > -1){
			const params = new URLSearchParams(window.location.search);
			this.tabname = params.get("tab");
			this.tab = this.tabname;
			console.log("TAB: ", this.tabname);
			return this.tabname;
		}
		try{
			tname = this.props.state.activeTab.replace("-", "").replace(" ","");
		}catch(err){
			console.log("ERROR:  ", err);
		}
		this.tab = tname;
		console.log(tname);
		return tname;
	}

	openDialog=()=>{
		this.vis = this.vis=="flex" ? "none" : "flex";
		this.setState({infDiagVis:this.vis})
	}
	
    render(){
			var gamePath = "assets/Game/"+this.getTabName()+"/index.html";
			console.log("TAB: ", this.tab);
			return(
    	<div className="activity-base" style={{backgroundImage: "url("+this.actImg+")"}}>
			<div className="activity-base-inner">
				<div className="activity-head">
				<a className="btn-icon oragnge-btn info-btn" onClick={this.openDialog}>
					<img alt="" src={infoBtn}/>
				</a>
				<div className="activity-Title">
					{this.abc()}
				</div>
				</div>
				<div className="gameIcon">
					<img width="110" src={game129} alt="" />
				</div>
				<div className="activity-folder">
				<div className="info-dialog" style={{display:this.state.infDiagVis}}>
					<div>
					<img src={info143} alt="" />
					</div>
					<div>
						{this.state.help}
					</div>
				</div>
					<div className="activity-folder-bg activity-2-wrap">
						<div className="activity-2" id="gameBG">
							<div className="activity-name-block type5">
								<p className="activity-name medium">Game</p>
							</div>							
							<div className="game-frame-inner">
								{/* <MatchingGameCA/> */}
								{console.log("SSSS: ", this.tabname, this.tabName)}
								{this.getGame(this.tabname)}
							</div>
							
						</div>
					</div>
				</div>
			</div>
  		</div>
        )
    }
}

export default Game;