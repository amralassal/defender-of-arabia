var LevelEditor = Class.create({
	
	initialize : function (directory){
		this.bgDirectory = directory
		var img = new Image();
		this.action = new ActionHandler();
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
		this.loadRoadImages();
		this.loadImages();
	},
	
	loadImages : function (){
		for(var i=0;i<6;i++){
			var div =	this.imageDiv.set("name"+i ,$(document.createElement('div')).setStyle({
			width : 50+'px',
			height : 50+'px',
			position:'absolute',
			left:(30+ ((i%2==0)?0:70))+'px',
			top: (35+((i%2==0)?35*(i-1):35*(i-2)))+'px',
			}
		));
		  div.id = "name"+i;
		  this.imageMenuDiv.appendChild(div);
		  div.appendChild(this.arrImage[i]);
		  var actionSelf=this.action;
		  this.action.addAction(div,function(){actionSelf.tileEnter()},'mouseenter'); 
		  this.action.addAction(div,function(e){actionSelf.clickTile(e)},'click');
		  this.action.addAction(div,function(){actionSelf.tileExit()},'mouseout');
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
			
	},
    
    loadRoadImages : function(){
    	var img1 = new Image();
		img1.src = "images/path-curve 1.png";
		img1.width = 50
		img1.height = 50
		this.arrImage[0] = img1;
		var img2 = new Image();
		img2.src = "images/path-curve2.png";
		this.arrImage[1] = img2 ;
		img2.width = 50
		img2.height = 50
		var img3 = new Image();
		img3.src = "images/path-curve3.png";
		this.arrImage[2] = img3 ;
		img3.width = 50
		img3.height = 50
		var img4 = new Image();
		img4.src = "images/path-curve4.png";
		this.arrImage[3] = img4 ;
		img4.width = 50
		img4.height = 50
		var img5 = new Image();
		img5.src = "images/path-horizontal.png";
		this.arrImage[4] = img5 ;
		img5.width = 50
		img5.height = 50
		var img6 = new Image();
		img6.src = "images/path-vertical.png";
		this.arrImage[5] = img6 ;
		img6.width = 50
		img6.height = 50
    }
})
