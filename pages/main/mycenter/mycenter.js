Page({
	onShareAppMessage:function(){
		var that=this;
	    return {
	      title: '你的民宿',
	      desc: '宛若故乡的吸引',
	      path: 'pages/main/mycenter/mycenter'
	    }
	   
	},		
	data:{
		imgUrls:"value",
		indicatorDots: true,  
		autoplay: true,  
		interval: 5000,  
		duration: 1000,
		swiperCurrent: 0
	},
	swiperChange: function(e){  
	    this.setData({  
	        swiperCurrent: e.detail.current  
	    })  
	},
	onLoad:function(){
		var that=this;
		var bodyHeight;
		wx.getSystemInfo({  
			  success: function(res) { 
			   bodyHeight=res.windowHeight-292+"px";  
			   
			  }  
			}) , 
		wx.request({
				url:"https://tour.traveltomyhome.net/json/website/carouselPicture.html",
				header: {
		      'content-type': 'application/json'
		  		},
				success: function(res) {
					var listData=res.data.data;
					var name=new Array();
					for(var i=0;i<listData.picture.length;i++){
						listData.picture[i]="https://tour.traveltomyhome.net/"+listData.picture[i]
						name[i]="../xiangqing/xiangqing?id="+listData.name[i]+"&number=1";
					}
					listData.name1=name;
					listData.bodyHeight=bodyHeight;
					that.setData({imgUrls:listData});
				}
			})
		},
	 	 toast: function() {
	    wx.navigateTo({
	        url:'../search/search'
	    })
	  },
	tiaozhuan:function(){
	     wx.navigateTo({
	        url:'../table/table'
	    })
	}
})
