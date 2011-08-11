/**
 * @author Mazen
 */
var GameScene = Class.create(Scene,{
	
	initialize : function($super,game){
		$super();
		this.game = game
		var domLayer = new DomLayer();
		this.groundLayer = new Layer(0);
		this.buildingLayer = new Layer(600);
		this.buildingLayer.extend(domLayer);
		this.flyingLayer = new Layer(1200);
		this.optionLayer = new Layer(1800);
		
	},
	
	initScene :function(){
		this.addTower();
		this.addTank();
		this.addImage();
		this.game.menu.addWeapon("heal_button");
		this.game.menu.addWeapon("hyper_button");
		this.game.menu.addWeapon("weak_button");
		this.game.menu.addWeapon("doubleturret_button");
	},
	
	addTower : function(){
		var towerDisplay = new TowerDisplay(50,50);
		this.buildingLayer.attach(towerDisplay.sprite);
	},
	
	addTank : function(){
		var tankDisplay = new TankIDisplay(200,200);
		this.buildingLayer.attach(tankDisplay.sprite);
		tankDisplay.moveTo(10,10);
		tankDisplay.rotate(90);
		
	},
	
	addImage : function(){
		var imageDisp = new imagedisplay(300,300);
		this.buildingLayer.attach(imageDisp.sprite);
	}
})
