// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
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
  
  },
  getList: function () {
    var self = this;
    wx.request({
      url: 'https://mjappaz.yefu365.com/index.php/app/ios/type/index',
      method: 'GET',
      data: {
        'id': '1',
        'vsize': '6'
      },
      success: function (res) {
        console.log(res);
        self.setData({
          films: res.data.data,
        })
      }
    })
  },
  toDetail: function (e) {
    console.log(e);
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
  },
  moreClick: function (e) {
    var anid = e.currentTarget.dataset.anid;
    console.log(e);
    wx.navigateTo({
      url: '/pages/more/more?anid=' + anid,
    })
  }
})