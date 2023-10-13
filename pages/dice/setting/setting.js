var e = getApp();

Page({
    data: {
        diceNum: 5,
        diceCupColor: 0,
        diceCupUrl: "http://pic.lanzhiyuan99.cn/wx/dicecup1/dicecup.png",
        diceCupStyleIdx: 1
    },
    onLoad: function (t) {
        var a = wx.getStorageSync("diceNum");
        a && this.setData({
            diceNum: a
        });
        var c = wx.getStorageSync("diceCupStyleIdx");
        c && this.setData({
            diceCupStyleIdx: c,
            diceCupUrl: "http://pic.lanzhiyuan99.cn/wx/dicecup" + c + "/dicecup.png"
        });
        var i = wx.getStorageSync("diceCupColor");
        i && this.setData({
            diceCupColor: i
        }), this.setData({
            isShakeOpen: e.globalData.canShake
        });
    },
    onUnload: function () { },
    addDice: function () {
        console.log("tap");
        var e = this.data.diceNum + 1;
        e > 6 && (e = 6), this.setData({
            diceNum: e
        });
    },
    reduceDice: function () {
        console.log("tap");
        var e = this.data.diceNum - 1;
        e < 1 && (e = 1), this.setData({
            diceNum: e
        });
    },
    changeDiceCupStyle: function () {
        var e = this.data.diceCupStyleIdx + 1;
        e > 2 && (e = 1), this.setData({
            diceCupStyleIdx: e,
            diceCupUrl: "http://pic.lanzhiyuan99.cn/wx/dicecup" + e + "/dicecup.png"
        });
    },
    addColor: function () {
        var e = this.data.diceCupColor + 30;
        this.setData({
            diceCupColor: e
        });
    },
    reduceColor: function () {
        var e = this.data.diceCupColor - 30;
        this.setData({
            diceCupColor: e
        });
    },
    onShareAppMessage: function () {
        return {
            title: "好友喝酒聚会神器，线上最全玩法，一起来叭~",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    onBtnBackTap: function () {
        wx.setStorageSync("diceNum", this.data.diceNum), wx.setStorageSync("diceCupStyleIdx", this.data.diceCupStyleIdx),
            wx.setStorageSync("diceCupColor", this.data.diceCupColor), wx.navigateBack({
                delta: 1
            });
        var e = getCurrentPages();
        e.length > 1 && e[e.length - 2].changeData();
    },
    switchChange: function (t) {
        e.globalData.canShake = t.detail.value;
    },
    onShareTimeline: function () {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});