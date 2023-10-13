function t(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

function e(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, i);
    }
    return n;
}

function n(t) {
    for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(i, !0).forEach(function(e) {
            (0, a.default)(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(i).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
    }
    return t;
}

var i = require("../../../3D95841585D172BF5BF3EC1228707533.js"), r = require("../../../76C4400185D172BF10A22806F8607533.js"), a = r(require("../../../7123DF7485D172BF1745B77331407533.js")), s = r(require("../../../13239EC085D172BF7545F6C7DDC17533.js")), o = i(require("../../../D68184D285D172BFB0E7ECD531F17533.js")), c = require("../../../F0A6C17385D172BF96C0A9741E027533.js"), u = getApp();

Page({
    $$countDownTimer: null,
    $$countDownSec: 0,
    data: {
        NOS: [ "一", "二", "三", "四", "五", "六" ],
        isIpx: !1,
        isIOS: !1,
        noAd: !1,
        hasEnter: !1,
        count: 1,
        gridType: "a",
        isStart: !1,
        isEnd: !1,
        players: [],
        adBtnNo: -1
    },
    onLoad: function() {
        var t = u.globalData, e = t.isIpx, i = t.noAd;
        this.setData(n({
            isIpx: e,
            noAd: i
        }, this.initPlayers(), {
            isIOS: (0, c.$isIOS)()
        }));
    },
    initPlayers: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.count;
        return {
            players: new Array(t).fill(null).map(function() {
                return {
                    sec: [ "0", ".", "0", "0" ],
                    stopped: !1,
                    isSuccess: !1,
                    diff: "0.00"
                };
            })
        };
    },
    onChangeCount: function() {
        var t = this;
        (0, s.default)("showActionSheet", {
            itemList: new Array(6).fill(null).map(function(t, e) {
                return String(e + 1);
            })
        }).then(function(e) {
            var i = e.tapIndex + 1;
            t.setData(n({
                count: i,
                gridType: i <= 3 ? "a" : "b"
            }, t.initPlayers(i)));
        });
    },
    onEnterGame: function() {
        this.setData({
            hasEnter: !0
        });
    },
    onStartGame: function() {
        var t = this;
        if (this.setData({
            isStart: !0
        }), !this.$$countDownTimer) {
            var e = this.data.players;
            this.$$countDownTimer = setInterval(function() {
                var n = 0;
                e.forEach(function(t) {
                    t.stopped ? n++ : t.sec = (.01 + Number(t.sec.join(""))).toFixed(2).split("");
                }), t.$$countDownSec += .01, n >= e.length || t.$$countDownSec >= 9.98 ? (t.clearCountDownTimer(), 
                t.data.isEnd || t.checkIsEnd(void 0, !0)) : t.setData({
                    players: e
                });
            }, 10);
        }
    },
    clearCountDownTimer: function() {
        this.$$countDownTimer && (clearInterval(this.$$countDownTimer), this.$$countDownTimer = null), 
        this.$$countDownSec = 0;
    },
    onStopCountdown: function(t) {
        var e = t.currentTarget.dataset.idx;
        this.checkIsEnd(e);
    },
    checkIsEnd: function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.data.players;
        if (1 === this.data.count) {
            var r = i[0];
            if (!r.stopped) {
                var a, s = Number(r.sec.join(""));
                r.isSuccess = Math.abs(s - 5) <= .1, r.diff = s - 5, r.stopped = !0, this.setData((a = {}, 
                t(a, "players[".concat(0, "]"), r), t(a, "isEnd", !0), a));
            }
        } else {
            void 0 !== e && (i[e].stopped = !0);
            var o = 0, c = !0;
            i.forEach(function(t) {
                var e = Number(t.sec.join(""));
                t.diff = Number((e - 5).toFixed(2)), o = o ? Math.max(o, Math.abs(t.diff)) : Math.abs(t.diff);
            }), i.forEach(function(t) {
                t.isSuccess = Math.abs(t.diff) === o, t.stopped || (c = !1);
            }), this.setData({
                players: i,
                isEnd: n || c
            });
        }
        this.data.isEnd && this.clearCountDownTimer();
    },
    onAgain: function() {
        var t = this.initPlayers();
        t.isStart = !1, t.isEnd = !1, this.setData(t);
    },
    onPunishment: function() {
        wx.navigateTo({
            url: "/secondary/page/punishment/punishment"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "好友喝酒聚会神器，线上最全玩法，一起来叭~",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    onAdLoadSuccess: function() {
        this.setData({
            adBtnNo: u.globalData.isReviewing ? -1 : (0, o.$generateRandom)(5) + 1
        });
    },
    onShareTimeline: function() {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});