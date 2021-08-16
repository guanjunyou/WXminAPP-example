// shop/shop/shop.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
      num:0,
      gender:"",
      list:[
        {
          id:0,
          name:"苹果",
          value:"apple"
        },
        {
          id:1,
          name:"葡萄",
          value:"grape"
        },
        {
          id:2,
          name:"香蕉",
          value:"banana"
        }
      ],
      checkedlist:[]
  },
  //输入框Input函数逻辑
  handleInput(e){
    //console.log(e.detail.value);
    this.setData({
        num:e.detail.value//给data里面赋值
      })
  },
  //加减，按钮事件
  handletap(e){
    //获取自定义属性
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num:Number(this.data.num) + Number(operation)//注意如果不加Number就变成字符串了
    })
  },
  handlechange(e){
    //获取单选框中的值
    let gender = e.detail.value;
    //把值赋给data中的数据
    this.setData({
      gender
      //相当于 gender: gender写法
    })
  },
  //复选框的选中事件
  handleItemChange(e){
      //获取被选中的复选框的值
      const checkedlist=e.detail.value;
      //赋值
      this.setData({
        checkedlist
      })
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