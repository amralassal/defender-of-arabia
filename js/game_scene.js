/**
 * @author Mazen
 */
var GameScene = Class.create(Scene,{
	initialize : function($super){
		$super();
		this.groundLayer = new Layer(0);
		this.buildingLayer = new Layer(600);
		this.flyingLayer = new Layer(1200);
		this.optionLayer = new Layer(1800);
		
	},
	
	initScene :function(){
		this.addTower();
		this.addTank();
			
	},
	
	addTower : function(){
		var towerDisplay = new TowerDisplay(50,50);
		this.buildingLayer.attach(towerDisplay);
	},
	
	addTank : function(){
		var tankDisplay = new TankIDisplay(200,200);
		this.buildingLayer.attach(tankDisplay);
		tankDisplay.moveTo(10,10);
		tankDisplay.rotate(90);
		
	}
})
