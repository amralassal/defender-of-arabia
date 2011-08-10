var Tower = Class.create(Unit,{

	initialize : function($super,x,y){
		$super(x,y)
		this.x = x
		this.y = y
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