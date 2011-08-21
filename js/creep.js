
var Creep = Class.create(Unit, {
	speeds : [0, 1.08, 2.245, 4.852, 6.023, 7.945, 11.71, 22.625],//use in path in arcs
	angles : [0, 3.75, 7.5, 15, 18, 22.5, 30, 45], //use in path in arcs 
	cannonTheta : 0,
	olderTheta : 0, oldestTheta: 0,
	hp : 100, maxHp : 100,
	rate : 0.1, power: 1.0,
	cannonDisplacement : [-4, 0],
	turningPoint : [0, 0],
	range : 1,
	rute : [],
	currentTile : 0,
	tileWidth : 50,
	tileHeight : 50,
	speed : 10,
	initialize : function($super,x,y){
		$super(x,y)	
	},
	
	tick : function(){
		if(this.dead) return
		
		if(!this.rotating){
			var tileX = Math.floor(this.x/tileWidth);
			var tileY = Math.floor(this.y/tileHeight);
			if(tileX != rute[this.currentTile][1] || tileY != rute[this.currentTile][0]){
				this.currentTile++;
			}
			if(rute[this.currentTile+1][1] > rute[this.currentTile][1]){
				this.moveTo(this.x+speed,y);
			}
			else if(rute[this.currentTile+1][0] > rute[this.currentTile][0]){
				this.moveTo(this.x,y+speed);
			}
			else{
				// console.log("creep tick error");
			}
		}else{
		
		}
	},
	
	beginMoving : function(){
		this.moveTo(rute[0][1]* tileHeight,rute[0][0]*tileWidth)
	},
	
	die : function(){
	},
	
	destroy : function(){
	}
})	
