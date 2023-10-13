!function(r) {
    function t(r, t, f) {
        var s, c, E, d, b, A, g, v, w, F = 0, U = [], y = 0, R = !1, B = [], T = [], m = !1;
        if (s = (f = f || {}).encoding || "UTF8", (w = f.numRounds || 1) !== parseInt(w, 10) || 1 > w) throw Error("numRounds must a integer >= 1");
        if ("SHA-1" !== r) throw Error("Chosen SHA variant is not supported");
        b = 512, A = p, g = l, d = 160, v = function(r) {
            return r.slice();
        }, E = i(t, s), c = h(r), this.setHMACKey = function(t, e, n) {
            if (!0 === R) throw Error("HMAC key already set");
            if (!0 === m) throw Error("Cannot set HMAC key after calling update");
            if (t = (e = i(e, s = (n || {}).encoding || "UTF8")(t)).binLen, e = e.value, n = 64 / 4 - 1, 
            64 < t / 8) {
                for (e = g(e, t, 0, h(r), d); e.length <= n; ) e.push(0);
                e[n] &= 4294967040;
            } else if (64 > t / 8) {
                for (;e.length <= n; ) e.push(0);
                e[n] &= 4294967040;
            }
            for (t = 0; t <= n; t += 1) B[t] = 909522486 ^ e[t], T[t] = 1549556828 ^ e[t];
            c = A(B, c), F = b, R = !0;
        }, this.update = function(r) {
            var t, e, n, o = 0;
            for (r = (t = E(r, U, y)).binLen, e = t.value, t = r >>> 5, n = 0; n < t; n += 16) o + b <= r && (c = A(e.slice(n, n + 16), c), 
            o += b);
            F += o, U = e.slice(o >>> 5), y = r % b, m = !0;
        }, this.getHash = function(t, i) {
            var f, s, p, l;
            if (!0 === R) throw Error("Cannot call getHash after setting HMAC key");
            switch (p = u(i), t) {
              case "HEX":
                f = function(r) {
                    return e(r, d, p);
                };
                break;

              case "B64":
                f = function(r) {
                    return n(r, d, p);
                };
                break;

              case "BYTES":
                f = function(r) {
                    return o(r, d);
                };
                break;

              case "ARRAYBUFFER":
                try {
                    s = new ArrayBuffer(0);
                } catch (r) {
                    throw Error("ARRAYBUFFER not supported by this environment");
                }
                f = function(r) {
                    return a(r, d);
                };
                break;

              default:
                throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            for (l = g(U.slice(), y, F, v(c), d), s = 1; s < w; s += 1) l = g(l, d, 0, h(r), d);
            return f(l);
        }, this.getHMAC = function(t, i) {
            var f, s, p, l;
            if (!1 === R) throw Error("Cannot call getHMAC without first setting HMAC key");
            switch (p = u(i), t) {
              case "HEX":
                f = function(r) {
                    return e(r, d, p);
                };
                break;

              case "B64":
                f = function(r) {
                    return n(r, d, p);
                };
                break;

              case "BYTES":
                f = function(r) {
                    return o(r, d);
                };
                break;

              case "ARRAYBUFFER":
                try {
                    f = new ArrayBuffer(0);
                } catch (r) {
                    throw Error("ARRAYBUFFER not supported by this environment");
                }
                f = function(r) {
                    return a(r, d);
                };
                break;

              default:
                throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            return s = g(U.slice(), y, F, v(c), d), l = A(T, h(r)), f(l = g(s, d, b, l, d));
        };
    }
    function e(r, t, e) {
        var n, o, a = "";
        for (t /= 8, n = 0; n < t; n += 1) o = r[n >>> 2] >>> 8 * (3 + n % 4 * -1), a += "0123456789abcdef".charAt(o >>> 4 & 15) + "0123456789abcdef".charAt(15 & o);
        return e.outputUpper ? a.toUpperCase() : a;
    }
    function n(r, t, e) {
        var n, o, a, u = "", i = t / 8;
        for (n = 0; n < i; n += 3) for (o = n + 1 < i ? r[n + 1 >>> 2] : 0, a = n + 2 < i ? r[n + 2 >>> 2] : 0, 
        a = (r[n >>> 2] >>> 8 * (3 + n % 4 * -1) & 255) << 16 | (o >>> 8 * (3 + (n + 1) % 4 * -1) & 255) << 8 | a >>> 8 * (3 + (n + 2) % 4 * -1) & 255, 
        o = 0; 4 > o; o += 1) u += 8 * n + 6 * o <= t ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 * (3 - o) & 63) : e.b64Pad;
        return u;
    }
    function o(r, t) {
        var e, n, o = "", a = t / 8;
        for (e = 0; e < a; e += 1) n = r[e >>> 2] >>> 8 * (3 + e % 4 * -1) & 255, o += String.fromCharCode(n);
        return o;
    }
    function a(r, t) {
        var e, n, o = t / 8, a = new ArrayBuffer(o);
        for (n = new Uint8Array(a), e = 0; e < o; e += 1) n[e] = r[e >>> 2] >>> 8 * (3 + e % 4 * -1) & 255;
        return a;
    }
    function u(r) {
        var t = {
            outputUpper: !1,
            b64Pad: "=",
            shakeLen: -1
        };
        if (r = r || {}, t.outputUpper = r.outputUpper || !1, !0 === r.hasOwnProperty("b64Pad") && (t.b64Pad = r.b64Pad), 
        "boolean" != typeof t.outputUpper) throw Error("Invalid outputUpper formatting option");
        if ("string" != typeof t.b64Pad) throw Error("Invalid b64Pad formatting option");
        return t;
    }
    function i(r, t) {
        var e;
        switch (t) {
          case "UTF8":
          case "UTF16BE":
          case "UTF16LE":
            break;

          default:
            throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
        }
        switch (r) {
          case "HEX":
            e = function(r, t, e) {
                var n, o, a, u, i, f = r.length;
                if (0 != f % 2) throw Error("String of HEX type must be in byte increments");
                for (t = t || [ 0 ], i = (e = e || 0) >>> 3, n = 0; n < f; n += 2) {
                    if (o = parseInt(r.substr(n, 2), 16), isNaN(o)) throw Error("String of HEX type contains invalid characters");
                    for (a = (u = (n >>> 1) + i) >>> 2; t.length <= a; ) t.push(0);
                    t[a] |= o << 8 * (3 + u % 4 * -1);
                }
                return {
                    value: t,
                    binLen: 4 * f + e
                };
            };
            break;

          case "TEXT":
            e = function(r, e, n) {
                var o, a, u, i, f, s, c, h, p = 0;
                if (e = e || [ 0 ], f = (n = n || 0) >>> 3, "UTF8" === t) for (h = 3, u = 0; u < r.length; u += 1) for (a = [], 
                128 > (o = r.charCodeAt(u)) ? a.push(o) : 2048 > o ? (a.push(192 | o >>> 6), a.push(128 | 63 & o)) : 55296 > o || 57344 <= o ? a.push(224 | o >>> 12, 128 | o >>> 6 & 63, 128 | 63 & o) : (u += 1, 
                o = 65536 + ((1023 & o) << 10 | 1023 & r.charCodeAt(u)), a.push(240 | o >>> 18, 128 | o >>> 12 & 63, 128 | o >>> 6 & 63, 128 | 63 & o)), 
                i = 0; i < a.length; i += 1) {
                    for (s = (c = p + f) >>> 2; e.length <= s; ) e.push(0);
                    e[s] |= a[i] << 8 * (h + c % 4 * -1), p += 1;
                } else if ("UTF16BE" === t || "UTF16LE" === t) for (h = 2, a = "UTF16LE" === t || "UTF16LE" !== t && !1, 
                u = 0; u < r.length; u += 1) {
                    for (o = r.charCodeAt(u), !0 === a && (o = (i = 255 & o) << 8 | o >>> 8), s = (c = p + f) >>> 2; e.length <= s; ) e.push(0);
                    e[s] |= o << 8 * (h + c % 4 * -1), p += 2;
                }
                return {
                    value: e,
                    binLen: 8 * p + n
                };
            };
            break;

          case "B64":
            e = function(r, t, e) {
                var n, o, a, u, i, f, s, c = 0;
                if (-1 === r.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                if (o = r.indexOf("="), r = r.replace(/\=/g, ""), -1 !== o && o < r.length) throw Error("Invalid '=' found in base-64 string");
                for (t = t || [ 0 ], f = (e = e || 0) >>> 3, o = 0; o < r.length; o += 4) {
                    for (i = r.substr(o, 4), a = u = 0; a < i.length; a += 1) u |= (n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(i[a])) << 18 - 6 * a;
                    for (a = 0; a < i.length - 1; a += 1) {
                        for (n = (s = c + f) >>> 2; t.length <= n; ) t.push(0);
                        t[n] |= (u >>> 16 - 8 * a & 255) << 8 * (3 + s % 4 * -1), c += 1;
                    }
                }
                return {
                    value: t,
                    binLen: 8 * c + e
                };
            };
            break;

          case "BYTES":
            e = function(r, t, e) {
                var n, o, a, u, i;
                for (t = t || [ 0 ], a = (e = e || 0) >>> 3, o = 0; o < r.length; o += 1) n = r.charCodeAt(o), 
                u = (i = o + a) >>> 2, t.length <= u && t.push(0), t[u] |= n << 8 * (3 + i % 4 * -1);
                return {
                    value: t,
                    binLen: 8 * r.length + e
                };
            };
            break;

          case "ARRAYBUFFER":
            try {
                e = new ArrayBuffer(0);
            } catch (r) {
                throw Error("ARRAYBUFFER not supported by this environment");
            }
            e = function(r, t, e) {
                var n, o, a, u, i;
                for (t = t || [ 0 ], o = (e = e || 0) >>> 3, i = new Uint8Array(r), n = 0; n < r.byteLength; n += 1) a = (u = n + o) >>> 2, 
                t.length <= a && t.push(0), t[a] |= i[n] << 8 * (3 + u % 4 * -1);
                return {
                    value: t,
                    binLen: 8 * r.byteLength + e
                };
            };
            break;

          default:
            throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
        }
        return e;
    }
    function f(r, t) {
        return r << t | r >>> 32 - t;
    }
    function s(r, t) {
        var e = (65535 & r) + (65535 & t);
        return ((r >>> 16) + (t >>> 16) + (e >>> 16) & 65535) << 16 | 65535 & e;
    }
    function c(r, t, e, n, o) {
        var a = (65535 & r) + (65535 & t) + (65535 & e) + (65535 & n) + (65535 & o);
        return ((r >>> 16) + (t >>> 16) + (e >>> 16) + (n >>> 16) + (o >>> 16) + (a >>> 16) & 65535) << 16 | 65535 & a;
    }
    function h(r) {
        if ("SHA-1" !== r) throw Error("No SHA variants supported");
        return [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
    }
    function p(r, t) {
        var e, n, o, a, u, i, h, p = [];
        for (e = t[0], n = t[1], o = t[2], a = t[3], u = t[4], h = 0; 80 > h; h += 1) p[h] = 16 > h ? r[h] : f(p[h - 3] ^ p[h - 8] ^ p[h - 14] ^ p[h - 16], 1), 
        i = 20 > h ? c(f(e, 5), n & o ^ ~n & a, u, 1518500249, p[h]) : 40 > h ? c(f(e, 5), n ^ o ^ a, u, 1859775393, p[h]) : 60 > h ? c(f(e, 5), n & o ^ n & a ^ o & a, u, 2400959708, p[h]) : c(f(e, 5), n ^ o ^ a, u, 3395469782, p[h]), 
        u = a, a = o, o = f(n, 30), n = e, e = i;
        return t[0] = s(e, t[0]), t[1] = s(n, t[1]), t[2] = s(o, t[2]), t[3] = s(a, t[3]), 
        t[4] = s(u, t[4]), t;
    }
    function l(r, t, e, n) {
        var o;
        for (o = 15 + (t + 65 >>> 9 << 4); r.length <= o; ) r.push(0);
        for (r[t >>> 5] |= 128 << 24 - t % 32, t += e, r[o] = 4294967295 & t, r[o - 1] = t / 4294967296 | 0, 
        t = r.length, o = 0; o < t; o += 16) n = p(r.slice(o, o + 16), n);
        return n;
    }
    "function" == typeof define && define.amd ? define(function() {
        return t;
    }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = t), 
    exports = t) : (void 0).jsSHA = t;
}();