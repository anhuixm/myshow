//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hidden:false,
    hidden1:false,
    motto: 'Hello World',
    userInfo: {}
  },
  comfir:function(){
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        hidden:true,
        hidden1:true
      })
    })
  
  },
  bindViewTap:function() {
    console.log(1)
    wx.navigateTo({
      url: '../message/message'
    })
  }
  
})







