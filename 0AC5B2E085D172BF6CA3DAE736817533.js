function e(e, n, r) {
    t(r) != c && (e[n] = r);
}

function t(e) {
    return Object.prototype.toString.call(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(c, f) {
    var i = {};
    return function e(c, f) {
        if (c !== f) {
            var i = t(c), o = t(f);
            if (i == r && o == r) {
                if (Object.keys(c).length >= Object.keys(f).length) for (var l in f) {
                    var s = c[l];
                    void 0 === s ? c[l] = null : e(s, f[l]);
                }
            } else i == n && o == n && c.length >= f.length && f.forEach(function(t, n) {
                e(c[n], t);
            });
        }
    }(c, f), function c(f, i, o, l) {
        if (f !== i) {
            var s = t(f), u = t(i);
            if (s == r) if (u != r || Object.keys(f).length < Object.keys(i).length && "" !== o) e(l, o, f); else {
                for (var a in f) !function(s) {
                    var u = f[s], a = i[s], h = t(u), g = t(a);
                    if (h != n && h != r) u != i[s] && e(l, ("" == o ? "" : o + ".") + s, u); else if (h == n) g != n ? e(l, ("" == o ? "" : o + ".") + s, u) : u.length < a.length ? e(l, ("" == o ? "" : o + ".") + s, u) : u.forEach(function(e, t) {
                        c(e, a[t], ("" == o ? "" : o + ".") + s + "[" + t + "]", l);
                    }); else if (h == r) if (g != r || Object.keys(u).length < Object.keys(a).length) e(l, ("" == o ? "" : o + ".") + s, u); else for (var b in u) c(u[b], a[b], ("" == o ? "" : o + ".") + s + "." + b, l);
                }(a);
            } else s == n ? u != n ? e(l, o, f) : f.length < i.length ? e(l, o, f) : f.forEach(function(e, t) {
                c(e, i[t], o + "[" + t + "]", l);
            }) : e(l, o, f);
        }
    }(c, f, "", i), i;
};

var n = "[object Array]", r = "[object Object]", c = "[object Function]";