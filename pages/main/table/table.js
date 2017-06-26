
Page({
	data:{
		 list:[],
		dd:'',
		hidden:false,
		page: 1,
		size: 20,
		hasMore:true,
		hasRefesh:false
	},
	onShareAppMessage:function(){
		var that=this;
	    return {
	      title: '你的民宿',
	      desc: '宛若故乡的吸引',
	      path: 'pages/main/table/table'
	    }
	   
	},		
	onLoad: function(){
		var that=this;
		wx.request({
			url:"https://tour.traveltomyhome.net/json/website/selectCustomization.html",
			header: {
				'content-type': 'application/json'
			},
	  		success: function(res) {
	  			var listData=res.data.data;
	  			var image=listData.hostelExternalImage;
	  			for(var i=0;i<listData.customization.length;i++){
	  				listData.customization[i].address="https://tour.traveltomyhome.net/"+listData.customization[i].address;
	  				listData.customization[i].hostelprice=listData.customization[i].hostelprice.split("##")[0];
	  			}
	  			that.setData({list:listData.customization,hidden:true});
	  			
	  		}	
		})
 	
    },
	
	Click:function(event){
 		var p = event.currentTarget.id;
        wx.navigateTo({
            url:'/pages/main/xiangqing/xiangqing?id='+this.data.list[p].name+"&number=1"
        })
   		
	  }
		
})
