import { useEffect } from 'react';
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import upperBtn from "../images/upper.png";
import lowerBtn from "../images/lower.png";
import { NavLink } from 'react-router-dom';
import { MyConsumer } from './context';

function UpperLowerScreen(props){
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

    return(
        <div className="activity-base">
  	<div className="dailoug-block-img">
	 	<img alt="" src="assets/images/dialog-1.png"/>
	</div>
  	<div className="activity-base-inner">
  		<div className="activity-head">
		  <a className="btn-icon oragnge-btn info-btn">
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div className="activity-Title">
			  {abc()}
		    {/* <p className="activity-name">Pre-Cursive</p> */}
		  </div>
		</div>

		<div className="letterFormText">Letter Formation</div>
		<div id="letterCont">
			<div className="upperLowerCont">
				<NavLink to={{pathname:"/LetterFormation", case:"lower"}}>
					<div><img src={lowerBtn} alt="" />Lower Case</div>
				</NavLink>
				<NavLink to={{pathname:"/LetterFormation", case:"upper"}}>
					<div><img src={upperBtn} alt="" />Upper Case</div>
				</NavLink>
			</div>
			
		</div>
		{getTColor()}
  	</div>
  </div>
    )
}

export default UpperLowerScreen;