Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    button: function() {
        var o = wx.createInnerAudioContext();
        o.autoplay = !0, o.src = "/assets/audio/button.mp3", o.onPlay(function() {}), o.onError(function(o) {
            console.log(o.errMsg), console.log(o.errCode);
        }), o.onEnded(function(n) {
            o.destroy();
        });
    },
    playAudio: function(o) {
        var n = wx.createInnerAudioContext();
        n.autoplay = !0, n.src = o, n.onPlay(function() {
            console.log("开始播放");
        }), n.onError(function(o) {
            console.log(o.errMsg), console.log(o.errCode);
        }), n.onEnded(function(o) {
            n.destroy();
        });
    }
};