var a0_0x16f6b0 = a0_0x22bf;
(function (_0x2930e2, _0x28a641) {
  var _0x2673a2 = a0_0x22bf,
    _0x3b5f96 = _0x2930e2();
  while (!![]) {
    try {
      var _0x416211 = parseInt(_0x2673a2(0x1d0)) / 0x1 * (parseInt(_0x2673a2(0x1cb)) / 0x2) + parseInt(_0x2673a2(0x1c0)) / 0x3 * (-parseInt(_0x2673a2(0x1cc)) / 0x4) + -parseInt(_0x2673a2(0x1c6)) / 0x5 + -parseInt(_0x2673a2(0x1c2)) / 0x6 + parseInt(_0x2673a2(0x1c8)) / 0x7 + -parseInt(_0x2673a2(0x1bf)) / 0x8 + -parseInt(_0x2673a2(0x1d4)) / 0x9 * (-parseInt(_0x2673a2(0x1be)) / 0xa);
      if (_0x416211 === _0x28a641) break;
      else _0x3b5f96['push'](_0x3b5f96['shift']());
    } catch (_0x3bae67) {
      _0x3b5f96['push'](_0x3b5f96['shift']());
    }
  }
}(a0_0x8542, 0x8c3b4));

function a0_0x8542() {
  var _0x17ce31 = ['adunit-29629a7b54a41a8b', 'catch', '/assets/share.jpg', 'offClose', 'onLoad', '/crocodile/page/bombDismant/bombDismant', 'onClose', 'navigateTo', 'log', '1606560ylKypj', '1159808gOJETA', '65613AsQwMQ', 'videoLink', '1093050XxDsYJ', 'onError', '/crocodile/page/index/index', 'button', '5738790wgHOlc', 'isEnded', '5651093BEgTCi', 'show', '\x22酒桌玩筛子\x22小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~', '2XEcYBq', '124KVXuPr', 'adunit-ef5bf71a45bdd710', 'createInterstitialAd', '/pages/index/index', '956063WgaqFH', 'default', '/assets/friendShare.png', 'adshow', '54sWaSPQ', 'createRewardedVideoAd', 'adload', '激励视频\x20广告显示失败', '观看完整版视频才能解锁进入哦~', '/pages/digitalBomb/index', 'showToast'];
  a0_0x8542 = function () {
    return _0x17ce31;
  };
  return a0_0x8542();
}
var n = require('../../46559A3485D172BF2033F2337D527533.js')[a0_0x16f6b0(0x1d1)],
  o = null;

function a0_0x22bf(_0x5208de, _0x263252) {
  var _0x8542d2 = a0_0x8542();
  return a0_0x22bf = function (_0x22bf2a, _0x17c0e6) {
    _0x22bf2a = _0x22bf2a - 0x1b2;
    var _0x313933 = _0x8542d2[_0x22bf2a];
    return _0x313933;
  }, a0_0x22bf(_0x5208de, _0x263252);
}
let interstitialAd = null;
Page({
  'data': {},
  'onLoad': function (_0xd0dde) {
    var _0x2fe9f4 = a0_0x16f6b0;
    this[_0x2fe9f4(0x1d6)](), wx[_0x2fe9f4(0x1d5)] && (o = wx['createRewardedVideoAd']({
      'adUnitId': "adunit-f9e986d17dcc50ae"
    }))[_0x2fe9f4(0x1c3)](function (_0x403ae6) {
      var _0x12e5e6 = _0x2fe9f4;
      console[_0x12e5e6(0x1bd)](_0x403ae6);
    });
  },
  'adload': function () {
    var _0x524d99 = a0_0x16f6b0;
    wx[_0x524d99(0x1ce)] && (interstitialAd = wx['createInterstitialAd']({
      'adUnitId': "adunit-f9e986d17dcc50ae"
    }), interstitialAd[_0x524d99(0x1b9)](() => {}), interstitialAd[_0x524d99(0x1c3)](_0x2171f9 => {}), interstitialAd[_0x524d99(0x1bb)](() => {}));
  },
  'adshow': function () {
    var _0x13e08a = a0_0x16f6b0;
    interstitialAd && interstitialAd[_0x13e08a(0x1c9)]()[_0x13e08a(0x1b6)](_0x45cd58 => {
      console['error'](_0x45cd58);
    });
  },
  'onReady': function () {},
  'onShow': function () {
    var _0x2f1638 = a0_0x16f6b0;
    this[_0x2f1638(0x1d3)]();
  },
  'onHide': function () {},
  'onUnload': function () {},
  'onPullDownRefresh': function () {},
  'onReachBottom': function () {},
  'onButton': function () {
    var _0x12d83f = a0_0x16f6b0;
    n[_0x12d83f(0x1c5)]();
  },
  'toCrocodile': function () {
    var _0x358f85 = a0_0x16f6b0;
    n['button'](), this[_0x358f85(0x1c1)](_0x358f85(0x1c4));
  },
  'toBombDismant': function () {
    var _0x4017cc = a0_0x16f6b0;
    n[_0x4017cc(0x1c5)](), this[_0x4017cc(0x1c1)](_0x4017cc(0x1ba));
  },
  'toDigitalBomb': function () {
    var _0x446931 = a0_0x16f6b0;
    n[_0x446931(0x1c5)](), this[_0x446931(0x1c1)](_0x446931(0x1b3));
  },
  'toDiffer': function () {
    var _0x14d241 = a0_0x16f6b0;
    n[_0x14d241(0x1c5)](), this[_0x14d241(0x1c1)]('/differ/page/index/index');
  },
  'videoLink': function (_0x17a815) {
    var _0x1a5ff5 = a0_0x16f6b0;
    o && (o[_0x1a5ff5(0x1c9)]()[_0x1a5ff5(0x1b6)](function () {
      var _0x14db0f = _0x1a5ff5;
      o['load']()['then'](function () {
        var _0x40b38d = a0_0x22bf;
        return o[_0x40b38d(0x1c9)]();
      })[_0x14db0f(0x1b6)](function (_0x33831d) {
        var _0x4c03bb = _0x14db0f;
        console[_0x4c03bb(0x1bd)](_0x4c03bb(0x1d7));
      });
    }), o[_0x1a5ff5(0x1bb)](function (_0x59f1cc) {
      var _0x3662bd = _0x1a5ff5;
      _0x59f1cc && _0x59f1cc[_0x3662bd(0x1c7)] || void 0x0 === _0x59f1cc ? setTimeout(function () {
        var _0x29dd24 = _0x3662bd;
        wx[_0x29dd24(0x1bc)]({
          'url': _0x17a815
        });
      }, 0x32) : wx[_0x3662bd(0x1b4)]({
        'title': _0x3662bd(0x1b2),
        'icon': 'none',
        'duration': 0x5dc
      }), o[_0x3662bd(0x1b8)]();
    }));
  },
  'onShareAppMessage': function () {
    var _0x448cfa = a0_0x16f6b0;
    return {
      'title': '好友喝酒聚会神器，线上最全玩法，一起来叭~',
      'path': _0x448cfa(0x1cf),
      'imageUrl': _0x448cfa(0x1b7)
    };
  },
  'onShareTimeline': function () {
    var _0x1105be = a0_0x16f6b0;
    return {
      'title': _0x1105be(0x1ca),
      'imageUrl': _0x1105be(0x1d2)
    };
  }
});