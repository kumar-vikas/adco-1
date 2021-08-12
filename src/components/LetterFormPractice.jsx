import { useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";
import wPage from "../images/w-page.png";
import vidIcon538 from "../images/vidIcon-538.png";
import { MyConsumer } from "./context";

function LetterFormPractice(props) {
  var func = null;
  var actImg = null;
  var vidFold = "";
  var path = "";
  var cc = "";

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
  "PreCursive-lower-a": "assets/LetterWriting/cursive-lower/a.mp4",
  "PreCursive-lower-b": "assets/LetterWriting/cursive-lower/b.mp4",
  "PreCursive-lower-c": "assets/LetterWriting/cursive-lower/c.mp4",
  "PreCursive-lower-d": "assets/LetterWriting/cursive-lower/d.mp4",
  "PreCursive-lower-e": "assets/LetterWriting/cursive-lower/e.mp4",
  "PreCursive-lower-f": "assets/LetterWriting/cursive-lower/f.mp4",
  "PreCursive-lower-g": "assets/LetterWriting/cursive-lower/g.mp4",
  "PreCursive-lower-h": "assets/LetterWriting/cursive-lower/h.mp4",
  "PreCursive-lower-i": "assets/LetterWriting/cursive-lower/i.mp4",
  "PreCursive-lower-j": "assets/LetterWriting/cursive-lower/j.mp4",
  "PreCursive-lower-k": "assets/LetterWriting/cursive-lower/k.mp4",
  "PreCursive-lower-l": "assets/LetterWriting/cursive-lower/l.mp4",
  "PreCursive-lower-m": "assets/LetterWriting/cursive-lower/m.mp4",
  "PreCursive-lower-n": "assets/LetterWriting/cursive-lower/n.mp4",
  "PreCursive-lower-o": "assets/LetterWriting/cursive-lower/o.mp4",
  "PreCursive-lower-p": "assets/LetterWriting/cursive-lower/p.mp4",
  "PreCursive-lower-q": "assets/LetterWriting/cursive-lower/q.mp4",
  "PreCursive-lower-r": "assets/LetterWriting/cursive-lower/r.mp4",
  "PreCursive-lower-s": "assets/LetterWriting/cursive-lower/s.mp4",
  "PreCursive-lower-t": "assets/LetterWriting/cursive-lower/t.mp4",
  "PreCursive-lower-u": "assets/LetterWriting/cursive-lower/u.mp4",
  "PreCursive-lower-v": "assets/LetterWriting/cursive-lower/v.mp4",
  "PreCursive-lower-w": "assets/LetterWriting/cursive-lower/w.mp4",
  "PreCursive-lower-x": "assets/LetterWriting/cursive-lower/x.mp4",
  "PreCursive-lower-y": "assets/LetterWriting/cursive-lower/y.mp4",
  "PreCursive-lower-z": "assets/LetterWriting/cursive-lower/z.mp4",
  "PreCursive-upper-a": "assets/LetterWriting/cursive-upper/A.mp4",
  "PreCursive-upper-b": "assets/LetterWriting/cursive-upper/B.mp4",
  "PreCursive-upper-c": "assets/LetterWriting/cursive-upper/C.mp4",
  "PreCursive-upper-d": "assets/LetterWriting/cursive-upper/D.mp4",
  "PreCursive-upper-e": "assets/LetterWriting/cursive-upper/E.mp4",
  "PreCursive-upper-f": "assets/LetterWriting/cursive-upper/F.mp4",
  "PreCursive-upper-g": "assets/LetterWriting/cursive-upper/G.mp4",
  "PreCursive-upper-h": "assets/LetterWriting/cursive-upper/H.mp4",
  "PreCursive-upper-i": "assets/LetterWriting/cursive-upper/I.mp4",
  "PreCursive-upper-j": "assets/LetterWriting/cursive-upper/J.mp4",
  "PreCursive-upper-k": "assets/LetterWriting/cursive-upper/K.mp4",
  "PreCursive-upper-l": "assets/LetterWriting/cursive-upper/L.mp4",
  "PreCursive-upper-m": "assets/LetterWriting/cursive-upper/M.mp4",
  "PreCursive-upper-n": "assets/LetterWriting/cursive-upper/N.mp4",
  "PreCursive-upper-o": "assets/LetterWriting/cursive-upper/O.mp4",
  "PreCursive-upper-p": "assets/LetterWriting/cursive-upper/P.mp4",
  "PreCursive-upper-q": "assets/LetterWriting/cursive-upper/Q.mp4",
  "PreCursive-upper-r": "assets/LetterWriting/cursive-upper/R.mp4",
  "PreCursive-upper-s": "assets/LetterWriting/cursive-upper/S.mp4",
  "PreCursive-upper-t": "assets/LetterWriting/cursive-upper/T.mp4",
  "PreCursive-upper-u": "assets/LetterWriting/cursive-upper/U.mp4",
  "PreCursive-upper-v": "assets/LetterWriting/cursive-upper/V.mp4",
  "PreCursive-upper-w": "assets/LetterWriting/cursive-upper/W.mp4",
  "PreCursive-upper-x": "assets/LetterWriting/cursive-upper/X.mp4",
  "PreCursive-upper-y": "assets/LetterWriting/cursive-upper/Y.mp4",
  "PreCursive-upper-z": "assets/LetterWriting/cursive-upper/Z.mp4"};

  useEffect(() => {
    props.setVisibility(props.history);
    document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url("+actImg+")";

    vidFold = cc.substr(0, cc.length-1);
    props.location.case = props.location.case || "lower"
    path = obj[vidFold+"-"+props.location.case+"-"+props.location.curLetter]
//    console.log(path, vidFold+"-"+props.location.case+"-"+props.location.curLetter)
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

  function abc() {
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
  
  return (
    <div className="activity-base">
      <img alt="" src={pencilImg} className="pencile-image" />
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn">
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-Title">{abc()}</div>
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
            src=""
          ></video>
        </div>

        <MemoTest
          canprops={{
            width: "550",
            height: "480",
            marginLeft: 625,
            marginTop: -173,
            backImg: wPage,
            backColor: "#fff",
          }}
          className="drawingTool"
        />
      </div>
      {getTColor()}
    </div>
  );
}

export default LetterFormPractice;
