import { useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import penIcon from "../images/pencil-621.png";
import { NavLink } from "react-router-dom";
import { MyConsumer } from "./context";

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

function LetterFormation(props) {
  var actImg = null;
  const [pattern, speed] = props.location.path ? props.location.path.split("$") : ["pat-1", ""];
  var func = null;
  var tabName = "";
	var letterArrsmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	try{
		tabName = props.state.activeTab.replace("-", "").replace(" ", "");
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
            var casing = a.case;
            if(casing == "upper"){
              _cur = _cur.toUpperCase();
            }else{
              _cur = _cur.toLowerCase();			
            }
        
            if(!tabName.startsWith("Pre")){
                var str = casing + _cur;
                return <img className="letter-formed" src={svgImg[str]}></img>
            }else{
              return _cur;
            }
          }
        }
      </MyConsumer>
    )
	}

  return (
    <div className="activity-base">
      {/* <img alt="" src={pencilImg} className="pencile-image"/> */}
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn">
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-Title">
            {abc()}
          </div>
        </div>

        <div className="letterFormText">Letter Formation - {getLetterCase()} Case</div>
        <div id="letterCont">
					{
						letterArrsmall.map(
							(cur)=>(
								<NavLink key={cur} to={{pathname:"/LetterFormPractice", curLetter:cur, case: props.location.case}}>
									<button className="letterBtn">
										{getChar(cur)}
										<img src={penIcon} alt="" />
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
