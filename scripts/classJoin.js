!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var l = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var l in e)
          n.d(
            o,
            l,
            function (t) {
              return e[t];
            }.bind(null, l)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 562));
})({
  562: function (e, t, n) {
    e.exports = n(563);
  },
  563: function (e, t, n) {
    "use strict";
    const o = document.getElementById("joinButtonCode"),
      l = document.getElementById("classCodeInput");
    let c = null,
      r = document.getElementById("panels");
    !(async function () {
      (o.onclick = () => {
        "" !== l.value &&
          chrome.runtime.sendMessage({ type: "joinClass", code: l.value });
      }),
        chrome.runtime.onMessage.addListener((e, t, n) => {
          switch (e.type) {
            case "getClasses":
              null !== e.data &&
                ((c = e.data),
                c.forEach((e) => {
                  if (null === document.getElementById(e._id)) {
                    const t = document.createElement("article");
                    t.setAttribute("class", "" + e.CompanyId),
                      t.setAttribute("id", "" + e._id);
                    const n = document.createElement("h2");
                    (n.innerHTML = e.Title), t.appendChild(n);
                    const o = document.createElement("p");
                    (o.innerHTML = e.CompanyId), t.appendChild(o);
                    const l = document.createElement("p");
                    (l.style.display = "none"),
                      (l.style.textAlign = "center"),
                      l.setAttribute("id", "info|" + e.Code),
                      t.appendChild(l);
                    const c = document.createElement("h1");
                    (c.innerHTML = e.Code), t.appendChild(c);
                    const d = document.createElement("button");
                    d.setAttribute("id", `${e.CompanyId}|${e.Code}|${e._id}`),
                      d.setAttribute("class", "joinBtn"),
                      (d.innerHTML = "Join"),
                      t.appendChild(d),
                      r.appendChild(t),
                      (d.onclick = () => {
                        const e = d.id.split("|"),
                          t = e[0],
                          n = e[1],
                          o = e[2];
                        chrome.runtime.sendMessage({
                          type: "joinClass",
                          code: n,
                          teacherId: t,
                          classId: o,
                        });
                      });
                  }
                }));
              break;
            case "classJoined":
              const t = document.getElementById("info|" + e.code),
                n = document.getElementById("infoCodeInput");
              e.msg
                ? ((t.innerHTML = "Succesfully joined!"),
                  (t.style.color = "#006400"),
                  (t.style.display = "block"),
                  setTimeout(() => {
                    t.style.display = "none";
                  }, 1e4))
                : ((n.innerHTML = "Failed! Enter class code again."),
                  (n.style.color = "#8B0000"),
                  (n.style.display = "block"),
                  setTimeout(() => {
                    n.style.display = "none";
                  }, 1e4));
              break;
            case "removeClass":
              const o = document.getElementById(e.classId);
              null !== o && o.remove();
          }
        });
    })();
  },
});
