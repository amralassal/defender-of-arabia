var Tower = Class.create(Unit,{

	initialize : function($super,x,y,scene){
		$super(x,y)
		this.x = x
		this.y = y
		this.scene=scene
		this.rotation = 0;
	},
	
	
	

	
	die : function (){
	},
	//each tick call rotate in  display object , rotate in display object call  
	//rotate sprite and rotate here 
	
	tick : function(){
		this.rotate()
	},
	rotate  : function (){
	}
	
	
	
	
	
})