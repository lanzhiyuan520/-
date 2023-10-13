function e(e) {
    var n = e.getFullYear(), r = e.getMonth() + 1, i = e.getDate(), s = e.getHours(), u = e.getMinutes();
    e.getSeconds();
    return [ n, r, i, s, u ].map(t).join("");
}

function t(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

module.exports = {
    utc_beijing: function(t) {
        var n = t.indexOf("T"), r = t.indexOf("Z"), i = t.substr(0, n) + " " + t.substr(n + 1, r - n - 1);
        i = (i = i.replace(/-/g, "/")).substring(0, 19), console.log("new_datetime", i), 
        s = (s = new Date(Date.parse(i))).getTime();
        var s = 28800 + (s /= 1e3);
        return e(new Date(1e3 * parseInt(s)));
    },
    formatTime: e
};