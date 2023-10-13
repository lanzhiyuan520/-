Page({
    data: {
        treasure: [

            {
                title:"1",
                text:"每个人在微信搜索“酒桌玩筛子”小程序，打开小程序后，点击“摇”，摇过之后，点击右侧锁住骰子，然后骰盅手动往上滑拨，开盖看自己的骰子，然后猜测酒桌上骰子点数，估算出酒桌上的某个点数总和，然后开叫，2个1，2个2，2个3...3个1，3个2...一步步往上叫，直到酒桌上有人觉得总数不成立，此人就可以“开”上一个酒友也可跳开其他酒友。以两个人为例，两人摇了后正式开始，每人喊一个数字，两人最少从二开始，如2个3，如果对方不信认为你讲大话就可以开你，如果两个人加起来的骰子没有2个3的话就算你讲大话，你输喝酒。如果对方相信就继续玩下去，就轮到你喊，但是你喊的数字要比前面喊的大，如果前面喊二个三，你就只能喊二个五或者三个二之类，依此类推。输了喝酒，赢了拍手。注意:A.叫数只能越叫越天(比如、2个6告x3个2，喊了2个6后就不能再喊2个类的)。B.1点可以作为任何数，例如骰盒 奥待晏卡 有3个2点，1个1点，玩家其实自己就可当作有4个2点;可是要是酒桌里有人叫过1点的话，那1点以后就不可以当",
                
            }


        ],
        strategy: []
    },
    onLoad: function(e) {},
    onReady: function() {
        var e = wx.cloud.database(), t = this;
        e.collection("treasure").get({
            success: function(e) {
                console.log("res", e), t.setData({
                    treasure: e.data
                });
            }
        }), e.collection("strategy").get({
            success: function(e) {
                console.log("res", e), t.setData({
                    strategy: e.data
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
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