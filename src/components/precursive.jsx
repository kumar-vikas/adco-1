import React, { Component } from 'react';
import "./activity.css";
import "./theme.css";
import act1 from "../images/act-1.png";
import act2 from "../images/act-2.png";
import infoBtn from "../images/info-btn.png";
import gameImg from "../images/games.png";
import printImg from "../images/print-btn.png";
import { NavLink } from 'react-router-dom';
import info143 from "../images/info-i143.png";
import { MyConsumer } from './context';

class Precursive extends Component{

    constructor(props){
        super(props);
		this.func = null;
		this.actImg = null;
		this.nextLink = "/LetterFormation";
		this.disAr= []

		this.currentTabName = null;
		this.disabledArr = [];
        //this.videoRef = React.createRef();
        this.state = {
            src:this.props.src,
			name:this.props.location.name,

			help:"If you need help. Click on the information button.",
			infDiagVis:'none'
        }
    }
    
	componentDidMount(){
		this.props.setVisibility(this.props.history);
		
		if(this.state.name) this.func(this.state.name);
	}

	getTColor(){
		return <MyConsumer>
			{
				(a) => {
					if(a.activeTab != null){
						let cc = a.activeTab.replace(" ", "");
						if(cc.includes("-")){
							cc = cc.replace("-", "");
						}

						var r = document.documentElement;
						r.style.setProperty("--tabColors", a.getImg[cc].tColor);
					}
					
				}
			}
		</MyConsumer>
	}

	componentWillReceiveProps(props, state){
		if(props.location.name != null){
			if(this.state.name != props.state.activeTab){
				props.updateActiveTab(this.state.name);
			}
		}
	}

	openDialog=()=>{
		this.vis = this.vis=="flex" ? "none" : "flex";
		this.setState({infDiagVis:this.vis})
	}

	abc(){
		return <MyConsumer>
		  {
		  (a) => {
				this.func = a.func;
				
				if(a.activeTab != null){
					this.currentTabName = a.activeTab;

					var cc = a.activeTab.replace(" ", "");
					if(cc.includes("-")){
						cc = cc.replace("-", "");
					}
					this.actImg = a.getImg[cc].a1;
					
					this.nextLink = "/LetterFormation"
					if(cc == "PreCursiveB" || cc == "CursiveB"){
						this.nextLink = "/UpperLowerScreen";
					}

					if(a.activeTab.startsWith("Pre")){
						this.disabledArr = a.data.nameList;
					}else{
						this.disabledArr = a.data.subList;
					}

					// disabling
					this.disAr = [];
					for(var i=0; i<this.disabledArr.length; i++){
						
						if(this.disabledArr[i].name == this.currentTabName){
							this.disArr = this.disabledArr[i].disabled;
							break;
						}
					}

					this.disArr.forEach(element => {
						if(document.getElementById(element)) document.getElementById(element).classList.add("disabled");
					})
				}
			  return <p className="activity-name">{a.activeTab}</p>
		  }
		}
		</MyConsumer>
	  }

    render() {
        return (

			<div className="activity-base" style={{backgroundImage: "url("+this.actImg+")"}}>
  	<div className="dailoug-block-img">
	 	<img alt="" src="assets/images/dialog-1.png"/>
	</div>
  	<div className="activity-base-inner">
  		<div className="activity-head">
		  <a className="btn-icon oragnge-btn info-btn" onClick={this.openDialog}>
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div className="activity-Title">
			  {this.abc()}
		  </div>
		  {/* <a href="#" className="btn-icon oragnge-btn play-btn">
		    <img alt="" src="assets/images/play-btn.png"/>
		  </a>
		  <a href="#" className="btn-icon red-btn home-btn">
		    <img alt="" src="assets/images/home-btn.png"/>
		  </a> */}
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
  			<div className="activity-folder-bg activity-1-wrap">
  				<div className="flex activity-1">
		  			<div className="activity-assets">						
						<div className="activity-assets-block">
						<NavLink to="PreWriting" id="preWriting">
							<div className="activity-bubble circle text">
							<div className="">
							<img alt="" src={act1}/>
							</div>
							</div>								
							<div className="activity-name-block type2">
							<p className="activity-name medium">Pre-Writing</p>
							</div>
						</NavLink>
						</div>
					</div>

					<div className="activity-assets-block top">
						<NavLink to="/Warmup" id="warmUp">
							<div className="activity-name-block type3">
							<p className="activity-name medium">Warm-Up</p>
							</div>
							<div className="activity-bubble circle text">
							<div className="">
							<p>Warm-up Video to follow!</p>
							</div>
							</div>
						</NavLink>
					</div>
					
					<div className="activity-assets">
					  
					<div className="activity-assets-block">
						<NavLink to={this.nextLink} id="letterFormation">
							<div className="activity-bubble circle text">
								<div className="">
								<img alt="" src={act2}/>
								</div>
							</div>
							<div className="activity-name-block type2">
								<p className="activity-name medium">Letter Formation</p>
							</div>
						</NavLink>
					</div>

					</div>
				</div>
				<div className="activity-footer">
					<NavLink to="/GameComponent" id="games">
					<div className="activity-icon-wrap">
				      <div className="activity-icon-block type2">
				         <img alt="" src={gameImg}/>
				      </div>
				      <div className="activity-name-block type2">
				        <p className="activity-name medium">Game</p>
				      </div>
				    </div>
					</NavLink>

					<NavLink to="/PrintableComponent">
				    <div className="activity-icon-wrap">
				      <div className="activity-icon-block type2">
				         <img alt="" src={printImg}/>
				      </div>
				      <div className="activity-name-block type2">
				        <p className="activity-name medium">Printables</p>
				      </div>
				    </div>
					</NavLink>
		  		{this.getTColor()}
				</div>
			</div>
  		</div>
  	</div>
  </div>
  );
    }

}

export default Precursive;