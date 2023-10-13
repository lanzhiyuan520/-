var t = require("../../../46559A3485D172BF2033F2337D527533.js").default;

Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        selfBack: {
            type: Boolean,
            value: !1
        },
        bgColor: {
            type: String,
            value: "#000"
        }
    },
    data: {
        isIpx: !1
    },
    attached: function() {
        this.setData({
            isIpx: getApp().globalData.isIpx
        });
    },
    methods: {
        back: function() {
            console.log("12213321123"), t.button(), 1 === getCurrentPages().length ? wx.switchTab({
                url: "/pages/index/index"
            }) : this.data.selfBack ? this.triggerEvent("OnBack") : wx.navigateBack();
        }
    }
});