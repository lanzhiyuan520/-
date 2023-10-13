getApp();

Page({
    data: {},
    onLoad: function(e) {},
    onReady: function() {},
    onHide: function() {},
    onUnload: function() {},
    onStart: function() {
        wx.navigateTo({
            url: "/differ/page/game/game"
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