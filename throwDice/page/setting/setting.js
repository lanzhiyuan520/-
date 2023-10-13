var t = getApp(), a = require("../../1E2D65B285D172BF784B0DB5C2527533.js").dices, s = wx.createInnerAudioContext(), e = wx.createInnerAudioContext(), i = t.playMusic;

Page({
    data: {
        imgStatus: {
            off: "../../assets/image/setup/off.png",
            on: "../../assets/image/setup/on.png"
        },
        soundImgStatus: "",
        shakeImgStatus: "",
        shockImgStatus: "",
        visibleImgStatus: "",
        duration: 500,
        imgUrls: [],
        currentImgIndex: 0,
        titleBox: 46
    },
    onLoad: function() {
        var i = this;
        wx.getSystemInfo({
            success: function(t) {
                "iPhone X" == t.model && i.setData({
                    titleBox: 120
                });
            }
        });
        var o = [];
        a.forEach(function(t) {
            o.push(t[5]);
        }), this.setData({
            soundImgStatus: t.globalData.setup.sound ? this.data.imgStatus.on : this.data.imgStatus.off,
            shakeImgStatus: t.globalData.setup.shake ? this.data.imgStatus.on : this.data.imgStatus.off,
            shockImgStatus: t.globalData.setup.shock ? this.data.imgStatus.on : this.data.imgStatus.off,
            visibleImgStatus: t.globalData.setup.visibleTotal ? this.data.imgStatus.on : this.data.imgStatus.off,
            imgUrls: o,
            currentImgIndex: t.globalData.diceType
        }), s.src = "/assets/music/sound_toggle.ogg", e.src = "/assets/music/button.mp3";
    },
    toggleSoundStatus: function() {
        i(s), this.data.soundImgStatus.includes("off") ? (this.setData({
            soundImgStatus: this.data.imgStatus.on
        }), t.globalData.setup.sound = !0) : (this.setData({
            soundImgStatus: this.data.imgStatus.off
        }), t.globalData.setup.sound = !1);
    },
    toggleShakeStatus: function() {
        i(s), this.data.shakeImgStatus.includes("off") ? (this.setData({
            shakeImgStatus: this.data.imgStatus.on
        }), t.globalData.setup.shake = !0, wx.startAccelerometer({
            interval: "normal"
        })) : (this.setData({
            shakeImgStatus: this.data.imgStatus.off
        }), t.globalData.setup.shake = !1, wx.stopAccelerometer({
            success: function(t) {
                console.log(t);
            }
        }));
    },
    toggleShockStatus: function() {
        i(s), this.data.shockImgStatus.includes("off") ? (this.setData({
            shockImgStatus: this.data.imgStatus.on
        }), t.globalData.setup.shock = !0) : (this.setData({
            shockImgStatus: this.data.imgStatus.off
        }), t.globalData.setup.shock = !1);
    },
    toggleVisibleStatus: function() {
        i(s), this.data.visibleImgStatus.includes("off") ? (this.setData({
            visibleImgStatus: this.data.imgStatus.on
        }), t.globalData.setup.visibleTotal = !0) : (this.setData({
            visibleImgStatus: this.data.imgStatus.off
        }), t.globalData.setup.visibleTotal = !1);
    },
    handlerPre: function() {
        i(e), t.globalData.diceType--, t.globalData.diceType < 0 && (t.globalData.diceType = a.length - 1), 
        this.setData({
            currentImgIndex: t.globalData.diceType
        });
    },
    handlerNext: function() {
        i(e), t.globalData.diceType++, t.globalData.diceType > a.length - 1 && (t.globalData.diceType = 0), 
        this.setData({
            currentImgIndex: t.globalData.diceType
        });
    },
    handlerBack: function() {
        i(e);
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