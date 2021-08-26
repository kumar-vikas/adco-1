import { useState, useEffect } from 'react';
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import curUpper from "../images/upper.png";
import curLower from "../images/lower.png";
import preCurLower from "../images/pre-cur-lower.png";
import preCurUpper from "../images/pre-cur-upper.png";
import { NavLink } from 'react-router-dom';
import { MyConsumer } from './context';
import info143 from "../images/info-i143.png";

function UpperLowerScreen(props){
	const [state, setStateHelp] = useState({help:"Choose your level to start practicing!",
    infDiagVis:"none"
  });
	var actImg = null;
	var func = null;
	
	useEffect(()=>{
		props.setVisibility(props.history);
		document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url("+actImg+")";		
	}, [])

	function getTColor(){
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

	function abc(){
		
		return <MyConsumer>
		  {
		  (a) => {
				
				func = a.func;
				if(a.activeTab != null){
					
					var cc = a.activeTab.replace(" ", "");
					if(cc.includes("-")){
						cc = cc.replace("-", "");
					}
					actImg = a.getImg[cc].a3;
				}
			  return <p className="activity-name">{a.activeTab}</p>
		  }
		}
		</MyConsumer>
	  }
		function getBtnType(type){
			if(type == "upper"){
			return <MyConsumer>
		  {
				(a) => {
					if(a.activeTab != null){
						var cc = a.activeTab.replace(" ", "");
						if(cc.startsWith("Pre")){							
							return <img src={preCurUpper} alt=""></img>;
						}else{
							return <img src={curUpper} alt=""></img>;
						}
					}
				}				
			}			
			</MyConsumer>			
			}else{
			return <MyConsumer>
		  {
				(a) => {
					if(a.activeTab != null){
						var cc = a.activeTab.replace(" ", "");
						if(cc.startsWith("Pre")){
							return <img src={preCurLower} alt=""></img>;
						}else{
							return <img src={curLower} alt=""></img>;
						}
					}
				}				
			}	
			</MyConsumer>
			}
			
		}


	  function openDialog(){
		var vis = state.infDiagVis=="flex" ? "none" : "flex";    
		setStateHelp({...state, infDiagVis:vis})
	}

    return(
        <div className="activity-base">
  	<div className="dailoug-block-img">
	 	<img alt="" src="assets/images/dialog-1.png"/>
	</div>
  	<div className="activity-base-inner">
  		<div className="activity-head">
		  <a className="btn-icon oragnge-btn info-btn" onClick={openDialog}>
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div className="activity-Title">
			  {abc()}
		  </div>
		</div>

		<div className="info-dialog" style={{display:state.infDiagVis}}>
			<div>
				<img src={info143} alt="" />
			</div>
			<div>
				{state.help}
			</div>
		</div>

		<div className="letterFormText">Letter Formation</div>
		<div id="letterCont">
			<div className="upperLowerCont">
				<NavLink to={{pathname:"/LetterFormation", case:"lower"}}>
					<div>{getBtnType("lower")} Lower Case</div>
				</NavLink>
				<NavLink to={{pathname:"/LetterFormation", case:"upper"}}>
					<div>{getBtnType("upper")} Upper Case</div>
				</NavLink>
			</div>
			
		</div>
		{getTColor()}
  	</div>
  </div>
    )
}

export default UpperLowerScreen;