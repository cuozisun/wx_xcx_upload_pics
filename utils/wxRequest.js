// var util = require('../utils/util.js')
const app = getApp();
/**
 *@des:多图上传promise
 *@author:孙双洋
 *@date:20180407
*/
function uploadFileList(data) {
  var promise = Promise.all(data.fileList.map((item, index) =>new Promise(function (resolve, reject) {
      wx.uploadFile({
        url: app.globalData.serverUrl+'/Pay/postBusinessImage',
        filePath: item,
        
        name: 'file',
        success: function (res) {
          resolve(res);
        },
        fail: function (err) {
          reject(new Error('上传文件错误,图片序号：' + index));
        }
      });
    })));
  return promise;
}
module.exports = {
  uploadFileList: uploadFileList,
}