//index.js
//获取应用实例
var wxRequest = require('../../utils/wxRequest');
// var server = require('../../utils/server');
const app = getApp();

Page({
  data: {
    
    files:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },

  onLoad: function () {
    const PI = 3.141593;
  },
  /**
   *@des:图像选择方法
   *@author:孙双洋
   *@date:20180407
  */
  chooseImage:function()
  {
      var that = this;
      var filse = that.data.files;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          if(filse.length>=5){
            wx.showToast({
              title:'最多可上传5张'
            });
          }else{
            filse.push(res.tempFilePaths[0]);
            that.setData({
             files:filse
            });
          }
        }
      });
  },
  /**
   *@des:批量上传方法
   *@author:孙双洋
   *@date:20180407
  */
  submit_pics:function()
  {
      var that = this;
      if (that.data.files) {
        var dataJson = {
          fileList: that.data.files,
        };
        wxRequest.uploadFileList(dataJson).then(res=>{
          console.log(res);
        }).then(res=>{
          
        });
      }else{
        wx.showToast({
          title:"请选择需上传图片"
        });
      }
  }
});
