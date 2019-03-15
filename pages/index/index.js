//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgBanner:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
  },
    /**
     * 1获取轮播图接口数据
     */
    getBanner(){
      let that=this;
      wx.request({
          url:"http://192.168.5.60:7000/home/getBanner",
          success(res){
           if(res.data.code===100){
             that.setData({
                 imgBanner:res.data.data
             })
           }
          }
      })
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
