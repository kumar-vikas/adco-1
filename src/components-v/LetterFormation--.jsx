import { useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";
import penIcon from "../images/pencil-621.png";
import vidIcon538 from "../images/vidIcon-538.png";
import { NavLink } from "react-router-dom";
import { MyConsumer } from "./context";

function LetterFormation(props) {
  const [pattern, speed] = props.location.path ? props.location.path.split("$") : ["pat-1", ""];
  var func = null;
  var obj = {
    "pat-1$slow": "assets/Pre-Writing/Copy of Bubble_page 4_slow.mp4",
    "pat-1$fast": "assets/Pre-Writing/Copy of Bubble_page 4_normal.mp4",
    "pat-2$slow": "assets/Pre-Writing/Copy of Chimney_page 6_slow.mp4",
    "pat-2$fast": "assets/Pre-Writing/Copy of Chimney_page 6_normal.mp4",
    "pat-3$slow": "assets/Pre-Writing/Copy of Bee_slow.mp4",
    "pat-3$fast": "assets/Pre-Writing/Copy of Bee_Normal.mp4",
    "pat-4$slow": "assets/Pre-Writing/Copy of Snail page_12 slow.mp4",
    "pat-4$fast": "assets/Pre-Writing/Copy of Snail page_12_normal.mp4",
    "pat-5$slow": "assets/Pre-Writing/Copy of Butterfly_slow.mp4",
    "pat-5$fast": "assets/Pre-Writing/Copy of Butterfly_normal.mp4",
  };

  var letterArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  useEffect(() => {
    props.setVisibility(props.history);
  }, []);

  function fetchVideo(e) {
    var cc = e.target;
    let cPath = pattern + "$" + cc.innerHTML.toLowerCase();

    var vid = document.getElementById("vidPlayer-pre");
    vid.src = obj[cPath];
    vid.play();
  }

  function abc() {
    return (
      <MyConsumer>
        {(a) => {
          func = a.func;
          return <p className="activity-name">Pre-Cursive {a.activeTab}</p>;
        }}
      </MyConsumer>
    );
  }

  return (
    <div className="activity-base" id="act-base-letterForm">
      {/* <img alt="" src={pencilImg} className="pencile-image"/> */}
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn">
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-name-block">
            {abc()}
            {/* <p className="activity-name">Pre-Cursive</p> */}
          </div>
        </div>

        <div className="letterFormText">Letter Formation - Lower Case</div>
        <div id="letterCont">
          {letterArr.map((cur) => (
            <NavLink key={cur} to={{ pathname: "/LetterFormPractice", curLetter: cur }}>
              <button className="letterBtn">
                {cur}
                <img src={penIcon} alt="" />
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LetterFormation;
