/*!
 * @rep985/fascinoTs
 * version: v2.0.0
 * description: El Nuevo Fascino pero ahora escrito con TS
 * author: Robert Pérez (https://rep98.vzlaweb.com)
 * homepage: https://rep98.github.io/fascinoTS
 * License: MIT
 */
var q3 = Object.defineProperty;
var U3 = (u, n, t) => n in u ? q3(u, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[n] = t;
var pe = (u, n, t) => (U3(u, typeof n != "symbol" ? n + "" : n, t), t);
var H3 = typeof globalThis < "u" ? globalThis : typeof window < "u" || typeof window < "u" ? window : typeof self < "u" ? self : {};
function Xc(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Fr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Fr.exports;
(function(u, n) {
  (function() {
    var t, i = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", l = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", _ = 500, y = "__lodash_placeholder__", A = 1, F = 2, C = 4, w = 1, O = 2, N = 1, H = 2, P = 4, B = 8, R = 16, z = 32, Z = 64, Q = 128, ae = 256, ye = 512, qe = 30, nu = "...", _u = 800, gu = 16, ru = 1, Re = 2, Fe = 3, Se = 1 / 0, je = 9007199254740991, at = 17976931348623157e292, At = NaN, iu = 4294967295, Pr = iu - 1, Dn = iu >>> 1, kn = [
      ["ary", Q],
      ["bind", N],
      ["bindKey", H],
      ["curry", B],
      ["curryRight", R],
      ["flip", ye],
      ["partial", z],
      ["partialRight", Z],
      ["rearg", ae]
    ], Gu = "[object Arguments]", ft = "[object Array]", Fn = "[object AsyncFunction]", lt = "[object Boolean]", ht = "[object Date]", uf = "[object DOMException]", Sn = "[object Error]", Tn = "[object Function]", X0 = "[object GeneratorFunction]", mu = "[object Map]", Jt = "[object Number]", tf = "[object Null]", Lu = "[object Object]", Q0 = "[object Promise]", nf = "[object Proxy]", Yt = "[object RegExp]", xu = "[object Set]", Vt = "[object String]", In = "[object Symbol]", rf = "[object Undefined]", Xt = "[object WeakMap]", of = "[object WeakSet]", Qt = "[object ArrayBuffer]", Ct = "[object DataView]", zr = "[object Float32Array]", qr = "[object Float64Array]", Ur = "[object Int8Array]", Hr = "[object Int16Array]", $r = "[object Int32Array]", Wr = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", Zr = "[object Uint16Array]", jr = "[object Uint32Array]", sf = /\b__p \+= '';/g, cf = /\b(__p \+=) '' \+/g, af = /(__e\(.*?\)|\b__t\)) \+\n'';/g, eo = /&(?:amp|lt|gt|quot|#39);/g, uo = /[&<>"']/g, ff = RegExp(eo.source), lf = RegExp(uo.source), hf = /<%-([\s\S]+?)%>/g, df = /<%([\s\S]+?)%>/g, to = /<%=([\s\S]+?)%>/g, pf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bf = /^\w*$/, _f = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kr = /[\\^$.*+?()[\]{}|]/g, gf = RegExp(Kr.source), Jr = /^\s+/, mf = /\s/, xf = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, yf = /\{\n\/\* \[wrapped with (.+)\] \*/, vf = /,? & /, wf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ef = /[()=,{}\[\]\/\s]/, Af = /\\(\\)?/g, Cf = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, no = /\w*$/, Df = /^[-+]0x[0-9a-f]+$/i, kf = /^0b[01]+$/i, Ff = /^\[object .+?Constructor\]$/, Sf = /^0o[0-7]+$/i, Tf = /^(?:0|[1-9]\d*)$/, If = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, On = /($^)/, Of = /['\n\r\u2028\u2029\\]/g, Rn = "\\ud800-\\udfff", Rf = "\\u0300-\\u036f", Nf = "\\ufe20-\\ufe2f", Lf = "\\u20d0-\\u20ff", ro = Rf + Nf + Lf, io = "\\u2700-\\u27bf", oo = "a-z\\xdf-\\xf6\\xf8-\\xff", Mf = "\\xac\\xb1\\xd7\\xf7", Bf = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Pf = "\\u2000-\\u206f", zf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", so = "A-Z\\xc0-\\xd6\\xd8-\\xde", co = "\\ufe0e\\ufe0f", ao = Mf + Bf + Pf + zf, Yr = "['’]", qf = "[" + Rn + "]", fo = "[" + ao + "]", Nn = "[" + ro + "]", lo = "\\d+", Uf = "[" + io + "]", ho = "[" + oo + "]", po = "[^" + Rn + ao + lo + io + oo + so + "]", Vr = "\\ud83c[\\udffb-\\udfff]", Hf = "(?:" + Nn + "|" + Vr + ")", bo = "[^" + Rn + "]", Xr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Qr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Dt = "[" + so + "]", _o = "\\u200d", go = "(?:" + ho + "|" + po + ")", $f = "(?:" + Dt + "|" + po + ")", mo = "(?:" + Yr + "(?:d|ll|m|re|s|t|ve))?", xo = "(?:" + Yr + "(?:D|LL|M|RE|S|T|VE))?", yo = Hf + "?", vo = "[" + co + "]?", Wf = "(?:" + _o + "(?:" + [bo, Xr, Qr].join("|") + ")" + vo + yo + ")*", Gf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Zf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wo = vo + yo + Wf, jf = "(?:" + [Uf, Xr, Qr].join("|") + ")" + wo, Kf = "(?:" + [bo + Nn + "?", Nn, Xr, Qr, qf].join("|") + ")", Jf = RegExp(Yr, "g"), Yf = RegExp(Nn, "g"), ei = RegExp(Vr + "(?=" + Vr + ")|" + Kf + wo, "g"), Vf = RegExp([
      Dt + "?" + ho + "+" + mo + "(?=" + [fo, Dt, "$"].join("|") + ")",
      $f + "+" + xo + "(?=" + [fo, Dt + go, "$"].join("|") + ")",
      Dt + "?" + go + "+" + mo,
      Dt + "+" + xo,
      Zf,
      Gf,
      lo,
      jf
    ].join("|"), "g"), Xf = RegExp("[" + _o + Rn + ro + co + "]"), Qf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, el = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], ul = -1, fe = {};
    fe[zr] = fe[qr] = fe[Ur] = fe[Hr] = fe[$r] = fe[Wr] = fe[Gr] = fe[Zr] = fe[jr] = !0, fe[Gu] = fe[ft] = fe[Qt] = fe[lt] = fe[Ct] = fe[ht] = fe[Sn] = fe[Tn] = fe[mu] = fe[Jt] = fe[Lu] = fe[Yt] = fe[xu] = fe[Vt] = fe[Xt] = !1;
    var se = {};
    se[Gu] = se[ft] = se[Qt] = se[Ct] = se[lt] = se[ht] = se[zr] = se[qr] = se[Ur] = se[Hr] = se[$r] = se[mu] = se[Jt] = se[Lu] = se[Yt] = se[xu] = se[Vt] = se[In] = se[Wr] = se[Gr] = se[Zr] = se[jr] = !0, se[Sn] = se[Tn] = se[Xt] = !1;
    var tl = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, nl = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, rl = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, il = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ol = parseFloat, sl = parseInt, Eo = typeof window == "object" && window && window.Object === Object && window, cl = typeof self == "object" && self && self.Object === Object && self, Te = Eo || cl || Function("return this")(), ui = n && !n.nodeType && n, dt = ui && !0 && u && !u.nodeType && u, Ao = dt && dt.exports === ui, ti = Ao && Eo.process, ou = function() {
      try {
        var v = dt && dt.require && dt.require("util").types;
        return v || ti && ti.binding && ti.binding("util");
      } catch {
      }
    }(), Co = ou && ou.isArrayBuffer, Do = ou && ou.isDate, ko = ou && ou.isMap, Fo = ou && ou.isRegExp, So = ou && ou.isSet, To = ou && ou.isTypedArray;
    function Ke(v, k, D) {
      switch (D.length) {
        case 0:
          return v.call(k);
        case 1:
          return v.call(k, D[0]);
        case 2:
          return v.call(k, D[0], D[1]);
        case 3:
          return v.call(k, D[0], D[1], D[2]);
      }
      return v.apply(k, D);
    }
    function al(v, k, D, q) {
      for (var j = -1, ne = v == null ? 0 : v.length; ++j < ne; ) {
        var ve = v[j];
        k(q, ve, D(ve), v);
      }
      return q;
    }
    function su(v, k) {
      for (var D = -1, q = v == null ? 0 : v.length; ++D < q && k(v[D], D, v) !== !1; )
        ;
      return v;
    }
    function fl(v, k) {
      for (var D = v == null ? 0 : v.length; D-- && k(v[D], D, v) !== !1; )
        ;
      return v;
    }
    function Io(v, k) {
      for (var D = -1, q = v == null ? 0 : v.length; ++D < q; )
        if (!k(v[D], D, v))
          return !1;
      return !0;
    }
    function Zu(v, k) {
      for (var D = -1, q = v == null ? 0 : v.length, j = 0, ne = []; ++D < q; ) {
        var ve = v[D];
        k(ve, D, v) && (ne[j++] = ve);
      }
      return ne;
    }
    function Ln(v, k) {
      var D = v == null ? 0 : v.length;
      return !!D && kt(v, k, 0) > -1;
    }
    function ni(v, k, D) {
      for (var q = -1, j = v == null ? 0 : v.length; ++q < j; )
        if (D(k, v[q]))
          return !0;
      return !1;
    }
    function le(v, k) {
      for (var D = -1, q = v == null ? 0 : v.length, j = Array(q); ++D < q; )
        j[D] = k(v[D], D, v);
      return j;
    }
    function ju(v, k) {
      for (var D = -1, q = k.length, j = v.length; ++D < q; )
        v[j + D] = k[D];
      return v;
    }
    function ri(v, k, D, q) {
      var j = -1, ne = v == null ? 0 : v.length;
      for (q && ne && (D = v[++j]); ++j < ne; )
        D = k(D, v[j], j, v);
      return D;
    }
    function ll(v, k, D, q) {
      var j = v == null ? 0 : v.length;
      for (q && j && (D = v[--j]); j--; )
        D = k(D, v[j], j, v);
      return D;
    }
    function ii(v, k) {
      for (var D = -1, q = v == null ? 0 : v.length; ++D < q; )
        if (k(v[D], D, v))
          return !0;
      return !1;
    }
    var hl = oi("length");
    function dl(v) {
      return v.split("");
    }
    function pl(v) {
      return v.match(wf) || [];
    }
    function Oo(v, k, D) {
      var q;
      return D(v, function(j, ne, ve) {
        if (k(j, ne, ve))
          return q = ne, !1;
      }), q;
    }
    function Mn(v, k, D, q) {
      for (var j = v.length, ne = D + (q ? 1 : -1); q ? ne-- : ++ne < j; )
        if (k(v[ne], ne, v))
          return ne;
      return -1;
    }
    function kt(v, k, D) {
      return k === k ? Dl(v, k, D) : Mn(v, Ro, D);
    }
    function bl(v, k, D, q) {
      for (var j = D - 1, ne = v.length; ++j < ne; )
        if (q(v[j], k))
          return j;
      return -1;
    }
    function Ro(v) {
      return v !== v;
    }
    function No(v, k) {
      var D = v == null ? 0 : v.length;
      return D ? ci(v, k) / D : At;
    }
    function oi(v) {
      return function(k) {
        return k == null ? t : k[v];
      };
    }
    function si(v) {
      return function(k) {
        return v == null ? t : v[k];
      };
    }
    function Lo(v, k, D, q, j) {
      return j(v, function(ne, ve, oe) {
        D = q ? (q = !1, ne) : k(D, ne, ve, oe);
      }), D;
    }
    function _l(v, k) {
      var D = v.length;
      for (v.sort(k); D--; )
        v[D] = v[D].value;
      return v;
    }
    function ci(v, k) {
      for (var D, q = -1, j = v.length; ++q < j; ) {
        var ne = k(v[q]);
        ne !== t && (D = D === t ? ne : D + ne);
      }
      return D;
    }
    function ai(v, k) {
      for (var D = -1, q = Array(v); ++D < v; )
        q[D] = k(D);
      return q;
    }
    function gl(v, k) {
      return le(k, function(D) {
        return [D, v[D]];
      });
    }
    function Mo(v) {
      return v && v.slice(0, qo(v) + 1).replace(Jr, "");
    }
    function Je(v) {
      return function(k) {
        return v(k);
      };
    }
    function fi(v, k) {
      return le(k, function(D) {
        return v[D];
      });
    }
    function en(v, k) {
      return v.has(k);
    }
    function Bo(v, k) {
      for (var D = -1, q = v.length; ++D < q && kt(k, v[D], 0) > -1; )
        ;
      return D;
    }
    function Po(v, k) {
      for (var D = v.length; D-- && kt(k, v[D], 0) > -1; )
        ;
      return D;
    }
    function ml(v, k) {
      for (var D = v.length, q = 0; D--; )
        v[D] === k && ++q;
      return q;
    }
    var xl = si(tl), yl = si(nl);
    function vl(v) {
      return "\\" + il[v];
    }
    function wl(v, k) {
      return v == null ? t : v[k];
    }
    function Ft(v) {
      return Xf.test(v);
    }
    function El(v) {
      return Qf.test(v);
    }
    function Al(v) {
      for (var k, D = []; !(k = v.next()).done; )
        D.push(k.value);
      return D;
    }
    function li(v) {
      var k = -1, D = Array(v.size);
      return v.forEach(function(q, j) {
        D[++k] = [j, q];
      }), D;
    }
    function zo(v, k) {
      return function(D) {
        return v(k(D));
      };
    }
    function Ku(v, k) {
      for (var D = -1, q = v.length, j = 0, ne = []; ++D < q; ) {
        var ve = v[D];
        (ve === k || ve === y) && (v[D] = y, ne[j++] = D);
      }
      return ne;
    }
    function Bn(v) {
      var k = -1, D = Array(v.size);
      return v.forEach(function(q) {
        D[++k] = q;
      }), D;
    }
    function Cl(v) {
      var k = -1, D = Array(v.size);
      return v.forEach(function(q) {
        D[++k] = [q, q];
      }), D;
    }
    function Dl(v, k, D) {
      for (var q = D - 1, j = v.length; ++q < j; )
        if (v[q] === k)
          return q;
      return -1;
    }
    function kl(v, k, D) {
      for (var q = D + 1; q--; )
        if (v[q] === k)
          return q;
      return q;
    }
    function St(v) {
      return Ft(v) ? Sl(v) : hl(v);
    }
    function yu(v) {
      return Ft(v) ? Tl(v) : dl(v);
    }
    function qo(v) {
      for (var k = v.length; k-- && mf.test(v.charAt(k)); )
        ;
      return k;
    }
    var Fl = si(rl);
    function Sl(v) {
      for (var k = ei.lastIndex = 0; ei.test(v); )
        ++k;
      return k;
    }
    function Tl(v) {
      return v.match(ei) || [];
    }
    function Il(v) {
      return v.match(Vf) || [];
    }
    var Ol = function v(k) {
      k = k == null ? Te : Tt.defaults(Te.Object(), k, Tt.pick(Te, el));
      var D = k.Array, q = k.Date, j = k.Error, ne = k.Function, ve = k.Math, oe = k.Object, hi = k.RegExp, Rl = k.String, cu = k.TypeError, Pn = D.prototype, Nl = ne.prototype, It = oe.prototype, zn = k["__core-js_shared__"], qn = Nl.toString, ie = It.hasOwnProperty, Ll = 0, Uo = function() {
        var e = /[^.]+$/.exec(zn && zn.keys && zn.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Un = It.toString, Ml = qn.call(oe), Bl = Te._, Pl = hi(
        "^" + qn.call(ie).replace(Kr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Hn = Ao ? k.Buffer : t, Ju = k.Symbol, $n = k.Uint8Array, Ho = Hn ? Hn.allocUnsafe : t, Wn = zo(oe.getPrototypeOf, oe), $o = oe.create, Wo = It.propertyIsEnumerable, Gn = Pn.splice, Go = Ju ? Ju.isConcatSpreadable : t, un = Ju ? Ju.iterator : t, pt = Ju ? Ju.toStringTag : t, Zn = function() {
        try {
          var e = xt(oe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), zl = k.clearTimeout !== Te.clearTimeout && k.clearTimeout, ql = q && q.now !== Te.Date.now && q.now, Ul = k.setTimeout !== Te.setTimeout && k.setTimeout, jn = ve.ceil, Kn = ve.floor, di = oe.getOwnPropertySymbols, Hl = Hn ? Hn.isBuffer : t, Zo = k.isFinite, $l = Pn.join, Wl = zo(oe.keys, oe), we = ve.max, Ne = ve.min, Gl = q.now, Zl = k.parseInt, jo = ve.random, jl = Pn.reverse, pi = xt(k, "DataView"), tn = xt(k, "Map"), bi = xt(k, "Promise"), Ot = xt(k, "Set"), nn = xt(k, "WeakMap"), rn = xt(oe, "create"), Jn = nn && new nn(), Rt = {}, Kl = yt(pi), Jl = yt(tn), Yl = yt(bi), Vl = yt(Ot), Xl = yt(nn), Yn = Ju ? Ju.prototype : t, on = Yn ? Yn.valueOf : t, Ko = Yn ? Yn.toString : t;
      function p(e) {
        if (de(e) && !K(e) && !(e instanceof ee)) {
          if (e instanceof au)
            return e;
          if (ie.call(e, "__wrapped__"))
            return Js(e);
        }
        return new au(e);
      }
      var Nt = /* @__PURE__ */ function() {
        function e() {
        }
        return function(r) {
          if (!he(r))
            return {};
          if ($o)
            return $o(r);
          e.prototype = r;
          var o = new e();
          return e.prototype = t, o;
        };
      }();
      function Vn() {
      }
      function au(e, r) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = t;
      }
      p.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: hf,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: df,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: to,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: p
        }
      }, p.prototype = Vn.prototype, p.prototype.constructor = p, au.prototype = Nt(Vn.prototype), au.prototype.constructor = au;
      function ee(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = iu, this.__views__ = [];
      }
      function Ql() {
        var e = new ee(this.__wrapped__);
        return e.__actions__ = Ue(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ue(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ue(this.__views__), e;
      }
      function e1() {
        if (this.__filtered__) {
          var e = new ee(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function u1() {
        var e = this.__wrapped__.value(), r = this.__dir__, o = K(e), a = r < 0, h = o ? e.length : 0, b = dh(0, h, this.__views__), m = b.start, x = b.end, E = x - m, S = a ? x : m - 1, T = this.__iteratees__, I = T.length, L = 0, U = Ne(E, this.__takeCount__);
        if (!o || !a && h == E && U == E)
          return ms(e, this.__actions__);
        var W = [];
        e:
          for (; E-- && L < U; ) {
            S += r;
            for (var Y = -1, G = e[S]; ++Y < I; ) {
              var X = T[Y], ue = X.iteratee, Xe = X.type, Pe = ue(G);
              if (Xe == Re)
                G = Pe;
              else if (!Pe) {
                if (Xe == ru)
                  continue e;
                break e;
              }
            }
            W[L++] = G;
          }
        return W;
      }
      ee.prototype = Nt(Vn.prototype), ee.prototype.constructor = ee;
      function bt(e) {
        var r = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++r < o; ) {
          var a = e[r];
          this.set(a[0], a[1]);
        }
      }
      function t1() {
        this.__data__ = rn ? rn(null) : {}, this.size = 0;
      }
      function n1(e) {
        var r = this.has(e) && delete this.__data__[e];
        return this.size -= r ? 1 : 0, r;
      }
      function r1(e) {
        var r = this.__data__;
        if (rn) {
          var o = r[e];
          return o === d ? t : o;
        }
        return ie.call(r, e) ? r[e] : t;
      }
      function i1(e) {
        var r = this.__data__;
        return rn ? r[e] !== t : ie.call(r, e);
      }
      function o1(e, r) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = rn && r === t ? d : r, this;
      }
      bt.prototype.clear = t1, bt.prototype.delete = n1, bt.prototype.get = r1, bt.prototype.has = i1, bt.prototype.set = o1;
      function Mu(e) {
        var r = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++r < o; ) {
          var a = e[r];
          this.set(a[0], a[1]);
        }
      }
      function s1() {
        this.__data__ = [], this.size = 0;
      }
      function c1(e) {
        var r = this.__data__, o = Xn(r, e);
        if (o < 0)
          return !1;
        var a = r.length - 1;
        return o == a ? r.pop() : Gn.call(r, o, 1), --this.size, !0;
      }
      function a1(e) {
        var r = this.__data__, o = Xn(r, e);
        return o < 0 ? t : r[o][1];
      }
      function f1(e) {
        return Xn(this.__data__, e) > -1;
      }
      function l1(e, r) {
        var o = this.__data__, a = Xn(o, e);
        return a < 0 ? (++this.size, o.push([e, r])) : o[a][1] = r, this;
      }
      Mu.prototype.clear = s1, Mu.prototype.delete = c1, Mu.prototype.get = a1, Mu.prototype.has = f1, Mu.prototype.set = l1;
      function Bu(e) {
        var r = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++r < o; ) {
          var a = e[r];
          this.set(a[0], a[1]);
        }
      }
      function h1() {
        this.size = 0, this.__data__ = {
          hash: new bt(),
          map: new (tn || Mu)(),
          string: new bt()
        };
      }
      function d1(e) {
        var r = fr(this, e).delete(e);
        return this.size -= r ? 1 : 0, r;
      }
      function p1(e) {
        return fr(this, e).get(e);
      }
      function b1(e) {
        return fr(this, e).has(e);
      }
      function _1(e, r) {
        var o = fr(this, e), a = o.size;
        return o.set(e, r), this.size += o.size == a ? 0 : 1, this;
      }
      Bu.prototype.clear = h1, Bu.prototype.delete = d1, Bu.prototype.get = p1, Bu.prototype.has = b1, Bu.prototype.set = _1;
      function _t(e) {
        var r = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new Bu(); ++r < o; )
          this.add(e[r]);
      }
      function g1(e) {
        return this.__data__.set(e, d), this;
      }
      function m1(e) {
        return this.__data__.has(e);
      }
      _t.prototype.add = _t.prototype.push = g1, _t.prototype.has = m1;
      function vu(e) {
        var r = this.__data__ = new Mu(e);
        this.size = r.size;
      }
      function x1() {
        this.__data__ = new Mu(), this.size = 0;
      }
      function y1(e) {
        var r = this.__data__, o = r.delete(e);
        return this.size = r.size, o;
      }
      function v1(e) {
        return this.__data__.get(e);
      }
      function w1(e) {
        return this.__data__.has(e);
      }
      function E1(e, r) {
        var o = this.__data__;
        if (o instanceof Mu) {
          var a = o.__data__;
          if (!tn || a.length < s - 1)
            return a.push([e, r]), this.size = ++o.size, this;
          o = this.__data__ = new Bu(a);
        }
        return o.set(e, r), this.size = o.size, this;
      }
      vu.prototype.clear = x1, vu.prototype.delete = y1, vu.prototype.get = v1, vu.prototype.has = w1, vu.prototype.set = E1;
      function Jo(e, r) {
        var o = K(e), a = !o && vt(e), h = !o && !a && et(e), b = !o && !a && !h && Pt(e), m = o || a || h || b, x = m ? ai(e.length, Rl) : [], E = x.length;
        for (var S in e)
          (r || ie.call(e, S)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
          (S == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (S == "offset" || S == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (S == "buffer" || S == "byteLength" || S == "byteOffset") || // Skip index properties.
          Uu(S, E))) && x.push(S);
        return x;
      }
      function Yo(e) {
        var r = e.length;
        return r ? e[Di(0, r - 1)] : t;
      }
      function A1(e, r) {
        return lr(Ue(e), gt(r, 0, e.length));
      }
      function C1(e) {
        return lr(Ue(e));
      }
      function _i(e, r, o) {
        (o !== t && !wu(e[r], o) || o === t && !(r in e)) && Pu(e, r, o);
      }
      function sn(e, r, o) {
        var a = e[r];
        (!(ie.call(e, r) && wu(a, o)) || o === t && !(r in e)) && Pu(e, r, o);
      }
      function Xn(e, r) {
        for (var o = e.length; o--; )
          if (wu(e[o][0], r))
            return o;
        return -1;
      }
      function D1(e, r, o, a) {
        return Yu(e, function(h, b, m) {
          r(a, h, o(h), m);
        }), a;
      }
      function Vo(e, r) {
        return e && Fu(r, Ae(r), e);
      }
      function k1(e, r) {
        return e && Fu(r, $e(r), e);
      }
      function Pu(e, r, o) {
        r == "__proto__" && Zn ? Zn(e, r, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[r] = o;
      }
      function gi(e, r) {
        for (var o = -1, a = r.length, h = D(a), b = e == null; ++o < a; )
          h[o] = b ? t : Vi(e, r[o]);
        return h;
      }
      function gt(e, r, o) {
        return e === e && (o !== t && (e = e <= o ? e : o), r !== t && (e = e >= r ? e : r)), e;
      }
      function fu(e, r, o, a, h, b) {
        var m, x = r & A, E = r & F, S = r & C;
        if (o && (m = h ? o(e, a, h, b) : o(e)), m !== t)
          return m;
        if (!he(e))
          return e;
        var T = K(e);
        if (T) {
          if (m = bh(e), !x)
            return Ue(e, m);
        } else {
          var I = Le(e), L = I == Tn || I == X0;
          if (et(e))
            return vs(e, x);
          if (I == Lu || I == Gu || L && !h) {
            if (m = E || L ? {} : qs(e), !x)
              return E ? rh(e, k1(m, e)) : nh(e, Vo(m, e));
          } else {
            if (!se[I])
              return h ? e : {};
            m = _h(e, I, x);
          }
        }
        b || (b = new vu());
        var U = b.get(e);
        if (U)
          return U;
        b.set(e, m), bc(e) ? e.forEach(function(G) {
          m.add(fu(G, r, o, G, e, b));
        }) : dc(e) && e.forEach(function(G, X) {
          m.set(X, fu(G, r, o, X, e, b));
        });
        var W = S ? E ? Bi : Mi : E ? $e : Ae, Y = T ? t : W(e);
        return su(Y || e, function(G, X) {
          Y && (X = G, G = e[X]), sn(m, X, fu(G, r, o, X, e, b));
        }), m;
      }
      function F1(e) {
        var r = Ae(e);
        return function(o) {
          return Xo(o, e, r);
        };
      }
      function Xo(e, r, o) {
        var a = o.length;
        if (e == null)
          return !a;
        for (e = oe(e); a--; ) {
          var h = o[a], b = r[h], m = e[h];
          if (m === t && !(h in e) || !b(m))
            return !1;
        }
        return !0;
      }
      function Qo(e, r, o) {
        if (typeof e != "function")
          throw new cu(f);
        return pn(function() {
          e.apply(t, o);
        }, r);
      }
      function cn(e, r, o, a) {
        var h = -1, b = Ln, m = !0, x = e.length, E = [], S = r.length;
        if (!x)
          return E;
        o && (r = le(r, Je(o))), a ? (b = ni, m = !1) : r.length >= s && (b = en, m = !1, r = new _t(r));
        e:
          for (; ++h < x; ) {
            var T = e[h], I = o == null ? T : o(T);
            if (T = a || T !== 0 ? T : 0, m && I === I) {
              for (var L = S; L--; )
                if (r[L] === I)
                  continue e;
              E.push(T);
            } else
              b(r, I, a) || E.push(T);
          }
        return E;
      }
      var Yu = Ds(ku), es = Ds(xi, !0);
      function S1(e, r) {
        var o = !0;
        return Yu(e, function(a, h, b) {
          return o = !!r(a, h, b), o;
        }), o;
      }
      function Qn(e, r, o) {
        for (var a = -1, h = e.length; ++a < h; ) {
          var b = e[a], m = r(b);
          if (m != null && (x === t ? m === m && !Ve(m) : o(m, x)))
            var x = m, E = b;
        }
        return E;
      }
      function T1(e, r, o, a) {
        var h = e.length;
        for (o = J(o), o < 0 && (o = -o > h ? 0 : h + o), a = a === t || a > h ? h : J(a), a < 0 && (a += h), a = o > a ? 0 : gc(a); o < a; )
          e[o++] = r;
        return e;
      }
      function us(e, r) {
        var o = [];
        return Yu(e, function(a, h, b) {
          r(a, h, b) && o.push(a);
        }), o;
      }
      function Ie(e, r, o, a, h) {
        var b = -1, m = e.length;
        for (o || (o = mh), h || (h = []); ++b < m; ) {
          var x = e[b];
          r > 0 && o(x) ? r > 1 ? Ie(x, r - 1, o, a, h) : ju(h, x) : a || (h[h.length] = x);
        }
        return h;
      }
      var mi = ks(), ts = ks(!0);
      function ku(e, r) {
        return e && mi(e, r, Ae);
      }
      function xi(e, r) {
        return e && ts(e, r, Ae);
      }
      function er(e, r) {
        return Zu(r, function(o) {
          return Hu(e[o]);
        });
      }
      function mt(e, r) {
        r = Xu(r, e);
        for (var o = 0, a = r.length; e != null && o < a; )
          e = e[Su(r[o++])];
        return o && o == a ? e : t;
      }
      function ns(e, r, o) {
        var a = r(e);
        return K(e) ? a : ju(a, o(e));
      }
      function Me(e) {
        return e == null ? e === t ? rf : tf : pt && pt in oe(e) ? hh(e) : Ch(e);
      }
      function yi(e, r) {
        return e > r;
      }
      function I1(e, r) {
        return e != null && ie.call(e, r);
      }
      function O1(e, r) {
        return e != null && r in oe(e);
      }
      function R1(e, r, o) {
        return e >= Ne(r, o) && e < we(r, o);
      }
      function vi(e, r, o) {
        for (var a = o ? ni : Ln, h = e[0].length, b = e.length, m = b, x = D(b), E = 1 / 0, S = []; m--; ) {
          var T = e[m];
          m && r && (T = le(T, Je(r))), E = Ne(T.length, E), x[m] = !o && (r || h >= 120 && T.length >= 120) ? new _t(m && T) : t;
        }
        T = e[0];
        var I = -1, L = x[0];
        e:
          for (; ++I < h && S.length < E; ) {
            var U = T[I], W = r ? r(U) : U;
            if (U = o || U !== 0 ? U : 0, !(L ? en(L, W) : a(S, W, o))) {
              for (m = b; --m; ) {
                var Y = x[m];
                if (!(Y ? en(Y, W) : a(e[m], W, o)))
                  continue e;
              }
              L && L.push(W), S.push(U);
            }
          }
        return S;
      }
      function N1(e, r, o, a) {
        return ku(e, function(h, b, m) {
          r(a, o(h), b, m);
        }), a;
      }
      function an(e, r, o) {
        r = Xu(r, e), e = Ws(e, r);
        var a = e == null ? e : e[Su(hu(r))];
        return a == null ? t : Ke(a, e, o);
      }
      function rs(e) {
        return de(e) && Me(e) == Gu;
      }
      function L1(e) {
        return de(e) && Me(e) == Qt;
      }
      function M1(e) {
        return de(e) && Me(e) == ht;
      }
      function fn(e, r, o, a, h) {
        return e === r ? !0 : e == null || r == null || !de(e) && !de(r) ? e !== e && r !== r : B1(e, r, o, a, fn, h);
      }
      function B1(e, r, o, a, h, b) {
        var m = K(e), x = K(r), E = m ? ft : Le(e), S = x ? ft : Le(r);
        E = E == Gu ? Lu : E, S = S == Gu ? Lu : S;
        var T = E == Lu, I = S == Lu, L = E == S;
        if (L && et(e)) {
          if (!et(r))
            return !1;
          m = !0, T = !1;
        }
        if (L && !T)
          return b || (b = new vu()), m || Pt(e) ? Bs(e, r, o, a, h, b) : fh(e, r, E, o, a, h, b);
        if (!(o & w)) {
          var U = T && ie.call(e, "__wrapped__"), W = I && ie.call(r, "__wrapped__");
          if (U || W) {
            var Y = U ? e.value() : e, G = W ? r.value() : r;
            return b || (b = new vu()), h(Y, G, o, a, b);
          }
        }
        return L ? (b || (b = new vu()), lh(e, r, o, a, h, b)) : !1;
      }
      function P1(e) {
        return de(e) && Le(e) == mu;
      }
      function wi(e, r, o, a) {
        var h = o.length, b = h, m = !a;
        if (e == null)
          return !b;
        for (e = oe(e); h--; ) {
          var x = o[h];
          if (m && x[2] ? x[1] !== e[x[0]] : !(x[0] in e))
            return !1;
        }
        for (; ++h < b; ) {
          x = o[h];
          var E = x[0], S = e[E], T = x[1];
          if (m && x[2]) {
            if (S === t && !(E in e))
              return !1;
          } else {
            var I = new vu();
            if (a)
              var L = a(S, T, E, e, r, I);
            if (!(L === t ? fn(T, S, w | O, a, I) : L))
              return !1;
          }
        }
        return !0;
      }
      function is(e) {
        if (!he(e) || yh(e))
          return !1;
        var r = Hu(e) ? Pl : Ff;
        return r.test(yt(e));
      }
      function z1(e) {
        return de(e) && Me(e) == Yt;
      }
      function q1(e) {
        return de(e) && Le(e) == xu;
      }
      function U1(e) {
        return de(e) && gr(e.length) && !!fe[Me(e)];
      }
      function os(e) {
        return typeof e == "function" ? e : e == null ? We : typeof e == "object" ? K(e) ? as(e[0], e[1]) : cs(e) : Fc(e);
      }
      function Ei(e) {
        if (!dn(e))
          return Wl(e);
        var r = [];
        for (var o in oe(e))
          ie.call(e, o) && o != "constructor" && r.push(o);
        return r;
      }
      function H1(e) {
        if (!he(e))
          return Ah(e);
        var r = dn(e), o = [];
        for (var a in e)
          a == "constructor" && (r || !ie.call(e, a)) || o.push(a);
        return o;
      }
      function Ai(e, r) {
        return e < r;
      }
      function ss(e, r) {
        var o = -1, a = He(e) ? D(e.length) : [];
        return Yu(e, function(h, b, m) {
          a[++o] = r(h, b, m);
        }), a;
      }
      function cs(e) {
        var r = zi(e);
        return r.length == 1 && r[0][2] ? Hs(r[0][0], r[0][1]) : function(o) {
          return o === e || wi(o, e, r);
        };
      }
      function as(e, r) {
        return Ui(e) && Us(r) ? Hs(Su(e), r) : function(o) {
          var a = Vi(o, e);
          return a === t && a === r ? Xi(o, e) : fn(r, a, w | O);
        };
      }
      function ur(e, r, o, a, h) {
        e !== r && mi(r, function(b, m) {
          if (h || (h = new vu()), he(b))
            $1(e, r, m, o, ur, a, h);
          else {
            var x = a ? a($i(e, m), b, m + "", e, r, h) : t;
            x === t && (x = b), _i(e, m, x);
          }
        }, $e);
      }
      function $1(e, r, o, a, h, b, m) {
        var x = $i(e, o), E = $i(r, o), S = m.get(E);
        if (S) {
          _i(e, o, S);
          return;
        }
        var T = b ? b(x, E, o + "", e, r, m) : t, I = T === t;
        if (I) {
          var L = K(E), U = !L && et(E), W = !L && !U && Pt(E);
          T = E, L || U || W ? K(x) ? T = x : _e(x) ? T = Ue(x) : U ? (I = !1, T = vs(E, !0)) : W ? (I = !1, T = ws(E, !0)) : T = [] : bn(E) || vt(E) ? (T = x, vt(x) ? T = mc(x) : (!he(x) || Hu(x)) && (T = qs(E))) : I = !1;
        }
        I && (m.set(E, T), h(T, E, a, b, m), m.delete(E)), _i(e, o, T);
      }
      function fs(e, r) {
        var o = e.length;
        if (o)
          return r += r < 0 ? o : 0, Uu(r, o) ? e[r] : t;
      }
      function ls(e, r, o) {
        r.length ? r = le(r, function(b) {
          return K(b) ? function(m) {
            return mt(m, b.length === 1 ? b[0] : b);
          } : b;
        }) : r = [We];
        var a = -1;
        r = le(r, Je($()));
        var h = ss(e, function(b, m, x) {
          var E = le(r, function(S) {
            return S(b);
          });
          return { criteria: E, index: ++a, value: b };
        });
        return _l(h, function(b, m) {
          return th(b, m, o);
        });
      }
      function W1(e, r) {
        return hs(e, r, function(o, a) {
          return Xi(e, a);
        });
      }
      function hs(e, r, o) {
        for (var a = -1, h = r.length, b = {}; ++a < h; ) {
          var m = r[a], x = mt(e, m);
          o(x, m) && ln(b, Xu(m, e), x);
        }
        return b;
      }
      function G1(e) {
        return function(r) {
          return mt(r, e);
        };
      }
      function Ci(e, r, o, a) {
        var h = a ? bl : kt, b = -1, m = r.length, x = e;
        for (e === r && (r = Ue(r)), o && (x = le(e, Je(o))); ++b < m; )
          for (var E = 0, S = r[b], T = o ? o(S) : S; (E = h(x, T, E, a)) > -1; )
            x !== e && Gn.call(x, E, 1), Gn.call(e, E, 1);
        return e;
      }
      function ds(e, r) {
        for (var o = e ? r.length : 0, a = o - 1; o--; ) {
          var h = r[o];
          if (o == a || h !== b) {
            var b = h;
            Uu(h) ? Gn.call(e, h, 1) : Si(e, h);
          }
        }
        return e;
      }
      function Di(e, r) {
        return e + Kn(jo() * (r - e + 1));
      }
      function Z1(e, r, o, a) {
        for (var h = -1, b = we(jn((r - e) / (o || 1)), 0), m = D(b); b--; )
          m[a ? b : ++h] = e, e += o;
        return m;
      }
      function ki(e, r) {
        var o = "";
        if (!e || r < 1 || r > je)
          return o;
        do
          r % 2 && (o += e), r = Kn(r / 2), r && (e += e);
        while (r);
        return o;
      }
      function V(e, r) {
        return Wi($s(e, r, We), e + "");
      }
      function j1(e) {
        return Yo(zt(e));
      }
      function K1(e, r) {
        var o = zt(e);
        return lr(o, gt(r, 0, o.length));
      }
      function ln(e, r, o, a) {
        if (!he(e))
          return e;
        r = Xu(r, e);
        for (var h = -1, b = r.length, m = b - 1, x = e; x != null && ++h < b; ) {
          var E = Su(r[h]), S = o;
          if (E === "__proto__" || E === "constructor" || E === "prototype")
            return e;
          if (h != m) {
            var T = x[E];
            S = a ? a(T, E, x) : t, S === t && (S = he(T) ? T : Uu(r[h + 1]) ? [] : {});
          }
          sn(x, E, S), x = x[E];
        }
        return e;
      }
      var ps = Jn ? function(e, r) {
        return Jn.set(e, r), e;
      } : We, J1 = Zn ? function(e, r) {
        return Zn(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: e0(r),
          writable: !0
        });
      } : We;
      function Y1(e) {
        return lr(zt(e));
      }
      function lu(e, r, o) {
        var a = -1, h = e.length;
        r < 0 && (r = -r > h ? 0 : h + r), o = o > h ? h : o, o < 0 && (o += h), h = r > o ? 0 : o - r >>> 0, r >>>= 0;
        for (var b = D(h); ++a < h; )
          b[a] = e[a + r];
        return b;
      }
      function V1(e, r) {
        var o;
        return Yu(e, function(a, h, b) {
          return o = r(a, h, b), !o;
        }), !!o;
      }
      function tr(e, r, o) {
        var a = 0, h = e == null ? a : e.length;
        if (typeof r == "number" && r === r && h <= Dn) {
          for (; a < h; ) {
            var b = a + h >>> 1, m = e[b];
            m !== null && !Ve(m) && (o ? m <= r : m < r) ? a = b + 1 : h = b;
          }
          return h;
        }
        return Fi(e, r, We, o);
      }
      function Fi(e, r, o, a) {
        var h = 0, b = e == null ? 0 : e.length;
        if (b === 0)
          return 0;
        r = o(r);
        for (var m = r !== r, x = r === null, E = Ve(r), S = r === t; h < b; ) {
          var T = Kn((h + b) / 2), I = o(e[T]), L = I !== t, U = I === null, W = I === I, Y = Ve(I);
          if (m)
            var G = a || W;
          else
            S ? G = W && (a || L) : x ? G = W && L && (a || !U) : E ? G = W && L && !U && (a || !Y) : U || Y ? G = !1 : G = a ? I <= r : I < r;
          G ? h = T + 1 : b = T;
        }
        return Ne(b, Pr);
      }
      function bs(e, r) {
        for (var o = -1, a = e.length, h = 0, b = []; ++o < a; ) {
          var m = e[o], x = r ? r(m) : m;
          if (!o || !wu(x, E)) {
            var E = x;
            b[h++] = m === 0 ? 0 : m;
          }
        }
        return b;
      }
      function _s(e) {
        return typeof e == "number" ? e : Ve(e) ? At : +e;
      }
      function Ye(e) {
        if (typeof e == "string")
          return e;
        if (K(e))
          return le(e, Ye) + "";
        if (Ve(e))
          return Ko ? Ko.call(e) : "";
        var r = e + "";
        return r == "0" && 1 / e == -Se ? "-0" : r;
      }
      function Vu(e, r, o) {
        var a = -1, h = Ln, b = e.length, m = !0, x = [], E = x;
        if (o)
          m = !1, h = ni;
        else if (b >= s) {
          var S = r ? null : ch(e);
          if (S)
            return Bn(S);
          m = !1, h = en, E = new _t();
        } else
          E = r ? [] : x;
        e:
          for (; ++a < b; ) {
            var T = e[a], I = r ? r(T) : T;
            if (T = o || T !== 0 ? T : 0, m && I === I) {
              for (var L = E.length; L--; )
                if (E[L] === I)
                  continue e;
              r && E.push(I), x.push(T);
            } else
              h(E, I, o) || (E !== x && E.push(I), x.push(T));
          }
        return x;
      }
      function Si(e, r) {
        return r = Xu(r, e), e = Ws(e, r), e == null || delete e[Su(hu(r))];
      }
      function gs(e, r, o, a) {
        return ln(e, r, o(mt(e, r)), a);
      }
      function nr(e, r, o, a) {
        for (var h = e.length, b = a ? h : -1; (a ? b-- : ++b < h) && r(e[b], b, e); )
          ;
        return o ? lu(e, a ? 0 : b, a ? b + 1 : h) : lu(e, a ? b + 1 : 0, a ? h : b);
      }
      function ms(e, r) {
        var o = e;
        return o instanceof ee && (o = o.value()), ri(r, function(a, h) {
          return h.func.apply(h.thisArg, ju([a], h.args));
        }, o);
      }
      function Ti(e, r, o) {
        var a = e.length;
        if (a < 2)
          return a ? Vu(e[0]) : [];
        for (var h = -1, b = D(a); ++h < a; )
          for (var m = e[h], x = -1; ++x < a; )
            x != h && (b[h] = cn(b[h] || m, e[x], r, o));
        return Vu(Ie(b, 1), r, o);
      }
      function xs(e, r, o) {
        for (var a = -1, h = e.length, b = r.length, m = {}; ++a < h; ) {
          var x = a < b ? r[a] : t;
          o(m, e[a], x);
        }
        return m;
      }
      function Ii(e) {
        return _e(e) ? e : [];
      }
      function Oi(e) {
        return typeof e == "function" ? e : We;
      }
      function Xu(e, r) {
        return K(e) ? e : Ui(e, r) ? [e] : Ks(re(e));
      }
      var X1 = V;
      function Qu(e, r, o) {
        var a = e.length;
        return o = o === t ? a : o, !r && o >= a ? e : lu(e, r, o);
      }
      var ys = zl || function(e) {
        return Te.clearTimeout(e);
      };
      function vs(e, r) {
        if (r)
          return e.slice();
        var o = e.length, a = Ho ? Ho(o) : new e.constructor(o);
        return e.copy(a), a;
      }
      function Ri(e) {
        var r = new e.constructor(e.byteLength);
        return new $n(r).set(new $n(e)), r;
      }
      function Q1(e, r) {
        var o = r ? Ri(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function eh(e) {
        var r = new e.constructor(e.source, no.exec(e));
        return r.lastIndex = e.lastIndex, r;
      }
      function uh(e) {
        return on ? oe(on.call(e)) : {};
      }
      function ws(e, r) {
        var o = r ? Ri(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function Es(e, r) {
        if (e !== r) {
          var o = e !== t, a = e === null, h = e === e, b = Ve(e), m = r !== t, x = r === null, E = r === r, S = Ve(r);
          if (!x && !S && !b && e > r || b && m && E && !x && !S || a && m && E || !o && E || !h)
            return 1;
          if (!a && !b && !S && e < r || S && o && h && !a && !b || x && o && h || !m && h || !E)
            return -1;
        }
        return 0;
      }
      function th(e, r, o) {
        for (var a = -1, h = e.criteria, b = r.criteria, m = h.length, x = o.length; ++a < m; ) {
          var E = Es(h[a], b[a]);
          if (E) {
            if (a >= x)
              return E;
            var S = o[a];
            return E * (S == "desc" ? -1 : 1);
          }
        }
        return e.index - r.index;
      }
      function As(e, r, o, a) {
        for (var h = -1, b = e.length, m = o.length, x = -1, E = r.length, S = we(b - m, 0), T = D(E + S), I = !a; ++x < E; )
          T[x] = r[x];
        for (; ++h < m; )
          (I || h < b) && (T[o[h]] = e[h]);
        for (; S--; )
          T[x++] = e[h++];
        return T;
      }
      function Cs(e, r, o, a) {
        for (var h = -1, b = e.length, m = -1, x = o.length, E = -1, S = r.length, T = we(b - x, 0), I = D(T + S), L = !a; ++h < T; )
          I[h] = e[h];
        for (var U = h; ++E < S; )
          I[U + E] = r[E];
        for (; ++m < x; )
          (L || h < b) && (I[U + o[m]] = e[h++]);
        return I;
      }
      function Ue(e, r) {
        var o = -1, a = e.length;
        for (r || (r = D(a)); ++o < a; )
          r[o] = e[o];
        return r;
      }
      function Fu(e, r, o, a) {
        var h = !o;
        o || (o = {});
        for (var b = -1, m = r.length; ++b < m; ) {
          var x = r[b], E = a ? a(o[x], e[x], x, o, e) : t;
          E === t && (E = e[x]), h ? Pu(o, x, E) : sn(o, x, E);
        }
        return o;
      }
      function nh(e, r) {
        return Fu(e, qi(e), r);
      }
      function rh(e, r) {
        return Fu(e, Ps(e), r);
      }
      function rr(e, r) {
        return function(o, a) {
          var h = K(o) ? al : D1, b = r ? r() : {};
          return h(o, e, $(a, 2), b);
        };
      }
      function Lt(e) {
        return V(function(r, o) {
          var a = -1, h = o.length, b = h > 1 ? o[h - 1] : t, m = h > 2 ? o[2] : t;
          for (b = e.length > 3 && typeof b == "function" ? (h--, b) : t, m && Be(o[0], o[1], m) && (b = h < 3 ? t : b, h = 1), r = oe(r); ++a < h; ) {
            var x = o[a];
            x && e(r, x, a, b);
          }
          return r;
        });
      }
      function Ds(e, r) {
        return function(o, a) {
          if (o == null)
            return o;
          if (!He(o))
            return e(o, a);
          for (var h = o.length, b = r ? h : -1, m = oe(o); (r ? b-- : ++b < h) && a(m[b], b, m) !== !1; )
            ;
          return o;
        };
      }
      function ks(e) {
        return function(r, o, a) {
          for (var h = -1, b = oe(r), m = a(r), x = m.length; x--; ) {
            var E = m[e ? x : ++h];
            if (o(b[E], E, b) === !1)
              break;
          }
          return r;
        };
      }
      function ih(e, r, o) {
        var a = r & N, h = hn(e);
        function b() {
          var m = this && this !== Te && this instanceof b ? h : e;
          return m.apply(a ? o : this, arguments);
        }
        return b;
      }
      function Fs(e) {
        return function(r) {
          r = re(r);
          var o = Ft(r) ? yu(r) : t, a = o ? o[0] : r.charAt(0), h = o ? Qu(o, 1).join("") : r.slice(1);
          return a[e]() + h;
        };
      }
      function Mt(e) {
        return function(r) {
          return ri(Dc(Cc(r).replace(Jf, "")), e, "");
        };
      }
      function hn(e) {
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return new e();
            case 1:
              return new e(r[0]);
            case 2:
              return new e(r[0], r[1]);
            case 3:
              return new e(r[0], r[1], r[2]);
            case 4:
              return new e(r[0], r[1], r[2], r[3]);
            case 5:
              return new e(r[0], r[1], r[2], r[3], r[4]);
            case 6:
              return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
            case 7:
              return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
          }
          var o = Nt(e.prototype), a = e.apply(o, r);
          return he(a) ? a : o;
        };
      }
      function oh(e, r, o) {
        var a = hn(e);
        function h() {
          for (var b = arguments.length, m = D(b), x = b, E = Bt(h); x--; )
            m[x] = arguments[x];
          var S = b < 3 && m[0] !== E && m[b - 1] !== E ? [] : Ku(m, E);
          if (b -= S.length, b < o)
            return Rs(
              e,
              r,
              ir,
              h.placeholder,
              t,
              m,
              S,
              t,
              t,
              o - b
            );
          var T = this && this !== Te && this instanceof h ? a : e;
          return Ke(T, this, m);
        }
        return h;
      }
      function Ss(e) {
        return function(r, o, a) {
          var h = oe(r);
          if (!He(r)) {
            var b = $(o, 3);
            r = Ae(r), o = function(x) {
              return b(h[x], x, h);
            };
          }
          var m = e(r, o, a);
          return m > -1 ? h[b ? r[m] : m] : t;
        };
      }
      function Ts(e) {
        return qu(function(r) {
          var o = r.length, a = o, h = au.prototype.thru;
          for (e && r.reverse(); a--; ) {
            var b = r[a];
            if (typeof b != "function")
              throw new cu(f);
            if (h && !m && ar(b) == "wrapper")
              var m = new au([], !0);
          }
          for (a = m ? a : o; ++a < o; ) {
            b = r[a];
            var x = ar(b), E = x == "wrapper" ? Pi(b) : t;
            E && Hi(E[0]) && E[1] == (Q | B | z | ae) && !E[4].length && E[9] == 1 ? m = m[ar(E[0])].apply(m, E[3]) : m = b.length == 1 && Hi(b) ? m[x]() : m.thru(b);
          }
          return function() {
            var S = arguments, T = S[0];
            if (m && S.length == 1 && K(T))
              return m.plant(T).value();
            for (var I = 0, L = o ? r[I].apply(this, S) : T; ++I < o; )
              L = r[I].call(this, L);
            return L;
          };
        });
      }
      function ir(e, r, o, a, h, b, m, x, E, S) {
        var T = r & Q, I = r & N, L = r & H, U = r & (B | R), W = r & ye, Y = L ? t : hn(e);
        function G() {
          for (var X = arguments.length, ue = D(X), Xe = X; Xe--; )
            ue[Xe] = arguments[Xe];
          if (U)
            var Pe = Bt(G), Qe = ml(ue, Pe);
          if (a && (ue = As(ue, a, h, U)), b && (ue = Cs(ue, b, m, U)), X -= Qe, U && X < S) {
            var ge = Ku(ue, Pe);
            return Rs(
              e,
              r,
              ir,
              G.placeholder,
              o,
              ue,
              ge,
              x,
              E,
              S - X
            );
          }
          var Eu = I ? o : this, Wu = L ? Eu[e] : e;
          return X = ue.length, x ? ue = Dh(ue, x) : W && X > 1 && ue.reverse(), T && E < X && (ue.length = E), this && this !== Te && this instanceof G && (Wu = Y || hn(Wu)), Wu.apply(Eu, ue);
        }
        return G;
      }
      function Is(e, r) {
        return function(o, a) {
          return N1(o, e, r(a), {});
        };
      }
      function or(e, r) {
        return function(o, a) {
          var h;
          if (o === t && a === t)
            return r;
          if (o !== t && (h = o), a !== t) {
            if (h === t)
              return a;
            typeof o == "string" || typeof a == "string" ? (o = Ye(o), a = Ye(a)) : (o = _s(o), a = _s(a)), h = e(o, a);
          }
          return h;
        };
      }
      function Ni(e) {
        return qu(function(r) {
          return r = le(r, Je($())), V(function(o) {
            var a = this;
            return e(r, function(h) {
              return Ke(h, a, o);
            });
          });
        });
      }
      function sr(e, r) {
        r = r === t ? " " : Ye(r);
        var o = r.length;
        if (o < 2)
          return o ? ki(r, e) : r;
        var a = ki(r, jn(e / St(r)));
        return Ft(r) ? Qu(yu(a), 0, e).join("") : a.slice(0, e);
      }
      function sh(e, r, o, a) {
        var h = r & N, b = hn(e);
        function m() {
          for (var x = -1, E = arguments.length, S = -1, T = a.length, I = D(T + E), L = this && this !== Te && this instanceof m ? b : e; ++S < T; )
            I[S] = a[S];
          for (; E--; )
            I[S++] = arguments[++x];
          return Ke(L, h ? o : this, I);
        }
        return m;
      }
      function Os(e) {
        return function(r, o, a) {
          return a && typeof a != "number" && Be(r, o, a) && (o = a = t), r = $u(r), o === t ? (o = r, r = 0) : o = $u(o), a = a === t ? r < o ? 1 : -1 : $u(a), Z1(r, o, a, e);
        };
      }
      function cr(e) {
        return function(r, o) {
          return typeof r == "string" && typeof o == "string" || (r = du(r), o = du(o)), e(r, o);
        };
      }
      function Rs(e, r, o, a, h, b, m, x, E, S) {
        var T = r & B, I = T ? m : t, L = T ? t : m, U = T ? b : t, W = T ? t : b;
        r |= T ? z : Z, r &= ~(T ? Z : z), r & P || (r &= ~(N | H));
        var Y = [
          e,
          r,
          h,
          U,
          I,
          W,
          L,
          x,
          E,
          S
        ], G = o.apply(t, Y);
        return Hi(e) && Gs(G, Y), G.placeholder = a, Zs(G, e, r);
      }
      function Li(e) {
        var r = ve[e];
        return function(o, a) {
          if (o = du(o), a = a == null ? 0 : Ne(J(a), 292), a && Zo(o)) {
            var h = (re(o) + "e").split("e"), b = r(h[0] + "e" + (+h[1] + a));
            return h = (re(b) + "e").split("e"), +(h[0] + "e" + (+h[1] - a));
          }
          return r(o);
        };
      }
      var ch = Ot && 1 / Bn(new Ot([, -0]))[1] == Se ? function(e) {
        return new Ot(e);
      } : n0;
      function Ns(e) {
        return function(r) {
          var o = Le(r);
          return o == mu ? li(r) : o == xu ? Cl(r) : gl(r, e(r));
        };
      }
      function zu(e, r, o, a, h, b, m, x) {
        var E = r & H;
        if (!E && typeof e != "function")
          throw new cu(f);
        var S = a ? a.length : 0;
        if (S || (r &= ~(z | Z), a = h = t), m = m === t ? m : we(J(m), 0), x = x === t ? x : J(x), S -= h ? h.length : 0, r & Z) {
          var T = a, I = h;
          a = h = t;
        }
        var L = E ? t : Pi(e), U = [
          e,
          r,
          o,
          a,
          h,
          T,
          I,
          b,
          m,
          x
        ];
        if (L && Eh(U, L), e = U[0], r = U[1], o = U[2], a = U[3], h = U[4], x = U[9] = U[9] === t ? E ? 0 : e.length : we(U[9] - S, 0), !x && r & (B | R) && (r &= ~(B | R)), !r || r == N)
          var W = ih(e, r, o);
        else
          r == B || r == R ? W = oh(e, r, x) : (r == z || r == (N | z)) && !h.length ? W = sh(e, r, o, a) : W = ir.apply(t, U);
        var Y = L ? ps : Gs;
        return Zs(Y(W, U), e, r);
      }
      function Ls(e, r, o, a) {
        return e === t || wu(e, It[o]) && !ie.call(a, o) ? r : e;
      }
      function Ms(e, r, o, a, h, b) {
        return he(e) && he(r) && (b.set(r, e), ur(e, r, t, Ms, b), b.delete(r)), e;
      }
      function ah(e) {
        return bn(e) ? t : e;
      }
      function Bs(e, r, o, a, h, b) {
        var m = o & w, x = e.length, E = r.length;
        if (x != E && !(m && E > x))
          return !1;
        var S = b.get(e), T = b.get(r);
        if (S && T)
          return S == r && T == e;
        var I = -1, L = !0, U = o & O ? new _t() : t;
        for (b.set(e, r), b.set(r, e); ++I < x; ) {
          var W = e[I], Y = r[I];
          if (a)
            var G = m ? a(Y, W, I, r, e, b) : a(W, Y, I, e, r, b);
          if (G !== t) {
            if (G)
              continue;
            L = !1;
            break;
          }
          if (U) {
            if (!ii(r, function(X, ue) {
              if (!en(U, ue) && (W === X || h(W, X, o, a, b)))
                return U.push(ue);
            })) {
              L = !1;
              break;
            }
          } else if (!(W === Y || h(W, Y, o, a, b))) {
            L = !1;
            break;
          }
        }
        return b.delete(e), b.delete(r), L;
      }
      function fh(e, r, o, a, h, b, m) {
        switch (o) {
          case Ct:
            if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
              return !1;
            e = e.buffer, r = r.buffer;
          case Qt:
            return !(e.byteLength != r.byteLength || !b(new $n(e), new $n(r)));
          case lt:
          case ht:
          case Jt:
            return wu(+e, +r);
          case Sn:
            return e.name == r.name && e.message == r.message;
          case Yt:
          case Vt:
            return e == r + "";
          case mu:
            var x = li;
          case xu:
            var E = a & w;
            if (x || (x = Bn), e.size != r.size && !E)
              return !1;
            var S = m.get(e);
            if (S)
              return S == r;
            a |= O, m.set(e, r);
            var T = Bs(x(e), x(r), a, h, b, m);
            return m.delete(e), T;
          case In:
            if (on)
              return on.call(e) == on.call(r);
        }
        return !1;
      }
      function lh(e, r, o, a, h, b) {
        var m = o & w, x = Mi(e), E = x.length, S = Mi(r), T = S.length;
        if (E != T && !m)
          return !1;
        for (var I = E; I--; ) {
          var L = x[I];
          if (!(m ? L in r : ie.call(r, L)))
            return !1;
        }
        var U = b.get(e), W = b.get(r);
        if (U && W)
          return U == r && W == e;
        var Y = !0;
        b.set(e, r), b.set(r, e);
        for (var G = m; ++I < E; ) {
          L = x[I];
          var X = e[L], ue = r[L];
          if (a)
            var Xe = m ? a(ue, X, L, r, e, b) : a(X, ue, L, e, r, b);
          if (!(Xe === t ? X === ue || h(X, ue, o, a, b) : Xe)) {
            Y = !1;
            break;
          }
          G || (G = L == "constructor");
        }
        if (Y && !G) {
          var Pe = e.constructor, Qe = r.constructor;
          Pe != Qe && "constructor" in e && "constructor" in r && !(typeof Pe == "function" && Pe instanceof Pe && typeof Qe == "function" && Qe instanceof Qe) && (Y = !1);
        }
        return b.delete(e), b.delete(r), Y;
      }
      function qu(e) {
        return Wi($s(e, t, Xs), e + "");
      }
      function Mi(e) {
        return ns(e, Ae, qi);
      }
      function Bi(e) {
        return ns(e, $e, Ps);
      }
      var Pi = Jn ? function(e) {
        return Jn.get(e);
      } : n0;
      function ar(e) {
        for (var r = e.name + "", o = Rt[r], a = ie.call(Rt, r) ? o.length : 0; a--; ) {
          var h = o[a], b = h.func;
          if (b == null || b == e)
            return h.name;
        }
        return r;
      }
      function Bt(e) {
        var r = ie.call(p, "placeholder") ? p : e;
        return r.placeholder;
      }
      function $() {
        var e = p.iteratee || u0;
        return e = e === u0 ? os : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function fr(e, r) {
        var o = e.__data__;
        return xh(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
      }
      function zi(e) {
        for (var r = Ae(e), o = r.length; o--; ) {
          var a = r[o], h = e[a];
          r[o] = [a, h, Us(h)];
        }
        return r;
      }
      function xt(e, r) {
        var o = wl(e, r);
        return is(o) ? o : t;
      }
      function hh(e) {
        var r = ie.call(e, pt), o = e[pt];
        try {
          e[pt] = t;
          var a = !0;
        } catch {
        }
        var h = Un.call(e);
        return a && (r ? e[pt] = o : delete e[pt]), h;
      }
      var qi = di ? function(e) {
        return e == null ? [] : (e = oe(e), Zu(di(e), function(r) {
          return Wo.call(e, r);
        }));
      } : r0, Ps = di ? function(e) {
        for (var r = []; e; )
          ju(r, qi(e)), e = Wn(e);
        return r;
      } : r0, Le = Me;
      (pi && Le(new pi(new ArrayBuffer(1))) != Ct || tn && Le(new tn()) != mu || bi && Le(bi.resolve()) != Q0 || Ot && Le(new Ot()) != xu || nn && Le(new nn()) != Xt) && (Le = function(e) {
        var r = Me(e), o = r == Lu ? e.constructor : t, a = o ? yt(o) : "";
        if (a)
          switch (a) {
            case Kl:
              return Ct;
            case Jl:
              return mu;
            case Yl:
              return Q0;
            case Vl:
              return xu;
            case Xl:
              return Xt;
          }
        return r;
      });
      function dh(e, r, o) {
        for (var a = -1, h = o.length; ++a < h; ) {
          var b = o[a], m = b.size;
          switch (b.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              r -= m;
              break;
            case "take":
              r = Ne(r, e + m);
              break;
            case "takeRight":
              e = we(e, r - m);
              break;
          }
        }
        return { start: e, end: r };
      }
      function ph(e) {
        var r = e.match(yf);
        return r ? r[1].split(vf) : [];
      }
      function zs(e, r, o) {
        r = Xu(r, e);
        for (var a = -1, h = r.length, b = !1; ++a < h; ) {
          var m = Su(r[a]);
          if (!(b = e != null && o(e, m)))
            break;
          e = e[m];
        }
        return b || ++a != h ? b : (h = e == null ? 0 : e.length, !!h && gr(h) && Uu(m, h) && (K(e) || vt(e)));
      }
      function bh(e) {
        var r = e.length, o = new e.constructor(r);
        return r && typeof e[0] == "string" && ie.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function qs(e) {
        return typeof e.constructor == "function" && !dn(e) ? Nt(Wn(e)) : {};
      }
      function _h(e, r, o) {
        var a = e.constructor;
        switch (r) {
          case Qt:
            return Ri(e);
          case lt:
          case ht:
            return new a(+e);
          case Ct:
            return Q1(e, o);
          case zr:
          case qr:
          case Ur:
          case Hr:
          case $r:
          case Wr:
          case Gr:
          case Zr:
          case jr:
            return ws(e, o);
          case mu:
            return new a();
          case Jt:
          case Vt:
            return new a(e);
          case Yt:
            return eh(e);
          case xu:
            return new a();
          case In:
            return uh(e);
        }
      }
      function gh(e, r) {
        var o = r.length;
        if (!o)
          return e;
        var a = o - 1;
        return r[a] = (o > 1 ? "& " : "") + r[a], r = r.join(o > 2 ? ", " : " "), e.replace(xf, `{
/* [wrapped with ` + r + `] */
`);
      }
      function mh(e) {
        return K(e) || vt(e) || !!(Go && e && e[Go]);
      }
      function Uu(e, r) {
        var o = typeof e;
        return r = r ?? je, !!r && (o == "number" || o != "symbol" && Tf.test(e)) && e > -1 && e % 1 == 0 && e < r;
      }
      function Be(e, r, o) {
        if (!he(o))
          return !1;
        var a = typeof r;
        return (a == "number" ? He(o) && Uu(r, o.length) : a == "string" && r in o) ? wu(o[r], e) : !1;
      }
      function Ui(e, r) {
        if (K(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || Ve(e) ? !0 : bf.test(e) || !pf.test(e) || r != null && e in oe(r);
      }
      function xh(e) {
        var r = typeof e;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
      }
      function Hi(e) {
        var r = ar(e), o = p[r];
        if (typeof o != "function" || !(r in ee.prototype))
          return !1;
        if (e === o)
          return !0;
        var a = Pi(o);
        return !!a && e === a[0];
      }
      function yh(e) {
        return !!Uo && Uo in e;
      }
      var vh = zn ? Hu : i0;
      function dn(e) {
        var r = e && e.constructor, o = typeof r == "function" && r.prototype || It;
        return e === o;
      }
      function Us(e) {
        return e === e && !he(e);
      }
      function Hs(e, r) {
        return function(o) {
          return o == null ? !1 : o[e] === r && (r !== t || e in oe(o));
        };
      }
      function wh(e) {
        var r = br(e, function(a) {
          return o.size === _ && o.clear(), a;
        }), o = r.cache;
        return r;
      }
      function Eh(e, r) {
        var o = e[1], a = r[1], h = o | a, b = h < (N | H | Q), m = a == Q && o == B || a == Q && o == ae && e[7].length <= r[8] || a == (Q | ae) && r[7].length <= r[8] && o == B;
        if (!(b || m))
          return e;
        a & N && (e[2] = r[2], h |= o & N ? 0 : P);
        var x = r[3];
        if (x) {
          var E = e[3];
          e[3] = E ? As(E, x, r[4]) : x, e[4] = E ? Ku(e[3], y) : r[4];
        }
        return x = r[5], x && (E = e[5], e[5] = E ? Cs(E, x, r[6]) : x, e[6] = E ? Ku(e[5], y) : r[6]), x = r[7], x && (e[7] = x), a & Q && (e[8] = e[8] == null ? r[8] : Ne(e[8], r[8])), e[9] == null && (e[9] = r[9]), e[0] = r[0], e[1] = h, e;
      }
      function Ah(e) {
        var r = [];
        if (e != null)
          for (var o in oe(e))
            r.push(o);
        return r;
      }
      function Ch(e) {
        return Un.call(e);
      }
      function $s(e, r, o) {
        return r = we(r === t ? e.length - 1 : r, 0), function() {
          for (var a = arguments, h = -1, b = we(a.length - r, 0), m = D(b); ++h < b; )
            m[h] = a[r + h];
          h = -1;
          for (var x = D(r + 1); ++h < r; )
            x[h] = a[h];
          return x[r] = o(m), Ke(e, this, x);
        };
      }
      function Ws(e, r) {
        return r.length < 2 ? e : mt(e, lu(r, 0, -1));
      }
      function Dh(e, r) {
        for (var o = e.length, a = Ne(r.length, o), h = Ue(e); a--; ) {
          var b = r[a];
          e[a] = Uu(b, o) ? h[b] : t;
        }
        return e;
      }
      function $i(e, r) {
        if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
          return e[r];
      }
      var Gs = js(ps), pn = Ul || function(e, r) {
        return Te.setTimeout(e, r);
      }, Wi = js(J1);
      function Zs(e, r, o) {
        var a = r + "";
        return Wi(e, gh(a, kh(ph(a), o)));
      }
      function js(e) {
        var r = 0, o = 0;
        return function() {
          var a = Gl(), h = gu - (a - o);
          if (o = a, h > 0) {
            if (++r >= _u)
              return arguments[0];
          } else
            r = 0;
          return e.apply(t, arguments);
        };
      }
      function lr(e, r) {
        var o = -1, a = e.length, h = a - 1;
        for (r = r === t ? a : r; ++o < r; ) {
          var b = Di(o, h), m = e[b];
          e[b] = e[o], e[o] = m;
        }
        return e.length = r, e;
      }
      var Ks = wh(function(e) {
        var r = [];
        return e.charCodeAt(0) === 46 && r.push(""), e.replace(_f, function(o, a, h, b) {
          r.push(h ? b.replace(Af, "$1") : a || o);
        }), r;
      });
      function Su(e) {
        if (typeof e == "string" || Ve(e))
          return e;
        var r = e + "";
        return r == "0" && 1 / e == -Se ? "-0" : r;
      }
      function yt(e) {
        if (e != null) {
          try {
            return qn.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function kh(e, r) {
        return su(kn, function(o) {
          var a = "_." + o[0];
          r & o[1] && !Ln(e, a) && e.push(a);
        }), e.sort();
      }
      function Js(e) {
        if (e instanceof ee)
          return e.clone();
        var r = new au(e.__wrapped__, e.__chain__);
        return r.__actions__ = Ue(e.__actions__), r.__index__ = e.__index__, r.__values__ = e.__values__, r;
      }
      function Fh(e, r, o) {
        (o ? Be(e, r, o) : r === t) ? r = 1 : r = we(J(r), 0);
        var a = e == null ? 0 : e.length;
        if (!a || r < 1)
          return [];
        for (var h = 0, b = 0, m = D(jn(a / r)); h < a; )
          m[b++] = lu(e, h, h += r);
        return m;
      }
      function Sh(e) {
        for (var r = -1, o = e == null ? 0 : e.length, a = 0, h = []; ++r < o; ) {
          var b = e[r];
          b && (h[a++] = b);
        }
        return h;
      }
      function Th() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var r = D(e - 1), o = arguments[0], a = e; a--; )
          r[a - 1] = arguments[a];
        return ju(K(o) ? Ue(o) : [o], Ie(r, 1));
      }
      var Ih = V(function(e, r) {
        return _e(e) ? cn(e, Ie(r, 1, _e, !0)) : [];
      }), Oh = V(function(e, r) {
        var o = hu(r);
        return _e(o) && (o = t), _e(e) ? cn(e, Ie(r, 1, _e, !0), $(o, 2)) : [];
      }), Rh = V(function(e, r) {
        var o = hu(r);
        return _e(o) && (o = t), _e(e) ? cn(e, Ie(r, 1, _e, !0), t, o) : [];
      });
      function Nh(e, r, o) {
        var a = e == null ? 0 : e.length;
        return a ? (r = o || r === t ? 1 : J(r), lu(e, r < 0 ? 0 : r, a)) : [];
      }
      function Lh(e, r, o) {
        var a = e == null ? 0 : e.length;
        return a ? (r = o || r === t ? 1 : J(r), r = a - r, lu(e, 0, r < 0 ? 0 : r)) : [];
      }
      function Mh(e, r) {
        return e && e.length ? nr(e, $(r, 3), !0, !0) : [];
      }
      function Bh(e, r) {
        return e && e.length ? nr(e, $(r, 3), !0) : [];
      }
      function Ph(e, r, o, a) {
        var h = e == null ? 0 : e.length;
        return h ? (o && typeof o != "number" && Be(e, r, o) && (o = 0, a = h), T1(e, r, o, a)) : [];
      }
      function Ys(e, r, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var h = o == null ? 0 : J(o);
        return h < 0 && (h = we(a + h, 0)), Mn(e, $(r, 3), h);
      }
      function Vs(e, r, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var h = a - 1;
        return o !== t && (h = J(o), h = o < 0 ? we(a + h, 0) : Ne(h, a - 1)), Mn(e, $(r, 3), h, !0);
      }
      function Xs(e) {
        var r = e == null ? 0 : e.length;
        return r ? Ie(e, 1) : [];
      }
      function zh(e) {
        var r = e == null ? 0 : e.length;
        return r ? Ie(e, Se) : [];
      }
      function qh(e, r) {
        var o = e == null ? 0 : e.length;
        return o ? (r = r === t ? 1 : J(r), Ie(e, r)) : [];
      }
      function Uh(e) {
        for (var r = -1, o = e == null ? 0 : e.length, a = {}; ++r < o; ) {
          var h = e[r];
          a[h[0]] = h[1];
        }
        return a;
      }
      function Qs(e) {
        return e && e.length ? e[0] : t;
      }
      function Hh(e, r, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var h = o == null ? 0 : J(o);
        return h < 0 && (h = we(a + h, 0)), kt(e, r, h);
      }
      function $h(e) {
        var r = e == null ? 0 : e.length;
        return r ? lu(e, 0, -1) : [];
      }
      var Wh = V(function(e) {
        var r = le(e, Ii);
        return r.length && r[0] === e[0] ? vi(r) : [];
      }), Gh = V(function(e) {
        var r = hu(e), o = le(e, Ii);
        return r === hu(o) ? r = t : o.pop(), o.length && o[0] === e[0] ? vi(o, $(r, 2)) : [];
      }), Zh = V(function(e) {
        var r = hu(e), o = le(e, Ii);
        return r = typeof r == "function" ? r : t, r && o.pop(), o.length && o[0] === e[0] ? vi(o, t, r) : [];
      });
      function jh(e, r) {
        return e == null ? "" : $l.call(e, r);
      }
      function hu(e) {
        var r = e == null ? 0 : e.length;
        return r ? e[r - 1] : t;
      }
      function Kh(e, r, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var h = a;
        return o !== t && (h = J(o), h = h < 0 ? we(a + h, 0) : Ne(h, a - 1)), r === r ? kl(e, r, h) : Mn(e, Ro, h, !0);
      }
      function Jh(e, r) {
        return e && e.length ? fs(e, J(r)) : t;
      }
      var Yh = V(ec);
      function ec(e, r) {
        return e && e.length && r && r.length ? Ci(e, r) : e;
      }
      function Vh(e, r, o) {
        return e && e.length && r && r.length ? Ci(e, r, $(o, 2)) : e;
      }
      function Xh(e, r, o) {
        return e && e.length && r && r.length ? Ci(e, r, t, o) : e;
      }
      var Qh = qu(function(e, r) {
        var o = e == null ? 0 : e.length, a = gi(e, r);
        return ds(e, le(r, function(h) {
          return Uu(h, o) ? +h : h;
        }).sort(Es)), a;
      });
      function ed(e, r) {
        var o = [];
        if (!(e && e.length))
          return o;
        var a = -1, h = [], b = e.length;
        for (r = $(r, 3); ++a < b; ) {
          var m = e[a];
          r(m, a, e) && (o.push(m), h.push(a));
        }
        return ds(e, h), o;
      }
      function Gi(e) {
        return e == null ? e : jl.call(e);
      }
      function ud(e, r, o) {
        var a = e == null ? 0 : e.length;
        return a ? (o && typeof o != "number" && Be(e, r, o) ? (r = 0, o = a) : (r = r == null ? 0 : J(r), o = o === t ? a : J(o)), lu(e, r, o)) : [];
      }
      function td(e, r) {
        return tr(e, r);
      }
      function nd(e, r, o) {
        return Fi(e, r, $(o, 2));
      }
      function rd(e, r) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = tr(e, r);
          if (a < o && wu(e[a], r))
            return a;
        }
        return -1;
      }
      function id(e, r) {
        return tr(e, r, !0);
      }
      function od(e, r, o) {
        return Fi(e, r, $(o, 2), !0);
      }
      function sd(e, r) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = tr(e, r, !0) - 1;
          if (wu(e[a], r))
            return a;
        }
        return -1;
      }
      function cd(e) {
        return e && e.length ? bs(e) : [];
      }
      function ad(e, r) {
        return e && e.length ? bs(e, $(r, 2)) : [];
      }
      function fd(e) {
        var r = e == null ? 0 : e.length;
        return r ? lu(e, 1, r) : [];
      }
      function ld(e, r, o) {
        return e && e.length ? (r = o || r === t ? 1 : J(r), lu(e, 0, r < 0 ? 0 : r)) : [];
      }
      function hd(e, r, o) {
        var a = e == null ? 0 : e.length;
        return a ? (r = o || r === t ? 1 : J(r), r = a - r, lu(e, r < 0 ? 0 : r, a)) : [];
      }
      function dd(e, r) {
        return e && e.length ? nr(e, $(r, 3), !1, !0) : [];
      }
      function pd(e, r) {
        return e && e.length ? nr(e, $(r, 3)) : [];
      }
      var bd = V(function(e) {
        return Vu(Ie(e, 1, _e, !0));
      }), _d = V(function(e) {
        var r = hu(e);
        return _e(r) && (r = t), Vu(Ie(e, 1, _e, !0), $(r, 2));
      }), gd = V(function(e) {
        var r = hu(e);
        return r = typeof r == "function" ? r : t, Vu(Ie(e, 1, _e, !0), t, r);
      });
      function md(e) {
        return e && e.length ? Vu(e) : [];
      }
      function xd(e, r) {
        return e && e.length ? Vu(e, $(r, 2)) : [];
      }
      function yd(e, r) {
        return r = typeof r == "function" ? r : t, e && e.length ? Vu(e, t, r) : [];
      }
      function Zi(e) {
        if (!(e && e.length))
          return [];
        var r = 0;
        return e = Zu(e, function(o) {
          if (_e(o))
            return r = we(o.length, r), !0;
        }), ai(r, function(o) {
          return le(e, oi(o));
        });
      }
      function uc(e, r) {
        if (!(e && e.length))
          return [];
        var o = Zi(e);
        return r == null ? o : le(o, function(a) {
          return Ke(r, t, a);
        });
      }
      var vd = V(function(e, r) {
        return _e(e) ? cn(e, r) : [];
      }), wd = V(function(e) {
        return Ti(Zu(e, _e));
      }), Ed = V(function(e) {
        var r = hu(e);
        return _e(r) && (r = t), Ti(Zu(e, _e), $(r, 2));
      }), Ad = V(function(e) {
        var r = hu(e);
        return r = typeof r == "function" ? r : t, Ti(Zu(e, _e), t, r);
      }), Cd = V(Zi);
      function Dd(e, r) {
        return xs(e || [], r || [], sn);
      }
      function kd(e, r) {
        return xs(e || [], r || [], ln);
      }
      var Fd = V(function(e) {
        var r = e.length, o = r > 1 ? e[r - 1] : t;
        return o = typeof o == "function" ? (e.pop(), o) : t, uc(e, o);
      });
      function tc(e) {
        var r = p(e);
        return r.__chain__ = !0, r;
      }
      function Sd(e, r) {
        return r(e), e;
      }
      function hr(e, r) {
        return r(e);
      }
      var Td = qu(function(e) {
        var r = e.length, o = r ? e[0] : 0, a = this.__wrapped__, h = function(b) {
          return gi(b, e);
        };
        return r > 1 || this.__actions__.length || !(a instanceof ee) || !Uu(o) ? this.thru(h) : (a = a.slice(o, +o + (r ? 1 : 0)), a.__actions__.push({
          func: hr,
          args: [h],
          thisArg: t
        }), new au(a, this.__chain__).thru(function(b) {
          return r && !b.length && b.push(t), b;
        }));
      });
      function Id() {
        return tc(this);
      }
      function Od() {
        return new au(this.value(), this.__chain__);
      }
      function Rd() {
        this.__values__ === t && (this.__values__ = _c(this.value()));
        var e = this.__index__ >= this.__values__.length, r = e ? t : this.__values__[this.__index__++];
        return { done: e, value: r };
      }
      function Nd() {
        return this;
      }
      function Ld(e) {
        for (var r, o = this; o instanceof Vn; ) {
          var a = Js(o);
          a.__index__ = 0, a.__values__ = t, r ? h.__wrapped__ = a : r = a;
          var h = a;
          o = o.__wrapped__;
        }
        return h.__wrapped__ = e, r;
      }
      function Md() {
        var e = this.__wrapped__;
        if (e instanceof ee) {
          var r = e;
          return this.__actions__.length && (r = new ee(this)), r = r.reverse(), r.__actions__.push({
            func: hr,
            args: [Gi],
            thisArg: t
          }), new au(r, this.__chain__);
        }
        return this.thru(Gi);
      }
      function Bd() {
        return ms(this.__wrapped__, this.__actions__);
      }
      var Pd = rr(function(e, r, o) {
        ie.call(e, o) ? ++e[o] : Pu(e, o, 1);
      });
      function zd(e, r, o) {
        var a = K(e) ? Io : S1;
        return o && Be(e, r, o) && (r = t), a(e, $(r, 3));
      }
      function qd(e, r) {
        var o = K(e) ? Zu : us;
        return o(e, $(r, 3));
      }
      var Ud = Ss(Ys), Hd = Ss(Vs);
      function $d(e, r) {
        return Ie(dr(e, r), 1);
      }
      function Wd(e, r) {
        return Ie(dr(e, r), Se);
      }
      function Gd(e, r, o) {
        return o = o === t ? 1 : J(o), Ie(dr(e, r), o);
      }
      function nc(e, r) {
        var o = K(e) ? su : Yu;
        return o(e, $(r, 3));
      }
      function rc(e, r) {
        var o = K(e) ? fl : es;
        return o(e, $(r, 3));
      }
      var Zd = rr(function(e, r, o) {
        ie.call(e, o) ? e[o].push(r) : Pu(e, o, [r]);
      });
      function jd(e, r, o, a) {
        e = He(e) ? e : zt(e), o = o && !a ? J(o) : 0;
        var h = e.length;
        return o < 0 && (o = we(h + o, 0)), mr(e) ? o <= h && e.indexOf(r, o) > -1 : !!h && kt(e, r, o) > -1;
      }
      var Kd = V(function(e, r, o) {
        var a = -1, h = typeof r == "function", b = He(e) ? D(e.length) : [];
        return Yu(e, function(m) {
          b[++a] = h ? Ke(r, m, o) : an(m, r, o);
        }), b;
      }), Jd = rr(function(e, r, o) {
        Pu(e, o, r);
      });
      function dr(e, r) {
        var o = K(e) ? le : ss;
        return o(e, $(r, 3));
      }
      function Yd(e, r, o, a) {
        return e == null ? [] : (K(r) || (r = r == null ? [] : [r]), o = a ? t : o, K(o) || (o = o == null ? [] : [o]), ls(e, r, o));
      }
      var Vd = rr(function(e, r, o) {
        e[o ? 0 : 1].push(r);
      }, function() {
        return [[], []];
      });
      function Xd(e, r, o) {
        var a = K(e) ? ri : Lo, h = arguments.length < 3;
        return a(e, $(r, 4), o, h, Yu);
      }
      function Qd(e, r, o) {
        var a = K(e) ? ll : Lo, h = arguments.length < 3;
        return a(e, $(r, 4), o, h, es);
      }
      function e2(e, r) {
        var o = K(e) ? Zu : us;
        return o(e, _r($(r, 3)));
      }
      function u2(e) {
        var r = K(e) ? Yo : j1;
        return r(e);
      }
      function t2(e, r, o) {
        (o ? Be(e, r, o) : r === t) ? r = 1 : r = J(r);
        var a = K(e) ? A1 : K1;
        return a(e, r);
      }
      function n2(e) {
        var r = K(e) ? C1 : Y1;
        return r(e);
      }
      function r2(e) {
        if (e == null)
          return 0;
        if (He(e))
          return mr(e) ? St(e) : e.length;
        var r = Le(e);
        return r == mu || r == xu ? e.size : Ei(e).length;
      }
      function i2(e, r, o) {
        var a = K(e) ? ii : V1;
        return o && Be(e, r, o) && (r = t), a(e, $(r, 3));
      }
      var o2 = V(function(e, r) {
        if (e == null)
          return [];
        var o = r.length;
        return o > 1 && Be(e, r[0], r[1]) ? r = [] : o > 2 && Be(r[0], r[1], r[2]) && (r = [r[0]]), ls(e, Ie(r, 1), []);
      }), pr = ql || function() {
        return Te.Date.now();
      };
      function s2(e, r) {
        if (typeof r != "function")
          throw new cu(f);
        return e = J(e), function() {
          if (--e < 1)
            return r.apply(this, arguments);
        };
      }
      function ic(e, r, o) {
        return r = o ? t : r, r = e && r == null ? e.length : r, zu(e, Q, t, t, t, t, r);
      }
      function oc(e, r) {
        var o;
        if (typeof r != "function")
          throw new cu(f);
        return e = J(e), function() {
          return --e > 0 && (o = r.apply(this, arguments)), e <= 1 && (r = t), o;
        };
      }
      var ji = V(function(e, r, o) {
        var a = N;
        if (o.length) {
          var h = Ku(o, Bt(ji));
          a |= z;
        }
        return zu(e, a, r, o, h);
      }), sc = V(function(e, r, o) {
        var a = N | H;
        if (o.length) {
          var h = Ku(o, Bt(sc));
          a |= z;
        }
        return zu(r, a, e, o, h);
      });
      function cc(e, r, o) {
        r = o ? t : r;
        var a = zu(e, B, t, t, t, t, t, r);
        return a.placeholder = cc.placeholder, a;
      }
      function ac(e, r, o) {
        r = o ? t : r;
        var a = zu(e, R, t, t, t, t, t, r);
        return a.placeholder = ac.placeholder, a;
      }
      function fc(e, r, o) {
        var a, h, b, m, x, E, S = 0, T = !1, I = !1, L = !0;
        if (typeof e != "function")
          throw new cu(f);
        r = du(r) || 0, he(o) && (T = !!o.leading, I = "maxWait" in o, b = I ? we(du(o.maxWait) || 0, r) : b, L = "trailing" in o ? !!o.trailing : L);
        function U(ge) {
          var Eu = a, Wu = h;
          return a = h = t, S = ge, m = e.apply(Wu, Eu), m;
        }
        function W(ge) {
          return S = ge, x = pn(X, r), T ? U(ge) : m;
        }
        function Y(ge) {
          var Eu = ge - E, Wu = ge - S, Sc = r - Eu;
          return I ? Ne(Sc, b - Wu) : Sc;
        }
        function G(ge) {
          var Eu = ge - E, Wu = ge - S;
          return E === t || Eu >= r || Eu < 0 || I && Wu >= b;
        }
        function X() {
          var ge = pr();
          if (G(ge))
            return ue(ge);
          x = pn(X, Y(ge));
        }
        function ue(ge) {
          return x = t, L && a ? U(ge) : (a = h = t, m);
        }
        function Xe() {
          x !== t && ys(x), S = 0, a = E = h = x = t;
        }
        function Pe() {
          return x === t ? m : ue(pr());
        }
        function Qe() {
          var ge = pr(), Eu = G(ge);
          if (a = arguments, h = this, E = ge, Eu) {
            if (x === t)
              return W(E);
            if (I)
              return ys(x), x = pn(X, r), U(E);
          }
          return x === t && (x = pn(X, r)), m;
        }
        return Qe.cancel = Xe, Qe.flush = Pe, Qe;
      }
      var c2 = V(function(e, r) {
        return Qo(e, 1, r);
      }), a2 = V(function(e, r, o) {
        return Qo(e, du(r) || 0, o);
      });
      function f2(e) {
        return zu(e, ye);
      }
      function br(e, r) {
        if (typeof e != "function" || r != null && typeof r != "function")
          throw new cu(f);
        var o = function() {
          var a = arguments, h = r ? r.apply(this, a) : a[0], b = o.cache;
          if (b.has(h))
            return b.get(h);
          var m = e.apply(this, a);
          return o.cache = b.set(h, m) || b, m;
        };
        return o.cache = new (br.Cache || Bu)(), o;
      }
      br.Cache = Bu;
      function _r(e) {
        if (typeof e != "function")
          throw new cu(f);
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, r[0]);
            case 2:
              return !e.call(this, r[0], r[1]);
            case 3:
              return !e.call(this, r[0], r[1], r[2]);
          }
          return !e.apply(this, r);
        };
      }
      function l2(e) {
        return oc(2, e);
      }
      var h2 = X1(function(e, r) {
        r = r.length == 1 && K(r[0]) ? le(r[0], Je($())) : le(Ie(r, 1), Je($()));
        var o = r.length;
        return V(function(a) {
          for (var h = -1, b = Ne(a.length, o); ++h < b; )
            a[h] = r[h].call(this, a[h]);
          return Ke(e, this, a);
        });
      }), Ki = V(function(e, r) {
        var o = Ku(r, Bt(Ki));
        return zu(e, z, t, r, o);
      }), lc = V(function(e, r) {
        var o = Ku(r, Bt(lc));
        return zu(e, Z, t, r, o);
      }), d2 = qu(function(e, r) {
        return zu(e, ae, t, t, t, r);
      });
      function p2(e, r) {
        if (typeof e != "function")
          throw new cu(f);
        return r = r === t ? r : J(r), V(e, r);
      }
      function b2(e, r) {
        if (typeof e != "function")
          throw new cu(f);
        return r = r == null ? 0 : we(J(r), 0), V(function(o) {
          var a = o[r], h = Qu(o, 0, r);
          return a && ju(h, a), Ke(e, this, h);
        });
      }
      function _2(e, r, o) {
        var a = !0, h = !0;
        if (typeof e != "function")
          throw new cu(f);
        return he(o) && (a = "leading" in o ? !!o.leading : a, h = "trailing" in o ? !!o.trailing : h), fc(e, r, {
          leading: a,
          maxWait: r,
          trailing: h
        });
      }
      function g2(e) {
        return ic(e, 1);
      }
      function m2(e, r) {
        return Ki(Oi(r), e);
      }
      function x2() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return K(e) ? e : [e];
      }
      function y2(e) {
        return fu(e, C);
      }
      function v2(e, r) {
        return r = typeof r == "function" ? r : t, fu(e, C, r);
      }
      function w2(e) {
        return fu(e, A | C);
      }
      function E2(e, r) {
        return r = typeof r == "function" ? r : t, fu(e, A | C, r);
      }
      function A2(e, r) {
        return r == null || Xo(e, r, Ae(r));
      }
      function wu(e, r) {
        return e === r || e !== e && r !== r;
      }
      var C2 = cr(yi), D2 = cr(function(e, r) {
        return e >= r;
      }), vt = rs(/* @__PURE__ */ function() {
        return arguments;
      }()) ? rs : function(e) {
        return de(e) && ie.call(e, "callee") && !Wo.call(e, "callee");
      }, K = D.isArray, k2 = Co ? Je(Co) : L1;
      function He(e) {
        return e != null && gr(e.length) && !Hu(e);
      }
      function _e(e) {
        return de(e) && He(e);
      }
      function F2(e) {
        return e === !0 || e === !1 || de(e) && Me(e) == lt;
      }
      var et = Hl || i0, S2 = Do ? Je(Do) : M1;
      function T2(e) {
        return de(e) && e.nodeType === 1 && !bn(e);
      }
      function I2(e) {
        if (e == null)
          return !0;
        if (He(e) && (K(e) || typeof e == "string" || typeof e.splice == "function" || et(e) || Pt(e) || vt(e)))
          return !e.length;
        var r = Le(e);
        if (r == mu || r == xu)
          return !e.size;
        if (dn(e))
          return !Ei(e).length;
        for (var o in e)
          if (ie.call(e, o))
            return !1;
        return !0;
      }
      function O2(e, r) {
        return fn(e, r);
      }
      function R2(e, r, o) {
        o = typeof o == "function" ? o : t;
        var a = o ? o(e, r) : t;
        return a === t ? fn(e, r, t, o) : !!a;
      }
      function Ji(e) {
        if (!de(e))
          return !1;
        var r = Me(e);
        return r == Sn || r == uf || typeof e.message == "string" && typeof e.name == "string" && !bn(e);
      }
      function N2(e) {
        return typeof e == "number" && Zo(e);
      }
      function Hu(e) {
        if (!he(e))
          return !1;
        var r = Me(e);
        return r == Tn || r == X0 || r == Fn || r == nf;
      }
      function hc(e) {
        return typeof e == "number" && e == J(e);
      }
      function gr(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= je;
      }
      function he(e) {
        var r = typeof e;
        return e != null && (r == "object" || r == "function");
      }
      function de(e) {
        return e != null && typeof e == "object";
      }
      var dc = ko ? Je(ko) : P1;
      function L2(e, r) {
        return e === r || wi(e, r, zi(r));
      }
      function M2(e, r, o) {
        return o = typeof o == "function" ? o : t, wi(e, r, zi(r), o);
      }
      function B2(e) {
        return pc(e) && e != +e;
      }
      function P2(e) {
        if (vh(e))
          throw new j(c);
        return is(e);
      }
      function z2(e) {
        return e === null;
      }
      function q2(e) {
        return e == null;
      }
      function pc(e) {
        return typeof e == "number" || de(e) && Me(e) == Jt;
      }
      function bn(e) {
        if (!de(e) || Me(e) != Lu)
          return !1;
        var r = Wn(e);
        if (r === null)
          return !0;
        var o = ie.call(r, "constructor") && r.constructor;
        return typeof o == "function" && o instanceof o && qn.call(o) == Ml;
      }
      var Yi = Fo ? Je(Fo) : z1;
      function U2(e) {
        return hc(e) && e >= -je && e <= je;
      }
      var bc = So ? Je(So) : q1;
      function mr(e) {
        return typeof e == "string" || !K(e) && de(e) && Me(e) == Vt;
      }
      function Ve(e) {
        return typeof e == "symbol" || de(e) && Me(e) == In;
      }
      var Pt = To ? Je(To) : U1;
      function H2(e) {
        return e === t;
      }
      function $2(e) {
        return de(e) && Le(e) == Xt;
      }
      function W2(e) {
        return de(e) && Me(e) == of;
      }
      var G2 = cr(Ai), Z2 = cr(function(e, r) {
        return e <= r;
      });
      function _c(e) {
        if (!e)
          return [];
        if (He(e))
          return mr(e) ? yu(e) : Ue(e);
        if (un && e[un])
          return Al(e[un]());
        var r = Le(e), o = r == mu ? li : r == xu ? Bn : zt;
        return o(e);
      }
      function $u(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = du(e), e === Se || e === -Se) {
          var r = e < 0 ? -1 : 1;
          return r * at;
        }
        return e === e ? e : 0;
      }
      function J(e) {
        var r = $u(e), o = r % 1;
        return r === r ? o ? r - o : r : 0;
      }
      function gc(e) {
        return e ? gt(J(e), 0, iu) : 0;
      }
      function du(e) {
        if (typeof e == "number")
          return e;
        if (Ve(e))
          return At;
        if (he(e)) {
          var r = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = he(r) ? r + "" : r;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Mo(e);
        var o = kf.test(e);
        return o || Sf.test(e) ? sl(e.slice(2), o ? 2 : 8) : Df.test(e) ? At : +e;
      }
      function mc(e) {
        return Fu(e, $e(e));
      }
      function j2(e) {
        return e ? gt(J(e), -je, je) : e === 0 ? e : 0;
      }
      function re(e) {
        return e == null ? "" : Ye(e);
      }
      var K2 = Lt(function(e, r) {
        if (dn(r) || He(r)) {
          Fu(r, Ae(r), e);
          return;
        }
        for (var o in r)
          ie.call(r, o) && sn(e, o, r[o]);
      }), xc = Lt(function(e, r) {
        Fu(r, $e(r), e);
      }), xr = Lt(function(e, r, o, a) {
        Fu(r, $e(r), e, a);
      }), J2 = Lt(function(e, r, o, a) {
        Fu(r, Ae(r), e, a);
      }), Y2 = qu(gi);
      function V2(e, r) {
        var o = Nt(e);
        return r == null ? o : Vo(o, r);
      }
      var X2 = V(function(e, r) {
        e = oe(e);
        var o = -1, a = r.length, h = a > 2 ? r[2] : t;
        for (h && Be(r[0], r[1], h) && (a = 1); ++o < a; )
          for (var b = r[o], m = $e(b), x = -1, E = m.length; ++x < E; ) {
            var S = m[x], T = e[S];
            (T === t || wu(T, It[S]) && !ie.call(e, S)) && (e[S] = b[S]);
          }
        return e;
      }), Q2 = V(function(e) {
        return e.push(t, Ms), Ke(yc, t, e);
      });
      function ep(e, r) {
        return Oo(e, $(r, 3), ku);
      }
      function up(e, r) {
        return Oo(e, $(r, 3), xi);
      }
      function tp(e, r) {
        return e == null ? e : mi(e, $(r, 3), $e);
      }
      function np(e, r) {
        return e == null ? e : ts(e, $(r, 3), $e);
      }
      function rp(e, r) {
        return e && ku(e, $(r, 3));
      }
      function ip(e, r) {
        return e && xi(e, $(r, 3));
      }
      function op(e) {
        return e == null ? [] : er(e, Ae(e));
      }
      function sp(e) {
        return e == null ? [] : er(e, $e(e));
      }
      function Vi(e, r, o) {
        var a = e == null ? t : mt(e, r);
        return a === t ? o : a;
      }
      function cp(e, r) {
        return e != null && zs(e, r, I1);
      }
      function Xi(e, r) {
        return e != null && zs(e, r, O1);
      }
      var ap = Is(function(e, r, o) {
        r != null && typeof r.toString != "function" && (r = Un.call(r)), e[r] = o;
      }, e0(We)), fp = Is(function(e, r, o) {
        r != null && typeof r.toString != "function" && (r = Un.call(r)), ie.call(e, r) ? e[r].push(o) : e[r] = [o];
      }, $), lp = V(an);
      function Ae(e) {
        return He(e) ? Jo(e) : Ei(e);
      }
      function $e(e) {
        return He(e) ? Jo(e, !0) : H1(e);
      }
      function hp(e, r) {
        var o = {};
        return r = $(r, 3), ku(e, function(a, h, b) {
          Pu(o, r(a, h, b), a);
        }), o;
      }
      function dp(e, r) {
        var o = {};
        return r = $(r, 3), ku(e, function(a, h, b) {
          Pu(o, h, r(a, h, b));
        }), o;
      }
      var pp = Lt(function(e, r, o) {
        ur(e, r, o);
      }), yc = Lt(function(e, r, o, a) {
        ur(e, r, o, a);
      }), bp = qu(function(e, r) {
        var o = {};
        if (e == null)
          return o;
        var a = !1;
        r = le(r, function(b) {
          return b = Xu(b, e), a || (a = b.length > 1), b;
        }), Fu(e, Bi(e), o), a && (o = fu(o, A | F | C, ah));
        for (var h = r.length; h--; )
          Si(o, r[h]);
        return o;
      });
      function _p(e, r) {
        return vc(e, _r($(r)));
      }
      var gp = qu(function(e, r) {
        return e == null ? {} : W1(e, r);
      });
      function vc(e, r) {
        if (e == null)
          return {};
        var o = le(Bi(e), function(a) {
          return [a];
        });
        return r = $(r), hs(e, o, function(a, h) {
          return r(a, h[0]);
        });
      }
      function mp(e, r, o) {
        r = Xu(r, e);
        var a = -1, h = r.length;
        for (h || (h = 1, e = t); ++a < h; ) {
          var b = e == null ? t : e[Su(r[a])];
          b === t && (a = h, b = o), e = Hu(b) ? b.call(e) : b;
        }
        return e;
      }
      function xp(e, r, o) {
        return e == null ? e : ln(e, r, o);
      }
      function yp(e, r, o, a) {
        return a = typeof a == "function" ? a : t, e == null ? e : ln(e, r, o, a);
      }
      var wc = Ns(Ae), Ec = Ns($e);
      function vp(e, r, o) {
        var a = K(e), h = a || et(e) || Pt(e);
        if (r = $(r, 4), o == null) {
          var b = e && e.constructor;
          h ? o = a ? new b() : [] : he(e) ? o = Hu(b) ? Nt(Wn(e)) : {} : o = {};
        }
        return (h ? su : ku)(e, function(m, x, E) {
          return r(o, m, x, E);
        }), o;
      }
      function wp(e, r) {
        return e == null ? !0 : Si(e, r);
      }
      function Ep(e, r, o) {
        return e == null ? e : gs(e, r, Oi(o));
      }
      function Ap(e, r, o, a) {
        return a = typeof a == "function" ? a : t, e == null ? e : gs(e, r, Oi(o), a);
      }
      function zt(e) {
        return e == null ? [] : fi(e, Ae(e));
      }
      function Cp(e) {
        return e == null ? [] : fi(e, $e(e));
      }
      function Dp(e, r, o) {
        return o === t && (o = r, r = t), o !== t && (o = du(o), o = o === o ? o : 0), r !== t && (r = du(r), r = r === r ? r : 0), gt(du(e), r, o);
      }
      function kp(e, r, o) {
        return r = $u(r), o === t ? (o = r, r = 0) : o = $u(o), e = du(e), R1(e, r, o);
      }
      function Fp(e, r, o) {
        if (o && typeof o != "boolean" && Be(e, r, o) && (r = o = t), o === t && (typeof r == "boolean" ? (o = r, r = t) : typeof e == "boolean" && (o = e, e = t)), e === t && r === t ? (e = 0, r = 1) : (e = $u(e), r === t ? (r = e, e = 0) : r = $u(r)), e > r) {
          var a = e;
          e = r, r = a;
        }
        if (o || e % 1 || r % 1) {
          var h = jo();
          return Ne(e + h * (r - e + ol("1e-" + ((h + "").length - 1))), r);
        }
        return Di(e, r);
      }
      var Sp = Mt(function(e, r, o) {
        return r = r.toLowerCase(), e + (o ? Ac(r) : r);
      });
      function Ac(e) {
        return Qi(re(e).toLowerCase());
      }
      function Cc(e) {
        return e = re(e), e && e.replace(If, xl).replace(Yf, "");
      }
      function Tp(e, r, o) {
        e = re(e), r = Ye(r);
        var a = e.length;
        o = o === t ? a : gt(J(o), 0, a);
        var h = o;
        return o -= r.length, o >= 0 && e.slice(o, h) == r;
      }
      function Ip(e) {
        return e = re(e), e && lf.test(e) ? e.replace(uo, yl) : e;
      }
      function Op(e) {
        return e = re(e), e && gf.test(e) ? e.replace(Kr, "\\$&") : e;
      }
      var Rp = Mt(function(e, r, o) {
        return e + (o ? "-" : "") + r.toLowerCase();
      }), Np = Mt(function(e, r, o) {
        return e + (o ? " " : "") + r.toLowerCase();
      }), Lp = Fs("toLowerCase");
      function Mp(e, r, o) {
        e = re(e), r = J(r);
        var a = r ? St(e) : 0;
        if (!r || a >= r)
          return e;
        var h = (r - a) / 2;
        return sr(Kn(h), o) + e + sr(jn(h), o);
      }
      function Bp(e, r, o) {
        e = re(e), r = J(r);
        var a = r ? St(e) : 0;
        return r && a < r ? e + sr(r - a, o) : e;
      }
      function Pp(e, r, o) {
        e = re(e), r = J(r);
        var a = r ? St(e) : 0;
        return r && a < r ? sr(r - a, o) + e : e;
      }
      function zp(e, r, o) {
        return o || r == null ? r = 0 : r && (r = +r), Zl(re(e).replace(Jr, ""), r || 0);
      }
      function qp(e, r, o) {
        return (o ? Be(e, r, o) : r === t) ? r = 1 : r = J(r), ki(re(e), r);
      }
      function Up() {
        var e = arguments, r = re(e[0]);
        return e.length < 3 ? r : r.replace(e[1], e[2]);
      }
      var Hp = Mt(function(e, r, o) {
        return e + (o ? "_" : "") + r.toLowerCase();
      });
      function $p(e, r, o) {
        return o && typeof o != "number" && Be(e, r, o) && (r = o = t), o = o === t ? iu : o >>> 0, o ? (e = re(e), e && (typeof r == "string" || r != null && !Yi(r)) && (r = Ye(r), !r && Ft(e)) ? Qu(yu(e), 0, o) : e.split(r, o)) : [];
      }
      var Wp = Mt(function(e, r, o) {
        return e + (o ? " " : "") + Qi(r);
      });
      function Gp(e, r, o) {
        return e = re(e), o = o == null ? 0 : gt(J(o), 0, e.length), r = Ye(r), e.slice(o, o + r.length) == r;
      }
      function Zp(e, r, o) {
        var a = p.templateSettings;
        o && Be(e, r, o) && (r = t), e = re(e), r = xr({}, r, a, Ls);
        var h = xr({}, r.imports, a.imports, Ls), b = Ae(h), m = fi(h, b), x, E, S = 0, T = r.interpolate || On, I = "__p += '", L = hi(
          (r.escape || On).source + "|" + T.source + "|" + (T === to ? Cf : On).source + "|" + (r.evaluate || On).source + "|$",
          "g"
        ), U = "//# sourceURL=" + (ie.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ul + "]") + `
`;
        e.replace(L, function(G, X, ue, Xe, Pe, Qe) {
          return ue || (ue = Xe), I += e.slice(S, Qe).replace(Of, vl), X && (x = !0, I += `' +
__e(` + X + `) +
'`), Pe && (E = !0, I += `';
` + Pe + `;
__p += '`), ue && (I += `' +
((__t = (` + ue + `)) == null ? '' : __t) +
'`), S = Qe + G.length, G;
        }), I += `';
`;
        var W = ie.call(r, "variable") && r.variable;
        if (!W)
          I = `with (obj) {
` + I + `
}
`;
        else if (Ef.test(W))
          throw new j(l);
        I = (E ? I.replace(sf, "") : I).replace(cf, "$1").replace(af, "$1;"), I = "function(" + (W || "obj") + `) {
` + (W ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + I + `return __p
}`;
        var Y = kc(function() {
          return ne(b, U + "return " + I).apply(t, m);
        });
        if (Y.source = I, Ji(Y))
          throw Y;
        return Y;
      }
      function jp(e) {
        return re(e).toLowerCase();
      }
      function Kp(e) {
        return re(e).toUpperCase();
      }
      function Jp(e, r, o) {
        if (e = re(e), e && (o || r === t))
          return Mo(e);
        if (!e || !(r = Ye(r)))
          return e;
        var a = yu(e), h = yu(r), b = Bo(a, h), m = Po(a, h) + 1;
        return Qu(a, b, m).join("");
      }
      function Yp(e, r, o) {
        if (e = re(e), e && (o || r === t))
          return e.slice(0, qo(e) + 1);
        if (!e || !(r = Ye(r)))
          return e;
        var a = yu(e), h = Po(a, yu(r)) + 1;
        return Qu(a, 0, h).join("");
      }
      function Vp(e, r, o) {
        if (e = re(e), e && (o || r === t))
          return e.replace(Jr, "");
        if (!e || !(r = Ye(r)))
          return e;
        var a = yu(e), h = Bo(a, yu(r));
        return Qu(a, h).join("");
      }
      function Xp(e, r) {
        var o = qe, a = nu;
        if (he(r)) {
          var h = "separator" in r ? r.separator : h;
          o = "length" in r ? J(r.length) : o, a = "omission" in r ? Ye(r.omission) : a;
        }
        e = re(e);
        var b = e.length;
        if (Ft(e)) {
          var m = yu(e);
          b = m.length;
        }
        if (o >= b)
          return e;
        var x = o - St(a);
        if (x < 1)
          return a;
        var E = m ? Qu(m, 0, x).join("") : e.slice(0, x);
        if (h === t)
          return E + a;
        if (m && (x += E.length - x), Yi(h)) {
          if (e.slice(x).search(h)) {
            var S, T = E;
            for (h.global || (h = hi(h.source, re(no.exec(h)) + "g")), h.lastIndex = 0; S = h.exec(T); )
              var I = S.index;
            E = E.slice(0, I === t ? x : I);
          }
        } else if (e.indexOf(Ye(h), x) != x) {
          var L = E.lastIndexOf(h);
          L > -1 && (E = E.slice(0, L));
        }
        return E + a;
      }
      function Qp(e) {
        return e = re(e), e && ff.test(e) ? e.replace(eo, Fl) : e;
      }
      var e3 = Mt(function(e, r, o) {
        return e + (o ? " " : "") + r.toUpperCase();
      }), Qi = Fs("toUpperCase");
      function Dc(e, r, o) {
        return e = re(e), r = o ? t : r, r === t ? El(e) ? Il(e) : pl(e) : e.match(r) || [];
      }
      var kc = V(function(e, r) {
        try {
          return Ke(e, t, r);
        } catch (o) {
          return Ji(o) ? o : new j(o);
        }
      }), u3 = qu(function(e, r) {
        return su(r, function(o) {
          o = Su(o), Pu(e, o, ji(e[o], e));
        }), e;
      });
      function t3(e) {
        var r = e == null ? 0 : e.length, o = $();
        return e = r ? le(e, function(a) {
          if (typeof a[1] != "function")
            throw new cu(f);
          return [o(a[0]), a[1]];
        }) : [], V(function(a) {
          for (var h = -1; ++h < r; ) {
            var b = e[h];
            if (Ke(b[0], this, a))
              return Ke(b[1], this, a);
          }
        });
      }
      function n3(e) {
        return F1(fu(e, A));
      }
      function e0(e) {
        return function() {
          return e;
        };
      }
      function r3(e, r) {
        return e == null || e !== e ? r : e;
      }
      var i3 = Ts(), o3 = Ts(!0);
      function We(e) {
        return e;
      }
      function u0(e) {
        return os(typeof e == "function" ? e : fu(e, A));
      }
      function s3(e) {
        return cs(fu(e, A));
      }
      function c3(e, r) {
        return as(e, fu(r, A));
      }
      var a3 = V(function(e, r) {
        return function(o) {
          return an(o, e, r);
        };
      }), f3 = V(function(e, r) {
        return function(o) {
          return an(e, o, r);
        };
      });
      function t0(e, r, o) {
        var a = Ae(r), h = er(r, a);
        o == null && !(he(r) && (h.length || !a.length)) && (o = r, r = e, e = this, h = er(r, Ae(r)));
        var b = !(he(o) && "chain" in o) || !!o.chain, m = Hu(e);
        return su(h, function(x) {
          var E = r[x];
          e[x] = E, m && (e.prototype[x] = function() {
            var S = this.__chain__;
            if (b || S) {
              var T = e(this.__wrapped__), I = T.__actions__ = Ue(this.__actions__);
              return I.push({ func: E, args: arguments, thisArg: e }), T.__chain__ = S, T;
            }
            return E.apply(e, ju([this.value()], arguments));
          });
        }), e;
      }
      function l3() {
        return Te._ === this && (Te._ = Bl), this;
      }
      function n0() {
      }
      function h3(e) {
        return e = J(e), V(function(r) {
          return fs(r, e);
        });
      }
      var d3 = Ni(le), p3 = Ni(Io), b3 = Ni(ii);
      function Fc(e) {
        return Ui(e) ? oi(Su(e)) : G1(e);
      }
      function _3(e) {
        return function(r) {
          return e == null ? t : mt(e, r);
        };
      }
      var g3 = Os(), m3 = Os(!0);
      function r0() {
        return [];
      }
      function i0() {
        return !1;
      }
      function x3() {
        return {};
      }
      function y3() {
        return "";
      }
      function v3() {
        return !0;
      }
      function w3(e, r) {
        if (e = J(e), e < 1 || e > je)
          return [];
        var o = iu, a = Ne(e, iu);
        r = $(r), e -= iu;
        for (var h = ai(a, r); ++o < e; )
          r(o);
        return h;
      }
      function E3(e) {
        return K(e) ? le(e, Su) : Ve(e) ? [e] : Ue(Ks(re(e)));
      }
      function A3(e) {
        var r = ++Ll;
        return re(e) + r;
      }
      var C3 = or(function(e, r) {
        return e + r;
      }, 0), D3 = Li("ceil"), k3 = or(function(e, r) {
        return e / r;
      }, 1), F3 = Li("floor");
      function S3(e) {
        return e && e.length ? Qn(e, We, yi) : t;
      }
      function T3(e, r) {
        return e && e.length ? Qn(e, $(r, 2), yi) : t;
      }
      function I3(e) {
        return No(e, We);
      }
      function O3(e, r) {
        return No(e, $(r, 2));
      }
      function R3(e) {
        return e && e.length ? Qn(e, We, Ai) : t;
      }
      function N3(e, r) {
        return e && e.length ? Qn(e, $(r, 2), Ai) : t;
      }
      var L3 = or(function(e, r) {
        return e * r;
      }, 1), M3 = Li("round"), B3 = or(function(e, r) {
        return e - r;
      }, 0);
      function P3(e) {
        return e && e.length ? ci(e, We) : 0;
      }
      function z3(e, r) {
        return e && e.length ? ci(e, $(r, 2)) : 0;
      }
      return p.after = s2, p.ary = ic, p.assign = K2, p.assignIn = xc, p.assignInWith = xr, p.assignWith = J2, p.at = Y2, p.before = oc, p.bind = ji, p.bindAll = u3, p.bindKey = sc, p.castArray = x2, p.chain = tc, p.chunk = Fh, p.compact = Sh, p.concat = Th, p.cond = t3, p.conforms = n3, p.constant = e0, p.countBy = Pd, p.create = V2, p.curry = cc, p.curryRight = ac, p.debounce = fc, p.defaults = X2, p.defaultsDeep = Q2, p.defer = c2, p.delay = a2, p.difference = Ih, p.differenceBy = Oh, p.differenceWith = Rh, p.drop = Nh, p.dropRight = Lh, p.dropRightWhile = Mh, p.dropWhile = Bh, p.fill = Ph, p.filter = qd, p.flatMap = $d, p.flatMapDeep = Wd, p.flatMapDepth = Gd, p.flatten = Xs, p.flattenDeep = zh, p.flattenDepth = qh, p.flip = f2, p.flow = i3, p.flowRight = o3, p.fromPairs = Uh, p.functions = op, p.functionsIn = sp, p.groupBy = Zd, p.initial = $h, p.intersection = Wh, p.intersectionBy = Gh, p.intersectionWith = Zh, p.invert = ap, p.invertBy = fp, p.invokeMap = Kd, p.iteratee = u0, p.keyBy = Jd, p.keys = Ae, p.keysIn = $e, p.map = dr, p.mapKeys = hp, p.mapValues = dp, p.matches = s3, p.matchesProperty = c3, p.memoize = br, p.merge = pp, p.mergeWith = yc, p.method = a3, p.methodOf = f3, p.mixin = t0, p.negate = _r, p.nthArg = h3, p.omit = bp, p.omitBy = _p, p.once = l2, p.orderBy = Yd, p.over = d3, p.overArgs = h2, p.overEvery = p3, p.overSome = b3, p.partial = Ki, p.partialRight = lc, p.partition = Vd, p.pick = gp, p.pickBy = vc, p.property = Fc, p.propertyOf = _3, p.pull = Yh, p.pullAll = ec, p.pullAllBy = Vh, p.pullAllWith = Xh, p.pullAt = Qh, p.range = g3, p.rangeRight = m3, p.rearg = d2, p.reject = e2, p.remove = ed, p.rest = p2, p.reverse = Gi, p.sampleSize = t2, p.set = xp, p.setWith = yp, p.shuffle = n2, p.slice = ud, p.sortBy = o2, p.sortedUniq = cd, p.sortedUniqBy = ad, p.split = $p, p.spread = b2, p.tail = fd, p.take = ld, p.takeRight = hd, p.takeRightWhile = dd, p.takeWhile = pd, p.tap = Sd, p.throttle = _2, p.thru = hr, p.toArray = _c, p.toPairs = wc, p.toPairsIn = Ec, p.toPath = E3, p.toPlainObject = mc, p.transform = vp, p.unary = g2, p.union = bd, p.unionBy = _d, p.unionWith = gd, p.uniq = md, p.uniqBy = xd, p.uniqWith = yd, p.unset = wp, p.unzip = Zi, p.unzipWith = uc, p.update = Ep, p.updateWith = Ap, p.values = zt, p.valuesIn = Cp, p.without = vd, p.words = Dc, p.wrap = m2, p.xor = wd, p.xorBy = Ed, p.xorWith = Ad, p.zip = Cd, p.zipObject = Dd, p.zipObjectDeep = kd, p.zipWith = Fd, p.entries = wc, p.entriesIn = Ec, p.extend = xc, p.extendWith = xr, t0(p, p), p.add = C3, p.attempt = kc, p.camelCase = Sp, p.capitalize = Ac, p.ceil = D3, p.clamp = Dp, p.clone = y2, p.cloneDeep = w2, p.cloneDeepWith = E2, p.cloneWith = v2, p.conformsTo = A2, p.deburr = Cc, p.defaultTo = r3, p.divide = k3, p.endsWith = Tp, p.eq = wu, p.escape = Ip, p.escapeRegExp = Op, p.every = zd, p.find = Ud, p.findIndex = Ys, p.findKey = ep, p.findLast = Hd, p.findLastIndex = Vs, p.findLastKey = up, p.floor = F3, p.forEach = nc, p.forEachRight = rc, p.forIn = tp, p.forInRight = np, p.forOwn = rp, p.forOwnRight = ip, p.get = Vi, p.gt = C2, p.gte = D2, p.has = cp, p.hasIn = Xi, p.head = Qs, p.identity = We, p.includes = jd, p.indexOf = Hh, p.inRange = kp, p.invoke = lp, p.isArguments = vt, p.isArray = K, p.isArrayBuffer = k2, p.isArrayLike = He, p.isArrayLikeObject = _e, p.isBoolean = F2, p.isBuffer = et, p.isDate = S2, p.isElement = T2, p.isEmpty = I2, p.isEqual = O2, p.isEqualWith = R2, p.isError = Ji, p.isFinite = N2, p.isFunction = Hu, p.isInteger = hc, p.isLength = gr, p.isMap = dc, p.isMatch = L2, p.isMatchWith = M2, p.isNaN = B2, p.isNative = P2, p.isNil = q2, p.isNull = z2, p.isNumber = pc, p.isObject = he, p.isObjectLike = de, p.isPlainObject = bn, p.isRegExp = Yi, p.isSafeInteger = U2, p.isSet = bc, p.isString = mr, p.isSymbol = Ve, p.isTypedArray = Pt, p.isUndefined = H2, p.isWeakMap = $2, p.isWeakSet = W2, p.join = jh, p.kebabCase = Rp, p.last = hu, p.lastIndexOf = Kh, p.lowerCase = Np, p.lowerFirst = Lp, p.lt = G2, p.lte = Z2, p.max = S3, p.maxBy = T3, p.mean = I3, p.meanBy = O3, p.min = R3, p.minBy = N3, p.stubArray = r0, p.stubFalse = i0, p.stubObject = x3, p.stubString = y3, p.stubTrue = v3, p.multiply = L3, p.nth = Jh, p.noConflict = l3, p.noop = n0, p.now = pr, p.pad = Mp, p.padEnd = Bp, p.padStart = Pp, p.parseInt = zp, p.random = Fp, p.reduce = Xd, p.reduceRight = Qd, p.repeat = qp, p.replace = Up, p.result = mp, p.round = M3, p.runInContext = v, p.sample = u2, p.size = r2, p.snakeCase = Hp, p.some = i2, p.sortedIndex = td, p.sortedIndexBy = nd, p.sortedIndexOf = rd, p.sortedLastIndex = id, p.sortedLastIndexBy = od, p.sortedLastIndexOf = sd, p.startCase = Wp, p.startsWith = Gp, p.subtract = B3, p.sum = P3, p.sumBy = z3, p.template = Zp, p.times = w3, p.toFinite = $u, p.toInteger = J, p.toLength = gc, p.toLower = jp, p.toNumber = du, p.toSafeInteger = j2, p.toString = re, p.toUpper = Kp, p.trim = Jp, p.trimEnd = Yp, p.trimStart = Vp, p.truncate = Xp, p.unescape = Qp, p.uniqueId = A3, p.upperCase = e3, p.upperFirst = Qi, p.each = nc, p.eachRight = rc, p.first = Qs, t0(p, function() {
        var e = {};
        return ku(p, function(r, o) {
          ie.call(p.prototype, o) || (e[o] = r);
        }), e;
      }(), { chain: !1 }), p.VERSION = i, su(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), su(["drop", "take"], function(e, r) {
        ee.prototype[e] = function(o) {
          o = o === t ? 1 : we(J(o), 0);
          var a = this.__filtered__ && !r ? new ee(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = Ne(o, a.__takeCount__) : a.__views__.push({
            size: Ne(o, iu),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, ee.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), su(["filter", "map", "takeWhile"], function(e, r) {
        var o = r + 1, a = o == ru || o == Fe;
        ee.prototype[e] = function(h) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: $(h, 3),
            type: o
          }), b.__filtered__ = b.__filtered__ || a, b;
        };
      }), su(["head", "last"], function(e, r) {
        var o = "take" + (r ? "Right" : "");
        ee.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), su(["initial", "tail"], function(e, r) {
        var o = "drop" + (r ? "" : "Right");
        ee.prototype[e] = function() {
          return this.__filtered__ ? new ee(this) : this[o](1);
        };
      }), ee.prototype.compact = function() {
        return this.filter(We);
      }, ee.prototype.find = function(e) {
        return this.filter(e).head();
      }, ee.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ee.prototype.invokeMap = V(function(e, r) {
        return typeof e == "function" ? new ee(this) : this.map(function(o) {
          return an(o, e, r);
        });
      }), ee.prototype.reject = function(e) {
        return this.filter(_r($(e)));
      }, ee.prototype.slice = function(e, r) {
        e = J(e);
        var o = this;
        return o.__filtered__ && (e > 0 || r < 0) ? new ee(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), r !== t && (r = J(r), o = r < 0 ? o.dropRight(-r) : o.take(r - e)), o);
      }, ee.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ee.prototype.toArray = function() {
        return this.take(iu);
      }, ku(ee.prototype, function(e, r) {
        var o = /^(?:filter|find|map|reject)|While$/.test(r), a = /^(?:head|last)$/.test(r), h = p[a ? "take" + (r == "last" ? "Right" : "") : r], b = a || /^find/.test(r);
        h && (p.prototype[r] = function() {
          var m = this.__wrapped__, x = a ? [1] : arguments, E = m instanceof ee, S = x[0], T = E || K(m), I = function(X) {
            var ue = h.apply(p, ju([X], x));
            return a && L ? ue[0] : ue;
          };
          T && o && typeof S == "function" && S.length != 1 && (E = T = !1);
          var L = this.__chain__, U = !!this.__actions__.length, W = b && !L, Y = E && !U;
          if (!b && T) {
            m = Y ? m : new ee(this);
            var G = e.apply(m, x);
            return G.__actions__.push({ func: hr, args: [I], thisArg: t }), new au(G, L);
          }
          return W && Y ? e.apply(this, x) : (G = this.thru(I), W ? a ? G.value()[0] : G.value() : G);
        });
      }), su(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var r = Pn[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var h = arguments;
          if (a && !this.__chain__) {
            var b = this.value();
            return r.apply(K(b) ? b : [], h);
          }
          return this[o](function(m) {
            return r.apply(K(m) ? m : [], h);
          });
        };
      }), ku(ee.prototype, function(e, r) {
        var o = p[r];
        if (o) {
          var a = o.name + "";
          ie.call(Rt, a) || (Rt[a] = []), Rt[a].push({ name: r, func: o });
        }
      }), Rt[ir(t, H).name] = [{
        name: "wrapper",
        func: t
      }], ee.prototype.clone = Ql, ee.prototype.reverse = e1, ee.prototype.value = u1, p.prototype.at = Td, p.prototype.chain = Id, p.prototype.commit = Od, p.prototype.next = Rd, p.prototype.plant = Ld, p.prototype.reverse = Md, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = Bd, p.prototype.first = p.prototype.head, un && (p.prototype[un] = Nd), p;
    }, Tt = Ol();
    dt ? ((dt.exports = Tt)._ = Tt, ui._ = Tt) : Te._ = Tt;
  }).call(H3);
})(Fr, Fr.exports);
var $3 = Fr.exports;
const Sr = /* @__PURE__ */ Xc($3), Tc = {};
function W3(u) {
  let n = Tc[u];
  if (n)
    return n;
  n = Tc[u] = [];
  for (let t = 0; t < 128; t++) {
    const i = String.fromCharCode(t);
    n.push(i);
  }
  for (let t = 0; t < u.length; t++) {
    const i = u.charCodeAt(t);
    n[i] = "%" + ("0" + i.toString(16).toUpperCase()).slice(-2);
  }
  return n;
}
function Gt(u, n) {
  typeof n != "string" && (n = Gt.defaultChars);
  const t = W3(n);
  return u.replace(/(%[a-f0-9]{2})+/gi, function(i) {
    let s = "";
    for (let c = 0, f = i.length; c < f; c += 3) {
      const l = parseInt(i.slice(c + 1, c + 3), 16);
      if (l < 128) {
        s += t[l];
        continue;
      }
      if ((l & 224) === 192 && c + 3 < f) {
        const d = parseInt(i.slice(c + 4, c + 6), 16);
        if ((d & 192) === 128) {
          const _ = l << 6 & 1984 | d & 63;
          _ < 128 ? s += "��" : s += String.fromCharCode(_), c += 3;
          continue;
        }
      }
      if ((l & 240) === 224 && c + 6 < f) {
        const d = parseInt(i.slice(c + 4, c + 6), 16), _ = parseInt(i.slice(c + 7, c + 9), 16);
        if ((d & 192) === 128 && (_ & 192) === 128) {
          const y = l << 12 & 61440 | d << 6 & 4032 | _ & 63;
          y < 2048 || y >= 55296 && y <= 57343 ? s += "���" : s += String.fromCharCode(y), c += 6;
          continue;
        }
      }
      if ((l & 248) === 240 && c + 9 < f) {
        const d = parseInt(i.slice(c + 4, c + 6), 16), _ = parseInt(i.slice(c + 7, c + 9), 16), y = parseInt(i.slice(c + 10, c + 12), 16);
        if ((d & 192) === 128 && (_ & 192) === 128 && (y & 192) === 128) {
          let A = l << 18 & 1835008 | d << 12 & 258048 | _ << 6 & 4032 | y & 63;
          A < 65536 || A > 1114111 ? s += "����" : (A -= 65536, s += String.fromCharCode(55296 + (A >> 10), 56320 + (A & 1023))), c += 9;
          continue;
        }
      }
      s += "�";
    }
    return s;
  });
}
Gt.defaultChars = ";/?:@&=+$,#";
Gt.componentChars = "";
const Ic = {};
function G3(u) {
  let n = Ic[u];
  if (n)
    return n;
  n = Ic[u] = [];
  for (let t = 0; t < 128; t++) {
    const i = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(i) ? n.push(i) : n.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < u.length; t++)
    n[u.charCodeAt(t)] = u[t];
  return n;
}
function wn(u, n, t) {
  typeof n != "string" && (t = n, n = wn.defaultChars), typeof t > "u" && (t = !0);
  const i = G3(n);
  let s = "";
  for (let c = 0, f = u.length; c < f; c++) {
    const l = u.charCodeAt(c);
    if (t && l === 37 && c + 2 < f && /^[0-9a-f]{2}$/i.test(u.slice(c + 1, c + 3))) {
      s += u.slice(c, c + 3), c += 2;
      continue;
    }
    if (l < 128) {
      s += i[l];
      continue;
    }
    if (l >= 55296 && l <= 57343) {
      if (l >= 55296 && l <= 56319 && c + 1 < f) {
        const d = u.charCodeAt(c + 1);
        if (d >= 56320 && d <= 57343) {
          s += encodeURIComponent(u[c] + u[c + 1]), c++;
          continue;
        }
      }
      s += "%EF%BF%BD";
      continue;
    }
    s += encodeURIComponent(u[c]);
  }
  return s;
}
wn.defaultChars = ";/?:@&=+$,-_.!~*'()#";
wn.componentChars = "-_.!~*'()";
function C0(u) {
  let n = "";
  return n += u.protocol || "", n += u.slashes ? "//" : "", n += u.auth ? u.auth + "@" : "", u.hostname && u.hostname.indexOf(":") !== -1 ? n += "[" + u.hostname + "]" : n += u.hostname || "", n += u.port ? ":" + u.port : "", n += u.pathname || "", n += u.search || "", n += u.hash || "", n;
}
function Tr() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Z3 = /^([a-z0-9.+-]+:)/i, j3 = /:[0-9]*$/, K3 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, J3 = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Y3 = ["{", "}", "|", "\\", "^", "`"].concat(J3), V3 = ["'"].concat(Y3), Oc = ["%", "/", "?", ";", "#"].concat(V3), Rc = ["/", "?", "#"], X3 = 255, Nc = /^[+a-z0-9A-Z_-]{0,63}$/, Q3 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Lc = {
  javascript: !0,
  "javascript:": !0
}, Mc = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function D0(u, n) {
  if (u && u instanceof Tr)
    return u;
  const t = new Tr();
  return t.parse(u, n), t;
}
Tr.prototype.parse = function(u, n) {
  let t, i, s, c = u;
  if (c = c.trim(), !n && u.split("#").length === 1) {
    const _ = K3.exec(c);
    if (_)
      return this.pathname = _[1], _[2] && (this.search = _[2]), this;
  }
  let f = Z3.exec(c);
  if (f && (f = f[0], t = f.toLowerCase(), this.protocol = f, c = c.substr(f.length)), (n || f || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (s = c.substr(0, 2) === "//", s && !(f && Lc[f]) && (c = c.substr(2), this.slashes = !0)), !Lc[f] && (s || f && !Mc[f])) {
    let _ = -1;
    for (let w = 0; w < Rc.length; w++)
      i = c.indexOf(Rc[w]), i !== -1 && (_ === -1 || i < _) && (_ = i);
    let y, A;
    _ === -1 ? A = c.lastIndexOf("@") : A = c.lastIndexOf("@", _), A !== -1 && (y = c.slice(0, A), c = c.slice(A + 1), this.auth = y), _ = -1;
    for (let w = 0; w < Oc.length; w++)
      i = c.indexOf(Oc[w]), i !== -1 && (_ === -1 || i < _) && (_ = i);
    _ === -1 && (_ = c.length), c[_ - 1] === ":" && _--;
    const F = c.slice(0, _);
    c = c.slice(_), this.parseHost(F), this.hostname = this.hostname || "";
    const C = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!C) {
      const w = this.hostname.split(/\./);
      for (let O = 0, N = w.length; O < N; O++) {
        const H = w[O];
        if (H && !H.match(Nc)) {
          let P = "";
          for (let B = 0, R = H.length; B < R; B++)
            H.charCodeAt(B) > 127 ? P += "x" : P += H[B];
          if (!P.match(Nc)) {
            const B = w.slice(0, O), R = w.slice(O + 1), z = H.match(Q3);
            z && (B.push(z[1]), R.unshift(z[2])), R.length && (c = R.join(".") + c), this.hostname = B.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > X3 && (this.hostname = ""), C && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const l = c.indexOf("#");
  l !== -1 && (this.hash = c.substr(l), c = c.slice(0, l));
  const d = c.indexOf("?");
  return d !== -1 && (this.search = c.substr(d), c = c.slice(0, d)), c && (this.pathname = c), Mc[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Tr.prototype.parseHost = function(u) {
  let n = j3.exec(u);
  n && (n = n[0], n !== ":" && (this.port = n.substr(1)), u = u.substr(0, u.length - n.length)), u && (this.hostname = u);
};
const eb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Gt,
  encode: wn,
  format: C0,
  parse: D0
}, Symbol.toStringTag, { value: "Module" })), Qc = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, ea = /[\0-\x1F\x7F-\x9F]/, ub = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, k0 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, ua = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, ta = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, tb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Qc,
  Cc: ea,
  Cf: ub,
  P: k0,
  S: ua,
  Z: ta
}, Symbol.toStringTag, { value: "Module" })), nb = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((u) => u.charCodeAt(0))
), rb = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((u) => u.charCodeAt(0))
);
var o0;
const ib = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), ob = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (o0 = String.fromCodePoint) !== null && o0 !== void 0 ? o0 : function(u) {
    let n = "";
    return u > 65535 && (u -= 65536, n += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), n += String.fromCharCode(u), n;
  }
);
function sb(u) {
  var n;
  return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (n = ib.get(u)) !== null && n !== void 0 ? n : u;
}
var ke;
(function(u) {
  u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z";
})(ke || (ke = {}));
const cb = 32;
var rt;
(function(u) {
  u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE";
})(rt || (rt = {}));
function g0(u) {
  return u >= ke.ZERO && u <= ke.NINE;
}
function ab(u) {
  return u >= ke.UPPER_A && u <= ke.UPPER_F || u >= ke.LOWER_A && u <= ke.LOWER_F;
}
function fb(u) {
  return u >= ke.UPPER_A && u <= ke.UPPER_Z || u >= ke.LOWER_A && u <= ke.LOWER_Z || g0(u);
}
function lb(u) {
  return u === ke.EQUALS || fb(u);
}
var De;
(function(u) {
  u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity";
})(De || (De = {}));
var nt;
(function(u) {
  u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute";
})(nt || (nt = {}));
class hb {
  constructor(n, t, i) {
    this.decodeTree = n, this.emitCodePoint = t, this.errors = i, this.state = De.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = nt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(n) {
    this.decodeMode = n, this.state = De.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(n, t) {
    switch (this.state) {
      case De.EntityStart:
        return n.charCodeAt(t) === ke.NUM ? (this.state = De.NumericStart, this.consumed += 1, this.stateNumericStart(n, t + 1)) : (this.state = De.NamedEntity, this.stateNamedEntity(n, t));
      case De.NumericStart:
        return this.stateNumericStart(n, t);
      case De.NumericDecimal:
        return this.stateNumericDecimal(n, t);
      case De.NumericHex:
        return this.stateNumericHex(n, t);
      case De.NamedEntity:
        return this.stateNamedEntity(n, t);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(n, t) {
    return t >= n.length ? -1 : (n.charCodeAt(t) | cb) === ke.LOWER_X ? (this.state = De.NumericHex, this.consumed += 1, this.stateNumericHex(n, t + 1)) : (this.state = De.NumericDecimal, this.stateNumericDecimal(n, t));
  }
  addToNumericResult(n, t, i, s) {
    if (t !== i) {
      const c = i - t;
      this.result = this.result * Math.pow(s, c) + parseInt(n.substr(t, c), s), this.consumed += c;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(n, t) {
    const i = t;
    for (; t < n.length; ) {
      const s = n.charCodeAt(t);
      if (g0(s) || ab(s))
        t += 1;
      else
        return this.addToNumericResult(n, i, t, 16), this.emitNumericEntity(s, 3);
    }
    return this.addToNumericResult(n, i, t, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(n, t) {
    const i = t;
    for (; t < n.length; ) {
      const s = n.charCodeAt(t);
      if (g0(s))
        t += 1;
      else
        return this.addToNumericResult(n, i, t, 10), this.emitNumericEntity(s, 2);
    }
    return this.addToNumericResult(n, i, t, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(n, t) {
    var i;
    if (this.consumed <= t)
      return (i = this.errors) === null || i === void 0 || i.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (n === ke.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === nt.Strict)
      return 0;
    return this.emitCodePoint(sb(this.result), this.consumed), this.errors && (n !== ke.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(n, t) {
    const { decodeTree: i } = this;
    let s = i[this.treeIndex], c = (s & rt.VALUE_LENGTH) >> 14;
    for (; t < n.length; t++, this.excess++) {
      const f = n.charCodeAt(t);
      if (this.treeIndex = db(i, s, this.treeIndex + Math.max(1, c), f), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === nt.Attribute && // We shouldn't have consumed any characters after the entity,
        (c === 0 || // And there should be no invalid characters.
        lb(f)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (s = i[this.treeIndex], c = (s & rt.VALUE_LENGTH) >> 14, c !== 0) {
        if (f === ke.SEMI)
          return this.emitNamedEntityData(this.treeIndex, c, this.consumed + this.excess);
        this.decodeMode !== nt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var n;
    const { result: t, decodeTree: i } = this, s = (i[t] & rt.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, s, this.consumed), (n = this.errors) === null || n === void 0 || n.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(n, t, i) {
    const { decodeTree: s } = this;
    return this.emitCodePoint(t === 1 ? s[n] & ~rt.VALUE_LENGTH : s[n + 1], i), t === 3 && this.emitCodePoint(s[n + 2], i), i;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var n;
    switch (this.state) {
      case De.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== nt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case De.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case De.NumericHex:
        return this.emitNumericEntity(0, 3);
      case De.NumericStart:
        return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case De.EntityStart:
        return 0;
    }
  }
}
function na(u) {
  let n = "";
  const t = new hb(u, (i) => n += ob(i));
  return function(s, c) {
    let f = 0, l = 0;
    for (; (l = s.indexOf("&", l)) >= 0; ) {
      n += s.slice(f, l), t.startEntity(c);
      const _ = t.write(
        s,
        // Skip the "&"
        l + 1
      );
      if (_ < 0) {
        f = l + t.end();
        break;
      }
      f = l + _, l = _ === 0 ? f + 1 : f;
    }
    const d = n + s.slice(f);
    return n = "", d;
  };
}
function db(u, n, t, i) {
  const s = (n & rt.BRANCH_LENGTH) >> 7, c = n & rt.JUMP_TABLE;
  if (s === 0)
    return c !== 0 && i === c ? t : -1;
  if (c) {
    const d = i - c;
    return d < 0 || d >= s ? -1 : u[t + d] - 1;
  }
  let f = t, l = f + s - 1;
  for (; f <= l; ) {
    const d = f + l >>> 1, _ = u[d];
    if (_ < i)
      f = d + 1;
    else if (_ > i)
      l = d - 1;
    else
      return u[d + s];
  }
  return -1;
}
const pb = na(nb);
na(rb);
function ra(u, n = nt.Legacy) {
  return pb(u, n);
}
function bb(u) {
  return Object.prototype.toString.call(u);
}
function F0(u) {
  return bb(u) === "[object String]";
}
const _b = Object.prototype.hasOwnProperty;
function gb(u, n) {
  return _b.call(u, n);
}
function Nr(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(i) {
        u[i] = t[i];
      });
    }
  }), u;
}
function ia(u, n, t) {
  return [].concat(u.slice(0, n), t, u.slice(n + 1));
}
function S0(u) {
  return !(u >= 55296 && u <= 57343 || u >= 64976 && u <= 65007 || (u & 65535) === 65535 || (u & 65535) === 65534 || u >= 0 && u <= 8 || u === 11 || u >= 14 && u <= 31 || u >= 127 && u <= 159 || u > 1114111);
}
function Ir(u) {
  if (u > 65535) {
    u -= 65536;
    const n = 55296 + (u >> 10), t = 56320 + (u & 1023);
    return String.fromCharCode(n, t);
  }
  return String.fromCharCode(u);
}
const oa = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, mb = /&([a-z#][a-z0-9]{1,31});/gi, xb = new RegExp(oa.source + "|" + mb.source, "gi"), yb = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function vb(u, n) {
  if (n.charCodeAt(0) === 35 && yb.test(n)) {
    const i = n[1].toLowerCase() === "x" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
    return S0(i) ? Ir(i) : u;
  }
  const t = ra(u);
  return t !== u ? t : u;
}
function wb(u) {
  return u.indexOf("\\") < 0 ? u : u.replace(oa, "$1");
}
function Zt(u) {
  return u.indexOf("\\") < 0 && u.indexOf("&") < 0 ? u : u.replace(xb, function(n, t, i) {
    return t || vb(n, i);
  });
}
const Eb = /[&<>"]/, Ab = /[&<>"]/g, Cb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Db(u) {
  return Cb[u];
}
function ot(u) {
  return Eb.test(u) ? u.replace(Ab, Db) : u;
}
const kb = /[.?*+^$[\]\\(){}|-]/g;
function Fb(u) {
  return u.replace(kb, "\\$&");
}
function ce(u) {
  switch (u) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function mn(u) {
  if (u >= 8192 && u <= 8202)
    return !0;
  switch (u) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function xn(u) {
  return k0.test(u) || ua.test(u);
}
function yn(u) {
  switch (u) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Lr(u) {
  return u = u.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (u = u.replace(/ẞ/g, "ß")), u.toLowerCase().toUpperCase();
}
const Sb = { mdurl: eb, ucmicro: tb }, Tb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: ia,
  assign: Nr,
  escapeHtml: ot,
  escapeRE: Fb,
  fromCodePoint: Ir,
  has: gb,
  isMdAsciiPunct: yn,
  isPunctChar: xn,
  isSpace: ce,
  isString: F0,
  isValidEntityCode: S0,
  isWhiteSpace: mn,
  lib: Sb,
  normalizeReference: Lr,
  unescapeAll: Zt,
  unescapeMd: wb
}, Symbol.toStringTag, { value: "Module" }));
function Ib(u, n, t) {
  let i, s, c, f;
  const l = u.posMax, d = u.pos;
  for (u.pos = n + 1, i = 1; u.pos < l; ) {
    if (c = u.src.charCodeAt(u.pos), c === 93 && (i--, i === 0)) {
      s = !0;
      break;
    }
    if (f = u.pos, u.md.inline.skipToken(u), c === 91) {
      if (f === u.pos - 1)
        i++;
      else if (t)
        return u.pos = d, -1;
    }
  }
  let _ = -1;
  return s && (_ = u.pos), u.pos = d, _;
}
function Ob(u, n, t) {
  let i, s = n;
  const c = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (u.charCodeAt(s) === 60) {
    for (s++; s < t; ) {
      if (i = u.charCodeAt(s), i === 10 || i === 60)
        return c;
      if (i === 62)
        return c.pos = s + 1, c.str = Zt(u.slice(n + 1, s)), c.ok = !0, c;
      if (i === 92 && s + 1 < t) {
        s += 2;
        continue;
      }
      s++;
    }
    return c;
  }
  let f = 0;
  for (; s < t && (i = u.charCodeAt(s), !(i === 32 || i < 32 || i === 127)); ) {
    if (i === 92 && s + 1 < t) {
      if (u.charCodeAt(s + 1) === 32)
        break;
      s += 2;
      continue;
    }
    if (i === 40 && (f++, f > 32))
      return c;
    if (i === 41) {
      if (f === 0)
        break;
      f--;
    }
    s++;
  }
  return n === s || f !== 0 || (c.str = Zt(u.slice(n, s)), c.pos = s, c.ok = !0), c;
}
function Rb(u, n, t, i) {
  let s, c = n;
  const f = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (i)
    f.str = i.str, f.marker = i.marker;
  else {
    if (c >= t)
      return f;
    let l = u.charCodeAt(c);
    if (l !== 34 && l !== 39 && l !== 40)
      return f;
    n++, c++, l === 40 && (l = 41), f.marker = l;
  }
  for (; c < t; ) {
    if (s = u.charCodeAt(c), s === f.marker)
      return f.pos = c + 1, f.str += Zt(u.slice(n, c)), f.ok = !0, f;
    if (s === 40 && f.marker === 41)
      return f;
    s === 92 && c + 1 < t && c++, c++;
  }
  return f.can_continue = !0, f.str += Zt(u.slice(n, c)), f;
}
const Nb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Ob,
  parseLinkLabel: Ib,
  parseLinkTitle: Rb
}, Symbol.toStringTag, { value: "Module" })), Ru = {};
Ru.code_inline = function(u, n, t, i, s) {
  const c = u[n];
  return "<code" + s.renderAttrs(c) + ">" + ot(c.content) + "</code>";
};
Ru.code_block = function(u, n, t, i, s) {
  const c = u[n];
  return "<pre" + s.renderAttrs(c) + "><code>" + ot(u[n].content) + `</code></pre>
`;
};
Ru.fence = function(u, n, t, i, s) {
  const c = u[n], f = c.info ? Zt(c.info).trim() : "";
  let l = "", d = "";
  if (f) {
    const y = f.split(/(\s+)/g);
    l = y[0], d = y.slice(2).join("");
  }
  let _;
  if (t.highlight ? _ = t.highlight(c.content, l, d) || ot(c.content) : _ = ot(c.content), _.indexOf("<pre") === 0)
    return _ + `
`;
  if (f) {
    const y = c.attrIndex("class"), A = c.attrs ? c.attrs.slice() : [];
    y < 0 ? A.push(["class", t.langPrefix + l]) : (A[y] = A[y].slice(), A[y][1] += " " + t.langPrefix + l);
    const F = {
      attrs: A
    };
    return `<pre><code${s.renderAttrs(F)}>${_}</code></pre>
`;
  }
  return `<pre><code${s.renderAttrs(c)}>${_}</code></pre>
`;
};
Ru.image = function(u, n, t, i, s) {
  const c = u[n];
  return c.attrs[c.attrIndex("alt")][1] = s.renderInlineAsText(c.children, t, i), s.renderToken(u, n, t);
};
Ru.hardbreak = function(u, n, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
Ru.softbreak = function(u, n, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Ru.text = function(u, n) {
  return ot(u[n].content);
};
Ru.html_block = function(u, n) {
  return u[n].content;
};
Ru.html_inline = function(u, n) {
  return u[n].content;
};
function jt() {
  this.rules = Nr({}, Ru);
}
jt.prototype.renderAttrs = function(n) {
  let t, i, s;
  if (!n.attrs)
    return "";
  for (s = "", t = 0, i = n.attrs.length; t < i; t++)
    s += " " + ot(n.attrs[t][0]) + '="' + ot(n.attrs[t][1]) + '"';
  return s;
};
jt.prototype.renderToken = function(n, t, i) {
  const s = n[t];
  let c = "";
  if (s.hidden)
    return "";
  s.block && s.nesting !== -1 && t && n[t - 1].hidden && (c += `
`), c += (s.nesting === -1 ? "</" : "<") + s.tag, c += this.renderAttrs(s), s.nesting === 0 && i.xhtmlOut && (c += " /");
  let f = !1;
  if (s.block && (f = !0, s.nesting === 1 && t + 1 < n.length)) {
    const l = n[t + 1];
    (l.type === "inline" || l.hidden || l.nesting === -1 && l.tag === s.tag) && (f = !1);
  }
  return c += f ? `>
` : ">", c;
};
jt.prototype.renderInline = function(u, n, t) {
  let i = "";
  const s = this.rules;
  for (let c = 0, f = u.length; c < f; c++) {
    const l = u[c].type;
    typeof s[l] < "u" ? i += s[l](u, c, n, t, this) : i += this.renderToken(u, c, n);
  }
  return i;
};
jt.prototype.renderInlineAsText = function(u, n, t) {
  let i = "";
  for (let s = 0, c = u.length; s < c; s++)
    switch (u[s].type) {
      case "text":
        i += u[s].content;
        break;
      case "image":
        i += this.renderInlineAsText(u[s].children, n, t);
        break;
      case "html_inline":
      case "html_block":
        i += u[s].content;
        break;
      case "softbreak":
      case "hardbreak":
        i += `
`;
        break;
    }
  return i;
};
jt.prototype.render = function(u, n, t) {
  let i = "";
  const s = this.rules;
  for (let c = 0, f = u.length; c < f; c++) {
    const l = u[c].type;
    l === "inline" ? i += this.renderInline(u[c].children, n, t) : typeof s[l] < "u" ? i += s[l](u, c, n, t, this) : i += this.renderToken(u, c, n, t);
  }
  return i;
};
function Ze() {
  this.__rules__ = [], this.__cache__ = null;
}
Ze.prototype.__find__ = function(u) {
  for (let n = 0; n < this.__rules__.length; n++)
    if (this.__rules__[n].name === u)
      return n;
  return -1;
};
Ze.prototype.__compile__ = function() {
  const u = this, n = [""];
  u.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(i) {
      n.indexOf(i) < 0 && n.push(i);
    });
  }), u.__cache__ = {}, n.forEach(function(t) {
    u.__cache__[t] = [], u.__rules__.forEach(function(i) {
      i.enabled && (t && i.alt.indexOf(t) < 0 || u.__cache__[t].push(i.fn));
    });
  });
};
Ze.prototype.at = function(u, n, t) {
  const i = this.__find__(u), s = t || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__[i].fn = n, this.__rules__[i].alt = s.alt || [], this.__cache__ = null;
};
Ze.prototype.before = function(u, n, t, i) {
  const s = this.__find__(u), c = i || {};
  if (s === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(s, 0, {
    name: n,
    enabled: !0,
    fn: t,
    alt: c.alt || []
  }), this.__cache__ = null;
};
Ze.prototype.after = function(u, n, t, i) {
  const s = this.__find__(u), c = i || {};
  if (s === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(s + 1, 0, {
    name: n,
    enabled: !0,
    fn: t,
    alt: c.alt || []
  }), this.__cache__ = null;
};
Ze.prototype.push = function(u, n, t) {
  const i = t || {};
  this.__rules__.push({
    name: u,
    enabled: !0,
    fn: n,
    alt: i.alt || []
  }), this.__cache__ = null;
};
Ze.prototype.enable = function(u, n) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(i) {
    const s = this.__find__(i);
    if (s < 0) {
      if (n)
        return;
      throw new Error("Rules manager: invalid rule name " + i);
    }
    this.__rules__[s].enabled = !0, t.push(i);
  }, this), this.__cache__ = null, t;
};
Ze.prototype.enableOnly = function(u, n) {
  Array.isArray(u) || (u = [u]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(u, n);
};
Ze.prototype.disable = function(u, n) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(i) {
    const s = this.__find__(i);
    if (s < 0) {
      if (n)
        return;
      throw new Error("Rules manager: invalid rule name " + i);
    }
    this.__rules__[s].enabled = !1, t.push(i);
  }, this), this.__cache__ = null, t;
};
Ze.prototype.getRules = function(u) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function Du(u, n, t) {
  this.type = u, this.tag = n, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
Du.prototype.attrIndex = function(n) {
  if (!this.attrs)
    return -1;
  const t = this.attrs;
  for (let i = 0, s = t.length; i < s; i++)
    if (t[i][0] === n)
      return i;
  return -1;
};
Du.prototype.attrPush = function(n) {
  this.attrs ? this.attrs.push(n) : this.attrs = [n];
};
Du.prototype.attrSet = function(n, t) {
  const i = this.attrIndex(n), s = [n, t];
  i < 0 ? this.attrPush(s) : this.attrs[i] = s;
};
Du.prototype.attrGet = function(n) {
  const t = this.attrIndex(n);
  let i = null;
  return t >= 0 && (i = this.attrs[t][1]), i;
};
Du.prototype.attrJoin = function(n, t) {
  const i = this.attrIndex(n);
  i < 0 ? this.attrPush([n, t]) : this.attrs[i][1] = this.attrs[i][1] + " " + t;
};
function sa(u, n, t) {
  this.src = u, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = n;
}
sa.prototype.Token = Du;
const Lb = /\r\n?|\n/g, Mb = /\0/g;
function Bb(u) {
  let n;
  n = u.src.replace(Lb, `
`), n = n.replace(Mb, "�"), u.src = n;
}
function Pb(u) {
  let n;
  u.inlineMode ? (n = new u.Token("inline", "", 0), n.content = u.src, n.map = [0, 1], n.children = [], u.tokens.push(n)) : u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function zb(u) {
  const n = u.tokens;
  for (let t = 0, i = n.length; t < i; t++) {
    const s = n[t];
    s.type === "inline" && u.md.inline.parse(s.content, u.md, u.env, s.children);
  }
}
function qb(u) {
  return /^<a[>\s]/i.test(u);
}
function Ub(u) {
  return /^<\/a\s*>/i.test(u);
}
function Hb(u) {
  const n = u.tokens;
  if (u.md.options.linkify)
    for (let t = 0, i = n.length; t < i; t++) {
      if (n[t].type !== "inline" || !u.md.linkify.pretest(n[t].content))
        continue;
      let s = n[t].children, c = 0;
      for (let f = s.length - 1; f >= 0; f--) {
        const l = s[f];
        if (l.type === "link_close") {
          for (f--; s[f].level !== l.level && s[f].type !== "link_open"; )
            f--;
          continue;
        }
        if (l.type === "html_inline" && (qb(l.content) && c > 0 && c--, Ub(l.content) && c++), !(c > 0) && l.type === "text" && u.md.linkify.test(l.content)) {
          const d = l.content;
          let _ = u.md.linkify.match(d);
          const y = [];
          let A = l.level, F = 0;
          _.length > 0 && _[0].index === 0 && f > 0 && s[f - 1].type === "text_special" && (_ = _.slice(1));
          for (let C = 0; C < _.length; C++) {
            const w = _[C].url, O = u.md.normalizeLink(w);
            if (!u.md.validateLink(O))
              continue;
            let N = _[C].text;
            _[C].schema ? _[C].schema === "mailto:" && !/^mailto:/i.test(N) ? N = u.md.normalizeLinkText("mailto:" + N).replace(/^mailto:/, "") : N = u.md.normalizeLinkText(N) : N = u.md.normalizeLinkText("http://" + N).replace(/^http:\/\//, "");
            const H = _[C].index;
            if (H > F) {
              const z = new u.Token("text", "", 0);
              z.content = d.slice(F, H), z.level = A, y.push(z);
            }
            const P = new u.Token("link_open", "a", 1);
            P.attrs = [["href", O]], P.level = A++, P.markup = "linkify", P.info = "auto", y.push(P);
            const B = new u.Token("text", "", 0);
            B.content = N, B.level = A, y.push(B);
            const R = new u.Token("link_close", "a", -1);
            R.level = --A, R.markup = "linkify", R.info = "auto", y.push(R), F = _[C].lastIndex;
          }
          if (F < d.length) {
            const C = new u.Token("text", "", 0);
            C.content = d.slice(F), C.level = A, y.push(C);
          }
          n[t].children = s = ia(s, f, y);
        }
      }
    }
}
const ca = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, $b = /\((c|tm|r)\)/i, Wb = /\((c|tm|r)\)/ig, Gb = {
  c: "©",
  r: "®",
  tm: "™"
};
function Zb(u, n) {
  return Gb[n.toLowerCase()];
}
function jb(u) {
  let n = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const i = u[t];
    i.type === "text" && !n && (i.content = i.content.replace(Wb, Zb)), i.type === "link_open" && i.info === "auto" && n--, i.type === "link_close" && i.info === "auto" && n++;
  }
}
function Kb(u) {
  let n = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const i = u[t];
    i.type === "text" && !n && ca.test(i.content) && (i.content = i.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), i.type === "link_open" && i.info === "auto" && n--, i.type === "link_close" && i.info === "auto" && n++;
  }
}
function Jb(u) {
  let n;
  if (u.md.options.typographer)
    for (n = u.tokens.length - 1; n >= 0; n--)
      u.tokens[n].type === "inline" && ($b.test(u.tokens[n].content) && jb(u.tokens[n].children), ca.test(u.tokens[n].content) && Kb(u.tokens[n].children));
}
const Yb = /['"]/, Bc = /['"]/g, Pc = "’";
function yr(u, n, t) {
  return u.slice(0, n) + t + u.slice(n + 1);
}
function Vb(u, n) {
  let t;
  const i = [];
  for (let s = 0; s < u.length; s++) {
    const c = u[s], f = u[s].level;
    for (t = i.length - 1; t >= 0 && !(i[t].level <= f); t--)
      ;
    if (i.length = t + 1, c.type !== "text")
      continue;
    let l = c.content, d = 0, _ = l.length;
    e:
      for (; d < _; ) {
        Bc.lastIndex = d;
        const y = Bc.exec(l);
        if (!y)
          break;
        let A = !0, F = !0;
        d = y.index + 1;
        const C = y[0] === "'";
        let w = 32;
        if (y.index - 1 >= 0)
          w = l.charCodeAt(y.index - 1);
        else
          for (t = s - 1; t >= 0 && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t--)
            if (u[t].content) {
              w = u[t].content.charCodeAt(u[t].content.length - 1);
              break;
            }
        let O = 32;
        if (d < _)
          O = l.charCodeAt(d);
        else
          for (t = s + 1; t < u.length && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t++)
            if (u[t].content) {
              O = u[t].content.charCodeAt(0);
              break;
            }
        const N = yn(w) || xn(String.fromCharCode(w)), H = yn(O) || xn(String.fromCharCode(O)), P = mn(w), B = mn(O);
        if (B ? A = !1 : H && (P || N || (A = !1)), P ? F = !1 : N && (B || H || (F = !1)), O === 34 && y[0] === '"' && w >= 48 && w <= 57 && (F = A = !1), A && F && (A = N, F = H), !A && !F) {
          C && (c.content = yr(c.content, y.index, Pc));
          continue;
        }
        if (F)
          for (t = i.length - 1; t >= 0; t--) {
            let R = i[t];
            if (i[t].level < f)
              break;
            if (R.single === C && i[t].level === f) {
              R = i[t];
              let z, Z;
              C ? (z = n.md.options.quotes[2], Z = n.md.options.quotes[3]) : (z = n.md.options.quotes[0], Z = n.md.options.quotes[1]), c.content = yr(c.content, y.index, Z), u[R.token].content = yr(
                u[R.token].content,
                R.pos,
                z
              ), d += Z.length - 1, R.token === s && (d += z.length - 1), l = c.content, _ = l.length, i.length = t;
              continue e;
            }
          }
        A ? i.push({
          token: s,
          pos: y.index,
          single: C,
          level: f
        }) : F && C && (c.content = yr(c.content, y.index, Pc));
      }
  }
}
function Xb(u) {
  if (u.md.options.typographer)
    for (let n = u.tokens.length - 1; n >= 0; n--)
      u.tokens[n].type !== "inline" || !Yb.test(u.tokens[n].content) || Vb(u.tokens[n].children, u);
}
function Qb(u) {
  let n, t;
  const i = u.tokens, s = i.length;
  for (let c = 0; c < s; c++) {
    if (i[c].type !== "inline")
      continue;
    const f = i[c].children, l = f.length;
    for (n = 0; n < l; n++)
      f[n].type === "text_special" && (f[n].type = "text");
    for (n = t = 0; n < l; n++)
      f[n].type === "text" && n + 1 < l && f[n + 1].type === "text" ? f[n + 1].content = f[n].content + f[n + 1].content : (n !== t && (f[t] = f[n]), t++);
    n !== t && (f.length = t);
  }
}
const s0 = [
  ["normalize", Bb],
  ["block", Pb],
  ["inline", zb],
  ["linkify", Hb],
  ["replacements", Jb],
  ["smartquotes", Xb],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Qb]
];
function T0() {
  this.ruler = new Ze();
  for (let u = 0; u < s0.length; u++)
    this.ruler.push(s0[u][0], s0[u][1]);
}
T0.prototype.process = function(u) {
  const n = this.ruler.getRules("");
  for (let t = 0, i = n.length; t < i; t++)
    n[t](u);
};
T0.prototype.State = sa;
function Nu(u, n, t, i) {
  this.src = u, this.md = n, this.env = t, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const s = this.src;
  for (let c = 0, f = 0, l = 0, d = 0, _ = s.length, y = !1; f < _; f++) {
    const A = s.charCodeAt(f);
    if (!y)
      if (ce(A)) {
        l++, A === 9 ? d += 4 - d % 4 : d++;
        continue;
      } else
        y = !0;
    (A === 10 || f === _ - 1) && (A !== 10 && f++, this.bMarks.push(c), this.eMarks.push(f), this.tShift.push(l), this.sCount.push(d), this.bsCount.push(0), y = !1, l = 0, d = 0, c = f + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Nu.prototype.push = function(u, n, t) {
  const i = new Du(u, n, t);
  return i.block = !0, t < 0 && this.level--, i.level = this.level, t > 0 && this.level++, this.tokens.push(i), i;
};
Nu.prototype.isEmpty = function(n) {
  return this.bMarks[n] + this.tShift[n] >= this.eMarks[n];
};
Nu.prototype.skipEmptyLines = function(n) {
  for (let t = this.lineMax; n < t && !(this.bMarks[n] + this.tShift[n] < this.eMarks[n]); n++)
    ;
  return n;
};
Nu.prototype.skipSpaces = function(n) {
  for (let t = this.src.length; n < t; n++) {
    const i = this.src.charCodeAt(n);
    if (!ce(i))
      break;
  }
  return n;
};
Nu.prototype.skipSpacesBack = function(n, t) {
  if (n <= t)
    return n;
  for (; n > t; )
    if (!ce(this.src.charCodeAt(--n)))
      return n + 1;
  return n;
};
Nu.prototype.skipChars = function(n, t) {
  for (let i = this.src.length; n < i && this.src.charCodeAt(n) === t; n++)
    ;
  return n;
};
Nu.prototype.skipCharsBack = function(n, t, i) {
  if (n <= i)
    return n;
  for (; n > i; )
    if (t !== this.src.charCodeAt(--n))
      return n + 1;
  return n;
};
Nu.prototype.getLines = function(n, t, i, s) {
  if (n >= t)
    return "";
  const c = new Array(t - n);
  for (let f = 0, l = n; l < t; l++, f++) {
    let d = 0;
    const _ = this.bMarks[l];
    let y = _, A;
    for (l + 1 < t || s ? A = this.eMarks[l] + 1 : A = this.eMarks[l]; y < A && d < i; ) {
      const F = this.src.charCodeAt(y);
      if (ce(F))
        F === 9 ? d += 4 - (d + this.bsCount[l]) % 4 : d++;
      else if (y - _ < this.tShift[l])
        d++;
      else
        break;
      y++;
    }
    d > i ? c[f] = new Array(d - i + 1).join(" ") + this.src.slice(y, A) : c[f] = this.src.slice(y, A);
  }
  return c.join("");
};
Nu.prototype.Token = Du;
const e6 = 65536;
function c0(u, n) {
  const t = u.bMarks[n] + u.tShift[n], i = u.eMarks[n];
  return u.src.slice(t, i);
}
function zc(u) {
  const n = [], t = u.length;
  let i = 0, s = u.charCodeAt(i), c = !1, f = 0, l = "";
  for (; i < t; )
    s === 124 && (c ? (l += u.substring(f, i - 1), f = i) : (n.push(l + u.substring(f, i)), l = "", f = i + 1)), c = s === 92, i++, s = u.charCodeAt(i);
  return n.push(l + u.substring(f)), n;
}
function u6(u, n, t, i) {
  if (n + 2 > t)
    return !1;
  let s = n + 1;
  if (u.sCount[s] < u.blkIndent || u.sCount[s] - u.blkIndent >= 4)
    return !1;
  let c = u.bMarks[s] + u.tShift[s];
  if (c >= u.eMarks[s])
    return !1;
  const f = u.src.charCodeAt(c++);
  if (f !== 124 && f !== 45 && f !== 58 || c >= u.eMarks[s])
    return !1;
  const l = u.src.charCodeAt(c++);
  if (l !== 124 && l !== 45 && l !== 58 && !ce(l) || f === 45 && ce(l))
    return !1;
  for (; c < u.eMarks[s]; ) {
    const R = u.src.charCodeAt(c);
    if (R !== 124 && R !== 45 && R !== 58 && !ce(R))
      return !1;
    c++;
  }
  let d = c0(u, n + 1), _ = d.split("|");
  const y = [];
  for (let R = 0; R < _.length; R++) {
    const z = _[R].trim();
    if (!z) {
      if (R === 0 || R === _.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(z))
      return !1;
    z.charCodeAt(z.length - 1) === 58 ? y.push(z.charCodeAt(0) === 58 ? "center" : "right") : z.charCodeAt(0) === 58 ? y.push("left") : y.push("");
  }
  if (d = c0(u, n).trim(), d.indexOf("|") === -1 || u.sCount[n] - u.blkIndent >= 4)
    return !1;
  _ = zc(d), _.length && _[0] === "" && _.shift(), _.length && _[_.length - 1] === "" && _.pop();
  const A = _.length;
  if (A === 0 || A !== y.length)
    return !1;
  if (i)
    return !0;
  const F = u.parentType;
  u.parentType = "table";
  const C = u.md.block.ruler.getRules("blockquote"), w = u.push("table_open", "table", 1), O = [n, 0];
  w.map = O;
  const N = u.push("thead_open", "thead", 1);
  N.map = [n, n + 1];
  const H = u.push("tr_open", "tr", 1);
  H.map = [n, n + 1];
  for (let R = 0; R < _.length; R++) {
    const z = u.push("th_open", "th", 1);
    y[R] && (z.attrs = [["style", "text-align:" + y[R]]]);
    const Z = u.push("inline", "", 0);
    Z.content = _[R].trim(), Z.children = [], u.push("th_close", "th", -1);
  }
  u.push("tr_close", "tr", -1), u.push("thead_close", "thead", -1);
  let P, B = 0;
  for (s = n + 2; s < t && !(u.sCount[s] < u.blkIndent); s++) {
    let R = !1;
    for (let Z = 0, Q = C.length; Z < Q; Z++)
      if (C[Z](u, s, t, !0)) {
        R = !0;
        break;
      }
    if (R || (d = c0(u, s).trim(), !d) || u.sCount[s] - u.blkIndent >= 4 || (_ = zc(d), _.length && _[0] === "" && _.shift(), _.length && _[_.length - 1] === "" && _.pop(), B += A - _.length, B > e6))
      break;
    if (s === n + 2) {
      const Z = u.push("tbody_open", "tbody", 1);
      Z.map = P = [n + 2, 0];
    }
    const z = u.push("tr_open", "tr", 1);
    z.map = [s, s + 1];
    for (let Z = 0; Z < A; Z++) {
      const Q = u.push("td_open", "td", 1);
      y[Z] && (Q.attrs = [["style", "text-align:" + y[Z]]]);
      const ae = u.push("inline", "", 0);
      ae.content = _[Z] ? _[Z].trim() : "", ae.children = [], u.push("td_close", "td", -1);
    }
    u.push("tr_close", "tr", -1);
  }
  return P && (u.push("tbody_close", "tbody", -1), P[1] = s), u.push("table_close", "table", -1), O[1] = s, u.parentType = F, u.line = s, !0;
}
function t6(u, n, t) {
  if (u.sCount[n] - u.blkIndent < 4)
    return !1;
  let i = n + 1, s = i;
  for (; i < t; ) {
    if (u.isEmpty(i)) {
      i++;
      continue;
    }
    if (u.sCount[i] - u.blkIndent >= 4) {
      i++, s = i;
      continue;
    }
    break;
  }
  u.line = s;
  const c = u.push("code_block", "code", 0);
  return c.content = u.getLines(n, s, 4 + u.blkIndent, !1) + `
`, c.map = [n, u.line], !0;
}
function n6(u, n, t, i) {
  let s = u.bMarks[n] + u.tShift[n], c = u.eMarks[n];
  if (u.sCount[n] - u.blkIndent >= 4 || s + 3 > c)
    return !1;
  const f = u.src.charCodeAt(s);
  if (f !== 126 && f !== 96)
    return !1;
  let l = s;
  s = u.skipChars(s, f);
  let d = s - l;
  if (d < 3)
    return !1;
  const _ = u.src.slice(l, s), y = u.src.slice(s, c);
  if (f === 96 && y.indexOf(String.fromCharCode(f)) >= 0)
    return !1;
  if (i)
    return !0;
  let A = n, F = !1;
  for (; A++, !(A >= t || (s = l = u.bMarks[A] + u.tShift[A], c = u.eMarks[A], s < c && u.sCount[A] < u.blkIndent)); )
    if (u.src.charCodeAt(s) === f && !(u.sCount[A] - u.blkIndent >= 4) && (s = u.skipChars(s, f), !(s - l < d) && (s = u.skipSpaces(s), !(s < c)))) {
      F = !0;
      break;
    }
  d = u.sCount[n], u.line = A + (F ? 1 : 0);
  const C = u.push("fence", "code", 0);
  return C.info = y, C.content = u.getLines(n + 1, A, d, !0), C.markup = _, C.map = [n, u.line], !0;
}
function r6(u, n, t, i) {
  let s = u.bMarks[n] + u.tShift[n], c = u.eMarks[n];
  const f = u.lineMax;
  if (u.sCount[n] - u.blkIndent >= 4 || u.src.charCodeAt(s) !== 62)
    return !1;
  if (i)
    return !0;
  const l = [], d = [], _ = [], y = [], A = u.md.block.ruler.getRules("blockquote"), F = u.parentType;
  u.parentType = "blockquote";
  let C = !1, w;
  for (w = n; w < t; w++) {
    const B = u.sCount[w] < u.blkIndent;
    if (s = u.bMarks[w] + u.tShift[w], c = u.eMarks[w], s >= c)
      break;
    if (u.src.charCodeAt(s++) === 62 && !B) {
      let z = u.sCount[w] + 1, Z, Q;
      u.src.charCodeAt(s) === 32 ? (s++, z++, Q = !1, Z = !0) : u.src.charCodeAt(s) === 9 ? (Z = !0, (u.bsCount[w] + z) % 4 === 3 ? (s++, z++, Q = !1) : Q = !0) : Z = !1;
      let ae = z;
      for (l.push(u.bMarks[w]), u.bMarks[w] = s; s < c; ) {
        const ye = u.src.charCodeAt(s);
        if (ce(ye))
          ye === 9 ? ae += 4 - (ae + u.bsCount[w] + (Q ? 1 : 0)) % 4 : ae++;
        else
          break;
        s++;
      }
      C = s >= c, d.push(u.bsCount[w]), u.bsCount[w] = u.sCount[w] + 1 + (Z ? 1 : 0), _.push(u.sCount[w]), u.sCount[w] = ae - z, y.push(u.tShift[w]), u.tShift[w] = s - u.bMarks[w];
      continue;
    }
    if (C)
      break;
    let R = !1;
    for (let z = 0, Z = A.length; z < Z; z++)
      if (A[z](u, w, t, !0)) {
        R = !0;
        break;
      }
    if (R) {
      u.lineMax = w, u.blkIndent !== 0 && (l.push(u.bMarks[w]), d.push(u.bsCount[w]), y.push(u.tShift[w]), _.push(u.sCount[w]), u.sCount[w] -= u.blkIndent);
      break;
    }
    l.push(u.bMarks[w]), d.push(u.bsCount[w]), y.push(u.tShift[w]), _.push(u.sCount[w]), u.sCount[w] = -1;
  }
  const O = u.blkIndent;
  u.blkIndent = 0;
  const N = u.push("blockquote_open", "blockquote", 1);
  N.markup = ">";
  const H = [n, 0];
  N.map = H, u.md.block.tokenize(u, n, w);
  const P = u.push("blockquote_close", "blockquote", -1);
  P.markup = ">", u.lineMax = f, u.parentType = F, H[1] = u.line;
  for (let B = 0; B < y.length; B++)
    u.bMarks[B + n] = l[B], u.tShift[B + n] = y[B], u.sCount[B + n] = _[B], u.bsCount[B + n] = d[B];
  return u.blkIndent = O, !0;
}
function i6(u, n, t, i) {
  const s = u.eMarks[n];
  if (u.sCount[n] - u.blkIndent >= 4)
    return !1;
  let c = u.bMarks[n] + u.tShift[n];
  const f = u.src.charCodeAt(c++);
  if (f !== 42 && f !== 45 && f !== 95)
    return !1;
  let l = 1;
  for (; c < s; ) {
    const _ = u.src.charCodeAt(c++);
    if (_ !== f && !ce(_))
      return !1;
    _ === f && l++;
  }
  if (l < 3)
    return !1;
  if (i)
    return !0;
  u.line = n + 1;
  const d = u.push("hr", "hr", 0);
  return d.map = [n, u.line], d.markup = Array(l + 1).join(String.fromCharCode(f)), !0;
}
function qc(u, n) {
  const t = u.eMarks[n];
  let i = u.bMarks[n] + u.tShift[n];
  const s = u.src.charCodeAt(i++);
  if (s !== 42 && s !== 45 && s !== 43)
    return -1;
  if (i < t) {
    const c = u.src.charCodeAt(i);
    if (!ce(c))
      return -1;
  }
  return i;
}
function Uc(u, n) {
  const t = u.bMarks[n] + u.tShift[n], i = u.eMarks[n];
  let s = t;
  if (s + 1 >= i)
    return -1;
  let c = u.src.charCodeAt(s++);
  if (c < 48 || c > 57)
    return -1;
  for (; ; ) {
    if (s >= i)
      return -1;
    if (c = u.src.charCodeAt(s++), c >= 48 && c <= 57) {
      if (s - t >= 10)
        return -1;
      continue;
    }
    if (c === 41 || c === 46)
      break;
    return -1;
  }
  return s < i && (c = u.src.charCodeAt(s), !ce(c)) ? -1 : s;
}
function o6(u, n) {
  const t = u.level + 2;
  for (let i = n + 2, s = u.tokens.length - 2; i < s; i++)
    u.tokens[i].level === t && u.tokens[i].type === "paragraph_open" && (u.tokens[i + 2].hidden = !0, u.tokens[i].hidden = !0, i += 2);
}
function s6(u, n, t, i) {
  let s, c, f, l, d = n, _ = !0;
  if (u.sCount[d] - u.blkIndent >= 4 || u.listIndent >= 0 && u.sCount[d] - u.listIndent >= 4 && u.sCount[d] < u.blkIndent)
    return !1;
  let y = !1;
  i && u.parentType === "paragraph" && u.sCount[d] >= u.blkIndent && (y = !0);
  let A, F, C;
  if ((C = Uc(u, d)) >= 0) {
    if (A = !0, f = u.bMarks[d] + u.tShift[d], F = Number(u.src.slice(f, C - 1)), y && F !== 1)
      return !1;
  } else if ((C = qc(u, d)) >= 0)
    A = !1;
  else
    return !1;
  if (y && u.skipSpaces(C) >= u.eMarks[d])
    return !1;
  if (i)
    return !0;
  const w = u.src.charCodeAt(C - 1), O = u.tokens.length;
  A ? (l = u.push("ordered_list_open", "ol", 1), F !== 1 && (l.attrs = [["start", F]])) : l = u.push("bullet_list_open", "ul", 1);
  const N = [d, 0];
  l.map = N, l.markup = String.fromCharCode(w);
  let H = !1;
  const P = u.md.block.ruler.getRules("list"), B = u.parentType;
  for (u.parentType = "list"; d < t; ) {
    c = C, s = u.eMarks[d];
    const R = u.sCount[d] + C - (u.bMarks[d] + u.tShift[d]);
    let z = R;
    for (; c < s; ) {
      const Re = u.src.charCodeAt(c);
      if (Re === 9)
        z += 4 - (z + u.bsCount[d]) % 4;
      else if (Re === 32)
        z++;
      else
        break;
      c++;
    }
    const Z = c;
    let Q;
    Z >= s ? Q = 1 : Q = z - R, Q > 4 && (Q = 1);
    const ae = R + Q;
    l = u.push("list_item_open", "li", 1), l.markup = String.fromCharCode(w);
    const ye = [d, 0];
    l.map = ye, A && (l.info = u.src.slice(f, C - 1));
    const qe = u.tight, nu = u.tShift[d], _u = u.sCount[d], gu = u.listIndent;
    if (u.listIndent = u.blkIndent, u.blkIndent = ae, u.tight = !0, u.tShift[d] = Z - u.bMarks[d], u.sCount[d] = z, Z >= s && u.isEmpty(d + 1) ? u.line = Math.min(u.line + 2, t) : u.md.block.tokenize(u, d, t, !0), (!u.tight || H) && (_ = !1), H = u.line - d > 1 && u.isEmpty(u.line - 1), u.blkIndent = u.listIndent, u.listIndent = gu, u.tShift[d] = nu, u.sCount[d] = _u, u.tight = qe, l = u.push("list_item_close", "li", -1), l.markup = String.fromCharCode(w), d = u.line, ye[1] = d, d >= t || u.sCount[d] < u.blkIndent || u.sCount[d] - u.blkIndent >= 4)
      break;
    let ru = !1;
    for (let Re = 0, Fe = P.length; Re < Fe; Re++)
      if (P[Re](u, d, t, !0)) {
        ru = !0;
        break;
      }
    if (ru)
      break;
    if (A) {
      if (C = Uc(u, d), C < 0)
        break;
      f = u.bMarks[d] + u.tShift[d];
    } else if (C = qc(u, d), C < 0)
      break;
    if (w !== u.src.charCodeAt(C - 1))
      break;
  }
  return A ? l = u.push("ordered_list_close", "ol", -1) : l = u.push("bullet_list_close", "ul", -1), l.markup = String.fromCharCode(w), N[1] = d, u.line = d, u.parentType = B, _ && o6(u, O), !0;
}
function c6(u, n, t, i) {
  let s = u.bMarks[n] + u.tShift[n], c = u.eMarks[n], f = n + 1;
  if (u.sCount[n] - u.blkIndent >= 4 || u.src.charCodeAt(s) !== 91)
    return !1;
  function l(P) {
    const B = u.lineMax;
    if (P >= B || u.isEmpty(P))
      return null;
    let R = !1;
    if (u.sCount[P] - u.blkIndent > 3 && (R = !0), u.sCount[P] < 0 && (R = !0), !R) {
      const Q = u.md.block.ruler.getRules("reference"), ae = u.parentType;
      u.parentType = "reference";
      let ye = !1;
      for (let qe = 0, nu = Q.length; qe < nu; qe++)
        if (Q[qe](u, P, B, !0)) {
          ye = !0;
          break;
        }
      if (u.parentType = ae, ye)
        return null;
    }
    const z = u.bMarks[P] + u.tShift[P], Z = u.eMarks[P];
    return u.src.slice(z, Z + 1);
  }
  let d = u.src.slice(s, c + 1);
  c = d.length;
  let _ = -1;
  for (s = 1; s < c; s++) {
    const P = d.charCodeAt(s);
    if (P === 91)
      return !1;
    if (P === 93) {
      _ = s;
      break;
    } else if (P === 10) {
      const B = l(f);
      B !== null && (d += B, c = d.length, f++);
    } else if (P === 92 && (s++, s < c && d.charCodeAt(s) === 10)) {
      const B = l(f);
      B !== null && (d += B, c = d.length, f++);
    }
  }
  if (_ < 0 || d.charCodeAt(_ + 1) !== 58)
    return !1;
  for (s = _ + 2; s < c; s++) {
    const P = d.charCodeAt(s);
    if (P === 10) {
      const B = l(f);
      B !== null && (d += B, c = d.length, f++);
    } else if (!ce(P))
      break;
  }
  const y = u.md.helpers.parseLinkDestination(d, s, c);
  if (!y.ok)
    return !1;
  const A = u.md.normalizeLink(y.str);
  if (!u.md.validateLink(A))
    return !1;
  s = y.pos;
  const F = s, C = f, w = s;
  for (; s < c; s++) {
    const P = d.charCodeAt(s);
    if (P === 10) {
      const B = l(f);
      B !== null && (d += B, c = d.length, f++);
    } else if (!ce(P))
      break;
  }
  let O = u.md.helpers.parseLinkTitle(d, s, c);
  for (; O.can_continue; ) {
    const P = l(f);
    if (P === null)
      break;
    d += P, s = c, c = d.length, f++, O = u.md.helpers.parseLinkTitle(d, s, c, O);
  }
  let N;
  for (s < c && w !== s && O.ok ? (N = O.str, s = O.pos) : (N = "", s = F, f = C); s < c; ) {
    const P = d.charCodeAt(s);
    if (!ce(P))
      break;
    s++;
  }
  if (s < c && d.charCodeAt(s) !== 10 && N)
    for (N = "", s = F, f = C; s < c; ) {
      const P = d.charCodeAt(s);
      if (!ce(P))
        break;
      s++;
    }
  if (s < c && d.charCodeAt(s) !== 10)
    return !1;
  const H = Lr(d.slice(1, _));
  return H ? (i || (typeof u.env.references > "u" && (u.env.references = {}), typeof u.env.references[H] > "u" && (u.env.references[H] = { title: N, href: A }), u.line = f), !0) : !1;
}
const a6 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], f6 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", l6 = "[^\"'=<>`\\x00-\\x20]+", h6 = "'[^']*'", d6 = '"[^"]*"', p6 = "(?:" + l6 + "|" + h6 + "|" + d6 + ")", b6 = "(?:\\s+" + f6 + "(?:\\s*=\\s*" + p6 + ")?)", aa = "<[A-Za-z][A-Za-z0-9\\-]*" + b6 + "*\\s*\\/?>", fa = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", _6 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", g6 = "<[?][\\s\\S]*?[?]>", m6 = "<![A-Za-z][^>]*>", x6 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", y6 = new RegExp("^(?:" + aa + "|" + fa + "|" + _6 + "|" + g6 + "|" + m6 + "|" + x6 + ")"), v6 = new RegExp("^(?:" + aa + "|" + fa + ")"), qt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + a6.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(v6.source + "\\s*$"), /^$/, !1]
];
function w6(u, n, t, i) {
  let s = u.bMarks[n] + u.tShift[n], c = u.eMarks[n];
  if (u.sCount[n] - u.blkIndent >= 4 || !u.md.options.html || u.src.charCodeAt(s) !== 60)
    return !1;
  let f = u.src.slice(s, c), l = 0;
  for (; l < qt.length && !qt[l][0].test(f); l++)
    ;
  if (l === qt.length)
    return !1;
  if (i)
    return qt[l][2];
  let d = n + 1;
  if (!qt[l][1].test(f)) {
    for (; d < t && !(u.sCount[d] < u.blkIndent); d++)
      if (s = u.bMarks[d] + u.tShift[d], c = u.eMarks[d], f = u.src.slice(s, c), qt[l][1].test(f)) {
        f.length !== 0 && d++;
        break;
      }
  }
  u.line = d;
  const _ = u.push("html_block", "", 0);
  return _.map = [n, d], _.content = u.getLines(n, d, u.blkIndent, !0), !0;
}
function E6(u, n, t, i) {
  let s = u.bMarks[n] + u.tShift[n], c = u.eMarks[n];
  if (u.sCount[n] - u.blkIndent >= 4)
    return !1;
  let f = u.src.charCodeAt(s);
  if (f !== 35 || s >= c)
    return !1;
  let l = 1;
  for (f = u.src.charCodeAt(++s); f === 35 && s < c && l <= 6; )
    l++, f = u.src.charCodeAt(++s);
  if (l > 6 || s < c && !ce(f))
    return !1;
  if (i)
    return !0;
  c = u.skipSpacesBack(c, s);
  const d = u.skipCharsBack(c, 35, s);
  d > s && ce(u.src.charCodeAt(d - 1)) && (c = d), u.line = n + 1;
  const _ = u.push("heading_open", "h" + String(l), 1);
  _.markup = "########".slice(0, l), _.map = [n, u.line];
  const y = u.push("inline", "", 0);
  y.content = u.src.slice(s, c).trim(), y.map = [n, u.line], y.children = [];
  const A = u.push("heading_close", "h" + String(l), -1);
  return A.markup = "########".slice(0, l), !0;
}
function A6(u, n, t) {
  const i = u.md.block.ruler.getRules("paragraph");
  if (u.sCount[n] - u.blkIndent >= 4)
    return !1;
  const s = u.parentType;
  u.parentType = "paragraph";
  let c = 0, f, l = n + 1;
  for (; l < t && !u.isEmpty(l); l++) {
    if (u.sCount[l] - u.blkIndent > 3)
      continue;
    if (u.sCount[l] >= u.blkIndent) {
      let C = u.bMarks[l] + u.tShift[l];
      const w = u.eMarks[l];
      if (C < w && (f = u.src.charCodeAt(C), (f === 45 || f === 61) && (C = u.skipChars(C, f), C = u.skipSpaces(C), C >= w))) {
        c = f === 61 ? 1 : 2;
        break;
      }
    }
    if (u.sCount[l] < 0)
      continue;
    let F = !1;
    for (let C = 0, w = i.length; C < w; C++)
      if (i[C](u, l, t, !0)) {
        F = !0;
        break;
      }
    if (F)
      break;
  }
  if (!c)
    return !1;
  const d = u.getLines(n, l, u.blkIndent, !1).trim();
  u.line = l + 1;
  const _ = u.push("heading_open", "h" + String(c), 1);
  _.markup = String.fromCharCode(f), _.map = [n, u.line];
  const y = u.push("inline", "", 0);
  y.content = d, y.map = [n, u.line - 1], y.children = [];
  const A = u.push("heading_close", "h" + String(c), -1);
  return A.markup = String.fromCharCode(f), u.parentType = s, !0;
}
function C6(u, n, t) {
  const i = u.md.block.ruler.getRules("paragraph"), s = u.parentType;
  let c = n + 1;
  for (u.parentType = "paragraph"; c < t && !u.isEmpty(c); c++) {
    if (u.sCount[c] - u.blkIndent > 3 || u.sCount[c] < 0)
      continue;
    let _ = !1;
    for (let y = 0, A = i.length; y < A; y++)
      if (i[y](u, c, t, !0)) {
        _ = !0;
        break;
      }
    if (_)
      break;
  }
  const f = u.getLines(n, c, u.blkIndent, !1).trim();
  u.line = c;
  const l = u.push("paragraph_open", "p", 1);
  l.map = [n, u.line];
  const d = u.push("inline", "", 0);
  return d.content = f, d.map = [n, u.line], d.children = [], u.push("paragraph_close", "p", -1), u.parentType = s, !0;
}
const vr = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", u6, ["paragraph", "reference"]],
  ["code", t6],
  ["fence", n6, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", r6, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", i6, ["paragraph", "reference", "blockquote", "list"]],
  ["list", s6, ["paragraph", "reference", "blockquote"]],
  ["reference", c6],
  ["html_block", w6, ["paragraph", "reference", "blockquote"]],
  ["heading", E6, ["paragraph", "reference", "blockquote"]],
  ["lheading", A6],
  ["paragraph", C6]
];
function Mr() {
  this.ruler = new Ze();
  for (let u = 0; u < vr.length; u++)
    this.ruler.push(vr[u][0], vr[u][1], { alt: (vr[u][2] || []).slice() });
}
Mr.prototype.tokenize = function(u, n, t) {
  const i = this.ruler.getRules(""), s = i.length, c = u.md.options.maxNesting;
  let f = n, l = !1;
  for (; f < t && (u.line = f = u.skipEmptyLines(f), !(f >= t || u.sCount[f] < u.blkIndent)); ) {
    if (u.level >= c) {
      u.line = t;
      break;
    }
    const d = u.line;
    let _ = !1;
    for (let y = 0; y < s; y++)
      if (_ = i[y](u, f, t, !1), _) {
        if (d >= u.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!_)
      throw new Error("none of the block rules matched");
    u.tight = !l, u.isEmpty(u.line - 1) && (l = !0), f = u.line, f < t && u.isEmpty(f) && (l = !0, f++, u.line = f);
  }
};
Mr.prototype.parse = function(u, n, t, i) {
  if (!u)
    return;
  const s = new this.State(u, n, t, i);
  this.tokenize(s, s.line, s.lineMax);
};
Mr.prototype.State = Nu;
function En(u, n, t, i) {
  this.src = u, this.env = t, this.md = n, this.tokens = i, this.tokens_meta = Array(i.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
En.prototype.pushPending = function() {
  const u = new Du("text", "", 0);
  return u.content = this.pending, u.level = this.pendingLevel, this.tokens.push(u), this.pending = "", u;
};
En.prototype.push = function(u, n, t) {
  this.pending && this.pushPending();
  const i = new Du(u, n, t);
  let s = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), i.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], s = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(i), this.tokens_meta.push(s), i;
};
En.prototype.scanDelims = function(u, n) {
  const t = this.posMax, i = this.src.charCodeAt(u), s = u > 0 ? this.src.charCodeAt(u - 1) : 32;
  let c = u;
  for (; c < t && this.src.charCodeAt(c) === i; )
    c++;
  const f = c - u, l = c < t ? this.src.charCodeAt(c) : 32, d = yn(s) || xn(String.fromCharCode(s)), _ = yn(l) || xn(String.fromCharCode(l)), y = mn(s), A = mn(l), F = !A && (!_ || y || d), C = !y && (!d || A || _);
  return { can_open: F && (n || !C || d), can_close: C && (n || !F || _), length: f };
};
En.prototype.Token = Du;
function D6(u) {
  switch (u) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function k6(u, n) {
  let t = u.pos;
  for (; t < u.posMax && !D6(u.src.charCodeAt(t)); )
    t++;
  return t === u.pos ? !1 : (n || (u.pending += u.src.slice(u.pos, t)), u.pos = t, !0);
}
const F6 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function S6(u, n) {
  if (!u.md.options.linkify || u.linkLevel > 0)
    return !1;
  const t = u.pos, i = u.posMax;
  if (t + 3 > i || u.src.charCodeAt(t) !== 58 || u.src.charCodeAt(t + 1) !== 47 || u.src.charCodeAt(t + 2) !== 47)
    return !1;
  const s = u.pending.match(F6);
  if (!s)
    return !1;
  const c = s[1], f = u.md.linkify.matchAtStart(u.src.slice(t - c.length));
  if (!f)
    return !1;
  let l = f.url;
  if (l.length <= c.length)
    return !1;
  l = l.replace(/\*+$/, "");
  const d = u.md.normalizeLink(l);
  if (!u.md.validateLink(d))
    return !1;
  if (!n) {
    u.pending = u.pending.slice(0, -c.length);
    const _ = u.push("link_open", "a", 1);
    _.attrs = [["href", d]], _.markup = "linkify", _.info = "auto";
    const y = u.push("text", "", 0);
    y.content = u.md.normalizeLinkText(l);
    const A = u.push("link_close", "a", -1);
    A.markup = "linkify", A.info = "auto";
  }
  return u.pos += l.length - c.length, !0;
}
function T6(u, n) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 10)
    return !1;
  const i = u.pending.length - 1, s = u.posMax;
  if (!n)
    if (i >= 0 && u.pending.charCodeAt(i) === 32)
      if (i >= 1 && u.pending.charCodeAt(i - 1) === 32) {
        let c = i - 1;
        for (; c >= 1 && u.pending.charCodeAt(c - 1) === 32; )
          c--;
        u.pending = u.pending.slice(0, c), u.push("hardbreak", "br", 0);
      } else
        u.pending = u.pending.slice(0, -1), u.push("softbreak", "br", 0);
    else
      u.push("softbreak", "br", 0);
  for (t++; t < s && ce(u.src.charCodeAt(t)); )
    t++;
  return u.pos = t, !0;
}
const I0 = [];
for (let u = 0; u < 256; u++)
  I0.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(u) {
  I0[u.charCodeAt(0)] = 1;
});
function I6(u, n) {
  let t = u.pos;
  const i = u.posMax;
  if (u.src.charCodeAt(t) !== 92 || (t++, t >= i))
    return !1;
  let s = u.src.charCodeAt(t);
  if (s === 10) {
    for (n || u.push("hardbreak", "br", 0), t++; t < i && (s = u.src.charCodeAt(t), !!ce(s)); )
      t++;
    return u.pos = t, !0;
  }
  let c = u.src[t];
  if (s >= 55296 && s <= 56319 && t + 1 < i) {
    const l = u.src.charCodeAt(t + 1);
    l >= 56320 && l <= 57343 && (c += u.src[t + 1], t++);
  }
  const f = "\\" + c;
  if (!n) {
    const l = u.push("text_special", "", 0);
    s < 256 && I0[s] !== 0 ? l.content = c : l.content = f, l.markup = f, l.info = "escape";
  }
  return u.pos = t + 1, !0;
}
function O6(u, n) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 96)
    return !1;
  const s = t;
  t++;
  const c = u.posMax;
  for (; t < c && u.src.charCodeAt(t) === 96; )
    t++;
  const f = u.src.slice(s, t), l = f.length;
  if (u.backticksScanned && (u.backticks[l] || 0) <= s)
    return n || (u.pending += f), u.pos += l, !0;
  let d = t, _;
  for (; (_ = u.src.indexOf("`", d)) !== -1; ) {
    for (d = _ + 1; d < c && u.src.charCodeAt(d) === 96; )
      d++;
    const y = d - _;
    if (y === l) {
      if (!n) {
        const A = u.push("code_inline", "code", 0);
        A.markup = f, A.content = u.src.slice(t, _).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return u.pos = d, !0;
    }
    u.backticks[y] = _;
  }
  return u.backticksScanned = !0, n || (u.pending += f), u.pos += l, !0;
}
function R6(u, n) {
  const t = u.pos, i = u.src.charCodeAt(t);
  if (n || i !== 126)
    return !1;
  const s = u.scanDelims(u.pos, !0);
  let c = s.length;
  const f = String.fromCharCode(i);
  if (c < 2)
    return !1;
  let l;
  c % 2 && (l = u.push("text", "", 0), l.content = f, c--);
  for (let d = 0; d < c; d += 2)
    l = u.push("text", "", 0), l.content = f + f, u.delimiters.push({
      marker: i,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: u.tokens.length - 1,
      end: -1,
      open: s.can_open,
      close: s.can_close
    });
  return u.pos += s.length, !0;
}
function Hc(u, n) {
  let t;
  const i = [], s = n.length;
  for (let c = 0; c < s; c++) {
    const f = n[c];
    if (f.marker !== 126 || f.end === -1)
      continue;
    const l = n[f.end];
    t = u.tokens[f.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = u.tokens[l.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", u.tokens[l.token - 1].type === "text" && u.tokens[l.token - 1].content === "~" && i.push(l.token - 1);
  }
  for (; i.length; ) {
    const c = i.pop();
    let f = c + 1;
    for (; f < u.tokens.length && u.tokens[f].type === "s_close"; )
      f++;
    f--, c !== f && (t = u.tokens[f], u.tokens[f] = u.tokens[c], u.tokens[c] = t);
  }
}
function N6(u) {
  const n = u.tokens_meta, t = u.tokens_meta.length;
  Hc(u, u.delimiters);
  for (let i = 0; i < t; i++)
    n[i] && n[i].delimiters && Hc(u, n[i].delimiters);
}
const la = {
  tokenize: R6,
  postProcess: N6
};
function L6(u, n) {
  const t = u.pos, i = u.src.charCodeAt(t);
  if (n || i !== 95 && i !== 42)
    return !1;
  const s = u.scanDelims(u.pos, i === 42);
  for (let c = 0; c < s.length; c++) {
    const f = u.push("text", "", 0);
    f.content = String.fromCharCode(i), u.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: i,
      // Total length of these series of delimiters.
      //
      length: s.length,
      // A position of the token this delimiter corresponds to.
      //
      token: u.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: s.can_open,
      close: s.can_close
    });
  }
  return u.pos += s.length, !0;
}
function $c(u, n) {
  const t = n.length;
  for (let i = t - 1; i >= 0; i--) {
    const s = n[i];
    if (s.marker !== 95 && s.marker !== 42 || s.end === -1)
      continue;
    const c = n[s.end], f = i > 0 && n[i - 1].end === s.end + 1 && // check that first two markers match and adjacent
    n[i - 1].marker === s.marker && n[i - 1].token === s.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    n[s.end + 1].token === c.token + 1, l = String.fromCharCode(s.marker), d = u.tokens[s.token];
    d.type = f ? "strong_open" : "em_open", d.tag = f ? "strong" : "em", d.nesting = 1, d.markup = f ? l + l : l, d.content = "";
    const _ = u.tokens[c.token];
    _.type = f ? "strong_close" : "em_close", _.tag = f ? "strong" : "em", _.nesting = -1, _.markup = f ? l + l : l, _.content = "", f && (u.tokens[n[i - 1].token].content = "", u.tokens[n[s.end + 1].token].content = "", i--);
  }
}
function M6(u) {
  const n = u.tokens_meta, t = u.tokens_meta.length;
  $c(u, u.delimiters);
  for (let i = 0; i < t; i++)
    n[i] && n[i].delimiters && $c(u, n[i].delimiters);
}
const ha = {
  tokenize: L6,
  postProcess: M6
};
function B6(u, n) {
  let t, i, s, c, f = "", l = "", d = u.pos, _ = !0;
  if (u.src.charCodeAt(u.pos) !== 91)
    return !1;
  const y = u.pos, A = u.posMax, F = u.pos + 1, C = u.md.helpers.parseLinkLabel(u, u.pos, !0);
  if (C < 0)
    return !1;
  let w = C + 1;
  if (w < A && u.src.charCodeAt(w) === 40) {
    for (_ = !1, w++; w < A && (t = u.src.charCodeAt(w), !(!ce(t) && t !== 10)); w++)
      ;
    if (w >= A)
      return !1;
    if (d = w, s = u.md.helpers.parseLinkDestination(u.src, w, u.posMax), s.ok) {
      for (f = u.md.normalizeLink(s.str), u.md.validateLink(f) ? w = s.pos : f = "", d = w; w < A && (t = u.src.charCodeAt(w), !(!ce(t) && t !== 10)); w++)
        ;
      if (s = u.md.helpers.parseLinkTitle(u.src, w, u.posMax), w < A && d !== w && s.ok)
        for (l = s.str, w = s.pos; w < A && (t = u.src.charCodeAt(w), !(!ce(t) && t !== 10)); w++)
          ;
    }
    (w >= A || u.src.charCodeAt(w) !== 41) && (_ = !0), w++;
  }
  if (_) {
    if (typeof u.env.references > "u")
      return !1;
    if (w < A && u.src.charCodeAt(w) === 91 ? (d = w + 1, w = u.md.helpers.parseLinkLabel(u, w), w >= 0 ? i = u.src.slice(d, w++) : w = C + 1) : w = C + 1, i || (i = u.src.slice(F, C)), c = u.env.references[Lr(i)], !c)
      return u.pos = y, !1;
    f = c.href, l = c.title;
  }
  if (!n) {
    u.pos = F, u.posMax = C;
    const O = u.push("link_open", "a", 1), N = [["href", f]];
    O.attrs = N, l && N.push(["title", l]), u.linkLevel++, u.md.inline.tokenize(u), u.linkLevel--, u.push("link_close", "a", -1);
  }
  return u.pos = w, u.posMax = A, !0;
}
function P6(u, n) {
  let t, i, s, c, f, l, d, _, y = "";
  const A = u.pos, F = u.posMax;
  if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91)
    return !1;
  const C = u.pos + 2, w = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
  if (w < 0)
    return !1;
  if (c = w + 1, c < F && u.src.charCodeAt(c) === 40) {
    for (c++; c < F && (t = u.src.charCodeAt(c), !(!ce(t) && t !== 10)); c++)
      ;
    if (c >= F)
      return !1;
    for (_ = c, l = u.md.helpers.parseLinkDestination(u.src, c, u.posMax), l.ok && (y = u.md.normalizeLink(l.str), u.md.validateLink(y) ? c = l.pos : y = ""), _ = c; c < F && (t = u.src.charCodeAt(c), !(!ce(t) && t !== 10)); c++)
      ;
    if (l = u.md.helpers.parseLinkTitle(u.src, c, u.posMax), c < F && _ !== c && l.ok)
      for (d = l.str, c = l.pos; c < F && (t = u.src.charCodeAt(c), !(!ce(t) && t !== 10)); c++)
        ;
    else
      d = "";
    if (c >= F || u.src.charCodeAt(c) !== 41)
      return u.pos = A, !1;
    c++;
  } else {
    if (typeof u.env.references > "u")
      return !1;
    if (c < F && u.src.charCodeAt(c) === 91 ? (_ = c + 1, c = u.md.helpers.parseLinkLabel(u, c), c >= 0 ? s = u.src.slice(_, c++) : c = w + 1) : c = w + 1, s || (s = u.src.slice(C, w)), f = u.env.references[Lr(s)], !f)
      return u.pos = A, !1;
    y = f.href, d = f.title;
  }
  if (!n) {
    i = u.src.slice(C, w);
    const O = [];
    u.md.inline.parse(
      i,
      u.md,
      u.env,
      O
    );
    const N = u.push("image", "img", 0), H = [["src", y], ["alt", ""]];
    N.attrs = H, N.children = O, N.content = i, d && H.push(["title", d]);
  }
  return u.pos = c, u.posMax = F, !0;
}
const z6 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, q6 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function U6(u, n) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 60)
    return !1;
  const i = u.pos, s = u.posMax;
  for (; ; ) {
    if (++t >= s)
      return !1;
    const f = u.src.charCodeAt(t);
    if (f === 60)
      return !1;
    if (f === 62)
      break;
  }
  const c = u.src.slice(i + 1, t);
  if (q6.test(c)) {
    const f = u.md.normalizeLink(c);
    if (!u.md.validateLink(f))
      return !1;
    if (!n) {
      const l = u.push("link_open", "a", 1);
      l.attrs = [["href", f]], l.markup = "autolink", l.info = "auto";
      const d = u.push("text", "", 0);
      d.content = u.md.normalizeLinkText(c);
      const _ = u.push("link_close", "a", -1);
      _.markup = "autolink", _.info = "auto";
    }
    return u.pos += c.length + 2, !0;
  }
  if (z6.test(c)) {
    const f = u.md.normalizeLink("mailto:" + c);
    if (!u.md.validateLink(f))
      return !1;
    if (!n) {
      const l = u.push("link_open", "a", 1);
      l.attrs = [["href", f]], l.markup = "autolink", l.info = "auto";
      const d = u.push("text", "", 0);
      d.content = u.md.normalizeLinkText(c);
      const _ = u.push("link_close", "a", -1);
      _.markup = "autolink", _.info = "auto";
    }
    return u.pos += c.length + 2, !0;
  }
  return !1;
}
function H6(u) {
  return /^<a[>\s]/i.test(u);
}
function $6(u) {
  return /^<\/a\s*>/i.test(u);
}
function W6(u) {
  const n = u | 32;
  return n >= 97 && n <= 122;
}
function G6(u, n) {
  if (!u.md.options.html)
    return !1;
  const t = u.posMax, i = u.pos;
  if (u.src.charCodeAt(i) !== 60 || i + 2 >= t)
    return !1;
  const s = u.src.charCodeAt(i + 1);
  if (s !== 33 && s !== 63 && s !== 47 && !W6(s))
    return !1;
  const c = u.src.slice(i).match(y6);
  if (!c)
    return !1;
  if (!n) {
    const f = u.push("html_inline", "", 0);
    f.content = c[0], H6(f.content) && u.linkLevel++, $6(f.content) && u.linkLevel--;
  }
  return u.pos += c[0].length, !0;
}
const Z6 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, j6 = /^&([a-z][a-z0-9]{1,31});/i;
function K6(u, n) {
  const t = u.pos, i = u.posMax;
  if (u.src.charCodeAt(t) !== 38 || t + 1 >= i)
    return !1;
  if (u.src.charCodeAt(t + 1) === 35) {
    const c = u.src.slice(t).match(Z6);
    if (c) {
      if (!n) {
        const f = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), l = u.push("text_special", "", 0);
        l.content = S0(f) ? Ir(f) : Ir(65533), l.markup = c[0], l.info = "entity";
      }
      return u.pos += c[0].length, !0;
    }
  } else {
    const c = u.src.slice(t).match(j6);
    if (c) {
      const f = ra(c[0]);
      if (f !== c[0]) {
        if (!n) {
          const l = u.push("text_special", "", 0);
          l.content = f, l.markup = c[0], l.info = "entity";
        }
        return u.pos += c[0].length, !0;
      }
    }
  }
  return !1;
}
function Wc(u) {
  const n = {}, t = u.length;
  if (!t)
    return;
  let i = 0, s = -2;
  const c = [];
  for (let f = 0; f < t; f++) {
    const l = u[f];
    if (c.push(0), (u[i].marker !== l.marker || s !== l.token - 1) && (i = f), s = l.token, l.length = l.length || 0, !l.close)
      continue;
    n.hasOwnProperty(l.marker) || (n[l.marker] = [-1, -1, -1, -1, -1, -1]);
    const d = n[l.marker][(l.open ? 3 : 0) + l.length % 3];
    let _ = i - c[i] - 1, y = _;
    for (; _ > d; _ -= c[_] + 1) {
      const A = u[_];
      if (A.marker === l.marker && A.open && A.end < 0) {
        let F = !1;
        if ((A.close || l.open) && (A.length + l.length) % 3 === 0 && (A.length % 3 !== 0 || l.length % 3 !== 0) && (F = !0), !F) {
          const C = _ > 0 && !u[_ - 1].open ? c[_ - 1] + 1 : 0;
          c[f] = f - _ + C, c[_] = C, l.open = !1, A.end = f, A.close = !1, y = -1, s = -2;
          break;
        }
      }
    }
    y !== -1 && (n[l.marker][(l.open ? 3 : 0) + (l.length || 0) % 3] = y);
  }
}
function J6(u) {
  const n = u.tokens_meta, t = u.tokens_meta.length;
  Wc(u.delimiters);
  for (let i = 0; i < t; i++)
    n[i] && n[i].delimiters && Wc(n[i].delimiters);
}
function Y6(u) {
  let n, t, i = 0;
  const s = u.tokens, c = u.tokens.length;
  for (n = t = 0; n < c; n++)
    s[n].nesting < 0 && i--, s[n].level = i, s[n].nesting > 0 && i++, s[n].type === "text" && n + 1 < c && s[n + 1].type === "text" ? s[n + 1].content = s[n].content + s[n + 1].content : (n !== t && (s[t] = s[n]), t++);
  n !== t && (s.length = t);
}
const a0 = [
  ["text", k6],
  ["linkify", S6],
  ["newline", T6],
  ["escape", I6],
  ["backticks", O6],
  ["strikethrough", la.tokenize],
  ["emphasis", ha.tokenize],
  ["link", B6],
  ["image", P6],
  ["autolink", U6],
  ["html_inline", G6],
  ["entity", K6]
], f0 = [
  ["balance_pairs", J6],
  ["strikethrough", la.postProcess],
  ["emphasis", ha.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", Y6]
];
function An() {
  this.ruler = new Ze();
  for (let u = 0; u < a0.length; u++)
    this.ruler.push(a0[u][0], a0[u][1]);
  this.ruler2 = new Ze();
  for (let u = 0; u < f0.length; u++)
    this.ruler2.push(f0[u][0], f0[u][1]);
}
An.prototype.skipToken = function(u) {
  const n = u.pos, t = this.ruler.getRules(""), i = t.length, s = u.md.options.maxNesting, c = u.cache;
  if (typeof c[n] < "u") {
    u.pos = c[n];
    return;
  }
  let f = !1;
  if (u.level < s) {
    for (let l = 0; l < i; l++)
      if (u.level++, f = t[l](u, !0), u.level--, f) {
        if (n >= u.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    u.pos = u.posMax;
  f || u.pos++, c[n] = u.pos;
};
An.prototype.tokenize = function(u) {
  const n = this.ruler.getRules(""), t = n.length, i = u.posMax, s = u.md.options.maxNesting;
  for (; u.pos < i; ) {
    const c = u.pos;
    let f = !1;
    if (u.level < s) {
      for (let l = 0; l < t; l++)
        if (f = n[l](u, !1), f) {
          if (c >= u.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (f) {
      if (u.pos >= i)
        break;
      continue;
    }
    u.pending += u.src[u.pos++];
  }
  u.pending && u.pushPending();
};
An.prototype.parse = function(u, n, t, i) {
  const s = new this.State(u, n, t, i);
  this.tokenize(s);
  const c = this.ruler2.getRules(""), f = c.length;
  for (let l = 0; l < f; l++)
    c[l](s);
};
An.prototype.State = En;
function V6(u) {
  const n = {};
  u = u || {}, n.src_Any = Qc.source, n.src_Cc = ea.source, n.src_Z = ta.source, n.src_P = k0.source, n.src_ZPCc = [n.src_Z, n.src_P, n.src_Cc].join("|"), n.src_ZCc = [n.src_Z, n.src_Cc].join("|");
  const t = "[><｜]";
  return n.src_pseudo_letter = "(?:(?!" + t + "|" + n.src_ZPCc + ")" + n.src_Any + ")", n.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", n.src_auth = "(?:(?:(?!" + n.src_ZCc + "|[@/\\[\\]()]).)+@)?", n.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", n.src_host_terminator = "(?=$|" + t + "|" + n.src_ZPCc + ")(?!" + (u["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + n.src_ZPCc + "))", n.src_path = "(?:[/?#](?:(?!" + n.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + n.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + n.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + n.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + n.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + n.src_ZCc + "|[']).)+\\'|\\'(?=" + n.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + n.src_ZCc + "|[.]|$)|" + (u["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + n.src_ZCc + "|$)|;(?!" + n.src_ZCc + "|$)|\\!+(?!" + n.src_ZCc + "|[!]|$)|\\?(?!" + n.src_ZCc + "|[?]|$))+|\\/)?", n.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', n.src_xn = "xn--[a-z0-9\\-]{1,59}", n.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + n.src_xn + "|" + n.src_pseudo_letter + "{1,63})", n.src_domain = "(?:" + n.src_xn + "|(?:" + n.src_pseudo_letter + ")|(?:" + n.src_pseudo_letter + "(?:-|" + n.src_pseudo_letter + "){0,61}" + n.src_pseudo_letter + "))", n.src_host = "(?:(?:(?:(?:" + n.src_domain + ")\\.)*" + n.src_domain + "))", n.tpl_host_fuzzy = "(?:" + n.src_ip4 + "|(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%)))", n.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%))", n.src_host_strict = n.src_host + n.src_host_terminator, n.tpl_host_fuzzy_strict = n.tpl_host_fuzzy + n.src_host_terminator, n.src_host_port_strict = n.src_host + n.src_port + n.src_host_terminator, n.tpl_host_port_fuzzy_strict = n.tpl_host_fuzzy + n.src_port + n.src_host_terminator, n.tpl_host_port_no_ip_fuzzy_strict = n.tpl_host_no_ip_fuzzy + n.src_port + n.src_host_terminator, n.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + n.src_ZPCc + "|>|$))", n.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + n.src_ZCc + ")(" + n.src_email_name + "@" + n.tpl_host_fuzzy_strict + ")", n.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + n.src_ZPCc + "))((?![$+<=>^`|｜])" + n.tpl_host_port_fuzzy_strict + n.src_path + ")", n.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + n.src_ZPCc + "))((?![$+<=>^`|｜])" + n.tpl_host_port_no_ip_fuzzy_strict + n.src_path + ")", n;
}
function m0(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(i) {
      u[i] = t[i];
    });
  }), u;
}
function Br(u) {
  return Object.prototype.toString.call(u);
}
function X6(u) {
  return Br(u) === "[object String]";
}
function Q6(u) {
  return Br(u) === "[object Object]";
}
function e_(u) {
  return Br(u) === "[object RegExp]";
}
function Gc(u) {
  return Br(u) === "[object Function]";
}
function u_(u) {
  return u.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const da = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function t_(u) {
  return Object.keys(u || {}).reduce(function(n, t) {
    return n || da.hasOwnProperty(t);
  }, !1);
}
const n_ = {
  "http:": {
    validate: function(u, n, t) {
      const i = u.slice(n);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(i) ? i.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(u, n, t) {
      const i = u.slice(n);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(i) ? n >= 3 && u[n - 3] === ":" || n >= 3 && u[n - 3] === "/" ? 0 : i.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(u, n, t) {
      const i = u.slice(n);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(i) ? i.match(t.re.mailto)[0].length : 0;
    }
  }
}, r_ = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", i_ = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function o_(u) {
  u.__index__ = -1, u.__text_cache__ = "";
}
function s_(u) {
  return function(n, t) {
    const i = n.slice(t);
    return u.test(i) ? i.match(u)[0].length : 0;
  };
}
function Zc() {
  return function(u, n) {
    n.normalize(u);
  };
}
function Or(u) {
  const n = u.re = V6(u.__opts__), t = u.__tlds__.slice();
  u.onCompile(), u.__tlds_replaced__ || t.push(r_), t.push(n.src_xn), n.src_tlds = t.join("|");
  function i(l) {
    return l.replace("%TLDS%", n.src_tlds);
  }
  n.email_fuzzy = RegExp(i(n.tpl_email_fuzzy), "i"), n.link_fuzzy = RegExp(i(n.tpl_link_fuzzy), "i"), n.link_no_ip_fuzzy = RegExp(i(n.tpl_link_no_ip_fuzzy), "i"), n.host_fuzzy_test = RegExp(i(n.tpl_host_fuzzy_test), "i");
  const s = [];
  u.__compiled__ = {};
  function c(l, d) {
    throw new Error('(LinkifyIt) Invalid schema "' + l + '": ' + d);
  }
  Object.keys(u.__schemas__).forEach(function(l) {
    const d = u.__schemas__[l];
    if (d === null)
      return;
    const _ = { validate: null, link: null };
    if (u.__compiled__[l] = _, Q6(d)) {
      e_(d.validate) ? _.validate = s_(d.validate) : Gc(d.validate) ? _.validate = d.validate : c(l, d), Gc(d.normalize) ? _.normalize = d.normalize : d.normalize ? c(l, d) : _.normalize = Zc();
      return;
    }
    if (X6(d)) {
      s.push(l);
      return;
    }
    c(l, d);
  }), s.forEach(function(l) {
    u.__compiled__[u.__schemas__[l]] && (u.__compiled__[l].validate = u.__compiled__[u.__schemas__[l]].validate, u.__compiled__[l].normalize = u.__compiled__[u.__schemas__[l]].normalize);
  }), u.__compiled__[""] = { validate: null, normalize: Zc() };
  const f = Object.keys(u.__compiled__).filter(function(l) {
    return l.length > 0 && u.__compiled__[l];
  }).map(u_).join("|");
  u.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + n.src_ZPCc + "))(" + f + ")", "i"), u.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + n.src_ZPCc + "))(" + f + ")", "ig"), u.re.schema_at_start = RegExp("^" + u.re.schema_search.source, "i"), u.re.pretest = RegExp(
    "(" + u.re.schema_test.source + ")|(" + u.re.host_fuzzy_test.source + ")|@",
    "i"
  ), o_(u);
}
function c_(u, n) {
  const t = u.__index__, i = u.__last_index__, s = u.__text_cache__.slice(t, i);
  this.schema = u.__schema__.toLowerCase(), this.index = t + n, this.lastIndex = i + n, this.raw = s, this.text = s, this.url = s;
}
function x0(u, n) {
  const t = new c_(u, n);
  return u.__compiled__[t.schema].normalize(t, u), t;
}
function tu(u, n) {
  if (!(this instanceof tu))
    return new tu(u, n);
  n || t_(u) && (n = u, u = {}), this.__opts__ = m0({}, da, n), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = m0({}, n_, u), this.__compiled__ = {}, this.__tlds__ = i_, this.__tlds_replaced__ = !1, this.re = {}, Or(this);
}
tu.prototype.add = function(n, t) {
  return this.__schemas__[n] = t, Or(this), this;
};
tu.prototype.set = function(n) {
  return this.__opts__ = m0(this.__opts__, n), this;
};
tu.prototype.test = function(n) {
  if (this.__text_cache__ = n, this.__index__ = -1, !n.length)
    return !1;
  let t, i, s, c, f, l, d, _, y;
  if (this.re.schema_test.test(n)) {
    for (d = this.re.schema_search, d.lastIndex = 0; (t = d.exec(n)) !== null; )
      if (c = this.testSchemaAt(n, t[2], d.lastIndex), c) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + c;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (_ = n.search(this.re.host_fuzzy_test), _ >= 0 && (this.__index__ < 0 || _ < this.__index__) && (i = n.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (f = i.index + i[1].length, (this.__index__ < 0 || f < this.__index__) && (this.__schema__ = "", this.__index__ = f, this.__last_index__ = i.index + i[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (y = n.indexOf("@"), y >= 0 && (s = n.match(this.re.email_fuzzy)) !== null && (f = s.index + s[1].length, l = s.index + s[0].length, (this.__index__ < 0 || f < this.__index__ || f === this.__index__ && l > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = f, this.__last_index__ = l))), this.__index__ >= 0;
};
tu.prototype.pretest = function(n) {
  return this.re.pretest.test(n);
};
tu.prototype.testSchemaAt = function(n, t, i) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(n, i, this) : 0;
};
tu.prototype.match = function(n) {
  const t = [];
  let i = 0;
  this.__index__ >= 0 && this.__text_cache__ === n && (t.push(x0(this, i)), i = this.__last_index__);
  let s = i ? n.slice(i) : n;
  for (; this.test(s); )
    t.push(x0(this, i)), s = s.slice(this.__last_index__), i += this.__last_index__;
  return t.length ? t : null;
};
tu.prototype.matchAtStart = function(n) {
  if (this.__text_cache__ = n, this.__index__ = -1, !n.length)
    return null;
  const t = this.re.schema_at_start.exec(n);
  if (!t)
    return null;
  const i = this.testSchemaAt(n, t[2], t[0].length);
  return i ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + i, x0(this, 0)) : null;
};
tu.prototype.tlds = function(n, t) {
  return n = Array.isArray(n) ? n : [n], t ? (this.__tlds__ = this.__tlds__.concat(n).sort().filter(function(i, s, c) {
    return i !== c[s - 1];
  }).reverse(), Or(this), this) : (this.__tlds__ = n.slice(), this.__tlds_replaced__ = !0, Or(this), this);
};
tu.prototype.normalize = function(n) {
  n.schema || (n.url = "http://" + n.url), n.schema === "mailto:" && !/^mailto:/i.test(n.url) && (n.url = "mailto:" + n.url);
};
tu.prototype.onCompile = function() {
};
const Wt = 2147483647, Tu = 36, O0 = 1, vn = 26, a_ = 38, f_ = 700, pa = 72, ba = 128, _a = "-", l_ = /^xn--/, h_ = /[^\0-\x7F]/, d_ = /[\x2E\u3002\uFF0E\uFF61]/g, p_ = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, l0 = Tu - O0, Iu = Math.floor, h0 = String.fromCharCode;
function tt(u) {
  throw new RangeError(p_[u]);
}
function b_(u, n) {
  const t = [];
  let i = u.length;
  for (; i--; )
    t[i] = n(u[i]);
  return t;
}
function ga(u, n) {
  const t = u.split("@");
  let i = "";
  t.length > 1 && (i = t[0] + "@", u = t[1]), u = u.replace(d_, ".");
  const s = u.split("."), c = b_(s, n).join(".");
  return i + c;
}
function ma(u) {
  const n = [];
  let t = 0;
  const i = u.length;
  for (; t < i; ) {
    const s = u.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < i) {
      const c = u.charCodeAt(t++);
      (c & 64512) == 56320 ? n.push(((s & 1023) << 10) + (c & 1023) + 65536) : (n.push(s), t--);
    } else
      n.push(s);
  }
  return n;
}
const __ = (u) => String.fromCodePoint(...u), g_ = function(u) {
  return u >= 48 && u < 58 ? 26 + (u - 48) : u >= 65 && u < 91 ? u - 65 : u >= 97 && u < 123 ? u - 97 : Tu;
}, jc = function(u, n) {
  return u + 22 + 75 * (u < 26) - ((n != 0) << 5);
}, xa = function(u, n, t) {
  let i = 0;
  for (u = t ? Iu(u / f_) : u >> 1, u += Iu(u / n); u > l0 * vn >> 1; i += Tu)
    u = Iu(u / l0);
  return Iu(i + (l0 + 1) * u / (u + a_));
}, ya = function(u) {
  const n = [], t = u.length;
  let i = 0, s = ba, c = pa, f = u.lastIndexOf(_a);
  f < 0 && (f = 0);
  for (let l = 0; l < f; ++l)
    u.charCodeAt(l) >= 128 && tt("not-basic"), n.push(u.charCodeAt(l));
  for (let l = f > 0 ? f + 1 : 0; l < t; ) {
    const d = i;
    for (let y = 1, A = Tu; ; A += Tu) {
      l >= t && tt("invalid-input");
      const F = g_(u.charCodeAt(l++));
      F >= Tu && tt("invalid-input"), F > Iu((Wt - i) / y) && tt("overflow"), i += F * y;
      const C = A <= c ? O0 : A >= c + vn ? vn : A - c;
      if (F < C)
        break;
      const w = Tu - C;
      y > Iu(Wt / w) && tt("overflow"), y *= w;
    }
    const _ = n.length + 1;
    c = xa(i - d, _, d == 0), Iu(i / _) > Wt - s && tt("overflow"), s += Iu(i / _), i %= _, n.splice(i++, 0, s);
  }
  return String.fromCodePoint(...n);
}, va = function(u) {
  const n = [];
  u = ma(u);
  const t = u.length;
  let i = ba, s = 0, c = pa;
  for (const d of u)
    d < 128 && n.push(h0(d));
  const f = n.length;
  let l = f;
  for (f && n.push(_a); l < t; ) {
    let d = Wt;
    for (const y of u)
      y >= i && y < d && (d = y);
    const _ = l + 1;
    d - i > Iu((Wt - s) / _) && tt("overflow"), s += (d - i) * _, i = d;
    for (const y of u)
      if (y < i && ++s > Wt && tt("overflow"), y === i) {
        let A = s;
        for (let F = Tu; ; F += Tu) {
          const C = F <= c ? O0 : F >= c + vn ? vn : F - c;
          if (A < C)
            break;
          const w = A - C, O = Tu - C;
          n.push(
            h0(jc(C + w % O, 0))
          ), A = Iu(w / O);
        }
        n.push(h0(jc(A, 0))), c = xa(s, _, l === f), s = 0, ++l;
      }
    ++s, ++i;
  }
  return n.join("");
}, m_ = function(u) {
  return ga(u, function(n) {
    return l_.test(n) ? ya(n.slice(4).toLowerCase()) : n;
  });
}, x_ = function(u) {
  return ga(u, function(n) {
    return h_.test(n) ? "xn--" + va(n) : n;
  });
}, wa = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: ma,
    encode: __
  },
  decode: ya,
  encode: va,
  toASCII: x_,
  toUnicode: m_
}, y_ = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, v_ = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, w_ = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, E_ = {
  default: y_,
  zero: v_,
  commonmark: w_
}, A_ = /^(vbscript|javascript|file|data):/, C_ = /^data:image\/(gif|png|jpeg|webp);/;
function D_(u) {
  const n = u.trim().toLowerCase();
  return A_.test(n) ? C_.test(n) : !0;
}
const Ea = ["http:", "https:", "mailto:"];
function k_(u) {
  const n = D0(u, !0);
  if (n.hostname && (!n.protocol || Ea.indexOf(n.protocol) >= 0))
    try {
      n.hostname = wa.toASCII(n.hostname);
    } catch {
    }
  return wn(C0(n));
}
function F_(u) {
  const n = D0(u, !0);
  if (n.hostname && (!n.protocol || Ea.indexOf(n.protocol) >= 0))
    try {
      n.hostname = wa.toUnicode(n.hostname);
    } catch {
    }
  return Gt(C0(n), Gt.defaultChars + "%");
}
function bu(u, n) {
  if (!(this instanceof bu))
    return new bu(u, n);
  n || F0(u) || (n = u || {}, u = "default"), this.inline = new An(), this.block = new Mr(), this.core = new T0(), this.renderer = new jt(), this.linkify = new tu(), this.validateLink = D_, this.normalizeLink = k_, this.normalizeLinkText = F_, this.utils = Tb, this.helpers = Nr({}, Nb), this.options = {}, this.configure(u), n && this.set(n);
}
bu.prototype.set = function(u) {
  return Nr(this.options, u), this;
};
bu.prototype.configure = function(u) {
  const n = this;
  if (F0(u)) {
    const t = u;
    if (u = E_[t], !u)
      throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!u)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return u.options && n.set(u.options), u.components && Object.keys(u.components).forEach(function(t) {
    u.components[t].rules && n[t].ruler.enableOnly(u.components[t].rules), u.components[t].rules2 && n[t].ruler2.enableOnly(u.components[t].rules2);
  }), this;
};
bu.prototype.enable = function(u, n) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(s) {
    t = t.concat(this[s].ruler.enable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(u, !0));
  const i = u.filter(function(s) {
    return t.indexOf(s) < 0;
  });
  if (i.length && !n)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + i);
  return this;
};
bu.prototype.disable = function(u, n) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(s) {
    t = t.concat(this[s].ruler.disable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(u, !0));
  const i = u.filter(function(s) {
    return t.indexOf(s) < 0;
  });
  if (i.length && !n)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + i);
  return this;
};
bu.prototype.use = function(u) {
  const n = [this].concat(Array.prototype.slice.call(arguments, 1));
  return u.apply(u, n), this;
};
bu.prototype.parse = function(u, n) {
  if (typeof u != "string")
    throw new Error("Input data should be a String");
  const t = new this.core.State(u, this, n);
  return this.core.process(t), t.tokens;
};
bu.prototype.render = function(u, n) {
  return n = n || {}, this.renderer.render(this.parse(u, n), this.options, n);
};
bu.prototype.parseInline = function(u, n) {
  const t = new this.core.State(u, this, n);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
bu.prototype.renderInline = function(u, n) {
  return n = n || {}, this.renderer.render(this.parseInline(u, n), this.options, n);
};
function eu(u, n, t, i) {
  var s, c = arguments.length, f = c < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    f = Reflect.decorate(u, n, t, i);
  else
    for (var l = u.length - 1; l >= 0; l--)
      (s = u[l]) && (f = (c < 3 ? s(f) : c > 3 ? s(n, t, f) : s(n, t)) || f);
  return c > 3 && f && Object.defineProperty(n, t, f), f;
}
function Cu(u, n, t) {
  if (t || arguments.length === 2)
    for (var i, s = 0, c = n.length; s < c; s++)
      !i && s in n || (i || (i = Array.prototype.slice.call(n, 0, s)), i[s] = n[s]);
  return u.concat(i || Array.prototype.slice.call(n));
}
var Aa = function(u, n, t) {
  return [u, n, t].map(function(i) {
    return (i /= 255) > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92;
  });
}, Ca = function(u, n, t) {
  return [u, n, t].map(function(i) {
    return 255 * (i <= 304e-5 ? 12.92 * i : 1.055 * Math.pow(i, 1 / 2.4) - 0.055);
  });
}, be = function(u, n, t) {
  return Math.min(Math.max(u, n), t);
}, Da = function(u, n) {
  return Math.round((u + Number.EPSILON) * Math.pow(10, n)) / Math.pow(10, n);
}, wr = function(u, n) {
  return Math.floor(Math.random() * (n - u + 1) - u);
}, ka = function(u, n, t, i) {
  for (var s, c = [u, n, t], f = "#", l = 0; l < c.length; l++)
    f += (s = c[l], Math.round(be(s, 0, 255)).toString(16).padStart(2, "0"));
  return i != null && (f += Math.round(be(i, 0, 100) / 100 * 255).toString(16).padStart(2, "0")), f;
}, Fa = function(u) {
  var n = u.length, t = (u = function(c) {
    var f = (c = /^#/.test(c) ? c.slice(1) : c).length;
    if (![3, 4, 6, 8].includes(f))
      return "000000";
    if (f === 6 || f === 8)
      return c;
    if (f === 3 || f === 4) {
      for (var l = "", d = 0; d < f; d++) {
        var _ = c[d];
        l += "" + _ + _;
      }
      return l;
    }
    return "000000";
  }(u).padEnd(8, "ff")).match(/.{2}/g);
  if (!t)
    return [0, 0, 0, 1];
  var i = [0, 0, 0], s = !1;
  return t.forEach(function(c, f) {
    f < 3 ? i[f] = parseInt(c, 16) : s = 100 * parseInt(c, 16) / 255;
  }), s === !1 || n < 8 ? i : Cu(Cu([], i, !0), [s], !1);
}, Sa = function(u, n, t) {
  var i;
  i = [u, n, t].map(function(f) {
    return f / 255;
  }), u = i[0], n = i[1], t = i[2];
  var s = 1 - Math.max(u, n, t), c = s < 1 ? 1 / (1 - s) : 0;
  return [(1 - u - s) * c * 100, (1 - n - s) * c * 100, (1 - t - s) * c * 100, 100 * s];
}, Ta = function(u, n, t, i) {
  return i === 100 ? [0, 0, 0] : (i /= 100, [u, n, t].map(function(s) {
    return (s /= 100) >= 1 ? 0 : 255 * (1 - s) * (1 - i);
  }));
};
function R0(u, n, t, i) {
  var s;
  i === void 0 && (i = "l"), s = [u, n, t].map(function(C) {
    return C / 255;
  }), u = s[0], n = s[1], t = s[2];
  var c = Math.max(u, n, t), f = Math.min(u, n, t), l = function(C, w, O, N) {
    var H;
    N === void 0 && (N = !1), H = [C, w, O].map(function(Z) {
      return Z / 255;
    }), C = H[0], w = H[1], O = H[2];
    var P = Math.max(C, w, O), B = Math.min(C, w, O), R = 0;
    if (P !== B)
      if (N)
        R = (C - w + (C - O)) / 2, R /= Math.sqrt((C - w) * (C - w) + (C - O) * (w - O)), R = Math.acos(R), O > w && (R = 2 * Math.PI - R), R /= 2 * Math.PI;
      else {
        var z = P - B;
        R = P === C ? (w - O) / z + (w < O ? 6 : 0) : P === w ? (O - C) / z + 2 : (C - w) / z + 4, R /= 6;
      }
    else
      R = NaN;
    return 360 * R;
  }(u, n, t, i === "i"), d = 0, _ = (c + f) / 2, y = c - f, A = c, F = (u + n + t) / 3;
  return i === "v" && (d = c === 0 ? 0 : y / c), c !== f && i === "l" && (d = _ > 0.5 ? y / (2 - c - f) : y / (c + f)), i === "i" && (d = F > 0 ? 1 - f / F : 0), d *= 100, _ *= 100, F *= 100, i === "l" ? [l, d, _] : i === "v" ? [l, d, A *= 100] : [l, d, F];
}
var N0 = function(u, n, t) {
  return R0(u, n, t, "l");
}, it = function(u, n, t) {
  var i, s, c = function(f) {
    return 6 * (f = f < 0 ? f + 1 : f > 1 ? f - 1 : f) < 1 ? i + (s - i) * f * 6 : 2 * f < 1 ? s : 3 * f < 2 ? i + (s - i) * (0.6666666666666666 - f) * 6 : i;
  };
  return u = u % 360 / 360, n = be(n / 100, 0, 1), t = be(t / 100, 0, 1), i = 2 * t - (s = t <= 0.5 ? t * (n + 1) : t + n - t * n), [255 * c(u + 1 / 3), 255 * c(u), 255 * c(u - 1 / 3)];
}, Ia = function(u, n, t) {
  return R0(u, n, t, "v");
}, L0 = function(u, n, t) {
  var i, s, c = [t /= 100, t * (1 - (n /= 100)), t * (1 - (s = (u = u % 360 / 360 * 360) / 60 - (i = Math.floor(u / 60 % 6))) * n), t * (1 - (1 - s) * n)], f = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]];
  return [255 * c[f[i][0]], 255 * c[f[i][1]], 255 * c[f[i][2]]];
}, Oa = function(u, n, t) {
  return R0(u, n, t, "i");
}, M0 = function(u, n, t) {
  var i, s, c, f;
  n /= 100, t /= 100, isNaN(u) && (u = 0), isNaN(n) && (n = 0);
  var l = function(d) {
    return (1 + n * Math.cos(2 * Math.PI * d) / Math.cos(Math.PI / 3 - 2 * Math.PI * d)) / 3;
  };
  return (u = (360 + u) % 360 / 360) < 1 / 3 ? c = 1 - ((f = (1 - n) / 3) + (s = l(u))) : u < 2 / 3 ? f = 1 - ((s = (1 - n) / 3) + (c = l(u -= 1 / 3))) : s = 1 - ((c = (1 - n) / 3) + (f = l(u -= 2 / 3))), i = [s, c, f].map(function(d) {
    return 255 * be(t * d * 3, 0, 1);
  }), [s = i[0], c = i[1], f = i[2]];
}, Ra = function(u, n, t) {
  return [N0(u, n, t)[0], 100 * (Math.min(u, n, t) / 255), 100 * (1 - Math.max(u, n, t) / 255)];
};
function B0(u, n, t) {
  return n /= 100, t /= 100, it(u, 100, 50).map(function(i) {
    return 255 * (i / 255 * (1 - n - t) + n);
  });
}
var d0 = { x: [0.4124564, 0.3575761, 0.1804375], y: [0.2126729, 0.7151522, 0.072175], z: [0.0193339, 0.119192, 0.9503041] }, p0 = { r: [3.2404542, -1.5371385, -0.4985314], g: [-0.969266, 1.8760108, 0.041556], b: [0.0556434, -0.2040259, 1.0572252] }, Na = 0.95047, La = 1, Ma = 1.08883, S_ = 0.206896552, T_ = 8856452e-9, Ba = 24389 / 27, y0 = function(u, n, t) {
  var i = Aa(u, n, t);
  return [100 * d0.x.reduce(function(s, c, f) {
    return s + c * i[f];
  }, 0), 100 * d0.y.reduce(function(s, c, f) {
    return s + c * i[f];
  }, 0), 100 * d0.z.reduce(function(s, c, f) {
    return s + c * i[f];
  }, 0)];
}, Cn = function(u, n, t) {
  var i = [u, n, t], s = p0.r.reduce(function(l, d, _) {
    return l + d * i[_];
  }, 0) / 100, c = p0.g.reduce(function(l, d, _) {
    return l + d * i[_];
  }, 0) / 100, f = p0.b.reduce(function(l, d, _) {
    return l + d * i[_];
  }, 0) / 100;
  return Ca(s, c, f);
}, Er = function(u, n, t) {
  var i;
  return i = [u = u / Na / 100, n = n / La / 100, t = t / Ma / 100].map(function(s) {
    return s > T_ ? Math.pow(s, 1 / 3) : (Ba * s + 16) / 116;
  }), u = i[0], n = i[1], t = i[2], [Math.max(0, 116 * n - 16), 500 * (u - n), 200 * (n - t)];
}, P0 = function(u, n, t) {
  var i, s = (u + 16) / 116, c = isNaN(n) ? s : s + n / 500, f = isNaN(t) ? s : s - t / 200;
  return i = [c, s, f].map(function(l) {
    return l > S_ ? Math.pow(l, 3) : (116 * l - 16) / Ba;
  }), c = i[0], s = i[1], f = i[2], [c * Na * 100, s * La * 100, f * Ma * 100];
}, z0 = function(u, n, t) {
  return Cn.apply(void 0, P0(u, n, t));
}, v0 = function(u, n, t) {
  n = be(n, -100, 100), t = be(t, -100, 100);
  var i = Math.sqrt(n * n + t * t), s = (180 * Math.atan2(t, n) / Math.PI + 360) % 360;
  return Math.round(1e4 * i) === 0 && (s = Number.NaN), [u, i, s];
}, Pa = function(u, n, t) {
  return isNaN(t) && (t = 0), t *= Math.PI / 180, [u, Math.cos(t) * n, Math.sin(t) * n];
}, q0 = function(u, n, t) {
  return P0.apply(void 0, Pa(u, n, t));
}, za = function(u, n, t) {
  var i = u + n + t, s = 0, c = 0;
  return i > 0 && (s = u / i, c = n / i), [s, c, n];
}, I_ = Object.freeze({ __proto__: null, linear2rgb: Ca, rgb2linear: Aa, rgb2hex: ka, hex2rgb: Fa, rgb2cmyk: Sa, cmyk2rgb: Ta, rgb2hsl: N0, hsl2rgb: it, rgb2hsv: Ia, hsv2rgb: L0, rgb2hsi: Oa, hsi2rgb: M0, rgb2hwb: Ra, hwb2rgb: B0, rgb2xyz: y0, xyz2rgb: Cn, xyz2lab: Er, lab2xyz: P0, rgb2lab: function(u, n, t) {
  return Er.apply(void 0, y0(u, n, t));
}, lab2rgb: z0, lch2lab: Pa, lab2lch: v0, xyz2lch: function(u, n, t) {
  return v0.apply(void 0, Er(u, n, t));
}, lch2xyz: q0, xyY2xyz: function(u, n, t) {
  return n === 0 ? [0, 0, 0] : [u * (t / n), t, t / n * (1 - u - n)];
}, xyz2xyY: za });
function Au(u, n) {
  return n === void 0 && (n = !1), function(t, i, s) {
    var c = s.value;
    s.value = function() {
      for (var f = [], l = 0; l < arguments.length; l++)
        f[l] = arguments[l];
      if (f.length > 0 && n) {
        var d = JSON.stringify(f);
        u += d;
      }
      if (this.cache.has(u))
        return this.cache.get(u);
      var _ = c.call.apply(c, Cu([this], f, !1));
      return this.cache.set(u, _), _;
    };
  };
}
function pu(u, n, t, i) {
  return u === void 0 && (u = [0, 2, 2]), n === void 0 && (n = 0), t === void 0 && (t = !0), i === void 0 && (i = 0), function(s, c, f) {
    var l = f.value;
    f.value = function() {
      for (var d = [], _ = 0; _ < arguments.length; _++)
        d[_] = arguments[_];
      var y = d[i] === void 0 ? t : d[i], A = l.call.apply(l, Cu([this], d, !1));
      if (y === !1)
        return A;
      var F = typeof y == "number" ? Math.round(y) : 0, C = typeof u == "number" ? new Array(A.length).fill(u) : u, w = C.map(function(O) {
        return n === 1 ? typeof y == "number" ? F : O : O + F;
      });
      return A.map(function(O, N) {
        return Da(O, w[N]);
      });
    };
  };
}
var qa = function(u, n, t) {
  var i = u instanceof me ? u : new me(u), s = n instanceof me ? n : new me(n), c = be(t, 0, 100) / 100, f = 2 * c - 1, l = i.alpha() - s.alpha(), d = ((f * l == -1 ? f : (f + l) / (1 + f * l)) + 1) / 2, _ = 1 - d, y = [Math.round(be(i.red() * d + s.red() * _, 0, 255)), Math.round(be(i.green() * d + s.green() * _, 0, 255)), Math.round(be(i.blue() * d + s.blue() * _, 0, 255))], A = i.alpha() * c + s.alpha() * (1 - c);
  return new me(y, A);
}, Ge = Math.sqrt, te = Math.pow, Ut = Math.cos, _n = Math.abs, Kc = Math.sin, O_ = Math.exp, R_ = Math.atan2, Ua = Math.PI, ut = function(u) {
  return Ua * u / 180;
}, w0 = function(u, n, t) {
  t === void 0 && (t = !0);
  var i = R_(n, u);
  return t && (i = (i = (i = 180 * i / Ua) > 0 ? i : i + 360) > 360 ? i - 360 : i), i;
}, Ht = function(u, n) {
  n === void 0 && (n = !0);
  var t = u.lab(!1), i = t[0], s = t[1], c = t[2];
  return [i, Ge(te(s, 2) + te(c, 2)), w0(s, c, n), s, c];
}, N_ = ["CMC", "CIE", "CIE2000", "CIE1994", "CIE1976"], L_ = "CMC", M_ = "CIE2000", B_ = "CIE1994", P_ = "CIE1976", Ha = function(u, n, t, i) {
  t === void 0 && (t = "CIE");
  var s = function(y) {
    var A = y.toUpperCase();
    return N_.includes(A) && A !== "CIE" ? A : M_;
  }(t);
  if (i = i || {}, s === L_) {
    var c = Object.assign({}, { l: 1, c: 1 }, i);
    return function(y, A, F, C) {
      F === void 0 && (F = 1), C === void 0 && (C = 1);
      var w = Ht(y, !0), O = w[0], N = w[1], H = w[2], P = w[3], B = w[4], R = Ht(A), z = R[0], Z = R[1], Q = R[3], ae = N - Z, ye = O - z, qe = B - R[4], nu = Ge(te(P - Q, 2) + te(qe, 2) - te(ae, 2)), _u = O < 16 ? 0.511 : 0.040975 * O / (1 + 0.01765 * O), gu = 0.0638 * N / (1 + 0.0131 * N) + 0.638, ru = 164 <= H && H <= 345 ? 0.56 + _n(0.2 * Ut(ut(H + 168))) : 0.36 + _n(0.4 * Ut(ut(H + 35))), Re = Ge(te(N, 4) / (te(N, 4) + 1900)), Fe = gu * (Re * ru + 1 - Re);
      return Ge(te(ye / (F * _u), 2) + te(ae / (C * gu), 2) + te(nu / Fe, 2));
    }(u, n, c.l, c.c);
  }
  if (s === B_) {
    var f = { kL: 1, kC: 1, kH: 1, cate: "graphic" }, l = Object.assign({}, f, i);
    return function(y, A, F, C, w, O) {
      F === void 0 && (F = 1), C === void 0 && (C = 1), w === void 0 && (w = 1), O === void 0 && (O = "graphic");
      var N = O === "textiles" ? 0.048 : 0.045, H = O === "textiles" ? 0.014 : 0.015;
      F = O === "textiles" ? 2 : F;
      var P = Ht(y), B = P[0], R = P[1], z = P[3], Z = P[4], Q = Ht(A), ae = Q[0], ye = Q[1], qe = Q[3], nu = B - ae, _u = R - ye, gu = Z - Q[4], ru = 1 + N * R, Re = 1 + H * R, Fe = Ge(te(z - qe, 2) + te(gu, 2) - te(_u, 2));
      return Ge(te(nu / (1 * F), 2) + te(_u / (C * ru), 2) + te(Fe / (w * Re), 2));
    }(u, n, l.kL, l.kC, l.kH, l.cate);
  }
  if (s === P_)
    return function(y, A) {
      var F = y.lab(!1), C = F[0], w = F[1], O = F[2], N = A.lab(!1), H = N[0], P = N[1], B = N[2];
      return Ge(te(C - H, 2) + te(w - P, 2) + te(O - B, 2));
    }(u, n);
  var d = { kL: 1, kC: 1, kH: 1 }, _ = Object.assign({}, d, i);
  return function(y, A, F, C, w) {
    F === void 0 && (F = 1), C === void 0 && (C = 1), w === void 0 && (w = 1);
    var O = Ht(y), N = O[0], H = O[1], P = O[3], B = O[4], R = Ht(A), z = R[0], Z = R[1], Q = R[3], ae = R[4], ye = (N + z) / 2, qe = (H + Z) / 2, nu = (1 - Ge(te(qe, 7) / (te(qe, 7) + te(25, 7)))) / 2, _u = P * (1 + nu), gu = Q * (1 + nu), ru = Ge(te(_u, 2) + te(B, 2)), Re = Ge(te(gu, 2) + te(ae, 2)), Fe = w0(_u, B, !0), Se = w0(gu, ae, !0), je = (ru + Re) / 2, at = _n(Fe - Se) > 180 ? (Fe + Se + 360) / 2 : (Fe + Se) / 2, At = 1 - 0.17 * Ut(ut(at - 30)) + 0.24 * Ut(ut(2 * at)) + 0.32 * Ut(ut(3 * at + 6)) - 0.2 * Ut(ut(4 * at - 63)), iu = _n(Se - Fe) <= 180 ? Se - Fe : _n(Se - Fe) > 180 && Se <= Fe ? Se - Fe + 360 : Se - Fe - 360, Pr = z - N, Dn = Z - H, kn = 2 * Ge(ru * Re) * Kc(ut(iu) / 2), Gu = 1 + 0.015 * te(ye - 50, 2) / Ge(20 + te(ye - 50, 2)), ft = 1 + 0.045 * je, Fn = 1 + 0.015 * je * At, lt = 30 * O_(-te((at - 275) / 25, 2)), ht = -2 * Ge(te(je, 7) / (te(je, 7) + te(25, 7))) * Kc(2 * ut(lt));
    return Ge(te(Pr / (F * Gu), 2) + te(Dn / (C * ft), 2) + te(kn / (w * Fn), 2) + ht * (Dn / (C * ft)) * (kn / (w * Fn)));
  }(u, n, _.kL, _.kC, _.kH);
}, z_ = function(u, n, t) {
  var i = Math.abs, s = Math.max, c = Math.min, f = u instanceof me ? u : new me(u), l = n instanceof me ? n : new me(n), d = Object.assign({}, { b: 125, c: 500 }, t);
  return !(i(255 * f.brightness() / 100 - 255 * l.brightness() / 100) <= d.b) && !(s(f.red(), l.red()) - c(f.red(), l.red()) + (s(f.green(), l.green()) - c(f.green(), l.green())) + (s(f.blue(), l.blue()) - c(f.blue(), l.blue())) <= d.c);
}, $t = function(u, n, t) {
  var i, s = function(_) {
    return be(_, 0, 100);
  }, c = function(_) {
    return be(_, 0, 255);
  }, f = { h: [0, function(_) {
    return _ % 360;
  }], s: [1, s], l: [2, s], r: [0, c], g: [1, c], b: [2, c] }, l = f[n][0];
  if (["h", "s", "l"].includes(n)) {
    var d = u.hsl();
    if (t === void 0)
      return d[l];
    t = f[n][1](t), d[l] = t, i = it.apply(void 0, d);
  } else {
    if (i = u.rgb(), t === void 0)
      return i[l];
    t = f[n][1](t), i[l] = t;
  }
  return new me(i, u.alpha());
}, Rr = {}, q_ = /* @__PURE__ */ new Set(["rgb", "rgba", "cmyk", "lab", "hsl", "hsla", "hsv", "hsva", "hsi", "hsia", "xyz", "lch", "hwb", "hwba"]), U_ = /^([a-zA-Z]+)\(([\s\S]+)\)$/, Ar = function(u) {
  return typeof u == "string" ? u.indexOf("%") === -1 ? Ar(Number(u.trim())) : (u = u.split("%")[0], (u = Number(u.trim())) || 0) : Math.abs(u) < 1 ? 100 * u : u;
}, $a = function(u, n) {
  n === void 0 && (n = /* @__PURE__ */ new Set());
  var t = typeof u == "string" ? u : u.join(",");
  if (n.has(t))
    throw new Error("Invalid Color");
  n.add(t);
  var i = "rgb", s = [0, 0, 0], c = 100;
  if (Array.isArray(u)) {
    if (u.length < 3)
      throw new Error("Invalid Color");
    for (var f = 0; f < u.length; f++)
      if (f < 3)
        s[f] = u[f];
      else {
        if (f !== 3 || u[3] === void 0)
          break;
        c = u[3];
      }
  } else {
    var l = !1, d = u.trim().match(U_);
    if (d || (l = !0), d) {
      var _ = d[1].toLocaleLowerCase();
      if (i = _, q_.has(_) || (l = !0), d[2] && !l) {
        var y = d[2], A = y.indexOf(",") !== -1 ? "," : " ", F = y.split(A);
        for (f = 0; f < 3; f++)
          F[f] !== void 0 && (["lch", "lab"].includes(i) && f === 0 || ["hsl", "hsla", "hsv", "hsva", "hwb", "hwba", "hsi", "hsia"].includes(i) && f > 0 ? s[f] = Ar(F[f]) : s[f] = Number(F[f].trim()));
        ["rgba", "hsla", "hsva", "hwba", "hsia"].includes(i) ? (i = i.slice(0, -1), F[3] !== void 0 && (c = Ar(F[3]))) : i === "cmyk" && s.push(F[3] !== void 0 ? Ar(F[3]) : 0);
      }
    }
    if (l) {
      if (!/^#(([a-fA-F\d]{3}){1,2}|[a-fA-F\d]{8})$/.test(u))
        try {
          return u = function(C, w) {
            if (w === void 0 && (w = !1), C = C.toLowerCase(), Rr[C] === void 0) {
              if (w)
                throw new Error("Unknown color name: ".concat(C, ")"));
              return C;
            }
            return Rr[C];
          }(u, !0), $a(u, n);
        } catch {
          throw new Error("Invalid Color");
        }
      s = Fa(u);
    }
  }
  return [i, s, c];
}, Wa = { thowParseError: !1 }, me = function() {
  function u(n, t, i) {
    this.cache = /* @__PURE__ */ new Map(), this._rgb = [0, 0, 0], this._alpha = 100;
    var s = { thowParseError: Wa.thowParseError }, c = Object.assign({}, s, i ?? {});
    try {
      var f = function(_) {
        var y, A = { lab2rgb: z0, hsl2rgb: it, hsv2rgb: L0, xyz2rgb: Cn, hwb2rgb: B0, hsi2rgb: M0 }, F = $a(_), C = F[0], w = F[1], O = F[2];
        if (C === "rgb")
          return [w, O];
        C === "lch" && (C = (y = ["xyz", q0(w[0], w[1], w[2])])[0], w = y[1]);
        var N = w[0], H = w[1], P = w[2], B = w[3];
        if (C === "cmyk")
          return [Ta(N, H, P, B).map(function(z) {
            return be(z, 0, 255);
          }), O];
        var R = "".concat(C, "2rgb");
        if (typeof A[R] == "function")
          return [A[R](N, H, P).map(function(z) {
            return be(z, 0, 255);
          }), O];
        throw new Error("Invalid color");
      }(n), l = f[0], d = f[1];
      this._alpha = d, this._rgb = l;
    } catch (_) {
      if (c.thowParseError)
        throw _;
    }
    t !== void 0 && (this._alpha = be(t, 0, 100));
  }
  return u.prototype.red = function(n) {
    return $t(this, "r", n);
  }, u.prototype.green = function(n) {
    return $t(this, "g", n);
  }, u.prototype.blue = function(n) {
    return $t(this, "b", n);
  }, u.prototype.alpha = function(n) {
    return n === void 0 ? this._alpha : (n = be(n, 0, 100), new u(this.rgb(), n));
  }, u.prototype.fadeIn = function(n, t) {
    return n === void 0 && (n = 10), n = t && t === "relative" ? this._alpha * n / 100 : n, new u(this.rgb(), be(this._alpha + n, 0, 100));
  }, u.prototype.fadeOut = function(n, t) {
    return n === void 0 && (n = 10), n = t && t === "relative" ? this._alpha * n / 100 : n, new u(this.rgb(), be(this._alpha - n, 0, 100));
  }, u.prototype.opacify = function(n, t) {
    return n === void 0 && (n = 10), this.fadeIn(n, t);
  }, u.prototype.transparentize = function(n, t) {
    return n === void 0 && (n = 10), this.fadeOut(n, t);
  }, u.prototype.hue = function(n) {
    return $t(this, "h", n);
  }, u.prototype.saturation = function(n) {
    return $t(this, "s", n);
  }, u.prototype.lightness = function(n) {
    return $t(this, "l", n);
  }, u.prototype.rgb = function(n) {
    return Cu([], this._rgb, !0);
  }, u.prototype.rgba = function(n) {
    return Cu(Cu([], this.rgb(!1), !0), [this._alpha], !1);
  }, u.prototype.cmyk = function(n) {
    return Sa.apply(void 0, this._rgb);
  }, u.prototype.hsl = function(n) {
    return N0.apply(void 0, this._rgb);
  }, u.prototype.hsla = function(n) {
    return Cu(Cu([], this.hsl(!1), !0), [this._alpha], !1);
  }, u.prototype.hsv = function(n) {
    return Ia.apply(void 0, this._rgb);
  }, u.prototype.hsi = function(n) {
    return Oa.apply(void 0, this._rgb);
  }, u.prototype.hwb = function(n) {
    return Ra.apply(void 0, this._rgb);
  }, u.prototype.xyz = function(n) {
    return y0.apply(void 0, this._rgb);
  }, u.prototype.lab = function(n) {
    return Er.apply(void 0, this.xyz(!1));
  }, u.prototype.lch = function(n) {
    return v0.apply(void 0, this.lab(!1));
  }, u.prototype.xyY = function(n) {
    return za.apply(void 0, this.xyz(!1));
  }, u.prototype.hex = function(n) {
    n === void 0 && (n = 2);
    var t = n === 0 ? void 0 : n === 1 ? this._alpha : this._alpha === 100 ? void 0 : this._alpha, i = "color:hex:param_".concat(n);
    if (this.cache.has(i))
      return this.cache.get(i);
    var s = ka.apply(void 0, Cu(Cu([], this._rgb, !1), [t], !1));
    return this.cache.set(i, s), s;
  }, u.prototype.lighten = function(n, t) {
    n === void 0 && (n = 5);
    var i = this.hsl(!1), s = i[0], c = i[1], f = i[2];
    return f = be(f += t !== void 0 && t === "relative" ? f * (n / 100) : n, 0, 100), new u(it(s, c, f), this._alpha);
  }, u.prototype.darken = function(n, t) {
    return n === void 0 && (n = 5), this.lighten(-n, t);
  }, u.prototype.saturate = function(n, t) {
    n === void 0 && (n = 5);
    var i = this.hsl(!1), s = i[0], c = i[1], f = i[2];
    return c = be(c += t !== void 0 && t === "relative" ? c * (n / 100) : n, 0, 100), new u(it(s, c, f), this._alpha);
  }, u.prototype.desaturate = function(n, t) {
    return n === void 0 && (n = 5), this.saturate(-n, t);
  }, u.prototype.spin = function(n) {
    var t = this.hsl(!1), i = t[0], s = t[1], c = t[2];
    return new u(it(i = (i + n % 360 + 360) % 360, s, c), this._alpha);
  }, u.prototype.adjustHue = function(n) {
    return this.spin(n);
  }, u.prototype.complement = function() {
    return this.spin(180);
  }, u.prototype.invert = function() {
    var n = this._rgb.map(function(t) {
      return 255 - t;
    });
    return new u([n[0], n[1], n[2]], this._alpha);
  }, u.prototype.mix = function(n, t) {
    return t === void 0 && (t = 50), qa(this, n, 100 - be(t, 0, 100));
  }, u.prototype.luma = function() {
    var n = this._rgb.map(function(t) {
      return (t /= 255) <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
  }, u.prototype.brightness = function() {
    var n = this._rgb;
    return function(t, i, s) {
      return (299 * t + 587 * i + 114 * s) / 1e3 / 255 * 100;
    }(n[0], n[1], n[2]);
  }, u.prototype.deltaE = function(n, t, i) {
    return t === void 0 && (t = "CMC"), Ha(this, n, t, i);
  }, u.prototype.visibility = function(n, t) {
    return z_(this, n, t);
  }, eu([pu(0, 1, !0, 0), Au("color:rgb")], u.prototype, "rgb", null), eu([pu(0, 1, !0, 0)], u.prototype, "rgba", null), eu([pu(0, 1, !0, 0), Au("color:cmyk")], u.prototype, "cmyk", null), eu([pu(0, 1, !0, 0), Au("color:hsl")], u.prototype, "hsl", null), eu([pu(0, 1, !0, 0)], u.prototype, "hsla", null), eu([pu(0, 1, !0, 0), Au("color:hsv")], u.prototype, "hsv", null), eu([pu(0, 1, !0, 0), Au("color:hsi")], u.prototype, "hsi", null), eu([pu(0, 1, !0, 0), Au("color: hwb")], u.prototype, "hwb", null), eu([pu(2, 1, !0, 0), Au("color:xyz")], u.prototype, "xyz", null), eu([pu(2, 1, !0, 0), Au("color:lab")], u.prototype, "lab", null), eu([pu(2, 1, !0, 0), Au("color:lch")], u.prototype, "lch", null), eu([pu(2, 1, !0, 0), Au("color:xyY")], u.prototype, "xyY", null), eu([Au("color:luma")], u.prototype, "luma", null), u;
}(), H_ = function(u, n, t, i) {
  return new me([u, n, t], i);
}, $_ = function(u, n, t, i) {
  return new me(it(u, n, t), i);
}, W_ = function(u, n, t, i) {
  return new me(L0(u, n, t), i);
}, G_ = function(u, n, t, i) {
  return new me(M0(u, n, t), i);
}, Z_ = function(u, n, t, i) {
  return new me(B0(u, n, t), i);
}, j_ = function(u, n, t, i) {
  return new me(Cn(u, n, t), i);
}, K_ = function(u, n, t, i) {
  return new me(z0(u, n, t), i);
}, J_ = function(u, n, t, i) {
  return new me(Cn.apply(void 0, q0(u, n, t)), i);
};
function Ce(u, n, t) {
  return new me(u, n, t);
}
Ce.config = function(u) {
  Object.assign(Wa, u);
}, Ce.random = function() {
  var u = wr(0, 255), n = wr(0, 255), t = wr(0, 255);
  return new me([u, n, t]);
}, Ce.convertor = I_, Ce.Color = me, Ce.rgb = H_, Ce.hsl = $_, Ce.hsv = W_, Ce.hsi = G_, Ce.hwb = Z_, Ce.xyz = j_, Ce.lab = K_, Ce.lch = J_, Ce.mix = qa, Ce.deltaE = Ha, Ce.utils = { roundDecimal: Da, randomRange: wr }, Ce.useNames = function(u, n) {
  return function(t, i) {
    if (i !== void 0 && typeof i == "function") {
      var s = {};
      for (var c in t) {
        var f = i(c, t[c]), l = f[0], d = f[1];
        s[l] = d;
      }
      Object.assign(Rr, s);
    } else
      Object.assign(Rr, t);
  }(u, n), Ce;
};
class U0 extends Error {
  /**
   * Crea una instancia de SelectorError.
   * @param {...any} params - Parámetros opcionales para personalizar el mensaje de error.
   */
  constructor(...n) {
    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, U0), this.name = "SelectorError";
  }
}
class H0 {
  /**
   * Crea una instancia de Selector.
   * @param {ArgSel} [selector] - Selector para buscar elementos en el DOM.
   * @param {ParentNode} [ctx = document] - Contexto opcional para la búsqueda de elementos.
   */
  constructor(n, t = document) {
    /**
     * @private
     * lista de nodos seleccionados
     * @type {Element[]}
     */
    pe(this, "_node", []);
    /**
     * Enumaración de elementos
     * @enum
     * @private
     * @type {ElementSelector}
     */
    pe(this, "_typeElem", {
      window,
      document,
      body: document.body,
      html: document.documentElement,
      ":root": document.documentElement,
      doctype: document.doctype
    });
    /**
     * Longitud de la colección de elementos seleccionados.
     * @type {number}
     */
    pe(this, "length", 0);
    if (this.ctx = t, this.ctx !== document) {
      let i = this.ctx;
      this._typeElem = {
        window,
        document: i,
        body: i.body,
        html: i.documentElement,
        ":root": i.documentElement,
        doctype: i.doctype
      };
    }
    if (g.isNil(n))
      return this;
    g.isString(n) && (n = n.trim()), this._query_selector(n);
  }
  /**
   * Obtiene los elementos seleccionados por el selector.
   * @type {Element[]}
   */
  get node() {
    return this._node;
  }
  /**
   * Establece los elementos a seleccionar por el selector
   * @param {string | Document[] | Element | Element[]}
   */
  set node(n) {
    g.isString(n) && (n = this._query(n)), this._node = g.concat(
      this._node,
      g.isArrayLike(n) ? n : [n]
    ), this.length = this._node.length;
  }
  /**
   * Convierte una colección de elementos en un array de elementos o HTMLElements.
   * @protected
   * @param {any[]} element - Colección de elementos a convertir.
   * @returns {Document[] | Element[] | HTMLElement[]} - Array de elementos o HTMLElements.
   */
  _toElement(n) {
    const t = [];
    for (const i of n)
      if (g.isString(i)) {
        const s = g.has(this._typeElem, i) ? [this._typeElem[i]] : this._query(i);
        for (const c of s)
          t.push(c);
      } else
        t.push(i);
    return t;
  }
  /**
   * Realiza una búsqueda de elementos utilizando el selector especificado y actualiza la colección de elementos.
   * @protected
   * @param {ArgSel} selector - Selector para buscar elementos en el DOM.
   * @returns {Selector} - Instancia actualizada de Selector.
   */
  _query_selector(n) {
    if (g.isFunction(n))
      return document.addEventListener("DOMContentLoaded", n, !1), this.node = [document], this;
    if (g.isElement(n))
      return this.node = n, this;
    if (n instanceof NodeList)
      return this.node = Array.from(n), this;
    if (n instanceof HTMLCollection)
      return this.node = Array.from(n), this;
    if (g.isObject(n) && g.has(n, "node") || n instanceof H0)
      return this.node = n.node, this;
    if (g.has(this._typeElem, n) && (n = this._typeElem[n]), n && (n.nodeType || n.self === window))
      return this.node = n, this;
    if (g.isArray(n))
      return this.node = this._toElement(n), this;
    if (!g.isString(n) && n && n.self !== window)
      return this;
    const t = g.parseHTML(n);
    if (t.length === 1 && t[0].nodeType === 3)
      try {
        const i = this._query(n);
        if (i.length == 0)
          return this;
        this.node = i;
      } catch {
        throw new U0(`
Fascino:
 ${n} is not a valid selector`);
      }
    else
      t.length > 0 ? this.node = t : this.node = n;
    return this;
  }
  /**
   * Realiza una búsqueda de elementos utilizando el selector especificado.
   * @protected
   * @param {ArgSel} sel - Selector para buscar elementos en el DOM.
   * @returns {Element[]} - Array de elementos encontrados por la funcion `querySelectorAll`.
   */
  _query(n) {
    var t = this.ctx.querySelectorAll(n);
    return t.length > 1 ? Array.from(t) : g.isEmpty(t) ? [] : [t[0]];
  }
}
var Jc = -1;
class Ga {
  /**
   * Inicializador de Data
   */
  constructor(n = "FSData") {
    /** @type {number} */
    pe(this, "ID", -1);
    this._UID = n, Jc++, this.ID = Jc;
  }
  /**
   * Obtiene El Identificador.
   * @return {string}
   */
  get UID() {
    return this._UID;
  }
  /**
   * Establece el Identicador Único de Data
   * @param {string} udName
   */
  set UID(n) {
    this._UID = n;
  }
  /**
   * Verifica si el objeto dado es un Elemento
   * @param  {Element} el El elemento
   * @return {boolean}
   */
  acceptData(n) {
    return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType;
  }
  /**
   * Valida si se puede establece o usar el Atributo DataSet del HTMLElement
   * @param  {Element | HTMLElement} el El Elemento
   * @return {boolean}
   */
  acceptDataSet(n) {
    return this.acceptData(n) && !g.isNil(n.dataset);
  }
  /**
   * Obtiene los datos Almacenados en el Elemento
   * @param  {Element | HTMLElement}  el El elemento
   * @param  {boolean} [config = true] Indica si el objeto sera configurable
   * @return {ObjAny}
   */
  storage(n, t = !0) {
    let i = n[this.UID];
    return g.isNil(i) && (i = {}, this.acceptData(n) && (n.nodeType ? n[this.UID] = i : Object.defineProperty(n, this.UID, {
      value: i,
      configurable: t
    }))), i;
  }
  /**
   * Establece el nuevo valor de la propiedad
   * @param  {Element | HTMLElement} el El elemento
   * @param  {string | ObjAny} key  La clave
   * @param  {*} [data] El valor a establecer
   * @return {string | ObjAny} El nuevo valor establecido
   */
  set(n, t, i) {
    let s = this.storage(n);
    if (g.isString(t))
      s[g.camelCase(t)] = i;
    else
      for (let c in t)
        g.has(t, c) && (s[g.camelCase(c)] = t[c]);
    return s;
  }
  /**
   * Obtiene el valor del Atributo o todos
   * @param  {Element} el El elemento
   * @param  {String} [key] La clave a buscar si se omite se buscaran todos los atributos
   * @return {ObjAny | String | Boolean}
   */
  get(n, t) {
    return g.isNil(t) ? this.storage(n) : n[this.UID] && n[this.UID][t] ? n[this.UID][t] : !1;
  }
  /**
   * Obtiene o Establece el atributo
   * @param  {Element | HTMLElement} el El elemento
   * @param  {string} key  La clave
   * @param  {string | ObjAny} data El valor
   * @return {any}      El valor obtenido o establecido
   */
  access(n, t, i) {
    return g.isNil(t) || t && g.isString(t) && g.isNil(i) ? this.get(n, t) : (this.set(n, t, i), g.isNil(i) ? t : i);
  }
  /**
   * Verifica si el elemento tiene la clave dada
   * @param  {Element | HTMLElement}  el El elemento
   * @param  {string}  key La clave
   * @return {boolean}
   */
  has(n, t) {
    if (g.isNil(t)) {
      let i = this.storage(n);
      return !g.isNil(i);
    } else
      return this.get(n, t) !== !1 ? !0 : g.has(n, "hasAttribute") && n.hasAttribute(`data-${t}`);
  }
  /**
   * Remueve una clave dada
   * @param  {Element | HTMLElement} el El elemento
   * @param  {any} key La clave
   * @return {void| boolean}
   */
  remove(n, t) {
    let i, s = n[this.UID];
    if (g.isNil(s)) {
      let c = this.data(n);
      if (g.isNil(c))
        return;
      if (this.remove(n, t), this.acceptDataSet(n)) {
        let f = n.attributes;
        for (i = f.length; i--; )
          if (f[i]) {
            let l = f[i].name;
            l.indexOf("data-") === 0 && n.removeAttribute(l);
          }
      }
      return;
    }
    if (!g.isNil(t))
      for (g.isArray(t) ? t = t.map(g.camelCase) : (t = g.camelCase(t), t = t in s ? [t] : t.match(/[^\x20\t\r\n\f]+/g) || []), i = t.length; i--; )
        delete s[t[i]];
    return g.isNil(t) && g.isNil(s) && (n.nodeType ? n[this.UID] = void 0 : delete n[this.UID]), !0;
  }
  /**
   * Limpia el Objecto Data del Elemento
   * @param  {Element} el El Elemento
   * @return {boolean}
   */
  clean(n) {
    return g.isNil(n[this.UID]) || (n[this.UID] = void 0), g.isNil(n[this.UID]);
  }
  /**
   * Establece los atributos `data` de un elemento
   * @param  {Element | HTMLElement} elem Elemento a manipular
   * @param  {ObjAny | string | string[]} key  La clave del atributo data ejemplo data-valor; key = valor
   * @param  {any} [data] El resultado del atributo data
   * @return {any}  El resultado del atributo data obtenido
   */
  attrToStorage(n, t, i) {
    let s;
    return g.isNil(i) && n.nodeType === 1 && (s = "data-" + t.replace(/[A-Z]/g, "-$&").toLowerCase(), i = n.getAttribute(s), typeof i == "string" ? (i = g.normalizeData(i), this.set(n, t, i)) : i = void 0), i;
  }
  /**
   * Establece u Obtiene los atributos de Data
   * @param  {NodeList | Element | HTMLElement | HTMLElement[]}    els  El o los Elementos
   * @param  {any[]} args Cualquier argumento según su accion hasta 2 maximo
   * @return {*}
   */
  data(n, ...t) {
    let i, s, c, f;
    if (g.isNil(n.length) ? (f = n, n = [n]) : f = n[0], t.length === 0) {
      if (i = this.get(f), this.acceptDataSet(f)) {
        for (s = f.attributes, c = s.length; c--; )
          if (s[c]) {
            let l = s[c].name;
            l.indexOf("data-") === 0 && (l = g.camelCase(l.slice(5)), this.attrToStorage(f, l, i[l]));
          }
      }
      return i;
    }
    if (t.length === 1)
      if (g.isArray(t[0])) {
        let l = {}, d = 0;
        return g.each(n, (_) => {
          let y = _.getAttribute("id"), A = g.isNil(y) ? f.tagName + d : y;
          t[0].forEach((F) => {
            l[A] = l[A] || {};
            let C = this.get(_, F);
            g.isNil(C) && _.nodeType === 1 && (C = _.hasAttributes(`data-${F}`) ? _.getAttribute(`data-${F}`) : C, C = g.normalizeData(C)), l[A][F] = C;
          }), d++;
        }), l;
      } else {
        if (g.isObject(t[0]))
          return g.each(n, (l) => {
            for (let d in t[0])
              if (g.has(t[0], d)) {
                let _ = g.normalizeData(t[0][d]);
                this.set(l, d, _);
              }
          });
        if (g.isString(t[0])) {
          let l = this.get(f, t[0]);
          return (!l || g.isNil(l)) && f.nodeType === 1 && (l = f.hasAttribute(`data-${t[0]}`) ? f.getAttribute(`data-${t[0]}`) : l, l = g.normalizeData(l)), l;
        }
      }
    return g.each(n, (l) => {
      this.set(l, t[0], t[1]);
    });
  }
}
const Yc = [
  "blur",
  "focus",
  "resize",
  "scroll",
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseover",
  "mouseout",
  "mouseenter",
  "mouseleave",
  "change",
  "select",
  "submit",
  "keydown",
  "keypress",
  "keyup",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchmove",
  "touchcancel"
];
class $0 {
  /**
   * Inicializa los Eventos
   */
  constructor() {
    /** @type {Data} */
    pe(this, "_dt");
    /**
     * Nombre del Evento dentro del Elemento
     * @type {string}
     */
    pe(this, "KEY", "FsEvent");
    /**
     * Lista de Eventos Javascript
     * @type {string[]}
     */
    pe(this, "List", Yc);
    this._dt = new Ga(this.KEY);
  }
  /**
   * Activa un Escucha
   * @private
   * @param {Element}  el  El Elemento
   * @param {keyof ElementEventMap} type  Tipo o nombre del Evento
   * @param {Function}   fn Función del Escucha
   * @param {boolean | AddEventListenerOptions | undefined } [useCapture = false] Opciones de `addEventListener`
   */
  _add(n, t, i, s = !1) {
    n.addEventListener(t, i, s);
  }
  /**
   * Remueve un Escucha
   * @private
   * @param {Element}    el  El Elemento
   * @param {keyof   ElementEventMap} type   tipo
   * @param {Function}                fn Función a desvincular
   * @param {boolean | EventListenerOptions | undefined } [useCapture = false] Opciones de `removeEventListener`
   */
  _remove(n, t, i, s = !1) {
    n.removeEventListener(t, i, s);
  }
  /**
   * Almacena los eventos en los elementos para su uso
   * @private
   * @param  {Element}             el    Elemento
   * @param  {string}              event Evento
   * @param  {EventOptionListener} data  Lista de Funciónes y opciones
   * @return {string}
   */
  _set_data(n, t, i) {
    if (this._dt.acceptData(n) && n.self !== window) {
      let s = g.camelCase(t), c = this._dt.has(n, s) ? this._dt.get(n, s) : this._dt.access(n, s, []);
      return c.push(i), this._dt.set(n, c);
    }
    return !1;
  }
  /**
   * Obtiene el evento almacenado
   * @private
   * @param  {Element}   el        Element
   * @param  {string}    nameEvent Evento
   * @param  {number}    [index = -1]  Posición
   * @return {ObjAny | ObjEvent | ObjAny[]  | boolean}
   */
  _get_data(n, t, i = -1) {
    t = g.camelCase(t);
    let s = this._dt.get(n, t);
    if (g.isNil(s))
      return {};
    if (g.isNil(t))
      return s;
    if (!g.has(s, t))
      return !1;
    let c = s[t];
    return i === -1 ? c : c[i];
  }
  /**
   * Remueve un evento almacenado
   * @private
   * @param  {Element}   el        Element
   * @param  {string}    [nameEvent] Evento, si es null remueve todo
   * @param  {number}    [index = -1]  Posición
   * @return {boolean} 
   */
  _remove_data(n, t, i = -1) {
    if (g.isNil(t))
      return this._dt.clean(n);
    if (t = g.camelCase(t), this._dt.has(n, t)) {
      let s = this._get_data(n, t, -1);
      return i > -1 && g.has(s, i) ? (delete s[i], this._dt.set(n, t, s)) : this._dt.remove(n, t), !0;
    }
    return !1;
  }
  /**
   * Obtiene el Namespace del evento
   * @private
   * @param  {string | string[]}    nameNS El Evento
   * @param  {boolean}  [onlyNS = false] Establece si solo se retorna su espacio de Nombre
   * @return {EventNameSpace | string} 
   */
  _get_namespace(n, t = !1) {
    let { name: i, NS: s } = g.isArray(n) ? n : g.split(n, ".");
    return t ? s : {
      name: i,
      NS: s
    };
  }
  // PUBLIC
  /**
   * Obtiene un evento almacenado en el elemento
   * @param  {[Element, string?, number?]} args tupla con Elemento, evento y posición
   * @return {any}
   */
  get_event(...n) {
    return this._get_data(...n);
  }
  /**
   * Asigna, ejecuta o establece un evento al elemento dado
   *
   * @example
   * ```ts
   * _$("button").on("click", (e) => console.log("me presionaste"))
   * // ó
   * _$("li").on("click", "a", function(e){
   * console.log("HREF=", this.href)
   * })
   * ```
   * @event
   * @param  {Element}     el Elemento
   * @param  {string   |  string[]}    eventList Evento o lista de Evento
   * @param  {string   |  Function}    [selector]  Selector CSS
   * @param  {Function |  ObjAny}      [callback]  Función
   * @param  {ObjAny   |  boolean}     [options = false] Opciones
   * @return {any}
   */
  on(n, t, i, s, c = !1) {
    return g.isNil(n) ? this : (g.isFunction(i) && (c = s, s = i, i = void 0), g.isObject(c) || (c = {}), (g.isArray(t) ? t : g.split(t, " ")).forEach((l) => {
      let d = (w) => {
        if (g.isNil(i))
          return s.call(n, w);
        {
          let O = w.target, N;
          for (; O && O !== n; ) {
            if (Element.prototype.matches.call(O, i) && (N = s.call(O, w), w.isPropagationStopped)) {
              w.stopImmediatePropagation();
              break;
            }
            O = O.parentNode;
          }
          return g.has(c, "once") && !g.isNil(c.once) && this.off(n, t, i, c), N;
        }
      }, _ = this._get_namespace(l), y = g.isObject(_) ? _.name : l, A = g.isObject(_) ? _.ns : null;
      Object.defineProperty(d, "name", {
        value: s.name && s.name !== "" ? s.name : `func_event_${y}_${g.isNil(A) ? (/* @__PURE__ */ new Date()).getTime() : A}`
      });
      let F = Yc.indexOf(y) > -1 ? y : l;
      this._add(n, F, d, g.has(c, "capture") ? c.capture : !1);
      let C = i;
      this._set_data(n, l, {
        event: l,
        handler: d,
        selector: C,
        ns: A,
        options: g.isNil(c) ? !1 : c
      });
    }), n);
  }
  /**
   * Ejecuta un evento solo una vez.
   * 
   * @example
   * ```ts
   * _$("button").once("click", (e) => console.log("me presionaste 1"))
   * // ó
   * _$("li").once("click", "a", function(e){
   * console.log("HREF=", this.href)
   * })
   * // Se se vuelve ha hacer click sobre alguno de los dos no pasara nada
   * ```
   * @event
   * @param  {Element}     el Elemento
   * @param  {string   |  string[]}    eventList Evento o lista de Evento
   * @param  {string   |  Function}    [selector]  Selector CSS
   * @param  {Function |  ObjAny}      [callback]  Función
   * @param  {ObjAny   |  boolean}     [options = false] Opciones
   * @return {any}                 [description]
   */
  once(n, t, i, s, c) {
    return g.isNil(c) && (c = {}), c.once = !0, this.on(n, t, i, s, c);
  }
  /**
   * Desvincula un evento a un elemento
   * @event
   * @param  {Element}   el Elemento
   * @param  {string |  string[]}    eventList Evento o lista de Evento
   * @param  {string |  ObjAny}      [selector]  Selector CSS
   * @param  {ObjAny |  number}      [options]   Opciones
   * @param  {number}                [index = 0]     Posción de la función
   * @return {Element}
   */
  off(n, t, i, s, c = 0) {
    g.isObject(i) && (s = i, i = void 0), g.isNumber(s) && (c = s, s = {}), g.isObject(s) || (s = {});
    let f = this._get_data(n);
    return !g.isArray(t) && g.isEmpty(t) || g.isNil(t) || t.toLowerCase() === "all" || t === "*" ? (f && g.each(f, (d) => {
      d.forEach((_) => {
        this._remove(n, _.event, _.handler, _.options);
      });
    }), this._remove_data(n), n) : ((g.isArray(t) ? t : g.split(t, ".")).forEach((d) => {
      let _ = this._get_namespace(d), y = g.isObject(_) ? _.name : d;
      if (g.has(f, y)) {
        let A = f[y][c];
        this._remove(n, A.event, A.handler, A.options), this._remove_data(n, d, c);
      }
    }), n);
  }
  /**
   * Dispara un evento
   * @event
   * @param  {Element} el    Elemento
   * @param  {Event}   event Evento a disparar
   * @return {boolean}
   */
  fire(n, t) {
    return n.dispatchEvent(t);
  }
  /**
   * Crea un nuevo Evento
   * @event
   * @param  {string}           name        Nombre del evento
   * @param  {any}              [customEvent] Objecto o función del evento a crear
   * @return {CustomEvent<any>}
   */
  create(n, t) {
    let i = {};
    return g.has(t, "detail") ? i = g.assignIn({}, {
      bubbles: !0,
      cancelable: !0,
      detail: null
    }, t) : i = {
      bubbles: !0,
      cancelable: !0,
      detail: t
    }, new CustomEvent(n, i);
  }
}
const Y_ = "@rep985/fascinoTs", V_ = "2.0.0", X_ = {
  version_short: "2.0"
}, Q_ = "El Nuevo Fascino pero ahora escrito con TS", eg = "module", ug = "@types", tg = {
  doc: "docs"
}, ng = [
  "src/**/*",
  "dist/*.{js,map}",
  "dist/**/*.{js,map}"
], rg = {
  test: "vitest",
  "test:ui": "vitest --ui --coverage.enabled=true",
  "test:coverage": "vitest run --coverage",
  "test:run": "vitest run",
  docs: "typedoc",
  dev: "vite",
  build: "tsc && vite build",
  preview: "vite preview"
}, ig = {
  access: "public"
}, og = [
  "TS",
  "Typescript",
  "Javascript",
  "Html",
  "Framework"
], sg = "./dist/fascino.min.js", cg = "./dist/fascino.umd.js", ag = "./dist/fascino.es.js", fg = {
  ".": {
    import: "./dist/fascinoTs.es.js",
    require: "./dist/fascinoTs.umd.cjs"
  }
}, lg = "https://rep98.github.io/fascinoTS", hg = {
  url: "https://github.com/REP98/fascinoTS/issues"
}, dg = {
  type: "git",
  url: "git+https://github.com/REP98/fascinoTS.git"
}, pg = {
  name: "Robert Pérez",
  email: "delfinmundo@gmail.com",
  url: "https://rep98.vzlaweb.com"
}, bg = {
  node: ">=18",
  npm: ">=8"
}, _g = "MIT", gg = [], mg = {
  "@babel/cli": "^7.24.1",
  "@babel/core": "^7.24.4",
  "@babel/preset-env": "^7.24.4",
  "@babel/preset-typescript": "^7.24.1",
  "@types/isomorphic-fetch": "^0.0.39",
  "@types/jsdom": "^21.1.6",
  "@types/lodash": "^4.17.0",
  "@types/node": "^20.12.7",
  "@types/node-fetch": "^2.6.11",
  "@vitest/coverage-v8": "^1.5.0",
  "@vitest/ui": "^1.5.0",
  colorsea: "^1.2.2",
  "isomorphic-fetch": "^3.0.0",
  lodash: "^4.17.21",
  "markdown-it": "^14.1.0",
  typedoc: "^0.25.13",
  "typedoc-github-wiki-theme": "^1.1.0",
  "typedoc-plugin-copy-code-to-clipboard": "^1.1.0",
  "typedoc-plugin-coverage": "^3.1.0",
  "typedoc-plugin-extras": "^3.0.0",
  "typedoc-plugin-markdown": "^3.17.1",
  "typedoc-plugin-merge-modules": "^5.1.0",
  "typedoc-plugin-missing-exports": "^2.2.0",
  "typedoc-plugin-rename-defaults": "^0.7.0",
  typescript: "^5.4.5",
  vite: "^5.2.9",
  "vite-plugin-banner": "^0.7.1",
  vitest: "^1.5.0"
}, xg = {
  startCommand: "npm run test:ui"
}, E0 = {
  name: Y_,
  version: V_,
  config: X_,
  description: Q_,
  type: eg,
  types: ug,
  directories: tg,
  files: ng,
  scripts: rg,
  publishConfig: ig,
  keywords: og,
  browser: sg,
  main: cg,
  module: ag,
  exports: fg,
  homepage: lg,
  bugs: hg,
  repository: dg,
  author: pg,
  engines: bg,
  license: _g,
  contributors: gg,
  devDependencies: mg,
  stackblitz: xg
}, A0 = "FascinoJ{T}S";
function M(u, n = document) {
  return new uu(u, n);
}
class uu extends H0 {
  /**
   * @param {ArgSel} [sel] Selector de elementos o null
   * @param {ParentNode} [ctx = document] Padre del elemento a seleccionar
   */
  constructor(t, i = document) {
    super(t, i);
    /** 
     * Version de Fascino
     * @type {string}
     */
    pe(this, "version");
    /** 
     * Nomre del Paquete
     * @type {string}
     */
    pe(this, "name");
    /** 
     * @private
     * @type {Data} 
     */
    pe(this, "_ds");
    /**
     * @private
     * @type {FsEvent} 
     */
    pe(this, "_ev");
    this.name = A0, this.version = E0.version, this._ds = new Ga(), this._ev = new $0();
  }
  /**
   * Busca verifica si un elemnto es checkd 
   * @protected
   * @param {string} prop 
   */
  _is(t) {
    let i = !1;
    return this.each((s) => {
      i = s[t];
    }), i;
  }
  /**
   * Obtiene o establece una propiedad de un elemento
   * @protected
   * @param  {string} name  El nombre de la propiedad
   * @param  {any}    [value] El valor a establecer o undefined si solo se quiere obtener
   * @return {any}
   */
  _prop(t, i) {
    return this.length === 0 ? !1 : arguments.length === 1 ? t in this.node[0] ? this.node[0][t] : void 0 : (g.isNil(i) && (i = ""), this.each((s) => {
      s[t] = i, t === "innerHTML" && g.script(s);
    }));
  }
  /**
   * Método privado que ayuda a establecer opciones a un elemento dado.
   * @protected
   * @param {Element | NodeList}  node Nodo
   * @param {ObjKSt}     options Opciones
   * @return {void}
   */
  _setOptions(t, i) {
    g.isNil(t) || g.each(i, (s, c) => {
      let f = M(t);
      g.has(i, c) && g.has(f, c) && f[c].apply(this, s);
    });
  }
  /**
   * Tamaño Externo del elemento
   * @protected
   * @param  {string} prop La propiedad
   * @param  {string | number | boolean} [val] el valor o undefined si solo se quiere obtener
   * @return {(String|Number)}
   */
  _sizeOut(t, i) {
    if (this.length === 0)
      return this;
    if (!g.isNil(i) && typeof i != "boolean")
      return this.each((d) => {
        if (!g.isElement(d))
          return;
        let _ = g.getStyleComputed(d), y = t === "width" ? parseInt(_["border-left-width"]) + parseInt(_["border-right-width"]) : parseInt(_["border-top-width"]) + parseInt(_["border-bottom-width"]), A = t === "width" ? parseInt(_["padding-left"]) + parseInt(_["padding-right"]) : parseInt(_["padding-top"]) + parseInt(_["padding-bottom"]);
        d.style[t] = M(d)[t](i)[t]() - y - A + "px";
      });
    let s = this.first, c = s[t === "width" ? "offsetWidth" : "offsetHeight"], f = g.getStyleComputed(s), l = c + parseInt(f[t === "width" ? "margin-left" : "margin-top"]) + parseInt(f[t === "width" ? "margin-right" : "margin-bottom"]);
    return i === !0 ? l : c;
  }
  /**
   * Tamano real del elemento
   * @protected
   * @param  {string} prop La propiedad
   * @param  {string | number | boolean} [val] el valor a asinar o undefined si solo se quiere obtener
   * @return {Fascino | number | string}
   */
  _size(t, i) {
    if (this.length === 0)
      return NaN;
    if (g.isNil(i)) {
      let s = this.first;
      if (t === "height")
        return s === window ? window.innerHeight : s === document ? s.body.clientHeight : parseInt(getComputedStyle(s).height);
      if (t === "width")
        return s === window ? window.innerWidth : s === document ? s.body.clientWidth : parseInt(getComputedStyle(s).width);
    }
    return this.each((s) => {
      g.isElement(s) && (s.style[t] = isNaN(i) ? i : i + "px");
    });
  }
  // Parametros
  /**
   * Primer elemento seleccionado
   * @public
   * @types {Element | null}
   */
  get first() {
    return this.length > 0 ? this.length == 1 ? this.node[0] : g.first(this.node) : null;
  }
  /**
   * Ultimo elemento
   * @public
   * @types {Element | null}
   */
  get last() {
    return this.length == 1 ? this.node[0] : g.last(this.node);
  }
  // UTILS
  /**
   * Primer elemento, envuelto en new Fascino
   * @return {Fascino}
   */
  getfirst() {
    return new uu(this.first, this.ctx);
  }
  /**
   * Ultimo elemento, envuelto en new Fascino
   * @return {Fascino}
   */
  getlast() {
    return new uu(this.last, this.ctx);
  }
  /**
   * Obtiene el elemento dado por su index o todos los elemetos
   * @param  {number | null} [ix = null] Index a buscar
   * @return {Element[]}   Lista de elementos encotrados
   */
  get(t = null) {
    if (g.isNull(t))
      return this.node;
    var i = t;
    return i < 0 ? g.isNil(g.nth(this.node, i + this.length)) ? this.last : this.node[i + this.length] : this.node[i];
  }
  /**
   * Busca, valida y obtiene el elemento dado por su posición dentro de la matriz de elementos
   * @param  {number} i posición del elemento
   * @return {Fascino}
   */
  eq(t) {
    return !isNaN(t) && this.length > 0 ? M(this.get(t)) : this;
  }
  /**
   * Añade funciones a Fascino
   * @static
   *
   * @example
   * ```typescript
   * Fascino.addMethod("saludar", (n: string) => {
   * 	// Nos aseguramos de afectar solo el primer elemento
   * 	let first = this.first
   * 	let txt = first.text() // Obtenemos el Texto
   * 	// Establecemos el texto
   * 	first.text(txt + " " + n)
   * })
   * ```
   * uso
   * ```Javascript
   * _$("p").saludar("añado esto a texto")
   * ```
   * 
   * @param {string} name Nombre de la función
   * @param {FascinoFN} callback Función a asignar
   * @return {Fascino}
   */
  static addMethod(t, i) {
    return uu.prototype.hasOwnProperty(t) && (uu.prototype[t] = i), uu.prototype;
  }
  /**
   * Recorre los elementos
   * @param  {FNElements} callback Argumentos
   * @return {Fascino}
   */
  each(t) {
    return this.node.forEach(t), this;
  }
  /**
   * Verifica si el elemento es seleccionable por el Selector
   * @param  {string} selector Selector CSS
   * @return {Element[]}
   */
  matches(t) {
    const i = [];
    return this.each((s) => {
      s.matches(t) && i.push(s);
    }), i;
  }
  /**
   * Crea una nueva matriz de elementos a través de la función dada
   * @param  {MapFns} callbackFn Función
   * @return {Fascino}
   */
  map(t) {
    return this.node.map(t, this), this;
  }
  /**
   * Combina Elementos
   * @param  {ArgSel} elements Matriz de elementos nueva
   * @return {Fascino}
   */
  merge(t) {
    const i = new uu(t);
    return this.node = g.concat(this.node, i.node), this;
  }
  /**
   * Obtiene la posición del elemento dentro de su padre
   * @param  {string}     [selector] selector
   * @param  {ParentNode} [parent]   padre
   * @return {number} 
   */
  index(t, i) {
    let s = this.first, c = -1, f;
    return g.isNil(i) && (i = s.parentNode), g.isNil(t) ? f = M(i).children() : f = M(i).find(t), f.each((l, d) => {
      l === s && (c = d);
    }), c;
  }
  /**
   * Crea una nueva selección de elemento que cumplan con la condición dada en la función
   * @param  {string | Function}  fn Funcion o selector
   * @return {Fascino[]}
   */
  filter(t) {
    if (g.isString(t)) {
      let i = t;
      t = (s) => s.matches(i);
    }
    return g.concat(
      M().node,
      g.filter(this.node, t)
    );
  }
  /**
   * Busca un elemento hijo por su selector CSS
   * @param  {ArgSel} sel Selector CSS valido
   * @return {Fascino | boolean}
   */
  find(t) {
    let i = [];
    return this.node.forEach((s) => {
      i.concat(...Element.prototype.querySelectorAll.call(s, t));
    }), i.length === 0 ? !1 : M(i);
  }
  /**
   * Verifica si el elemento es hijo del Elemento seleccionado
   * @param  {string} s Selector CSS
   * @return {boolean}
   */
  contains(t) {
    let i = this.find(t);
    return i != !1 && i.length > 0;
  }
  /**
   * Obtiene los hijos de un elemento
   * @param  {string | Element} [sel = null] Selector o elemento hijo a buscar
   * @return {Element[]} Lista de hijos
   */
  children(t = null) {
    let i = [...this.first.children];
    return g.isNil(t) ? i : i.filter((s) => s.matches(t));
  }
  /**
   * Verifica de que tipo es el selector
   * @param  {any}  s
   * @return {Boolean}
   */
  is(t) {
    let i = !1, s = (c, f) => c.classList.contains(f);
    if (this.length == 0)
      return i;
    if (t && g.has(t, "node") && this.each((c) => {
      t.each((f) => (c === f && (i = !0), !0));
    }), g.isString(t)) {
      if (t = g.replace(t, ":", ""), t === "selected" || t === "checked")
        return this._is(t);
      t === "visible" ? this.each((c) => {
        g.isVisible(c) && (i = !0);
      }) : t === "hidden" ? this.each((c) => {
        (c.getAttribute("type") === "hidden" || g.isHide(c)) && (i = !0);
      }) : ["disabled", "readonly"].indexOf(t) > -1 ? this.each((c) => {
        (c[t] || c.getAttribute(t) || s(c, t)) && (i = !0);
      }) : this.each((c) => {
        (c.matches(t) || Element.prototype.matches.call(c, t)) && (i = !0);
      });
    } else
      g.isArray(t) ? this.each((c) => {
        t.forEach((f) => {
          c == f && (i = !0);
        });
      }) : g.has(t, "nodeType") && t.nodeType === 1 && this.each((c) => {
        c == t && (i = !0);
      });
    return i;
  }
  /**
   * Método público de Fascino._prop
   * @param  {string} name  Nombre de la propiedad
   * @param  {any}    [value] Valor de la propiedad o undefined
   * @return {any}
   */
  prop(t, i) {
    return this._prop(t, i);
  }
  /**
   * Agrega un elemento al padre seleccionado
   * @param  {HTMLElement} childNode Nodo Hijo
   * @param  {ObjAny}      [options]   Opciones
   * @return {Fascino | boolean}
   */
  append(t, i) {
    if (this.length == 0)
      return !1;
    let s = g.normalizeElements(t);
    return this._setOptions(s, i), this.each((c) => {
      M(s).each((f, l) => {
        if (f === c)
          return;
        let d = l === 0 ? f : f.cloneNode(!0);
        g.script(d), d.tagName && d.tagName !== "SCRIPT" && c.append(d);
      });
    });
  }
  /**
   * Agrega el elemento seleccionado al nuevo padre
   * @param  {HTMLElement | Element | Fascino} parentNode Nodo Padre
   * @param  {ObjAny}  [options] Opciones
   * @return {Fascino | boolean}
   */
  appendTo(t, i) {
    if (this.length == 0)
      return !1;
    let s = g.normalizeElements(t);
    return this._setOptions(s, i), this.each((c) => {
      M(s).each((f, l) => {
        f != c && f.append(
          l === 0 ? c : c.cloneNode(!0)
        );
      });
    });
  }
  /**
   * Agrega un nuevo elemento al principio del padre seleccionado
   * @param  {HTMLElement | Element | Fascino} childNode Nodo Hijo
   * @param  {ObjAny}         [options] Opciones
   * @return {Fascino} 
   */
  prepend(t, i) {
    if (this.length == 0)
      return !1;
    let s = g.normalizeElements(t);
    return this._setOptions(s, i), this.each((c, f) => {
      M(s).each((l) => {
        if (c === l)
          return;
        let d = f === 0 ? l : l.cloneNode(!0);
        g.script(d), d.tagName && d.tagName !== "SCRIPT" && c.prepend(d);
      });
    });
  }
  /**
   * Agrega el elemento seleccionado al nuevo padre
   * @param  {HTMLElement | Element | Fascino} parent  Nodo Parent
   * @param  {ObjAny}         [options] Opciones
   * @return {Fascino | boolean}
   */
  prependTo(t, i) {
    if (this.length == 0)
      return !1;
    let s = g.normalizeElements(t);
    return this._setOptions(s, i), this.each((c) => {
      M(s).each((f, l) => {
        c !== f && M(f).prepend(l == 0 ? f : f.cloneNode(!0));
      });
    });
  }
  /**
   * Clona el elemento seleccionado
   * @param  {boolean}  [deep = false] Indica si se clona todas sus hijos
   * @return {Fascino}
   */
  clone(t = !1) {
    let i = [];
    return this.each((s) => {
      i.push(s.cloneNode(t));
    }), g.concat(M().node, i);
  }
  /**
   * Crea una copia de un nodo desde un documento externo
   * @param  {boolean}  [deep = true]  Indica si se copian sus hijos
   * @return {Fascino}
   */
  import(t = !0) {
    let i = [];
    return this.each((s) => {
      i.push(document.importNode(s, t));
    }), g.concat(M().node, i);
  }
  /**
   * Transfiere un node desde otro document al documento del método
   * @return {Fascino}
   */
  adopt() {
    let t = [];
    return this.each((i) => {
      t.push(document.adoptNode(i));
    }), g.concat(M().node, t);
  }
  /**
   * Obtiene el contenido de un Iframe o Template
   * @return {Fascino} 
   */
  contents() {
    if (this.length == 0)
      return this;
    let t = [];
    return this.each((i) => {
      let s;
      i.nodeName === "IFRAME" ? s = i.contentDocument : i.nodeName === "TEMPLATE" && (s = i.content), t.push(s);
    }), g.concat(M().node, t);
  }
  /**
   * Obtiene el o los padres de un elemento
   * @param  {string}  [selectorParent] Selector padre
   * @return {Fascino} 
   */
  parents(t) {
    const i = [];
    return this.each((s) => {
      let c = s.parentNode;
      for (; c && c.nodeType === Node.ELEMENT_NODE; )
        !g.isNil(t) && c.matches(t) && i.push(c), c = c.parentNode;
    }), M(i);
  }
  /**
   * Padre del Elemento
   * @return {Fascino}
   */
  parent() {
    const t = [];
    return this.each((i) => t.push(i.parentNode)), M(t);
  }
  /**
   * Obtiene o busca el hermano anterior
   * @param  {string}     [selector] El Selector
   * @return {Array<any>}          [description]
   */
  prev(t) {
    let i = this.first.previousElementSibling;
    if (g.isNil(t))
      return M(i);
    for (; i; ) {
      if (i.matches(t))
        return M(i);
      i = i.previousElementSibling;
    }
    return [];
  }
  /**
   * Obtiene o busca el hermano siguiente
   * @param  {string}     [selector] El Selector
   * @return {Array<any>}
   */
  next(t) {
    let i = this.first.nextElementSibling;
    if (g.isNil(t))
      return M(i);
    for (; i; ) {
      if (i.matches(t))
        return M(i);
      i = i.nextElementSibling;
    }
    return [];
  }
  /**
   * Busca el ascendiente más cercano al elemento seleccionado
   * @param  {string}    [selector]  El Selector
   * @return {Element[] | Fascino}
   */
  closest(t) {
    if (this.length == 0)
      return this;
    if (g.isNil(t))
      return this.parent();
    const i = [];
    return this.each((s) => {
      if ("closest" in s)
        i.push(s.closest(t));
      else
        for (; s && s; ) {
          if (s.matches(t)) {
            i.push(s);
            return;
          }
          s = s.parentElement;
        }
    }), i;
  }
  /**
   * Inserta un elemento antes del elemento seleccionado
   * @param  {string | Element}     elements Los Elementos
   * @return {Fascino}
   */
  insertBefore(t) {
    let i = M(t);
    return this.each((s) => {
      i.each((c, f) => {
        if (c === s)
          return;
        let l = c.parentNode;
        l && l.insertBefore(
          f === 0 ? s : s.cloneNode(!0),
          c
        );
      });
    });
  }
  /**
   * Inserta un elemento después del elemento seleccionado
   * @param  {string | Element}  elements Elementos a insertar
   * @return {Fascino}
   */
  insertAfter(t) {
    let i = M(t);
    return this.each((s) => {
      i.each((c, f) => {
        if (c === s)
          return;
        let l = c.parentNode;
        l && l.insertBefore(
          f === 0 ? s : s.cloneNode(!0),
          c.nextSibling
        );
      });
    });
  }
  /**
   * Encierra un elemento
   * @param  {Element | ParentNode    | string} parent El padre
   * @return {Fascino} 
   */
  wrap(t) {
    if (this.length == 0)
      return this;
    const i = M(g.normalizeElements(t));
    if (!i.length || i.length == 0)
      return this;
    let s = [];
    return this.each((c) => {
      let f = M(i.clone(!0));
      f.insertBefore(c);
      let l = f;
      for (; l.children().length; )
        l = M(l.children()).getfirst();
      l.append(c), s.push(...M(f.first).node);
    }), g.assignIn(M().node, s);
  }
  /**
   * Busca y encierra todos los elemento del tipo dado
   * @param  {HTMLElement | Element | string} el El Elemento
   * @return {Fascino}
   */
  wrapAll(t) {
    if (this.length == 0)
      return this;
    let i = M(g.normalizeElements(t));
    if (!i.length || i.length == 0)
      return this;
    let s = M(i.clone(!0));
    s.insertBefore(this.first);
    let c = s;
    for (; c.children().length; )
      c = M(c.children()).getfirst();
    return this.each((f) => {
      c.append(f);
    }), s;
  }
  /**
   *  Desencierra los elemento
   * @return {Fascino}
   */
  unwrap() {
    return this.each((t) => {
      let i = t.parentNode;
      for (; t.firstChild; )
        i == null || i.insertBefore(t.firstChild, t);
      i == null || i.removeChild(t);
    });
  }
  /**
   * Elimina uno o todos los elementos del DOM
   * @param  {string}  [selector] el selector a buscar para eliminar
   * @return {Fascino}
   */
  remove(t) {
    let i = g.isNil(t) ? this.node.filter((c) => c.matches(t)) : this.node, s = [];
    return i.forEach((c) => {
      s.push(
        c.parentNode.removeChild(c)
      );
    }), M([...this.node, ...s]);
  }
  /**
   * Agrega un elemento o etiquetas HTML después del elemento dado
   * @param  {string | Element | HTMLElement} html El Elemento o Etiqueta HTML
   * @param  {InsertPosition} [position = 'afterbegin'] Posición a insertar
   * @return {Fascino} 
   */
  after(t, i = "afterbegin") {
    return this.each((s) => {
      g.isString(t) ? s.insertAdjacentHTML(i, t) : M(t).insertAfter(s);
    });
  }
  /**
   * Agrega un elemento o HTML antes del elemento dado
   * @param  {string | Element | HTMLElement} html La etiqueta HTML o element
   * @param  {InsertPosition} [position = 'beforebegin'] Posición de elemento
   * @return {Fascino} 
   */
  before(t, i = "beforebegin") {
    return this.each((s) => {
      g.isString(t) ? s.insertAdjacentHTML(i, t) : M(t).insertBefore(s);
    });
  }
  /**
   * Obtiene o Establece el texto al elemento seleccionado
   * @param  {string} [txt] El texto a establecer o undefined para obtener
   * @return {string | Fascio} el texto del elemento
   */
  text(t) {
    return g.isNil(t) ? this._prop("textContent") : this._prop("textContent", t);
  }
  /**
   * Obtiene o Establece el contenido HTML del elemento seleccionado
   * @param  {string | Element | Fascino | any[]} [txt] El texto 
   * @return {string}
   */
  html(t) {
    if (this.length == 0)
      return this;
    let i = [];
    if (g.isNil(t))
      return this._prop("innerHTML");
    if (g.isEmpty(t) || t === "" || t === "")
      return this._prop("innerHTML", "");
    if (g.isArray(t))
      i = [...i, ...t];
    else if (g.isElement(t) || g.isFascinoElement(t)) {
      let s = [];
      (g.isFascinoElement(t) ? t : M(t)).each((f) => {
        s.push(M(f).outerHTML());
      }), i = [...i, ...t];
    } else
      i.push(t);
    return this._prop(
      "innerHTML",
      i.length === 1 && g.isEmpty(i[0]) ? "" : i.join(`
`)
    ), this;
  }
  /**
   * Obtiene o Establece el valor de un elemento dado
   * @param  {string}  [value]  El valor a asignar
   * @return {Fascino | string}
   */
  val(t) {
    return this.length == 0 ? this : g.isNil(t) ? this._prop("value") : this.each((i) => {
      g.isNil(i.value) ? i.value = t : M(i).html(t);
    });
  }
  /**
   * Obtiene el HTML o envoltura del elemento dado
   * @param  {boolean}       [withElement = false] Indica si se retorna como elemento
   * @return {Fascino | string}
   */
  outerHTML(t = !1) {
    let i = this._prop("outerHTML");
    return t ? M(i) : i;
  }
  /**
   * Agrega clases al elemento dado
   * 
   * @example
   * ```Javascript
   * _$(mi-elem).addClass('miclass')
   * _$(mi-elem).addClass('miclass1', 'miclass2' /*...*\)
   * ```
   * 
   * @param {...String} arg Lista de clases separadas por coma(,)
   * @return {Fascino}
   */
  addClass(...t) {
    return this.each((i) => {
      i.classList.add(...t);
    });
  }
  /**
   * Elimina Clases del elemento seleccionado
   * @param  {...String} args
   * @return {Fascino}
   */
  removeClass(...t) {
    return this.each((i) => {
      i.classList.remove(...t);
    });
  }
  /**
   * Intercambia clases del elemento dado
   * @param  {...String} args Lista de Clases a cambiar
   * @return {Fascino}
   */
  toggleClass(...t) {
    return this.each((i) => {
      g.each(t, (s) => i.classList.toggle(s));
    });
  }
  /**
   * Reemplaza una clase por otra
   * 
   * @example
   * ```Javascript
   * _$("#miElement").replaceClass('oldClass', 'NewClass')
   * ```
   * 
   * @param  {string} oldClass Clase vieja 
   * @param  {string} newClass Clase nueva
   * @return {Fascino}
   */
  replaceClass(t, i) {
    return this.each((s) => {
      s.classList.replace(t, i);
    });
  }
  /**
   * Verifica si el elemento posee una clase
   * @param  {String}  className Nombre de la clase
   * @return {Boolean} Verdadero si existe
   */
  hasClass(t) {
    return this.first.classList.contains(t);
  }
  /**
   * Agrega u Obtiene estilos CSS a los Elementos
   *
   * @example
   * ```Javascript
   * let miElement = _$("#myEl")
   * miElement.style('display', 'none') // establece la propiedad CSS a display none
   * miElement.style({
   *   border: '1px solid #ff0' // Establece un border Amarillo
   *   color: '#000' // y un color de texto Negro
   * })
   * miElement.style('display') // retorna none
   * miElement.style() // Retorna todos los Estilos establecidos(CSSStyleDeclaration)
   * miElement.style([
   *   'border', 'color' // Retorna un Objecto {IDfromMiElem: {border: '1px solid #ff0', color: '#000'}}
   * ]) // Importante: si el elemento no tiene ID se le creara uno aleatorio
   * ```
   * 
   * @param  {...any} [arg]
   * @return {Fascino | Object | string | any[]}
   */
  style(...t) {
    if (this.length === 0)
      return this;
    if (t.length === 0)
      return g.getStyleComputed(this.first);
    if (t.length === 1)
      if (g.isArray(t[0])) {
        let i = {}, s = 0;
        return this.each((c) => {
          let f = c.getAttribute("id"), l = g.isNil(f) ? c.tagName + s : f;
          i[l] = {}, t[0].forEach((d) => {
            i[l][d] = c.style[d];
          }), s++;
        }), i;
      } else {
        if (g.isObject(t[0]))
          return this.each((i) => {
            g.each(t[0], (s, c) => {
              i.style.setProperty(c, s);
            });
          });
        if (t[0].indexOf(":") === 0)
          return g.getStyleComputed(this.first, void 0, t[0]);
        if (t[0] === "*" || t[0] === "all")
          return g.getStyleComputed(this.first);
        {
          let i = g.getStyleComputed(this.first);
          return t[0] in i ? i[t[0]] : "";
        }
      }
    return t.length === 2 || t.length === 3 ? this.each((i) => {
      i.style.setProperty(t[0], t[1], t[2] || void 0);
    }) : this;
  }
  /**
   * Remueve todos o los estilos establecidos
   * 
   * @example
   * ```Javascript
   * _$("#miElement").removeStyle('border', 'color') // Removerá los estilos del border y el color
   * ```
   * 
   * @param  {...string} name Lista de Estilo
   * @return {Fascino}
   */
  removeStyle(...t) {
    return g.isNil(t) || this.length === 0 ? this : this.each((i) => {
      t.forEach((s) => {
        i.style.removeProperty(s);
      });
    });
  }
  /**
   * Obtiene o estable el valor de la barra de desplazamiento vertical
   * @param  {string| number} [val] El valor del Scroll
   * @return {string | number | Fascino}
   */
  scrollTop(t) {
    return this.length === 0 ? this : g.isNil(t) ? this.first === window ? window.pageYOffset : this.first.scrollTop : this.each((i) => {
      i.scrollTop = t;
    });
  }
  /**
   * Obtiene o estable el valor de la barra de desplazamiento Horizontal
   * @param  {string| number} [val] El Valor del scroll
   * @return {string| number| Fascino}
   */
  scrollLeft(t) {
    return this.length === 0 ? this : g.isNil(t) ? this.first === window ? window.pageXOffset : this.first.scrollLeft : this.each((i) => {
      i.scrollLeft = t;
    });
  }
  /**
   * Obtiene o Establece el Ancho total del elemento
   * @param  {string | number} [val] Ancho del Elemento
   * @return {string | number| Fascino}
   */
  outerWidth(t) {
    return this._sizeOut("width", t);
  }
  /**
   * Obtiene o Establece la Altura total del elemento
   * @param  {string | number} [val]
   * @return {string | number| Fascino)}
   */
  outerHeight(t) {
    return this._sizeOut("height", t);
  }
  /**
   * Obtiene o Establece la posición del Elemento
   * @param  {OffSetObj} [val] Objeto {top,left}
   * @return {OffSetObj | Fascino}
   */
  offset(t) {
    if (this.length === 0)
      return this;
    if (g.isNil(t)) {
      const i = this.first.getBoundingClientRect(), s = window.pageXOffset || document.documentElement.scrollLeft, c = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: i.top + c,
        left: i.left + s
      };
    }
    return this.each((i) => {
      let s = M(i).offset(), c = t.top, f = t.left, l = g.getStyleComputed(i).position;
      l === "static" && M(i).style("position", "relative"), ["absolute", "fixed"].indexOf(l) === -1 && (c = c - s.top, f = f - s.left), M(i).style({
        top: c,
        left: f
      });
    });
  }
  /**
   * Obtiene la Posición del elemento
   * @param  {boolean} [margin = false] Verdadero si se incluye el margen
   * @return {OffSetObj | Undefined}
   */
  position(t = !1) {
    if (this.length === 0)
      return;
    if (typeof t != "boolean")
      try {
        t = JSON.parse(t);
      } catch {
        t = !1;
      }
    let i = 0, s = 0;
    if (t) {
      let c = g.getStyleComputed(this.first);
      i = parseInt(c["margin-left"]), s = parseInt(c["margin-top"]);
    }
    return {
      top: this.first.offsetTop - s,
      left: this.first.offsetLeft - i
    };
  }
  /**
   * Obtiene o Establece la posición horizontal del elemento
   * @param  {string | number}  [v] Nueva posición
   * @param  {boolean} [m = false] Si se debe incluir el margen
   * @return {string | number}
   */
  left(t, i = !1) {
    return this.length === 0 ? NaN : (typeof t == "boolean" && (i = t, t = void 0), g.isNil(t) ? this.position(i).left : this.style("left", isNaN(t) ? t : t + "px"));
  }
  /**
   * Obtiene o Establece la posición vertical del elemento
   * @param  {string| number}  [v] Nueva posición
   * @param  {boolean} [m = false] Si se debe incluir el margen
   * @return {string | number}
   */
  top(t, i = !1) {
    return this.length === 0 ? NaN : (typeof t == "boolean" && (i = t, t = void 0), g.isNil(t) ? this.position(i).top : this.style("top", isNaN(t) ? t : t + "px"));
  }
  /**
   * Obtiene el Ancho interno del elemento
   * @return {number}
   */
  innerWidth() {
    return this.first === window ? window.innerWidth : this.first.clientWidth;
  }
  /**
   * Obtiene el Alto interno del elemento
   * @return {number}
   */
  innerHeight() {
    return this.first.clientHeight;
  }
  /**
   * Obtiene o establece la altura del elemento
   * @param  {number | string} [val]
   * @return {number | string| Fascino}
   */
  height(t) {
    return this._size("height", t);
  }
  /**
   * Obtiene o establece la anchura del elemento
   * @param  {number | string} [val]
   * @return {number | string | Fascino}
   */
  width(t) {
    return this._size("width", t);
  }
  /**
   * Oculta un ELemento y ejecuta la función dada
   * @param  {ShowHideFn} [callback]
   * @return {Fascino}
   */
  hide(t) {
    return this.each((i) => {
      let s = M(i).style("display"), c = M(i).style("opacity");
      s != "none" && parseInt(c) != 0 && (M(i).data("display", s), M(i).data("opacity", c), M(i).style({
        display: "none",
        opacity: 0
      })), g.isFunction(t) && t.call(this, i);
    });
  }
  /**
   * Muestra un elemento y ejecuta la función dada
   * @param  {ShowHideFn} [callback]
   * @return {Fascino}
   */
  show(t) {
    return this.each((i) => {
      let s = M(i).data("display") || "block", c = M(i).data("opacity") || 1, f = "block", l = 1;
      s && s !== "none" && (f = s), c && c !== 0 && (l = c), M(i).style({
        display: f,
        opacity: l
      }), g.isFunction(t) && t.call(this, i);
    });
  }
  /**
   * Muestra un elemento con desvanecimiento suave
   * @memberOf Fascino
   * @public
   * @param  {ShowHideFn} [fn]   Funcion a ejecutar despues del efecto
   * @param  {number}   [time = 600] Tiempo del desvanecimiento
   * @return {Fascino} 
   */
  fadeIn(t, i = 600) {
    this.style({
      opacity: 0,
      display: ""
    }), g.isNumber(t) && (i = t, t = new Function());
    let s = +/* @__PURE__ */ new Date(), c = this.first, f = () => {
      this.style(
        "opacity",
        +c.style.opacity + (+/* @__PURE__ */ new Date() - s) / i
      ), s = +/* @__PURE__ */ new Date(), +c.style.opacity < 1 && (g.has(window, "requestAnimationFrame") && requestAnimationFrame(f) || setTimeout(f, 16));
    };
    return f(), g.isFunction(t) && t.call(this, c), this;
  }
  /**
   * Funcion que Oculta con un desvanecimiento suave
   * @memberOf Fascino
   * @public
   * @param  {number | ShowHideFn} [fn]   Función a ejecutar luego de ocultar
   * @param  {number}   [time = 600] Tiempo del desvanecimiento
   * @return {Fascino}
   */
  fadeOut(t, i = 600) {
    this.style({
      opacity: 1,
      display: ""
    });
    var s = +/* @__PURE__ */ new Date(), c = this.first, f = () => {
      c.style.opacity = Number(+c.style.opacity - (+/* @__PURE__ */ new Date() - s) / i).toFixed(4), s = +/* @__PURE__ */ new Date(), -c.style.opacity <= 0 && (g.has(window, "requestAnimationFrame") && requestAnimationFrame(f) || setTimeout(f, 16));
    };
    return f(), g.isFunction(t) && t.apply(this, [c]), this;
  }
  /**
   * Obtiene o Establece los Atributos de un elemento
   * 
   * @example
   * ```Javascript
   * let miElement = _$("input")
   * miElement.attr('name', 'paswd') // Establece el Atributo Name a passwd
   * miElement.attr({
   *   id:'miElementID', // Establece el Id a miElementID y cambia el placeholder
   *   placeholder:'Escribe Aquí'
   * })
   * miElement.attr() // Re-establece los Atributos y retorna un NodeMap con ellos en caso de no poseer atributos retornara un Objecto Fascino
   * miElement.attr('name') // Retorna 'passwd' o false
   * miElement.attr(['name', 'id']) // Retorna un objecto {miElementID: {name: 'passwd', id:'miElementID'}}
   * // Ademas podemos pasar una función que se invocara dentro de un bucle que recorre los atributos
   * miElement.attr( function(attrName, attrValue, Attr) {
   *   console.log(
   *       this, // El Elemento iterado
   *       attrName, // El nombre del atributo
   *       attrValue, // El Valor del Attributo
   *       Attr // Lista de todos los atributos
   * )
   * })
   * ```
   * 
   * @param  {...any[]} args
   * @return {*}
   */
  attr(...t) {
    if (this.length === 0)
      return this;
    if (t.length === 0)
      if (this.first.hasAttributes()) {
        const i = this.first.attributes;
        return Array.from(i).forEach((s) => {
          this.first.setAttribute(s.nodeName, s.nodeValue);
        }), i;
      } else
        return this;
    if (t.length === 1)
      if (g.isArray(t[0])) {
        const i = {};
        let s = 0;
        return this.each((c) => {
          let f = c.getAttribute("id"), l = g.isNil(f) ? c.tagName + s : f;
          i[l] = {}, t[0].forEach((d) => {
            c.hasAttribute(d) ? i[l][d] = c.getAttribute(d) : i[l][d] = !1;
          }), s++;
        }), i;
      } else {
        if (g.isObject(t[0]))
          return this.each((i) => {
            for (let s in t[0])
              if (g.has(t[0], s)) {
                let c = g.normalizeData(t[0][s]);
                s in i ? i[s] = c : i.setAttribute(s, c);
              }
          });
        if (g.isString(t[0]))
          return this.first.hasAttribute(t[0]) ? this.first.getAttribute(t[0]) : !1;
        if (g.isFunction(t[0]))
          return this.each((i) => {
            if (i.hasAttributes()) {
              let s = i.attributes;
              Array.from(s).forEach((c) => {
                t[0].call(i, [c.nodeName, c.nodeValue, c]);
              });
            }
          });
      }
    return this.each((i) => {
      let s = t[0], c = g.normalizeData(t[1]);
      s in i ? i[s] = c : i.setAttribute(s, c);
    });
  }
  /**
   * Remueve los atributos dados
   * @example
   * ```Javascript
   * _$("#miElement").removeAttr('style', 'name')
   * ```
   * 
   * @param  {...String} args Lista de Atributos
   * @return {Fascino}
   */
  removeAttr(...t) {
    return this.each((i) => {
      let s = [];
      t.length == 1 && !g.isArray(t[0]) ? s.push(t[0]) : s = [...t], s.forEach((c) => {
        i.removeAttribute(c);
      });
    });
  }
  /**
   * Verifica si el elemento tiene el atributo dado
   * @param  {string}  attr
   * @return {boolean}
   */
  hasAttr(t) {
    return g.isNil(t) ? !1 : this.first.hasAttribute(t);
  }
  /**
   * Alterna los Atributos y su valor
   * @param  {string} name  Nombre del Atributo
   * @param  {string} [value] Valor d el Atributo
   * @return {Fascino}
   */
  toggleAttr(t, i) {
    let s = this;
    return this.each((c) => {
      t in c && c[t] !== i && (c[t] = i), !g.isEmpty(t) && g.isNil(i) ? c.hasAttribute(t) && c.removeAttribute(t) : (s.node = [c], s.attr(t, i));
    });
  }
  /**
   * Elimina todos los atributos de un elemento
   * @return {Fascino}
   */
  cleanAttr() {
    return this.each((t) => {
      if (t.hasAttributes()) {
        let i = t.attributes;
        Array.from(i).forEach((s) => {
          t.removeAttribute(s.nodeName);
        });
      }
    });
  }
  /**
   * Establece u Obtiene los datos del Elemento Dataset
   * @example
   * ```Javascript
   * let miElement = _$("#div")
   * miElement.data('role', 'dialog')  // Establece el Rol a dialog
   * // Esteble al data-json al objecto dado
   * miElement.data({
   *   json:{
   *      a: 1,
   *      b: 2
   * }
   * })
   * miElement.data() // Retorna un Objecto con todos los datos del Atributo data
   * miElement.data('role') // Retorna Dialog
   * miElement.data(['role','json']) // Retornara un Objecto {miElementID: {role: 'dialog', json: {a:1,b:2}}}
   * ```
   * 
   * @param  {...any[]} args
   * @return {any}
   */
  data(...t) {
    return this.length === 0 ? this : this._ds.data(this.node, ...t);
  }
  /**
   * Remueve los Atributos data
   * @example
   * ```Javascript
   * // <input id="miElement" data-role='pick' data-color="#fff">
   * _$('#miElement').removeData('role', 'color');
   * // Obtendremos
   * // <input id="miElement">
   * ```
   * 
   * @param  {...string} keys Lista de nombres de data sin el data
   * @return {Fascino}
   */
  removeData(...t) {
    return this.each((i) => {
      g.each(t, (s) => this._ds.remove(i, s));
    });
  }
  /**
   * Verifica si el Elemento tiene un atributo data dado
   * @param  {string}  key Nombre sin el data
   * @return {boolean}
   */
  hasData(t) {
    return g.isNil(t) ? this._ds.has(this.first, t) || g.isNil(this.first.dataset, t) ? !0 : this.hasAttr(`data-${t}`) : !1;
  }
  /**
   * Alterna entre los atributos data
   * @param  {string} name  Nombre del Atributo sin el data
   * @param  {string | ObjAny | string[]} value Valor del atributo data
   * @return {any}
   */
  toggleData(t, i) {
    return arguments.length === 0 ? !1 : this.hasData(t) ? this._ds.access(this.first, t, i) : this.toggleAttr(`data-${t}`, i);
  }
  /**
   * Establece el Evento para un elemento<br>
   * Si va usar eventos estándar es mejor que use los de la lista `_$().click(), $().blur() ...`
   * @param  {(string|string[])} eventsList El nombre del Evento
   * @param  {string | Function} sel Namespace o selector
   * @param  {Function} [handler] Función a ejecutar
   * @param  {ObjAny | boolean} [options = false] Opciones de AddEventListiner
   * @return {Fascino}
   */
  on(t, i, s, c = !1) {
    return this.each((f) => {
      this._ev.on(f, t, i, s, c);
    });
  }
  /**
   * Desvincula el Evento para un elemento
   * @param  {string | string[]} eventsList El nombre del Evento
   * @param  {string} [sel] Namespace o selector
   * @param  {number | ObjAny} [options] Opciones de AddEventListiner
   * @param  {number} [ix = 0] Index del evento
   * @return {Fascino}
   */
  off(t, i, s, c = 0) {
    return this.each((f) => {
      this._ev.off(f, t, i, s, c);
    });
  }
  /**
   * Ejecuta el evento solo para el primer evento dado
   * @param  {string | string[]} events  El evento
   * @param  {string | Function} sel Namespace o selector
   * @param  {Function} handler Función a ejecutar
   * @param  {ObjAny} [options] Opciones de AddEventListiner
   * @return {Fascino}
   */
  one(t, i, s, c) {
    return this.each((f) => {
      this._ev.once(f, t, i, s, c);
    });
  }
  /**
   * Dispara o Crea un Evento Personalizado
   * @param  {string} name Nombre del Evento
   * @param  {ObjAny} [data] Información del Evento
   * @return {Fascino}
   */
  fire(t, i) {
    let s = g.normName(t), c;
    if (["submit", "reset"].indexOf(s) > -1) {
      if (this.first.nodeName === "FORM")
        this.first[s].call(this.first);
      else {
        let f = this.parents("form").first;
        this.first[s].call(f.first);
      }
      return this;
    }
    return this._ev.List.indexOf(s) > -1 && g.has(this.first, s) && g.isFunction(this.first, s) && this.first[s].call(this.first), c = this._ev.create(t, i), this.each((f) => {
      let l = M(f).data("customEvent"), d = {};
      d[s] = c, g.isNil(l) ? M(f).data("customEvent", d) : M(f).data("customEvent", g.assignIn({}, l, d)), this._ev.fire(f, c);
    });
  }
  /**
   * Dispara un evento
   * @param  {string} name Nombre del Evento
   * @param  {ObjAny} [data] Información del evento
   * @return {Fascino}
   */
  trigger(t, i) {
    var s = g.normName(t);
    return this.each((c) => {
      if (this._ev.List.indexOf(s) > -1)
        c[s].call(c);
      else if (M(c).hasData("customEvent")) {
        let f = M(c).data("customEvent");
        !g.isNil(f) && g.has(f, s) ? this._ev.fire(c, f[s]) : M(c).fire(t, i);
      }
    });
  }
  /**
   * Crea el evento hover
   * @param  {function} fnOver Función de entrada
   * @param  {function} fnOut  Función de Salida
   * @return {Fascino}
   */
  hover(t, i) {
    return this.each((s) => {
      this.on("mouseenter", t).on("mouseleave", i);
    });
  }
  /**
   * Obtiene las lista de eventos asignados aun elemento, si no se pasa ningun argumento se obtendran todos los eventos
   * @param  {string} name  Nombre del Evento
   * @param  {number} [index = -1] Posición del evento a buscar
   * @return {any}
   */
  getEvent(t, i = -1) {
    return this._ev.get_event(this.first, t, i);
  }
}
const yg = new $0(), vg = ["padding", "margin", "border"];
vg.forEach((u) => {
  uu.prototype[u] = function(n, t) {
    if (this.length !== 0) {
      if (g.isString(n) && n.indexOf(":") === 0 && (t = n, n = void 0), g.isNil(n)) {
        let i = g.getStyleComputed(this.first, null, g.isNil(t) ? "" : t), s = {};
        return u !== "border" ? s = {
          top: parseInt(i[`${u}-top`]),
          right: parseInt(i[`${u}-right`]),
          bottom: parseInt(i[`${u}-bottom`]),
          left: parseInt(i[`${u}-left`])
        } : s = {
          top: parseInt(i["border-top-width"]),
          right: parseInt(i["border-right-width"]),
          bottom: parseInt(i["border-bottom-width"]),
          left: parseInt(i["border-left-width"])
        }, s;
      }
      return this.each((i) => {
        if (g.isArray(n))
          M(i).style(u, n.join(" "));
        else if (g.isObject(n)) {
          let s = {}, c = u === "border" ? "-width" : "";
          for (let f in n)
            g.has(n, f) && (s[`${u}-${f}${c}`] = n[f]);
          M(i).style(s);
        } else
          M(i).style(u, n);
      });
    }
  };
});
yg.List.forEach((u) => {
  uu.prototype[u] = function(n, t, i) {
    return arguments.length > 0 ? this.on(u, n, t, i) : this.fire(u, { detail: "Fire " + u });
  };
});
class Za {
  /**
   * Inicializador de elementos
   * @param {globalThis.Storage} [_typestor = localStorage] 
   */
  constructor(n = localStorage) {
    this._typestor = n;
  }
  /**
   * Añade un elemento al almacenamiento
   * @param {string} name  Nombre del Elemento
   * @param {any}    value Valor
   */
  _set(n, t) {
    let i = this._typestor;
    try {
      i.setItem(n, JSON.stringify(t));
    } catch {
      i.setItem(n, t);
    }
  }
  /**
   * Agrega un contenido al almacenamiento
   * @param {string | ObjAny} name Nombre del alamacenamiento o objecto compuesto por el nombre como clave y el valor
   * @param {any} [value] El valor si name e string, omitir si name es objecto
   */
  set(n, t) {
    g.isString(n) ? this._set(n, t) : g.each(n, (i, s) => {
      this._set(s, i);
    });
  }
  /**
   * Verfica si un nombre existe
   * @param  {string}  name Nombre
   * @return {boolean} 
   */
  has(n) {
    return this._typestor.length > 0 && !g.isNil(this._typestor.getItem(n));
  }
  /**
   * Obtiene el contenido de una elemento u objecto
   * @param  {string} name El nombre del elemento
   * @param  {*}       [defaults = false] Valor a devolver si el nombre no existe
   * @return {*}  El contenido o el valor por defecto
   */
  get(n, t = !1) {
    let s = this._typestor.getItem(n);
    if (g.isNil(s))
      return t;
    try {
      return JSON.parse(s);
    } catch {
      return s;
    }
  }
  /** Elimina todos los elementos almacenado */
  clear() {
    this._typestor.clear();
  }
  /**
   * Remueve un elemento dado
   * @param {string | string[]} name el nombre a remover o matriz de nombres
   */
  remove(n) {
    g.isArray(n) ? n.forEach((t) => this._typestor.removeItem(t)) : this._typestor.removeItem(n);
  }
  // FN only JSON value
  /**
   * Añanda un elemento a un objecto previamente alamacenado
   * 
   * @example
   * ```ts
   * let myElem = {title: "Fascino"}
   * let s = new Storages()
   * // añadimos el elemento
   * s.set("element1", myElement)
   * // Si consultamos
   * s.get("element1") // Retorna {title: "Fascino"}
   * // uso de append
   * s.append("element1", "description", "el mejor Framework")
   * // Si volvemos a consultar obtenemesos
   * s.get("element1") // Return {title: "Fascino", description: "el mejor Framework"}
   * ```
   * 
   * @param {string} name  Nombre del elemento almacenado
   * @param {string} key   Clave del objecto
   * @param {any}    [value] Valor de la clave del objecto
   * @returns {boolean} Verdadero si se añadio el elemento
   */
  append(n, t, i) {
    if (this.has(n)) {
      let s = this.get(n);
      if (!g.isObject(s))
        return !1;
      g.has(s, t) && (s[t] = i, this.set(n, s));
    }
    return this.hasIn(n, t);
  }
  /**
   * Verifica si una clave existe en un objecto del nombre del elemento
   * @param  {string}  name Nombre del elemento
   * @param  {string}  key  Clave a buscar
   * @return {boolean}  Verdadero si la clave existe
   */
  hasIn(n, t) {
    if (this.has(n)) {
      let i = this.get(n);
      return g.isObject(i) && g.has(i, t);
    }
    return !1;
  }
  /**
   * Obtiene una clave de un objecto almacenado en un elemento
   * @param  {string} name     El nombre del Elemento
   * @param  {string} key      La clave
   * @param  {any}    [defaults] valor por defecto si la clave no existe
   * @return {any}             el valor de la clave o de defaults
   */
  getIn(n, t, i) {
    return this.hasIn(n, t) ? this.get(n)[t] : i;
  }
  /**
   * Elimina una clave y su valor de un objecto almacenado
   * @param {string} name nombre del elemento
   * @param {string} key  clave a borrar
   */
  removeIn(n, t) {
    if (this.hasIn(n, t)) {
      let i = this.get(n);
      g.has(i, t) && (delete i[t], this.set(n, i));
    }
  }
}
class W0 extends Za {
  constructor() {
    super(sessionStorage);
  }
}
class G0 extends Za {
  constructor() {
    super(localStorage);
  }
}
function Z0(u) {
  const n = [], t = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  if (typeof u != "string")
    return [];
  u = u.trim();
  var i = document.implementation.createHTMLDocument(""), s = i.createElement("base");
  s.href = document.location.href, i.head.appendChild(s);
  var c = i.body, f = t.exec(u);
  if (f)
    n.push(
      document.createElement(f[1])
    );
  else {
    c.innerHTML = u;
    for (let l = 0; l < c.childNodes.length; l++)
      n.push(c.childNodes[l]);
  }
  return n;
}
function wg(u, n = 2) {
  if (u === 0)
    return "0 Bytes";
  const t = 1024, i = n < 0 ? 0 : n, s = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], c = Math.floor(Math.log(u) / Math.log(t));
  return parseFloat((u / Math.pow(t, c)).toFixed(i)) + "" + s[c];
}
function j0(u) {
  if (!xe.isString(u))
    return !1;
  try {
    document.querySelector(u);
  } catch {
    return !1;
  }
  return !0;
}
function Eg(u) {
  try {
    return JSON.parse(u);
  } catch {
    return u;
  }
}
function Ag(u) {
  try {
    return JSON.stringify(u);
  } catch {
    return u;
  }
}
function Cr(u) {
  let n = Z0("<script/>")[0];
  if (n.type = "text/javascript", xe.isNil(u))
    return M(n);
  let t = M(u).first;
  return xe.isNil(t.src) ? n.textContent = t.innerText : n.src = t.src, document.body.appendChild(n), t.parentNode && t.parentNode.removeChild(t), M(n);
}
function Cg(u) {
  if (xe.isNil(u))
    return Cr();
  const n = M(u).first;
  if (n.tagName && n.tagName === "SCRIPT")
    return Cr(n);
  {
    let t = M(n).find("script");
    if (t !== !1) {
      let i = [];
      return t.each((s) => {
        i.push(Cr(s));
      }), i;
    }
  }
  return null;
}
function ja(u, n, t = "") {
  if (xe.isNil(u) || !xe.isElement(u))
    return;
  if (!xe.isNil(n) && n.indexOf(":") === 0 && (t = n, n = void 0), xe.isNil(n))
    return window.getComputedStyle(u, t);
  if (xe.isArray(n)) {
    let s = {}, c = window.getComputedStyle(u, t);
    return n.forEach((f) => {
      s[f] = c[f];
    }), s;
  }
  return window.getComputedStyle(u, t)[n];
}
function Ka(u) {
  if (xe.isNil(u))
    return !1;
  let n = xe.isElement(u) ? j0(u) ? document.querySelector(u) : u : null;
  if (xe.isNil(n))
    return !1;
  let t = document.querySelector("body"), i = document.querySelector("html");
  for (; n && n != t && n != i; ) {
    let s = ja(n, ["display", "opacity", "visibility"]);
    if (s.display === "none" || Sr.toString(s.opacity) === "0" || s.visibility === "hidden")
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function Dg(u) {
  return u.hidden || !Ka(u);
}
function Ja(u) {
  return xe.isNil(u) ? !1 : u.constructor && u.constructor.name.toUpperCase() === "FASCINO" ? !0 : xe.has(u, "node");
}
function kg(u) {
  let n;
  return xe.isString(u) ? n = j0(u) ? M(u).node : Z0(u) : xe.isElement(u) ? n = [u] : Ja(u) ? n = u.node : xe.isArray(u) && (n = u), M(n);
}
function Fg(u) {
  return typeof u != "string" ? void 0 : u.replace(/-/g, "").toLowerCase();
}
function Ya(u) {
  var n = document.createElement("a");
  return n.href = u, !Sr.isNil(n.href) && K0(n.href) ? n.href : u;
}
function K0(u) {
  return u instanceof URL || /(http|https|ftp):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(u);
}
function Sg(u, n = {}) {
  K0(u) || (u = Ya(u));
  var t = new URL(u);
  return Object.keys(n).forEach((i) => t.searchParams.append(i, n[i])), t;
}
function Tg(u) {
  return bu({
    html: !0,
    breaks: !0,
    linkify: !0
  }).render(u);
}
const xe = {
  ...Sr,
  LODASH_VERSION: Sr.VERSION,
  colorsea: Ce,
  createScript: Cr,
  createURI: Ya,
  formatBytes: wg,
  getStyleComputed: ja,
  isFascinoElement: Ja,
  isHiden: Dg,
  isSelector: j0,
  isURL: K0,
  isVisible: Ka,
  local: G0,
  md_render: Tg,
  normalizeData: Eg,
  normalizeElements: kg,
  normName: Fg,
  obj2str: Ag,
  parseHTML: Z0,
  session: W0,
  script: Cg,
  url: Sg
};
delete xe.VERSION;
delete xe._;
const g = xe;
class Ig {
  /**
   * Inicilaizador de los Ganchos
   */
  constructor() {
    /** @type {HookRecord} Lista de Ganchos */
    pe(this, "_hook", {});
    /**
     * @see {@link Utils/Storage.session}
     */
    pe(this, "_s", new W0());
    /**
     * @see {@link Utils/Storage.local}
     */
    pe(this, "_l", new G0());
    this._s.set("hook-sessions", { name: A0, version: E0.version }), this._l.set("hook-local", { name: A0, version: E0.version });
  }
  /**
   * Lista de Canchos
   * @return {HookRecord}
   */
  get hook() {
    return g.assignIn(
      this._hook,
      g.assignIn(this._l.get("hook-local"), this._s.get("hook-sessions"))
    );
  }
  /**
   * Añade un Gancho
   * @param {string}    name nombre del cancho
   * @param {FnAny}  callback Funcion a Ejecutar
   */
  add(n, t) {
    g.has(this._hook, n) || (this._hook[n] = []), this._hook[n].push(t);
  }
  /**
   * Añade un Gancho Persistente, el cual se almacenara en el Storage del navegador
   * @param {string | HookRecord}     name
   * @param {FnAny}    [callback]
   */
  persistent(n, t) {
    g.isString(n) ? (this.add(n, t), this._l.append("hook-local", n, t)) : g.each(n, (i, s) => {
      this.add(i, s), this._l.append("hook-local", s, i);
    });
  }
  /**
   * Añade ganchos de forma temporal al almacenamiento Storega del Navegador
   * @param {string | HookRecord}   name
   * @param {FnAny}  [callback]
   */
  temporal(n, t) {
    g.isString(n) ? (this.add(n, t), this._l.append("hook-sessions", n, t)) : g.each(n, (i, s) => {
      this.add(i, s), this._l.append("hook-sessions", s, i);
    });
  }
  /**
   * Ejecuta un gancho y le pasa los argumentos
   * @param {string} name nombre del gancho
   * @param {any[]}  args argumentos de la función
   */
  run(n, ...t) {
    if (arguments.length <= 1)
      return;
    let i = this.hook[n];
    if (!g.isNil(i))
      for (let s = 0; s < i.length; s++)
        i[s].apply(this, t);
  }
}
class gn {
  /**
   * @static
   * Serializa un objeto para su envio fetchs
   * @param  {ObjAny | ObjAny[]}    param Objecto de parametros
   * @param  {string}         [space = "&"] Separador del objecto
   * @return {string}
   */
  static stringify(n, t = "&") {
    return Object.keys(n).map((i) => g.isObject(n[i]) || g.isArray(n[i]) ? `${encodeURIComponent(i)}[]=${gn.stringify(n[i], t)}` : `${encodeURIComponent(i)}=${encodeURIComponent(n[i])}`).join(t);
  }
  /**
   * @static
   * Convierte un texto serializado en un objecto javacript
   * @param  {string}    param El texto serializado
   * @param  {string }         [space = "&"] Separador del objecto
   * @return {ObjAny} 
   */
  static parse(n, t = "&") {
    let i = {};
    return n.split(t).forEach((s) => {
      let c = s.split("="), f = decodeURIComponent(c[0]), l = decodeURIComponent(c[1]);
      f.indexOf("[]") > -1 ? i[f.replace("[]", "")] = gn.parse(l) : i[f] = l;
    }), i;
  }
  // FORM
  /**
   * Función especial<br>
   * Serializa todos los elementos de un formulario
   * @param {HTMLFormElement} form El formulario
   * @throws {Error} si form = null | undefined
   * @return {string}
   */
  static form(n) {
    if (g.isEmpty(n) || n.nameNode !== "FORM")
      throw new Error("Param (form) is not element HTMLFormElement");
    let t = n.elements, i = {};
    return g.each(t, (s) => {
      let c = s.name || s.id;
      if (!g.isNil(c) && !s.disabled) {
        let f = s.type.toLowerCase(), l = s.nameNode;
        if (l === "TEXTAREA")
          i[c] = s.value;
        else if (l === "INPUT")
          if (f == "checkbox" || f == "radio")
            s.checked && (i[c] = s.value);
          else if (l === "file") {
            let d = new FormData();
            for (let _ = 0; _ < s.files.length; _++)
              d.append(c, s.files[_]);
            i[c] = d;
          } else
            i[c] = s.value;
        else if (l === "SELECT") {
          if (f == "select-one")
            i[c] = s.value;
          else if (f == "select-multiple") {
            let d = s.options;
            Array.from(d).forEach((_) => {
              _.selected && (g.isArray(i[c]) || (i[c] = []), i[c].push(_.value));
            });
          }
        }
      }
    }), gn.stringify(i);
  }
}
var Oe = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof window < "u" && window || {}, ze = {
  searchParams: "URLSearchParams" in Oe,
  iterable: "Symbol" in Oe && "iterator" in Symbol,
  blob: "FileReader" in Oe && "Blob" in Oe && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in Oe,
  arrayBuffer: "ArrayBuffer" in Oe
};
function Og(u) {
  return u && DataView.prototype.isPrototypeOf(u);
}
if (ze.arrayBuffer)
  var Rg = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], Ng = ArrayBuffer.isView || function(u) {
    return u && Rg.indexOf(Object.prototype.toString.call(u)) > -1;
  };
function Kt(u) {
  if (typeof u != "string" && (u = String(u)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(u) || u === "")
    throw new TypeError('Invalid character in header field name: "' + u + '"');
  return u.toLowerCase();
}
function J0(u) {
  return typeof u != "string" && (u = String(u)), u;
}
function Y0(u) {
  var n = {
    next: function() {
      var t = u.shift();
      return { done: t === void 0, value: t };
    }
  };
  return ze.iterable && (n[Symbol.iterator] = function() {
    return n;
  }), n;
}
function Ee(u) {
  this.map = {}, u instanceof Ee ? u.forEach(function(n, t) {
    this.append(t, n);
  }, this) : Array.isArray(u) ? u.forEach(function(n) {
    if (n.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + n.length);
    this.append(n[0], n[1]);
  }, this) : u && Object.getOwnPropertyNames(u).forEach(function(n) {
    this.append(n, u[n]);
  }, this);
}
Ee.prototype.append = function(u, n) {
  u = Kt(u), n = J0(n);
  var t = this.map[u];
  this.map[u] = t ? t + ", " + n : n;
};
Ee.prototype.delete = function(u) {
  delete this.map[Kt(u)];
};
Ee.prototype.get = function(u) {
  return u = Kt(u), this.has(u) ? this.map[u] : null;
};
Ee.prototype.has = function(u) {
  return this.map.hasOwnProperty(Kt(u));
};
Ee.prototype.set = function(u, n) {
  this.map[Kt(u)] = J0(n);
};
Ee.prototype.forEach = function(u, n) {
  for (var t in this.map)
    this.map.hasOwnProperty(t) && u.call(n, this.map[t], t, this);
};
Ee.prototype.keys = function() {
  var u = [];
  return this.forEach(function(n, t) {
    u.push(t);
  }), Y0(u);
};
Ee.prototype.values = function() {
  var u = [];
  return this.forEach(function(n) {
    u.push(n);
  }), Y0(u);
};
Ee.prototype.entries = function() {
  var u = [];
  return this.forEach(function(n, t) {
    u.push([t, n]);
  }), Y0(u);
};
ze.iterable && (Ee.prototype[Symbol.iterator] = Ee.prototype.entries);
function b0(u) {
  if (!u._noBody) {
    if (u.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    u.bodyUsed = !0;
  }
}
function Va(u) {
  return new Promise(function(n, t) {
    u.onload = function() {
      n(u.result);
    }, u.onerror = function() {
      t(u.error);
    };
  });
}
function Lg(u) {
  var n = new FileReader(), t = Va(n);
  return n.readAsArrayBuffer(u), t;
}
function Mg(u) {
  var n = new FileReader(), t = Va(n), i = /charset=([A-Za-z0-9_-]+)/.exec(u.type), s = i ? i[1] : "utf-8";
  return n.readAsText(u, s), t;
}
function Bg(u) {
  for (var n = new Uint8Array(u), t = new Array(n.length), i = 0; i < n.length; i++)
    t[i] = String.fromCharCode(n[i]);
  return t.join("");
}
function Vc(u) {
  if (u.slice)
    return u.slice(0);
  var n = new Uint8Array(u.byteLength);
  return n.set(new Uint8Array(u)), n.buffer;
}
function Xa() {
  return this.bodyUsed = !1, this._initBody = function(u) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = u, u ? typeof u == "string" ? this._bodyText = u : ze.blob && Blob.prototype.isPrototypeOf(u) ? this._bodyBlob = u : ze.formData && FormData.prototype.isPrototypeOf(u) ? this._bodyFormData = u : ze.searchParams && URLSearchParams.prototype.isPrototypeOf(u) ? this._bodyText = u.toString() : ze.arrayBuffer && ze.blob && Og(u) ? (this._bodyArrayBuffer = Vc(u.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : ze.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(u) || Ng(u)) ? this._bodyArrayBuffer = Vc(u) : this._bodyText = u = Object.prototype.toString.call(u) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof u == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : ze.searchParams && URLSearchParams.prototype.isPrototypeOf(u) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, ze.blob && (this.blob = function() {
    var u = b0(this);
    if (u)
      return u;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var u = b0(this);
      return u || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (ze.blob)
        return this.blob().then(Lg);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var u = b0(this);
    if (u)
      return u;
    if (this._bodyBlob)
      return Mg(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Bg(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, ze.formData && (this.formData = function() {
    return this.text().then(qg);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var Pg = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function zg(u) {
  var n = u.toUpperCase();
  return Pg.indexOf(n) > -1 ? n : u;
}
function Et(u, n) {
  if (!(this instanceof Et))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  n = n || {};
  var t = n.body;
  if (u instanceof Et) {
    if (u.bodyUsed)
      throw new TypeError("Already read");
    this.url = u.url, this.credentials = u.credentials, n.headers || (this.headers = new Ee(u.headers)), this.method = u.method, this.mode = u.mode, this.signal = u.signal, !t && u._bodyInit != null && (t = u._bodyInit, u.bodyUsed = !0);
  } else
    this.url = String(u);
  if (this.credentials = n.credentials || this.credentials || "same-origin", (n.headers || !this.headers) && (this.headers = new Ee(n.headers)), this.method = zg(n.method || this.method || "GET"), this.mode = n.mode || this.mode || null, this.signal = n.signal || this.signal || function() {
    if ("AbortController" in Oe) {
      var c = new AbortController();
      return c.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && t)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(t), (this.method === "GET" || this.method === "HEAD") && (n.cache === "no-store" || n.cache === "no-cache")) {
    var i = /([?&])_=[^&]*/;
    if (i.test(this.url))
      this.url = this.url.replace(i, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var s = /\?/;
      this.url += (s.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
Et.prototype.clone = function() {
  return new Et(this, { body: this._bodyInit });
};
function qg(u) {
  var n = new FormData();
  return u.trim().split("&").forEach(function(t) {
    if (t) {
      var i = t.split("="), s = i.shift().replace(/\+/g, " "), c = i.join("=").replace(/\+/g, " ");
      n.append(decodeURIComponent(s), decodeURIComponent(c));
    }
  }), n;
}
function Ug(u) {
  var n = new Ee(), t = u.replace(/\r?\n[\t ]+/g, " ");
  return t.split("\r").map(function(i) {
    return i.indexOf(`
`) === 0 ? i.substr(1, i.length) : i;
  }).forEach(function(i) {
    var s = i.split(":"), c = s.shift().trim();
    if (c) {
      var f = s.join(":").trim();
      try {
        n.append(c, f);
      } catch (l) {
        console.warn("Response " + l.message);
      }
    }
  }), n;
}
Xa.call(Et.prototype);
function Ou(u, n) {
  if (!(this instanceof Ou))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (n || (n = {}), this.type = "default", this.status = n.status === void 0 ? 200 : n.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = n.statusText === void 0 ? "" : "" + n.statusText, this.headers = new Ee(n.headers), this.url = n.url || "", this._initBody(u);
}
Xa.call(Ou.prototype);
Ou.prototype.clone = function() {
  return new Ou(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Ee(this.headers),
    url: this.url
  });
};
Ou.error = function() {
  var u = new Ou(null, { status: 200, statusText: "" });
  return u.ok = !1, u.status = 0, u.type = "error", u;
};
var Hg = [301, 302, 303, 307, 308];
Ou.redirect = function(u, n) {
  if (Hg.indexOf(n) === -1)
    throw new RangeError("Invalid status code");
  return new Ou(null, { status: n, headers: { location: u } });
};
var wt = Oe.DOMException;
try {
  new wt();
} catch {
  wt = function(n, t) {
    this.message = n, this.name = t;
    var i = Error(n);
    this.stack = i.stack;
  }, wt.prototype = Object.create(Error.prototype), wt.prototype.constructor = wt;
}
function Qa(u, n) {
  return new Promise(function(t, i) {
    var s = new Et(u, n);
    if (s.signal && s.signal.aborted)
      return i(new wt("Aborted", "AbortError"));
    var c = new XMLHttpRequest();
    function f() {
      c.abort();
    }
    c.onload = function() {
      var _ = {
        statusText: c.statusText,
        headers: Ug(c.getAllResponseHeaders() || "")
      };
      s.url.indexOf("file://") === 0 && (c.status < 200 || c.status > 599) ? _.status = 200 : _.status = c.status, _.url = "responseURL" in c ? c.responseURL : _.headers.get("X-Request-URL");
      var y = "response" in c ? c.response : c.responseText;
      setTimeout(function() {
        t(new Ou(y, _));
      }, 0);
    }, c.onerror = function() {
      setTimeout(function() {
        i(new TypeError("Network request failed"));
      }, 0);
    }, c.ontimeout = function() {
      setTimeout(function() {
        i(new TypeError("Network request timed out"));
      }, 0);
    }, c.onabort = function() {
      setTimeout(function() {
        i(new wt("Aborted", "AbortError"));
      }, 0);
    };
    function l(_) {
      try {
        return _ === "" && Oe.location.href ? Oe.location.href : _;
      } catch {
        return _;
      }
    }
    if (c.open(s.method, l(s.url), !0), s.credentials === "include" ? c.withCredentials = !0 : s.credentials === "omit" && (c.withCredentials = !1), "responseType" in c && (ze.blob ? c.responseType = "blob" : ze.arrayBuffer && (c.responseType = "arraybuffer")), n && typeof n.headers == "object" && !(n.headers instanceof Ee || Oe.Headers && n.headers instanceof Oe.Headers)) {
      var d = [];
      Object.getOwnPropertyNames(n.headers).forEach(function(_) {
        d.push(Kt(_)), c.setRequestHeader(_, J0(n.headers[_]));
      }), s.headers.forEach(function(_, y) {
        d.indexOf(y) === -1 && c.setRequestHeader(y, _);
      });
    } else
      s.headers.forEach(function(_, y) {
        c.setRequestHeader(y, _);
      });
    s.signal && (s.signal.addEventListener("abort", f), c.onreadystatechange = function() {
      c.readyState === 4 && s.signal.removeEventListener("abort", f);
    }), c.send(typeof s._bodyInit > "u" ? null : s._bodyInit);
  });
}
Qa.polyfill = !0;
Oe.fetch || (Oe.fetch = Qa, Oe.Headers = Ee, Oe.Request = Et, Oe.Response = Ou);
var $g = self.fetch.bind(self);
const Wg = /* @__PURE__ */ Xc($g);
class Dr {
  /**
   * Inicializador de las Cabeceras
   * @param {HeadersInit | Headers} [_options]
   */
  constructor(n) {
    /**
     * @private
     * @typeof {Headers}
     */
    pe(this, "_header", new Headers());
    this._options = n, this.header = this._options;
  }
  /**
   * Obtiene las Opciones de la cabecera
   * @return {HeadersInit} [description]
   */
  get options() {
    return this._options;
  }
  /**
   * Establece las opciones
   * @param {HeadersInit} op
   */
  set options(n) {
    let t = {};
    for (const i in this._header.keys())
      t[i] = this._header.get(i);
    this._options = g.asignIn(this._options, t, n);
  }
  /**
   * Obtiene las Cabeceras
   * @return {Headers}
   */
  get header() {
    return this._header;
  }
  /**
   * Establece las Cabeceras
   * @param {HeadersInit | Headers} h
   */
  set header(n) {
    n instanceof Headers ? this._header = n : this._header = new Headers(n);
  }
  /**
   * Añade una cabecera al elemento
   * @param {HeadersInit} op
   */
  add(n) {
    g.each(n, (t, i) => this._header.append(i, t));
  }
  /**
   * Borra una cabecera por su nombre
   * @param {string} name
   */
  delete(n) {
    this._header.delete(n);
  }
}
const _0 = {
  method: void 0,
  headers: void 0,
  body: null,
  mode: void 0,
  credentials: void 0,
  cache: void 0,
  redirect: void 0,
  signal: void 0
};
class V0 {
  /**
   * @param {HTMLFormElement | RequestResponse | string} resource EL Recurso a usar
   * @param {RequestInit} [fetchOptions = defaultOptions] Opciones para Fetch
   * @param {string} [_type_response = "json"]
   * @param {string} [_mime]
   */
  constructor(n, t = _0, i = "json", s) {
    /** @type {boolean} */
    pe(this, "_isLoading", !1);
    /** @type {any[]} */
    pe(this, "_chucks", []);
    /** @type {AbortController} */
    pe(this, "_controller", new AbortController());
    /** @type {string | URL} */
    pe(this, "_url", "");
    /** @type {RequestInit} */
    pe(this, "_setting", _0);
    /** @type {HeaderFetch} */
    pe(this, "_headerf", new Dr());
    this.resource = n, this.fetchOptions = t, this._type_response = i, this._mime = s, this.resource instanceof HTMLFormElement ? this._get_resource_form() : (this._url = this._get_resoure(this.resource), this.setting = this.fetchOptions);
  }
  // Private Method 
  /**
   * Obtiene los Recursos de un elemento Form
   * @private
   * @return {void}
   */
  _get_resource_form() {
    let n = {}, t = this.resource;
    this._url = this._get_resoure(t.getAttribute("action"));
    let i = ["mode", "credentials", "cache", "redirect", "type-response", "mime"];
    if (n.method = t.getAttribute("method"), t.hasAttribute("enctype")) {
      let s = new Headers();
      s.append("Content-Type", t.getAttribute("enctype")), n.headers = s;
    }
    n.body = new FormData(t), g.each(i, (s) => {
      t.hasAttribute(`data-${s}`) && (n[g.cameCase(s)] = t.getAttribute(`data-${s}`));
    }), this.fetchOptions = g.assignIn(n, this.fetchOptions);
  }
  /**
   * Obtiene los recursos suministrados
   * @private
   * @param {RequestResponse | string} res
   * @return {RequestResponse | string}
   */
  _get_resoure(n) {
    if (n instanceof Request)
      return n;
    if (g.isArray(n)) {
      let t = n.shift();
      return n.length > 0 ? g.url(t, n[0]) : g.url(t);
    } else {
      if (g.isObject(n))
        return g.url(n.url, n.params);
      if (g.isString(n))
        return g.url(n);
    }
    return n;
  }
  /**
   * Resetea las opciones de la clase
   */
  _reset_local() {
    this._isLoading = !1, this._controller = new AbortController();
  }
  /**
   * Lee el body
   * @async
   * @param  {Response}  response 
   * @param  {string}    [type_response = "json"] 
   * @param  {string}    [mimetype] 
   * @return Promise<string | Blob | ObjAny>
   */
  async _read_body(n, t = "json", i) {
    var _;
    const s = (_ = n.body) == null ? void 0 : _.getReader(), c = parseInt(n.headers.get("content-length") || "0", 10);
    let f = 0;
    for (; this._isLoading; ) {
      const { done: y, value: A } = await s.read(), F = { detail: { received: f, length: c, loading: this._isLoading } }, C = new CustomEvent("fetch-progress", F), w = new CustomEvent("fetch-finished", F);
      y ? (this._isLoading = !1, window.dispatchEvent(w)) : (this._chucks.push(A), f += A.length, window.dispatchEvent(C));
    }
    let l = new Uint8Array(f), d = 0;
    for (const y of this._chucks)
      l.set(y, d), d += y.length;
    if (t.toLowerCase() === "json") {
      let y = new TextDecoder("utf-8").decode(l);
      try {
        return JSON.parse(y);
      } catch {
        return y;
      }
    } else
      return t.toLowerCase() === "blob" ? g.isNil(i) ? new Blob([l]) : new Blob([l], { type: i }) : new TextDecoder("utf-8").decode(l);
  }
  /**
   * Configuración de Fetch
   * @return {RequestInit}
   */
  get setting() {
    return this._setting;
  }
  /**
   * Asigna la configuración
   * @param {RequestInit} fetchOptions
   */
  set setting(n) {
    var i;
    var t = g.assignIn(_0, n);
    ((i = t.method) == null ? void 0 : i.toLowerCase()) !== "post" && g.isNil(this._setting.headers) && (this._headerf = new Dr({
      "Content-Type": "application/x-www-form-urlencoded"
    }), t.headers = this._headerf.header), g.each(t, (s, c) => {
      g.isNil(s) && (c == "headers" ? this._setting.headers = s instanceof Headers ? s : this.set_header(s) : c == "body" ? this._setting.body = s : c == "credentials" ? ["omit", "same-origin", "include"].indexOf(s) > -1 && (this._setting.credentials = s) : c == "cache" ? ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"].indexOf(s) > -1 && (this._setting.cache = s) : this._setting[c] = s);
    });
  }
  /**
   * Establece Las Cabeceras
   * @param {HeadersInit} [options]
   * @return {Headers}
   */
  set_header(n) {
    return this._headerf = new Dr(n), this._headerf.header;
  }
  /**
   * Obtiene las Cabeceras
   * @return {HeadersInit}
   */
  get_headers() {
    return this._headerf.options;
  }
  /**
   * Añada cabeceras a la lista
   * @param {HeadersInit} options
   * @return {HeaderFetch}
   */
  add_header(n) {
    return this._headerf.add(n), this._headerf;
  }
  /**
   * Elimina un cabecera
   * @param {string} key
   */
  remove_header(n) {
    this._headerf.delete(n);
  }
  /**
   * Inicializa la solicitud
   * @async
   * @return Promise<string | Blob | ObjAny | Error | unknown>
   */
  async start() {
    this._reset_local(), this._isLoading = !0;
    try {
      this.setting.signal = this._controller.signal;
      const n = await Wg(this._url, this.setting);
      return n.status >= 200 && n.status < 300 ? this._read_body(n, this._type_response, this._mime) : new Error(n.statusText);
    } catch (n) {
      return n;
    } finally {
      this._isLoading = !1;
    }
  }
  /**
   * Cancela la ejecución actual
   */
  cancel() {
    let n = new CustomEvent("fetch-abort", {
      detail: {
        status: "abourt"
      }
    });
    this._controller.abort(), this._reset_local(), window.dispatchEvent(n);
  }
}
function kr(u) {
  return ["GET", "JSON", "SCRIPT"].indexOf(u) !== -1;
}
function st(u, n, t = null, i) {
  let s = u.toUpperCase(), c;
  kr(s) && !g.isNil(t) ? c = {
    url: n,
    params: t
  } : c = n;
  let f = {
    method: kr(s) ? "get" : s.toLowerCase(),
    body: kr(s) ? null : t
  }, l = s === "JSON" ? "json" : "text";
  return new V0(c, g.assignIn(f, i), l);
}
var ct;
async function ef(u, n = null, t) {
  let i = st("get", u, n, t);
  return ct = i.cancel, await i.start();
}
async function Gg(u, n, t) {
  let i = st("post", u, n, t);
  return ct = i.cancel, await i.start();
}
async function Zg(u, n, t) {
  let i = st("put", u, n, t);
  return ct = i.cancel, await i.start();
}
async function jg(u, n, t) {
  let i = st("patch", u, n, t);
  return ct = i.cancel, await i.start();
}
async function Kg(u, n, t) {
  let i = st("delete", u, n, t);
  return ct = i.cancel, await i.start();
}
async function Jg(u, n, t) {
  let i = st("json", u, n, t);
  return ct = i.cancel, await i.start();
}
async function Yg(u, n, t) {
  let i = st("head", u, n, t);
  return ct = i.cancel, await i.start();
}
function Vg(u, n, t = null, i) {
  return !g.isNil(n) && !g.isFunction(n) && (t = n), ef(u, t, i).then((s) => {
    let c = s;
    g.script(c), g.isFunction(n) && n.call(c);
  });
}
const Xg = new uu(document);
Xg.on("submit.ns.fetch", "[data-fetch]", function(u) {
  this.nodeName === "FORM" && (u.preventDefault(), new V0(this).start().then((t) => {
    let i = new $0(), s = i.create("fetch-submit", {
      detail: {
        form: this,
        events: u,
        res: t
      }
    });
    i.fire(this, s);
  }));
});
const Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HeaderFetch: Dr,
  Http: V0,
  Serialize: gn,
  assign: st,
  get cancel() {
    return ct;
  },
  deletes: Kg,
  get: ef,
  getscript: Vg,
  head: Yg,
  isGetMethod: kr,
  json: Jg,
  patch: jg,
  post: Gg,
  put: Zg
}, Symbol.toStringTag, { value: "Module" }));
function e4(u, n) {
  document.readyState != "loading" ? g.isFunction(u) && u.call(document, []) : document.addEventListener("DOMContentLoaded", u, n || !1);
}
function u4(u, n) {
  window.addEventListener("load", u, n);
}
function t4(u) {
  return g.isString(u) ? M(window).on("beforeunload", (n) => (n.returnValue = u, u)) : M(window).on("beforeunload", u);
}
function n4(u, n = null, t) {
  var c, f;
  if (this.length === 0)
    return this;
  let i = "get";
  t && g.has(t, "method") && ((c = t == null ? void 0 : t.method) == null ? void 0 : c.toUpperCase()) !== "GET" && (i = (f = t == null ? void 0 : t.method) == null ? void 0 : f.toLowerCase());
  let s = !1;
  if (g.isString(u)) {
    const l = g.last(u.split("."));
    s = g.endsWith(l, "html") || g.endsWith(l, "md");
  }
  return g.has(M, i) ? M[i](u, n, t).then((l) => {
    this.each((d) => {
      M(d).html(
        s ? g.md_render(l) : l
      );
    });
  }).catch((l) => {
    console.error(`An error occurred while processing your request
`, l);
  }) : null;
}
Object.assign(uu.prototype, { load: n4 });
Object.assign(M, {
  ...g,
  ...Qg,
  addMethod: (u, n) => uu.addMethod(u, n),
  beforeunload: t4,
  DOMLoad: e4,
  session: W0,
  local: G0,
  hooks: () => new Ig(),
  WinLoad: u4
});
Object.assign(window, { _$: M });
export {
  Ga as Data,
  uu as Fascino,
  $0 as FsEvent,
  Dr as HeaderFetch,
  V0 as Http,
  A0 as NAME_FRAMEWORK,
  H0 as Selector,
  gn as Serialize,
  M as _$,
  st as assign,
  ct as cancel,
  Kg as deletes,
  ef as get,
  Vg as getscript,
  Yg as head,
  kr as isGetMethod,
  Jg as json,
  jg as patch,
  Gg as post,
  Zg as put
};
