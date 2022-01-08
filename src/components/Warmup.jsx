import React, { Component } from "react";
import animationImg from "../images/animation.png";
import infoBtn from "../images/info-btn.png";
import info143 from "../images/info-i143.png";
import { MyConsumer } from "./context";

class Warmup extends Component {
  constructor(props) {
    super(props);
    this.func = null;
    this.actImg = null;
    this.vidID=1;
    this.videos = ["Hand-Warm-Up.mp4",
                   "Head-Shoulders-Knees-and-Toes.mp4",
                   "Itsy-Bitsy-Spider.mp4",
                   "Lets-Write-That-Letter.mp4",
                   "Pencil-Grip-Video.mp4"
                  ];
    this.state = {
      src: this.props.src,
      visible: "flex",

      help: "Follow along with our warm up video to get ready to begin handwriting.",
      infDiagVis: "none",
    };
  }
  

  componentDidMount() {
    this.props.setVisibility(this.props.history);
		var vid = document.getElementById("vidPlayer");
		vid.addEventListener("canplaythrough", (e)=>{			
			vid.play();
      vid.addEventListener("ended", this.vidEndedHandler);
		})
  }

  playNextVideo = ()=>{
    if(this.vidID < this.videos.length){
      this.vidID++;
    }
    
    if(this.vidID == this.videos.length){
      document.getElementById("next").classList.add("inactive");
    }
    document.getElementById("prev").classList.remove("inactive");
    this.playVideo(1);
  }
  playPrevVideo = ()=>{
    if(this.vidID > 1){
      this.vidID--;
    }
    if(this.vidID == 1){
      document.getElementById("prev").classList.add("inactive");
    }
    document.getElementById("next").classList.remove("inactive");
    this.playVideo(1);
  }

  playVideo = (_id) => {
    this.setState({ visible: "flex" });
    /* let videe = this.videoRef.current;
        alert(videe); */
    var tab = document.getElementsByClassName("next-pre-wrap")[0];
    var src = "";
    if (_id == 0) {
      tab.classList.add("invisible");
      src = "assets/songs/song_1.mp4";
    } else {
      tab.classList.remove("invisible");
      src = "assets/videos/" + this.videos[this.vidID-1];      
    }
    this.vid = document.getElementById("vidPlayer");
    this.vid.src = src;
    this.vid.load();
    this.vid.addEventListener("canplaythrough", this.canplaythroughHandler);
    //this.vid.play();
  };
  canplaythroughHandler = function(e){
    const vid = e.currentTarget;
    vid.removeEventListener("canplaythrough", this.canplaythroughHandler);
    //vid.play();
    vid.addEventListener("ended", this.vidEndedHandler);
  }

  vidEndedHandler = (e)=>{    
    console.log(this.vidID, "ended..");
    e.currentTarget.removeEventListener("ended", this.vidEndedHandler);
    this.vidID = (this.vidID == this.videos.length-1)?0: this.vidID+1;
    this.playVideo(1);
  }

  closeVideo = () => {
    this.setState({ visible: "none" });
    this.vid.pause();
    console.log("close video");
  };

  openDialog = () => {
    this.vis = this.vis == "flex" ? "none" : "flex";
    this.setState({ infDiagVis: this.vis });
  };

  getTColor() {
    return (
      <MyConsumer>
        {(a) => {
          if (a.activeTab != null) {
            let cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }

            var r = document.documentElement;
            r.style.setProperty("--tabColors", a.getImg[cc].tColor);
          }
        }}
      </MyConsumer>
    );
  }
	

  abc() {
    return (
      <MyConsumer>
        {(a) => {
          this.func = a.func;
          if (a.activeTab != null) {
            var cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }
            this.actImg = a.getImg[cc].a6;
          }
          return <p className="activity-name">{a.activeTab}</p>;
        }}
      </MyConsumer>
    );
  }

  render() {
    return (
      <div className="activity-base" style={{ backgroundImage: "url(" + this.actImg + ")" }}>
        <div className="activity-base-inner">
          <div className="activity-head">
            <a className="btn-icon oragnge-btn info-btn" onClick={this.openDialog}>
              <img alt="" src={infoBtn} />
            </a>
            <div className="activity-Title">{this.abc()}</div>            
          </div>
          <div className="activity-folder">
            <div className="info-dialog" style={{ display: this.state.infDiagVis }}>
              <div>
                <img src={info143} alt="" />
              </div>
              <div>{this.state.help}</div>
            </div>

            <div className="activity-folder-bg activity-2-wrap">
              <div className="activity-2">
                <div className="activity-name-block type3">
                  <p className="activity-name medium">Warm-Up</p>
                </div>
                <div className="activity-icon-wrap" onClick={() => this.playVideo(0)}>
                  <div className="activity-icon-block">
                    <img alt="" src={animationImg} />
                  </div>
                  <div className="activity-name-block type4">
                    <p className="activity-name small">Song</p>
                  </div>
                </div>
                <div className="video-frame">
                  <div className="video-frame-inner">
                    <div style={{ display: this.state.visible }} className="vidCont">
                      <video controls id="vidPlayer" ref={this.videoRef} 
												src="assets/songs/song_1.mp4">
											</video>
                    </div>
                  </div>
                </div>
                <div className="activity-icon-wrap" onClick={() => this.playVideo(1)}>
                  <div className="activity-icon-block">
                    <img alt="" src={animationImg} />
                  </div>
                  <div className="activity-name-block type4">
                    <p className="activity-name small">5 videos</p>
                  </div>
                </div>
                <div className="next-pre-wrap invisible">
                  <button id="prev" className="vid-nav inactive" onClick={this.playPrevVideo}></button>
                  <div>{this.vidID}</div>
                  <button id="next" className="vid-nav" onClick={this.playNextVideo}></button>
                </div>
                {this.getTColor()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Warmup;
