var Unit = Class.create({

	hp: 100, maxHp: 100, 
	fired: false,dead : false,
	power: 2.5, range: 2,
	x: 0, y: 0
	
	initialize: function(x, y){
		this.x = x
		this.y = y
		this.maxHp = this.hp
		return this
	},
	
	calculateTheta : function(target){
		  var x1 = target.x;
		  var y1 = target.y;
		  var slope;
		 if((x1-this.x) > 0 && (y1-this.y) < 0){
	         slope = ((this.y-y1) / (x1-this.x));
			 this.rotation = (2*Math.PI)-Math.atan(slope);
			 }
		 else if((x1-this.x) < 0 && (y1-this.y) < 0){
	         slope = ((this.y-y1) / (this.x-x1));
			 this.rotation = (3*Math.PI)+Math.atan(slope);
			 }
		 else if((x1-this.x) < 0 && (y1-this.y) > 0){
	         slope = ((y1-this.y) / (this.x-x1));
			 this.rotation = (3*Math.PI)-Math.atan(slope);
			 }
		else  if((x1-this.x) > 0 && (y1-this.y) > 0){
	         slope = ((y1-this.y) / (x1-this.x));
			 this.rotation = Math.atan(slope);
			 
			 }
		
	},
	
	pickTarget : function(){
		//put targets around square in array then choose least power
		
		var targets = new Array();
		if(this.dead) 
			return
		targets.sort(function(a,b){return a.hp - b.hp})
		   return  targets[0];
	},
	
	target: function(){
	},
	
	moveTo() : function(){
	},
	
	rotate() : function(){
	},
	tick () :function (){
	},
	getTargetfromCell: function(cell, targets){
	},
	
	
	pickTarget: function(targets){
	},
	
	
	takeHit: function(power){
		if(this.dead) 
			return
		this.hp =this.hp - power
		if(this.hp <= 0 ){
			this.dead = true; 
			this.die(); 
		}
		return this;
	},
	
	die: function(){
		alert("die not implemented yet !!");
	},
	
	fire : function(){
	},

})
