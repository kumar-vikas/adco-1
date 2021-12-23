import React, { Component } from 'react';
import pencilImg from "../images/pencil-big.png"
import printable from "../images/printable-icon.png";
import printIcon from "../images/printIcon-932.png";
import infoBtn from "../images/info-btn.png";
import { MyConsumer } from './context';
import info143 from "../images/info-i143.png";
import customContext from "./customContext";

class Printable extends Component{
		
    constructor(props){
        super(props)
		this.actImg = null;
		this.viaURL=false;
		//this.tabName = this.tabName.replace("-", "");
		this.getQueryStr = window.location.search;
		if(this.getQueryStr.indexOf("?") > -1){
			const params = new URLSearchParams(window.location.search);
			this.tabname = params.get("tab");
			this.viaURL=true;
		}else{
			this.tabname = props.location.tab.replace(" ","").replace("-","");
		}
		this.state={
			help:"Download and print a series of worksheets and printables for more handwriting resources.",
      		infDiagVis:'none',

			printIms: {
									"PreCursiveA":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Pre-Cursive A Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Pre-Cursive-A.pdf"},
										{"display":"Pre-Cursive A Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Pre-Cursive-A.pdf"}
					  			],
									"PreCursiveB":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Pre-Cursive B Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Pre-Cursive-B.pdf"},
										{"display":"Pre-Cursive B Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Pre-Cursive-B.pdf"}
					  			],
									"PreCursiveC":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Pre-Cursive C Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Pre-Cursive-C.pdf"},
										{"display":"Pre-Cursive C Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Pre-Cursive-C.pdf"}
					  			],
									"PreCursiveD":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Pre-Cursive D Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Pre-Cursive-D.pdf"},
										{"display":"Pre-Cursive D Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Pre-Cursive-D.pdf"}
					  			],
									"CursiveA":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Cursive A Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Cursive-A.pdf"},
										{"display":"Cursive A Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Cursive-A.pdf"}
					  			],
									"CursiveB":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Cursive B Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Cursive-B.pdf"},
										{"display":"Cursive B Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Cursive-B.pdf"}
					  			],
									"CursiveC":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Cursive C Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Cursive-C.pdf"},
										{"display":"Cursive C Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Cursive-C.pdf"}
					  			],
									"CursiveD":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Cursive D Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Cursive-D.pdf"},
										{"display":"Cursive D Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Cursive-D.pdf"}
					  			],
									"CursiveE":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Cursive E Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Cursive-E.pdf"},
										{"display":"Cursive E Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Cursive-E.pdf"}
					  			],
									"CursiveF":[
										{"display":"Handwriting Song Lyrics", "path":"assets/Printables/TheEdcoHandwritingSong.pdf"},
										{"display":"Handwriting Policy", "path":"assets/Printables/HandwritingPolicy.pdf"},
										{"display":"Cursive F Pace of Progress", "path":"assets/Printables/Pace-of-Progress-Cursive-F.pdf"},
										{"display":"Cursive F Teacher Assessment", "path":"assets/Printables/TeacherAssessment-Cursive-F.pdf"}
					  			],
							}

		}
		
    }

	componentDidMount(){
		this.props.setVisibility(this.props.history);
	}
	getTColor(){		
		if(this.getQueryStr.indexOf("?") > -1){
			var tabName = this.tabname;
			var cc = tabName;
			if(cc.includes("-")){
			  cc = cc.replace("-", "");
			}
			var cust = customContext();
			var r = document.documentElement;
			r.style.setProperty("--tabColors", cust[cc].tColor);
			r.style.setProperty("--tabOuter", cust[cc].tOuter);
			r.style.setProperty("--tabBorder", cust[cc].tBorder);
		}

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
            			r.style.setProperty("--tabOuter", a.getImg[cc].tOuter);
            			r.style.setProperty("--tabBorder", a.getImg[cc].tBorder);
            
					}
					
				}
			}
		</MyConsumer>
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
			return <p className="activity-name">{fname}</p>;
		}
		return <MyConsumer>
		  {
			(a) =>{
				console.log("AAAA: ", a.activeTab);
			  if(a.activeTab != null){
				var cc = a.activeTab.replace(" ", "");
				if(cc.includes("-")){
				  cc = cc.replace("-", "");
				}
				this.tabname = cc;
				this.actImg = a.getImg[cc].a5;
			  }
			  console.log("TAB: ", this.tabname);
			  console.log("A: ", a.activeTab);
				return <p className="activity-name">{a.activeTab}</p>
			}
		  }
		  </MyConsumer>    
	  }

	  openDialog=()=>{
		this.vis = this.vis=="flex" ? "none" : "flex";
		this.setState({infDiagVis:this.vis})
	}

    render(){
		//if(!this.viaURL && )
		console.log(this.props);
		return(
    	<div className="activity-base" style={{backgroundImage: "url("+this.actImg+")"}}>
  			{/* <img alt="" src={pencilImg} className="pencile-image"/> */}
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
					<img width="110" src={printable} alt="" />
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
								<p className="activity-name medium">Printables</p>
							</div>
							<div className="print-frame-inner">
								{
									this.state.printIms[this.tabname].map((nam)=>(
										<div className="printablesBtn">
											<a href={nam.path} target="_blank">
											<div className="print-inner">{nam.display}</div>
											<img width="60" src={printIcon} alt="" />
											</a>
										</div>
									))
								}
								<div></div>
							</div>
							
						</div>
					</div>
				</div>
				{this.getTColor()}
			</div>
  </div>
        )
    }
}

export default Printable;