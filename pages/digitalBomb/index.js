var a = require("../../46559A3485D172BF2033F2337D527533.js").default;

Page({
    data: {
        cartoons: [],
        colors: [ "skyblue", "yellowgreen", "pink" ],
        resultIndex: 0,
        count: 100,
        height: 500,
        isShowResult: !1,
        guideKey: "number-guide"
    },
    selectCT: function(t) {
        a.button();
        var i = t.currentTarget.dataset.index;
        if (console.log(i), i !== this.data.resultIndex) {
            for (var n = this.data.resultIndex > i, e = 0; e < this.data.count; e++) this.data.cartoons[e].isOut ? this.data.cartoons[e].animationData = {} : n ? (this.data.cartoons[e].animationData = e <= i ? this.getAnimExport() : {}, 
            this.data.cartoons[e].isOut = e <= i) : (this.data.cartoons[e].animationData = e >= i ? this.getAnimExport() : {}, 
            this.data.cartoons[e].isOut = e >= i);
            this.setData({
                cartoons: this.data.cartoons
            });
        } else this.setData({
            isShowResult: !0
        });
    },
    getAnimExport: function() {
        return this.animation.scale(1.2).step(), this.animation.scale(0).step(), this.animation.export();
    },
    initAnimation: function() {
        this.animation = wx.createAnimation({
            duration: 300,
            timingFunction: "ease"
        });
    },
    initResult: function() {
        this.random(1, 2);
        this.data.resultIndex = this.random(1, this.data.count) - 1, console.log("result: " + this.data.resultIndex), 
        this.setData({
            resultIndex: this.data.resultIndex
        });
    },
    initCartoon: function() {
        for (var t = 0; t < this.data.count; t++) {
            this.random(1, 8);
            var a = {
                color: this.data.colors[t % this.data.colors.length],
                index: t,
                animationData: {},
                isOut: !1
            };
            this.data.cartoons.push(a);
        }
        this.setData({
            cartoons: this.data.cartoons
        });
    },
    init: function() {
        this.initCartoon(), this.initResult(), this.initAnimation();
    },
    restart: function() {
        a.button(), this.setData({
            isShowResult: !1,
            cartoons: []
        }), this.init();
    },
    showHelp: function() {
        var t = this;
        wx.getStorage({
            key: this.data.guideKey,
            fail: function() {
                wx.showModal({
                    title: "玩法介绍",
                    content: "有100个数字，系统会随机一个特别号码。玩家轮流点击数字，假设点击的数字为50，若特别号码在0~50之间，则51~100的数字消失，缩小范围，反之亦然，直到玩家抽中特别号码为输！",
                    showCancel: !1,
                    success: function() {
                        wx.setStorage({
                            key: t.data.guideKey,
                            data: !0
                        });
                    }
                });
            }
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
    },
    onLoad: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                console.log(a.windowHeight), t.setData({
                    height: a.windowHeight
                }, function() {
                    t.init(), t.showHelp();
                });
            }
        });
    },
    formatTime: function(a) {
        var i = a.getFullYear(), n = a.getMonth() + 1, e = a.getDate(), s = a.getHours(), o = a.getMinutes(), r = a.getSeconds();
        return [ i, n, e ].map(t).join("/") + " " + [ s, o, r ].map(t).join(":");
    },
    random: function(t, a) {
        return Math.floor(Math.random() * (a - t + 1) + t);
    },
    getDateStr: function() {
        var t = new Date();
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    }
});