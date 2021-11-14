import { useState, useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import vidIcon538 from "../images/vidIcon-538.png";
import pat1 from "../images/pat-1-bg.png";
import pat2 from "../images/pat-2-bg.png";
import pat3 from "../images/pat-3-bg.png";
import pat4 from "../images/pat-4-bg.png";
import pat5 from "../images/pat-5-bg.png";
import info143 from "../images/info-i143.png";
import { MyConsumer } from "./context";
import customContext from "./customContext";

function PreWritingPractice(props) {
  const [state, setStateHelp] = useState({help:"Watch the pattern video and then try it for yourself.",
    infDiagVis:"none"
  });
  var actImg = null;
  var tabName="";
  const [pattern, speed] = props.location.path ? props.location.path.split("$") : ["pat-1", ""];
  const bgimgs = [pat1, pat2, pat3, pat4, pat5];
  var bgimg = bgimgs[parseInt(pattern.split("-")[1]) - 1];
  console.log(bgimg);
  var obj = {
    "PreCursive-1$slow": "assets/Pre-Writing/preCursive/Bubble_page 4_slow.mp4",
    "PreCursive-1$fast": "assets/Pre-Writing/preCursive/Bubble_page 4_normal.mp4",
    "PreCursive-2$slow": "assets/Pre-Writing/preCursive/Chimney_page 6_slow.mp4",
    "PreCursive-2$fast": "assets/Pre-Writing/preCursive/Chimney_page 6_normal.mp4",
    "PreCursive-3$slow": "assets/Pre-Writing/preCursive/Bee_slow.mp4",
    "PreCursive-3$fast": "assets/Pre-Writing/preCursive/Bee_Normal.mp4",
    "PreCursive-4$slow": "assets/Pre-Writing/preCursive/Snail page_12 slow.mp4",
    "PreCursive-4$fast": "assets/Pre-Writing/preCursive/Snail page_12_normal.mp4",
    "PreCursive-5$slow": "assets/Pre-Writing/preCursive/Butterfly_slow.mp4",
    "PreCursive-5$fast": "assets/Pre-Writing/preCursive/Butterfly_normal.mp4",
    
    "Cursive-1$slow": "assets/Pre-Writing/preCursive/Bubble_page 4_slow.mp4",
    "Cursive-1$fast": "assets/Pre-Writing/preCursive/Bubble_page 4_normal.mp4",
    "Cursive-2$slow": "assets/Pre-Writing/preCursive/Chimney_page 6_slow.mp4",
    "Cursive-2$fast": "assets/Pre-Writing/preCursive/Chimney_page 6_normal.mp4",
    "Cursive-3$slow": "assets/Pre-Writing/preCursive/Bee_slow.mp4",
    "Cursive-3$fast": "assets/Pre-Writing/preCursive/Bee_Normal.mp4",
    "Cursive-4$slow": "assets/Pre-Writing/preCursive/Snail page_12 slow.mp4",
    "Cursive-4$fast": "assets/Pre-Writing/preCursive/Snail page_12_normal.mp4",
    "Cursive-5$slow": "assets/Pre-Writing/preCursive/Butterfly_slow.mp4",
    "Cursive-5$fast": "assets/Pre-Writing/preCursive/Butterfly_normal.mp4",
  };

  const getQueryStr = window.location.search;

  function openDialog(){
		var vis = state.infDiagVis=="flex" ? "none" : "flex";    
		setStateHelp({...state, infDiagVis:vis})
	}

  useEffect(() => {
    props.setVisibility(props.history);
    document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url("+actImg+")";
    if(getQueryStr.indexOf("?") > -1){
      const params = new URLSearchParams(window.location.search);
      tabName = params.get("tab");
      return;
    }
    tabName = props.state.activeTab;
  }, []);

  function fetchVideo(e) {
    var cc = e.target;

    if(getQueryStr.indexOf("?") > -1){

    }
    
    var tmp = tabName.replace("-","");
    tmp = tmp.split(" ")[0];
    console.log(tmp);
    var str = pattern.replace("pat", tmp);
    let cPath = str + "$" + cc.innerHTML.toLowerCase();
    var vid = document.getElementById("vidPlayer-pre");
    vid.src = obj[cPath];
    vid.oncanplay = function(){
      vid.play();
    }    
  }

  function abc() {
    if(getQueryStr.indexOf("?") > -1){
      const params = new URLSearchParams(window.location.search);
      var cc = params.get("tab");
      var tabName = cc;
      if(cc.includes("-")){
        cc = cc.replace("-", "");
      }
      var cust = customContext();
      actImg = cust[cc].a4;

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
            actImg = a.getImg[cc].a4;
            tabName = a.activeTab;
          }
          return <p className="activity-name">{a.activeTab}</p>
        }
      }
      </MyConsumer>    
  }

  return (
    <div className="activity-base" >
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn" onClick={openDialog}>
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-Title">
            {abc()}
            {/* <p className="activity-name">Pre-Cursive</p> */}
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

        <div className="bodyTxt">Pre-Writing</div>
        <div id="vidCont">
          <div>
            <button onClick={fetchVideo}>Slow</button>
            <span>
              <img src={vidIcon538} alt="" />
            </span>
            <button onClick={fetchVideo}>Fast</button>
          </div>
          <video autoPlay loop controls id="vidPlayer-pre" src={obj[pattern + "$" + speed]}></video>
        </div>

        <MemoTest
          canprops={{
            width: "1070",
            height: "280",
            marginLeft: 100,
            marginTop: 25,
            backColor: "#fff",
          }} bgImg={bgimg}
          className="drawingTool"
        />
      </div>
    </div>
  );
}

export default PreWritingPractice;
