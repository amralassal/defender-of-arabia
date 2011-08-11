/**
 * @author Mazen
 */
var GameScene = Class.create(Scene,{
	initialize : function($super,game){
		$super();
		this.game = game
		// this.groundLayer = new Layer();
		
		this.buildingLayer = new Layer({ctx : $("gamecanvas").getContext("2d")});
		this.buildingLayer.extend(new CanvasLayer());
		this.layers.push(this.buildingLayer);
		// this.flyingLayer = new Layer();
		// this.optionLayer = new Layer();
		
	},
	
	initScene :function(){
		// this.addTower();
		// this.addTank();
		this.addImage();
		this.game.menu.addWeapon("heal_button");
		this.game.menu.addWeapon("hyper_button");
		this.game.menu.addWeapon("weak_button");
		this.game.menu.addWeapon("doubleturret_button");
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
		
	},
	
	addImage : function(){
		var imageDisp = new imagedisplay(300,300);
		this.buildingLayer.attach(imageDisp.sprite);
	}
})
