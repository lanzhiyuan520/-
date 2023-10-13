var t = getApp(), a = wx.createInnerAudioContext(), e = wx.createInnerAudioContext(), i = wx.createInnerAudioContext(), s = wx.createInnerAudioContext(), o = t.playMusic, n = require("../../1E2D65B285D172BF784B0DB5C2527533.js").dices;

Page({
    isShow: !1,
    data: {
        isSign: !0,
        diceNumber: 1,
        bottom: 40,
        top: 90,
        leftAndRight: 50,
        statusImg: {
            min: "../../assets/image/home/small@2x.png",
            max: "../../assets/image/home/big@2x.png"
        },
        curDices: [],
        curDiceStatus: !1,
        curStatusImg: "",
        animateClass: "",
        diceClass: "",
        totalNum: 0,
        diceSize: 65,
        isShowTotal: !0,
        titleBox: 46
    },
    onLoad: function() {
        var o = this;
        wx.getSystemInfo({
            success: function(t) {
                "iPhone X" == t.model && o.setData({
                    titleBox: 95
                });
            }
        }), a.src = "/assets/music/dice_click.mp3", e.src = "/assets/music/roll.mp3", i.src = "/assets/music/button.mp3", 
        s.src = "/assets/music/shake.mp3", this.setData({
            diceNumber: t.globalData.diceNumber
        }), t.globalData.setup.shake && this.shakeFun(), this.initPage();
    },
    onReady: function() {},
    handlerReduce: function() {
        var a, e = this;
        o(i), 1 == this.data.diceNumber ? (this.setData({
            curDiceStatus: !0,
            curStatusImg: this.data.statusImg.min
        }), a = setTimeout(function() {
            e.setData({
                curDiceStatus: !1
            }), clearTimeout(a);
        }, 2e3)) : (this.setData({
            diceNumber: this.data.diceNumber - 1,
            curDiceStatus: !1
        }), t.globalData.diceNumber = this.data.diceNumber);
    },
    handlerPlus: function() {
        var a, e = this;
        o(i), 6 == this.data.diceNumber ? (this.setData({
            curDiceStatus: !0,
            curStatusImg: this.data.statusImg.max
        }), a = setTimeout(function() {
            e.setData({
                curDiceStatus: !1
            }), clearTimeout(a);
        }, 2e3)) : (this.setData({
            diceNumber: this.data.diceNumber + 1,
            curDiceStatus: !1
        }), t.globalData.diceNumber = this.data.diceNumber);
    },
    initPage: function() {
        for (var a = [], e = 0, i = this.data.bottom + this.data.top, s = t.globalData.window.height - i, o = 0; o < this.data.diceNumber; o++) {
            var r = {
                src: n[t.globalData.diceType][o + 1],
                key: 10 * Math.random() + new Date().getTime(),
                opacity: 1,
                left: Math.ceil(t.globalData.window.width / 2) - 30,
                bottom: s - o * this.data.diceSize - 100
            };
            a.push(r), e += o + 1;
        }
        this.setData({
            curDices: a,
            animateClass: "",
            totalNum: e
        });
    },
    initDice: function() {
        for (var a = this, e = [], i = 0, s = 0; s < this.data.diceNumber; s++) {
            var o = Math.ceil(6 * Math.random()), r = {
                src: n[t.globalData.diceType][o],
                key: 10 * Math.random() + new Date().getTime(),
                opacity: 0,
                left: Math.ceil(t.globalData.window.width / 2) - 30,
                bottom: -50
            };
            e.push(r), i += o;
        }
        this.setData({
            curDices: e,
            animateClass: ""
        });
        var c = setTimeout(function() {
            a.setData({
                totalNum: i
            }), clearTimeout(c);
        }, 800);
    },
    handlerPlay: function(i) {
        var s = this;
        this.setData({
            diceClass: ""
        }), o(a), this.initDice(), this.setData({
            diceClass: "shake-animation"
        }), t.globalData.setup.shock && wx.vibrateShort({
            success: function(t) {
                console.log(t);
            },
            error: function(t) {
                console.log(t);
            }
        });
        var n = setTimeout(function() {
            t.getWindowInfo().then(function(a) {
                for (var i = Object.assign([], s.data.curDices), n = s.data.bottom + s.data.top, r = t.globalData.window.height - n, c = Math.floor((t.globalData.window.width - s.data.leftAndRight - s.data.diceSize * s.data.diceNumber) / s.data.diceNumber), u = Math.floor((r - n) / s.data.diceNumber), d = [], h = [], l = 0; l < s.data.diceNumber; l++) {
                    var m = Math.floor(Math.random() * c + (c + s.data.diceSize) * l + s.data.leftAndRight / 2), g = Math.floor(Math.random() * u + u * l) + s.data.bottom;
                    m = m + s.data.diceSize > t.globalData.window.width ? t.globalData.window.width - s.data.diceSize : m, 
                    g = g + s.data.diceSize > r ? r - s.data.diceSize : g, d.push(m), h.push(g);
                }
                d = s.disorderArr(d), h = s.disorderArr(h);
                for (var D = 0; D < i.length; D++) i[D].left = d.pop(), i[D].bottom = h.pop(), i[D].opacity = 1;
                s.setData({
                    curDices: i,
                    animateClass: "rotateAnimation"
                }), t.globalData.setup.sound && (e.startTime = 0, o(e));
            }), clearTimeout(n);
        }, 300);
    },
    handlerSetup: function() {
        o(i), wx.navigateTo({
            url: "/throwDice/page/setting/setting"
        });
    },
    disorderArr: function(t) {
        t.length;
        for (var a = t.length - 1; a >= 0; a--) {
            var e = Math.floor(Math.random() * (a + 1)), i = t[e];
            t[e] = t[a], t[a] = i;
        }
        return t;
    },
    onShow: function() {
        this.isShow = !0, this.setData({
            isShowTotal: t.globalData.setup.visibleTotal
        });
    },
    onHide: function() {
        this.isShow = !1;
    },
    shakeFun: function() {},
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