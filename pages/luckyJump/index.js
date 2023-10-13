Page({
    data: {
        rotateanimation: null,
        topset: 0,
        isStop: !0,
        angle: 0
    },
    onLoad: function() {
        var t = wx.createAnimation({
            timingFunction: "ease-out",
            duration: 1200
        });
        this.animtion = t;
    },
    onReady: function() {
        var t = this;
        wx.createSelectorQuery().select("#pagewrap").boundingClientRect(function(e) {
            wx.createSelectorQuery().select("#beerbottle").boundingClientRect(function(n) {
                t.setData({
                    topset: (e.height - n.height) / 2
                });
            }).exec();
        }).exec();
    },
    rotate: function() {
        var t = this;
        if (this.data.isStop) {
            this.setData({
                isStop: !1
            });
            var e = this.data.angle + 720 + Math.floor(360 * Math.random());
            this.animtion.rotate(e).step(), this.setData({
                rotateanimation: this.animtion.export(),
                angle: e
            }), setTimeout(function() {
                t.setData({
                    isStop: !0
                });
            }, 1200);
        }
    },
    toTrueWords: function() {
        wx.navigateTo({
            url: "/secondary/page/punishment/punishment"
        });
    },
    onExit: function() {
        wx.navigateBack({
            delta: 1
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