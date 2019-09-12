// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmsDetail: Object,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.loadDetail(id);
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
  loadDetail: function (id) {
    var self = this;
    wx.showLoading({ title: '加载中', icon: 'loading', duration: 10000 });
    wx.request({
      url: 'https://mjappaz.yefu365.com/index.php/app/ios/vod/show',
      method: 'GET',
      data: {
        'id': id
      },
      success: function (res) {
        console.log(res);
        self.setData({
          filmsDetail:res.data.data,
        })
      },
      fail: () => {
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
  clickedBtn:function(e) {
    var url = e.currentTarget.dataset.url;
    console.log(url);
    wx.navigateTo({
      url: '/pages/play/play?url=' + url,
    })
  }
})