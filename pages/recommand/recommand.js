// pages/recommand/recommand.js
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
    wx.showLoading({ title: '加载中', icon: 'loading', duration: 10000 });
    wx.request({
      url: 'https://mjappaz.yefu365.com/index.php/app/ios/topic/index',
      method: 'GET',
      data: {
        'vsize': '6'
      },
      success: function (res) {
        console.log(res);
        self.setData({
          films: res.data.data,
        })
      }, fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none',
          duration: 1500
        })
      },
      complete: () => {
        wx.hideLoading()
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
  moreClick:function(e) {
    var id = e.currentTarget.dataset.id;
    console.log(e);
    wx.navigateTo({
      url: '/pages/more/more?id=' + id,
    })
  }
})