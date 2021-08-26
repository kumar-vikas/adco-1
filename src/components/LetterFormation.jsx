import { useState, useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import penIcon from "../images/pencil-621.png";
import { NavLink } from "react-router-dom";
import { MyConsumer } from "./context";
import info143 from "../images/info-i143.png";

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
  
  var actImg = null;
  const [pattern, speed] = props.location.path ? props.location.path.split("$") : ["pat-1", ""];
  var func = null;
  var tabName = "";
	var letterArrsmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var joinedLtr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  var currentArr;
  var classExt="";
	try{
		tabName = props.state.activeTab.replace("-", "").replace(" ", "");
    if(tabName === "CursiveC" || tabName === "CursiveD"){
      currentArr = joinedLtr;
      classExt = "joined";
    }else{
     currentArr = letterArrsmall;
    }
	}catch(err){}
	var svgImg = {
		"upperA":upperA,
    "upperB":upperB,
    "upperC":upperC,
    "upperD":upperD,
    "upperE":upperE,
    "upperF":upperF,
    "upperG":upperG,
    "upperH":upperH,
    "upperI":upperI,
    "upperJ":upperJ,
    "upperK":upperK,
    "upperL":upperL,
    "upperM":upperM,
    "upperN":upperN,
    "upperO":upperO,
    "upperP":upperP,
    "upperQ":upperQ,
    "upperR":upperR,
    "upperS":upperS,
    "upperT":upperT,
    "upperU":upperU,
    "upperV":upperV,
    "upperW":upperW,
    "upperX":upperX,
    "upperY":upperY,
    "upperZ":upperZ,
    "lowera":lowera,
    "lowerb":lowerb,
    "lowerc":lowerc,
    "lowerd":lowerd,
    "lowere":lowere,
    "lowerf":lowerf,
    "lowerg":lowerg,
    "lowerh":lowerh,
    "loweri":loweri,
    "lowerj":lowerj,
    "lowerk":lowerk,
    "lowerl":lowerl,
    "lowerm":lowerm,
    "lowern":lowern,
    "lowero":lowero,
    "lowerp":lowerp,
    "lowerq":lowerq,
    "lowerr":lowerr,
    "lowers":lowers,
    "lowert":lowert,
    "loweru":loweru,
    "lowerv":lowerv,
    "lowerw":lowerw,
    "lowerx":lowerx,
    "lowery":lowery,
    "lowerz":lowerz
	}
  var joinedImg={
    "CursiveC1"	:	joined21,
    "CursiveC2"	:	joined22,
    "CursiveC3"	:	joined23,
    "CursiveC4"	:	joined24,
    "CursiveC5"	:	joined25,
    "CursiveC6"	:	joined26,
    "CursiveC7"	:	joined27,
    "CursiveC8"	:	joined28,
    "CursiveC9"	:	joined29,
    "CursiveC10"	:	joined210,
    "CursiveC11"	:	joined211,
    "CursiveC12"	:	joined212,
    "CursiveC13"	:	joined213,
    "CursiveC14"	:	joined214,
    "CursiveD1"	:	joined31,
    "CursiveD2"	:	joined32,
    "CursiveD3"	:	joined33,
    "CursiveD4"	:	joined34,
    "CursiveD5"	:	joined35,
    "CursiveD6"	:	joined36,
    "CursiveD7"	:	joined37,
    "CursiveD8"	:	joined38,
    "CursiveD9"	:	joined39,
    "CursiveD10"	:	joined310,
    "CursiveD11"	:	joined311,
    "CursiveD12"	:	joined312,
    "CursiveD13"	:	joined313,
    "CursiveD14"	:	joined314	
	
  };

  useEffect(() => {
    props.setVisibility(props.history);
    document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url(" + actImg + ")";

    func(null, props.location.case);
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

  function abc() {
    return (
      <MyConsumer>
        {(a) => {
          func = a.func;
          if (a.activeTab != null) {
            var cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }
            actImg = a.getImg[cc].a3;
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
          if (a.activeTab != null) {
            var cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }
            var helpText=state.help.g;
            if(cc == "CursiveC" || cc == "CursiveD"){
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
          var _cur = a.case == "upper" ? "Upper" : "Lower";
          return _cur;
        }        
      }</MyConsumer>
      );
  }

 
	function getChar(_cur){
    return (
      <MyConsumer>
        {(a) => {
            var casing = a.case || "lower";
            var str = "";
            if(tabName === "CursiveC" || tabName === "CursiveD"){
              return <img className="join-letter-formed" src={joinedImg[tabName+_cur]}></img>
            }
            if(casing == "upper"){
              _cur = _cur.toUpperCase();
            }else{
              _cur = _cur.toLowerCase();			
            }
            
            if(!tabName.startsWith("Pre")){
                str = casing + _cur;
                return <img className="letter-formed" src={svgImg[str]}></img>
            }else{
              return _cur;
            }
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

        <div className="letterFormText">Letter Formation - {getLetterCase()} Case</div>
        <div id="letterCont">
					{
            currentArr.map(
							(cur)=>(
								<NavLink key={cur} to={{pathname:"/LetterFormPractice",tab:tabName, curLetter:cur, case: props.location.case}}>
									<button className={"letterBtn "+classExt}>
										{getChar(cur)}
										<img className="pencil-icon-small" src={penIcon} alt="" />
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
