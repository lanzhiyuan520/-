var o = {
    getColor: function(o) {
        var r = [ Math.floor(Math.random() * o), Math.floor(Math.random() * o), Math.floor(Math.random() * o) ];
        return [ r, "rgb(" + r.join(",") + ")" ];
    },
    getLvColor: function(o, r) {
        var t = [];
        return t[0] = o[0] + r, t[1] = o[1] + r, t[2] = o[2] + r, [ t, "rgb(" + t.join(",") + ")" ];
    }
};

module.exports = o;