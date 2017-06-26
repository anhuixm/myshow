Page({
	 data: {
			 "userName": '',
			  "flag":0
		 },
	userNameInput:function(e){
			 this.setData({
			 	userName:e.detail.value	,
				 
			 })
	 	},	 
	tijiao: function(){
		var that=this;
		var biao=false;

		wx.request({
			url:"https://tour.traveltomyhome.net/json/website/searchCustomization.html?",
		  	data: {
		     	name:this.data.userName
		  	},
		  	header: {
		      'content-type': 'application/json'
		  	},
			success: function(res) {
				if(res.data.msg!="此地暂无民宿资源"){
					that.setData({
							flag:0
						}),
					wx.navigateTo({
           				 url:'../xiangqing/xiangqing?id='+that.data.userName+'&number=3'
      			  })
				}else{
					biao=true;
				}
			},
			complete:function(){
					if(biao){
						that.setData({
							flag:1
						})
					}
			}
		})
	}
})