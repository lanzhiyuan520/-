function e(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function r(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}

var t = require("76C4400185D172BF10A22806F8607533.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var n = t(require("7123DF7485D172BF1745B77331407533.js")), i = t(require("0AC5B2E085D172BF6CA3DAE736817533.js")), o = require("F0A6C17385D172BF96C0A9741E027533.js"), a = {}, u = {}, f = {}, s = function(t, o) {
    if (!Object.prototype.hasOwnProperty.call(f, t)) {
        var s = o;
        Object.defineProperties(f, e({}, t, {
            get: function() {
                return s;
            },
            set: function(o) {
                if (o !== s) {
                    var f = a[t];
                    f && f.length && f.forEach(function(a) {
                        var u = a.data;
                        a.setData((0, i.default)(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? r(i, !0).forEach(function(r) {
                                    (0, n.default)(e, r, i[r]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : r(i).forEach(function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(i, r));
                                });
                            }
                            return e;
                        }({}, u, e({}, t, o)), u));
                    });
                    var c = u[t];
                    c && c.length && c.forEach(function(e) {
                        e(o);
                    });
                }
                s = o;
            }
        }));
    }
}, c = {
    data: f,
    init: function() {
        s("room_info", {}), s("player_list", []), s("openid", ""), s("isKicked", !1), s("self", {}), 
        s("isOwner", !1), s("punish_info", {}), s("state", {});
    },
    registerPage: function(e, r) {
        a[e] = a[e] || [], (0, o.$inArray)(a[e], r) || a[e].push(r);
    },
    unRegisterPage: function(e) {
        e ? delete a[e] : Object.keys(a).forEach(function(e) {
            delete a[e];
        });
    },
    resetData: function() {
        f.room_info = {}, f.player_list = [], f.openid = "", f.isKicked = !1, f.isOwner = !1, 
        f.punish_info = {}, f.state = "";
    },
    registerHandlers: function(e, r) {
        return u[e] = u[e] || [], (0, o.$inArray)(u[e], r) || u[e].push(r), r;
    },
    unRegisterHandlers: function(e, r) {
        if (r) {
            var t = u[e], n = t.indexOf(r);
            -1 !== n && t.splice(n, 1);
        } else delete u[e];
    },
    updateRoomInfo: function(e) {
        var r = e.room_info, t = e.player_list;
        f.room_info = r, f.isOwner = f.self.openid === r.owner, f.player_list = t;
    },
    checkIsKicked: function(e) {
        var r = e.rid;
        f.isKicked = +f.room_info.rid == +r;
    },
    updateGameResult: function(e) {
        var r = e.openid, t = void 0 === r ? "" : r;
        f.openid = t;
    },
    updatePunishInfo: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = null;
        switch (e.type) {
          case "drink":
            r = "喝酒";
            break;

          case "truth":
            r = "真心话";
            break;

          case "risk":
            r = "大冒险";
            break;

          case "envelope":
            r = "发红包";
        }
        r && (e.type = r), f.punish_info = e;
    },
    updateStateInfo: function(e) {
        var r = e.state;
        f.state = r;
    },
    updateSelf: function(e) {
        var r = e.user_info;
        f.self = r, f.isOwner = r.openid === f.room_info.owner;
    }
};

exports.default = c;