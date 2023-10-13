var n = require("76C4400185D172BF10A22806F8607533.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.$post = function(n, e) {
    return d(n, e, "POST").then(function(n) {
        return n || {};
    });
}, exports.$clearSession = function() {
    return (0, o.$removeStorageSync)("login_info"), l = null, f = null, s();
};

var e = n(require("13239EC085D172BF7545F6C7DDC17533.js")), t = require("CABAC79085D172BFACDCAF97CB717533.js"), r = require("F0A6C17385D172BF96C0A9741E027533.js"), o = require("ADEA465785D172BFCB8C2E5042327533.js"), i = n(require("B5D182F185D172BFD3B7EAF6D8317533.js")), c = require("DC51161785D172BFBA377E102D517533.js"), u = require("2FCC2B9585D172BF49AA439262427533.js"), a = function(n, e, t) {
    var r = Object.keys(t).sort().map(function(n) {
        return "".concat(n, "=").concat(t[n]);
    }).join("&"), o = [ n, e ];
    r && o.push(r);
    var i = new u("SHA-1", "TEXT");
    return i.setHMACKey(c.SERVER_SECRET_KEY, "TEXT"), i.update(o.join("&")), i.getHMAC("B64");
}, l = null, f = null, s = function() {
    return new Promise(function(n, t) {
        (0, e.default)("login").then(function(e) {
            var r = e.code;
            d("login", {
                code: r,
                inviter: getApp().globalData.inviter
            }, "POST").then(function(e) {
                l = e.token, wx.setStorage({
                    key: "login_info",
                    data: e
                }), n(e);
            }).catch(t);
        }).catch(t);
    });
}, h = function(n) {
    return /login/g.test(n);
}, d = function n(u) {
    var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", p = {
        url: "".concat(c.HOST, "/").concat(u),
        data: d,
        method: g,
        header: {
            "content-type": "application/x-www-form-urlencoded",
            AppVersion: c.VERSION,
            Sign: a(g, "/".concat(u), d)
        }
    };
    return function(n) {
        return new Promise(function(e, t) {
            if (h(n)) e(); else if (l) e(l); else {
                var r = (0, o.$getStorageSync)("login_info", {}).token;
                r ? (l = r, e(r)) : (f || (f = s()), f.then(function(n) {
                    f = null, e(n.token);
                }).catch(function(n) {
                    f = null, t(n);
                }));
            }
        });
    }(u).then(function(o) {
        return o && (p.header.Authorization = o), new Promise(function(o, c) {
            (0, e.default)("request", p).then(function(e) {
                var r = e.data, a = r.code, l = r.data, f = r.message;
                if (a === t.ERROR_CODE.SUCCESS) o(l); else {
                    if (h(u) || a !== t.ERROR_CODE.NEED_LOGIN) throw getApp().onError("路径: ".concat(u, ", \n参数：").concat(JSON.stringify(d), ", \n响应：").concat(JSON.stringify(e))), 
                    new i.default(a, f);
                    s().then(function() {
                        return n(u, d, g).then(o).catch(c);
                    });
                }
            }).catch(function(n) {
                (0, r.$hideLoading)(), c(n);
            });
        });
    }).catch(function(n) {
        throw n;
    });
};