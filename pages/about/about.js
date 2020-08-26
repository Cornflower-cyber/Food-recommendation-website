// pages/about/about.js
var jsn=require("../../data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footer:[],
    log:"",
    lat:"",
    tels:[ "电话:0451-234495",
    "邮箱:10288394@163.com",
    "qq:182738265",
    "公众号:weh-nciec"
  ]
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var th=this;
    wx.getLocation({
      success:function(res){
        th.setData({
          log:res.longitude,
          lat:res.latitude
        })
      }
    })
   this.setData({
    footer:jsn.dataList.footer,
   })
   var comp=this.selectComponent("#head");
    comp.onLoad();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   return{
     title:"三餐好味--首页",
     path:"/pages/index/index"
   }
  },
  //打电话
  tel:function(){
    wx.makePhoneCall({
     phoneNumber: '18629485695',
   })
  },
  //复制
  clone:function(e){
   var n=e.currentTarget.dataset.num;
   wx.setClipboardData({
     data: this.data.tels[n],
     success:function(){
       wx.showTabBar({
         title:"复制成功"
       })
     }
   })
  }
})