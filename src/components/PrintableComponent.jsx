import React, { Component } from 'react';
import pencilImg from "../images/pencil-big.png"
import printable from "../images/printable-icon.png";
import printIcon from "../images/printIcon-932.png";
import infoBtn from "../images/info-btn.png";
import { MyConsumer } from './context';
import info143 from "../images/info-i143.png";

class PrintableComponent extends Component{
		
    constructor(props){
        super(props)
		this.actImg = null;
		this.tabName = props.location.tab.replace(" ","");
		this.tabName = this.tabName.replace("-", "");
		this.state={
			help:"Download and print a series of worksheets and printables for more handwriting resources.",
      		infDiagVis:'none',

			printIms: {
									"PreCursiveA":[
										{"display":"1 Worksheet: Pre Cursive A", "path":"assets/Printables/TeacherAssessment-CursiveA.pdf"}
					  			],
									"PreCursiveB":[
										{"display":"1 Worksheet: Pre Cursive B", "path":"assets/Printables/TeacherAssessment-CursiveB.pdf"}
					  			],
									"PreCursiveC":[
										{"display":"1 Worksheet: Pre Cursive C", "path":"assets/Printables/TeacherAssessment-CursiveC.pdf"}
					  			],
									"PreCursiveD":[
										{"display":"1 Worksheet: Pre Cursive D", "path":"assets/Printables/TeacherAssessment-CursiveD.pdf"}
					  			],
									"CursiveA":[
										{"display":"1 Worksheet: Cursive A", "path":"assets/Printables/TeacherAssessment-CursiveA.pdf"}
					  			],
									"CursiveB":[
										{"display":"1 Worksheet: Cursive B", "path":"assets/Printables/TeacherAssessment-CursiveB.pdf"}
					  			],
									"CursiveC":[
										{"display":"1 Worksheet: Cursive C", "path":"assets/Printables/TeacherAssessment-CursiveC.pdf"}
					  			],
									"CursiveD":[
										{"display":"1 Worksheet: Cursive D", "path":"assets/Printables/TeacherAssessment-CursiveD.pdf"}
					  			],
									"CursiveE":[
										{"display":"1 Worksheet: Cursive E", "path":"assets/Printables/TeacherAssessment-CursiveE.pdf"}
					  			],
									"CursiveF":[
										{"display":"1 Worksheet: Cursive F", "path":"assets/Printables/TeacherAssessment-CursiveF.pdf"}
					  			],
							}
		}
    }

	componentDidMount(){
		this.props.setVisibility(this.props.history);
	}

	abc() {
		return <MyConsumer>
		  {
			(a) =>{
			  if(a.activeTab != null){
				var cc = a.activeTab.replace(" ", "");
				if(cc.includes("-")){
				  cc = cc.replace("-", "");
				}
				this.tabName = cc;
				this.actImg = a.getImg[cc].a5;
			  }
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
									this.state.printIms[this.tabName].map((nam)=>(
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
			</div>
  </div>
        )
    }
}

export default PrintableComponent;