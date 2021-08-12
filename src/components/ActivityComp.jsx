import React, {Component} from "react";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";

class ActivityComp extends Component{
    constructor(props){
        super(props);
        
		this.state = {
            src:this.props.src,
            visible:'none'
        }
    }

	playVideo = () => {
        this.setState({visible:"flex" })
        /* let videe = this.videoRef.current;
        alert(videe); */
				console.log("-------VID");
        this.vid = document.getElementById("vidPlayer");
        console.log(this.vid)
        this.vid.src = "assets/animations/supercity_1.mp4"
        this.vid.play();

        console.log(" video playing")
    }

	closeVideo = () =>{
		this.setState({visible:"none" })
		this.vid.pause();
		console.log("close video")
	}

    render(){
        return(
            <div class="activity-base">
  	<img alt="" src={pencilImg} class="pencile-image"/>
  	<div class="activity-base-inner">
  		<div class="activity-head">
		  <a class="btn-icon oragnge-btn info-btn">
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div class="activity-name-block">
		    <p class="activity-name">Pre-Cursive A</p>
		  </div>
		 {/*  <a href="#" class="btn-icon oragnge-btn play-btn">
		    <img alt="" src="assets/images/play-btn.png"/>
		  </a>
		  <a href="#" class="btn-icon red-btn home-btn">
		    <img alt="" src="assets/images/home-btn.png"/>
		  </a> */}
		</div>
  		<div class="activity-folder">
  			<div class="activity-folder-bg activity-2-wrap">
  				<div class="activity-2">
  					<div class="activity-name-block type3">
					 	<p class="activity-name medium">Activity</p>
					</div>
		  			
				    <div class="video-frame">
				    	<div class="video-frame-inner">
						<div /* style={{display: this.state.visible }} */ className="vidCont">
							<iframe frameBorder="0" id="iPlayer" src='assets/Activity/index.html'></iframe>
							{/* <button onClick={()=>this.closeVideo()} id="closeBtn">&#10008;</button> */}
						</div>
				    	</div>
				    </div>
				    
				</div>
		  	</div>
		</div>
  	</div>
  </div>
        )
    }

}

export default ActivityComp;