var t = getApp();

Page({
    data: {
        nvabarData: {
            showCapsule: 1,
            title: "指尖光圈"
        },
        height: 2 * t.globalData.height + 20,
        windowWidth: 300,
        windowHeight: 500,
        xy: [],
        clearTime: [],
        clearCountDownTime: [],
        clearStart_time: [],
        CountDownNum: "",
        start_time: 1e3,
        start_but: {
            status: 1,
            title: "点击开始",
            type: 1
        },
        is_open: 0,
        getSystemInfo: [],
        color: [ "#1ff37f", "#ef9639", "#f563b9", "#772ee8", "#2ee8e1", "#afb1c3", "Pink", "#52f31f" ]
    },
    touchend: function(t) {
        if (this.data.is_open) return !1;
        var a = t.changedTouches[0], e = a.clientX - 99, i = a.clientY - 99, n = this.data.xy;
        for (var r in n) this.cancelClick(e, n[r].x) && this.cancelClick(i, n[r].y) && n.splice(r, 1);
        this.setData({
            xy: n
        });
    },
    bindViewTap: function(t) {
        if (console.log(1), this.data.is_open) return !1;
        var a = t.changedTouches[0];
        if (!this.checkClick(a.clientX - 99, a.clientY - 99) && this.data.xy.length >= 1) return !1;
        var e = this.data.xy;
        if (e.length >= 4) return wx.showToast({
            title: "不允许第五只手进来",
            icon: "none",
            duration: 2e3
        }), !1;
        var i = {
            x: a.clientX - 99,
            y: a.clientY - 99,
            color: this.data.color[e.length],
            shadow: 60,
            animation_name: "spin"
        };
        if (e.push(i), this.setData({
            xy: e
        }), this.click_music(), this.data.xy.length > 1) {
            var n = !0, r = !1, o = void 0;
            try {
                for (var s, c = this.data.clearTime[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
                    var l = s.value;
                    clearTimeout(l);
                }
            } catch (t) {
                r = !0, o = t;
            } finally {
                try {
                    !n && c.return && c.return();
                } finally {
                    if (r) throw o;
                }
            }
        }
        this.data.xy.length, this.countdown(), this.setData({
            clearTime: this.data.clearTime
        });
    },
    click_music: function() {
        var t = wx.createInnerAudioContext();
        t.src = "/finger/assets/click.mp3", t.autoplay = !0, t.play();
    },
    start_music: function() {
        var t = wx.createInnerAudioContext();
        t.src = "/finger/assets/start.mp3", t.autoplay = !0, t.play();
    },
    set_color: function() {
        if (console.log("开始改变颜色"), this.data.is_open) return !1;
        if (this.data.xy.length <= 1) return !1;
        var t = this, a = this.data.xy.length, e = Math.ceil(Math.random() * a) - 1;
        setTimeout(function() {
            t.speed(0, a, 100, e);
        }, 100);
    },
    speed: function(t, a, e, i) {
        var n = this;
        if (n.setData({
            is_open: 1
        }), n.start_music(), n.data.xy[t].color = "yellow", 0 == t && (n.data.xy[a - 1].color = this.data.color[a - 1]), 
        t >= 1 && (n.data.xy[t - 1].color = this.data.color[t - 1]), e > 200 && (e += 40), 
        e > 500 && (e += 60), e >= 1e3 && t == i && (n.data.xy[t].color = "red", n.data.xy[t].shadow = 150, 
        n.data.xy[t].animation_name = "spin1", wx.vibrateLong()), n.setData({
            xy: n.data.xy,
            is_open: 1
        }), e >= 1e3) {
            if (t == i) return n.setData({
                xy: [ n.data.xy[t] ],
                start_but: {
                    status: 1,
                    title: "重新开始",
                    type: 2
                }
            });
            e -= 100;
        }
        ++t > a - 1 && (t = 0), n.data.clearStart_time[n.data.clearStart_time.length] = setTimeout(function() {
            n.speed(t, a, e, i);
        }, e += 10), n.setData({
            clearStart_time: n.data.clearStart_time
        });
    },
    checkClick: function(t, a) {
        var e = this.data.xy;
        for (var i in e) if (t + 100 > e[i].x && t - e[i].x < 100) if (e[i].y > a) {
            if (a + 100 > e[i].y) return 0;
        } else if (a - 100 < e[i].y) return 0;
        return 1;
    },
    cancelClick: function(t, a) {
        return 0 <= Math.abs(a - t) && Math.abs(a - t) < 20 ? 1 : 0;
    },
    start_btu: function(t) {
        console.log("点击开始");
        var a = this;
        switch (Number(t.currentTarget.dataset.type)) {
          case 1:
            if (!(this.data.xy.length >= 2)) return wx.showToast({
                title: "最少2只手指才能开始",
                icon: "none",
                duration: 2e3
            }), !1;
            this.setData({
                start_but: {
                    status: 0,
                    title: "重新开始",
                    type: 1
                }
            }), this.set_color();
            break;

          case 2:
            a.setData({
                xy: [],
                clearTime: [],
                clearCountDownTime: [],
                CountDownNum: "",
                clearStart_time: [],
                start_but: {
                    status: 1,
                    title: "点击开始",
                    type: 1
                },
                is_open: 0
            });
        }
    },
    countdown: function() {
        var t = this, a = !0, e = !1, i = void 0;
        try {
            for (var n, r = this.data.clearCountDownTime[Symbol.iterator](); !(a = (n = r.next()).done); a = !0) o = n.value, 
            clearTimeout(o);
        } catch (t) {
            e = !0, i = t;
        } finally {
            try {
                !a && r.return && r.return();
            } finally {
                if (e) throw i;
            }
        }
        for (var o = 0; o <= 3; o++) !function(a) {
            t.data.clearCountDownTime[a] = setTimeout(function() {}, 1e3 * a);
        }(o);
    },
    onUnload: function() {
        console.log("隐藏"), console.log(this.data.clearStart_time);
        var t = !0, a = !1, e = void 0;
        try {
            for (var i, n = this.data.clearStart_time[Symbol.iterator](); !(t = (i = n.next()).done); t = !0) {
                var r = i.value;
                clearTimeout(r);
            }
        } catch (t) {
            a = !0, e = t;
        } finally {
            try {
                !t && n.return && n.return();
            } finally {
                if (a) throw e;
            }
        }
    },
    onLoad: function() {
        var t = this;
        wx.setKeepScreenOn({
            keepScreenOn: !0
        }), wx.getSystemInfo({
            complete: function(a) {
                t.setData({
                    getSystemInfo: a,
                    windowWidth: a.windowWidth,
                    windowHeight: a.windowHeight
                });
            }
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#000000",
            animation: {
                duration: 1e3,
                timingFunc: "easeOut"
            }
        }), wx.setNavigationBarTitle({
            title: "触摸开始"
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "好友喝酒聚会神器，线上最全玩法，一起来叭~",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    onExit: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onShareTimeline: function() {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});