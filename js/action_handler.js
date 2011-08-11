/**
 * @author Mazen
 */ 
var ActionHandler =  Class.create({
	selectedObject : null ,
	selectedTower : null,
	
	initailize : function(){
		
	},
	
	addAction : function(div , action , onEvent){
		div.observe(onEvent,function(){eval(action)});
		
	},
	
	selectBuilding : function(div){
		
		
	},
	
	overBuilding : function (div){
		
	},
	
	selectTower : function(div){
		alert("click !")
		
	},
	
	upgradeTower : function(div){
		
	},
	
	sellTower : function(div){
		
	},
	
	build : function(){
		
	}
	
	
})
