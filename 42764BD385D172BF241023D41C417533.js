Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.$checkAuth = void 0;

var t = require("F0A6C17385D172BF96C0A9741E027533.js"), e = {
    writePhotosAlbum: "保存到相册",
    camera: "摄像头"
};

exports.$checkAuth = function(c) {
    return new Promise(function(o) {
        wx.getSetting({
            success: function(n) {
                n.authSetting["scope.".concat(c)] ? o() : wx.authorize({
                    scope: "scope.".concat(c),
                    success: function() {
                        o();
                    },
                    fail: function() {
                        e[c] && (0, t.$toast)("请前往小程序设置打开「".concat(e[c], "」权限"));
                    }
                });
            }
        });
    });
};