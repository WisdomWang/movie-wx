// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    films:[],
    isRecc:false,
    kindId:"",
    loading:false,
    noMore:false,
    pageNo:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
   if (options.anid) {
      this.data.isRecc = false;
      this.data.kindId = options.anid;
    } else {
      this.data.isRecc = true;
      this.data.kindId = options.id;
    } 
    this.getList(false);
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
  scrollToLower: function (e) {
    if (!this.data.loading && !this.data.noMore) {
      this.setData({
        pageNo: this.data.pageNo + 1,
        loading:true
      })
      this.getList(true);
    } 
  },
  getList: function (isMore) {
    var self = this;
    var params;
    wx.showLoading({ title: '加载中', icon: 'loading', duration: 10000 });
    if(this.data.isRecc) {
      params = {
        'ztid': this.data.kindId,
        'size': '24',
        'page': this.data.pageNo
      }
    } else {
      params = {
        'id': this.data.kindId,
        'size': '24',
        'page': this.data.pageNo
      }
    }
    wx.request({
      url: 'https://mjappaz.yefu365.com/index.php/app/ios/vod/index',
      method: 'GET',
      data: params,
      success: function (res) {
        console.log(res);
        self.setData({
          loading: false
        })
        if(isMore) {
          self.setData({
            films: self.data.films.concat(res.data.data)
          })
        } else{
          self.setData({
            films: res.data.data,
          })
        };
        if (res.data.data.length == 0) {
          self.setData({
            noMore: true
          })
        }
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
  toDetail: function (e) {
    console.log(e);
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
  }
})