Page({
    data: {
        url: ""
    },
    onLoad: function(a) {
        var t = a.url;
        this.setData({
            url: t
        });
    }
});