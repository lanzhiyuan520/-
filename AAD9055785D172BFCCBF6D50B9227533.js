var e = require("76C4400185D172BF10A22806F8607533.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("8C8B620485D172BFEAED0A0348107533.js")), a = e(require("B75F586485D172BFD1393063B2307533.js")), i = require("F0A6C17385D172BF96C0A9741E027533.js"), o = e(require("022E782785D172BF644810208F127533.js")), d = require("ADEA465785D172BFCB8C2E5042327533.js"), r = function() {
    function e(a, o) {
        var d = a.freePlayTimes, r = a.storageName, s = a.adUnitId;
        if ((0, t.default)(this, e), this.gameTimes = 0, this.freePlayTimes = d, this.storageName = r, 
        this.adUnitId = s, !o) throw (0, i.$toast)("pageCtx不能为空, 请检查！"), new Error("pageCtx不能为空");
        this.adModal = o.selectComponent("#adModal");
    }
    return (0, a.default)(e, [ {
        key: "judgeVideoAd",
        value: function() {
            return !(this.freePlayTimes >= 99 || getApp().globalData.noAd || (this.gameTimes = Number((0, 
            d.$getStorageSync)(this.storageName)) || 0, this.gameTimes !== this.freePlayTimes || (this.reportEvent("video_ad_show"), 
            this.showVideoAdModal(), 0)));
        }
    }, {
        key: "showVideoAdModal",
        value: function() {
            var e = this;
            this.adModal && this.adModal.showModal().then(function(t) {
                "video" === t ? (e.reportEvent("video_ad_play"), e.playVideoAd()) : "paySuccess" === t ? e.judgeVideoAd() || e.hideModal() : "think" === t ? (e.reportEvent("video_ad_reject"), 
                (0, i.$navigateBack)()) : (0, i.$navigateBack)();
            });
        }
    }, {
        key: "recordPlayTimes",
        value: function() {
            this.gameTimes > this.freePlayTimes || getApp().globalData.noAd || (0, d.$setStorageSync)(this.storageName, ++this.gameTimes, (0, 
            i.$todayRemainingMS)());
        }
    }, {
        key: "playVideoAd",
        value: function() {
            var e = this, t = new o.default({
                adUnitId: this.adUnitId
            });
            t.showVideoAd(), t.onCloseVideo().then(function() {
                e.reportEvent("video_ad_success"), (0, i.$toast)("解锁成功"), e.recordPlayTimes(), e.hideModal();
            }).catch(function() {
                e.reportEvent("video_ad_suspend"), (0, i.$toast)("观看完整视频才可解锁哦！"), e.hideModal(), 
                e.judgeVideoAd();
            }), t.onErrorVideo(this.recordPlayTimes.bind(this));
        }
    }, {
        key: "hideModal",
        value: function() {
            this.adModal && this.adModal.hideModal();
        }
    }, {
        key: "reportEvent",
        value: function(e) {
            wx.reportAnalytics(e, {
                page_name: this.storageName
            });
        }
    } ]), e;
}();

exports.default = r;