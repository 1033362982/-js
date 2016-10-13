var studentsList = (function(){
	var data = [
			{
				name:"超人",
				age:100,
				achievement:100
			},
			{
				name:"蝙蝠侠",
				age:25,
				achievement:80
			},
			{
				name:"绿巨人",
				age:35,
				achievement:160
			},
			{
				name:"x教授",
				age:60,
				achievement:150
			},
			{
				name:"金刚狼",
				age:80,
				achievement:10
			},
		];


	return {
		data:data,
		bubbleSort:function(member){
			var len = this.data.length
			for(var i = len;i>=2;i--){
				for(var j = 0;j<i-1;j++){
					if(this.data[j][member] > this.data[j+1][member]){
						var temp = this.data[j];
						this.data[j] = this.data[j+1];
						this.data[j+1] = temp;
					}
				}
			}
		},
		ageSort:function(){
			this.bubbleSort("age");
		},
		achievementSort:function(){
			this.bubbleSort("achievement");
		}

	}

})()