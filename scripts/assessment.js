!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
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
    n((n.s = 548));
})({
  548: function (e, t, n) {
    e.exports = n(549);
  },
  549: function (e, t, n) {
    "use strict";
    !(function (e) {
      const t = document.getElementById("urlList");
      e.forEach((e) => {
        const n = document.createElement("a"),
          r = e.indexOf("*") < 0 && e.indexOf("http") < 0 ? "http://" + e : e;
        (n.href =
          r.replace(/^\./, "").indexOf("*") < 0
            ? r
            : (function (e) {
                const t = "*" === e[0] ? e.substr(1) : e;
                return (
                  "http://" +
                  (0 === t.indexOf(".") ? "www." + t.substring(1) : t)
                );
              })(r)),
          (n.innerHTML = r),
          (n.target = "_self"),
          t.appendChild(n);
      });
    })(
      (function (e, t) {
        const n = (t || window.location.href).split(e + "=")[1];
        return n ? JSON.parse(decodeURIComponent(n)).urls : [];
      })("params", null)
    );
  },
});
