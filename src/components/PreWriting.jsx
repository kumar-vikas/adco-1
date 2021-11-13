import React, { Component } from "react";
import animationImg from "../images/animation.png";
import infoBtn from "../images/info-btn.png";
import circleIcon1 from "../images/circle-1.png";
import circleIcon2 from "../images/circle-2.png";
import circleIcon3 from "../images/circle-3.png";
import circleIcon4 from "../images/circle-4.png";
import circleIcon5 from "../images/circle-5.png";
import activityImg from "../images/activity.png";
import { NavLink } from "react-router-dom";
import { MyConsumer } from "./context";
import info143 from "../images/info-i143.png";
import customContext from "./customContext";

class PreWriting extends Component {
  constructor(props) {
    super(props);
    this.actImg = null;

    this.state = {
      help:"You can watch either slow or fast versions of each pattern video. Don’t forget to practice!",
      infDiagVis:'none'
    }

    this.getQueryStr = window.location.search;
  }

  componentDidMount() {
    this.props.setVisibility(this.props.history);
  }

  openDialog=()=>{
		this.vis = this.vis=="flex" ? "none" : "flex";
		this.setState({infDiagVis:this.vis})
	}

  abc() {
    if(this.getQueryStr.indexOf("?") > -1){
      const params = new URLSearchParams(window.location.search);
      var cc = params.get("tab");
      var tabName = cc;
      if(cc.includes("-")){
        cc = cc.replace("-", "");
      }
      var cust = customContext();
      this.actImg = cust[cc].a4;

      let finalTabName = tabName.split("");
      var ff = finalTabName.splice(finalTabName.length-1, 0, " ")
      
      return <p className="activity-name">{finalTabName.join("")}</p>;
    }

    return <MyConsumer>
      {
        (a) =>{
          if(a.activeTab != null){
            var cc = a.activeTab.replace(" ", "");
            if(cc.includes("-")){
              cc = cc.replace("-", "");
            }
            this.actImg = a.getImg[cc].a2;
          }
          return <p className="activity-name">{a.activeTab}</p>
        }
      }
      </MyConsumer>    
  }

  render() {
    return (
      <div className="activity-base" style={{backgroundImage: "url("+this.actImg+")"}}>
        <div className="activity-base-inner">
          <div className="activity-head">
            <a className="btn-icon oragnge-btn info-btn" onClick={this.openDialog}>
              <img alt="" src={infoBtn} />
            </a>
            <div className="activity-Title">{this.abc()}</div>
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
            <div className="activity-folder-bg activity-3-wrap">
              <div className="activity-3">
                <div className="activity-name-block type3">
                  <p className="activity-name medium">Pre-Writing</p>
                </div>
                <div className="act-3-bubble">
                  <div className="activity-name-block type2">
                    <p className="activity-name medium">Pattern 1</p>
                  </div>
                  <div className="activity-bubble circle text">
                    <div className="">
                      <img alt="" src={circleIcon1} />
                    </div>
                  </div>

                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-1$slow" }}>
                    <div className="activity-name-block type4 first">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Slow</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to={{
                      pathname: "/PreWritingPractice",
                      path: "PreCursive-1$slow",
                    }}
                  >
                    <div className="activity-name-block type4 second">
                      <div className="activity-small-icon">
                        <img alt="" src={activityImg} />
                      </div>
                      <p className="activity-name small">Practice</p>
                    </div>
                  </NavLink>

                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-1$fast" }}>
                    <div className="activity-name-block type4 third">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Fast</p>
                    </div>
                  </NavLink>
                </div>
                <div className="act-3-bubble">
                  <div className="activity-name-block type2">
                    <p className="activity-name medium">Pattern 2</p>
                  </div>
                  <div className="activity-bubble circle text">
                    <div className="">
                      <img alt="" src={circleIcon2} />
                    </div>
                  </div>

                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-2$slow" }}>
                    <div className="activity-name-block type4 first">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Slow</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to={{
                      pathname: "/PreWritingPractice",
                      path: "PreCursive-2$slow",
                    }}
                  >
                    <div className="activity-name-block type4 second">
                      <div className="activity-small-icon">
                        <img alt="" src={activityImg} />
                      </div>
                      <p className="activity-name small">Practice</p>
                    </div>
                  </NavLink>

                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-2$fast" }}>
                    <div className="activity-name-block type4 third">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Fast</p>
                    </div>
                  </NavLink>
                </div>

                <div className="act-3-bubble">
                  <div className="activity-name-block type2">
                    <p className="activity-name medium">Pattern 3</p>
                  </div>
                  <div className="activity-bubble circle text">
                    <div className="">
                      <img alt="" src={circleIcon3} />
                    </div>
                  </div>
                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-3$slow" }}>
                    <div className="activity-name-block type4 first">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Slow</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to={{
                      pathname: "/PreWritingPractice",
                      path: "PreCursive-3$slow",
                    }}
                  >
                    <div className="activity-name-block type4 second">
                      <div className="activity-small-icon">
                        <img alt="" src={activityImg} />
                      </div>
                      <p className="activity-name small">Practice</p>
                    </div>
                  </NavLink>
                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-3$fast" }}>
                    <div className="activity-name-block type4 third">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Fast</p>
                    </div>
                  </NavLink>
                </div>
                <div className="act-3-bubble">
                  <div className="activity-name-block type2">
                    <p className="activity-name medium">Pattern 4</p>
                  </div>
                  <div className="activity-bubble circle text">
                    <div className="">
                      <img alt="" src={circleIcon4} />
                    </div>
                  </div>
                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-4$slow" }}>
                    <div className="activity-name-block type4 first">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Slow</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to={{
                      pathname: "/PreWritingPractice",
                      path: "PreCursive-4$slow",
                    }}
                  >
                    <div className="activity-name-block type4 second">
                      <div className="activity-small-icon">
                        <img alt="" src={activityImg} />
                      </div>
                      <p className="activity-name small">Practice</p>
                    </div>
                  </NavLink>
                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-4$fast" }}>
                    <div className="activity-name-block type4 third">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Fast</p>
                    </div>
                  </NavLink>
                </div>
                <div className="act-3-bubble">
                  <div className="activity-name-block type2">
                    <p className="activity-name medium">Pattern 5</p>
                  </div>
                  <div className="activity-bubble circle text">
                    <div className="">
                      <img alt="" src={circleIcon5} />
                    </div>
                  </div>
                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-5$slow" }}>
                    <div className="activity-name-block type4 first">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Slow</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to={{
                      pathname: "/PreWritingPractice",
                      path: "PreCursive-5$slow",
                    }}
                  >
                    <div className="activity-name-block type4 second">
                      <div className="activity-small-icon">
                        <img alt="" src={activityImg} />
                      </div>
                      <p className="activity-name small">Practice</p>
                    </div>
                  </NavLink>
                  <NavLink to={{ pathname: "/PreWritingPractice", path: "PreCursive-5$fast" }}>
                    <div className="activity-name-block type4 third">
                      <div className="activity-small-icon">
                        <img alt="" src={animationImg} />
                      </div>
                      <p className="activity-name small">Fast</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreWriting;
