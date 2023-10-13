Page({
    data: {
        mineMap: {},
        timesGo: 0,
        minesLeft: 0
    },
    mineMap: {},
    mineMapMapping: {},
    rowCount: 8,
    colCount: 8,
    mineCount: 8,
    minMineCount: 8,
    maxMineCount: 20,
    minesLeft: 0,
    timesGo: 0,
    timeInterval: null,
    flagOn: !1,
    flags: 0,
    endOfTheGame: !1,
    safeMinesGo: 0,
    onLoad: function() {
        this.setData({
            minesLeft: 0,
            timesGo: 0
        }), this.drawMineField(), this.setData({
            buttionText: "开始挑战"
        });
    },
    setGame: function() {
        this.drawMineField(), this.createMinesMap(), this.setMinesLeft(), this.timeGoReset(), 
        this.timeGoClock(), this.endOfTheGame = !1, this.safeMinesGo = 0, this.setData({
            buttionText: "重新开始"
        });
    },
    setMinesLeft: function() {
        this.minesLeft = this.mineCount, this.setData({
            minesLeft: this.minesLeft
        });
    },
    timeGoClock: function() {
        var t = this;
        this.timeInterval = setInterval(function() {
            t.timesGo = t.timesGo + 1, t.setData({
                timesGo: t.timesGo
            });
        }, 1e3);
    },
    timeGoStop: function() {
        clearInterval(this.timeInterval);
    },
    timeGoReset: function() {
        clearInterval(this.timeInterval), this.timesGo = 0, this.setData({
            timesGo: this.timesGo
        });
    },
    createMinesMap: function() {
        for (var t = {}, i = 0; i < this.rowCount; i++) {
            t[i] = [];
            for (n = 0; n < this.colCount; n++) t[i][n] = 0;
        }
        this.mineCount = this.rangeRandom(this.minMineCount, this.maxMineCount);
        for (var e = this.mineCount; e > 0; ) {
            var i = this.rangeRandom(0, this.rowCount - 1), n = this.rangeRandom(0, this.colCount - 1);
            9 != t[i][n] && (t[i][n] = 9, e--);
        }
        for (i = 0; i < this.rowCount; i++) for (n = 0; n < this.colCount; n++) for (var s = i - 1; s < i + 2; s++) for (var a = n - 1; a < n + 2; a++) a >= 0 && a < this.colCount && s >= 0 && s < this.rowCount && (s !== i || a !== n) && 9 == t[s][a] && 9 != t[i][n] && t[i][n]++;
        this.mineMapMapping = t;
    },
    drawMineField: function() {
        for (var t = {}, i = 0; i < this.rowCount; i++) {
            t[i] = [];
            for (var e = 0; e < this.colCount; e++) t[i][e] = -1;
        }
        this.mineMap = t, this.setData({
            mineMap: this.mineMap
        });
    },
    demining: function(t) {
        if ("{}" != JSON.stringify(this.mineMapMapping)) {
            var i = parseInt(t.target.dataset.x), e = parseInt(t.target.dataset.y), n = parseInt(t.target.dataset.value);
            if (this.flagOn) this.flag(i, e, n); else if (!(n > 0)) {
                var s = this.mineMapMapping[i][e];
                s < 9 && (this.mineMap[i][e] = s, this.setData({
                    mineMap: this.mineMap
                }), this.safeMinesGo++, console.log("Safe mine go: " + this.safeMinesGo), this.safeMinesGo + this.mineCount == this.rowCount * this.colCount && this.success()), 
                9 == s && this.failed(), 0 == s && (this.openZeroArround(i, e), this.setData({
                    mineMap: this.mineMap
                }));
            }
        }
    },
    success: function() {
        wx.showToast({
            title: "挑战成功!",
            image: "../../images/icon/emoticon_happy.png",
            duration: 3e3
        }), this.timeGoStop(), this.endOfTheGame = !0;
    },
    failed: function() {
        wx.showToast({
            title: "挑战失败!",
            image: "../../images/icon/emoticon_sad.png",
            mask: !0,
            duration: 3e3
        }), this.showAll(), this.timeGoStop(), this.endOfTheGame = !0;
    },
    openZeroArround: function(t, i) {
        for (var e = t - 1; e < t + 2; e++) for (var n = i - 1; n < i + 2; n++) e >= 0 && e < this.rowCount && n >= 0 && n < this.colCount && (e !== t || n !== i) && this.mineMap[e][n] < 0 && (this.mineMap[e][n] = this.mineMapMapping[e][n], 
        this.safeMinesGo++, 0 == this.mineMapMapping[e][n] && this.openZeroArround(e, n));
        console.log("Safe mine go: " + this.safeMinesGo), this.safeMinesGo + this.mineCount == this.rowCount * this.colCount && this.success();
    },
    flagSwitch: function(t) {
        t.detail.value ? this.flagOn = !0 : this.flagOn = !1;
    },
    flag: function(t, i, e) {
        e > 0 && e < 10 || (10 != e ? this.minesLeft <= 0 || (this.minesLeft = this.minesLeft - 1, 
        this.mineMap[t][i] = 10, this.setData({
            mineMap: this.mineMap,
            minesLeft: this.minesLeft
        })) : this.pullUpFlag(t, i));
    },
    pullUpFlag: function(t, i) {
        this.minesLeft < this.mineCount && (this.minesLeft = this.minesLeft + 1), this.mineMap[t][i] = -1, 
        this.setData({
            mineMap: this.mineMap,
            minesLeft: this.minesLeft
        });
    },
    rangeRandom: function(t, i) {
        var e = i - t + 1;
        return Math.floor(Math.random() * e + t);
    },
    showAll: function() {
        this.mineMap = this.mineMapMapping, this.setData({
            mineMap: this.mineMap
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