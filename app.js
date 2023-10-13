var e = require("76C4400185D172BF10A22806F8607533.js"), i = (e(require("7123DF7485D172BF1745B77331407533.js")), 
require("DC51161785D172BFBA377E102D517533.js"), require("F0A6C17385D172BF96C0A9741E027533.js"), 
e(require("AF571E7385D172BFC9317674F2417533.js"))), t = (require("0C23BFD085D172BF6A45D7D74FD17533.js"), 
require("CABAC79085D172BFACDCAF97CB717533.js"), require("ADEA465785D172BFCB8C2E5042327533.js"), 
e(require("13239EC085D172BF7545F6C7DDC17533.js")), {
    voiceChecked: 1,
    vibrateChecked: !0,
    autoPunishmentChecked: !0,
    autoStart: !1,
    skinNo: 1
});

App({
    onLaunch: function() {
   this.versionUpdate(), this.getWindowInfo();
        var e = this;
        this.loadUncleSkinConfig(), wx.getSystemInfo({
            success: function(i) {
                e.globalData.width = i.windowWidth, e.globalData.height = i.windowHeight, ("iPhone X" == i.model || "iPhone XR" == i.model || "iPhone XS Max" == i.model || i.safeArea.top > 30) && (e.globalData.isIpx = !0, 
                console.log("手机型号", i.model));
            }
        });
      
      
    },
    globalData: {
        openid: "",
        canShake: !0,
        settings: t,
        isIpx: !1,
        audio: null,
        skinList: [],
        adConfig: {
            diceFreeTimes: 3,
            pickerFreeTimes: 3,
            uncleFreeTimes: 3,
            guessFreeTimes: 3,
            rouletteFreeTimes: 3,
            deskmateFreeTimes: 3,
            squareFreeTimes: 100
        },
        diceNumber: 5,
        setup: {
            shake: !0,
            sound: !0,
            shock: !0,
            visibleTotal: !0
        },
        window: {
            width: 0,
            height: 0
        },
        diceType: 0
    },
    loadUncleSkinConfig: function() {
        return this.$$skinPromise || (this.$$skinPromise = new Promise(function(e) {
            i.default.checkAudioStorage(), e();
        })), this.$$skinPromise;
    },
    versionUpdate: function() {
        if (wx.canIUse("getUpdateManager")) {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(e) {
                console.log(e.hasUpdate);
            }), e.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: function(i) {
                        if (i.confirm) e.applyUpdate(); else if (i.cancel) return !1;
                    }
                });
            }), e.onUpdateFailed(function() {
                wx.hideLoading(), wx.showModal({
                    title: "升级失败",
                    content: "新版本下载失败，请检查网络！",
                    showCancel: !1
                });
            });
        }
    },
    playMusic: function(e) {
        this.globalData.setup.sound && e.play();
    },
    getWindowInfo: function() {
        var e = this;
        return new Promise(function(i, t) {
            0 == e.globalData.window.width ? wx.getSystemInfo({
                success: function(t) {
                    e.globalData.window.width = t.windowWidth, e.globalData.window.height = t.windowHeight, 
                    e.globalData.dpr = t.pixelRatio, i();
                }
            }) : i();
        });
    },
    zwkf: function () {
      wx.showToast({
        title: '敬请期待！',
        duration: 1000,
        icon: 'none',
        mask: true
      })  
      return;
    }
});