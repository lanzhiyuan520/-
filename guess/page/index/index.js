var e = require("../../../76C4400185D172BF10A22806F8607533.js"), t = (e(require("../../FE7BBF9785D172BF981DD790DE217533.js")), 
e(require("../../../13239EC085D172BF7545F6C7DDC17533.js"))), i = require("../../../F0A6C17385D172BF96C0A9741E027533.js"), s = (require("../../../0C23BFD085D172BF6A45D7D74FD17533.js"), 
e(require("../../../AAD9055785D172BFCCBF6D50B9227533.js")), [ 60, 90, 120 ]), n = getApp(), a = require("../../FE7BBF9785D172BF981DD790DE217533.js").default;

Page({
    $$direction: 1,
    data: {
        wordsList: a,
        selectedIdx: 0,
        gameTime: s[1],
        showGuide: !1,
        isIpx: n.globalData.isIpx
    },
    isLowVersion: function() {
        return !wx.startDeviceMotionListening && (n.versionLow(), !0);
    },
    onLoad: function() {
        var e = this;
        if (!this.isLowVersion()) {
            var t = (0, i.$isIOS)();
            wx.onDeviceMotionChange(function(i) {
                var s = i.gamma;
                e.$$direction = (t ? 1 : -1) * s > 0 ? 1 : -1, Math.abs(s) > 70 && Math.abs(s) < 90 && e.startGame();
            });
        }
    },
    onShow: function() {
        wx.startDeviceMotionListening({
            interval: "ui"
        });
    },
    onHide: function() {
        wx.stopDeviceMotionListening();
    },
    onSelectWords: function(e) {
        var t = e.currentTarget.dataset.idx;
        this.setData({
            selectedIdx: +t
        });
    },
    onChangeTime: function() {
        var e = this;
        this.isLowVersion() || (0, t.default)("showActionSheet", {
            itemList: s.map(function(e) {
                return "".concat(e, "秒");
            })
        }).then(function(t) {
            var i = t.tapIndex;
            e.setData({
                gameTime: s[i]
            });
        });
    },
    onCloseGuide: function() {
        this.startGame();
    },
    onReadyStartGame: function() {
        this.isLowVersion() || this.guessVideoAd && this.guessVideoAd.judgeVideoAd() || this.setData({
            showGuide: !0
        });
    },
    startGame: function() {
        var e = this, t = this.data, i = t.showGuide, s = t.gameTime, n = t.selectedIdx;
        i && (this.data.showGuide = !1, wx.navigateTo({
            url: "/guess/page/progress/progress?time=".concat(s, "&selected=").concat(n, "&direction=").concat(this.$$direction)
        }), setTimeout(function() {
            e.setData({
                showGuide: e.data.showGuide
            });
        }, 1e3));
    },
    onShareAppMessage: function() {
        return {
            title: "最in的聚会游戏，你能猜对几题？",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    onExit: function() {
        (0, i.$navigateBack)();
    },
    onShareTimeline: function() {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});