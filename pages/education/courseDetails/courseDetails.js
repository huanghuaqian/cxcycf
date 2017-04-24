// pages/education/courseDetails/courseDetails.js
Page({
  data: {
    videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 5
      }],
    itemSelected: [
      { isSelected: true, show: true },
      { isSelected: false, show: false }
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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


  inputValue: '',

  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  switch: function (e) {
    var selectedId = e.currentTarget.id;
    console.log("currTarID==" + selectedId);
    if (selectedId == 'introTitle') {
      this.setData({
        'itemSelected[0].isSelected': true,
        'itemSelected[1].isSelected': false,
        'itemSelected[0].show': true,
        'itemSelected[1].show': false
      });
    }
    else if (selectedId == 'dirTitle') {
      this.setData({
        'itemSelected[0].isSelected': false,
        'itemSelected[1].isSelected': true,
        'itemSelected[0].show': false,
        'itemSelected[1].show': true
      });
    }
  }
})

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

