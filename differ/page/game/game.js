getApp();

var t = require("../../4757E8C485D172BF213180C3CF117533.js"), e = wx.createInnerAudioContext();

e.autoplay = !0, Page({
    data: {
        lv: 0,
        list: [],
        gateNum: 0,
        countDown: 10,
        gameOver: 0,
        gameStop: 0,
        showBest: 0,
        showResult: 0,
        bestShow: 0,
        resultShow: 0,
        revive: 0,
        reviveNum: 1,
        showRevive: 0,
        reviveShow: 1,
        maxGate: 100
    },
    shareUid: 0,
    name: "gatePage",
    onStartCli: 0,
    level: 0,
    levelMap: [ 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8 ],
    colorDiff: [ 115, 100, 100, 85, 85, 85, 70, 70, 70, 70, 55, 55, 55, 55, 55, 40, 40, 40, 40, 40, 40, 25, 25, 25, 25, 25, 25, 25, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 7 ],
    totalTime: 0,
    diffIndex: 0,
    startDate: null,
    clear: 0,
    goBest: 1,
    onLoad: function(t) {
        this.setData({
            musicurl: "/differ/images/"
        }), wx.showShareMenu({
            withShareTicket: !0
        }), this.initColor();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        clearTimeout(this.countDownTimer);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    initColor: function() {
        e.stop(), console.info(this.level), 0 == this.level ? e.src = this.data.musicurl + "ready_go.mp3" : e.src = this.data.musicurl + "right.mp3", 
        e.play(), this.setData({
            list: null,
            gateNum: this.level + 1
        });
        var i, a, o = this.levelMap[this.level] ? this.levelMap[this.level] : this.levelMap[this.levelMap.length - 1], s = this.colorDiff[this.level] ? this.colorDiff[this.level] : this.colorDiff[this.colorDiff.length - 1];
        this.diffIndex = Math.floor(Math.random() * o * o), i = t.getColor(257 - s), a = t.getLvColor(i[0], s), 
        this.reColor = i, this.reLvColor = a;
        for (var n = [], l = 0; l < o * o; l++) l === this.diffIndex ? n[l] = a[1] : n[l] = i[1];
        if (this.setData({
            lv: "lv" + o,
            list: n
        }), 0 === this.level) {
            var r = new Date();
            this.startDate = r, this.goCountDown();
        }
    },
    goCountDown: function() {
        var t = this;
        if (0 < this.data.countDown && this.data.gateNum <= this.data.maxGate) this.countDownTimer = setTimeout(function() {
            t.setData({
                countDown: t.data.countDown - 1
            }), t.goCountDown();
        }, 1e3); else if (!this.data.revive && this.data.gateNum < this.data.maxGate && 0 < this.data.reviveNum) {
            var e = new Date();
            this.totalTime += e.getTime() - this.startDate.getTime(), clearTimeout(this.countDownTimer), 
            this.gameOver();
        } else this.gameOver();
    },
    onStop: function() {
        if (!this.data.gameOver) {
            var t = new Date();
            this.totalTime += t.getTime() - this.startDate.getTime(), this.setData({
                gameStop: 1
            }), clearTimeout(this.countDownTimer);
        }
    },
    onStart: function() {
        this.reInitColor();
        var t = new Date();
        this.startDate = t, this.setData({
            gameStop: 0
        }), this.goCountDown();
    },
    reInitColor: function() {
        console.info(this.level), this.setData({
            list: null
        });
        var t, e, i = this.levelMap[this.level] ? this.levelMap[this.level] : this.levelMap[this.levelMap.length - 1];
        this.diffIndex = Math.floor(Math.random() * i * i), t = this.reColor, e = this.reLvColor;
        for (var a = [], o = 0; o < i * i; o++) o === this.diffIndex ? a[o] = e[1] : a[o] = t[1];
        this.setData({
            lv: "lv" + i,
            list: a
        });
    },
    onNext: function(t) {
        if (this.data.gameOver) return 0;
        t.currentTarget.dataset.index === this.diffIndex && (this.data.gateNum >= this.data.maxGate ? (clearTimeout(this.countDownTimer), 
        this.setData({
            gameOver: 1
        }), this.clear = 1, this.gameOver()) : (++this.level, this.initColor(), this.setData({
            countDown: 10
        })));
    },
    gameOver: function() {
        var t = this;
        new Date();
        t.setData({
            showRevive: 1,
            revive: 1,
            result: {
                nowgate: t.data.gateNum,
                nowtime: parseInt(this.totalTime / 1e3)
            }
        }), e.stop(), e.src = t.data.musicurl + "fail.mp3", e.play();
    },
    restart: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onShareAppMessage: function() {
        return {
            title: "好友喝酒聚会神器，线上最全玩法，一起来叭~",
            path: "/pages/index/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    onShareTimeline: function() {
        return {
            title: '"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',
            imageUrl: "/assets/friendShare.png"
        };
    }
});