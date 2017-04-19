// pages/index/entreBase/baseDetail/baseDetail.js
Page({
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    //显示条目数
    displayTimes: 3
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.loadCarousel();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
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
        console.log(res.data.list);
        for (var i = 0; i < res.data.list.length; i++) {
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
  },
  openLocation: function () {
    // wx.chooseLocation({
    //   success: function (res) {
    //     var chooseLati = res.latitude;
    //     var chooseLongi = res.longitude;
    //     var chooseName = res.name;
    //     var chooseAdd = res.address;
    //   },
    //   fail: function () {
    //     // fail
    //   },
    //   complete: function () {
    //     // complete
    //   }
    // })
    wx.openLocation({
      latitude: 30.616434,
      longitude: 104.12088,
      scale: 28,
      name: '四川师范大学科技园',
      address: '成都'
    });
  },
  getLocation: function () {
    var that = this;
    console.log("self====" + that);
    // 模拟器获取地址返回：成都市市政府地址
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var res_lati = res.latitude;
        var res_longi = res.longitude;

        wx.openLocation({
          latitude: 30.616434,
          longitude: 104.12088,
          scale: 28
        })

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      },
    });

  }
})