function od(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _a = { exports: {} },
  Co = {},
  La = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = Symbol.for("react.element"),
  ld = Symbol.for("react.portal"),
  sd = Symbol.for("react.fragment"),
  ad = Symbol.for("react.strict_mode"),
  ud = Symbol.for("react.profiler"),
  cd = Symbol.for("react.provider"),
  dd = Symbol.for("react.context"),
  fd = Symbol.for("react.forward_ref"),
  pd = Symbol.for("react.suspense"),
  hd = Symbol.for("react.memo"),
  md = Symbol.for("react.lazy"),
  ds = Symbol.iterator;
function vd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ds && e[ds]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ra = Object.assign,
  Ia = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ia),
    (this.updater = n || Pa);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Da() {}
Da.prototype = wn.prototype;
function ml(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ia),
    (this.updater = n || Pa);
}
var vl = (ml.prototype = new Da());
vl.constructor = ml;
Ra(vl, wn.prototype);
vl.isPureReactComponent = !0;
var fs = Array.isArray,
  za = Object.prototype.hasOwnProperty,
  gl = { current: null },
  Oa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Aa(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      za.call(t, r) && !Oa.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: dr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: gl.current,
  };
}
function gd(e, t) {
  return {
    $$typeof: dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function yl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function yd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ps = /\/+/g;
function Go(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yd("" + e.key)
    : t.toString(36);
}
function Mr(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case dr:
          case ld:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Go(l, 0) : r),
      fs(o)
        ? ((n = ""),
          e != null && (n = e.replace(ps, "$&/") + "/"),
          Mr(o, t, n, "", function (d) {
            return d;
          }))
        : o != null &&
          (yl(o) &&
            (o = gd(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ps, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), fs(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + Go(i, a);
      l += Mr(i, t, n, u, o);
    }
  else if (((u = vd(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Go(i, a++)), (l += Mr(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Mr(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function xd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Fr = { transition: null },
  wd = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Fr,
    ReactCurrentOwner: gl,
  };
z.Children = {
  map: wr,
  forEach: function (e, t, n) {
    wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!yl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = wn;
z.Fragment = sd;
z.Profiler = ud;
z.PureComponent = ml;
z.StrictMode = ad;
z.Suspense = pd;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wd;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ra({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = gl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      za.call(t, u) &&
        !Oa.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var d = 0; d < u; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: dr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: dd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cd, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Aa;
z.createFactory = function (e) {
  var t = Aa.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: fd, render: e };
};
z.isValidElement = yl;
z.lazy = function (e) {
  return { $$typeof: md, _payload: { _status: -1, _result: e }, _init: xd };
};
z.memo = function (e, t) {
  return { $$typeof: hd, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
z.useContext = function (e) {
  return fe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
z.useId = function () {
  return fe.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return fe.current.useRef(e);
};
z.useState = function (e) {
  return fe.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return fe.current.useTransition();
};
z.version = "18.2.0";
La.exports = z;
var y = La.exports;
const Ma = id(y),
  Sd = od({ __proto__: null, default: Ma }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd = y,
  Cd = Symbol.for("react.element"),
  jd = Symbol.for("react.fragment"),
  Ed = Object.prototype.hasOwnProperty,
  Nd = kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Td = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fa(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Ed.call(t, r) && !Td.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Cd,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Nd.current,
  };
}
Co.Fragment = jd;
Co.jsx = Fa;
Co.jsxs = Fa;
_a.exports = Co;
var s = _a.exports,
  yi = {},
  Ba = { exports: {} },
  Ce = {},
  qa = { exports: {} },
  Ua = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, I) {
    var D = L.length;
    L.push(I);
    e: for (; 0 < D; ) {
      var Q = (D - 1) >>> 1,
        Z = L[Q];
      if (0 < o(Z, I)) (L[Q] = I), (L[D] = Z), (D = Q);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var I = L[0],
      D = L.pop();
    if (D !== I) {
      L[0] = D;
      e: for (var Q = 0, Z = L.length, yr = Z >>> 1; Q < yr; ) {
        var kt = 2 * (Q + 1) - 1,
          $o = L[kt],
          Ct = kt + 1,
          xr = L[Ct];
        if (0 > o($o, D))
          Ct < Z && 0 > o(xr, $o)
            ? ((L[Q] = xr), (L[Ct] = D), (Q = Ct))
            : ((L[Q] = $o), (L[kt] = D), (Q = kt));
        else if (Ct < Z && 0 > o(xr, D)) (L[Q] = xr), (L[Ct] = D), (Q = Ct);
        else break e;
      }
    }
    return I;
  }
  function o(L, I) {
    var D = L.sortIndex - I.sortIndex;
    return D !== 0 ? D : L.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    d = [],
    h = 1,
    m = null,
    v = 3,
    w = !1,
    S = !1,
    k = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(L) {
    for (var I = n(d); I !== null; ) {
      if (I.callback === null) r(d);
      else if (I.startTime <= L)
        r(d), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(d);
    }
  }
  function x(L) {
    if (((k = !1), p(L), !S))
      if (n(u) !== null) (S = !0), Wo(E);
      else {
        var I = n(d);
        I !== null && Vo(x, I.startTime - L);
      }
  }
  function E(L, I) {
    (S = !1), k && ((k = !1), f(N), (N = -1)), (w = !0);
    var D = v;
    try {
      for (
        p(I), m = n(u);
        m !== null && (!(m.expirationTime > I) || (L && !ue()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (v = m.priorityLevel);
          var Z = Q(m.expirationTime <= I);
          (I = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(u) && r(u),
            p(I);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var yr = !0;
      else {
        var kt = n(d);
        kt !== null && Vo(x, kt.startTime - I), (yr = !1);
      }
      return yr;
    } finally {
      (m = null), (v = D), (w = !1);
    }
  }
  var T = !1,
    g = null,
    N = -1,
    P = 5,
    R = -1;
  function ue() {
    return !(e.unstable_now() - R < P);
  }
  function Cn() {
    if (g !== null) {
      var L = e.unstable_now();
      R = L;
      var I = !0;
      try {
        I = g(!0, L);
      } finally {
        I ? jn() : ((T = !1), (g = null));
      }
    } else T = !1;
  }
  var jn;
  if (typeof c == "function")
    jn = function () {
      c(Cn);
    };
  else if (typeof MessageChannel < "u") {
    var cs = new MessageChannel(),
      rd = cs.port2;
    (cs.port1.onmessage = Cn),
      (jn = function () {
        rd.postMessage(null);
      });
  } else
    jn = function () {
      j(Cn, 0);
    };
  function Wo(L) {
    (g = L), T || ((T = !0), jn());
  }
  function Vo(L, I) {
    N = j(function () {
      L(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), Wo(E));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (L) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = v;
      }
      var D = v;
      v = I;
      try {
        return L();
      } finally {
        v = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, I) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var D = v;
      v = L;
      try {
        return I();
      } finally {
        v = D;
      }
    }),
    (e.unstable_scheduleCallback = function (L, I, D) {
      var Q = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? Q + D : Q))
          : (D = Q),
        L)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = D + Z),
        (L = {
          id: h++,
          callback: I,
          priorityLevel: L,
          startTime: D,
          expirationTime: Z,
          sortIndex: -1,
        }),
        D > Q
          ? ((L.sortIndex = D),
            t(d, L),
            n(u) === null &&
              L === n(d) &&
              (k ? (f(N), (N = -1)) : (k = !0), Vo(x, D - Q)))
          : ((L.sortIndex = Z), t(u, L), S || w || ((S = !0), Wo(E))),
        L
      );
    }),
    (e.unstable_shouldYield = ue),
    (e.unstable_wrapCallback = function (L) {
      var I = v;
      return function () {
        var D = v;
        v = I;
        try {
          return L.apply(this, arguments);
        } finally {
          v = D;
        }
      };
    });
})(Ua);
qa.exports = Ua;
var _d = qa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wa = y,
  ke = _d;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Va = new Set(),
  Hn = {};
function Wt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) Va.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xi = Object.prototype.hasOwnProperty,
  Ld =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hs = {},
  ms = {};
function Pd(e) {
  return xi.call(ms, e)
    ? !0
    : xi.call(hs, e)
    ? !1
    : Ld.test(e)
    ? (ms[e] = !0)
    : ((hs[e] = !0), !1);
}
function Rd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Id(e, t, n, r) {
  if (t === null || typeof t > "u" || Rd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xl = /[\-:]([a-z])/g;
function wl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xl, wl);
    oe[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xl, wl);
    oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xl, wl);
  oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sl(e, t, n, r) {
  var o = oe.hasOwnProperty(t) ? oe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Id(t, n, o, r) && (n = null),
    r || o === null
      ? Pd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  kl = Symbol.for("react.strict_mode"),
  wi = Symbol.for("react.profiler"),
  $a = Symbol.for("react.provider"),
  Ga = Symbol.for("react.context"),
  Cl = Symbol.for("react.forward_ref"),
  Si = Symbol.for("react.suspense"),
  ki = Symbol.for("react.suspense_list"),
  jl = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  Ha = Symbol.for("react.offscreen"),
  vs = Symbol.iterator;
function En(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vs && e[vs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  Ho;
function Dn(e) {
  if (Ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ho = (t && t[1]) || "";
    }
  return (
    `
` +
    Ho +
    e
  );
}
var Qo = !1;
function Ko(e, t) {
  if (!e || Qo) return "";
  Qo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var o = d.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var u =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Qo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function Dd(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ko(e.type, !1)), e;
    case 11:
      return (e = Ko(e.type.render, !1)), e;
    case 1:
      return (e = Ko(e.type, !0)), e;
    default:
      return "";
  }
}
function Ci(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case wi:
      return "Profiler";
    case kl:
      return "StrictMode";
    case Si:
      return "Suspense";
    case ki:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ga:
        return (e.displayName || "Context") + ".Consumer";
      case $a:
        return (e._context.displayName || "Context") + ".Provider";
      case Cl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case jl:
        return (
          (t = e.displayName || null), t !== null ? t : Ci(e.type) || "Memo"
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return Ci(e(t));
        } catch {}
    }
  return null;
}
function zd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ci(t);
    case 8:
      return t === kl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Qa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Od(e) {
  var t = Qa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function kr(e) {
  e._valueTracker || (e._valueTracker = Od(e));
}
function Ka(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ji(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ya(e, t) {
  (t = t.checked), t != null && Sl(e, "checked", t, !1);
}
function Ei(e, t) {
  Ya(e, t);
  var n = vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ni(e, t.type, vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ys(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ni(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (zn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vt(n) };
}
function Ja(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ws(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _i(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Cr,
  Za = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Cr = Cr || document.createElement("div"),
          Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ad = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function (e) {
  Ad.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]);
  });
});
function ba(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
    ? ("" + t).trim()
    : t + "px";
}
function eu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ba(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Md = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Li(e, t) {
  if (t) {
    if (Md[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Pi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ri = null;
function El(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ii = null,
  sn = null,
  an = null;
function Ss(e) {
  if ((e = hr(e))) {
    if (typeof Ii != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = _o(t)), Ii(e.stateNode, e.type, t));
  }
}
function tu(e) {
  sn ? (an ? an.push(e) : (an = [e])) : (sn = e);
}
function nu() {
  if (sn) {
    var e = sn,
      t = an;
    if (((an = sn = null), Ss(e), t)) for (e = 0; e < t.length; e++) Ss(t[e]);
  }
}
function ru(e, t) {
  return e(t);
}
function ou() {}
var Yo = !1;
function iu(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return ru(e, t, n);
  } finally {
    (Yo = !1), (sn !== null || an !== null) && (ou(), nu());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _o(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Di = !1;
if (Ke)
  try {
    var Nn = {};
    Object.defineProperty(Nn, "passive", {
      get: function () {
        Di = !0;
      },
    }),
      window.addEventListener("test", Nn, Nn),
      window.removeEventListener("test", Nn, Nn);
  } catch {
    Di = !1;
  }
function Fd(e, t, n, r, o, i, l, a, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var Fn = !1,
  Jr = null,
  Xr = !1,
  zi = null,
  Bd = {
    onError: function (e) {
      (Fn = !0), (Jr = e);
    },
  };
function qd(e, t, n, r, o, i, l, a, u) {
  (Fn = !1), (Jr = null), Fd.apply(Bd, arguments);
}
function Ud(e, t, n, r, o, i, l, a, u) {
  if ((qd.apply(this, arguments), Fn)) {
    if (Fn) {
      var d = Jr;
      (Fn = !1), (Jr = null);
    } else throw Error(C(198));
    Xr || ((Xr = !0), (zi = d));
  }
}
function Vt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ks(e) {
  if (Vt(e) !== e) throw Error(C(188));
}
function Wd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ks(o), e;
        if (i === r) return ks(o), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function su(e) {
  return (e = Wd(e)), e !== null ? au(e) : null;
}
function au(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = au(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uu = ke.unstable_scheduleCallback,
  Cs = ke.unstable_cancelCallback,
  Vd = ke.unstable_shouldYield,
  $d = ke.unstable_requestPaint,
  K = ke.unstable_now,
  Gd = ke.unstable_getCurrentPriorityLevel,
  Nl = ke.unstable_ImmediatePriority,
  cu = ke.unstable_UserBlockingPriority,
  Zr = ke.unstable_NormalPriority,
  Hd = ke.unstable_LowPriority,
  du = ke.unstable_IdlePriority,
  jo = null,
  Ue = null;
function Qd(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(jo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Jd,
  Kd = Math.log,
  Yd = Math.LN2;
function Jd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kd(e) / Yd) | 0)) | 0;
}
var jr = 64,
  Er = 4194304;
function On(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = On(a)) : ((i &= l), i !== 0 && (r = On(i)));
  } else (l = n & ~o), l !== 0 ? (r = On(l)) : i !== 0 && (r = On(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Xd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Oe(i),
      a = 1 << l,
      u = o[l];
    u === -1
      ? (!(a & n) || a & r) && (o[l] = Xd(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Oi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fu() {
  var e = jr;
  return (jr <<= 1), !(jr & 4194240) && (jr = 64), e;
}
function Jo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function bd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Oe(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Tl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var A = 0;
function pu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hu,
  _l,
  mu,
  vu,
  gu,
  Ai = !1,
  Nr = [],
  st = null,
  at = null,
  ut = null,
  Yn = new Map(),
  Jn = new Map(),
  nt = [],
  ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function js(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Yn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Tn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = hr(t)), t !== null && _l(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function tf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (st = Tn(st, e, t, n, r, o)), !0;
    case "dragenter":
      return (at = Tn(at, e, t, n, r, o)), !0;
    case "mouseover":
      return (ut = Tn(ut, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Yn.set(i, Tn(Yn.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Jn.set(i, Tn(Jn.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function yu(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lu(n)), t !== null)) {
          (e.blockedOn = t),
            gu(e.priority, function () {
              mu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ri = r), n.target.dispatchEvent(r), (Ri = null);
    } else return (t = hr(n)), t !== null && _l(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Es(e, t, n) {
  Br(e) && n.delete(t);
}
function nf() {
  (Ai = !1),
    st !== null && Br(st) && (st = null),
    at !== null && Br(at) && (at = null),
    ut !== null && Br(ut) && (ut = null),
    Yn.forEach(Es),
    Jn.forEach(Es);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ai ||
      ((Ai = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, nf)));
}
function Xn(e) {
  function t(o) {
    return _n(o, e);
  }
  if (0 < Nr.length) {
    _n(Nr[0], e);
    for (var n = 1; n < Nr.length; n++) {
      var r = Nr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && _n(st, e),
      at !== null && _n(at, e),
      ut !== null && _n(ut, e),
      Yn.forEach(t),
      Jn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    yu(n), n.blockedOn === null && nt.shift();
}
var un = Ze.ReactCurrentBatchConfig,
  eo = !0;
function rf(e, t, n, r) {
  var o = A,
    i = un.transition;
  un.transition = null;
  try {
    (A = 1), Ll(e, t, n, r);
  } finally {
    (A = o), (un.transition = i);
  }
}
function of(e, t, n, r) {
  var o = A,
    i = un.transition;
  un.transition = null;
  try {
    (A = 4), Ll(e, t, n, r);
  } finally {
    (A = o), (un.transition = i);
  }
}
function Ll(e, t, n, r) {
  if (eo) {
    var o = Mi(e, t, n, r);
    if (o === null) li(e, t, r, to, n), js(e, r);
    else if (tf(o, e, t, n, r)) r.stopPropagation();
    else if ((js(e, r), t & 4 && -1 < ef.indexOf(e))) {
      for (; o !== null; ) {
        var i = hr(o);
        if (
          (i !== null && hu(i),
          (i = Mi(e, t, n, r)),
          i === null && li(e, t, r, to, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else li(e, t, r, null, n);
  }
}
var to = null;
function Mi(e, t, n, r) {
  if (((to = null), (e = El(r)), (e = It(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (to = e), null;
}
function xu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Gd()) {
        case Nl:
          return 1;
        case cu:
          return 4;
        case Zr:
        case Hd:
          return 16;
        case du:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  Pl = null,
  qr = null;
function wu() {
  if (qr) return qr;
  var e,
    t = Pl,
    n = t.length,
    r,
    o = "value" in ot ? ot.value : ot.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (qr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Tr() {
  return !0;
}
function Ns() {
  return !1;
}
function je(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Tr
        : Ns),
      (this.isPropagationStopped = Ns),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Tr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Tr));
      },
      persist: function () {},
      isPersistent: Tr,
    }),
    t
  );
}
var Sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Rl = je(Sn),
  pr = $({}, Sn, { view: 0, detail: 0 }),
  lf = je(pr),
  Xo,
  Zo,
  Ln,
  Eo = $({}, pr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Il,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ln &&
            (Ln && e.type === "mousemove"
              ? ((Xo = e.screenX - Ln.screenX), (Zo = e.screenY - Ln.screenY))
              : (Zo = Xo = 0),
            (Ln = e)),
          Xo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zo;
    },
  }),
  Ts = je(Eo),
  sf = $({}, Eo, { dataTransfer: 0 }),
  af = je(sf),
  uf = $({}, pr, { relatedTarget: 0 }),
  bo = je(uf),
  cf = $({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  df = je(cf),
  ff = $({}, Sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pf = je(ff),
  hf = $({}, Sn, { data: 0 }),
  _s = je(hf),
  mf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function yf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gf[e]) ? !!t[e] : !1;
}
function Il() {
  return yf;
}
var xf = $({}, pr, {
    key: function (e) {
      if (e.key) {
        var t = mf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Il,
    charCode: function (e) {
      return e.type === "keypress" ? Ur(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ur(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  wf = je(xf),
  Sf = $({}, Eo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ls = je(Sf),
  kf = $({}, pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Il,
  }),
  Cf = je(kf),
  jf = $({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ef = je(jf),
  Nf = $({}, Eo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tf = je(Nf),
  _f = [9, 13, 27, 32],
  Dl = Ke && "CompositionEvent" in window,
  Bn = null;
Ke && "documentMode" in document && (Bn = document.documentMode);
var Lf = Ke && "TextEvent" in window && !Bn,
  Su = Ke && (!Dl || (Bn && 8 < Bn && 11 >= Bn)),
  Ps = " ",
  Rs = !1;
function ku(e, t) {
  switch (e) {
    case "keyup":
      return _f.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Cu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function Pf(e, t) {
  switch (e) {
    case "compositionend":
      return Cu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Rs = !0), Ps);
    case "textInput":
      return (e = t.data), e === Ps && Rs ? null : e;
    default:
      return null;
  }
}
function Rf(e, t) {
  if (Yt)
    return e === "compositionend" || (!Dl && ku(e, t))
      ? ((e = wu()), (qr = Pl = ot = null), (Yt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Su && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var If = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!If[e.type] : t === "textarea";
}
function ju(e, t, n, r) {
  tu(r),
    (t = no(t, "onChange")),
    0 < t.length &&
      ((n = new Rl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qn = null,
  Zn = null;
function Df(e) {
  Ou(e, 0);
}
function No(e) {
  var t = Zt(e);
  if (Ka(t)) return e;
}
function zf(e, t) {
  if (e === "change") return t;
}
var Eu = !1;
if (Ke) {
  var ei;
  if (Ke) {
    var ti = "oninput" in document;
    if (!ti) {
      var Ds = document.createElement("div");
      Ds.setAttribute("oninput", "return;"),
        (ti = typeof Ds.oninput == "function");
    }
    ei = ti;
  } else ei = !1;
  Eu = ei && (!document.documentMode || 9 < document.documentMode);
}
function zs() {
  qn && (qn.detachEvent("onpropertychange", Nu), (Zn = qn = null));
}
function Nu(e) {
  if (e.propertyName === "value" && No(Zn)) {
    var t = [];
    ju(t, Zn, e, El(e)), iu(Df, t);
  }
}
function Of(e, t, n) {
  e === "focusin"
    ? (zs(), (qn = t), (Zn = n), qn.attachEvent("onpropertychange", Nu))
    : e === "focusout" && zs();
}
function Af(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return No(Zn);
}
function Mf(e, t) {
  if (e === "click") return No(t);
}
function Ff(e, t) {
  if (e === "input" || e === "change") return No(t);
}
function Bf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Bf;
function bn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!xi.call(t, o) || !Me(e[o], t[o])) return !1;
  }
  return !0;
}
function Os(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function As(e, t) {
  var n = Os(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Os(n);
  }
}
function Tu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _u() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function zl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function qf(e) {
  var t = _u(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = As(n, i));
        var l = As(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Uf = Ke && "documentMode" in document && 11 >= document.documentMode,
  Jt = null,
  Fi = null,
  Un = null,
  Bi = !1;
function Ms(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bi ||
    Jt == null ||
    Jt !== Yr(r) ||
    ((r = Jt),
    "selectionStart" in r && zl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && bn(Un, r)) ||
      ((Un = r),
      (r = no(Fi, "onSelect")),
      0 < r.length &&
        ((t = new Rl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jt))));
}
function _r(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Xt = {
    animationend: _r("Animation", "AnimationEnd"),
    animationiteration: _r("Animation", "AnimationIteration"),
    animationstart: _r("Animation", "AnimationStart"),
    transitionend: _r("Transition", "TransitionEnd"),
  },
  ni = {},
  Lu = {};
Ke &&
  ((Lu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  "TransitionEvent" in window || delete Xt.transitionend.transition);
function To(e) {
  if (ni[e]) return ni[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Lu) return (ni[e] = t[n]);
  return e;
}
var Pu = To("animationend"),
  Ru = To("animationiteration"),
  Iu = To("animationstart"),
  Du = To("transitionend"),
  zu = new Map(),
  Fs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yt(e, t) {
  zu.set(e, t), Wt(t, [e]);
}
for (var ri = 0; ri < Fs.length; ri++) {
  var oi = Fs[ri],
    Wf = oi.toLowerCase(),
    Vf = oi[0].toUpperCase() + oi.slice(1);
  yt(Wf, "on" + Vf);
}
yt(Pu, "onAnimationEnd");
yt(Ru, "onAnimationIteration");
yt(Iu, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Du, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Wt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var An =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function Bs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ud(r, t, void 0, e), (e.currentTarget = null);
}
function Ou(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            d = a.currentTarget;
          if (((a = a.listener), u !== i && o.isPropagationStopped())) break e;
          Bs(o, a, d), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (u = a.instance),
            (d = a.currentTarget),
            (a = a.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          Bs(o, a, d), (i = u);
        }
    }
  }
  if (Xr) throw ((e = zi), (Xr = !1), (zi = null), e);
}
function B(e, t) {
  var n = t[$i];
  n === void 0 && (n = t[$i] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Au(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  t && (r |= 4), Au(n, e, r, t);
}
var Lr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Lr]) {
    (e[Lr] = !0),
      Va.forEach(function (n) {
        n !== "selectionchange" && ($f.has(n) || ii(n, !1, e), ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Lr] || ((t[Lr] = !0), ii("selectionchange", !1, t));
  }
}
function Au(e, t, n, r) {
  switch (xu(t)) {
    case 1:
      var o = rf;
      break;
    case 4:
      o = of;
      break;
    default:
      o = Ll;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Di ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function li(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = It(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  iu(function () {
    var d = i,
      h = El(n),
      m = [];
    e: {
      var v = zu.get(e);
      if (v !== void 0) {
        var w = Rl,
          S = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = wf;
            break;
          case "focusin":
            (S = "focus"), (w = bo);
            break;
          case "focusout":
            (S = "blur"), (w = bo);
            break;
          case "beforeblur":
          case "afterblur":
            w = bo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Ts;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Cf;
            break;
          case Pu:
          case Ru:
          case Iu:
            w = df;
            break;
          case Du:
            w = Ef;
            break;
          case "scroll":
            w = lf;
            break;
          case "wheel":
            w = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ls;
        }
        var k = (t & 4) !== 0,
          j = !k && e === "scroll",
          f = k ? (v !== null ? v + "Capture" : null) : v;
        k = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              f !== null && ((x = Kn(c, f)), x != null && k.push(tr(c, x, p)))),
            j)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((v = new w(v, S, null, n, h)), m.push({ event: v, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Ri &&
            (S = n.relatedTarget || n.fromElement) &&
            (It(S) || S[Ye]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            h.window === h
              ? h
              : (v = h.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = d),
              (S = S ? It(S) : null),
              S !== null &&
                ((j = Vt(S)), S !== j || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = d)),
          w !== S)
        ) {
          if (
            ((k = Ts),
            (x = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Ls),
              (x = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (j = w == null ? v : Zt(w)),
            (p = S == null ? v : Zt(S)),
            (v = new k(x, c + "leave", w, n, h)),
            (v.target = j),
            (v.relatedTarget = p),
            (x = null),
            It(h) === d &&
              ((k = new k(f, c + "enter", S, n, h)),
              (k.target = p),
              (k.relatedTarget = j),
              (x = k)),
            (j = x),
            w && S)
          )
            t: {
              for (k = w, f = S, c = 0, p = k; p; p = Ht(p)) c++;
              for (p = 0, x = f; x; x = Ht(x)) p++;
              for (; 0 < c - p; ) (k = Ht(k)), c--;
              for (; 0 < p - c; ) (f = Ht(f)), p--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Ht(k)), (f = Ht(f));
              }
              k = null;
            }
          else k = null;
          w !== null && qs(m, v, w, k, !1),
            S !== null && j !== null && qs(m, j, S, k, !0);
        }
      }
      e: {
        if (
          ((v = d ? Zt(d) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === "select" || (w === "input" && v.type === "file"))
        )
          var E = zf;
        else if (Is(v))
          if (Eu) E = Ff;
          else {
            E = Af;
            var T = Of;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = Mf);
        if (E && (E = E(e, d))) {
          ju(m, E, n, h);
          break e;
        }
        T && T(e, v, d),
          e === "focusout" &&
            (T = v._wrapperState) &&
            T.controlled &&
            v.type === "number" &&
            Ni(v, "number", v.value);
      }
      switch (((T = d ? Zt(d) : window), e)) {
        case "focusin":
          (Is(T) || T.contentEditable === "true") &&
            ((Jt = T), (Fi = d), (Un = null));
          break;
        case "focusout":
          Un = Fi = Jt = null;
          break;
        case "mousedown":
          Bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bi = !1), Ms(m, n, h);
          break;
        case "selectionchange":
          if (Uf) break;
        case "keydown":
        case "keyup":
          Ms(m, n, h);
      }
      var g;
      if (Dl)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Yt
          ? ku(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Su &&
          n.locale !== "ko" &&
          (Yt || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Yt && (g = wu())
            : ((ot = h),
              (Pl = "value" in ot ? ot.value : ot.textContent),
              (Yt = !0))),
        (T = no(d, N)),
        0 < T.length &&
          ((N = new _s(N, e, null, n, h)),
          m.push({ event: N, listeners: T }),
          g ? (N.data = g) : ((g = Cu(n)), g !== null && (N.data = g)))),
        (g = Lf ? Pf(e, n) : Rf(e, n)) &&
          ((d = no(d, "onBeforeInput")),
          0 < d.length &&
            ((h = new _s("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: d }),
            (h.data = g)));
    }
    Ou(m, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function no(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Kn(e, n)),
      i != null && r.unshift(tr(e, i, o)),
      (i = Kn(e, t)),
      i != null && r.push(tr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qs(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      d = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      d !== null &&
      ((a = d),
      o
        ? ((u = Kn(n, i)), u != null && l.unshift(tr(n, u, a)))
        : o || ((u = Kn(n, i)), u != null && l.push(tr(n, u, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Gf = /\r\n?/g,
  Hf = /\u0000|\uFFFD/g;
function Us(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gf,
      `
`
    )
    .replace(Hf, "");
}
function Pr(e, t, n) {
  if (((t = Us(t)), Us(e) !== t && n)) throw Error(C(425));
}
function ro() {}
var qi = null,
  Ui = null;
function Wi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ws = typeof Promise == "function" ? Promise : void 0,
  Kf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ws < "u"
      ? function (e) {
          return Ws.resolve(null).then(e).catch(Yf);
        }
      : Vi;
function Yf(e) {
  setTimeout(function () {
    throw e;
  });
}
function si(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Xn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Xn(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + kn,
  nr = "__reactProps$" + kn,
  Ye = "__reactContainer$" + kn,
  $i = "__reactEvents$" + kn,
  Jf = "__reactListeners$" + kn,
  Xf = "__reactHandles$" + kn;
function It(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vs(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = Vs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hr(e) {
  return (
    (e = e[qe] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function _o(e) {
  return e[nr] || null;
}
var Gi = [],
  bt = -1;
function xt(e) {
  return { current: e };
}
function q(e) {
  0 > bt || ((e.current = Gi[bt]), (Gi[bt] = null), bt--);
}
function F(e, t) {
  bt++, (Gi[bt] = e.current), (e.current = t);
}
var gt = {},
  ae = xt(gt),
  ve = xt(!1),
  Mt = gt;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function oo() {
  q(ve), q(ae);
}
function $s(e, t, n) {
  if (ae.current !== gt) throw Error(C(168));
  F(ae, t), F(ve, n);
}
function Mu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, zd(e) || "Unknown", o));
  return $({}, n, r);
}
function io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (Mt = ae.current),
    F(ae, e),
    F(ve, ve.current),
    !0
  );
}
function Gs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Mu(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(ve),
      q(ae),
      F(ae, e))
    : q(ve),
    F(ve, n);
}
var $e = null,
  Lo = !1,
  ai = !1;
function Fu(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function Zf(e) {
  (Lo = !0), Fu(e);
}
function wt() {
  if (!ai && $e !== null) {
    ai = !0;
    var e = 0,
      t = A;
    try {
      var n = $e;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (Lo = !1);
    } catch (o) {
      throw ($e !== null && ($e = $e.slice(e + 1)), uu(Nl, wt), o);
    } finally {
      (A = t), (ai = !1);
    }
  }
  return null;
}
var en = [],
  tn = 0,
  lo = null,
  so = 0,
  Ee = [],
  Ne = 0,
  Ft = null,
  Ge = 1,
  He = "";
function Pt(e, t) {
  (en[tn++] = so), (en[tn++] = lo), (lo = e), (so = t);
}
function Bu(e, t, n) {
  (Ee[Ne++] = Ge), (Ee[Ne++] = He), (Ee[Ne++] = Ft), (Ft = e);
  var r = Ge;
  e = He;
  var o = 32 - Oe(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Oe(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Ge = (1 << (32 - Oe(t) + o)) | (n << o) | r),
      (He = i + e);
  } else (Ge = (1 << i) | (n << o) | r), (He = e);
}
function Ol(e) {
  e.return !== null && (Pt(e, 1), Bu(e, 1, 0));
}
function Al(e) {
  for (; e === lo; )
    (lo = en[--tn]), (en[tn] = null), (so = en[--tn]), (en[tn] = null);
  for (; e === Ft; )
    (Ft = Ee[--Ne]),
      (Ee[Ne] = null),
      (He = Ee[--Ne]),
      (Ee[Ne] = null),
      (Ge = Ee[--Ne]),
      (Ee[Ne] = null);
}
var Se = null,
  we = null,
  U = !1,
  ze = null;
function qu(e, t) {
  var n = Te(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (we = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: Ge, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qi(e) {
  if (U) {
    var t = we;
    if (t) {
      var n = t;
      if (!Hs(e, t)) {
        if (Hi(e)) throw Error(C(418));
        t = ct(n.nextSibling);
        var r = Se;
        t && Hs(e, t)
          ? qu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Se = e));
      }
    } else {
      if (Hi(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (Se = e);
    }
  }
}
function Qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Rr(e) {
  if (e !== Se) return !1;
  if (!U) return Qs(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Hi(e)) throw (Uu(), Error(C(418)));
    for (; t; ) qu(e, t), (t = ct(t.nextSibling));
  }
  if ((Qs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Se ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function Uu() {
  for (var e = we; e; ) e = ct(e.nextSibling);
}
function hn() {
  (we = Se = null), (U = !1);
}
function Ml(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var bf = Ze.ReactCurrentBatchConfig;
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ao = xt(null),
  uo = null,
  nn = null,
  Fl = null;
function Bl() {
  Fl = nn = uo = null;
}
function ql(e) {
  var t = ao.current;
  q(ao), (e._currentValue = t);
}
function Ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function cn(e, t) {
  (uo = e),
    (Fl = nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function Le(e) {
  var t = e._currentValue;
  if (Fl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nn === null)) {
      if (uo === null) throw Error(C(308));
      (nn = e), (uo.dependencies = { lanes: 0, firstContext: e });
    } else nn = nn.next = e;
  return t;
}
var Dt = null;
function Ul(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Wu(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ul(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Je(e, r)
  );
}
function Je(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function Wl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Je(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ul(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Je(e, n)
  );
}
function Wr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Tl(e, n);
  }
}
function Ks(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function co(e, t, n, r) {
  var o = e.updateQueue;
  tt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var u = a,
      d = u.next;
    (u.next = null), l === null ? (i = d) : (l.next = d), (l = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== l &&
        (a === null ? (h.firstBaseUpdate = d) : (a.next = d),
        (h.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var m = o.baseState;
    (l = 0), (h = d = u = null), (a = i);
    do {
      var v = a.lane,
        w = a.eventTime;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            k = a;
          switch (((v = t), (w = n), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                m = S.call(w, m, v);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (v = typeof S == "function" ? S.call(w, m, v) : S),
                v == null)
              )
                break e;
              m = $({}, m, v);
              break e;
            case 2:
              tt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [a]) : v.push(a));
      } else
        (w = {
          eventTime: w,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((d = h = w), (u = m)) : (h = h.next = w),
          (l |= v);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (v = a),
          (a = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = m),
      (o.baseState = u),
      (o.firstBaseUpdate = d),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (qt |= l), (e.lanes = l), (e.memoizedState = m);
  }
}
function Ys(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var $u = new Wa.Component().refs;
function Yi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Po = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      o = pt(e),
      i = Qe(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, o)),
      t !== null && (Ae(t, e, o, r), Wr(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      o = pt(e),
      i = Qe(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, o)),
      t !== null && (Ae(t, e, o, r), Wr(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = pt(e),
      o = Qe(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = dt(e, o, r)),
      t !== null && (Ae(t, e, r, n), Wr(t, e, r));
  },
};
function Js(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(o, i)
      : !0
  );
}
function Gu(e, t, n) {
  var r = !1,
    o = gt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Le(i))
      : ((o = ge(t) ? Mt : ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? pn(e, o) : gt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Po),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Xs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Po.enqueueReplaceState(t, t.state, null);
}
function Ji(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = $u), Wl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Le(i))
    : ((i = ge(t) ? Mt : ae.current), (o.context = pn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Yi(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Po.enqueueReplaceState(o, o.state, null),
      co(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === $u && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Ir(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Zs(e) {
  var t = e._init;
  return t(e._payload);
}
function Hu(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function o(f, c) {
    return (f = ht(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, c, p, x) {
    return c === null || c.tag !== 6
      ? ((c = mi(p, f.mode, x)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function u(f, c, p, x) {
    var E = p.type;
    return E === Kt
      ? h(f, c, p.props.children, x, p.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === et &&
            Zs(E) === c.type))
      ? ((x = o(c, p.props)), (x.ref = Pn(f, c, p)), (x.return = f), x)
      : ((x = Kr(p.type, p.key, p.props, null, f.mode, x)),
        (x.ref = Pn(f, c, p)),
        (x.return = f),
        x);
  }
  function d(f, c, p, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = vi(p, f.mode, x)), (c.return = f), c)
      : ((c = o(c, p.children || [])), (c.return = f), c);
  }
  function h(f, c, p, x, E) {
    return c === null || c.tag !== 7
      ? ((c = At(p, f.mode, x, E)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = mi("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Sr:
          return (
            (p = Kr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Pn(f, null, c)),
            (p.return = f),
            p
          );
        case Qt:
          return (c = vi(c, f.mode, p)), (c.return = f), c;
        case et:
          var x = c._init;
          return m(f, x(c._payload), p);
      }
      if (zn(c) || En(c))
        return (c = At(c, f.mode, p, null)), (c.return = f), c;
      Ir(f, c);
    }
    return null;
  }
  function v(f, c, p, x) {
    var E = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : a(f, c, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          return p.key === E ? u(f, c, p, x) : null;
        case Qt:
          return p.key === E ? d(f, c, p, x) : null;
        case et:
          return (E = p._init), v(f, c, E(p._payload), x);
      }
      if (zn(p) || En(p)) return E !== null ? null : h(f, c, p, x, null);
      Ir(f, p);
    }
    return null;
  }
  function w(f, c, p, x, E) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (f = f.get(p) || null), a(c, f, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Sr:
          return (f = f.get(x.key === null ? p : x.key) || null), u(c, f, x, E);
        case Qt:
          return (f = f.get(x.key === null ? p : x.key) || null), d(c, f, x, E);
        case et:
          var T = x._init;
          return w(f, c, p, T(x._payload), E);
      }
      if (zn(x) || En(x)) return (f = f.get(p) || null), h(c, f, x, E, null);
      Ir(c, x);
    }
    return null;
  }
  function S(f, c, p, x) {
    for (
      var E = null, T = null, g = c, N = (c = 0), P = null;
      g !== null && N < p.length;
      N++
    ) {
      g.index > N ? ((P = g), (g = null)) : (P = g.sibling);
      var R = v(f, g, p[N], x);
      if (R === null) {
        g === null && (g = P);
        break;
      }
      e && g && R.alternate === null && t(f, g),
        (c = i(R, c, N)),
        T === null ? (E = R) : (T.sibling = R),
        (T = R),
        (g = P);
    }
    if (N === p.length) return n(f, g), U && Pt(f, N), E;
    if (g === null) {
      for (; N < p.length; N++)
        (g = m(f, p[N], x)),
          g !== null &&
            ((c = i(g, c, N)), T === null ? (E = g) : (T.sibling = g), (T = g));
      return U && Pt(f, N), E;
    }
    for (g = r(f, g); N < p.length; N++)
      (P = w(g, f, N, p[N], x)),
        P !== null &&
          (e && P.alternate !== null && g.delete(P.key === null ? N : P.key),
          (c = i(P, c, N)),
          T === null ? (E = P) : (T.sibling = P),
          (T = P));
    return (
      e &&
        g.forEach(function (ue) {
          return t(f, ue);
        }),
      U && Pt(f, N),
      E
    );
  }
  function k(f, c, p, x) {
    var E = En(p);
    if (typeof E != "function") throw Error(C(150));
    if (((p = E.call(p)), p == null)) throw Error(C(151));
    for (
      var T = (E = null), g = c, N = (c = 0), P = null, R = p.next();
      g !== null && !R.done;
      N++, R = p.next()
    ) {
      g.index > N ? ((P = g), (g = null)) : (P = g.sibling);
      var ue = v(f, g, R.value, x);
      if (ue === null) {
        g === null && (g = P);
        break;
      }
      e && g && ue.alternate === null && t(f, g),
        (c = i(ue, c, N)),
        T === null ? (E = ue) : (T.sibling = ue),
        (T = ue),
        (g = P);
    }
    if (R.done) return n(f, g), U && Pt(f, N), E;
    if (g === null) {
      for (; !R.done; N++, R = p.next())
        (R = m(f, R.value, x)),
          R !== null &&
            ((c = i(R, c, N)), T === null ? (E = R) : (T.sibling = R), (T = R));
      return U && Pt(f, N), E;
    }
    for (g = r(f, g); !R.done; N++, R = p.next())
      (R = w(g, f, N, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && g.delete(R.key === null ? N : R.key),
          (c = i(R, c, N)),
          T === null ? (E = R) : (T.sibling = R),
          (T = R));
    return (
      e &&
        g.forEach(function (Cn) {
          return t(f, Cn);
        }),
      U && Pt(f, N),
      E
    );
  }
  function j(f, c, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Kt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Sr:
          e: {
            for (var E = p.key, T = c; T !== null; ) {
              if (T.key === E) {
                if (((E = p.type), E === Kt)) {
                  if (T.tag === 7) {
                    n(f, T.sibling),
                      (c = o(T, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === et &&
                    Zs(E) === T.type)
                ) {
                  n(f, T.sibling),
                    (c = o(T, p.props)),
                    (c.ref = Pn(f, T, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, T);
                break;
              } else t(f, T);
              T = T.sibling;
            }
            p.type === Kt
              ? ((c = At(p.props.children, f.mode, x, p.key)),
                (c.return = f),
                (f = c))
              : ((x = Kr(p.type, p.key, p.props, null, f.mode, x)),
                (x.ref = Pn(f, c, p)),
                (x.return = f),
                (f = x));
          }
          return l(f);
        case Qt:
          e: {
            for (T = p.key; c !== null; ) {
              if (c.key === T)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = vi(p, f.mode, x)), (c.return = f), (f = c);
          }
          return l(f);
        case et:
          return (T = p._init), j(f, c, T(p._payload), x);
      }
      if (zn(p)) return S(f, c, p, x);
      if (En(p)) return k(f, c, p, x);
      Ir(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = mi(p, f.mode, x)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return j;
}
var mn = Hu(!0),
  Qu = Hu(!1),
  mr = {},
  We = xt(mr),
  rr = xt(mr),
  or = xt(mr);
function zt(e) {
  if (e === mr) throw Error(C(174));
  return e;
}
function Vl(e, t) {
  switch ((F(or, t), F(rr, e), F(We, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _i(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _i(t, e));
  }
  q(We), F(We, t);
}
function vn() {
  q(We), q(rr), q(or);
}
function Ku(e) {
  zt(or.current);
  var t = zt(We.current),
    n = _i(t, e.type);
  t !== n && (F(rr, e), F(We, n));
}
function $l(e) {
  rr.current === e && (q(We), q(rr));
}
var W = xt(0);
function fo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ui = [];
function Gl() {
  for (var e = 0; e < ui.length; e++)
    ui[e]._workInProgressVersionPrimary = null;
  ui.length = 0;
}
var Vr = Ze.ReactCurrentDispatcher,
  ci = Ze.ReactCurrentBatchConfig,
  Bt = 0,
  V = null,
  J = null,
  ee = null,
  po = !1,
  Wn = !1,
  ir = 0,
  ep = 0;
function ie() {
  throw Error(C(321));
}
function Hl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Ql(e, t, n, r, o, i) {
  if (
    ((Bt = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vr.current = e === null || e.memoizedState === null ? op : ip),
    (e = n(r, o)),
    Wn)
  ) {
    i = 0;
    do {
      if (((Wn = !1), (ir = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (Vr.current = lp),
        (e = n(r, o));
    } while (Wn);
  }
  if (
    ((Vr.current = ho),
    (t = J !== null && J.next !== null),
    (Bt = 0),
    (ee = J = V = null),
    (po = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Kl() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Pe() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? V.memoizedState : ee.next;
  if (t !== null) (ee = t), (J = e);
  else {
    if (e === null) throw Error(C(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function di(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = J,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      u = null,
      d = i;
    do {
      var h = d.lane;
      if ((Bt & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        u === null ? ((a = u = m), (l = r)) : (u = u.next = m),
          (V.lanes |= h),
          (qt |= h);
      }
      d = d.next;
    } while (d !== null && d !== i);
    u === null ? (l = r) : (u.next = a),
      Me(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (V.lanes |= i), (qt |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fi(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Me(i, t.memoizedState) || (me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Yu() {}
function Ju(e, t) {
  var n = V,
    r = Pe(),
    o = t(),
    i = !Me(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (me = !0)),
    (r = r.queue),
    Yl(bu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sr(9, Zu.bind(null, n, r, o, t), void 0, null),
      te === null)
    )
      throw Error(C(349));
    Bt & 30 || Xu(n, t, o);
  }
  return o;
}
function Xu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ec(t) && tc(e);
}
function bu(e, t, n) {
  return n(function () {
    ec(t) && tc(e);
  });
}
function ec(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function tc(e) {
  var t = Je(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function bs(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rp.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nc() {
  return Pe().memoizedState;
}
function $r(e, t, n, r) {
  var o = Be();
  (V.flags |= e),
    (o.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ro(e, t, n, r) {
  var o = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var l = J.memoizedState;
    if (((i = l.destroy), r !== null && Hl(r, l.deps))) {
      o.memoizedState = sr(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (o.memoizedState = sr(1 | t, n, i, r));
}
function ea(e, t) {
  return $r(8390656, 8, e, t);
}
function Yl(e, t) {
  return Ro(2048, 8, e, t);
}
function rc(e, t) {
  return Ro(4, 2, e, t);
}
function oc(e, t) {
  return Ro(4, 4, e, t);
}
function ic(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function lc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ro(4, 4, ic.bind(null, t, e), n)
  );
}
function Jl() {}
function sc(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ac(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uc(e, t, n) {
  return Bt & 21
    ? (Me(n, t) || ((n = fu()), (V.lanes |= n), (qt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function tp(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (ci.transition = r);
  }
}
function cc() {
  return Pe().memoizedState;
}
function np(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dc(e))
  )
    fc(t, n);
  else if (((n = Wu(e, t, n, r)), n !== null)) {
    var o = de();
    Ae(n, e, r, o), pc(n, t, r);
  }
}
function rp(e, t, n) {
  var r = pt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dc(e)) fc(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Me(a, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Ul(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wu(e, t, o, r)),
      n !== null && ((o = de()), Ae(n, e, r, o), pc(n, t, r));
  }
}
function dc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function fc(e, t) {
  Wn = po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Tl(e, n);
  }
}
var ho = {
    readContext: Le,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  op = {
    readContext: Le,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Le,
    useEffect: ea,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $r(4194308, 4, ic.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = np.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bs,
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = bs(!1),
        t = e[0];
      return (e = tp.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        o = Be();
      if (U) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(C(349));
        Bt & 30 || Xu(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ea(bu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        sr(9, Zu.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = te.identifierPrefix;
      if (U) {
        var n = He,
          r = Ge;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ep++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: Le,
    useCallback: sc,
    useContext: Le,
    useEffect: Yl,
    useImperativeHandle: lc,
    useInsertionEffect: rc,
    useLayoutEffect: oc,
    useMemo: ac,
    useReducer: di,
    useRef: nc,
    useState: function () {
      return di(lr);
    },
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      var t = Pe();
      return uc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = di(lr)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Yu,
    useSyncExternalStore: Ju,
    useId: cc,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: Le,
    useCallback: sc,
    useContext: Le,
    useEffect: Yl,
    useImperativeHandle: lc,
    useInsertionEffect: rc,
    useLayoutEffect: oc,
    useMemo: ac,
    useReducer: fi,
    useRef: nc,
    useState: function () {
      return fi(lr);
    },
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      var t = Pe();
      return J === null ? (t.memoizedState = e) : uc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(lr)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Yu,
    useSyncExternalStore: Ju,
    useId: cc,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function pi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sp = typeof WeakMap == "function" ? WeakMap : Map;
function hc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vo || ((vo = !0), (sl = r)), Xi(e, t);
    }),
    n
  );
}
function mc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Xi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xi(e, t),
          typeof r != "function" &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sp();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Sp.bind(null, e, t, n)), t.then(e, e));
}
function na(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ra(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ap = Ze.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Qu(t, null, n, r) : mn(t, e.child, n, r);
}
function oa(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    cn(t, o),
    (r = Ql(e, t, n, r, i, o)),
    (n = Kl()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xe(e, t, o))
      : (U && n && Ol(t), (t.flags |= 1), ce(e, t, r, o), t.child)
  );
}
function ia(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !os(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vc(e, t, i, r, o))
      : ((e = Kr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(l, r) && e.ref === t.ref)
    )
      return Xe(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ht(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vc(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), Xe(e, t, o);
  }
  return Zi(e, t, n, r, o);
}
function gc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(on, xe),
        (xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(on, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        F(on, xe),
        (xe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(on, xe),
      (xe |= r);
  return ce(e, t, o, n), t.child;
}
function yc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zi(e, t, n, r, o) {
  var i = ge(n) ? Mt : ae.current;
  return (
    (i = pn(t, i)),
    cn(t, o),
    (n = Ql(e, t, n, r, i, o)),
    (r = Kl()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xe(e, t, o))
      : (U && r && Ol(t), (t.flags |= 1), ce(e, t, n, o), t.child)
  );
}
function la(e, t, n, r, o) {
  if (ge(n)) {
    var i = !0;
    io(t);
  } else i = !1;
  if ((cn(t, o), t.stateNode === null))
    Gr(e, t), Gu(t, n, r), Ji(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Le(d))
      : ((d = ge(n) ? Mt : ae.current), (d = pn(t, d)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || u !== d) && Xs(t, l, r, d)),
      (tt = !1);
    var v = t.memoizedState;
    (l.state = v),
      co(t, r, l, o),
      (u = t.memoizedState),
      a !== r || v !== u || ve.current || tt
        ? (typeof h == "function" && (Yi(t, n, h, r), (u = t.memoizedState)),
          (a = tt || Js(t, n, a, r, v, u, d))
            ? (m ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = d),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Vu(e, t),
      (a = t.memoizedProps),
      (d = t.type === t.elementType ? a : Ie(t.type, a)),
      (l.props = d),
      (m = t.pendingProps),
      (v = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Le(u))
        : ((u = ge(n) ? Mt : ae.current), (u = pn(t, u)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== m || v !== u) && Xs(t, l, r, u)),
      (tt = !1),
      (v = t.memoizedState),
      (l.state = v),
      co(t, r, l, o);
    var S = t.memoizedState;
    a !== m || v !== S || ve.current || tt
      ? (typeof w == "function" && (Yi(t, n, w, r), (S = t.memoizedState)),
        (d = tt || Js(t, n, d, r, v, S, u) || !1)
          ? (h ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, S, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, S, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (l.props = r),
        (l.state = S),
        (l.context = u),
        (r = d))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bi(e, t, n, r, i, o);
}
function bi(e, t, n, r, o, i) {
  yc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Gs(t, n, !1), Xe(e, t, i);
  (r = t.stateNode), (ap.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = mn(t, e.child, null, i)), (t.child = mn(t, null, a, i)))
      : ce(e, t, a, i),
    (t.memoizedState = r.state),
    o && Gs(t, n, !0),
    t.child
  );
}
function xc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $s(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $s(e, t.context, !1),
    Vl(e, t.containerInfo);
}
function sa(e, t, n, r, o) {
  return hn(), Ml(o), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var el = { dehydrated: null, treeContext: null, retryLane: 0 };
function tl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wc(e, t, n) {
  var r = t.pendingProps,
    o = W.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    F(W, o & 1),
    e === null)
  )
    return (
      Qi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = zo(l, r, 0, null)),
              (e = At(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = tl(n)),
              (t.memoizedState = el),
              e)
            : Xl(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return up(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ht(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = ht(a, i)) : ((i = At(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? tl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = el),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ht(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xl(e, t) {
  return (
    (t = zo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dr(e, t, n, r) {
  return (
    r !== null && Ml(r),
    mn(t, e.child, null, n),
    (e = Xl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function up(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pi(Error(C(422)))), Dr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = zo({ mode: "visible", children: r.children }, o, 0, null)),
        (i = At(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, l),
        (t.child.memoizedState = tl(l)),
        (t.memoizedState = el),
        i);
  if (!(t.mode & 1)) return Dr(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(C(419))), (r = pi(i, r, void 0)), Dr(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), me || a)) {
    if (((r = te), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Je(e, o), Ae(r, e, o, -1));
    }
    return rs(), (r = pi(Error(C(421)))), Dr(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kp.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (we = ct(o.nextSibling)),
      (Se = t),
      (U = !0),
      (ze = null),
      e !== null &&
        ((Ee[Ne++] = Ge),
        (Ee[Ne++] = He),
        (Ee[Ne++] = Ft),
        (Ge = e.id),
        (He = e.overflow),
        (Ft = t)),
      (t = Xl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function aa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ki(e.return, t, n);
}
function hi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Sc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && aa(e, n, t);
        else if (e.tag === 19) aa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && fo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          hi(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        hi(t, !0, n, null, i);
        break;
      case "together":
        hi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cp(e, t, n) {
  switch (t.tag) {
    case 3:
      xc(t), hn();
      break;
    case 5:
      Ku(t);
      break;
    case 1:
      ge(t.type) && io(t);
      break;
    case 4:
      Vl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      F(ao, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wc(e, t, n)
          : (F(W, W.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      F(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        F(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gc(e, t, n);
  }
  return Xe(e, t, n);
}
var kc, nl, Cc, jc;
kc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
nl = function () {};
Cc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), zt(We.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ji(e, o)), (r = ji(e, r)), (i = []);
        break;
      case "select":
        (o = $({}, o, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ti(e, o)), (r = Ti(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ro);
    }
    Li(n, r);
    var l;
    n = null;
    for (d in o)
      if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null)
        if (d === "style") {
          var a = o[d];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Hn.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (
        ((a = o != null ? o[d] : void 0),
        r.hasOwnProperty(d) && u !== a && (u != null || a != null))
      )
        if (d === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                a[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(d, n)), (n = u);
        else
          d === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(d, u))
            : d === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(d, "" + u)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Hn.hasOwnProperty(d)
                ? (u != null && d === "onScroll" && B("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(d, u));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
jc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dp(e, t, n) {
  var r = t.pendingProps;
  switch ((Al(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return ge(t.type) && oo(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vn(),
        q(ve),
        q(ae),
        Gl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ze !== null && (cl(ze), (ze = null)))),
        nl(e, t),
        le(t),
        null
      );
    case 5:
      $l(t);
      var o = zt(or.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return le(t), null;
        }
        if (((e = zt(We.current)), Rr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[qe] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < An.length; o++) B(An[o], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              gs(r, i), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              xs(r, i), B("invalid", r);
          }
          Li(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Hn.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              kr(r), ys(r, i, !0);
              break;
            case "textarea":
              kr(r), ws(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ro);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xa(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[qe] = t),
            (e[nr] = r),
            kc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Pi(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < An.length; o++) B(An[o], e);
                o = r;
                break;
              case "source":
                B("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (o = r);
                break;
              case "details":
                B("toggle", e), (o = r);
                break;
              case "input":
                gs(e, r), (o = ji(e, r)), B("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = $({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                xs(e, r), (o = Ti(e, r)), B("invalid", e);
                break;
              default:
                o = r;
            }
            Li(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? eu(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Za(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Qn(e, u)
                    : typeof u == "number" && Qn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Hn.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && B("scroll", e)
                      : u != null && Sl(e, i, u, l));
              }
            switch (n) {
              case "input":
                kr(e), ys(e, r, !1);
                break;
              case "textarea":
                kr(e), ws(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ln(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ro);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) jc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = zt(or.current)), zt(We.current), Rr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (q(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && we !== null && t.mode & 1 && !(t.flags & 128))
          Uu(), hn(), (t.flags |= 98560), (i = !1);
        else if (((i = Rr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[qe] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else ze !== null && (cl(ze), (ze = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? X === 0 && (X = 3) : rs())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        vn(), nl(e, t), e === null && er(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return ql(t.type._context), le(t), null;
    case 17:
      return ge(t.type) && oo(), le(t), null;
    case 19:
      if ((q(W), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Rn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = fo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Rn(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > yn &&
            ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !U)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = W.current),
          F(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        ns(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function fp(e, t) {
  switch ((Al(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        q(ve),
        q(ae),
        Gl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $l(t), null;
    case 13:
      if ((q(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(W), null;
    case 4:
      return vn(), null;
    case 10:
      return ql(t.type._context), null;
    case 22:
    case 23:
      return ns(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  se = !1,
  pp = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function rl(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var ua = !1;
function hp(e, t) {
  if (((qi = eo), (e = _u()), zl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            d = 0,
            h = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (o !== 0 && m.nodeType !== 3) || (a = l + o),
                m !== i || (r !== 0 && m.nodeType !== 3) || (u = l + r),
                m.nodeType === 3 && (l += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (v = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++d === o && (a = l),
                v === i && ++h === r && (u = l),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = w;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ui = { focusedElem: e, selectionRange: n }, eo = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    j = S.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Ie(t.type, k),
                      j
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          G(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (S = ua), (ua = !1), S;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && rl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Io(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ol(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ec(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ec(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[nr], delete t[$i], delete t[Jf], delete t[Xf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Nc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ca(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ro));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), (e = e.sibling);
}
function ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ll(e, t, n), e = e.sibling; e !== null; ) ll(e, t, n), (e = e.sibling);
}
var ne = null,
  De = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; ) Tc(e, t, n), (n = n.sibling);
}
function Tc(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(jo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || rn(n, t);
    case 6:
      var r = ne,
        o = De;
      (ne = null),
        be(e, t, n),
        (ne = r),
        (De = o),
        ne !== null &&
          (De
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (De
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? si(e.parentNode, n)
              : e.nodeType === 1 && si(e, n),
            Xn(e))
          : si(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (o = De),
        (ne = n.stateNode.containerInfo),
        (De = !0),
        be(e, t, n),
        (ne = r),
        (De = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && rl(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      be(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          G(n, t, a);
        }
      be(e, t, n);
      break;
    case 21:
      be(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), be(e, t, n), (se = r))
        : be(e, t, n);
      break;
    default:
      be(e, t, n);
  }
}
function da(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pp()),
      t.forEach(function (r) {
        var o = Cp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ne = a.stateNode), (De = !1);
              break e;
            case 3:
              (ne = a.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (ne = a.stateNode.containerInfo), (De = !0);
              break e;
          }
          a = a.return;
        }
        if (ne === null) throw Error(C(160));
        Tc(i, l, o), (ne = null), (De = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (d) {
        G(o, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _c(t, e), (t = t.sibling);
}
function _c(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Fe(e), r & 4)) {
        try {
          Vn(3, e, e.return), Io(3, e);
        } catch (k) {
          G(e, e.return, k);
        }
        try {
          Vn(5, e, e.return);
        } catch (k) {
          G(e, e.return, k);
        }
      }
      break;
    case 1:
      Re(t, e), Fe(e), r & 512 && n !== null && rn(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Fe(e),
        r & 512 && n !== null && rn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Qn(o, "");
        } catch (k) {
          G(e, e.return, k);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Ya(o, i),
              Pi(a, l);
            var d = Pi(a, i);
            for (l = 0; l < u.length; l += 2) {
              var h = u[l],
                m = u[l + 1];
              h === "style"
                ? eu(o, m)
                : h === "dangerouslySetInnerHTML"
                ? Za(o, m)
                : h === "children"
                ? Qn(o, m)
                : Sl(o, h, m, d);
            }
            switch (a) {
              case "input":
                Ei(o, i);
                break;
              case "textarea":
                Ja(o, i);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? ln(o, !!i.multiple, w, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ln(o, !!i.multiple, i.defaultValue, !0)
                      : ln(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[nr] = i;
          } catch (k) {
            G(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (k) {
          G(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xn(t.containerInfo);
        } catch (k) {
          G(e, e.return, k);
        }
      break;
    case 4:
      Re(t, e), Fe(e);
      break;
    case 13:
      Re(t, e),
        Fe(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (es = K())),
        r & 4 && da(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (d = se) || h), Re(t, e), (se = d)) : Re(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (m = _ = h; _ !== null; ) {
              switch (((v = _), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, v, v.return);
                  break;
                case 1:
                  rn(v, v.return);
                  var S = v.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      G(r, n, k);
                    }
                  }
                  break;
                case 5:
                  rn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    pa(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (_ = w)) : pa(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (o = m.stateNode),
                  d
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = m.stateNode),
                      (u = m.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = ba("display", l)));
              } catch (k) {
                G(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (k) {
                G(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Fe(e), r & 4 && da(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Qn(o, ""), (r.flags &= -33));
          var i = ca(e);
          ll(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = ca(e);
          il(e, a, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      G(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mp(e, t, n) {
  (_ = e), Lc(e);
}
function Lc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || zr;
      if (!l) {
        var a = o.alternate,
          u = (a !== null && a.memoizedState !== null) || se;
        a = zr;
        var d = se;
        if (((zr = l), (se = u) && !d))
          for (_ = o; _ !== null; )
            (l = _),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? ha(o)
                : u !== null
                ? ((u.return = l), (_ = u))
                : ha(o);
        for (; i !== null; ) (_ = i), Lc(i), (i = i.sibling);
        (_ = o), (zr = a), (se = d);
      }
      fa(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : fa(e);
  }
}
function fa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || Io(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Ys(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ys(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var h = d.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Xn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        se || (t.flags & 512 && ol(t));
      } catch (v) {
        G(t, t.return, v);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function pa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ha(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Io(4, t);
          } catch (u) {
            G(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              G(t, o, u);
            }
          }
          var i = t.return;
          try {
            ol(t);
          } catch (u) {
            G(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ol(t);
          } catch (u) {
            G(t, l, u);
          }
      }
    } catch (u) {
      G(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (_ = a);
      break;
    }
    _ = t.return;
  }
}
var vp = Math.ceil,
  mo = Ze.ReactCurrentDispatcher,
  Zl = Ze.ReactCurrentOwner,
  _e = Ze.ReactCurrentBatchConfig,
  O = 0,
  te = null,
  Y = null,
  re = 0,
  xe = 0,
  on = xt(0),
  X = 0,
  ar = null,
  qt = 0,
  Do = 0,
  bl = 0,
  $n = null,
  he = null,
  es = 0,
  yn = 1 / 0,
  Ve = null,
  vo = !1,
  sl = null,
  ft = null,
  Or = !1,
  it = null,
  go = 0,
  Gn = 0,
  al = null,
  Hr = -1,
  Qr = 0;
function de() {
  return O & 6 ? K() : Hr !== -1 ? Hr : (Hr = K());
}
function pt(e) {
  return e.mode & 1
    ? O & 2 && re !== 0
      ? re & -re
      : bf.transition !== null
      ? (Qr === 0 && (Qr = fu()), Qr)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xu(e.type))),
        e)
    : 1;
}
function Ae(e, t, n, r) {
  if (50 < Gn) throw ((Gn = 0), (al = null), Error(C(185)));
  fr(e, n, r),
    (!(O & 2) || e !== te) &&
      (e === te && (!(O & 2) && (Do |= n), X === 4 && rt(e, re)),
      ye(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((yn = K() + 500), Lo && wt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Zd(e, t);
  var r = br(e, e === te ? re : 0);
  if (r === 0)
    n !== null && Cs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cs(n), t === 1))
      e.tag === 0 ? Zf(ma.bind(null, e)) : Fu(ma.bind(null, e)),
        Kf(function () {
          !(O & 6) && wt();
        }),
        (n = null);
    else {
      switch (pu(r)) {
        case 1:
          n = Nl;
          break;
        case 4:
          n = cu;
          break;
        case 16:
          n = Zr;
          break;
        case 536870912:
          n = du;
          break;
        default:
          n = Zr;
      }
      n = Mc(n, Pc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pc(e, t) {
  if (((Hr = -1), (Qr = 0), O & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = br(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
  else {
    t = r;
    var o = O;
    O |= 2;
    var i = Ic();
    (te !== e || re !== t) && ((Ve = null), (yn = K() + 500), Ot(e, t));
    do
      try {
        xp();
        break;
      } catch (a) {
        Rc(e, a);
      }
    while (!0);
    Bl(),
      (mo.current = i),
      (O = o),
      Y !== null ? (t = 0) : ((te = null), (re = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Oi(e)), o !== 0 && ((r = o), (t = ul(e, o)))), t === 1)
    )
      throw ((n = ar), Ot(e, 0), rt(e, r), ye(e, K()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !gp(o) &&
          ((t = yo(e, r)),
          t === 2 && ((i = Oi(e)), i !== 0 && ((r = i), (t = ul(e, i)))),
          t === 1))
      )
        throw ((n = ar), Ot(e, 0), rt(e, r), ye(e, K()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Rt(e, he, Ve);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = es + 500 - K()), 10 < t))
          ) {
            if (br(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Vi(Rt.bind(null, e, he, Ve), t);
            break;
          }
          Rt(e, he, Ve);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Oe(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vi(Rt.bind(null, e, he, Ve), r);
            break;
          }
          Rt(e, he, Ve);
          break;
        case 5:
          Rt(e, he, Ve);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? Pc.bind(null, e) : null;
}
function ul(e, t) {
  var n = $n;
  return (
    e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256),
    (e = yo(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && cl(t)),
    e
  );
}
function cl(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function gp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Me(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~bl,
      t &= ~Do,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ma(e) {
  if (O & 6) throw Error(C(327));
  dn();
  var t = br(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oi(e);
    r !== 0 && ((t = r), (n = ul(e, r)));
  }
  if (n === 1) throw ((n = ar), Ot(e, 0), rt(e, t), ye(e, K()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, he, Ve),
    ye(e, K()),
    null
  );
}
function ts(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((yn = K() + 500), Lo && wt());
  }
}
function Ut(e) {
  it !== null && it.tag === 0 && !(O & 6) && dn();
  var t = O;
  O |= 1;
  var n = _e.transition,
    r = A;
  try {
    if (((_e.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (_e.transition = n), (O = t), !(O & 6) && wt();
  }
}
function ns() {
  (xe = on.current), q(on);
}
function Ot(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qf(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Al(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oo();
          break;
        case 3:
          vn(), q(ve), q(ae), Gl();
          break;
        case 5:
          $l(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          q(W);
          break;
        case 19:
          q(W);
          break;
        case 10:
          ql(r.type._context);
          break;
        case 22:
        case 23:
          ns();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (Y = e = ht(e.current, null)),
    (re = xe = t),
    (X = 0),
    (ar = null),
    (bl = Do = qt = 0),
    (he = $n = null),
    Dt !== null)
  ) {
    for (t = 0; t < Dt.length; t++)
      if (((n = Dt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Dt = null;
  }
  return e;
}
function Rc(e, t) {
  do {
    var n = Y;
    try {
      if ((Bl(), (Vr.current = ho), po)) {
        for (var r = V.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        po = !1;
      }
      if (
        ((Bt = 0),
        (ee = J = V = null),
        (Wn = !1),
        (ir = 0),
        (Zl.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (ar = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          u = t;
        if (
          ((t = re),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var d = u,
            h = a,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = na(l);
          if (w !== null) {
            (w.flags &= -257),
              ra(w, l, a, i, t),
              w.mode & 1 && ta(i, d, t),
              (t = w),
              (u = d);
            var S = t.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ta(i, d, t), rs();
              break e;
            }
            u = Error(C(426));
          }
        } else if (U && a.mode & 1) {
          var j = na(l);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              ra(j, l, a, i, t),
              Ml(gn(u, a));
            break e;
          }
        }
        (i = u = gn(u, a)),
          X !== 4 && (X = 2),
          $n === null ? ($n = [i]) : $n.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = hc(i, u, t);
              Ks(i, f);
              break e;
            case 1:
              a = u;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ft === null || !ft.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = mc(i, a, t);
                Ks(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zc(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ic() {
  var e = mo.current;
  return (mo.current = ho), e === null ? ho : e;
}
function rs() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    te === null || (!(qt & 268435455) && !(Do & 268435455)) || rt(te, re);
}
function yo(e, t) {
  var n = O;
  O |= 2;
  var r = Ic();
  (te !== e || re !== t) && ((Ve = null), Ot(e, t));
  do
    try {
      yp();
      break;
    } catch (o) {
      Rc(e, o);
    }
  while (!0);
  if ((Bl(), (O = n), (mo.current = r), Y !== null)) throw Error(C(261));
  return (te = null), (re = 0), X;
}
function yp() {
  for (; Y !== null; ) Dc(Y);
}
function xp() {
  for (; Y !== null && !Vd(); ) Dc(Y);
}
function Dc(e) {
  var t = Ac(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? zc(e) : (Y = t),
    (Zl.current = null);
}
function zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fp(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = dp(n, t, xe)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Rt(e, t, n) {
  var r = A,
    o = _e.transition;
  try {
    (_e.transition = null), (A = 1), wp(e, t, n, r);
  } finally {
    (_e.transition = o), (A = r);
  }
  return null;
}
function wp(e, t, n, r) {
  do dn();
  while (it !== null);
  if (O & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (bd(e, i),
    e === te && ((Y = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Or ||
      ((Or = !0),
      Mc(Zr, function () {
        return dn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var l = A;
    A = 1;
    var a = O;
    (O |= 4),
      (Zl.current = null),
      hp(e, n),
      _c(n, e),
      qf(Ui),
      (eo = !!qi),
      (Ui = qi = null),
      (e.current = n),
      mp(n),
      $d(),
      (O = a),
      (A = l),
      (_e.transition = i);
  } else e.current = n;
  if (
    (Or && ((Or = !1), (it = e), (go = o)),
    (i = e.pendingLanes),
    i === 0 && (ft = null),
    Qd(n.stateNode),
    ye(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vo) throw ((vo = !1), (e = sl), (sl = null), e);
  return (
    go & 1 && e.tag !== 0 && dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === al ? Gn++ : ((Gn = 0), (al = e))) : (Gn = 0),
    wt(),
    null
  );
}
function dn() {
  if (it !== null) {
    var e = pu(go),
      t = _e.transition,
      n = A;
    try {
      if (((_e.transition = null), (A = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (go = 0), O & 6)) throw Error(C(331));
        var o = O;
        for (O |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            l = i.child;
          if (_.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var d = a[u];
                for (_ = d; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (_ = m);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var v = h.sibling,
                        w = h.return;
                      if ((Ec(h), h === d)) {
                        _ = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = w), (_ = v);
                        break;
                      }
                      _ = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var j = k.sibling;
                    (k.sibling = null), (k = j);
                  } while (k !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (_ = l);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (_ = f);
                break e;
              }
              _ = i.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          l = _;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (_ = p);
          else
            e: for (l = c; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Io(9, a);
                  }
                } catch (E) {
                  G(a, a.return, E);
                }
              if (a === l) {
                _ = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (_ = x);
                break e;
              }
              _ = a.return;
            }
        }
        if (
          ((O = o), wt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(jo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (_e.transition = t);
    }
  }
  return !1;
}
function va(e, t, n) {
  (t = gn(n, t)),
    (t = hc(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = de()),
    e !== null && (fr(e, 1, t), ye(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) va(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        va(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ft === null || !ft.has(r)))
        ) {
          (e = gn(n, e)),
            (e = mc(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = de()),
            t !== null && (fr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (X === 4 || (X === 3 && (re & 130023424) === re && 500 > K() - es)
        ? Ot(e, 0)
        : (bl |= n)),
    ye(e, t);
}
function Oc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
      : (t = 1));
  var n = de();
  (e = Je(e, t)), e !== null && (fr(e, t, n), ye(e, n));
}
function kp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Oc(e, n);
}
function Cp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Oc(e, n);
}
var Ac;
Ac = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), cp(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), U && t.flags & 1048576 && Bu(t, so, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Gr(e, t), (e = t.pendingProps);
      var o = pn(t, ae.current);
      cn(t, n), (o = Ql(null, t, r, e, o, n));
      var i = Kl();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((i = !0), io(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Wl(t),
            (o.updater = Po),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ji(t, r, e, n),
            (t = bi(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && Ol(t), ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Gr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ep(r)),
          (e = Ie(r, e)),
          o)
        ) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = la(null, t, r, e, n);
            break e;
          case 11:
            t = oa(null, t, r, e, n);
            break e;
          case 14:
            t = ia(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ie(r, o)),
        Zi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ie(r, o)),
        la(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((xc(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Vu(e, t),
          co(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = gn(Error(C(423)), t)), (t = sa(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = gn(Error(C(424)), t)), (t = sa(e, t, r, n, o));
            break e;
          } else
            for (
              we = ct(t.stateNode.containerInfo.firstChild),
                Se = t,
                U = !0,
                ze = null,
                n = Qu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hn(), r === o)) {
            t = Xe(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ku(t),
        e === null && Qi(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Wi(r, o) ? (l = null) : i !== null && Wi(r, i) && (t.flags |= 32),
        yc(e, t),
        ce(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Qi(t), null;
    case 13:
      return wc(e, t, n);
    case 4:
      return (
        Vl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ie(r, o)),
        oa(e, t, r, o, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          F(ao, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Me(i.value, l)) {
            if (i.children === o.children && !ve.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Qe(-1, n & -n)), (u.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var h = d.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (d.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Ki(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(C(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Ki(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        cn(t, n),
        (o = Le(o)),
        (r = r(o)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ie(r, t.pendingProps)),
        (o = Ie(r.type, o)),
        ia(e, t, r, o, n)
      );
    case 15:
      return vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ie(r, o)),
        Gr(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), io(t)) : (e = !1),
        cn(t, n),
        Gu(t, r, o),
        Ji(t, r, o, n),
        bi(null, t, r, !0, e, n)
      );
    case 19:
      return Sc(e, t, n);
    case 22:
      return gc(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Mc(e, t) {
  return uu(e, t);
}
function jp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Te(e, t, n, r) {
  return new jp(e, t, n, r);
}
function os(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ep(e) {
  if (typeof e == "function") return os(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cl)) return 11;
    if (e === jl) return 14;
  }
  return 2;
}
function ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Kr(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) os(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Kt:
        return At(n.children, o, i, t);
      case kl:
        (l = 8), (o |= 8);
        break;
      case wi:
        return (
          (e = Te(12, n, t, o | 2)), (e.elementType = wi), (e.lanes = i), e
        );
      case Si:
        return (e = Te(13, n, t, o)), (e.elementType = Si), (e.lanes = i), e;
      case ki:
        return (e = Te(19, n, t, o)), (e.elementType = ki), (e.lanes = i), e;
      case Ha:
        return zo(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $a:
              l = 10;
              break e;
            case Ga:
              l = 9;
              break e;
            case Cl:
              l = 11;
              break e;
            case jl:
              l = 14;
              break e;
            case et:
              (l = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Te(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function At(e, t, n, r) {
  return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function zo(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = Ha),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mi(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function vi(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Np(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Jo(0)),
    (this.expirationTimes = Jo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function is(e, t, n, r, o, i, l, a, u) {
  return (
    (e = new Np(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Te(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wl(i),
    e
  );
}
function Tp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Mu(e, n, t);
  }
  return t;
}
function Bc(e, t, n, r, o, i, l, a, u) {
  return (
    (e = is(n, r, !0, e, o, i, l, a, u)),
    (e.context = Fc(null)),
    (n = e.current),
    (r = de()),
    (o = pt(n)),
    (i = Qe(r, o)),
    (i.callback = t ?? null),
    dt(n, i, o),
    (e.current.lanes = o),
    fr(e, o, r),
    ye(e, r),
    e
  );
}
function Oo(e, t, n, r) {
  var o = t.current,
    i = de(),
    l = pt(o);
  return (
    (n = Fc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(o, t, l)),
    e !== null && (Ae(e, o, l, i), Wr(e, o, l)),
    l
  );
}
function xo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ga(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ls(e, t) {
  ga(e, t), (e = e.alternate) && ga(e, t);
}
function _p() {
  return null;
}
var qc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ss(e) {
  this._internalRoot = e;
}
Ao.prototype.render = ss.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Oo(e, t, null, null);
};
Ao.prototype.unmount = ss.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      Oo(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function Ao(e) {
  this._internalRoot = e;
}
Ao.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && yu(e);
  }
};
function as(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Mo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ya() {}
function Lp(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = xo(l);
        i.call(d);
      };
    }
    var l = Bc(t, r, e, 0, null, !1, !1, "", ya);
    return (
      (e._reactRootContainer = l),
      (e[Ye] = l.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var d = xo(u);
      a.call(d);
    };
  }
  var u = is(e, 0, !1, null, null, !1, !1, "", ya);
  return (
    (e._reactRootContainer = u),
    (e[Ye] = u.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      Oo(t, u, n, r);
    }),
    u
  );
}
function Fo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var u = xo(l);
        a.call(u);
      };
    }
    Oo(t, l, e, o);
  } else l = Lp(n, t, e, o, r);
  return xo(l);
}
hu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = On(t.pendingLanes);
        n !== 0 &&
          (Tl(t, n | 1), ye(t, K()), !(O & 6) && ((yn = K() + 500), wt()));
      }
      break;
    case 13:
      Ut(function () {
        var r = Je(e, 1);
        if (r !== null) {
          var o = de();
          Ae(r, e, 1, o);
        }
      }),
        ls(e, 1);
  }
};
_l = function (e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = de();
      Ae(t, e, 134217728, n);
    }
    ls(e, 134217728);
  }
};
mu = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = Je(e, t);
    if (n !== null) {
      var r = de();
      Ae(n, e, t, r);
    }
    ls(e, t);
  }
};
vu = function () {
  return A;
};
gu = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
Ii = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ei(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = _o(r);
            if (!o) throw Error(C(90));
            Ka(r), Ei(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ja(e, n);
      break;
    case "select":
      (t = n.value), t != null && ln(e, !!n.multiple, t, !1);
  }
};
ru = ts;
ou = Ut;
var Pp = { usingClientEntryPoint: !1, Events: [hr, Zt, _o, tu, nu, ts] },
  In = {
    findFiberByHostInstance: It,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Rp = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = su(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || _p,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ar.isDisabled && Ar.supportsFiber)
    try {
      (jo = Ar.inject(Rp)), (Ue = Ar);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!as(t)) throw Error(C(200));
  return Tp(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!as(e)) throw Error(C(299));
  var n = !1,
    r = "",
    o = qc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = is(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ye] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new ss(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = su(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Ut(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Mo(t)) throw Error(C(200));
  return Fo(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!as(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = qc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Bc(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ye] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ao(t);
};
Ce.render = function (e, t, n) {
  if (!Mo(t)) throw Error(C(200));
  return Fo(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Mo(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = ts;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Mo(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Fo(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
function Uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
Uc(), (Ba.exports = Ce);
var Ip = Ba.exports,
  xa = Ip;
(yi.createRoot = xa.createRoot), (yi.hydrateRoot = xa.hydrateRoot);
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ur() {
  return (
    (ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ur.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const wa = "popstate";
function Dp(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: l = "/",
      search: a = "",
      hash: u = "",
    } = $t(o.location.hash.substr(1));
    return (
      !l.startsWith("/") && !l.startsWith(".") && (l = "/" + l),
      dl(
        "",
        { pathname: l, search: a, hash: u },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(o, i) {
    let l = o.document.querySelector("base"),
      a = "";
    if (l && l.getAttribute("href")) {
      let u = o.location.href,
        d = u.indexOf("#");
      a = d === -1 ? u : u.slice(0, d);
    }
    return a + "#" + (typeof i == "string" ? i : wo(i));
  }
  function r(o, i) {
    us(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return Op(t, n, r, e);
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function us(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zp() {
  return Math.random().toString(36).substr(2, 8);
}
function Sa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function dl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ur(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $t(t) : t,
      { state: n, key: (t && t.key) || r || zp() }
    )
  );
}
function wo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function $t(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Op(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    a = lt.Pop,
    u = null,
    d = h();
  d == null && ((d = 0), l.replaceState(ur({}, l.state, { idx: d }), ""));
  function h() {
    return (l.state || { idx: null }).idx;
  }
  function m() {
    a = lt.Pop;
    let j = h(),
      f = j == null ? null : j - d;
    (d = j), u && u({ action: a, location: k.location, delta: f });
  }
  function v(j, f) {
    a = lt.Push;
    let c = dl(k.location, j, f);
    n && n(c, j), (d = h() + 1);
    let p = Sa(c, d),
      x = k.createHref(c);
    try {
      l.pushState(p, "", x);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(x);
    }
    i && u && u({ action: a, location: k.location, delta: 1 });
  }
  function w(j, f) {
    a = lt.Replace;
    let c = dl(k.location, j, f);
    n && n(c, j), (d = h());
    let p = Sa(c, d),
      x = k.createHref(c);
    l.replaceState(p, "", x),
      i && u && u({ action: a, location: k.location, delta: 0 });
  }
  function S(j) {
    let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof j == "string" ? j : wo(j);
    return (
      (c = c.replace(/ $/, "%20")),
      H(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let k = {
    get action() {
      return a;
    },
    get location() {
      return e(o, l);
    },
    listen(j) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(wa, m),
        (u = j),
        () => {
          o.removeEventListener(wa, m), (u = null);
        }
      );
    },
    createHref(j) {
      return t(o, j);
    },
    createURL: S,
    encodeLocation(j) {
      let f = S(j);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: v,
    replace: w,
    go(j) {
      return l.go(j);
    },
  };
  return k;
}
var ka;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ka || (ka = {}));
function Ap(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? $t(t) : t,
    o = xn(r.pathname || "/", n);
  if (o == null) return null;
  let i = Wc(e);
  Mp(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) {
    let u = Kp(o);
    l = Hp(i[a], u);
  }
  return l;
}
function Wc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (H(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let d = mt([r, u.relativePath]),
      h = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (H(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + d + '".')
      ),
      Wc(i.children, t, h, d)),
      !(i.path == null && !i.index) &&
        t.push({ path: d, score: $p(d, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, l) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, l);
      else for (let u of Vc(i.path)) o(i, l, u);
    }),
    t
  );
}
function Vc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Vc(r.join("/")),
    a = [];
  return (
    a.push(...l.map((u) => (u === "" ? i : [i, u].join("/")))),
    o && a.push(...l),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Mp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Gp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Fp = /^:[\w-]+$/,
  Bp = 3,
  qp = 2,
  Up = 1,
  Wp = 10,
  Vp = -2,
  Ca = (e) => e === "*";
function $p(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ca) && (r += Vp),
    t && (r += qp),
    n
      .filter((o) => !Ca(o))
      .reduce((o, i) => o + (Fp.test(i) ? Bp : i === "" ? Up : Wp), r)
  );
}
function Gp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Hp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      u = l === n.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      h = fl(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = a.route;
    i.push({
      params: r,
      pathname: mt([o, h.pathname]),
      pathnameBase: Zp(mt([o, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== "/" && (o = mt([o, h.pathnameBase]));
  }
  return i;
}
function fl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Qp(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((d, h, m) => {
      let { paramName: v, isOptional: w } = h;
      if (v === "*") {
        let k = a[m] || "";
        l = i.slice(0, i.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const S = a[m];
      return (
        w && !S ? (d[v] = void 0) : (d[v] = (S || "").replace(/%2F/g, "/")), d
      );
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Qp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    us(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Kp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      us(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function xn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Yp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? $t(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Jp(n, t)) : t,
    search: bp(r),
    hash: eh(o),
  };
}
function Jp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function gi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Xp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function $c(e, t) {
  let n = Xp(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Gc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = $t(e))
    : ((o = ur({}, e)),
      H(
        !o.pathname || !o.pathname.includes("?"),
        gi("?", "pathname", "search", o)
      ),
      H(
        !o.pathname || !o.pathname.includes("#"),
        gi("#", "pathname", "hash", o)
      ),
      H(!o.search || !o.search.includes("#"), gi("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    a;
  if (l == null) a = n;
  else {
    let m = t.length - 1;
    if (!r && l.startsWith("..")) {
      let v = l.split("/");
      for (; v[0] === ".."; ) v.shift(), (m -= 1);
      o.pathname = v.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let u = Yp(o, a),
    d = l && l !== "/" && l.endsWith("/"),
    h = (i || l === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (d || h) && (u.pathname += "/"), u;
}
const mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Zp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  bp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  eh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function th(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Hc = ["post", "put", "patch", "delete"];
new Set(Hc);
const nh = ["get", ...Hc];
new Set(nh);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cr.apply(this, arguments)
  );
}
const Bo = y.createContext(null),
  Qc = y.createContext(null),
  St = y.createContext(null),
  qo = y.createContext(null),
  Gt = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kc = y.createContext(null);
function rh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  vr() || H(!1);
  let { basename: r, navigator: o } = y.useContext(St),
    { hash: i, pathname: l, search: a } = Uo(e, { relative: n }),
    u = l;
  return (
    r !== "/" && (u = l === "/" ? r : mt([r, l])),
    o.createHref({ pathname: u, search: a, hash: i })
  );
}
function vr() {
  return y.useContext(qo) != null;
}
function gr() {
  return vr() || H(!1), y.useContext(qo).location;
}
function Yc(e) {
  y.useContext(St).static || y.useLayoutEffect(e);
}
function oh() {
  let { isDataRoute: e } = y.useContext(Gt);
  return e ? gh() : ih();
}
function ih() {
  vr() || H(!1);
  let e = y.useContext(Bo),
    { basename: t, future: n, navigator: r } = y.useContext(St),
    { matches: o } = y.useContext(Gt),
    { pathname: i } = gr(),
    l = JSON.stringify($c(o, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    Yc(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (d, h) {
        if ((h === void 0 && (h = {}), !a.current)) return;
        if (typeof d == "number") {
          r.go(d);
          return;
        }
        let m = Gc(d, JSON.parse(l), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : mt([t, m.pathname])),
          (h.replace ? r.replace : r.push)(m, h.state, h);
      },
      [t, r, l, i, e]
    )
  );
}
function Uo(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(St),
    { matches: o } = y.useContext(Gt),
    { pathname: i } = gr(),
    l = JSON.stringify($c(o, r.v7_relativeSplatPath));
  return y.useMemo(() => Gc(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function lh(e, t) {
  return sh(e, t);
}
function sh(e, t, n, r) {
  vr() || H(!1);
  let { navigator: o } = y.useContext(St),
    { matches: i } = y.useContext(Gt),
    l = i[i.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let u = l ? l.pathnameBase : "/";
  l && l.route;
  let d = gr(),
    h;
  if (t) {
    var m;
    let j = typeof t == "string" ? $t(t) : t;
    u === "/" || ((m = j.pathname) != null && m.startsWith(u)) || H(!1),
      (h = j);
  } else h = d;
  let v = h.pathname || "/",
    w = v;
  if (u !== "/") {
    let j = u.replace(/^\//, "").split("/");
    w = "/" + v.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let S = Ap(e, { pathname: w }),
    k = fh(
      S &&
        S.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, a, j.params),
            pathname: mt([
              u,
              o.encodeLocation
                ? o.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? u
                : mt([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && k
    ? y.createElement(
        qo.Provider,
        {
          value: {
            location: cr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: lt.Pop,
          },
        },
        k
      )
    : k;
}
function ah() {
  let e = vh(),
    t = th(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    null
  );
}
const uh = y.createElement(ah, null);
class ch extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          Gt.Provider,
          { value: this.props.routeContext },
          y.createElement(Kc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function dh(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(Bo);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Gt.Provider, { value: t }, r)
  );
}
function fh(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let h = l.findIndex(
      (m) => m.route.id && (a == null ? void 0 : a[m.route.id])
    );
    h >= 0 || H(!1), (l = l.slice(0, Math.min(l.length, h + 1)));
  }
  let u = !1,
    d = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < l.length; h++) {
      let m = l[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = h),
        m.route.id)
      ) {
        let { loaderData: v, errors: w } = n,
          S =
            m.route.loader &&
            v[m.route.id] === void 0 &&
            (!w || w[m.route.id] === void 0);
        if (m.route.lazy || S) {
          (u = !0), d >= 0 ? (l = l.slice(0, d + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((h, m, v) => {
    let w,
      S = !1,
      k = null,
      j = null;
    n &&
      ((w = a && m.route.id ? a[m.route.id] : void 0),
      (k = m.route.errorElement || uh),
      u &&
        (d < 0 && v === 0
          ? (yh("route-fallback", !1), (S = !0), (j = null))
          : d === v &&
            ((S = !0), (j = m.route.hydrateFallbackElement || null))));
    let f = t.concat(l.slice(0, v + 1)),
      c = () => {
        let p;
        return (
          w
            ? (p = k)
            : S
            ? (p = j)
            : m.route.Component
            ? (p = y.createElement(m.route.Component, null))
            : m.route.element
            ? (p = m.route.element)
            : (p = h),
          y.createElement(dh, {
            match: m,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || v === 0)
      ? y.createElement(ch, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: w,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Jc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Jc || {}),
  So = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(So || {});
function ph(e) {
  let t = y.useContext(Bo);
  return t || H(!1), t;
}
function hh(e) {
  let t = y.useContext(Qc);
  return t || H(!1), t;
}
function mh(e) {
  let t = y.useContext(Gt);
  return t || H(!1), t;
}
function Xc(e) {
  let t = mh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || H(!1), n.route.id;
}
function vh() {
  var e;
  let t = y.useContext(Kc),
    n = hh(So.UseRouteError),
    r = Xc(So.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function gh() {
  let { router: e } = ph(Jc.UseNavigateStable),
    t = Xc(So.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Yc(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, cr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const ja = {};
function yh(e, t, n) {
  !t && !ja[e] && (ja[e] = !0);
}
function b(e) {
  H(!1);
}
function xh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = lt.Pop,
    navigator: i,
    static: l = !1,
    future: a,
  } = e;
  vr() && H(!1);
  let u = t.replace(/^\/*/, "/"),
    d = y.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: l,
        future: cr({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, l]
    );
  typeof r == "string" && (r = $t(r));
  let {
      pathname: h = "/",
      search: m = "",
      hash: v = "",
      state: w = null,
      key: S = "default",
    } = r,
    k = y.useMemo(() => {
      let j = xn(h, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: m, hash: v, state: w, key: S },
            navigationType: o,
          };
    }, [u, h, m, v, w, S, o]);
  return k == null
    ? null
    : y.createElement(
        St.Provider,
        { value: d },
        y.createElement(qo.Provider, { children: n, value: k })
      );
}
function wh(e) {
  let { children: t, location: n } = e;
  return lh(pl(t), n);
}
new Promise(() => {});
function pl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === y.Fragment) {
        n.push.apply(n, pl(r.props.children, i));
        return;
      }
      r.type !== b && H(!1), !r.props.index || !r.props.children || H(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = pl(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ko() {
  return (
    (ko = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ko.apply(this, arguments)
  );
}
function Zc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Sh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Sh(e);
}
const Ch = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  jh = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Eh = "6";
try {
  window.__reactRouterVersion = Eh;
} catch {}
const Nh = y.createContext({ isTransitioning: !1 }),
  Th = "startTransition",
  Ea = Sd[Th];
function _h(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef();
  i.current == null && (i.current = Dp({ window: o, v5Compat: !0 }));
  let l = i.current,
    [a, u] = y.useState({ action: l.action, location: l.location }),
    { v7_startTransition: d } = r || {},
    h = y.useCallback(
      (m) => {
        d && Ea ? Ea(() => u(m)) : u(m);
      },
      [u, d]
    );
  return (
    y.useLayoutEffect(() => l.listen(h), [l, h]),
    y.createElement(xh, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
      future: r,
    })
  );
}
const Lh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ph = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  M = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: a,
        target: u,
        to: d,
        preventScrollReset: h,
        unstable_viewTransition: m,
      } = t,
      v = Zc(t, Ch),
      { basename: w } = y.useContext(St),
      S,
      k = !1;
    if (typeof d == "string" && Ph.test(d) && ((S = d), Lh))
      try {
        let p = new URL(window.location.href),
          x = d.startsWith("//") ? new URL(p.protocol + d) : new URL(d),
          E = xn(x.pathname, w);
        x.origin === p.origin && E != null
          ? (d = E + x.search + x.hash)
          : (k = !0);
      } catch {}
    let j = rh(d, { relative: o }),
      f = Ih(d, {
        replace: l,
        state: a,
        target: u,
        preventScrollReset: h,
        relative: o,
        unstable_viewTransition: m,
      });
    function c(p) {
      r && r(p), p.defaultPrevented || f(p);
    }
    return y.createElement(
      "a",
      ko({}, v, { href: S || j, onClick: k || i ? r : c, ref: n, target: u })
    );
  }),
  Na = y.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: l = !1,
        style: a,
        to: u,
        unstable_viewTransition: d,
        children: h,
      } = t,
      m = Zc(t, jh),
      v = Uo(u, { relative: m.relative }),
      w = gr(),
      S = y.useContext(Qc),
      { navigator: k, basename: j } = y.useContext(St),
      f = S != null && Dh(v) && d === !0,
      c = k.encodeLocation ? k.encodeLocation(v).pathname : v.pathname,
      p = w.pathname,
      x =
        S && S.navigation && S.navigation.location
          ? S.navigation.location.pathname
          : null;
    o ||
      ((p = p.toLowerCase()),
      (x = x ? x.toLowerCase() : null),
      (c = c.toLowerCase())),
      x && j && (x = xn(x, j) || x);
    const E = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
    let T = p === c || (!l && p.startsWith(c) && p.charAt(E) === "/"),
      g =
        x != null &&
        (x === c || (!l && x.startsWith(c) && x.charAt(c.length) === "/")),
      N = { isActive: T, isPending: g, isTransitioning: f },
      P = T ? r : void 0,
      R;
    typeof i == "function"
      ? (R = i(N))
      : (R = [
          i,
          T ? "active" : null,
          g ? "pending" : null,
          f ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let ue = typeof a == "function" ? a(N) : a;
    return y.createElement(
      M,
      ko({}, m, {
        "aria-current": P,
        className: R,
        ref: n,
        style: ue,
        to: u,
        unstable_viewTransition: d,
      }),
      typeof h == "function" ? h(N) : h
    );
  });
var hl;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(hl || (hl = {}));
var Ta;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ta || (Ta = {}));
function Rh(e) {
  let t = y.useContext(Bo);
  return t || H(!1), t;
}
function Ih(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = oh(),
    d = gr(),
    h = Uo(e, { relative: l });
  return y.useCallback(
    (m) => {
      if (kh(m, n)) {
        m.preventDefault();
        let v = r !== void 0 ? r : wo(d) === wo(h);
        u(e, {
          replace: v,
          state: o,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: a,
        });
      }
    },
    [d, u, h, r, o, n, e, i, l, a]
  );
}
function Dh(e, t) {
  t === void 0 && (t = {});
  let n = y.useContext(Nh);
  n == null && H(!1);
  let { basename: r } = Rh(hl.useViewTransitionState),
    o = Uo(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = xn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = xn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return fl(o.pathname, l) != null || fl(o.pathname, i) != null;
}
const zh = "./assets/logo-1EnBdt9n.png",
  Oh = () => {
    const [e, t] = y.useState(!1);
    return s.jsxs("div", {
      className: "navbar",
      children: [
        s.jsxs("div", {
          className: "mobilemen",
          children: [
            s.jsx("div", {
              className: "nav-logo",
              children: s.jsx(M, {
                to: "/",
                children: s.jsx("img", {
                  className: "mn-logo",
                  src: zh,
                  alt: "",
                }),
              }),
            }),
            s.jsxs("div", {
              className: "menu",
              onClick: () => {
                t(!e);
              },
              children: [
                s.jsx("span", {}),
                s.jsx("span", {}),
                s.jsx("span", {}),
              ],
            }),
          ],
        }),
        s.jsx("div", {
          className: "serch",
          children: s.jsx("input", {
            type: "search",
            name: "search",
            placeholder: "Search..",
          }),
        }),
        s.jsxs("ul", {
          className: e ? "open" : "",
          children: [
            s.jsx("li", {
              children: s.jsx(Na, {
                style: { textDecoration: "none", color: "black" },
                to: "/",
                children: "Home",
              }),
            }),
            s.jsx("li", {
              children: s.jsx(Na, {
                style: { textDecoration: "none", color: "black" },
                to: "/abouts",
                children: "About",
              }),
            }),
          ],
        }),
      ],
    });
  },
  bc = "./assets/tuldok-CN_Q1VBx.png",
  ed = "./assets/hexxx-Dr_7KJ6h.png",
  td = "./assets/potions-k4AqN0YE.png",
  nd = "./assets/pots-D9_ZT1TQ.png",
  Ah = () =>
    s.jsxs("div", {
      className: "mn",
      children: [
        s.jsxs("div", {
          className: "mn-title",
          children: [
            s.jsx("h1", { children: "Introduction to the Website" }),
            s.jsx("p", {
              children:
                "Welcome to the Chem 2 Flash, where you can easily learn Chemistry 2! Whether you're a student tackling chemistry or someone curious about chemicals, our platform is here to help. We have simple flashcards to break down tough topics, making it easier for you to understand and do well in Chemistry 2. Use our user-friendly study tools and start your journey to becoming a Chemistry 2 pro with our Chem 2 Flash",
            }),
          ],
        }),
        s.jsx(M, {
          style: { textDecoration: "none", color: "black" },
          to: "/selectsub",
          children: s.jsx("div", {
            className: "starttext",
            children: s.jsx("p", { children: "Start" }),
          }),
        }),
      ],
    }),
  Mh = "./assets/gian-CtgZRV7s.jpg",
  Fh = "./assets/cutee-BbYKFRLE.jpg",
  Bh = "./assets/hahaha-CNfwTKFW.jpg",
  qh = "./assets/john-BDlzG5Jl.jpg",
  Uh = "./assets/grupings-BymBKAH3.png",
  Wh = "./assets/cultibv-CJhV9zOV.png",
  Vh = "./assets/pogi-B9-KkGqB.png",
  $h = () =>
    s.jsxs("div", {
      className: "main",
      children: [
        s.jsx("div", {
          className: "main-content",
          children: s.jsx("div", {
            className: "description",
            children: s.jsxs("div", {
              className: "contents",
              children: [
                s.jsxs("div", {
                  className: "aboutus-section-text",
                  children: [
                    s.jsx("h1", { children: "About us" }),
                    s.jsxs("p", {
                      children: [
                        "We envision a world with equitable access to science ",
                        s.jsx("br", {}),
                        "learning and career resources.",
                      ],
                    }),
                  ],
                }),
                s.jsx("img", { src: Uh, alt: "ian" }),
              ],
            }),
          }),
        }),
        s.jsxs("div", {
          className: "mainbody",
          children: [
            s.jsx("h1", { children: "Our Team" }),
            s.jsx("p", {
              children:
                "Meet the minds behind Chem 2 Flash We apply our skills and talents to transforming science education.",
            }),
            s.jsxs("div", {
              className: "pictures",
              children: [
                s.jsx("img", { src: Vh, alt: "" }),
                s.jsx("img", { src: Fh, alt: "" }),
                s.jsx("img", { src: Bh, alt: "" }),
                s.jsx("img", { src: Mh, alt: "" }),
                s.jsx("img", { src: qh, alt: "" }),
              ],
            }),
            s.jsx("br", {}),
            s.jsx("br", {}),
            s.jsxs("div", {
              className: "mainbody-last",
              children: [
                s.jsx("img", { src: Wh, alt: "" }),
                s.jsxs("div", {
                  className: "paddme",
                  children: [
                    s.jsx("h1", {
                      children:
                        "Customize a learning path to suit individual needs.",
                    }),
                    s.jsx("p", {
                      children:
                        "Learning is not a one-size-fits-all experience. Chem 2 Flash provides the flexibility for individuals in school, university, or the workforce to tailor their learning to suit their unique needs. By offering a versatile range of content, such as assessments, and simulations.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  jt = [
    {
      question:
        "It is the kinetic energy of molecules and flows from higher to lower temperature.",
      option1: "A) Heat",
      option2: "B) Temperature.",
      option3: "C) Pressure.",
      option4: "D) Work.",
      ans: 1,
      answeredText: "A. Heat",
    },
    {
      question:
        "Performed by a system where the energy transferred by the system to its surroundings.",
      option1: "A) Heat",
      option2: "B) Temperature",
      option3: "C) Pressure",
      option4: "D) Work",
      ans: 4,
      answeredText: "D. Work",
    },
    {
      question:
        "It refers to the total energy of a system, including the kinetic energy of molecules and the potential energy stored in the chemical bonds between molecules.",
      option1: "A. Entropy",
      option2: "B. Internal Energy",
      option3: "C. Enthalpy",
      option4: "D. Free energy",
      ans: 2,
      answeredText: "B. Internal Energy",
    },
    {
      question:
        "It offers a definition of a system, which is the specific part of the universe that is being studied and observed.",
      option1: "A. Thermodynamics",
      option2: "B. Kinetics",
      option3: "C. Equilibrium",
      option4: "D. Reactivity",
      ans: 1,
      answeredText: "A. Thermodynamics",
    },
    {
      question:
        "Systems that involve the transfer of energy and matter are classified as ____ systems.",
      option1: "A. Open systems",
      option2: "B. Closed systems",
      option3: "C. Isolated systems",
      option4: "D. None of the above",
      ans: 1,
      answeredText: "A. Open systems",
    },
    {
      question:
        "It is a type of system that only allows for the exchange of energy with the surroundings and not matter.",
      option1: "A. Open systems",
      option2: "B. Closed systems",
      option3: "C. Isolated systems",
      option4: "D. None of the above",
      ans: 2,
      answeredText: "B. Closed systems",
    },
    {
      question:
        "In an__________, there is no exchange of matter or energy between the system and its surroundings.",
      option1: "A. Open systems",
      option2: "B. Closed systems",
      option3: "C. Isolated systems",
      option4: "D. None of the above",
      ans: 3,
      answeredText: "C. Isolated systems",
    },
    {
      question:
        "An ________ releases energy in the form of light or heat, transferring it to the surroundings.",
      option1: "A. Exothermic reactions",
      option2: "B. Endothermic reactions",
      option3: "C. Photosynthesis",
      option4: "D. Decomposition",
      ans: 1,
      answeredText: "A. Exothermic reactions",
    },
    {
      question:
        "A chemical reaction in which a substance rapidly mixes with oxygen to create heat.",
      option1: "A. Decomposition",
      option2: "B. Sublimation",
      option3: "C. Combustion",
      option4: "D. Condensation",
      ans: 3,
      answeredText: "C. Combustion",
    },
    {
      question:
        "It refers to a chemical reaction that requires heat energy from the surroundings to form products. In simpler terms, these reactions absorb heat instead of releasing it.",
      option1: "A. Exothermic reactions",
      option2: "B. Endothermic reactions",
      option3: "C. Photosynthesis",
      option4: "D. Decomposition",
      ans: 2,
      answeredText: "B. Endothermic reactions",
    },
    {
      question:
        "It states that energy cannot be created or destroyed, only transformed from one form to another.",
      option1: "A. First Law of thermodynamics",
      option2: "B. Second law of thermodynamics",
      option3: "C. Third law of thermodynamics",
      option4: "D. Zeroth law of Thermodynamics",
      ans: 1,
      answeredText: "A. First Law of thermodynamics",
    },
    {
      question:
        "It states that when temperature approaches absolute zero, a system's entropy approaches a constant value.",
      option1: "A. First Law of thermodynamics",
      option2: "B. Second law of thermodynamics",
      option3: "C. Third law of thermodynamics",
      option4: "D. Zeroth law of Thermodynamics",
      ans: 3,
      answeredText: "C. Third law of thermodynamics",
    },
    {
      question:
        "It refers to two systems that are in equilibrium with one another and are thermally balanced.",
      option1: "A. First Law of thermodynamics",
      option2: "B. Second law of thermodynamics",
      option3: "C. Third law of thermodynamics",
      option4: "D. Zeroth law of Thermodynamics",
      ans: 4,
      answeredText: "D. Zeroth law of Thermodynamics",
    },
    {
      question:
        "It refers to the amount of energy present in a thermodynamic system that can be measured through enthalpy.",
      option1: "A. Entropy",
      option2: "B. Enthalpy",
      option3: "C. Volume",
      option4: "D. Pressure",
      ans: 2,
      answeredText: "B. Enthalpy",
    },
    {
      question: "What statement best defines entropy?",
      option1: "A. The measure of disorder in a system.",
      option2: "B. The heat content of a system.",
      option3: "C. The measure of energy in a system.",
      option4: "D. The measure of the volume of a system.",
      ans: 1,
      answeredText: "A. The measure of disorder in a system.",
    },
    {
      question:
        "Which statement best describes the differences between entropy and enthalpy?",
      option1:
        "A) Entropy measures the overall amount of energy in a system, while enthalpy measures the randomness of activity.",
      option2:
        "B) Entropy measures the randomness of activity in a system, while enthalpy measures the overall amount of energy.",
      option3:
        "C) Entropy measures the randomness of activity in a system, while enthalpy measures the specific heat capacity.",
      option4:
        "D) Entropy measures the specific heat capacity, while enthalpy measures the randomness of activity in a system.",
      ans: 2,
      answeredText:
        "B. Entropy measures the randomness of activity in a system, while enthalpy measures the overall amount of energy.",
    },
    {
      question:
        "It refers to the amount of heat required to change the phase of a given mass of substance.",
      option1: "A. Heat",
      option2: "B. Density",
      option3: "C. Specific Heat",
      option4: "D. Latent Heat",
      ans: 4,
      answeredText: "D. Latent Heat",
    },
    {
      question:
        "It is a physical or chemical change that occurs naturally. These processes occur without the need for an outside force and continue until equilibrium is determined.",
      option1: "A. Controlled",
      option2: "B. Forced",
      option3: "C. Spontaneous",
      option4: "D. Induced",
      ans: 3,
      answeredText: "C. Spontaneous",
    },
    {
      question:
        "Why is melting considered spontaneous while freezing is non-spontaneous?",
      option1:
        "A. Melting requires an input of energy, whereas freezing releases energy.",
      option2:
        "B. Melting leads to an increase in entropy, while freezing leads to a decrease in entropy.",
      option3:
        "C. Melting occurs at higher temperatures, while freezing occurs at lower temperatures.",
      option4:
        "D. Melting occurs in the presence of an outside force, while freezing occurs naturally without any external intervention.",
      ans: 2,
      answeredText:
        "B. Melting leads to an increase in entropy, while freezing leads to a decrease in entropy.",
    },
    {
      question:
        "Intermolecular interactions are broken as ice melts (which requires energy), yet order is disrupted (leading in increased entropy). Because water can be ______ predictable than ice, it melts spontaneously at ambient temperatures.",
      option1: "A. Less",
      option2: "B. More",
      option3: "C. Equal",
      option4: "D. Unchanged",
      ans: 2,
      answeredText: "B. More",
    },
    {
      question:
        "The process of liquid water converting to vapor at temperatures higher than the boiling point, 100°C, is ________ because it increases entropy.",
      option1: "A. Entropy",
      option2: "B. Enthalpy",
      option3: "C. Spontaneous",
      option4: "D. Non-spontaneous",
      ans: 3,
      answeredText: "C. Spontaneous",
    },
  ],
  Gh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(jt[e]),
      [o, i] = y.useState(!1),
      [l, a] = y.useState(0),
      [u, d] = y.useState(!1),
      [h, m] = y.useState(40),
      [v, w] = y.useState(null),
      [S, k] = y.useState(!1),
      j = y.useRef(null),
      f = y.useRef(null),
      c = y.useRef(null),
      p = y.useRef(null),
      x = [j, f, c, p];
    y.useEffect(() => {
      m(40),
        e > 0 &&
          e < jt.length &&
          (r(jt[e]),
          i(!1),
          x.forEach((P) => {
            P.current.classList.remove("incorrect"),
              P.current.classList.remove("correct");
          }));
    }, [e]),
      y.useEffect(() => {
        const P = setInterval(() => {
          h > 0 && !o ? m((R) => R - 1) : h === 0 && !o && T();
        }, 1e3);
        return () => clearInterval(P);
      }, [h, o]);
    const E = (P, R) => {
        o ||
          (n.ans === R
            ? (P.target.classList.add("correct"),
              i(!0),
              a((ue) => ue + 1),
              w("Correct!"))
            : (P.target.classList.add("incorrect"),
              x[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")),
          k(!0));
      },
      T = () => {
        i(!0),
          x[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:"),
          k(!0);
      },
      g = () => {
        o && (k(!1), e === jt.length - 1 ? d(!0) : (t((P) => P + 1), w(null)));
      },
      N = () => {
        t(0), r(jt[0]), a(0), i(!1), d(!1), w(null), k(!1);
      };
    return s.jsx("div", {
      className: "main-c",
      children: u
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsxs("h2", {
                children: ["You Scored ", l, " out of ", jt.length],
              }),
              s.jsx("button", { onClick: N, children: "Reset" }),
            ],
          })
        : s.jsxs(s.Fragment, {
            children: [
              s.jsx("div", {
                children: s.jsxs("div", {
                  className: `flashcard ${S ? "flip" : ""}`,
                  children: [
                    s.jsxs("div", {
                      className: "flashcard-front ",
                      children: [
                        s.jsx("h1", { children: "Spontaneous Process" }),
                        s.jsx("hr", {}),
                        s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                        s.jsxs("div", {
                          className: "timer",
                          children: ["Time Left: ", h],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flashcard-back  ",
                      children: [
                        s.jsx("h1", { children: "Answer" }),
                        s.jsx("hr", {}),
                        s.jsx("h2", {
                          className: v === "Correct!" ? "correct" : "incorrect",
                          children: v,
                        }),
                        v === "Incorrect!" &&
                          s.jsxs("h3", {
                            className: "correct",
                            children: ["The correct answer is: ", n.option2],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsx("div", {
                className: "anscover",
                children: s.jsxs("ul", {
                  children: [
                    s.jsx("li", {
                      ref: j,
                      onClick: (P) => E(P, 1),
                      children: n.option1,
                    }),
                    s.jsx("li", {
                      ref: f,
                      onClick: (P) => E(P, 2),
                      children: n.option2,
                    }),
                    s.jsx("li", {
                      ref: c,
                      onClick: (P) => E(P, 3),
                      children: n.option3,
                    }),
                    s.jsx("li", {
                      ref: p,
                      onClick: (P) => E(P, 4),
                      children: n.option4,
                    }),
                  ],
                }),
              }),
              s.jsx("button", { onClick: g, disabled: !o, children: "Next" }),
              s.jsxs("div", {
                className: "index",
                children: [e + 1, " of ", jt.length, " questions"],
              }),
            ],
          }),
    });
  },
  Hh = () => s.jsx("div", { className: "main-seb", children: s.jsx(Gh, {}) }),
  Qh = () =>
    s.jsxs("div", {
      className: "main",
      children: [
        s.jsxs("div", {
          className: "menu",
          children: [
            s.jsx("h1", {
              children:
                "Lesson 1: The properties of liquids and solids to the nature of forces between particles",
            }),
            s.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            s.jsx(M, {
              style: { textDecoration: "none" },
              to: "/seb",
              children: s.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "menu",
          children: [
            s.jsx("h1", {
              children: "Lesson 2: Intermolecular and Intramolecular Forces ",
            }),
            s.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            s.jsx(M, {
              style: { textDecoration: "none" },
              to: "/less2",
              children: s.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "menu",
          children: [
            s.jsx("h1", { children: "Lesson 3: Viscosity" }),
            s.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            s.jsx(M, {
              style: { textDecoration: "none" },
              to: "/less3",
              children: s.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
      ],
    }),
  Et = [
    {
      question: "Why do chemical processes tend to favor one direction?",
      option1: "a) Due to the law of conservation of energy.",
      option2: "b) Because of the first law of thermodynamics.",
      option3: "c) According to the second law of thermodynamics.",
      option4: "d) Based on the law of mass action.",
      ans: 3,
      answeredText: "c) According to the second law of thermodynamics.",
    },
    {
      question: "What does the second law of thermodynamics state?",
      option1: "A. Energy cannot be created or destroyed.",
      option2: "B. The entropy of an isolated system will always increase.",
      option3:
        "C. The total energy of a system and its surroundings remain constant.",
      option4: "D. The entropy of an isolated system will always decrease.",
      ans: 2,
      answeredText:
        "B. The entropy of an isolated system will always increase.",
    },
    {
      question: "A reaction is spontaneous if:",
      option1: "A. The change in Gibbs free energy is positive.",
      option2: "B. The change in Gibbs free energy is negative.",
      option3: "C. The change in entropy is negative.",
      option4: "D. The change in entropy is positive.",
      ans: 2,
      answeredText: "B. The change in Gibbs free energy is negative.",
    },
    {
      question:
        "At absolute zero temperature (0 K), what is the entropy of a perfect crystalline substance according to the third law of thermodynamics?",
      option1: "a) Zero",
      option2: "b) Infinite",
      option3: "c) Undefined",
      option4: "d) Variable",
      ans: 3,
      answeredText: "c) Undefined",
    },
    {
      question:
        "What happens to the entropy of the universe in an equilibrium process?",
      option1: "a) It increases.",
      option2: "b) It decreases.",
      option3: "c) It remains unchanged.",
      option4: "d) It fluctuates randomly.",
      ans: 3,
      answeredText: "c) It remains unchanged.",
    },
    {
      question:
        "Determine S for the reaction: SO3(g) + H2O(l) → H2SO4(l) Given: S°(J/K·mol): SO3 = 256.2 H2O = 69.9 H2SO4 = 156.9",
      option1: "A. − 169.2J/K ",
      option2: "B. − 168.2J/K",
      option3: "C. − 169.23J/K",
      option4: "D. − 163.2J/K",
      ans: 1,
      answeredText: "A. − 169.2J/K",
    },
    {
      question:
        "Calculate S for the reaction SO2(s) + NO2(g) → SO3(g) + NO(g) Given: S°(J/K·mol): SO2 = 248.5 NO2 = 240.5 SO3 = 256.2 NO = 210.6",
      option1: "A. −12.2J/K",
      option2: "B. −26.2J/K",
      option3: "C. −22.2J/K",
      option4: "D. −22.6J/K",
      ans: 3,
      answeredText: "C. −22.2J/K",
    },
    {
      question:
        "Predict whether the entropy change positive or negative (O2(g) — 2O(g)).",
      option1: "A. Positive",
      option2: "B. Negative",
      option3: "C. Maybe",
      option4: "D. Positive - Negative",
      ans: 1,
      answeredText: "A. Positive",
    },
    {
      question:
        "The entropy change positive or negative 2 H2(g) + O2(g) — 2 H2O(l)",
      option1: "A. Positive",
      option2: "B. Negative ",
      option3: "C. Maybe",
      option4: "D. Positive - Negative",
      ans: 2,
      answeredText: "B. Negative",
    },
    {
      question:
        "According to the general rules for predicting entropy change of the system, what can be inferred if a reaction produces more gas molecules than it consumes?",
      option1: "a) The reaction is nonspontaneous.",
      option2: "b) The entropy change (Δ𝑆∘ ) is positive.",
      option3: "c) The entropy change (Δ𝑆∘ ) is negative.",
      option4: "d) The entropy change (Δ𝑆∘) is zero.",
      ans: 2,
      answeredText: "b) The entropy change (Δ𝑆∘ ) is positive.",
    },
  ],
  Kh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Et[e]),
      [o, i] = y.useState(!1),
      [l, a] = y.useState(0),
      [u, d] = y.useState(!1),
      [h, m] = y.useState(60),
      [v, w] = y.useState(null),
      S = y.useRef(null),
      k = y.useRef(null),
      j = y.useRef(null),
      f = y.useRef(null),
      c = [S, k, j, f];
    y.useEffect(() => {
      m(60),
        e > 0 &&
          e < Et.length &&
          (r(Et[e]),
          i(!1),
          c.forEach((g) => {
            g.current.classList.remove("incorrect"),
              g.current.classList.remove("correct");
          }));
    }, [e]),
      y.useEffect(() => {
        const g = setInterval(() => {
          h > 0 && !o ? m((N) => N - 1) : h === 0 && !o && x();
        }, 1e3);
        return () => clearInterval(g);
      }, [h, o]);
    const p = (g, N) => {
        o ||
          (n.ans === N
            ? (g.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (g.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      x = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      E = () => {
        o && (e === Et.length - 1 ? d(!0) : (t((g) => g + 1), w(null)));
      },
      T = () => {
        t(0), r(Et[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Entropy & Second Law of Thermodynamics" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Et.length],
                }),
                s.jsx("button", { onClick: T, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: S,
                        onClick: (g) => p(g, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: k,
                        onClick: (g) => p(g, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (g) => p(g, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: f,
                        onClick: (g) => p(g, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: v }),
                s.jsx("button", { onClick: E, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Et.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", h],
                }),
              ],
            }),
      ],
    });
  },
  Nt = [
    {
      question: "What does Gibbs free energy represent in a chemical reaction?",
      option1: "A. The overall energy change of the response.",
      option2: "B. The enthalpy change in the reaction.",
      option3:
        "C. The energy available to perform productive work in the reaction.",
      option4: "D. The entropy change of the reaction.",
      ans: 3,
      answeredText:
        "C. The energy available to perform productive work in the reaction.",
    },
    {
      question:
        "Which factor does not enter into the Gibbs free energy equation?",
      option1: "A. Enthalpy change (ΔH)",
      option2: "B. Temperature (T)",
      option3: "C. Entropy change (ΔS)",
      option4: "D. Pressure change (ΔP)",
      ans: 4,
      answeredText: "D. Pressure change (ΔP)",
    },
    {
      question:
        "Which factor determines whether a reaction occurs spontaneously or not?",
      option1: "A. Activation energy",
      option2: "B. Enthalpy change",
      option3: "C. Entropy change",
      option4: "D. Kinetic energy",
      ans: 3,
      answeredText: "C. Entropy change",
    },
    {
      question: "How can a negative ΔG affect the spontaneity of a reaction?",
      option1: "A. Reactions are always spontaneous.",
      option2: "B. Reaction is not spontaneous.",
      option3: "C. The reaction is spontaneous only at high temperatures.",
      option4: "D. The reaction occurs spontaneously only at low temperatures.",
      ans: 1,
      answeredText: "A. Reactions are always spontaneous.",
    },
    {
      question:
        "Which of the following statements about Gibbs free energy is CORRECT?",
      option1: "A. A positive ΔG suggests a spontaneous reaction.",
      option2: "B. A negative ΔG indicates non-spontaneous reactions.",
      option3: "C. A negative ΔG indicates spontaneous reactions.",
      option4: "D. ΔG is always zero in all reactions.",
      ans: 3,
      answeredText: "C. A negative ΔG indicates spontaneous reactions.",
    },
    {
      question:
        "At constant temperature and pressure, what conditions will cause a reaction to be spontaneous?",
      option1: "A. ΔG < 0",
      option2: "B. ΔG = 0",
      option3: "C. ΔG > 0",
      option4: "D. ΔG = ΔH - TΔS",
      ans: 1,
      answeredText: "A. ΔG < 0",
    },
    {
      question:
        "How does Gibbs free energy relate to temperature and reaction spontaneity?",
      option1:
        "A. Increasing temperature decreases the spontaneity of a reaction if ΔG is negative, but increases spontaneity if ΔG is positive.",
      option2:
        "B. Increasing temperature always increases the spontaneity of a reaction, regardless of the sign of ΔG.",
      option3:
        "C. Temperature does not affect the spontaneity of a reaction; only the concentration of reactants matters.",
      option4:
        "D. Increasing temperature decreases the spontaneity of a reaction if ΔG is positive, but increases spontaneity if ΔG is negative.",
      ans: 1,
      answeredText:
        "A. Increasing temperature decreases the spontaneity of a reaction if ΔG is negative, but increases spontaneity if ΔG is positive.",
    },
    {
      question:
        "How does increasing the temperature affect the Gibbs free energy change in an exothermic reaction?",
      option1: "A. Reduces the magnitude of ΔG.",
      option2: "B. Increases the magnitude of ΔG.",
      option3: "C. Does not change the magnitude of ΔG.",
      option4: "D. Inverts the sign of ΔG.",
      ans: 1,
      answeredText: "A. Reduces the magnitude of ΔG.",
    },
    {
      question:
        "Which of the following describes the link between Gibbs free energy change (ΔG) and equilibrium constant (K)?",
      option1: "A. ΔG = RTln(K)",
      option2: "B. ΔG = -RTln(K)",
      option3: "C. ΔG = -RT/K",
      option4: "D. ΔG = RT/K",
      ans: 1,
      answeredText: "A. ΔG = RTln(K)",
    },
    {
      question:
        "In a reversible process at equilibrium, what is the relationship between ΔG and the reaction quotient (Q)?",
      option1: "A. ΔG = RTln(Q)",
      option2: "B. ΔG = RTln(K)",
      option3: "C. ΔG = 0",
      option4: "D. ΔG = -RTln(Q)",
      ans: 3,
      answeredText: "C. ΔG = 0",
    },
    {
      question:
        "Which statement is correct for the standard Gibbs free energy change (ΔG°) of a reaction?",
      option1:
        "A. It is dependent on the initial concentrations of reactants and products.",
      option2: "B. It equals 0 for all reactions.",
      option3: "C. It depends on the reaction's temperature.",
      option4:
        "D. The Gibbs free energy change occurs when all reactants and products are in their normal states.",
      ans: 4,
      answeredText:
        "D. The Gibbs free energy change occurs when all reactants and products are in their normal states.",
    },
    {
      question:
        "A measurement used to determine how much work can be done in a thermodynamic system at its maximum while maintaining constant pressure and temperature.",
      option1: "A. Free energy",
      option2: "B. Gibbs Free energy",
      option3: "C. Kinetic Energy",
      option4: "D. Energy",
      ans: 1,
      answeredText: "A. Free energy",
    },
    {
      question: "At equilibrium, can Gibbs Free Energy be negative?",
      option1:
        "A. Yes, Gibbs Free Energy can be negative at equilibrium if the reaction is exothermic.",
      option2: "B. No, Gibbs Free Energy remains constant at equilibrium.",
      option3:
        "C. Yes, Gibbs Free Energy can be negative at equilibrium if the forward reaction is favored.",
      option4: "D. No, Gibbs Free Energy is always positive at equilibrium.",
      ans: 3,
      answeredText:
        "C. Yes, Gibbs Free Energy can be negative at equilibrium if the forward reaction is favored.",
    },
    {
      question:
        "How does the spontaneity of a chemical reaction relate to the Gibbs free energy (ΔG)?",
      option1:
        "A. ΔG is the change in Gibbs free energy of a system, indicating the energy available to do work and determining the spontaneity of a reaction.",
      option2:
        "B. ΔG measures the total energy change in a system, influencing the spontaneity but not the rate of the reaction.",
      option3:
        "C. ΔG quantifies the system's energy change, indicating whether a reaction absorbs or releases heat.",
      option4:
        "D. ΔG represents the change in system entropy, suggesting whether a reaction maintains constant temperature.",
      ans: 1,
      answeredText:
        "A. ΔG is the change in Gibbs free energy of a system, indicating the energy available to do work and determining the spontaneity of a reaction.",
    },
    {
      question:
        "Investigate the connection between a reaction's spontaneity and its Gibbs free energy (ΔG). If the computed value of ΔG for a certain reaction is -20 kJ/mol at 25°C, ascertain if the reaction is spontaneous or not.",
      option1: "A. Spontaneous",
      option2: "B. Non-spontaneous",
      option3: "C. Cannot be determined",
      option4: "D. Depends on the temperature",
      ans: 1,
      answeredText: "A. Spontaneous",
    },
  ],
  Yh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Nt[e]),
      [o, i] = y.useState(!1),
      [l, a] = y.useState(0),
      [u, d] = y.useState(!1),
      [h, m] = y.useState(40),
      [v, w] = y.useState(null),
      S = y.useRef(null),
      k = y.useRef(null),
      j = y.useRef(null),
      f = y.useRef(null),
      c = [S, k, j, f];
    y.useEffect(() => {
      m(40),
        e > 0 &&
          e < Nt.length &&
          (r(Nt[e]),
          i(!1),
          c.forEach((g) => {
            g.current.classList.remove("incorrect"),
              g.current.classList.remove("correct");
          }));
    }, [e]),
      y.useEffect(() => {
        const g = setInterval(() => {
          h > 0 && !o ? m((N) => N - 1) : h === 0 && !o && x();
        }, 1e3);
        return () => clearInterval(g);
      }, [h, o]);
    const p = (g, N) => {
        o ||
          (n.ans === N
            ? (g.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (g.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      x = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      E = () => {
        o && (e === Nt.length - 1 ? d(!0) : (t((g) => g + 1), w(null)));
      },
      T = () => {
        t(0), r(Nt[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Gibbs Energy" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Nt.length],
                }),
                s.jsx("button", { onClick: T, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: S,
                        onClick: (g) => p(g, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: k,
                        onClick: (g) => p(g, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (g) => p(g, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: f,
                        onClick: (g) => p(g, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: v }),
                s.jsx("button", { onClick: E, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Nt.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", h],
                }),
              ],
            }),
      ],
    });
  },
  Jh = () =>
    s.jsxs("div", {
      className: "main",
      children: [
        s.jsxs("div", {
          className: "menu",
          children: [
            s.jsx("h1", {
              children: "Lesson 1: CRYSTALLINE SOLIDS and AMORPHOUS SOLIDS",
            }),
            s.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            s.jsx(M, {
              style: { textDecoration: "none" },
              to: "/less21",
              children: s.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "menu",
          children: [
            s.jsx("h1", {
              children: "Lesson 2: Intermolecular and Intramolecular Forces ",
            }),
            s.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            s.jsx(M, {
              style: { textDecoration: "none" },
              to: "/less22",
              children: s.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "menu",
          children: [
            s.jsx("h1", { children: "Lesson 3: Viscosity" }),
            s.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            s.jsx(M, {
              style: { textDecoration: "none" },
              to: "/less23",
              children: s.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
      ],
    }),
  Tt = [
    {
      question: "What is chemical equilibrium?",
      option1: "A. A state in which reactions stop.",
      option2: "B. A state where reactants are completely consumed.",
      option3:
        "C. A dynamic state in which the forward and reverse reaction rates are equal.",
      option4:
        "D. A condition in which reactants and products are in uneven quantities.",
      ans: 3,
      answeredText:
        "C. A dynamic state in which the forward and reverse reaction rates are equal.",
    },
    {
      question:
        "What happens when the reactant and product concentrations reach equilibrium?",
      option1: "A. Reactants are always absorbed fully.",
      option2: "B. Products are always consumed completely.",
      option3: "C. The concentrations of reactants and products stay constant.",
      option4:
        "D. Concentrations of reactants and products continue to increase indefinitely.",
      ans: 3,
      answeredText:
        "C. The concentrations of reactants and products stay constant.",
    },
    {
      question:
        "How does temperature affect the position of equilibrium in an endothermic reaction?",
      option1: "A. Equilibrium moves to the left.",
      option2: "B. Equilibrium moves to the right.",
      option3: "C. Equilibrium remains unchanged.",
      option4: "D. Equilibrium becomes unstable.",
      ans: 2,
      answeredText: "B. Equilibrium moves to the right.",
    },
    {
      question: "What does the equilibrium constant (Kc) represent?",
      option1: "A. The rate of the forward reaction.",
      option2:
        "B. The ratio of product concentrations to reactant concentrations in equilibrium.",
      option3: "C. The initial concentration of reactants.",
      option4: "D. The total quantity of reactants and products in a system.",
      ans: 2,
      answeredText:
        "B. The ratio of product concentrations to reactant concentrations in equilibrium.",
    },
    {
      question:
        "What happens if you increase the concentration of a reactant in an equilibrium system?",
      option1: "A. The equilibrium adjusts to consume more reactants.",
      option2: "B. The equilibrium moves to consume more product.",
      option3: "C. The equilibrium shifts to oppose the change.",
      option4: "D. Equilibrium remains unchanged.",
      ans: 3,
      answeredText: "C. The equilibrium shifts to oppose the change.",
    },
    {
      question: "What is the role of dynamic equilibrium in chemical systems?",
      option1: "A. It indicates that the reaction has stopped.",
      option2:
        "B. It represents a balance between reactants and products, with no further change in concentrations.",
      option3: "C. It indicates that the reaction has been completed.",
      option4: "D. It suggests that the reaction happens instantly.",
      ans: 2,
      answeredText:
        "B. It represents a balance between reactants and products, with no further change in concentrations.",
    },
    {
      question:
        "What term is synonymous with a state of equilibrium in a reversible reaction?",
      option1: "A. Balance state",
      option2: "B. Resting state",
      option3: "C. Equivalence state",
      option4: "D. Chemical plateau",
      ans: 1,
      answeredText: "A. Balance state",
    },
    {
      question:
        "At what stage of a reversible reaction are the rates of the forward and backward reactions not equal?",
      option1: "A. Initial stage",
      option2: "B. Intermediate stage",
      option3: "C. Final stage",
      option4: "D. Equilibrium stage",
      ans: 4,
      answeredText: "D. Equilibrium stage",
    },
    {
      question:
        "In a state of chemical equilibrium, what happens to the concentrations of reactants and products?",
      option1: "A. They fluctuate wildly",
      option2: "B. They remain constant",
      option3: "C. They decrease continuously",
      option4: "D. They increase indefinitely",
      ans: 2,
      answeredText: "B. They remain constant",
    },
    {
      question:
        "Which law describes the ratio of the concentrations of products to reactants in a reversible reaction?",
      option1: "A. Law of mass conservation",
      option2: "B. Law of action reaction",
      option3: "C. Law of mass action",
      option4: "D. Law of constant composition",
      ans: 3,
      answeredText: "C. Law of mass action",
    },
    {
      question:
        "What is the equilibrium constant expression denoted by when using molar concentrations?",
      option1: "A. Kp",
      option2: "B. Kw",
      option3: "C. Kc",
      option4: "D. Kf",
      ans: 3,
      answeredText: "C. Kc",
    },
    {
      question:
        "How are equilibrium constants for homogeneous gaseous equilibria expressed?",
      option1: "A. In terms of molar concentrations",
      option2: "B. In terms of partial pressures",
      option3: "C. In terms of molality",
      option4: "D. In terms of mass fractions",
      ans: 2,
      answeredText: "B. In terms of partial pressures",
    },
    {
      question:
        "What factor primarily determines the position of equilibrium in a reversible reaction?",
      option1: "A. Temperature",
      option2: "B. Catalyst presence",
      option3: "C. Pressure",
      option4: "D. Concentration of reactants and products",
      ans: 4,
      answeredText: "D. Concentration of reactants and products",
    },
    {
      question: "At equilibrium, which of the following statements is true?",
      option1: "A. Reactants are consumed at a faster rate",
      option2: "B. Products are formed at a slower rate",
      option3: "C. Forward and backward reactions stop",
      option4: "D. Forward and backward reactions occur at equal rates",
      ans: 4,
      answeredText: "D. Forward and backward reactions occur at equal rates",
    },
    {
      question:
        "What happens to a system at chemical equilibrium when reaction conditions change?",
      option1: "A. The equilibrium shifts",
      option2: "B. The equilibrium constant changes",
      option3: "C. The reaction stops completely",
      option4: "D. The equilibrium becomes irreversible",
      ans: 1,
      answeredText: "A. The equilibrium shifts",
    },
  ],
  Xh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Tt[e]),
      [o, i] = y.useState(!1),
      [l, a] = y.useState(0),
      [u, d] = y.useState(!1),
      [h, m] = y.useState(40),
      [v, w] = y.useState(null),
      S = y.useRef(null),
      k = y.useRef(null),
      j = y.useRef(null),
      f = y.useRef(null),
      c = [S, k, j, f];
    y.useEffect(() => {
      m(40),
        e > 0 &&
          e < Tt.length &&
          (r(Tt[e]),
          i(!1),
          c.forEach((g) => {
            g.current.classList.remove("incorrect"),
              g.current.classList.remove("correct");
          }));
    }, [e]),
      y.useEffect(() => {
        const g = setInterval(() => {
          h > 0 && !o ? m((N) => N - 1) : h === 0 && !o && x();
        }, 1e3);
        return () => clearInterval(g);
      }, [h, o]);
    const p = (g, N) => {
        o ||
          (n.ans === N
            ? (g.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (g.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      x = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      E = () => {
        o && (e === Tt.length - 1 ? d(!0) : (t((g) => g + 1), w(null)));
      },
      T = () => {
        t(0), r(Tt[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "The Concept of Equilibrium" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Tt.length],
                }),
                s.jsx("button", { onClick: T, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: S,
                        onClick: (g) => p(g, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: k,
                        onClick: (g) => p(g, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (g) => p(g, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: f,
                        onClick: (g) => p(g, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: v }),
                s.jsx("button", { onClick: E, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Tt.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", h],
                }),
              ],
            }),
      ],
    });
  },
  _t = [
    {
      question:
        "What is the main characteristic of evaporation and melting processes in phase changes?",
      option1: "a. Release of heat",
      option2: "b. Solid to gas transformation",
      option3: "c. Absorption of heat",
      option4: "d. Liquid to gas transformation",
      ans: 3,
    },
    {
      question:
        "Which process involves changing the phase of a substance from solid to gas without passing the liquid phase?",
      option1: "a. Evaporation",
      option2: "b. Sublimation",
      option3: "c. Melting",
      option4: "d. Deposition",
      ans: 2,
    },
    {
      question: "What is the critical point on a phase diagram?",
      option1: "a. Point B",
      option2: "b. Point C",
      option3: "c. Point D",
      option4: "d. Point X",
      ans: 2,
    },
    {
      question: "At the Triple Point, what coexists?",
      option1: "a. Solid and gas",
      option2: "b. Liquid and gas",
      option3: "c. Solid, liquid, and gas",
      option4: "d. Solid and liquid",
      ans: 3,
    },
    {
      question: "What is the significance of Point C on the phase diagram?",
      option1: "a. Melting point",
      option2: "b. Boiling point",
      option3: "c. Critical point",
      option4: "d. Triple point",
      ans: 3,
    },
    {
      question:
        "Where is the gas phase most stable according to the phase diagram?",
      option1: "a. Low pressure and low temperature",
      option2: "b. High pressure and low temperature",
      option3: "c. Low pressure and high temperature",
      option4: "d. High pressure and high temperature",
      ans: 1,
    },
    {
      question:
        "What phase is stable upon extending to low temperature and high pressures?",
      option1: "a. Solid",
      option2: "b. Liquid",
      option3: "c. Gas",
      option4: "d. Plasma",
      ans: 1,
    },
    {
      question: "What is the normal sublimation point of CO2?",
      option1: "a. Letter X",
      option2: "b. Letter Y",
      option3: "c. Letter C",
      option4: "d. Letter D",
      ans: 2,
    },
    {
      question:
        "Which curve in the heating and cooling graphs indicates a decrease in temperature?",
      option1: "a. Graph (a)",
      option2: "b. Graph (b)",
      option3: "c. Both graphs",
      option4: "d. Neither graph",
      ans: 2,
    },
    {
      question:
        "During which segment does the substance's temperature remain constant despite continued heat input?",
      option1: "a. Segment B",
      option2: "b. Segment C",
      option3: "c. Segment D",
      option4: "d. Segment E",
      ans: 1,
    },
    {
      question:
        "What process involves changing from liquid to gas with heat absorption in the heating curve?",
      option1: "a. Melting",
      option2: "b. Boiling",
      option3: "c. Condensation",
      option4: "d. Sublimation",
      ans: 2,
    },
    {
      question:
        "In the cooling curve, what is represented by a decrease in temperature?",
      option1: "a. Freezing",
      option2: "b. Condensation",
      option3: "c. Evaporation",
      option4: "d. Melting",
      ans: 1,
    },
    {
      question:
        "What phase change process occurs during Segment D of a heating curve?",
      option1: "a. Boiling",
      option2: "b. Evaporation",
      option3: "c. Melting",
      option4: "d. Condensation",
      ans: 2,
    },
    {
      question:
        "Which point on the phase diagram represents the normal melting or freezing point of water?",
      option1: "a. Letter A",
      option2: "b. Letter B",
      option3: "c. Letter C",
      option4: "d. Letter D",
      ans: 2,
    },
    {
      question: "What is the purpose of a plateau in the heating curve?",
      option1: "a. To indicate a phase transition",
      option2: "b. To show a constant temperature",
      option3: "c. To represent a change in pressure",
      option4: "d. To measure heat release",
      ans: 1,
    },
  ],
  Zh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(_t[e]),
      [o, i] = y.useState(!1),
      [l, a] = y.useState(0),
      [u, d] = y.useState(!1),
      [h, m] = y.useState(40),
      [v, w] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      j = y.useRef(null),
      f = y.useRef(null),
      c = [S, k, j, f];
    y.useEffect(() => {
      if (!_t || _t.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(_t[e]);
    }, [e]),
      y.useEffect(() => {
        const g = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : p();
        }, 1e3);
        return () => clearTimeout(g);
      }, [h, o]);
    const p = () => {
        o || (i(!0), w("Time's up! You ran out of time."));
      },
      x = (g, N) => {
        o ||
          (n.ans === N
            ? ((g.target.textContent = "Correct!"),
              g.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : ((g.target.textContent = "Wrong"),
              g.target.classList.add("incorrect"),
              i(!0),
              c[n.ans - 1].current.classList.add("correct"),
              w("Incorrect.")));
      },
      E = () => {
        if (o) {
          if (e === _t.length - 1) {
            d(!0);
            return;
          }
          t((g) => g + 1),
            i(!1),
            m(40),
            c.forEach((g) => {
              g.current.classList.remove("incorrect"),
                g.current.classList.remove("correct");
            }),
            w("");
        }
      },
      T = () => {
        t(0), a(0), i(!1), d(!1), m(40), w("");
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Lesson 2" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", _t.length],
                }),
                s.jsx("button", { onClick: T, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: [e + 1, ". ", n == null ? void 0 : n.question],
                }),
                s.jsxs("ul", {
                  children: [
                    s.jsx("li", {
                      ref: S,
                      onClick: (g) => {
                        x(g, 1);
                      },
                      children: n == null ? void 0 : n.option1,
                    }),
                    s.jsx("li", {
                      ref: k,
                      onClick: (g) => {
                        x(g, 2);
                      },
                      children: n == null ? void 0 : n.option2,
                    }),
                    s.jsx("li", {
                      ref: j,
                      onClick: (g) => {
                        x(g, 3);
                      },
                      children: n == null ? void 0 : n.option3,
                    }),
                    s.jsx("li", {
                      ref: f,
                      onClick: (g) => {
                        x(g, 4);
                      },
                      children: n == null ? void 0 : n.option4,
                    }),
                  ],
                }),
                !o &&
                  s.jsxs("div", {
                    className: "timer",
                    children: ["Time remaining: ", h, " seconds"],
                  }),
                s.jsx("div", { className: "answer-status", children: v }),
                s.jsx("button", { onClick: E, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", _t.length, " questions"],
                }),
              ],
            }),
      ],
    });
  },
  Lt = [
    {
      question: "What does percent concentration by mass measure?",
      option1: "a) Volume of solute per unit volume of solvent",
      option2: "b) Mass of solute per unit volume of solution",
      option3: "c) Mass of solute per 100 units of solution mass",
      option4: "d) Moles of solute per unit volume of solution",
      ans: 3,
    },
    {
      question:
        "Which formula correctly calculates percent concentration by mass?",
      option1: "a) Mass of solute/Volume of solution×100",
      option2: "b) Mass of solute/Mass of solvent×100",
      option3: "c) Volume of solute/Volume of solution×100",
      option4: "d) Volume of solute/Volume of solvent×100",
      ans: 2,
    },
    {
      question:
        "What is the percent concentration by mass if 20 grams of salt are dissolved in 80 grams of water?",
      option1: "a) 25%",
      option2: "b) 20%",
      option3: "c) 80%",
      option4: "d) 100%",
      ans: 2,
    },
    {
      question:
        "Percent concentration by volume is typically used for which type of solutions?",
      option1: "a) Solid-liquid solutions",
      option2: "b) Gas-liquid solutions",
      option3: "c) Solid-solid solutions",
      option4: "d) Gas-solid solutions",
      ans: 2,
    },
    {
      question:
        "Which of the following expressions correctly represents percent concentration by volume?",
      option1: "a) Volume of solute/Volume of solvent×100",
      option2: "b) Volume of solute/Volume of solution×100",
      option3: "c) Volume of solute/Mass of solvent×100",
      option4: "d) Mass of solute/Volume of solvent×100",
      ans: 1,
    },
    {
      question:
        "If 50 mL of ethanol are mixed with 150 mL of water to form a solution, what is the percent concentration by volume of ethanol?",
      option1: "a) 25%",
      option2: "b) 75%",
      option3: "c) 33.3%",
      option4: "d) 50%",
      ans: 4,
    },
    {
      question:
        "What is the correct formula to calculate percent concentration by mass-volume?",
      option1: "a) Mass of solute/Volume of solution×100",
      option2: "b) Mass of solute/Mass of solvent×100",
      option3: "c) Volume of solute/Volume of solution×100",
      option4: "d) Volume of solute/Mass of solvent×100",
      ans: 4,
    },
    {
      question: "What does percent concentration by mass-volume indicate?",
      option1: "a) The mass of solute per 100 units of solvent volume",
      option2: "b) The mass of solute per 100 units of solution volume",
      option3: "c) The volume of solute per 100 units of solvent volume",
      option4: "d) The volume of solute per 100 units of solution volume",
      ans: 2,
    },
    {
      question:
        "If 50 grams of NaCl are dissolved in 200 mL of water, what is the percent concentration by mass-volume of NaCl in the solution?",
      option1: "a) 25%",
      option2: "b) 10%",
      option3: "c) 20%",
      option4: "d) 5%",
      ans: 3,
    },
    {
      question:
        "Percent concentration by mass-volume is commonly used in which type of solutions?",
      option1: "a) Solutions involving gasses",
      option2: "b) Solutions involving solids",
      option3: "c) Solutions involving liquids",
      option4: "d) Solutions involving immiscible liquid",
      ans: 4,
    },
    {
      question: "How is the percent concentration by mass-volume calculated?",
      option1: "a) Mass of solute / Volume of solvent * 100",
      option2: "b) Mass of solute / Volume of solution * 100",
      option3: "c) Volume of solute / Volume of solvent * 100",
      option4: "d) Volume of solute / Mass of solvent * 100",
      ans: 4,
    },
    {
      question:
        "A solution contains 30 grams of sugar dissolved in 150 milliliters of water. What is the percent concentration by mass?",
      option1: "a) 20%",
      option2: "b) 25%",
      option3: "c) 15%",
      option4: "d) 10%",
      ans: 2,
    },
    {
      question:
        "A solution contains 40 milliliters of ethanol mixed with 160 milliliters of water. What is the percent concentration by volume of ethanol?",
      option1: "a) 25%",
      option2: "b) 20%",
      option3: "c) 30%",
      option4: "d) 40%",
      ans: 1,
    },
    {
      question:
        "A solution contains 25 grams of solute dissolved in 200 milliliters of solution. What is the percent concentration by mass-volume?",
      option1: "a) 12.5%",
      option2: "b) 10%",
      option3: "c) 20%",
      option4: "d) 15%",
      ans: 1,
    },
    {
      question:
        "A solution contains 50 milliliters of solute mixed with 100 grams of water. What is the percent concentration by mass-volume?",
      option1: "a) 33.3%",
      option2: "b) 50%",
      option3: "c) 25%",
      option4: "d) 20%",
      ans: 1,
    },
    {
      question:
        "What does percent by volume (% vol/vol) measure in a solution?",
      option1: "a) Volume of solute per unit volume of solvent",
      option2: "b) Volume of solute per 100 units of solution volume",
      option3: "c) Volume of solute per unit volume of solution",
      option4: "d) Moles of solute per unit volume of solution",
      ans: 2,
    },
    {
      question: "Which formula correctly calculates percent by volume?",
      option1: "a) Volume of solute/Volume of solvent×100",
      option2: "b) Volume of solute/Volume of solution×100",
      option3: "c) Volume of solute/Mass of solvent×100",
      option4: "d) Mass of solute/Volume of solvent×100",
      ans: 1,
    },
    {
      question:
        "What is the percent by volume if 30 mL of ethanol are mixed with 70 mL of water?",
      option1: "a) 30%",
      option2: "b) 70%",
      option3: "c) 100%",
      option4: "d) 50%",
      ans: 4,
    },
    {
      question:
        "Percent by volume is typically used for which type of solutions?",
      option1: "a) Solid-liquid solutions",
      option2: "b) Gas-liquid solutions",
      option3: "c) Solid-solid solutions",
      option4: "d) Gas-solid solutions",
      ans: 2,
    },
    {
      question:
        "If 25 mL of acetic acid are mixed with 75 mL of water, what is the volume/volume percent of acetic acid in the solution?",
      option1: "a) 25%",
      option2: "b) 30%",
      option3: "c) 35%",
      option4: "d) 40%",
      ans: 4,
    },
    {
      question:
        "Volume/volume percent is commonly used in which type of solutions?",
      option1: "a) Solutions involving gasses",
      option2: "b) Solutions involving solids",
      option3: "c) Solutions involving liquids",
      option4: "d) Solutions involving immiscible liquids",
      ans: 3,
    },
    {
      question: "How is the volume/volume percent (% vol/vol) calculated?",
      option1: "a) Volume of solute / Volume of solvent * 100",
      option2: "b) Volume of solute / Volume of solution * 100",
      option3: "c) Volume of solute / Mass of solvent * 100",
      option4: "d) Mass of solute / Volume of solvent * 100",
      ans: 2,
    },
    {
      question:
        "A solution contains 30 mL of ethanol mixed with 170 mL of water. What is the volume/volume percent of ethanol?",
      option1: "a) 15%",
      option2: "b) 20%",
      option3: "c) 25%",
      option4: "d) 30%",
      ans: 2,
    },
    {
      question:
        "A solution contains 40 mL of solute dissolved in 200 mL of solution. What is the volume/volume percent?",
      option1: "a) 20%",
      option2: "b) 30%",
      option3: "c) 40%",
      option4: "d) 50%",
      ans: 3,
    },
    {
      question:
        "A solution contains 50 mL of solute mixed with 100 mL of solvent. What is the volume/volume percent?",
      option1: "a) 33.3%",
      option2: "b) 50%",
      option3: "c) 25%",
      option4: "d) 20%",
      ans: 2,
    },
    {
      question:
        "A solution contains 60 mL of solute dissolved in 140 mL of solution. What is the volume/volume percent?",
      option1: "a) 30%",
      option2: "b) 40%",
      option3: "c) 50%",
      option4: "d) 42.9%",
      ans: 1,
    },
  ],
  bh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Lt[e]),
      [o, i] = y.useState(!1),
      [l, a] = y.useState(0),
      [u, d] = y.useState(!1),
      [h, m] = y.useState(40),
      [v, w] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      j = y.useRef(null),
      f = y.useRef(null),
      c = [S, k, j, f];
    y.useEffect(() => {
      if (!Lt || Lt.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(Lt[e]);
    }, [e]),
      y.useEffect(() => {
        const g = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : p();
        }, 1e3);
        return () => clearTimeout(g);
      }, [h, o]);
    const p = () => {
        o || (i(!0), w("Time's up! You ran out of time."));
      },
      x = (g, N) => {
        o ||
          (n.ans === N
            ? ((g.target.textContent = "Correct!"),
              g.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : ((g.target.textContent = "Wrong"),
              g.target.classList.add("incorrect"),
              i(!0),
              c[n.ans - 1].current.classList.add("correct"),
              w("Incorrect.")));
      },
      E = () => {
        if (o) {
          if (e === Lt.length - 1) {
            d(!0);
            return;
          }
          t((g) => g + 1),
            i(!1),
            m(40),
            c.forEach((g) => {
              g.current.classList.remove("incorrect"),
                g.current.classList.remove("correct");
            }),
            w("");
        }
      },
      T = () => {
        t(0), a(0), i(!1), d(!1), m(40), w("");
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Lesson 2" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Lt.length],
                }),
                s.jsx("button", { onClick: T, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: [e + 1, ". ", n == null ? void 0 : n.question],
                }),
                s.jsxs("ul", {
                  children: [
                    s.jsx("li", {
                      ref: S,
                      onClick: (g) => {
                        x(g, 1);
                      },
                      children: n == null ? void 0 : n.option1,
                    }),
                    s.jsx("li", {
                      ref: k,
                      onClick: (g) => {
                        x(g, 2);
                      },
                      children: n == null ? void 0 : n.option2,
                    }),
                    s.jsx("li", {
                      ref: j,
                      onClick: (g) => {
                        x(g, 3);
                      },
                      children: n == null ? void 0 : n.option3,
                    }),
                    s.jsx("li", {
                      ref: f,
                      onClick: (g) => {
                        x(g, 4);
                      },
                      children: n == null ? void 0 : n.option4,
                    }),
                  ],
                }),
                !o &&
                  s.jsxs("div", {
                    className: "timer",
                    children: ["Time remaining: ", h, " seconds"],
                  }),
                s.jsx("div", { className: "answer-status", children: v }),
                s.jsx("button", { onClick: E, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Lt.length, " questions"],
                }),
              ],
            }),
      ],
    });
  },
  em = "./assets/options1-Cj94_gRT.png",
  tm = "./assets/flas-DxvI5DBe.png",
  nm = () =>
    s.jsxs("div", {
      className: "name",
      children: [
        s.jsx("div", {
          className: "select",
          children: s.jsx("p", { children: "Select" }),
        }),
        s.jsxs("div", {
          className: "selectbox",
          children: [
            s.jsx(M, {
              style: { textDecoration: "none", color: "black" },
              to: "/reviews",
              children: s.jsxs("div", {
                className: "options",
                children: [
                  s.jsx("img", { src: em, alt: "" }),
                  s.jsx("p", { children: "Review/Recap" }),
                ],
              }),
            }),
            s.jsx(M, {
              style: { textDecoration: "none", color: "black" },
              to: "/cards",
              children: s.jsxs("div", {
                className: "options",
                children: [
                  " ",
                  s.jsx("img", { src: tm, style: { padding: 10, width: 390 } }),
                  s.jsx("p", { children: "Flashcard Quiz" }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  rm = () =>
    s.jsx("div", {
      className: "main",
      children: s.jsxs("div", {
        className: "holder",
        children: [
          s.jsx("div", {
            className: "select",
            children: s.jsx("p", { children: "Select" }),
          }),
          s.jsxs("div", {
            className: "hex",
            children: [
              s.jsx(M, {
                style: { textDecoration: "none", color: "black" },
                to: "/info1",
                children: s.jsxs("div", {
                  className: "ultraman",
                  children: [
                    s.jsx("div", { className: "hexagon1" }),
                    s.jsx("div", {
                      className: "centerhex",
                      children: s.jsxs("div", {
                        className: "centerhex-content",
                        children: [
                          s.jsx("img", { src: bc, alt: "", srcset: "" }),
                          s.jsx("p", {
                            style: { textAlign: "center" },
                            children: "Spontaneous Process",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", { className: "hexagon2" }),
                  ],
                }),
              }),
              s.jsx(M, {
                style: { textDecoration: "none", color: "black" },
                to: "/info2",
                children: s.jsxs("div", {
                  className: "ultraman",
                  children: [
                    s.jsx("div", { className: "hexagon1" }),
                    s.jsx("div", {
                      className: "centerhex",
                      children: s.jsxs("div", {
                        className: "centerhex-content",
                        children: [
                          s.jsx("img", { src: ed, alt: "", srcset: "" }),
                          s.jsxs("p", {
                            style: { textAlign: "center", fontSize: 6.5 },
                            children: [
                              " ",
                              "Entropy & Second Law of Thermodynamics",
                            ],
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", { className: "hexagon2" }),
                  ],
                }),
              }),
              s.jsx(M, {
                style: { textDecoration: "none", color: "black" },
                to: "/info3",
                children: s.jsxs("div", {
                  className: "ultraman",
                  children: [
                    s.jsx("div", { className: "hexagon1" }),
                    s.jsx("div", {
                      className: "centerhex",
                      children: s.jsxs("div", {
                        className: "centerhex-content",
                        children: [
                          s.jsx("img", {
                            src: td,
                            id: "potion",
                            alt: "",
                            srcset: "",
                          }),
                          s.jsx("p", {
                            style: { textAlign: "center" },
                            children: "Gibbs Energy",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", { className: "hexagon2" }),
                  ],
                }),
              }),
              s.jsx(M, {
                style: { textDecoration: "none", color: "black" },
                to: "/info4",
                children: s.jsxs("div", {
                  className: "ultraman",
                  children: [
                    s.jsx("div", { className: "hexagon1" }),
                    s.jsx("div", {
                      className: "centerhex",
                      children: s.jsxs("div", {
                        className: "centerhex-content",
                        children: [
                          s.jsx("img", { src: nd, alt: "", srcset: "" }),
                          s.jsx("p", {
                            style: { textAlign: "center", fontSize: 7.5 },
                            children: "The Concept of Equilibrium",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", { className: "hexagon2" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  om = () =>
    s.jsxs("div", {
      className: "main",
      children: [
        s.jsx("h1", { className: "haha", children: "Lesson 1" }),
        s.jsx("h1", { className: "title", children: "Spontaneous Processes" }),
        s.jsxs("div", {
          className: "parg",
          children: [
            s.jsxs("p", {
              children: [
                "Thermodynamics is a branch of physical science that deals with heat and temperature, and their relation to energy and work. It defines and describes a system, which is a specific part of the universe under study. One of the key concepts is the flow of kinetic energy of molecules, known as heat, from higher to lower temperatures. Energy transferred by the system to its surroundings can perform work, while the total energy of a system, including both kinetic and potential energy stored in chemical bonds, is termed internal energy. Systems that involve the transfer of energy and matter are classified as open, closed, or isolated, depending on their interaction with the surroundings. An open system allows both energy and matter exchange, a closed system only allows energy exchange, and an isolated system allows neither.",
                s.jsx("br", {}),
                s.jsx("br", {}),
                "Chemical reactions can be exothermic, releasing energy to the surroundings, or endothermic, absorbing heat. Combustion, for instance, is a reaction that rapidly combines a substance with oxygen to create heat. The First Law of Thermodynamics states that energy cannot be created or destroyed, only transformed. The Second Law introduces entropy, a measure of disorder, which increases in spontaneous processes. The Third Law states that as temperature approaches absolute zero, the entropy of a system approaches a constant value. The Zeroth Law establishes thermal equilibrium between systems. Enthalpy measures the heat content of a system, while entropy measures the randomness or disorder. Spontaneous processes, such as melting, occur naturally without external intervention, leading to an increase in entropy and a more predictable state like liquid water compared to ice.",
              ],
            }),
            s.jsxs("div", {
              className: "butt-hold",
              children: [
                s.jsx(M, {
                  style: { textDecoration: "none" },
                  to: "/reviews",
                  children: s.jsx("div", {
                    className: "btn",
                    children: "Back",
                  }),
                }),
                s.jsx(M, {
                  style: { textDecoration: "none" },
                  to: "/info2",
                  children: s.jsx("div", {
                    className: "btn",
                    children: "Next",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  im = () =>
    s.jsxs("div", {
      className: "main",
      children: [
        s.jsx("h1", { className: "haha", children: "Lesson 2" }),
        s.jsx("h1", {
          className: "title",
          children: "Entropy & Second Law of Thermodynamics",
        }),
        s.jsxs("div", {
          className: "parg",
          children: [
            s.jsxs("p", {
              children: [
                "Entropy (S) is a measure of the disorder or randomness of a system. It helps predict whether a process is spontaneous. Key points about entropy include: ",
                s.jsx("br", {}),
                s.jsx("br", {}),
                s.jsxs("ul", {
                  children: [
                    s.jsx("li", {
                      children:
                        "Positive Entropy Change: Processes that increase the disorder of a system, such as phase changes from solid to liquid to gas, lead to a positive entropy change.",
                    }),
                    s.jsxs("li", {
                      children: [
                        "Predicting Entropy Change:",
                        " ",
                        s.jsxs("ul", {
                          children: [
                            s.jsx("li", {
                              children:
                                "If a reaction produces more gas molecules than it consumes, ΔS is positive.",
                            }),
                            s.jsxs("li", {
                              children: [
                                " ",
                                "If the total number of gas molecules decreases, ΔS is negative.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                "The second law of thermodynamics states that the entropy of the universe increases in a spontaneous process and remains unchanged in an equilibrium process. This law helps explain why certain processes are naturally favored. For example, melting ice increases entropy because the solid state is more ordered than the liquid state.",
              ],
            }),
            s.jsxs("div", {
              className: "butt-hold",
              children: [
                s.jsx(M, {
                  style: { textDecoration: "none" },
                  to: "/info1",
                  children: s.jsx("div", {
                    className: "btn",
                    children: "Back",
                  }),
                }),
                s.jsx(M, {
                  style: { textDecoration: "none" },
                  to: "/info3",
                  children: s.jsx("div", {
                    className: "btn",
                    children: "Next",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  lm = () =>
    s.jsxs("div", {
      className: "main",
      children: [
        s.jsx("h1", { className: "haha", children: "Lesson 3" }),
        s.jsx("h1", { className: "title", children: "GIBBS ENERGY" }),
        s.jsxs("div", {
          className: "parg",
          children: [
            s.jsxs("p", {
              children: [
                "Gibbs free energy (G) is used to predict the spontaneity of a reaction by combining enthalpy and entropy. The change in Gibbs free energy (ΔG) is given by:",
                s.jsx("ul", {
                  children: s.jsx("li", { children: "ΔG=ΔH−TΔS" }),
                }),
                "Where ΔH is the change in enthalpy, T is the temperature in Kelvin, and ΔS is the change in entropy. Key points about Gibbs free energy include:",
                s.jsxs("ul", {
                  children: [
                    s.jsx("li", {
                      children:
                        "Spontaneity: A negative ΔG indicates a spontaneous reaction, while a positive ΔG indicates a non-spontaneous reaction.",
                    }),
                    s.jsx("li", {
                      children:
                        "Standard Conditions: ΔG values are typically calculated under standard conditions (25°C or 298 K).",
                    }),
                    s.jsxs("li", {
                      children: [
                        "Examples:",
                        " ",
                        s.jsxs("ul", {
                          children: [
                            s.jsxs("li", {
                              children: [
                                " ",
                                "An exothermic reaction with a large positive entropy change (e.g., combustion) will have a negative ΔG and be spontaneous.",
                                " ",
                              ],
                            }),
                            s.jsx("li", {
                              children:
                                "An endothermic reaction with a small positive entropy change may still be spontaneous if TΔS is large enough to make ΔG negative.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "butt-hold",
              children: [
                s.jsx(M, {
                  style: { textDecoration: "none" },
                  to: "/info2",
                  children: s.jsx("div", {
                    className: "btn",
                    children: "Back",
                  }),
                }),
                s.jsx(M, {
                  style: { textDecoration: "none" },
                  to: "/info4",
                  children: s.jsx("div", {
                    className: "btn",
                    children: "Next",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  sm = () =>
    s.jsxs("div", {
      className: "main",
      children: [
        s.jsx("h1", { className: "haha", children: "Lesson 4" }),
        s.jsx("h1", {
          className: "title",
          children: "THE CONCEPT OF EQUILIBRIUM",
        }),
        s.jsxs("div", {
          className: "parg",
          children: [
            s.jsxs("p", {
              children: [
                "Chemical equilibrium is the state where the forward and reverse reactions occur at the same rate, resulting in constant concentrations of reactants and products. In a reversible reaction, the reaction can proceed in both directions, forming an equilibrium state. Key points about equilibrium include:",
                " ",
                s.jsxs("ul", {
                  children: [
                    s.jsxs("li", {
                      children: [
                        " ",
                        "Dynamic Nature: At equilibrium, the concentrations of reactants and products remain constant, but the reactions continue to occur.",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        " ",
                        "Equilibrium Constant (K",
                        s.jsx("sub", { children: "eq" }),
                        "): For a reaction aA + bB ↔ cC + dD, the equilibrium constant expression is: K",
                        s.jsx("sub", { children: "eq" }),
                        " = [C]",
                        s.jsx("sup", { children: "c" }),
                        "[D]",
                        s.jsx("sup", { children: "d" }),
                        "/[A]",
                        s.jsx("sup", { children: "a" }),
                        "[B]",
                        s.jsx("sup", { children: "b" }),
                        "Where [ ] denotes concentration in molarity.",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        " ",
                        "Interpreting K",
                        s.jsx("sub", { children: "eq" }),
                        ":",
                        " ",
                        s.jsxs("ul", {
                          children: [
                            s.jsxs("li", {
                              children: [
                                "If K",
                                s.jsx("sub", { children: "eq" }),
                                " > 1, products are favored at equilibrium.",
                              ],
                            }),
                            s.jsxs("li", {
                              children: [
                                "If K",
                                s.jsx("sub", { children: "eq" }),
                                " < 1, reactants are favored at equilibrium.",
                              ],
                            }),
                          ],
                        }),
                        " ",
                      ],
                    }),
                    s.jsxs("li", {
                      children: [
                        " ",
                        "Le Châtelier’s Principle: This principle explains how a system at equilibrium responds to changes in concentration, temperature, or pressure. The system adjusts to counteract the change and restore equilibrium. For example:",
                        " ",
                        s.jsxs("ul", {
                          children: [
                            s.jsx("li", {
                              children:
                                "Increasing the concentration of reactants shifts the equilibrium towards the products.",
                            }),
                            s.jsx("li", {
                              children:
                                "Increasing temperature for an exothermic reaction shifts the equilibrium towards the reactants.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                " ",
              ],
            }),
            s.jsxs("div", {
              className: "butt-hold",
              children: [
                s.jsx(M, {
                  style: { textDecoration: "none" },
                  to: "/info3",
                  children: s.jsx("div", {
                    className: "btn",
                    children: "Back",
                  }),
                }),
                s.jsx(M, {
                  style: { textDecoration: "none" },
                  to: "/info1",
                  children: s.jsx("div", {
                    className: "btn",
                    children: "Next",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  am = () =>
    s.jsx("div", {
      className: "main",
      children: s.jsxs("div", {
        className: "holder",
        children: [
          s.jsx("div", {
            className: "select",
            children: s.jsx("p", { children: "Select Flashcards" }),
          }),
          s.jsxs("div", {
            className: "hex",
            children: [
              s.jsx(M, {
                style: { textDecoration: "none", color: "black" },
                to: "/seb",
                children: s.jsxs("div", {
                  className: "ultraman",
                  children: [
                    s.jsx("div", { className: "hexagon1" }),
                    s.jsx("div", {
                      className: "centerhex",
                      children: s.jsxs("div", {
                        className: "centerhex-content",
                        children: [
                          s.jsx("img", { src: bc, alt: "", srcset: "" }),
                          s.jsx("p", {
                            style: { textAlign: "center" },
                            children: "Spontaneous Process",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", { className: "hexagon2" }),
                  ],
                }),
              }),
              s.jsx(M, {
                style: { textDecoration: "none", color: "black" },
                to: "/less2",
                children: s.jsxs("div", {
                  className: "ultraman",
                  children: [
                    s.jsx("div", { className: "hexagon1" }),
                    s.jsx("div", {
                      className: "centerhex",
                      children: s.jsxs("div", {
                        className: "centerhex-content",
                        children: [
                          s.jsx("img", { src: ed, alt: "", srcset: "" }),
                          s.jsxs("p", {
                            style: { textAlign: "center", fontSize: 6.5 },
                            children: [
                              " ",
                              "Entropy & Second Law of Thermodynamics",
                            ],
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", { className: "hexagon2" }),
                  ],
                }),
              }),
              s.jsx(M, {
                style: { textDecoration: "none", color: "black" },
                to: "/less3",
                children: s.jsxs("div", {
                  className: "ultraman",
                  children: [
                    s.jsx("div", { className: "hexagon1" }),
                    s.jsx("div", {
                      className: "centerhex",
                      children: s.jsxs("div", {
                        className: "centerhex-content",
                        children: [
                          s.jsx("img", {
                            src: td,
                            id: "potion",
                            alt: "",
                            srcset: "",
                          }),
                          s.jsx("p", {
                            style: { textAlign: "center" },
                            children: "Gibbs Energy",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", { className: "hexagon2" }),
                  ],
                }),
              }),
              s.jsx(M, {
                style: { textDecoration: "none", color: "black" },
                to: "/less4",
                children: s.jsxs("div", {
                  className: "ultraman",
                  children: [
                    s.jsx("div", { className: "hexagon1" }),
                    s.jsx("div", {
                      className: "centerhex",
                      children: s.jsxs("div", {
                        className: "centerhex-content",
                        children: [
                          s.jsx("img", { src: nd, alt: "", srcset: "" }),
                          s.jsx("p", {
                            style: { textAlign: "center", fontSize: 7.5 },
                            children: "The Concept of Equilibrium",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", { className: "hexagon2" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
function um() {
  return s.jsxs(_h, {
    children: [
      s.jsx(Oh, {}),
      s.jsxs(wh, {
        children: [
          s.jsx(b, { path: "/", element: s.jsx(Ah, {}) }),
          s.jsx(b, { path: "/abouts", element: s.jsx($h, {}) }),
          s.jsx(b, { path: "/seb", element: s.jsx(Hh, {}) }),
          s.jsx(b, { path: "/quiz1", element: s.jsx(Qh, {}) }),
          s.jsx(b, { path: "/quiz2", element: s.jsx(Jh, {}) }),
          s.jsx(b, { path: "/less2", element: s.jsx(Kh, {}) }),
          s.jsx(b, { path: "/less3", element: s.jsx(Yh, {}) }),
          s.jsx(b, { path: "/less4", element: s.jsx(Xh, {}) }),
          s.jsx(b, { path: "/less22", element: s.jsx(Zh, {}) }),
          s.jsx(b, { path: "/less23", element: s.jsx(bh, {}) }),
          s.jsx(b, { path: "/selectsub", element: s.jsx(nm, {}) }),
          s.jsx(b, { path: "/reviews", element: s.jsx(rm, {}) }),
          s.jsx(b, { path: "/info1", element: s.jsx(om, {}) }),
          s.jsx(b, { path: "/info2", element: s.jsx(im, {}) }),
          s.jsx(b, { path: "/info3", element: s.jsx(lm, {}) }),
          s.jsx(b, { path: "/info4", element: s.jsx(sm, {}) }),
          s.jsx(b, { path: "/cards", element: s.jsx(am, {}) }),
        ],
      }),
    ],
  });
}
yi.createRoot(document.getElementById("root")).render(
  s.jsx(Ma.StrictMode, { children: s.jsx(um, {}) })
);
