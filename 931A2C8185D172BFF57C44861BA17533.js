var e = require("76C4400185D172BF10A22806F8607533.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("8C8B620485D172BFEAED0A0348107533.js")), i = e(require("B75F586485D172BFD1393063B2307533.js")), s = require("D860D58585D172BFBE06BD82F7B17533.js"), r = Symbol("default_show_fn"), n = function() {
    function e(i) {
        var n = this, a = i.adUnitId, o = i.showConditionFn;
        if ((0, t.default)(this, e), this.successLoaded = !1, this.showConditionFn = o || this[r](), 
        wx.createInterstitialAd) try {
            this.interstitialAd = wx.createInterstitialAd({
                adUnitId: a
            }), this.interstitialAd.onError(function() {
                n.successLoaded = !1;
            }), this.interstitialAd.onLoad(function() {
                n.successLoaded = !0;
            });
        } catch (e) {
            (0, s.$error)(e);
        }
    }
    return (0, i.default)(e, [ {
        key: r,
        value: function() {
            return !0;
        }
    }, {
        key: "show",
        value: function() {
            this.interstitialAd && this.successLoaded && this.showConditionFn() && this.interstitialAd.show();
        }
    } ]), e;
}();

exports.default = n;