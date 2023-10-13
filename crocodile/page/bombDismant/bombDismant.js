function a(a, t, n) {
    return t in a ? Object.defineProperty(a, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = n, a;
}

var t = wx.createInnerAudioContext(), n = "/assets/audio/di.mp3";

Page({
    getDate: function() {
        var a = new Date(), t = a.getFullYear(), n = a.getMonth() + 1, e = a.getDate();
        return t.toString() + "/" + n.toString() + "/" + e.toString();
    },
    getTimes: function() {
        return wx.getStorageSync("game1_day") != this.getDate() && (wx.setStorage({
            key: "game1_times",
            data: 300
        }), wx.setStorage({
            key: "game1_day",
            data: this.getDate()
        })), wx.getStorageSync("game1_times");
    },
    look: function() {
        wx.setStorage({
            key: "game1_times",
            data: wx.getStorageSync("game1_times") - 1
        });
    },
    nolimit: function() {
        wx.setStorage({
            key: "game1_times",
            data: 999999
        });
    },
    data: {
        tips_show: "none",
        cut: [ "", "../../images/chaidan/c1.png", "../../images/chaidan/c2.png", "../../images/chaidan/c3.png", "../../images/chaidan/c4.png", "../../images/chaidan/c5.png", "../../images/chaidan/c6.png", "../../images/chaidan/c7.png", "../../images/chaidan/c8.png" ],
        again_show: "none"
    },
    bindbackmusic: function() {
        (t = wx.createInnerAudioContext()).autoplay = !0, t.loop = !0, t.src = n, t.onPlay(function() {
            console.log("开始播放");
        }), t.onError(function(a) {
            console.log(a.errMsg), console.log(a.errCode);
        });
    },
    onLoad: function(a) {
        this.bindbackmusic();
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            lucky_int: this.getrand(1, 8)
        });
    },
    onHide: function() {
        t.destroy();
    },
    onUnload: function() {
        t.destroy();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "好友喝酒聚会神器，线上最全玩法，一起来叭~",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    back_click: function() {
        wx.redirectTo({
            url: "/pages/other/other"
        });
    },
    getrand: function(a, t) {
        return parseInt(Math.random() / .125) + 1;
    },
    help_click: function(a) {
        this.setData({
            tips_show: "block"
        });
    },
    tips_close_click: function(a) {
        this.setData({
            tips_show: "none"
        });
    },
    cut: function(n) {
        var e = n.target.dataset.cid, i = "cut[" + e + "]", o = "../../images/chaidan/r" + e + ".png";
        console.log(e), this.setData(a({}, i, o)), n.target.dataset.cid == this.data.lucky_int && (t.src = "/assets/audio/boom.mp3", 
        t.loop = !1, this.setData({
            again_show: "block"
        }));
    },
    again: function(a) {
        try {
            this.look(), this.setData({
                tips_show: "none",
                cut: [ "", "../../images/chaidan/c1.png", "../../images/chaidan/c2.png", "../../images/chaidan/c3.png", "../../images/chaidan/c4.png", "../../images/chaidan/c5.png", "../../images/chaidan/c6.png", "../../images/chaidan/c7.png", "../../images/chaidan/c8.png" ],
                again_show: "none",
                lucky_int: this.getrand(1, 8)
            }), t.loop = !0, t.src = n;
        } catch (a) {}
    },
    onShareTimeline: function() {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});