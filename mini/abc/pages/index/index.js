//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag: false,//上拉加载
    content: [],
    searchLoadingComplete: false,//没有数据
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
    }],
    sort_list:["智能排序","时间排序","价格排序","车龄排序","里程排序"],
    now:0,
    show: true,
    animationData: {},
    opacity: 0
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
    }),
      wx.showLoading({
        title: '加载中',
      }),
      
      wx.request({
        url: 'http://localhost:8080/tags',
        dataType: 'json',
        success: (res => {
          wx.hideLoading()
          console.log(res.data.sites[0].title);
          this.setData({
            content: res.data.sites

          })
        }),
        fail() {
          console.log("获取数据失败！");
        }
      })

  },
  sort_list_show: function(){
    
    this.opacityAnimation();
  },
  fnClick: function (e) {
    console.log("item");
    this.setData({
      now: e.target.dataset.index,  
      show: !this.data.show
    })   
  },
  opacityAnimation: function(){
    clearTimeout(timer1,timer2)
    var animation = wx.createAnimation({      
      duration: 300,
      timingFunction: "ease",
      delay: 0
    })
    var opa = this.data.opacity
    if (!this.data.opacity) {
      console.log(1)
      opa = opa == 0 ? 1 : 0
  
      this.setData({
        show: !this.data.show,
        animationData: {}       
      })
      animation.opacity(1).step();
      this.setData({
        animationData: animation.export()
      })
      var timer1 = setTimeout(function () {
        this.setData({
          opacity: 1
        })
      }.bind(this), 300)
    }else{
      console.log(8);
      opa = opa == 0 ? 1 : 0      
      this.setData({
        opacity: opa,
        animationData: {}        
      })
      animation.opacity(opa).step();
      this.setData({
        animationData: animation.export()
      })
      var timer2 = setTimeout(function(){
        this.setData({
          show: !this.data.show
        })
      }.bind(this),300)     
    }
  },
  fnClickDefault: function(){
    console.log("default");
    opacityAnimation();
    this.setData({
      show: !this.data.show
    })
  },
  fetchList: function () {
    let that = this;
    wx.request({
      url: 'http://localhost:8080/tags2',
      dataType: 'json',
      success: (res => {
        console.log(res.data.num);
        if (res.data.num) {
          let searchList = [];
          // console.log(res.data.sites);
          // console.log(that.data.content);
          //如果isFromSearch是true从data中取出数据，否则先从原来的数据继续添加  
          that.setData({
            content: that.data.content.concat(res.data.sites)
          })

          console.log(23);
          that.setData({
            // searchSongList: searchList, //获取数据数组  
            // zhida: data.data.zhida, //存放歌手属性的对象  
            searchLoading: true   //把"上拉加载"的变量设为false，显示  
          });
          //没有数据了，把“没有数据”显示，把“上拉加载”隐藏 
        } else {

        }

      }),
      fail() {
        console.log("获取数据失败！");
      }
    })
  },
  lower: function (e) {
    console.log(e)
    let that = this;
    this.setData({
      flag: true,
    })
    if (that.data.loading && !that.data.loadingComplete) {

    }
    this.fetchList()
  }
})
