function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

function e(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), a.push.apply(a, n);
    }
    return a;
}

function a(t) {
    for (var a = 1; a < arguments.length; a++) {
        var n = null != arguments[a] ? arguments[a] : {};
        a % 2 ? e(n, !0).forEach(function(e) {
            (0, i.default)(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(n).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return t;
}

var n = require("../../../76C4400185D172BF10A22806F8607533.js"), r = n(require("../../../EBD40D6185D172BF8DB26566A4E07533.js")), i = n(require("../../../7123DF7485D172BF1745B77331407533.js")), o = n(require("../../../13239EC085D172BF7545F6C7DDC17533.js")), s = require("../../../CABAC79085D172BFACDCAF97CB717533.js"), c = require("../../../F0A6C17385D172BF96C0A9741E027533.js"), u = n(require("../../../AAD9055785D172BFCCBF6D50B9227533.js")), d = "connect", l = "normal";

Page({
    $$lastDot: null,
    $$lastDotId: "",
    $$unitSize: 0,
    $$dotWrapPos: null,
    $$squareLine: {},
    $$squareCount: 0,
    data: {
        noAd: getApp().globalData.noAd,
        statusBarHeight: 0,
        size: 0,
        playerNo: 1,
        result: [ 0, 0 ],
        dots: [],
        squares: [],
        lines: [],
        isEnd: !1,
        RADIUS: 50
    },
    onLoad: function(t) {
        var e = t.size, n = void 0 === e ? 6 : e;
        this.$$squareCount = (s.SIZE_LIST.findIndex(function(t) {
            return t === +n;
        }) + 1) * +n + 1, this.setData(a({}, this.initDots(+n), {}, this.initSquares(+n), {
            size: +n,
            statusBarHeight: getApp().globalData.statusBarHeight
        })), this.squareVideoAd = new u.default({
            freePlayTimes: getApp().globalData.adConfig.squareFreeTimes,
            storageName: "squareSuccessCount",
            adUnitId: "adunit-54a5c66b9f602d47"
        }, this), this.squareVideoAd.judgeVideoAd();
    },
    onReady: function() {
        var t = this;
        setTimeout(function() {
            t.selectNodePos("dotWrap").then(function(e) {
                var a = e.width, n = e.left, r = e.top;
                t.$$dotWrapPos = {
                    left: n,
                    top: r
                }, t.$$unitSize = a / (t.data.size - 1);
            });
        }, 1e3);
    },
    initSquares: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.size;
        this.$$squareLine = {};
        for (var e = [], a = 0; a < this.$$squareCount; a++) e[a] = {
            win: 0
        }, this.$$squareLine[a] = this.findSquareCoordinates(a, t);
        this.setData({
            squares: e
        });
    },
    findSquareCoordinates: function(e, a) {
        for (var n, r = !1, i = -1, o = -1, s = 0; s < a; s++) {
            for (var c = 0; c < a; c++) if (this.isSquareStartNode(s, c, e, a)) {
                i = s, o = c, r = !0;
                break;
            }
            if (r) break;
        }
        var u = "".concat(i).concat(o), d = "".concat(i).concat(o + 1), l = "".concat(i + 1).concat(o), f = "".concat(i + 1).concat(o + 1);
        return n = {}, t(n, "".concat(u, "-").concat(d), !1), t(n, "".concat(u, "-").concat(l), !1), 
        t(n, "".concat(d, "-").concat(f), !1), t(n, "".concat(l, "-").concat(f), !1), n;
    },
    isSquareStartNode: function(t, e, a, n) {
        return e !== n - 1 && (n - 1) * t + e === a;
    },
    initDots: function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.size, e = [], a = 0; a < t; a++) {
            e[a] = [];
            for (var n = 0; n < t; n++) e[a][n] = {
                selected: -1,
                squared: !1
            };
        }
        return {
            dots: e
        };
    },
    onSelectedDot: function(t) {
        var e = this, n = t.currentTarget.id;
        this.data.isEnd ? (0, c.$toast)("本局已经结束，请重新开始") : this.selectNodePos(n).then(function(t) {
            if (e.$$lastDot) {
                var r = t.left - e.$$lastDot.left, i = t.top - e.$$lastDot.top;
                if (0 === r && 0 === i) return e.setData(e.getNodeSelectedInfo(n, -1)), e.$$lastDot = null, 
                void (e.$$lastDotId = "");
                if (Math.abs(r) - e.$$unitSize > 1 || Math.abs(i) - e.$$unitSize > 1 || 0 !== i && 0 !== r) return;
                var o = r > 0 || i > 0, s = e.data, c = s.lines, u = s.playerNo, f = e.checkSquare(e.$$lastDotId, n), h = f === l ? u % 2 + 1 : u;
                f !== d && (c.push({
                    left: (o ? e.$$lastDot : t).left - e.$$dotWrapPos.left + 20,
                    top: (o ? e.$$lastDot : t).top - e.$$dotWrapPos.top + 20,
                    width: 0 !== r ? e.$$unitSize : 10,
                    height: 0 !== i ? e.$$unitSize : 10,
                    bg: 1 === u ? "#13D6FC" : "#FF8178"
                }), e.setData(a({}, e.getNodeSelectedInfo(e.$$lastDotId, -1), {}, e.getNodeSelectedInfo(n, -1), {
                    lines: c,
                    playerNo: h
                })), e.$$lastDot = null, e.$$lastDotId = "");
            } else e.$$lastDot = t, e.$$lastDotId = n, e.setData(e.getNodeSelectedInfo(n, e.data.playerNo));
        });
    },
    checkSquare: function(t, e) {
        var a = this.data.size, n = t.split("-"), i = (0, r.default)(n, 3), o = i[1], s = i[2], c = e.split("-"), u = (0, 
        r.default)(c, 3), d = u[1], l = u[2], f = Number(o) * a + Number(s), h = Number(d) * a + Number(l), $ = Math.min(f, h), p = "".concat(o).concat(s), q = "".concat(d).concat(l);
        return this.checkLineSelected(f === $ ? "".concat(p, "-").concat(q) : "".concat(q, "-").concat(p));
    },
    checkLineSelected: function(e) {
        var n = this, i = l;
        return Object.keys(this.$$squareLine).forEach(function(o) {
            var s = n.$$squareLine[o];
            if (void 0 !== s[e]) if (s[e]) i = d; else {
                s[e] = !0;
                var c = 0, u = Object.keys(s);
                if (u.forEach(function(t) {
                    s[t] && (c += 1);
                }), 4 === c) {
                    var l, f = (0, r.default)(u[0].split("-")[0], 2), h = f[0], $ = f[1], p = n.data, q = p.playerNo, g = p.size, D = p.result;
                    n.setData(a((l = {}, t(l, "squares[".concat((g - 1) * Number(h) + Number($), "].win"), q), 
                    t(l, "result[".concat(q - 1, "]"), D[q - 1] + 1), l), n.getDotSquaredInfo(u))), 
                    i = "square", n.checkIsEnd();
                }
            }
        }), i;
    },
    checkIsEnd: function() {
        var t = this.data.result, e = t.reduce(function(t, e) {
            return t + e;
        }) === this.$$squareCount;
        if (e) {
            var a = (0, r.default)(t, 2), n = a[0], i = a[1];
            (0, o.default)("showModal", {
                title: "比赛结果".concat(n, ":").concat(i),
                content: n !== i ? "玩家".concat(n > i ? "一" : "二", "获胜") : "平局",
                showCancel: !1,
                confirmText: "知道了"
            }), this.squareVideoAd.recordPlayTimes();
        }
        e !== this.data.isEnd && this.setData({
            isEnd: e
        });
    },
    getDotSquaredInfo: function(t) {
        var e = [];
        t.forEach(function(t) {
            var a = t.split("-"), n = (0, r.default)(a, 2), i = n[0], o = n[1];
            -1 === e.indexOf(i) && e.push(i), -1 === e.indexOf(o) && e.push(o);
        });
        var a = this.data.dots;
        return e.reduce(function(t, e) {
            var n = e.split(""), i = (0, r.default)(n, 2), o = i[0], s = i[1];
            return a[o][s].squared = !0, a[o][s].selected = -1, t["dots[".concat(o, "][").concat(s, "].style")] = "squared", 
            t;
        }, {});
    },
    getNodeSelectedInfo: function(e, a) {
        var n = this.data.dots, i = e.split("-"), o = (0, r.default)(i, 3), s = o[1], c = o[2];
        return n[s][c].selected = a, t({}, "dots[".concat(s, "][").concat(c, "].style"), "".concat(n[s][c].squared ? "squared" : "", " ").concat(-1 !== a ? "dot-".concat(a) : ""));
    },
    selectNodePos: function(t) {
        return new Promise(function(e) {
            var a = wx.createSelectorQuery();
            a.select("#".concat(t)).boundingClientRect(), a.exec(function(t) {
                e(t[0]);
            });
        });
    },
    onPunishment: function() {
        wx.navigateTo({
            url: "/secondary/page/punishment/punishment"
        });
    },
    onAgain: function() {
        this.squareVideoAd && this.squareVideoAd.judgeVideoAd() || (this.$$lastDot = null, 
        this.$$lastDotId = "", this.setData(a({
            playerNo: 1,
            result: [ 0, 0 ],
            lines: [],
            isEnd: !1
        }, this.initDots(+this.data.size), {}, this.initSquares(+this.data.size))));
    },
    onShareAppMessage: function() {
        return {
            title: "好友喝酒聚会神器，线上最全玩法，一起来叭~",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    onShareTimeline: function() {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});