// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
   if (options.anid) {
      this.getAnoList(options.anid);
    } else {
      this.getList(options.id);
    } 
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
  getList: function (id) {
    var self = this;
    wx.request({
      url: 'https://mjappaz.yefu365.com/index.php/app/ios/vod/index',
      method: 'GET',
      data: {
        'ztid': id,
        'size': '100',
        'page':'1'
      },
      success: function (res) {
        console.log(res);
        self.setData({
          films: res.data.data,
        })
      }
    })
  },
  getAnoList: function (id) {
    var self = this;
    wx.request({
      url: 'https://mjappaz.yefu365.com/index.php/app/ios/vod/index',
      method: 'GET',
      data: {
        'id': id,
        'size': '100',
        'page': '1'
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
  }
})