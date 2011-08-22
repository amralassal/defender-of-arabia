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
		this.rutes = new Level({"backGround": "images/path.png", "arrayLayer": [{"sprites": [], "visible": true, "options": {}, "start": [{"x": 0, "y": 0}], "end": [{"x": 11, "y": 11}], "array": [[true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, false, false, false, false, false, false, false, false, false, false, false], [true, true, true, true, true, true, true, true, true, true, true, true]], "arrayPictures": [["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png", false, false, false, false, false, false, false, false, false, false, false], ["file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-curve%201.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png", "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-horizontal.png"]], "zIndex": 0, "rutes": []}, {"sprites": [], "visible": true, "options": {}, "start": [{"x": 11, "y": 0}], "end": [{"x": 11, "y": 11}], "array": [[false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true], [false, false, false, false, false, false, false, false, false, false, false, true]], "arrayPictures": [[false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"], [false, false, false, false, false, false, false, false, false, false, false, "file:///C:/Users/Sarah%20Sami/Desktop/defender-of-arabia/images/path-vertical.png"]], "zIndex": 1, "rutes": []}], "map": [[true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, false, false, false, false, true], [true, true, true, true, true, true, true, true, true, true, true, true]]});
	},
	initScene:function(){
		// this.addTower();
	    // this.addTank();
		this.gTank = this.addImage(0);
		this.gTankTwo = this.addImage(1);
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
	
	addImage : function(index){
		var imageDisp = new imagedisplay(300,300);
		this.buildingLayer.attach(imageDisp.sprite);
		// alert(imageDisp.angles)
		console.log("object ",this.rutes)
		imageDisp.rute = this.rutes.getRute(this.rutes.layers[index]);
		imageDisp.beginMoving();
		return imageDisp;
	}
	,
	tick : function(){
		this.gTank.tick();
		this.gTankTwo.tick();
		var gameSceneSelf = this;
		this.reactor.push(1,function(){gameSceneSelf.tick()});
	},
})
