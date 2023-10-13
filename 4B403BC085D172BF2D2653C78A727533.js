var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    shake: function(t) {
        var e = 0, n = 0, r = 0;
        wx.onAccelerometerChange(function(a) {
            if (e) {
                var o = Math.abs(a.x - e), g = Math.abs(a.y - n), i = Math.abs(a.z - r);
                (o > .85 || g > .85 || i > .85) && t();
            }
            e = a.x, n = a.y, r = a.z;
        });
    },
    yesterday: function(t) {
        var e = new Date().getTime() - 864e5, n = new Date(e), r = n.getFullYear(), a = n.getMonth() + 1, o = n.getDate();
        n.getHours(), n.getMinutes(), n.getSeconds();
        return String(r) + String(a) + String(o);
    },
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, a = e.getDate(), o = e.getHours(), g = e.getMinutes(), i = e.getSeconds();
        return [ n, r, a ].map(t).join("/") + " " + [ o, g, i ].map(t).join(":");
    }
};