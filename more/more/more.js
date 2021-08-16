// more/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:"hello",
      num:10000,
      isGirl:false,
      person:{
        age:74,
        height : 145,
        weight : 200,
        name: "Marry",
        ischecked:true
      },
      list:[
        {
          id:0,
          name:"猪八戒"
        },
        {
          id:1,
          name:"天蓬元帅"
        },
        {
          id:2,
          name:"悟能"
        }
      ],
  },
//数据绑定
//获取用户个人信息
getUserInfo(e){
  console.log(e);
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})