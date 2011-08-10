
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
	
	initialize : function($super,x,y){
		$super(x,y)	
	},
	
	tick : function(){
		if(this.dead) 
			return
		if(!this.rotating){
		
		}else{
		
		}
	},
	
	
	die : function(){
	},
	
	destroy : function(){
	}
})	
