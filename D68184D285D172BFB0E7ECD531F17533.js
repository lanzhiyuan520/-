Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = exports.$generateRandom = void 0;

var t = [ "划拳已经过时了，抖音最火的酒桌玩筛子，不服来战！", "抖音最火的酒桌玩筛子，饭局、酒吧、KTV必备！", "喝完这杯，还有三杯，有了网红酒桌玩筛子，不醉不归！" ], e = function(t) {
    for (var e = [], o = 0; o < t; o++) e.push(o);
    return e.sort(function() {
        return Math.random() - Math.random();
    }), e.slice(Math.floor(Math.random() * t))[0];
};

exports.$generateRandom = e, exports.default = function() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "index", a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return {
        title: t[e(3)],
        path: "".concat(n ? "/".concat(n) : "", "/page/").concat(o, "/").concat(o).concat(a ? "?".concat(a) : ""),
        imageUrl: "".concat(n ? "/".concat(n) : "", "/assets/share").concat(n ? "" : e(2), ".png")
    };
};