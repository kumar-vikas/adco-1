import { useState, useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";
import wPage from "../images/w-page.png";
import vidIcon538 from "../images/vidIcon-538.png";
import info143 from "../images/info-i143.png";
import { MyConsumer } from "./context";
import customContext from "./customContext";

function LetterFormPractice(props) {
  const [state, setStateHelp] = useState({help:{g:"Watch the letter video and then try for yourself.",CursiveC:"Watch the join video and then try for yourself.",CursiveD:"Watch the join video and then try for yourself."},
    infDiagVis:"none"
  });
  var func = null;
  var actImg = null;
  var vidFold = "";
  var path = "";
  var cc = "";
  var tabName, casing, letter;
  var joiningTabs = ["CursiveC", "CursiveD", "CursiveE", "CursiveF"];
  var obj = {"Cursive-lower-a": "assets/LetterWriting/cursive-lower/a.mp4",
  "Cursive-lower-b": "assets/LetterWriting/cursive-lower/b.mp4",
  "Cursive-lower-c": "assets/LetterWriting/cursive-lower/c.mp4",
  "Cursive-lower-d": "assets/LetterWriting/cursive-lower/d.mp4",
  "Cursive-lower-e": "assets/LetterWriting/cursive-lower/e.mp4",
  "Cursive-lower-f": "assets/LetterWriting/cursive-lower/f.mp4",
  "Cursive-lower-g": "assets/LetterWriting/cursive-lower/g.mp4",
  "Cursive-lower-h": "assets/LetterWriting/cursive-lower/h.mp4",
  "Cursive-lower-i": "assets/LetterWriting/cursive-lower/i.mp4",
  "Cursive-lower-j": "assets/LetterWriting/cursive-lower/j.mp4",
  "Cursive-lower-k": "assets/LetterWriting/cursive-lower/k.mp4",
  "Cursive-lower-l": "assets/LetterWriting/cursive-lower/l.mp4",
  "Cursive-lower-m": "assets/LetterWriting/cursive-lower/m.mp4",
  "Cursive-lower-n": "assets/LetterWriting/cursive-lower/n.mp4",
  "Cursive-lower-o": "assets/LetterWriting/cursive-lower/o.mp4",
  "Cursive-lower-p": "assets/LetterWriting/cursive-lower/p.mp4",
  "Cursive-lower-q": "assets/LetterWriting/cursive-lower/q.mp4",
  "Cursive-lower-r": "assets/LetterWriting/cursive-lower/r.mp4",
  "Cursive-lower-s": "assets/LetterWriting/cursive-lower/s.mp4",
  "Cursive-lower-t": "assets/LetterWriting/cursive-lower/t.mp4",
  "Cursive-lower-u": "assets/LetterWriting/cursive-lower/u.mp4",
  "Cursive-lower-v": "assets/LetterWriting/cursive-lower/v.mp4",
  "Cursive-lower-w": "assets/LetterWriting/cursive-lower/w.mp4",
  "Cursive-lower-x": "assets/LetterWriting/cursive-lower/x.mp4",
  "Cursive-lower-y": "assets/LetterWriting/cursive-lower/y.mp4",
  "Cursive-lower-z": "assets/LetterWriting/cursive-lower/z.mp4",
  "Cursive-upper-a": "assets/LetterWriting/cursive-upper/A.mp4",
  "Cursive-upper-b": "assets/LetterWriting/cursive-upper/B.mp4",
  "Cursive-upper-c": "assets/LetterWriting/cursive-upper/C.mp4",
  "Cursive-upper-d": "assets/LetterWriting/cursive-upper/D.mp4",
  "Cursive-upper-e": "assets/LetterWriting/cursive-upper/E.mp4",
  "Cursive-upper-f": "assets/LetterWriting/cursive-upper/F.mp4",
  "Cursive-upper-g": "assets/LetterWriting/cursive-upper/G.mp4",
  "Cursive-upper-h": "assets/LetterWriting/cursive-upper/H.mp4",
  "Cursive-upper-i": "assets/LetterWriting/cursive-upper/I.mp4",
  "Cursive-upper-j": "assets/LetterWriting/cursive-upper/J.mp4",
  "Cursive-upper-k": "assets/LetterWriting/cursive-upper/K.mp4",
  "Cursive-upper-l": "assets/LetterWriting/cursive-upper/L.mp4",
  "Cursive-upper-m": "assets/LetterWriting/cursive-upper/M.mp4",
  "Cursive-upper-n": "assets/LetterWriting/cursive-upper/N.mp4",
  "Cursive-upper-o": "assets/LetterWriting/cursive-upper/O.mp4",
  "Cursive-upper-p": "assets/LetterWriting/cursive-upper/P.mp4",
  "Cursive-upper-q": "assets/LetterWriting/cursive-upper/Q.mp4",
  "Cursive-upper-r": "assets/LetterWriting/cursive-upper/R.mp4",
  "Cursive-upper-s": "assets/LetterWriting/cursive-upper/S.mp4",
  "Cursive-upper-t": "assets/LetterWriting/cursive-upper/T.mp4",
  "Cursive-upper-u": "assets/LetterWriting/cursive-upper/U.mp4",
  "Cursive-upper-v": "assets/LetterWriting/cursive-upper/V.mp4",
  "Cursive-upper-w": "assets/LetterWriting/cursive-upper/W.mp4",
  "Cursive-upper-x": "assets/LetterWriting/cursive-upper/X.mp4",
  "Cursive-upper-y": "assets/LetterWriting/cursive-upper/Y.mp4",
  "Cursive-upper-z": "assets/LetterWriting/cursive-upper/Z.mp4",
  "PreCursive-lower-a": "assets/LetterWriting/pre-cursive-lower/a.mp4",
  "PreCursive-lower-b": "assets/LetterWriting/pre-cursive-lower/b.mp4",
  "PreCursive-lower-c": "assets/LetterWriting/pre-cursive-lower/c.mp4",
  "PreCursive-lower-d": "assets/LetterWriting/pre-cursive-lower/d.mp4",
  "PreCursive-lower-e": "assets/LetterWriting/pre-cursive-lower/e.mp4",
  "PreCursive-lower-f": "assets/LetterWriting/pre-cursive-lower/f.mp4",
  "PreCursive-lower-g": "assets/LetterWriting/pre-cursive-lower/g.mp4",
  "PreCursive-lower-h": "assets/LetterWriting/pre-cursive-lower/h.mp4",
  "PreCursive-lower-i": "assets/LetterWriting/pre-cursive-lower/i.mp4",
  "PreCursive-lower-j": "assets/LetterWriting/pre-cursive-lower/j.mp4",
  "PreCursive-lower-k": "assets/LetterWriting/pre-cursive-lower/k.mp4",
  "PreCursive-lower-l": "assets/LetterWriting/pre-cursive-lower/l.mp4",
  "PreCursive-lower-m": "assets/LetterWriting/pre-cursive-lower/m.mp4",
  "PreCursive-lower-n": "assets/LetterWriting/pre-cursive-lower/n.mp4",
  "PreCursive-lower-o": "assets/LetterWriting/pre-cursive-lower/o.mp4",
  "PreCursive-lower-p": "assets/LetterWriting/pre-cursive-lower/p.mp4",
  "PreCursive-lower-q": "assets/LetterWriting/pre-cursive-lower/q.mp4",
  "PreCursive-lower-r": "assets/LetterWriting/pre-cursive-lower/r.mp4",
  "PreCursive-lower-s": "assets/LetterWriting/pre-cursive-lower/s.mp4",
  "PreCursive-lower-t": "assets/LetterWriting/pre-cursive-lower/t.mp4",
  "PreCursive-lower-u": "assets/LetterWriting/pre-cursive-lower/u.mp4",
  "PreCursive-lower-v": "assets/LetterWriting/pre-cursive-lower/v.mp4",
  "PreCursive-lower-w": "assets/LetterWriting/pre-cursive-lower/w.mp4",
  "PreCursive-lower-x": "assets/LetterWriting/pre-cursive-lower/x.mp4",
  "PreCursive-lower-y": "assets/LetterWriting/pre-cursive-lower/y.mp4",
  "PreCursive-lower-z": "assets/LetterWriting/pre-cursive-lower/z.mp4",
  "PreCursive-upper-a": "assets/LetterWriting/pre-cursive-upper/A.mp4",
  "PreCursive-upper-b": "assets/LetterWriting/pre-cursive-upper/B.mp4",
  "PreCursive-upper-c": "assets/LetterWriting/pre-cursive-upper/C.mp4",
  "PreCursive-upper-d": "assets/LetterWriting/pre-cursive-upper/D.mp4",
  "PreCursive-upper-e": "assets/LetterWriting/pre-cursive-upper/E.mp4",
  "PreCursive-upper-f": "assets/LetterWriting/pre-cursive-upper/F.mp4",
  "PreCursive-upper-g": "assets/LetterWriting/pre-cursive-upper/G.mp4",
  "PreCursive-upper-h": "assets/LetterWriting/pre-cursive-upper/H.mp4",
  "PreCursive-upper-i": "assets/LetterWriting/pre-cursive-upper/I.mp4",
  "PreCursive-upper-j": "assets/LetterWriting/pre-cursive-upper/J.mp4",
  "PreCursive-upper-k": "assets/LetterWriting/pre-cursive-upper/K.mp4",
  "PreCursive-upper-l": "assets/LetterWriting/pre-cursive-upper/L.mp4",
  "PreCursive-upper-m": "assets/LetterWriting/pre-cursive-upper/M.mp4",
  "PreCursive-upper-n": "assets/LetterWriting/pre-cursive-upper/N.mp4",
  "PreCursive-upper-o": "assets/LetterWriting/pre-cursive-upper/O.mp4",
  "PreCursive-upper-p": "assets/LetterWriting/pre-cursive-upper/P.mp4",
  "PreCursive-upper-q": "assets/LetterWriting/pre-cursive-upper/Q.mp4",
  "PreCursive-upper-r": "assets/LetterWriting/pre-cursive-upper/R.mp4",
  "PreCursive-upper-s": "assets/LetterWriting/pre-cursive-upper/S.mp4",
  "PreCursive-upper-t": "assets/LetterWriting/pre-cursive-upper/T.mp4",
  "PreCursive-upper-u": "assets/LetterWriting/pre-cursive-upper/U.mp4",
  "PreCursive-upper-v": "assets/LetterWriting/pre-cursive-upper/V.mp4",
  "PreCursive-upper-w": "assets/LetterWriting/pre-cursive-upper/W.mp4",
  "PreCursive-upper-x": "assets/LetterWriting/pre-cursive-upper/X.mp4",
  "PreCursive-upper-y": "assets/LetterWriting/pre-cursive-upper/Y.mp4",
  "PreCursive-upper-z": "assets/LetterWriting/pre-cursive-upper/Z.mp4",
  "CursiveJoin21": "assets/LetterWriting/Cursive2/bu.mp4",
  "CursiveJoin22": "assets/LetterWriting/Cursive2/da.mp4",
  "CursiveJoin23": "assets/LetterWriting/Cursive2/fo.mp4",
  "CursiveJoin24": "assets/LetterWriting/Cursive2/ga.mp4",
  "CursiveJoin25": "assets/LetterWriting/Cursive2/ki.mp4",
  "CursiveJoin26": "assets/LetterWriting/Cursive2/me.mp4",
  "CursiveJoin27": "assets/LetterWriting/Cursive2/ne.mp4",
  "CursiveJoin28": "assets/LetterWriting/Cursive2/pe.mp4",
  "CursiveJoin29": "assets/LetterWriting/Cursive2/ro.mp4",
  "CursiveJoin210": "assets/LetterWriting/Cursive2/ru.mp4",
  "CursiveJoin211": "assets/LetterWriting/Cursive2/si.mp4",
  "CursiveJoin212": "assets/LetterWriting/Cursive2/to.mp4",
  "CursiveJoin213": "assets/LetterWriting/Cursive2/yu.mp4",
  "CursiveJoin214": "assets/LetterWriting/Cursive2/zi.mp4",
  "CursiveJoin31": "assets/LetterWriting/Cursive3/bin.mp4",
  "CursiveJoin32": "assets/LetterWriting/Cursive3/bus.mp4",
  "CursiveJoin33": "assets/LetterWriting/Cursive3/car.mp4",
  "CursiveJoin34": "assets/LetterWriting/Cursive3/dog.mp4",
  "CursiveJoin35": "assets/LetterWriting/Cursive3/fox.mp4",
  "CursiveJoin36": "assets/LetterWriting/Cursive3/hop.mp4",
  "CursiveJoin37": "assets/LetterWriting/Cursive3/jar.mp4",
  "CursiveJoin38": "assets/LetterWriting/Cursive3/kid.mp4",
  "CursiveJoin39": "assets/LetterWriting/Cursive3/leg.mp4",
  "CursiveJoin310": "assets/LetterWriting/Cursive3/red.mp4",
  "CursiveJoin311": "assets/LetterWriting/Cursive3/rip.mp4",
  "CursiveJoin312": "assets/LetterWriting/Cursive3/run.mp4",
  "CursiveJoin313": "assets/LetterWriting/Cursive3/sun.mp4",
  "CursiveJoin314": "assets/LetterWriting/Cursive3/ten.mp4"
};

  const getQueryStr = window.location.search;
  var tabName, letter;
  useEffect(() => {
    props.setVisibility(props.history);
    document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url("+actImg+")";

    var str="";

    if(getQueryStr.indexOf("?") > -1){
      const params = new URLSearchParams(window.location.search);
      tabName = params.get("tab").substr(0, params.get("tab").length-1);
      letter = params.get("curLetter");
      //console.log("TAB: ", tabName, casing);
      if(joiningTabs.indexOf(params.get("tab"))>-1){
        str = tabName+casing+letter;
        //console.log("STR: ", str);
      }else{
        let newTab = params.get("tab");
        if(newTab.includes("-")){
          newTab = newTab.replace("-", "");
        }
        str = newTab.substr(0, newTab.length-1)+"-"+params.get("casing")+ "-"+params.get("curLetter").toLowerCase();
      }
      path = obj[str];
      //console.log(path, str, " ******** ");

    }else{
      var tab = props.location.tab.substr(0, props.location.tab.length-1);
      if(joiningTabs.indexOf(props.location.tab)>-1){
        str = tab+casing+props.location.curLetter;
        path = obj[str];
      }else{
        vidFold = cc.substr(0, cc.length-1);
        props.location.case = props.location.case || "lower";
        str = tab+"-"+(casing + "-"+props.location.curLetter).toLowerCase();
        path = obj[str];
      }

      //func(null, props.location.case);
    }
    document.getElementById("vidPlayer-pre").src = path;
  }, []);

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

  function getCasing(){
    return <MyConsumer>
			{
				(a) => {
            casing = casing || a.case || "lower";
            return "";
				}
			}
		</MyConsumer>
    
  }

  function getHelpText() {
    if(getQueryStr.indexOf("?") > -1){
      const params = new URLSearchParams(window.location.search);
      let cc = params.get("tab");
      let helpText=state.help.g;
      if(joiningTabs.indexOf(cc)>-1){
        helpText = state.help[cc];
      }
      return helpText;
    }
    return (
      <MyConsumer>
        {(a) => {
          if (a.activeTab != null) {
            var cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }
            
            var helpText=state.help.g;
            if(joiningTabs.indexOf(cc)>-1){
              helpText = state.help[cc];
            }
          }
          return helpText;
        }}
      </MyConsumer>
    );
  }

  function abc() {
    if(getQueryStr.indexOf("?") > -1){
      const params = new URLSearchParams(window.location.search);
      var cc = params.get("tab");
      var tabName = cc;
      casing = params.get("casing");
      if(cc.includes("-")){
        cc = cc.replace("-", "");
      }
      //console.log("CC:", cc);
      var cust = customContext();
      actImg = cust[cc].a4;

      let finalTabName = tabName.split("");
      var ff = finalTabName.splice(finalTabName.length-1, 0, " ")
      
      return <p className="activity-name">{finalTabName.join("")}</p>;
    }

    return (
      <MyConsumer>
        {(a) => {
          func = a.func;
          if(a.activeTab != null){
            cc = a.activeTab.replace(" ", "");
            if(cc.includes("-")){
              cc = cc.replace("-", "");
            }
            actImg = a.getImg[cc].a4;
          }

          return <p className="activity-name">{a.activeTab}</p>;
        }}
      </MyConsumer>
    );
  }

  function openDialog(){
		var vis = state.infDiagVis=="flex" ? "none" : "flex";    
		setStateHelp({...state, infDiagVis:vis})
	}
  
  return (
    <div className="activity-base">
      
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn" onClick={openDialog}>
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-Title">{abc()}</div>
        </div>

        <div className="info-dialog" style={{display:state.infDiagVis}}>
		  		<div>
		  			<img src={info143} alt="" />
				  </div>
				  <div>
            {getHelpText()}
				  </div>
			  </div>
        
        <div className="letterFormbodyTxt">Letter Formation</div>
        <div id="letterFormvidCont">
          <div>
            <span>
              <img src={vidIcon538} alt="" />
            </span>
          </div>
          <video
            loop
            autoPlay
            controls
            id="vidPlayer-pre"
            src="" type="video/mp4"
          ></video>
        </div>

        <MemoTest
          canprops={{
            width: "550",
            height: "470",
            marginLeft: 625,
            marginTop: -173,            
            backColor: "#fff",
          }} bgImg={wPage} 
          className="drawingTool"
        />
      </div>
      {getTColor()}
      {getCasing()}
    </div>
  );
}

export default LetterFormPractice;
