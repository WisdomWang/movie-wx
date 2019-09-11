// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: [],
    keyWord:""
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

  },
  getList: function () {
    var self = this;
    wx.request({
      url: 'https://mjappaz.yefu365.com/index.php/app/ios/vod/index',
      method: 'GET',
      data: {
        'page': '1',
        'size': '100',
        'key':this.data.keyWord
      },
      success: function (res) {
        console.log(res);
        self.setData({
          films: res.data.data,
        })
        if (res.data.data.length == 0) {
        wx.showToast({
          title: '无相关视频',
          icon: 'none',
          duration: 1500
        })
      }
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
  goSearch: function (e) {
    var that = this;
    console.log(e);
    var formData = e.detail.value;
    if (formData) {
      that.data.keyWord = formData;
      that.getList();
    } else {
      wx.showToast({
        title: '输入不能为空',
        icon: 'none',
        duration: 1500
      })
    }
  },
  moreClick:function(e) {
    console.log(e)
    this.getList();
  }
})