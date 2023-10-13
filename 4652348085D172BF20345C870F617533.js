var e = require("76C4400185D172BF10A22806F8607533.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("EBD40D6185D172BF8DB26566A4E07533.js")), n = e(require("8C8B620485D172BFEAED0A0348107533.js")), s = e(require("B75F586485D172BFD1393063B2307533.js")), i = e(require("13239EC085D172BF7545F6C7DDC17533.js")), o = e(require("B5D182F185D172BFD3B7EAF6D8317533.js")), r = e(require("734C5AC385D172BF152A32C4B0027533.js")), a = require("DC51161785D172BFBA377E102D517533.js"), c = require("CABAC79085D172BFACDCAF97CB717533.js"), u = require("D860D58585D172BFBE06BD82F7B17533.js"), h = require("F0A6C17385D172BF96C0A9741E027533.js"), l = "bind", d = "heartbeat", k = "upload_form_id", f = new (function() {
    function e() {
        var t = this;
        (0, n.default)(this, e), this.binded = !1, this.socket = null, this.packerId = 0, 
        this.responseHandlers = {}, this.hasNetwork = !1, this.connectionOpenCallback = null, 
        this.userInfo = null, this.isAppShow = !1, this.socketRetryTimer = null, this.socketRetryCount = 0, 
        (0, i.default)("getNetworkType").then(function(e) {
            var n = e.networkType;
            t.hasNetwork = "none" !== n, t.isAppShow && t.establish();
        }), wx.onNetworkStatusChange(function(e) {
            var n = e.isConnected;
            t.hasNetwork = n, t.isAppShow && t.establish();
        });
    }
    return (0, s.default)(e, [ {
        key: "isOpen",
        value: function() {
            return !!this.socket && 1 === this.socket.readyState;
        }
    }, {
        key: "toggleAppShow",
        value: function(e) {
            this.isAppShow = e;
        }
    }, {
        key: "setConnectionOpenCallback",
        value: function(e) {
            this.connectionOpenCallback = e;
        }
    }, {
        key: "setUserInfo",
        value: function(e) {
            this.userInfo = e;
        }
    }, {
        key: "setGuestUserInfo",
        value: function(e) {
            var t = this, n = e.encryptedData, s = e.iv, i = e.userInfo;
            return new Promise(function(e) {
                n && s ? t.binded ? e() : (t.setUserInfo(i), e()) : wx.showModal({
                    title: "提示",
                    content: "拒绝授权将不能创建或者加入房间",
                    showCancel: !1,
                    confirmText: "知道了"
                });
            });
        }
    }, {
        key: "$$bind",
        value: function() {
            var e = this;
            return new Promise(function(t, n) {
                e.binded ? t() : e.isOpen() ? (0, i.default)("login").then(function(s) {
                    var i = s.code;
                    e.$$send(l, {
                        code: i,
                        userInfo: e.userInfo
                    }).then(function(n) {
                        (0, u.$log)("Bind success", n), r.default.updateSelf(n), e.binded = !0, e.$$checkHeartbeat(0), 
                        t();
                    }).catch(function(e) {
                        (0, u.$error)("Bind ws connection error: ", JSON.stringify(e)), n(e);
                    });
                }).catch(n) : n();
            });
        }
    }, {
        key: "$$checkHeartbeat",
        value: function(e) {
            var t = this;
            setTimeout(function() {
                t.$$send(d).then(t.$$checkHeartbeat.bind(t, 3e3)).catch(function() {
                    return (0, u.$error)("心跳异常");
                });
            }, e);
        }
    }, {
        key: "$$checkBind",
        value: function() {
            var e = this;
            return new Promise(function(t, n) {
                e.binded ? t() : e.userInfo ? e.$$bind().then(t).catch(n) : n();
            });
        }
    }, {
        key: "createRoom",
        value: function() {
            return this.$$send("create_room");
        }
    }, {
        key: "joinRoom",
        value: function(e) {
            return this.$$send("join_room", {
                rid: e
            });
        }
    }, {
        key: "kickUser",
        value: function(e, t) {
            return this.$$send("kick_user", {
                rid: e,
                kick_openid: t
            });
        }
    }, {
        key: "exitRoom",
        value: function(e) {
            return this.$$send("exit_room", {
                rid: e
            });
        }
    }, {
        key: "startGame",
        value: function(e) {
            return this.$$send("start_game", {
                rid: e
            });
        }
    }, {
        key: "collectFormId",
        value: function(e) {
            return this.$$send(k, {
                form_id: e
            });
        }
    }, {
        key: "chosePunish",
        value: function(e, t) {
            return this.$$send("chose_punish", {
                type: e,
                text: t
            });
        }
    }, {
        key: "syncState",
        value: function(e) {
            return this.$$send("sync_state", {
                state: e
            });
        }
    }, {
        key: "$$send",
        value: function(e) {
            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(function(s, i) {
                var o = function(t) {
                    t && t.code >= c.ERROR_CODE.COMMON_EXCEPTION && e !== k && e !== l && e !== d && (0, 
                    h.$toast)(t.message || t.msg), i(t);
                };
                (e === l ? Promise.resolve() : t.$$checkBind()).then(function() {
                    if (t.isOpen()) {
                        var i = JSON.stringify({
                            param: n,
                            packet_id: ++t.packerId,
                            cmd: e
                        });
                        t.responseHandlers[t.packerId] = [ s, o ], t.socket.send({
                            data: i,
                            fail: o
                        });
                    } else t.establish(), (0, u.$error)("ws send 连接已断开"), o(new Error("ws send 连接已断开"));
                }).catch(o);
            });
        }
    }, {
        key: "establish",
        value: function() {
            this.hasNetwork ? this.isOpen() || (this.socketRetryCount = 0, this.binded = !1, 
            this.$$tryConnect()) : this.showNoNetworkHint();
        }
    }, {
        key: "showNoNetworkHint",
        value: function() {
            this.isAppShow && this.userInfo && this.isFlashMode() && (0, h.$toast)("网络已断开，请检查您的网络");
        }
    }, {
        key: "isFlashMode",
        value: function() {
            return (0, h.$inArray)((0, h.$curRoute)(), "flash");
        }
    }, {
        key: "$$tryConnect",
        value: function() {
            var e = this;
            this.socketRetryTimer || (this.hasNetwork ? ++this.socketRetryCount > 6 ? this.isAppShow && this.isFlashMode() && ((0, 
            h.$toast)("网络连接失败，请关闭微信重试"), getApp().onError("重连超时，\n          readyState = ".concat(this.socket ? this.socket.readyState : -1, "，\n          hasNetwork = ").concat(this.hasNetwork, ",\n          isAppShow = ").concat(this.isAppShow))) : !this.isOpen() && this.isAppShow && (this.$$resetSocket().then(function() {
                e.socket = wx.connectSocket({
                    url: a.WS_HOST
                }), e.socket && e.socket.onOpen(e.$$onOpen.bind(e));
            }), this.socketRetryTimer = setTimeout(function() {
                e.$$clearSocketRetry(), e.$$tryConnect();
            }, 2e4)) : this.showNoNetworkHint());
        }
    }, {
        key: "$$resetSocket",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                e.socket ? e.socket.close({
                    complete: function() {
                        e.socket = null, t();
                    }
                }) : t();
            });
        }
    }, {
        key: "$$clearSocketRetry",
        value: function() {
            this.socketRetryTimer && (clearTimeout(this.socketRetryTimer), this.socketRetryTimer = null);
        }
    }, {
        key: "$$onOpen",
        value: function(e) {
            this.socket && ((0, u.$log)("WebSocket连接已打开！", e), this.socketRetryCount = 0, this.$$clearSocketRetry(), 
            this.socket.onMessage(this.$$handleMessage.bind(this)), this.socket.onClose(this.$$handleClose.bind(this)), 
            "function" == typeof this.connectionOpenCallback && this.connectionOpenCallback());
        }
    }, {
        key: "$$handleClose",
        value: function(e) {
            (0, u.$log)("WebSocket 已关闭！", JSON.stringify(e));
        }
    }, {
        key: "$$handleMessage",
        value: function(e) {
            var n = JSON.parse(e.data), s = n.code, i = n.packet_id, a = n.msg, h = n.push;
            if ((0, u.$log)("收到来自于服务器的消息", JSON.stringify(e)), "room_info" === h) r.default.updateRoomInfo(a); else if ("be_kick" === h) r.default.checkIsKicked(a); else if ("game_result" === h) r.default.updateGameResult(a); else if ("punish_result" === h) r.default.updatePunishInfo(a); else if ("sync_state" === h) r.default.updateStateInfo(a); else if (this.responseHandlers[i]) {
                var l = (0, t.default)(this.responseHandlers[i], 2), d = l[0], k = l[1];
                s === c.ERROR_CODE.SUCCESS ? d(a) : k(new o.default(s, a)), delete this.responseHandlers[i];
            }
        }
    } ]), e;
}())();

exports.default = f;