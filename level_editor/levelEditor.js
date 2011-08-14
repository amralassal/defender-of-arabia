var LevelEditor = Class.create({
	
	initialize : function (directory){
		this.bgDirectory = directory
		var img = new Image();
		img.src = this.bgDirectory;
		img.width = 700;//width and height of drawing area 
		img.height = 600;
		this.imageDiv = new Hash();
		this.arrayLayer = new Array();
		this.index = 1;
		this.imageMenuDiv = document.createElement('div');
		this.imageMenuDiv.id="images";
		$("container").appendChild(this.imageMenuDiv);
		$("drawingarea").appendChild(img);
		this.arrImage = new Array();
		var img1 = new Image();
		img1.src = "images/mystry_button.png";
		this.arrImage[0] = img1;
		var img2 = new Image();
		img2.src = "images/reaper_2_inaction_right.png";
		this.arrImage[1] = img2 //put in separate method >>>>>>>>>>>>>>
		this.loadImages();
	},
	
	loadImages : function (){
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
},
	addLayer : function (){
			var b = document.createElement('button');
			$('container').appendChild(b);
			b.id = this.index -1;
			b.setStyle({position : 'absolute' , left : (750)+"px" , top : (20+30*this.index)+"px" });
			b.innerHTML = "layer "+this.index;
			this.index=this.index+1;
			var layer = new Layer();
			this.arrayLayer.push(layer);
			
	}
})
