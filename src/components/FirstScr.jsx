import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./cover.css";
import logo1 from "../images/logo-1.png";
import playBtn from "../images/play-btn.png";

class FirstScr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subToc: false,
    };
  }

  fetchContent = () => {
    return (
      this.props.state.subList &&
      this.props.state.subList.map((cur) => (
        <NavLink
          to={{
            pathname: "/precursive",
            name: cur.name,
            updateActiveTab: this.props.updateActiveTab,
          }}
        >
        <div className="btn-wrappper">
          <a className="chaper-name">{cur.name}</a>
          <a className="animated main-menu-btn btn-icon blue-btn" onClick={(e) => this.setToState(e)}>
            <img alt="" src={playBtn} />
          </a>
          <div className="small-btn-wrap"></div>
        </div>
        </NavLink>
      ))
    );

    // to activate the links of right side
    {
      /* <NavLink
          to={{
            pathname: "/precursive",
            name: cur.name,
            updateActiveTab: this.props.updateActiveTab,
          }}
        >
          <div className="chaper-name small">
            Cursive {cur.name}
            <span className="btn-icon small oragnge-btn">
              <img alt="" src={playBtn} />
            </span>
          </div>
        </NavLink> */
    }
  };

  setToState = (e) => {
    /* try {
      document.getElementsByClassName("selected-topic")[0]
        .classList.remove("selected-topic");
    } catch (err) {}
    e.currentTarget.parentNode.children[0].classList.add("selected-topic"); */

    this.setState({ subToc: true });
  };

  render() {
    return (
      <div className="cover-base">
        <div className="cover-logo">
          <img alt="" src={logo1} />
        </div>
        <div className="toc-list">
          <div className="toc-cont">
            <div className="lftToc">
              {this.props.state.nameList &&
                this.props.state.nameList.map((curVal) => (
                  <NavLink
                    to={{
                      pathname: "/precursive",
                      name: curVal.name,
                      updateActiveTab: this.props.updateActiveTab,
                    }}
                  >
                    <div className="btn-wrappper">
                      <a className="chaper-name">{curVal.name}</a>
                      <a className="animated main-menu-btn btn-icon blue-btn" onClick={(e) => this.setToState(e)}>
                        <img alt="" src={playBtn} />
                      </a>
                      <div className="small-btn-wrap"></div>
                    </div>
                  </NavLink>
                ))}
            </div>
            <div className="subToc">{this.fetchContent() /* this.state.subToc ? this.fetchContent() : "" */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstScr;
