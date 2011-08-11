var LevelEditor = Class.create({
	
	initialize : function (directory){
		this.bgDirectory = directory
		console.log(this.bgDirectory);
		var img = new Image();
		img.src = this.bgDirectory;
		this.imageDiv = new Hash();
		this.imageMenuDiv = document.createElement('div');
		this.imageMenuDiv.id="images";
		$("container").appendChild(this.imageMenuDiv);
		$("drawingarea").appendChild(img);
		console.log(img)
		this.arrImage = new Array();
		var img1 = new Image();
		img1.src = "images/mystry_button.png";
		this.arrImage[0] = img1;
		var img2 = new Image();
		img2.src = "images/reaper_2_inaction_right.png";
		this.arrImage[1] = img2 //put in separate method >>>>>>>>>>>>>>
		console.log("initialize")
		this.loadImages();
	},
	
	loadImages : function (){
		console.log("load")
		for(var i=0;i<2;i++){
			var div =	this.imageDiv.set("name"+i ,$(document.createElement('div')).setStyle({
			position:'absolute',
			left:(0+ ((i%2==0)?0:50))+'px',
			top: (30+((i%2==0)?25*(i-1):25*(i-2)))+'px',
			}
		));
		  this.imageMenuDiv.appendChild(div);
		  div.appendChild(this.arrImage[i])
		}
	}
})
