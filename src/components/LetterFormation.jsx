import { useState, useEffect } from "react";
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import penIcon from "../images/pencil-621.png";
import { NavLink } from "react-router-dom";
import { MyConsumer } from "./context";
import info143 from "../images/info-i143.png";
import customContext from "./customContext";
                                                    
import PreCurUpperA from "../images/letterFormation/PreCursiveUpper/A.png";
import PreCurUpperB from "../images/letterFormation/PreCursiveUpper/B.png";
import PreCurUpperC from "../images/letterFormation/PreCursiveUpper/C.png";
import PreCurUpperD from "../images/letterFormation/PreCursiveUpper/D.png";
import PreCurUpperE from "../images/letterFormation/PreCursiveUpper/E.png";
import PreCurUpperF from "../images/letterFormation/PreCursiveUpper/F.png";
import PreCurUpperG from "../images/letterFormation/PreCursiveUpper/G.png";
import PreCurUpperH from "../images/letterFormation/PreCursiveUpper/H.png";
import PreCurUpperI from "../images/letterFormation/PreCursiveUpper/I.png";
import PreCurUpperJ from "../images/letterFormation/PreCursiveUpper/J.png";
import PreCurUpperK from "../images/letterFormation/PreCursiveUpper/K.png";
import PreCurUpperL from "../images/letterFormation/PreCursiveUpper/L.png";
import PreCurUpperM from "../images/letterFormation/PreCursiveUpper/M.png";
import PreCurUpperN from "../images/letterFormation/PreCursiveUpper/N.png";
import PreCurUpperO from "../images/letterFormation/PreCursiveUpper/O.png";
import PreCurUpperP from "../images/letterFormation/PreCursiveUpper/P.png";
import PreCurUpperQ from "../images/letterFormation/PreCursiveUpper/Q.png";
import PreCurUpperR from "../images/letterFormation/PreCursiveUpper/R.png";
import PreCurUpperS from "../images/letterFormation/PreCursiveUpper/S.png";
import PreCurUpperT from "../images/letterFormation/PreCursiveUpper/T.png";
import PreCurUpperU from "../images/letterFormation/PreCursiveUpper/U.png";
import PreCurUpperV from "../images/letterFormation/PreCursiveUpper/V.png";
import PreCurUpperW from "../images/letterFormation/PreCursiveUpper/W.png";
import PreCurUpperX from "../images/letterFormation/PreCursiveUpper/X.png";
import PreCurUpperY from "../images/letterFormation/PreCursiveUpper/Y.png";
import PreCurUpperZ from "../images/letterFormation/PreCursiveUpper/Z.png";

import PreCurLowerA from "../images/letterFormation/PreCursiveLower/a.png";
import PreCurLowerB from "../images/letterFormation/PreCursiveLower/b.png";
import PreCurLowerC from "../images/letterFormation/PreCursiveLower/c.png";
import PreCurLowerD from "../images/letterFormation/PreCursiveLower/d.png";
import PreCurLowerE from "../images/letterFormation/PreCursiveLower/e.png";
import PreCurLowerF from "../images/letterFormation/PreCursiveLower/f.png";
import PreCurLowerG from "../images/letterFormation/PreCursiveLower/g.png";
import PreCurLowerH from "../images/letterFormation/PreCursiveLower/h.png";
import PreCurLowerI from "../images/letterFormation/PreCursiveLower/i.png";
import PreCurLowerJ from "../images/letterFormation/PreCursiveLower/j.png";
import PreCurLowerK from "../images/letterFormation/PreCursiveLower/k.png";
import PreCurLowerL from "../images/letterFormation/PreCursiveLower/l.png";
import PreCurLowerM from "../images/letterFormation/PreCursiveLower/m.png";
import PreCurLowerN from "../images/letterFormation/PreCursiveLower/n.png";
import PreCurLowerO from "../images/letterFormation/PreCursiveLower/o.png";
import PreCurLowerP from "../images/letterFormation/PreCursiveLower/p.png";
import PreCurLowerQ from "../images/letterFormation/PreCursiveLower/q.png";
import PreCurLowerR from "../images/letterFormation/PreCursiveLower/r.png";
import PreCurLowerS from "../images/letterFormation/PreCursiveLower/s.png";
import PreCurLowerT from "../images/letterFormation/PreCursiveLower/t.png";
import PreCurLowerU from "../images/letterFormation/PreCursiveLower/u.png";
import PreCurLowerV from "../images/letterFormation/PreCursiveLower/v.png";
import PreCurLowerW from "../images/letterFormation/PreCursiveLower/w.png";
import PreCurLowerX from "../images/letterFormation/PreCursiveLower/x.png";
import PreCurLowerY from "../images/letterFormation/PreCursiveLower/y.png";
import PreCurLowerZ from "../images/letterFormation/PreCursiveLower/z.png";
import upperA from "../images/letterFormation/CursiveUpper/A.png";
import upperB from "../images/letterFormation/CursiveUpper/B.png";
import upperC from "../images/letterFormation/CursiveUpper/C.png";
import upperD from "../images/letterFormation/CursiveUpper/D.png";
import upperE from "../images/letterFormation/CursiveUpper/E.png";
import upperF from "../images/letterFormation/CursiveUpper/F.png";
import upperG from "../images/letterFormation/CursiveUpper/G.png";
import upperH from "../images/letterFormation/CursiveUpper/H.png";
import upperI from "../images/letterFormation/CursiveUpper/I.png";
import upperJ from "../images/letterFormation/CursiveUpper/J.png";
import upperK from "../images/letterFormation/CursiveUpper/K.png";
import upperL from "../images/letterFormation/CursiveUpper/L.png";
import upperM from "../images/letterFormation/CursiveUpper/M.png";
import upperN from "../images/letterFormation/CursiveUpper/N.png";
import upperO from "../images/letterFormation/CursiveUpper/O.png";
import upperP from "../images/letterFormation/CursiveUpper/P.png";
import upperQ from "../images/letterFormation/CursiveUpper/Q.png";
import upperR from "../images/letterFormation/CursiveUpper/R.png";
import upperS from "../images/letterFormation/CursiveUpper/S.png";
import upperT from "../images/letterFormation/CursiveUpper/T.png";
import upperU from "../images/letterFormation/CursiveUpper/U.png";
import upperV from "../images/letterFormation/CursiveUpper/V.png";
import upperW from "../images/letterFormation/CursiveUpper/W.png";
import upperX from "../images/letterFormation/CursiveUpper/X.png";
import upperY from "../images/letterFormation/CursiveUpper/Y.png";
import upperZ from "../images/letterFormation/CursiveUpper/Z.png";
import lowera from "../images/letterFormation/CursiveLower/a.png";
import lowerb from "../images/letterFormation/CursiveLower/b.png";
import lowerc from "../images/letterFormation/CursiveLower/c.png";
import lowerd from "../images/letterFormation/CursiveLower/d.png";
import lowere from "../images/letterFormation/CursiveLower/e.png";
import lowerf from "../images/letterFormation/CursiveLower/f.png";
import lowerg from "../images/letterFormation/CursiveLower/g.png";
import lowerh from "../images/letterFormation/CursiveLower/h.png";
import loweri from "../images/letterFormation/CursiveLower/i.png";
import lowerj from "../images/letterFormation/CursiveLower/j.png";
import lowerk from "../images/letterFormation/CursiveLower/k.png";
import lowerl from "../images/letterFormation/CursiveLower/l.png";
import lowerm from "../images/letterFormation/CursiveLower/m.png";
import lowern from "../images/letterFormation/CursiveLower/n.png";
import lowero from "../images/letterFormation/CursiveLower/o.png";
import lowerp from "../images/letterFormation/CursiveLower/p.png";
import lowerq from "../images/letterFormation/CursiveLower/q.png";
import lowerr from "../images/letterFormation/CursiveLower/r.png";
import lowers from "../images/letterFormation/CursiveLower/s.png";
import lowert from "../images/letterFormation/CursiveLower/t.png";
import loweru from "../images/letterFormation/CursiveLower/u.png";
import lowerv from "../images/letterFormation/CursiveLower/v.png";
import lowerw from "../images/letterFormation/CursiveLower/w.png";
import lowerx from "../images/letterFormation/CursiveLower/x.png";
import lowery from "../images/letterFormation/CursiveLower/y.png";
import lowerz from "../images/letterFormation/CursiveLower/z.png";

import joined21 from "../images/letterFormation/Cursive2Lettter/1.png"
import joined22 from "../images/letterFormation/Cursive2Lettter/2.png"
import joined23 from "../images/letterFormation/Cursive2Lettter/3.png"
import joined24 from "../images/letterFormation/Cursive2Lettter/4.png"
import joined25 from "../images/letterFormation/Cursive2Lettter/5.png"
import joined26 from "../images/letterFormation/Cursive2Lettter/6.png"
import joined27 from "../images/letterFormation/Cursive2Lettter/7.png"
import joined28 from "../images/letterFormation/Cursive2Lettter/8.png"
import joined29 from "../images/letterFormation/Cursive2Lettter/9.png"
import joined210 from "../images/letterFormation/Cursive2Lettter/10.png"
import joined211 from "../images/letterFormation/Cursive2Lettter/11.png"
import joined212 from "../images/letterFormation/Cursive2Lettter/12.png"
import joined213 from "../images/letterFormation/Cursive2Lettter/13.png"
import joined214 from "../images/letterFormation/Cursive2Lettter/14.png"
import joined31 from "../images/letterFormation/Cursive3Lettter/1.png"
import joined32 from "../images/letterFormation/Cursive3Lettter/2.png"
import joined33 from "../images/letterFormation/Cursive3Lettter/3.png"
import joined34 from "../images/letterFormation/Cursive3Lettter/4.png"
import joined35 from "../images/letterFormation/Cursive3Lettter/5.png"
import joined36 from "../images/letterFormation/Cursive3Lettter/6.png"
import joined37 from "../images/letterFormation/Cursive3Lettter/7.png"
import joined38 from "../images/letterFormation/Cursive3Lettter/8.png"
import joined39 from "../images/letterFormation/Cursive3Lettter/9.png"
import joined310 from "../images/letterFormation/Cursive3Lettter/10.png"
import joined311 from "../images/letterFormation/Cursive3Lettter/11.png"
import joined312 from "../images/letterFormation/Cursive3Lettter/12.png"
import joined313 from "../images/letterFormation/Cursive3Lettter/13.png"
import joined314 from "../images/letterFormation/Cursive3Lettter/14.png"


function LetterFormation(props) {
  const [state, setStateHelp] = useState({help:{g:"Choose a letter to begin!",CursiveC:"Now you now how to form your letters, it’s time to join them together! Choose a two letter join to begin!", CursiveD:"Now you know how to form your letters, it’s time to join them together! Choose a three letter join to begin!"},
    infDiagVis:"none"
  });
  console.log("CHECK: ", props.state.activeTab, props.location.case);
  var actImg = null;
  const [pattern, speed] = props.location.path ? props.location.path.split("$") : ["pat-1", ""];
  var func = null;
  var tabName = "";
  var tabname = "";
	var letterArrsmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var joinedLtr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  var currentArr;
  var classExt="";
  var CurCasing="";
  var joiningTabs = ["CursiveC", "CursiveD", "CursiveE", "CursiveF"];
  const getQueryStr = window.location.search;
  var svgImg = {
    "PreCursiveUpperA":PreCurUpperA,
    "PreCursiveUpperB":PreCurUpperB,
    "PreCursiveUpperC":PreCurUpperC,
    "PreCursiveUpperD":PreCurUpperD,
    "PreCursiveUpperE":PreCurUpperE,
    "PreCursiveUpperF":PreCurUpperF,
    "PreCursiveUpperG":PreCurUpperG,
    "PreCursiveUpperH":PreCurUpperH,
    "PreCursiveUpperI":PreCurUpperI,
    "PreCursiveUpperJ":PreCurUpperJ,
    "PreCursiveUpperK":PreCurUpperK,
    "PreCursiveUpperL":PreCurUpperL,
    "PreCursiveUpperM":PreCurUpperM,
    "PreCursiveUpperN":PreCurUpperN,
    "PreCursiveUpperO":PreCurUpperO,
    "PreCursiveUpperP":PreCurUpperP,
    "PreCursiveUpperQ":PreCurUpperQ,
    "PreCursiveUpperR":PreCurUpperR,
    "PreCursiveUpperS":PreCurUpperS,
    "PreCursiveUpperT":PreCurUpperT,
    "PreCursiveUpperU":PreCurUpperU,
    "PreCursiveUpperV":PreCurUpperV,
    "PreCursiveUpperW":PreCurUpperW,
    "PreCursiveUpperX":PreCurUpperX,
    "PreCursiveUpperY":PreCurUpperY,
    "PreCursiveUpperZ":PreCurUpperZ,

    "PreCursiveLowera":PreCurLowerA,
    "PreCursiveLowerb":PreCurLowerB,
    "PreCursiveLowerc":PreCurLowerC,
    "PreCursiveLowerd":PreCurLowerD,
    "PreCursiveLowere":PreCurLowerE,
    "PreCursiveLowerf":PreCurLowerF,
    "PreCursiveLowerg":PreCurLowerG,
    "PreCursiveLowerh":PreCurLowerH,
    "PreCursiveLoweri":PreCurLowerI,
    "PreCursiveLowerj":PreCurLowerJ,
    "PreCursiveLowerk":PreCurLowerK,
    "PreCursiveLowerl":PreCurLowerL,
    "PreCursiveLowerm":PreCurLowerM,
    "PreCursiveLowern":PreCurLowerN,
    "PreCursiveLowero":PreCurLowerO,
    "PreCursiveLowerp":PreCurLowerP,
    "PreCursiveLowerq":PreCurLowerQ,
    "PreCursiveLowerr":PreCurLowerR,
    "PreCursiveLowers":PreCurLowerS,
    "PreCursiveLowert":PreCurLowerT,
    "PreCursiveLoweru":PreCurLowerU,
    "PreCursiveLowerv":PreCurLowerV,
    "PreCursiveLowerw":PreCurLowerW,
    "PreCursiveLowerx":PreCurLowerX,
    "PreCursiveLowery":PreCurLowerY,
    "PreCursiveLowerz":PreCurLowerZ,
		"CursiveUpperA":upperA,
    "CursiveUpperB":upperB,
    "CursiveUpperC":upperC,
    "CursiveUpperD":upperD,
    "CursiveUpperE":upperE,
    "CursiveUpperF":upperF,
    "CursiveUpperG":upperG,
    "CursiveUpperH":upperH,
    "CursiveUpperI":upperI,
    "CursiveUpperJ":upperJ,
    "CursiveUpperK":upperK,
    "CursiveUpperL":upperL,
    "CursiveUpperM":upperM,
    "CursiveUpperN":upperN,
    "CursiveUpperO":upperO,
    "CursiveUpperP":upperP,
    "CursiveUpperQ":upperQ,
    "CursiveUpperR":upperR,
    "CursiveUpperS":upperS,
    "CursiveUpperT":upperT,
    "CursiveUpperU":upperU,
    "CursiveUpperV":upperV,
    "CursiveUpperW":upperW,
    "CursiveUpperX":upperX,
    "CursiveUpperY":upperY,
    "CursiveUpperZ":upperZ,
    "CursiveLowera":lowera,
    "CursiveLowerb":lowerb,
    "CursiveLowerc":lowerc,
    "CursiveLowerd":lowerd,
    "CursiveLowere":lowere,
    "CursiveLowerf":lowerf,
    "CursiveLowerg":lowerg,
    "CursiveLowerh":lowerh,
    "CursiveLoweri":loweri,
    "CursiveLowerj":lowerj,
    "CursiveLowerk":lowerk,
    "CursiveLowerl":lowerl,
    "CursiveLowerm":lowerm,
    "CursiveLowern":lowern,
    "CursiveLowero":lowero,
    "CursiveLowerp":lowerp,
    "CursiveLowerq":lowerq,
    "CursiveLowerr":lowerr,
    "CursiveLowers":lowers,
    "CursiveLowert":lowert,
    "CursiveLoweru":loweru,
    "CursiveLowerv":lowerv,
    "CursiveLowerw":lowerw,
    "CursiveLowerx":lowerx,
    "CursiveLowery":lowery,
    "CursiveLowerz":lowerz
	}
  var joinedImg={
    "CursiveJoin21"	:	joined21,
    "CursiveJoin22"	:	joined22,
    "CursiveJoin23"	:	joined23,
    "CursiveJoin24"	:	joined24,
    "CursiveJoin25"	:	joined25,
    "CursiveJoin26"	:	joined26,
    "CursiveJoin27"	:	joined27,
    "CursiveJoin28"	:	joined28,
    "CursiveJoin29"	:	joined29,
    "CursiveJoin210"	:	joined210,
    "CursiveJoin211"	:	joined211,
    "CursiveJoin212"	:	joined212,
    "CursiveJoin213"	:	joined213,
    "CursiveJoin214"	:	joined214,
    "CursiveJoin31"	:	joined31,
    "CursiveJoin32"	:	joined32,
    "CursiveJoin33"	:	joined33,
    "CursiveJoin34"	:	joined34,
    "CursiveJoin35"	:	joined35,
    "CursiveJoin36"	:	joined36,
    "CursiveJoin37"	:	joined37,
    "CursiveJoin38"	:	joined38,
    "CursiveJoin39"	:	joined39,
    "CursiveJoin310"	:	joined310,
    "CursiveJoin311"	:	joined311,
    "CursiveJoin312"	:	joined312,
    "CursiveJoin313"	:	joined313,
    "CursiveJoin314"	:	joined314	
	
  };
	try{
    if(getQueryStr.indexOf("?") > -1){
      const params = new URLSearchParams(window.location.search);
      var cc = params.get("tab");
      tabName = cc;
      CurCasing = params.get("casing");
      var cust = customContext();
      actImg = cust[cc].a2;
    }else{
      tabName = props.state.activeTab.replace("-", "").replace(" ", "");
    }
      if(joiningTabs.indexOf(tabName) >-1){
        currentArr = joinedLtr;
        classExt = "joined";
      }else{
      currentArr = letterArrsmall;
      }    
	}catch(err){}
  
  useEffect(() => {
    props.setVisibility(props.history);
    document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url(" + actImg + ")";
    if(getQueryStr.indexOf("?") == -1){  
      console.log("USE:   ", props.location.case, CurCasing);    
      var tcase = props.location.case || CurCasing;
      //props.location.case = tcase;
      
      func(null, tcase);
    }
    
  }, []);

  function getTColor(){
		return <MyConsumer>
			{
				(a) => {
          a.activeTab = a.activeTab || tabName;
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
          console.log("AAA: =========== ",a.case);
          if(a.case!=null){
            CurCasing = a.case;
          }
					//a.case = a.case || CurCasing;
				}
			}
		</MyConsumer>
	}

  function abc() {
    if(getQueryStr.indexOf("?") > -1){
      const params = new URLSearchParams(window.location.search);
      var cc = params.get("tab");
      var tabName = cc;
      tabname = tabName;
      if(cc.includes("-")){
        cc = cc.replace("-", "");
      }      
      let finalTabName = tabName.split("");
      finalTabName.splice(finalTabName.length-1, 0, " ");
      //console.log("TAB!!:  ", finalTabName.join(""),tabName);
      let fname = finalTabName.join("").replace("Pre", "Pre-");
      //console.log(fname);
      return <p className="activity-name">{fname}</p>;
    }
    return (
      <MyConsumer>
        {(a) => {
          //console.log(a.func);
          func = a.func;
          a.activeTab = a.activeTab || tabName;
          if (a.activeTab != null) {
            var cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }
            actImg = a.getImg[cc].a3;
            //console.log("ASDFAS............");
          }
          return <p className="activity-name">{a.activeTab}</p>;
        }}
      </MyConsumer>
    );
  }
  
  function getHelpText() {
    return (
      <MyConsumer>
        {(a) => {
          a.activeTab = a.activeTab || tabName;
          if (a.activeTab != null) {
            var cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }
            //console.log("STATE: ", state);
            var helpText=state.help.g;
            if(joiningTabs.indexOf(cc)>-1){
              helpText = state.help[cc]; 
            }
            return helpText;
          }
          return <p className="activity-name">{a.activeTab}</p>;
        }}
      </MyConsumer>
    );
  }

  function getLetterCase() {
    return (
      <MyConsumer>
        {(a) => {
          var text;
          console.log(a.case, " =========== ", CurCasing);
          a.case = a.case || CurCasing;
          
          switch (a.case){
            case "lower":
              text = "Letter formation - Lower Case"
              break;
            case "Upper":
            case "upper":
              text = "Letter formation - Upper Case"
              break;
            case "Join2":
              text = "Two-Letter Joins"
              break;
              case "Join3":
                text = "Three-Letter Joins"
                break;
            default:
              text = "Letter Formation"
          }
          //console.log("text: ", text);
          return text;
        }        
      }</MyConsumer>
      );
  }
  
  function getPencilClass(cur){
    return (
      <MyConsumer>
        {(a) => {
            var casing = a.case; 
            var cls = "";           
            if(tabName.startsWith("PreCursive")){
              if(casing =="Upper"){
                cls = "pencil-icon-small mt20";
              }else{
                cls = "pencil-icon-small";
              }
            }
            if(tabName.startsWith("Cursive")){
                cls = "pencil-icon-small mt20";                
            }
            return cls;
          }
        }
      </MyConsumer>
    )
  }
 
	function getChar(_cur){
    return (
      <MyConsumer>
        {(a) => {
            a.case = a.case || CurCasing;
            var casing = a.case;
            var str = tabName.substr(0, tabName.length-1) + casing + _cur;
            if(joiningTabs.indexOf(tabName)>-1){
              return <img className="join-letter-formed" src={joinedImg[str]}></img>
            }            
            if(casing.toLowerCase() == "upper"){
              _cur = _cur.toUpperCase();
            }else{
              _cur = _cur.toLowerCase();			
            }
            str = casing.toLowerCase() + _cur;
            if(tabName.startsWith("PreCursive")){
              str = "PreCursive";
              if(casing.toLowerCase() == "upper"){
                str += "Upper" + _cur.toUpperCase();
              }else{
                str += "Lower" + _cur.toLowerCase();
              }
            }else{
              str = "Cursive";
              if(casing.toLowerCase() == "upper"){
                str += "Upper" + _cur.toUpperCase();
              }else{
                str += "Lower" + _cur.toLowerCase();
              }
            }
            return <img className="letter-formed" src={svgImg[str]}></img>
            /* if(tabName.startsWith("PreCursive") && casing =="Upper"){
              str = "PreCursiveupper"+ _cur;
              return <img className="letter-formed" src={svgImg[str]}></img>
            }
            if(tabName.startsWith("Cursive")){
                //str = casing + _cur;                
                return <img className="letter-formed" src={svgImg[str]}></img>
            }else{
              return <span className="char-wrap">{_cur}</span>;
            } */
          }
        }
      </MyConsumer>
    )
	}

  function openDialog(){
		var vis = state.infDiagVis=="flex" ? "none" : "flex";    
		setStateHelp({...state, infDiagVis:vis})
	}

  return (
    <div className="activity-base">
      {/* <img alt="" src={pencilImg} className="pencile-image"/> */}
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
          </div>
        </div>

        <div className="info-dialog" style={{display:state.infDiagVis}}>
		  		<div>
		  			<img src={info143} alt="" />
				  </div>
				  <div>
		  				{getHelpText()}
				  </div>
			  </div>

        <div className="letterFormText">{getLetterCase()}</div>
        <div id="letterCont">
					{
            currentArr.map(
							(cur)=>(
								<NavLink key={cur} to={{pathname:"/LetterFormPractice",tab:tabName, curLetter:cur, case: CurCasing}}>
									<button className={"letterBtn "+classExt}>
										{getChar(cur)}
										<img className={getPencilClass(cur)} src={penIcon} alt="" />
									</button>
								</NavLink>
							)
						)
					}
        </div>
        {getTColor()}          
      </div>
    </div>
  );
}

export default LetterFormation;
