function n(n, a, t) {
  return a in n ? Object.defineProperty(n, a, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : n[a] = t, n;
}

var a, t = null, e = getApp();

Page((a = {
  data: {
      nvabarData: {
          showCapsule: 1,
          title: "大转盘"
      },
      isEnd: !1,
      bian: !0,
      animation: "",
      awardsList: {},
      animationData: {},
      btnDisabled: !1,
      interval: 0,
      userInfo: null,
      showConten: "幸运轮盘",
      isShowContent: !1
  },
  onLoad: function() {
      wx.createInterstitialAd && ((t = wx.createInterstitialAd({
          adUnitId: "adunit-ef5bf71a45bdd710"
      })).onLoad(function() {}), t.onError(function(n) {}), t.onClose(function() {}));
  },
  onShow: function() {
      t && t.show().catch(function(n) {
          console.error(n);
      });
  },
  rotateAni: function(n) {
      console.log("rotate==" + n), this.animation.rotate(120 * n).step(), this.setData({
          animation: this.animation.export()
      });
  }
}, n(a, "onLoad", function() {}), n(a, "audioPlay", function() {
  var n = this;
  e.AppMusic.play(), e.AppMusic.onPlay(function() {
      n.setData({
          bian: !0
      });
  });
}), n(a, "audioPause", function() {
  var n = this;
  e.AppMusic.pause(), e.AppMusic.onPause(function() {
      n.setData({
          bian: !1
      });
  });
}), n(a, "onShareAppMessage", function(n) {
  return {
      title: "幸运大转盘，不一样的喝酒方式！，",
      path: "pages/lunpan/lunpan",
      success: function(n) {},
      fail: function(n) {}
  };
}), n(a, "onShareTimeline", function(n) {
  return {
      title: "更多好玩喝酒小工具，幸运轮盘",
      query: "/pages/lunpan/lunpan"
  };
}), n(a, "getLottery", function() {
  var n = this;
  if (!this.data.btnDisabled) {
      this.start_music(), this.setData({
          btnDisabled: !0,
          isEnd: !1
      });
      var a = this, t = 9 * Math.random() >>> 0, i = e.awardsConfig;
      t < 2 && (i.chance = !1), console.log(t), e.runDegs = e.runDegs || 0, console.log("deg", e.runDegs), 
      e.runDegs = e.runDegs + (360 - e.runDegs % 360) + (2880 - 40 * t), console.log("deg", e.runDegs);
      var o = wx.createAnimation({
          duration: 8e3,
          timingFunction: "ease"
      });
      a.animationRun = o, o.rotate(e.runDegs).step(), a.setData({
          animationData: o.export()
      });
      var s = wx.getStorageSync("winAwards") || {
          data: []
      };
      s.data.push(i.awards[t].name), wx.setStorageSync("winAwards", s), setTimeout(function() {
          a.setData({
              showConten: i.awards[t].name
          }), a.setData({
              btnDisabled: !1,
              isEnd: !0
          }), n.end_music();
      }, 8e3);
  }
}), n(a, "end_music", function() {
  var n = wx.createInnerAudioContext();
  n.src = "/pages/video/yachi.mp3", n.autoplay = !0, n.play();
}), n(a, "start_music", function() {
  var n = wx.createInnerAudioContext();
  n.src = "/pages/video/zhuan.mp3", n.autoplay = !0, n.play();
}), n(a, "onReady", function(n) {
  var a = this;
  e.awardsConfig = {
      chance: !0,
      awards: [ {
          index: 0,
          name: "自己喝光"
      }, {
          index: 1,
          name: "指定喝光"
      }, {
          index: 2,
          name: "上家喝光"
      }, {
          index: 3,
          name: "一起干杯"
      }, {
          index: 4,
          name: "再转一次"
      }, {
          index: 5,
          name: "找人亲一下"
      }, {
          index: 6,
          name: "下家喝光"
      }, {
          index: 7,
          name: "自饮两杯"
      }, {
          index: 8,
          name: "找人干杯"
      } ]
  };
  for (var t = e.awardsConfig.awards, i = t.length, o = 360 / i / 2 + 90, s = [], r = 1 / i, u = wx.createContext(), c = 0; c < i; c++) u.save(), 
  u.beginPath(), u.translate(150, 150), u.moveTo(0, 0), u.rotate((360 / i * c - o) * Math.PI / 180), 
  u.arc(0, 0, 150, 0, 2 * Math.PI / i, !1), c % 2 == 0 ? u.setFillStyle("rgba(255,184,32,.1)") : u.setFillStyle("rgba(255,203,63,.1)"), 
  u.fill(), u.setLineWidth(.5), u.setStrokeStyle("rgba(228,55,14,.1)"), u.stroke(), 
  u.restore(), s.push({
      turn: c * r + "turn",
      lineTurn: c * r + r / 2 + "turn",
      award: t[c].name
  });
  a.setData({
      awardsList: s
  });
}), a));