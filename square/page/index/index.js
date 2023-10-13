var e = require("../../../76C4400185D172BF10A22806F8607533.js")(require("../../../13239EC085D172BF7545F6C7DDC17533.js")), t = require("../../../CABAC79085D172BFACDCAF97CB717533.js"), a = require("../../../F0A6C17385D172BF96C0A9741E027533.js"), i = require("../../../ADEA465785D172BFCB8C2E5042327533.js");

Page({
    data: {
        statusBarHeight: 0,
        size: (0, i.$getStorageSync)("square_size", 5)
    },
    onLoad: function() {
        this.setData({
            statusBarHeight: getApp().globalData.statusBarHeight
        });
    },
    onChangeSize: function() {
        var a = this;
        (0, e.default)("showActionSheet", {
            itemList: t.SIZE_LIST.map(function(e) {
                return "".concat(String(e), "X").concat(String(e), "方格");
            })
        }).then(function(e) {
            var r = e.tapIndex;
            a.setData({
                size: t.SIZE_LIST[r]
            }), (0, i.$setStorageSync)("square_size", a.data.size);
        });
    },
    onShareAppMessage: function() {
        return {
            title: "好友喝酒聚会神器，线上最全玩法，一起来叭~",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    onExit: function() {
        (0, a.$navigateBack)();
    },
    onShareTimeline: function() {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});