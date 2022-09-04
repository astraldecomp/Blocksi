!(function (e) {
  var t = {};
  function o(n) {
    if (t[n]) return t[n].exports;
    var c = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(c.exports, c, c.exports, o), (c.l = !0), c.exports;
  }
  (o.m = e),
    (o.c = t),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var c in e)
          o.d(
            n,
            c,
            function (t) {
              return e[t];
            }.bind(null, c)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 554));
})({
  26: function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    (t.apikey = "64NQWtq9QFiaGqiYgikhAzebf"),
      (t.blockVideoURL = "https://www.youtube.com/watch?v=iOd5r5pfHig"),
      (t.blockVideoId = "iOd5r5pfHig"),
      (t.locationReportUrl = "https://service.block.si/location?"),
      (t.blockVideoURLCategory = "https://www.youtube.com/watch?v=K1bqOLECS98"),
      (t.blockVideoIdCategory = "K1bqOLECS98"),
      (t.blockVideoURLKeyword = "https://www.youtube.com/watch?v=UxHtzcD5w4M"),
      (t.blockVideoIdKeyword = "UxHtzcD5w4M"),
      (t.blockVideoURLChannel = "https://www.youtube.com/watch?v=91kMzHkPr38"),
      (t.blockVideoIdChannel = "91kMzHkPr38"),
      (t.logHost = "https://log.block.si/v1/sendLog"),
      (t.ratingHost1 = "https://service1.block.si/getRating.json?url="),
      (t.ratingHost2 = "https://service2.block.si/getRating.json?url="),
      (t.websocketHost = "wss://ssl-ex-ws.block.si"),
      (t.googleApiKey = "AIzaSyDW38ZmZ_OtBHrN1vMDWih-skMf8KGLoOE"),
      (t.elasticsearchUrl = "https://log.block.si/v1/metrics"),
      (t.elasticsearchDebugUrl = "http://debug.block.si/config"),
      (t.socketIoHost = "wss://k8s-ws-lb.block.si"),
      (t.tdApi = "https://td.block.si/api/2.0"),
      (t.configHost = "https://service.block.si/config"),
      (t.configV1k8s = "http://api.blocksi.net"),
      (t.searchUrls = [
        "*://www.google.ca/*",
        "*://www.google.co.in/*",
        "*://www.google.co.th/*",
        "*://www.google.co.uk/*",
        "*://www.google.com/*",
        "*://www.google.com.mx/*",
        "*://www.google.com.tw/*",
        "*://www.google.es/*",
        "*://www.google.fr/*",
        "*://www.google.no/*",
        "*://www.google.si/*",
        "*://www.google.com/*",
        "*://www.bing.com/*",
        "*://duckduckgo.com/*",
        "*://yandex.com/*",
        "*://search.yahoo.com/*",
        "*://*.search.yahoo.com/*",
        "*://www.ecosia.org/*",
        "*://www.kiddle.co/*",
        "*://www.kidrex.org/*",
        "*://www.qwant.com/*",
      ]),
      (t.googleGamesUrls = [
        "/logos/fnbx/solitaire",
        "/fbx?fbx=minesweeper",
        "/logos/2010/pacman10",
        "/fbx?fbx=tic_tac_toe",
        "/fbx?fbx=snake_arcade",
        "/logos/doodles/2017/fischinger",
        "/logos/2017/logo17",
      ]),
      (t.assessmentPage = `chrome-extension://${chrome.runtime.id}/pages/assessment.html`),
      (t.headsUpPage = `chrome-extension://${chrome.runtime.id}/pages/heads_up.html`),
      (t.blockPage = `chrome-extension://${chrome.runtime.id}/pages/blockPage.html`),
      (t.chatPage = `chrome-extension://${chrome.runtime.id}/pages/chat.html`),
      (t.enforcePage = `chrome-extension://${chrome.runtime.id}/pages/enforce.html`),
      (t.bedTimePage = `chrome-extension://${chrome.runtime.id}/pages/bedtime.html`);
  },
  554: function (e, t, o) {
    e.exports = o(555);
  },
  555: function (e, t, o) {
    "use strict";
    var n = o(26);
    function c(e) {
      let t;
      t = ("" + e).replace(
        /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
        '<a href="$1" target="_blank">$1</a>'
      );
      return (
        (t = t.replace(
          /(^|[^\/])(www\.[\S]+(\b|$))/gim,
          '$1<a href="http://$2" target="_blank">$2</a>'
        )),
        t
      );
    }
    const s = (e) => {
      const t = new Date();
      return (
        e.getDate() === t.getDate() &&
        e.getMonth() === t.getMonth() &&
        e.getFullYear() === t.getFullYear()
      );
    };
    chrome.runtime.sendMessage({
      message: document.getElementById("userInput").value,
      type: "getClassData",
    });
    let a = !0;
    chrome.runtime.onMessage.addListener((e) => {
      switch (e.type) {
        case "receiveChat": {
          const t = document.querySelector("#chatArea"),
            { message: o, teacher: n } = e,
            s = document.createElement("div"),
            a = document.createElement("p"),
            r = document.createElement("span"),
            l = document.getElementById("chatArea");
          a.setAttribute("class", "TeacherTxt"),
            r.setAttribute("class", "TeacherTxt"),
            s.setAttribute("class", "TeacherTxt");
          let i = new Date().toLocaleString("en-US");
          (i = "Today," + i.split(",")[1]),
            (a.innerText = i),
            (r.innerText = n.split("@")[0]),
            o.includes("<") && o.includes(">") && o.includes("</")
              ? (s.innerText = o)
              : (s.innerHTML = c(o)),
            l.appendChild(a),
            l.appendChild(r),
            l.appendChild(s),
            (t.scrollTop = t.scrollHeight - t.clientHeight);
          break;
        }
        case "classData": {
          const t = document.querySelector("#chatArea"),
            o = e.classData.data.Title,
            a = e.classData.data.CompanyId,
            { companyId: r } = e,
            l = e.classData.data._id,
            i = document.getElementById("classTitle");
          (document.getElementById("teacherName").innerText = a),
            (i.innerText = o);
          const d = document.getElementById("chatArea");
          fetch(`${n.tdApi}/classes/${r}/${l}/chat/history`)
            .then((e) => e.json())
            .then((o) => {
              const n = o.data.filter((t) => t.student_id === e.user);
              if (0 !== n.length)
                for (let e = 0; e < n.length; e++) {
                  const o = document.createElement("div"),
                    r = document.createElement("p"),
                    l = document.createElement("span");
                  "TEACHER" === n[e].message_from
                    ? (o.setAttribute("class", "TeacherTxt"),
                      r.setAttribute("class", "TeacherTxt"),
                      l.setAttribute("class", "TeacherTxt"),
                      (l.innerText = a.split("@")[0]))
                    : (o.setAttribute("class", "StudentTxt"),
                      r.setAttribute("class", "StudentTxt"),
                      l.setAttribute("class", "StudentTxt"),
                      (l.innerText = "You"));
                  const i = new Date(+n[e].time);
                  let u = i.toLocaleString("en-US");
                  s(i) && (u = "Today," + u.split(",")[1]),
                    n[e].body.includes("<") &&
                    n[e].body.includes(">") &&
                    n[e].body.includes("</")
                      ? (o.innerText = n[e].body)
                      : (o.innerHTML = c(n[e].body)),
                    (r.innerText = u),
                    d.appendChild(r),
                    d.appendChild(l),
                    d.appendChild(o),
                    (t.scrollTop = t.scrollHeight - t.clientHeight);
                }
            });
          break;
        }
        case "enableChat": {
          a = e.message;
          const t = document.getElementById("btnSend");
          a
            ? ((t.disabled = !1), (t.style.backgroundColor = "#ff9000"))
            : ((t.disabled = !0), (t.style.backgroundColor = "#c7c3be"));
          break;
        }
      }
    });
    const r = document.getElementById("btnSend");
    (r.onclick = function () {
      if (a) {
        const e = document.querySelector("#chatArea"),
          t = document.getElementById("userInput"),
          o = document.createElement("div"),
          n = document.createElement("p"),
          s = document.createElement("span"),
          a = document.getElementById("chatArea");
        if (
          (n.setAttribute("class", "StudentTxt"),
          s.setAttribute("class", "StudentTxt"),
          o.setAttribute("class", "StudentTxt"),
          t.value.includes("<") &&
          t.value.includes(">") &&
          t.value.includes("</")
            ? (o.innerText = t.value)
            : (o.innerHTML = c(t.value)),
          "" === o.innerText || o.innerText.includes("data:text/html"))
        )
          return !1;
        chrome.runtime.sendMessage({
          message: document.getElementById("userInput").value,
          type: "chatMsg",
        });
        let r = new Date().toLocaleString("en-US");
        (r = "Today," + r.split(",")[1]),
          (n.innerText = r),
          (s.innerText = "You"),
          a.appendChild(n),
          a.appendChild(s),
          a.appendChild(o),
          (e.scrollTop = e.scrollHeight - e.clientHeight),
          (document.getElementById("userInput").value = "");
      }
    }),
      document.body.addEventListener("keyup", (e) => {
        13 === e.keyCode && r.click();
      });
  },
});
