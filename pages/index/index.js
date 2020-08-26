//index.js
//获取应用实例
const app = getApp()
var jsn=require("../../data.js")
Page({
  
  data:{
   footer:[],
   name:"",
   logo:"",
   lunbo:[],
   layer:[],
   pic_list:[],
   resource:[]
  },
  
  onLoad: function () {
    console.log(jsn)
    this.setData({
      footer:jsn.dataList.footer,
      name:jsn.dataList.name,
      logo:jsn.dataList.logo,
      lunbo:jsn.dataList.lunbo,
      layer:jsn.dataList.layer,
      pic_list:jsn.dataList.pic_list,
      resource:jsn.dataList.resource
    })
    var comp=this.selectComponent("#head");
    comp.onLoad();
  },
  onShareAppMessage: function () {
    return{
      title:"三餐好味--首页",
      path:"/pages/index/index"
    }
   },

   
  
})
