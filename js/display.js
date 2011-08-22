var Display = Class.create(Unit,{

	initialize : function($super,x,y){
		$super(x,y)
		this.initImages();
	},
	moveTo :function(x,y){
		this.sprite.moveTo(x,y);
		this.x = x;
		this.y = y;
	},
	update : function(){},
	finish : function(){},
})



var TowerDisplay = Class.create(Display,Tower,{
	 initialize : function($super,x,y){
		$super(x,y);
		this.sprite = new MySprite(this.images,this, {rotation:0})
		this.sprite.div.className = "Tower";
		
	  },
	  
 	  initImages : function(){
		this.images = {
			base : Loader.images.game_elements['tower_base.png'],
			cannon : Loader.images.game_elements['reaper_3.png'],
			fire : Loader.images.game_elements['reaper_3_inaction_left.png']
		}
	},
	rotate : function($super) {
		$super()
		this.sprite.rotate(this.deg)
	}
	
})

var TankIDisplay = Class.create(Display,TankI,{
	 initialize : function($super,x,y){
		$super(x,y);
		//var dSprite =new Sprite(this.images,this, {rotation:0}) 
		this.sprite = new MySprite(this.images,this, {rotation:0});
		//this.sprite.extend(dSprite)
		this.sprite.div.className = "TankI"
	  },
	  
 	  initImages : function(){
		this.images = {
			base : Loader.images.game_elements['humvee_body.png'],
			cannon : Loader.images.game_elements['humvee_tower.png'],
			fire : Loader.images.game_elements['humvee_tower_in_action.png']
		}
	},
	rotate : function($super,deg) {
		$super()
		 this.sprite.rotate(deg)
	},
	
	moveTo : function($super,x,y){
		$super(x,y)
		this.sprite.moveTo(x,y)
	}
})

var imagedisplay = Class.create(Display,TankI,{
			rute : [],
	currentTile : 0,
	tileWidth : 50,
	tileHeight : 50,
	speed : 0.125,

	initialize : function($super,x,y){
		$super(x,y);
		this.width = 513/8; 
		this.height = 744 / 8;
		//options contain {name,noOfFrames, img, imageWidth, imgHeight, direction, startY}
		//this.sprite = new DomImgSprite(this,{img:this.images[0],noOfFrames:8 , direction : 1, startY : 3});
		this.sprite = new Sprite(this.images, this);
		// this.sprite = new CanvasImgSprite(this,{img:this.images[0],noOfFrames:8 , direction : 0, startY : 3});
		// this.sprite.moveTo(100,100);
	//	this.sprite.rotate(30);
		
	},

	tick : function(){
		if(this.currentTile == this.rute.length) return
		if(this.dead) return
		// alert("ticking")
		if(!this.rotating){
			// var tileX = Math.floor(this.x/this.tileWidth);
			// var tileY = Math.floor(this.y/this.tileHeight);
			// if(tileX != this.rute[this.currentTile][1] || tileY != this.rute[this.currentTile][0]){
				// this.currentTile++;
			// }
			if(this.x == this.rute[this.currentTile+1][1] *this.tileWidth && this.y == this.rute[this.currentTile+1][0] *this.tileHeight){
				this.currentTile++;
			}
			
			if(this.rute[this.currentTile+1][1] > this.rute[this.currentTile][1]){
				this.moveTo(this.x+this.speed,this.y);
			}
			else if(this.rute[this.currentTile+1][1] < this.rute[this.currentTile][1]){
				this.moveTo(this.x-this.speed,this.y);
			}
			else if(this.rute[this.currentTile+1][0] > this.rute[this.currentTile][0]){
				this.moveTo(this.x,this.y+this.speed);
			}
			else if(this.rute[this.currentTile+1][0] < this.rute[this.currentTile][0]){
				this.moveTo(this.x,this.y-this.speed);
			}
			else{
				console.log("disp creep tick error");
			}
		}else{
		
		}
	},
	
	beginMoving : function(){

		this.moveTo(this.rute[0][1] * this.tileHeight,this.rute[0][0]* this.tileWidth)
		this.tick();
		return this
	},

	initImages : function (){
		this.images=
		{ 0 : Loader.images.game_elements['worker.png']}

		
	}
})



