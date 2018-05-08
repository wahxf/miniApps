//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag: true,
    content:['1','2','3','4','5','6'],
    list: [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }, {
      id: 4
    }, {
      id: 5
    }, {
      id: 6
    }]
  },
  
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(latitude);
      }
    })
    
  },
  lower: function (e) {
    console.log(e)
    console.log(454);
    // wx.request({
    //   url: 'http://localhost:8080/tags',
    //   dataType: 'json',
    //   success: (res=>{
    //     this.setData({
    //       content: res.data
    //     })
    //   }),
    //   fail(){
    //     console.log("获取数据失败！");
    //   }
    // })
    this.setData({
      flag: false,
      
    })
  }
})
