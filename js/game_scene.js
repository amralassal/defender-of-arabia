/**
 * @author Mazen
 */
var GameScene = Class.create(SceneDom,{
	
	initialize : function($super,game){
		$super();
		this.game = game
		//this.action = new ActionHandler();
		// this.buildingLayer = this.createLayer($("gamecanvas").getContext('2d'));
		this.buildingLayer = this.createLayer();
		this.layers.push(this.buildingLayer);
		this.rutes = new Move();
	},
	initScene:function(){
		// this.addTower();
	    // this.addTank();
		this.gTank = this.addImage();
		this.tick();
		// this.game.menu.addWeapon("heal_button");
		// this.game.menu.addWeapon("hyper_button");
		// this.game.menu.addWeapon("weak_button");
		// this.game.menu.addWeapon("doubleturret_button");
		
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
		// alert(imageDisp.angles)
		imageDisp.rute =this.rutes.getRute();
		imageDisp.beginMoving();
		return imageDisp;
	}
	,
	tick : function(){
		// this.gTank.
		this.gTank.tick();
		var gameSceneSelf = this;
		this.reactor.push(1,function(){gameSceneSelf.tick()});
	},
})
