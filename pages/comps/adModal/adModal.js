var t = require("../../../76C4400185D172BF10A22806F8607533.js"), e = require("../../../F0A6C17385D172BF96C0A9741E027533.js"), i = require("../../../0C23BFD085D172BF6A45D7D74FD17533.js"), o = require("../../../CABAC79085D172BFACDCAF97CB717533.js"), a = t(require("../../../13239EC085D172BF7545F6C7DDC17533.js")), s = require("../../../ADEA465785D172BFCB8C2E5042327533.js"), n = getApp();

Component({
    data: {
        show: !1,
        showAdPay: !1
    },
    attached: function() {
        var t = (0, s.$getStorageSync)("login_info", {}).uid, e = void 0 === t ? "" : t;
        this.$$uid = e, this.$$modalPromise = null;
    },
    methods: {
        showModal: function() {
            var t = this;
            return this.setData({
                show: !0,
                showAdPay: n.globalData.showAdPay
            }), new Promise(function(e) {
                t.$$modalPromise = e;
            });
        },
        onCloseModal: function() {
            this.hideModal(), this.onCallback("think");
        },
        onLookVideo: function() {
            this.onCallback("video");
        },
        onRemoveAd: function() {
            var t = this;
            n.globalData.noAd ? (0, e.$toast)("您已经是免广告用户") : this.$$uid ? this.$$clicked || (this.$$clicked = !0, 
            setTimeout(function() {
                t.$$clicked = !1;
            }, 1e3), wx.reportAnalytics("click_free_ad", {}), (0, i.$post)("order/create_order", {
                uid: this.$$uid,
                goods_id: o.PAY_GOODS_ID.REMOVE_AD,
                client_platform: o.MINI_PROGRAM
            }).then(function(t) {
                return (0, a.default)("requestPayment", {
                    nonceStr: t.nonceStr,
                    timeStamp: t.timeStamp,
                    package: t.package,
                    signType: t.signType,
                    paySign: t.paySign
                });
            }).then(function() {
                (0, e.$showLoading)({
                    title: "请稍等"
                }), (0, e.$toast)("支付成功"), wx.reportAnalytics("click_free_pay_success", {}), n.globalData.noAd = !0, 
                t.onCallback("paySuccess");
            }).catch(function(t) {
                var i = t.errMsg;
                (void 0 === i ? "" : i).match(/fail cancel/) ? (0, e.$toast)("取消支付") : (0, e.$toast)("支付失败，请联系客服~");
            })) : this.onCallback("back");
        },
        onCallback: function(t) {
            this.$$modalPromise && this.$$modalPromise(t);
        },
        hideModal: function() {
            this.setData({
                show: !1
            });
        }
    }
});