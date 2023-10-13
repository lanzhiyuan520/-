var e = require("D5C4DBF185D172BFB3A2B3F677D07533.js");

module.exports = function(t, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), r && e(t, r);
};