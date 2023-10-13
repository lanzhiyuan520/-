function t(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e && (s = s.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, s);
    }
    return i;
}

var e = require("../../../76C4400185D172BF10A22806F8607533.js"), i = e(require("../../../7123DF7485D172BF1745B77331407533.js")), s = e(require("../../FE7BBF9785D172BF981DD790DE217533.js")), n = e(require("../../../13239EC085D172BF7545F6C7DDC17533.js")), a = require("../../../D68184D285D172BFB0E7ECD531F17533.js"), o = require("../../../F0A6C17385D172BF96C0A9741E027533.js"), r = e(require("../../../AF571E7385D172BFC9317674F2417533.js")), u = require("../../../ADEA465785D172BFCB8C2E5042327533.js"), l = getApp();

Page({
    $$allWords: [],
    $$totalTime: 0,
    $$playTime: 0,
    $$startCountdownTimer: null,
    $$playCountdownTimer: null,
    $$results: [],
    data: {
        isIpx: l.globalData.isIpx,
        isPause: !1,
        isSkip: !1,
        isRight: !1,
        showButton: !1,
        startCountdown: 3,
        playCountdown: "",
        words: "",
        isEnd: !1,
        results: [],
        playTime: 0,
        rightCount: 0,
        direction: 1
    },
    onLoad: function(t) {
        var e = t.selected, i = void 0 === e ? 0 : e, n = t.time, a = void 0 === n ? 90 : n, o = t.direction, r = void 0 === o ? 1 : o;
        this.setData({
            direction: r
        }), this.$$allWords = [].concat(s.default[i].words), this.$$playTime = this.$$totalTime = +a;
    },
    onDeviceMotionChange: function(t) {
        var e = t.gamma, i = t.beta, s = this.data, n = s.isPause, a = s.isEnd, u = s.isSkip, l = s.isRight;
        if (!n && !a) return Math.abs(e) < 20 && ((0, o.$isIOS)() || Math.abs(i) < 45) && !u ? (r.default.playMusic("guess_error"), 
        this.addResult(!1), void this.setData({
            isRight: !1,
            isSkip: !0
        })) : Math.abs(e) > 70 && Math.abs(e) < 110 && (u || l) ? (this.setData({
            isRight: !1,
            isSkip: !1
        }), void this.randomWords()) : void (((0, o.$isIOS)() ? e > 160 : Math.abs(e) < 20 && Math.abs(i) > 145) && !l && (r.default.playMusic("guess_right"), 
        this.addResult(!0), this.setData({
            isRight: !0,
            isSkip: !1
        })));
    },
    addResult: function(t) {
        var e = this, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], s = this.$$results.findIndex(function(t) {
            return t.words === e.data.words;
        });
        -1 === s ? this.$$results.push({
            words: this.data.words,
            right: t
        }) : i && (this.$$results[s].right = t);
    },
    onShow: function() {
        wx.setKeepScreenOn({
            keepScreenOn: !0
        }), wx.startDeviceMotionListening({
            interval: "ui"
        });
    },
    onHide: function() {
        wx.stopDeviceMotionListening(), wx.setKeepScreenOn({
            keepScreenOn: !1
        }), this.data.isPause = !1, this.onTogglePause();
    },
    onUnload: function() {
        this.pausePlay(), this.stopStartCountdown(), this.$$results.length = 0;
    },
    stopStartCountdown: function() {
        this.$$startCountdownTimer && (clearInterval(this.$$startCountdownTimer), this.$$startCountdownTimer = null);
    },
    onReady: function() {
        var t = this;
        r.default.playMusic("press"), this.$$startCountdownTimer = setInterval(function() {
            t.setData({
                startCountdown: --t.data.startCountdown
            }), t.data.startCountdown <= 0 ? (wx.onDeviceMotionChange(t.onDeviceMotionChange.bind(t)), 
            t.startGame(), t.stopStartCountdown()) : r.default.playMusic("press");
        }, 1e3);
    },
    startGame: function() {
        r.default.playMusic("win"), this.continuePlay(), this.randomWords({
            showButton: !0,
            playCountdown: this.formatTime(--this.$$playTime)
        });
    },
    formatTime: function(t) {
        var e = Math.floor(t / 60);
        return "".concat((0, o.$paddingTime)(e), ":").concat((0, o.$paddingTime)(t - 60 * e));
    },
    randomWords: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = (0, 
        a.$generateRandom)(this.$$allWords.length), n = this.$$allWords[s];
        this.setData(function(e) {
            for (var s = 1; s < arguments.length; s++) {
                var n = null != arguments[s] ? arguments[s] : {};
                s % 2 ? t(n, !0).forEach(function(t) {
                    (0, i.default)(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({
            words: n
        }, e)), this.$$allWords.splice(s, 1);
    },
    pausePlay: function() {
        this.$$playCountdownTimer && (clearInterval(this.$$playCountdownTimer), this.$$playCountdownTimer = null);
    },
    continuePlay: function() {
        var t = this;
        this.$$playCountdownTimer = setInterval(function() {
            --t.$$playTime <= 0 ? (t.pausePlay(), t.onEnd()) : (t.$$playTime <= 5 && r.default.playMusic("press"), 
            t.setData({
                playCountdown: t.formatTime(t.$$playTime)
            }));
        }, 1e3);
    },
    onTogglePause: function() {
        this.setData({
            isPause: !this.data.isPause,
            isRight: !1,
            isSkip: !1
        }), this.data.isPause ? this.pausePlay() : this.continuePlay();
    },
    onReadyEnd: function() {
        var t = this;
        (0, n.default)("showModal", {
            title: "提前结束",
            content: "确定要提前结束游戏吗"
        }).then(function(e) {
            e.confirm && t.onEnd();
        });
    },
    onEnd: function() {
        this.addResult(!1, !1), r.default.playMusic("win"), this.recordPlayTimes(), this.pausePlay(), 
        this.setData({
            isEnd: !0,
            playTime: this.$$totalTime - this.$$playTime,
            results: this.$$results,
            rightCount: this.$$results.filter(function(t) {
                return t.right;
            }).length
        });
    },
    recordPlayTimes: function() {
        var t = Number((0, u.$getStorageSync)("guessSuccessCount")) || 0;
        t > l.globalData.adConfig.guessFreeTimes || (0, u.$setStorageSync)("guessSuccessCount", t + 1, (0, 
        o.$todayRemainingMS)());
    },
    onAgain: function() {
        (0, o.$navigateBack)();
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
    onShareTimeline: function() {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});