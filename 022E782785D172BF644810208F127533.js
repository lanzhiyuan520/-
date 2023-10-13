var e = require("76C4400185D172BF10A22806F8607533.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = e(require("8C8B620485D172BFEAED0A0348107533.js")), r = e(require("B75F586485D172BFD1393063B2307533.js")), o = require("D860D58585D172BFBE06BD82F7B17533.js"), t = require("F0A6C17385D172BF96C0A9741E027533.js"), d = function() {
    function e(r) {
        (0, i.default)(this, e), wx.createRewardedVideoAd && (this.videoAd = wx.createRewardedVideoAd({
            adUnitId: r.adUnitId
        }));
    }
    return (0, r.default)(e, [ {
        key: "showVideoAd",
        value: function() {
            var e = this;
            this.videoAd && ((0, t.$showLoading)({
                title: "视频加载中"
            }), this.videoAd.load().then(function() {
                (0, t.$hideLoading)(), e.videoAd.show();
            }).catch(function(e) {
                return (0, o.$error)(e.errMsg);
            }));
        }
    }, {
        key: "onCloseVideo",
        value: function() {
            var e = this;
            return new Promise(function(i, r) {
                e.videoAd ? e.videoAd.onClose(function(e) {
                    e.isEnded ? i() : r();
                }) : r();
            });
        }
    }, {
        key: "onErrorVideo",
        value: function(e) {
            this.videoAd && this.videoAd.onError(function() {
                "function" == typeof e && e();
            });
        }
    } ]), e;
}();

exports.default = d;