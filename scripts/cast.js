!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
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
    n((n.s = 556));
})([
  ,
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = n(2),
      c = s.typeErrors,
      u = s.trackPriority,
      l = n(3),
      d = n(53).sessionSID;
    function p() {
      return "undefined" != typeof navigator && navigator.userAgent
        ? navigator.userAgent
        : "Unknown";
    }
    function f(e, t, n, r) {
      if (!(r in t) && !r.match(/^on[a-z]+$/)) {
        var i;
        try {
          i = typeof e[r];
        } catch (e) {}
        "function" === i &&
          (t[r] = function () {
            for (var e, t = [], i = 0; i < arguments.length; i++)
              t[i] = arguments[i];
            return (e = this[n])[r].apply(e, a([], o(t)));
          });
      }
    }
    function h(e) {
      return "object" == typeof e && !Array.isArray(e);
    }
    function v(e) {
      Object.getOwnPropertyNames(e).forEach(function (t) {
        t.startsWith("_") && _(e, t);
      });
    }
    function _(e, t) {
      var n = Object.getOwnPropertyDescriptor(e, t);
      (n.enumerable = !1), Object.defineProperty(e, t, n);
    }
    function m(e, t) {
      void 0 === t && (t = []),
        t.forEach(function (t) {
          e.hasOwnProperty(t) && _(e, t);
        });
    }
    function y(e) {
      return e.map(g);
    }
    function g(e) {
      return Array.isArray(e)
        ? y(e)
        : e instanceof Set
        ? y(a([], o(e)))
        : e instanceof Map
        ? a([], o(e.entries())).reduce(function (e, t) {
            var n,
              r = o(t, 2),
              i = r[0],
              a = r[1];
            return Object.assign((((n = {})[i] = g(a)), n), e);
          }, {})
        : e && "object" == typeof e
        ? ((t = e),
          Object.entries(t).reduce(function (e, t) {
            var n,
              r = o(t, 2),
              i = r[0],
              a = r[1];
            return Object.assign((((n = {})[i] = g(a)), n), e);
          }, {}))
        : e;
      var t;
    }
    function b(e) {
      return S(e, [
        {
          prop: "dominantSpeakerPriority",
          type: "string",
          payloadProp: "active_speaker_priority",
        },
        {
          prop: "maxSubscriptionBitrate",
          type: "number",
          payloadProp: "max_subscription_bandwidth",
        },
        { prop: "maxTracks", type: "number", payloadProp: "max_tracks" },
        { prop: "mode", type: "string" },
        {
          prop: "renderDimensions",
          type: "object",
          payloadProp: "render_dimensions",
          transform: k,
        },
        {
          prop: "trackSwitchOffMode",
          type: "string",
          payloadProp: "track_switch_off",
        },
      ]);
    }
    function w(e) {
      return S(e, [
        { prop: "height", type: "number" },
        { prop: "width", type: "number" },
      ]);
    }
    function k(e) {
      return S(e, [
        { prop: u.PRIORITY_HIGH, type: "object", transform: w },
        { prop: u.PRIORITY_LOW, type: "object", transform: w },
        { prop: u.PRIORITY_STANDARD, type: "object", transform: w },
      ]);
    }
    function S(e, t) {
      return t.reduce(function (t, n) {
        var r,
          i = n.prop,
          o = n.type,
          a = n.payloadProp,
          s = void 0 === a ? i : a,
          c = n.transform,
          u =
            void 0 === c
              ? function (e) {
                  return e;
                }
              : c;
        return typeof e[i] === o
          ? Object.assign((((r = {})[s] = u(e[i])), r), t)
          : t;
      }, {});
    }
    (t.constants = s),
      (t.createBandwidthProfilePayload = function (e) {
        return S(e, [{ prop: "video", type: "object", transform: b }]);
      }),
      (t.createMediaSignalingPayload = function (e, t, n, r, i, o) {
        var a = { transports: [{ type: "data-channel" }] };
        return Object.assign(
          e ? { active_speaker: a } : {},
          t ? { network_quality: a } : {},
          o ? { render_hints: a } : {},
          i ? { publisher_hints: a } : {},
          n ? { track_priority: a } : {},
          r ? { track_switch_off: a } : {}
        );
      }),
      (t.createRoomConnectEventPayload = function (e) {
        function t(e) {
          return e ? "true" : "false";
        }
        var n = {
          sessionSID: d,
          iceServers: (e.iceServers || []).length,
          audioTracks: (e.tracks || []).filter(function (e) {
            return "audio" === e.kind;
          }).length,
          videoTracks: (e.tracks || []).filter(function (e) {
            return "video" === e.kind;
          }).length,
          dataTracks: (e.tracks || []).filter(function (e) {
            return "data" === e.kind;
          }).length,
        };
        if (
          ([
            ["audio"],
            ["automaticSubscription"],
            ["enableDscp"],
            ["eventListener"],
            ["preflight"],
            ["video"],
            ["dominantSpeaker", "enableDominantSpeaker"],
          ].forEach(function (r) {
            var i = o(r, 2),
              a = i[0],
              s = i[1];
            n[(s = s || a)] = t(!!e[a]);
          }),
          [["maxVideoBitrate"], ["maxAudioBitrate"]].forEach(function (t) {
            var r = o(t, 2),
              i = r[0],
              a = r[1];
            (a = a || i),
              "number" == typeof e[i]
                ? (n[a] = e[i])
                : isNaN(Number(e[i])) || (n[a] = Number(e[i]));
          }),
          [["iceTransportPolicy"], ["region"], ["name", "roomName"]].forEach(
            function (t) {
              var r = o(t, 2),
                i = r[0],
                a = r[1];
              (a = a || i),
                "string" == typeof e[i]
                  ? (n[a] = e[i])
                  : "number" == typeof e[i] &&
                    "name" === i &&
                    (n[a] = e[i].toString());
            }
          ),
          ["preferredAudioCodecs", "preferredVideoCodecs"].forEach(function (
            t
          ) {
            t in e && (n[t] = JSON.stringify(e[t]));
          }),
          "networkQuality" in e &&
            ((n.networkQualityConfiguration = {}),
            h(e.networkQuality)
              ? ["local", "remote"].forEach(function (t) {
                  "number" == typeof e.networkQuality[t] &&
                    (n.networkQualityConfiguration[t] = e.networkQuality[t]);
                })
              : ((n.networkQualityConfiguration.remote = 0),
                (n.networkQualityConfiguration.local = e.networkQuality
                  ? 1
                  : 0))),
          e.bandwidthProfile && e.bandwidthProfile.video)
        ) {
          var r = e.bandwidthProfile.video || {};
          (n.bandwidthProfileOptions = {}),
            [
              "mode",
              "maxTracks",
              "trackSwitchOffMode",
              "dominantSpeakerPriority",
              "maxSubscriptionBitrate",
              "renderDimensions",
              "contentPreferencesMode",
              "clientTrackSwitchOffControl",
            ].forEach(function (e) {
              "number" == typeof r[e] || "string" == typeof r[e]
                ? (n.bandwidthProfileOptions[e] = r[e])
                : "boolean" == typeof r[e]
                ? (n.bandwidthProfileOptions[e] = t(r[e]))
                : "object" == typeof r[e] &&
                  (n.bandwidthProfileOptions[e] = JSON.stringify(r[e]));
            });
        }
        return { group: "room", name: "connect", level: "info", payload: n };
      }),
      (t.createSubscribePayload = function (e) {
        return {
          rules: [{ type: e ? "include" : "exclude", all: !0 }],
          revision: 1,
        };
      }),
      (t.asLocalTrack = function (e, t) {
        if (
          e instanceof t.LocalAudioTrack ||
          e instanceof t.LocalVideoTrack ||
          e instanceof t.LocalDataTrack
        )
          return e;
        if (e instanceof t.MediaStreamTrack)
          return "audio" === e.kind
            ? new t.LocalAudioTrack(e, t)
            : new t.LocalVideoTrack(e, t);
        throw c.INVALID_TYPE(
          "track",
          "LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack"
        );
      }),
      (t.asLocalTrackPublication = function (e, t, n, r) {
        return new (0,
        {
          audio: r.LocalAudioTrackPublication,
          video: r.LocalVideoTrackPublication,
          data: r.LocalDataTrackPublication,
        }[e.kind])(t, e, n, r);
      }),
      (t.capitalize = function (e) {
        return e[0].toUpperCase() + e.slice(1);
      }),
      (t.deprecateEvents = function (e, t, n, r) {
        var i = new Set();
        t.on("newListener", function o(a) {
          n.has(a) &&
            !i.has(a) &&
            (r.deprecated(
              e +
                "#" +
                a +
                " has been deprecated and scheduled for removal in twilio-video.js@2.0.0." +
                (n.get(a) ? " Use " + e + "#" + n.get(a) + " instead." : "")
            ),
            i.add(a)),
            i.size >= n.size && t.removeListener("newListener", o);
        });
      }),
      (t.difference = function (e, t) {
        (e = Array.isArray(e) ? new Set(e) : new Set(e.values())),
          (t = Array.isArray(t) ? new Set(t) : new Set(t.values()));
        var n = new Set();
        return (
          e.forEach(function (e) {
            t.has(e) || n.add(e);
          }),
          n
        );
      }),
      (t.filterObject = function (e, t) {
        return Object.keys(e).reduce(function (n, r) {
          return e[r] !== t && (n[r] = e[r]), n;
        }, {});
      }),
      (t.flatMap = function (e, t) {
        var n =
          e instanceof Map || e instanceof Set ? Array.from(e.values()) : e;
        return (
          (t =
            t ||
            function (e) {
              return e;
            }),
          n.reduce(function (e, n) {
            var r = t(n);
            return e.concat(r);
          }, [])
        );
      }),
      (t.getPlatform = function () {
        var e = p(),
          t = o(e.match(/\(([^)]+)\)/) || [], 2)[1];
        return o(
          (void 0 === t ? "unknown" : t).split(";").map(function (e) {
            return e.trim();
          }),
          1
        )[0].toLowerCase();
      }),
      (t.getUserAgent = p),
      (t.hidePrivateProperties = v),
      (t.hidePrivateAndCertainPublicPropertiesInClass = function (e, t) {
        return (function (e) {
          function n() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var i = e.apply(this, a([], o(n))) || this;
            return v(i), m(i, t), i;
          }
          return i(n, e), n;
        })(e);
      }),
      (t.isDeepEqual = function e(t, n) {
        if (t === n) return !0;
        if (typeof t != typeof n) return !1;
        if (null === t) return null === n;
        if (null === n) return !1;
        if (Array.isArray(t))
          return (
            Array.isArray(n) &&
            t.length === n.length &&
            t.every(function (t, r) {
              return e(t, n[r]);
            })
          );
        if ("object" == typeof t) {
          var r = Object.keys(t).sort(),
            i = Object.keys(n).sort();
          return (
            !Array.isArray(n) &&
            e(r, i) &&
            r.every(function (r) {
              return e(t[r], n[r]);
            })
          );
        }
        return !1;
      }),
      (t.isNonArrayObject = h),
      (t.inRange = function (e, t, n) {
        return t <= e && e <= n;
      }),
      (t.makeUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          }
        );
      }),
      (t.oncePerTick = function (e) {
        var t = null;
        function n() {
          (t = null), e();
        }
        return function () {
          t && clearTimeout(t), (t = setTimeout(n));
        };
      }),
      (t.promiseFromEvents = function (e, t, n, r) {
        return new Promise(function (i, s) {
          function c() {
            var e = [].slice.call(arguments);
            r && t.removeListener(r, u), i.apply(void 0, a([], o(e)));
          }
          function u() {
            var e = [].slice.call(arguments);
            t.removeListener(n, c), s.apply(void 0, a([], o(e)));
          }
          t.once(n, c), r && t.once(r, u), e();
        });
      }),
      (t.getOrNull = function (e, t) {
        return t.split(".").reduce(function (e, t) {
          return e ? e[t] : null;
        }, e);
      }),
      (t.defer = function () {
        var e = {};
        return (
          (e.promise = new Promise(function (t, n) {
            (e.resolve = t), (e.reject = n);
          })),
          e
        );
      }),
      (t.delegateMethods = function (e, t, n) {
        for (var r in e) f(e, t, n, r);
      }),
      (t.proxyProperties = function (e, t, n) {
        Object.getOwnPropertyNames(e).forEach(function (e) {
          !(function (e, t, n, r) {
            if (r in t) return;
            if (r.match(/^on[a-z]+$/))
              return (
                Object.defineProperty(t, r, { value: null, writable: !0 }),
                void n.addEventListener(r.slice(2), function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  t.dispatchEvent.apply(t, a([], o(e)));
                })
              );
            Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return n[r];
              },
            });
          })(0, t, n, e);
        });
      }),
      (t.legacyPromise = function (e, t, n) {
        return t
          ? e.then(
              function (e) {
                t(e);
              },
              function (e) {
                n(e);
              }
            )
          : e;
      }),
      (t.buildLogLevels = function (e) {
        return "string" == typeof e
          ? { default: e, media: e, signaling: e, webrtc: e }
          : e;
      }),
      (t.trackClass = function (e, t) {
        return (
          (t = t ? "Local" : "") +
          (e.kind || "").replace(/\w{1}/, function (e) {
            return e.toUpperCase();
          }) +
          "Track"
        );
      }),
      (t.trackPublicationClass = function (e, t) {
        return (
          (t = t ? "Local" : "") +
          (e.kind || "").replace(/\w{1}/, function (e) {
            return e.toUpperCase();
          }) +
          "TrackPublication"
        );
      }),
      (t.valueToJSON = g),
      (t.withJitter = function (e, t) {
        var n = Math.random();
        return e - t + Math.floor(2 * t * n + 0.5);
      }),
      (t.isChromeScreenShareTrack = function (e) {
        return (
          "chrome" === l.guessBrowser() &&
          "video" === e.kind &&
          "displaySurface" in e.getSettings()
        );
      }),
      (t.isUserMediaTrack = function (e) {
        return "string" == typeof e.getSettings().deviceId;
      }),
      (t.waitForSometime = function (e) {
        return (
          void 0 === e && (e = 10),
          new Promise(function (t) {
            return setTimeout(t, e);
          })
        );
      }),
      (t.waitForEvent = function (e, t) {
        return new Promise(function (n) {
          e.addEventListener(t, function r(i) {
            e.removeEventListener(t, r), n(i);
          });
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(52);
    (e.exports.SDK_NAME = r.name + ".js"),
      (e.exports.SDK_VERSION = r.version),
      (e.exports.SDP_FORMAT = "unified"),
      (e.exports.DEFAULT_ENVIRONMENT = "prod"),
      (e.exports.DEFAULT_REALM = "us1"),
      (e.exports.DEFAULT_REGION = "gll"),
      (e.exports.DEFAULT_LOG_LEVEL = "warn"),
      (e.exports.DEFAULT_LOGGER_NAME = "twilio-video"),
      (e.exports.WS_SERVER = function (e, t) {
        return (
          (t = "gll" === t ? "global" : encodeURIComponent(t)),
          "prod" === e
            ? "wss://" + t + ".vss.twilio.com/signaling"
            : "wss://" + t + ".vss." + e + ".twilio.com/signaling"
        );
      }),
      (e.exports.PUBLISH_MAX_ATTEMPTS = 5),
      (e.exports.PUBLISH_BACKOFF_JITTER = 10),
      (e.exports.PUBLISH_BACKOFF_MS = 20),
      (e.exports.typeErrors = {
        ILLEGAL_INVOKE: function (e, t) {
          return new TypeError("Illegal call to " + e + ": " + t);
        },
        INVALID_TYPE: function (e, t) {
          return new TypeError(
            e +
              " must be " +
              ((["a", "e", "i", "o", "u"].includes(t.toLowerCase()[0])
                ? "an"
                : "a") +
                " ") +
              t
          );
        },
        INVALID_VALUE: function (e, t) {
          return new RangeError(e + " must be one of " + t.join(", "));
        },
        REQUIRED_ARGUMENT: function (e) {
          return new TypeError(e + " must be specified");
        },
      }),
      (e.exports.DEFAULT_FRAME_RATE = 24),
      (e.exports.DEFAULT_VIDEO_PROCESSOR_STATS_INTERVAL_MS = 1e4),
      (e.exports.DEFAULT_ICE_GATHERING_TIMEOUT_MS = 15e3),
      (e.exports.DEFAULT_SESSION_TIMEOUT_SEC = 30),
      (e.exports.DEFAULT_NQ_LEVEL_LOCAL = 1),
      (e.exports.DEFAULT_NQ_LEVEL_REMOTE = 0),
      (e.exports.MAX_NQ_LEVEL = 3),
      (e.exports.ICE_ACTIVITY_CHECK_PERIOD_MS = 1e3),
      (e.exports.ICE_INACTIVITY_THRESHOLD_MS = 3e3),
      (e.exports.iceRestartBackoffConfig = {
        factor: 1.1,
        initialDelay: 1,
        maxDelay: 1e3 * e.exports.DEFAULT_SESSION_TIMEOUT_SEC,
        randomisationFactor: 0.5,
      }),
      (e.exports.reconnectBackoffConfig = {
        factor: 1.5,
        initialDelay: 80,
        randomisationFactor: 0.5,
      }),
      (e.exports.subscriptionMode = {
        MODE_COLLABORATION: "collaboration",
        MODE_GRID: "grid",
        MODE_PRESENTATION: "presentation",
      }),
      (e.exports.trackSwitchOffMode = {
        MODE_DISABLED: "disabled",
        MODE_DETECTED: "detected",
        MODE_PREDICTED: "predicted",
      }),
      (e.exports.trackPriority = {
        PRIORITY_HIGH: "high",
        PRIORITY_LOW: "low",
        PRIORITY_STANDARD: "standard",
      }),
      (e.exports.clientTrackSwitchOffControl = {
        MODE_AUTO: "auto",
        MODE_MANUAL: "manual",
      }),
      (e.exports.videoContentPreferencesMode = {
        MODE_AUTO: "auto",
        MODE_MANUAL: "manual",
      });
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      if (!(r in t) && !r.match(/^on[a-z]+$/)) {
        var i = !1;
        try {
          var o = Object.getOwnPropertyDescriptor(e, r);
          i = o && !!o.get;
        } catch (e) {}
        if (!i) {
          var a;
          try {
            a = typeof e[r];
          } catch (e) {}
          "function" === a &&
            (t[r] = function () {
              return this[n][r].apply(this[n], arguments);
            });
        }
      }
    }
    function i() {
      return "undefined" != typeof navigator &&
        "string" == typeof navigator.userAgent
        ? navigator.userAgent
        : null;
    }
    function o(e) {
      return (
        void 0 === e && (e = i()),
        /Chrome|CriOS/.test(e)
          ? "chrome"
          : /Firefox|FxiOS/.test(e)
          ? "firefox"
          : /Safari|iPhone|iPad|iPod/.test(e)
          ? "safari"
          : null
      );
    }
    (t.defer = function () {
      var e = {};
      return (
        (e.promise = new Promise(function (t, n) {
          (e.resolve = t), (e.reject = n);
        })),
        e
      );
    }),
      (t.delegateMethods = function (e, t, n) {
        for (var i in e) r(e, t, n, i);
      }),
      (t.difference = function (e, t) {
        (e = Array.isArray(e) ? new Set(e) : new Set(e.values())),
          (t = Array.isArray(t) ? new Set(t) : new Set(t.values()));
        var n = new Set();
        return (
          e.forEach(function (e) {
            t.has(e) || n.add(e);
          }),
          n
        );
      }),
      (t.flatMap = function (e, t) {
        return (
          e instanceof Map || e instanceof Set ? Array.from(e.values()) : e
        ).reduce(function (e, n) {
          var r = t(n);
          return e.concat(r);
        }, []);
      }),
      (t.guessBrowser = o),
      (t.guessBrowserVersion = function (e) {
        void 0 === e && (e = i());
        var t = {
          chrome: "Chrome|CriOS",
          firefox: "Firefox|FxiOS",
          safari: "Version",
        }[o(e)];
        if (!t) return null;
        var n = new RegExp("(" + t + ")/([^\\s]+)"),
          r = (e.match(n) || [])[2];
        if (!r) return null;
        var a = r.split(".").map(Number);
        return {
          major: isNaN(a[0]) ? null : a[0],
          minor: isNaN(a[1]) ? null : a[1],
        };
      }),
      (t.isIOSChrome = function (e) {
        return (
          void 0 === e && (e = i()),
          /Mobi/.test(e) && "chrome" === o() && /iPad|iPhone|iPod/.test(e)
        );
      }),
      (t.interceptEvent = function (e, t) {
        var n = null;
        Object.defineProperty(e, "on" + t, {
          get: function () {
            return n;
          },
          set: function (e) {
            n && this.removeEventListener(t, n),
              "function" == typeof e
                ? ((n = e), this.addEventListener(t, n))
                : (n = null);
          },
        });
      }),
      (t.legacyPromise = function (e, t, n) {
        return t
          ? e.then(
              function (e) {
                t(e);
              },
              function (e) {
                n(e);
              }
            )
          : e;
      }),
      (t.makeUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          }
        );
      }),
      (t.proxyProperties = function (e, t, n) {
        Object.getOwnPropertyNames(e).forEach(function (e) {
          !(function (e, t, n, r) {
            if (r in t) return;
            if (r.match(/^on[a-z]+$/))
              return (
                Object.defineProperty(t, r, { value: null, writable: !0 }),
                void n.addEventListener(r.slice(2), function () {
                  t.dispatchEvent.apply(t, arguments);
                })
              );
            Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return n[r];
              },
            });
          })(0, t, n, e);
        });
      }),
      (t.support = function () {
        return (
          "object" == typeof navigator &&
          "object" == typeof navigator.mediaDevices &&
          "function" == typeof navigator.mediaDevices.getUserMedia &&
          "function" == typeof RTCPeerConnection
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var r,
      i = "object" == typeof Reflect ? Reflect : null,
      o =
        i && "function" == typeof i.apply
          ? i.apply
          : function (e, t, n) {
              return Function.prototype.apply.call(e, t, n);
            };
    r =
      i && "function" == typeof i.ownKeys
        ? i.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var a =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function s() {
      s.init.call(this);
    }
    (e.exports = s),
      (e.exports.once = function (e, t) {
        return new Promise(function (n, r) {
          function i(n) {
            e.removeListener(t, o), r(n);
          }
          function o() {
            "function" == typeof e.removeListener &&
              e.removeListener("error", i),
              n([].slice.call(arguments));
          }
          m(e, t, o, { once: !0 }),
            "error" !== t &&
              (function (e, t, n) {
                "function" == typeof e.on && m(e, "error", t, n);
              })(e, i, { once: !0 });
        });
      }),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0);
    var c = 10;
    function u(e) {
      if ("function" != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        );
    }
    function l(e) {
      return void 0 === e._maxListeners
        ? s.defaultMaxListeners
        : e._maxListeners;
    }
    function d(e, t, n, r) {
      var i, o, a, s;
      if (
        (u(n),
        void 0 === (o = e._events)
          ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== o.newListener &&
              (e.emit("newListener", t, n.listener ? n.listener : n),
              (o = e._events)),
            (a = o[t])),
        void 0 === a)
      )
        (a = o[t] = n), ++e._eventsCount;
      else if (
        ("function" == typeof a
          ? (a = o[t] = r ? [n, a] : [a, n])
          : r
          ? a.unshift(n)
          : a.push(n),
        (i = l(e)) > 0 && a.length > i && !a.warned)
      ) {
        a.warned = !0;
        var c = new Error(
          "Possible EventEmitter memory leak detected. " +
            a.length +
            " " +
            String(t) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (c.name = "MaxListenersExceededWarning"),
          (c.emitter = e),
          (c.type = t),
          (c.count = a.length),
          (s = c),
          console && console.warn && console.warn(s);
      }
      return e;
    }
    function p() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        );
    }
    function f(e, t, n) {
      var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        i = p.bind(r);
      return (i.listener = n), (r.wrapFn = i), i;
    }
    function h(e, t, n) {
      var r = e._events;
      if (void 0 === r) return [];
      var i = r[t];
      return void 0 === i
        ? []
        : "function" == typeof i
        ? n
          ? [i.listener || i]
          : [i]
        : n
        ? (function (e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
              t[n] = e[n].listener || e[n];
            return t;
          })(i)
        : _(i, i.length);
    }
    function v(e) {
      var t = this._events;
      if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function _(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
      return n;
    }
    function m(e, t, n, r) {
      if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
      else {
        if ("function" != typeof e.addEventListener)
          throw new TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
        e.addEventListener(t, function i(o) {
          r.once && e.removeEventListener(t, i), n(o);
        });
      }
    }
    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function () {
        return c;
      },
      set: function (e) {
        if ("number" != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        c = e;
      },
    }),
      (s.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        return (this._maxListeners = e), this;
      }),
      (s.prototype.getMaxListeners = function () {
        return l(this);
      }),
      (s.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
          i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
          var a;
          if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
          var s = new Error(
            "Unhandled error." + (a ? " (" + a.message + ")" : "")
          );
          throw ((s.context = a), s);
        }
        var c = i[e];
        if (void 0 === c) return !1;
        if ("function" == typeof c) o(c, this, t);
        else {
          var u = c.length,
            l = _(c, u);
          for (n = 0; n < u; ++n) o(l[n], this, t);
        }
        return !0;
      }),
      (s.prototype.addListener = function (e, t) {
        return d(this, e, t, !1);
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function (e, t) {
        return d(this, e, t, !0);
      }),
      (s.prototype.once = function (e, t) {
        return u(t), this.on(e, f(this, e, t)), this;
      }),
      (s.prototype.prependOnceListener = function (e, t) {
        return u(t), this.prependListener(e, f(this, e, t)), this;
      }),
      (s.prototype.removeListener = function (e, t) {
        var n, r, i, o, a;
        if ((u(t), void 0 === (r = this._events))) return this;
        if (void 0 === (n = r[e])) return this;
        if (n === t || n.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete r[e],
              r.removeListener &&
                this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
          for (i = -1, o = n.length - 1; o >= 0; o--)
            if (n[o] === t || n[o].listener === t) {
              (a = n[o].listener), (i = o);
              break;
            }
          if (i < 0) return this;
          0 === i
            ? n.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(n, i),
            1 === n.length && (r[e] = n[0]),
            void 0 !== r.removeListener &&
              this.emit("removeListener", e, a || t);
        }
        return this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function (e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== n[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete n[e]),
            this
          );
        if (0 === arguments.length) {
          var i,
            o = Object.keys(n);
          for (r = 0; r < o.length; ++r)
            "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this;
      }),
      (s.prototype.listeners = function (e) {
        return h(this, e, !0);
      }),
      (s.prototype.rawListeners = function (e) {
        return h(this, e, !1);
      }),
      (s.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount
          ? e.listenerCount(t)
          : v.call(e, t);
      }),
      (s.prototype.listenerCount = v),
      (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? r(this._events) : [];
      });
  },
  function (e, t, n) {
    (function (e) {
      var r =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
              n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
            return n;
          },
        i = /%[sdj%]/g;
      (t.format = function (e) {
        if (!m(e)) {
          for (var t = [], n = 0; n < arguments.length; n++)
            t.push(s(arguments[n]));
          return t.join(" ");
        }
        n = 1;
        for (
          var r = arguments,
            o = r.length,
            a = String(e).replace(i, function (e) {
              if ("%%" === e) return "%";
              if (n >= o) return e;
              switch (e) {
                case "%s":
                  return String(r[n++]);
                case "%d":
                  return Number(r[n++]);
                case "%j":
                  try {
                    return JSON.stringify(r[n++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            c = r[n];
          n < o;
          c = r[++n]
        )
          v(c) || !b(c) ? (a += " " + c) : (a += " " + s(c));
        return a;
      }),
        (t.deprecate = function (n, r) {
          if (void 0 !== e && !0 === e.noDeprecation) return n;
          if (void 0 === e)
            return function () {
              return t.deprecate(n, r).apply(this, arguments);
            };
          var i = !1;
          return function () {
            if (!i) {
              if (e.throwDeprecation) throw new Error(r);
              e.traceDeprecation ? console.trace(r) : console.error(r),
                (i = !0);
            }
            return n.apply(this, arguments);
          };
        });
      var o,
        a = {};
      function s(e, n) {
        var r = { seen: [], stylize: u };
        return (
          arguments.length >= 3 && (r.depth = arguments[2]),
          arguments.length >= 4 && (r.colors = arguments[3]),
          h(n) ? (r.showHidden = n) : n && t._extend(r, n),
          y(r.showHidden) && (r.showHidden = !1),
          y(r.depth) && (r.depth = 2),
          y(r.colors) && (r.colors = !1),
          y(r.customInspect) && (r.customInspect = !0),
          r.colors && (r.stylize = c),
          l(r, e, r.depth)
        );
      }
      function c(e, t) {
        var n = s.styles[t];
        return n
          ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m"
          : e;
      }
      function u(e, t) {
        return e;
      }
      function l(e, n, r) {
        if (
          e.customInspect &&
          n &&
          S(n.inspect) &&
          n.inspect !== t.inspect &&
          (!n.constructor || n.constructor.prototype !== n)
        ) {
          var i = n.inspect(r, e);
          return m(i) || (i = l(e, i, r)), i;
        }
        var o = (function (e, t) {
          if (y(t)) return e.stylize("undefined", "undefined");
          if (m(t)) {
            var n =
              "'" +
              JSON.stringify(t)
                .replace(/^"|"$/g, "")
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return e.stylize(n, "string");
          }
          if (_(t)) return e.stylize("" + t, "number");
          if (h(t)) return e.stylize("" + t, "boolean");
          if (v(t)) return e.stylize("null", "null");
        })(e, n);
        if (o) return o;
        var a = Object.keys(n),
          s = (function (e) {
            var t = {};
            return (
              e.forEach(function (e, n) {
                t[e] = !0;
              }),
              t
            );
          })(a);
        if (
          (e.showHidden && (a = Object.getOwnPropertyNames(n)),
          k(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
        )
          return d(n);
        if (0 === a.length) {
          if (S(n)) {
            var c = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + c + "]", "special");
          }
          if (g(n))
            return e.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (w(n)) return e.stylize(Date.prototype.toString.call(n), "date");
          if (k(n)) return d(n);
        }
        var u,
          b = "",
          T = !1,
          O = ["{", "}"];
        (f(n) && ((T = !0), (O = ["[", "]"])), S(n)) &&
          (b = " [Function" + (n.name ? ": " + n.name : "") + "]");
        return (
          g(n) && (b = " " + RegExp.prototype.toString.call(n)),
          w(n) && (b = " " + Date.prototype.toUTCString.call(n)),
          k(n) && (b = " " + d(n)),
          0 !== a.length || (T && 0 != n.length)
            ? r < 0
              ? g(n)
                ? e.stylize(RegExp.prototype.toString.call(n), "regexp")
                : e.stylize("[Object]", "special")
              : (e.seen.push(n),
                (u = T
                  ? (function (e, t, n, r, i) {
                      for (var o = [], a = 0, s = t.length; a < s; ++a)
                        E(t, String(a))
                          ? o.push(p(e, t, n, r, String(a), !0))
                          : o.push("");
                      return (
                        i.forEach(function (i) {
                          i.match(/^\d+$/) || o.push(p(e, t, n, r, i, !0));
                        }),
                        o
                      );
                    })(e, n, r, s, a)
                  : a.map(function (t) {
                      return p(e, n, r, s, t, T);
                    })),
                e.seen.pop(),
                (function (e, t, n) {
                  if (
                    e.reduce(function (e, t) {
                      return (
                        t.indexOf("\n") >= 0 && 0,
                        e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                      );
                    }, 0) > 60
                  )
                    return (
                      n[0] +
                      ("" === t ? "" : t + "\n ") +
                      " " +
                      e.join(",\n  ") +
                      " " +
                      n[1]
                    );
                  return n[0] + t + " " + e.join(", ") + " " + n[1];
                })(u, b, O))
            : O[0] + b + O[1]
        );
      }
      function d(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function p(e, t, n, r, i, o) {
        var a, s, c;
        if (
          ((c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
            ? (s = c.set
                ? e.stylize("[Getter/Setter]", "special")
                : e.stylize("[Getter]", "special"))
            : c.set && (s = e.stylize("[Setter]", "special")),
          E(r, i) || (a = "[" + i + "]"),
          s ||
            (e.seen.indexOf(c.value) < 0
              ? (s = v(n) ? l(e, c.value, null) : l(e, c.value, n - 1)).indexOf(
                  "\n"
                ) > -1 &&
                (s = o
                  ? s
                      .split("\n")
                      .map(function (e) {
                        return "  " + e;
                      })
                      .join("\n")
                      .substr(2)
                  : "\n" +
                    s
                      .split("\n")
                      .map(function (e) {
                        return "   " + e;
                      })
                      .join("\n"))
              : (s = e.stylize("[Circular]", "special"))),
          y(a))
        ) {
          if (o && i.match(/^\d+$/)) return s;
          (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
            : ((a = a
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (a = e.stylize(a, "string")));
        }
        return a + ": " + s;
      }
      function f(e) {
        return Array.isArray(e);
      }
      function h(e) {
        return "boolean" == typeof e;
      }
      function v(e) {
        return null === e;
      }
      function _(e) {
        return "number" == typeof e;
      }
      function m(e) {
        return "string" == typeof e;
      }
      function y(e) {
        return void 0 === e;
      }
      function g(e) {
        return b(e) && "[object RegExp]" === T(e);
      }
      function b(e) {
        return "object" == typeof e && null !== e;
      }
      function w(e) {
        return b(e) && "[object Date]" === T(e);
      }
      function k(e) {
        return b(e) && ("[object Error]" === T(e) || e instanceof Error);
      }
      function S(e) {
        return "function" == typeof e;
      }
      function T(e) {
        return Object.prototype.toString.call(e);
      }
      function O(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      (t.debuglog = function (n) {
        if (
          (y(o) && (o = e.env.NODE_DEBUG || ""), (n = n.toUpperCase()), !a[n])
        )
          if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
            var r = e.pid;
            a[n] = function () {
              var e = t.format.apply(t, arguments);
              console.error("%s %d: %s", n, r, e);
            };
          } else a[n] = function () {};
        return a[n];
      }),
        (t.inspect = s),
        (s.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (s.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        }),
        (t.isArray = f),
        (t.isBoolean = h),
        (t.isNull = v),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = _),
        (t.isString = m),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e;
        }),
        (t.isUndefined = y),
        (t.isRegExp = g),
        (t.isObject = b),
        (t.isDate = w),
        (t.isError = k),
        (t.isFunction = S),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = n(128));
      var P = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function C() {
        var e = new Date(),
          t = [O(e.getHours()), O(e.getMinutes()), O(e.getSeconds())].join(":");
        return [e.getDate(), P[e.getMonth()], t].join(" ");
      }
      function E(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.log = function () {
        console.log("%s - %s", C(), t.format.apply(t, arguments));
      }),
        (t.inherits = n(129)),
        (t._extend = function (e, t) {
          if (!t || !b(t)) return e;
          for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
          return e;
        });
      var R =
        "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
      function x(e, t) {
        if (!e) {
          var n = new Error("Promise was rejected with a falsy value");
          (n.reason = e), (e = n);
        }
        return t(e);
      }
      (t.promisify = function (e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "original" argument must be of type Function'
          );
        if (R && e[R]) {
          var t;
          if ("function" != typeof (t = e[R]))
            throw new TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            );
          return (
            Object.defineProperty(t, R, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            t
          );
        }
        function t() {
          for (
            var t,
              n,
              r = new Promise(function (e, r) {
                (t = e), (n = r);
              }),
              i = [],
              o = 0;
            o < arguments.length;
            o++
          )
            i.push(arguments[o]);
          i.push(function (e, r) {
            e ? n(e) : t(r);
          });
          try {
            e.apply(this, i);
          } catch (e) {
            n(e);
          }
          return r;
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          R &&
            Object.defineProperty(t, R, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(t, r(e))
        );
      }),
        (t.promisify.custom = R),
        (t.callbackify = function (t) {
          if ("function" != typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          function n() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n.push(arguments[r]);
            var i = n.pop();
            if ("function" != typeof i)
              throw new TypeError("The last argument must be of type Function");
            var o = this,
              a = function () {
                return i.apply(o, arguments);
              };
            t.apply(this, n).then(
              function (t) {
                e.nextTick(a, null, t);
              },
              function (t) {
                e.nextTick(x, t, a);
              }
            );
          }
          return (
            Object.setPrototypeOf(n, Object.getPrototypeOf(t)),
            Object.defineProperties(n, r(t)),
            n
          );
        });
    }.call(this, n(23)));
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      o =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      a = n(61).getLogger,
      s = n(2),
      c = s.DEFAULT_LOG_LEVEL,
      u = s.DEFAULT_LOGGER_NAME,
      l = n(2).typeErrors;
    var d = (function () {
      function e(t, n, r, i, o) {
        if ("string" != typeof t) throw l.INVALID_TYPE("moduleName", "string");
        if (!n) throw l.REQUIRED_ARGUMENT("component");
        "object" != typeof r && (r = {}),
          (o = o || a),
          _(r),
          Object.defineProperties(this, {
            _component: { value: n },
            _logLevels: { value: r },
            _warnings: { value: new Set() },
            _loggerName: {
              get: function () {
                var e = i && "string" == typeof i ? i : u;
                return this._logLevelsEqual || (e = e + "-" + t), e;
              },
            },
            _logger: {
              get: function () {
                var e = o(this._loggerName),
                  n = this._logLevels[t] || c;
                return (
                  (n = "off" === n ? "silent" : n), e.setDefaultLevel(n), e
                );
              },
            },
            _logLevelsEqual: {
              get: function () {
                return 1 === new Set(Object.values(this._logLevels)).size;
              },
            },
            logLevel: {
              get: function () {
                return e.getLevelByName(r[t] || c);
              },
            },
            name: { get: n.toString.bind(n) },
          });
      }
      return (
        (e.getLevelByName = function (t) {
          return isNaN(t) ? (v((t = t.toUpperCase())), e[t]) : parseInt(t, 10);
        }),
        (e.prototype.createLog = function (t, n) {
          var r = this._loggerName;
          return (
            this._logLevelsEqual || (r = r.substring(0, r.lastIndexOf("-"))),
            new e(t, n, this._logLevels, r)
          );
        }),
        (e.prototype.setLevels = function (e) {
          return _(e), Object.assign(this._logLevels, e), this;
        }),
        (e.prototype.log = function (t, n) {
          var r = e._levels[t];
          if (!r) throw l.INVALID_VALUE("logLevel", f);
          r = r.toLowerCase();
          var a = [new Date().toISOString(), r, this.name];
          return (
            (this._logger[r] || function () {}).apply(
              void 0,
              o([], i(a.concat(n)))
            ),
            this
          );
        }),
        (e.prototype.debug = function () {
          return this.log(e.DEBUG, [].slice.call(arguments));
        }),
        (e.prototype.deprecated = function (e) {
          var t = (function (e) {
            if ((r = r || new Map()).has(e)) return r.get(e);
            var t = new Set();
            return r.set(e, t), t;
          })(this._component.constructor);
          return t.has(e) ? this : (t.add(e), this.warn(e));
        }),
        (e.prototype.info = function () {
          return this.log(e.INFO, [].slice.call(arguments));
        }),
        (e.prototype.warn = function () {
          return this.log(e.WARN, [].slice.call(arguments));
        }),
        (e.prototype.warnOnce = function (e) {
          return this._warnings.has(e)
            ? this
            : (this._warnings.add(e), this.warn(e));
        }),
        (e.prototype.error = function () {
          return this.log(e.ERROR, [].slice.call(arguments));
        }),
        (e.prototype.throw = function (t, n) {
          throw (t.clone && (t = t.clone(n)), this.log(e.ERROR, t), t);
        }),
        e
      );
    })();
    Object.defineProperties(d, {
      DEBUG: { value: 0 },
      INFO: { value: 1 },
      WARN: { value: 2 },
      ERROR: { value: 3 },
      OFF: { value: 4 },
      _levels: { value: ["DEBUG", "INFO", "WARN", "ERROR", "OFF"] },
    });
    var p = {},
      f = [],
      h = d._levels.map(function (e, t) {
        return (p[e] = !0), f.push(t), e;
      });
    function v(e) {
      if (!(e in p)) throw l.INVALID_VALUE("level", h);
    }
    function _(e) {
      Object.keys(e).forEach(function (t) {
        v(e[t].toUpperCase());
      });
    }
    e.exports = d;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(149),
      a = {};
    t.createTwilioError = function (e, t) {
      return (
        (t = "string" == typeof t && t ? t : "Unknown error"),
        a[(e = "number" == typeof e ? e : 0)] ? new a[e]() : new o(e, t)
      );
    };
    var s = (function (e) {
      function t() {
        var n = e.call(this, 20101, "Invalid Access Token") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.AccessTokenInvalidError = s),
      Object.defineProperty(a, 20101, { value: s });
    var c = (function (e) {
      function t() {
        var n = e.call(this, 20102, "Invalid Access Token header") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.AccessTokenHeaderInvalidError = c),
      Object.defineProperty(a, 20102, { value: c });
    var u = (function (e) {
      function t() {
        var n =
          e.call(this, 20103, "Invalid Access Token issuer/subject") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.AccessTokenIssuerInvalidError = u),
      Object.defineProperty(a, 20103, { value: u });
    var l = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            20104,
            "Access Token expired or expiration date invalid"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.AccessTokenExpiredError = l),
      Object.defineProperty(a, 20104, { value: l });
    var d = (function (e) {
      function t() {
        var n = e.call(this, 20105, "Access Token not yet valid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.AccessTokenNotYetValidError = d),
      Object.defineProperty(a, 20105, { value: d });
    var p = (function (e) {
      function t() {
        var n = e.call(this, 20106, "Invalid Access Token grants") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.AccessTokenGrantsInvalidError = p),
      Object.defineProperty(a, 20106, { value: p });
    var f = (function (e) {
      function t() {
        var n = e.call(this, 20107, "Invalid Access Token signature") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.AccessTokenSignatureInvalidError = f),
      Object.defineProperty(a, 20107, { value: f });
    var h = (function (e) {
      function t() {
        var n = e.call(this, 53e3, "Signaling connection error") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.SignalingConnectionError = h),
      Object.defineProperty(a, 53e3, { value: h });
    var v = (function (e) {
      function t() {
        var n =
          e.call(this, 53001, "Signaling connection disconnected") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.SignalingConnectionDisconnectedError = v),
      Object.defineProperty(a, 53001, { value: v });
    var _ = (function (e) {
      function t() {
        var n = e.call(this, 53002, "Signaling connection timed out") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.SignalingConnectionTimeoutError = _),
      Object.defineProperty(a, 53002, { value: _ });
    var m = (function (e) {
      function t() {
        var n =
          e.call(this, 53003, "Client received an invalid signaling message") ||
          this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.SignalingIncomingMessageInvalidError = m),
      Object.defineProperty(a, 53003, { value: m });
    var y = (function (e) {
      function t() {
        var n =
          e.call(this, 53004, "Client sent an invalid signaling message") ||
          this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.SignalingOutgoingMessageInvalidError = y),
      Object.defineProperty(a, 53004, { value: y });
    var g = (function (e) {
      function t() {
        var n = e.call(this, 53006, "Video server is busy") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.SignalingServerBusyError = g),
      Object.defineProperty(a, 53006, { value: g });
    var b = (function (e) {
      function t() {
        var n = e.call(this, 53100, "Room name is invalid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomNameInvalidError = b), Object.defineProperty(a, 53100, { value: b });
    var w = (function (e) {
      function t() {
        var n = e.call(this, 53101, "Room name is too long") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomNameTooLongError = w), Object.defineProperty(a, 53101, { value: w });
    var k = (function (e) {
      function t() {
        var n =
          e.call(this, 53102, "Room name contains invalid characters") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomNameCharsInvalidError = k),
      Object.defineProperty(a, 53102, { value: k });
    var S = (function (e) {
      function t() {
        var n = e.call(this, 53103, "Unable to create Room") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomCreateFailedError = S),
      Object.defineProperty(a, 53103, { value: S });
    var T = (function (e) {
      function t() {
        var n = e.call(this, 53104, "Unable to connect to Room") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomConnectFailedError = T),
      Object.defineProperty(a, 53104, { value: T });
    var O = (function (e) {
      function t() {
        var n =
          e.call(this, 53105, "Room contains too many Participants") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomMaxParticipantsExceededError = O),
      Object.defineProperty(a, 53105, { value: O });
    var P = (function (e) {
      function t() {
        var n = e.call(this, 53106, "Room not found") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomNotFoundError = P), Object.defineProperty(a, 53106, { value: P });
    var C = (function (e) {
      function t() {
        var n = e.call(this, 53107, "MaxParticipants is out of range") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomMaxParticipantsOutOfRangeError = C),
      Object.defineProperty(a, 53107, { value: C });
    var E = (function (e) {
      function t() {
        var n = e.call(this, 53108, "RoomType is not valid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomTypeInvalidError = E), Object.defineProperty(a, 53108, { value: E });
    var R = (function (e) {
      function t() {
        var n = e.call(this, 53109, "Timeout is out of range") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomTimeoutOutOfRangeError = R),
      Object.defineProperty(a, 53109, { value: R });
    var x = (function (e) {
      function t() {
        var n = e.call(this, 53110, "StatusCallbackMethod is invalid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomStatusCallbackMethodInvalidError = x),
      Object.defineProperty(a, 53110, { value: x });
    var j = (function (e) {
      function t() {
        var n = e.call(this, 53111, "StatusCallback is invalid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomStatusCallbackInvalidError = j),
      Object.defineProperty(a, 53111, { value: j });
    var L = (function (e) {
      function t() {
        var n = e.call(this, 53112, "Status is invalid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomStatusInvalidError = L),
      Object.defineProperty(a, 53112, { value: L });
    var A = (function (e) {
      function t() {
        var n = e.call(this, 53113, "Room exists") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomRoomExistsError = A), Object.defineProperty(a, 53113, { value: A });
    var D = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53114,
            "Room creation parameter(s) incompatible with the Room type"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomInvalidParametersError = D),
      Object.defineProperty(a, 53114, { value: D });
    var I = (function (e) {
      function t() {
        var n = e.call(this, 53115, "MediaRegion is invalid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomMediaRegionInvalidError = I),
      Object.defineProperty(a, 53115, { value: I });
    var M = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53116,
            "There are no media servers available in the MediaRegion"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomMediaRegionUnavailableError = M),
      Object.defineProperty(a, 53116, { value: M });
    var N = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53117,
            "The subscription operation requested is not supported for the Room type"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomSubscriptionOperationNotSupportedError = N),
      Object.defineProperty(a, 53117, { value: N });
    var V = (function (e) {
      function t() {
        var n = e.call(this, 53118, "Room completed") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomCompletedError = V), Object.defineProperty(a, 53118, { value: V });
    var F = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53124,
            "The AudioOnly flag is not supported for the Room type"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomAudioOnlyFlagNotSupportedError = F),
      Object.defineProperty(a, 53124, { value: F });
    var B = (function (e) {
      function t() {
        var n =
          e.call(this, 53125, "The track kind is not supported by the Room") ||
          this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.RoomTrackKindNotSupportedError = B),
      Object.defineProperty(a, 53125, { value: B });
    var U = (function (e) {
      function t() {
        var n = e.call(this, 53200, "Participant identity is invalid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.ParticipantIdentityInvalidError = U),
      Object.defineProperty(a, 53200, { value: U });
    var H = (function (e) {
      function t() {
        var n = e.call(this, 53201, "Participant identity is too long") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.ParticipantIdentityTooLongError = H),
      Object.defineProperty(a, 53201, { value: H });
    var W = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53202,
            "Participant identity contains invalid characters"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.ParticipantIdentityCharsInvalidError = W),
      Object.defineProperty(a, 53202, { value: W });
    var Q = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53203,
            "The maximum number of published tracks allowed in the Room at the same time has been reached"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.ParticipantMaxTracksExceededError = Q),
      Object.defineProperty(a, 53203, { value: Q });
    var q = (function (e) {
      function t() {
        var n = e.call(this, 53204, "Participant not found") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.ParticipantNotFoundError = q),
      Object.defineProperty(a, 53204, { value: q });
    var G = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53205,
            "Participant disconnected because of duplicate identity"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.ParticipantDuplicateIdentityError = G),
      Object.defineProperty(a, 53205, { value: G });
    var z = (function (e) {
      function t() {
        var n = e.call(this, 53300, "Track is invalid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.TrackInvalidError = z), Object.defineProperty(a, 53300, { value: z });
    var K = (function (e) {
      function t() {
        var n = e.call(this, 53301, "Track name is invalid") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.TrackNameInvalidError = K),
      Object.defineProperty(a, 53301, { value: K });
    var Y = (function (e) {
      function t() {
        var n = e.call(this, 53302, "Track name is too long") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.TrackNameTooLongError = Y),
      Object.defineProperty(a, 53302, { value: Y });
    var $ = (function (e) {
      function t() {
        var n =
          e.call(this, 53303, "Track name contains invalid characters") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.TrackNameCharsInvalidError = $),
      Object.defineProperty(a, 53303, { value: $ });
    var J = (function (e) {
      function t() {
        var n = e.call(this, 53304, "Track name is duplicated") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.TrackNameIsDuplicatedError = J),
      Object.defineProperty(a, 53304, { value: J });
    var X = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53305,
            "The server has reached capacity and cannot fulfill this request"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.TrackServerTrackCapacityReachedError = X),
      Object.defineProperty(a, 53305, { value: X });
    var Z = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53400,
            "Client is unable to create or apply a local media description"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.MediaClientLocalDescFailedError = Z),
      Object.defineProperty(a, 53400, { value: Z });
    var ee = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53401,
            "Server is unable to create or apply a local media description"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.MediaServerLocalDescFailedError = ee),
      Object.defineProperty(a, 53401, { value: ee });
    var te = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53402,
            "Client is unable to apply a remote media description"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.MediaClientRemoteDescFailedError = te),
      Object.defineProperty(a, 53402, { value: te });
    var ne = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53403,
            "Server is unable to apply a remote media description"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.MediaServerRemoteDescFailedError = ne),
      Object.defineProperty(a, 53403, { value: ne });
    var re = (function (e) {
      function t() {
        var n = e.call(this, 53404, "No supported codec") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.MediaNoSupportedCodecError = re),
      Object.defineProperty(a, 53404, { value: re });
    var ie = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53405,
            "Media connection failed or Media activity ceased"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.MediaConnectionError = ie),
      Object.defineProperty(a, 53405, { value: ie });
    var oe = (function (e) {
      function t() {
        var n =
          e.call(
            this,
            53407,
            "Media connection failed due to DTLS handshake failure"
          ) || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.MediaDTLSTransportFailedError = oe),
      Object.defineProperty(a, 53407, { value: oe });
    var ae = (function (e) {
      function t() {
        var n = e.call(this, 53500, "Unable to acquire configuration") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.ConfigurationAcquireFailedError = ae),
      Object.defineProperty(a, 53500, { value: ae });
    var se = (function (e) {
      function t() {
        var n =
          e.call(this, 53501, "Unable to acquire TURN credentials") || this;
        return Object.setPrototypeOf(n, t.prototype), n;
      }
      return i(t, e), t;
    })(o);
    (t.ConfigurationAcquireTurnFailedError = se),
      Object.defineProperty(a, 53501, { value: se });
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = {};
    Object.defineProperties(r, {
      getStats: { enumerable: !0, value: n(122) },
      getUserMedia: { enumerable: !0, value: n(123) },
      MediaStream: { enumerable: !0, value: n(54) },
      MediaStreamTrack: { enumerable: !0, value: n(124) },
      RTCIceCandidate: { enumerable: !0, value: n(125) },
      RTCPeerConnection: { enumerable: !0, value: n(126) },
      RTCSessionDescription: { enumerable: !0, value: n(133) },
    }),
      (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    var r = (function () {
      function e(e, t, n) {
        void 0 === n && (n = !0),
          Object.defineProperties(this, {
            _delay: { value: t, writable: !0 },
            _fn: { value: e },
            _timeout: { value: null, writable: !0 },
          }),
          n && this.start();
      }
      return (
        Object.defineProperty(e.prototype, "delay", {
          get: function () {
            return this._delay;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isSet", {
          get: function () {
            return !!this._timeout;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.setDelay = function (e) {
          this._delay = e;
        }),
        (e.prototype.start = function () {
          var e = this;
          this.isSet ||
            (this._timeout = setTimeout(function () {
              var t = e._fn;
              e.clear(), t();
            }, this._delay));
        }),
        (e.prototype.clear = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (e.prototype.reset = function () {
          this.clear(), this.start();
        }),
        e
      );
    })();
    e.exports = r;
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    e.exports = {
      LocalAudioTrack: n(134),
      LocalVideoTrack: n(137),
      LocalDataTrack: n(140),
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = n(4).EventEmitter,
      c = n(1),
      u = (function (e) {
        function t(t, n) {
          var r,
            i = e.call(this) || this,
            o = null,
            a = t;
          return (
            (n = (function (e) {
              var t = new Map();
              for (var n in e) t.set(n, new Set(e[n]));
              return t;
            })(n)),
            Object.defineProperties(i, {
              _lock: {
                get: function () {
                  return o;
                },
                set: function (e) {
                  o = e;
                },
              },
              _reachableStates: {
                value:
                  ((r = n),
                  Array.from(r.keys()).reduce(function (e, t) {
                    return e.set(
                      t,
                      (function e(t, n, r) {
                        return (
                          (r = r || new Set()),
                          t.get(n).forEach(function (n) {
                            r.has(n) ||
                              (r.add(n), e(t, n, r).forEach(r.add, r));
                          }),
                          r
                        );
                      })(r, t)
                    );
                  }, new Map())),
              },
              _state: {
                get: function () {
                  return a;
                },
                set: function (e) {
                  a = e;
                },
              },
              _states: { value: n },
              _whenDeferreds: { value: new Set() },
              isLocked: {
                enumerable: !0,
                get: function () {
                  return null !== o;
                },
              },
              state: {
                enumerable: !0,
                get: function () {
                  return a;
                },
              },
            }),
            i.on("stateChanged", function (e) {
              i._whenDeferreds.forEach(function (t) {
                t.when(e, t.resolve, t.reject);
              });
            }),
            i
          );
        }
        return (
          i(t, e),
          (t.prototype._whenPromise = function (e) {
            var t = this;
            if ("function" != typeof e)
              return Promise.reject(
                new Error("when() executor must be a function")
              );
            var n = c.defer();
            return (
              (n.when = e),
              this._whenDeferreds.add(n),
              n.promise.then(
                function (e) {
                  return t._whenDeferreds.delete(n), e;
                },
                function (e) {
                  throw (t._whenDeferreds.delete(n), e);
                }
              )
            );
          }),
          (t.prototype.bracket = function (e, t) {
            var n,
              r = this;
            function i(e) {
              if ((r.hasLock(n) && r.releaseLockCompletely(n), e)) throw e;
            }
            return this.takeLock(e)
              .then(function (e) {
                return t((n = e));
              })
              .then(function (e) {
                return i(), e;
              }, i);
          }),
          (t.prototype.hasLock = function (e) {
            return this._lock === e;
          }),
          (t.prototype.preempt = function (e, t, n) {
            if (!l(this._states, this.state, e))
              throw new Error(
                'Cannot transition from "' + this.state + '" to "' + e + '"'
              );
            var r;
            this.isLocked && ((r = this._lock), (this._lock = null));
            var i = null;
            t && (i = this.takeLockSync(t));
            var o = i ? null : this.takeLockSync("preemption");
            return (
              this.transition(e, i || o, n),
              r && r.resolve(),
              o && this.releaseLock(o),
              i
            );
          }),
          (t.prototype.releaseLock = function (e) {
            if (!this.isLocked)
              throw new Error(
                "Could not release the lock for " +
                  e.name +
                  " because the StateMachine is not locked"
              );
            if (!this.hasLock(e))
              throw new Error(
                "Could not release the lock for " +
                  e.name +
                  " because " +
                  this._lock.name +
                  " has the lock"
              );
            0 === e.depth ? ((this._lock = null), e.resolve()) : e.depth--;
          }),
          (t.prototype.releaseLockCompletely = function (e) {
            if (!this.isLocked)
              throw new Error(
                "Could not release the lock for " +
                  e.name +
                  " because the StateMachine is not locked"
              );
            if (!this.hasLock(e))
              throw new Error(
                "Could not release the lock for " +
                  e.name +
                  " because " +
                  this._lock.name +
                  " has the lock"
              );
            (e.depth = 0), (this._lock = null), e.resolve();
          }),
          (t.prototype.takeLock = function (e) {
            var t = this;
            if ("object" == typeof e) {
              var n = e;
              return new Promise(function (e) {
                e(t.takeLockSync(n));
              });
            }
            var r = e;
            if (this.isLocked) {
              var i = this.takeLock.bind(this, r);
              return this._lock.promise.then(i);
            }
            return Promise.resolve(this.takeLockSync(r));
          }),
          (t.prototype.takeLockSync = function (e) {
            var t = "string" == typeof e ? null : e,
              n = t ? t.name : e;
            if ((t && !this.hasLock(t)) || (!t && this.isLocked))
              throw new Error(
                "Could not take the lock for " +
                  n +
                  " because the lock for " +
                  this._lock.name +
                  " was not released"
              );
            if (t) return t.depth++, t;
            var r = (function (e) {
              var t = c.defer();
              return (t.name = e), (t.depth = 0), t;
            })(n);
            return (this._lock = r), r;
          }),
          (t.prototype.transition = function (e, t, n) {
            if (((n = n || []), this.isLocked)) {
              if (!t)
                throw new Error(
                  "You must provide the key in order to transition"
                );
              if (!this.hasLock(t))
                throw new Error(
                  "Could not transition using the key for " +
                    t.name +
                    " because " +
                    this._lock.name +
                    " has the lock"
                );
            } else if (t)
              throw new Error(
                "Key provided for " +
                  t.name +
                  ", but the StateMachine was not locked (possibly due to preemption)"
              );
            if (!l(this._states, this.state, e))
              throw new Error(
                'Cannot transition from "' + this.state + '" to "' + e + '"'
              );
            (this._state = e),
              this.emit.apply(this, a([], o(["stateChanged", e].concat(n))));
          }),
          (t.prototype.tryTransition = function (e, t, n) {
            try {
              this.transition(e, t, n);
            } catch (e) {
              return !1;
            }
            return !0;
          }),
          (t.prototype.when = function (e) {
            var t = this;
            return this.state === e
              ? Promise.resolve(this)
              : l(this._reachableStates, this.state, e)
              ? this._whenPromise(function (n, r, i) {
                  n === e ? r(t) : l(t._reachableStates, n, e) || i(d(n, e));
                })
              : Promise.reject(d(this.state, e));
          }),
          t
        );
      })(s);
    function l(e, t, n) {
      return e.get(t).has(n);
    }
    function d(e, t) {
      return new Error('"' + t + '" cannot be reached from "' + e + '"');
    }
    e.exports = u;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(4),
      a = 0,
      s = (function (e) {
        function t(t, n, r) {
          var i = e.call(this) || this;
          return (
            Object.defineProperties(i, {
              _instanceId: { value: a++ },
              channel: { value: n },
              _log: { value: r.log.createLog("default", i) },
              _getReceiver: { value: t },
              _receiverPromise: { value: null, writable: !0 },
              _transport: { value: null, writable: !0 },
            }),
            i
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "isSetup", {
            get: function () {
              return !!this._receiverPromise;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.toString = function () {
            return (
              "[MediaSignaling #" + this._instanceId + ":" + this.channel + "]"
            );
          }),
          (t.prototype.setup = function (e) {
            var t = this;
            this._teardown(),
              this._log.info("setting up msp transport for id:", e);
            var n = this._getReceiver(e).then(function (e) {
              if (
                ("data" !== e.kind &&
                  t._log.error("Expected a DataTrackReceiver"),
                t._receiverPromise === n)
              ) {
                try {
                  (t._transport = e.toDataTransport()),
                    t.emit("ready", t._transport);
                } catch (e) {
                  t._log.error("Failed to toDataTransport: " + e.message);
                }
                e.once("close", function () {
                  return t._teardown();
                });
              }
            });
            this._receiverPromise = n;
          }),
          (t.prototype._teardown = function () {
            this._transport &&
              (this._log.info("Tearing down"),
              (this._transport = null),
              (this._receiverPromise = null),
              this.emit("teardown"));
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  ,
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    var n,
      r,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var c,
      u = [],
      l = !1,
      d = -1;
    function p() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && f());
    }
    function f() {
      if (!l) {
        var e = s(p);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function v() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new h(e, t)), 1 !== u.length || l || s(f);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = v),
      (i.addListener = v),
      (i.once = v),
      (i.off = v),
      (i.removeListener = v),
      (i.removeAllListeners = v),
      (i.emit = v),
      (i.prependListener = v),
      (i.prependOnceListener = v),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(4).EventEmitter,
      i = n(1).hidePrivateAndCertainPublicPropertiesInClass;
    e.exports = i(r, ["domain"]);
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(3).flatMap,
      i = n(3).guessBrowser,
      o = null;
    var a = null;
    function s(e) {
      return e &&
        (function () {
          if ("boolean" == typeof o) return o;
          if ("undefined" == typeof RTCPeerConnection) return (o = !1);
          try {
            new RTCPeerConnection({ sdpSemantics: "foo" }), (o = !1);
          } catch (e) {
            o = !0;
          }
          return o;
        })()
        ? { "plan-b": "planb", "unified-plan": "unified" }[e]
        : (function () {
            if (!a)
              if (
                "undefined" != typeof RTCPeerConnection &&
                "addTransceiver" in RTCPeerConnection.prototype
              )
                try {
                  new RTCPeerConnection().addTransceiver("audio"),
                    (a = "unified");
                } catch (e) {
                  a = "planb";
                }
              else a = "planb";
            return a;
          })();
    }
    function c(e, t) {
      return (t.match(new RegExp(e, "gm")) || []).reduce(function (t, n) {
        var r = n.match(new RegExp(e));
        return r ? t.add(r[1]) : t;
      }, new Set());
    }
    function u(e, t) {
      return c(e, t);
    }
    function l(e) {
      return u("^a=ssrc:[0-9]+ +msid:.+ +(.+) *$", e);
    }
    function d(e) {
      return u("^a=msid:.+ +(.+) *$", e);
    }
    function p(e, t) {
      return c("^a=ssrc:([0-9]+) +msid:[^ ]+ +" + t + " *$", e);
    }
    function f(e, t, n) {
      return (
        (t = t || ".*"),
        (n = n || ".*"),
        e
          .split("\r\nm=")
          .slice(1)
          .map(function (e) {
            return "m=" + e;
          })
          .filter(function (e) {
            var r = new RegExp("m=" + t, "gm"),
              i = new RegExp("a=" + n, "gm");
            return r.test(e) && i.test(e);
          })
      );
    }
    function h(e) {
      return Array.from(c("^a=ssrc:([0-9]+) +.*$", e));
    }
    function v(e, t) {
      var n = f(e),
        i = new RegExp("^a=msid:[^ ]+ +" + t + " *$", "gm"),
        o = n.filter(function (e) {
          return e.match(i);
        });
      return new Set(r(o, h));
    }
    function _(e, t, n) {
      return new Map(
        Array.from(e(n)).map(function (e) {
          return [e, t(n, e)];
        })
      );
    }
    function m(e) {
      return _(l, p, e);
    }
    function y(e) {
      return _(d, v, e);
    }
    function g(e, t, n) {
      var r = e(n),
        i = new Map();
      r.forEach(function (e, r) {
        if (t.has(r)) {
          var o = Array.from(t.get(r)),
            a = Array.from(e);
          o.forEach(function (e, t) {
            var r = a[t];
            i.set(r, e);
            var o = "^a=ssrc:" + r + " (.*)$",
              s = "a=ssrc:" + e + " $1";
            n = n.replace(new RegExp(o, "gm"), s);
          });
        } else t.set(r, e);
      });
      var o = "^(a=ssrc-group:[^ ]+ +)(.*)$";
      return (
        (n.match(new RegExp(o, "gm")) || []).forEach(function (e) {
          var t = e.match(new RegExp(o));
          if (t) {
            var r = t[1],
              a = t[2]
                .split(" ")
                .map(function (e) {
                  var t = i.get(e);
                  return t || e;
                })
                .join(" ");
            n = n.replace(t[0], r + a);
          }
        }),
        n
      );
    }
    (t.getSdpFormat = function (e) {
      return (
        {
          chrome: s(e),
          firefox: "unified",
          safari:
            "undefined" != typeof RTCRtpTransceiver &&
            "currentDirection" in RTCRtpTransceiver.prototype
              ? "unified"
              : "planb",
        }[i()] || null
      );
    }),
      (t.getMediaSections = f),
      (t.getPlanBTrackIds = l),
      (t.getUnifiedPlanTrackIds = d),
      (t.getPlanBSSRCs = p),
      (t.getUnifiedPlanSSRCs = v),
      (t.updatePlanBTrackIdsToSSRCs = function (e, t) {
        return g(m, e, t);
      }),
      (t.updateUnifiedPlanTrackIdsToSSRCs = function (e, t) {
        return g(y, e, t);
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        "undefined" != typeof AudioContext
          ? AudioContext
          : "undefined" != typeof webkitAudioContext
          ? webkitAudioContext
          : null,
      i = (function () {
        function e(t) {
          (t = Object.assign({ AudioContext: r }, t)),
            Object.defineProperties(this, {
              _AudioContext: { value: t.AudioContext },
              _audioContext: { value: null, writable: !0 },
              _holders: { value: new Set() },
              AudioContextFactory: { enumerable: !0, value: e },
            });
        }
        return (
          (e.prototype.getOrCreate = function (e) {
            if (
              !this._holders.has(e) &&
              (this._holders.add(e), this._AudioContext && !this._audioContext)
            )
              try {
                this._audioContext = new this._AudioContext();
              } catch (e) {}
            return this._audioContext;
          }),
          (e.prototype.release = function (e) {
            this._holders.has(e) &&
              (this._holders.delete(e),
              !this._holders.size &&
                this._audioContext &&
                (this._audioContext.close(), (this._audioContext = null)));
          }),
          e
        );
      })();
    e.exports = new i();
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(4).EventEmitter;
    function i() {
      Object.defineProperties(this, { _eventEmitter: { value: new r() } });
    }
    (i.prototype.dispatchEvent = function (e) {
      return this._eventEmitter.emit(e.type, e);
    }),
      (i.prototype.addEventListener = function () {
        return this._eventEmitter.addListener.apply(
          this._eventEmitter,
          arguments
        );
      }),
      (i.prototype.removeEventListener = function () {
        return this._eventEmitter.removeListener.apply(
          this._eventEmitter,
          arguments
        );
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(24),
      a = n(1),
      s = a.buildLogLevels,
      c = a.valueToJSON,
      u = n(2).DEFAULT_LOG_LEVEL,
      l = n(8),
      d = 0,
      p = (function (e) {
        function t(t, n, r) {
          var i;
          (r = Object.assign({ name: t, log: null, logLevel: u }, r)),
            (i = e.call(this) || this);
          var o = String(r.name),
            a = s(r.logLevel),
            c = r.log
              ? r.log.createLog("media", i)
              : new l("media", i, a, r.loggerName);
          return (
            Object.defineProperties(i, {
              _instanceId: { value: ++d },
              _log: { value: c },
              kind: { enumerable: !0, value: n },
              name: { enumerable: !0, value: o },
            }),
            i
          );
        }
        return (
          i(t, e),
          (t.prototype.toJSON = function () {
            return c(this);
          }),
          t
        );
      })(o);
    e.exports = p;
  },
  function (e, t, n) {
    "use strict";
    var r = (function () {
      function e(e) {
        var t = this;
        void 0 === e && (e = 1),
          Object.defineProperties(this, {
            _listeners: { value: [] },
            _onVisibilityChange: {
              value: function () {
                t._emitVisible("visible" === document.visibilityState);
              },
            },
          });
        for (var n = 0; n < e; n++) this._listeners.push([]);
      }
      return (
        (e.prototype.clear = function () {
          for (var e = this._listeners.length, t = 0; t < e; t++)
            this._listeners[t] = [];
        }),
        (e.prototype._listenerCount = function () {
          return this._listeners.reduce(function (e, t) {
            return e + t.length;
          }, 0);
        }),
        (e.prototype._emitVisible = function (e) {
          for (
            var t = this,
              n = Promise.resolve(),
              r = function (r) {
                n = n.then(function () {
                  return t._emitVisiblePhase(r, e);
                });
              },
              i = 1;
            i <= this._listeners.length;
            i++
          )
            r(i);
          return n;
        }),
        (e.prototype._emitVisiblePhase = function (e, t) {
          var n = this._listeners[e - 1];
          return Promise.all(
            n.map(function (e) {
              var n = e(t);
              return n instanceof Promise ? n : Promise.resolve(n);
            })
          );
        }),
        (e.prototype._start = function () {
          document.addEventListener(
            "visibilitychange",
            this._onVisibilityChange
          );
        }),
        (e.prototype._stop = function () {
          document.removeEventListener(
            "visibilitychange",
            this._onVisibilityChange
          );
        }),
        (e.prototype.onVisibilityChange = function (e, t) {
          if ("number" != typeof e || e <= 0 || e > this._listeners.length)
            throw new Error("invalid phase: ", e);
          return (
            this._listeners[e - 1].push(t),
            1 === this._listenerCount() && this._start(),
            this
          );
        }),
        (e.prototype.offVisibilityChange = function (e, t) {
          if ("number" != typeof e || e <= 0 || e > this._listeners.length)
            throw new Error("invalid phase: ", e);
          var n = this._listeners[e - 1],
            r = n.indexOf(t);
          return (
            -1 !== r &&
              (n.splice(r, 1), 0 === this._listenerCount() && this._stop()),
            this
          );
        }),
        e
      );
    })();
    e.exports = new r(2);
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      i =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      o = (function () {
        function e(e, t) {
          var n = this;
          Object.defineProperties(this, {
            _isCancelable: { writable: !0, value: !0 },
            _isCanceled: { writable: !0, value: !1 },
            _onCancel: { value: t },
          }),
            Object.defineProperty(this, "_promise", {
              value: new Promise(function (t, r) {
                e(
                  function (e) {
                    (n._isCancelable = !1), t(e);
                  },
                  function (e) {
                    (n._isCancelable = !1), r(e);
                  },
                  function () {
                    return n._isCanceled;
                  }
                );
              }),
            });
        }
        return (
          (e.reject = function (t) {
            return new e(
              function (e, n) {
                n(t);
              },
              function () {}
            );
          }),
          (e.resolve = function (t) {
            return new e(
              function (e) {
                e(t);
              },
              function () {}
            );
          }),
          (e.prototype.cancel = function () {
            return (
              this._isCancelable && ((this._isCanceled = !0), this._onCancel()),
              this
            );
          }),
          (e.prototype.catch = function () {
            var t = [].slice.call(arguments),
              n = this._promise;
            return new e(function (e, o) {
              n.catch.apply(n, i([], r(t))).then(e, o);
            }, this._onCancel);
          }),
          (e.prototype.then = function () {
            var t = [].slice.call(arguments),
              n = this._promise;
            return new e(function (e, o) {
              n.then.apply(n, i([], r(t))).then(e, o);
            }, this._onCancel);
          }),
          (e.prototype.finally = function () {
            var t = [].slice.call(arguments),
              n = this._promise;
            return new e(function (e, o) {
              n.finally.apply(n, i([], r(t))).then(e, o);
            }, this._onCancel);
          }),
          e
        );
      })();
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(77),
      a = n(2),
      s = a.typeErrors,
      c = a.trackPriority,
      u = (function (e) {
        function t(t, n, r, i) {
          var o = e.call(this, n.name, t.sid, i) || this;
          return (
            Object.defineProperties(o, {
              _reemitTrackEvent: {
                value: function () {
                  return o.emit(
                    o.isTrackEnabled ? "trackEnabled" : "trackDisabled"
                  );
                },
              },
              _signaling: { value: t },
              _unpublish: { value: r },
              isTrackEnabled: {
                enumerable: !0,
                get: function () {
                  return "data" === this.track.kind || this.track.isEnabled;
                },
              },
              kind: { enumerable: !0, value: n.kind },
              priority: {
                enumerable: !0,
                get: function () {
                  return t.updatedPriority;
                },
              },
              track: { enumerable: !0, value: n },
            }),
            n.on("disabled", o._reemitTrackEvent),
            n.on("enabled", o._reemitTrackEvent),
            o
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[LocalTrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          (t.prototype.setPriority = function (e) {
            var t = Object.values(c);
            if (!t.includes(e)) throw s.INVALID_VALUE("priority", t);
            return this._signaling.setPriority(e), this;
          }),
          (t.prototype.unpublish = function () {
            return (
              this.track.removeListener("disabled", this._reemitTrackEvent),
              this.track.removeListener("enabled", this._reemitTrackEvent),
              this._unpublish(this),
              this
            );
          }),
          t
        );
      })(o);
    e.exports = u;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this, t.name, t.sid, n) || this;
          Object.defineProperties(r, {
            _signaling: { value: t },
            _track: { value: null, writable: !0 },
            isSubscribed: {
              enumerable: !0,
              get: function () {
                return !!this._track;
              },
            },
            isTrackEnabled: {
              enumerable: !0,
              get: function () {
                return t.isEnabled;
              },
            },
            kind: { enumerable: !0, value: t.kind },
            publishPriority: {
              enumerable: !0,
              get: function () {
                return t.priority;
              },
            },
            track: {
              enumerable: !0,
              get: function () {
                return this._track;
              },
            },
          });
          var i = t.error,
            o = t.isEnabled,
            a = t.isSwitchedOff,
            s = t.priority;
          return (
            t.on("updated", function () {
              if (i !== t.error)
                return (
                  (i = t.error), void r.emit("subscriptionFailed", t.error)
                );
              o !== t.isEnabled &&
                ((o = t.isEnabled),
                r.track && r.track._setEnabled(t.isEnabled),
                r.emit(t.isEnabled ? "trackEnabled" : "trackDisabled")),
                a !== t.isSwitchedOff &&
                  (r._log.debug(
                    r.trackSid +
                      ": " +
                      (a ? "OFF" : "ON") +
                      " => " +
                      (t.isSwitchedOff ? "OFF" : "ON")
                  ),
                  (a = t.isSwitchedOff),
                  r.track
                    ? (r.track._setSwitchedOff(t.isSwitchedOff),
                      r.emit(
                        a ? "trackSwitchedOff" : "trackSwitchedOn",
                        r.track
                      ))
                    : a &&
                      r._log.warn(
                        "Track was not subscribed when switched Off."
                      )),
                s !== t.priority &&
                  ((s = t.priority), r.emit("publishPriorityChanged", s));
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[RemoteTrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          (t.prototype._subscribed = function (e) {
            !this._track &&
              e &&
              ((this._track = e), this.emit("subscribed", e));
          }),
          (t.prototype._unsubscribe = function () {
            if (this._track) {
              var e = this._track;
              (this._track = null), this.emit("unsubscribed", e);
            }
          }),
          t
        );
      })(n(77));
    e.exports = o;
  },
  function (e, t, n) {
    e.exports = n(179);
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      i = n(1),
      o = i.difference,
      a = i.flatMap,
      s = n(183),
      c = { 0: "PCMU", 8: "PCMA" };
    function u(e) {
      return Array.from(d(e)).reduce(function (e, t) {
        var n = t[0],
          r = t[1],
          i = e.get(r) || [];
        return e.set(r, i.concat(n));
      }, new Map());
    }
    function l(e) {
      return h(e).reduce(function (e, t) {
        var n = f(t);
        return n ? e.set(n, t) : e;
      }, new Map());
    }
    function d(e) {
      return v(e).reduce(function (t, n) {
        var r = new RegExp("a=rtpmap:" + n + " ([^/]+)"),
          i = e.match(r),
          o = i ? i[1].toLowerCase() : c[n] ? c[n].toLowerCase() : "";
        return t.set(n, o);
      }, new Map());
    }
    function p(e, t) {
      var n = new RegExp("^a=fmtp:" + e + " (.+)$", "m"),
        i = t.match(n);
      return (
        i &&
        i[1].split(";").reduce(function (e, t) {
          var n = r(t.split("="), 2),
            i = n[0],
            o = n[1];
          return (e[i] = isNaN(o) ? o : parseInt(o, 10)), e;
        }, {})
      );
    }
    function f(e) {
      var t = e.match(/^a=mid:(.+)$/m);
      return t && t[1];
    }
    function h(e, t, n) {
      return e
        .replace(/\r\n\r\n$/, "\r\n")
        .split("\r\nm=")
        .slice(1)
        .map(function (e) {
          return "m=" + e;
        })
        .filter(function (e) {
          var r = new RegExp("m=" + (t || ".*"), "gm"),
            i = new RegExp("a=" + (n || ".*"), "gm");
          return r.test(e) && i.test(e);
        });
    }
    function v(e) {
      var t = e.split("\r\n")[0].match(/([0-9]+)/g);
      return t
        ? t.slice(1).map(function (e) {
            return parseInt(e, 10);
          })
        : [];
    }
    function _(e, t) {
      var n = t.split("\r\n"),
        r = n[0],
        i = n.slice(1);
      return [(r = r.replace(/([0-9]+\s?)+$/, e.join(" ")))]
        .concat(i)
        .join("\r\n");
    }
    function m(e, t, n) {
      if (!/^m=(audio|video)/.test(e)) return e;
      var i = f(e),
        o = i && t.get(i);
      if (!o) return e;
      var s = d(o),
        c = u(e),
        l = a(Array.from(s), function (t) {
          var i = r(t, 2),
            a = i[0],
            s = i[1];
          return "rtx" === s || n.includes(s)
            ? []
            : (function (e, t, n, r, i) {
                var o = n.get(e) || [];
                if (o.length <= 1) return o;
                var a = p(t, i);
                if (!a) return o;
                var s = o.find(function (e) {
                  var t = p(e, r);
                  return (
                    t &&
                    Object.keys(a).every(function (e) {
                      return a[e] === t[e];
                    })
                  );
                });
                return "number" == typeof s ? [s] : o;
              })(s, a, c, e, o);
        }),
        h = c.get("rtx") || [];
      l = l.concat(
        h.filter(function (t) {
          var n = p(t, e);
          return n && l.includes(n.apt);
        })
      );
      var m = e.split("\r\n").filter(function (e) {
        var t = e.match(/^a=(rtpmap|fmtp|rtcp-fb):(.+) .+$/),
          n = t && t[2];
        return !t || (n && l.includes(parseInt(n, 10)));
      });
      return _(
        v(e).filter(function (e) {
          return l.includes(e);
        }),
        m.join("\r\n")
      );
    }
    function y(e, t) {
      var n = h(e);
      return [e.split("\r\nm=")[0]]
        .concat(
          n.map(function (e) {
            if (!/^m=(audio|video)/.test(e)) return e;
            var n = f(e);
            if (!n) return e;
            var i = t.get(n);
            if (!i) return e;
            var o = (e.match(/^a=msid:(.+)$/m) || [])[1];
            if (!o) return e;
            var a = r(o.split(" "), 2),
              s = a[0],
              c = a[1],
              u = new RegExp("msid:" + s + (c ? " " + c : "") + "$", "gm");
            return e.replace(u, "msid:" + s + " " + i);
          })
        )
        .join("\r\n");
    }
    function g(e, t) {
      return (
        "a=fmtp:" +
        e +
        " " +
        Object.entries(t)
          .map(function (e) {
            var t = r(e, 2);
            return t[0] + "=" + t[1];
          })
          .join(";")
      );
    }
    (t.addOrRewriteNewTrackIds = function (e, t, n) {
      var i = Array.from(n).reduce(function (n, i) {
        var o = r(i, 2),
          a = o[0],
          s = o[1];
        return (
          h(e, a, "send(only|recv)")
            .map(f)
            .filter(function (e) {
              return !t.has(e);
            })
            .forEach(function (e, t) {
              return n.set(e, s[t]);
            }),
          n
        );
      }, new Map());
      return y(e, i);
    }),
      (t.addOrRewriteTrackIds = y),
      (t.createCodecMapForMediaSection = u),
      (t.createPtToCodecName = d),
      (t.disableRtx = function (e) {
        var t = h(e);
        return [e.split("\r\nm=")[0]]
          .concat(
            t.map(function (e) {
              if (!/^m=video/.test(e)) return e;
              var t = u(e).get("rtx");
              if (!t) return e;
              var n = new Set(v(e));
              t.forEach(function (e) {
                return n.delete(e);
              });
              var r = e.match(/a=ssrc-group:FID [0-9]+ ([0-9]+)/),
                i = r && r[1],
                o = [
                  /^a=fmtp:.+ apt=.+$/,
                  /^a=rtpmap:.+ rtx\/.+$/,
                  /^a=ssrc-group:.+$/,
                ].concat(i ? [new RegExp("^a=ssrc:" + i + " .+$")] : []);
              return (
                (e = e
                  .split("\r\n")
                  .filter(function (e) {
                    return o.every(function (t) {
                      return !t.test(e);
                    });
                  })
                  .join("\r\n")),
                _(Array.from(n), e)
              );
            })
          )
          .join("\r\n");
      }),
      (t.enableDtxForOpus = function (e, t) {
        var n = h(e),
          r = e.split("\r\nm=")[0];
        return (
          (t =
            t ||
            n
              .filter(function (e) {
                return /^m=audio/.test(e);
              })
              .map(f)),
          [r]
            .concat(
              n.map(function (e) {
                if (!/^m=audio/.test(e)) return e;
                var n = u(e).get("opus");
                if (!n) return e;
                var r = p(n, e);
                if (!r) return e;
                var i = g(n, r),
                  o = new RegExp(i),
                  a = f(e);
                t.includes(a) ? (r.usedtx = 1) : delete r.usedtx;
                var s = g(n, r);
                return e.replace(o, s);
              })
            )
            .join("\r\n")
        );
      }),
      (t.filterLocalCodecs = function (e, t) {
        var n = h(e),
          r = e.split("\r\nm=")[0],
          i = l(t);
        return [r]
          .concat(
            n.map(function (e) {
              return m(e, i, []);
            })
          )
          .join("\r\n");
      }),
      (t.getMediaSections = h),
      (t.removeSSRCAttributes = function (e, t) {
        return e
          .split("\r\n")
          .filter(function (e) {
            return !t.find(function (t) {
              return new RegExp("a=ssrc:.*" + t + ":", "g").test(e);
            });
          })
          .join("\r\n");
      }),
      (t.revertSimulcast = function (e, t, n, r) {
        void 0 === r && (r = !1);
        var i = l(n),
          o = l(t),
          a = h(e);
        return [e.split("\r\nm=")[0]]
          .concat(
            a.map(function (e) {
              if (((e = e.replace(/\r\n$/, "")), !/^m=video/.test(e))) return e;
              var t = e.match(/^a=mid:(.+)$/m),
                n = t && t[1];
              if (!n) return e;
              var a = i.get(n),
                s = d(a),
                c = v(a),
                u = c.length && "vp8" === s.get(c[0]);
              return r || !u ? o.get(n).replace(/\r\n$/, "") : e;
            })
          )
          .concat("")
          .join("\r\n");
      }),
      (t.setCodecPreferences = function (e, t, n) {
        var r = h(e);
        return [e.split("\r\nm=")[0]]
          .concat(
            r.map(function (e) {
              if (!/^m=(audio|video)/.test(e)) return e;
              var r = e.match(/^m=(audio|video)/)[1],
                i = u(e),
                s = (function (e, t) {
                  t = t.map(function (e) {
                    return e.codec.toLowerCase();
                  });
                  var n = a(t, function (t) {
                      return e.get(t) || [];
                    }),
                    r = o(Array.from(e.keys()), t),
                    i = a(r, function (t) {
                      return e.get(t);
                    });
                  return n.concat(i);
                })(i, "audio" === r ? t : n),
                c = _(s, e),
                l = i.get("pcma") || [],
                d = i.get("pcmu") || [];
              return ("audio" === r ? new Set(l.concat(d)) : new Set()).has(
                s[0]
              )
                ? c.replace(/\r\nb=(AS|TIAS):([0-9]+)/g, "")
                : c;
            })
          )
          .join("\r\n");
      }),
      (t.setSimulcast = function (e, t) {
        var n = h(e);
        return [e.split("\r\nm=")[0]]
          .concat(
            n.map(function (e) {
              if (((e = e.replace(/\r\n$/, "")), !/^m=video/.test(e))) return e;
              var n = u(e),
                r = v(e),
                i = new Set(n.get("vp8") || []);
              return r.some(function (e) {
                return i.has(e);
              })
                ? s(e, t)
                : e;
            })
          )
          .concat("")
          .join("\r\n");
      });
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(19),
      a = n(207),
      s = {
        connecting: ["connected"],
        connected: ["disconnected", "reconnecting"],
        reconnecting: ["connected", "disconnected"],
        disconnected: [],
      },
      c = (function (e) {
        function t() {
          var t = e.call(this, "connecting", s) || this;
          return (
            Object.defineProperties(t, {
              _identity: { writable: !0, value: null },
              _networkQualityLevel: { value: null, writable: !0 },
              _networkQualityStats: { value: null, writable: !0 },
              _sid: { writable: !0, value: null },
              identity: {
                enumerable: !0,
                get: function () {
                  return this._identity;
                },
              },
              sid: {
                enumerable: !0,
                get: function () {
                  return this._sid;
                },
              },
              tracks: { enumerable: !0, value: new Map() },
            }),
            t
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "networkQualityLevel", {
            get: function () {
              return this._networkQualityLevel;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "networkQualityStats", {
            get: function () {
              return this._networkQualityStats;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.addTrack = function (e) {
            return (
              this.tracks.set(e.id || e.sid, e),
              this.emit("trackAdded", e),
              this
            );
          }),
          (t.prototype.disconnect = function () {
            return (
              "disconnected" !== this.state &&
              (this.preempt("disconnected"), !0)
            );
          }),
          (t.prototype.removeTrack = function (e) {
            var t = this.tracks.get(e.id || e.sid);
            return (
              this.tracks.delete(e.id || e.sid),
              t && this.emit("trackRemoved", e),
              t || null
            );
          }),
          (t.prototype.setNetworkQualityLevel = function (e, t) {
            this._networkQualityLevel !== e &&
              ((this._networkQualityLevel = e),
              (this._networkQualityStats =
                t && (t.audio || t.video) ? new a(t) : null),
              this.emit("networkQualityLevelChanged"));
          }),
          (t.prototype.connect = function (e, t) {
            return (
              ("connecting" === this.state || "reconnecting" === this.state) &&
              (this._sid || (this._sid = e),
              this._identity || (this._identity = t),
              this.preempt("connected"),
              !0)
            );
          }),
          (t.prototype.reconnecting = function () {
            return (
              ("connecting" === this.state || "connected" === this.state) &&
              (this.preempt("reconnecting"), !0)
            );
          }),
          t
        );
      })(o);
    e.exports = c;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e) {
    e.exports = JSON.parse(
      '{"_from":"twilio-video@^2.7.2","_id":"twilio-video@2.21.1","_inBundle":false,"_integrity":"sha512-odVq6tBF2OGwtOncvGuQjyuv6fAIkIWVzZZxlYnFkbUen6eq3A9fCtNuKLb+GnXFwXLzzRHByi3yJzQgkWbJow==","_location":"/twilio-video","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"twilio-video@^2.7.2","name":"twilio-video","escapedName":"twilio-video","rawSpec":"^2.7.2","saveSpec":null,"fetchSpec":"^2.7.2"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/twilio-video/-/twilio-video-2.21.1.tgz","_shasum":"e6bb3346e42ba58852d37b72501cdbfd1c4d508e","_spec":"twilio-video@^2.7.2","_where":"/Users/sjagecic/Documents/blocksi/live/bmee-extension","author":{"name":"Mark Andrus Roberts","email":"mroberts@twilio.com"},"browser":{"ws":"./src/ws.js","xmlhttprequest":"./src/xmlhttprequest.js"},"bugs":{"url":"https://github.com/twilio/twilio-video.js/issues"},"bundleDependencies":false,"contributors":[{"name":"Ryan Rowland","email":"rrowland@twilio.com"},{"name":"Manjesh Malavalli","email":"mmalavalli@twilio.com"},{"name":"Makarand Patwardhan","email":"mpatwardhan@twilio.com"}],"dependencies":{"backoff":"^2.5.0","events":"^3.3.0","util":"^0.12.4","ws":"^7.4.6","xmlhttprequest":"^1.8.0"},"deprecated":false,"description":"Twilio Video JavaScript Library","devDependencies":{"@babel/core":"^7.14.2","@babel/preset-env":"^7.14.2","@babel/preset-typescript":"^7.13.0","@types/express":"^4.11.0","@types/node":"^8.5.1","@types/selenium-webdriver":"^3.0.8","@types/ws":"^3.2.1","@typescript-eslint/eslint-plugin":"^4.13.0","@typescript-eslint/parser":"^4.0.0","babel-cli":"^6.26.0","babel-preset-es2015":"^6.24.1","browserify":"^17.0.0","cheerio":"^0.22.0","cors":"^2.8.5","electron":"^9.1.0","envify":"^4.0.0","eslint":"^6.2.1","eslint-config-standard":"^14.0.0","eslint-plugin-import":"^2.18.2","eslint-plugin-node":"^9.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.1","express":"^4.16.2","glob":"^7.1.7","ink-docstrap":"^1.3.2","inquirer":"^7.0.0","is-docker":"^2.0.0","jsdoc":"^3.5.5","jsdoc-babel":"^0.5.0","json-loader":"^0.5.7","karma":"^5.0.2","karma-browserify":"^8.0.0","karma-chrome-launcher":"^2.0.0","karma-edgium-launcher":"^4.0.0-0","karma-electron":"^6.1.0","karma-firefox-launcher":"^1.3.0","karma-htmlfile-reporter":"^0.3.8","karma-junit-reporter":"^1.2.0","karma-mocha":"^1.3.0","karma-safari-launcher":"^1.0.0","karma-spec-reporter":"0.0.32","karma-typescript":"^5.5.1","karma-typescript-es6-transform":"^5.5.1","mocha":"^3.2.0","mock-require":"^3.0.3","ncp":"^2.0.0","node-http-server":"^8.1.2","npm-run-all":"^4.0.2","nyc":"^15.1.0","requirejs":"^2.3.3","rimraf":"^2.6.1","simple-git":"^1.126.0","sinon":"^4.0.1","ts-node":"4.0.1","tslint":"5.8.0","twilio":"^3.49.0","twilio-release-tool":"^1.0.2","typescript":"4.2.2","uglify-js":"^2.8.22","vinyl-fs":"^2.4.4","vinyl-source-stream":"^1.1.0","watchify":"^3.11.1","webrtc-adapter":"^7.7.1"},"engines":{"node":">=0.12"},"homepage":"https://twilio.com","keywords":["twilio","webrtc","library","javascript","video","rooms"],"license":"BSD-3-Clause","main":"./es5/index.js","name":"twilio-video","repository":{"type":"git","url":"git+https://github.com/twilio/twilio-video.js.git"},"scripts":{"build":"npm-run-all clean lint docs test:unit test:integration build:es5 build:js build:min.js test:umd","build:es5":"rimraf ./es5 && tsc tsdef/twilio-video-tests.ts --noEmit --lib es2018,dom && tsc ","build:js":"node ./scripts/build.js ./src/twilio-video.js ./LICENSE.md ./dist/twilio-video.js","build:min.js":"uglifyjs ./dist/twilio-video.js -o ./dist/twilio-video.min.js --comments \\"/^! twilio-video.js/\\" -b beautify=false,ascii_only=true","build:quick":"npm-run-all clean lint docs build:es5 build:js build:min.js","clean":"rimraf ./coverage ./es5 ./dist","docs":"node ./scripts/docs.js ./dist/docs","lint":"npm-run-all lint:js lint:ts","lint:js":"eslint ./lib ./test/*.js ./docker/**/*.js ./test/framework/*.js ./test/lib/*.js ./test/integration/** ./test/unit/** ","lint:ts":"eslint ./tsdef/*.ts ./lib/**/*.ts","printVersion":"node --version && npm --version","test":"npm-run-all test:unit test:integration","test:crossbrowser":"npm-run-all test:crossbrowser:*","test:crossbrowser:build":"npm-run-all test:crossbrowser:build:*","test:crossbrowser:build:browser":"cd ./test/crossbrowser && browserify lib/crossbrowser/src/browser/index.js > src/browser/index.js","test:crossbrowser:build:clean":"rimraf ./test/crossbrowser/lib ./test/crossbrowser/src/browser/index.js","test:crossbrowser:build:lint":"cd ./test/crossbrowser && tslint --project tsconfig.json","test:crossbrowser:build:tsc":"cd ./test/crossbrowser && tsc","test:crossbrowser:test":"cd ./test/crossbrowser && mocha --compilers ts:ts-node/register test/integration/spec/**/*.ts","test:framework":"npm-run-all test:framework:install test:framework:no-framework test:framework:react","test:framework:angular":"npm-run-all test:framework:angular:*","test:framework:angular:install":"cd ./test/framework/twilio-video-angular && rimraf ./node_modules package-lock.json && npm install","test:framework:angular:run":"mocha ./test/framework/twilio-video-angular.js","test:framework:install":"npm install chromedriver && npm install selenium-webdriver && npm install geckodriver && npm install puppeteer","test:framework:no-framework":"npm-run-all test:framework:no-framework:*","test:framework:no-framework:run":"mocha ./test/framework/twilio-video-no-framework.js","test:framework:react":"npm-run-all test:framework:react:*","test:framework:react:build":"cd ./test/framework/twilio-video-react && npm run build","test:framework:react:install":"cd ./test/framework/twilio-video-react && rimraf ./node_modules package-lock.json && npm install","test:framework:react:run":"mocha ./test/framework/twilio-video-react.js","test:framework:react:test":"node ./scripts/framework.js twilio-video-react","test:integration":"npm run build:es5 && node ./scripts/karma.js karma/integration.conf.js","test:integration:adapter":"node ./scripts/karma.js karma/integration.adapter.conf.js","test:sdkdriver":"npm-run-all test:sdkdriver:*","test:sdkdriver:build":"npm-run-all test:sdkdriver:build:*","test:sdkdriver:build:clean":"rimraf ./test/lib/sdkdriver/lib ./test/lib/sdkdriver/test/integration/browser/index.js","test:sdkdriver:build:lint":"cd ./test/lib/sdkdriver && tslint --project tsconfig.json","test:sdkdriver:build:tsc":"cd ./test/lib/sdkdriver && tsc --rootDir src","test:sdkdriver:test":"npm-run-all test:sdkdriver:test:*","test:sdkdriver:test:integration":"npm-run-all test:sdkdriver:test:integration:*","test:sdkdriver:test:integration:browser":"cd ./test/lib/sdkdriver/test/integration && browserify browser/browser.js > browser/index.js","test:sdkdriver:test:integration:run":"cd ./test/lib/sdkdriver && mocha --compilers ts:ts-node/register test/integration/spec/**/*.ts","test:sdkdriver:test:unit":"cd ./test/lib/sdkdriver && mocha --compilers ts:ts-node/register test/unit/spec/**/*.ts","test:serversiderender":"mocha ./test/serversiderender/index.js","test:umd":"mocha ./test/umd/index.js","test:umd:install":"npm install puppeteer@5.5.0","test:unit":"npm-run-all printVersion build:es5 && nyc --report-dir=./coverage --include=lib/**/* --reporter=html --reporter=lcov --reporter=text mocha -r ts-node/register ./test/unit/*","watch":"tsc -w"},"title":"Twilio Video","types":"./tsdef/index.d.ts","version":"2.21.1"}'
    );
  },
  function (e, t) {
    function n(e) {
      for (var t = "", n = 0; n < 32; n++)
        t += "1234567890abcdef".charAt(
          Math.floor(Math.random() * "1234567890abcdef".length)
        );
      return "" + e + t;
    }
    (t.sessionSID = n("SS")), (t.createSID = n);
  },
  function (e, t, n) {
    "use strict";
    "function" == typeof MediaStream
      ? (e.exports = MediaStream)
      : (e.exports = function () {
          throw new Error("MediaStream is not supported");
        });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function e(t) {
      if (!(this instanceof e)) return new e(t);
      var n = t && "rollback" === t.type ? null : new RTCSessionDescription(t);
      Object.defineProperties(this, {
        _description: {
          get: function () {
            return n;
          },
        },
        sdp: { enumerable: !0, value: n ? n.sdp : t.sdp },
        type: { enumerable: !0, value: n ? n.type : t.type },
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3).defer,
      i = { high: new Set(["low"]), low: new Set(["high"]) };
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      var t = e || "low";
      Object.defineProperties(this, {
        _state: {
          set: function (e) {
            if (t !== e) {
              t = e;
              var n = this._whenDeferreds.get(t);
              n.forEach(function (e) {
                e.resolve(this);
              }, this),
                n.clear();
            }
          },
          get: function () {
            return t;
          },
        },
        _whenDeferreds: {
          value: new Map([
            ["high", new Set()],
            ["low", new Set()],
          ]),
        },
        state: {
          enumerable: !0,
          get: function () {
            return this._state;
          },
        },
      });
    }
    function a(e, t) {
      return new Error('Cannot transition from "' + e + '" to "' + t + '"');
    }
    (o.prototype.lower = function () {
      return this.transition("low");
    }),
      (o.prototype.raise = function () {
        return this.transition("high");
      }),
      (o.prototype.transition = function (e) {
        if (!i[this.state].has(e)) throw a(this.state, e);
        return (this._state = e), this;
      }),
      (o.prototype.when = function (e) {
        if (this.state === e) return Promise.resolve(this);
        if (!i[this.state].has(e)) return Promise.reject(a(this.state, e));
        var t = r();
        return this._whenDeferreds.get(e).add(t), t.promise;
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    e.exports = RTCSessionDescription;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return (
          i(t, e),
          (t.prototype._start = function () {
            e.prototype._start.call(this),
              this._dummyEl &&
                ((this._dummyEl.srcObject = null), (this._dummyEl = null));
          }),
          (t.prototype.attach = function () {
            return e.prototype.attach.apply(this, arguments);
          }),
          (t.prototype.detach = function () {
            return e.prototype.detach.apply(this, arguments);
          }),
          t
        );
      })(n(59));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(3),
      a = o.guessBrowser,
      s = o.isIOSChrome,
      c = n(13).MediaStream,
      u = n(1),
      l = u.waitForEvent,
      d = u.waitForSometime,
      p = n(60),
      f = (function (e) {
        function t(t, n) {
          var r = this;
          (n = Object.assign(
            {
              playPausedElementsIfNotBackgrounded:
                ("safari" === a() || s()) &&
                "object" == typeof document &&
                "function" == typeof document.addEventListener &&
                "string" == typeof document.visibilityState,
            },
            n
          )),
            (r = e.call(this, t.id, t.kind, n) || this);
          var i = !1;
          return (
            (n = Object.assign({ MediaStream: c }, n)),
            Object.defineProperties(r, {
              _attachments: { value: new Set() },
              _dummyEl: { value: null, writable: !0 },
              _elShims: { value: new WeakMap() },
              _isStarted: {
                get: function () {
                  return i;
                },
                set: function (e) {
                  i = e;
                },
              },
              _playPausedElementsIfNotBackgrounded: {
                value: n.playPausedElementsIfNotBackgrounded,
              },
              _shouldShimAttachedElements: {
                value:
                  n.workaroundWebKitBug212780 ||
                  n.playPausedElementsIfNotBackgrounded,
              },
              _unprocessedTrack: { value: null, writable: !0 },
              _MediaStream: { value: n.MediaStream },
              isStarted: {
                enumerable: !0,
                get: function () {
                  return i;
                },
              },
              mediaStreamTrack: {
                enumerable: !0,
                get: function () {
                  return this._unprocessedTrack || t.track;
                },
              },
              processedTrack: { enumerable: !0, value: null, writable: !0 },
            }),
            r._initialize(),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype._start = function () {
            this._log.debug("Started"),
              (this._isStarted = !0),
              this._dummyEl && (this._dummyEl.oncanplay = null),
              this.emit("started", this);
          }),
          (t.prototype._initialize = function () {
            var e = this;
            this._log.debug("Initializing"),
              (this._dummyEl = this._createElement()),
              this.mediaStreamTrack.addEventListener("ended", function t() {
                e._end(), e.mediaStreamTrack.removeEventListener("ended", t);
              }),
              this._dummyEl &&
                ((this._dummyEl.muted = !0),
                (this._dummyEl.oncanplay = this._start.bind(
                  this,
                  this._dummyEl
                )),
                this._attach(this._dummyEl, this.mediaStreamTrack),
                this._attachments.delete(this._dummyEl));
          }),
          (t.prototype._end = function () {
            this._log.debug("Ended"),
              this._dummyEl &&
                (this._dummyEl.remove(),
                (this._dummyEl.srcObject = null),
                (this._dummyEl.oncanplay = null),
                (this._dummyEl = null));
          }),
          (t.prototype.attach = function (e) {
            var t = this;
            if (
              ("string" == typeof e
                ? (e = this._selectElement(e))
                : e || (e = this._createElement()),
              this._log.debug("Attempting to attach to element:", e),
              (e = this._attach(e)),
              this._shouldShimAttachedElements && !this._elShims.has(e))
            ) {
              var n = this._playPausedElementsIfNotBackgrounded
                ? function () {
                    return (function (e, t) {
                      var n = e.tagName.toLowerCase();
                      t.warn("Unintentionally paused:", e),
                        Promise.race([
                          l(document, "visibilitychange"),
                          d(1e3),
                        ]).then(function () {
                          "visible" === document.visibilityState &&
                            p
                              .whenResolved("audio")
                              .then(function () {
                                return (
                                  t.info(
                                    "Playing unintentionally paused <" +
                                      n +
                                      "> element"
                                  ),
                                  t.debug("Element:", e),
                                  e.play()
                                );
                              })
                              .then(function () {
                                t.info(
                                  "Successfully played unintentionally paused <" +
                                    n +
                                    "> element"
                                ),
                                  t.debug("Element:", e);
                              })
                              .catch(function (r) {
                                t.warn(
                                  "Error while playing unintentionally paused <" +
                                    n +
                                    "> element:",
                                  { error: r, el: e }
                                );
                              });
                        });
                    })(e, t._log);
                  }
                : null;
              this._elShims.set(
                e,
                (function (e, t) {
                  void 0 === t && (t = null);
                  var n = e.pause,
                    r = e.play,
                    i = !1;
                  (e.pause = function () {
                    return (i = !0), n.call(e);
                  }),
                    (e.play = function () {
                      return (i = !1), r.call(e);
                    });
                  var o = t
                    ? function () {
                        i || t();
                      }
                    : null;
                  o && e.addEventListener("pause", o);
                  return {
                    pausedIntentionally: function () {
                      return i;
                    },
                    unShim: function () {
                      (e.pause = n),
                        (e.play = r),
                        o && e.removeEventListener("pause", o);
                    },
                  };
                })(e, n)
              );
            }
            return e;
          }),
          (t.prototype._attach = function (e, t) {
            void 0 === t && (t = this.processedTrack || this.mediaStreamTrack);
            var n = e.srcObject;
            n instanceof this._MediaStream || (n = new this._MediaStream());
            var r = "audio" === t.kind ? "getAudioTracks" : "getVideoTracks";
            return (
              n[r]().forEach(function (e) {
                n.removeTrack(e);
              }),
              n.addTrack(t),
              (e.srcObject = n),
              (e.autoplay = !0),
              (e.playsInline = !0),
              this._attachments.has(e) || this._attachments.add(e),
              e
            );
          }),
          (t.prototype._selectElement = function (e) {
            var t = document.querySelector(e);
            if (!t) throw new Error("Selector matched no element: " + e);
            return t;
          }),
          (t.prototype._updateElementsMediaStreamTrack = function () {
            var e = this;
            this._log.debug(
              "Reattaching all elements to update mediaStreamTrack"
            ),
              this._getAllAttachedElements().forEach(function (t) {
                return e._attach(t);
              });
          }),
          (t.prototype._createElement = function () {
            return "undefined" != typeof document
              ? document.createElement(this.kind)
              : null;
          }),
          (t.prototype.detach = function (e) {
            var t;
            return (
              (t =
                "string" == typeof e
                  ? [this._selectElement(e)]
                  : e
                  ? [e]
                  : this._getAllAttachedElements()),
              this._log.debug("Attempting to detach from elements:", t),
              this._detachElements(t),
              e ? t[0] : t
            );
          }),
          (t.prototype._detachElements = function (e) {
            return e.map(this._detachElement.bind(this));
          }),
          (t.prototype._detachElement = function (e) {
            if (!this._attachments.has(e)) return e;
            var t = e.srcObject;
            (t instanceof this._MediaStream &&
              t.removeTrack(this.processedTrack || this.mediaStreamTrack),
            this._attachments.delete(e),
            this._shouldShimAttachedElements && this._elShims.has(e)) &&
              (this._elShims.get(e).unShim(), this._elShims.delete(e));
            return e;
          }),
          (t.prototype._getAllAttachedElements = function () {
            var e = [];
            return (
              this._attachments.forEach(function (t) {
                e.push(t);
              }),
              e
            );
          }),
          t
        );
      })(n(33));
    e.exports = f;
  },
  function (e, t, n) {
    "use strict";
    var r = n(1).defer,
      i = (function () {
        function e() {
          Object.defineProperties(this, {
            _audio: { value: r(), writable: !0 },
            _video: { value: r(), writable: !0 },
          }),
            this._audio.resolve(),
            this._video.resolve();
        }
        return (
          (e.prototype.resolveDeferred = function (e) {
            "audio" === e ? this._audio.resolve() : this._video.resolve();
          }),
          (e.prototype.startDeferred = function (e) {
            "audio" === e ? (this._audio = r()) : (this._video = r());
          }),
          (e.prototype.whenResolved = function (e) {
            return "audio" === e ? this._audio.promise : this._video.promise;
          }),
          e
        );
      })();
    e.exports = new i();
  },
  function (e, t) {
    var n = function () {},
      r =
        "undefined" != typeof window &&
        void 0 !== window.navigator &&
        /Trident\/|MSIE /.test(window.navigator.userAgent),
      i = ["trace", "debug", "info", "warn", "error"];
    function o(e, t) {
      var n = e[t];
      if ("function" == typeof n.bind) return n.bind(e);
      try {
        return Function.prototype.bind.call(n, e);
      } catch (t) {
        return function () {
          return Function.prototype.apply.apply(n, [e, arguments]);
        };
      }
    }
    function a() {
      console.log &&
        (console.log.apply
          ? console.log.apply(console, arguments)
          : Function.prototype.apply.apply(console.log, [console, arguments])),
        console.trace && console.trace();
    }
    function s(e) {
      return (
        "debug" === e && (e = "log"),
        "undefined" != typeof console &&
          ("trace" === e && r
            ? a
            : void 0 !== console[e]
            ? o(console, e)
            : void 0 !== console.log
            ? o(console, "log")
            : n)
      );
    }
    function c(e, t) {
      for (var r = 0; r < i.length; r++) {
        var o = i[r];
        this[o] = r < e ? n : this.methodFactory(o, e, t);
      }
      this.log = this.debug;
    }
    function u(e, t, n) {
      return function () {
        "undefined" != typeof console &&
          (c.call(this, t, n), this[e].apply(this, arguments));
      };
    }
    function l(e, t, n) {
      return s(e) || u.apply(this, arguments);
    }
    function d(e, t, n) {
      var r,
        o = this,
        a = "loglevel";
      function s() {
        var e;
        if ("undefined" != typeof window && a) {
          try {
            e = window.localStorage[a];
          } catch (e) {}
          if (void 0 === e)
            try {
              var t = window.document.cookie,
                n = t.indexOf(encodeURIComponent(a) + "=");
              -1 !== n && (e = /^([^;]+)/.exec(t.slice(n))[1]);
            } catch (e) {}
          return void 0 === o.levels[e] && (e = void 0), e;
        }
      }
      "string" == typeof e
        ? (a += ":" + e)
        : "symbol" == typeof e && (a = void 0),
        (o.name = e),
        (o.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5,
        }),
        (o.methodFactory = n || l),
        (o.getLevel = function () {
          return r;
        }),
        (o.setLevel = function (t, n) {
          if (
            ("string" == typeof t &&
              void 0 !== o.levels[t.toUpperCase()] &&
              (t = o.levels[t.toUpperCase()]),
            !("number" == typeof t && t >= 0 && t <= o.levels.SILENT))
          )
            throw "log.setLevel() called with invalid level: " + t;
          if (
            ((r = t),
            !1 !== n &&
              (function (e) {
                var t = (i[e] || "silent").toUpperCase();
                if ("undefined" != typeof window && a) {
                  try {
                    return void (window.localStorage[a] = t);
                  } catch (e) {}
                  try {
                    window.document.cookie =
                      encodeURIComponent(a) + "=" + t + ";";
                  } catch (e) {}
                }
              })(t),
            c.call(o, t, e),
            "undefined" == typeof console && t < o.levels.SILENT)
          )
            return "No console available for logging";
        }),
        (o.setDefaultLevel = function (e) {
          s() || o.setLevel(e, !1);
        }),
        (o.enableAll = function (e) {
          o.setLevel(o.levels.TRACE, e);
        }),
        (o.disableAll = function (e) {
          o.setLevel(o.levels.SILENT, e);
        });
      var u = s();
      null == u && (u = null == t ? "WARN" : t), o.setLevel(u, !1);
    }
    var p = new d(),
      f = {};
    p.getLogger = function (e) {
      if (("symbol" != typeof e && "string" != typeof e) || "" === e)
        throw new TypeError("You must supply a name when creating a logger.");
      var t = f[e];
      return t || (t = f[e] = new d(e, p.getLevel(), p.methodFactory)), t;
    };
    var h = "undefined" != typeof window ? window.log : void 0;
    (p.noConflict = function () {
      return (
        "undefined" != typeof window && window.log === p && (window.log = h), p
      );
    }),
      (p.getLoggers = function () {
        return f;
      }),
      (p.default = p),
      (e.exports = p);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(13).getUserMedia,
      a = n(3),
      s = a.guessBrowser,
      c = a.isIOSChrome,
      u = n(1),
      l = u.capitalize,
      d = u.defer,
      p = u.isUserMediaTrack,
      f = u.waitForSometime,
      h = u.waitForEvent,
      v = n(2).typeErrors.ILLEGAL_INVOKE,
      _ = n(136),
      m = n(64),
      y = n(34),
      g = n(60),
      b = n(65),
      w = n(66);
    function k(e) {
      var t = e._log,
        n = e.kind,
        r = { audio: _, video: m }[n],
        i = e._dummyEl,
        o = e.mediaStreamTrack,
        a = null;
      function s() {
        var n = e._workaroundWebKitBug1208516Cleanup,
          o = e.isStopped,
          s = e.mediaStreamTrack.muted,
          c = o && !!n;
        return Promise.resolve().then(function () {
          return (
            "visible" === document.visibilityState &&
            !a &&
            (s ||
              c ||
              i
                .play()
                .then(function () {
                  return r(i);
                })
                .then(function (e) {
                  return (
                    e
                      ? t.warn("Silence detected")
                      : t.info("Non-silence detected"),
                    e
                  );
                })
                .catch(function (e) {
                  t.warn("Failed to detect silence:", e);
                })
                .finally(function () {
                  i.pause();
                }))
          );
        });
      }
      function c() {
        return Promise.race([h(o, "unmute"), f(50)])
          .then(function () {
            return s();
          })
          .then(function (r) {
            return (
              r &&
                !a &&
                ((a = d()),
                e
                  ._restart()
                  .finally(function () {
                    (i = e._dummyEl),
                      p(),
                      (o = e.mediaStreamTrack),
                      l(),
                      a.resolve(),
                      (a = null);
                  })
                  .catch(function (e) {
                    t.error("failed to restart track: ", e);
                  })),
              ((a && a.promise) || Promise.resolve()).finally(function () {
                return g.resolveDeferred(n);
              })
            );
          })
          .catch(function (e) {
            t.error("error in maybeRestart: " + e.message);
          });
      }
      function u() {
        var t = e._log,
          n = e.kind;
        t.info("Muted"), t.debug("LocalMediaTrack:", e), g.startDeferred(n);
      }
      function l() {
        o.addEventListener("ended", c),
          o.addEventListener("mute", u),
          o.addEventListener("unmute", c);
      }
      function p() {
        o.removeEventListener("ended", c),
          o.removeEventListener("mute", u),
          o.removeEventListener("unmute", c);
      }
      var v = function (e) {
        return !!e && c();
      };
      return (
        y.onVisibilityChange(1, v),
        l(),
        function () {
          y.offVisibilityChange(1, v), p();
        }
      );
    }
    e.exports = function (e) {
      return (function (e) {
        function t(t, n) {
          var r = this,
            i =
              ("safari" === s() || c()) &&
              p(t) &&
              "object" == typeof document &&
              "function" == typeof document.addEventListener &&
              "string" == typeof document.visibilityState;
          n = Object.assign(
            {
              getUserMedia: o,
              isCreatedByCreateLocalTracks: !1,
              workaroundWebKitBug1208516: i,
              gUMSilentTrackWorkaround: b,
            },
            n
          );
          var a = new w(t),
            u = a.kind;
          return (
            (r = e.call(this, a, n) || this),
            Object.defineProperties(r, {
              _constraints: {
                value: "object" == typeof n[u] ? n[u] : {},
                writable: !0,
              },
              _getUserMedia: { value: n.getUserMedia },
              _gUMSilentTrackWorkaround: { value: n.gUMSilentTrackWorkaround },
              _workaroundWebKitBug1208516: {
                value: n.workaroundWebKitBug1208516,
              },
              _workaroundWebKitBug1208516Cleanup: { value: null, writable: !0 },
              _didCallEnd: { value: !1, writable: !0 },
              _isCreatedByCreateLocalTracks: {
                value: n.isCreatedByCreateLocalTracks,
              },
              _trackSender: { value: a },
              id: { enumerable: !0, value: a.id },
              isEnabled: {
                enumerable: !0,
                get: function () {
                  return a.enabled;
                },
              },
              isStopped: {
                enumerable: !0,
                get: function () {
                  return "ended" === a.readyState;
                },
              },
            }),
            r._workaroundWebKitBug1208516 &&
              (r._workaroundWebKitBug1208516Cleanup = k(r)),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype._end = function () {
            this._didCallEnd ||
              (e.prototype._end.call(this),
              (this._didCallEnd = !0),
              this.emit("stopped", this));
          }),
          (t.prototype._initialize = function () {
            this._didCallEnd && (this._didCallEnd = !1),
              e.prototype._initialize.call(this);
          }),
          (t.prototype._reacquireTrack = function (e) {
            var t,
              n = this._getUserMedia,
              r = this._gUMSilentTrackWorkaround,
              i = this._log,
              o = this.mediaStreamTrack.kind;
            i.info("Re-acquiring the MediaStreamTrack"),
              i.debug("Constraints:", e);
            var a = Object.assign(
              { audio: !1, video: !1 },
              (((t = {})[o] = e), t)
            );
            return (
              this._workaroundWebKitBug1208516Cleanup ? r(i, n, a) : n(a)
            ).then(function (e) {
              return e.getTracks()[0];
            });
          }),
          (t.prototype._restart = function (e) {
            var t = this,
              n = this._log;
            return (
              (e = e || this._constraints),
              this._stop(),
              this._reacquireTrack(e)
                .catch(function (t) {
                  throw (
                    (n.error("Failed to re-acquire the MediaStreamTrack:", {
                      error: t,
                      constraints: e,
                    }),
                    t)
                  );
                })
                .then(function (r) {
                  return (
                    n.info("Re-acquired the MediaStreamTrack"),
                    n.debug("MediaStreamTrack:", r),
                    (t._constraints = Object.assign({}, e)),
                    t._setMediaStreamTrack(r)
                  );
                })
            );
          }),
          (t.prototype._setMediaStreamTrack = function (e) {
            var t = this;
            return (
              (e.enabled = this.mediaStreamTrack.enabled),
              this._stop(),
              (this._unprocessedTrack
                ? Promise.resolve().then(function () {
                    t._unprocessedTrack = e;
                  })
                : this._trackSender.setMediaStreamTrack(e).catch(function (n) {
                    t._log.warn("setMediaStreamTrack failed:", {
                      error: n,
                      mediaStreamTrack: e,
                    });
                  })
              ).then(function () {
                t._initialize(),
                  t._getAllAttachedElements().forEach(function (e) {
                    return t._attach(e);
                  });
              })
            );
          }),
          (t.prototype._stop = function () {
            return this.mediaStreamTrack.stop(), this._end(), this;
          }),
          (t.prototype.enable = function (e) {
            return (
              (e = "boolean" != typeof e || e) !==
                this.mediaStreamTrack.enabled &&
                (this._log.info((e ? "En" : "Dis") + "abling"),
                (this.mediaStreamTrack.enabled = e),
                this.emit(e ? "enabled" : "disabled", this)),
              this
            );
          }),
          (t.prototype.disable = function () {
            return this.enable(!1);
          }),
          (t.prototype.restart = function (e) {
            var t = this,
              n = this.kind;
            if (!this._isCreatedByCreateLocalTracks)
              return Promise.reject(
                v(
                  "restart",
                  "can only be called on a Local" +
                    l(n) +
                    "Track that is created using createLocalTracks or createLocal" +
                    l(n) +
                    "Track."
                )
              );
            this._workaroundWebKitBug1208516Cleanup &&
              (this._workaroundWebKitBug1208516Cleanup(),
              (this._workaroundWebKitBug1208516Cleanup = null));
            var r = this._restart(e);
            return (
              this._workaroundWebKitBug1208516 &&
                (r = r.finally(function () {
                  t._workaroundWebKitBug1208516Cleanup = k(t);
                })),
              r
            );
          }),
          (t.prototype.stop = function () {
            return (
              this._log.info("Stopping"),
              this._workaroundWebKitBug1208516Cleanup &&
                (this._workaroundWebKitBug1208516Cleanup(),
                (this._workaroundWebKitBug1208516Cleanup = null)),
              this._stop()
            );
          }),
          t
        );
      })(e);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
      n = "number" == typeof n ? n : 250;
      var r = e.createMediaStreamSource(t),
        i = e.createAnalyser();
      (i.fftSize = 2048), r.connect(i);
      var o = new Uint8Array(i.fftSize),
        a = !1;
      return (
        setTimeout(function () {
          a = !0;
        }, n),
        (function e() {
          return a
            ? Promise.resolve(!0)
            : (i.getByteTimeDomainData(o),
              o.some(function (e) {
                return 128 !== e && 0 !== e;
              })
                ? Promise.resolve(!1)
                : (function (e) {
                    return (
                      (e = "number" == typeof e ? e : 0),
                      new Promise(function (t) {
                        return setTimeout(t, e);
                      })
                    );
                  })().then(e));
        })().then(
          function (e) {
            return r.disconnect(), e;
          },
          function (e) {
            throw (r.disconnect(), e);
          }
        )
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = null;
    e.exports = function (e) {
      return (
        (r = r || document.createElement("canvas")),
        new Promise(function (t) {
          var n = 3;
          setTimeout(function i() {
            return (
              n--,
              (function (e) {
                try {
                  var t = r.getContext("2d");
                  t.drawImage(e, 0, 0, 50, 50);
                  var n = t
                    .getImageData(0, 0, 50, 50)
                    .data.filter(function (e, t) {
                      return (t + 1) % 4;
                    });
                  return 0 === Math.max.apply(Math, n);
                } catch (e) {
                  return console.log("Error checking silence: ", e), !1;
                }
              })(e)
                ? n > 0
                  ? setTimeout(i, 250)
                  : t(!0)
                : t(!1)
            );
          }, 250);
        })
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(63);
    e.exports = function (e, t, i, o, a) {
      o = "number" == typeof o ? o : 3;
      var s = 0,
        c = n(28),
        u = {},
        l = c.getOrCreate(u);
      return (function n() {
        return t(i).then(function (t) {
          return (
            i.audio
              ? r(l, t, a).catch(function (t) {
                  return (
                    e.warn("Encountered an error while detecting silence", t),
                    !0
                  );
                })
              : Promise.resolve(!1)
          ).then(function (r) {
            return r
              ? o <= 0
                ? (e.warn(
                    "Got a silent audio MediaStreamTrack. Normally we would try to get a new one, but we've run out of retries; returning it anyway."
                  ),
                  t)
                : (e.warn(
                    "Got a silent audio MediaStreamTrack. Stopping all MediaStreamTracks and calling getUserMedia again. This is retry #" +
                      ++s +
                      "."
                  ),
                  t.getTracks().forEach(function (e) {
                    return e.stop();
                  }),
                  o--,
                  n())
              : (e.info(
                  "Got a non-silent audio MediaStreamTrack; returning it."
                ),
                t);
          });
        });
      })().then(
        function (e) {
          return c.release(u), e;
        },
        function (e) {
          throw (c.release(u), e);
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a = (function (e) {
        function t(t) {
          var n = e.call(this, t.id, t) || this;
          return (
            Object.defineProperties(n, {
              _clones: { value: new Set() },
              _senders: { value: new Set() },
              _senderToPublisherHintCallbacks: { value: new Map() },
              isPublishing: {
                get: function () {
                  return !!this._clones.size;
                },
              },
            }),
            n
          );
        }
        return (
          i(t, e),
          (t.prototype.clone = function () {
            var e = new t(this.track.clone());
            return this._clones.add(e), e;
          }),
          (t.prototype.removeClone = function (e) {
            this._clones.delete(e);
          }),
          (t.prototype.setMediaStreamTrack = function (e) {
            var t = this,
              n = Array.from(this._clones),
              r = Array.from(this._senders);
            return Promise.all(
              n
                .map(function (t) {
                  return t.setMediaStreamTrack(e.clone());
                })
                .concat(
                  r.map(function (n) {
                    return t._replaceTrack(n, e);
                  })
                )
            ).finally(function () {
              t._track = e;
            });
          }),
          (t.prototype.addSender = function (e, t) {
            return (
              this._senders.add(e),
              t && this._senderToPublisherHintCallbacks.set(e, t),
              this
            );
          }),
          (t.prototype.removeSender = function (e) {
            return (
              this._senders.delete(e),
              this._senderToPublisherHintCallbacks.delete(e),
              this
            );
          }),
          (t.prototype.setPublisherHint = function (e) {
            var t = o(
              Array.from(this._senderToPublisherHintCallbacks.values()),
              1
            )[0];
            return t ? t(e) : Promise.resolve("COULD_NOT_APPLY_HINT");
          }),
          (t.prototype._replaceTrack = function (e, t) {
            var n = this;
            return e.replaceTrack(t).then(function (e) {
              return (
                n.setPublisherHint(null).catch(function () {}),
                n.emit("replaced"),
                e
              );
            });
          }),
          t
        );
      })(n(67));
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n.kind) || this;
          return (
            Object.defineProperties(r, {
              _track: { value: n, writable: !0 },
              enabled: {
                enumerable: !0,
                get: function () {
                  return this._track.enabled;
                },
              },
              readyState: {
                enumerable: !0,
                get: function () {
                  return this._track.readyState;
                },
              },
              track: {
                enumerable: !0,
                get: function () {
                  return this._track;
                },
              },
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.stop = function () {
            this.track.stop(), e.prototype.stop.call(this);
          }),
          t
        );
      })(n(68));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            Object.defineProperties(r, {
              id: { enumerable: !0, value: t },
              kind: { enumerable: !0, value: n },
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.stop = function () {
            this.emit("stopped");
          }),
          t
        );
      })(n(4).EventEmitter);
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(59),
      a = n(139),
      s = n(2).DEFAULT_FRAME_RATE,
      c = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (
            Object.defineProperties(r, {
              _captureTimeoutId: { value: null, writable: !0 },
              _isCapturing: { value: !1, writable: !0 },
              _inputFrame: { value: null, writable: !0 },
              _outputFrame: { value: null, writable: !0 },
              _processorEventObserver: { value: null, writable: !0 },
              _unmuteHandler: { value: null, writable: !0 },
              dimensions: {
                enumerable: !0,
                value: { width: null, height: null },
              },
              processor: { enumerable: !0, value: null, writable: !0 },
            }),
            (r._processorEventObserver = new (n.VideoProcessorEventObserver ||
              a)(r._log)),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype._checkIfCanCaptureFrames = function (e) {
            void 0 === e && (e = !1);
            var t = !0,
              n = "",
              r = this.mediaStreamTrack;
            return (
              r.enabled || ((t = !1), (n = "MediaStreamTrack is disabled")),
              "ended" === r.readyState &&
                ((t = !1), (n = "MediaStreamTrack is ended")),
              this.processor ||
                ((t = !1), (n = "VideoProcessor not detected.")),
              this._attachments.size ||
                e ||
                ((t = !1),
                (n =
                  "VideoTrack is not publishing and there is no attached element.")),
              n && this._log.debug(n),
              { canCaptureFrames: t, message: n }
            );
          }),
          (t.prototype._captureFrames = function () {
            var e = this;
            if (this._isCapturing)
              this._log.debug(
                "Ignoring captureFrames call. Capture is already in progress"
              );
            else {
              if (!this._checkIfCanCaptureFrames().canCaptureFrames)
                return (
                  (this._isCapturing = !1),
                  void this._log.debug(
                    "Cannot capture frames. Ignoring captureFrames call."
                  )
                );
              (this._isCapturing = !0),
                this._processorEventObserver.emit("start"),
                this._log.debug("Start capturing frames");
              var t,
                n = Date.now();
              this._dummyEl
                .play()
                .then(function () {
                  var r = function (n) {
                      clearTimeout(e._captureTimeoutId);
                      var r = e.mediaStreamTrack.getSettings().frameRate,
                        i = void 0 === r ? s : r,
                        o = Math.floor(1e3 / i) - t;
                      (o < 0 || "number" != typeof t) && (o = 0),
                        (e._captureTimeoutId = setTimeout(n, o));
                    },
                    i = function () {
                      var o = e._checkIfCanCaptureFrames();
                      if (!o.canCaptureFrames)
                        return (
                          (e._isCapturing = !1),
                          e._processorEventObserver.emit("stop", o.message),
                          void e._log.debug(
                            "Cannot capture frames. Stopping capturing frames."
                          )
                        );
                      n = Date.now();
                      var a = e.mediaStreamTrack.getSettings(),
                        s = a.width,
                        c = void 0 === s ? 0 : s,
                        u = a.height,
                        l = void 0 === u ? 0 : u;
                      e._inputFrame.width !== c &&
                        ((e._inputFrame.width = c),
                        (e._inputFrame.height = l),
                        e._outputFrame &&
                          ((e._outputFrame.width = c),
                          (e._outputFrame.height = l))),
                        e._inputFrame
                          .getContext("2d")
                          .drawImage(e._dummyEl, 0, 0, c, l);
                      var d = null;
                      try {
                        d = e.processor.processFrame(
                          e._inputFrame,
                          e._outputFrame
                        );
                      } catch (t) {
                        e._log.debug(
                          "Exception detected after calling processFrame.",
                          t
                        );
                      }
                      (d instanceof Promise ? d : Promise.resolve(d))
                        .then(function () {
                          e._outputFrame &&
                            (e.processedTrack.requestFrame(),
                            e._processorEventObserver.emit("stats"));
                        })
                        .finally(function () {
                          (t = Date.now() - n), r(i);
                        });
                    };
                  r(i);
                })
                .catch(function (t) {
                  return e._log.error("Video element cannot be played", {
                    error: t,
                    track: e,
                  });
                });
            }
          }),
          (t.prototype._initialize = function () {
            var n = this;
            e.prototype._initialize.call(this),
              this._dummyEl &&
                ((this._dummyEl.onloadedmetadata = function () {
                  u(n, n._dummyEl) &&
                    ((n.dimensions.width = n._dummyEl.videoWidth),
                    (n.dimensions.height = n._dummyEl.videoHeight));
                }),
                (this._dummyEl.onresize = function () {
                  u(n, n._dummyEl) &&
                    ((n.dimensions.width = n._dummyEl.videoWidth),
                    (n.dimensions.height = n._dummyEl.videoHeight),
                    n.isStarted &&
                      (n._log.debug("Dimensions changed:", n.dimensions),
                      n.emit(t.DIMENSIONS_CHANGED, n)));
                }));
          }),
          (t.prototype._restartProcessor = function () {
            var e = this.processor;
            e && (this.removeProcessor(e), this.addProcessor(e));
          }),
          (t.prototype._start = function (t) {
            return (
              (this.dimensions.width = t.videoWidth),
              (this.dimensions.height = t.videoHeight),
              this._log.debug("Dimensions:", this.dimensions),
              e.prototype._start.call(this, t)
            );
          }),
          (t.prototype.addProcessor = function (e) {
            var t = this;
            if ("function" != typeof OffscreenCanvas)
              return this._log.warn(
                "Adding a VideoProcessor is not supported in this browser."
              );
            if (!e || "function" != typeof e.processFrame)
              throw new Error(
                "Received an invalid VideoProcessor from addProcessor."
              );
            if (this.processor)
              throw new Error("A VideoProcessor has already been added.");
            if (!this._dummyEl)
              throw new Error("VideoTrack has not been initialized.");
            this._log.debug("Adding VideoProcessor to the VideoTrack", e),
              this._unmuteHandler ||
                ((this._unmuteHandler = function () {
                  t._log.debug("mediaStreamTrack unmuted"),
                    t.processedTrack.muted &&
                      (t._log.debug(
                        "mediaStreamTrack is unmuted but processedTrack is muted. Restarting processor."
                      ),
                      t._restartProcessor());
                }),
                this.mediaStreamTrack.addEventListener(
                  "unmute",
                  this._unmuteHandler
                ));
            var n = this.mediaStreamTrack.getSettings(),
              r = n.width,
              i = void 0 === r ? 0 : r,
              o = n.height,
              a = void 0 === o ? 0 : o,
              c = n.frameRate,
              u = void 0 === c ? s : c;
            return (
              (this._inputFrame = new OffscreenCanvas(i, a)),
              (this._outputFrame = document.createElement("canvas")),
              (this._outputFrame.width = i),
              (this._outputFrame.height = a),
              (this.processedTrack = this._outputFrame
                .captureStream(0)
                .getTracks()[0]),
              (this.processedTrack.enabled = this.mediaStreamTrack.enabled),
              (this.processor = e),
              this._processorEventObserver.emit("add", {
                processor: e,
                captureHeight: a,
                captureWidth: i,
                inputFrameRate: u,
                isRemoteVideoTrack:
                  this.toString().includes("RemoteVideoTrack"),
              }),
              this._updateElementsMediaStreamTrack(),
              this._captureFrames(),
              this
            );
          }),
          (t.prototype.attach = function () {
            var t = e.prototype.attach.apply(this, arguments);
            return this.processor && this._captureFrames(), t;
          }),
          (t.prototype.detach = function () {
            return e.prototype.detach.apply(this, arguments);
          }),
          (t.prototype.removeProcessor = function (e) {
            if (!e)
              throw new Error(
                "Received an invalid VideoProcessor from removeProcessor."
              );
            if (!this.processor)
              throw new Error("No existing VideoProcessor detected.");
            if (e !== this.processor)
              throw new Error(
                "The provided VideoProcessor is different than the existing one."
              );
            return (
              this._processorEventObserver.emit("remove"),
              this._log.debug("Removing VideoProcessor from the VideoTrack", e),
              clearTimeout(this._captureTimeoutId),
              this.mediaStreamTrack.removeEventListener(
                "unmute",
                this._unmuteHandler
              ),
              (this._unmuteHandler = null),
              (this._isCapturing = !1),
              (this.processor = null),
              (this.processedTrack = null),
              this._inputFrame
                .getContext("2d")
                .clearRect(
                  0,
                  0,
                  this._inputFrame.width,
                  this._inputFrame.height
                ),
              this._outputFrame
                .getContext("2d")
                .clearRect(
                  0,
                  0,
                  this._outputFrame.width,
                  this._outputFrame.height
                ),
              (this._inputFrame = null),
              (this._outputFrame = null),
              this._updateElementsMediaStreamTrack(),
              this
            );
          }),
          t
        );
      })(o);
    function u(e, t) {
      return (
        e.dimensions.width !== t.videoWidth ||
        e.dimensions.height !== t.videoHeight
      );
    }
    (c.DIMENSIONS_CHANGED = "dimensionsChanged"), (e.exports = c);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r, i) {
          var o = e.call(this, t, "data") || this;
          return (
            Object.defineProperties(o, {
              maxPacketLifeTime: { enumerable: !0, value: n },
              maxRetransmits: { enumerable: !0, value: r },
              ordered: { enumerable: !0, value: i },
            }),
            o
          );
        }
        return i(t, e), t;
      })(n(68));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r,
        i =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        o =
          (this && this.__read) ||
          function (e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
              i,
              o = n.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                a.push(r.value);
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                r && !r.done && (n = o.return) && n.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          },
        a =
          (this && this.__spreadArray) ||
          function (e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
              e[i] = t[n];
            return e;
          },
        s = n(19),
        c = n(1),
        u = c.buildLogLevels,
        l = c.makeUUID,
        d = n(8),
        p = n(148),
        f = n(14),
        h = 0,
        v = {
          closed: [],
          connecting: ["closed", "open", "waiting"],
          early: ["closed", "connecting"],
          open: ["closed"],
          waiting: ["closed", "connecting", "early", "open"],
        },
        _ = { closed: "close", open: "open", waiting: "waiting" },
        m = t.window || t,
        y = m.WebSocket ? m.WebSocket : n(72),
        g = {
          BUSY: "busy",
          FAILED: "failed",
          LOCAL: "local",
          REMOTE: "remote",
          TIMEOUT: "timeout",
        },
        b = new Map([
          [3e3, g.TIMEOUT],
          [3001, g.TIMEOUT],
          [3002, g.FAILED],
          [3003, g.FAILED],
          [3004, g.TIMEOUT],
          [3006, g.BUSY],
          [3007, g.TIMEOUT],
        ]),
        w = (function (e) {
          function t(t, n) {
            var r = e.call(this, "early", v) || this;
            n = Object.assign(
              {
                helloBody: null,
                maxConsecutiveFailedHellos: 3,
                maxConsecutiveMissedHeartbeats: 3,
                requestedHeartbeatTimeout: 5e3,
                openTimeout: 15e3,
                welcomeTimeout: 5e3,
                Log: d,
                WebSocket: y,
              },
              n
            );
            var i = u(n.logLevel),
              s = new n.Log("default", r, i, n.loggerName),
              c = n.networkMonitor
                ? new p(function () {
                    var e = c.type,
                      t = "Network changed" + (e ? " to " + e : "");
                    s.debug(t), r._close({ code: 3004, reason: t });
                  })
                : null;
            Object.defineProperties(r, {
              _busyWaitTimeout: { value: null, writable: !0 },
              _consecutiveHeartbeatsMissed: { value: 0, writable: !0 },
              _cookie: { value: null, writable: !0 },
              _eventObserver: { value: n.eventObserver },
              _heartbeatTimeout: { value: null, writable: !0 },
              _hellosLeft: {
                value: n.maxConsecutiveFailedHellos,
                writable: !0,
              },
              _instanceId: { value: ++h },
              _log: { value: s },
              _messageQueue: { value: [] },
              _networkMonitor: { value: c },
              _options: { value: n },
              _openTimeout: { value: null, writable: !0 },
              _sendHeartbeatTimeout: { value: null, writable: !0 },
              _serverUrl: { value: t },
              _welcomeTimeout: { value: null, writable: !0 },
              _ws: { value: null, writable: !0 },
            });
            var l = {
              connecting: "info",
              early: "info",
              open: "info",
              waiting: "warning",
              closed: "info",
            };
            return (
              r.on("stateChanged", function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                e in _ && r.emit.apply(r, a([_[e]], o(t)));
                var i = { name: e, group: "signaling", level: l[r.state] };
                if ("closed" === e) {
                  var s = o(t, 1),
                    c = s[0];
                  (i.payload = { reason: c }),
                    (i.level = c === g.LOCAL ? "info" : "error");
                }
                r._eventObserver.emit("event", i);
              }),
              r._eventObserver.emit("event", {
                name: r.state,
                group: "signaling",
                level: l[r.state],
              }),
              r._connect(),
              r
            );
          }
          return (
            i(t, e),
            (t.prototype.toString = function () {
              return (
                "[TwilioConnection #" +
                this._instanceId +
                ": " +
                this._ws.url +
                "]"
              );
            }),
            (t.prototype._close = function (e) {
              var t = e.code,
                n = e.reason;
              if ("closed" !== this.state) {
                this._openTimeout && this._openTimeout.clear(),
                  this._welcomeTimeout && this._welcomeTimeout.clear(),
                  this._heartbeatTimeout && this._heartbeatTimeout.clear(),
                  this._sendHeartbeatTimeout &&
                    this._sendHeartbeatTimeout.clear(),
                  this._networkMonitor && this._networkMonitor.stop(),
                  this._busyWaitTimeout &&
                    3005 !== t &&
                    this._busyWaitTimeout.clear(),
                  this._messageQueue.splice(0);
                var r = this._log;
                1e3 === t
                  ? (r.debug("Closed"),
                    this.transition("closed", null, [g.LOCAL]))
                  : (r.warn("Closed: " + t + " - " + n),
                    3005 !== t &&
                      this.transition("closed", null, [b.get(t) || g.REMOTE]));
                var i = this._ws.readyState,
                  o = this._options.WebSocket;
                i !== o.CLOSING && i !== o.CLOSED && this._ws.close(t, n);
              }
            }),
            (t.prototype._connect = function () {
              var e = this,
                t = this._log;
              if ("waiting" === this.state) this.transition("early");
              else if ("early" !== this.state)
                return void t.warn(
                  'Unexpected state "' +
                    this.state +
                    '" for connecting to the TCMP server.'
                );
              this._ws = new this._options.WebSocket(this._serverUrl);
              var n = this._ws;
              t.debug("Created a new WebSocket:", n),
                n.addEventListener("close", function (t) {
                  return e._close(t);
                });
              var r = this._options.openTimeout;
              (this._openTimeout = new f(function () {
                var t = "Failed to open in " + r + " ms";
                e._close({ code: 3007, reason: t });
              }, r)),
                n.addEventListener("open", function () {
                  t.debug("WebSocket opened:", n),
                    e._openTimeout.clear(),
                    e._startHandshake(),
                    e._networkMonitor && e._networkMonitor.start();
                }),
                n.addEventListener("message", function (n) {
                  t.debug("Incoming: " + n.data);
                  try {
                    n = JSON.parse(n.data);
                  } catch (t) {
                    return void e.emit("error", t);
                  }
                  switch (n.type) {
                    case "bad":
                      e._handleBad(n);
                      break;
                    case "busy":
                      e._handleBusy(n);
                      break;
                    case "bye":
                      break;
                    case "msg":
                      e._handleMessage(n);
                    case "heartbeat":
                      e._handleHeartbeat();
                      break;
                    case "welcome":
                      e._handleWelcome(n);
                      break;
                    default:
                      e._log.debug("Unknown message type: " + n.type),
                        e.emit(
                          "error",
                          new Error("Unknown message type: " + n.type)
                        );
                  }
                });
            }),
            (t.prototype._handleBad = function (e) {
              var t = e.reason,
                n = this._log;
              if (["connecting", "open"].includes(this.state)) {
                if ("connecting" === this.state)
                  return (
                    n.warn("Closing: 3002 - " + t),
                    void this._close({ code: 3002, reason: t })
                  );
                n.debug("Error: " + t), this.emit("error", new Error(t));
              } else
                n.warn(
                  'Unexpected state "' +
                    this.state +
                    '" for handling a "bad" message from the TCMP server.'
                );
            }),
            (t.prototype._handleBusy = function (e) {
              var t = this,
                n = e.cookie,
                r = e.keepAlive,
                i = e.retryAfter,
                o = this._log;
              if (["connecting", "waiting"].includes(this.state)) {
                this._busyWaitTimeout && this._busyWaitTimeout.clear(),
                  this._welcomeTimeout && this._welcomeTimeout.clear();
                var a =
                  i < 0
                    ? 'Received terminal "busy" message'
                    : 'Received "busy" message, retrying after ' + i + " ms";
                if (i < 0)
                  return (
                    o.warn("Closing: 3006 - " + a),
                    void this._close({ code: 3006, reason: a })
                  );
                var s = this._options.maxConsecutiveFailedHellos;
                (this._hellosLeft = s),
                  (this._cookie = n || null),
                  r
                    ? (o.warn(a),
                      (this._busyWaitTimeout = new f(function () {
                        return t._startHandshake();
                      }, i)))
                    : (o.warn("Closing: 3005 - " + a),
                      this._close({ code: 3005, reason: a }),
                      (this._busyWaitTimeout = new f(function () {
                        return t._connect();
                      }, i))),
                  this.transition("waiting", null, [r, i]);
              } else
                o.warn(
                  'Unexpected state "' +
                    this.state +
                    '" for handling a "busy" message from the TCMP server.'
                );
            }),
            (t.prototype._handleHeartbeat = function () {
              "open" === this.state
                ? this._heartbeatTimeout.reset()
                : this._log.warn(
                    'Unexpected state "' +
                      this.state +
                      '" for handling a "heartbeat" message from the TCMP server.'
                  );
            }),
            (t.prototype._handleHeartbeatTimeout = function () {
              if ("open" === this.state) {
                var e = this._log,
                  t = this._options.maxConsecutiveMissedHeartbeats;
                e.debug("Consecutive heartbeats missed: " + t);
                var n = "Missed " + t + ' "heartbeat" messages';
                e.warn("Closing: 3001 - " + n),
                  this._close({ code: 3001, reason: n });
              }
            }),
            (t.prototype._handleMessage = function (e) {
              var t = e.body;
              "open" === this.state
                ? this.emit("message", t)
                : this._log.warn(
                    'Unexpected state "' +
                      this.state +
                      '" for handling a "msg" message from the TCMP server.'
                  );
            }),
            (t.prototype._handleWelcome = function (e) {
              var t = this,
                n = e.negotiatedTimeout,
                r = this._log;
              if (["connecting", "waiting"].includes(this.state)) {
                "waiting" === this.state &&
                  (r.debug(
                    'Received "welcome" message, no need to retry connection.'
                  ),
                  this._busyWaitTimeout.clear());
                var i = n * this._options.maxConsecutiveMissedHeartbeats,
                  o = n - 200;
                this._welcomeTimeout.clear(),
                  (this._heartbeatTimeout = new f(function () {
                    return t._handleHeartbeatTimeout();
                  }, i)),
                  this._messageQueue.splice(0).forEach(function (e) {
                    return t._send(e);
                  }),
                  (this._sendHeartbeatTimeout = new f(function () {
                    return t._sendHeartbeat();
                  }, o)),
                  this.transition("open");
              } else
                r.warn(
                  'Unexpected state "' +
                    this.state +
                    '" for handling a "welcome" message from the TCMP server.'
                );
            }),
            (t.prototype._handleWelcomeTimeout = function () {
              if ("connecting" === this.state) {
                var e = this._log;
                if (this._hellosLeft <= 0) {
                  var t = "All handshake attempts failed";
                  return (
                    e.warn("Closing: 3000 - " + t),
                    void this._close({ code: 3e3, reason: t })
                  );
                }
                var n = this._options.maxConsecutiveFailedHellos;
                e.warn(
                  "Handshake attempt " + (n - this._hellosLeft) + " failed"
                ),
                  this._startHandshake();
              }
            }),
            (t.prototype._send = function (e) {
              if (this._ws.readyState === this._options.WebSocket.OPEN) {
                var t = JSON.stringify(e);
                this._log.debug("Outgoing: " + t);
                try {
                  this._ws.send(t),
                    this._sendHeartbeatTimeout &&
                      this._sendHeartbeatTimeout.reset();
                } catch (e) {
                  var n = "Failed to send message";
                  this._log.warn("Closing: 3003 - " + n),
                    this._close({ code: 3003, reason: n });
                }
              }
            }),
            (t.prototype._sendHeartbeat = function () {
              "closed" !== this.state && this._send({ type: "heartbeat" });
            }),
            (t.prototype._sendHello = function () {
              var e = this._options,
                t = e.helloBody,
                n = e.requestedHeartbeatTimeout,
                r = { id: l(), timeout: n, type: "hello", version: 2 };
              this._cookie && (r.cookie = this._cookie),
                t && (r.body = t),
                this._send(r);
            }),
            (t.prototype._sendOrEnqueue = function (e) {
              var t = this;
              "closed" !== this.state &&
                ("open" === this.state
                  ? function (e) {
                      return t._send(e);
                    }
                  : function (e) {
                      return t._messageQueue.push(e);
                    })(e);
            }),
            (t.prototype._startHandshake = function () {
              var e = this;
              if (
                (["early", "waiting"].includes(this.state) &&
                  this.transition("connecting"),
                "connecting" === this.state)
              ) {
                this._hellosLeft--, this._sendHello();
                var t = this._options.welcomeTimeout;
                this._welcomeTimeout = new f(function () {
                  return e._handleWelcomeTimeout();
                }, t);
              }
            }),
            (t.prototype.close = function () {
              "closed" !== this.state &&
                (this._sendOrEnqueue({ type: "bye" }),
                this._close({ code: 1e3, reason: "Normal" }));
            }),
            (t.prototype.sendMessage = function (e) {
              this._sendOrEnqueue({ body: e, type: "msg" });
            }),
            t
          );
        })(s);
      (w.CloseReason = g), (e.exports = w);
    }.call(this, n(22)));
  },
  function (e, t) {
    e.exports = WebSocket;
  },
  function (e, t, n) {
    "use strict";
    var r = (function () {
      function e() {
        Object.defineProperties(this, {
          _samples: {
            value: [
              { denominator: 0, numerator: 0 },
              { denominator: 0, numerator: 0 },
            ],
          },
        });
      }
      return (
        (e.prototype.get = function () {
          var e = this._samples,
            t = e[1].denominator - e[0].denominator || 1 / 0;
          return (e[1].numerator - e[0].numerator) / t;
        }),
        (e.prototype.putSample = function (e, t) {
          var n = this._samples;
          n.shift(), n.push({ denominator: t, numerator: e });
        }),
        e
      );
    })();
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(4).EventEmitter,
      a = [
        "signaling",
        "room",
        "media",
        "quality",
        "video-processor",
        "preflight",
      ],
      s = ["debug", "error", "info", "warning"],
      c = (function (e) {
        function t(t, n, r, i) {
          void 0 === i && (i = null);
          var o = e.call(this) || this;
          return (
            o.on("event", function (e) {
              var o = e.name,
                c = e.group,
                u = e.level,
                l = e.payload;
              if ("string" != typeof o)
                throw (
                  (r.error("Unexpected name: ", o),
                  new Error("Unexpected name: ", o))
                );
              if (!a.includes(c))
                throw (
                  (r.error("Unexpected group: ", c),
                  new Error("Unexpected group: ", c))
                );
              if (!s.includes(u))
                throw (
                  (r.error("Unexpected level: ", u),
                  new Error("Unexpected level: ", u))
                );
              var d = Date.now(),
                p = d - n,
                f = Object.assign({ elapsedTime: p, level: u }, l || {});
              t.publish(c, o, f);
              var h = Object.assign(
                { elapsedTime: p, group: c, level: u, name: o, timestamp: d },
                l ? { payload: l } : {}
              );
              r[
                {
                  debug: "debug",
                  error: "error",
                  info: "info",
                  warning: "warn",
                }[u]
              ]("event", h),
                i && "signaling" === c && i.emit("event", h);
            }),
            o
          );
        }
        return i(t, e), t;
      })(o);
    e.exports = c;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r,
        i =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        o = n(4).EventEmitter,
        a = n(1).getUserAgent,
        s = t.window || t,
        c = s.WebSocket ? s.WebSocket : n(72),
        u = n(1),
        l = (function (e) {
          function t(t, n, r, i, o, s) {
            var l = e.call(this) || this;
            return (
              (s = Object.assign(
                {
                  gateway: p(i, o) + "/v1/VideoEvents",
                  maxReconnectAttempts: 5,
                  reconnectIntervalMs: 50,
                  userAgent: a(),
                  WebSocket: c,
                },
                s
              )),
              Object.defineProperties(l, {
                _connectTimestamp: { value: 0, writable: !0 },
                _eventQueue: { value: [] },
                _readyToConnect: { value: u.defer() },
                _reconnectAttemptsLeft: {
                  value: s.maxReconnectAttempts,
                  writable: !0,
                },
                _ws: { value: null, writable: !0 },
                _WebSocket: { value: s.WebSocket },
              }),
              l._readyToConnect.promise
                .then(function (e) {
                  var i = e.roomSid,
                    o = e.participantSid,
                    a = l;
                  l.on("disconnected", function e(c) {
                    if (
                      ((a._session = null), c && a._reconnectAttemptsLeft > 0)
                    )
                      return (
                        a.emit("reconnecting"),
                        void (function (e, t, n, r, i, o, a) {
                          var s = Date.now() - e._connectTimestamp,
                            c = a.reconnectIntervalMs - s;
                          if (c > 0)
                            return void setTimeout(function () {
                              d(e, t, n, r, i, o, a);
                            }, c);
                          d(e, t, n, r, i, o, a);
                        })(a, t, n, r, i, o, s)
                      );
                    a.removeListener("disconnected", e);
                  }),
                    d(l, t, n, r, i, o, s);
                })
                .catch(function () {}),
              l
            );
          }
          return (
            i(t, e),
            (t.prototype.connect = function (e, t) {
              this._readyToConnect.resolve({ roomSid: e, participantSid: t });
            }),
            (t.prototype._publish = function (e) {
              (e.session = this._session), this._ws.send(JSON.stringify(e));
            }),
            (t.prototype.disconnect = function () {
              if (
                null === this._ws ||
                this._ws.readyState === this._WebSocket.CLOSING ||
                this._ws.readyState === this._WebSocket.CLOSED
              )
                return !1;
              try {
                this._ws.close();
              } catch (e) {}
              return this.emit("disconnected"), !0;
            }),
            (t.prototype.publish = function (e, t, n) {
              return (
                (null === this._ws ||
                  (this._ws.readyState !== this._WebSocket.CLOSING &&
                    this._ws.readyState !== this._WebSocket.CLOSED)) &&
                (("string" == typeof this._session
                  ? this._publish.bind(this)
                  : this._eventQueue.push.bind(this._eventQueue))({
                  group: e,
                  name: t,
                  payload: n,
                  timestamp: Date.now(),
                  type: "event",
                  version: 1,
                }),
                !0)
              );
            }),
            t
          );
        })(o);
      function d(e, t, n, r, i, o, a) {
        (e._connectTimestamp = Date.now()),
          e._reconnectAttemptsLeft--,
          (e._ws = new a.WebSocket(a.gateway));
        var s = e._ws;
        s.addEventListener("close", function (t) {
          1e3 !== t.code
            ? e.emit(
                "disconnected",
                new Error("WebSocket Error " + t.code + ": " + t.reason)
              )
            : e.emit("disconnected");
        }),
          s.addEventListener("message", function (t) {
            !(function (e, t, n) {
              switch (t.type) {
                case "connected":
                  (e._session = t.session),
                    (e._reconnectAttemptsLeft = n.maxReconnectAttempts),
                    e._eventQueue.splice(0).forEach(e._publish, e),
                    e.emit("connected");
                  break;
                case "error":
                  e._ws.close(), e.emit("disconnected", new Error(t.message));
              }
            })(e, JSON.parse(t.data), a);
          }),
          s.addEventListener("open", function () {
            var e = { type: "connect", token: t, version: 1 };
            (e.publisher = {
              name: n,
              sdkVersion: r,
              userAgent: a.userAgent,
              participantSid: o,
              roomSid: i,
            }),
              s.send(JSON.stringify(e));
          });
      }
      function p(e, t) {
        return "prod" === e
          ? "wss://sdkgw." + t + ".twilio.com"
          : "wss://sdkgw." + e + "-" + t + ".twilio.com";
      }
      e.exports = l;
    }.call(this, n(22)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(1).isNonArrayObject,
      i = n(2),
      o = i.typeErrors,
      a = i.clientTrackSwitchOffControl,
      s = i.videoContentPreferencesMode,
      c = i.subscriptionMode,
      u = i.trackPriority,
      l = i.trackSwitchOffMode;
    function d(e, t, n) {
      return (
        void 0 === n && (n = []),
        void 0 === e
          ? null
          : null !== e && r(e)
          ? n.reduce(function (n, r) {
              var i = r.prop,
                a = r.type,
                s = r.values;
              if (n || !(i in e)) return n;
              var c = e[i];
              return (a && typeof c !== a) || ("number" === a && isNaN(c))
                ? o.INVALID_TYPE(t + "." + i, a)
                : Array.isArray(s) && !s.includes(c)
                ? o.INVALID_VALUE(t + "." + i, s)
                : n;
            }, null)
          : o.INVALID_TYPE(t, "object")
      );
    }
    (t.validateBandwidthProfile = function (e) {
      var t = d(e, "options.bandwidthProfile");
      return !e || t
        ? t
        : (t = d(e.video, "options.bandwidthProfile.video", [
            { prop: "contentPreferencesMode", values: Object.values(s) },
            { prop: "dominantSpeakerPriority", values: Object.values(u) },
            { prop: "maxSubscriptionBitrate", type: "number" },
            { prop: "maxTracks", type: "number" },
            { prop: "mode", values: Object.values(c) },
            { prop: "clientTrackSwitchOffControl", values: Object.values(a) },
            { prop: "trackSwitchOffMode", values: Object.values(l) },
          ])) ||
            (e.video
              ? "maxTracks" in e.video &&
                "clientTrackSwitchOffControl" in e.video
                ? new TypeError(
                    "options.bandwidthProfile.video.maxTracks is deprecated. Use options.bandwidthProfile.video.clientTrackSwitchOffControl instead."
                  )
                : "renderDimensions" in e.video &&
                  "contentPreferencesMode" in e.video
                ? new TypeError(
                    "options.bandwidthProfile.video.renderDimensions is deprecated. Use options.bandwidthProfile.video.contentPreferencesMode instead."
                  )
                : (function (e) {
                    var t = "options.bandwidthProfile.video.renderDimensions",
                      n = d(e, t);
                    return e
                      ? n ||
                          Object.values(u).reduce(function (n, r) {
                            return (
                              n ||
                              d(e[r], t + "." + r, [
                                { prop: "height", type: "number" },
                                { prop: "width", type: "number" },
                              ])
                            );
                          }, null)
                      : n;
                  })(e.video.renderDimensions)
              : null);
    }),
      (t.validateLocalTrack = function (e, t) {
        if (
          !(
            e instanceof t.LocalAudioTrack ||
            e instanceof t.LocalDataTrack ||
            e instanceof t.LocalVideoTrack ||
            e instanceof t.MediaStreamTrack
          )
        )
          throw o.INVALID_TYPE(
            "track",
            "LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack"
          );
      }),
      (t.validateObject = d);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(24),
      a = n(1),
      s = a.buildLogLevels,
      c = a.valueToJSON,
      u = n(2).DEFAULT_LOG_LEVEL,
      l = n(8),
      d = 0,
      p = (function (e) {
        function t(t, n, r) {
          var i = e.call(this) || this;
          r = Object.assign({ logLevel: u }, r);
          var o = s(r.logLevel);
          return (
            Object.defineProperties(i, {
              _instanceId: { value: d++ },
              _log: {
                value: r.log
                  ? r.log.createLog("default", i)
                  : new l("default", i, o, r.loggerName),
              },
              trackName: { enumerable: !0, value: t },
              trackSid: { enumerable: !0, value: n },
            }),
            i
          );
        }
        return (
          i(t, e),
          (t.prototype.toJSON = function () {
            return c(this);
          }),
          (t.prototype.toString = function () {
            return (
              "[TrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          t
        );
      })(o);
    e.exports = p;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = n(24),
      c = n(160),
      u = n(161),
      l = n(162),
      d = n(163),
      p = n(164),
      f = n(166),
      h = n(1),
      v = 0,
      _ = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this,
            i = (function (e) {
              var t = e.map(function (e) {
                  return [e.id, e];
                }),
                n = t.filter(function (e) {
                  return "audio" === e[1].kind;
                }),
                r = t.filter(function (e) {
                  return "video" === e[1].kind;
                }),
                i = t.filter(function (e) {
                  return "data" === e[1].kind;
                });
              return {
                audioTracks: n,
                dataTracks: i,
                tracks: t,
                videoTracks: r,
              };
            })(
              (n = Object.assign(
                {
                  RemoteAudioTrack: c,
                  RemoteAudioTrackPublication: u,
                  RemoteDataTrack: l,
                  RemoteDataTrackPublication: d,
                  RemoteVideoTrack: p,
                  RemoteVideoTrackPublication: f,
                  tracks: [],
                },
                n
              )).tracks
            ),
            o = n.log.createLog("default", r),
            a = new Map(i.audioTracks),
            s = new Map(i.dataTracks),
            h = new Map(i.tracks),
            _ = new Map(i.videoTracks);
          return (
            Object.defineProperties(r, {
              _RemoteAudioTrack: { value: n.RemoteAudioTrack },
              _RemoteAudioTrackPublication: {
                value: n.RemoteAudioTrackPublication,
              },
              _RemoteDataTrack: { value: n.RemoteDataTrack },
              _RemoteDataTrackPublication: {
                value: n.RemoteDataTrackPublication,
              },
              _RemoteVideoTrack: { value: n.RemoteVideoTrack },
              _RemoteVideoTrackPublication: {
                value: n.RemoteVideoTrackPublication,
              },
              _audioTracks: { value: a },
              _dataTracks: { value: s },
              _instanceId: { value: ++v },
              _clientTrackSwitchOffControl: {
                value: n.clientTrackSwitchOffControl,
              },
              _contentPreferencesMode: { value: n.contentPreferencesMode },
              _log: { value: o },
              _signaling: { value: t },
              _tracks: { value: h },
              _trackEventReemitters: { value: new Map() },
              _trackPublicationEventReemitters: { value: new Map() },
              _trackSignalingUpdatedEventCallbacks: { value: new Map() },
              _videoTracks: { value: _ },
              audioTracks: { enumerable: !0, value: new Map() },
              dataTracks: { enumerable: !0, value: new Map() },
              identity: {
                enumerable: !0,
                get: function () {
                  return t.identity;
                },
              },
              networkQualityLevel: {
                enumerable: !0,
                get: function () {
                  return t.networkQualityLevel;
                },
              },
              networkQualityStats: {
                enumerable: !0,
                get: function () {
                  return t.networkQualityStats;
                },
              },
              sid: {
                enumerable: !0,
                get: function () {
                  return t.sid;
                },
              },
              state: {
                enumerable: !0,
                get: function () {
                  return t.state;
                },
              },
              tracks: { enumerable: !0, value: new Map() },
              videoTracks: { enumerable: !0, value: new Map() },
            }),
            r._tracks.forEach(m.bind(null, r)),
            t.on("networkQualityLevelChanged", function () {
              return r.emit(
                "networkQualityLevelChanged",
                r.networkQualityLevel,
                r.networkQualityStats &&
                  (r.networkQualityStats.audio || r.networkQualityStats.video)
                  ? r.networkQualityStats
                  : null
              );
            }),
            (function (e, t) {
              var n = e._log;
              if ("disconnected" === e.state) return;
              t.on("stateChanged", function r(i) {
                n.debug("Transitioned to state:", i),
                  e.emit(i, e),
                  "disconnected" === i &&
                    (n.debug("Removing Track event reemitters"),
                    t.removeListener("stateChanged", r),
                    e._tracks.forEach(function (t) {
                      var n = e._trackEventReemitters.get(t.id);
                      t &&
                        n &&
                        n.forEach(function (e, n) {
                          t.removeListener(n, e);
                        });
                    }),
                    t.tracks.forEach(function (t) {
                      var n = e._tracks.get(t.id),
                        r = e._trackEventReemitters.get(t.id);
                      n &&
                        r &&
                        r.forEach(function (e, t) {
                          n.removeListener(t, e);
                        });
                    }),
                    e._trackEventReemitters.clear(),
                    e.tracks.forEach(function (t) {
                      e._trackPublicationEventReemitters
                        .get(t.trackSid)
                        .forEach(function (e, n) {
                          t.removeListener(n, e);
                        });
                    }),
                    e._trackPublicationEventReemitters.clear());
              });
            })(r, t),
            o.info(
              "Created a new Participant" +
                (r.identity ? ": " + r.identity : "")
            ),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype._getTrackEvents = function () {
            return [
              ["dimensionsChanged", "trackDimensionsChanged"],
              ["message", "trackMessage"],
              ["started", "trackStarted"],
            ];
          }),
          (t.prototype._getTrackPublicationEvents = function () {
            return [];
          }),
          (t.prototype.toString = function () {
            return "[Participant #" + this._instanceId + ": " + this.sid + "]";
          }),
          (t.prototype._addTrack = function (e, t) {
            var n = this._log;
            return this._tracks.has(t)
              ? null
              : (this._tracks.set(t, e),
                {
                  audio: this._audioTracks,
                  video: this._videoTracks,
                  data: this._dataTracks,
                }[e.kind].set(t, e),
                m(this, e, t),
                n.info("Added a new " + h.trackClass(e) + ":", t),
                n.debug(h.trackClass(e) + ":", e),
                e);
          }),
          (t.prototype._addTrackPublication = function (e) {
            var t = this._log;
            return this.tracks.has(e.trackSid)
              ? null
              : (this.tracks.set(e.trackSid, e),
                {
                  audio: this.audioTracks,
                  data: this.dataTracks,
                  video: this.videoTracks,
                }[e.kind].set(e.trackSid, e),
                (function (e, t) {
                  var n = new Map();
                  if ("disconnected" === e.state) return;
                  e._getTrackPublicationEvents().forEach(function (r) {
                    var i = o(r, 2),
                      s = i[0],
                      c = i[1];
                    n.set(s, function () {
                      for (var n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                      e.emit.apply(e, a(a([c], o(n)), [t]));
                    }),
                      t.on(s, n.get(s));
                  }),
                    e._trackPublicationEventReemitters.set(t.trackSid, n);
                })(this, e),
                t.info(
                  "Added a new " + h.trackPublicationClass(e) + ":",
                  e.trackSid
                ),
                t.debug(h.trackPublicationClass(e) + ":", e),
                e);
          }),
          (t.prototype._handleTrackSignalingEvents = function () {
            var e = this._log,
              t = this._clientTrackSwitchOffControl,
              n = this._contentPreferencesMode,
              r = this;
            if ("disconnected" !== this.state) {
              var i = this._RemoteAudioTrack,
                a = this._RemoteAudioTrackPublication,
                s = this._RemoteVideoTrack,
                c = this._RemoteVideoTrackPublication,
                u = this._RemoteDataTrack,
                l = this._RemoteDataTrackPublication,
                d = this._signaling;
              d.on("trackAdded", p),
                d.on("trackRemoved", f),
                d.tracks.forEach(p),
                d.on("stateChanged", function t(n) {
                  "disconnected" === n
                    ? (e.debug("Removing event listeners"),
                      d.removeListener("stateChanged", t),
                      d.removeListener("trackAdded", p),
                      d.removeListener("trackRemoved", f))
                    : "connected" === n &&
                      (e.info("reconnected"),
                      setTimeout(function () {
                        return r.emit("reconnected");
                      }, 0));
                });
            }
            function p(t) {
              var n = new (0, { audio: a, data: l, video: c }[t.kind])(t, {
                log: e,
              });
              r._addTrackPublication(n);
              var i = t.isSubscribed;
              i && h(t),
                r._trackSignalingUpdatedEventCallbacks.set(t.sid, function () {
                  if (i !== t.isSubscribed) {
                    if ((i = t.isSubscribed)) return void h(t);
                    !(function (e) {
                      var t = o(
                          Array.from(r._tracks.entries()).find(function (t) {
                            return o(t, 2)[1].sid === e.sid;
                          }),
                          2
                        ),
                        n = t[0],
                        i = t[1],
                        a = r.tracks.get(e.sid);
                      i && r._removeTrack(i, a, n);
                    })(t);
                  }
                }),
                t.on(
                  "updated",
                  r._trackSignalingUpdatedEventCallbacks.get(t.sid)
                );
            }
            function f(e) {
              e.isSubscribed && e.setTrackTransceiver(null);
              var t = r._trackSignalingUpdatedEventCallbacks.get(e.sid);
              t &&
                (e.removeListener("updated", t),
                r._trackSignalingUpdatedEventCallbacks.delete(e.sid));
              var n = r.tracks.get(e.sid);
              n && r._removeTrackPublication(n);
            }
            function h(o) {
              var a = o.isEnabled,
                c = o.name,
                l = o.kind,
                p = o.sid,
                f = o.trackTransceiver,
                h = o.isSwitchedOff,
                v = { audio: i, video: s, data: u }[l],
                _ = r.tracks.get(p);
              if (v && l === f.kind) {
                var m = {
                    log: e,
                    name: c,
                    clientTrackSwitchOffControl: t,
                    contentPreferencesMode: n,
                  },
                  y =
                    "data" === l
                      ? new v(p, f, m)
                      : new v(
                          p,
                          f,
                          a,
                          h,
                          function (e) {
                            return d.updateSubscriberTrackPriority(p, e);
                          },
                          function (e) {
                            o.isSubscribed && d.updateTrackRenderHint(p, e);
                          },
                          m
                        );
                r._addTrack(y, _, f.id);
              }
            }
          }),
          (t.prototype._removeTrack = function (e, t) {
            if (!this._tracks.has(t)) return null;
            this._tracks.delete(t),
              {
                audio: this._audioTracks,
                video: this._videoTracks,
                data: this._dataTracks,
              }[e.kind].delete(t),
              (this._trackEventReemitters.get(t) || new Map()).forEach(
                function (t, n) {
                  e.removeListener(n, t);
                }
              );
            var n = this._log;
            return (
              n.info("Removed a " + h.trackClass(e) + ":", t),
              n.debug(h.trackClass(e) + ":", e),
              e
            );
          }),
          (t.prototype._removeTrackPublication = function (e) {
            if (!(e = this.tracks.get(e.trackSid))) return null;
            this.tracks.delete(e.trackSid),
              {
                audio: this.audioTracks,
                data: this.dataTracks,
                video: this.videoTracks,
              }[e.kind].delete(e.trackSid),
              (
                this._trackPublicationEventReemitters.get(e.trackSid) ||
                new Map()
              ).forEach(function (t, n) {
                e.removeListener(n, t);
              });
            var t = this._log;
            return (
              t.info(
                "Removed a " + h.trackPublicationClass(e) + ":",
                e.trackSid
              ),
              t.debug(h.trackPublicationClass(e) + ":", e),
              e
            );
          }),
          (t.prototype.toJSON = function () {
            return h.valueToJSON(this);
          }),
          t
        );
      })(s);
    function m(e, t, n) {
      var r = new Map();
      "disconnected" !== e.state &&
        (e._getTrackEvents().forEach(function (n) {
          var i = n[0],
            s = n[1];
          r.set(i, function () {
            var t = [s].concat([].slice.call(arguments));
            return e.emit.apply(e, a([], o(t)));
          }),
            t.on(i, r.get(i));
        }),
        e._trackEventReemitters.set(n, r));
    }
    e.exports = _;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = n(2),
      c = s.typeErrors,
      u = s.trackPriority,
      l = n(3),
      d = l.guessBrowser,
      p = l.isIOSChrome,
      f = n(34);
    e.exports = function (e) {
      return (function (e) {
        function t(t, n, r, i, o, a, s) {
          var c = this;
          return (
            (s = Object.assign(
              {
                workaroundWebKitBug212780:
                  ("safari" === d() || p()) &&
                  "object" == typeof document &&
                  "function" == typeof document.addEventListener &&
                  "string" == typeof document.visibilityState,
              },
              s
            )),
            (c = e.call(this, n, s) || this),
            Object.defineProperties(c, {
              _isEnabled: { value: r, writable: !0 },
              _isSwitchedOff: { value: i, writable: !0 },
              _priority: { value: null, writable: !0 },
              _setPriority: { value: o },
              _setRenderHint: {
                value: function (e) {
                  c._log.debug("updating render hint:", e), a(e);
                },
              },
              isEnabled: {
                enumerable: !0,
                get: function () {
                  return this._isEnabled;
                },
              },
              isSwitchedOff: {
                enumerable: !0,
                get: function () {
                  return this._isSwitchedOff;
                },
              },
              priority: {
                enumerable: !0,
                get: function () {
                  return this._priority;
                },
              },
              sid: { enumerable: !0, value: t },
              _workaroundWebKitBug212780: {
                value: s.workaroundWebKitBug212780,
              },
              _workaroundWebKitBug212780Cleanup: { value: null, writable: !0 },
            }),
            c
          );
        }
        return (
          i(t, e),
          (t.prototype.setPriority = function (e) {
            var t = a([null], o(Object.values(u)));
            if (!t.includes(e)) throw c.INVALID_VALUE("priority", t);
            return (
              this._priority !== e &&
                ((this._priority = e), this._setPriority(e)),
              this
            );
          }),
          (t.prototype._setEnabled = function (e) {
            this._isEnabled !== e &&
              ((this._isEnabled = e),
              this.emit(this._isEnabled ? "enabled" : "disabled", this));
          }),
          (t.prototype._setSwitchedOff = function (e) {
            this._isSwitchedOff !== e &&
              ((this._isSwitchedOff = e),
              this.emit(e ? "switchedOff" : "switchedOn", this));
          }),
          (t.prototype.attach = function (t) {
            var n = e.prototype.attach.call(this, t);
            return (
              !0 !== this.mediaStreamTrack.enabled &&
                ((this.mediaStreamTrack.enabled = !0),
                this.processedTrack && (this.processedTrack.enabled = !0),
                this.processor && this._captureFrames()),
              this._workaroundWebKitBug212780 &&
                (this._workaroundWebKitBug212780Cleanup =
                  this._workaroundWebKitBug212780Cleanup ||
                  (function (e) {
                    var t = e._log,
                      n = e.kind;
                    function r(r) {
                      r &&
                        e._attachments.forEach(function (r) {
                          var i = e._elShims.get(r);
                          r.paused &&
                            i &&
                            !i.pausedIntentionally() &&
                            (t.info(
                              "Playing inadvertently paused <" + n + "> element"
                            ),
                            t.debug("Element:", r),
                            t.debug("RemoteMediaTrack:", e),
                            r
                              .play()
                              .then(function () {
                                t.info(
                                  "Successfully played inadvertently paused <" +
                                    n +
                                    "> element"
                                ),
                                  t.debug("Element:", r),
                                  t.debug("RemoteMediaTrack:", e);
                              })
                              .catch(function (i) {
                                t.warn(
                                  "Error while playing inadvertently paused <" +
                                    n +
                                    "> element:",
                                  { err: i, el: r, remoteMediaTrack: e }
                                );
                              }));
                        });
                    }
                    return (
                      f.onVisibilityChange(2, r),
                      function () {
                        f.offVisibilityChange(2, r);
                      }
                    );
                  })(this)),
              n
            );
          }),
          (t.prototype.detach = function (t) {
            var n = e.prototype.detach.call(this, t);
            return (
              0 === this._attachments.size &&
                ((this.mediaStreamTrack.enabled = !1),
                this.processedTrack && (this.processedTrack.enabled = !1),
                this._workaroundWebKitBug212780Cleanup &&
                  (this._workaroundWebKitBug212780Cleanup(),
                  (this._workaroundWebKitBug212780Cleanup = null))),
              n
            );
          }),
          t
        );
      })(e);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(171),
      i = n(172),
      o = n(173),
      a = n(174),
      s = function (e, t, n) {
        if ("string" != typeof e)
          throw new Error("RTCPeerConnection id must be a string");
        Object.defineProperties(this, {
          peerConnectionId: { value: e, enumerable: !0 },
          localAudioTrackStats: {
            value: t.localAudioTrackStats.map(function (e) {
              return new r(e.trackId, e, n);
            }),
            enumerable: !0,
          },
          localVideoTrackStats: {
            value: t.localVideoTrackStats.map(function (e) {
              return new i(e.trackId, e, n);
            }),
            enumerable: !0,
          },
          remoteAudioTrackStats: {
            value: t.remoteAudioTrackStats.map(function (e) {
              return new o(e.trackId, e);
            }),
            enumerable: !0,
          },
          remoteVideoTrackStats: {
            value: t.remoteVideoTrackStats.map(function (e) {
              return new a(e.trackId, e);
            }),
            enumerable: !0,
          },
        });
      };
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, n) || this;
          return (
            Object.defineProperties(i, {
              bytesSent: {
                value:
                  "number" == typeof n.bytesSent ? n.bytesSent : r ? 0 : null,
                enumerable: !0,
              },
              packetsSent: {
                value:
                  "number" == typeof n.packetsSent
                    ? n.packetsSent
                    : r
                    ? 0
                    : null,
                enumerable: !0,
              },
              roundTripTime: {
                value:
                  "number" == typeof n.roundTripTime
                    ? n.roundTripTime
                    : r
                    ? 0
                    : null,
                enumerable: !0,
              },
            }),
            i
          );
        }
        return i(t, e), t;
      })(n(82));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r = function (e, t) {
      if ("string" != typeof e) throw new Error("Track id must be a string");
      Object.defineProperties(this, {
        trackId: { value: e, enumerable: !0 },
        trackSid: { value: t.trackSid, enumerable: !0 },
        timestamp: { value: t.timestamp, enumerable: !0 },
        ssrc: { value: t.ssrc, enumerable: !0 },
        packetsLost: {
          value: "number" == typeof t.packetsLost ? t.packetsLost : null,
          enumerable: !0,
        },
        codec: {
          value: "string" == typeof t.codecName ? t.codecName : null,
          enumerable: !0,
        },
      });
    };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (
            Object.defineProperties(r, {
              bytesReceived: {
                value:
                  "number" == typeof n.bytesReceived ? n.bytesReceived : null,
                enumerable: !0,
              },
              packetsReceived: {
                value:
                  "number" == typeof n.packetsReceived
                    ? n.packetsReceived
                    : null,
                enumerable: !0,
              },
            }),
            r
          );
        }
        return i(t, e), t;
      })(n(82));
    e.exports = o;
  },
  function (e, t, n) {
    var r = n(85),
      i = n(181),
      o = n(87),
      a = n(182);
    (e.exports.Backoff = r),
      (e.exports.FunctionCall = a),
      (e.exports.FibonacciStrategy = o),
      (e.exports.ExponentialStrategy = i),
      (e.exports.fibonacci = function (e) {
        return new r(new o(e));
      }),
      (e.exports.exponential = function (e) {
        return new r(new i(e));
      }),
      (e.exports.call = function (e, t, n) {
        var r = Array.prototype.slice.call(arguments);
        return (
          (e = r[0]),
          (t = r.slice(1, r.length - 1)),
          (n = r[r.length - 1]),
          new a(e, t, n)
        );
      });
  },
  function (e, t, n) {
    var r = n(4),
      i = n(38);
    function o(e) {
      r.EventEmitter.call(this),
        (this.backoffStrategy_ = e),
        (this.maxNumberOfRetry_ = -1),
        (this.backoffNumber_ = 0),
        (this.backoffDelay_ = 0),
        (this.timeoutID_ = -1),
        (this.handlers = { backoff: this.onBackoff_.bind(this) });
    }
    n(5).inherits(o, r.EventEmitter),
      (o.prototype.failAfter = function (e) {
        i.checkArgument(
          e > 0,
          "Expected a maximum number of retry greater than 0 but got %s.",
          e
        ),
          (this.maxNumberOfRetry_ = e);
      }),
      (o.prototype.backoff = function (e) {
        i.checkState(-1 === this.timeoutID_, "Backoff in progress."),
          this.backoffNumber_ === this.maxNumberOfRetry_
            ? (this.emit("fail", e), this.reset())
            : ((this.backoffDelay_ = this.backoffStrategy_.next()),
              (this.timeoutID_ = setTimeout(
                this.handlers.backoff,
                this.backoffDelay_
              )),
              this.emit("backoff", this.backoffNumber_, this.backoffDelay_, e));
      }),
      (o.prototype.onBackoff_ = function () {
        (this.timeoutID_ = -1),
          this.emit("ready", this.backoffNumber_, this.backoffDelay_),
          this.backoffNumber_++;
      }),
      (o.prototype.reset = function () {
        (this.backoffNumber_ = 0),
          this.backoffStrategy_.reset(),
          clearTimeout(this.timeoutID_),
          (this.timeoutID_ = -1);
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    n(4), n(5);
    function r(e) {
      return null != e;
    }
    function i(e) {
      if (r((e = e || {}).initialDelay) && e.initialDelay < 1)
        throw new Error("The initial timeout must be greater than 0.");
      if (r(e.maxDelay) && e.maxDelay < 1)
        throw new Error("The maximal timeout must be greater than 0.");
      if (
        ((this.initialDelay_ = e.initialDelay || 100),
        (this.maxDelay_ = e.maxDelay || 1e4),
        this.maxDelay_ <= this.initialDelay_)
      )
        throw new Error(
          "The maximal backoff delay must be greater than the initial backoff delay."
        );
      if (
        r(e.randomisationFactor) &&
        (e.randomisationFactor < 0 || e.randomisationFactor > 1)
      )
        throw new Error("The randomisation factor must be between 0 and 1.");
      this.randomisationFactor_ = e.randomisationFactor || 0;
    }
    (i.prototype.getMaxDelay = function () {
      return this.maxDelay_;
    }),
      (i.prototype.getInitialDelay = function () {
        return this.initialDelay_;
      }),
      (i.prototype.next = function () {
        var e = this.next_(),
          t = 1 + Math.random() * this.randomisationFactor_;
        return Math.round(e * t);
      }),
      (i.prototype.next_ = function () {
        throw new Error("BackoffStrategy.next_() unimplemented.");
      }),
      (i.prototype.reset = function () {
        this.reset_();
      }),
      (i.prototype.reset_ = function () {
        throw new Error("BackoffStrategy.reset_() unimplemented.");
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    var r = n(5),
      i = n(86);
    function o(e) {
      i.call(this, e),
        (this.backoffDelay_ = 0),
        (this.nextBackoffDelay_ = this.getInitialDelay());
    }
    r.inherits(o, i),
      (o.prototype.next_ = function () {
        var e = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
        return (
          (this.nextBackoffDelay_ += this.backoffDelay_),
          (this.backoffDelay_ = e),
          e
        );
      }),
      (o.prototype.reset_ = function () {
        (this.nextBackoffDelay_ = this.getInitialDelay()),
          (this.backoffDelay_ = 0);
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(89),
      a = n(90),
      s = n(91),
      c = (function (e) {
        function t(t, n, r, i, o, a, s) {
          var c = e.call(this, t, n, r) || this,
            u = o > 0 ? i / o : 0;
          return (
            Object.defineProperties(c, {
              deltaPacketsLost: { enumerable: !0, value: i },
              deltaPacketsReceived: { enumerable: !0, value: o },
              fractionLost: { enumerable: !0, value: a },
              jitter: { enumerable: !0, value: s },
              phonyFractionLost: { enumerable: !0, value: u },
            }),
            c
          );
        }
        return (
          i(t, e),
          (t.of = function (e, n, r) {
            if (n.id !== r.id) throw new Error("RTCStats IDs must match");
            var i = (r.timestamp - n.timestamp) / 1e3,
              o = r.bytesReceived - n.bytesReceived,
              a = i > 0 ? (o / i) * 8 : 0,
              s = Math.max(r.packetsLost - n.packetsLost, 0),
              c = r.packetsReceived - n.packetsReceived,
              u = r.fractionLost,
              l = r.jitter;
            return new t(n.id, e, a, s, c, u, l);
          }),
          (t.summarize = function (e) {
            var t = e.map(function (e) {
              return e.summarize();
            });
            return {
              bitrate: s(
                t.map(function (e) {
                  return e.bitrate;
                })
              ),
              fractionLost: o(
                t.map(function (e) {
                  return e.fractionLost;
                })
              ),
              jitter: o(
                t.map(function (e) {
                  return e.jitter;
                })
              ),
            };
          }),
          (t.prototype.summarize = function () {
            return {
              bitrate: this.bitrate,
              fractionLost:
                "number" == typeof this.fractionLost
                  ? this.fractionLost
                  : this.phonyFractionLost,
              jitter: this.jitter,
            };
          }),
          t
        );
      })(a);
    e.exports = c;
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return (e = e.filter(function (e) {
        return "number" == typeof e;
      })).length < 1
        ? void 0
        : e.reduce(function (e, t) {
            return t + e;
          }) / e.length;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = function (e, t, n) {
      Object.defineProperties(this, {
        id: { enumerable: !0, value: e },
        trackId: { enumerable: !0, value: t },
        bitrate: { enumerable: !0, value: n },
      });
    };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return e.reduce(function (e, t) {
        return "number" == typeof t ? t + e : e;
      }, 0);
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(89),
      a = n(90),
      s = n(91),
      c = (function (e) {
        function t(t, n, r, i) {
          var o = e.call(this, t, n, r) || this;
          return (
            Object.defineProperties(o, { rtt: { enumerable: !0, value: i } }), o
          );
        }
        return (
          i(t, e),
          (t.of = function (e, n, r, i) {
            if (n.id !== r.id) throw new Error("RTCStats IDs must match");
            var o = (r.timestamp - n.timestamp) / 1e3,
              a = r.bytesSent - n.bytesSent,
              s = o > 0 ? (a / o) * 8 : 0,
              c =
                i && "number" == typeof i.roundTripTime
                  ? i.roundTripTime / 1e3
                  : void 0;
            return new t(n.id, e, s, c);
          }),
          (t.summarize = function (e) {
            return {
              bitrate: s(
                e.map(function (e) {
                  return e.bitrate;
                })
              ),
              rtt: o(
                e.map(function (e) {
                  return e.rtt;
                })
              ),
            };
          }),
          t
        );
      })(a);
    e.exports = c;
  },
  function (e, t, n) {
    "use strict";
    var r = function (e, t, n) {
      Object.defineProperties(this, {
        id: { enumerable: !0, value: e, writable: !0 },
        trackId: { enumerable: !0, value: t, writable: !0 },
        lastStats: { enumerable: !0, value: n, writable: !0 },
      });
    };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            Object.defineProperties(t, {
              _isEnabled: { value: null, writable: !0 },
              isEnabled: {
                enumerable: !0,
                get: function () {
                  return this._isEnabled;
                },
              },
            }),
            t
          );
        }
        return (
          i(t, e),
          (t.prototype.disable = function () {
            return this.enable(!1);
          }),
          (t.prototype.enable = function (e) {
            return (
              (e = "boolean" != typeof e || e),
              this.isEnabled !== e &&
                ((this._isEnabled = e), this.emit("updated")),
              this
            );
          }),
          t
        );
      })(n(4).EventEmitter);
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(94),
      a = n(19),
      s = n(14),
      c = n(1).buildLogLevels,
      u = n(2).DEFAULT_LOG_LEVEL,
      l = n(8),
      d = n(9),
      p = d.MediaConnectionError,
      f = d.MediaDTLSTransportFailedError,
      h = d.SignalingConnectionDisconnectedError,
      v = 0,
      _ = {
        connected: ["reconnecting", "disconnected"],
        reconnecting: ["connected", "disconnected"],
        disconnected: [],
      },
      m = (function (e) {
        function t(t, n, r, i) {
          var a = this;
          i = Object.assign(
            { logLevel: u, RecordingSignaling: o, Timeout: s },
            i
          );
          var d = c(i.logLevel);
          a = e.call(this, "connected", _) || this;
          var p = i.RecordingSignaling,
            h = new i.Timeout(
              function () {
                a._disconnect(a._reconnectingError);
              },
              i.sessionTimeout,
              !1
            );
          return (
            Object.defineProperties(a, {
              _instanceId: { value: v++ },
              _log: {
                value: i.log
                  ? i.log.createLog("default", a)
                  : new l("default", a, d, i.loggerName),
              },
              _mediaConnectionIsReconnecting: { writable: !0, value: !1 },
              _options: { value: i },
              _reconnectingError: { value: null, writable: !0 },
              _sessionTimeout: { value: h },
              dominantSpeakerSid: { enumerable: !0, value: null, writable: !0 },
              localParticipant: { enumerable: !0, value: t },
              name: { enumerable: !0, value: r },
              participants: { enumerable: !0, value: new Map() },
              recording: { enumerable: !0, value: new p() },
              sid: { enumerable: !0, value: n },
            }),
            a.on("connectionStateChanged", function () {
              "failed" !== a.connectionState ||
                ["disconnected", "failed"].includes(a.iceConnectionState) ||
                a._disconnect(new f());
            }),
            a.on("iceConnectionStateChanged", function () {
              return y(a);
            }),
            a.on("signalingConnectionStateChanged", function () {
              return y(a);
            }),
            setTimeout(function () {
              return y(a);
            }),
            a
          );
        }
        return (
          i(t, e),
          (t.prototype._disconnect = function (e) {
            return (
              "disconnected" !== this.state &&
              (this.preempt("disconnected", null, [e]), !0)
            );
          }),
          (t.prototype.toString = function () {
            return (
              "[RoomSignaling #" +
              this._instanceId +
              ": " +
              (this.localParticipant ? this.localParticipant.sid : "null") +
              "]"
            );
          }),
          (t.prototype.connectParticipant = function (e) {
            var t = this;
            return (
              "disconnected" !== e.state &&
              !this.participants.has(e.sid) &&
              (this.participants.set(e.sid, e),
              e.on("stateChanged", function n(r) {
                "disconnected" === r &&
                  (e.removeListener("stateChanged", n),
                  t.participants.delete(e.sid),
                  t.emit("participantDisconnected", e));
              }),
              this.emit("participantConnected", e),
              !0)
            );
          }),
          (t.prototype.disconnect = function () {
            return this._disconnect();
          }),
          (t.prototype.setDominantSpeaker = function (e) {
            (this.dominantSpeakerSid = e), this.emit("dominantSpeakerChanged");
          }),
          t
        );
      })(a);
    function y(e) {
      var t;
      "disconnected" !== e.state &&
      "disconnected" !== e.signalingConnectionState
        ? ("reconnecting" === e.signalingConnectionState
            ? (t = e.signalingConnectionState)
            : "failed" === e.iceConnectionState
            ? ((e._mediaConnectionIsReconnecting = !0), (t = "reconnecting"))
            : "new" === e.iceConnectionState ||
              "checking" === e.iceConnectionState
            ? (t = e._mediaConnectionIsReconnecting
                ? "reconnecting"
                : "connected")
            : ((e._mediaConnectionIsReconnecting = !1),
              (e._reconnectingError = null),
              e._sessionTimeout.clear(),
              (t = "connected")),
          t !== e.state &&
            ("reconnecting" === t
              ? ((e._reconnectingError =
                  "reconnecting" === e.signalingConnectionState
                    ? new h()
                    : new p()),
                e._sessionTimeout.start(),
                e.preempt(t, null, [e._reconnectingError]))
              : e.preempt(t)))
        : e._sessionTimeout.clear();
    }
    e.exports = m;
  },
  function (e, t, n) {
    "use strict";
    var r = n(209),
      i = n(213),
      o = function (e) {
        var t = e.send,
          n = e.recv,
          o = e.sendStats,
          a = void 0 === o ? null : o,
          s = e.recvStats,
          c = void 0 === s ? null : s;
        Object.defineProperties(this, {
          send: { value: t, enumerable: !0 },
          recv: { value: n, enumerable: !0 },
          sendStats: { value: a ? new r(a) : null, enumerable: !0 },
          recvStats: { value: c ? new i(c) : null, enumerable: !0 },
        });
      };
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r = n(210),
      i = n(211),
      o = n(212),
      a = function (e) {
        var t = e.bandwidth,
          n = void 0 === t ? null : t,
          a = e.fractionLost,
          s = void 0 === a ? null : a,
          c = e.latency,
          u = void 0 === c ? null : c;
        Object.defineProperties(this, {
          bandwidth: { value: n ? new r(n) : null, enumerable: !0 },
          fractionLost: { value: s ? new i(s) : null, enumerable: !0 },
          latency: { value: u ? new o(u) : null, enumerable: !0 },
        });
      };
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r, i) {
          var o = e.call(this) || this,
            a = null;
          return (
            Object.defineProperties(o, {
              _error: { value: null, writable: !0 },
              _isEnabled: { value: r, writable: !0 },
              _priority: { value: i, writable: !0 },
              _trackTransceiver: { value: null, writable: !0 },
              _sid: {
                get: function () {
                  return a;
                },
                set: function (e) {
                  null === a && (a = e);
                },
              },
              kind: { enumerable: !0, value: n },
              name: { enumerable: !0, value: t },
            }),
            o
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "error", {
            get: function () {
              return this._error;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isEnabled", {
            get: function () {
              return this._isEnabled;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "priority", {
            get: function () {
              return this._priority;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "sid", {
            get: function () {
              return this._sid;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "trackTransceiver", {
            get: function () {
              return this._trackTransceiver;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.disable = function () {
            return this.enable(!1);
          }),
          (t.prototype.enable = function (e) {
            return (
              (e = "boolean" != typeof e || e),
              this.isEnabled !== e &&
                ((this._isEnabled = e), this.emit("updated")),
              this
            );
          }),
          (t.prototype.setTrackTransceiver = function (e) {
            return (
              (e = e || null),
              this.trackTransceiver !== e &&
                ((this._trackTransceiver = e), this.emit("updated")),
              this
            );
          }),
          (t.prototype.setSid = function (e) {
            return (
              null === this.sid && ((this._sid = e), this.emit("updated")), this
            );
          }),
          t
        );
      })(n(4).EventEmitter);
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = r.DEFAULT_LOG_LEVEL,
      o = r.DEFAULT_LOGGER_NAME;
    function a(e, t) {
      t = Object.assign({ loggerName: o, logLevel: i }, t);
      var n = {};
      (n.loggerName = t.loggerName),
        (n.logLevel = t.logLevel),
        delete t.loggerName,
        delete t.logLevel;
      var r = t.createLocalTracks;
      return (
        delete t.createLocalTracks,
        (n[e] = !(Object.keys(t).length > 0) || t),
        r(n).then(function (e) {
          return e[0];
        })
      );
    }
    e.exports = {
      audio: function (e) {
        return a("audio", e);
      },
      video: function (e) {
        return a("video", e);
      },
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r =
      (this && this.__assign) ||
      function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(121),
      o = n(143),
      a = {
        connect: n(153),
        createLocalAudioTrack: n(99).audio,
        createLocalVideoTrack: n(99).video,
        isSupported: n(227)(),
        version: n(52).version,
        Logger: n(61),
        LocalAudioTrack: n(18).LocalAudioTrack,
        LocalDataTrack: n(18).LocalDataTrack,
        LocalVideoTrack: n(18).LocalVideoTrack,
      };
    var s = a.isSupported,
      c = a.version,
      u = a.Logger,
      l = a.LocalAudioTrack,
      d = a.LocalVideoTrack,
      p = a.LocalDataTrack;
    e.exports = {
      connect: function (e, t) {
        var n = r({ createLocalTracks: i.createLocalTracks }, t);
        return a.connect(e, n);
      },
      createLocalAudioTrack: function (e) {
        var t = r({ createLocalTracks: i.createLocalTracks }, e);
        return a.createLocalAudioTrack(t);
      },
      createLocalVideoTrack: function (e) {
        var t = r({ createLocalTracks: i.createLocalTracks }, e);
        return a.createLocalVideoTrack(t);
      },
      createLocalTracks: i.createLocalTracks,
      runPreflight: o.runPreflight,
      isSupported: s,
      version: c,
      Logger: u,
      LocalAudioTrack: l,
      LocalVideoTrack: d,
      LocalDataTrack: p,
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
      o =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        },
      a =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      s =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createLocalTracks = void 0);
    var c = n(1),
      u = c.asLocalTrack,
      l = c.buildLogLevels,
      d = n(13),
      p = d.getUserMedia,
      f = d.MediaStreamTrack,
      h = n(18),
      v = h.LocalAudioTrack,
      _ = h.LocalDataTrack,
      m = h.LocalVideoTrack,
      y = n(8),
      g = n(2),
      b = g.DEFAULT_LOG_LEVEL,
      w = g.DEFAULT_LOGGER_NAME,
      k = n(65),
      S = 0;
    t.createLocalTracks = function (e) {
      return i(this, void 0, void 0, function () {
        var t, n, i, c, d, h, g, T, O, P, C, E;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              if (
                ((n = r(
                  {
                    audio: (t = !(e && ("audio" in e || "video" in e))),
                    getUserMedia: p,
                    loggerName: w,
                    logLevel: b,
                    LocalAudioTrack: v,
                    LocalDataTrack: _,
                    LocalVideoTrack: m,
                    MediaStreamTrack: f,
                    Log: y,
                    video: t,
                  },
                  e
                )),
                (i = "[createLocalTracks #" + ++S + "]"),
                (c = l(n.logLevel)),
                (d = new n.Log("default", i, c, n.loggerName)),
                delete (h = Object.assign({ log: d }, n)).name,
                !1 === n.audio && !1 === n.video)
              )
                return (
                  d.info(
                    "Neither audio nor video requested, so returning empty LocalTracks"
                  ),
                  [2, []]
                );
              if (n.tracks)
                return (
                  d.info("Adding user-provided LocalTracks"),
                  d.debug("LocalTracks:", n.tracks),
                  [2, n.tracks]
                );
              ((g = {
                audio:
                  "object" == typeof n.audio && n.audio.name
                    ? { name: n.audio.name }
                    : {},
                video:
                  "object" == typeof n.video && n.video.name
                    ? { name: n.video.name }
                    : {},
              }).audio.isCreatedByCreateLocalTracks = !0),
                (g.video.isCreatedByCreateLocalTracks = !0),
                "object" == typeof n.audio &&
                  "boolean" == typeof n.audio.workaroundWebKitBug1208516 &&
                  (g.audio.workaroundWebKitBug1208516 =
                    n.audio.workaroundWebKitBug1208516),
                "object" == typeof n.video &&
                  "boolean" == typeof n.video.workaroundWebKitBug1208516 &&
                  (g.video.workaroundWebKitBug1208516 =
                    n.video.workaroundWebKitBug1208516),
                "object" == typeof n.audio && delete n.audio.name,
                "object" == typeof n.video && delete n.video.name,
                (T = { audio: n.audio, video: n.video }),
                (O =
                  "object" == typeof n.audio &&
                  n.audio.workaroundWebKitBug180748),
                (o.label = 1);
            case 1:
              return (
                o.trys.push([1, 3, , 4]),
                [4, O ? k(d, n.getUserMedia, T) : n.getUserMedia(T)]
              );
            case 2:
              return (
                (P = o.sent()),
                (C = s(s([], a(P.getAudioTracks())), a(P.getVideoTracks()))),
                d.info(
                  "Call to getUserMedia successful; got MediaStreamTracks:",
                  C
                ),
                [
                  2,
                  C.map(function (e) {
                    return u(e, r(r({}, g[e.kind]), h));
                  }),
                ]
              );
            case 3:
              throw (
                ((E = o.sent()), d.warn("Call to getUserMedia failed:", E), E)
              );
            case 4:
              return [2];
          }
        });
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3).flatMap,
      i = n(3).guessBrowser,
      o = n(3).guessBrowserVersion,
      a = n(27).getSdpFormat,
      s = i(),
      c = o(),
      u = "chrome" === s,
      l = "firefox" === s,
      d = "safari" === s,
      p = u ? c.major : null;
    function f(e) {
      var t = Array.from(e.values()).find(function (e) {
        return "candidate-pair" === e.type && e.nominated;
      });
      if (!t) return null;
      var n = e.get(t.localCandidateId),
        r = e.get(t.remoteCandidateId),
        i = [
          { key: "candidateType", type: "string" },
          { key: "ip", type: "string" },
          { key: "port", type: "number" },
          { key: "priority", type: "number" },
          { key: "protocol", type: "string" },
          { key: "url", type: "string" },
        ],
        o = i.concat([
          { key: "deleted", type: "boolean" },
          { key: "relayProtocol", type: "string" },
        ]),
        a = n
          ? o.reduce(function (e, t) {
              return (
                (e[t.key] =
                  typeof n[t.key] === t.type
                    ? n[t.key]
                    : "deleted" !== t.key && null),
                e
              );
            }, {})
          : null,
        s = r
          ? i.reduce(function (e, t) {
              return (
                (e[t.key] = typeof r[t.key] === t.type ? r[t.key] : null), e
              );
            }, {})
          : null;
      return [
        { key: "availableIncomingBitrate", type: "number" },
        { key: "availableOutgoingBitrate", type: "number" },
        { key: "bytesReceived", type: "number" },
        { key: "bytesSent", type: "number" },
        { key: "consentRequestsSent", type: "number" },
        { key: "currentRoundTripTime", type: "number" },
        { key: "lastPacketReceivedTimestamp", type: "number" },
        { key: "lastPacketSentTimestamp", type: "number" },
        { key: "nominated", type: "boolean" },
        { key: "priority", type: "number" },
        { key: "readable", type: "boolean" },
        { key: "requestsReceived", type: "number" },
        { key: "requestsSent", type: "number" },
        { key: "responsesReceived", type: "number" },
        { key: "responsesSent", type: "number" },
        { key: "retransmissionsReceived", type: "number" },
        { key: "retransmissionsSent", type: "number" },
        {
          key: "state",
          type: "string",
          fixup: function (e) {
            return "inprogress" === e ? "in-progress" : e;
          },
        },
        { key: "totalRoundTripTime", type: "number" },
        { key: "transportId", type: "string" },
        { key: "writable", type: "boolean" },
      ].reduce(
        function (e, n) {
          return (
            (e[n.key] =
              typeof t[n.key] === n.type
                ? n.fixup
                  ? n.fixup(t[n.key])
                  : t[n.key]
                : null),
            e
          );
        },
        { localCandidate: a, remoteCandidate: s }
      );
    }
    function h(e) {
      var t = Array.from(e.values()).find(function (e) {
        return "candidate-pair" === e.type && e.nominated;
      });
      if (!t) return null;
      var n = e.get(t.localCandidateId),
        r = e.get(t.remoteCandidateId),
        i = [
          { key: "candidateType", type: "string" },
          { key: "ip", ffKeys: ["address", "ipAddress"], type: "string" },
          { key: "port", ffKeys: ["portNumber"], type: "number" },
          { key: "priority", type: "number" },
          { key: "protocol", ffKeys: ["transport"], type: "string" },
          { key: "url", type: "string" },
        ],
        o = i.concat([
          { key: "deleted", type: "boolean" },
          { key: "relayProtocol", type: "string" },
        ]),
        a = {
          host: "host",
          peerreflexive: "prflx",
          relayed: "relay",
          serverreflexive: "srflx",
        },
        s = n
          ? o.reduce(function (e, t) {
              var r =
                (t.ffKeys &&
                  t.ffKeys.find(function (e) {
                    return e in n;
                  })) ||
                t.key;
              return (
                (e[t.key] =
                  typeof n[r] === t.type
                    ? ("candidateType" === r && a[n[r]]) || n[r]
                    : "deleted" !== r && null),
                e
              );
            }, {})
          : null,
        c = r
          ? i.reduce(function (e, t) {
              var n =
                (t.ffKeys &&
                  t.ffKeys.find(function (e) {
                    return e in r;
                  })) ||
                t.key;
              return (
                (e[t.key] =
                  typeof r[n] === t.type
                    ? ("candidateType" === n && a[r[n]]) || r[n]
                    : null),
                e
              );
            }, {})
          : null;
      return [
        { key: "availableIncomingBitrate", type: "number" },
        { key: "availableOutgoingBitrate", type: "number" },
        { key: "bytesReceived", type: "number" },
        { key: "bytesSent", type: "number" },
        { key: "consentRequestsSent", type: "number" },
        { key: "currentRoundTripTime", type: "number" },
        { key: "lastPacketReceivedTimestamp", type: "number" },
        { key: "lastPacketSentTimestamp", type: "number" },
        { key: "nominated", type: "boolean" },
        { key: "priority", type: "number" },
        { key: "readable", type: "boolean" },
        { key: "requestsReceived", type: "number" },
        { key: "requestsSent", type: "number" },
        { key: "responsesReceived", type: "number" },
        { key: "responsesSent", type: "number" },
        { key: "retransmissionsReceived", type: "number" },
        { key: "retransmissionsSent", type: "number" },
        { key: "state", type: "string" },
        { key: "totalRoundTripTime", type: "number" },
        { key: "transportId", type: "string" },
        { key: "writable", type: "boolean" },
      ].reduce(
        function (e, n) {
          return (e[n.key] = typeof t[n.key] === n.type ? t[n.key] : null), e;
        },
        { localCandidate: s, remoteCandidate: c }
      );
    }
    function v(e, t, n) {
      var i = "local" === n ? "getSenders" : "getReceivers";
      return e[i]
        ? e[i]()
            .map(function (e) {
              return e.track;
            })
            .filter(function (e) {
              return e && e.kind === t;
            })
        : r(
            e["local" === n ? "getLocalStreams" : "getRemoteStreams"](),
            function (e) {
              return e["audio" === t ? "getAudioTracks" : "getVideoTracks"]();
            }
          );
    }
    function _(e, t) {
      return new Promise(function (n, r) {
        p && p < 67
          ? e.getStats(
              function (e) {
                n([m(e, t)]);
              },
              null,
              r
            )
          : e.getStats(t).then(function (e) {
              n(
                (function (e) {
                  var t = null,
                    n = [],
                    r = null,
                    i = null,
                    o = null,
                    a = null,
                    s = null;
                  e.forEach(function (e) {
                    switch (e.type) {
                      case "inbound-rtp":
                        t = e;
                        break;
                      case "outbound-rtp":
                        n.push(e);
                        break;
                      case "media-source":
                        s = e;
                        break;
                      case "track":
                        o = e;
                        break;
                      case "codec":
                        a = e;
                        break;
                      case "remote-inbound-rtp":
                        r = e;
                        break;
                      case "remote-outbound-rtp":
                        i = e;
                    }
                  });
                  var c = o && o.remoteSource,
                    u = [],
                    l = c ? i : r;
                  return (
                    (c ? [t] : n).forEach(function (e) {
                      var t = {},
                        n = [e, s, o, a, l && l.ssrc === e.ssrc ? l : null];
                      function r(e) {
                        var t =
                          n.find(function (t) {
                            return t && void 0 !== t[e];
                          }) || null;
                        return t ? t[e] : null;
                      }
                      var i = r("ssrc");
                      "number" == typeof i && (t.ssrc = String(i));
                      var d = r("timestamp");
                      t.timestamp = Math.round(d);
                      var p = r("mimeType");
                      "string" == typeof p &&
                        ((p = p.split("/")), (t.codecName = p[p.length - 1]));
                      var f = r("roundTripTime");
                      "number" == typeof f &&
                        (t.roundTripTime = Math.round(1e3 * f));
                      var h = r("jitter");
                      "number" == typeof h && (t.jitter = Math.round(1e3 * h));
                      var v = r("frameWidth");
                      "number" == typeof v &&
                        (c
                          ? (t.frameWidthReceived = v)
                          : ((t.frameWidthSent = v),
                            (t.frameWidthInput = o.frameWidth)));
                      var _ = r("frameHeight");
                      "number" == typeof _ &&
                        (c
                          ? (t.frameHeightReceived = _)
                          : ((t.frameHeightSent = _),
                            (t.frameHeightInput = o.frameHeight)));
                      var m = r("framesPerSecond");
                      "number" == typeof m &&
                        (t[c ? "frameRateReceived" : "frameRateSent"] = m);
                      var y = r("bytesReceived");
                      "number" == typeof y && (t.bytesReceived = y);
                      var g = r("bytesSent");
                      "number" == typeof g && (t.bytesSent = g);
                      var b = r("packetsLost");
                      "number" == typeof b && (t.packetsLost = b);
                      var w = r("packetsReceived");
                      "number" == typeof w && (t.packetsReceived = w);
                      var k = r("packetsSent");
                      "number" == typeof k && (t.packetsSent = k);
                      var S = r("audioLevel");
                      "number" == typeof S &&
                        ((S = Math.round(32767 * S)),
                        c ? (t.audioOutputLevel = S) : (t.audioInputLevel = S));
                      var T = r("totalPacketSendDelay");
                      "number" == typeof T && (t.totalPacketSendDelay = T);
                      var O = r("totalEncodeTime");
                      "number" == typeof O && (t.totalEncodeTime = O);
                      var P = r("framesEncoded");
                      "number" == typeof P && (t.framesEncoded = P);
                      var C = r("estimatedPlayoutTimestamp");
                      "number" == typeof C && (t.estimatedPlayoutTimestamp = C);
                      var E = r("totalDecodeTime");
                      "number" == typeof E && (t.totalDecodeTime = E);
                      var R = r("framesDecoded");
                      "number" == typeof R && (t.framesDecoded = R);
                      var x = r("jitterBufferDelay");
                      "number" == typeof x && (t.jitterBufferDelay = x);
                      var j = r("jitterBufferEmittedCount");
                      "number" == typeof j && (t.jitterBufferEmittedCount = j),
                        u.push(t);
                    }),
                    u
                  );
                })(e)
              );
            }, r);
      });
    }
    function m(e, t) {
      var n = e.result().find(function (e) {
          return "ssrc" === e.type && e.stat("googTrackId") === t.id;
        }),
        r = {};
      return (
        n &&
          ((r.timestamp = Math.round(Number(n.timestamp))),
          (r = n.names().reduce(function (e, t) {
            switch (t) {
              case "googCodecName":
                e.codecName = n.stat(t);
                break;
              case "googRtt":
                e.roundTripTime = Number(n.stat(t));
                break;
              case "googJitterReceived":
                e.jitter = Number(n.stat(t));
                break;
              case "googFrameWidthInput":
                e.frameWidthInput = Number(n.stat(t));
                break;
              case "googFrameHeightInput":
                e.frameHeightInput = Number(n.stat(t));
                break;
              case "googFrameWidthSent":
                e.frameWidthSent = Number(n.stat(t));
                break;
              case "googFrameHeightSent":
                e.frameHeightSent = Number(n.stat(t));
                break;
              case "googFrameWidthReceived":
                e.frameWidthReceived = Number(n.stat(t));
                break;
              case "googFrameHeightReceived":
                e.frameHeightReceived = Number(n.stat(t));
                break;
              case "googFrameRateInput":
                e.frameRateInput = Number(n.stat(t));
                break;
              case "googFrameRateSent":
                e.frameRateSent = Number(n.stat(t));
                break;
              case "googFrameRateReceived":
                e.frameRateReceived = Number(n.stat(t));
                break;
              case "ssrc":
                e[t] = n.stat(t);
                break;
              case "bytesReceived":
              case "bytesSent":
              case "packetsLost":
              case "packetsReceived":
              case "packetsSent":
              case "audioInputLevel":
              case "audioOutputLevel":
                e[t] = Number(n.stat(t));
            }
            return e;
          }, r))),
        r
      );
    }
    function y(e, t) {
      e = e || new Map();
      var n = null,
        r = null;
      e.forEach(function (t) {
        if (!t.isRemote)
          switch (t.type) {
            case "inbound-rtp":
              (n = t), (r = e.get(t.remoteId));
              break;
            case "outbound-rtp":
              (r = t), (n = e.get(t.remoteId));
          }
      });
      var i = t ? n : r,
        o = t ? r : n;
      function a(e) {
        return i && void 0 !== i[e] ? i[e] : o && void 0 !== o[e] ? o[e] : null;
      }
      var s = {},
        c = a("timestamp");
      s.timestamp = Math.round(c);
      var u = a("ssrc");
      "number" == typeof u && (s.ssrc = String(u));
      var l = a("bytesSent");
      "number" == typeof l && (s.bytesSent = l);
      var d = a("packetsLost");
      "number" == typeof d && (s.packetsLost = d);
      var p = a("packetsSent");
      "number" == typeof p && (s.packetsSent = p);
      var f = a("roundTripTime");
      "number" == typeof f && (s.roundTripTime = Math.round(1e3 * f));
      var h = a("jitter");
      "number" == typeof h && (s.jitter = Math.round(1e3 * h));
      var v = a("framerateMean");
      "number" == typeof v && (s.frameRateSent = Math.round(v));
      var _ = a("bytesReceived");
      "number" == typeof _ && (s.bytesReceived = _);
      var m = a("packetsReceived");
      "number" == typeof m && (s.packetsReceived = m);
      var y = a("framerateMean");
      "number" == typeof y && (s.frameRateReceived = Math.round(y));
      var g = a("totalPacketSendDelay");
      "number" == typeof g && (s.totalPacketSendDelay = g);
      var b = a("totalEncodeTime");
      "number" == typeof b && (s.totalEncodeTime = b);
      var w = a("framesEncoded");
      "number" == typeof w && (s.framesEncoded = w);
      var k = a("estimatedPlayoutTimestamp");
      "number" == typeof k && (s.estimatedPlayoutTimestamp = k);
      var S = a("totalDecodeTime");
      "number" == typeof S && (s.totalDecodeTime = S);
      var T = a("framesDecoded");
      "number" == typeof T && (s.framesDecoded = T);
      var O = a("jitterBufferDelay");
      "number" == typeof O && (s.jitterBufferDelay = O);
      var P = a("jitterBufferEmittedCount");
      return "number" == typeof P && (s.jitterBufferEmittedCount = P), s;
    }
    e.exports = function (e, t) {
      return e && "function" == typeof e.getStats
        ? (function (e, t) {
            var n = v(e, "audio", "local"),
              i = v(e, "video", "local"),
              o = v(e, "audio"),
              s = v(e, "video"),
              c = {
                activeIceCandidatePair: null,
                localAudioTrackStats: [],
                localVideoTrackStats: [],
                remoteAudioTrackStats: [],
                remoteVideoTrackStats: [],
              },
              p = r(
                [
                  [n, "localAudioTrackStats", !1],
                  [i, "localVideoTrackStats", !1],
                  [o, "remoteAudioTrackStats", !0],
                  [s, "remoteVideoTrackStats", !0],
                ],
                function (n) {
                  var r = n[0],
                    i = n[1],
                    o = n[2];
                  return r.map(function (n) {
                    return (function (e, t, n) {
                      if (void 0 !== (n = n || {}).testForChrome || u)
                        return _(e, t);
                      if (void 0 !== n.testForFirefox || l)
                        return (function (e, t, n) {
                          return new Promise(function (r, i) {
                            e.getStats(t).then(function (e) {
                              r([y(e, n)]);
                            }, i);
                          });
                        })(e, t, n.isRemote);
                      if (void 0 !== n.testForSafari || d)
                        return void 0 !== n.testForSafari || "unified" === a()
                          ? _(e, t)
                          : Promise.reject(
                              new Error(
                                [
                                  "getStats() is not supported on this version of Safari",
                                  "due to this bug: https://bugs.webkit.org/show_bug.cgi?id=192601",
                                ].join(" ")
                              )
                            );
                      return Promise.reject(
                        new Error("RTCPeerConnection#getStats() not supported")
                      );
                    })(e, n, Object.assign({ isRemote: o }, t)).then(function (
                      e
                    ) {
                      e.forEach(function (e) {
                        (e.trackId = n.id), c[i].push(e);
                      });
                    });
                  });
                }
              );
            return Promise.all(p)
              .then(function () {
                return (function (e, t) {
                  if (
                    void 0 !== (t = t || {}).testForChrome ||
                    u ||
                    void 0 !== t.testForSafari ||
                    d
                  )
                    return e.getStats().then(f);
                  if (void 0 !== t.testForFirefox || l)
                    return e.getStats().then(h);
                  return Promise.reject(
                    new Error("RTCPeerConnection#getStats() not supported")
                  );
                })(e, t);
              })
              .then(function (e) {
                return (c.activeIceCandidatePair = e), c;
              });
          })(e, t)
        : Promise.reject(
            new Error("Given PeerConnection does not support getStats")
          );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return "object" == typeof navigator &&
        "object" == typeof navigator.mediaDevices &&
        "function" == typeof navigator.mediaDevices.getUserMedia
        ? ((e = e || { audio: !0, video: !0 }),
          navigator.mediaDevices.getUserMedia(e))
        : Promise.reject(new Error("getUserMedia is not supported"));
    };
  },
  function (e, t, n) {
    "use strict";
    "function" == typeof MediaStreamTrack
      ? (e.exports = MediaStreamTrack)
      : (e.exports = function () {
          throw new Error("MediaStreamTrack is not supported");
        });
  },
  function (e, t, n) {
    "use strict";
    "function" == typeof RTCIceCandidate
      ? (e.exports = RTCIceCandidate)
      : (e.exports = function () {
          throw new Error("RTCIceCandidate is not supported");
        });
  },
  function (e, t, n) {
    "use strict";
    if ("function" == typeof RTCPeerConnection)
      switch ((0, n(3).guessBrowser)()) {
        case "chrome":
          e.exports = n(127);
          break;
        case "firefox":
          e.exports = n(131);
          break;
        case "safari":
          e.exports = n(132);
          break;
        default:
          e.exports = RTCPeerConnection;
      }
    else
      e.exports = function () {
        throw new Error("RTCPeerConnection is not supported");
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(55),
      i = n(32),
      o = n(5).inherits,
      a = n(56),
      s = n(54),
      c = n(130),
      u = n(27),
      l = n(3),
      d = n(3).isIOSChrome,
      p = "unified" === u.getSdpFormat();
    function f(e, t) {
      if (!(this instanceof f)) return new f(e, t);
      i.call(this), (e = e || {});
      var n = Object.assign(
        e.iceTransportPolicy ? { iceTransports: e.iceTransportPolicy } : {},
        e
      );
      l.interceptEvent(this, "datachannel"),
        l.interceptEvent(this, "signalingstatechange");
      var r = u.getSdpFormat(n.sdpSemantics),
        o = new RTCPeerConnection(n, t);
      Object.defineProperties(this, {
        _appliedTracksToSSRCs: { value: new Map(), writable: !0 },
        _localStream: { value: new s() },
        _peerConnection: { value: o },
        _pendingLocalOffer: { value: null, writable: !0 },
        _pendingRemoteOffer: { value: null, writable: !0 },
        _rolledBackTracksToSSRCs: { value: new Map(), writable: !0 },
        _sdpFormat: { value: r },
        _senders: { value: new Map() },
        _signalingStateLatch: { value: new a() },
        _tracksToSSRCs: { value: new Map(), writable: !0 },
        localDescription: {
          enumerable: !0,
          get: function () {
            return this._pendingLocalOffer
              ? this._pendingLocalOffer
              : o.localDescription;
          },
        },
        remoteDescription: {
          enumerable: !0,
          get: function () {
            return this._pendingRemoteOffer
              ? this._pendingRemoteOffer
              : o.remoteDescription;
          },
        },
        signalingState: {
          enumerable: !0,
          get: function () {
            return this._pendingLocalOffer
              ? "have-local-offer"
              : this._pendingRemoteOffer
              ? "have-remote-offer"
              : o.signalingState;
          },
        },
      });
      var c = this;
      o.addEventListener("datachannel", function (e) {
        y(e.channel), c.dispatchEvent(e);
      }),
        o.addEventListener("signalingstatechange", function () {
          "stable" === o.signalingState &&
            (c._appliedTracksToSSRCs = new Map(c._tracksToSSRCs)),
            c._pendingLocalOffer ||
              c._pendingRemoteOffer ||
              c.dispatchEvent.apply(c, arguments);
        }),
        (o.ontrack = function () {}),
        "function" != typeof RTCPeerConnection.prototype.addTrack &&
          o.addStream(this._localStream),
        l.proxyProperties(RTCPeerConnection.prototype, this, o);
    }
    function h(e, t, n) {
      var r,
        i,
        o = t ? e._pendingLocalOffer : e._pendingRemoteOffer,
        a = t ? e._pendingRemoteOffer : e._pendingLocalOffer,
        s = t ? "have-local-offer" : "have-remote-offer",
        c = t ? "setLocalDescription" : "setRemoteDescription";
      if (!t && a && "answer" === n.type)
        r = (function (e, t) {
          var n = e._pendingLocalOffer;
          return e._peerConnection
            .setLocalDescription(n)
            .then(function () {
              return (e._pendingLocalOffer = null), e.setRemoteDescription(t);
            })
            .then(function () {
              e._signalingStateLatch.lower();
            });
        })(e, n);
      else if ("offer" === n.type) {
        if (e.signalingState !== s && "stable" !== e.signalingState)
          return Promise.reject(
            new Error(
              "Cannot set " +
                (t ? "local" : "remote") +
                " offer in state " +
                e.signalingState
            )
          );
        o ||
          "low" !== e._signalingStateLatch.state ||
          e._signalingStateLatch.raise();
        var u = e.signalingState;
        (i = _(n)),
          t ? (e._pendingLocalOffer = i) : (e._pendingRemoteOffer = i),
          (r = Promise.resolve()),
          e.signalingState !== u &&
            r.then(function () {
              e.dispatchEvent(new Event("signalingstatechange"));
            });
      } else
        "rollback" === n.type &&
          (e.signalingState !== s
            ? (r = Promise.reject(
                new Error(
                  "Cannot rollback " +
                    (t ? "local" : "remote") +
                    " description in " +
                    e.signalingState
                )
              ))
            : (t
                ? (e._pendingLocalOffer = null)
                : (e._pendingRemoteOffer = null),
              (e._rolledBackTracksToSSRCs = new Map(e._tracksToSSRCs)),
              (e._tracksToSSRCs = new Map(e._appliedTracksToSSRCs)),
              (r = Promise.resolve()).then(function () {
                e.dispatchEvent(new Event("signalingstatechange"));
              })));
      return r || e._peerConnection[c](_(n));
    }
    function v(e, t) {
      return !!e.getTransceivers().find(function (e) {
        return e.receiver && e.receiver.track && e.receiver.track.kind === t;
      });
    }
    function _(e) {
      return e instanceof r && e._description
        ? e._description
        : new RTCSessionDescription(e);
    }
    function m() {
      return (
        "maxRetransmitTime" in RTCDataChannel.prototype &&
        !("maxPacketLifeTime" in RTCDataChannel.prototype)
      );
    }
    function y(e) {
      return (
        Object.defineProperty(e, "maxRetransmits", {
          value: 65535 === e.maxRetransmits ? null : e.maxRetransmits,
        }),
        m() &&
          Object.defineProperty(e, "maxPacketLifeTime", {
            value: 65535 === e.maxRetransmitTime ? null : e.maxRetransmitTime,
          }),
        e
      );
    }
    function g(e, t, n) {
      return "unified" === e
        ? u.updateUnifiedPlanTrackIdsToSSRCs(t, n)
        : u.updatePlanBTrackIdsToSSRCs(t, n);
    }
    o(f, i),
      "function" != typeof RTCPeerConnection.prototype.addTrack
        ? ((f.prototype.addTrack = function () {
            var e = [].slice.call(arguments),
              t = e[0];
            if ("closed" === this._peerConnection.signalingState)
              throw new Error(
                "Cannot add MediaStreamTrack [" +
                  t.id +
                  ", " +
                  t.kind +
                  "]: RTCPeerConnection is closed"
              );
            var n = this._senders.get(t);
            if (n && n.track)
              throw new Error(
                "Cannot add MediaStreamTrack [" +
                  t.id +
                  ", " +
                  t.kind +
                  "]: RTCPeerConnection already has it"
              );
            return (
              this._peerConnection.removeStream(this._localStream),
              this._localStream.addTrack(t),
              this._peerConnection.addStream(this._localStream),
              (n = new c(t)),
              this._senders.set(t, n),
              n
            );
          }),
          (f.prototype.removeTrack = function (e) {
            if ("closed" === this._peerConnection.signalingState)
              throw new Error(
                "Cannot remove MediaStreamTrack: RTCPeerConnection is closed"
              );
            var t = e.track;
            t &&
              (e = this._senders.get(t)) &&
              e.track &&
              ((e.track = null),
              this._peerConnection.removeStream(this._localStream),
              this._localStream.removeTrack(t),
              this._peerConnection.addStream(this._localStream));
          }),
          (f.prototype.getSenders = function () {
            return Array.from(this._senders.values());
          }))
        : (f.prototype.removeTrack = function (e) {
            if ("closed" === this._peerConnection.signalingState)
              throw new Error(
                "Cannot remove MediaStreamTrack: RTCPeerConnection is closed"
              );
            try {
              this._peerConnection.removeTrack(e);
            } catch (e) {}
          }),
      (f.prototype.addIceCandidate = function (e) {
        var t,
          n = [].slice.call(arguments),
          r = this;
        return (
          (t =
            "have-remote-offer" === this.signalingState
              ? this._signalingStateLatch.when("low").then(function () {
                  return r._peerConnection.addIceCandidate(e);
                })
              : this._peerConnection.addIceCandidate(e)),
          n.length > 1 ? l.legacyPromise(t, n[1], n[2]) : t
        );
      }),
      (f.prototype.close = function () {
        "closed" !== this.signalingState &&
          ((this._pendingLocalOffer = null),
          (this._pendingRemoteOffer = null),
          this._peerConnection.close());
      }),
      (f.prototype.createAnswer = function () {
        var e,
          t = [].slice.call(arguments),
          n = this;
        return (
          (e = this._pendingRemoteOffer
            ? this._peerConnection
                .setRemoteDescription(this._pendingRemoteOffer)
                .then(function () {
                  return (
                    n._signalingStateLatch.lower(),
                    n._peerConnection.createAnswer()
                  );
                })
                .then(
                  function (e) {
                    return (
                      (n._pendingRemoteOffer = null),
                      n._rolledBackTracksToSSRCs.clear(),
                      new r({
                        type: "answer",
                        sdp: g(n._sdpFormat, n._tracksToSSRCs, e.sdp),
                      })
                    );
                  },
                  function (e) {
                    throw ((n._pendingRemoteOffer = null), e);
                  }
                )
            : this._peerConnection.createAnswer().then(function (e) {
                return (
                  n._rolledBackTracksToSSRCs.clear(),
                  new r({
                    type: "answer",
                    sdp: g(n._sdpFormat, n._tracksToSSRCs, e.sdp),
                  })
                );
              })),
          t.length > 1 ? l.legacyPromise(e, t[0], t[1]) : e
        );
      }),
      (f.prototype.createOffer = function () {
        var e = [].slice.call(arguments),
          t = (e.length > 1 ? e[2] : e[0]) || {},
          n = this;
        if (d()) {
          if (
            t.offerToReceiveVideo &&
            !this._audioTransceiver &&
            (!p || !v(this, "audio"))
          ) {
            delete t.offerToReceiveAudio;
            try {
              this._audioTransceiver = p
                ? this.addTransceiver("audio", { direction: "recvonly" })
                : this.addTransceiver("audio");
            } catch (e) {
              return Promise.reject(e);
            }
          }
          if (
            t.offerToReceiveVideo &&
            !this._videoTransceiver &&
            (!p || !v(this, "video"))
          ) {
            delete t.offerToReceiveVideo;
            try {
              this._videoTransceiver = p
                ? this.addTransceiver("video", { direction: "recvonly" })
                : this.addTransceiver("video");
            } catch (e) {
              return Promise.reject(e);
            }
          }
        }
        var i = this._peerConnection.createOffer(t).then(function (e) {
          return (
            n._rolledBackTracksToSSRCs.clear(),
            new r({
              type: e.type,
              sdp: g(n._sdpFormat, n._tracksToSSRCs, e.sdp),
            })
          );
        });
        return e.length > 1 ? l.legacyPromise(i, e[0], e[1]) : i;
      }),
      (f.prototype.createDataChannel = function (e, t) {
        t = (function (e) {
          (e = Object.assign({}, e)),
            m() &&
              "maxPacketLifeTime" in e &&
              (e.maxRetransmitTime = e.maxPacketLifeTime);
          return e;
        })(t);
        var n = this._peerConnection.createDataChannel(e, t);
        return y(n), n;
      }),
      (f.prototype.setLocalDescription = function () {
        var e = [].slice.call(arguments),
          t = e[0];
        this._rolledBackTracksToSSRCs.size > 0 &&
          ((this._tracksToSSRCs = new Map(this._rolledBackTracksToSSRCs)),
          this._rolledBackTracksToSSRCs.clear());
        var n = h(this, !0, t);
        return e.length > 1 ? l.legacyPromise(n, e[1], e[2]) : n;
      }),
      (f.prototype.setRemoteDescription = function () {
        var e = [].slice.call(arguments),
          t = e[0];
        this._rolledBackTracksToSSRCs.clear();
        var n = h(this, !1, t);
        return e.length > 1 ? l.legacyPromise(n, e[1], e[2]) : n;
      }),
      l.delegateMethods(
        RTCPeerConnection.prototype,
        f.prototype,
        "_peerConnection"
      ),
      (e.exports = f);
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e &&
        "object" == typeof e &&
        "function" == typeof e.copy &&
        "function" == typeof e.fill &&
        "function" == typeof e.readUInt8
      );
    };
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }));
        })
      : (e.exports = function (e, t) {
          e.super_ = t;
          var n = function () {};
          (n.prototype = t.prototype),
            (e.prototype = new n()),
            (e.prototype.constructor = e);
        });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      Object.defineProperties(this, {
        track: { enumerable: !0, value: e, writable: !0 },
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(32),
      i = n(57),
      o = n(5).inherits,
      a = n(27).updateUnifiedPlanTrackIdsToSSRCs,
      s = n(3),
      c =
        "object" == typeof navigator &&
        navigator.userAgent &&
        (navigator.userAgent.match(/Firefox\/61/) ||
          navigator.userAgent.match(/Firefox\/62/));
    function u(e) {
      if (!(this instanceof u)) return new u(e);
      r.call(this), s.interceptEvent(this, "signalingstatechange");
      var t = new RTCPeerConnection(e);
      Object.defineProperties(this, {
        _initiallyNegotiatedDtlsRole: { value: null, writable: !0 },
        _isClosed: { value: !1, writable: !0 },
        _peerConnection: { value: t },
        _rollingBack: { value: !1, writable: !0 },
        _tracksToSSRCs: { value: new Map() },
        iceGatheringState: {
          enumerable: !0,
          get: function () {
            return this._isClosed
              ? "complete"
              : this._peerConnection.iceGatheringState;
          },
        },
        localDescription: {
          enumerable: !0,
          get: function () {
            return p(
              this._peerConnection.localDescription,
              this._initiallyNegotiatedDtlsRole
            );
          },
        },
        signalingState: {
          enumerable: !0,
          get: function () {
            return this._isClosed
              ? "closed"
              : this._peerConnection.signalingState;
          },
        },
      });
      var n,
        i = this;
      t.addEventListener("signalingstatechange", function () {
        if (!i._rollingBack && i.signalingState !== n) {
          n = i.signalingState;
          var e = i.dispatchEvent.apply.bind(i.dispatchEvent, i, arguments);
          i._isClosed ? setTimeout(e) : e();
        }
      }),
        s.proxyProperties(RTCPeerConnection.prototype, this, t);
    }
    function l(e, t, n) {
      var r = t ? "setLocalDescription" : "setRemoteDescription";
      return (
        (e._rollingBack = !0),
        e._peerConnection[r](new i({ type: "rollback" }))
          .then(n)
          .then(
            function (t) {
              return (e._rollingBack = !1), t;
            },
            function (t) {
              throw ((e._rollingBack = !1), t);
            }
          )
      );
    }
    function d(e, t, n) {
      if (!e._initiallyNegotiatedDtlsRole && "offer" !== t.type) {
        var r = t.sdp.match(/a=setup:([a-z]+)/);
        if (r) {
          var i = r[1];
          e._initiallyNegotiatedDtlsRole = n
            ? { active: "passive", passive: "active" }[i]
            : i;
        }
      }
    }
    function p(e, t) {
      return e && "answer" === e.type && t
        ? new i({
            type: e.type,
            sdp: e.sdp.replace(/a=setup:[a-z]+/g, "a=setup:" + t),
          })
        : e;
    }
    o(u, r),
      Object.defineProperty(u.prototype, "peerIdentity", {
        enumerable: !0,
        value: Promise.resolve({ idp: "", name: "" }),
      }),
      c &&
        (u.prototype.addTrack = function () {
          var e = arguments[0],
            t = this._peerConnection.addTrack.apply(
              this._peerConnection,
              arguments
            );
          return t.replaceTrack(e), t;
        }),
      (u.prototype.createAnswer = function () {
        var e,
          t = [].slice.call(arguments),
          n = this;
        return (
          (e = this._peerConnection.createAnswer().then(function (e) {
            return d(n, e), p(e, n._initiallyNegotiatedDtlsRole);
          })),
          "function" == typeof t[0] ? s.legacyPromise(e, t[0], t[1]) : e
        );
      }),
      (u.prototype.createOffer = function () {
        var e,
          t = [].slice.call(arguments),
          n = (t.length > 1 ? t[2] : t[0]) || {},
          r = this;
        if (
          "have-local-offer" === this.signalingState ||
          "have-remote-offer" === this.signalingState
        ) {
          var o = "have-local-offer" === this.signalingState;
          e = l(this, o, function () {
            return r.createOffer(n);
          });
        } else e = r._peerConnection.createOffer(n);
        return (
          (e = e.then(function (e) {
            return new i({ type: e.type, sdp: a(r._tracksToSSRCs, e.sdp) });
          })),
          t.length > 1 ? s.legacyPromise(e, t[0], t[1]) : e
        );
      }),
      (u.prototype.setLocalDescription = function () {
        var e,
          t = [].slice.call(arguments),
          n = t[0];
        return (
          n &&
            "answer" === n.type &&
            "have-local-offer" === this.signalingState &&
            (e = Promise.reject(
              new Error("Cannot set local answer in state have-local-offer")
            )),
          e
            ? t.length > 1
              ? s.legacyPromise(e, t[1], t[2])
              : e
            : this._peerConnection.setLocalDescription.apply(
                this._peerConnection,
                t
              )
        );
      }),
      (u.prototype.setRemoteDescription = function () {
        var e,
          t = [].slice.call(arguments),
          n = t[0],
          r = this;
        return (
          n &&
            "have-remote-offer" === this.signalingState &&
            ("answer" === n.type
              ? (e = Promise.reject(
                  new Error(
                    "Cannot set remote answer in state have-remote-offer"
                  )
                ))
              : "offer" === n.type &&
                (e = l(this, !1, function () {
                  return r._peerConnection.setRemoteDescription(n);
                }))),
          e || (e = this._peerConnection.setRemoteDescription(n)),
          (e = e.then(function () {
            d(r, n, !0);
          })),
          t.length > 1 ? s.legacyPromise(e, t[1], t[2]) : e
        );
      }),
      (u.prototype.close = function () {
        "closed" !== this.signalingState &&
          ((this._isClosed = !0), this._peerConnection.close());
      }),
      s.delegateMethods(
        RTCPeerConnection.prototype,
        u.prototype,
        "_peerConnection"
      ),
      (e.exports = u);
  },
  function (e, t, n) {
    "use strict";
    var r = n(32),
      i = n(5).inherits,
      o = n(56),
      a = n(27),
      s = n(3),
      c = "unified" === a.getSdpFormat(),
      u = c ? a.updateUnifiedPlanTrackIdsToSSRCs : a.updatePlanBTrackIdsToSSRCs;
    function l(e) {
      if (!(this instanceof l)) return new l(e);
      r.call(this),
        s.interceptEvent(this, "datachannel"),
        s.interceptEvent(this, "iceconnectionstatechange"),
        s.interceptEvent(this, "signalingstatechange"),
        s.interceptEvent(this, "track");
      var t = new RTCPeerConnection(e);
      Object.defineProperties(this, {
        _appliedTracksToSSRCs: { value: new Map(), writable: !0 },
        _audioTransceiver: { value: null, writable: !0 },
        _isClosed: { value: !1, writable: !0 },
        _peerConnection: { value: t },
        _pendingLocalOffer: { value: null, writable: !0 },
        _pendingRemoteOffer: { value: null, writable: !0 },
        _rolledBackTracksToSSRCs: { value: new Map(), writable: !0 },
        _signalingStateLatch: { value: new o() },
        _tracksToSSRCs: { value: new Map(), writable: !0 },
        _videoTransceiver: { value: null, writable: !0 },
        localDescription: {
          enumerable: !0,
          get: function () {
            return (
              this._pendingLocalOffer || this._peerConnection.localDescription
            );
          },
        },
        iceConnectionState: {
          enumerable: !0,
          get: function () {
            return this._isClosed
              ? "closed"
              : this._peerConnection.iceConnectionState;
          },
        },
        iceGatheringState: {
          enumerable: !0,
          get: function () {
            return this._isClosed
              ? "complete"
              : this._peerConnection.iceGatheringState;
          },
        },
        remoteDescription: {
          enumerable: !0,
          get: function () {
            return (
              this._pendingRemoteOffer || this._peerConnection.remoteDescription
            );
          },
        },
        signalingState: {
          enumerable: !0,
          get: function () {
            return this._isClosed
              ? "closed"
              : this._pendingLocalOffer
              ? "have-local-offer"
              : this._pendingRemoteOffer
              ? "have-remote-offer"
              : this._peerConnection.signalingState;
          },
        },
      });
      var n = this;
      t.addEventListener("datachannel", function (e) {
        f(e.channel), n.dispatchEvent(e);
      }),
        t.addEventListener("iceconnectionstatechange", function () {
          n._isClosed || n.dispatchEvent.apply(n, arguments);
        }),
        t.addEventListener("signalingstatechange", function () {
          n._isClosed ||
            ("stable" === t.signalingState &&
              (n._appliedTracksToSSRCs = new Map(n._tracksToSSRCs)),
            n._pendingLocalOffer ||
              n._pendingRemoteOffer ||
              n.dispatchEvent.apply(n, arguments));
        }),
        t.addEventListener("track", function (e) {
          (n._pendingRemoteOffer = null), n.dispatchEvent(e);
        }),
        s.proxyProperties(RTCPeerConnection.prototype, this, t);
    }
    function d(e, t, n) {
      var r,
        i = t ? e._pendingLocalOffer : e._pendingRemoteOffer,
        o = t ? e._pendingRemoteOffer : e._pendingLocalOffer,
        a = t ? "have-local-offer" : "have-remote-offer",
        s = t ? "setLocalDescription" : "setRemoteDescription";
      if (!t && o && "answer" === n.type)
        return (function (e, t) {
          var n = e._pendingLocalOffer;
          return e._peerConnection
            .setLocalDescription(n)
            .then(function () {
              return (e._pendingLocalOffer = null), e.setRemoteDescription(t);
            })
            .then(function () {
              e._signalingStateLatch.lower();
            });
        })(e, n);
      if ("offer" === n.type) {
        if (e.signalingState !== a && "stable" !== e.signalingState)
          return Promise.reject(
            new Error(
              "Cannot set " +
                (t ? "local" : "remote") +
                " offer in state " +
                e.signalingState
            )
          );
        i ||
          "low" !== e._signalingStateLatch.state ||
          e._signalingStateLatch.raise();
        var c = e.signalingState;
        return (
          (r = n),
          t ? (e._pendingLocalOffer = r) : (e._pendingRemoteOffer = r),
          e.signalingState !== c
            ? Promise.resolve().then(function () {
                e.dispatchEvent(new Event("signalingstatechange"));
              })
            : Promise.resolve()
        );
      }
      return "rollback" === n.type
        ? e.signalingState !== a
          ? Promise.reject(
              new Error(
                "Cannot rollback " +
                  (t ? "local" : "remote") +
                  " description in " +
                  e.signalingState
              )
            )
          : (t ? (e._pendingLocalOffer = null) : (e._pendingRemoteOffer = null),
            (e._rolledBackTracksToSSRCs = new Map(e._tracksToSSRCs)),
            (e._tracksToSSRCs = new Map(e._appliedTracksToSSRCs)),
            Promise.resolve().then(function () {
              e.dispatchEvent(new Event("signalingstatechange"));
            }))
        : e._peerConnection[s](n);
    }
    function p(e, t) {
      return !!e.getTransceivers().find(function (e) {
        return e.receiver && e.receiver.track && e.receiver.track.kind === t;
      });
    }
    function f(e) {
      return Object.defineProperties(e, {
        maxPacketLifeTime: {
          value: 65535 === e.maxPacketLifeTime ? null : e.maxPacketLifeTime,
        },
        maxRetransmits: {
          value: 65535 === e.maxRetransmits ? null : e.maxRetransmits,
        },
      });
    }
    i(l, r),
      (l.prototype.addIceCandidate = function (e) {
        var t = this;
        return "have-remote-offer" === this.signalingState
          ? this._signalingStateLatch.when("low").then(function () {
              return t._peerConnection.addIceCandidate(e);
            })
          : this._peerConnection.addIceCandidate(e);
      }),
      (l.prototype.createOffer = function (e) {
        e = Object.assign({}, e);
        var t = this;
        if (
          e.offerToReceiveVideo &&
          !this._audioTransceiver &&
          (!c || !p(this, "audio"))
        ) {
          delete e.offerToReceiveAudio;
          try {
            this._audioTransceiver = c
              ? this.addTransceiver("audio", { direction: "recvonly" })
              : this.addTransceiver("audio");
          } catch (e) {
            return Promise.reject(e);
          }
        }
        if (
          e.offerToReceiveVideo &&
          !this._videoTransceiver &&
          (!c || !p(this, "video"))
        ) {
          delete e.offerToReceiveVideo;
          try {
            this._videoTransceiver = c
              ? this.addTransceiver("video", { direction: "recvonly" })
              : this.addTransceiver("video");
          } catch (e) {
            return Promise.reject(e);
          }
        }
        return this._peerConnection.createOffer(e).then(function (e) {
          return (
            t._rolledBackTracksToSSRCs.clear(),
            new RTCSessionDescription({
              type: e.type,
              sdp: u(t._tracksToSSRCs, e.sdp),
            })
          );
        });
      }),
      (l.prototype.createAnswer = function (e) {
        var t = this;
        return this._pendingRemoteOffer
          ? this._peerConnection
              .setRemoteDescription(this._pendingRemoteOffer)
              .then(function () {
                return (
                  t._signalingStateLatch.lower(),
                  t._peerConnection.createAnswer()
                );
              })
              .then(
                function (e) {
                  return (
                    (t._pendingRemoteOffer = null),
                    t._rolledBackTracksToSSRCs.clear(),
                    c
                      ? new RTCSessionDescription({
                          type: e.type,
                          sdp: u(t._tracksToSSRCs, e.sdp),
                        })
                      : e
                  );
                },
                function (e) {
                  throw ((t._pendingRemoteOffer = null), e);
                }
              )
          : this._peerConnection.createAnswer(e).then(function (e) {
              return (
                t._rolledBackTracksToSSRCs.clear(),
                c
                  ? new RTCSessionDescription({
                      type: e.type,
                      sdp: u(t._tracksToSSRCs, e.sdp),
                    })
                  : e
              );
            });
      }),
      (l.prototype.createDataChannel = function (e, t) {
        var n = this._peerConnection.createDataChannel(e, t);
        return f(n), n;
      }),
      (l.prototype.removeTrack = function (e) {
        e.replaceTrack(null), this._peerConnection.removeTrack(e);
      }),
      (l.prototype.setLocalDescription = function (e) {
        return (
          this._rolledBackTracksToSSRCs.size > 0 &&
            ((this._tracksToSSRCs = new Map(this._rolledBackTracksToSSRCs)),
            this._rolledBackTracksToSSRCs.clear()),
          d(this, !0, e)
        );
      }),
      (l.prototype.setRemoteDescription = function (e) {
        return this._rolledBackTracksToSSRCs.clear(), d(this, !1, e);
      }),
      (l.prototype.close = function () {
        if (!this._isClosed) {
          (this._isClosed = !0), this._peerConnection.close();
          var e = this;
          setTimeout(function () {
            e.dispatchEvent(new Event("iceconnectionstatechange")),
              e.dispatchEvent(new Event("signalingstatechange"));
          });
        }
      }),
      s.delegateMethods(
        RTCPeerConnection.prototype,
        l.prototype,
        "_peerConnection"
      ),
      (e.exports = l);
  },
  function (e, t, n) {
    "use strict";
    if ("function" == typeof RTCSessionDescription)
      switch ((0, n(3).guessBrowser)()) {
        case "chrome":
          e.exports = n(55);
          break;
        case "firefox":
          e.exports = n(57);
          break;
        default:
          e.exports = RTCSessionDescription;
      }
    else
      e.exports = function () {
        throw new Error("RTCSessionDescription is not supported");
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5).inherits,
      i = n(135);
    function o(e, t) {
      var n = new i(e, t);
      return Object.setPrototypeOf(n, o.prototype), n;
    }
    r(o, i), (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(58),
      a = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[LocalAudioTrack #" + this._instanceId + ": " + this.id + "]"
            );
          }),
          (t.prototype.attach = function (t) {
            return ((t = e.prototype.attach.call(this, t)).muted = !0), t;
          }),
          (t.prototype._end = function () {
            return e.prototype._end.apply(this, arguments);
          }),
          (t.prototype.disable = function () {
            return e.prototype.disable.apply(this, arguments);
          }),
          (t.prototype.enable = function () {
            return e.prototype.enable.apply(this, arguments);
          }),
          (t.prototype.restart = function () {
            return e.prototype.restart.apply(this, arguments);
          }),
          (t.prototype.stop = function () {
            return e.prototype.stop.apply(this, arguments);
          }),
          t
        );
      })(n(62)(o));
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    var r = n(63);
    e.exports = function (e) {
      var t = n(28),
        i = {},
        o = t.getOrCreate(i),
        a = 3;
      return (function t() {
        return (
          a--,
          r(o, e.srcObject, 250)
            .then(function (e) {
              return !!e && (!(a > 0) || t());
            })
            .catch(function () {
              return !0;
            })
        );
      })().finally(function () {
        t.release(i);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5).inherits,
      i = n(138);
    function o(e, t) {
      var n = new i(e, t);
      return Object.setPrototypeOf(n, o.prototype), n;
    }
    r(o, i), (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(3),
      a = o.guessBrowser,
      s = o.isIOSChrome,
      c = n(64),
      u = n(62),
      l = n(69),
      d = n(1).isUserMediaTrack,
      p = (function (e) {
        function t(t, n) {
          var r = this;
          return (
            (n = Object.assign(
              {
                workaroundSilentLocalVideo:
                  ("safari" === a() || s()) &&
                  d(t) &&
                  "undefined" != typeof document &&
                  "function" == typeof document.createElement,
              },
              n
            )),
            (r = e.call(this, t, n) || this),
            Object.defineProperties(r, {
              _workaroundSilentLocalVideo: {
                value: n.workaroundSilentLocalVideo ? f : null,
              },
              _workaroundSilentLocalVideoCleanup: { value: null, writable: !0 },
            }),
            r._workaroundSilentLocalVideo &&
              (r._workaroundSilentLocalVideoCleanup =
                r._workaroundSilentLocalVideo(r, document)),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[LocalVideoTrack #" + this._instanceId + ": " + this.id + "]"
            );
          }),
          (t.prototype._checkIfCanCaptureFrames = function () {
            return e.prototype._checkIfCanCaptureFrames.call(
              this,
              this._trackSender.isPublishing
            );
          }),
          (t.prototype._end = function () {
            return e.prototype._end.apply(this, arguments);
          }),
          (t.prototype._setSenderMediaStreamTrack = function (e) {
            var t = this,
              n = this.mediaStreamTrack,
              r = e ? this.processedTrack : n;
            return this._trackSender
              .setMediaStreamTrack(r)
              .catch(function (e) {
                return t._log.warn(
                  "setMediaStreamTrack failed on LocalVideoTrack RTCRtpSender",
                  { error: e, mediaStreamTrack: r }
                );
              })
              .then(function () {
                t._unprocessedTrack = e ? n : null;
              });
          }),
          (t.prototype.addProcessor = function () {
            this._log.debug("Adding VideoProcessor to the LocalVideoTrack");
            var t = e.prototype.addProcessor.apply(this, arguments);
            return this.processedTrack
              ? (this._log.debug(
                  "Updating LocalVideoTrack's MediaStreamTrack with the processed MediaStreamTrack",
                  this.processedTrack
                ),
                this._setSenderMediaStreamTrack(!0),
                t)
              : this._log.warn(
                  "Unable to add a VideoProcessor to the LocalVideoTrack"
                );
          }),
          (t.prototype.removeProcessor = function () {
            var t = this;
            this._log.debug("Removing VideoProcessor from the LocalVideoTrack");
            var n = e.prototype.removeProcessor.apply(this, arguments);
            return (
              this._log.debug(
                "Updating LocalVideoTrack's MediaStreamTrack with the original MediaStreamTrack"
              ),
              this._setSenderMediaStreamTrack().then(function () {
                return t._updateElementsMediaStreamTrack();
              }),
              n
            );
          }),
          (t.prototype.disable = function () {
            var t = e.prototype.disable.apply(this, arguments);
            return this.processedTrack && (this.processedTrack.enabled = !1), t;
          }),
          (t.prototype.enable = function (t) {
            void 0 === t && (t = !0);
            var n = e.prototype.enable.apply(this, arguments);
            return (
              this.processedTrack &&
                ((this.processedTrack.enabled = t),
                t &&
                  (this._captureFrames(),
                  this._log.debug(
                    "Updating LocalVideoTrack's MediaStreamTrack with the processed MediaStreamTrack",
                    this.processedTrack
                  ),
                  this._setSenderMediaStreamTrack(!0))),
              n
            );
          }),
          (t.prototype.restart = function () {
            var t = this;
            this._workaroundSilentLocalVideoCleanup &&
              (this._workaroundSilentLocalVideoCleanup(),
              (this._workaroundSilentLocalVideoCleanup = null));
            var n = e.prototype.restart.apply(this, arguments);
            return (
              this.processor &&
                n.then(function () {
                  t._restartProcessor();
                }),
              this._workaroundSilentLocalVideo &&
                n.finally(function () {
                  t._workaroundSilentLocalVideoCleanup =
                    t._workaroundSilentLocalVideo(t, document);
                }),
              n
            );
          }),
          (t.prototype.stop = function () {
            return (
              this._workaroundSilentLocalVideoCleanup &&
                (this._workaroundSilentLocalVideoCleanup(),
                (this._workaroundSilentLocalVideoCleanup = null)),
              e.prototype.stop.apply(this, arguments)
            );
          }),
          t
        );
      })(u(l));
    function f(e, t) {
      var n = e._log,
        r = e._dummyEl,
        i = e.mediaStreamTrack;
      function o() {
        e.isEnabled &&
          (n.info("Unmuted, checking silence"),
          r
            .play()
            .then(function () {
              return c(r, t);
            })
            .then(function (t) {
              if (t)
                return (
                  n.warn("Silence detected, restarting"),
                  e._stop(),
                  e._restart()
                );
              n.info("Non-silent frames detected, so no need to restart");
            })
            .catch(function (e) {
              n.warn("Failed to detect silence and restart:", e);
            })
            .finally(function () {
              (r = e._dummyEl).paused || r.pause(),
                i.removeEventListener("unmute", o),
                (i = e.mediaStreamTrack).addEventListener("unmute", o);
            }));
      }
      return (
        i.addEventListener("unmute", o),
        function () {
          i.removeEventListener("unmute", o);
        }
      );
    }
    e.exports = p;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(4).EventEmitter,
      a = n(2).DEFAULT_VIDEO_PROCESSOR_STATS_INTERVAL_MS,
      s = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (
            Object.defineProperties(n, {
              _lastStatsSaveTime: { value: null, writable: !0 },
              _lastStatsPublishTime: { value: null, writable: !0 },
              _log: { value: t },
              _processorInfo: { value: null, writable: !0 },
              _stats: { value: null, writable: !0 },
            }),
            n.on("add", function (e) {
              (n._lastStatsSaveTime = Date.now()),
                (n._lastStatsPublishTime = Date.now()),
                (n._processorInfo = e),
                (n._stats = []),
                n._reemitEvent("add", n._getEventData());
            }),
            n.on("remove", function () {
              var e = n._getEventData();
              (n._lastStatsSaveTime = null),
                (n._lastStatsPublishTime = null),
                (n._processorInfo = null),
                (n._stats = null),
                n._reemitEvent("remove", e);
            }),
            n.on("start", function () {
              n._reemitEvent("start", n._getEventData());
            }),
            n.on("stop", function (e) {
              n._reemitEvent(
                "stop",
                Object.assign({ message: e }, n._getEventData())
              );
            }),
            n.on("stats", function () {
              return n._maybeEmitStats();
            }),
            n
          );
        }
        return (
          i(t, e),
          (t.prototype._getEventData = function () {
            if (!this._processorInfo) return {};
            var e = this._processorInfo,
              t = e.processor,
              n = {
                captureHeight: e.captureHeight,
                captureWidth: e.captureWidth,
                inputFrameRate: e.inputFrameRate,
                isRemoteVideoTrack: e.isRemoteVideoTrack,
              };
            return (
              (n.name = t._name || "VideoProcessor"),
              [
                "assetsPath",
                "blurFilterRadius",
                "fitType",
                "isSimdEnabled",
                "maskBlurRadius",
                "version",
              ].forEach(function (e) {
                var r = t["_" + e];
                void 0 !== r && (n[e] = r);
              }),
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                "boolean" == typeof t && (n[e] = t ? "true" : "false");
              }),
              n
            );
          }),
          (t.prototype._maybeEmitStats = function () {
            if (this._stats && this._processorInfo) {
              var e = this._processorInfo.processor._benchmark;
              if (e) {
                var t = Date.now();
                if (!(t - this._lastStatsSaveTime < 1e3)) {
                  var n = {
                    outputFrameRate: e.getRate("totalProcessingDelay"),
                  };
                  if (
                    ([
                      "captureFrameDelay",
                      "imageCompositionDelay",
                      "inputImageResizeDelay",
                      "processFrameDelay",
                      "segmentationDelay",
                    ].forEach(function (t) {
                      n[t] = e.getAverageDelay(t);
                    }),
                    (this._lastStatsSaveTime = t),
                    this._stats.push(n),
                    !(t - this._lastStatsPublishTime < a))
                  ) {
                    this._lastStatsPublishTime = t;
                    var r = this._stats.splice(0).reduce(function (e, t, r) {
                      return (
                        Object.keys(n).forEach(function (n) {
                          e[n] || (e[n] = 0),
                            (e[n] = (e[n] * r + t[n]) / (r + 1));
                        }),
                        e
                      );
                    }, {});
                    Object.keys(r).forEach(function (e) {
                      r[e] = parseFloat(r[e].toFixed(2));
                    }),
                      this._reemitEvent(
                        "stats",
                        Object.assign({}, r, this._getEventData())
                      );
                  }
                }
              }
            }
          }),
          (t.prototype._reemitEvent = function (e, t) {
            this._log.debug("VideoProcessor:" + e, t),
              this.emit("event", { name: e, data: t });
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r = n(5).inherits,
      i = n(141);
    function o(e) {
      var t = new i(e);
      return Object.setPrototypeOf(t, o.prototype), t;
    }
    r(o, i), (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(33),
      a = n(142),
      s = (function (e) {
        function t(t) {
          var n,
            r = new (0,
            (t = Object.assign(
              {
                DataTrackSender: a,
                maxPacketLifeTime: null,
                maxRetransmits: null,
                ordered: !0,
              },
              t
            )).DataTrackSender)(
              t.maxPacketLifeTime,
              t.maxRetransmits,
              t.ordered
            );
          return (
            (n = e.call(this, r.id, "data", t) || this),
            Object.defineProperties(n, {
              _trackSender: { value: r },
              id: { enumerable: !0, value: r.id },
              maxPacketLifeTime: { enumerable: !0, value: t.maxPacketLifeTime },
              maxRetransmits: { enumerable: !0, value: t.maxRetransmits },
              ordered: { enumerable: !0, value: t.ordered },
              reliable: {
                enumerable: !0,
                value:
                  null === t.maxPacketLifeTime && null === t.maxRetransmits,
              },
            }),
            n
          );
        }
        return (
          i(t, e),
          (t.prototype.send = function (e) {
            this._trackSender.send(e);
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(70),
      a = n(1).makeUUID,
      s = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, a(), t, n, r) || this;
          return (
            Object.defineProperties(i, {
              _clones: { value: new Set() },
              _dataChannels: { value: new Set() },
            }),
            i
          );
        }
        return (
          i(t, e),
          (t.prototype._addClone = function (e) {
            this._clones.add(e);
          }),
          (t.prototype.removeClone = function (e) {
            this._clones.delete(e);
          }),
          (t.prototype.addDataChannel = function (e) {
            return this._dataChannels.add(e), this;
          }),
          (t.prototype.clone = function () {
            var e = this,
              n = new t(
                this.maxPacketLifeTime,
                this.maxRetransmits,
                this.ordered
              );
            return (
              this._addClone(n),
              n.once("stopped", function () {
                return e.removeClone(n);
              }),
              n
            );
          }),
          (t.prototype.removeDataChannel = function (e) {
            return this._dataChannels.delete(e), this;
          }),
          (t.prototype.send = function (e) {
            return (
              this._dataChannels.forEach(function (t) {
                try {
                  t.send(e);
                } catch (e) {}
              }),
              this._clones.forEach(function (t) {
                try {
                  t.send(e);
                } catch (e) {}
              }),
              this
            );
          }),
          (t.prototype.stop = function () {
            this._dataChannels.forEach(function (e) {
              return e.close();
            }),
              this._clones.forEach(function (e) {
                return e.stop();
              }),
              e.prototype.stop.call(this);
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.runPreflight = t.PreflightTest = void 0);
    var c = n(2),
      u = n(144),
      l = n(145),
      d = n(146),
      p = n(147),
      f = n(150),
      h = n(151),
      v = n(152),
      _ = n(1),
      m = n(2).WS_SERVER,
      y = n(8),
      g = n(24),
      b = n(73),
      w = n(74),
      k = n(75),
      S = n(53),
      T = S.createSID,
      O = S.sessionSID,
      P = n(9),
      C = P.SignalingConnectionTimeoutError,
      E = P.MediaConnectionError,
      R = "mediaAcquired",
      x = "connected",
      j = "mediaSubscribed",
      L = "mediaStarted",
      A = "dtlsConnected",
      D = "peerConnectionConnected",
      I = "iceConnected";
    function M(e) {
      return null != e;
    }
    var N = 0,
      V = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          (r._testTiming = new u.Timer()),
            (r._dtlsTiming = new u.Timer()),
            (r._iceTiming = new u.Timer()),
            (r._peerConnectionTiming = new u.Timer()),
            (r._mediaTiming = new u.Timer()),
            (r._connectTiming = new u.Timer()),
            (r._sentBytesMovingAverage = new b()),
            (r._packetLossMovingAverage = new b()),
            (r._progressEvents = []),
            (r._receivedBytesMovingAverage = new b());
          var i = n,
            o = i.environment,
            a = void 0 === o ? "prod" : o,
            s = i.region,
            l = void 0 === s ? "gll" : s,
            d = i.duration,
            p = void 0 === d ? 1e4 : d,
            f = i.wsServer || m(a, l);
          return (
            (r._log = new y(
              "default",
              r,
              c.DEFAULT_LOG_LEVEL,
              c.DEFAULT_LOGGER_NAME
            )),
            (r._testDuration = p),
            (r._instanceId = N++),
            r._testTiming.start(),
            r._runPreflightTest(t, a, f),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return "[Preflight #" + this._instanceId + "]";
          }),
          (t.prototype.stop = function () {
            this._stopped = !0;
          }),
          (t.prototype._generatePreflightReport = function (e) {
            return (
              this._testTiming.stop(),
              {
                testTiming: this._testTiming.getTimeMeasurement(),
                networkTiming: {
                  dtls: this._dtlsTiming.getTimeMeasurement(),
                  ice: this._iceTiming.getTimeMeasurement(),
                  peerConnection:
                    this._peerConnectionTiming.getTimeMeasurement(),
                  connect: this._connectTiming.getTimeMeasurement(),
                  media: this._mediaTiming.getTimeMeasurement(),
                },
                stats: {
                  jitter: f.makeStat(null == e ? void 0 : e.jitter),
                  rtt: f.makeStat(null == e ? void 0 : e.rtt),
                  packetLoss: f.makeStat(null == e ? void 0 : e.packetLoss),
                },
                selectedIceCandidatePairStats: e
                  ? e.selectedIceCandidatePairStats
                  : null,
                iceCandidateStats: e ? e.iceCandidateStats : [],
                progressEvents: this._progressEvents,
                mos: f.makeStat(null == e ? void 0 : e.mos),
              }
            );
          }),
          (t.prototype._executePreflightStep = function (e, t, n) {
            return a(this, void 0, void 0, function () {
              var r, i, o, a;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (
                      (this._log.debug("Executing step: ", e),
                      (r = this._testDuration + 1e4),
                      this._stopped)
                    )
                      throw new Error("stopped");
                    (i = Promise.resolve().then(t)),
                      (o = null),
                      (a = new Promise(function (t, i) {
                        o = setTimeout(function () {
                          i(n || new Error(e + " timeout."));
                        }, r);
                      })),
                      (s.label = 1);
                  case 1:
                    return s.trys.push([1, , 3, 4]), [4, Promise.race([a, i])];
                  case 2:
                    return [2, s.sent()];
                  case 3:
                    return null !== o && clearTimeout(o), [7];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (t.prototype._collectNetworkTimings = function (e) {
            var t = this;
            return new Promise(function (n) {
              var r;
              e.addEventListener("iceconnectionstatechange", function () {
                "checking" === e.iceConnectionState && t._iceTiming.start(),
                  "connected" === e.iceConnectionState &&
                    (t._iceTiming.stop(),
                    t._updateProgress(I),
                    (!r || (r && "connected" === r.state)) && n());
              }),
                e.addEventListener("connectionstatechange", function () {
                  "connecting" === e.connectionState &&
                    t._peerConnectionTiming.start(),
                    "connected" === e.connectionState &&
                      (t._peerConnectionTiming.stop(), t._updateProgress(D));
                });
              var i = e
                .getSenders()
                .map(function (e) {
                  return e.transport;
                })
                .find(M);
              void 0 !== i &&
                (r = i).addEventListener("statechange", function () {
                  "connecting" === r.state && t._dtlsTiming.start(),
                    "connected" === r.state &&
                      (t._dtlsTiming.stop(),
                      t._updateProgress(A),
                      "connected" === e.iceConnectionState && n());
                });
            });
          }),
          (t.prototype._setupInsights = function (e) {
            var t = e.token,
              n = e.environment,
              r = void 0 === n ? c.DEFAULT_ENVIRONMENT : n,
              i = e.realm,
              o = void 0 === i ? c.DEFAULT_REALM : i,
              a = new k(t, c.SDK_NAME, c.SDK_VERSION, r, o, {});
            a.connect("PREFLIGHT_ROOM_SID", "PREFLIGHT_PARTICIPANT");
            var s = new w(a, Date.now(), this._log);
            return {
              reportToInsights: function (e) {
                var t,
                  n,
                  r = e.report,
                  i = r.stats.jitter || void 0,
                  o = r.stats.rtt || void 0,
                  c = r.stats.packetLoss || void 0,
                  u = r.mos || void 0,
                  l = new Map();
                r.iceCandidateStats.forEach(function (e) {
                  if (e.candidateType && e.protocol) {
                    var t = l.get(e.candidateType) || [];
                    t.indexOf(e.protocol) < 0 && t.push(e.protocol),
                      l.set(e.candidateType, t);
                  }
                });
                var d = JSON.stringify(Object.fromEntries(l)),
                  p = {
                    name: "report",
                    group: "preflight",
                    level: r.error ? "error" : "info",
                    payload: {
                      sessionSID: O,
                      preflightSID: T("PF"),
                      progressEvents: JSON.stringify(r.progressEvents),
                      testTiming: r.testTiming,
                      dtlsTiming: r.networkTiming.dtls,
                      iceTiming: r.networkTiming.ice,
                      peerConnectionTiming: r.networkTiming.peerConnection,
                      connectTiming: r.networkTiming.connect,
                      mediaTiming: r.networkTiming.media,
                      selectedLocalCandidate:
                        null === (t = r.selectedIceCandidatePairStats) ||
                        void 0 === t
                          ? void 0
                          : t.localCandidate,
                      selectedRemoteCandidate:
                        null === (n = r.selectedIceCandidatePairStats) ||
                        void 0 === n
                          ? void 0
                          : n.remoteCandidate,
                      iceCandidateStats: d,
                      jitterStats: i,
                      rttStats: o,
                      packetLossStats: c,
                      mosStats: u,
                      error: r.error,
                    },
                  };
                s.emit("event", p),
                  setTimeout(function () {
                    return a.disconnect();
                  }, 2e3);
              },
            };
          }),
          (t.prototype._runPreflightTest = function (e, t, n) {
            return a(this, void 0, void 0, function () {
              var r,
                i,
                c,
                u,
                l,
                d,
                f,
                _,
                m,
                y,
                g,
                b,
                w = this;
              return s(this, function (k) {
                switch (k.label) {
                  case 0:
                    (r = []),
                      (i = []),
                      (c = this._setupInsights({
                        token: e,
                        environment: t,
                      }).reportToInsights),
                      (k.label = 1);
                  case 1:
                    return (
                      k.trys.push([1, 8, 9, 10]),
                      (u = []),
                      [
                        4,
                        this._executePreflightStep(
                          "Acquire media",
                          function () {
                            return [
                              h.syntheticAudio(),
                              v.syntheticVideo({ width: 640, height: 480 }),
                            ];
                          }
                        ),
                      ]
                    );
                  case 2:
                    return (
                      (r = k.sent()),
                      this._updateProgress(R),
                      this.emit("debug", { localTracks: r }),
                      this._connectTiming.start(),
                      [
                        4,
                        this._executePreflightStep(
                          "Get turn credentials",
                          function () {
                            return p.getTurnCredentials(e, n);
                          },
                          new C()
                        ),
                      ]
                    );
                  case 3:
                    return (
                      (l = k.sent()),
                      this._connectTiming.stop(),
                      this._updateProgress(x),
                      (d = new RTCPeerConnection({
                        iceServers: l,
                        iceTransportPolicy: "relay",
                        bundlePolicy: "max-bundle",
                      })),
                      (f = new RTCPeerConnection({
                        iceServers: l,
                        bundlePolicy: "max-bundle",
                      })),
                      i.push(d),
                      i.push(f),
                      this._mediaTiming.start(),
                      [
                        4,
                        this._executePreflightStep(
                          "Setup Peer Connections",
                          function () {
                            return a(w, void 0, void 0, function () {
                              var e, t, n, i;
                              return s(this, function (o) {
                                switch (o.label) {
                                  case 0:
                                    return (
                                      d.addEventListener(
                                        "icecandidate",
                                        function (e) {
                                          return (
                                            e.candidate &&
                                            f.addIceCandidate(e.candidate)
                                          );
                                        }
                                      ),
                                      f.addEventListener(
                                        "icecandidate",
                                        function (e) {
                                          return (
                                            e.candidate &&
                                            d.addIceCandidate(e.candidate)
                                          );
                                        }
                                      ),
                                      r.forEach(function (e) {
                                        return d.addTrack(e);
                                      }),
                                      (e = new Promise(function (e) {
                                        var t = [];
                                        f.addEventListener(
                                          "track",
                                          function (n) {
                                            t.push(n.track),
                                              t.length === r.length && e(t);
                                          }
                                        );
                                      })),
                                      [4, d.createOffer()]
                                    );
                                  case 1:
                                    return (
                                      (t = o.sent()),
                                      (n = t),
                                      [4, d.setLocalDescription(n)]
                                    );
                                  case 2:
                                    return (
                                      o.sent(), [4, f.setRemoteDescription(n)]
                                    );
                                  case 3:
                                    return o.sent(), [4, f.createAnswer()];
                                  case 4:
                                    return (
                                      (i = o.sent()),
                                      [4, f.setLocalDescription(i)]
                                    );
                                  case 5:
                                    return (
                                      o.sent(), [4, d.setRemoteDescription(i)]
                                    );
                                  case 6:
                                    return (
                                      o.sent(),
                                      [4, this._collectNetworkTimings(d)]
                                    );
                                  case 7:
                                    return o.sent(), [2, e];
                                }
                              });
                            });
                          },
                          new E()
                        ),
                      ]
                    );
                  case 4:
                    return (
                      (_ = k.sent()),
                      this.emit("debug", { remoteTracks: _ }),
                      _.forEach(function (e) {
                        e.addEventListener("ended", function () {
                          return w._log.warn(e.kind + ":ended");
                        }),
                          e.addEventListener("mute", function () {
                            return w._log.warn(e.kind + ":muted");
                          }),
                          e.addEventListener("unmute", function () {
                            return w._log.warn(e.kind + ":unmuted");
                          });
                      }),
                      this._updateProgress(j),
                      [
                        4,
                        this._executePreflightStep(
                          "Wait for tracks to start",
                          function () {
                            return new Promise(function (e) {
                              var t = document.createElement("video");
                              (t.autoplay = !0),
                                (t.playsInline = !0),
                                (t.muted = !0),
                                (t.srcObject = new MediaStream(_)),
                                u.push(t),
                                w.emit("debugElement", t),
                                (t.oncanplay = e);
                            });
                          },
                          new E()
                        ),
                      ]
                    );
                  case 5:
                    return (
                      k.sent(),
                      this._mediaTiming.stop(),
                      this._updateProgress(L),
                      [
                        4,
                        this._executePreflightStep(
                          "Collect stats for duration",
                          function () {
                            return w._collectRTCStatsForDuration(
                              w._testDuration,
                              {
                                mos: [],
                                jitter: [],
                                rtt: [],
                                outgoingBitrate: [],
                                incomingBitrate: [],
                                packetLoss: [],
                                selectedIceCandidatePairStats: null,
                                iceCandidateStats: [],
                              },
                              d,
                              f
                            );
                          }
                        ),
                      ]
                    );
                  case 6:
                    return (
                      (m = k.sent()),
                      [
                        4,
                        this._executePreflightStep(
                          "Generate report",
                          function () {
                            return w._generatePreflightReport(m);
                          }
                        ),
                      ]
                    );
                  case 7:
                    return (
                      (y = k.sent()),
                      c({ report: y }),
                      this.emit("completed", y),
                      [3, 10]
                    );
                  case 8:
                    return (
                      (g = k.sent()),
                      (b = this._generatePreflightReport()),
                      c({
                        report: o(o({}, b), {
                          error: null == g ? void 0 : g.toString(),
                        }),
                      }),
                      this.emit("failed", g, b),
                      [3, 10]
                    );
                  case 9:
                    return (
                      i.forEach(function (e) {
                        return e.close();
                      }),
                      r.forEach(function (e) {
                        return e.stop();
                      }),
                      [7]
                    );
                  case 10:
                    return [2];
                }
              });
            });
          }),
          (t.prototype._collectRTCStats = function (e, t, n) {
            return a(this, void 0, void 0, function () {
              var r, i, o, a, c, u, p, f, h, v, _, m, y, g;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [
                      4,
                      d.getCombinedConnectionStats({
                        publisher: t,
                        subscriber: n,
                      }),
                    ];
                  case 1:
                    return (
                      (r = s.sent()),
                      (i = r.timestamp),
                      (o = r.bytesSent),
                      (a = r.bytesReceived),
                      (c = r.packets),
                      (u = r.packetsLost),
                      (p = r.roundTripTime),
                      (f = r.jitter),
                      (h = r.selectedIceCandidatePairStats),
                      (v = r.iceCandidateStats),
                      (_ = e.jitter.length > 0),
                      e.jitter.push(f),
                      e.rtt.push(p),
                      this._sentBytesMovingAverage.putSample(o, i),
                      this._receivedBytesMovingAverage.putSample(a, i),
                      this._packetLossMovingAverage.putSample(u, c),
                      _ &&
                        (e.outgoingBitrate.push(
                          1e3 * this._sentBytesMovingAverage.get() * 8
                        ),
                        e.incomingBitrate.push(
                          1e3 * this._receivedBytesMovingAverage.get() * 8
                        ),
                        (m = this._packetLossMovingAverage.get()),
                        (y = Math.min(100, 100 * m)),
                        e.packetLoss.push(y),
                        (g = l.calculateMOS(p, f, m)),
                        e.mos.push(g)),
                      e.selectedIceCandidatePairStats ||
                        (e.selectedIceCandidatePairStats = h),
                      0 === e.iceCandidateStats.length &&
                        (e.iceCandidateStats = v),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype._collectRTCStatsForDuration = function (e, t, n, r) {
            return a(this, void 0, void 0, function () {
              var i, o, a;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (i = Date.now()),
                      (o = Math.min(1e3, e)),
                      [4, _.waitForSometime(o)]
                    );
                  case 1:
                    return s.sent(), [4, this._collectRTCStats(t, n, r)];
                  case 2:
                    return (
                      s.sent(),
                      (a = e - (Date.now() - i)) > 0
                        ? [4, this._collectRTCStatsForDuration(a, t, n, r)]
                        : [3, 4]
                    );
                  case 3:
                    (t = s.sent()), (s.label = 4);
                  case 4:
                    return [2, t];
                }
              });
            });
          }),
          (t.prototype._updateProgress = function (e) {
            var t = Date.now() - this._testTiming.getTimeMeasurement().start;
            this._progressEvents.push({ duration: t, name: e }),
              this.emit("progress", e);
          }),
          t
        );
      })(g);
    (t.PreflightTest = V),
      (t.runPreflight = function (e, t) {
        return void 0 === t && (t = {}), new V(e, t);
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Timer = void 0);
    var r = (function () {
      function e() {
        (this._end = void 0), this.start();
      }
      return (
        (e.prototype.start = function () {
          return (this._start = Date.now()), this;
        }),
        (e.prototype.stop = function () {
          return (this._end = Date.now()), this;
        }),
        (e.prototype.getTimeMeasurement = function () {
          return {
            start: this._start,
            end: this._end,
            duration: void 0 === this._end ? void 0 : this._end - this._start,
          };
        }),
        e
      );
    })();
    t.Timer = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.mosToScore = t.calculateMOS = void 0);
    (t.calculateMOS = function (e, t, n) {
      var r = e + 2 * t + 10,
        i = 0;
      switch (!0) {
        case r < 160:
          i = 94.768 - r / 40;
          break;
        case r < 1e3:
          i = 94.768 - (r - 120) / 10;
      }
      switch (!0) {
        case n <= i / 2.5:
          i = Math.max(i - 2.5 * n, 6.52);
          break;
        default:
          i = 0;
      }
      return 1 + 0.035 * i + 7e-6 * i * (i - 60) * (100 - i);
    }),
      (t.mosToScore = function (e) {
        return e ? (e > 4.2 ? 5 : e > 4 ? 4 : e > 3.6 ? 3 : e > 3 ? 2 : 1) : 0;
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
      i =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        },
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        };
    function a(e, t, n, r) {
      var i = [];
      return (
        e.forEach(function (e) {
          (0 !== r.length && !r.includes(e.type)) ||
            (0 !== n.length && !n.includes(e.kind)) ||
            "number" != typeof e[t] ||
            i.push(e[t]);
        }),
        i
      );
    }
    function s(e) {
      return [
        { key: "transportId", type: "string" },
        { key: "candidateType", type: "string" },
        { key: "port", altKeys: ["portNumber"], type: "number" },
        { key: "address", altKeys: ["ip", "ipAddress"], type: "string" },
        { key: "priority", type: "number" },
        { key: "protocol", altKeys: ["transport"], type: "string" },
        { key: "url", type: "string" },
        { key: "relayProtocol", type: "string" },
      ].reduce(function (t, n) {
        var r = [n.key];
        n.altKeys && (r = r.concat(n.altKeys));
        var i = r.find(function (t) {
          return t in e;
        });
        return i && typeof e[i] === n.type && (t[n.key] = e[i]), t;
      }, {});
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getCombinedConnectionStats = void 0),
      (t.getCombinedConnectionStats = function (e) {
        var t = e.publisher,
          n = e.subscriber;
        return r(this, void 0, void 0, function () {
          var e, r, c, u, l, d, p, f, h, v, _, m, y, g, b;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  Promise.all(
                    [t, n].map(function (e) {
                      return e.getStats();
                    })
                  ),
                ];
              case 1:
                return (
                  (e = o.apply(void 0, [i.sent(), 2])),
                  (r = e[0]),
                  (c = e[1]),
                  (u = a(c, "timestamp", ["audio"], ["inbound-rtp"])),
                  (l = u.length > 0 ? u[0] : 0),
                  (d = a(c, "jitter", ["audio"], ["inbound-rtp"]).reduce(
                    function (e, t) {
                      return Math.max(e, t);
                    },
                    0
                  )),
                  (p = a(
                    c,
                    "packetsReceived",
                    ["audio", "video"],
                    ["inbound-rtp"]
                  ).reduce(function (e, t) {
                    return e + t;
                  }, 0)),
                  (f = a(
                    c,
                    "packetsLost",
                    ["audio", "video"],
                    ["inbound-rtp"]
                  ).reduce(function (e, t) {
                    return e + t;
                  }, 0)),
                  (h = a(
                    r,
                    "roundTripTime",
                    ["audio", "video"],
                    ["remote-inbound-rtp"]
                  ).reduce(function (e, t) {
                    return Math.max(e, t);
                  }, 0)),
                  (v = a(
                    c,
                    "currentRoundTripTime",
                    [],
                    ["candidate-pair"]
                  ).reduce(function (e, t) {
                    return Math.max(e, t);
                  }, 0)),
                  (_ = 1e3 * (v || h)),
                  (m = a(r, "bytesSent", [], ["candidate-pair"]).reduce(
                    function (e, t) {
                      return e + t;
                    },
                    0
                  )),
                  (y = a(c, "bytesReceived", [], ["candidate-pair"]).reduce(
                    function (e, t) {
                      return e + t;
                    },
                    0
                  )),
                  (g = (function (e) {
                    var t = null,
                      n = [];
                    e.forEach(function (e) {
                      "transport" === e.type && e.selectedCandidatePairId
                        ? (t = e.selectedCandidatePairId)
                        : "candidate-pair" === e.type && n.push(e);
                    });
                    var r = n.find(function (e) {
                      return e.selected || (t && e.id === t);
                    });
                    if (!r) return null;
                    var i = r,
                      o = e.get(i.localCandidateId),
                      a = e.get(i.remoteCandidateId);
                    if (!o || !a) return null;
                    return { localCandidate: s(o), remoteCandidate: s(a) };
                  })(c)),
                  (b = []),
                  c.forEach(function (e) {
                    ("local-candidate" !== e.type &&
                      "remote-candidate" !== e.type) ||
                      b.push(s(e));
                  }),
                  [
                    2,
                    {
                      timestamp: l,
                      jitter: d,
                      packets: p,
                      packetsLost: f,
                      roundTripTime: _,
                      bytesSent: m,
                      bytesReceived: y,
                      selectedIceCandidatePairStats: g,
                      iceCandidateStats: b,
                    },
                  ]
                );
            }
          });
        });
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getTurnCredentials = void 0);
    var r = n(71),
      i = n(2).ICE_VERSION,
      o = n(9),
      a = o.createTwilioError,
      s = o.SignalingConnectionError,
      c = n(4);
    t.getTurnCredentials = function (e, t) {
      return new Promise(function (n, o) {
        var u = new c.EventEmitter(),
          l = new r(t, {
            networkMonitor: null,
            eventObserver: u,
            helloBody: {
              edge: "roaming",
              preflight: !0,
              token: e,
              type: "ice",
              version: i,
            },
          }),
          d = !1;
        l.once("close", function () {
          d || ((d = !0), o(new s()));
        }),
          l.on("message", function (e) {
            var t = e.code,
              r = e.message,
              i = e.ice_servers,
              s = e.type;
            ("iced" !== s && "error" !== s) ||
              d ||
              ((d = !0), "iced" === s ? n(i) : o(a(t, r)), l.close());
          });
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = (function () {
      function e(e, t) {
        var n = this,
          r = (t = Object.assign({ navigator: navigator, window: window }, t))
            .navigator,
          i = r.connection || { type: null },
          o = i.type,
          a = i.type
            ? {
                _events: { value: ["change", "typechange"] },
                _listener: {
                  value: function () {
                    var t = o !== n.type && n.isOnline;
                    (o = n.type), t && e();
                  },
                },
                _target: { value: i },
              }
            : {
                _events: { value: ["online"] },
                _listener: { value: e },
                _target: { value: t.window },
              },
          s = a._events,
          c = a._listener,
          u = a._target;
        Object.defineProperties(this, {
          isOnline: {
            enumerable: !0,
            get: function () {
              return "boolean" != typeof r.onLine || r.onLine;
            },
          },
          type: {
            enumerable: !0,
            get: function () {
              return i.type || null;
            },
          },
          _listener: c,
          _events: s,
          _target: u,
        });
      }
      return (
        (e.prototype.start = function () {
          var e = this;
          this._events.forEach(function (t) {
            e._target.addEventListener(t, e._listener);
          });
        }),
        (e.prototype.stop = function () {
          var e = this;
          this._events.forEach(function (t) {
            e._target.removeEventListener(t, e._listener);
          });
        }),
        e
      );
    })();
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = (function (e) {
        function t(n) {
          var r = this,
            i = [].slice.call(arguments, 1);
          (r = e.apply(this, a([], o(i))) || this),
            Object.setPrototypeOf(r, t.prototype);
          var s = Error.apply(r, i);
          return (
            (s.name = "TwilioError"),
            Object.defineProperty(r, "code", { value: n, enumerable: !0 }),
            Object.getOwnPropertyNames(s).forEach(function (e) {
              Object.defineProperty(this, e, { value: s[e], enumerable: !0 });
            }, r),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            var e = this.message ? ": " + this.message : "";
            return this.name + " " + this.code + e;
          }),
          t
        );
      })(Error);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      i =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.makeStat = void 0),
      (t.makeStat = function (e) {
        return e && e.length
          ? {
              min: Math.min.apply(Math, i([], r(e))),
              max: Math.max.apply(Math, i([], r(e))),
              average:
                e.reduce(function (e, t) {
                  return e + t;
                }, 0) / e.length,
            }
          : null;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.syntheticAudio = void 0),
      (t.syntheticAudio = function () {
        var e = n(28),
          t = {},
          r = e.getOrCreate(t),
          i = r.createOscillator(),
          o = i.connect(r.createMediaStreamDestination());
        i.start();
        var a = o.stream.getAudioTracks()[0],
          s = a.stop;
        return (
          (a.stop = function () {
            s.call(a), e.release(t);
          }),
          a
        );
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.syntheticVideo = void 0),
      (t.syntheticVideo = function (e) {
        var t = void 0 === e ? {} : e,
          n = t.width,
          r = void 0 === n ? 640 : n,
          i = t.height,
          o = void 0 === i ? 480 : i,
          a = Object.assign(document.createElement("canvas"), {
            width: r,
            height: o,
          }),
          s = a.getContext("2d");
        (s.fillStyle = "green"), s.fillRect(0, 0, a.width, a.height);
        var c = !1;
        requestAnimationFrame(function e() {
          if (!c) {
            var t = Math.round(255 * Math.random()),
              n = Math.round(255 * Math.random()),
              i = Math.round(255 * Math.random()),
              a = Math.round(255 * Math.random());
            (s.fillStyle = "rgba(" + t + ", " + n + ", " + i + ", " + a + ")"),
              s.fillRect(Math.random() * r, Math.random() * o, 50, 50),
              requestAnimationFrame(e);
          }
        });
        var u = a.captureStream(30).getTracks()[0],
          l = u.stop;
        return (
          (u.stop = function () {
            (c = !0), l.call(u);
          }),
          u
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(13).MediaStreamTrack,
      i = n(3),
      o = i.guessBrowser,
      a = i.guessBrowserVersion,
      s = n(154),
      c = n(155),
      u = n(156),
      l = n(75),
      d = n(167),
      p = n(18),
      f = p.LocalAudioTrack,
      h = p.LocalDataTrack,
      v = p.LocalVideoTrack,
      _ = n(168),
      m = n(169),
      y = n(175),
      g = n(1),
      b = g.asLocalTrack,
      w = g.buildLogLevels,
      k = g.filterObject,
      S = g.isNonArrayObject,
      T = n(2),
      O = T.DEFAULT_ENVIRONMENT,
      P = T.DEFAULT_LOG_LEVEL,
      C = T.DEFAULT_LOGGER_NAME,
      E = T.DEFAULT_REALM,
      R = T.DEFAULT_REGION,
      x = T.WS_SERVER,
      j = T.SDK_NAME,
      L = T.SDK_VERSION,
      A = T.typeErrors,
      D = n(35),
      I = n(74),
      M = n(8),
      N = n(76).validateBandwidthProfile,
      V = "safari" === o() && a(),
      F = 0,
      B = !1,
      U = !1;
    if (V) {
      var H = V.major,
        W = V.minor;
      U = H < 12 || (12 === H && W < 1);
    }
    var Q = new Set([
        { didWarn: !1, shouldDelete: !0, name: "abortOnIceServersTimeout" },
        {
          didWarn: !1,
          shouldDelete: !0,
          name: "dscpTagging",
          newName: "enableDscp",
        },
        { didWarn: !1, shouldDelete: !0, name: "iceServersTimeout" },
        {
          didWarn: !1,
          shouldDelete: !1,
          name: "eventListener",
          newName: "Video.Logger",
        },
        {
          didWarn: !1,
          shouldDelete: !1,
          name: "logLevel",
          newName: "Video.Logger",
        },
      ]),
      q = new Set([
        {
          didWarn: !1,
          shouldDelete: !1,
          name: "maxTracks",
          newName: "bandwidthProfile.video.clientTrackSwitchOffControl",
        },
        {
          didWarn: !1,
          shouldDelete: !1,
          name: "renderDimensions",
          newName: "bandwidthProfile.video.contentPreferencesMode",
        },
      ]);
    function G(e, t, n) {
      n.forEach(function (n) {
        var r = n.didWarn,
          i = n.name,
          o = n.newName,
          a = n.shouldDelete;
        i in e &&
          void 0 !== e[i] &&
          (o && a && (e[o] = e[i]),
          a && delete e[i],
          r ||
            ["error", "off"].includes(t.level) ||
            (t.warn(
              'The ConnectOptions "' +
                i +
                '" is ' +
                (o
                  ? 'deprecated and scheduled for removal. Please use "' +
                    o +
                    '" instead.'
                  : "no longer applicable and will be ignored.")
            ),
            (n.didWarn = !0)));
      });
    }
    function z(e, t, n, r, i, o) {
      var a = e.createLocalParticipantSignaling(n, r);
      return (
        t.debug("Creating a new LocalParticipant:", a),
        new i.LocalParticipant(a, o, i)
      );
    }
    function K(e, t, n) {
      var r = new m(t, n, e),
        i = e.log;
      return (
        i.debug("Creating a new Room:", r),
        n.on("stateChanged", function e(t) {
          "disconnected" === t &&
            (i.info("Disconnected from Room:", r.toString()),
            n.removeListener("stateChanged", e));
        }),
        r
      );
    }
    function Y(e, t, n, r, i, o) {
      return (
        t.log.debug("Creating a new RoomSignaling"),
        n.connect(o._signaling, e, r, i, t)
      );
    }
    function $(e, t) {
      var n = e.log;
      return (
        (e.shouldStopLocalTracks = !e.tracks),
        e.shouldStopLocalTracks
          ? n.info(
              "LocalTracks were not provided, so they will be acquired automatically before connecting to the Room. LocalTracks will be released if connecting to the Room fails or if the Room is disconnected"
            )
          : (n.info("Getting LocalTracks"), n.debug("Options:", e)),
        e.createLocalTracks(e).then(function (r) {
          var i = t(r);
          return (
            i.catch(function () {
              e.shouldStopLocalTracks &&
                (n.info(
                  "The automatically acquired LocalTracks will now be stopped"
                ),
                r.forEach(function (e) {
                  e.stop();
                }));
            }),
            i
          );
        })
      );
    }
    function J(e) {
      var t = "string" == typeof e ? { codec: e } : e;
      switch (t.codec.toLowerCase()) {
        case "opus":
          return Object.assign({ dtx: !0 }, t);
        case "vp8":
          return Object.assign({ simulcast: !1 }, t);
        default:
          return t;
      }
    }
    e.exports = function (e, t) {
      if ((void 0 === t && (t = {}), !S(t)))
        return D.reject(A.INVALID_TYPE("options", "object"));
      var n,
        i = t.Log || M,
        o = t.loggerName || C,
        a = t.logLevel || P,
        p = w(a),
        m = "[connect #" + ++F + "]";
      try {
        n = new i("default", m, p, o);
      } catch (Z) {
        return D.reject(Z);
      }
      G(t, n, Q);
      var g = "auto" === t.preferredVideoCodecs;
      if (
        (g &&
          (t.preferredVideoCodecs = [
            { codec: "VP8", simulcast: !0, adaptiveSimulcast: !0 },
          ]),
        t.maxVideoBitrate && g)
      )
        return (
          n.error(
            'ConnectOptions "maxVideoBitrate" is not compatible with "preferredVideoCodecs=auto"'
          ),
          D.reject(
            A.ILLEGAL_INVOKE(
              "connect",
              'ConnectOptions "maxVideoBitrate" is not compatible with "preferredVideoCodecs=auto"'
            )
          )
        );
      var T = {};
      "string" ==
        typeof (t = Object.assign(
          {
            automaticSubscription: !0,
            dominantSpeaker: !1,
            enableDscp: !1,
            environment: O,
            eventListener: null,
            insights: !0,
            LocalAudioTrack: f,
            LocalDataTrack: h,
            LocalParticipant: u,
            LocalVideoTrack: v,
            Log: i,
            MediaStreamTrack: r,
            loggerName: o,
            logLevel: a,
            maxAudioBitrate: null,
            maxVideoBitrate: null,
            name: null,
            networkMonitor: !0,
            networkQuality: !1,
            preferredAudioCodecs: [],
            preferredVideoCodecs: [],
            realm: E,
            region: R,
            signaling: y,
          },
          k(t)
        )).wsServerInsights && (T.gateway = t.wsServerInsights);
      var V = new (t.insights ? l : d)(e, j, L, t.environment, t.realm, T),
        H = x(t.environment, t.region),
        W = new I(V, Date.now(), n, t.eventListener);
      if (
        (((t = Object.assign({ eventObserver: W, wsServer: H }, t)).log = n),
        U &&
          !B &&
          "error" !== n.logLevel &&
          "off" !== n.logLevel &&
          ((B = !0),
          n.warn(
            [
              "Support for Safari 12.0 and below is limited because it does not support VP8.",
              "This means you may experience codec issues in Group Rooms. You may also",
              "experience codec issues in Peer-to-Peer (P2P) Rooms containing Android- or",
              "iOS-based Participants who do not support H.264. However, P2P Rooms",
              "with browser-based Participants should work. For more information, please",
              "refer to this guide: https://www.twilio.com/docs/video/javascript-v2-developing-safari-11",
            ].join(" ")
          )),
        "string" != typeof e)
      )
        return D.reject(A.INVALID_TYPE("token", "string"));
      var X = Object.assign({}, t);
      if ((delete X.name, "tracks" in t)) {
        if (!Array.isArray(t.tracks))
          return D.reject(
            A.INVALID_TYPE(
              "options.tracks",
              "Array of LocalAudioTrack, LocalVideoTrack or MediaStreamTrack"
            )
          );
        try {
          t.tracks = t.tracks.map(function (e) {
            return b(e, X);
          });
        } catch (Z) {
          return D.reject(Z);
        }
      }
      var Z = N(t.bandwidthProfile);
      if (Z) return D.reject(Z);
      (t.clientTrackSwitchOffControl = "disabled"),
        (t.contentPreferencesMode = "disabled"),
        t.bandwidthProfile &&
          ((t.clientTrackSwitchOffControl = "auto"),
          (t.contentPreferencesMode = "auto"),
          t.bandwidthProfile.video &&
            (G(t.bandwidthProfile.video, n, q),
            "maxTracks" in t.bandwidthProfile.video
              ? (t.clientTrackSwitchOffControl = "disabled")
              : "manual" ===
                t.bandwidthProfile.video.clientTrackSwitchOffControl
              ? (t.clientTrackSwitchOffControl = "manual")
              : (t.clientTrackSwitchOffControl = "auto"),
            "renderDimensions" in t.bandwidthProfile.video
              ? (t.contentPreferencesMode = "disabled")
              : "manual" === t.bandwidthProfile.video.contentPreferencesMode
              ? (t.contentPreferencesMode = "manual")
              : (t.contentPreferencesMode = "auto")));
      var ee = new (0, t.signaling)(t.wsServer, t);
      n.info("Connecting to a Room"), n.debug("Options:", t);
      var te = new c(
          {
            maxAudioBitrate: t.maxAudioBitrate,
            maxVideoBitrate: t.maxVideoBitrate,
          },
          g
        ),
        ne = {
          audio: t.preferredAudioCodecs.map(J),
          video: t.preferredVideoCodecs.map(J),
        },
        re = new _(S(t.networkQuality) ? t.networkQuality : {}),
        ie = s(
          $.bind(null, t),
          z.bind(null, ee, n, te, re, t),
          Y.bind(null, e, t, ee, te, ne),
          K.bind(null, t)
        );
      return (
        ie.then(
          function (e) {
            return (
              V.connect(e.sid, e.localParticipant.sid),
              n.info("Connected to Room:", e.toString()),
              n.info("Room name:", e.name),
              n.debug("Room:", e),
              e.once("disconnected", function () {
                return V.disconnect();
              }),
              e
            );
          },
          function (e) {
            V.disconnect(),
              ie._isCanceled
                ? n.info("Attempt to connect to a Room was canceled")
                : n.info("Error while connecting to a Room:", e);
          }
        ),
        ie
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(35);
    e.exports = function (e, t, n, i) {
      var o,
        a = new Error("Canceled");
      return new r(
        function (s, c, u) {
          var l;
          e(function (e) {
            return u()
              ? r.reject(a)
              : ((l = t(e)),
                n(l).then(function (e) {
                  if (u()) throw a;
                  return (o = e());
                }));
          })
            .then(function (e) {
              if (u()) throw (e.disconnect(), a);
              s(i(l, e));
            })
            .catch(function (e) {
              c(e);
            });
        },
        function () {
          o && o.cancel();
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            (t = Object.assign(
              { maxAudioBitrate: null, maxVideoBitrate: null },
              t
            )),
            Object.defineProperties(r, {
              maxAudioBitrate: { value: t.maxAudioBitrate, writable: !0 },
              maxVideoBitrate: { value: t.maxVideoBitrate, writable: !0 },
              adaptiveSimulcast: { value: n },
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.toJSON = function () {
            return {
              maxAudioBitrate: this.maxAudioBitrate,
              maxVideoBitrate: this.maxVideoBitrate,
            };
          }),
          (t.prototype.update = function (e) {
            var t = this;
            (e = Object.assign(
              {
                maxAudioBitrate: this.maxAudioBitrate,
                maxVideoBitrate: this.maxVideoBitrate,
              },
              e
            )),
              ["maxAudioBitrate", "maxVideoBitrate"].reduce(function (n, r) {
                return t[r] !== e[r] && ((t[r] = e[r]), (n = !0)), n;
              }, !1) && this.emit("changed");
          }),
          t
        );
      })(n(4).EventEmitter);
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(13).MediaStreamTrack,
      a = n(1),
      s = a.asLocalTrack,
      c = a.asLocalTrackPublication,
      u = a.trackClass,
      l = n(2),
      d = l.typeErrors,
      p = l.trackPriority,
      f = n(76).validateLocalTrack,
      h = n(18),
      v = h.LocalAudioTrack,
      _ = h.LocalDataTrack,
      m = h.LocalVideoTrack,
      y = n(157),
      g = n(158),
      b = n(159),
      w = (function (e) {
        function t(t, n, r) {
          var i = this,
            a = (r = Object.assign(
              {
                LocalAudioTrack: v,
                LocalVideoTrack: m,
                LocalDataTrack: _,
                MediaStreamTrack: o,
                LocalAudioTrackPublication: y,
                LocalVideoTrackPublication: b,
                LocalDataTrackPublication: g,
                shouldStopLocalTracks: !1,
                tracks: n,
              },
              r
            )).shouldStopLocalTracks
              ? new Set(
                  n.filter(function (e) {
                    return "data" !== e.kind;
                  })
                )
              : new Set();
          return (
            (i = e.call(this, t, r) || this),
            Object.defineProperties(i, {
              _eventObserver: { value: r.eventObserver },
              _LocalAudioTrack: { value: r.LocalAudioTrack },
              _LocalDataTrack: { value: r.LocalDataTrack },
              _LocalVideoTrack: { value: r.LocalVideoTrack },
              _MediaStreamTrack: { value: r.MediaStreamTrack },
              _LocalAudioTrackPublication: {
                value: r.LocalAudioTrackPublication,
              },
              _LocalDataTrackPublication: {
                value: r.LocalDataTrackPublication,
              },
              _LocalVideoTrackPublication: {
                value: r.LocalVideoTrackPublication,
              },
              _tracksToStop: { value: a },
              signalingRegion: {
                enumerable: !0,
                get: function () {
                  return t.signalingRegion;
                },
              },
            }),
            i._handleTrackSignalingEvents(),
            i
          );
        }
        return (
          i(t, e),
          (t.prototype._addTrack = function (t, n, r) {
            var i = e.prototype._addTrack.call(this, t, n);
            return (
              i && "disconnected" !== this.state && this._addLocalTrack(t, r), i
            );
          }),
          (t.prototype._addLocalTrack = function (e, t) {
            this._signaling.addTrack(e._trackSender, e.name, t),
              this._log.info("Added a new " + u(e, !0) + ":", e.id),
              this._log.debug(u(e, !0) + ":", e);
          }),
          (t.prototype._removeTrack = function (t, n) {
            var r = e.prototype._removeTrack.call(this, t, n);
            return (
              r &&
                "disconnected" !== this.state &&
                (this._signaling.removeTrack(t._trackSender),
                this._log.info("Removed a " + u(t, !0) + ":", t.id),
                this._log.debug(u(t, !0) + ":", t)),
              r
            );
          }),
          (t.prototype._getTrackEvents = function () {
            return e.prototype._getTrackEvents.call(this).concat([
              ["disabled", "trackDisabled"],
              ["enabled", "trackEnabled"],
              ["stopped", "trackStopped"],
            ]);
          }),
          (t.prototype.toString = function () {
            return (
              "[LocalParticipant #" +
              this._instanceId +
              (this.sid ? ": " + this.sid : "") +
              "]"
            );
          }),
          (t.prototype._handleTrackSignalingEvents = function () {
            var e = this,
              t = this._log;
            if ("disconnected" !== this.state) {
              var n = this._signaling;
              this.on("trackDisabled", i),
                this.on("trackEnabled", o),
                this.on("trackStopped", a),
                this._tracks.forEach(function (n) {
                  e._addLocalTrack(n, p.PRIORITY_STANDARD),
                    e._getOrCreateLocalTrackPublication(n).catch(function (e) {
                      t.warn(
                        "Failed to get or create LocalTrackPublication for " +
                          n +
                          ":",
                        e
                      );
                    });
                });
              var r = this;
              n.on("stateChanged", function e(s) {
                t.debug("Transitioned to state:", s),
                  "disconnected" === s
                    ? (t.debug("Removing LocalTrack event listeners"),
                      n.removeListener("stateChanged", e),
                      r.removeListener("trackDisabled", i),
                      r.removeListener("trackEnabled", o),
                      r.removeListener("trackStopped", a),
                      r._tracks.forEach(function (e) {
                        var t = a(e);
                        t && e._trackSender.removeClone(t._trackTransceiver);
                      }),
                      t.info(
                        "LocalParticipant disconnected. Stopping " +
                          r._tracksToStop.size +
                          " automatically-acquired LocalTracks"
                      ),
                      r._tracksToStop.forEach(function (e) {
                        e.stop();
                      }))
                    : "connected" === s &&
                      (t.info("reconnected"),
                      setTimeout(function () {
                        return r.emit("reconnected");
                      }, 0));
              });
            }
            function i(e) {
              var r = n.getPublication(e._trackSender);
              r &&
                (r.disable(), t.debug("Disabled the " + u(e, !0) + ":", e.id));
            }
            function o(e) {
              var r = n.getPublication(e._trackSender);
              r && (r.enable(), t.debug("Enabled the " + u(e, !0) + ":", e.id));
            }
            function a(e) {
              var t = n.getPublication(e._trackSender);
              return t && t.stop(), t;
            }
          }),
          (t.prototype._getOrCreateLocalTrackPublication = function (e) {
            var t = k(this.tracks, e);
            if (t) return Promise.resolve(t);
            var n = this._log,
              r = this,
              i = this._signaling.getPublication(e._trackSender);
            if (!i)
              return Promise.reject(
                new Error("Unexpected error: The " + e + " cannot be published")
              );
            function o(e) {
              r.unpublishTrack(e.track);
            }
            return new Promise(function (a, s) {
              i.on("updated", function l() {
                var d = i.error;
                if (d)
                  return (
                    i.removeListener("updated", l),
                    n.warn(
                      "Failed to publish the " + u(e, !0) + ": " + d.message
                    ),
                    r._removeTrack(e, e.id),
                    setTimeout(function () {
                      r.emit("trackPublicationFailed", d, e);
                    }),
                    void s(d)
                  );
                if (!r._tracks.has(e.id))
                  return (
                    i.removeListener("updated", l),
                    void s(new Error("The " + e + " was unpublished"))
                  );
                if (i.sid) {
                  i.removeListener("updated", l);
                  var p = {
                    log: n,
                    LocalAudioTrackPublication: r._LocalAudioTrackPublication,
                    LocalDataTrackPublication: r._LocalDataTrackPublication,
                    LocalVideoTrackPublication: r._LocalVideoTrackPublication,
                  };
                  (t = k(r.tracks, e)) ||
                    ((t = c(e, i, o, p)), r._addTrackPublication(t));
                  var f = r._signaling.state;
                  ("connected" !== f && "connecting" !== f) ||
                    (e._processorEventObserver &&
                      e._processorEventObserver.on("event", function (e) {
                        r._eventObserver.emit("event", {
                          name: e.name,
                          payload: e.data,
                          group: "video-processor",
                          level: "info",
                        });
                      }),
                    e.processedTrack &&
                      (e._captureFrames(), e._setSenderMediaStreamTrack(!0))),
                    "connected" === f &&
                      setTimeout(function () {
                        r.emit("trackPublished", t);
                      }),
                    a(t);
                }
              });
            });
          }),
          (t.prototype.publishTrack = function (e, t) {
            var n,
              r = k(this.tracks, e);
            if (r) return Promise.resolve(r);
            t = Object.assign(
              {
                log: this._log,
                priority: p.PRIORITY_STANDARD,
                LocalAudioTrack: this._LocalAudioTrack,
                LocalDataTrack: this._LocalDataTrack,
                LocalVideoTrack: this._LocalVideoTrack,
                MediaStreamTrack: this._MediaStreamTrack,
              },
              t
            );
            try {
              n = s(e, t);
            } catch (e) {
              return Promise.reject(e);
            }
            var i = Object.values(p);
            if (!i.includes(t.priority))
              return Promise.reject(
                d.INVALID_VALUE("LocalTrackPublishOptions.priority", i)
              );
            var o =
              this._addTrack(n, n.id, t.priority) || this._tracks.get(n.id);
            return this._getOrCreateLocalTrackPublication(o);
          }),
          (t.prototype.publishTracks = function (e) {
            if (!Array.isArray(e))
              throw d.INVALID_TYPE(
                "tracks",
                "Array of LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack"
              );
            return Promise.all(e.map(this.publishTrack, this));
          }),
          (t.prototype.setBandwidthProfile = function () {
            this._log.warn(
              "setBandwidthProfile is not implemented yet and may be available in future versions of twilio-video.js"
            );
          }),
          (t.prototype.setNetworkQualityConfiguration = function (e) {
            if ("object" != typeof e || null === e)
              throw d.INVALID_TYPE(
                "networkQualityConfiguration",
                "NetworkQualityConfiguration"
              );
            return (
              ["local", "remote"].forEach(function (t) {
                if (t in e && ("number" != typeof e[t] || isNaN(e[t])))
                  throw d.INVALID_TYPE(
                    "networkQualityConfiguration." + t,
                    "number"
                  );
              }),
              this._signaling.setNetworkQualityConfiguration(e),
              this
            );
          }),
          (t.prototype.setParameters = function (e) {
            if (void 0 !== e && "object" != typeof e)
              throw d.INVALID_TYPE(
                "encodingParameters",
                "EncodingParameters, null or undefined"
              );
            if (e) {
              if (
                this._signaling.getParameters().adaptiveSimulcast &&
                e.maxVideoBitrate
              )
                throw d.INVALID_TYPE(
                  "encodingParameters",
                  'encodingParameters.maxVideoBitrate is not compatible with "preferredVideoCodecs=auto"'
                );
              ["maxAudioBitrate", "maxVideoBitrate"].forEach(function (t) {
                if (void 0 !== e[t] && "number" != typeof e[t] && null !== e[t])
                  throw d.INVALID_TYPE(
                    "encodingParameters." + t,
                    "number, null or undefined"
                  );
              });
            } else
              null === e &&
                (e = { maxAudioBitrate: null, maxVideoBitrate: null });
            return this._signaling.setParameters(e), this;
          }),
          (t.prototype.unpublishTrack = function (e) {
            f(e, {
              LocalAudioTrack: this._LocalAudioTrack,
              LocalDataTrack: this._LocalDataTrack,
              LocalVideoTrack: this._LocalVideoTrack,
              MediaStreamTrack: this._MediaStreamTrack,
            });
            var t = this._tracks.get(e.id);
            if (!t) return null;
            if (
              (this._signaling
                .getPublication(t._trackSender)
                .publishFailed(new Error("The " + t + " was unpublished")),
              !(t = this._removeTrack(t, t.id)))
            )
              return null;
            var n = k(this.tracks, t);
            return n && this._removeTrackPublication(n), n;
          }),
          (t.prototype.unpublishTracks = function (e) {
            var t = this;
            if (!Array.isArray(e))
              throw d.INVALID_TYPE(
                "tracks",
                "Array of LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack"
              );
            return e.reduce(function (e, n) {
              var r = t.unpublishTrack(n);
              return r ? e.concat(r) : e;
            }, []);
          }),
          t
        );
      })(n(78));
    function k(e, t) {
      return (
        Array.from(e.values()).find(function (e) {
          return e.track === t || e.track.mediaStreamTrack === t;
        }) || null
      );
    }
    e.exports = w;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r, i) {
          return e.call(this, t, n, r, i) || this;
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[LocalAudioTrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          t
        );
      })(n(36));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r, i) {
          return e.call(this, t, n, r, i) || this;
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[LocalDataTrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          t
        );
      })(n(36));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r, i) {
          return e.call(this, t, n, r, i) || this;
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[LocalVideoTrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          t
        );
      })(n(36));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(58),
      a = (function (e) {
        function t(t, n, r, i, o, a, s) {
          return e.call(this, t, n, r, i, o, a, s) || this;
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[RemoteAudioTrack #" + this._instanceId + ": " + this.sid + "]"
            );
          }),
          (t.prototype.setPriority = function (t) {
            return e.prototype.setPriority.call(this, t);
          }),
          t
        );
      })(n(79)(o));
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[RemoteAudioTrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          t
        );
      })(n(37));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = n(33),
      c = n(2),
      u = c.typeErrors,
      l = c.trackPriority,
      d = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, n.id, "data", r) || this;
          return (
            Object.defineProperties(i, {
              _isSwitchedOff: { value: !1, writable: !0 },
              _priority: { value: null, writable: !0 },
              isEnabled: { enumerable: !0, value: !0 },
              isSwitchedOff: {
                enumerable: !0,
                get: function () {
                  return this._isSwitchedOff;
                },
              },
              maxPacketLifeTime: { enumerable: !0, value: n.maxPacketLifeTime },
              maxRetransmits: { enumerable: !0, value: n.maxRetransmits },
              ordered: { enumerable: !0, value: n.ordered },
              priority: {
                enumerable: !0,
                get: function () {
                  return this._priority;
                },
              },
              reliable: {
                enumerable: !0,
                value:
                  null === n.maxPacketLifeTime && null === n.maxRetransmits,
              },
              sid: { enumerable: !0, value: t },
            }),
            n.on("message", function (e) {
              i.emit("message", e, i);
            }),
            i
          );
        }
        return (
          i(t, e),
          (t.prototype.setPriority = function (e) {
            var t = a([null], o(Object.values(l)));
            if (!t.includes(e)) throw u.INVALID_VALUE("priority", t);
            return (this._priority = e), this;
          }),
          (t.prototype._setEnabled = function () {}),
          (t.prototype._setSwitchedOff = function (e) {
            this._isSwitchedOff !== e &&
              ((this._isSwitchedOff = e),
              this.emit(e ? "switchedOff" : "switchedOn", this));
          }),
          t
        );
      })(s);
    e.exports = d;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[RemoteDataTrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          t
        );
      })(n(37));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a = n(79),
      s = n(69),
      c = n(34),
      u = n(165).NullObserver,
      l = n(14),
      d = a(s),
      p = (function (e) {
        function t(t, n, r, i, o, a, s) {
          var c = this;
          return (
            (s = Object.assign(
              {
                clientTrackSwitchOffControl: "auto",
                contentPreferencesMode: "auto",
                enableDocumentVisibilityTurnOff: !0,
              },
              s
            )),
            (s = Object.assign(
              {
                IntersectionObserver:
                  "undefined" == typeof IntersectionObserver ||
                  "auto" !== s.clientTrackSwitchOffControl
                    ? u
                    : IntersectionObserver,
                ResizeObserver:
                  "undefined" == typeof ResizeObserver ||
                  "auto" !== s.contentPreferencesMode
                    ? u
                    : ResizeObserver,
              },
              s
            )),
            (c = e.call(this, t, n, r, i, o, a, s) || this),
            Object.defineProperties(c, {
              _enableDocumentVisibilityTurnOff: {
                value:
                  !0 === s.enableDocumentVisibilityTurnOff &&
                  "auto" === s.clientTrackSwitchOffControl,
              },
              _documentVisibilityTurnOffCleanup: { value: null, writable: !0 },
              _clientTrackSwitchOffControl: {
                value: s.clientTrackSwitchOffControl,
              },
              _contentPreferencesMode: { value: s.contentPreferencesMode },
              _invisibleElements: { value: new WeakSet() },
              _elToPipCallbacks: { value: new WeakMap() },
              _elToPipWindows: { value: new WeakMap() },
              _turnOffTimer: {
                value: new l(
                  function () {
                    c._setRenderHint({ enabled: !1 });
                  },
                  50,
                  !1
                ),
              },
              _resizeObserver: {
                value: new s.ResizeObserver(function (e) {
                  e.find(function (e) {
                    return !c._invisibleElements.has(e.target);
                  }) && h(c);
                }),
              },
              _intersectionObserver: {
                value: new s.IntersectionObserver(
                  function (e) {
                    var t = !1;
                    e.forEach(function (e) {
                      !c._invisibleElements.has(e.target) !==
                        e.isIntersecting &&
                        (e.isIntersecting
                          ? (c._log.debug(
                              "intersectionObserver detected: Off => On"
                            ),
                            c._invisibleElements.delete(e.target))
                          : (c._log.debug(
                              "intersectionObserver detected: On => Off"
                            ),
                            c._invisibleElements.add(e.target)),
                        (t = !0));
                    }),
                      t && (f(c), h(c));
                  },
                  { threshold: 0.25 }
                ),
              },
            }),
            c
          );
        }
        return (
          i(t, e),
          (t.prototype._start = function (t) {
            var n = e.prototype._start.call(this, t);
            return f(this), n;
          }),
          (t.prototype.switchOn = function () {
            if ("manual" !== this._clientTrackSwitchOffControl)
              throw new Error(
                'Invalid state. You can call switchOn only when bandwidthProfile.video.clientTrackSwitchOffControl is set to "manual"'
              );
            return this._setRenderHint({ enabled: !0 }), this;
          }),
          (t.prototype.switchOff = function () {
            if ("manual" !== this._clientTrackSwitchOffControl)
              throw new Error(
                'Invalid state. You can call switchOff only when bandwidthProfile.video.clientTrackSwitchOffControl is set to "manual"'
              );
            return this._setRenderHint({ enabled: !1 }), this;
          }),
          (t.prototype.setContentPreferences = function (e) {
            if ("manual" !== this._contentPreferencesMode)
              throw new Error(
                'Invalid state. You can call switchOn only when bandwidthProfile.video.contentPreferencesMode is set to "manual"'
              );
            return (
              e.renderDimensions &&
                this._setRenderHint({ renderDimensions: e.renderDimensions }),
              this
            );
          }),
          (t.prototype._unObservePip = function (e) {
            var t = this._elToPipCallbacks.get(e);
            t &&
              (e.removeEventListener("enterpictureinpicture", t.onEnterPip),
              e.removeEventListener("leavepictureinpicture", t.onLeavePip),
              this._elToPipCallbacks.delete(e));
          }),
          (t.prototype._observePip = function (e) {
            var t = this;
            if (!this._elToPipCallbacks.get(e)) {
              var n = function (n) {
                  return t._onEnterPip(n, e);
                },
                r = function (n) {
                  return t._onLeavePip(n, e);
                };
              e.addEventListener("enterpictureinpicture", n),
                e.addEventListener("leavepictureinpicture", r),
                this._elToPipCallbacks.set(e, {
                  onEnterPip: n,
                  onLeavePip: r,
                  onResizePip: function (n) {
                    return t._onResizePip(n, e);
                  },
                });
            }
          }),
          (t.prototype._onEnterPip = function (e, t) {
            this._log.debug("onEnterPip");
            var n = e.pictureInPictureWindow;
            this._elToPipWindows.set(t, n);
            var r = this._elToPipCallbacks.get(t).onResizePip;
            n.addEventListener("resize", r), f(this);
          }),
          (t.prototype._onLeavePip = function (e, t) {
            this._log.debug("onLeavePip"), this._elToPipWindows.delete(t);
            var n = this._elToPipCallbacks.get(t).onResizePip;
            e.pictureInPictureWindow.removeEventListener("resize", n), f(this);
          }),
          (t.prototype._onResizePip = function () {
            h(this);
          }),
          (t.prototype.attach = function (t) {
            var n = e.prototype.attach.call(this, t);
            return (
              "auto" === this._clientTrackSwitchOffControl &&
                this._invisibleElements.add(n),
              this._intersectionObserver.observe(n),
              this._resizeObserver.observe(n),
              this._enableDocumentVisibilityTurnOff &&
                (this._documentVisibilityTurnOffCleanup =
                  this._documentVisibilityTurnOffCleanup ||
                  (function (e) {
                    function t() {
                      f(e);
                    }
                    return (
                      c.onVisibilityChange(1, t),
                      function () {
                        c.offVisibilityChange(1, t);
                      }
                    );
                  })(this)),
              this._observePip(n),
              n
            );
          }),
          (t.prototype.detach = function (t) {
            var n = this,
              r = e.prototype.detach.call(this, t);
            return (
              (Array.isArray(r) ? r : [r]).forEach(function (e) {
                n._intersectionObserver.unobserve(e),
                  n._resizeObserver.unobserve(e),
                  n._invisibleElements.delete(e),
                  n._unObservePip(e);
              }),
              0 === this._attachments.size &&
                this._documentVisibilityTurnOffCleanup &&
                (this._documentVisibilityTurnOffCleanup(),
                (this._documentVisibilityTurnOffCleanup = null)),
              f(this),
              h(this),
              r
            );
          }),
          (t.prototype.addProcessor = function () {
            return e.prototype.addProcessor.apply(this, arguments);
          }),
          (t.prototype.removeProcessor = function () {
            return e.prototype.removeProcessor.apply(this, arguments);
          }),
          (t.prototype.toString = function () {
            return (
              "[RemoteVideoTrack #" + this._instanceId + ": " + this.sid + "]"
            );
          }),
          (t.prototype.setPriority = function (t) {
            return e.prototype.setPriority.call(this, t);
          }),
          t
        );
      })(d);
    function f(e) {
      if ("auto" === e._clientTrackSwitchOffControl) {
        var t = e._getAllAttachedElements().filter(function (t) {
          return !e._invisibleElements.has(t);
        });
        !0 ===
        (e._getAllAttachedElements().filter(function (t) {
          return e._elToPipWindows.has(t);
        }).length > 0 ||
          ("visible" === document.visibilityState && t.length > 0))
          ? (e._turnOffTimer.clear(), e._setRenderHint({ enabled: !0 }))
          : e._turnOffTimer.isSet || e._turnOffTimer.start();
      }
    }
    function h(e) {
      if ("auto" === e._contentPreferencesMode) {
        var t = e._getAllAttachedElements().filter(function (t) {
            return !e._invisibleElements.has(t);
          }),
          n = e._getAllAttachedElements().map(function (t) {
            var n = e._elToPipWindows.get(t);
            return n
              ? { clientHeight: n.height, clientWidth: n.width }
              : { clientHeight: 0, clientWidth: 0 };
          }),
          r = t.concat(n);
        if (r.length > 0) {
          var i = o(
              r.sort(function (e, t) {
                return (
                  t.clientHeight +
                  t.clientWidth -
                  e.clientHeight -
                  e.clientWidth -
                  1
                );
              }),
              1
            )[0],
            a = { height: i.clientHeight, width: i.clientWidth };
          e._setRenderHint({ renderDimensions: a });
        }
      }
    }
    e.exports = p;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function () {
        function e(e) {
          Object.defineProperties(this, { _callback: { value: e } });
        }
        return (
          (e.prototype.observe = function () {}),
          (e.prototype.unobserve = function () {}),
          (e.prototype.makeVisible = function (e) {
            var t = this._makeFakeEntry(e, !0);
            this._callback([t]);
          }),
          (e.prototype.makeInvisible = function (e) {
            var t = this._makeFakeEntry(e, !1);
            this._callback([t]);
          }),
          (e.prototype._makeFakeEntry = function (e, t) {
            return { target: e, isIntersecting: t };
          }),
          e
        );
      })(),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return i(t, e), t;
      })(o),
      s = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i(t, e),
          (t.prototype.resize = function (e) {
            var t = this._makeFakeEntry(e, !0);
            this._callback([t]);
          }),
          t
        );
      })(o);
    e.exports = {
      NullIntersectionObserver: a,
      NullResizeObserver: s,
      NullObserver: o,
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[RemoteVideoTrackPublication #" +
              this._instanceId +
              ": " +
              this.trackSid +
              "]"
            );
          }),
          t
        );
      })(n(37));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r = (function () {
      function e() {
        Object.defineProperties(this, {
          _connected: { writable: !0, value: !0 },
        });
      }
      return (
        (e.prototype.connect = function () {}),
        (e.prototype.disconnect = function () {
          return !!this._connected && ((this._connected = !1), !0);
        }),
        (e.prototype.publish = function () {
          return this._connected;
        }),
        e
      );
    })();
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a = n(4).EventEmitter,
      s = n(2),
      c = s.DEFAULT_NQ_LEVEL_LOCAL,
      u = s.DEFAULT_NQ_LEVEL_REMOTE,
      l = s.MAX_NQ_LEVEL,
      d = n(1).inRange,
      p = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (
            (t = Object.assign({ local: c, remote: u }, t)),
            Object.defineProperties(n, {
              local: { value: d(t.local, c, l) ? t.local : c, writable: !0 },
              remote: { value: d(t.remote, u, l) ? t.remote : u, writable: !0 },
            }),
            n
          );
        }
        return (
          i(t, e),
          (t.prototype.update = function (e) {
            var t = this;
            (e = Object.assign({ local: this.local, remote: this.remote }, e)),
              [
                ["local", c, 3],
                ["remote", u, 3],
              ].forEach(function (n) {
                var r = o(n, 3),
                  i = r[0],
                  a = r[1],
                  s = r[2];
                t[i] = "number" == typeof e[i] && d(e[i], a, s) ? e[i] : a;
              });
          }),
          t
        );
      })(a);
    e.exports = p;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = n(24),
      c = n(170),
      u = n(80),
      l = n(1).valueToJSON,
      d = 0,
      p = (function (e) {
        function t(t, n, r) {
          var i,
            o,
            a = e.call(this) || this,
            s = r.log.createLog("default", a),
            c = new Map();
          return (
            Object.defineProperties(a, {
              _log: { value: s },
              _clientTrackSwitchOffControl: {
                value: r.clientTrackSwitchOffControl || "disabled",
              },
              _contentPreferencesMode: {
                value: r.contentPreferencesMode || "disabled",
              },
              _instanceId: { value: ++d },
              _options: { value: r },
              _participants: { value: c },
              _signaling: { value: n },
              dominantSpeaker: {
                enumerable: !0,
                get: function () {
                  return this.participants.get(n.dominantSpeakerSid) || null;
                },
              },
              isRecording: {
                enumerable: !0,
                get: function () {
                  return n.recording.isEnabled || !1;
                },
              },
              localParticipant: { enumerable: !0, value: t },
              name: { enumerable: !0, value: n.name },
              participants: { enumerable: !0, value: c },
              sid: { enumerable: !0, value: n.sid },
              state: {
                enumerable: !0,
                get: function () {
                  return n.state;
                },
              },
              mediaRegion: { enumerable: !0, value: n.mediaRegion },
            }),
            (i = a),
            (o = n.recording).on("updated", function () {
              var e = o.isEnabled;
              i._log.info("Recording " + (e ? "started" : "stopped")),
                i.emit("recording" + (e ? "Started" : "Stopped"));
            }),
            (function (e, t) {
              var n = e._log;
              n.debug(
                "Creating a new RemoteParticipant for each ParticipantSignaling in the RoomSignaling"
              ),
                t.participants.forEach(h.bind(null, e)),
                n.debug(
                  "Setting up RemoteParticipant creation for all subsequent ParticipantSignalings that connect to the RoomSignaling"
                ),
                t.on("participantConnected", h.bind(null, e)),
                t.on("dominantSpeakerChanged", function () {
                  return e.emit("dominantSpeakerChanged", e.dominantSpeaker);
                }),
                t.on("stateChanged", function r(i, o) {
                  switch ((n.info("Transitioned to state:", i), i)) {
                    case "disconnected":
                      e.participants.forEach(function (e) {
                        e._unsubscribeTracks();
                      }),
                        e.emit(i, e, o),
                        e.localParticipant.tracks.forEach(function (e) {
                          e.unpublish();
                        }),
                        t.removeListener("stateChanged", r);
                      break;
                    case "reconnecting":
                      setTimeout(function () {
                        return e.emit("reconnecting", o);
                      }, 0);
                      break;
                    default:
                      setTimeout(function () {
                        return e.emit("reconnected");
                      }, 0);
                  }
                });
            })(a, n),
            s.info("Created a new Room:", a.name),
            s.debug(
              "Initial RemoteParticipants:",
              Array.from(a._participants.values())
            ),
            a
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return "[Room #" + this._instanceId + ": " + this.sid + "]";
          }),
          (t.prototype.disconnect = function () {
            return (
              this._log.info("Disconnecting"),
              this._signaling.disconnect(),
              this
            );
          }),
          (t.prototype.getStats = function () {
            var e = this;
            return this._signaling.getStats().then(function (t) {
              return Array.from(t).map(function (t) {
                var n = o(t, 2),
                  r = n[0],
                  i = n[1];
                return new u(
                  r,
                  Object.assign({}, i, {
                    localAudioTrackStats: f(e, i.localAudioTrackStats),
                    localVideoTrackStats: f(e, i.localVideoTrackStats),
                  })
                );
              });
            });
          }),
          (t.prototype.toJSON = function () {
            return l(this);
          }),
          t
        );
      })(s);
    function f(e, t) {
      var n = e.localParticipant._signaling;
      return t.reduce(function (e, t) {
        var r = n.tracks.get(t.trackId),
          i = n.getSender(r);
        return i ? [Object.assign({}, t, { trackId: i.id })].concat(e) : e;
      }, []);
    }
    function h(e, t) {
      var n = e._log,
        r = e._clientTrackSwitchOffControl,
        i = e._contentPreferencesMode,
        s = new c(t, {
          log: n,
          clientTrackSwitchOffControl: r,
          contentPreferencesMode: i,
        });
      n.info("A new RemoteParticipant connected:", s),
        e._participants.set(s.sid, s),
        e.emit("participantConnected", s);
      var u = [
        ["reconnected", "participantReconnected"],
        ["reconnecting", "participantReconnecting"],
        "trackDimensionsChanged",
        "trackDisabled",
        "trackEnabled",
        "trackMessage",
        "trackPublished",
        "trackPublishPriorityChanged",
        "trackStarted",
        "trackSubscribed",
        "trackSubscriptionFailed",
        "trackSwitchedOff",
        "trackSwitchedOn",
        "trackUnpublished",
        "trackUnsubscribed",
      ].map(function (t) {
        var n = o(Array.isArray(t) ? t : [t, t], 2),
          r = n[0],
          i = n[1];
        function c() {
          var t = [].slice.call(arguments);
          t.unshift(i), t.push(s), e.emit.apply(e, a([], o(t)));
        }
        return s.on(r, c), [r, c];
      });
      s.once("disconnected", function () {
        var t = e.dominantSpeaker;
        n.info("RemoteParticipant disconnected:", s),
          e._participants.delete(s.sid),
          u.forEach(function (e) {
            s.removeListener(e[0], e[1]);
          }),
          e.emit("participantDisconnected", s),
          s === t && e.emit("dominantSpeakerChanged", e.dominantSpeaker);
      });
    }
    e.exports = p;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (
            r._handleTrackSignalingEvents(),
            r.once("disconnected", r._unsubscribeTracks.bind(r)),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[RemoteParticipant #" +
              this._instanceId +
              (this.sid ? ": " + this.sid : "") +
              "]"
            );
          }),
          (t.prototype._addTrack = function (t, n, r) {
            return e.prototype._addTrack.call(this, t, r)
              ? (n._subscribed(t), this.emit("trackSubscribed", t, n), t)
              : null;
          }),
          (t.prototype._addTrackPublication = function (t) {
            var n = e.prototype._addTrackPublication.call(this, t);
            return n ? (this.emit("trackPublished", n), n) : null;
          }),
          (t.prototype._getTrackPublicationEvents = function () {
            return a(
              a([], o(e.prototype._getTrackPublicationEvents.call(this))),
              [
                ["subscriptionFailed", "trackSubscriptionFailed"],
                ["trackDisabled", "trackDisabled"],
                ["trackEnabled", "trackEnabled"],
                ["publishPriorityChanged", "trackPublishPriorityChanged"],
                ["trackSwitchedOff", "trackSwitchedOff"],
                ["trackSwitchedOn", "trackSwitchedOn"],
              ]
            );
          }),
          (t.prototype._unsubscribeTracks = function () {
            var e = this;
            this.tracks.forEach(function (t) {
              if (t.isSubscribed) {
                var n = t.track;
                t._unsubscribe(), e.emit("trackUnsubscribed", n, t);
              }
            });
          }),
          (t.prototype._removeTrack = function (t, n, r) {
            var i = this._tracks.get(r);
            return i
              ? (e.prototype._removeTrack.call(this, i, r),
                n._unsubscribe(),
                this.emit("trackUnsubscribed", i, n),
                i)
              : null;
          }),
          (t.prototype._removeTrackPublication = function (t) {
            this._signaling.clearTrackHint(t.trackSid);
            var n = e.prototype._removeTrackPublication.call(this, t);
            return n ? (this.emit("trackUnpublished", n), n) : null;
          }),
          t
        );
      })(n(78));
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, n, r) || this;
          return (
            Object.defineProperties(i, {
              audioLevel: {
                value:
                  "number" == typeof n.audioInputLevel
                    ? n.audioInputLevel
                    : null,
                enumerable: !0,
              },
              jitter: {
                value: "number" == typeof n.jitter ? n.jitter : null,
                enumerable: !0,
              },
            }),
            i
          );
        }
        return i(t, e), t;
      })(n(81));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, n, r) || this,
            o = null;
          "number" == typeof n.frameWidthInput &&
            "number" == typeof n.frameHeightInput &&
            ((o = {}),
            Object.defineProperties(o, {
              width: { value: n.frameWidthInput, enumerable: !0 },
              height: { value: n.frameHeightInput, enumerable: !0 },
            }));
          var a = null;
          return (
            "number" == typeof n.frameWidthSent &&
              "number" == typeof n.frameHeightSent &&
              ((a = {}),
              Object.defineProperties(a, {
                width: { value: n.frameWidthSent, enumerable: !0 },
                height: { value: n.frameHeightSent, enumerable: !0 },
              })),
            Object.defineProperties(i, {
              captureDimensions: { value: o, enumerable: !0 },
              dimensions: { value: a, enumerable: !0 },
              captureFrameRate: {
                value:
                  "number" == typeof n.frameRateInput ? n.frameRateInput : null,
                enumerable: !0,
              },
              frameRate: {
                value:
                  "number" == typeof n.frameRateSent ? n.frameRateSent : null,
                enumerable: !0,
              },
            }),
            i
          );
        }
        return i(t, e), t;
      })(n(81));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (
            Object.defineProperties(r, {
              audioLevel: {
                value:
                  "number" == typeof n.audioOutputLevel
                    ? n.audioOutputLevel
                    : null,
                enumerable: !0,
              },
              jitter: {
                value: "number" == typeof n.jitter ? n.jitter : null,
                enumerable: !0,
              },
            }),
            r
          );
        }
        return i(t, e), t;
      })(n(83));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this,
            i = null;
          return (
            "number" == typeof n.frameWidthReceived &&
              "number" == typeof n.frameHeightReceived &&
              ((i = {}),
              Object.defineProperties(i, {
                width: { value: n.frameWidthReceived, enumerable: !0 },
                height: { value: n.frameHeightReceived, enumerable: !0 },
              })),
            Object.defineProperties(r, {
              dimensions: { value: i, enumerable: !0 },
              frameRate: {
                value:
                  "number" == typeof n.frameRateReceived
                    ? n.frameRateReceived
                    : null,
                enumerable: !0,
              },
            }),
            r
          );
        }
        return i(t, e), t;
      })(n(83));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(176),
      a = n(222),
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (n = Object.assign({ createCancelableRoomSignalingPromise: o }, n)),
            (r = e.call(this) || this),
            Object.defineProperties(r, {
              _createCancelableRoomSignalingPromise: {
                value: n.createCancelableRoomSignalingPromise,
              },
              _options: { value: n },
              _wsServer: { value: t },
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype._connect = function (e, t, n, r, i) {
            return (
              (i = Object.assign({}, this._options, i)),
              this._createCancelableRoomSignalingPromise.bind(
                null,
                t,
                this._wsServer,
                e,
                n,
                r,
                i
              )
            );
          }),
          (t.prototype.createLocalParticipantSignaling = function (e, t) {
            return new a(e, t);
          }),
          t
        );
      })(n(226));
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r = n(35),
      i = n(177),
      o = n(193),
      a = n(221),
      s = n(9),
      c = s.SignalingConnectionDisconnectedError,
      u = s.SignalingIncomingMessageInvalidError,
      l = n(1),
      d = l.flatMap,
      p = l.createRoomConnectEventPayload;
    e.exports = function (e, t, n, s, l, f) {
      f = Object.assign(
        { PeerConnectionManager: i, RoomV2: o, Transport: a },
        f
      );
      var h = l.video[0] && !0 === l.video[0].adaptiveSimulcast,
        v = f.PeerConnectionManager,
        _ = f.RoomV2,
        m = f.Transport,
        y = f.iceServers,
        g = f.log,
        b = new v(s, l, f),
        w = d(n.tracks, function (e) {
          return [e.trackTransceiver];
        });
      b.setTrackSenders(w);
      var k,
        S = new Error("Canceled"),
        T = new r(
          function (r, i, o) {
            var a = f.automaticSubscription,
              s = f.bandwidthProfile,
              l = f.dominantSpeaker,
              d = f.environment,
              v = f.eventObserver,
              w = f.loggerName,
              T = f.logLevel,
              O = f.name,
              P = f.networkMonitor,
              C = f.networkQuality,
              E = f.realm,
              R = f.sdpSemantics,
              x = !!s,
              j = !!s,
              L =
                !!s &&
                ("disabled" !== f.clientTrackSwitchOffControl ||
                  "disabled" !== f.contentPreferencesMode),
              A = Object.assign(
                {
                  adaptiveSimulcast: h,
                  automaticSubscription: a,
                  dominantSpeaker: l,
                  environment: d,
                  eventObserver: v,
                  loggerName: w,
                  logLevel: T,
                  networkMonitor: P,
                  networkQuality: C,
                  iceServers: y,
                  onIced: function (e) {
                    return o()
                      ? (i(S), Promise.reject(S))
                      : (g.debug("Got ICE servers:", e),
                        (f.iceServers = e),
                        b.setConfiguration(f),
                        b
                          .createAndOffer()
                          .then(function () {
                            if (o()) throw (i(S), S);
                            g.debug("createAndOffer() succeeded."),
                              b.dequeue("description");
                          })
                          .catch(function (e) {
                            throw (
                              (g.error("createAndOffer() failed:", e), i(e), e)
                            );
                          }));
                  },
                  realm: E,
                  renderHints: L,
                  sdpSemantics: R,
                  trackPriority: x,
                  trackSwitchOff: j,
                },
                s ? { bandwidthProfile: s } : {}
              );
            k = new m(O, e, n, b, t, A);
            var D = p(f);
            v.emit("event", D),
              k.once("connected", function (e) {
                if ((g.debug("Transport connected:", e), o())) i(S);
                else if (e.participant) {
                  var t = e.options.signaling_region;
                  n.setSignalingRegion(t), r(new _(n, e, k, b, f));
                } else i(new u());
              }),
              k.once("stateChanged", function (e, t) {
                "disconnected" === e
                  ? ((k = null), i(t || new c()))
                  : g.debug("Transport state changed:", e);
              });
          },
          function () {
            k && (k.disconnect(), (k = null));
          }
        );
      return (
        T.catch(function () {
          k && (k.disconnect(), (k = null)), b.close();
        }),
        T
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = n(3).guessBrowser,
      c = n(178),
      u = n(66),
      l = n(192),
      d = n(1),
      p = n(9).MediaConnectionError,
      f = "firefox" === s(),
      h = (function (e) {
        function t(t, r, i) {
          var o = e.call(this) || this,
            a = (i = Object.assign(
              { audioContextFactory: f ? n(28) : null, PeerConnectionV2: c },
              i
            )).audioContextFactory
              ? i.audioContextFactory.getOrCreate(o)
              : null,
            s = a
              ? { offerToReceiveVideo: !0 }
              : { offerToReceiveAudio: !0, offerToReceiveVideo: !0 };
          return (
            Object.defineProperties(o, {
              _audioContextFactory: { value: i.audioContextFactory },
              _closedPeerConnectionIds: { value: new Set() },
              _configuration: { writable: !0, value: null },
              _configurationDeferred: { writable: !0, value: d.defer() },
              _connectionState: { value: "new", writable: !0 },
              _dummyAudioTrackSender: { value: a ? new u(v(a)) : null },
              _encodingParameters: { value: t },
              _iceConnectionState: { writable: !0, value: "new" },
              _dataTrackSenders: { writable: !0, value: new Set() },
              _lastConnectionState: { value: "new", writable: !0 },
              _lastIceConnectionState: { writable: !0, value: "new" },
              _mediaTrackSenders: { writable: !0, value: new Set() },
              _offerOptions: { value: s },
              _peerConnections: { value: new Map() },
              _preferredCodecs: { value: r },
              _sessionTimeout: { value: null, writable: !0 },
              _PeerConnectionV2: { value: i.PeerConnectionV2 },
            }),
            o
          );
        }
        return (
          i(t, e),
          (t.prototype.setEffectiveAdaptiveSimulcast = function (e) {
            this._peerConnections.forEach(function (t) {
              return t.setEffectiveAdaptiveSimulcast(e);
            }),
              this._preferredCodecs.video.forEach(function (t) {
                "adaptiveSimulcast" in t && (t.adaptiveSimulcast = e);
              });
          }),
          Object.defineProperty(t.prototype, "connectionState", {
            get: function () {
              return this._connectionState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "iceConnectionState", {
            get: function () {
              return this._iceConnectionState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype._closeAbsentPeerConnections = function (e) {
            var t = new Set(
              e.map(function (e) {
                return e.id;
              })
            );
            return (
              this._peerConnections.forEach(function (e) {
                t.has(e.id) || e._close();
              }),
              this
            );
          }),
          (t.prototype._getConfiguration = function () {
            return this._configurationDeferred.promise;
          }),
          (t.prototype._getOrCreate = function (e, t) {
            var n = this,
              r = this,
              i = this._peerConnections.get(e);
            if (!i) {
              var o = this._PeerConnectionV2,
                a = Object.assign(
                  {
                    dummyAudioMediaStreamTrack: this._dummyAudioTrackSender
                      ? this._dummyAudioTrackSender.track
                      : null,
                    offerOptions: this._offerOptions,
                  },
                  this._sessionTimeout
                    ? { sessionTimeout: this._sessionTimeout }
                    : {},
                  t
                );
              try {
                i = new o(
                  e,
                  this._encodingParameters,
                  this._preferredCodecs,
                  a
                );
              } catch (e) {
                throw new p();
              }
              this._peerConnections.set(i.id, i),
                i.on("candidates", this.queue.bind(this, "candidates")),
                i.on("description", this.queue.bind(this, "description")),
                i.on("trackAdded", this.queue.bind(this, "trackAdded")),
                i.on("stateChanged", function e(t) {
                  "closed" === t &&
                    (i.removeListener("stateChanged", e),
                    r._dataTrackSenders.forEach(function (e) {
                      return i.removeDataTrackSender(e);
                    }),
                    r._mediaTrackSenders.forEach(function (e) {
                      return i.removeMediaTrackSender(e);
                    }),
                    r._peerConnections.delete(i.id),
                    r._closedPeerConnectionIds.add(i.id),
                    k(r),
                    w(r));
                }),
                i.on("connectionStateChanged", function () {
                  return k(n);
                }),
                i.on("iceConnectionStateChanged", function () {
                  return w(n);
                }),
                this._dataTrackSenders.forEach(i.addDataTrackSender, i),
                this._mediaTrackSenders.forEach(i.addMediaTrackSender, i),
                w(this);
            }
            return i;
          }),
          (t.prototype.close = function () {
            return (
              this._peerConnections.forEach(function (e) {
                e.close();
              }),
              this._dummyAudioTrackSender && this._dummyAudioTrackSender.stop(),
              this._audioContextFactory &&
                this._audioContextFactory.release(this),
              w(this),
              this
            );
          }),
          (t.prototype.createAndOffer = function () {
            var e = this;
            return this._getConfiguration()
              .then(function (t) {
                var n;
                do {
                  n = d.makeUUID();
                } while (e._peerConnections.has(n));
                return e._getOrCreate(n, t);
              })
              .then(function (e) {
                return e.offer();
              })
              .then(function () {
                return e;
              });
          }),
          (t.prototype.getTrackReceivers = function () {
            return d.flatMap(this._peerConnections, function (e) {
              return e.getTrackReceivers();
            });
          }),
          (t.prototype.getStates = function () {
            var e = [];
            return (
              this._peerConnections.forEach(function (t) {
                var n = t.getState();
                n && e.push(n);
              }),
              e
            );
          }),
          (t.prototype.setConfiguration = function (e) {
            return (
              this._configuration &&
                ((this._configurationDeferred = d.defer()),
                this._peerConnections.forEach(function (t) {
                  t.setConfiguration(e);
                })),
              (this._configuration = e),
              this._configurationDeferred.resolve(e),
              this
            );
          }),
          (t.prototype.setIceReconnectTimeout = function (e) {
            return (
              null === this._sessionTimeout &&
                (this._peerConnections.forEach(function (t) {
                  t.setIceReconnectTimeout(e);
                }),
                (this._sessionTimeout = e)),
              this
            );
          }),
          (t.prototype.setTrackSenders = function (e) {
            var t = new Set(
                e.filter(function (e) {
                  return "data" === e.kind;
                })
              ),
              n = new Set(
                e.filter(function (e) {
                  return e && ("audio" === e.kind || "video" === e.kind);
                })
              ),
              r = (function (e, t, n) {
                return { data: _(e, t), media: m(e, n) };
              })(this, t, n);
            return (
              (this._dataTrackSenders = t),
              (this._mediaTrackSenders = n),
              (function (e, t) {
                (t.data.add.size ||
                  t.data.remove.size ||
                  t.media.add.size ||
                  t.media.remove.size) &&
                  e._peerConnections.forEach(function (e) {
                    t.data.remove.forEach(e.removeDataTrackSender, e),
                      t.media.remove.forEach(e.removeMediaTrackSender, e),
                      t.data.add.forEach(e.addDataTrackSender, e),
                      t.media.add.forEach(e.addMediaTrackSender, e),
                      (t.media.add.size ||
                        t.media.remove.size ||
                        (t.data.add.size &&
                          !e.isApplicationSectionNegotiated)) &&
                        e.offer();
                  });
              })(this, r),
              this
            );
          }),
          (t.prototype.update = function (e, t) {
            var n = this;
            return (
              void 0 === t && (t = !1),
              t && this._closeAbsentPeerConnections(e),
              this._getConfiguration()
                .then(function (t) {
                  return Promise.all(
                    e.map(function (e) {
                      return n._closedPeerConnectionIds.has(e.id)
                        ? null
                        : n._getOrCreate(e.id, t).update(e);
                    })
                  );
                })
                .then(function () {
                  return n;
                })
            );
          }),
          (t.prototype.getStats = function () {
            var e = Array.from(this._peerConnections.values());
            return Promise.all(
              e.map(function (e) {
                return e.getStats().then(function (t) {
                  return [e.id, t];
                });
              })
            ).then(function (e) {
              return new Map(e);
            });
          }),
          t
        );
      })(l);
    function v(e) {
      return e.createMediaStreamDestination().stream.getAudioTracks()[0];
    }
    function _(e, t) {
      return {
        add: d.difference(t, e._dataTrackSenders),
        remove: d.difference(e._dataTrackSenders, t),
      };
    }
    function m(e, t) {
      return {
        add: d.difference(t, e._mediaTrackSenders),
        remove: d.difference(e._mediaTrackSenders, t),
      };
    }
    var y,
      g = {
        new: 0,
        checking: 1,
        connecting: 2,
        connected: 3,
        completed: 4,
        disconnected: -1,
        failed: -2,
        closed: -3,
      };
    function b(e) {
      return e.length
        ? ((y =
            y ||
            Object.keys(g).reduce(function (e, t) {
              var n;
              return Object.assign(e, (((n = {})[g[t]] = t), n));
            }, {})),
          e.reduce(function (e, t) {
            return y[Math.max(g[e], g[t])];
          }))
        : "new";
    }
    function w(e) {
      (e._lastIceConnectionState = e.iceConnectionState),
        (e._iceConnectionState = b(
          a([], o(e._peerConnections.values())).map(function (e) {
            return e.iceConnectionState;
          })
        )),
        e.iceConnectionState !== e._lastIceConnectionState &&
          e.emit("iceConnectionStateChanged");
    }
    function k(e) {
      (e._lastConnectionState = e.connectionState),
        (e._connectionState = b(
          a([], o(e._peerConnections.values())).map(function (e) {
            return e.connectionState;
          })
        )),
        e.connectionState !== e._lastConnectionState &&
          e.emit("connectionStateChanged");
    }
    e.exports = h;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = n(84),
      c = n(13),
      u = c.RTCIceCandidate,
      l = c.RTCPeerConnection,
      d = c.RTCSessionDescription,
      p = c.getStats,
      f = n(3),
      h = n(2),
      v = h.DEFAULT_ICE_GATHERING_TIMEOUT_MS,
      _ = h.DEFAULT_LOG_LEVEL,
      m = h.DEFAULT_SESSION_TIMEOUT_SEC,
      y = h.iceRestartBackoffConfig,
      g = n(39),
      b = g.addOrRewriteNewTrackIds,
      w = g.addOrRewriteTrackIds,
      k = g.createCodecMapForMediaSection,
      S = g.disableRtx,
      T = g.enableDtxForOpus,
      O = g.filterLocalCodecs,
      P = g.getMediaSections,
      C = g.removeSSRCAttributes,
      E = g.revertSimulcast,
      R = g.setCodecPreferences,
      x = g.setSimulcast,
      j = n(14),
      L = n(9),
      A = L.MediaClientLocalDescFailedError,
      D = L.MediaClientRemoteDescFailedError,
      I = n(1),
      M = I.buildLogLevels,
      N = I.getPlatform,
      V = I.isChromeScreenShareTrack,
      F = I.oncePerTick,
      B = I.defer,
      U = n(184),
      H = n(186),
      W = n(187),
      Q = n(189),
      q = n(19),
      G = n(8),
      z = n(190),
      K = n(191),
      Y = f.guessBrowser(),
      $ = N(),
      J = /android/.test($),
      X = "chrome" === Y,
      Z = "firefox" === Y,
      ee = "safari" === Y,
      te = 0,
      ne = {
        open: ["closed", "updating"],
        updating: ["closed", "open"],
        closed: [],
      },
      re = (function (e) {
        function t(t, n, r, i) {
          var o = e.call(this, "open", ne) || this,
            a = se(
              (i = Object.assign(
                {
                  enableDscp: !1,
                  dummyAudioMediaStreamTrack: null,
                  isChromeScreenShareTrack: V,
                  iceServers: [],
                  logLevel: _,
                  offerOptions: {},
                  revertSimulcast: E,
                  sessionTimeout: 1e3 * m,
                  setCodecPreferences: R,
                  setSimulcast: x,
                  Backoff: s,
                  IceConnectionMonitor: H,
                  RTCIceCandidate: u,
                  RTCPeerConnection: l,
                  RTCSessionDescription: d,
                  Timeout: j,
                },
                i
              ))
            ),
            c = M(i.logLevel),
            p = i.RTCPeerConnection;
          !0 === i.enableDscp &&
            ((i.chromeSpecificConstraints = i.chromeSpecificConstraints || {}),
            (i.chromeSpecificConstraints.optional =
              i.chromeSpecificConstraints.optional || []),
            i.chromeSpecificConstraints.optional.push({ googDscp: !0 }));
          var f = i.log
              ? i.log.createLog("webrtc", o)
              : new G("webrtc", o, c, i.loggerName),
            h = new p(a, i.chromeSpecificConstraints);
          i.dummyAudioMediaStreamTrack &&
            h.addTrack(i.dummyAudioMediaStreamTrack),
            Object.defineProperties(o, {
              _appliedTrackIdsToAttributes: { value: new Map(), writable: !0 },
              _dataChannels: { value: new Map() },
              _dataTrackReceivers: { value: new Set() },
              _descriptionRevision: { writable: !0, value: 0 },
              _didGenerateLocalCandidates: { writable: !0, value: !1 },
              _enableDscp: { value: i.enableDscp },
              _encodingParameters: { value: n },
              _isChromeScreenShareTrack: { value: i.isChromeScreenShareTrack },
              _iceGatheringFailed: { value: !1, writable: !0 },
              _iceGatheringTimeout: {
                value: new i.Timeout(
                  function () {
                    return o._handleIceGatheringTimeout();
                  },
                  v,
                  !1
                ),
              },
              _iceRestartBackoff: { value: i.Backoff.exponential(y) },
              _instanceId: { value: ++te },
              _isIceConnectionInactive: { writable: !0, value: !1 },
              _isIceLite: { writable: !0, value: !1 },
              _isIceRestartBackoffInProgress: { writable: !0, value: !1 },
              _isRestartingIce: { writable: !0, value: !1 },
              _lastIceConnectionState: { writable: !0, value: null },
              _lastStableDescriptionRevision: { writable: !0, value: 0 },
              _localCandidates: { writable: !0, value: [] },
              _localCodecs: { value: new Set() },
              _localCandidatesRevision: { writable: !0, value: 1 },
              _localDescriptionWithoutSimulcast: { writable: !0, value: null },
              _localDescription: { writable: !0, value: null },
              _localUfrag: { writable: !0, value: null },
              _log: { value: f },
              _eventObserver: { value: i.eventObserver },
              _remoteCodecMaps: { value: new Map() },
              _rtpSenders: { value: new Map() },
              _rtpNewSenders: { value: new Set() },
              _iceConnectionMonitor: { value: new i.IceConnectionMonitor(h) },
              _mediaTrackReceivers: { value: new Set() },
              _needsAnswer: { writable: !0, value: !1 },
              _negotiationRole: { writable: !0, value: null },
              _offerOptions: { writable: !0, value: i.offerOptions },
              _onEncodingParametersChanged: {
                value: F(function () {
                  o._needsAnswer || le(o);
                }),
              },
              _peerConnection: { value: h },
              _preferredAudioCodecs: { value: r.audio },
              _preferredVideoCodecs: { value: r.video },
              _shouldApplyDtx: {
                value:
                  r.audio.every(function (e) {
                    return "opus" !== e.codec;
                  }) ||
                  r.audio.some(function (e) {
                    var t = e.codec,
                      n = e.dtx;
                    return "opus" === t && n;
                  }),
              },
              _queuedDescription: { writable: !0, value: null },
              _iceReconnectTimeout: {
                value: new i.Timeout(
                  function () {
                    f.debug("ICE reconnect timed out"), o.close();
                  },
                  i.sessionTimeout,
                  !1
                ),
              },
              _recycledTransceivers: { value: { audio: [], video: [] } },
              _replaceTrackPromises: { value: new Map() },
              _remoteCandidates: { writable: !0, value: new U() },
              _setCodecPreferences: {
                value:
                  Z &&
                  J &&
                  r.video[0] &&
                  "h264" !== r.video[0].codec.toLowerCase()
                    ? function (e) {
                        return e;
                      }
                    : i.setCodecPreferences,
              },
              _setSimulcast: { value: i.setSimulcast },
              _revertSimulcast: { value: i.revertSimulcast },
              _RTCIceCandidate: { value: i.RTCIceCandidate },
              _RTCPeerConnection: { value: i.RTCPeerConnection },
              _RTCSessionDescription: { value: i.RTCSessionDescription },
              _shouldOffer: { writable: !0, value: !1 },
              _shouldRestartIce: { writable: !0, value: !1 },
              _trackIdsToAttributes: { value: new Map(), writable: !0 },
              _trackMatcher: { writable: !0, value: null },
              _mediaTrackSenderToPublisherHints: { value: new Map() },
              id: { enumerable: !0, value: t },
            }),
            n.on("changed", o._onEncodingParametersChanged),
            h.addEventListener(
              "connectionstatechange",
              o._handleConnectionStateChange.bind(o)
            ),
            h.addEventListener(
              "datachannel",
              o._handleDataChannelEvent.bind(o)
            ),
            h.addEventListener(
              "icecandidate",
              o._handleIceCandidateEvent.bind(o)
            ),
            h.addEventListener(
              "iceconnectionstatechange",
              o._handleIceConnectionStateChange.bind(o)
            ),
            h.addEventListener(
              "icegatheringstatechange",
              o._handleIceGatheringStateChange.bind(o)
            ),
            h.addEventListener(
              "signalingstatechange",
              o._handleSignalingStateChange.bind(o)
            ),
            h.addEventListener("track", o._handleTrackEvent.bind(o)),
            o._iceRestartBackoff.on("ready", function () {
              return o._initiateIceRestart();
            });
          var g = o;
          return (
            o.on("stateChanged", function e(t) {
              "closed" === t &&
                (g.removeListener("stateChanged", e),
                g._dataChannels.forEach(function (e, t) {
                  g.removeDataTrackSender(t);
                }));
            }),
            o
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return (
              "[PeerConnectionV2 #" + this._instanceId + ": " + this.id + "]"
            );
          }),
          (t.prototype.setEffectiveAdaptiveSimulcast = function (e) {
            this._log.debug("Setting setEffectiveAdaptiveSimulcast: ", e),
              this._preferredVideoCodecs.forEach(function (t) {
                "adaptiveSimulcast" in t && (t.adaptiveSimulcast = e);
              });
          }),
          Object.defineProperty(t.prototype, "_shouldApplySimulcast", {
            get: function () {
              return (
                !(!X && !ee) &&
                this._preferredVideoCodecs.some(function (e) {
                  return (
                    "vp8" === e.codec.toLowerCase() &&
                    e.simulcast &&
                    !1 !== e.adaptiveSimulcast
                  );
                })
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "connectionState", {
            get: function () {
              return "failed" === this.iceConnectionState
                ? "failed"
                : this._peerConnection.connectionState ||
                    this.iceConnectionState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "iceConnectionState", {
            get: function () {
              return (this._isIceConnectionInactive &&
                "disconnected" === this._peerConnection.iceConnectionState) ||
                this._iceGatheringFailed
                ? "failed"
                : this._peerConnection.iceConnectionState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isApplicationSectionNegotiated", {
            get: function () {
              return (
                "closed" === this._peerConnection.signalingState ||
                (!!this._peerConnection.localDescription &&
                  P(this._peerConnection.localDescription.sdp, "application")
                    .length > 0)
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "_isAdaptiveSimulcastEnabled", {
            get: function () {
              var e = this._preferredVideoCodecs.find(function (e) {
                return "adaptiveSimulcast" in e;
              });
              return e && !0 === e.adaptiveSimulcast;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype._maybeUpdateEncodings = function (e, t, n) {
            if ((void 0 === n && (n = !1), "video" !== e.kind)) return !1;
            var r = f.guessBrowser();
            return (
              !!(
                "safari" === r ||
                ("chrome" === r && this._isAdaptiveSimulcastEnabled)
              ) && (this._updateEncodings(e, t, n), !0)
            );
          }),
          (t.prototype._updateEncodings = function (e, t, n) {
            if (this._isChromeScreenShareTrack(e)) {
              var r = [
                { scaleResolutionDownBy: 1 },
                { scaleResolutionDownBy: 1 },
              ];
              t.forEach(function (e, t) {
                var i = r[t];
                i
                  ? ((e.scaleResolutionDownBy = i.scaleResolutionDownBy),
                    n && delete e.active)
                  : ((e.active = !1), delete e.scaleResolutionDownBy);
              });
            } else {
              var i = e.getSettings(),
                o = i.width * i.height,
                a = [
                  { pixels: 518400, maxActiveLayers: 3 },
                  { pixels: 129600, maxActiveLayers: 2 },
                  { pixels: 0, maxActiveLayers: 1 },
                ].find(function (e) {
                  return o >= e.pixels;
                }),
                s = Math.min(t.length, a.maxActiveLayers);
              t.forEach(function (e, t) {
                t < s
                  ? ((e.scaleResolutionDownBy = 1 << (s - t - 1)),
                    n && (e.active = !0))
                  : ((e.active = !1), delete e.scaleResolutionDownBy);
              });
            }
            this._log.debug(
              "_updateEncodings:",
              t
                .map(function (e, t) {
                  return (
                    "[" +
                    t +
                    ": " +
                    e.active +
                    ", " +
                    (e.scaleResolutionDownBy || 0) +
                    "]"
                  );
                })
                .join(", ")
            );
          }),
          (t.prototype._addIceCandidate = function (e) {
            var t = this;
            return Promise.resolve()
              .then(function () {
                return (
                  (e = new t._RTCIceCandidate(e)),
                  t._peerConnection.addIceCandidate(e)
                );
              })
              .catch(function (n) {
                t._log.warn(
                  "Failed to add RTCIceCandidate " +
                    (e ? '"' + e.candidate + '"' : "null") +
                    ": " +
                    n.message
                );
              });
          }),
          (t.prototype._addIceCandidates = function (e) {
            return Promise.all(e.map(this._addIceCandidate, this)).then(
              function () {}
            );
          }),
          (t.prototype._addOrUpdateTransceiver = function (e) {
            var t = this,
              n = (function (e, t) {
                var n = {
                    audio: e._preferredAudioCodecs.map(function (e) {
                      return e.codec.toLowerCase();
                    }),
                    video: e._preferredVideoCodecs.map(function (e) {
                      return e.codec.toLowerCase();
                    }),
                  }[t],
                  r = e._recycledTransceivers[t],
                  i = n.find(function (t) {
                    return e._localCodecs.has(t);
                  });
                if (!i) return r.shift();
                var o = r.find(function (t) {
                  var n = e._remoteCodecMaps.get(t.mid);
                  return n && n.has(i);
                });
                o && r.splice(r.indexOf(o), 1);
                return o;
              })(this, e.kind);
            if (n && n.sender) {
              var r = n.sender.track ? n.sender.track.id : null;
              return (
                r &&
                  this._log.warn(
                    "Reusing transceiver: " + n.mid + "] " + r + " => " + e.id
                  ),
                this._replaceTrackPromises.set(
                  n,
                  n.sender
                    .replaceTrack(e)
                    .then(
                      function () {
                        n.direction = "sendrecv";
                      },
                      function () {}
                    )
                    .finally(function () {
                      t._replaceTrackPromises.delete(n);
                    })
                ),
                n
              );
            }
            return this._peerConnection.addTransceiver(e);
          }),
          (t.prototype._checkIceBox = function (e) {
            var t = ae(e);
            if (!t) return Promise.resolve();
            var n = this._remoteCandidates.setUfrag(t);
            return this._addIceCandidates(n);
          }),
          (t.prototype._answer = function (e) {
            var t = this;
            return Promise.resolve()
              .then(function () {
                return (
                  t._negotiationRole || (t._negotiationRole = "answerer"),
                  t._setRemoteDescription(e)
                );
              })
              .catch(function () {
                throw new D();
              })
              .then(function () {
                return t._peerConnection.createAnswer();
              })
              .then(function (n) {
                n = Z
                  ? new t._RTCSessionDescription({
                      sdp: S(n.sdp),
                      type: n.type,
                    })
                  : K(n);
                var r = C(n.sdp, ["mslabel", "label"]);
                if (t._shouldApplySimulcast) {
                  var i = r;
                  (r = t._setSimulcast(i, t._trackIdsToAttributes)),
                    (r = t._revertSimulcast(r, i, e.sdp));
                }
                return (
                  (r = r.replace(/42e015/g, "42e01f")),
                  t._setLocalDescription({ type: n.type, sdp: r })
                );
              })
              .then(function () {
                return t._checkIceBox(e);
              })
              .then(function () {
                return (
                  t._queuedDescription &&
                  t._updateDescription(t._queuedDescription)
                );
              })
              .then(function () {
                return (
                  (t._queuedDescription = null),
                  t._maybeReoffer(t._peerConnection.localDescription)
                );
              })
              .catch(function (e) {
                var n = e instanceof D ? e : new A();
                throw (
                  (t._publishMediaWarning({
                    message: "Failed to _answer",
                    code: n.code,
                    error: e,
                  }),
                  n)
                );
              });
          }),
          (t.prototype._close = function () {
            return (
              this._iceConnectionMonitor.stop(),
              "closed" !== this._peerConnection.signalingState &&
                (this._peerConnection.close(),
                this.preempt("closed"),
                this._encodingParameters.removeListener(
                  "changed",
                  this._onEncodingParametersChanged
                ),
                !0)
            );
          }),
          (t.prototype._handleConnectionStateChange = function () {
            this.emit("connectionStateChanged");
          }),
          (t.prototype._handleDataChannelEvent = function (e) {
            var t = this,
              n = e.channel,
              r = new W(n);
            this._dataTrackReceivers.add(r),
              n.addEventListener("close", function () {
                t._dataTrackReceivers.delete(r);
              }),
              this.emit("trackAdded", r);
          }),
          (t.prototype._handleGlare = function (e) {
            var t = this;
            return (
              this._log.debug("Glare detected; rolling back"),
              this._isRestartingIce &&
                (this._log.debug(
                  "An ICE restart was in progress; we'll need to restart ICE again after rolling back"
                ),
                (this._isRestartingIce = !1),
                (this._shouldRestartIce = !0)),
              Promise.resolve()
                .then(function () {
                  return (
                    (t._trackIdsToAttributes = new Map(
                      t._appliedTrackIdsToAttributes
                    )),
                    t._setLocalDescription({ type: "rollback" })
                  );
                })
                .then(function () {
                  return (t._needsAnswer = !1), t._answer(e);
                })
                .then(function (e) {
                  return e ? Promise.resolve() : t._offer();
                })
            );
          }),
          (t.prototype._publishMediaWarning = function (e) {
            var t = e.message,
              n = e.code,
              r = e.error,
              i = e.sdp;
            this._eventObserver.emit("event", {
              level: "warning",
              name: "error",
              group: "media",
              payload: {
                message: t,
                code: n,
                context: JSON.stringify({ error: r.message, sdp: i }),
              },
            });
          }),
          (t.prototype._handleIceCandidateEvent = function (e) {
            e.candidate &&
              (this._log.debug("Clearing ICE gathering timeout"),
              (this._didGenerateLocalCandidates = !0),
              this._iceGatheringTimeout.clear(),
              this._localCandidates.push(e.candidate));
            var t = {
              ice: {
                candidates: this._isIceLite
                  ? []
                  : this._localCandidates.slice(),
                ufrag: this._localUfrag,
              },
              id: this.id,
            };
            e.candidate || (t.ice.complete = !0),
              (this._isIceLite && e.candidate) ||
                ((t.ice.revision = this._localCandidatesRevision++),
                this.emit("candidates", t));
          }),
          (t.prototype._handleIceConnectionStateChange = function () {
            var e = this,
              t = this._peerConnection.iceConnectionState,
              n = ["connected", "completed"].includes(t),
              r = this._log;
            r.debug('ICE connection state is "' + t + '"'),
              n &&
                (this._iceReconnectTimeout.clear(),
                this._iceRestartBackoff.reset()),
              "failed" === this._lastIceConnectionState ||
              "failed" !== t ||
              this._shouldRestartIce ||
              this._isRestartingIce
                ? ["disconnected", "failed"].includes(
                    this._lastIceConnectionState
                  ) &&
                  n &&
                  r.debug("ICE reconnected")
                : (r.warn("ICE failed"), this._initiateIceRestartBackoff()),
              "connected" === t
                ? ((this._isIceConnectionInactive = !1),
                  this._iceConnectionMonitor.start(function () {
                    e._iceConnectionMonitor.stop(),
                      e._shouldRestartIce ||
                        e._isRestartingIce ||
                        (r.warn("ICE Connection Monitor detected inactivity"),
                        (e._isIceConnectionInactive = !0),
                        e._initiateIceRestartBackoff(),
                        e.emit("iceConnectionStateChanged"),
                        e.emit("connectionStateChanged"));
                  }))
                : ["disconnected", "completed"].includes(t) ||
                  (this._iceConnectionMonitor.stop(),
                  (this._isIceConnectionInactive = !1)),
              (this._lastIceConnectionState = t),
              this.emit("iceConnectionStateChanged");
          }),
          (t.prototype._handleIceGatheringTimeout = function () {
            this._log.warn("ICE failed to gather any local candidates"),
              (this._iceGatheringFailed = !0),
              this._initiateIceRestartBackoff(),
              this.emit("iceConnectionStateChanged"),
              this.emit("connectionStateChanged");
          }),
          (t.prototype._handleIceGatheringStateChange = function () {
            var e = this._peerConnection.iceGatheringState,
              t = this._log;
            t.debug('ICE gathering state is "' + e + '"');
            var n = this._iceGatheringTimeout,
              r = n.delay,
              i = n.isSet;
            "gathering" !== e ||
              this._didGenerateLocalCandidates ||
              i ||
              (t.debug("Starting ICE gathering timeout: " + r),
              (this._iceGatheringFailed = !1),
              this._iceGatheringTimeout.start());
          }),
          (t.prototype._handleSignalingStateChange = function () {
            "stable" === this._peerConnection.signalingState &&
              (this._appliedTrackIdsToAttributes = new Map(
                this._trackIdsToAttributes
              ));
          }),
          (t.prototype._handleTrackEvent = function (e) {
            var t = this,
              n = this._peerConnection.remoteDescription
                ? this._peerConnection.remoteDescription.sdp
                : null;
            (this._trackMatcher = this._trackMatcher || new z()),
              this._trackMatcher.update(n);
            var r = e.track,
              i = this._trackMatcher.match(e) || r.id,
              o = new Q(i, r);
            this._mediaTrackReceivers.forEach(function (e) {
              e.track.id === o.track.id && t._mediaTrackReceivers.delete(e);
            }),
              this._mediaTrackReceivers.add(o),
              r.addEventListener("ended", function () {
                return t._mediaTrackReceivers.delete(o);
              }),
              this.emit("trackAdded", o);
          }),
          (t.prototype._initiateIceRestart = function () {
            if ("closed" !== this._peerConnection.signalingState) {
              var e = this._log;
              e.warn("Attempting to restart ICE"),
                (this._didGenerateLocalCandidates = !1),
                (this._isIceRestartBackoffInProgress = !1),
                (this._shouldRestartIce = !0);
              var t = this._iceReconnectTimeout,
                n = t.delay;
              t.isSet ||
                (e.debug("Starting ICE reconnect timeout: " + n),
                this._iceReconnectTimeout.start()),
                this.offer().catch(function (t) {
                  e.error(
                    "offer failed in _initiateIceRestart with: " + t.message
                  );
                });
            }
          }),
          (t.prototype._initiateIceRestartBackoff = function () {
            "closed" === this._peerConnection.signalingState ||
              this._isIceRestartBackoffInProgress ||
              (this._log.warn("An ICE restart has been scheduled"),
              (this._isIceRestartBackoffInProgress = !0),
              this._iceRestartBackoff.backoff());
          }),
          (t.prototype._maybeReoffer = function (e) {
            var t = this._shouldOffer;
            if (e && e.sdp) {
              var n = this._peerConnection.getSenders().filter(function (e) {
                return e.track;
              });
              t = ["audio", "video"].reduce(function (t, r) {
                var i = P(e.sdp, r, "(sendrecv|sendonly)"),
                  o = n.filter(ce.bind(null, r));
                return t || i.length < o.length;
              }, t);
              var r = this._dataChannels.size > 0,
                i = P(e.sdp, "application").length > 0;
              t = t || (r && !i);
            }
            return (t ? this._offer() : Promise.resolve()).then(function () {
              return t;
            });
          }),
          (t.prototype._offer = function () {
            var e = this,
              t = Object.assign({}, this._offerOptions);
            return (
              (this._needsAnswer = !0),
              this._shouldRestartIce &&
                ((this._shouldRestartIce = !1),
                (this._isRestartingIce = !0),
                (t.iceRestart = !0)),
              Promise.all(this._replaceTrackPromises.values())
                .then(function () {
                  return e._peerConnection.createOffer(t);
                })
                .catch(function (t) {
                  var n = new A();
                  throw (
                    (e._publishMediaWarning({
                      message: "Failed to create offer",
                      code: n.code,
                      error: t,
                    }),
                    n)
                  );
                })
                .then(function (t) {
                  t = Z
                    ? new e._RTCSessionDescription({
                        sdp: S(t.sdp),
                        type: t.type,
                      })
                    : K(t);
                  var n = C(t.sdp, ["mslabel", "label"]);
                  n = e._peerConnection.remoteDescription
                    ? O(n, e._peerConnection.remoteDescription.sdp)
                    : n;
                  var r = e._setCodecPreferences(
                    n,
                    e._preferredAudioCodecs,
                    e._preferredVideoCodecs
                  );
                  return (
                    (e._shouldOffer = !1),
                    e._negotiationRole || (e._negotiationRole = "offerer"),
                    e._shouldApplySimulcast &&
                      ((e._localDescriptionWithoutSimulcast = {
                        type: "offer",
                        sdp: r,
                      }),
                      (r = e._setSimulcast(r, e._trackIdsToAttributes))),
                    e._setLocalDescription({ type: "offer", sdp: r })
                  );
                })
            );
          }),
          (t.prototype._getMediaTrackSenderId = function (e) {
            var t = Array.from(this._rtpSenders.keys()).find(function (t) {
              return t.track.id === e;
            });
            return t ? t.id : e;
          }),
          (t.prototype._addOrRewriteLocalTrackIds = function (e) {
            var t = this,
              n = this._peerConnection.getTransceivers().filter(function (e) {
                var t = e.sender;
                return !e.stopped && t && t.track;
              }),
              r = n.filter(function (e) {
                return e.mid;
              }),
              i = new Map(
                r.map(function (e) {
                  var n = e.mid,
                    r = e.sender;
                  return [n, t._getMediaTrackSenderId(r.track.id)];
                })
              ),
              o = w(e.sdp, i),
              a = n.filter(function (e) {
                return !e.mid;
              }),
              s = new Map(
                ["audio", "video"].map(function (e) {
                  return [
                    e,
                    a
                      .filter(function (t) {
                        return t.sender.track.kind === e;
                      })
                      .map(function (e) {
                        var n = e.sender;
                        return t._getMediaTrackSenderId(n.track.id);
                      }),
                  ];
                })
              ),
              c = b(o, i, s);
            return new this._RTCSessionDescription({ sdp: c, type: e.type });
          }),
          (t.prototype._rollbackAndApplyOffer = function (e) {
            var t = this;
            return this._setLocalDescription({ type: "rollback" }).then(
              function () {
                return t._setLocalDescription(e);
              }
            );
          }),
          (t.prototype._setLocalDescription = function (e) {
            var t = this;
            return (
              "rollback" !== e.type &&
                this._shouldApplyDtx &&
                (e = new this._RTCSessionDescription({
                  sdp: T(e.sdp),
                  type: e.type,
                })),
              this._peerConnection
                .setLocalDescription(e)
                .catch(function (n) {
                  t._log.warn(
                    'Calling setLocalDescription with an RTCSessionDescription of type "' +
                      e.type +
                      '" failed with the error "' +
                      n.message +
                      '".',
                    n
                  );
                  var r = new A(),
                    i = {
                      message:
                        'Calling setLocalDescription with an RTCSessionDescription of type "' +
                        e.type +
                        '" failed',
                      code: r.code,
                      error: n,
                    };
                  throw (
                    (e.sdp &&
                      (t._log.warn("The SDP was " + e.sdp), (i.sdp = e.sdp)),
                    t._publishMediaWarning(i),
                    r)
                  );
                })
                .then(function () {
                  "rollback" !== e.type &&
                    ((t._localDescription = t._addOrRewriteLocalTrackIds(e)),
                    t._shouldApplyDtx &&
                      (t._localDescription = new t._RTCSessionDescription({
                        sdp: T(t._localDescription.sdp, []),
                        type: t._localDescription.type,
                      })),
                    (t._localCandidates = []),
                    "offer" === e.type
                      ? t._descriptionRevision++
                      : "answer" === e.type &&
                        ((t._lastStableDescriptionRevision =
                          t._descriptionRevision),
                        ue(t)),
                    (t._localUfrag = ae(e)),
                    t.emit("description", t.getState()));
                })
            );
          }),
          (t.prototype._setRemoteDescription = function (e) {
            var t = this;
            return (
              e.sdp &&
                ((e.sdp = this._setCodecPreferences(
                  e.sdp,
                  this._preferredAudioCodecs,
                  this._preferredVideoCodecs
                )),
                this._shouldApplyDtx
                  ? (e.sdp = T(e.sdp))
                  : (e.sdp = T(e.sdp, [])),
                Z && (e.sdp = e.sdp.replace(/a=msid:[^ ]+ /g, "a=msid:- ")),
                this._peerConnection.remoteDescription ||
                  (this._isIceLite = /a=ice-lite/.test(e.sdp))),
              (e = new this._RTCSessionDescription(e)),
              Promise.resolve()
                .then(function () {
                  if (
                    "answer" === e.type &&
                    t._localDescriptionWithoutSimulcast
                  ) {
                    var n = t._preferredVideoCodecs.find(function (e) {
                        return "adaptiveSimulcast" in e;
                      }),
                      r = !!n && !1 === n.adaptiveSimulcast,
                      i = t._revertSimulcast(
                        t._localDescription.sdp,
                        t._localDescriptionWithoutSimulcast.sdp,
                        e.sdp,
                        r
                      );
                    if (
                      ((t._localDescriptionWithoutSimulcast = null),
                      i !== t._localDescription.sdp)
                    )
                      return t._rollbackAndApplyOffer({
                        type: t._localDescription.type,
                        sdp: i,
                      });
                  }
                })
                .then(function () {
                  return t._peerConnection.setRemoteDescription(e);
                })
                .then(
                  function () {
                    "answer" === e.type &&
                      (t._isRestartingIce &&
                        (t._log.debug(
                          "An ICE restart was in-progress and is now completed"
                        ),
                        (t._isRestartingIce = !1)),
                      ue(t));
                  },
                  function (n) {
                    throw (
                      (t._log.warn(
                        'Calling setRemoteDescription with an RTCSessionDescription of type "' +
                          e.type +
                          '" failed with the error "' +
                          n.message +
                          '".',
                        n
                      ),
                      e.sdp && t._log.warn("The SDP was " + e.sdp),
                      n)
                    );
                  }
                )
            );
          }),
          (t.prototype._updateDescription = function (e) {
            var t = this;
            switch (e.type) {
              case "answer":
              case "pranswer":
                if (
                  e.revision !== this._descriptionRevision ||
                  "have-local-offer" !== this._peerConnection.signalingState
                )
                  return Promise.resolve();
                this._descriptionRevision = e.revision;
                break;
              case "close":
                return this._close();
              case "create-offer":
                return e.revision <= this._lastStableDescriptionRevision
                  ? Promise.resolve()
                  : this._needsAnswer
                  ? ((this._queuedDescription = e), Promise.resolve())
                  : ((this._descriptionRevision = e.revision), this._offer());
              case "offer":
                return e.revision <= this._lastStableDescriptionRevision ||
                  "closed" === this._peerConnection.signalingState
                  ? Promise.resolve()
                  : "have-local-offer" === this._peerConnection.signalingState
                  ? this._needsAnswer &&
                    0 === this._lastStableDescriptionRevision
                    ? ((this._queuedDescription = e), Promise.resolve())
                    : ((this._descriptionRevision = e.revision),
                      this._handleGlare(e))
                  : ((this._descriptionRevision = e.revision),
                    this._answer(e).then(function () {}));
            }
            var n = e.revision;
            return Promise.resolve()
              .then(function () {
                return t._setRemoteDescription(e);
              })
              .catch(function (n) {
                var r = new D();
                throw (
                  (t._publishMediaWarning({
                    message:
                      'Calling setRemoteDescription with an RTCSessionDescription of type "' +
                      e.type +
                      '" failed',
                    code: r.code,
                    error: n,
                    sdp: e.sdp,
                  }),
                  r)
                );
              })
              .then(function () {
                return (
                  (t._lastStableDescriptionRevision = n),
                  (t._needsAnswer = !1),
                  t._checkIceBox(e)
                );
              })
              .then(function () {
                return (
                  t._queuedDescription &&
                  t._updateDescription(t._queuedDescription)
                );
              })
              .then(function () {
                return (
                  (t._queuedDescription = null),
                  t
                    ._maybeReoffer(t._peerConnection.localDescription)
                    .then(function () {})
                );
              });
          }),
          (t.prototype._updateIce = function (e) {
            var t = this._remoteCandidates.update(e);
            return this._addIceCandidates(t);
          }),
          (t.prototype.addDataTrackSender = function (e) {
            if (!this._dataChannels.has(e))
              try {
                var t = { ordered: e.ordered };
                null !== e.maxPacketLifeTime &&
                  (t.maxPacketLifeTime = e.maxPacketLifeTime),
                  null !== e.maxRetransmits &&
                    (t.maxRetransmits = e.maxRetransmits);
                var n = this._peerConnection.createDataChannel(e.id, t);
                e.addDataChannel(n), this._dataChannels.set(e, n);
              } catch (t) {
                this._log.warn(
                  'Error creating an RTCDataChannel for DataTrack "' +
                    e.id +
                    '": ' +
                    t.message
                );
              }
          }),
          (t.prototype._handleQueuedPublisherHints = function () {
            var e = this;
            "stable" === this._peerConnection.signalingState &&
              this._mediaTrackSenderToPublisherHints.forEach(function (t, n) {
                var r = t.deferred,
                  i = t.encodings;
                e._mediaTrackSenderToPublisherHints.delete(n),
                  e
                    ._setPublisherHint(n, i)
                    .then(function (e) {
                      return r.resolve(e);
                    })
                    .catch(function (e) {
                      return r.reject(e);
                    });
              });
          }),
          (t.prototype._setPublisherHint = function (e, t) {
            var n = this;
            if (Z) return Promise.resolve("COULD_NOT_APPLY_HINT");
            this._mediaTrackSenderToPublisherHints.has(e) &&
              (this._mediaTrackSenderToPublisherHints
                .get(e)
                .deferred.resolve("REQUEST_SKIPPED"),
              this._mediaTrackSenderToPublisherHints.delete(e));
            var r = this._rtpSenders.get(e);
            if (!r)
              return (
                this._log.warn(
                  "Could not apply publisher hint because RTCRtpSender was not found"
                ),
                Promise.resolve("UNKNOWN_TRACK")
              );
            if ("closed" === this._peerConnection.signalingState)
              return (
                this._log.warn(
                  'Could not apply publisher hint because signalingState was "closed"'
                ),
                Promise.resolve("COULD_NOT_APPLY_HINT")
              );
            if ("stable" !== this._peerConnection.signalingState) {
              this._log.debug(
                "Queuing up publisher hint because signalingState:",
                this._peerConnection.signalingState
              );
              var i = B();
              return (
                this._mediaTrackSenderToPublisherHints.set(e, {
                  deferred: i,
                  encodings: t,
                }),
                i.promise
              );
            }
            var o = r.getParameters();
            return (
              null !== t &&
                t.forEach(function (e) {
                  var t = e.enabled,
                    r = e.layer_index;
                  o.encodings.length > r
                    ? (n._log.debug(
                        "layer:" +
                          r +
                          ", active:" +
                          o.encodings[r].active +
                          " => " +
                          t
                      ),
                      (o.encodings[r].active = t))
                    : n._log.warn("invalid layer:" + r + ", active:" + t);
                }),
              this._maybeUpdateEncodings(r.track, o.encodings, null === t),
              r
                .setParameters(o)
                .then(function () {
                  return "OK";
                })
                .catch(function (e) {
                  return (
                    n._log.error("Failed to apply publisher hints:", e),
                    "COULD_NOT_APPLY_HINT"
                  );
                })
            );
          }),
          (t.prototype.addMediaTrackSender = function (e) {
            var t = this;
            if (
              "closed" !== this._peerConnection.signalingState &&
              !this._rtpSenders.has(e)
            ) {
              var n = this._addOrUpdateTransceiver(e.track).sender;
              e.addSender(n, function (n) {
                return t._setPublisherHint(e, n);
              }),
                this._rtpNewSenders.add(n),
                this._rtpSenders.set(e, n);
            }
          }),
          (t.prototype.close = function () {
            this._close() &&
              (this._descriptionRevision++,
              (this._localDescription = { type: "close" }),
              this.emit("description", this.getState()));
          }),
          (t.prototype.getTrackReceivers = function () {
            return Array.from(this._dataTrackReceivers).concat(
              Array.from(this._mediaTrackReceivers)
            );
          }),
          (t.prototype.getState = function () {
            if (!this._localDescription) return null;
            var e =
                "answer" === this._localDescription.type
                  ? this._lastStableDescriptionRevision
                  : this._descriptionRevision,
              t = { type: this._localDescription.type, revision: e };
            return (
              this._localDescription.sdp &&
                (t.sdp = this._localDescription.sdp),
              { description: t, id: this.id }
            );
          }),
          (t.prototype.offer = function () {
            var e = this;
            return this._needsAnswer || this._isRestartingIce
              ? ((this._shouldOffer = !0), Promise.resolve())
              : this.bracket("offering", function (t) {
                  return (
                    e.transition("updating", t),
                    (e._needsAnswer || e._isRestartingIce
                      ? Promise.resolve()
                      : e._offer()
                    ).then(
                      function () {
                        e.tryTransition("open", t);
                      },
                      function (n) {
                        throw (e.tryTransition("open", t), n);
                      }
                    )
                  );
                });
          }),
          (t.prototype.removeDataTrackSender = function (e) {
            var t = this._dataChannels.get(e);
            t &&
              (e.removeDataChannel(t), this._dataChannels.delete(e), t.close());
          }),
          (t.prototype.removeMediaTrackSender = function (e) {
            var t = this._rtpSenders.get(e);
            if (t) {
              if (
                ("closed" !== this._peerConnection.signalingState &&
                  this._peerConnection.removeTrack(t),
                e.removeSender(t),
                this._mediaTrackSenderToPublisherHints.has(e))
              )
                this._mediaTrackSenderToPublisherHints
                  .get(e)
                  .deferred.resolve("UNKNOWN_TRACK"),
                  this._mediaTrackSenderToPublisherHints.delete(e);
              this._rtpNewSenders.delete(t), this._rtpSenders.delete(e);
            }
          }),
          (t.prototype.setConfiguration = function (e) {
            "function" == typeof this._peerConnection.setConfiguration &&
              this._peerConnection.setConfiguration(se(e));
          }),
          (t.prototype.setIceReconnectTimeout = function (e) {
            return (
              this._iceReconnectTimeout.setDelay(e),
              this._log.debug(
                "Updated ICE reconnection timeout period:",
                this._iceReconnectTimeout.delay
              ),
              this
            );
          }),
          (t.prototype.update = function (e) {
            var t = this;
            return this.bracket("updating", function (n) {
              if ("closed" === t.state) return Promise.resolve();
              t.transition("updating", n);
              var r = [];
              return (
                e.ice && r.push(t._updateIce(e.ice)),
                e.description && r.push(t._updateDescription(e.description)),
                Promise.all(r).then(
                  function () {
                    t.tryTransition("open", n);
                  },
                  function (e) {
                    throw (t.tryTransition("open", n), e);
                  }
                )
              );
            });
          }),
          (t.prototype.getStats = function () {
            var e = this;
            return p(this._peerConnection).then(function (t) {
              return (function (e, t) {
                return Object.assign(t, {
                  remoteAudioTrackStats: t.remoteAudioTrackStats.map(function (
                    t
                  ) {
                    return oe(e, t);
                  }),
                  remoteVideoTrackStats: t.remoteVideoTrackStats.map(function (
                    t
                  ) {
                    return oe(e, t);
                  }),
                  localAudioTrackStats: t.localAudioTrackStats.map(function (
                    t
                  ) {
                    return ie(e, t);
                  }),
                  localVideoTrackStats: t.localVideoTrackStats.map(function (
                    t
                  ) {
                    return ie(e, t);
                  }),
                });
              })(e, t);
            });
          }),
          t
        );
      })(q);
    function ie(e, t) {
      var n = e._getMediaTrackSenderId(t.trackId);
      return Object.assign(t, { trackId: n });
    }
    function oe(e, t) {
      var n = a([], o(e._mediaTrackReceivers)).find(function (e) {
          return e.track.id === t.trackId;
        }),
        r = n ? n.id : null;
      return Object.assign(t, { trackId: r });
    }
    function ae(e) {
      if (e.sdp) {
        var t = e.sdp.match(/^a=ice-ufrag:([a-zA-Z0-9+/]+)/m);
        if (t) return t[1];
      }
      return null;
    }
    function se(e) {
      return Object.assign(
        { bundlePolicy: "max-bundle", rtcpMuxPolicy: "require" },
        e
      );
    }
    function ce(e, t) {
      var n = t.track;
      return n && n.kind === e && "ended" !== n.readyState;
    }
    function ue(e) {
      !(function (e) {
        (e._recycledTransceivers.audio = []),
          (e._recycledTransceivers.video = []),
          e._peerConnection.getTransceivers().forEach(function (t) {
            if (
              (function (e, t) {
                return (
                  !e.stopped &&
                  !t._replaceTrackPromises.has(e) &&
                  ["inactive", "recvonly"].includes(e.direction)
                );
              })(t, e)
            ) {
              var n = t.receiver.track;
              e._recycledTransceivers[n.kind].push(t);
            }
          });
      })(e),
        (function (e) {
          var t = e._peerConnection.localDescription;
          t &&
            t.sdp &&
            P(t.sdp).forEach(function (t) {
              k(t).forEach(function (t, n) {
                return e._localCodecs.add(n);
              });
            });
        })(e),
        (function (e) {
          var t = e._peerConnection.remoteDescription;
          t &&
            t.sdp &&
            P(t.sdp).forEach(function (t) {
              var n = t.match(/^a=mid:(.+)$/m);
              if (n && n[1]) {
                var r = n[1],
                  i = k(t);
                e._remoteCodecMaps.set(r, i);
              }
            });
        })(e),
        le(e).then(function () {
          e._handleQueuedPublisherHints();
        });
    }
    function le(e) {
      var t = e._encodingParameters,
        n = t.maxAudioBitrate,
        r = t.maxVideoBitrate,
        i = new Map([
          ["audio", n],
          ["video", r],
        ]),
        o = [];
      return (
        e._peerConnection
          .getSenders()
          .filter(function (e) {
            return e.track;
          })
          .forEach(function (t) {
            var n = i.get(t.track.kind),
              r = t.getParameters();
            null === n || 0 === n
              ? (function (e) {
                  Array.isArray(e.encodings) &&
                    e.encodings.forEach(function (e) {
                      return delete e.maxBitrate;
                    });
                })(r)
              : e._isChromeScreenShareTrack(t.track)
              ? e._log.warn(
                  "Not setting maxBitrate for " +
                    t.track.kind +
                    " Track " +
                    t.track.id +
                    " because it appears to be screen share track: " +
                    t.track.label
                )
              : (function (e, t) {
                  Z
                    ? (e.encodings = [{ maxBitrate: t }])
                    : e.encodings.forEach(function (e) {
                        e.maxBitrate = t;
                      });
                })(r, n),
              !Z &&
                e._enableDscp &&
                r.encodings.length > 0 &&
                (r.encodings[0].networkPriority = "high");
            var a = e._rtpNewSenders.has(t);
            e._maybeUpdateEncodings(t.track, r.encodings, a),
              e._rtpNewSenders.delete(t);
            var s = t.setParameters(r).catch(function (n) {
              e._log.warn(
                "Error while setting encodings parameters for " +
                  t.track.kind +
                  " Track " +
                  t.track.id +
                  ": " +
                  (n.message || n.name)
              );
            });
            o.push(s);
          }),
        Promise.all(o)
      );
    }
    e.exports = re;
  },
  function (e, t, n) {
    var r = n(5),
      i = (e.exports = n(180));
    function o(e, t, n, i) {
      n = n || "";
      var o = new e(r.format.apply(this, [n].concat(i)));
      throw (Error.captureStackTrace(o, t), o);
    }
    function a(e, t, n) {
      o(i.IllegalArgumentError, e, t, n);
    }
    function s(e, t, n) {
      o(i.IllegalStateError, e, t, n);
    }
    function c(e) {
      var t = typeof e;
      if ("object" == t) {
        if (!e) return "null";
        if (e instanceof Array) return "array";
      }
      return t;
    }
    function u(e) {
      return function (t, n) {
        var r = c(t);
        if (r == e) return t;
        a(
          arguments.callee,
          n || 'Expected "' + e + '" but got "' + r + '".',
          Array.prototype.slice.call(arguments, 2)
        );
      };
    }
    (e.exports.checkArgument = function (e, t) {
      e || a(arguments.callee, t, Array.prototype.slice.call(arguments, 2));
    }),
      (e.exports.checkState = function (e, t) {
        e || s(arguments.callee, t, Array.prototype.slice.call(arguments, 2));
      }),
      (e.exports.checkIsDef = function (e, t) {
        if (void 0 !== e) return e;
        a(
          arguments.callee,
          t || "Expected value to be defined but was undefined.",
          Array.prototype.slice.call(arguments, 2)
        );
      }),
      (e.exports.checkIsDefAndNotNull = function (e, t) {
        if (null != e) return e;
        a(
          arguments.callee,
          t ||
            'Expected value to be defined and not null but got "' + c(e) + '".',
          Array.prototype.slice.call(arguments, 2)
        );
      }),
      (e.exports.checkIsString = u("string")),
      (e.exports.checkIsArray = u("array")),
      (e.exports.checkIsNumber = u("number")),
      (e.exports.checkIsBoolean = u("boolean")),
      (e.exports.checkIsFunction = u("function")),
      (e.exports.checkIsObject = u("object"));
  },
  function (e, t, n) {
    var r = n(5);
    function i(e) {
      Error.call(this, e), (this.message = e);
    }
    function o(e) {
      Error.call(this, e), (this.message = e);
    }
    r.inherits(i, Error),
      (i.prototype.name = "IllegalArgumentError"),
      r.inherits(o, Error),
      (o.prototype.name = "IllegalStateError"),
      (e.exports.IllegalStateError = o),
      (e.exports.IllegalArgumentError = i);
  },
  function (e, t, n) {
    var r = n(5),
      i = n(38),
      o = n(86);
    function a(e) {
      o.call(this, e),
        (this.backoffDelay_ = 0),
        (this.nextBackoffDelay_ = this.getInitialDelay()),
        (this.factor_ = a.DEFAULT_FACTOR),
        e &&
          void 0 !== e.factor &&
          (i.checkArgument(
            e.factor > 1,
            "Exponential factor should be greater than 1 but got %s.",
            e.factor
          ),
          (this.factor_ = e.factor));
    }
    r.inherits(a, o),
      (a.DEFAULT_FACTOR = 2),
      (a.prototype.next_ = function () {
        return (
          (this.backoffDelay_ = Math.min(
            this.nextBackoffDelay_,
            this.getMaxDelay()
          )),
          (this.nextBackoffDelay_ = this.backoffDelay_ * this.factor_),
          this.backoffDelay_
        );
      }),
      (a.prototype.reset_ = function () {
        (this.backoffDelay_ = 0),
          (this.nextBackoffDelay_ = this.getInitialDelay());
      }),
      (e.exports = a);
  },
  function (e, t, n) {
    var r = n(4),
      i = n(38),
      o = n(5),
      a = n(85),
      s = n(87);
    function c(e, t, n) {
      r.EventEmitter.call(this),
        i.checkIsFunction(e, "Expected fn to be a function."),
        i.checkIsArray(t, "Expected args to be an array."),
        i.checkIsFunction(n, "Expected callback to be a function."),
        (this.function_ = e),
        (this.arguments_ = t),
        (this.callback_ = n),
        (this.lastResult_ = []),
        (this.numRetries_ = 0),
        (this.backoff_ = null),
        (this.strategy_ = null),
        (this.failAfter_ = -1),
        (this.retryPredicate_ = c.DEFAULT_RETRY_PREDICATE_),
        (this.state_ = c.State_.PENDING);
    }
    o.inherits(c, r.EventEmitter),
      (c.State_ = { PENDING: 0, RUNNING: 1, COMPLETED: 2, ABORTED: 3 }),
      (c.DEFAULT_RETRY_PREDICATE_ = function (e) {
        return !0;
      }),
      (c.prototype.isPending = function () {
        return this.state_ == c.State_.PENDING;
      }),
      (c.prototype.isRunning = function () {
        return this.state_ == c.State_.RUNNING;
      }),
      (c.prototype.isCompleted = function () {
        return this.state_ == c.State_.COMPLETED;
      }),
      (c.prototype.isAborted = function () {
        return this.state_ == c.State_.ABORTED;
      }),
      (c.prototype.setStrategy = function (e) {
        return (
          i.checkState(this.isPending(), "FunctionCall in progress."),
          (this.strategy_ = e),
          this
        );
      }),
      (c.prototype.retryIf = function (e) {
        return (
          i.checkState(this.isPending(), "FunctionCall in progress."),
          (this.retryPredicate_ = e),
          this
        );
      }),
      (c.prototype.getLastResult = function () {
        return this.lastResult_.concat();
      }),
      (c.prototype.getNumRetries = function () {
        return this.numRetries_;
      }),
      (c.prototype.failAfter = function (e) {
        return (
          i.checkState(this.isPending(), "FunctionCall in progress."),
          (this.failAfter_ = e),
          this
        );
      }),
      (c.prototype.abort = function () {
        this.isCompleted() ||
          this.isAborted() ||
          (this.isRunning() && this.backoff_.reset(),
          (this.state_ = c.State_.ABORTED),
          (this.lastResult_ = [new Error("Backoff aborted.")]),
          this.emit("abort"),
          this.doCallback_());
      }),
      (c.prototype.start = function (e) {
        i.checkState(!this.isAborted(), "FunctionCall is aborted."),
          i.checkState(this.isPending(), "FunctionCall already started.");
        var t = this.strategy_ || new s();
        (this.backoff_ = e ? e(t) : new a(t)),
          this.backoff_.on("ready", this.doCall_.bind(this, !0)),
          this.backoff_.on("fail", this.doCallback_.bind(this)),
          this.backoff_.on("backoff", this.handleBackoff_.bind(this)),
          this.failAfter_ > 0 && this.backoff_.failAfter(this.failAfter_),
          (this.state_ = c.State_.RUNNING),
          this.doCall_(!1);
      }),
      (c.prototype.doCall_ = function (e) {
        e && this.numRetries_++;
        var t = ["call"].concat(this.arguments_);
        r.EventEmitter.prototype.emit.apply(this, t);
        var n = this.handleFunctionCallback_.bind(this);
        this.function_.apply(null, this.arguments_.concat(n));
      }),
      (c.prototype.doCallback_ = function () {
        this.callback_.apply(null, this.lastResult_);
      }),
      (c.prototype.handleFunctionCallback_ = function () {
        if (!this.isAborted()) {
          var e = Array.prototype.slice.call(arguments);
          (this.lastResult_ = e),
            r.EventEmitter.prototype.emit.apply(this, ["callback"].concat(e));
          var t = e[0];
          t && this.retryPredicate_(t)
            ? this.backoff_.backoff(t)
            : ((this.state_ = c.State_.COMPLETED), this.doCallback_());
        }
      }),
      (c.prototype.handleBackoff_ = function (e, t, n) {
        this.emit("backoff", e, t, n);
      }),
      (e.exports = c);
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      i = n(1),
      o = i.difference,
      a = i.flatMap;
    function s() {
      return String(Math.floor(4294967295 * Math.random()));
    }
    var c = (function () {
      function e(e, t, n) {
        Object.defineProperties(this, {
          cName: { enumerable: !0, value: n },
          isSimulcastEnabled: { enumerable: !0, value: !1, writable: !0 },
          primarySSRCs: { enumerable: !0, value: new Set() },
          rtxPairs: { enumerable: !0, value: new Map() },
          streamId: { enumerable: !0, value: t },
          trackId: { enumerable: !0, value: e },
        });
      }
      return (
        (e.prototype.addSimulcastSSRCs = function () {
          if (!this.isSimulcastEnabled) {
            var e = [s(), s()];
            e.forEach(function (e) {
              this.primarySSRCs.add(e);
            }, this),
              this.rtxPairs.size &&
                e.forEach(function (e) {
                  this.rtxPairs.set(s(), e);
                }, this);
          }
        }),
        (e.prototype.addSSRC = function (e, t, n) {
          t ? this.rtxPairs.set(e, t) : this.primarySSRCs.add(e),
            (this.isSimulcastEnabled = this.isSimulcastEnabled || n);
        }),
        (e.prototype.toSdpLines = function (e) {
          var t = this,
            n = e
              ? []
              : Array.from(this.rtxPairs.entries()).map(function (e) {
                  return e.reverse();
                }),
            r = Array.from(this.primarySSRCs.values()),
            i = n.length ? a(n) : r,
            o = a(i, function (e) {
              return [
                "a=ssrc:" + e + " cname:" + t.cName,
                "a=ssrc:" + e + " msid:" + t.streamId + " " + t.trackId,
              ];
            }),
            s = n.map(function (e) {
              return "a=ssrc-group:FID " + e.join(" ");
            }),
            c = ["a=ssrc-group:SIM " + r.join(" ")];
          return s.concat(o).concat(c);
        }),
        e
      );
    })();
    function u(e, t) {
      return (e.match(new RegExp(t, "gm")) || []).map(function (e) {
        return (e.match(new RegExp(t)) || []).slice(1);
      });
    }
    function l(e) {
      var t = (function (e) {
          return new Set(
            a(u(e, "^a=ssrc-group:SIM ([0-9]+) ([0-9]+) ([0-9]+)$"))
          );
        })(e),
        n = (function (e) {
          return new Map(
            u(e, "^a=ssrc-group:FID ([0-9]+) ([0-9]+)$").map(function (e) {
              return e.reverse();
            })
          );
        })(e);
      return (function (e) {
        var t = r(a(u(e, "^a=msid:(.+) (.+)$")), 2),
          n = t[0],
          i = t[1];
        return a(u(e, "^a=ssrc:(.+) cname:.+$")).map(function (e) {
          return [e, n, i];
        });
      })(e).reduce(function (r, i) {
        var o = i[0],
          a = i[1],
          s = i[2],
          u =
            r.get(s) ||
            new c(
              s,
              a,
              (function (e, t, n) {
                var r = "a=ssrc:" + t + " " + n + ":(.+)";
                return e.match(new RegExp(r))[1];
              })(e, o, "cname")
            ),
          l = n.get(o) || null;
        return u.addSSRC(o, l, t.has(o)), r.set(s, u);
      }, new Map());
    }
    e.exports = function (e, t) {
      var n = l(e),
        r = Array.from(n.keys()),
        i = Array.from(t.keys()),
        s = o(r, i),
        c = o(i, r);
      a(s, function (e) {
        return n.get(e);
      }).forEach(function (e) {
        e.addSimulcastSSRCs(), t.set(e.trackId, e);
      }),
        (i = Array.from(t.keys()));
      var u = o(i, c),
        d = a(u, function (e) {
          return t.get(e);
        }),
        p = !e.match(/a=rtpmap:[0-9]+ rtx/),
        f = a(d, function (e) {
          return e.toSdpLines(p);
        }),
        h = a(new Set(e.split("\r\n").concat(f)));
      return (
        e.match("a=x-google-flag:conference") ||
          h.push("a=x-google-flag:conference"),
        h.join("\r\n")
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(185),
      i = (function () {
        function e() {
          Object.defineProperties(this, {
            _filter: {
              value: new r({
                getKey: function (e) {
                  return e.ufrag;
                },
                isLessThanOrEqualTo: function (e, t) {
                  return e.revision <= t.revision;
                },
              }),
            },
            _ufrag: { writable: !0, value: null },
            ufrag: {
              enumerable: !0,
              get: function () {
                return this._ufrag;
              },
            },
          });
        }
        return (
          (e.prototype.setUfrag = function (e) {
            this._ufrag = e;
            var t = this._filter.toMap().get(e);
            return t ? t.candidates : [];
          }),
          (e.prototype.update = function (e) {
            e.candidates = e.candidates || [];
            var t = this._filter.toMap().get(e.ufrag),
              n = t ? t.candidates : [];
            return this._filter.update(e) && this._ufrag === e.ufrag
              ? e.candidates.slice(n.length)
              : [];
          }),
          e
        );
      })();
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    var r = (function () {
      function e(e) {
        (e = Object.assign(
          {
            getKey: function (e) {
              return e;
            },
            getValue: function (e) {
              return e;
            },
            isLessThanOrEqualTo: function (e, t) {
              return e <= t;
            },
          },
          e
        )),
          Object.defineProperties(this, {
            _getKey: { value: e.getKey },
            _getValue: { value: e.getValue },
            _isLessThanOrEqualTo: { value: e.isLessThanOrEqualTo },
            _map: { value: new Map() },
          });
      }
      return (
        (e.prototype.toMap = function () {
          return new Map(this._map);
        }),
        (e.prototype.updateAndFilter = function (e) {
          return e.filter(this.update, this);
        }),
        (e.prototype.update = function (e) {
          var t = this._getKey(e),
            n = this._getValue(e);
          return (
            (!this._map.has(t) ||
              !this._isLessThanOrEqualTo(n, this._map.get(t))) &&
            (this._map.set(t, n), !0)
          );
        }),
        e
      );
    })();
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = r.ICE_ACTIVITY_CHECK_PERIOD_MS,
      o = r.ICE_INACTIVITY_THRESHOLD_MS,
      a = (function () {
        function e(e, t) {
          (t = Object.assign(
            { activityCheckPeriodMs: i, inactivityThresholdMs: o },
            t
          )),
            Object.defineProperties(this, {
              _activityCheckPeriodMs: { value: t.activityCheckPeriodMs },
              _inactivityThresholdMs: { value: t.inactivityThresholdMs },
              _lastActivity: { value: null, writable: !0 },
              _peerConnection: { value: e },
              _timer: { value: null, writable: !0 },
              _onIceConnectionStateChanged: { value: null, writable: !0 },
            });
        }
        return (
          (e.prototype._getActivePairStat = function (e) {
            return (
              Array.from(e.values()).find(function (e) {
                return "candidate-pair" === e.type && e.nominated;
              }) || {
                bytesReceived: 0,
                timestamp: Math.round(new Date().getTime()),
              }
            );
          }),
          (e.prototype._getIceConnectionStats = function () {
            var e = this;
            return this._peerConnection
              .getStats()
              .then(function (t) {
                return e._getActivePairStat(t);
              })
              .catch(function () {
                return null;
              });
          }),
          (e.prototype._scheduleInactivityCallback = function (e) {
            var t = this;
            e && null === this._onIceConnectionStateChanged
              ? ((this._onIceConnectionStateChanged = function () {
                  "disconnected" === t._peerConnection.iceConnectionState &&
                    e();
                }),
                this._peerConnection.addEventListener(
                  "iceconnectionstatechange",
                  this._onIceConnectionStateChanged
                ))
              : !e &&
                this._onIceConnectionStateChanged &&
                (this._peerConnection.removeEventListener(
                  "iceconnectionstatechange",
                  this._onIceConnectionStateChanged
                ),
                (this._onIceConnectionStateChanged = null));
          }),
          (e.prototype.start = function (e) {
            var t = this;
            this.stop(),
              (this._timer = setInterval(function () {
                t._getIceConnectionStats().then(function (n) {
                  n &&
                    ((t._lastActivity &&
                      t._lastActivity.bytesReceived === n.bytesReceived) ||
                      ((t._lastActivity = n),
                      t._scheduleInactivityCallback(null)),
                    n.timestamp - t._lastActivity.timestamp >=
                      t._inactivityThresholdMs &&
                      ("disconnected" === t._peerConnection.iceConnectionState
                        ? e()
                        : null === t._onIceConnectionStateChanged &&
                          t._scheduleInactivityCallback(e)));
                });
              }, this._activityCheckPeriodMs));
          }),
          (e.prototype.stop = function () {
            this._scheduleInactivityCallback(null),
              null !== this._timer &&
                (clearInterval(this._timer),
                (this._timer = null),
                (this._lastActivity = null));
          }),
          e
        );
      })();
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(70),
      a = n(188),
      s = (function (e) {
        function t(t) {
          var n =
            e.call(
              this,
              t.label,
              t.maxPacketLifeTime,
              t.maxRetransmits,
              t.ordered
            ) || this;
          return (
            Object.defineProperties(n, { _dataChannel: { value: t } }),
            (t.binaryType = "arraybuffer"),
            t.addEventListener("message", function (e) {
              n.emit("message", e.data);
            }),
            t.addEventListener("close", function () {
              n.emit("close");
            }),
            n
          );
        }
        return (
          i(t, e),
          (t.prototype.stop = function () {
            this._dataChannel.close(), e.prototype.stop.call(this);
          }),
          (t.prototype.toDataTransport = function () {
            return new a(this._dataChannel);
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (
            Object.defineProperties(n, {
              _dataChannel: { value: t },
              _messageQueue: { value: [] },
            }),
            t.addEventListener("open", function () {
              n._messageQueue.splice(0).forEach(function (e) {
                return n._publish(e);
              });
            }),
            t.addEventListener("message", function (e) {
              var t = e.data;
              try {
                var r = JSON.parse(t);
                n.emit("message", r);
              } catch (e) {}
            }),
            n.publish({ type: "ready" }),
            n
          );
        }
        return (
          i(t, e),
          (t.prototype._publish = function (e) {
            var t = JSON.stringify(e);
            try {
              this._dataChannel.send(t);
            } catch (e) {}
          }),
          (t.prototype.publish = function (e) {
            var t = this._dataChannel;
            return (
              "closing" !== t.readyState &&
              "closed" !== t.readyState &&
              ("connecting" === t.readyState
                ? (this._messageQueue.push(e), !0)
                : (this._publish(e), !0))
            );
          }),
          t
        );
      })(n(4).EventEmitter);
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return i(t, e), t;
      })(n(67));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r = n(39).getMediaSections,
      i = (function () {
        function e() {
          Object.defineProperties(this, {
            _midsToTrackIds: { value: new Map(), writable: !0 },
          });
        }
        return (
          (e.prototype.match = function (e) {
            return this._midsToTrackIds.get(e.transceiver.mid) || null;
          }),
          (e.prototype.update = function (e) {
            var t = r(e, "(audio|video)");
            this._midsToTrackIds = t.reduce(function (e, t) {
              var n = t.match(/^a=mid:(.+)$/m) || [],
                r = t.match(/^a=msid:.+ (.+)$/m) || [],
                i = n[1],
                o = r[1];
              return i && o ? e.set(i, o) : e;
            }, this._midsToTrackIds);
          }),
          e
        );
      })();
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    var r = n(13).RTCSessionDescription,
      i = n(39),
      o = i.createPtToCodecName,
      a = i.getMediaSections;
    function s(e) {
      var t = o(e);
      e = (function (e, t) {
        return Array.from(t.keys()).reduce(function (e, n) {
          var r = new RegExp("^a=rtpmap:" + n + " rtx.+$", "gm");
          return (e.match(r) || [])
            .slice("rtx" === t.get(n) ? 1 : 0)
            .reduce(function (e, t) {
              var r = new RegExp("\r\n" + t),
                i = new RegExp("\r\na=fmtp:" + n + " apt=[0-9]+");
              return e.replace(r, "").replace(i, "");
            }, e);
        }, e);
      })(e, t);
      var n = (function (e) {
          var t = new Map();
          return (
            e.forEach(function (e, n) {
              var r = t.get(e) || new Set();
              return t.set(e, r.add(n));
            }),
            t
          );
        })(t),
        r = n.get("rtx") || new Set(),
        i = new Set(),
        a = (function (e, t) {
          var n = Array.from(e).reduce(function (e, t) {
            var n = t[0],
              r = t[1],
              i = e.get(r) || new Set();
            return e.set(r, i.add(n));
          }, new Map());
          return Array.from(n).reduce(function (e, n) {
            var r = n[0],
              i = Array.from(n[1]);
            return i.length > 1
              ? (i.forEach(function (e) {
                  t.add(e);
                }),
                e)
              : e.set(r, i[0]);
          }, new Map());
        })(
          (function (e, t, n, r) {
            return Array.from(n).reduce(function (n, i) {
              var o = new RegExp("a=fmtp:" + i + " apt=(\\d+)"),
                a = e.match(o);
              if (!a) return r.add(i), n;
              var s = Number.parseInt(a[1]);
              return t.has(s)
                ? "rtx" === t.get(s)
                  ? (r.add(i), n)
                  : n.set(i, s)
                : (r.add(i), n);
            }, new Map());
          })(e, t, r, i),
          i
        ),
        s = Array.from(i);
      return (
        ["h264", "vp8", "vp9"]
          .reduce(function (e, t) {
            var r = n.get(t) || new Set();
            return Array.from(r).reduce(function (e, t) {
              return a.has(t) ? e : e.add(t);
            }, e);
          }, new Set())
          .forEach(function (t) {
            if (s.length) {
              var n = s.shift();
              e = (function (e, t, n) {
                return e.endsWith("\r\n")
                  ? e + "a=fmtp:" + t + " apt=" + n + "\r\n"
                  : e + "\r\na=fmtp:" + t + " apt=" + n;
              })((e = c(e, n)), n, t);
            }
          }),
        s.forEach(function (t) {
          e = (function (e, t) {
            var n = new RegExp("a=rtpmap:" + t + ".*\r\n", "gm");
            return e.replace(n, "");
          })((e = c(e, t)), t);
        }),
        e
      );
    }
    function c(e, t) {
      var n = new RegExp("a=fmtp:" + t + ".*\r\n", "gm");
      return e.replace(n, "");
    }
    e.exports = function (e) {
      var t,
        n,
        i = { type: e.type };
      return (
        "rollback" !== e.type &&
          (i.sdp =
            ((t = e.sdp),
            (n = a(t)),
            [t.split("\r\nm=")[0]].concat(n.map(s)).join("\r\n"))),
        new r(i)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      s = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            Object.defineProperties(t, { _queuedEvents: { value: new Map() } }),
            t
          );
        }
        return (
          i(t, e),
          (t.prototype.dequeue = function (e) {
            var t = this,
              n = !0;
            if (!e)
              return (
                this._queuedEvents.forEach(function (e, t) {
                  n = this.dequeue(t) && n;
                }, this),
                n
              );
            var r = this._queuedEvents.get(e) || [];
            return (
              this._queuedEvents.delete(e),
              r.reduce(function (n, r) {
                return t.emit.apply(t, a([], o([e].concat(r)))) && n;
              }, n)
            );
          }),
          (t.prototype.queue = function () {
            var e = [].slice.call(arguments);
            if (this.emit.apply(this, a([], o(e)))) return !0;
            var t = e[0];
            return (
              this._queuedEvents.has(t) || this._queuedEvents.set(t, []),
              this._queuedEvents.get(t).push(e.slice(1)),
              !1
            );
          }),
          t
        );
      })(n(4).EventEmitter);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a = n(194),
      s = n(195),
      c = n(202),
      u = n(204),
      l = n(95),
      d = n(205),
      p = n(80),
      f = n(217),
      h = n(218),
      v = n(219),
      _ = n(220),
      m = n(1),
      y = m.constants.DEFAULT_SESSION_TIMEOUT_SEC,
      g = m.createBandwidthProfilePayload,
      b = m.defer,
      w = m.difference,
      k = m.filterObject,
      S = m.flatMap,
      T = m.oncePerTick,
      O = n(73),
      P = n(9).createTwilioError,
      C = (function (e) {
        function t(t, n, r, i, o) {
          var l = this;
          (n.options = Object.assign({ session_timeout: y }, n.options)),
            (o = Object.assign(
              {
                DominantSpeakerSignaling: a,
                NetworkQualityMonitor: s,
                NetworkQualitySignaling: c,
                RecordingSignaling: u,
                RemoteParticipantV2: d,
                TrackPrioritySignaling: f,
                TrackSwitchOffSignaling: h,
                bandwidthProfile: null,
                sessionTimeout: 1e3 * n.options.session_timeout,
                statsPublishIntervalMs: 1e4,
              },
              o
            )),
            t.setBandwidthProfile(o.bandwidthProfile),
            i.setIceReconnectTimeout(o.sessionTimeout);
          var m = function (e) {
              return l._getTrackReceiver(e);
            },
            g = (l = e.call(this, t, n.sid, n.name, o) || this)._log;
          return (
            Object.defineProperties(l, {
              _disconnectedParticipantRevisions: { value: new Map() },
              _NetworkQualityMonitor: { value: o.NetworkQualityMonitor },
              _lastBandwidthProfileRevision: {
                value: t.bandwidthProfileRevision,
                writable: !0,
              },
              _networkQualityMonitor: { value: null, writable: !0 },
              _networkQualityConfiguration: {
                value: t.networkQualityConfiguration,
              },
              _peerConnectionManager: { value: i },
              _published: { value: new Map() },
              _publishedRevision: { value: 0, writable: !0 },
              _RemoteParticipantV2: { value: o.RemoteParticipantV2 },
              _subscribed: { value: new Map() },
              _subscribedRevision: { value: 0, writable: !0 },
              _subscriptionFailures: { value: new Map() },
              _dominantSpeakerSignaling: {
                value: new o.DominantSpeakerSignaling(m, { log: g }),
              },
              _networkQualitySignaling: {
                value: new o.NetworkQualitySignaling(
                  m,
                  t.networkQualityConfiguration,
                  { log: g }
                ),
              },
              _renderHintsSignaling: { value: new v(m, { log: g }) },
              _publisherHintsSignaling: { value: new _(m, { log: g }) },
              _trackPrioritySignaling: {
                value: new o.TrackPrioritySignaling(m, { log: g }),
              },
              _trackSwitchOffSignaling: {
                value: new o.TrackSwitchOffSignaling(m, { log: g }),
              },
              _pendingSwitchOffStates: { value: new Map() },
              _transport: { value: r },
              _trackReceiverDeferreds: { value: new Map() },
              mediaRegion: {
                enumerable: !0,
                value: n.options.media_region || null,
              },
            }),
            l._initTrackSwitchOffSignaling(),
            l._initDominantSpeakerSignaling(),
            l._initNetworkQualityMonitorSignaling(),
            l._initPublisherHintSignaling(),
            (function (e, t) {
              var n = T(function () {
                  e._publishNewLocalParticipantState();
                }),
                r = T(function () {
                  var n = S(t.tracks, function (e) {
                    return e.trackTransceiver;
                  });
                  e._peerConnectionManager.setTrackSenders(n);
                });
              t.on("trackAdded", r),
                t.on("trackRemoved", r),
                t.on("updated", n),
                e.on("stateChanged", function i(o) {
                  "disconnected" === o &&
                    (t.removeListener("trackAdded", r),
                    t.removeListener("trackRemoved", r),
                    t.removeListener("updated", n),
                    e.removeListener("stateChanged", i),
                    t.disconnect());
                }),
                e.on("signalingConnectionStateChanged", function () {
                  var t = e.localParticipant,
                    n = e.signalingConnectionState,
                    r = t.identity,
                    i = t.sid;
                  switch (n) {
                    case "connected":
                      t.connect(i, r);
                      break;
                    case "reconnecting":
                      t.reconnecting();
                  }
                });
            })(l, t),
            (function (e, t) {
              t.on("description", function (t) {
                e._publishPeerConnectionState(t);
              }),
                t.dequeue("description"),
                t.on("candidates", function (t) {
                  e._publishPeerConnectionState(t);
                }),
                t.dequeue("candidates"),
                t.on("trackAdded", e._addTrackReceiver.bind(e)),
                t.dequeue("trackAdded"),
                t.getTrackReceivers().forEach(e._addTrackReceiver, e),
                t.on("connectionStateChanged", function () {
                  e.emit("connectionStateChanged");
                }),
                t.on("iceConnectionStateChanged", function () {
                  e.emit("iceConnectionStateChanged"),
                    "failed" === e.iceConnectionState &&
                      (null !== e.localParticipant.networkQualityLevel &&
                        e.localParticipant.setNetworkQualityLevel(0),
                      e.participants.forEach(function (e) {
                        null !== e.networkQualityLevel &&
                          e.setNetworkQualityLevel(0);
                      }));
                });
            })(l, i),
            (function (e, t) {
              t.on("message", e._update.bind(e)),
                t.on("stateChanged", function n(r, i) {
                  "disconnected" === r &&
                    ("disconnected" !== e.state && e._disconnect(i),
                    t.removeListener("stateChanged", n)),
                    e.emit("signalingConnectionStateChanged");
                });
            })(l, r),
            (function (e, t, n) {
              var r = new Map(),
                i = !1,
                o = setInterval(function () {
                  e.getStats().then(
                    function (e) {
                      (i = !i),
                        e.forEach(function (e, n) {
                          var o = new p(n, e, !0);
                          t.publishEvent("quality", "stats-report", "info", {
                            audioTrackStats: o.remoteAudioTrackStats.map(
                              function (t, n) {
                                return L(t, e.remoteAudioTrackStats[n], r);
                              }
                            ),
                            localAudioTrackStats: o.localAudioTrackStats.map(
                              function (t, n) {
                                return j(t, e.localAudioTrackStats[n], r);
                              }
                            ),
                            localVideoTrackStats: o.localVideoTrackStats.map(
                              function (t, n) {
                                return j(t, e.localVideoTrackStats[n], r);
                              }
                            ),
                            peerConnectionId: o.peerConnectionId,
                            videoTrackStats: o.remoteVideoTrackStats.map(
                              function (t, n) {
                                return L(t, e.remoteVideoTrackStats[n], r);
                              }
                            ),
                          });
                          var a = S(
                            [
                              "localAudioTrackStats",
                              "localVideoTrackStats",
                              "remoteAudioTrackStats",
                              "remoteVideoTrackStats",
                            ],
                            function (e) {
                              return o[e].map(function (e) {
                                var t = e.ssrc;
                                return e.trackSid + "+" + t;
                              });
                            }
                          );
                          if (
                            (w(Array.from(r.keys()), a).forEach(function (e) {
                              return r.delete(e);
                            }),
                            i)
                          ) {
                            var s = (function (e, t) {
                              return (
                                ((e = Object.assign(
                                  {
                                    availableIncomingBitrate: 0,
                                    availableOutgoingBitrate: 0,
                                    bytesReceived: 0,
                                    bytesSent: 0,
                                    consentRequestsSent: 0,
                                    currentRoundTripTime: 0,
                                    lastPacketReceivedTimestamp: 0,
                                    lastPacketSentTimestamp: 0,
                                    nominated: !1,
                                    peerConnectionId: t,
                                    priority: 0,
                                    readable: !1,
                                    requestsReceived: 0,
                                    requestsSent: 0,
                                    responsesReceived: 0,
                                    responsesSent: 0,
                                    retransmissionsReceived: 0,
                                    retransmissionsSent: 0,
                                    state: "failed",
                                    totalRoundTripTime: 0,
                                    transportId: "",
                                    writable: !1,
                                  },
                                  k(e || {}, null)
                                )).localCandidate = Object.assign(
                                  {
                                    candidateType: "host",
                                    deleted: !1,
                                    ip: "",
                                    port: 0,
                                    priority: 0,
                                    protocol: "udp",
                                    url: "",
                                  },
                                  k(e.localCandidate || {}, null)
                                )),
                                (e.remoteCandidate = Object.assign(
                                  {
                                    candidateType: "host",
                                    ip: "",
                                    port: 0,
                                    priority: 0,
                                    protocol: "udp",
                                    url: "",
                                  },
                                  k(e.remoteCandidate || {}, null)
                                )),
                                e
                              );
                            })(e.activeIceCandidatePair, o.peerConnectionId);
                            t.publishEvent(
                              "quality",
                              "active-ice-candidate-pair",
                              "info",
                              s
                            );
                          }
                        });
                    },
                    function () {}
                  );
                }, n);
              e.on("stateChanged", function t(n) {
                "disconnected" === n &&
                  (clearInterval(o), e.removeListener("stateChanged", t));
              });
            })(l, r, o.statsPublishIntervalMs),
            l._update(n),
            l._peerConnectionManager.setEffectiveAdaptiveSimulcast(
              l._publisherHintsSignaling.isSetup
            ),
            l
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "connectionState", {
            get: function () {
              return this._peerConnectionManager.connectionState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "signalingConnectionState", {
            get: function () {
              return "syncing" === this._transport.state
                ? "reconnecting"
                : this._transport.state;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "iceConnectionState", {
            get: function () {
              return this._peerConnectionManager.iceConnectionState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype._deleteTrackReceiverDeferred = function (e) {
            return this._trackReceiverDeferreds.delete(e);
          }),
          (t.prototype._getOrCreateTrackReceiverDeferred = function (e) {
            var t = this._trackReceiverDeferreds.get(e) || b(),
              n = this._peerConnectionManager
                .getTrackReceivers()
                .find(function (t) {
                  return t.id === e && "ended" !== t.readyState;
                });
            return n ? t.resolve(n) : this._trackReceiverDeferreds.set(e, t), t;
          }),
          (t.prototype._addTrackReceiver = function (e) {
            return (
              this._getOrCreateTrackReceiverDeferred(e.id).resolve(e), this
            );
          }),
          (t.prototype._disconnect = function (t) {
            var n = e.prototype._disconnect.call(this, t);
            return (
              n &&
                (this._teardownNetworkQualityMonitor(),
                this._transport.disconnect(),
                this._peerConnectionManager.close()),
              this.localParticipant.tracks.forEach(function (e) {
                e.publishFailed(
                  t || new Error("LocalParticipant disconnected")
                );
              }),
              n
            );
          }),
          (t.prototype._getTrackReceiver = function (e) {
            var t = this;
            return this._getOrCreateTrackReceiverDeferred(e).promise.then(
              function (n) {
                return t._deleteTrackReceiverDeferred(e), n;
              }
            );
          }),
          (t.prototype._getInitialTrackSwitchOffState = function (e) {
            var t = this._pendingSwitchOffStates.get(e) || !1;
            return (
              this._pendingSwitchOffStates.delete(e),
              t && this._log.warn("[" + e + "] was initially switched off! "),
              t
            );
          }),
          (t.prototype._getTrackSidsToTrackSignalings = function () {
            var e = S(this.participants, function (e) {
              return Array.from(e.tracks);
            });
            return new Map(e);
          }),
          (t.prototype._getOrCreateRemoteParticipant = function (e) {
            var t = this,
              n = this._RemoteParticipantV2,
              r = this.participants.get(e.sid),
              i = this;
            return (
              r ||
                ((r = new n(
                  e,
                  function (e) {
                    return t._getInitialTrackSwitchOffState(e);
                  },
                  function (e, n) {
                    return t._trackPrioritySignaling.sendTrackPriorityUpdate(
                      e,
                      "subscribe",
                      n
                    );
                  },
                  function (e, n) {
                    return t._renderHintsSignaling.setTrackHint(e, n);
                  },
                  function (e) {
                    return t._renderHintsSignaling.clearTrackHint(e);
                  }
                )).on("stateChanged", function e(t) {
                  "disconnected" === t &&
                    (r.removeListener("stateChanged", e),
                    i.participants.delete(r.sid),
                    i._disconnectedParticipantRevisions.set(r.sid, r.revision));
                }),
                this.connectParticipant(r)),
              r
            );
          }),
          (t.prototype._getState = function () {
            return { participant: this.localParticipant.getState() };
          }),
          (t.prototype._maybeAddBandwidthProfile = function (e) {
            var t = this.localParticipant,
              n = t.bandwidthProfile,
              r = t.bandwidthProfileRevision;
            return n && this._lastBandwidthProfileRevision < r
              ? ((this._lastBandwidthProfileRevision = r),
                Object.assign({ bandwidth_profile: g(n) }, e))
              : e;
          }),
          (t.prototype._publishNewLocalParticipantState = function () {
            this._transport.publish(
              this._maybeAddBandwidthProfile(this._getState())
            );
          }),
          (t.prototype._publishPeerConnectionState = function (e) {
            this._transport.publish(
              Object.assign({ peer_connections: [e] }, this._getState())
            );
          }),
          (t.prototype._update = function (e) {
            var t = this;
            if (
              e.subscribed &&
              e.subscribed.revision > this._subscribedRevision
            ) {
              (this._subscribedRevision = e.subscribed.revision),
                e.subscribed.tracks.forEach(function (e) {
                  e.id
                    ? (t._subscriptionFailures.delete(e.sid),
                      t._subscribed.set(e.sid, e.id))
                    : e.error &&
                      !t._subscriptionFailures.has(e.sid) &&
                      t._subscriptionFailures.set(e.sid, e.error);
                });
              var n = new Set(
                e.subscribed.tracks
                  .filter(function (e) {
                    return !!e.id;
                  })
                  .map(function (e) {
                    return e.sid;
                  })
              );
              this._subscribed.forEach(function (e, r) {
                n.has(r) || t._subscribed.delete(r);
              });
            }
            var r,
              i,
              o = new Set();
            return (
              (e.participants || []).forEach(function (e) {
                if (e.sid !== t.localParticipant.sid) {
                  var n = t._disconnectedParticipantRevisions.get(e.sid);
                  if (!(n && e.revision <= n)) {
                    n && t._disconnectedParticipantRevisions.delete(e.sid);
                    var r = t._getOrCreateRemoteParticipant(e);
                    r.update(e), o.add(r);
                  }
                }
              }),
              "synced" === e.type &&
                this.participants.forEach(function (e) {
                  o.has(e) || e.disconnect();
                }),
              (i = (r = this)._getTrackSidsToTrackSignalings()),
              r._subscriptionFailures.forEach(function (e, t) {
                var n = i.get(t);
                n &&
                  (r._subscriptionFailures.delete(t),
                  n.subscribeFailed(P(e.code, e.message)));
              }),
              i.forEach(function (e) {
                var t = r._subscribed.get(e.sid);
                (!t || (e.isSubscribed && e.trackTransceiver.id !== t)) &&
                  e.setTrackTransceiver(null),
                  t &&
                    r._getTrackReceiver(t).then(function (t) {
                      return e.setTrackTransceiver(t);
                    });
              }),
              e.peer_connections &&
                this._peerConnectionManager.update(
                  e.peer_connections,
                  "synced" === e.type
                ),
              e.recording && this.recording.update(e.recording),
              e.published &&
                e.published.revision > this._publishedRevision &&
                ((this._publishedRevision = e.published.revision),
                e.published.tracks.forEach(function (e) {
                  e.sid && t._published.set(e.id, e.sid);
                }),
                this.localParticipant.update(e.published)),
              e.participant &&
                this.localParticipant.connect(
                  e.participant.sid,
                  e.participant.identity
                ),
              [
                this._dominantSpeakerSignaling,
                this._networkQualitySignaling,
                this._trackPrioritySignaling,
                this._trackSwitchOffSignaling,
                this._renderHintsSignaling,
                this._publisherHintsSignaling,
              ].forEach(function (t) {
                var n = t.channel;
                !t.isSetup &&
                  e.media_signaling &&
                  e.media_signaling[n] &&
                  e.media_signaling[n].transport &&
                  "data-channel" === e.media_signaling[n].transport.type &&
                  t.setup(e.media_signaling[n].transport.label);
              }),
              this
            );
          }),
          (t.prototype._initPublisherHintSignaling = function () {
            var e = this;
            this._publisherHintsSignaling.on("updated", function (t, n) {
              Promise.all(
                t.map(function (t) {
                  return e.localParticipant
                    .setPublisherHint(t.track, t.encodings)
                    .then(function (e) {
                      return { track: t.track, result: e };
                    });
                })
              ).then(function (t) {
                e._publisherHintsSignaling.sendHintResponse({
                  id: n,
                  hints: t,
                });
              });
            });
            var t = function (t) {
              "video" === t.kind &&
                t.trackTransceiver.on("replaced", function () {
                  e._publisherHintsSignaling.sendTrackReplaced({
                    trackSid: t.sid,
                  });
                });
            };
            Array.from(this.localParticipant.tracks.values()).forEach(function (
              e
            ) {
              return t(e);
            }),
              this.localParticipant.on("trackAdded", function (e) {
                return t(e);
              });
          }),
          (t.prototype._initTrackSwitchOffSignaling = function () {
            var e = this;
            this._trackSwitchOffSignaling.on("updated", function (t, n) {
              try {
                e._log.debug("received trackSwitch: ", {
                  tracksOn: n,
                  tracksOff: t,
                });
                var r = new Map();
                n.forEach(function (e) {
                  return r.set(e, !0);
                }),
                  t.forEach(function (t) {
                    r.get(t) &&
                      e._log.warn(
                        t + " is DUPLICATED in both tracksOff and tracksOn list"
                      ),
                      r.set(t, !1);
                  }),
                  e.participants.forEach(function (e) {
                    e.tracks.forEach(function (e) {
                      var t = r.get(e.sid);
                      void 0 !== t && (e.setSwitchedOff(!t), r.delete(e.sid));
                    });
                  }),
                  r.forEach(function (t, n) {
                    return e._pendingSwitchOffStates.set(n, !t);
                  });
              } catch (t) {
                e._log.error("error processing track switch off:", t);
              }
            });
          }),
          (t.prototype._initDominantSpeakerSignaling = function () {
            var e = this;
            this._dominantSpeakerSignaling.on("updated", function () {
              return e.setDominantSpeaker(
                e._dominantSpeakerSignaling.loudestParticipantSid
              );
            });
          }),
          (t.prototype._initNetworkQualityMonitorSignaling = function () {
            var e = this;
            this._networkQualitySignaling.on("ready", function () {
              var t = new e._NetworkQualityMonitor(
                e._peerConnectionManager,
                e._networkQualitySignaling
              );
              (e._networkQualityMonitor = t),
                t.on("updated", function () {
                  "failed" !== e.iceConnectionState &&
                    (e.localParticipant.setNetworkQualityLevel(
                      t.level,
                      t.levels
                    ),
                    e.participants.forEach(function (e) {
                      var n = t.remoteLevels.get(e.sid);
                      n && e.setNetworkQualityLevel(n.level, n);
                    }));
                }),
                t.start();
            }),
              this._networkQualitySignaling.on("teardown", function () {
                return e._teardownNetworkQualityMonitor();
              });
          }),
          (t.prototype._teardownNetworkQualityMonitor = function () {
            this._networkQualityMonitor &&
              (this._networkQualityMonitor.stop(),
              (this._networkQualityMonitor = null));
          }),
          (t.prototype.getStats = function () {
            var e = this;
            return this._peerConnectionManager.getStats().then(function (t) {
              return new Map(
                Array.from(t).map(function (t) {
                  var n = o(t, 2),
                    r = n[0],
                    i = n[1];
                  return [
                    r,
                    Object.assign({}, i, {
                      localAudioTrackStats: R(e, i.localAudioTrackStats),
                      localVideoTrackStats: R(e, i.localVideoTrackStats),
                      remoteAudioTrackStats: x(e, i.remoteAudioTrackStats),
                      remoteVideoTrackStats: x(e, i.remoteVideoTrackStats),
                    }),
                  ];
                })
              );
            });
          }),
          t
        );
      })(l);
    function E(e, t) {
      return t.reduce(function (t, n) {
        var r = e.get(n.trackId);
        return r ? [Object.assign({}, n, { trackSid: r })].concat(t) : t;
      }, []);
    }
    function R(e, t) {
      return E(e._published, t);
    }
    function x(e, t) {
      return E(
        new Map(
          Array.from(e._subscribed.entries()).map(function (e) {
            var t = o(e, 2),
              n = t[0];
            return [t[1], n];
          })
        ),
        t
      );
    }
    function j(e, t, n) {
      var r = t.framesEncoded,
        i = t.packetsSent,
        o = t.totalEncodeTime,
        a = t.totalPacketSendDelay,
        s = Object.assign({}, e),
        c = e.trackSid + "+" + e.ssrc,
        u = n.get(c) || new Map();
      if ("number" == typeof o && "number" == typeof r) {
        var l = u.get("avgEncodeDelay") || new O();
        l.putSample(1e3 * o, r),
          (s.avgEncodeDelay = Math.round(l.get())),
          u.set("avgEncodeDelay", l);
      }
      if ("number" == typeof a && "number" == typeof i) {
        var d = u.get("avgPacketSendDelay") || new O();
        d.putSample(1e3 * a, i),
          (s.avgPacketSendDelay = Math.round(d.get())),
          u.set("avgPacketSendDelay", d);
      }
      return n.set(c, u), s;
    }
    function L(e, t, n) {
      var r = t.estimatedPlayoutTimestamp,
        i = t.framesDecoded,
        o = t.jitterBufferDelay,
        a = t.jitterBufferEmittedCount,
        s = t.totalDecodeTime,
        c = Object.assign({}, e),
        u = e.trackSid + "+" + e.ssrc,
        l = n.get(u) || new Map();
      if (
        ("number" == typeof r && (c.estimatedPlayoutTimestamp = r),
        "number" == typeof i && "number" == typeof s)
      ) {
        var d = l.get("avgDecodeDelay") || new O();
        d.putSample(1e3 * s, i),
          (c.avgDecodeDelay = Math.round(d.get())),
          l.set("avgDecodeDelay", d);
      }
      if ("number" == typeof o && "number" == typeof a) {
        var p = l.get("avgJitterBufferDelay") || new O();
        p.putSample(1e3 * o, a),
          (c.avgJitterBufferDelay = Math.round(p.get())),
          l.set("avgJitterBufferDelay", p);
      }
      return n.set(u, l), c;
    }
    e.exports = C;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, "active_speaker", n) || this;
          return (
            Object.defineProperties(r, {
              _loudestParticipantSid: { value: null, writable: !0 },
            }),
            r.on("ready", function (e) {
              e.on("message", function (e) {
                switch (e.type) {
                  case "active_speaker":
                    r._setLoudestParticipantSid(e.participant);
                }
              });
            }),
            r
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "loudestParticipantSid", {
            get: function () {
              return this._loudestParticipantSid;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype._setLoudestParticipantSid = function (e) {
            this.loudestParticipantSid !== e &&
              ((this._loudestParticipantSid = e), this.emit("updated"));
          }),
          t
        );
      })(n(20));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a = n(4),
      s = n(196),
      c = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            Object.defineProperties(r, {
              _factories: { value: new WeakMap() },
              _manager: { value: t },
              _signaling: { value: n },
            }),
            n.on("updated", function () {
              return r.emit("updated");
            }),
            r
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "level", {
            get: function () {
              return this._signaling.level;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "levels", {
            get: function () {
              return this._signaling.levels;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "remoteLevels", {
            get: function () {
              return this._signaling.remoteLevels;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.start = function () {
            var e = this;
            this.stop();
            var t = setTimeout(function () {
              var n, r;
              e._timeout === t &&
                ((n = e),
                (r = (
                  n._manager._peerConnections
                    ? Array.from(n._manager._peerConnections.values())
                    : []
                )
                  .map(function (e) {
                    return e._peerConnection;
                  })
                  .filter(function (e) {
                    return "closed" !== e.signalingState;
                  })
                  .map(function (e) {
                    if (n._factories.has(e)) return n._factories.get(e);
                    var t = new s(e);
                    return n._factories.set(e, t), t;
                  })
                  .map(function (e) {
                    return e.next().catch(function () {
                      return null;
                    });
                  })),
                Promise.all(r).then(function (e) {
                  return e
                    .filter(function (e) {
                      return e;
                    })
                    .map(function (e) {
                      return e.summarize();
                    });
                })).then(function (n) {
                  if (e._timeout === t) {
                    if (n.length) {
                      var r = o(n, 1)[0];
                      e._signaling.put(r);
                    }
                    e.start();
                  }
                });
            }, 200);
            this._timeout = t;
          }),
          (t.prototype.stop = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          t
        );
      })(a);
    e.exports = c;
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      i =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
            e[i] = t[n];
          return e;
        },
      o =
        (this && this.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      a = n(3).guessBrowser,
      s = n(197),
      c = n(199),
      u = n(200),
      l = n(201),
      d = (function () {
        function e(e) {
          Object.defineProperties(this, {
            pc: { enumerable: !0, value: e },
            ice: { enumerable: !0, value: new s() },
            audio: {
              enumerable: !0,
              value: { send: new Map(), recv: new Map() },
            },
            video: {
              enumerable: !0,
              value: { send: new Map(), recv: new Map() },
            },
            lastReport: { enumerable: !0, value: null, writable: !0 },
          });
        }
        return (
          (e.prototype.next = function () {
            var e,
              t,
              n,
              o = this;
            return (
              "firefox" === a()
                ? ((t = (e = this).pc
                    .getTransceivers()
                    .filter(function (e) {
                      return (
                        e.currentDirection &&
                        e.currentDirection.match(/send/) &&
                        e.sender.track
                      );
                    })
                    .map(function (e) {
                      return e.sender;
                    })),
                  (n = e.pc
                    .getTransceivers()
                    .filter(function (e) {
                      return (
                        e.currentDirection && e.currentDirection.match(/recv/)
                      );
                    })
                    .map(function (e) {
                      return e.receiver;
                    })),
                  Promise.all([p(t), p(n), e.pc.getStats()]).then(function (t) {
                    var n = r(t, 3),
                      i = n[0],
                      o = n[1],
                      a = n[2],
                      s = h(e),
                      c = y(e);
                    i.forEach(function (t, n) {
                      return b(e, t, c, n);
                    }),
                      k(s, c);
                    var u = v(e),
                      l = g(e);
                    o.forEach(function (t, n) {
                      return w(e, t, l, n);
                    }),
                      k(u, l),
                      S(e.ice, a);
                  }))
                : (function (e) {
                    return e.pc.getStats().then(function (t) {
                      var n = h(e),
                        r = y(e);
                      b(e, t, r), k(n, r);
                      var i = v(e),
                        o = g(e);
                      w(e, t, o), k(i, o), S(e.ice, t);
                    });
                  })(this)
            ).then(function () {
              var e = i([], r(o.audio.send.values())),
                t = i([], r(o.video.send.values())),
                n = i([], r(o.audio.recv.values())),
                a = i([], r(o.video.recv.values())),
                s = new c(
                  o.ice.lastReport,
                  {
                    send: e
                      .map(function (e) {
                        return e.lastReport;
                      })
                      .filter(function (e) {
                        return e;
                      }),
                    recv: n
                      .map(function (e) {
                        return e.lastReport;
                      })
                      .filter(function (e) {
                        return e;
                      }),
                  },
                  {
                    send: t
                      .map(function (e) {
                        return e.lastReport;
                      })
                      .filter(function (e) {
                        return e;
                      }),
                    recv: a
                      .map(function (e) {
                        return e.lastReport;
                      })
                      .filter(function (e) {
                        return e;
                      }),
                  }
                );
              return (o.lastReport = s), s;
            });
          }),
          e
        );
      })();
    function p(e) {
      return Promise.all(
        e.map(function (e) {
          var t = e.track.id;
          return e.getStats().then(function (e) {
            var n, r;
            try {
              for (var i = o(e.values()), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                "inbound-rtp" === s.type && (s.id = t + "-" + s.id);
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                a && !a.done && (r = i.return) && r.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            return [t, e];
          });
        })
      ).then(function (e) {
        return new Map(e);
      });
    }
    function f(e, t, n, r, i) {
      var o = t[r.mediaType];
      if (!i) {
        var a = n.get(r.trackId);
        a && (i = a.trackIdentifier);
      }
      if (o && i) {
        if (o.has(r.id)) return o.get(r.id);
        var s = new e(i, r);
        o.set(r.id, s);
      }
      return null;
    }
    function h(e) {
      return { audio: e.audio.send, video: e.video.send };
    }
    function v(e) {
      return { audio: e.audio.recv, video: e.video.recv };
    }
    function _(e, t, n, r) {
      return f(l, h(e), t, n, r);
    }
    function m(e, t, n, r) {
      return f(u, v(e), t, n, r);
    }
    function y(e) {
      return {
        audio: new Set(e.audio.send.keys()),
        video: new Set(e.video.send.keys()),
      };
    }
    function g(e) {
      return {
        audio: new Set(e.audio.recv.keys()),
        video: new Set(e.video.recv.keys()),
      };
    }
    function b(e, t, n, r) {
      var i, s;
      try {
        for (var c = o(t.values()), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          if ("outbound-rtp" === l.type && !l.isRemote) {
            if ("firefox" !== a() && !l.trackId) continue;
            var d = n[l.mediaType];
            d && d.delete(l.id);
            var p = _(e, t, l, r);
            if (p) {
              var f = t.get(l.remoteId);
              p.next(r || p.trackId, l, f);
            }
          }
        }
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          u && !u.done && (s = c.return) && s.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
    }
    function w(e, t, n, r) {
      var i, a;
      try {
        for (var s = o(t.values()), c = s.next(); !c.done; c = s.next()) {
          var u = c.value;
          if ("inbound-rtp" === u.type && !u.isRemote) {
            var l = n[u.mediaType];
            l && l.delete(u.id);
            var d = m(e, t, u, r);
            d && d.next(r || d.trackId, u);
          }
        }
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          c && !c.done && (a = s.return) && a.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
    }
    function k(e, t) {
      var n = function (n) {
        var r = e[n];
        t[n].forEach(function (e) {
          return r.delete(e);
        });
      };
      for (var r in t) n(r);
    }
    function S(e, t) {
      var n, r, i, a, s;
      try {
        for (var c = o(t.values()), u = c.next(); !u.done; u = c.next()) {
          "transport" === (p = u.value).type &&
            (s = t.get(p.selectedCandidatePairId));
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          u && !u.done && (r = c.return) && r.call(c);
        } finally {
          if (n) throw n.error;
        }
      }
      if (s) e.next(s);
      else
        try {
          for (var l = o(t.values()), d = l.next(); !d.done; d = l.next()) {
            var p;
            "candidate-pair" !== (p = d.value).type ||
              !p.nominated ||
              ("selected" in p && !p.selected) ||
              e.next(p);
          }
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            d && !d.done && (a = l.return) && a.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
    }
    e.exports = d;
  },
  function (e, t, n) {
    "use strict";
    var r = n(198),
      i = (function () {
        function e() {
          Object.defineProperties(this, {
            lastReport: { enumerable: !0, value: new r(0, 0), writable: !0 },
            lastStats: { enumerable: !0, value: null, writable: !0 },
          });
        }
        return (
          (e.prototype.next = function (e) {
            var t = this.lastStats;
            if (((this.lastStats = e), t)) {
              var n = t.id === e.id ? r.of(t, e) : new r(0, 0);
              this.lastReport = n;
            }
            return this.lastReport;
          }),
          e
        );
      })();
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    var r = (function () {
      function e(e, t, n, r) {
        Object.defineProperties(this, {
          availableSend: { enumerable: !0, value: n },
          recv: { enumerable: !0, value: t },
          rtt: { enumerable: !0, value: r },
          send: { enumerable: !0, value: e },
        });
      }
      return (
        (e.of = function (t, n) {
          var r = (n.timestamp - t.timestamp) / 1e3,
            i = n.bytesSent - t.bytesSent,
            o = n.bytesReceived - t.bytesReceived;
          return new e(
            r > 0 ? (i / r) * 8 : 0,
            r > 0 ? (o / r) * 8 : 0,
            n.availableOutgoingBitrate,
            n.currentRoundTripTime
          );
        }),
        e
      );
    })();
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r = n(88),
      i = n(92),
      o = (function () {
        function e(e, t, n) {
          Object.defineProperties(this, {
            ice: { enumerable: !0, value: e },
            audio: { enumerable: !0, value: t },
            video: { enumerable: !0, value: n },
          });
        }
        return (
          (e.prototype.summarize = function () {
            var e = this.audio.send.concat(this.video.send),
              t = i.summarize(e),
              n = this.audio.recv.concat(this.video.recv),
              o = r.summarize(n);
            return {
              ice: this.ice,
              send: t,
              recv: o,
              audio: {
                send: i.summarize(this.audio.send),
                recv: r.summarize(this.audio.recv),
              },
              video: {
                send: i.summarize(this.video.send),
                recv: r.summarize(this.video.recv),
              },
            };
          }),
          e
        );
      })();
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(88),
      a = (function (e) {
        function t(t, n) {
          var r = e.call(this, n.id, t, n) || this;
          return (
            Object.defineProperties(r, {
              lastReport: { enumerable: !0, value: null, writable: !0 },
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.next = function (e, t) {
            var n = this.lastStats;
            (this.lastStats = t), (this.trackId = e);
            var r = o.of(e, n, t);
            return (this.lastReport = r), r;
          }),
          t
        );
      })(n(93));
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(93),
      a = n(92),
      s = (function (e) {
        function t(t, n) {
          var r = e.call(this, n.id, t, n) || this;
          return (
            Object.defineProperties(r, {
              lastReport: { enumerable: !0, value: null, writable: !0 },
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.next = function (e, t, n) {
            var r = this.lastStats;
            (this.lastStats = t), (this.trackId = e);
            var i = a.of(e, r, t, n);
            return (this.lastReport = i), i;
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(20),
      a = n(203),
      s = n(14),
      c = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, "network_quality", r) || this;
          return (
            Object.defineProperties(i, {
              _level: { value: null, writable: !0 },
              _levels: { value: null, writable: !0 },
              _remoteLevels: { value: new Map(), writable: !0 },
              _networkQualityInputs: { value: new a() },
              _resendTimer: {
                value: new s(
                  function () {
                    i._resendTimer.setDelay(1.5 * i._resendTimer.delay),
                      i._sendNetworkQualityInputs();
                  },
                  5e3,
                  !1
                ),
              },
              _networkQualityReportLevels: {
                get: function () {
                  return { reportLevel: n.local, remoteReportLevel: n.remote };
                },
              },
            }),
            i.on("ready", function (e) {
              e.on("message", function (e) {
                switch ((i._log.debug("Incoming: ", e), e.type)) {
                  case "network_quality":
                    i._handleNetworkQualityMessage(e);
                }
              });
            }),
            i._sendNetworkQualityInputs(),
            i
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "level", {
            get: function () {
              return this._level;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "levels", {
            get: function () {
              return this._levels;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "remoteLevels", {
            get: function () {
              return this._remoteLevels;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype._handleNetworkQualityMessage = function (e) {
            var t = this,
              n = !1,
              r = null,
              i = e ? e.local : null;
            "number" == typeof i
              ? ((r = i), (this._levels = null))
              : "object" == typeof i &&
                i &&
                ((this._levels = i),
                (r =
                  "number" == typeof i.level
                    ? i.level
                    : Math.min(
                        i.audio.send,
                        i.audio.recv,
                        i.video.send,
                        i.video.recv
                      ))),
              null !== r && this.level !== r && ((this._level = r), (n = !0)),
              (this._remoteLevels =
                e && e.remotes
                  ? e.remotes.reduce(function (e, r) {
                      return (
                        (t._remoteLevels.get(r.sid) || {}).level !== r.level &&
                          (n = !0),
                        e.set(r.sid, r)
                      );
                    }, new Map())
                  : this._remoteLevels),
              n && this.emit("updated"),
              this._resendTimer.setDelay(5e3),
              this._resendTimer.isSet &&
                setTimeout(function () {
                  return t._sendNetworkQualityInputs();
                }, 1e3);
          }),
          (t.prototype._sendNetworkQualityInputs = function () {
            var e = this;
            return (
              this._resendTimer.clear(),
              this._networkQualityInputs
                .take()
                .then(function (t) {
                  e._transport &&
                    e._transport.publish(
                      (function (e, t) {
                        return Object.assign({ type: "network_quality" }, e, t);
                      })(t, e._networkQualityReportLevels)
                    );
                })
                .finally(function () {
                  e._resendTimer.start();
                })
            );
          }),
          (t.prototype.put = function (e) {
            this._networkQualityInputs.put(e);
          }),
          t
        );
      })(o);
    e.exports = c;
  },
  function (e, t, n) {
    "use strict";
    var r = n(1).defer,
      i = (function () {
        function e() {
          Object.defineProperties(this, {
            _deferreds: { value: [] },
            _hasValue: { value: !1, writable: !0 },
            _value: { value: null, writable: !0 },
          });
        }
        return (
          (e.prototype.put = function (e) {
            (this._hasValue = !0), (this._value = e);
            var t = this._deferreds.shift();
            return t && t.resolve(e), this;
          }),
          (e.prototype.take = function () {
            var e = this;
            if (this._hasValue && !this._deferreds.length)
              return (this._hasValue = !1), Promise.resolve(this._value);
            var t = r();
            return (
              this._deferreds.push(t),
              t.promise.then(function (t) {
                return (e._hasValue = !1), t;
              })
            );
          }),
          e
        );
      })();
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            Object.defineProperties(t, {
              _revision: { value: 1, writable: !0 },
            }),
            t
          );
        }
        return (
          i(t, e),
          (t.prototype.update = function (e) {
            return e.revision < this._revision
              ? this
              : ((this._revision = e.revision), this.enable(e.is_recording));
          }),
          t
        );
      })(n(94));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(206),
      a = n(215),
      s = (function (e) {
        function t(t, n, r, i, o, s) {
          var c = e.call(this, t.sid, t.identity) || this;
          return (
            (s = Object.assign({ RemoteTrackPublicationV2: a }, s)),
            Object.defineProperties(c, {
              _revision: { writable: !0, value: null },
              _RemoteTrackPublicationV2: { value: s.RemoteTrackPublicationV2 },
              _getInitialTrackSwitchOffState: { value: n },
              updateSubscriberTrackPriority: {
                value: function (e, t) {
                  return r(e, t);
                },
              },
              updateTrackRenderHint: {
                value: function (e, t) {
                  return i(e, t);
                },
              },
              clearTrackHint: {
                value: function (e) {
                  return o(e);
                },
              },
              revision: {
                enumerable: !0,
                get: function () {
                  return this._revision;
                },
              },
            }),
            c.update(t)
          );
        }
        return (
          i(t, e),
          (t.prototype._getOrCreateTrack = function (e) {
            var t = this._RemoteTrackPublicationV2,
              n = this.tracks.get(e.sid);
            n ||
              ((n = new t(e, this._getInitialTrackSwitchOffState(e.sid))),
              this.addTrack(n));
            return n;
          }),
          (t.prototype.update = function (e) {
            var t = this;
            if (null !== this.revision && e.revision <= this.revision)
              return this;
            this._revision = e.revision;
            var n = new Set();
            switch (
              (e.tracks.forEach(function (e) {
                var r = t._getOrCreateTrack(e);
                r.update(e), n.add(r);
              }),
              this.tracks.forEach(function (e) {
                n.has(e) || t.removeTrack(e);
              }),
              e.state)
            ) {
              case "disconnected":
                this.disconnect();
                break;
              case "reconnecting":
                this.reconnecting();
                break;
              case "connected":
                this.connect(this.sid, this.identity);
            }
            return this;
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return r.connect(t, n), r;
        }
        return i(t, e), t;
      })(n(40));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r = n(208),
      i = n(214),
      o = function (e) {
        var t = e.level,
          n = e.audio,
          o = e.video;
        Object.defineProperties(this, {
          level: { value: t, enumerable: !0 },
          audio: { value: n ? new r(n) : null, enumerable: !0 },
          video: { value: o ? new i(o) : null, enumerable: !0 },
        });
      };
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return i(t, e), t;
      })(n(96));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return i(t, e), t;
      })(n(97));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r = function (e) {
      var t = e.actual,
        n = void 0 === t ? null : t,
        r = e.available,
        i = void 0 === r ? null : r,
        o = e.level,
        a = void 0 === o ? null : o;
      Object.defineProperties(this, {
        actual: { value: n, enumerable: !0 },
        available: { value: i, enumerable: !0 },
        level: { value: a, enumerable: !0 },
      });
    };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r = function (e) {
      var t = e.fractionLost,
        n = void 0 === t ? null : t,
        r = e.level,
        i = void 0 === r ? null : r;
      Object.defineProperties(this, {
        fractionLost: { value: n, enumerable: !0 },
        level: { value: i, enumerable: !0 },
      });
    };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r = function (e) {
      var t = e.jitter,
        n = void 0 === t ? null : t,
        r = e.rtt,
        i = void 0 === r ? null : r,
        o = e.level,
        a = void 0 === o ? null : o;
      Object.defineProperties(this, {
        jitter: { value: n, enumerable: !0 },
        rtt: { value: i, enumerable: !0 },
        level: { value: a, enumerable: !0 },
      });
    };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return i(t, e), t;
      })(n(97));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return i(t, e), t;
      })(n(96));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          return (
            e.call(this, t.sid, t.name, t.kind, t.enabled, t.priority, n) ||
            this
          );
        }
        return (
          i(t, e),
          (t.prototype.update = function (e) {
            return this.enable(e.enabled), this.setPriority(e.priority), this;
          }),
          t
        );
      })(n(216));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r, i, o, a) {
          var s = e.call(this, n, r, i, o) || this;
          return (
            Object.defineProperties(s, {
              _isSwitchedOff: { value: a, writable: !0 },
            }),
            s.setSid(t),
            s
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "isSubscribed", {
            get: function () {
              return !!this.trackTransceiver;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isSwitchedOff", {
            get: function () {
              return this._isSwitchedOff;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.subscribeFailed = function (e) {
            return (
              this.error || ((this._error = e), this.emit("updated")), this
            );
          }),
          (t.prototype.setPriority = function (e) {
            return (
              this._priority !== e &&
                ((this._priority = e), this.emit("updated")),
              this
            );
          }),
          (t.prototype.setSwitchedOff = function (e) {
            return (
              this._isSwitchedOff !== e &&
                ((this._isSwitchedOff = e), this.emit("updated")),
              this
            );
          }),
          t
        );
      })(n(98));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, "track_priority", n) || this;
          return (
            Object.defineProperties(r, {
              _enqueuedPriorityUpdates: { value: new Map() },
            }),
            r.on("ready", function (e) {
              Array.from(r._enqueuedPriorityUpdates.keys()).forEach(function (
                t
              ) {
                e.publish({
                  type: "track_priority",
                  track: t,
                  subscribe: r._enqueuedPriorityUpdates.get(t),
                });
              });
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.sendTrackPriorityUpdate = function (e, t, n) {
            if ("subscribe" !== t)
              throw new Error(
                "only subscribe priorities are supported, found: " + t
              );
            this._enqueuedPriorityUpdates.set(e, n),
              this._transport &&
                this._transport.publish({
                  type: "track_priority",
                  track: e,
                  subscribe: n,
                });
          }),
          t
        );
      })(n(20));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, "track_switch_off", n) || this;
          return (
            r.on("ready", function (e) {
              e.on("message", function (e) {
                switch (e.type) {
                  case "track_switch_off":
                    r._setTrackSwitchOffUpdates(e.off || [], e.on || []);
                }
              });
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype._setTrackSwitchOffUpdates = function (e, t) {
            this.emit("updated", e, t);
          }),
          t
        );
      })(n(20));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(20),
      a = n(14),
      s = n(1).isDeepEqual,
      c = 1,
      u = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, "render_hints", n) || this;
          return (
            Object.defineProperties(r, {
              _trackSidsToRenderHints: { value: new Map() },
              _responseTimer: {
                value: new a(
                  function () {
                    r._sendAllHints(),
                      r._responseTimer.setDelay(2 * r._responseTimer.delay);
                  },
                  2e3,
                  !1
                ),
              },
            }),
            r.on("ready", function (e) {
              e.on("message", function (e) {
                switch ((r._log.debug("Incoming: ", e), e.type)) {
                  case "render_hints":
                    r._processHintResults(
                      (e && e.subscriber && e.subscriber.hints) || []
                    );
                    break;
                  default:
                    r._log.warn("Unknown message type: ", e.type);
                }
              }),
                r._sendAllHints();
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype._sendAllHints = function () {
            var e = this;
            Array.from(this._trackSidsToRenderHints.keys()).forEach(function (
              t
            ) {
              var n = e._trackSidsToRenderHints.get(t);
              n.renderDimensions && (n.isDimensionDirty = !0),
                "enabled" in n && (n.isEnabledDirty = !0);
            }),
              this._sendHints();
          }),
          (t.prototype._processHintResults = function (e) {
            var t = this;
            this._responseTimer.clear(),
              this._responseTimer.setDelay(2e3),
              e.forEach(function (e) {
                "OK" !== e.result &&
                  t._log.debug("Server error processing hint:", e);
              }),
              this._sendHints();
          }),
          (t.prototype._sendHints = function () {
            var e = this;
            if (this._transport && !this._responseTimer.isSet) {
              var t = [];
              if (
                (Array.from(this._trackSidsToRenderHints.keys()).forEach(
                  function (n) {
                    var r = e._trackSidsToRenderHints.get(n);
                    if (r.isEnabledDirty || r.isDimensionDirty) {
                      var i = { track: n };
                      r.isEnabledDirty &&
                        ((i.enabled = r.enabled), (r.isEnabledDirty = !1)),
                        r.isDimensionDirty &&
                          ((i.render_dimensions = r.renderDimensions),
                          (r.isDimensionDirty = !1)),
                        t.push(i);
                    }
                  }
                ),
                t.length > 0)
              ) {
                var n = {
                  type: "render_hints",
                  subscriber: { id: c++, hints: t },
                };
                this._log.debug("Outgoing: ", n),
                  this._transport.publish(n),
                  this._responseTimer.start();
              }
            }
          }),
          (t.prototype.setTrackHint = function (e, t) {
            var n = this._trackSidsToRenderHints.get(e) || {
              isEnabledDirty: !1,
              isDimensionDirty: !1,
            };
            "enabled" in t &&
              n.enabled !== t.enabled &&
              ((n.enabled = !!t.enabled), (n.isEnabledDirty = !0)),
              t.renderDimensions &&
                !s(t.renderDimensions, n.renderDimensions) &&
                ((n.renderDimensions = t.renderDimensions),
                (n.isDimensionDirty = !0)),
              this._trackSidsToRenderHints.set(e, n),
              this._sendHints();
          }),
          (t.prototype.clearTrackHint = function (e) {
            this._trackSidsToRenderHints.delete(e);
          }),
          t
        );
      })(o);
    e.exports = u;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(20),
      a = 1,
      s = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, "publisher_hints", n) || this;
          return (
            r.on("ready", function (e) {
              r._log.debug("publisher_hints transport ready:", e),
                e.on("message", function (e) {
                  switch ((r._log.debug("Incoming: ", e), e.type)) {
                    case "publisher_hints":
                      e.publisher &&
                        e.publisher.hints &&
                        e.publisher.id &&
                        r._processPublisherHints(
                          e.publisher.hints,
                          e.publisher.id
                        );
                      break;
                    default:
                      r._log.warn("Unknown message type: ", e.type);
                  }
                });
            }),
            r
          );
        }
        return (
          i(t, e),
          (t.prototype.sendTrackReplaced = function (e) {
            var t = e.trackSid;
            if (this._transport) {
              var n = { type: "client_reset", track: t, id: a++ };
              this._log.debug("Outgoing: ", n), this._transport.publish(n);
            }
          }),
          (t.prototype.sendHintResponse = function (e) {
            var t = e.id,
              n = e.hints;
            if (this._transport) {
              var r = { type: "publisher_hints", id: t, hints: n };
              this._log.debug("Outgoing: ", r), this._transport.publish(r);
            }
          }),
          (t.prototype._processPublisherHints = function (e, t) {
            try {
              this.emit("updated", e, t);
            } catch (e) {
              this._log.error("error processing hints:", e);
            }
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(19),
      a = n(71),
      s = n(84),
      c = n(2).reconnectBackoffConfig,
      u = n(14),
      l = n(2),
      d = l.SDK_NAME,
      p = l.SDK_VERSION,
      f = l.SDP_FORMAT,
      h = n(1),
      v = h.createBandwidthProfilePayload,
      _ = h.createMediaSignalingPayload,
      m = h.createSubscribePayload,
      y = h.getUserAgent,
      g = h.isNonArrayObject,
      b = n(9),
      w = b.createTwilioError,
      k = b.RoomCompletedError,
      S = b.SignalingConnectionError,
      T = b.SignalingServerBusyError,
      O = {
        connecting: ["connected", "disconnected"],
        connected: ["disconnected", "syncing"],
        syncing: ["connected", "disconnected"],
        disconnected: [],
      },
      P = (function (e) {
        function t(t, n, r, i, o, u) {
          var l;
          return (
            (u = Object.assign(
              {
                Backoff: s,
                TwilioConnection: a,
                iceServers: null,
                trackPriority: !0,
                trackSwitchOff: !0,
                renderHints: !0,
                userAgent: y(),
              },
              u
            )),
            (l = e.call(this, "connecting", O) || this),
            Object.defineProperties(l, {
              _accessToken: { value: n },
              _automaticSubscription: { value: u.automaticSubscription },
              _bandwidthProfile: { value: u.bandwidthProfile },
              _dominantSpeaker: { value: u.dominantSpeaker },
              _adaptiveSimulcast: { value: u.adaptiveSimulcast },
              _eventObserver: { value: u.eventObserver, writable: !1 },
              _renderHints: { value: u.renderHints },
              _iceServersStatus: {
                value: Array.isArray(u.iceServers) ? "overrode" : "acquire",
              },
              _localParticipant: { value: r },
              _name: { value: t },
              _networkQuality: {
                value: g(u.networkQuality) || u.networkQuality,
              },
              _options: { value: u },
              _peerConnectionManager: { value: i },
              _sessionTimer: { value: null, writable: !0 },
              _sessionTimeoutMS: { value: 0, writable: !0 },
              _reconnectBackoff: { value: u.Backoff.exponential(c) },
              _session: { value: null, writable: !0 },
              _trackPriority: { value: u.trackPriority },
              _trackSwitchOff: { value: u.trackSwitchOff },
              _twilioConnection: { value: null, writable: !0 },
              _updatesReceived: { value: [] },
              _updatesToSend: { value: [] },
              _userAgent: { value: u.userAgent },
              _wsServer: { value: o },
            }),
            (function (e) {
              function t() {
                if ("disconnected" !== e.state) {
                  e._twilioConnection &&
                    e._twilioConnection.removeListener("message", r);
                  var t = e._iceServersStatus,
                    i = e._options,
                    o = e._wsServer,
                    a = e.state,
                    s = i.TwilioConnection,
                    c = new s(
                      o,
                      Object.assign(
                        {
                          helloBody:
                            "connecting" === a && "acquire" === t
                              ? e._createIceMessage()
                              : e._createConnectOrSyncOrDisconnectMessage(),
                        },
                        i
                      )
                    );
                  c.once("close", function (e) {
                    e === s.CloseReason.LOCAL ? n() : n(new Error(e));
                  }),
                    c.on("message", r),
                    (e._twilioConnection = c);
                }
              }
              function n(n) {
                if ("disconnected" !== e.state)
                  if (n) {
                    var r = e._getReconnectTimer();
                    if (r)
                      "connected" === e.state && e.preempt("syncing"),
                        r.then(t);
                    else {
                      var i =
                        n.message === a.CloseReason.BUSY ? new T() : new S();
                      e.disconnect(i);
                    }
                  } else e.disconnect();
              }
              function r(t) {
                if ("disconnected" !== e.state)
                  if ("error" !== t.type)
                    switch (e.state) {
                      case "connected":
                        switch (t.type) {
                          case "connected":
                          case "synced":
                          case "update":
                            return void e.emit("message", t);
                          case "disconnected":
                            return void e.disconnect(
                              "completed" === t.status ? new k() : null
                            );
                          default:
                            return;
                        }
                      case "connecting":
                        switch (t.type) {
                          case "iced":
                            return void e._options
                              .onIced(t.ice_servers)
                              .then(function () {
                                e._sendConnectOrSyncOrDisconnectMessage();
                              });
                          case "connected":
                            return (
                              e._setSession(
                                t.session,
                                t.options.session_timeout
                              ),
                              e.emit("connected", t),
                              void e.preempt("connected")
                            );
                          case "synced":
                          case "update":
                            return void e._updatesReceived.push(t);
                          case "disconnected":
                            return void e.disconnect(
                              "completed" === t.status ? new k() : null
                            );
                          default:
                            return;
                        }
                      case "syncing":
                        switch (t.type) {
                          case "connected":
                          case "update":
                            return void e._updatesReceived.push(t);
                          case "synced":
                            return (
                              e._clearReconnectTimer(),
                              e.emit("message", t),
                              void e.preempt("connected")
                            );
                          case "disconnected":
                            return void e.disconnect(
                              "completed" === t.status ? new k() : null
                            );
                          default:
                            return;
                        }
                      default:
                        return;
                    }
                  else e.disconnect(w(t.code, t.message));
              }
              e.on("stateChanged", function t(n) {
                switch (n) {
                  case "connected":
                    var i = e._updatesToSend.splice(0);
                    return (
                      i.length &&
                        e.publish(
                          (function (e) {
                            return e.reduce(function (e, t) {
                              return (
                                ((!e.participant && t.participant) ||
                                  (e.participant &&
                                    t.participant &&
                                    t.participant.revision >
                                      e.participant.revision)) &&
                                  (e.participant = t.participant),
                                !e.peer_connections && t.peer_connections
                                  ? (e.peer_connections = C(t.peer_connections))
                                  : e.peer_connections &&
                                    t.peer_connections &&
                                    (e.peer_connections = C(
                                      e.peer_connections.concat(
                                        t.peer_connections
                                      )
                                    )),
                                e
                              );
                            }, {});
                          })(i)
                        ),
                      void e._updatesReceived.splice(0).forEach(function (t) {
                        return e.emit("message", t);
                      })
                    );
                  case "disconnected":
                    return (
                      e._twilioConnection.removeListener("message", r),
                      void e.removeListener("stateChanged", t)
                    );
                  case "syncing":
                  default:
                    return;
                }
              });
              var i = e._options,
                o = e._iceServersStatus,
                s = i.iceServers,
                c = i.onIced;
              "overrode" === o ? c(s).then(t) : t();
            })(l),
            l
          );
        }
        return (
          i(t, e),
          (t.prototype._createConnectOrSyncOrDisconnectMessage = function () {
            if ("connected" === this.state) return null;
            if ("disconnected" === this.state)
              return { session: this._session, type: "disconnect", version: 2 };
            var e = { connecting: "connect", syncing: "sync" }[this.state],
              t = {
                name: this._name,
                participant: this._localParticipant.getState(),
                peer_connections: this._peerConnectionManager.getStates(),
                type: e,
                version: 2,
              };
            return (
              "connect" === t.type
                ? ((t.ice_servers = this._iceServersStatus),
                  (t.publisher = {
                    name: d,
                    sdk_version: p,
                    user_agent: this._userAgent,
                  }),
                  this._bandwidthProfile &&
                    (t.bandwidth_profile = v(this._bandwidthProfile)),
                  (t.media_signaling = _(
                    this._dominantSpeaker,
                    this._networkQuality,
                    this._trackPriority,
                    this._trackSwitchOff,
                    this._adaptiveSimulcast,
                    this._renderHints
                  )),
                  (t.subscribe = m(this._automaticSubscription)),
                  (t.format = f),
                  (t.token = this._accessToken))
                : "sync" === t.type
                ? ((t.session = this._session), (t.token = this._accessToken))
                : "update" === t.type && (t.session = this._session),
              t
            );
          }),
          (t.prototype._createIceMessage = function () {
            return {
              edge: "roaming",
              token: this._accessToken,
              type: "ice",
              version: 1,
            };
          }),
          (t.prototype._sendConnectOrSyncOrDisconnectMessage = function () {
            var e = this._createConnectOrSyncOrDisconnectMessage();
            e && this._twilioConnection.sendMessage(e);
          }),
          (t.prototype.disconnect = function (e) {
            return (
              "disconnected" !== this.state &&
              (this.preempt("disconnected", null, [e]),
              this._sendConnectOrSyncOrDisconnectMessage(),
              this._twilioConnection.close(),
              !0)
            );
          }),
          (t.prototype.publish = function (e) {
            switch (this.state) {
              case "connected":
                return (
                  this._twilioConnection.sendMessage(
                    Object.assign(
                      { session: this._session, type: "update", version: 2 },
                      e
                    )
                  ),
                  !0
                );
              case "connecting":
              case "syncing":
                return this._updatesToSend.push(e), !0;
              case "disconnected":
              default:
                return !1;
            }
          }),
          (t.prototype.publishEvent = function (e, t, n, r) {
            this._eventObserver.emit("event", {
              group: e,
              name: t,
              level: n,
              payload: r,
            });
          }),
          (t.prototype.sync = function () {
            return (
              "connected" === this.state &&
              (this.preempt("syncing"),
              this._sendConnectOrSyncOrDisconnectMessage(),
              !0)
            );
          }),
          (t.prototype._setSession = function (e, t) {
            (this._session = e), (this._sessionTimeoutMS = 1e3 * t);
          }),
          (t.prototype._getReconnectTimer = function () {
            var e = this;
            return 0 === this._sessionTimeoutMS
              ? null
              : (this._sessionTimer ||
                  (this._sessionTimer = new u(function () {
                    e._sessionTimer && (e._sessionTimeoutMS = 0);
                  }, this._sessionTimeoutMS)),
                new Promise(function (t) {
                  e._reconnectBackoff.once("ready", t),
                    e._reconnectBackoff.backoff();
                }));
          }),
          (t.prototype._clearReconnectTimer = function () {
            this._reconnectBackoff.reset(),
              this._sessionTimer &&
                (this._sessionTimer.clear(), (this._sessionTimer = null));
          }),
          t
        );
      })(o);
    function C(e) {
      return Array.from(
        e
          .reduce(function (e, t) {
            var n = e.get(t.id) || t;
            return (
              ((!n.description && t.description) ||
                (n.description &&
                  t.description &&
                  t.description.revision > n.description.revision)) &&
                (n.description = t.description),
              ((!n.ice && t.ice) ||
                (n.ice && t.ice && t.ice.revision > n.ice.revision)) &&
                (n.ice = t.ice),
              e.set(n.id, n),
              e
            );
          }, new Map())
          .values()
      );
    }
    e.exports = P;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(223),
      a = n(224),
      s = n(2).DEFAULT_LOG_LEVEL,
      c = n(8),
      u = n(1),
      l = u.buildLogLevels,
      d = u.isDeepEqual,
      p = (function (e) {
        function t(t, n, r) {
          var i;
          (r = Object.assign({ logLevel: s, LocalTrackPublicationV2: a }, r)),
            (i = e.call(this) || this);
          var o = l(r.logLevel);
          return (
            Object.defineProperties(i, {
              _bandwidthProfile: { value: null, writable: !0 },
              _bandwidthProfileRevision: { value: 0, writable: !0 },
              _encodingParameters: { value: t },
              _removeListeners: { value: new Map() },
              _LocalTrackPublicationV2: { value: r.LocalTrackPublicationV2 },
              _log: {
                value: r.log
                  ? r.log.createLog("default", i)
                  : new c("default", i, o, r.loggerName),
              },
              _publishedRevision: { writable: !0, value: 0 },
              _revision: { writable: !0, value: 1 },
              _signalingRegion: { value: null, writable: !0 },
              bandwidthProfile: {
                enumerable: !0,
                get: function () {
                  return this._bandwidthProfile;
                },
              },
              bandwidthProfileRevision: {
                enumerable: !0,
                get: function () {
                  return this._bandwidthProfileRevision;
                },
              },
              networkQualityConfiguration: { enumerable: !0, value: n },
              revision: {
                enumerable: !0,
                get: function () {
                  return this._revision;
                },
              },
              signalingRegion: {
                enumerable: !0,
                get: function () {
                  return this._signalingRegion;
                },
              },
            }),
            i
          );
        }
        return (
          i(t, e),
          (t.prototype.toString = function () {
            return "[LocalParticipantSignaling: " + this.sid + "]";
          }),
          (t.prototype.setSignalingRegion = function (e) {
            this._signalingRegion || (this._signalingRegion = e);
          }),
          (t.prototype.setBandwidthProfile = function (e) {
            d(this._bandwidthProfile, e) ||
              ((this._bandwidthProfile = JSON.parse(JSON.stringify(e))),
              this._bandwidthProfileRevision++,
              this.didUpdate());
          }),
          (t.prototype.getParameters = function () {
            return this._encodingParameters;
          }),
          (t.prototype.setParameters = function (e) {
            return this._encodingParameters.update(e), this;
          }),
          (t.prototype.update = function (e) {
            return (
              this._publishedRevision >= e.revision ||
                ((this._publishedRevision = e.revision),
                e.tracks.forEach(function (e) {
                  var t = this.tracks.get(e.id);
                  t && t.update(e);
                }, this)),
              this
            );
          }),
          (t.prototype._createLocalTrackPublicationSignaling = function (
            e,
            t,
            n
          ) {
            return new this._LocalTrackPublicationV2(e, t, n);
          }),
          (t.prototype.addTrack = function (t, n, r) {
            var i = this;
            e.prototype.addTrack.call(this, t, n, r);
            var o = this.getPublication(t),
              a = o.isEnabled,
              s = o.updatedPriority,
              c = function () {
                (a === o.isEnabled && s === o.updatedPriority) ||
                  (i.didUpdate(), (a = o.isEnabled), (s = o.updatedPriority));
              };
            return (
              o.on("updated", c),
              this._removeListener(o),
              this._removeListeners.set(o, function () {
                return o.removeListener("updated", c);
              }),
              this.didUpdate(),
              this
            );
          }),
          (t.prototype._removeListener = function (e) {
            var t = this._removeListeners.get(e);
            t && t();
          }),
          (t.prototype.getState = function () {
            return {
              revision: this.revision,
              tracks: Array.from(this.tracks.values()).map(function (e) {
                return e.getState();
              }),
            };
          }),
          (t.prototype.didUpdate = function () {
            this._revision++, this.emit("updated");
          }),
          (t.prototype.removeTrack = function (t) {
            var n = e.prototype.removeTrack.call(this, t);
            return (
              n &&
                (t.removeClone(n.trackTransceiver),
                this._removeListener(n),
                this.didUpdate()),
              n
            );
          }),
          (t.prototype.setNetworkQualityConfiguration = function (e) {
            this.networkQualityConfiguration.update(e);
          }),
          (t.prototype.setPublisherHint = function (e, t) {
            var n = Array.from(this.tracks.values()).find(function (t) {
              return t.sid === e;
            });
            return n
              ? n.trackTransceiver.setPublisherHint(t)
              : (this._log.warn("track:" + e + " not found"),
                Promise.resolve("UNKNOWN_TRACK"));
          }),
          t
        );
      })(o);
    e.exports = p;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            Object.defineProperties(t, {
              _publicationsToTrackSenders: { value: new Map() },
              _trackSendersToPublications: { value: new Map() },
            }),
            t
          );
        }
        return (
          i(t, e),
          (t.prototype.addTrack = function (t, n, r) {
            var i = this._createLocalTrackPublicationSignaling(t, n, r);
            return (
              this._trackSendersToPublications.set(t, i),
              this._publicationsToTrackSenders.set(i, t),
              e.prototype.addTrack.call(this, i),
              this
            );
          }),
          (t.prototype.getPublication = function (e) {
            return this._trackSendersToPublications.get(e) || null;
          }),
          (t.prototype.getSender = function (e) {
            return this._publicationsToTrackSenders.get(e) || null;
          }),
          (t.prototype.removeTrack = function (t) {
            var n = this._trackSendersToPublications.get(t);
            return n
              ? (this._trackSendersToPublications.delete(t),
                this._publicationsToTrackSenders.delete(n),
                e.prototype.removeTrack.call(this, n) && n.stop(),
                n)
              : null;
          }),
          t
        );
      })(n(40));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(225),
      a = n(9).createTwilioError,
      s = (function (e) {
        function t(t, n, r) {
          return e.call(this, t, n, r) || this;
        }
        return (
          i(t, e),
          (t.prototype.getState = function () {
            return {
              enabled: this.isEnabled,
              id: this.id,
              kind: this.kind,
              name: this.name,
              priority: this.updatedPriority,
            };
          }),
          (t.prototype.update = function (e) {
            switch (e.state) {
              case "ready":
                this.setSid(e.sid);
                break;
              case "failed":
                var t = e.error;
                this.publishFailed(a(t.code, t.message));
            }
            return this;
          }),
          t
        );
      })(o);
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = (function (e) {
        function t(t, n, r) {
          var i = this,
            o = "data" === (t = t.clone()).kind || t.track.enabled;
          return (
            (i = e.call(this, n, t.kind, o, r) || this).setTrackTransceiver(t),
            Object.defineProperties(i, {
              _updatedPriority: { value: r, writable: !0 },
              id: { enumerable: !0, value: t.id },
            }),
            i
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "updatedPriority", {
            get: function () {
              return this._updatedPriority;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.enable = function (t) {
            return (
              (t = "boolean" != typeof t || t),
              (this.trackTransceiver.track.enabled = t),
              e.prototype.enable.call(this, t)
            );
          }),
          (t.prototype.publishFailed = function (e) {
            return (
              (function (e, t) {
                if (null !== e._sid || e._error) return !1;
                return (e._error = t), !0;
              })(this, e) && this.emit("updated"),
              this
            );
          }),
          (t.prototype.setPriority = function (e) {
            return (
              this._updatedPriority !== e &&
                ((this._updatedPriority = e), this.emit("updated")),
              this
            );
          }),
          (t.prototype.setSid = function (t) {
            return this._error ? this : e.prototype.setSid.call(this, t);
          }),
          (t.prototype.stop = function () {
            this.trackTransceiver.stop();
          }),
          t
        );
      })(n(98));
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      o = n(40),
      a = n(95),
      s = n(19),
      c = {
        closed: ["opening"],
        opening: ["closed", "open"],
        open: ["closed", "closing"],
        closing: ["closed", "open"],
      },
      u = (function (e) {
        function t() {
          return e.call(this, "closed", c) || this;
        }
        return (
          i(t, e),
          (t.prototype._close = function (e) {
            return (
              this.transition("closing", e),
              this.transition("closed", e),
              Promise.resolve(this)
            );
          }),
          (t.prototype._connect = function (e, t, n, r, i) {
            e.connect("PA00000000000000000000000000000000", "test");
            var o = Promise.resolve(
              new a(e, "RM00000000000000000000000000000000", i)
            );
            return (o.cancel = function () {}), o;
          }),
          (t.prototype._open = function (e) {
            return (
              this.transition("opening", e),
              this.transition("open", e),
              Promise.resolve(this)
            );
          }),
          (t.prototype.close = function () {
            var e = this;
            return this.bracket("close", function (t) {
              switch (e.state) {
                case "closed":
                  return e;
                case "open":
                  return e._close(t);
                default:
                  throw new Error(
                    'Unexpected Signaling state "' + e.state + '"'
                  );
              }
            });
          }),
          (t.prototype.connect = function (e, t, n, r, i) {
            var o = this;
            return this.bracket("connect", function a(s) {
              switch (o.state) {
                case "closed":
                  return o._open(s).then(a.bind(null, s));
                case "open":
                  return o.releaseLockCompletely(s), o._connect(e, t, n, r, i);
                default:
                  throw new Error(
                    'Unexpected Signaling state "' + o.state + '"'
                  );
              }
            });
          }),
          (t.prototype.createLocalParticipantSignaling = function () {
            return new o();
          }),
          (t.prototype.open = function () {
            var e = this;
            return this.bracket("open", function (t) {
              switch (e.state) {
                case "closed":
                  return e._open(t);
                case "open":
                  return e;
                default:
                  throw new Error(
                    'Unexpected Signaling state "' + e.state + '"'
                  );
              }
            });
          }),
          t
        );
      })(s);
    e.exports = u;
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      i = r.guessBrowser,
      o = r.support,
      a = n(228),
      s = a.isAndroid,
      c = a.isMobile,
      u = a.isNonChromiumEdge,
      l = a.rebrandedChromeBrowser,
      d = a.mobileWebKitBrowser,
      p = ["crios", "edg", "edge", "electron", "headlesschrome"],
      f = ["chrome", "firefox"],
      h = ["chrome", "safari"],
      v = [];
    e.exports = function () {
      var e = i();
      if (!e) return !1;
      var t = l(e),
        n = d(e),
        r = s() ? f : h;
      return (
        !!e &&
        o() &&
        (!t || p.includes(t)) &&
        !u(e) &&
        (!n || v.includes(n)) &&
        (!c() || r.includes(e))
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
      (this && this.__read) ||
      function (e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      };
    e.exports = {
      isAndroid: function () {
        return /Android/.test(navigator.userAgent);
      },
      isIOS: function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent);
      },
      isMobile: function () {
        return /Mobi/.test(navigator.userAgent);
      },
      isNonChromiumEdge: function (e) {
        return (
          "chrome" === e &&
          /Edge/.test(navigator.userAgent) &&
          ("undefined" == typeof chrome || void 0 === chrome.runtime)
        );
      },
      mobileWebKitBrowser: function (e) {
        return "safari" !== e
          ? null
          : "brave" in navigator
          ? "brave"
          : ["edge", "edg"].find(function (e) {
              return navigator.userAgent.toLowerCase().includes(e);
            }) || null;
      },
      rebrandedChromeBrowser: function (e) {
        if ("chrome" !== e) return null;
        if ("brave" in navigator) return "brave";
        var t =
          (function (e) {
            for (var t = [], n = [], r = 0; r < e.length; r++)
              if ("(" === e[r]) t.push(r);
              else if (")" === e[r] && t.length > 0) {
                var i = t.pop();
                0 === t.length && n.push(e.substring(i, r + 1));
              }
            return n;
          })(navigator.userAgent)
            .reduce(function (e, t) {
              return e.replace(t, "");
            }, navigator.userAgent)
            .match(/[^\s]+/g) || [];
        return (
          r(
            t.map(function (e) {
              return e.split("/")[0].toLowerCase();
            })
          )
            .slice(2)
            .find(function (e) {
              return !["chrome", "mobile", "safari"].includes(e);
            }) || null
        );
      },
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = n(557);
  },
  function (e, t, n) {
    "use strict";
    const r = n(120);
    let i = null,
      o = "";
    function a(e, t) {
      console.log(
        { 1: "???", 2: "??????", 3: "?????????", 4: "????????????", 5: "???????????????" }[e] || ""
      ),
        t && console.log("Network Quality statistics:", t);
    }
    function s(e, t) {
      e.forEach((e) => {
        t.appendChild(e.attach());
      });
    }
    function c() {
      window.close();
    }
    function u(e) {
      console.log('Participant "%s" connected', e.identity);
      const t = document.createElement("div");
      (t.id = e.sid),
        e.on("trackSubscribed", (e) =>
          (function (e, t) {
            if (
              [
                "teacherScreen",
                "teacherScreenAudio",
                "studentScreen",
                "teacherMic",
              ].includes(t.name)
            ) {
              console.log("track: ", t);
              (document.getElementById("loading").style.display = "none"),
                (document.body.style.background = "#191919"),
                e.appendChild(t.attach());
            }
          })(t, e)
        ),
        e.on("trackUnsubscribed", c),
        e.tracks.forEach((n) => {
          n.isSubscribed && e.identity === o && s(n.track, t);
        }),
        document.body.appendChild(t);
    }
    !(async function () {
      const e = await new Promise((e, t) => {
        chrome.runtime.sendMessage({ type: "getToken" }, (n) => {
          n && n.error && t(n.error),
            chrome.runtime.onMessage.addListener((n) =>
              n.type && "cast" === n.type ? e(n) : t(new Error("cast error"))
            );
        });
      });
      if (e.error) {
        (document.getElementById("loading").style.display = "none"),
          (document.body.style.background = "#f44336");
        const e = document.createElement("div");
        return (
          (e.id = "error"),
          (e.innerHTML += "Oops! Something went wrong."),
          document.body.appendChild(e)
        );
      }
      const { token: t } = e;
      o = e.teacher;
      const n = new URL(window.location).searchParams.get("room");
      console.log(`Joining room ${n} ...`),
        (i = await r.connect(t, {
          name: n,
          audio: !1,
          video: !1,
          logLevel: "error",
          networkQuality: { local: 1, remote: 2 },
        })),
        console.log("token: " + t),
        i.participants.forEach((e) => {
          console.log("Already in Room: " + e.identity),
            u(e),
            e.on("networkQualityLevelChanged", a),
            a(e.networkQualityLevel, e.networkQualityStats);
        }),
        i.on("participantConnected", (e) => {
          console.log("A remote Participant connected: " + e),
            a(e.networkQualityLevel, e.networkQualityStats),
            o === e.identity && u(e);
        }),
        i.on("trackAdded", (e, t) => {
          console.log(`${t.identity} added track: ${e.kind}`), s(e, t);
        }),
        window.addEventListener("beforeunload", () => {
          chrome.runtime.sendMessage({ type: "stopCast" }), i.disconnect();
        }),
        setTimeout(() => {
          document.getElementsByTagName("video").length;
        }, 15e3),
        setInterval(() => {
          const e = document.getElementsByTagName("video");
          if (e && e[0]) {
            const t = e[0].srcObject.getTracks();
            t[0] && "live" !== t[0].readyState && window.location.reload();
          }
        }, 2e4);
    })();
  },
]);
