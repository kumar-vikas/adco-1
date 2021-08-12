import React, { Component } from 'react';
import pencilImg from "../images/pencil-big.png"
import printable from "../images/printable-icon.png";
import printIcon from "../images/printIcon-932.png";
import infoBtn from "../images/info-btn.png";
import { MyConsumer } from './context';

class PrintableComponent extends Component{
    constructor(props){
        super(props)
		this.actImg = null;

		this.state={
			printIms: [{"display":"1 Worksheet: the letter a", "path":"assets/Printables/a.pdf"},
						{"display":"2 Worksheet: the letter b", "path":"assets/Printables/b.pdf"},
						{"display":"3 Worksheet: the letter c", "path":"assets/Printables/c.pdf"},
						{"display":"4 Worksheet: the letter d", "path":"assets/Printables/d.pdf"}
					  ]
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
				this.actImg = a.getImg[cc].a5;
			  }
			  return <p className="activity-name">{a.activeTab}</p>
			}
		  }
		  </MyConsumer>    
	  }

    render(){
        return(
    	<div className="activity-base" style={{backgroundImage: "url("+this.actImg+")"}}>
  			{/* <img alt="" src={pencilImg} className="pencile-image"/> */}
			<div className="activity-base-inner">
				<div className="activity-head">
				<a className="btn-icon oragnge-btn info-btn">
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
					<div className="activity-folder-bg activity-2-wrap">
						<div className="activity-2" id="gameBG">
							<div className="activity-name-block type5">
								<p className="activity-name medium">Printables</p>
							</div>
							
							<div className="print-frame-inner">

								{
									this.state.printIms.map((nam)=>(
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