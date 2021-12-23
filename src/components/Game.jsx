import React, { Component } from 'react';
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";
import game129 from "../images/game129.png";
import { NavLink } from 'react-router-dom';
import { MyConsumer } from './context';
import info143 from "../images/info-i143.png";
import customContext from "./customContext";

class Game extends Component{
    constructor(props){
        super(props);
		this.actImg = null;
		this.state = {
			help:"Play the game and match the letters!",
			infDiagVis:'none'
		}
		this.getQueryStr = window.location.search;
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
		
	getTabName(){
		var tname="";	
		if(this.getQueryStr.indexOf("?") > -1){
			const params = new URLSearchParams(window.location.search);
			this.tabname = params.get("tab");
			console.log("TAB: ", this.tabname);
			return this.tabname;
		}
		try{
			tname = this.props.state.activeTab.replace("-", "").replace(" ","");
		}catch(err){
			console.log("ERROR:  ", err);
		}
		console.log(tname);
		return tname;
	}

	openDialog=()=>{
		this.vis = this.vis=="flex" ? "none" : "flex";
		this.setState({infDiagVis:this.vis})
	}
	
    render(){
			var gamePath = "assets/Game/"+this.getTabName()+"/index.html";
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
								<iframe className="gameIfrm" src={gamePath} frameborder="0"></iframe>
								{/* <button onClick={()=>this.closeVideo()} id="closeBtn">&#10008;</button> */}
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