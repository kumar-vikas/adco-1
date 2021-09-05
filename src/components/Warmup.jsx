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
		})
  }

  playVideo = (_id) => {
    this.setState({ visible: "flex" });
    /* let videe = this.videoRef.current;
        alert(videe); */

    var src = "";
    if (_id == 0) {
      src = "assets/songs/song_1.mp4";
    } else {
      src = "";
    }

    this.vid = document.getElementById("vidPlayer");
    this.vid.src = src;
    //this.vid.play();
  };

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
	playDefaultVideo(){
		var vid = document.getElementById("vidPlayer");
		vid.removeEventListener("canPlayThrough", this.playDefaultVideo);
		vid.play();
		console.log(vid);
		//document.getElementById("vidPlayer").play();
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
                    <p className="activity-name small">Video</p>
                  </div>
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
