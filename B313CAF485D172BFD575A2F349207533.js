function t() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
        !0;
    } catch (t) {
        return !1;
    }
}

function e(n, o, u) {
    return t() ? module.exports = e = Reflect.construct : module.exports = e = function(t, e, n) {
        var o = [ null ];
        o.push.apply(o, e);
        var u = new (Function.bind.apply(t, o))();
        return n && r(u, n.prototype), u;
    }, e.apply(null, arguments);
}

var r = require("D5C4DBF185D172BFB3A2B3F677D07533.js");

module.exports = e;