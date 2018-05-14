Page({
	onLoad:function(){
		console.log('进入');
	},
	getUserInfo_function:function(e){
		console.log(e);
		if(e.detail.errMsg === 'getUserInfo:fail auth deny'){
			console.log('拒绝了授权');
			wx.showModal({
			  content: '关键功能需基于授权才可使用,请您允许授权',
			  showCancel:false,
			  success: function(res) {
			    if (res.confirm) {
			      console.log('用户点击确定');
			    } else if (res.cancel) {
			      console.log('用户点击取消');
			    }
			  }
			})
		}else if(e.detail.errMsg === 'getUserInfo:ok'){
			console.log('成功进行了授权');
			wx.redirectTo({
			  url: '/pages/index/index'
			});
		}
	}
});