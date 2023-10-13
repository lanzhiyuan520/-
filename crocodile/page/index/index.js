function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t = wx.createInnerAudioContext();

Page({
    data: {
        help: !1,
        hejiu: !1,
        xuan: "block",
        motto: "Hello World",
        yachi: [ "", "../../images/baya/y1.png", "../../images/baya/y2.png", "../../images/baya/y3.png", "../../images/baya/y4.png", "../../images/baya/y5.png", "../../images/baya/y6.png", "../../images/baya/y7.png", "../../images/baya/y8.png" ],
        yaoyiyao: {}
    },
    onLoad: function(a) {},
    bindbackmusic: function() {
        (t = wx.createInnerAudioContext()).autoplay = !0, t.loop = !1, t.src = "/assets/audio/yachi.mp3", 
        t.onPlay(function() {
            console.log("开始播放");
        }), t.onError(function(a) {
            console.log(a.errMsg), console.log(a.errCode);
        });
    },
    yachi: function() {},
    back_click: function() {
        wx.redirectTo({
            url: "/pages/other/other"
        });
    },
    help_click: function(a) {
        this.setData({
            help: !0
        });
    },
    gb_click: function(a) {
        this.setData({
            help: !1
        });
    },
    getrand: function(a, t) {
        return parseInt(Math.random() / .125) + 1;
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            lucky_int: this.getrand(1, 8)
        });
    },
    bofangdonghua: function() {
        var a = wx.createAnimation({
            duration: 70
        });
        a.rotate(0 + Math.random()).step().rotate(-2).step().rotate(2).step().rotate(-2).step().rotate(2).step().rotate(-2).step().rotate(2).step().rotate(-2).step().rotate(2).step().rotate(0).step(), 
        this.setData({
            yaoyiyao: a.export(),
            x: 100,
            y: 400
        });
    },
    start: function() {
        var a = wx.createAnimation({
            duration: 50,
            delay: 0
        });
        a.translate(2, -2).step().translate(-2, 2).step().translate(2, -2).step().translate(-2, 2).step().translate(0).step(), 
        this.setData({
            ani: a.export()
        });
    },
    xuan: function(e) {
        this.start(), this.bindbackmusic();
        var n = "yachi[" + e.currentTarget.dataset.cid + "]";
        this.setData(a({}, n, "../../images/baya/wu.png")), e.currentTarget.dataset.cid == this.data.lucky_int && (t.src = "/assets/audio/yachiyao.mp3", 
        this.setData({
            hejiu: !0
        }));
    },
    chonglai: function() {
        this.setData({
            hejiu: !1,
            yachi: [ "", "../../images/baya/y1.png", "../../images/baya/y2.png", "../../images/baya/y3.png", "../../images/baya/y4.png", "../../images/baya/y5.png", "../../images/baya/y6.png", "../../images/baya/y7.png", "../../images/baya/y8.png" ],
            lucky_int: this.getrand(1, 8)
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
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