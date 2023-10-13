function e(u) {
    var i = "function" == typeof Map ? new Map() : void 0;
    return module.exports = e = function(e) {
        function u() {
            return n(e, arguments, r(this).constructor);
        }
        if (null === e || !o(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== i) {
            if (i.has(e)) return i.get(e);
            i.set(e, u);
        }
        return u.prototype = Object.create(e.prototype, {
            constructor: {
                value: u,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t(u, e);
    }, e(u);
}

var r = require("C263A5B085D172BFA405CDB76D407533.js"), t = require("D5C4DBF185D172BFB3A2B3F677D07533.js"), o = require("CBE9A5A785D172BFAD8FCDA061807533.js"), n = require("B313CAF485D172BFD575A2F349207533.js");

module.exports = e;