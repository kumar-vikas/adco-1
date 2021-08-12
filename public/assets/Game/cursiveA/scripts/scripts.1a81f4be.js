(window.stageWidth = 1280),
  (window.stageHeight = 960),
  (window.zoomFactor = 1),
  (window.leftPosition = 0),
  angular.module("playerApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "playerApp.directives.OnResize",
    "playerApp.directives.StopScreenMove",
  ]),
  angular.module("playerApp").config([
    "$routeProvider",
    function (a) {
      a.when("/Pelmanism", {
        templateUrl: "views/matchingPairs.html",
        controller: "matchingPairsController",
        controllerAs: "matchingPairsCtrl",
        resolve: {
          myIndex: function () {
            return 0;
          },
        },
      }).otherwise({ redirectTo: "/Pelmanism" });
    },
  ]),
  angular.module("playerApp.directives.OnResize", []).directive("onResize", [
    "$window",
    function (a) {
      return function (b) {
        var c = angular.element(a);
        (b.scaleStage = function () {
          var b = { x: 1, y: 1 };
          (b.x = a.innerWidth / window.stageWidth),
            (b.y = a.innerHeight / window.stageHeight),
            b.x < b.y
              ? ((window.zoomFactor = b.x), (b = b.x + ", " + b.x))
              : ((window.zoomFactor = b.y), (b = b.y + ", " + b.y));
          var c = Number(b.split(",")[0]) * window.stageWidth,
            d = (a.innerWidth - c) / 2;
          return (window.leftPosition = d), { scale: b, leftPos: d };
        }),
          b.$watch(
            "scaleStage()",
            function (a) {
              var c = a.scale,
                d = a.leftPos,
                e = {};
              (e = {
                "-webkit-transform": "scale(" + c + ")",
                "-moz-transform": "scale(" + c + ")",
                "-ms-transform": "scale(" + c + ")",
                "-o-transform": "scale(" + c + ")",
                "transform": "scale(" + c + ")",
                "-webkit-transform-origin": "left top",
                "-moz-transform-origin": "left top",
                "-ms-transform-origin": "left top",
                "-o-transform-origin": "left top",
                "transform-origin": "left top",
                "position": "absolute",
                "top": "0px",
                "left": d + "px",
              }),
                (b.style = function () {
                  return e;
                });
            },
            !0
          ),
          c.bind("resize", function () {
            b.$apply();
          });
      };
    },
  ]),
  angular
    .module("playerApp.directives.StopScreenMove", [])
    .directive("stopScreenMove", function () {
      return {
        restrict: "A",
        scope: !0,
        link: function (a, b) {
          b.on("touchmove", function (a) {
            a.preventDefault();
          });
        },
      };
    }),
  angular.module("playerApp").directive("uiEvent", [
    "$parse",
    function (a) {
      return function (b, c, d) {
        var e = b.$eval(d.uiEvent);
        angular.forEach(e, function (d, e) {
          var f = a(d);
          c.bind(e, function (a) {
            var c = Array.prototype.slice.call(arguments);
            (c = c.splice(1)),
              f(b, { $event: a, $params: c }),
              b.$$phase || b.$apply();
          });
        });
      };
    },
  ]),
  angular
    .module("playerApp.directives.writeinContentParser", [])
    .directive("writeinContentParser", [
      "$compile",
      function (a) {
        return {
          restrict: "A",
          scope: !0,
          link: function (b, c, d) {
            var e = d.content,
              f = d.index,
              g = d.answer.split("||"),
              h = d.width,
              i = e.split("[ds]").join("<div>");
            i = i.split("[de]").join("</div>");
            for (var j = g.length, k = 0; j > k; k++) {
              var l = "";
              (l += "<div class='spacer'></div>"),
                (l +=
                  "<input type='text' id='q_" +
                  f +
                  "' data-answer='" +
                  g[k] +
                  "' style='width:" +
                  h +
                  "px'>"),
                (l += "<div class='spacer'></div>"),
                (i = i.replace("[input]", l));
            }
            var m = a(i),
              n = m(b);
            c.append(n);
          },
        };
      },
    ]),
  angular
    .module("playerApp.directives.HighlightContentParser", [])
    .directive("highlightContentParser", [
      "$compile",
      function (a) {
        return {
          restrict: "A",
          scope: !0,
          link: function (b, c, d) {
            var e = d.content,
              f = (d.index, d.answer, ""),
              g = "<div class='toggle-group'>",
              h =
                "<div class='highlight-element highlight-correct' ng-click='highlight.highlightDiv($event, \"c\")' data-toggle='true'>",
              i =
                "<div class='highlight-element highlight-incorrect' ng-click='highlight.highlightDiv($event, \"i\")' data-toggle='true'>",
              j = "<div>",
              k = "</div>";
            (f = e.split("[HL-T-C-S]").join(h)),
              (f = f.split("[HL-T-C-E]").join(k)),
              (f = f.split("[HL-T-S]").join(i)),
              (f = f.split("[HL-T-E]").join(k)),
              (f = f.split("[HL-GRP-S]").join(g)),
              (f = f.split("[HL-GRP-E]").join(k)),
              (f = j + f + k);
            var l = a(f),
              m = l(b);
            c.append(m);
          },
        };
      },
    ]),
  angular
    .module("playerApp.directives.karaokeContentParser", [])
    .directive("karaokeContentParser", [
      "$compile",
      function (a) {
        return {
          restrict: "A",
          scope: !0,
          link: function (b, c, d) {
            for (
              var e = d.content.split(" "),
                f = d.time.split("||"),
                g = "",
                h = e.length,
                i = 0;
              h > i;
              i++
            )
              g +=
                "<span class='lyricsWord' ng-class='((karaoke.currentTime >= " +
                f[i] +
                ') ? "highlight" : "")\'>' +
                e[i] +
                " </span>";
            var j = a(g),
              k = j(b);
            c.append(k);
          },
        };
      },
    ]),
  angular
    .module("playerApp.directives.Dnddirective", [])
    .directive("dnddirective", function () {
      return {
        template: "<div></div>",
        restrict: "E",
        link: function (a, b, c) {
          b.text("this is the dnddirective directive");
        },
      };
    })
    .service("ngDraggable", [
      function () {
        var a = this;
        a.inputEvent = function (a) {
          return angular.isDefined(a.touches)
            ? a.touches[0]
            : angular.isDefined(a.originalEvent) &&
              angular.isDefined(a.originalEvent.touches)
            ? a.originalEvent.touches[0]
            : a;
        };
      },
    ])
    .directive("ngDrag", [
      "$rootScope",
      "$parse",
      "$document",
      "$window",
      "ngDraggable",
      function (a, b, c, d, e) {
        return {
          restrict: "A",
          link: function (f, g, h) {
            f.value = h.ngDrag;
            var i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q = !1,
              r =
                "ontouchstart" in window ||
                (window.DocumentTouch && document instanceof DocumentTouch),
              s = "touchstart mousedown",
              t = "touchmove mousemove",
              u = "touchend mouseup",
              v = f.$id,
              w = null,
              x = null,
              y = !1,
              z = null,
              A = b(h.ngDragStart) || null,
              B = b(h.ngDragStop) || null,
              C = b(h.ngDragSuccess) || null,
              D = b(h.ngDragRelease) || null,
              E = angular.isDefined(h.allowTransform)
                ? f.$eval(h.allowTransform)
                : !0,
              F = b(h.ngDragData),
              G = angular.noop,
              H = function () {
                if ((g.attr("draggable", "false"), g[0].querySelectorAll))
                  var a = angular.element(
                    g[0].querySelectorAll("[ng-drag-handle]")
                  );
                else var a = g.find("[ng-drag-handle]");
                a.length && (p = a), I(!0);
              },
              I = function (a) {
                a &&
                  (f.$on("$destroy", J),
                  f.$watch(h.ngDrag, K),
                  f.$watch(h.ngCenterAnchor, L),
                  p ? p.on(s, N) : g.on(s, N),
                  r ||
                    "img" !== g[0].nodeName.toLowerCase() ||
                    g.on("mousedown", function () {
                      return !1;
                    }));
              },
              J = function (a) {
                I(!1);
              },
              K = function (a, b) {
                y = a;
              },
              L = function (a, b) {
                angular.isDefined(a) && (q = a || "true");
              },
              M = function (a) {
                return angular.isDefined(
                  angular.element(a.target).attr("ng-cancel-drag")
                );
              },
              N = function (a) {
                y &&
                  (M(a) ||
                    (("mousedown" !== a.type || 0 === a.button) &&
                      (r
                        ? (O(),
                          (z = setTimeout(function () {
                            O(), P(a);
                          }, 100)),
                          c.on(t, O),
                          c.on(u, O))
                        : P(a))));
              },
              O = function () {
                clearTimeout(z), c.off(t, O), c.off(u, O);
              },
              P = function (b) {
                y &&
                  (b.preventDefault(),
                  (i = g[0].getBoundingClientRect()),
                  (x = E
                    ? i
                    : {
                        left: document.body.scrollLeft,
                        top: document.body.scrollTop,
                      }),
                  (g.centerX = g[0].offsetWidth / 2),
                  (g.centerY = g[0].offsetHeight / 2),
                  (j = e.inputEvent(b).pageX),
                  (k = e.inputEvent(b).pageY),
                  (n = j - i.left),
                  (o = k - i.top),
                  q
                    ? ((l = j - g.centerX - d.pageXOffset),
                      (m = k - g.centerY - d.pageYOffset))
                    : ((l = j - n - d.pageXOffset),
                      (m = k - o - d.pageYOffset)),
                  c.on(t, Q),
                  c.on(u, R),
                  (G = a.$on("draggable:_triggerHandlerMove", function (a, b) {
                    Q(b);
                  })));
              },
              Q = function (b) {
                y &&
                  (b.preventDefault(),
                  g.hasClass("dragging") ||
                    ((w = F(f)),
                    g.addClass("dragging"),
                    a.$broadcast("draggable:start", {
                      x: j,
                      y: k,
                      tx: l,
                      ty: m,
                      event: b,
                      element: g,
                      data: w,
                    }),
                    A &&
                      f.$apply(function () {
                        A(f, { $data: w, $event: b });
                      })),
                  (j = e.inputEvent(b).pageX),
                  (k = e.inputEvent(b).pageY),
                  q
                    ? ((l = j - g.centerX - x.left),
                      (m = k - g.centerY - x.top))
                    : ((l = j - n - x.left), (m = k - o - x.top)),
                  T(l, m),
                  a.$broadcast("draggable:move", {
                    x: j,
                    y: k,
                    tx: l,
                    ty: m,
                    event: b,
                    element: g,
                    data: w,
                    uid: v,
                    dragOffset: x,
                  }));
              },
              R = function (b) {
                y &&
                  (b.preventDefault(),
                  a.$broadcast("draggable:end", {
                    x: j,
                    y: k,
                    tx: l,
                    ty: m,
                    event: b,
                    element: g,
                    data: w,
                    callback: S,
                    uid: v,
                  }),
                  g.removeClass("dragging"),
                  g.parent().find(".drag-enter").removeClass("drag-enter"),
                  c.off(t, Q),
                  c.off(u, R),
                  B &&
                    f.$apply(function () {
                      B(f, { $data: w, $event: b });
                    }),
                  G(),
                  D &&
                    f.$apply(function () {
                      D(f, { $data: w, $event: b });
                    }));
              },
              S = function (a) {
                C &&
                  f.$apply(function () {
                    C(f, { $data: w, $event: a });
                  });
              },
              T = function (a, b) {
                (a /= zoomFactor),
                  (b /= zoomFactor),
                  E
                    ? g.css({
                        "transform":
                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " +
                          a +
                          ", " +
                          b +
                          ", 0, 1)",
                        "z-index": 99999,
                        "-webkit-transform":
                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " +
                          a +
                          ", " +
                          b +
                          ", 0, 1)",
                        "-ms-transform":
                          "matrix(1, 0, 0, 1, " + a + ", " + b + ")",
                      })
                    : g.css({
                        left: a + "px",
                        top: b + "px",
                        position: "fixed",
                      });
              };
            H();
          },
        };
      },
    ])
    .directive("ngDrop", [
      "$parse",
      "$timeout",
      "$window",
      "$document",
      "ngDraggable",
      function (a, b, c, d, e) {
        return {
          restrict: "A",
          link: function (c, e, f) {
            (c.value = f.ngDrop), (c.isTouching = !1);
            var g = null,
              h = c.$id,
              i = !1,
              j = a(f.ngDropSuccess),
              k = a(f.ngDragStart),
              l = a(f.ngDragStop),
              m = a(f.ngDragMove),
              n = function () {
                o(!0);
              },
              o = function (a) {
                a &&
                  (c.$watch(f.ngDrop, q),
                  c.$on("$destroy", p),
                  c.$on("draggable:start", r),
                  c.$on("draggable:move", s),
                  c.$on("draggable:end", t));
              },
              p = function (a) {
                o(!1);
              },
              q = function (a, b) {
                i = a;
              },
              r = function (a, d) {
                i &&
                  (u(d.x, d.y, d.element),
                  f.ngDragStart &&
                    b(function () {
                      k(c, { $data: d.data, $event: d });
                    }));
              },
              s = function (a, d) {
                i &&
                  (u(d.x, d.y, d.element),
                  f.ngDragMove &&
                    b(function () {
                      m(c, { $data: d.data, $event: d });
                    }));
              },
              t = function (a, d) {
                return i && h !== d.uid
                  ? (u(d.x, d.y, d.element) &&
                      (d.callback && d.callback(d),
                      f.ngDropSuccess &&
                        b(function () {
                          j(c, {
                            $data: d.data,
                            $event: d,
                            $targetID: c.dropID,
                            $target: c.$eval(c.value),
                          });
                        })),
                    f.ngDragStop &&
                      b(function () {
                        l(c, { $data: d.data, $event: d });
                      }),
                    void v(!1, d.element))
                  : void v(!1, d.element);
              },
              u = function (a, b, d) {
                var f = w(a, b);
                return (c.isTouching = f), f && (g = e), v(f, d), f;
              },
              v = function (a, b) {
                a
                  ? (e.addClass("drag-enter"), b.addClass("drag-over"))
                  : g === e &&
                    ((g = null),
                    e.removeClass("drag-enter"),
                    b.removeClass("drag-over"));
              },
              w = function (a, b) {
                var c = e[0].getBoundingClientRect();
                return (
                  (a -= d[0].body.scrollLeft + d[0].documentElement.scrollLeft),
                  (b -= d[0].body.scrollTop + d[0].documentElement.scrollTop),
                  a >= c.left && a <= c.right && b <= c.bottom && b >= c.top
                );
              };
            n();
          },
        };
      },
    ]),
  angular.module("playerApp").controller("dataController", [
    "$sce",
    "$rootScope",
    function (a, b) {
      var c = this;
      (c.getUnitBG = function () {
        return a.trustAsResourceUrl(c.bgContent);
      }),
        (c.getActivityData = function (a) {
          return c.activities[a];
        }),
        (c.playerParameters = function (a) {
          b.$broadcast("setPlayerParameters", {
            totalActivities: c.activities.length,
            showPopupControls: c.activities[a].controls.isPopup,
            showExtraControls: c.activities[a].controls.isExtra,
            showVideoControls: c.activities[a].controls.isVideoAudio,
            showTextControls: c.activities[a].controls.isShowText,
            showSubmitControls: c.activities[a].controls.isSubmit,
            rubricNumber: c.activities[a].rubric.number,
            rubricText: c.activities[a].rubric.title,
            popUpType: c.activities[a].popup.type,
            popUpHeader: c.activities[a].popup.header,
            popUpContent: c.activities[a].popup.content,
          });
        }),
        b.$on("getActivityData", function (a, d) {
          b.$broadcast("setActivityData", {
            data: c.getActivityData(d.activityIndex),
          });
        }),
        b.$on("changeCurrentActivity", function (a, b) {
          (window.location = "#/" + c.activities[b.activityIndex].id),
            c.playerParameters(b.activityIndex);
        }),
        b.$on("launchExtraActivity", function (a, b) {
          window.location =
            "#/" + c.activities[c.activities[b.activityIndex].extra].id;
        }),
        b.$on("getPlayerParameters", function (a, b) {
          c.playerParameters(b.activityIndex);
        }),
        (c.theme = "#ff0000"),
        (c.bgType = "video"),
        (c.bgContent = "videos/unitBG.mp4"),
        (c.activities = [
          {
            id: "matchingPairs",
            type: "matchingPairs",
            controls: {
              isPopup: !1,
              isExtra: !1,
              isVideoAudio: !1,
              isShowText: !1,
              isSubmit: !1,
            },
            rubric: { number: 1, title: "Play a game." },
            popup: { type: "", header: "", content: "" },
            extra: 0,
            content: {
              fI: "images/MatchingPairs/bg.5b6b30a9.png",
              arrTiles: [
                {
                  id: "tile_1",
                  pair_id: "tile_11",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "",
                    image: "images/MatchingPairs/a-cursive.png",
                  },
                },
                {
                  id: "tile_2",
                  pair_id: "tile_12",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "",
                    image: "images/MatchingPairs/o-cursive.png",
                  },
                },
                {
                  id: "tile_3",
                  pair_id: "tile_10",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "",
                    image: "images/MatchingPairs/i-cursive.png",
                  },
                },
                {
                  id: "tile_4",
                  pair_id: "tile_16",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "",
                    image: "images/MatchingPairs/l-cursive.png",
                  },
                },
                {
                  id: "tile_5",
                  pair_id: "tile_14",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "",
                    image: "images/MatchingPairs/g-cursive.png",
                  },
                },
                {
                  id: "tile_6",
                  pair_id: "tile_13",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "",
                    image: "images/MatchingPairs/k-cursive.png",
                  },
                },
                {
                  id: "tile_7",
                  pair_id: "tile_15",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "",
                    image: "images/MatchingPairs/c-cursive.png",
                  },
                },
                {
                  id: "tile_8",
                  pair_id: "tile_9",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "",
                    image: "images/MatchingPairs/j-cursive.png",
                  },
                },
                {
                  id: "tile_9",
                  pair_id: "tile_8",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "images/MatchingPairs/j-cursive.png",
                    image: "",
                  },
                },
                {
                  id: "tile_10",
                  pair_id: "tile_3",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "images/MatchingPairs/i-cursive.png",
                    image: "",
                  },
                },
                {
                  id: "tile_11",
                  pair_id: "tile_1",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "images/MatchingPairs/a-cursive.png",
                    image: "",
                  },
                },
                {
                  id: "tile_12",
                  pair_id: "tile_2",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "images/MatchingPairs/o-cursive.png",
                    image: "",
                  },
                },
                {
                  id: "tile_13",
                  pair_id: "tile_6",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "images/MatchingPairs/k-cursive.png",
                    image: "",
                  },
                },
                {
                  id: "tile_14",
                  pair_id: "tile_5",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "images/MatchingPairs/g-cursive.png",
                    image: "",
                  },
                },
                {
                  id: "tile_15",
                  pair_id: "tile_7",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "images/MatchingPairs/c-cursive.png",
                    image: "",
                  },
                },
                {
                  id: "tile_16",
                  pair_id: "tile_4",
                  front: {
                    type: "image",
                    value: "images/MatchingPairs/tile.070a7881.png",
                  },
                  back: {
                    type: "image",
                    value: "images/MatchingPairs/l-cursive.png",
                    image: "",
                  },
                },
              ],
            },
          },
        ]),
        (c.extraActivities = []);
    },
  ]),
  angular.module("playerApp").controller("playerController", [
    "$rootScope",
    function (a) {
      var b = this;
      (b.showPopup = !1),
        (b.showVideoControls = !1),
        (b.showTextControls = !1),
        (b.showPopupControls = !1),
        (b.showExtraControls = !1),
        (b.showSubmitControls = !1),
        (b.showNavigationControls = !1),
        (b.rubricNumber = 0),
        (b.rubricText = ""),
        (b.popUpType = ""),
        (b.popUpHeader = ""),
        (b.popUpContent = ""),
        (b.isGame = !0),
        (b.isVideoPlaying = !1),
        (b.isAudioPlaying = !1),
        (b.isShowText = !0),
        (b.currentActivityIndex = 0),
        (b.totalActivities = 0),
        (b.showActivity = !1),
        (b.onUnitBGEnded = function () {
          b.showActivity = !0;
        }),
        (b.playPauseVideo = function () {
          (b.isVideoPlaying = !b.isVideoPlaying),
            a.$broadcast("playPauseVideo", { isPlaying: b.isVideoPlaying });
        }),
        (b.muteUnmuteAudio = function () {
          (b.isAudioPlaying = !b.isAudioPlaying),
            a.$broadcast("muteUnmuteAudio", { isPlaying: b.isAudioPlaying });
        }),
        (b.showHideText = function () {
          (b.isShowText = !b.isShowText),
            a.$broadcast("showHideText", { isShowing: b.isShowText });
        }),
        (b.displayPopup = function () {
          b.showPopup = !0;
        }),
        (b.closePopup = function () {
          b.showPopup = !1;
        }),
        (b.launchExtraActivity = function () {
          a.$broadcast("launchExtraActivity", {
            activityIndex: b.currentActivityIndex,
          });
        }),
        (b.checkAnswer = function () {
          a.$broadcast("checkAnswer", {});
        }),
        (b.showAnswer = function () {
          a.$broadcast("showAnswer", {});
        }),
        (b.resetAnswer = function () {
          a.$broadcast("resetAnswer", {});
        }),
        (b.gotoNextActivity = function (c) {
          var d = angular.element(c.currentTarget);
          d.hasClass("disable") ||
            ((b.currentActivityIndex += 1),
            a.$broadcast("changeCurrentActivity", {
              activityIndex: b.currentActivityIndex,
            }));
        }),
        (b.gotoPrevActivity = function (c) {
          var d = angular.element(c.currentTarget);
          d.hasClass("disable") ||
            ((b.currentActivityIndex -= 1),
            a.$broadcast("changeCurrentActivity", {
              activityIndex: b.currentActivityIndex,
            }));
        }),
        a.$on("setPlayerParameters", function (a, c) {
          (b.totalActivities = c.totalActivities),
            (b.showVideoControls = c.showVideoControls),
            (b.showTextControls = c.showTextControls),
            (b.showPopupControls = c.showPopupControls),
            (b.showExtraControls = c.showExtraControls),
            (b.showSubmitControls = c.showSubmitControls),
            (b.rubricNumber = c.rubricNumber),
            (b.rubricText = c.rubricText),
            (b.popUpType = c.popUpType),
            (b.popUpHeader = c.popUpHeader),
            (b.popUpContent = c.popUpContent);
        }),
        angular.element().ready(function () {
          $("#bg-sound")[0].play();
          angular.element(document.getElementById("loader")).remove(),
            a.$broadcast("getPlayerParameters", {
              activityIndex: b.currentActivityIndex,
            });
        });
    },
  ]),
  angular.module("playerApp").controller("flatController", [
    "$sce",
    "$rootScope",
    "myIndex",
    function (a, b, c) {
      var d = this;
      (d.data = {}),
        (d.getQueAudio = function () {
          return a.trustAsResourceUrl(d.data.content.aud);
        }),
        (d.playQueAudio = function () {
          var a = angular.element("#qAudFlat");
          a[0].play();
        }),
        b.$on("setActivityData", function (a, b) {
          d.data = b.data;
        }),
        b.$broadcast("getActivityData", { activityIndex: c });
    },
  ]),
  angular.module("playerApp").controller("writeinController", [
    "$rootScope",
    "myIndex",
    function (a, b) {
      var c = this;
      (c.data = {}),
        (c.playQuestion = function () {}),
        (c.checkAnswer = function () {
          for (
            var a = angular.element("input"), b = a.length, c = 0;
            b > c;
            c++
          ) {
            var d = angular.element(a[c]),
              e = angular.element(a[c]).attr("data-answer"),
              f = angular.element(a[c]).val(),
              g = "incorrect";
            e == f && (g = "correct"),
              d.addClass(g),
              angular.element(d[0].nextSibling).addClass(g);
          }
        }),
        (c.showAnswer = function () {
          for (
            var a = angular.element("input"), b = a.length, c = 0;
            b > c;
            c++
          ) {
            var d = angular.element(a[c]).attr("data-answer");
            angular.element(a[c]).val(d);
          }
        }),
        (c.resetAnswer = function () {
          for (
            var a = angular.element("input"), b = a.length, c = 0;
            b > c;
            c++
          ) {
            var d = angular.element(a[c]);
            d.hasClass("correct") &&
              (d.removeClass("correct"),
              angular.element(d[0].nextSibling).removeClass("correct")),
              d.hasClass("incorrect") &&
                (d.removeClass("incorrect"),
                angular.element(d[0].nextSibling).removeClass("incorrect")),
              angular.element(a[c]).val("");
          }
        }),
        a.$on("checkAnswer", function (a, b) {
          c.checkAnswer();
        }),
        a.$on("showAnswer", function (a, b) {
          c.showAnswer();
        }),
        a.$on("resetAnswer", function (a, b) {
          c.resetAnswer();
        }),
        a.$on("setActivityData", function (a, b) {
          c.data = b.data;
        }),
        a.$broadcast("getActivityData", { activityIndex: b });
    },
  ]),
  angular.module("playerApp").controller("highlightController", [
    "$rootScope",
    "myIndex",
    function (a, b) {
      var c = this;
      (c.showPopup = !1),
        (c.showVideoControls = !1),
        (c.showTextControls = !1),
        (c.showPopupControls = !0),
        (c.showExtraControls = !1),
        (c.highlightDiv = function (a, b) {
          var c = angular.element(a.currentTarget),
            d = c[0].parentNode,
            e =
              "true" == angular.element(a.currentTarget).attr("data-toggle")
                ? !0
                : !1;
          e === !0 &&
            (angular.element(d).removeClass("correct"),
            angular.element(d).removeClass("incorrect"),
            "c" === b
              ? angular.element(d).addClass("correct")
              : angular.element(d).addClass("incorrect"),
            angular.element(d.children).removeClass("highlightNormal")),
            c.addClass("highlightNormal");
        }),
        (c.checkAnswer = function () {
          for (
            var a = angular.element(".highlight-element"), b = a.length, c = 0;
            b > c;
            c++
          ) {
            var d = angular.element(a[c]);
            d.hasClass("highlight-correct") &&
              d.hasClass("highlightNormal") &&
              d.removeClass("highlightNormal").addClass("highlightCorrect"),
              d.hasClass("highlight-incorrect") &&
                d.hasClass("highlightNormal") &&
                d.removeClass("highlightNormal").addClass("highlightIncorrect");
          }
        }),
        (c.showAnswer = function () {
          c.resetAnswer();
          var a = angular.element(".highlight-correct");
          a.addClass("highlightNormal");
        }),
        (c.resetAnswer = function () {
          var a = angular.element(".highlight-element");
          a.removeClass("highlightNormal")
            .removeClass("highlightIncorrect")
            .removeClass("highlightCorrect");
          var b = angular.element(".toggle-group");
          b.removeClass("correct").removeClass("incorrect");
        }),
        a.$on("checkAnswer", function (a, b) {
          c.checkAnswer();
        }),
        a.$on("showAnswer", function (a, b) {
          c.showAnswer();
        }),
        a.$on("resetAnswer", function (a, b) {
          c.resetAnswer();
        }),
        a.$on("setActivityData", function (a, b) {
          c.data = b.data;
        }),
        a.$broadcast("getActivityData", { activityIndex: b });
    },
  ]),
  angular.module("playerApp").controller("audioHighlightController", [
    "$sce",
    "$rootScope",
    "myIndex",
    function (a, b, c) {
      var d = this;
      (d.data = {}),
        (d.currentScreen = 0),
        (d.currentTime = 0),
        (d.onTimeUpdate = function () {
          var a = angular.element("#qAudAudHigh");
          (d.currentTime = a[0].currentTime),
            d.data.content.screens[d.currentScreen].time.end < d.currentTime &&
              (d.currentScreen += 1);
        }),
        (d.getQueAudio = function () {
          return a.trustAsResourceUrl(d.data.content.aud);
        }),
        (d.playQueAudio = function () {
          d.reset();
          var a = angular.element("#qAudAudHigh");
          try {
            a.currentTime = 0;
          } catch (b) {}
          a[0].play();
        }),
        (d.reset = function () {
          (d.currentTime = 0), (d.currentScreen = 0);
        }),
        b.$on("setActivityData", function (a, b) {
          d.data = b.data;
        }),
        b.$broadcast("getActivityData", { activityIndex: c });
    },
  ]),
  angular.module("playerApp").controller("karaokeController", [
    "$sce",
    "$rootScope",
    "myIndex",
    function (a, b, c) {
      var d = this;
      (d.data = {}),
        (d.currentLine = 0),
        (d.currentTime = 0),
        (d.onTimeUpdate = function () {
          var a = angular.element("#qAudKaraoke");
          d.currentTime = a[0].currentTime;
          var b = d.data.content.lyrics[d.currentLine].time;
          b[b.length - 1] < d.currentTime &&
            ((d.currentLine += 1),
            d.currentLine >= d.data.content.lyrics.length &&
              (d.currentLine = d.data.content.lyrics.length - 1));
        }),
        (d.getQueAudio = function () {
          return a.trustAsResourceUrl(d.data.content.aud);
        }),
        (d.playQueAudio = function () {
          d.reset();
          var a = angular.element("#qAudKaraoke");
          try {
            a.currentTime = 0;
          } catch (b) {}
          a[0].play();
        }),
        (d.reset = function () {
          (d.currentTime = 0), (d.currentLine = 0);
        }),
        b.$on("setActivityData", function (a, b) {
          d.data = b.data;
        }),
        b.$broadcast("getActivityData", { activityIndex: c });
    },
  ]),
  angular.module("playerApp").controller("showHideController", [
    "$sce",
    "$rootScope",
    "myIndex",
    function (a, b, c) {
      var d = this;
      (d.data = {}),
        (d.showCallout = !0),
        b.$on("setActivityData", function (a, b) {
          d.data = b.data;
        }),
        b.$on("showHideText", function (a, b) {
          d.displayCallouts();
        }),
        (d.displayCallouts = function () {
          d.showCallout = !d.showCallout;
        }),
        b.$broadcast("getActivityData", { activityIndex: c });
    },
  ]),
  angular.module("playerApp").controller("dndCatController", [
    "$sce",
    "$rootScope",
    "myIndex",
    "$timeout",
    "$compile",
    function (a, b, c, d, e) {
      var f = this;
      (f.data = {}),
        (f.centerAnchor = !1),
        (f.draggableObjects = [
          {
            id: "drag0",
            dragClass: "drag0",
            num: "0",
            show: 1,
            txt: "a blue bag",
          },
          {
            id: "drag1",
            dragClass: "drag1",
            num: "1",
            show: 1,
            txt: "a board",
          },
          {
            id: "drag2",
            dragClass: "drag2",
            num: "2",
            show: 1,
            txt: "a yellow chair",
          },
          {
            id: "drag3",
            dragClass: "drag3",
            num: "3",
            show: 1,
            txt: "a green chair",
          },
          {
            id: "drag4",
            dragClass: "drag4",
            num: "4",
            show: 1,
            txt: "a piano",
          },
          {
            id: "drag5",
            dragClass: "drag5",
            num: "5",
            show: 1,
            txt: "a violin",
          },
          { id: "drag6", dragClass: "drag6", num: "6", show: 1, txt: "a desk" },
        ]),
        (f.droppableObjects = [
          { id: "drop0", num: ["0"] },
          { id: "drop1", num: ["2", "3", "6"] },
          { id: "drop2", num: ["4", "5"] },
          { id: "drop3", num: ["1"] },
        ]),
        (f.onDragRelease = function (a, b) {
          var c = f;
          d(function () {
            if (c.correct) return void (c.correct = !1);
            console.log(a);
            var b = angular.element(document.querySelector("#" + a.id));
            b.removeAttr("style");
          }, 10);
        }),
        (f.onDropComplete = function (a, b, c) {
          var d = c.slice(4, 6),
            g =
              (a.id.slice(4, 6),
              angular.element(document.querySelector("#" + c))),
            h = "",
            i = "";
          f.droppableObjects[d].num.indexOf(a.num) > -1 &&
            ((a.show = 0),
            (h = "<span class='" + a.dragClass + "'>" + a.txt + "</span>"),
            (i = e(h)(f)),
            g.append(i));
        }),
        (f.resetActivity = function () {}),
        b.$on("setActivityData", function (a, b) {
          f.data = b.data;
        }),
        b.$broadcast("getActivityData", { activityIndex: c });
    },
  ]),
  angular.module("playerApp").controller("matchingPairsController", [
    "$sce",
    "$rootScope",
    "myIndex",
    "$timeout",
    function (a, b, c, d) {
      var e = this;
      (e.data = {}),
        (e.totalPairs = 8),
        (e.totalCorrectAns = 0),
        (e.prevSelection = ""),
        (e.bIsActOn = !0),
        ($("#restart-btn").on("click", function(){
          e.resetGame();
        })),
        ($("#cancel-btn").on("click", function(){
          e.cancleHandler();
        })),
        (e.cancleHandler = function(){
          $("#msg-ovelay").addClass("hidden");
        }),

        (e.resetGame = function(){
          e.totalCorrectAns = 0;
          e.prevSelection = "";
          e.bIsActOn = !0;         
          for(var i=1;i<=e.totalPairs;i++){
            e.resetPair("tile_"+i, !0);
          }
          $("#msg-ovelay").addClass("hidden");
        }),
        (e.onTileClicked = function (a) {
          $("#flip-sound")[0].play();
          var b = a.currentTarget.id,
            c = angular.element(document.getElementById(b));
          if (!c.hasClass("flipped")) {
            c.addClass("flipped");
            var d = angular.element(
              document.getElementById("objDesk_" + b.split("_")[1])
            );
            d.addClass("deskAnim"),
              e.prevSelection ? e.checkAnswer(b) : (e.prevSelection = b);
          }
        }),
        (e.checkAnswer = function (a) {          
          e.bIsActOn = !1;
          var b = angular.element(document.getElementById(a)),
            c = b.attr("data-pair_id");
          e.prevSelection === c
            ? (e.totalCorrectAns++,
              e.totalCorrectAns === e.totalPairs &&
                ((e.isCorrect = !0), (e.bIsActOn = !1)),             
              $("#right-sound")[0].play(),
              d(function () {
                //console.log("Right done....");
                e.removePair(a, !0);
                if(e.totalCorrectAns === e.totalPairs){
                  $("#msg-ovelay").removeClass("hidden");
                }
              }, 2e3))
            : //console.log("WRONG"),
              ($("#wrong-sound")[0].play(),
              d(function () {
                //console.log("wrong done....");
                e.removePair(a, !1);
              }, 2e3));
        }),
        (e.removePair = function (a, b) {          
          var c = angular.element(document.getElementById(a)),
            d = angular.element(document.getElementById(e.prevSelection)),
            f = angular.element(
              document.getElementById("objDesk_" + a.split("_")[1])
            ),
            g = angular.element(
              document.getElementById(
                "objDesk_" + e.prevSelection.split("_")[1]
              )
            );
          (e.bIsActOn = !0),
            (e.prevSelection = ""),
            b
              ? (c.css("opacity", ".4"), d.css("opacity", ".4"))
              : (c.removeClass("flipped"),
                d.removeClass("flipped"),
                f.removeClass("deskAnim"),
                g.removeClass("deskAnim"));
        }),

        (e.resetPair = function (a) {          
          var element = document.getElementById(a),
          c = angular.element(element),
            d = angular.element(document.getElementById(element.getAttribute("data-pair_id"))),
            f = angular.element(
              document.getElementById("objDesk_" + a.split("_")[1])
            ),
            g = angular.element(
              document.getElementById(
                "objDesk_" + element.getAttribute("data-pair_id").split("_")[1]
              )
            );
            (c.css("opacity", "1"), d.css("opacity", "1")),
            (c.removeClass("flipped"),
            d.removeClass("flipped"),
            f.removeClass("deskAnim"),
            g.removeClass("deskAnim"));
        }),
        
        b.$on("setActivityData", function (a, b) {
          e.data = b.data;          
        }),
        b.$broadcast("getActivityData", { activityIndex: c });
    },
  ]),
  angular.module("playerApp").run([
    "$templateCache",
    function (a) {
      "use strict";
      a.put(
        "views/dndCat.html",
        '<!-- activity content - Start --> <img id="flatImg1" class="fImage" ng-src="{{dndCatCtrl.data.content.fI1}}"> <img id="flatImg2" class="fImage" ng-src="{{dndCatCtrl.data.content.fI2}}"> <img id="flatImg3" class="fImage" ng-src="{{dndCatCtrl.data.content.fI3}}"> <img id="flatImg4" class="fImage" ng-src="{{dndCatCtrl.data.content.fI4}}"> <!--div class="disableDrags" ng-show="disableDrags==true"></div--> <div id="{{obj.id}}" class="dndDrops" ng-repeat="obj in dndCatCtrl.droppableObjects" ng-drop-data="obj" ng-drop="true" ng-drop-success="dndCatCtrl.onDropComplete($data,$event,obj.id)" ng-center-anchor="{{dndCatCtrl.centerAnchor}}"></div> <div class="drags"> <div id="{{obj.id}}" class="dndDrags {{obj.id}}" ng-repeat="obj in dndCatCtrl.draggableObjects" ng-drag-data="obj" ng-drag="true" ng-drag-stop="dndCatCtrl.onDragRelease($data,$event)" data-allow-transform="true" ng-show="obj.show">{{obj.txt}}</div> </div> <!-- activity content - End -->'
      ),
        a.put(
          "views/matchingPairs.html",
          '<!-- activity content - Start --> <img class="flatImg" ng-src="{{matchingPairsCtrl.data.content.fI}}"> <div class="eyeBlink blink1"></div> <div class="eyeBlink blink2"></div> <div class="eyeBlink blink3"></div> <div class="eyeBlink blink4"></div> <div class="eyeBlink blink5"></div> <div class="eyeBlink blink6"></div> <div class="eyeBlink blink7"></div> <div class="eyeBlink blink8"></div> <div class="eyeBlink blink9"></div> <div class="eyeBlink blink10"></div> <div class="eyeBlink blink11"></div> <div class="eyeBlink blink12"></div> <div class="eyeBlink blink13"></div> <div class="eyeBlink blink14"></div> <div class="eyeBlink blink15"></div> <div class="eyeBlink blink16"></div> <div id="objDesk_1" class="desk"></div> <div id="objDesk_2" class="desk"></div> <div id="objDesk_3" class="desk"></div> <div id="objDesk_4" class="desk"></div> <div id="objDesk_5" class="desk"></div> <div id="objDesk_6" class="desk"></div> <div id="objDesk_7" class="desk"></div> <div id="objDesk_8" class="desk"></div> <div id="objDesk_9" class="desk"></div> <div id="objDesk_10" class="desk"></div> <div id="objDesk_11" class="desk"></div> <div id="objDesk_12" class="desk"></div> <div id="objDesk_13" class="desk"></div> <div id="objDesk_14" class="desk"></div> <div id="objDesk_15" class="desk"></div> <div id="objDesk_16" class="desk"></div> <div id="tilesContainer"> <div id="{{objTile.id}}" data-pair_id="{{objTile.pair_id}}" class="tile" ng-repeat="objTile in matchingPairsCtrl.data.content.arrTiles" ng-click="matchingPairsCtrl.onTileClicked($event)"> <div class="side classBack" style="background-image:url(\'{{objTile.back.image}}\')"> <div class="txt" ng-if="objTile.back.type === \'text\'">{{objTile.back.value}}</div> <img ng-src="{{objTile.back.value}}" ng-if="objTile.back.type === \'image\'"> </div> <div class="side classFront" ng-class="(objTile.front.type === \'css\')? objTile.front.value : \'\'"> <div ng-if="objTile.front.type === \'text\'">{{objTile.front.value}}</div> <img ng-src="{{objTile.front.value}}" ng-if="objTile.front.type === \'image\'"> </div> </div> </div> <div class="blocker" ng-show="!matchingPairsCtrl.bIsActOn"></div>'
        ),
        a.put(
          "views/showHide.html",
          '<!-- activity content - Start --> <div class="activityArea"> <div id="{{\'objPicture\' + $index}}" class="picture" ng-repeat="pic in showHideCtrl.data.content.arrImage"> <img ng-src="{{pic}}"> <div id="{{\'objCallout\' + $index}}" class="callout" ng-show="showHideCtrl.showCallout">{{showHideCtrl.data.content.arrCallout[$index]}}</div> </div></div>'
        );
    },
  ]);
