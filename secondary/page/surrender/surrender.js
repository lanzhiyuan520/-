require("../../../76C4400185D172BF10A22806F8607533.js")(require("../../../EBD40D6185D172BF8DB26566A4E07533.js"));

var t = require("../../../F0A6C17385D172BF96C0A9741E027533.js"), e = require("../../../0C23BFD085D172BF6A45D7D74FD17533.js"), i = require("../../../42764BD385D172BF241023D41C417533.js");

Page({
    $$targetName: "",
    $$name: "",
    $$count: "",
    $$bgWidth: 0,
    $$bgHeight: 0,
    $$tempPath: "",
    data: {
        targetName: "",
        name: "",
        isIpx: getApp().globalData.isIpx,
        bgWidth: 0,
        bgHeight: 0,
        clickGenerate: !1,
        showSave: !1
    },
    onLoad: function() {
        var e = (0, t.$getSysInfo)(), i = e.windowWidth, a = e.windowHeight, n = i - 14;
        this.$$bgWidth = n, this.$$bgHeight = 570 * n / 375, this.setData({
            windowWidth: i,
            windowHeight: a,
            bgWidth: this.$$bgWidth,
            bgHeight: this.$$bgHeight
        });
    },
    onTargetNameInput: function(t) {
        var e = this, i = t.detail.value;
        "" != i && (wx.showLoading({
            title: "文字检测中请稍等..."
        }), wx.cloud.callFunction({
            name: "msgcheck",
            data: {
                content: i
            }
        }).then(function(t) {
            wx.hideLoading(), 0 == t.result.errCode ? e.$$targetName = i : (e.$$targetName = "", 
            e.setData({
                targetName: ""
            }), wx.showToast({
                title: "请注意言论",
                icon: "none"
            }));
        }));
    },
    onNameInput: function(t) {
        var e = this, i = t.detail.value;
        "" != i && (wx.showLoading({
            title: "文字检测中请稍等..."
        }), wx.cloud.callFunction({
            name: "msgcheck",
            data: {
                content: i
            }
        }).then(function(t) {
            wx.hideLoading(), 0 == t.result.errCode ? e.$$name = i : (e.$$name = "", e.setData({
                name: ""
            }), wx.showToast({
                title: "请注意言论",
                icon: "none"
            }));
        }));
    },
    onCountInput: function(t) {
        var e = this, i = t.detail.value;
        "" != i && (wx.showLoading({
            title: "文字检测中请稍等..."
        }), wx.cloud.callFunction({
            name: "msgcheck",
            data: {
                content: i
            }
        }).then(function(t) {
            wx.hideLoading(), 0 == t.result.errCode ? e.$$count = +i : (e.$$count = "", e.setData({
                count: ""
            }), wx.showToast({
                title: "请注意言论",
                icon: "none"
            }));
        }));
    },
    checkMsg: function(t) {
        return (0, e.$post)("msg_check", {
            content: t
        }).then(function(t) {
            return !t.result;
        });
    },
    onGenerate: function() {
        var t = this;
        t.setData({
            clickGenerate: !0
        }), t.drawPaper();
    },
    drawPaper: function() {
        var e = wx.createCanvasContext("canvas"), i = (0, t.$getSysInfo)().windowWidth, a = new Date();
        this.drawBackground(e, i), this.drawText(e, a.getFullYear(), 42.5 * this.$$bgWidth / 100, 22.5 * this.$$bgHeight / 100), 
        this.drawText(e, (0, t.$paddingTime)(a.getMonth() + 1), 60.5 * this.$$bgWidth / 100, 22.5 * this.$$bgHeight / 100), 
        this.drawText(e, (0, t.$paddingTime)(a.getDate()), 76 * this.$$bgWidth / 100, 22.5 * this.$$bgHeight / 100);
        var n = this.$$targetName.length > 5 ? "".concat(this.$$targetName.substring(0, 5), "...") : this.$$targetName;
        this.drawText(e, n, 26 * this.$$bgWidth / 100, 27.5 * this.$$bgHeight / 100), this.drawText(e, this.$$count, 44 * this.$$bgWidth / 100, 64.5 * this.$$bgHeight / 100);
        var s = this.$$name.length > 5 ? "".concat(this.$$name.substring(0, 5), "...") : this.$$name;
        this.drawText(e, s, 78.5 * this.$$bgWidth / 100, 79.5 * this.$$bgHeight / 100);
        var h = this;
        e.draw(!1, function() {
            wx.canvasToTempFilePath({
                canvasId: "canvas",
                success: function(t) {
                    h.$$tempPath = t.tempFilePath, h.setData({
                        showSave: !0
                    });
                }
            });
        });
    },
    drawBackground: function(t) {
        t.beginPath(), t.drawImage("/secondary/assets/surrender.png", 0, 0, this.$$bgWidth, this.$$bgHeight), 
        t.closePath();
    },
    drawText: function(t, e, i, a) {
        t.beginPath(), t.setTextAlign("center"), t.setTextBaseline("middle"), t.fillStyle = "#F5A623", 
        t.font = "bold ".concat(Math.floor(4.5 * this.$$bgWidth / 100), "px Arial"), t.fillText(e, i, a), 
        t.closePath();
    },
    onSaveAlbum: function() {
        (0, i.$checkAuth)("writePhotosAlbum").then(this.saveAlbum.bind(this));
    },
    saveAlbum: function() {
        wx.saveImageToPhotosAlbum({
            filePath: this.$$tempPath,
            success: function() {
                (0, t.$toast)("保存成功");
            },
            fail: function() {
                (0, t.$toast)("保存失败");
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
    }
});