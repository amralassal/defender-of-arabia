var Unit = Class.create({

	hp: 100, maxHp: 100, 
	fired: false,
	power: 2.5, range: 2,
	x: 0, y: 0 ,
	
	initialize: function(x, y,scene){
		this.x = x
		this.y = y
		this.scene = scene
		this.maxHp = this.hp
		return this
	},
	
	target: function(){
	},
	
	moveTo : function(){
	},
	
	rotate : function(){
	},
	
	getTargetfromCell: function(cell, targets){
	},
	
	
	pickTarget: function(targets){
	},
	
	
	takeHit: function(power){
	},
	
	die: function(){
	},
	

});
