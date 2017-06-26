Page({
	data:{
		imgUrls:"value",
		id:"",
		number:""
	},
	
	 onLoad:function(options){
	 	var that=this;
	 		that.setData({
	 			"id":options.id,
        "number": options.number
	 		});
	 	
	 	if(options.number==3){
			var url="https://tour.traveltomyhome.net/json/website/searchCustomization.html?"	
	 	}else{
			var url="https://tour.traveltomyhome.net/json/website/selectCustomizationdetails.html?"
	 	}	
		wx.request({
			url:url,
		  	data: {
		     	name:options.id,
		     	type:options.number
		  	},	
		  	header: {
		      'content-type': 'application/json'
		  	},
			success: function(res) {
			  var listData=res.data.data.customization[0];	
			  var dressArray1=new Array();
			  var dressArray2=new Array();
			  listData.hostelExternalImage=listData.hostelExternalImage.split("##");
				for(var i=0;i<listData.hostelExternalImage.length;i++){
					listData.hostelExternalImage[i]="https://tour.traveltomyhome.net/"+listData.hostelExternalImage[i];
				}
				listData.personalityimage1=listData.personalityimage1.split("##");
				listData.personalityimage2=listData.personalityimage2.split("##");
				listData.hostelPrice=listData.hostelPrice.split("##");
				listData.hostelType=listData.hostelType.split("##");
				listData.hostelAddress=listData.hostelAddress.split("##");
				for(var i=0;i<listData.personalityimage1.length;i++){
					listData.personalityimage1[i]="https://tour.traveltomyhome.net/"+listData.personalityimage1[i];
				}
				for(var i=0;i<listData.personalityimage2.length;i++){
					listData.personalityimage2[i]="https://tour.traveltomyhome.net/"+listData.personalityimage2[i];
				}
				listData.address1=dressArray1;
				listData.address2=dressArray2;
				that.setData({imgUrls:listData});
		
			}
			
		})
	},
	onShareAppMessage:function(){
		var that=this;
	    return {
	      title: '你的民宿',
	      desc: '宛若故乡的吸引',
	      path: 'pages/main/xiangqing/xiangqing?id='+that.data.id+"&number="+that.data.number
	    }
	   
	},			  
	calling:function(){
	    wx.makePhoneCall({
		      phoneNumber: '4008703626'
		   })
	   }
		      
})
