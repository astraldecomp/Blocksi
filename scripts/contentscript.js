!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 441));
})({
  10: function (e, t, r) {
    "use strict";
    var n = r(109),
      o = r(240),
      a = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === a.call(e);
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function c(e) {
      return "[object Function]" === a.call(e);
    }
    function u(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), i(e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === a.call(e);
      },
      isBuffer: o,
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isUndefined: function (e) {
        return void 0 === e;
      },
      isDate: function (e) {
        return "[object Date]" === a.call(e);
      },
      isFile: function (e) {
        return "[object File]" === a.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === a.call(e);
      },
      isFunction: c,
      isStream: function (e) {
        return s(e) && c(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            "ReactNative" !== navigator.product) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: u,
      merge: function e() {
        var t = {};
        function r(r, n) {
          "object" == typeof t[n] && "object" == typeof r
            ? (t[n] = e(t[n], r))
            : (t[n] = r);
        }
        for (var n = 0, o = arguments.length; n < o; n++) u(arguments[n], r);
        return t;
      },
      extend: function (e, t, r) {
        return (
          u(t, function (t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  100: function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r(10),
        o = r(242),
        a = { "Content-Type": "application/x-www-form-urlencoded" };
      function i(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var s,
        c = {
          adapter:
            (("undefined" != typeof XMLHttpRequest || void 0 !== t) &&
              (s = r(110)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e)
                  ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (c.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        n.forEach(["delete", "get", "head"], function (e) {
          c.headers[e] = {};
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          c.headers[e] = n.merge(a);
        }),
        (e.exports = c);
    }.call(this, r(23)));
  },
  102: function (e, t, r) {
    "use strict";
    t.a = function (e, t) {
      for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    };
  },
  103: function (e, t, r) {
    "use strict";
    var n = function () {
      (this.__data__ = []), (this.size = 0);
    };
    var o = function (e, t) {
      return e === t || (e != e && t != t);
    };
    var a = function (e, t) {
        for (var r = e.length; r--; ) if (o(e[r][0], t)) return r;
        return -1;
      },
      i = Array.prototype.splice;
    var s = function (e) {
      var t = this.__data__,
        r = a(t, e);
      return (
        !(r < 0) &&
        (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, !0)
      );
    };
    var c = function (e) {
      var t = this.__data__,
        r = a(t, e);
      return r < 0 ? void 0 : t[r][1];
    };
    var u = function (e) {
      return a(this.__data__, e) > -1;
    };
    var l = function (e, t) {
      var r = this.__data__,
        n = a(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    };
    function d(e) {
      var t = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    (d.prototype.clear = n),
      (d.prototype.delete = s),
      (d.prototype.get = c),
      (d.prototype.has = u),
      (d.prototype.set = l);
    var m = d;
    var p = function () {
      (this.__data__ = new m()), (this.size = 0);
    };
    var f = function (e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    };
    var h = function (e) {
      return this.__data__.get(e);
    };
    var b,
      g = function (e) {
        return this.__data__.has(e);
      },
      y = r(46),
      v = r(6),
      w = v.a["__core-js_shared__"],
      S = (b = /[^.]+$/.exec((w && w.keys && w.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + b
        : "";
    var N = function (e) {
        return !!S && S in e;
      },
      A = r(11),
      C = Function.prototype.toString;
    var O = function (e) {
        if (null != e) {
          try {
            return C.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      },
      j = /^\[object .+?Constructor\]$/,
      E = Function.prototype,
      _ = Object.prototype,
      x = E.toString,
      k = _.hasOwnProperty,
      T = RegExp(
        "^" +
          x
            .call(k)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    var L = function (e) {
      return !(!Object(A.a)(e) || N(e)) && (Object(y.a)(e) ? T : j).test(O(e));
    };
    var I = function (e, t) {
      return null == e ? void 0 : e[t];
    };
    var P = function (e, t) {
        var r = I(e, t);
        return L(r) ? r : void 0;
      },
      R = P(v.a, "Map"),
      B = P(Object, "create");
    var M = function () {
      (this.__data__ = B ? B(null) : {}), (this.size = 0);
    };
    var U = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      },
      D = Object.prototype.hasOwnProperty;
    var H = function (e) {
        var t = this.__data__;
        if (B) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return D.call(t, e) ? t[e] : void 0;
      },
      z = Object.prototype.hasOwnProperty;
    var $ = function (e) {
      var t = this.__data__;
      return B ? void 0 !== t[e] : z.call(t, e);
    };
    var F = function (e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = B && void 0 === t ? "__lodash_hash_undefined__" : t),
        this
      );
    };
    function q(e) {
      var t = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    (q.prototype.clear = M),
      (q.prototype.delete = U),
      (q.prototype.get = H),
      (q.prototype.has = $),
      (q.prototype.set = F);
    var V = q;
    var W = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new V(),
          map: new (R || m)(),
          string: new V(),
        });
    };
    var G = function (e) {
      var t = typeof e;
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t
        ? "__proto__" !== e
        : null === e;
    };
    var K = function (e, t) {
      var r = e.__data__;
      return G(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
    };
    var J = function (e) {
      var t = K(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    };
    var Y = function (e) {
      return K(this, e).get(e);
    };
    var Q = function (e) {
      return K(this, e).has(e);
    };
    var X = function (e, t) {
      var r = K(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    };
    function Z(e) {
      var t = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    (Z.prototype.clear = W),
      (Z.prototype.delete = J),
      (Z.prototype.get = Y),
      (Z.prototype.has = Q),
      (Z.prototype.set = X);
    var ee = Z;
    var te = function (e, t) {
      var r = this.__data__;
      if (r instanceof m) {
        var n = r.__data__;
        if (!R || n.length < 199)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new ee(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    };
    function re(e) {
      var t = (this.__data__ = new m(e));
      this.size = t.size;
    }
    (re.prototype.clear = p),
      (re.prototype.delete = f),
      (re.prototype.get = h),
      (re.prototype.has = g),
      (re.prototype.set = te);
    var ne = re;
    var oe = function (e) {
      return this.__data__.set(e, "__lodash_hash_undefined__"), this;
    };
    var ae = function (e) {
      return this.__data__.has(e);
    };
    function ie(e) {
      var t = -1,
        r = null == e ? 0 : e.length;
      for (this.__data__ = new ee(); ++t < r; ) this.add(e[t]);
    }
    (ie.prototype.add = ie.prototype.push = oe), (ie.prototype.has = ae);
    var se = ie;
    var ce = function (e, t) {
      for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    };
    var ue = function (e, t) {
      return e.has(t);
    };
    var le = function (e, t, r, n, o, a) {
        var i = 1 & r,
          s = e.length,
          c = t.length;
        if (s != c && !(i && c > s)) return !1;
        var u = a.get(e),
          l = a.get(t);
        if (u && l) return u == t && l == e;
        var d = -1,
          m = !0,
          p = 2 & r ? new se() : void 0;
        for (a.set(e, t), a.set(t, e); ++d < s; ) {
          var f = e[d],
            h = t[d];
          if (n) var b = i ? n(h, f, d, t, e, a) : n(f, h, d, e, t, a);
          if (void 0 !== b) {
            if (b) continue;
            m = !1;
            break;
          }
          if (p) {
            if (
              !ce(t, function (e, t) {
                if (!ue(p, t) && (f === e || o(f, e, r, n, a)))
                  return p.push(t);
              })
            ) {
              m = !1;
              break;
            }
          } else if (f !== h && !o(f, h, r, n, a)) {
            m = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), m;
      },
      de = r(12),
      me = v.a.Uint8Array;
    var pe = function (e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (e, n) {
          r[++t] = [n, e];
        }),
        r
      );
    };
    var fe = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      },
      he = de.a ? de.a.prototype : void 0,
      be = he ? he.valueOf : void 0;
    var ge = function (e, t, r, n, a, i, s) {
      switch (r) {
        case "[object DataView]":
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case "[object ArrayBuffer]":
          return !(e.byteLength != t.byteLength || !i(new me(e), new me(t)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return o(+e, +t);
        case "[object Error]":
          return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
          return e == t + "";
        case "[object Map]":
          var c = pe;
        case "[object Set]":
          var u = 1 & n;
          if ((c || (c = fe), e.size != t.size && !u)) return !1;
          var l = s.get(e);
          if (l) return l == t;
          (n |= 2), s.set(e, t);
          var d = le(c(e), c(t), n, a, i, s);
          return s.delete(e), d;
        case "[object Symbol]":
          if (be) return be.call(e) == be.call(t);
      }
      return !1;
    };
    var ye = function (e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
        return e;
      },
      ve = r(7);
    var we = function (e, t, r) {
        var n = t(e);
        return Object(ve.a)(e) ? n : ye(n, r(e));
      },
      Se = r(45);
    var Ne = function () {
        return [];
      },
      Ae = Object.prototype.propertyIsEnumerable,
      Ce = Object.getOwnPropertySymbols,
      Oe = Ce
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                Object(Se.a)(Ce(e), function (t) {
                  return Ae.call(e, t);
                }));
          }
        : Ne,
      je = r(30);
    var Ee = function (e) {
        return we(e, je.a, Oe);
      },
      _e = Object.prototype.hasOwnProperty;
    var xe = function (e, t, r, n, o, a) {
        var i = 1 & r,
          s = Ee(e),
          c = s.length;
        if (c != Ee(t).length && !i) return !1;
        for (var u = c; u--; ) {
          var l = s[u];
          if (!(i ? l in t : _e.call(t, l))) return !1;
        }
        var d = a.get(e),
          m = a.get(t);
        if (d && m) return d == t && m == e;
        var p = !0;
        a.set(e, t), a.set(t, e);
        for (var f = i; ++u < c; ) {
          var h = e[(l = s[u])],
            b = t[l];
          if (n) var g = i ? n(b, h, l, t, e, a) : n(h, b, l, e, t, a);
          if (!(void 0 === g ? h === b || o(h, b, r, n, a) : g)) {
            p = !1;
            break;
          }
          f || (f = "constructor" == l);
        }
        if (p && !f) {
          var y = e.constructor,
            v = t.constructor;
          y == v ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof y &&
              y instanceof y &&
              "function" == typeof v &&
              v instanceof v) ||
            (p = !1);
        }
        return a.delete(e), a.delete(t), p;
      },
      ke = P(v.a, "DataView"),
      Te = P(v.a, "Promise"),
      Le = P(v.a, "Set"),
      Ie = P(v.a, "WeakMap"),
      Pe = r(16),
      Re = O(ke),
      Be = O(R),
      Me = O(Te),
      Ue = O(Le),
      De = O(Ie),
      He = Pe.a;
    ((ke && "[object DataView]" != He(new ke(new ArrayBuffer(1)))) ||
      (R && "[object Map]" != He(new R())) ||
      (Te && "[object Promise]" != He(Te.resolve())) ||
      (Le && "[object Set]" != He(new Le())) ||
      (Ie && "[object WeakMap]" != He(new Ie()))) &&
      (He = function (e) {
        var t = Object(Pe.a)(e),
          r = "[object Object]" == t ? e.constructor : void 0,
          n = r ? O(r) : "";
        if (n)
          switch (n) {
            case Re:
              return "[object DataView]";
            case Be:
              return "[object Map]";
            case Me:
              return "[object Promise]";
            case Ue:
              return "[object Set]";
            case De:
              return "[object WeakMap]";
          }
        return t;
      });
    var ze = He,
      $e = r(42),
      Fe = r(48),
      qe = Object.prototype.hasOwnProperty;
    var Ve = function (e, t, r, n, o, a) {
        var i = Object(ve.a)(e),
          s = Object(ve.a)(t),
          c = i ? "[object Array]" : ze(e),
          u = s ? "[object Array]" : ze(t),
          l =
            "[object Object]" ==
            (c = "[object Arguments]" == c ? "[object Object]" : c),
          d =
            "[object Object]" ==
            (u = "[object Arguments]" == u ? "[object Object]" : u),
          m = c == u;
        if (m && Object($e.a)(e)) {
          if (!Object($e.a)(t)) return !1;
          (i = !0), (l = !1);
        }
        if (m && !l)
          return (
            a || (a = new ne()),
            i || Object(Fe.a)(e)
              ? le(e, t, r, n, o, a)
              : ge(e, t, c, r, n, o, a)
          );
        if (!(1 & r)) {
          var p = l && qe.call(e, "__wrapped__"),
            f = d && qe.call(t, "__wrapped__");
          if (p || f) {
            var h = p ? e.value() : e,
              b = f ? t.value() : t;
            return a || (a = new ne()), o(h, b, r, n, a);
          }
        }
        return !!m && (a || (a = new ne()), xe(e, t, r, n, o, a));
      },
      We = r(15);
    var Ge = function e(t, r, n, o, a) {
      return (
        t === r ||
        (null == t || null == r || (!Object(We.a)(t) && !Object(We.a)(r))
          ? t != t && r != r
          : Ve(t, r, n, o, e, a))
      );
    };
    var Ke = function (e, t, r, n) {
      var o = r.length,
        a = o,
        i = !n;
      if (null == e) return !a;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < a; ) {
        var c = (s = r[o])[0],
          u = e[c],
          l = s[1];
        if (i && s[2]) {
          if (void 0 === u && !(c in e)) return !1;
        } else {
          var d = new ne();
          if (n) var m = n(u, l, c, e, t, d);
          if (!(void 0 === m ? Ge(l, u, 3, n, d) : m)) return !1;
        }
      }
      return !0;
    };
    var Je = function (e) {
      return e == e && !Object(A.a)(e);
    };
    var Ye = function (e) {
      for (var t = Object(je.a)(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, Je(o)];
      }
      return t;
    };
    var Qe = function (e, t) {
      return function (r) {
        return null != r && r[e] === t && (void 0 !== t || e in Object(r));
      };
    };
    var Xe = function (e) {
        var t = Ye(e);
        return 1 == t.length && t[0][2]
          ? Qe(t[0][0], t[0][1])
          : function (r) {
              return r === e || Ke(r, e, t);
            };
      },
      Ze = r(25),
      et = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      tt = /^\w*$/;
    var rt = function (e, t) {
      if (Object(ve.a)(e)) return !1;
      var r = typeof e;
      return (
        !(
          "number" != r &&
          "symbol" != r &&
          "boolean" != r &&
          null != e &&
          !Object(Ze.a)(e)
        ) ||
        tt.test(e) ||
        !et.test(e) ||
        (null != t && e in Object(t))
      );
    };
    function nt(e, t) {
      if ("function" != typeof e || (null != t && "function" != typeof t))
        throw new TypeError("Expected a function");
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          a = r.cache;
        if (a.has(o)) return a.get(o);
        var i = e.apply(this, n);
        return (r.cache = a.set(o, i) || a), i;
      };
      return (r.cache = new (nt.Cache || ee)()), r;
    }
    nt.Cache = ee;
    var ot = nt;
    var at =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      it = /\\(\\)?/g,
      st = (function (e) {
        var t = ot(e, function (e) {
            return 500 === r.size && r.clear(), e;
          }),
          r = t.cache;
        return t;
      })(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(at, function (e, r, n, o) {
            t.push(n ? o.replace(it, "$1") : r || e);
          }),
          t
        );
      }),
      ct = r(102),
      ut = de.a ? de.a.prototype : void 0,
      lt = ut ? ut.toString : void 0;
    var dt = function e(t) {
      if ("string" == typeof t) return t;
      if (Object(ve.a)(t)) return Object(ct.a)(t, e) + "";
      if (Object(Ze.a)(t)) return lt ? lt.call(t) : "";
      var r = t + "";
      return "0" == r && 1 / t == -1 / 0 ? "-0" : r;
    };
    var mt = function (e) {
      return null == e ? "" : dt(e);
    };
    var pt = function (e, t) {
      return Object(ve.a)(e) ? e : rt(e, t) ? [e] : st(mt(e));
    };
    var ft = function (e) {
      if ("string" == typeof e || Object(Ze.a)(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    };
    var ht = function (e, t) {
      for (var r = 0, n = (t = pt(t, e)).length; null != e && r < n; )
        e = e[ft(t[r++])];
      return r && r == n ? e : void 0;
    };
    var bt = function (e, t, r) {
      var n = null == e ? void 0 : ht(e, t);
      return void 0 === n ? r : n;
    };
    var gt = function (e, t) {
        return null != e && t in Object(e);
      },
      yt = r(49),
      vt = r(47),
      wt = r(29);
    var St = function (e, t, r) {
      for (var n = -1, o = (t = pt(t, e)).length, a = !1; ++n < o; ) {
        var i = ft(t[n]);
        if (!(a = null != e && r(e, i))) break;
        e = e[i];
      }
      return a || ++n != o
        ? a
        : !!(o = null == e ? 0 : e.length) &&
            Object(wt.a)(o) &&
            Object(vt.a)(i, o) &&
            (Object(ve.a)(e) || Object(yt.a)(e));
    };
    var Nt = function (e, t) {
      return null != e && St(e, t, gt);
    };
    var At = function (e, t) {
      return rt(e) && Je(t)
        ? Qe(ft(e), t)
        : function (r) {
            var n = bt(r, e);
            return void 0 === n && n === t ? Nt(r, e) : Ge(t, n, 3);
          };
    };
    var Ct = function (e) {
      return e;
    };
    var Ot = function (e) {
      return function (t) {
        return null == t ? void 0 : t[e];
      };
    };
    var jt = function (e) {
      return function (t) {
        return ht(t, e);
      };
    };
    var Et = function (e) {
      return rt(e) ? Ot(ft(e)) : jt(e);
    };
    t.a = function (e) {
      return "function" == typeof e
        ? e
        : null == e
        ? Ct
        : "object" == typeof e
        ? Object(ve.a)(e)
          ? At(e[0], e[1])
          : Xe(e)
        : Et(e);
    };
  },
  104: function (e, t, r) {
    "use strict";
    var n = (function (e) {
        return function (t, r, n) {
          for (var o = -1, a = Object(t), i = n(t), s = i.length; s--; ) {
            var c = i[e ? s : ++o];
            if (!1 === r(a[c], c, a)) break;
          }
          return t;
        };
      })(),
      o = r(30);
    var a = function (e, t) {
        return e && n(e, t, o.a);
      },
      i = r(41);
    var s = (function (e, t) {
      return function (r, n) {
        if (null == r) return r;
        if (!Object(i.a)(r)) return e(r, n);
        for (
          var o = r.length, a = t ? o : -1, s = Object(r);
          (t ? a-- : ++a < o) && !1 !== n(s[a], a, s);

        );
        return r;
      };
    })(a);
    t.a = s;
  },
  105: function (e, t, r) {
    "use strict";
    (function (e) {
      var n = r(44),
        o =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        a = o && "object" == typeof e && e && !e.nodeType && e,
        i = a && a.exports === o && n.a.process,
        s = (function () {
          try {
            var e = a && a.require && a.require("util").types;
            return e || (i && i.binding && i.binding("util"));
          } catch (e) {}
        })();
      t.a = s;
    }.call(this, r(114)(e)));
  },
  109: function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  11: function (e, t, r) {
    "use strict";
    t.a = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  110: function (e, t, r) {
    "use strict";
    var n = r(10),
      o = r(243),
      a = r(245),
      i = r(246),
      s = r(247),
      c = r(111);
    e.exports = function (e) {
      return new Promise(function (t, u) {
        var l = e.data,
          d = e.headers;
        n.isFormData(l) && delete d["Content-Type"];
        var m = new XMLHttpRequest();
        if (e.auth) {
          var p = e.auth.username || "",
            f = e.auth.password || "";
          d.Authorization = "Basic " + btoa(p + ":" + f);
        }
        if (
          (m.open(
            e.method.toUpperCase(),
            a(e.url, e.params, e.paramsSerializer),
            !0
          ),
          (m.timeout = e.timeout),
          (m.onreadystatechange = function () {
            if (
              m &&
              4 === m.readyState &&
              (0 !== m.status ||
                (m.responseURL && 0 === m.responseURL.indexOf("file:")))
            ) {
              var r =
                  "getAllResponseHeaders" in m
                    ? i(m.getAllResponseHeaders())
                    : null,
                n = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? m.response
                      : m.responseText,
                  status: m.status,
                  statusText: m.statusText,
                  headers: r,
                  config: e,
                  request: m,
                };
              o(t, u, n), (m = null);
            }
          }),
          (m.onerror = function () {
            u(c("Network Error", e, null, m)), (m = null);
          }),
          (m.ontimeout = function () {
            u(
              c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", m)
            ),
              (m = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var h = r(248),
            b =
              (e.withCredentials || s(e.url)) && e.xsrfCookieName
                ? h.read(e.xsrfCookieName)
                : void 0;
          b && (d[e.xsrfHeaderName] = b);
        }
        if (
          ("setRequestHeader" in m &&
            n.forEach(d, function (e, t) {
              void 0 === l && "content-type" === t.toLowerCase()
                ? delete d[t]
                : m.setRequestHeader(t, e);
            }),
          e.withCredentials && (m.withCredentials = !0),
          e.responseType)
        )
          try {
            m.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          m.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            m.upload &&
            m.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              m && (m.abort(), u(e), (m = null));
            }),
          void 0 === l && (l = null),
          m.send(l);
      });
    };
  },
  111: function (e, t, r) {
    "use strict";
    var n = r(244);
    e.exports = function (e, t, r, o, a) {
      var i = new Error(e);
      return n(i, t, r, o, a);
    };
  },
  112: function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  113: function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  114: function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  12: function (e, t, r) {
    "use strict";
    var n = r(6).a.Symbol;
    t.a = n;
  },
  15: function (e, t, r) {
    "use strict";
    t.a = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  16: function (e, t, r) {
    "use strict";
    var n = r(12),
      o = Object.prototype,
      a = o.hasOwnProperty,
      i = o.toString,
      s = n.a ? n.a.toStringTag : void 0;
    var c = function (e) {
        var t = a.call(e, s),
          r = e[s];
        try {
          e[s] = void 0;
          var n = !0;
        } catch (e) {}
        var o = i.call(e);
        return n && (t ? (e[s] = r) : delete e[s]), o;
      },
      u = Object.prototype.toString;
    var l = function (e) {
        return u.call(e);
      },
      d = n.a ? n.a.toStringTag : void 0;
    t.a = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : d && d in Object(e)
        ? c(e)
        : l(e);
    };
  },
  17: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.classSession = t.settings = t.user = void 0);
    var n = i(r(256)),
      o = i(r(257)),
      a = i(r(260));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const s = new n.default(),
      c = new o.default(),
      u = new a.default();
    (t.user = s), (t.settings = c), (t.classSession = u);
  },
  21: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.restoreBaList =
        t.saveBaList =
        t.isRequestCodeEnabled =
        t.isValidUrl =
        t.isClassActive =
        t.removeOpenTabs =
        t.genSanitizedLinks =
        t.removeLastSlash =
        t.cleanURL =
        t.saveOpenTabs =
        t.restoreTabs =
        t.filterTabs =
        t.getLocalIPs =
        t.isInRange =
        t.validateIP =
          void 0),
      (t.getDateTime = a),
      (t.isJson = function (e) {
        try {
          JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return !0;
      }),
      (t.localIP = function (e) {
        const t = e.split(".");
        if (4 === t.length) {
          const e = [
              parseInt(t[0], 10),
              parseInt(t[1], 10),
              parseInt(t[2], 10),
              parseInt(t[3], 10),
            ],
            r = [
              [10, 0, 0, 0],
              [172, 16, 0, 0],
              [192, 168, 0, 0],
              [127, 0, 0, 1],
            ],
            n = [
              [10, 255, 255, 255],
              [172, 31, 255, 255],
              [192, 168, 255, 255],
              [127, 0, 0, 1],
            ];
          if (isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]))
            return !1;
          let o = 3;
          for (; o > -1; ) {
            if (
              r[o][0] <= e[0] &&
              n[o][0] >= e[0] &&
              r[o][1] <= e[1] &&
              n[o][1] >= e[1] &&
              r[o][2] <= e[2] &&
              n[o][2] >= e[2] &&
              r[o][3] <= e[3] &&
              n[o][3] >= e[3]
            )
              return !0;
            o--;
          }
        }
        return !1;
      }),
      (t.serialize = function (e) {
        const t = [];
        for (const r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.push(`${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`);
        return t.join("&");
      }),
      (t.chromeQueryAsync = c),
      (t.chromeTabsRemoveAsync = u),
      (t.isChatOpen = function () {
        return new Promise((e) => {
          chrome.tabs.query({}, (t) => {
            t.forEach((t) => {
              t.url ===
                `chrome-extension://${chrome.runtime.id}/pages/chat.html` &&
                e(!0);
            }),
              e(!1);
          });
        });
      }),
      (t.isAccessPageOpen = function () {
        return new Promise((e, t) => {
          chrome.tabs.query({}, (t) => {
            t.forEach((t) => {
              t.url ===
                `chrome-extension://${chrome.runtime.id}/pages/classJoin.html` &&
                e(!0);
            }),
              e(!1);
          });
        });
      }),
      (t.isTabActive = function (e) {
        return new Promise((t) => {
          chrome.tabs.query({}, (r) => {
            const n = r.find((t) => t.url === e);
            n && t(n.active), t(!1);
          });
        });
      }),
      (t.getPublicIp = function e(t, r) {
        const n = [
          "https://api.ipify.org",
          "http://ip-api.com/json/?fields=query",
        ];
        if (!t)
          return fetch("https://api.block.si/my-ip")
            .then((e) => e.json())
            .then((e) => e.ip)
            .catch(() => e(!0, 0));
        if (r >= n.length)
          return Promise.reject(new Error("Could not get the public IP."));
        return fetch("" + n[r])
          .then((e) => e.text())
          .then((t) => {
            let o;
            return (
              (o =
                "" + n[r] == "https://api.ipify.org" ? t : JSON.parse(t.query)),
              o.replace(/"/g, ""),
              i(o) ? o : e(!0, r + 1)
            );
          })
          .catch((t) =>
            r < n.length ? e(!0, r + 1) : Promise.reject(new Error(t))
          );
      }),
      (t.extensionLog = function (e, t) {
        t ? console.error(e) : console.log(e);
        n.settings.debug &&
          fetch("http://debug.block.si", {
            method: "POST",
            mode: "cors",
            redirect: "follow",
            body: JSON.stringify({ user: n.user.userEmail, message: e }),
          });
      }),
      (t.blockFreeExtension = function (e, t) {
        const r = e.match(/\/webstore\/search\/blocksi/g),
          n = e.match(/\/dijkndlhkhhkmohofhdnjcpbdiiioiba/g),
          o = e.match(/\/pgmjaihnmedpcdkjcgigocogcbffgkbn/g);
        (null == r && null == n && null == o) ||
          (console.log(`[${a()}]  [BlOCKED PAGE]:  ${e}`),
          chrome.tabs.update(t, {
            url: "https://www.block.si/block_ext.php?url=https://chrome.google.com/webstore/category/extensions&category=800",
          }));
      }),
      (t.getAllOpenTabs = function () {
        return new Promise((e, t) => {
          const r = {};
          chrome.tabs.query({}, (t) => {
            t.forEach((e) => {
              r[e.id] = e.url;
            }),
              e(r);
          });
        });
      }),
      (t.saveLogToES = function () {
        if (n.settings.enableClassVitals) {
          const e = {
            msg: "STUDENT_JOINED",
            student: n.user.userEmail,
            classId: n.classSession.classId,
            classTitle: n.classSession.classTitle,
            startTime: n.classSession.startTime,
            endTime: n.classSession.endTime,
            date: n.classSession.date,
            adminId: n.user.companyId,
            dateTime: `${n.classSession.date} ${n.classSession.startTime}`,
            region: n.settings.dataRegion ? n.settings.dataRegion : "us",
          };
          fetch(o.elasticsearchUrl, {
            method: "POST",
            body: JSON.stringify(e),
          });
        }
      }),
      (t.checkPenaltyStatus = function (e) {
        if (!e) return;
        const t = e.find((e) => e.User === n.user.userEmail);
        n.settings.penalty = !!t;
      }),
      (t.timeout = function (e) {
        return new Promise((t) => setTimeout(t, e));
      }),
      (t.generateStringOfLength = function (e) {
        const t =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        let r = "";
        for (let n = 0; n < e; n += 1) {
          const e = Math.floor(Math.random() * t.length);
          r += t.substring(e, e + 1);
        }
        return r;
      });
    var n = r(17),
      o = r(26);
    function a(e = 0) {
      const t = new Date();
      let r = t.getDate();
      r < 10 && (r = "0" + r);
      let n = t.getMonth() + 1;
      n < 10 && (n = "0" + n), 0 !== e && t.setSeconds(t.getSeconds() + e);
      let o = t.getHours();
      o < 10 && (o = "0" + o);
      let a = t.getMinutes();
      a < 10 && (a = "0" + a);
      let i = t.getSeconds();
      return (
        i < 10 && (i = "0" + i), `${t.getFullYear()}-${n}-${r} ${o}:${a}:${i}`
      );
    }
    const i = (t.validateIP = (e) =>
        !!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          e
        )),
      s = (e) =>
        Number(
          e
            .split(".")
            .map((e) => ("000" + e).substr(-3))
            .join("")
        );
    (t.isInRange = (e, t, r) => s(e) >= s(t) && s(e) <= s(r)),
      (t.getLocalIPs = () =>
        new Promise((e) => {
          const t = [],
            r = new (window.RTCPeerConnection ||
              window.webkitRTCPeerConnection ||
              window.mozRTCPeerConnection)({ iceServers: [] });
          r.createDataChannel(""),
            (r.onicecandidate = (n) => {
              if (!n.candidate) return r.close(), void e(t);
              const o = /^candidate:.+ (\S+) \d+ typ/.exec(
                n.candidate.candidate
              )[1];
              -1 === t.indexOf(o) && t.push(o);
            }),
            r.createOffer(
              (e) => {
                r.setLocalDescription(e);
              },
              () => {}
            );
        })),
      (t.filterTabs = (e) => {
        chrome.tabs.query({}, (t) => {
          t.forEach((r) => {
            const n = r.url.startsWith("chrome://"),
              o = r.url.replace(/(^\w+:|^)\/\//, "").slice(0, -1);
            n ||
              e.includes(o) ||
              (1 == t.length && chrome.tabs.create({ url: "chrome://newtab" }),
              chrome.tabs.remove(r.id));
          });
        });
      });
    function c() {
      return new Promise((e) => {
        chrome.tabs.query({}, (t) => {
          e(t);
        });
      });
    }
    function u(e) {
      return new Promise((t) => {
        chrome.tabs.remove(e, (e) => {
          t(e);
        });
      });
    }
    (t.restoreTabs = () =>
      new Promise(async (e) => {
        const t = JSON.parse(localStorage.getItem("SAVEDTABS")),
          r = await c();
        var o;
        t &&
          (0 === r.length
            ? await ((o = { url: t.map((e) => e.url), state: "maximized" }),
              new Promise((e, t) => {
                chrome.windows.create(o, (r) => {
                  chrome.runtime.lastError
                    ? t(new Error(chrome.runtime.lastError))
                    : e(r);
                });
              }))
            : await Promise.all(
                t.map(async (e) => {
                  await (function (e) {
                    return new Promise((t, r) => {
                      chrome.tabs.create(e, (e) => {
                        chrome.runtime.lastError
                          ? r(new Error(chrome.runtime.lastError))
                          : t(e);
                      });
                    });
                  })({ url: e.url });
                })
              ),
          await Promise.all(
            r.map(async (e) => {
              e.url.includes("https://r13.core.learn.edgenuity.com/Player/") ||
                e.url.includes("/pages/conference.html?room=") ||
                e.url.includes("/pages/cast.html?room=") ||
                e.url.includes("/pages/conference_grid.html?room=") ||
                (t && t.includes(e)) ||
                (await u(e.id));
            })
          ),
          (n.classSession.saveLogOut = []),
          localStorage.removeItem("SAVEDTABS"),
          e());
      })),
      (t.saveOpenTabs = () =>
        new Promise((e) => {
          const t = [];
          chrome.tabs.query({}, (r) => {
            r.forEach((e) => {
              e.url === o.headsUpPage ||
                e.url.includes("chrome-extension://") ||
                e.url.includes("blockPage") ||
                "https://r13.core.learn.edgenuity.com/Player/" === e.url ||
                t.push(e);
            }),
              localStorage.setItem("SAVEDTABS", JSON.stringify(t)),
              e();
          });
        }));
    const l = (t.cleanURL = (e) =>
        e
          .replace(/\*/, "")
          .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
          .replace(/\/$/, "")),
      d =
        ((t.removeLastSlash = (e) => e.replace(/\/$/, "")),
        (t.genSanitizedLinks = () => {
          const e = { urls: [] };
          for (let t = 0; t < n.settings.bwList.length; t++) {
            const r = n.settings.bwList[t];
            ("assessment" !== r[2] && "enforced" !== r[2]) || e.urls.push(r[0]);
          }
          return (e.urls = [...new Set(e.urls)]), e;
        }));
    (t.removeOpenTabs = (e) =>
      new Promise((t) => {
        chrome.tabs.query({}, (r) => {
          let a = r.length;
          return (
            r.forEach((t) => {
              if (
                !t.url.startsWith("chrome://") &&
                t.url !== o.headsUpPage &&
                !t.url.includes("blockPage") &&
                !t.url.includes("chrome-extension://")
              ) {
                let r =
                  n.settings.bwList.findIndex((e) => l(e[0]) === l(t.url)) > -1;
                "" === t.url && (r = !0),
                  r ||
                    (0 === e.length && 1 === a
                      ? chrome.tabs.create(
                          {
                            url: `${o.assessmentPage}?params=${JSON.stringify(
                              d()
                            )}`,
                            active: !0,
                          },
                          () => {
                            chrome.tabs.remove(t.id), a--;
                          }
                        )
                      : (chrome.tabs.remove(t.id), a--));
              }
            }),
            t()
          );
        });
      })),
      (t.isClassActive = (e) =>
        !(
          !n.classSession.isActive ||
          n.classSession.classId !== e.classId ||
          (n.classSession.teacher !== e.teacherId &&
            e.teacherId !== n.classSession.secondTeacher) ||
          "true" !== n.classSession.isIncluded ||
          "false" !== n.classSession.isTransferred
        )),
      (t.isValidUrl = (e) => {
        try {
          new URL(e);
        } catch (e) {
          return !1;
        }
        return !0;
      }),
      (t.isRequestCodeEnabled = (e) =>
        "true" === e.requestAccessCode ||
        !0 === e.requestAccessCode ||
        !0 === n.settings.requestAccess
          ? ((n.settings.requestAccess = !0), !0)
          : ((n.settings.requestAccess = !1), !1)),
      (t.saveBaList = () => {
        (n.classSession.savedBaList = n.settings.bwList),
          (n.settings.bwList = []);
      }),
      (t.restoreBaList = () => {
        (n.settings.bwList = n.classSession.savedBaList),
          (n.classSession.savedBaList = []),
          (n.classSession.saveLogOut = []);
      });
  },
  22: function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  229: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(11),
      o = r(6),
      a = function () {
        return o.a.Date.now();
      },
      i = /\s/;
    var s = function (e) {
        for (var t = e.length; t-- && i.test(e.charAt(t)); );
        return t;
      },
      c = /^\s+/;
    var u = function (e) {
        return e ? e.slice(0, s(e) + 1).replace(c, "") : e;
      },
      l = r(25),
      d = /^[-+]0x[0-9a-f]+$/i,
      m = /^0b[01]+$/i,
      p = /^0o[0-7]+$/i,
      f = parseInt;
    var h = function (e) {
        if ("number" == typeof e) return e;
        if (Object(l.a)(e)) return NaN;
        if (Object(n.a)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = Object(n.a)(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = u(e);
        var r = m.test(e);
        return r || p.test(e) ? f(e.slice(2), r ? 2 : 8) : d.test(e) ? NaN : +e;
      },
      b = Math.max,
      g = Math.min;
    t.default = function (e, t, r) {
      var o,
        i,
        s,
        c,
        u,
        l,
        d = 0,
        m = !1,
        p = !1,
        f = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function y(t) {
        var r = o,
          n = i;
        return (o = i = void 0), (d = t), (c = e.apply(n, r));
      }
      function v(e) {
        return (d = e), (u = setTimeout(S, t)), m ? y(e) : c;
      }
      function w(e) {
        var r = e - l;
        return void 0 === l || r >= t || r < 0 || (p && e - d >= s);
      }
      function S() {
        var e = a();
        if (w(e)) return N(e);
        u = setTimeout(
          S,
          (function (e) {
            var r = t - (e - l);
            return p ? g(r, s - (e - d)) : r;
          })(e)
        );
      }
      function N(e) {
        return (u = void 0), f && o ? y(e) : ((o = i = void 0), c);
      }
      function A() {
        var e = a(),
          r = w(e);
        if (((o = arguments), (i = this), (l = e), r)) {
          if (void 0 === u) return v(l);
          if (p) return clearTimeout(u), (u = setTimeout(S, t)), y(l);
        }
        return void 0 === u && (u = setTimeout(S, t)), c;
      }
      return (
        (t = h(t) || 0),
        Object(n.a)(r) &&
          ((m = !!r.leading),
          (s = (p = "maxWait" in r) ? b(h(r.maxWait) || 0, t) : s),
          (f = "trailing" in r ? !!r.trailing : f)),
        (A.cancel = function () {
          void 0 !== u && clearTimeout(u), (d = 0), (o = l = i = u = void 0);
        }),
        (A.flush = function () {
          return void 0 === u ? c : N(a());
        }),
        A
      );
    };
  },
  23: function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function a() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === a || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        r = a;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        n = i;
      }
    })();
    var c,
      u = [],
      l = !1,
      d = -1;
    function m() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && p());
    }
    function p() {
      if (!l) {
        var e = s(m);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === i || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function f(e, t) {
      (this.fun = e), (this.array = t);
    }
    function h() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new f(e, t)), 1 !== u.length || l || s(p);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = h),
      (o.addListener = h),
      (o.once = h),
      (o.off = h),
      (o.removeListener = h),
      (o.removeAllListeners = h),
      (o.emit = h),
      (o.prependListener = h),
      (o.prependOnceListener = h),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  230: function (e, t, r) {
    "use strict";
    t.a = function () {
      return !1;
    };
  },
  236: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = [
      "service.block.si",
      "service1.block.si",
      "service2.block.si",
      "bm.blocksi.net",
      "blocksimanager.appspot.com",
      "apis.google.com",
      "storage.googleapis.com",
      "accounts.youtube.com",
      "sb-ssl.google.com",
      "www.googleapis.com",
      "googleapis.com",
      "accounts.google.com",
      "blocksimanagerv2.appspot.com",
      "teacher.blocksi.net",
      "www.block.si",
      "parent.blocksi.net",
      "teacher-v2.blocksi.net",
    ];
    try {
      n.push(chrome.runtime.id);
    } catch (e) {}
    t.default = n;
  },
  237: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.generateFlaggedKeywordsRegexList = t.getFlaggedKeywords = void 0);
    var n,
      o = r(238),
      a = (n = o) && n.__esModule ? n : { default: n },
      i = r(26);
    (t.getFlaggedKeywords = async function (e) {
      let t = [];
      try {
        return (
          (
            await a.default.get(`${i.configHost}/getAllAlerts_v2/${e}`)
          ).data.alerts.forEach((e) => {
            !0 === e.enabled &&
              e.Filters.flagged &&
              (t = [...t, ...e.Filters.flagged]);
          }),
          [...new Set(t)]
        );
      } catch (e) {
        return [];
      }
    }),
      (t.generateFlaggedKeywordsRegexList = function (e) {
        const t = [];
        return (
          e.forEach((e) => {
            let r = e;
            "*" === r[0] && (r = r.replace("*", ".*")),
              "*" === r[r.length - 1] && (r = r.replace(/.$/, "[^ ]*"));
            try {
              t.push(new RegExp(`\\b${r}\\b`, "gi"));
            } catch (e) {
              console.log(e);
            }
          }),
          t
        );
      });
  },
  238: function (e, t, r) {
    e.exports = r(239);
  },
  239: function (e, t, r) {
    "use strict";
    var n = r(10),
      o = r(109),
      a = r(241),
      i = r(100);
    function s(e) {
      var t = new a(e),
        r = o(a.prototype.request, t);
      return n.extend(r, a.prototype, t), n.extend(r, t), r;
    }
    var c = s(i);
    (c.Axios = a),
      (c.create = function (e) {
        return s(n.merge(i, e));
      }),
      (c.Cancel = r(113)),
      (c.CancelToken = r(254)),
      (c.isCancel = r(112)),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = r(255)),
      (e.exports = c),
      (e.exports.default = c);
  },
  240: function (e, t) {
    e.exports = function (e) {
      return (
        null != e &&
        null != e.constructor &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    };
  },
  241: function (e, t, r) {
    "use strict";
    var n = r(100),
      o = r(10),
      a = r(249),
      i = r(250);
    function s(e) {
      (this.defaults = e),
        (this.interceptors = { request: new a(), response: new a() });
    }
    (s.prototype.request = function (e) {
      "string" == typeof e &&
        (e = o.merge({ url: arguments[0] }, arguments[1])),
        ((e = o.merge(n, { method: "get" }, this.defaults, e)).method =
          e.method.toLowerCase());
      var t = [i, void 0],
        r = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        r = r.then(t.shift(), t.shift());
      return r;
    }),
      o.forEach(["delete", "get", "head", "options"], function (e) {
        s.prototype[e] = function (t, r) {
          return this.request(o.merge(r || {}, { method: e, url: t }));
        };
      }),
      o.forEach(["post", "put", "patch"], function (e) {
        s.prototype[e] = function (t, r, n) {
          return this.request(o.merge(n || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = s);
  },
  242: function (e, t, r) {
    "use strict";
    var n = r(10);
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[n]);
      });
    };
  },
  243: function (e, t, r) {
    "use strict";
    var n = r(111);
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus;
      r.status && o && !o(r.status)
        ? t(
            n(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          )
        : e(r);
    };
  },
  244: function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (
        (e.config = t), r && (e.code = r), (e.request = n), (e.response = o), e
      );
    };
  },
  245: function (e, t, r) {
    "use strict";
    var n = r(10);
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var a;
      if (r) a = r(t);
      else if (n.isURLSearchParams(t)) a = t.toString();
      else {
        var i = [];
        n.forEach(t, function (e, t) {
          null != e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                i.push(o(t) + "=" + o(e));
            }));
        }),
          (a = i.join("&"));
      }
      return a && (e += (-1 === e.indexOf("?") ? "?" : "&") + a), e;
    };
  },
  246: function (e, t, r) {
    "use strict";
    var n = r(10),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        a,
        i = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((a = e.indexOf(":")),
              (t = n.trim(e.substr(0, a)).toLowerCase()),
              (r = n.trim(e.substr(a + 1))),
              t)
            ) {
              if (i[t] && o.indexOf(t) >= 0) return;
              i[t] =
                "set-cookie" === t
                  ? (i[t] ? i[t] : []).concat([r])
                  : i[t]
                  ? i[t] + ", " + r
                  : r;
            }
          }),
          i)
        : i;
    };
  },
  247: function (e, t, r) {
    "use strict";
    var n = r(10);
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function o(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var r = n.isString(t) ? o(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  248: function (e, t, r) {
    "use strict";
    var n = r(10);
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, o, a, i) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
              n.isString(o) && s.push("path=" + o),
              n.isString(a) && s.push("domain=" + a),
              !0 === i && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  249: function (e, t, r) {
    "use strict";
    var n = r(10);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  25: function (e, t, r) {
    "use strict";
    var n = r(16),
      o = r(15);
    t.a = function (e) {
      return (
        "symbol" == typeof e ||
        (Object(o.a)(e) && "[object Symbol]" == Object(n.a)(e))
      );
    };
  },
  250: function (e, t, r) {
    "use strict";
    var n = r(10),
      o = r(251),
      a = r(112),
      i = r(100),
      s = r(252),
      c = r(253);
    function u(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        u(e),
        e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers || {}
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || i.adapter)(e).then(
          function (t) {
            return (
              u(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              a(t) ||
                (u(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  251: function (e, t, r) {
    "use strict";
    var n = r(10);
    e.exports = function (e, t, r) {
      return (
        n.forEach(r, function (r) {
          e = r(e, t);
        }),
        e
      );
    };
  },
  252: function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  253: function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  254: function (e, t, r) {
    "use strict";
    var n = r(113);
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || ((r.reason = new n(e)), t(r.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
  },
  255: function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  256: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = r(21);
    t.default = class {
      constructor() {
        (this.organizationUnit = ""),
          (this.organizationUnitId = ""),
          (this.companyId = ""),
          (this.bmVersion = "2"),
          (this.userEmail = ""),
          (this.firstName = ""),
          (this.lastName = ""),
          (this.accountActive = !1),
          (this.blocksiVersion = ""),
          (this.location = "inschool"),
          (this.geolocation = { coords: { lat: 0, lng: 0 } }),
          (this.deviceId = ""),
          (this.deviceMacAddress = ""),
          (this.ip = ""),
          (this.publicIp = "");
      }
      save() {
        chrome.storage.local.set({ UserData: this }, () => {
          console.groupCollapsed(
            `[${(0, n.getDateTime)()}] [LOCAL STORAGE] UserData settings saved`
          ),
            console.log(this),
            console.groupEnd();
        });
      }
      restore() {
        chrome.storage.local.get("UserData", (e) => {
          e &&
            (console.groupCollapsed(
              `[${(0,
              n.getDateTime)()}] [LOCAL STORAGE] UserData settings restored`
            ),
            Object.assign(this, e.UserData),
            console.log(JSON.stringify(e.UserData)),
            console.groupEnd());
        });
      }
    };
  },
  257: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = s(r(270)),
      o = s(r(258)),
      a = s(r(259)),
      i = r(21);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = class {
      constructor() {
        this.defaults();
      }
      set(e) {
        Object.assign(this, e);
      }
      clearSettings() {
        this.defaults();
      }
      save() {
        chrome.storage.local.set({ UserSettings: this }, () => {
          console.groupCollapsed(
            `[${(0,
            i.getDateTime)()}] [LOCAL STORAGE] UserSettings settings saved`
          ),
            console.log(this),
            console.groupEnd();
        });
      }
      restore() {
        chrome.storage.local.get("UserSettings", (e) => {
          console.groupCollapsed(
            `[${(0,
            i.getDateTime)()}] [LOCAL STORAGE] UserSettings settings restored`
          ),
            Object.assign(this, e.UserSettings),
            console.log(JSON.stringify(e.UserSettings)),
            console.groupEnd();
        });
      }
      whitelistAdd(e, t, r) {
        function n(e, t) {
          e.findIndex((e) => e[0] === t[0]) < 0 && e.unshift(t);
        }
        e.forEach((e) => {
          if ("/" === e.pathname) {
            this.bwList.find(
              (t) => t[0] === e.hostname && "assessment" === t[2]
            ) ||
              n(
                this.bwList,
                null === t
                  ? [e.hostname, "0", "block/allow"]
                  : [e.hostname, "0", t, r]
              );
          } else
            n(
              this.bwList,
              null === t
                ? [e.hostname + e.pathname + e.search, "0", "block/allow"]
                : [e.hostname + e.pathname + e.search, "0", t, r]
            );
        });
      }
      whitelistRemoveType(e) {
        this.bwList = (0, n.default)(this.bwList, (t) => e === t[2]);
      }
      whitelistRemove(e, t) {
        this.bwList = t
          ? (0, n.default)(this.bwList, (e) => t === e[3])
          : (0, n.default)(this.bwList, (t) => e === t[2]);
      }
      clearFilters() {
        (this.webFilter = {
          100: 0,
          101: 0,
          102: 0,
          200: 0,
          201: 0,
          202: 0,
          203: 0,
          204: 0,
          205: 0,
          206: 0,
          207: 0,
          208: 0,
          300: 0,
          301: 0,
          302: 0,
          303: 0,
          304: 0,
          305: 0,
          306: 0,
          307: 0,
          308: 0,
          309: 0,
          310: 0,
          311: 0,
          312: 0,
          313: 0,
          314: 0,
          400: 0,
          401: 0,
          402: 0,
          403: 0,
          404: 0,
          405: 0,
          500: 0,
          501: 0,
          502: 0,
          503: 0,
          504: 0,
          505: 0,
          506: 0,
          507: 0,
          508: 0,
          509: 0,
          510: 0,
          600: 0,
          601: 0,
          602: 0,
          603: 0,
          604: 0,
          605: 0,
          606: 0,
          607: 0,
          608: 0,
          609: 0,
          610: 0,
          611: 0,
          612: 0,
          613: 0,
          614: 0,
          615: 0,
          616: 0,
          617: 0,
          618: 0,
          619: 0,
          620: 0,
          621: 0,
          622: 0,
          623: 0,
          624: 0,
          625: 0,
          626: 0,
          627: 0,
          628: 0,
          629: 0,
          630: 0,
          631: 0,
          632: 0,
          633: 0,
          700: 0,
        }),
          (this.ytFilter = {
            1: 0,
            2: 0,
            10: 0,
            15: 0,
            17: 0,
            18: 0,
            19: 0,
            20: 0,
            21: 0,
            22: 0,
            23: 0,
            24: 0,
            25: 0,
            26: 0,
            27: 0,
            28: 0,
            29: 0,
            30: 0,
            31: 0,
            32: 0,
            33: 0,
            34: 0,
            35: 0,
            36: 0,
            37: 0,
            38: 0,
            39: 0,
            40: 0,
            41: 0,
            42: 0,
            43: 0,
            44: 0,
          }),
          (this.customCategories = []),
          (this.BlockUrl = "defaultBlockUrl"),
          (this.ytAgeRestriction = !1),
          (this.ytChannelList = []),
          (this.ytKeywords = []),
          (this.bwList = []),
          (this.regExList = []),
          (this.RegExListId = void 0),
          (this.AccTimeEnabled = !1),
          (this.AccTimes = [[], [], [], [], [], [], []]),
          (this.AccTimesYT = [[], [], [], [], [], [], []]),
          (this.AccTimesGaming = [[], [], [], [], [], [], []]),
          (this.AccTimesSocialMedia = [[], [], [], [], [], [], []]),
          (this.AccTimesStreaming = [[], [], [], [], [], [], []]),
          (this.SafeSearch = !1),
          (this.bedtimeSwitch = !1);
      }
      defaults() {
        (this.webFilter = {
          100: 0,
          101: 0,
          102: 0,
          200: 0,
          201: 0,
          202: 0,
          203: 0,
          204: 0,
          205: 0,
          206: 0,
          207: 0,
          208: 0,
          300: 0,
          301: 0,
          302: 0,
          303: 0,
          304: 0,
          305: 0,
          306: 0,
          307: 0,
          308: 0,
          309: 0,
          310: 0,
          311: 0,
          312: 0,
          313: 0,
          314: 0,
          400: 0,
          401: 0,
          402: 0,
          403: 0,
          404: 0,
          405: 0,
          500: 0,
          501: 0,
          502: 0,
          503: 0,
          504: 0,
          505: 0,
          506: 0,
          507: 0,
          508: 0,
          509: 0,
          510: 0,
          600: 0,
          601: 0,
          602: 0,
          603: 0,
          604: 0,
          605: 0,
          606: 0,
          607: 0,
          608: 0,
          609: 0,
          610: 0,
          611: 0,
          612: 0,
          613: 0,
          614: 0,
          615: 0,
          616: 0,
          617: 0,
          618: 0,
          619: 0,
          620: 0,
          621: 0,
          622: 0,
          623: 0,
          624: 0,
          625: 0,
          626: 0,
          627: 0,
          628: 0,
          629: 0,
          630: 0,
          631: 0,
          632: 0,
          633: 0,
          700: 0,
        }),
          (this.ytFilter = {
            1: 0,
            2: 0,
            10: 0,
            15: 0,
            17: 0,
            18: 0,
            19: 0,
            20: 0,
            21: 0,
            22: 0,
            23: 0,
            24: 0,
            25: 0,
            26: 0,
            27: 0,
            28: 0,
            29: 0,
            30: 0,
            31: 0,
            32: 0,
            33: 0,
            34: 0,
            35: 0,
            36: 0,
            37: 0,
            38: 0,
            39: 0,
            40: 0,
            41: 0,
            42: 0,
            43: 0,
            44: 0,
          }),
          (this.country = ""),
          (this.state = ""),
          (this.customCategories = []),
          (this.BlockUrl = "defaultBlockUrl"),
          (this.ytAgeRestriction = !1),
          (this.ytChannelList = []),
          (this.ytKeywords = []),
          (this.bwList = []),
          (this.regExList = []),
          (this.RegExListId = void 0),
          (this.AccTimeEnabled = !1),
          (this.AccTimes = [[], [], [], [], [], [], []]),
          (this.AccTimesYT = [[], [], [], [], [], [], []]),
          (this.AccTimesGaming = [[], [], [], [], [], [], []]),
          (this.AccTimesSocialMedia = [[], [], [], [], [], [], []]),
          (this.AccTimesStreaming = [[], [], [], [], [], [], []]),
          (this.SafeSearch = !1),
          (this.GeolocalizedMonitoring = !1),
          (this.analyticsOptions = { toggle: !0, hideUser: !1, hideOU: !1 }),
          (this.sendAnalytics = !0),
          (this.analyticsExceptions = []),
          (this.timePolicies = []),
          (this.DeviceTracking = !1),
          (this.screenshotQuality = 5),
          (this.locationBy = "ip"),
          (this.allowAccessRequests = !1),
          (this.geofencing = !0),
          (this.videoConference = !1),
          (this.requestAccess = !1),
          (this.ipRanges = []),
          (this.publicIps = []),
          (this.subnets = []),
          (this.removedIps = []),
          (this.locations = []),
          (this.Youtube = {
            Autoplay: !1,
            Comments: !1,
            Sidebar: !1,
            Restricted: "",
          }),
          (this.policy = ""),
          (this.parentAllowList = !1),
          (this.debug = !1),
          (this.blocksiCategories = o.default),
          (this.customerCountries = a.default),
          (this.timezone = ""),
          (this.realtimeScreen = !0),
          (this.sendMetrics = !1),
          (this.penalty = !1),
          (this.enableClassVitals = !1),
          (this.datadog = !1),
          (this.loggly = !1),
          (this.bedtimeSwitch = !1),
          (this.maxTabLimit = void 0);
      }
    };
  },
  258: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = [
      {
        subcategories: [
          {
            subcategoryNumber: 100,
            subCategoryName: "Malicious content",
            description:
              "Sites that host or distribute malware or whose purpose for existence is as part of a malicious network or the malware ecosystem. Malware is defined as software that takes control of a computer, modifies computer settings, or collects or reports personal information without the permission of the end user.",
          },
          {
            subcategoryNumber: 101,
            subCategoryName: "Phishing & Fraud",
            description:
              "Sites that are designed to appear as a legitimate bank or retailer with the intent to fraudulently capture sensitive data (i.e. credit card numbers, pin numbers).",
          },
          {
            subcategoryNumber: 102,
            subCategoryName: "Web SPAM ",
            description:
              "Sites that are part of the spam ecosystem, including sites linked in unsolicited bulk electronic messages and sites used to generate or propagate such messages.",
          },
        ],
        mainCategoryNumber: 1,
        mainCategoryName: "Web Security",
      },
      {
        subcategories: [
          {
            subcategoryNumber: 200,
            subCategoryName: "Illegal Drugs",
            description:
              "Sites that provide information on the manufacturing or selling of illegal drugs or prescription drugs obtained illegally.",
          },
          {
            subcategoryNumber: 201,
            subCategoryName: "Hacking",
            description:
              "Sites that distribute, promote or provide tools or other information intended to help gain unauthorized or illegal access to computers, computer networks, or computerized communication and control systems.",
          },
          {
            subcategoryNumber: 202,
            subCategoryName: "Piracy/Copyright Concerns",
            description:
              "Sites that provide information or technology for cracking or pirating software or other protected intellectual property, and sites that distribute such media.",
          },
          {
            subcategoryNumber: 203,
            subCategoryName: "Discrimination/Racism",
            description: "Sites encouraging bigotry or discrimination.\n",
          },
          {
            subcategoryNumber: 204,
            subCategoryName: "Violence/Hate",
            description:
              "Sites that depict extreme physical harm to people, animals or property, or that advocate or provide instructions on how to cause such harm. Also includes sites that advocate, depict hostility or aggression toward, or denigrate an individual or group on the basis of race, religion, gender, nationality, ethnic origin, or other involuntary characteristics. Includes content that glorifies self-mutilation or suicide.",
          },
          {
            subcategoryNumber: 205,
            subCategoryName: "Extreme",
            description:
              "Sites that are extreme in nature and are not suitable for general consumption. That includes sites for radical militia groups or movements with aggressive anti-government convictions or beliefs.",
          },
          {
            subcategoryNumber: 206,
            subCategoryName: "Proxy & VPN",
            description:
              "Sites that provide information on how to bypass web filtering or gain access to URLs in any way that bypasses the filtering system.",
          },
          {
            subcategoryNumber: 207,
            subCategoryName: "Plagiarism",
            description:
              "Sites that advocate or assist plagiarism or provide or sell questionable educational material, school essays or diplomas.",
          },
          {
            subcategoryNumber: 208,
            subCategoryName: "Child Abuse",
            description:
              "Sites that have been verified by the Internet Watch Foundation to contain or distribute images of non-adult children that are depicted in a state of abuse.",
          },
        ],
        mainCategoryNumber: 2,
        mainCategoryName: "Illegal Activities",
      },
      {
        subcategories: [
          {
            subcategoryNumber: 300,
            subCategoryName: "Alternative Spirituality/Belief",
            description:
              "Sites that promote and provide information on a wide range of non-traditional and/or non-religious spiritual, existential, experiential, and philosophical belief systems. Includes sites related to atheism, agnosticism, and mysticism; sites related to quasi-religious, philosophical or spiritual belief systems and practices that do not include formally established religious meetings, places of worship, organizational structure, or dogma; and sites that endorse or offer information about affecting or influencing real events through supernatural or magical means. Also includes sites that discuss or deal with paranormal or unexplained events. This category does not include sites centered around traditional, organized religious belief, practice, and observance (Religion).",
          },
          {
            subcategoryNumber: 301,
            subCategoryName: "Abortion",
            description:
              "Sites which provide information or arguments in favor of or against abortion, describe abortion procedures, offer help in obtaining or avoiding abortion, or provide information on the effects, or lack thereof, of abortion.",
          },
          {
            subcategoryNumber: 302,
            subCategoryName: "Adult/Mature Content",
            description:
              "Sites that contain material of adult nature that does not necessarily contain excessive violence, sexual content, or nudity. These sites include very profane or vulgar content and sites that are not appropriate for children.",
          },
          {
            subcategoryNumber: 303,
            subCategoryName: "Political/Social Advocacy",
            description:
              "Sites sponsored by groups or individuals that provide information on political parties, special interest groups, organizations, factions or individuals that promote change or reform in public policy, public opinion, social practice, social justice, or related economic activities.",
          },
          {
            subcategoryNumber: 304,
            subCategoryName: "Gambling",
            description:
              "Sites that provide gambling odds and information or allow online betting, lotteries or casinos.",
          },
          {
            subcategoryNumber: 305,
            subCategoryName: "Nudity",
            description:
              "Sites containing nude or seminude depictions of the human body. These depictions are not necessarily sexual in intent or effect, but may include sites containing nude paintings or photo galleries of artistic nature. ",
          },
          {
            subcategoryNumber: 306,
            subCategoryName: "Pornography",
            description:
              "Sites that contain sexually explicit material for the purpose of arousing a sexual or prurient interest.",
          },
          {
            subcategoryNumber: 307,
            subCategoryName: "Dating",
            description:
              "Sites that enable users to meet and interact with each other for the purposes of dating or making friends.",
          },
          {
            subcategoryNumber: 308,
            subCategoryName: "Weapons",
            description:
              "Sites that sell, review, or describe weapons such as guns, knives or martial arts devices, or provide information on their use.",
          },
          {
            subcategoryNumber: 309,
            subCategoryName: "Marijuana",
            description:
              "Sites that discuss, encourage, promote, offer, sell, supply or otherwise advocate the use, cultivation, manufacture or distribution of marijuana, whether for recreational or medicinal purposes.",
          },
          {
            subcategoryNumber: 310,
            subCategoryName: "Sex Education",
            description:
              "Sites that provide information (sometimes graphic) on reproduction, sexual development, safe sex practices, sexuality, birth control, tips for better sex, and sexual enhancement products.",
          },
          {
            subcategoryNumber: 311,
            subCategoryName: "Alcohol",
            description:
              "Sites that discuss, encourage, promote, offer, sell, supply, or otherwise advocate the use or creation of alcoholic beverages, including but not limited to beer, wine, and hard liquors.",
          },
          {
            subcategoryNumber: 312,
            subCategoryName: "Tobaco",
            description:
              "Sites that discuss, encourage, promote, offer, sell, supply, or otherwise advocate the use or creation of tobacco or tobacco-related products ",
          },
          {
            subcategoryNumber: 313,
            subCategoryName: "Intimate Apparel/Swimsuit",
            description:
              "Sites that contain images or offer the sale of swimsuits or intimate apparel or other types of suggestive clothing. ",
          },
          {
            subcategoryNumber: 314,
            subCategoryName: "Hunting and Military games",
            description:
              "Sites that feature sport hunting, military games, paintball facilities, etc. Includes all related clubs, organizations and groups.",
          },
        ],
        mainCategoryNumber: 3,
        mainCategoryName: "Adult Content",
      },
      {
        _id: "5beac2ea34a48bf7ef016fd8",
        subcategories: [
          {
            subcategoryNumber: 400,
            subCategoryName: "Software Downloads",
            description:
              "Sites wholly dedicated to the download of software for any type of computer or computing device whether for payment or at no charge. Does not include sites or pages that offer a software download as a subset of their overall content.",
          },
          {
            subcategoryNumber: 401,
            subCategoryName: "File Storage/Sharing",
            description:
              "Sites and services that provide online file or note storage, file sharing, synchronization of files between devices and/or network-based data backup and restoration. These services may provide the means to upload, download, paste, organize, post and share documents, files, computer code, text, non-copyright-restricted videos, music and other electronically formatted information in virtual data storage. Does not include Office/Business Applications or Media Sharing. ",
          },
          {
            subcategoryNumber: 402,
            subCategoryName: "Streaming Media ",
            description:
              "Sites that allow onine watching of the video content and downloading MP3 or other multimedia files.",
          },
          {
            subcategoryNumber: 403,
            subCategoryName: "Peer-to-peer File Sharing",
            description:
              "Sites that allow users to share files and data storage between each other using P2P protocol. Illegal movie and music download is covered under Piracy/Copyright Concerns category. ",
          },
          {
            subcategoryNumber: 404,
            subCategoryName: "Radio/TV streaming",
            description:
              "Sites that broadcasts radio and televison content via the internet.",
          },
          {
            subcategoryNumber: 405,
            subCategoryName: "Internet Telephony ",
            description:
              "Sites that facilitate Internet telephony or provide Internet telephony services such as voice over IP (VOIP).",
          },
        ],
        mainCategoryNumber: 4,
        mainCategoryName: "Bandwidth Consuming",
      },
      {
        _id: "5beac2ea34a48bf7ef016fd9",
        subcategories: [
          {
            subcategoryNumber: 500,
            subCategoryName: "Financial Institutions",
            description:
              "Sites for banks, brokerages, trusts, and other financial organizations.",
          },
          {
            subcategoryNumber: 501,
            subCategoryName: "Search Engines/Portals",
            description:
              "Sites that support searching the Internet, indices, and directories.",
          },
          {
            subcategoryNumber: 502,
            subCategoryName: "General Organizations",
            description:
              "Sites for groups, clubs or organisations with similar interests. Interst can be professional, social, humanitarian or recreational in nature. ",
          },
          {
            subcategoryNumber: 503,
            subCategoryName: "Business/Economy",
            description:
              "Sites devoted to business firms, business information, economics, marketing, business management and entrepreneurship.",
          },
          {
            subcategoryNumber: 504,
            subCategoryName: "Computer/Information Security",
            description:
              "Sites that provide information or tools for securing or safeguarding computers, networks, and other data systems.",
          },
          {
            subcategoryNumber: 505,
            subCategoryName: "Government/Legal",
            description:
              "Sites sponsored by or which provide information on government, government agencies and government services. Legal Organizations: Sites that discuss or explain laws of various government entities.",
          },
          {
            subcategoryNumber: 506,
            subCategoryName: "Techology",
            description:
              "Sites that sponsor or provide information, news, reviews, opinions and coverage of computing, computing devices and technology, consumer electronics, and general technology.",
          },
          {
            subcategoryNumber: 507,
            subCategoryName: "Government - Military",
            description:
              "Sites related to organized military/armed forces and military agencies. Sites related to civil and extreme military organizations are excluded.",
          },
          {
            subcategoryNumber: 508,
            subCategoryName: "Web Hosting",
            description:
              "Sites of organizations that provide top-level domain pages, as well as web communities, blog hosting sites, and other hosting services.",
          },
          {
            subcategoryNumber: 509,
            subCategoryName: "Secure Websites",
            description:
              "Sites that institute security measures such as authentication, passwords, registration, etc.",
          },
          {
            subcategoryNumber: 510,
            subCategoryName: "Web-based Applications",
            description:
              "Sites with interactive, Web-based office, productivity, collaboration, and business applications.",
          },
          {
            subcategoryNumber: 511,
            subCategoryName: "Online Meeting",
            description: "Sites related to web conferencing.",
          },
        ],
        mainCategoryNumber: 5,
        mainCategoryName: "Business",
      },
      {
        subcategories: [
          {
            subcategoryNumber: 600,
            subCategoryName: "Web Advertising",
            description:
              "Sites that provide online advertisements, banners, or the means to identify and market to existing or potential customers based on their browsing or online activity.",
          },
          {
            subcategoryNumber: 601,
            subCategoryName: "Brokerage/Trading ",
            description:
              "Sites that support active trading of securities and management of investments. ",
          },
          {
            subcategoryNumber: 602,
            subCategoryName: "Games",
            description:
              "Sites that support playing or downloading video games, computer games, or electronic games. ",
          },
          {
            subcategoryNumber: 603,
            subCategoryName: "Web-based Email",
            description:
              "Sites offering Web-based email services,such as online email reading, and mailing list services\n",
          },
          {
            subcategoryNumber: 604,
            subCategoryName: "Entertainment",
            description:
              "Sites that provide information about or promote popular culture including but not limited to film, film critiques and discussions, film trailers, box office, television, home entertainment, music, comics, graphic novels, literary news, and reviews. ",
          },
          {
            subcategoryNumber: 605,
            subCategoryName: "Art/Culture",
            description:
              "Sites that promote cultural understanding of art like sculpture, paintings, literature, music, dance, ballet, performance art, etc. It includes foundations that support or house them such as museums, galleries, symphonies, museums and planetariums.",
          },
          {
            subcategoryNumber: 606,
            subCategoryName: "Education",
            description:
              "Sites that offer education information, distance learning, or trade school information or programs. Includes sites that are sponsored by schools, educational facilities, faculty, or alumni groups.",
          },
          {
            subcategoryNumber: 607,
            subCategoryName: "Health & Wellnes",
            description:
              "Sites that provide health and wellness material or information about health products and service providers.",
          },
          {
            subcategoryNumber: 608,
            subCategoryName: "Job Search/Careers",
            description:
              "Sites that provide assistance in finding employment, and tools for locating prospective employers.",
          },
          {
            subcategoryNumber: 609,
            subCategoryName: "Medicine",
            description:
              "Sites that provide information about approved drugs and their medical use. This category includes sites of online shopping for medicine.",
          },
          {
            subcategoryNumber: 610,
            subCategoryName: "News/Media",
            description:
              "Sites that contain general news information on a local, national and international level.",
          },
          {
            subcategoryNumber: 611,
            subCategoryName: "Social Networking",
            description:
              "Sites that enable people to connect with others to form an online community. Typically members describe themselves in personal Web page profiles and form interactive networks, linking them with other members based on common interests or acquaintances. ",
          },
          {
            subcategoryNumber: 612,
            subCategoryName: "Political Organizations",
            description:
              "Sites that are sponsored by or provide information about political parties and interest groups focused on elections or legislation. This is not to be confused with Government and Legal Organizations, and Advocacy Groups.",
          },
          {
            subcategoryNumber: 613,
            subCategoryName: "Reference",
            description:
              "Sites containing personal, professional, or educational reference, including online dictionaries, maps, censuses, almanacs, library catalogues, genealogy-related sites and scientific information.",
          },
          {
            subcategoryNumber: 614,
            subCategoryName: "Religion",
            description:
              "Sites that promote and provide information on traditional, organized religious belief, practice and observance and directly-related subjects such as religious catechism or dogma and places of religious worship or observance.",
          },
          {
            subcategoryNumber: 615,
            subCategoryName: "Shoping",
            description:
              "Sites that feature on-line promotion or sale of general goods and services such as electronics, flowers, jewelry, music, etc, ",
          },
          {
            subcategoryNumber: 616,
            subCategoryName: "Society/Lifestyle",
            description:
              "Sites providing information on matters of daily life. This includes pet care, home improvement, fashion/beauty tips, hobbies and other tasks that comprise everyday life. ",
          },
          {
            subcategoryNumber: 617,
            subCategoryName: "Sports/Recreation",
            description:
              "Sites that promote or provide information about spectator sports or recreational activities. ",
          },
          {
            subcategoryNumber: 618,
            subCategoryName: "Travel",
            description:
              "Sites that promote or provide opportunity for travel planning, including finding and making travel reservations, sharing of travel experiences (pro or con) vehicle rentals, descriptions of travel destinations, or promotions for hotels/casinos or other travel related accommodations.",
          },
          {
            subcategoryNumber: 619,
            subCategoryName: "Vehicles",
            description:
              "Sites that provide information on or promote vehicles, boats, or aircraft, including sites that support online purchase of vehicles or parts.",
          },
          {
            subcategoryNumber: 620,
            subCategoryName: "Dynamic Content",
            description: "URLs that are generated dynamically by a Web server.",
          },
          {
            subcategoryNumber: 621,
            subCategoryName: "Meaningless Content",
            description:
              "Sites that cannot be definitively categorized due to lack of or ambiguous content.",
          },
          {
            subcategoryNumber: 622,
            subCategoryName: "Paranormal",
            description:
              "UFOs, ghosts, cryptid, telekinesis, urban legends, and myths.",
          },
          {
            subcategoryNumber: 623,
            subCategoryName: "WebChat/IM",
            description:
              "Sites that host Web chat services and sites that allow users to communicate in real-time over the Internet.",
          },
          {
            subcategoryNumber: 624,
            subCategoryName: "WebChat/IM",
            description: "None",
          },
          {
            subcategoryNumber: 625,
            subCategoryName: "Newsgroups/Forums",
            description:
              "Sites that primarily offer access to newsgroups, messaging or bulletin board systems, or group blogs where participants can post comments, hold discussions, or seek opinions or expertise on a variety of topics.",
          },
          {
            subcategoryNumber: 626,
            subCategoryName: "Digital Cards",
            description:
              "Sites that enable the sending and receiving of digital postcards and greeting cards.",
          },
          {
            subcategoryNumber: 627,
            subCategoryName: "Child Education ",
            description:
              "Sites developed for children age 12 and under. Includes educational games, tools, organizations and schools. ",
          },
          {
            subcategoryNumber: 628,
            subCategoryName: "Real Estate",
            description:
              "Sites that provide information on renting, buying, or selling real estate or properties.",
          },
          {
            subcategoryNumber: 629,
            subCategoryName: "Restaurant/Dining/Food",
            description:
              "Sites that list, review, discuss, advertise and promote food, catering, dining services, cooking and recipes.",
          },
          {
            subcategoryNumber: 630,
            subCategoryName: "Personal Websites - Blogs",
            description:
              "Sites consisting primarily of user-generated content like personal information, opinions and ideas of the owners. These sites do not represent businesses, institutions or governmental entities. ",
          },
          {
            subcategoryNumber: 631,
            subCategoryName: "Content Servers",
            description:
              "Servers that provide commercial hosting for a variety of content such as images and media files. ",
          },
          {
            subcategoryNumber: 632,
            subCategoryName: "Domain Parking",
            description:
              "Sites that are place holders of domains and typically provides advertising or meaningful content. ",
          },
          {
            subcategoryNumber: 633,
            subCategoryName: "Personal Privacy",
            description:
              "Sites providing online banking, trading, health care, and others that contain personal privacy information. ",
          },
        ],
        mainCategoryNumber: 6,
        mainCategoryName: "Personal",
      },
      { subcategories: [], mainCategoryNumber: 7, mainCategoryName: "Unrated" },
    ];
  },
  259: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = [
      {
        name: "Andorra",
        postalAbbreviation: "AD",
        states: [{ name: "Andorra la Vella", postalAbbreviation: "07" }],
      },
      {
        name: "United States of America",
        postalAbbreviation: "US",
        states: [
          { name: "Alabama", postalAbbreviation: "AB" },
          { name: "Alaska", postalAbbreviation: "AK" },
          { name: "Arkansas", postalAbbreviation: "AR" },
          {
            name: "California",
            postalAbbreviation: "CA",
            county: [{ name: "Los Angeles", postalAbbreviation: "LA" }],
          },
          { name: "Colorado", postalAbbreviation: "CO" },
          { name: "Conneticut", postalAbbreviation: "CT" },
          { name: "Delaware", postalAbbreviation: "DE" },
          { name: "District of Columbia", postalAbbreviation: "DC" },
          { name: "Florida", postalAbbreviation: "FL" },
          { name: "Georgia", postalAbbreviation: "GA" },
          { name: "Hawaii", postalAbbreviation: "HI" },
          { name: "Idaho", postalAbbreviation: "ID" },
          { name: "Illinois", postalAbbreviation: "IL" },
          { name: "Indiana", postalAbbreviation: "IN" },
          { name: "Iowa", postalAbbreviation: "IA" },
          { name: "Kansas", postalAbbreviation: "KS" },
          { name: "Kentucky", postalAbbreviation: "KY" },
          {
            name: "Louisiana",
            postalAbbreviation: "LA",
            county: [{ name: "New Orleans", postalAbbreviation: "NO" }],
          },
          { name: "Maine", postalAbbreviation: "ME" },
          { name: "Maryland", postalAbbreviation: "MD" },
          { name: "Massachusetts", postalAbbreviation: "MA" },
          { name: "Michigan", postalAbbreviation: "MI" },
          { name: "Minnesota", postalAbbreviation: "MN" },
          { name: "Mississippi", postalAbbreviation: "MS" },
          { name: "Missouri", postalAbbreviation: "MO" },
          { name: "Montana", postalAbbreviation: "MT" },
          { name: "Nebraska", postalAbbreviation: "NE" },
          { name: "Nevada", postalAbbreviation: "NV" },
          { name: "New Hampshire", postalAbbreviation: "NH" },
          { name: "New Jersey", postalAbbreviation: "NJ" },
          { name: "New Mexico", postalAbbreviation: "NM" },
          { name: "New York", postalAbbreviation: "NY" },
          { name: "North Carolina", postalAbbreviation: "NC" },
          { name: "North Dakota", postalAbbreviation: "ND" },
          { name: "Ohio", postalAbbreviation: "OH" },
          { name: "Oklahoma", postalAbbreviation: "OK" },
          { name: "Orgeon", postalAbbreviation: "OR" },
          { name: "Pennsylvania", postalAbbreviation: "PA" },
          { name: "Rhode Island", postalAbbreviation: "RI" },
          { name: "South Carolina", postalAbbreviation: "SR" },
          { name: "South Dakota", postalAbbreviation: "SD" },
          { name: "Tennessee", postalAbbreviation: "TN" },
          { name: "Texas", postalAbbreviation: "TX" },
          { name: "Utah", postalAbbreviation: "UT" },
          { name: "Vermont", postalAbbreviation: "VT" },
          { name: "Virginia", postalAbbreviation: "VA" },
          { name: "Washington", postalAbbreviation: "WA" },
          { name: "West Virginia", postalAbbreviation: "WV" },
          { name: "Wisconsin", postalAbbreviation: "WI" },
          { name: "Wyoming", postalAbbreviation: "WY" },
        ],
      },
      { name: "Singapore", postalAbbreviation: "SG" },
      { name: "United Kingdom", postalAbbreviation: "GB" },
      { name: "Spain", postalAbbreviation: "ES" },
      { name: "France", postalAbbreviation: "FR" },
      { name: "Norway", postalAbbreviation: "NO" },
      { name: "Sweden", postalAbbreviation: "SE" },
      {
        name: "Australia",
        postalAbbreviation: "AU",
        states: [
          { name: "Australian Capital Territory", postalAbbreviation: "ACT" },
          { name: "New South Wales", postalAbbreviation: "NSW" },
          { name: "Northern Territory", postalAbbreviation: "NT" },
          { name: "Queensland", postalAbbreviation: "QLD" },
          { name: "South Australia", postalAbbreviation: "SA" },
          { name: "Tasmania", postalAbbreviation: "TAS" },
          { name: "Victoria", postalAbbreviation: "VIC" },
          { name: "Western Australia", postalAbbreviation: "WA" },
        ],
      },
      { name: "Mexico", postalAbbreviation: "MX" },
      {
        name: "Canada",
        postalAbbreviation: "CA",
        states: [
          { name: "Alberta", postalAbbreviation: "AB" },
          { name: "British Columbia", postalAbbreviation: "BC" },
          { name: "Manitoba", postalAbbreviation: "MB" },
          { name: "New Brunswick", postalAbbreviation: "NB" },
          { name: "Newfoundland and Labrador", postalAbbreviation: "NL" },
          { name: "Nova Scotia", postalAbbreviation: "NS" },
          { name: "Northwest Territories", postalAbbreviation: "NT" },
          { name: "Nunavut", postalAbbreviation: "NU" },
          { name: "Ontario", postalAbbreviation: "ON" },
          { name: "Prince Edward Island", postalAbbreviation: "PE" },
          { name: "Quebec", postalAbbreviation: "QC" },
          { name: "Saskatchewan", postalAbbreviation: "SK" },
          { name: "Yukon", postalAbbreviation: "YT" },
        ],
      },
    ];
  },
  26: function (e, t, r) {
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
  260: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = class {
      constructor() {
        this.defaults();
      }
      clearSettings() {
        this.defaults();
      }
      defaults() {
        (this.isActive = !1),
          (this.teacher = ""),
          (this.secondTeacher = ""),
          (this.classTitle = ""),
          (this.allowedTabs = 0),
          (this.classId = ""),
          (this.startTime = ""),
          (this.endTime = ""),
          (this.date = ""),
          (this.locked = !1),
          (this.urls = []),
          (this.enforceTimer = null),
          (this.enforce = !1),
          (this.enforceStartupPeriod = !1),
          (this.headsUp = !1),
          (this.savedTabs = []),
          (this.headsUpTimer = null),
          (this.assessment = !1),
          (this.savedBaList = []),
          (this.saveLogOut = []),
          (this.saveLogOutSanitized = []),
          (this.enableNotificationBadge = !0),
          (this.enableChat = !0),
          (this.raiseHandCheck = !1),
          (this.raiseHand = !1);
      }
    };
  },
  270: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(45),
      o = r(104);
    var a = function (e, t) {
        var r = [];
        return (
          Object(o.a)(e, function (e, n, o) {
            t(e, n, o) && r.push(e);
          }),
          r
        );
      },
      i = r(103),
      s = r(7);
    var c = function (e) {
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    };
    t.default = function (e, t) {
      return (Object(s.a)(e) ? n.a : a)(e, c(Object(i.a)(t, 3)));
    };
  },
  29: function (e, t, r) {
    "use strict";
    t.a = function (e) {
      return (
        "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      );
    };
  },
  30: function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      },
      o = r(49),
      a = r(7),
      i = r(42),
      s = r(47),
      c = r(48),
      u = Object.prototype.hasOwnProperty;
    var l = function (e, t) {
        var r = Object(a.a)(e),
          l = !r && Object(o.a)(e),
          d = !r && !l && Object(i.a)(e),
          m = !r && !l && !d && Object(c.a)(e),
          p = r || l || d || m,
          f = p ? n(e.length, String) : [],
          h = f.length;
        for (var b in e)
          (!t && !u.call(e, b)) ||
            (p &&
              ("length" == b ||
                (d && ("offset" == b || "parent" == b)) ||
                (m &&
                  ("buffer" == b || "byteLength" == b || "byteOffset" == b)) ||
                Object(s.a)(b, h))) ||
            f.push(b);
        return f;
      },
      d = Object.prototype;
    var m = function (e) {
      var t = e && e.constructor;
      return e === (("function" == typeof t && t.prototype) || d);
    };
    var p = (function (e, t) {
        return function (r) {
          return e(t(r));
        };
      })(Object.keys, Object),
      f = Object.prototype.hasOwnProperty;
    var h = function (e) {
        if (!m(e)) return p(e);
        var t = [];
        for (var r in Object(e))
          f.call(e, r) && "constructor" != r && t.push(r);
        return t;
      },
      b = r(41);
    t.a = function (e) {
      return Object(b.a)(e) ? l(e) : h(e);
    };
  },
  41: function (e, t, r) {
    "use strict";
    var n = r(46),
      o = r(29);
    t.a = function (e) {
      return null != e && Object(o.a)(e.length) && !Object(n.a)(e);
    };
  },
  42: function (e, t, r) {
    "use strict";
    (function (e) {
      var n = r(6),
        o = r(230),
        a =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        i = a && "object" == typeof e && e && !e.nodeType && e,
        s = i && i.exports === a ? n.a.Buffer : void 0,
        c = (s ? s.isBuffer : void 0) || o.a;
      t.a = c;
    }.call(this, r(114)(e)));
  },
  44: function (e, t, r) {
    "use strict";
    (function (e) {
      var r = "object" == typeof e && e && e.Object === Object && e;
      t.a = r;
    }.call(this, r(22)));
  },
  441: function (e, t, r) {
    e.exports = r(442);
  },
  442: function (e, t, r) {
    "use strict";
    var n = s(r(229)),
      o = s(r(236)),
      a = r(237),
      i = r(21);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    let c = !1,
      u = {};
    const l = location.host;
    let d = [];
    const m = [];
    function p(e) {
      if (e) {
        if (e.Autoplay) {
          if (
            document.querySelector(
              'div.ytp-autonav-toggle-button[aria-checked="true"]'
            )
          ) {
            document.querySelector(".ytp-autonav-toggle-button").click();
          }
        }
        if (e.Sidebar) {
          const e = document.querySelector(
              "div#secondary-inner.style-scope.ytd-watch-flexy"
            ),
            t = document.querySelector(
              "ytd-item-section-renderer.style-scope.ytd-watch-next-secondary-results-renderer"
            ),
            r = document.querySelector(
              "div#secondary.style-scope.ytd-watch-flexy"
            ),
            n = document.querySelector(
              "div#related.style-scope.ytd-watch-flexy"
            );
          e && (e.style.display = "none"),
            t && (t.style.display = "none"),
            r && (r.style.display = "none"),
            n && (n.style.display = "none");
        }
        if (e.Comments) {
          const e = document.getElementById("comments");
          e && e.remove();
        }
      }
    }
    function f() {
      [...document.getElementById("aRaiseHand").classList].includes(
        "changeBgHand"
      ) ||
        (document.getElementById("custom-icon").classList.add("fadeInHand"),
        document.getElementById("aRaiseHand").classList.add("changeBgHand"),
        chrome.runtime.sendMessage({ type: "RAISE_HAND_CLASS_SESSION" }));
    }
    function h() {
      chrome.runtime.sendMessage({ type: "CHAT_OPENED" }),
        chrome.runtime.sendMessage({ type: "OPEN_CHAT" });
    }
    function b(e) {
      document.getElementById(e.id) || document.body.appendChild(e);
    }
    const g = function () {
      const e = document.createElement("div"),
        t = document.createElement("input"),
        r = document.createElement("label"),
        n = document.createElement("span"),
        o = document.createElement("span"),
        a = document.createElement("a"),
        i = document.createElement("a"),
        s = document.createElement("img"),
        c = document.createElement("img");
      e.classList.add("menuG"),
        (e.id = "raiseHand"),
        (t.type = "checkbox"),
        (t.href = "#"),
        t.classList.add("menuG-open"),
        (t.name = "menuG-open"),
        (t.id = "menuG-open"),
        r.classList.add("menuG-open-button"),
        r.setAttribute("for", "menuG-open"),
        n.classList.add("hamburger", "hamburger-1"),
        o.classList.add("hamburger", "hamburger-2"),
        a.classList.add("menuG-item"),
        (a.id = "aRaiseHand"),
        i.classList.add("menuG-item"),
        (i.id = "aChatBubble"),
        (s.src = chrome.extension.getURL("images/raise-hand.svg")),
        s.classList.add("handy"),
        (s.id = "custom-icon"),
        a.addEventListener("click", f),
        (c.src = chrome.extension.getURL("images/chatBubble.svg")),
        c.classList.add("handy"),
        (c.id = "chatIconBubble"),
        i.addEventListener("click", h),
        e.appendChild(t),
        e.appendChild(r),
        r.appendChild(n),
        r.appendChild(o),
        e.appendChild(a),
        a.appendChild(s),
        e.appendChild(i),
        i.appendChild(c),
        b(e);
    };
    function y() {
      if (!window.location.href.includes("languagelive.voyagersopris")) {
        const e = document.createElement("link");
        (e.href = "https://storage.googleapis.com/blocksi_files/raiseHand.css"),
          (e.id = "raiseHandCSS"),
          (e.type = "text/css"),
          (e.rel = "stylesheet"),
          document.getElementsByTagName("head")[0].appendChild(e);
      }
    }
    function v() {
      var e = document.getElementsByClassName(
        "miniplayer style-scope ytd-miniplayer"
      )[0];
      e
        ? new MutationObserver(function () {
            if (e) {
              document
                .getElementsByClassName("ytp-miniplayer-close-button")
                .item(0)
                .click();
              const e = document.getElementById("confirm-button");
              e && e.click();
            }
          }).observe(e, { childList: !0, subtree: !0, characterData: !0 })
        : window.setTimeout(v, 500);
    }
    async function w(e, t, r, n) {
      let a = !1,
        s = document.getElementsByTagName("html")[0].innerText;
      "" === s &&
        (await (0, i.timeout)(1e3),
        (s = document.getElementsByTagName("html")[0].innerText));
      const c = e.length;
      let u;
      for (u = 0; u < o.default.length; u++)
        l.indexOf(o.default[u]) > -1 && (a = !0);
      for (u = 0; u < t.length; u++)
        if (
          (l.indexOf(t[u][0]) > -1 &&
            ((0 !== t[u][1] && "0" !== t[u][1]) || (a = !0)),
          t[u][0].indexOf("*") > -1)
        ) {
          let e = t[u][0];
          (e = e.replace(/\*/g, " ")), (e = e.replace(/ /g, "[^ ]*"));
          new RegExp(e).test(l) &&
            ((0 !== t[u][1] && "0" !== t[u][1]) || (a = !0));
        }
      if (!1 === a)
        for (u = 0; u < c; u++) {
          let t = e[u];
          "*" === t[0] && (t = t.replace("*", ".*")),
            "*" === t[t.length - 1] && (t = t.replace(/.$/, "[^ ]*"));
          if (
            new RegExp(
              `(^|(?<!\\w|[\\u00C0-\\u024F]))${t}($|(?!(\\w|[\\u00C0-\\u024F])))`,
              "gi"
            ).test(s)
          ) {
            if (!(r.indexOf("defaultBlockUrl") > -1)) {
              void 0 === n &&
                chrome.runtime.sendMessage({
                  pageUrl: l,
                  type: "block",
                  msg: e[u],
                  url: `${r}?url=${l}&reg=You have been blocked by the school's keyword filter. For further details please contact your administrator.`,
                }),
                chrome.runtime.sendMessage({
                  pageUrl: l,
                  type: "block",
                  msg: e[u],
                  url: `${r}?url=${l}&reg=You have been blocked by the school's keyword filter list, with id: <b>${n}</b>, and keyword number: </b>${
                    u + 1
                  }</b>.\n          </br> For further details please contact your administrator.`,
                });
              break;
            }
            void 0 === n &&
              chrome.runtime.sendMessage({
                pageUrl: l,
                type: "block",
                msg: e[u],
                url: `http://www.block.si/regex.php?url=${l}&reg=You have been blocked by the school's keyword filter. For further details please contact your administrator.`,
              }),
              chrome.runtime.sendMessage({
                pageUrl: l,
                type: "block",
                msg: e[u],
                url: `http://www.block.si/regex.php?url=${l}&reg=You have been blocked by the school's keyword filter list, with id: <b>${n}</b>, and keyword number: </b>${
                  u + 1
                }</b>.\n          </br> For further details please contact your administrator.`,
              });
          }
        }
      for (let e = 0; e < d.length; e++)
        if (d[e].test(s)) {
          m.find((t) => t === e) ||
            (chrome.runtime.sendMessage({
              type: "flaggedKeywordDetected",
              keywordIndex: e,
              url: l,
            }),
            m.push(e));
        }
    }
    chrome.runtime.onMessage.addListener((e) => {
      switch (e.type) {
        case "CLASS_STARTED":
          y(),
            sessionStorage.setItem("classStarted", !0),
            document.getElementById("raiseHand") || g();
          break;
        case "ADD_ICON":
          sessionStorage.setItem("classStarted", !0),
            document.getElementById("raiseHand") || g();
          break;
        case "CLASS_STOPPED":
          try {
            sessionStorage.removeItem("classStarted"),
              document.getElementById("raiseHand").remove();
          } catch (e) {}
          break;
        case "REMOVE_ICON":
          sessionStorage.removeItem("classStarted");
          try {
            document.getElementById("raiseHand").remove();
          } catch (e) {}
          break;
        case "MESSAGE_RECEIVED":
          document.getElementById("chatIconBubble").classList.add("fadeInHand"),
            document
              .getElementById("aChatBubble")
              .classList.add("changeBgHand");
          break;
        case "RAISE_HAND_CONFIRMED":
          document.getElementById("custom-icon").classList.remove("fadeInHand"),
            document
              .getElementById("aRaiseHand")
              .classList.remove("changeBgHand");
          break;
        case "REMOVE_CHAT_BLINK":
          document
            .getElementById("chatIconBubble")
            .classList.remove("fadeInHand"),
            document
              .getElementById("aChatBubble")
              .classList.remove("changeBgHand");
          break;
        case "ADD_RAISE_HAND_CLASS":
          y(),
            document.getElementById("custom-icon").classList.add("fadeInHand"),
            document.getElementById("aRaiseHand").classList.add("changeBgHand");
          break;
        case "BLOCK_YT_THUMBNAIL":
          !(function (e) {
            const t = document.createElement("img");
            (t.src = chrome.extension.getURL("images/yt-denied.png")),
              (t.if = "blockThumbnail");
            const r = $(`a[href*="/watch?v=${e}"]`)[0];
            if (0 === $("#blockThumbnail").length) {
              r.parentElement.classList.remove(
                "style-scope",
                "ytd-rich-grid-media"
              ),
                r.parentElement.parentElement.prepend(t);
              const e = $("#preview");
              $("ytd-video-preview")[0];
              e.find("#media-container-link").attr("arial-label", ""),
                e.find("#media-container-link").attr("href", "#"),
                e.find(".ytp-inline-preview-ui").css("display", "none"),
                e.find(".ytp-inline-preview-scrim").css("display", "none"),
                e
                  .find(".ytp-time-display-allow-autohide")
                  .css("display", "none"),
                e.find(".html5-main-video").css("display", "none"),
                e.find(".ytp-progress-bar").css("display", "none");
              e.parent();
              e.remove();
            }
          })(e.arg1);
      }
    }),
      (window.onload = () => {
        chrome.runtime.sendMessage({ type: "DOM_READY" }),
          "true" === sessionStorage.getItem("classStarted") &&
            (document.getElementById("raiseHand") || g());
      }),
      "ready" === document.readyState || "complete" === document.readyState
        ? l.includes("youtube") && v()
        : (document.onreadystatechange = function () {
            "complete" == document.readyState && l.includes("youtube") && v();
          }),
      ("www.youtube.com" !== l && "gaming.youtube.com" !== l) ||
        chrome.runtime.sendMessage({ type: "youtube" }, (e) => {
          setTimeout(() => p(e), 5e3);
        }),
      "prerender" !== document.webkitVisibilityState &&
      -1 === l.indexOf("block.si")
        ? chrome.runtime.sendMessage({ type: "regex" }, (e) => {
            e &&
              ((u = e),
              (d = (0, a.generateFlaggedKeywordsRegexList)(e.FlaggedKeywords)),
              w(e.Regex, e.WhiteList, e.DeniedPage, e.RegExListId));
          })
        : ((c = !0),
          document.addEventListener(
            "webkitvisibilitychange",
            function () {
              c &&
                (chrome.runtime.sendMessage({ type: "regex" }, (e) => {
                  e &&
                    ((u = e),
                    (d = (0, a.generateFlaggedKeywordsRegexList)(
                      e.FlaggedKeywords
                    )),
                    w(e.Regex, e.WhiteList, e.DeniedPage, e.RegExListId));
                }),
                (c = !1));
            },
            !1
          )),
      window.addEventListener(
        "message",
        (e) => {
          if (e.data.type && "FROM_PAGE" === e.data.type) {
            const t = document.getElementById("url_link").innerText;
            chrome.runtime.sendMessage({
              type: "warning",
              warning: e.data.text,
              url: t,
            });
          } else if (e.data.type && "ACCESS_REQ" === e.data.type) {
            const t = document.getElementById("re-url").innerText,
              r = e.data.reason,
              n = e.data.user,
              o = e.data.location;
            chrome.runtime.sendMessage({
              type: "allowaccessreq",
              warning: e.data.text,
              url: t,
              reason: r,
              userId: n,
              location: o,
            });
          }
        },
        !1
      ),
      chrome.runtime.onMessage.addListener(function (e, t, r) {
        e.type && "CHECK_YOUTUBE" === e.type
          ? p(e.settings)
          : e.type &&
            "CHECK_FOR_PLAY_BUTTON" === e.type &&
            (function () {
              if (
                document.getElementsByClassName("xB5o3b")[0] ||
                document.getElementsByClassName("EKSeXc")[0] ||
                document.getElementsByClassName("XlTvtc")[0] ||
                document.getElementsByClassName("cEzwpd")[0] ||
                document.getElementsByClassName("Vu40Fd")[0] ||
                document.getElementsByClassName("Sj80i")[0] ||
                document.getElementsByClassName("IP5Kfd")[0] ||
                document.getElementsByClassName("Wyfp9d")[0]
              ) {
                document.getElementsByClassName("ifM9O")[0].innerHTML =
                  '<img src="https://storage.googleapis.com/blocksi_files/gamingdisabled.png">';
              }
            })(),
          e.type &&
            "STUDENT_JOINED" === e.type &&
            (window.onload = () => {
              !(function () {
                const e = document.createElement("div"),
                  t = document.createElement("div"),
                  r = document.createElement("img");
                (r.src = chrome.extension.getURL("images/raise-hand.svg")),
                  r.classList.add("handy"),
                  (r.id = "custom-icon"),
                  (e.id = "raiseHand"),
                  e.classList.add("raiseMyHand"),
                  t.appendChild(r),
                  e.appendChild(t),
                  b(e);
              })();
            });
      }),
      setTimeout(() => {
        const e = (0, n.default)(
          () => {
            w(u.Regex, u.WhiteList, u.DeniedPage, u.RegExListId);
          },
          6e4,
          { maxWait: 12e4 }
        );
        new MutationObserver(e).observe(document.body, {
          childList: !0,
          subtree: !0,
          characterData: !0,
        });
      }, 3e3);
  },
  45: function (e, t, r) {
    "use strict";
    t.a = function (e, t) {
      for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n; ) {
        var i = e[r];
        t(i, r, e) && (a[o++] = i);
      }
      return a;
    };
  },
  46: function (e, t, r) {
    "use strict";
    var n = r(16),
      o = r(11);
    t.a = function (e) {
      if (!Object(o.a)(e)) return !1;
      var t = Object(n.a)(e);
      return (
        "[object Function]" == t ||
        "[object GeneratorFunction]" == t ||
        "[object AsyncFunction]" == t ||
        "[object Proxy]" == t
      );
    };
  },
  47: function (e, t, r) {
    "use strict";
    var n = /^(?:0|[1-9]\d*)$/;
    t.a = function (e, t) {
      var r = typeof e;
      return (
        !!(t = null == t ? 9007199254740991 : t) &&
        ("number" == r || ("symbol" != r && n.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    };
  },
  48: function (e, t, r) {
    "use strict";
    var n = r(16),
      o = r(29),
      a = r(15),
      i = {};
    (i["[object Float32Array]"] =
      i["[object Float64Array]"] =
      i["[object Int8Array]"] =
      i["[object Int16Array]"] =
      i["[object Int32Array]"] =
      i["[object Uint8Array]"] =
      i["[object Uint8ClampedArray]"] =
      i["[object Uint16Array]"] =
      i["[object Uint32Array]"] =
        !0),
      (i["[object Arguments]"] =
        i["[object Array]"] =
        i["[object ArrayBuffer]"] =
        i["[object Boolean]"] =
        i["[object DataView]"] =
        i["[object Date]"] =
        i["[object Error]"] =
        i["[object Function]"] =
        i["[object Map]"] =
        i["[object Number]"] =
        i["[object Object]"] =
        i["[object RegExp]"] =
        i["[object Set]"] =
        i["[object String]"] =
        i["[object WeakMap]"] =
          !1);
    var s = function (e) {
      return Object(a.a)(e) && Object(o.a)(e.length) && !!i[Object(n.a)(e)];
    };
    var c = function (e) {
        return function (t) {
          return e(t);
        };
      },
      u = r(105),
      l = u.a && u.a.isTypedArray,
      d = l ? c(l) : s;
    t.a = d;
  },
  49: function (e, t, r) {
    "use strict";
    var n = r(16),
      o = r(15);
    var a = function (e) {
        return Object(o.a)(e) && "[object Arguments]" == Object(n.a)(e);
      },
      i = Object.prototype,
      s = i.hasOwnProperty,
      c = i.propertyIsEnumerable,
      u = a(
        (function () {
          return arguments;
        })()
      )
        ? a
        : function (e) {
            return (
              Object(o.a)(e) && s.call(e, "callee") && !c.call(e, "callee")
            );
          };
    t.a = u;
  },
  6: function (e, t, r) {
    "use strict";
    var n = r(44),
      o = "object" == typeof self && self && self.Object === Object && self,
      a = n.a || o || Function("return this")();
    t.a = a;
  },
  7: function (e, t, r) {
    "use strict";
    var n = Array.isArray;
    t.a = n;
  },
});
