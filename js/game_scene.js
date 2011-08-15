/**
 * @author Mazen
 */
var GameScene = Class.create(SceneDom,{
	
	initialize : function($super,game){
		$super();
		this.game = game
		this.action = new ActionHandler();
		// this.g(roundLayer = createLayer();
		var div = ($("gamecanvas"))
		this.buildingLayer = createLayer();
		this.layers.push(this.buildingLayer);
		 // wactionHandler = this.action
		 // this.action.startMouseObserver(div);
		 // this.action.addAction($(this.game.CONTAINER_NAME),wactionHandler.clickTile,'click');
		 div.observe('click',this.action);
		this.buildingLayer = this.createLayer(0);
		this.layers.push(this.buildingLayer);
		// wactionHandler = this.action
		 //wactionHandler.startMouseObserver($(this.game.CONTAINER_NAME));
		 //this.action.addAction($(this.game.CONTAINER_NAME),wactionHandler.clickTile,'click');
		
	},
	initScene :function(){
		// this.addTower();
	    // this.addTank();
		this.addImage();
		
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
	}
})
