import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import "./canvasStyle.css";

function Test(props) {
  var canvas = null;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var activeTool = 0;
  var rect, origX, origY;
  var isDown = false;
  var boxColor = "rgba(0,0,255,0.5)";
  var paintOptions = {
    color: "#0000ff",
    width: 12,
  };
  console.log(props, props.bgImg);
  const [can, setCan] = useState(null);

  var canStyle = {
    border: "1px solid #333",
  };

  var canBackS = {
    backgroundSize: "contain",
  };

  useEffect(() => {
    init();
  }, []);

  function init() {
    canvas = new fabric.Canvas("c", { selection: false });

    width = props.canprops.width;
    height = props.canprops.height;
    canvas.setDimensions({ width: width, height: height });

    setCan({ can: canvas });

    // console.log(props.canprops, can);
  }

  function ccd() {
    //console.log(can.can, " *-*-*-*")
    can.can.isDrawingMode = true;
    can.can.freeDrawingBrush.color = paintOptions.color;
    can.can.freeDrawingBrush.width = paintOptions.width;

    can.can.on("mouse:down", function (o) {
      if (activeTool != 1) return;
      isDown = true;
      var pointer = can.can.getPointer(o.e);
      origX = pointer.x;
      origY = pointer.y;
      var pointer = can.can.getPointer(o.e);
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: "left",
        originY: "top",
        width: pointer.x - origX,
        height: pointer.y - origY,
        angle: 0,
        fill: boxColor,
        transparentCorners: true,
      });
      can.can.add(rect);
    });

    can.can.on("mouse:move", function (o) {
      if (!isDown) return;
      console.log(isDown, " mouse move");
      if (activeTool == 1) {
        var pointer = can.can.getPointer(o.e);

        if (origX > pointer.x) {
          rect.set({ left: Math.abs(pointer.x) });
        }
        if (origY > pointer.y) {
          rect.set({ top: Math.abs(pointer.y) });
        }

        rect.set({ width: Math.abs(origX - pointer.x) });
        rect.set({ height: Math.abs(origY - pointer.y) });

        can.can.renderAll();
      }
    });

    can.can.on("mouse:up", function (o) {
      isDown = false;

      if (activeTool == 2) {
        var currentItem = can.can._objects.length - 1;
        if (can.can.item(currentItem).selectable == true)
          can.can.item(currentItem).selectable = false;

        can.can.renderAll();
      }
    });
  }

  function removeAll() {
    can.can.clear();
    can.can.renderAll();
  }

  return (
    <div
      className="parentCont"
      style={{
        width: props.canprops.width + "px",
        marginLeft: props.canprops.marginLeft,
        marginTop: props.canprops.marginTop,
      }}
    >
      <div
        id="canBack"
        style={{ backgroundImage: "url("+props.bgImg+")", backgroundSize: "cover" }}
      >
        <canvas id="c"></canvas>
      </div>

      <div className="btnControl">
        <button className="buttons" onClick={ccd}></button>
        <button className="buttons" onClick={removeAll}>
          {" "}
        </button>
      </div>
    </div>
  );
}

const memoTest = React.memo(Test);
export default memoTest;
