function t(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), a.push.apply(a, n);
    }
    return a;
}

function e(e) {
    for (var a = 1; a < arguments.length; a++) {
        var i = null != arguments[a] ? arguments[a] : {};
        a % 2 ? t(i, !0).forEach(function(t) {
            (0, n.default)(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(i).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
    }
    return e;
}

var a = require("../../76C4400185D172BF10A22806F8607533.js"), n = a(require("../../7123DF7485D172BF1745B77331407533.js")), i = a(require("../../13239EC085D172BF7545F6C7DDC17533.js")), o = require("../../F0A6C17385D172BF96C0A9741E027533.js"), r = require("../../42764BD385D172BF241023D41C417533.js"), s = a(require("../../AF571E7385D172BFC9317674F2417533.js")), c = require("../../ADEA465785D172BFCB8C2E5042327533.js"), d = getApp(), u = {
    SpeedIdx: 0,
    StyleIdx: 0,
    MusicIdx: -1
};

Page({
    $$originalBrightness: 0,
    data: e({
        isIpx: d.globalData.isIpx,
        isIphone: d.globalData.isIphone,
        SpeedList: [ 1, .8, .6, .4, .2, .1 ],
        StyleList: [ "white", "colorful", "red", "yellow", "blue", "purple", "vip_1", "vip_2", "vip_3" ],
        ShowCamera: !1,
        CameraList: [ "", "front", "back" ],
        CameraIdx: 0,
        ShowMenu: !0
    }, u),
    onLoad: function() {
        this.setDefaultParameter();
    },
    onShow: function() {
        var t = this;
        wx.getScreenBrightness({
            success: function(e) {
                t.$$originalBrightness = e.value;
            }
        }), wx.setScreenBrightness({
            value: 1
        }), wx.setKeepScreenOn({
            keepScreenOn: !0
        }), this.playMusic();
    },
    setDefaultParameter: function() {
        var t = (0, c.$getStorageSync)("lightInfo", e({}, u)), a = t.StyleIdx, n = t.MusicIdx, i = t.SpeedIdx;
        this.setData({
            SpeedIdx: i,
            StyleIdx: a,
            MusicIdx: n
        });
    },
    playMusic: function() {
        this.data.MusicIdx >= 0 ? s.default.playLightMusic("light/".concat(this.data.MusicIdx + 1)) : s.default.stopMusic();
    },
    onHide: function() {
        this.clearContext();
    },
    onUnload: function() {
        var t = this.data, e = t.StyleIdx, a = t.MusicIdx, n = t.SpeedIdx;
        (0, i.default)("setStorage", {
            key: "lightInfo",
            data: {
                StyleIdx: e,
                MusicIdx: a,
                SpeedIdx: n
            }
        }), this.clearContext();
    },
    clearContext: function() {
        wx.setScreenBrightness({
            value: this.$$originalBrightness
        }), s.default.clearAudioContext();
    },
    onError: function(t) {
        d.onError(t);
    },
    judgeIsUnClock: function(t, e) {
        var a = (0, c.$getStorageSync)("light_unclock_record");
        return !(!a || !a[t]) && (0, o.$inArray)(a[t], e);
    },
    recordUnClock: function(t, e) {
        var a = (0, c.$getStorageSync)("light_unclock_record", {});
        a[t] ? a[t].push(e) : a[t] = [ e ], (0, c.$setStorageSync)("light_unclock_record", a);
    },
    onChangeStyle: function() {
        this.checkChangeStyle(this.data.StyleIdx);
    },
    checkChangeStyle: function(t) {
        var e = this, a = this.data.StyleList, n = t === a.length - 1 ? 0 : t + 1;
        (0, o.$inArray)(a[n], !d.globalData.noAd) && !this.judgeIsUnClock("style", a[n]) ? (0, 
        i.default)("showModal", {
            title: "提示",
            content: "观看视频解锁更炫酷的".concat(n + 1, "号样式"),
            cancelText: "暂不",
            confirmText: "立即解锁"
        }).then(function(t) {
            var i = t.confirm, o = t.cancel;
            i ? e.playVideoAd().then(function() {
                e.setData({
                    StyleIdx: n
                }), e.recordUnClock("style", a[n]);
            }).catch(function() {
                e.checkChangeStyle(n);
            }) : o && e.checkChangeStyle(n);
        }) : this.setData({
            StyleIdx: n
        });
    },
    onChangeSpeed: function() {
        this.data.SpeedIdx === this.data.SpeedList.length - 1 ? this.setData({
            SpeedIdx: 0
        }) : this.setData({
            SpeedIdx: this.data.SpeedIdx + 1
        });
    },
    onReadyCamera: function() {
        (0, r.$checkAuth)("camera").then(this.onChangeCamera.bind(this));
    },
    onChangeCamera: function() {
        var t = this.data.CameraList;
        this.data.CameraIdx += 1, this.data.CameraIdx > t.length - 1 && (this.data.CameraIdx = 0), 
        t[this.data.CameraIdx] ? wx.showToast({
            title: "".concat("front" === t[this.data.CameraIdx] ? "前置" : "后置", "摄像头已打开"),
            icon: "none"
        }) : wx.showToast({
            title: "摄像头已关闭",
            icon: "none"
        }), this.setData({
            CameraIdx: this.data.CameraIdx
        });
    },
    onChangeMusic: function() {
        12 === this.data.MusicIdx ? this.setData({
            MusicIdx: -1
        }) : this.setData({
            MusicIdx: this.data.MusicIdx + 1
        }), this.playMusic();
    },
    onShowMenu: function() {
        this.setData({
            ShowMenu: !this.data.ShowMenu
        });
    },
    onTakePhoto: function() {
        var t = this;
        wx.createCameraContext().takePhoto({
            quality: "high",
            success: function(e) {
                var a = e.tempImagePath;
                (0, i.default)("showModal", {
                    title: "拍照提示",
                    content: "是否保存到相册",
                    cancelText: "放弃",
                    confirmText: "保存"
                }).then(function(e) {
                    e.confirm && (0, r.$checkAuth)("writePhotosAlbum").then(t.saveAlbum.bind(t, a));
                });
            }
        });
    },
    saveAlbum: function(t) {
        wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function() {
                (0, o.$toast)("保存成功");
            },
            fail: function() {
                (0, o.$toast)("保存失败");
            }
        });
    },
    onBack: function() {
        (0, o.$navigateBack)();
    },
    playVideoAd: function() {
        return new Promise(function(t, e) {
            var a = null;
            wx.createRewardedVideoAd && (a = wx.createRewardedVideoAd({
                adUnitId: "adunit-d7f43f92d2f22733"
            })), a && ((0, o.$showLoading)({
                title: "视频加载中"
            }), a.show().catch(function() {
                a.load().then(function() {
                    a.show(), (0, o.$hideLoading)();
                }).catch(function() {
                    (0, o.$hideLoading)(), e();
                });
            }), a.onClose(function(a) {
                a.isEnded ? ((0, o.$toast)("解锁成功"), t()) : ((0, o.$toast)("观看完整视频才可解锁"), e());
            }), a.onError(function() {
                (0, o.$toast)("解锁失败，请稍候重试"), e();
            }));
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