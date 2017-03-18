//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    //显示条目数
    displayTimes: 3
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
    this.loadCarousel();
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

// 获取轮播图数据
  loadCarousel: function () {
    var that = this;
    wx.request({
      url: 'http://www.cxcycf.com/tools/app_ajax.ashx',
      //请求的参数
      data: {
        action: 'carousel',
        top: 6
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {        
        for(var i=0; i<res.data.list.length; i++){
          var imgUrl = [];
          imgUrl[i] = res.data.list[i].img_url;
          //设置数据
          that.setData({        
            imgUrls: imgUrl
          })
        }         
        console.log('success');
      },
      fail: function (res) {
        console.log('fail');
      },
      complete: function (res) {
        console.log('complete');
      }
    })
  }
})
