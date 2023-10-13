Component({
    properties: {},
    data: {},
    attached: function() {
        var t = null, n = [ "adunit-f9e986d17dcc50ae" ];
        wx.createInterstitialAd && ((t = wx.createInterstitialAd({
            adUnitId: n[Math.floor(9 * Math.random())]
        })).onLoad(function() {
            console.log("执行广告");
        }), t.onError(function(t) {
            console.log("广告报错", t);
        }), t.onClose(function() {
            console.log("广告关闭");
        }), setTimeout(function() {
            t.show().catch(function(t) {
                console.error(t);
            });
        }, 2500));
    },
    methods: {}
});