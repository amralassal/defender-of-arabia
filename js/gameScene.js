var CanvasGameScene = Class.create(Scene , {


	initialize: function(){
		this.buildingLayer = new Layer();
		var canvasLayer = new CanvasLayer({ctx : $("gamecanvas").getContext("2d")});
		this.buildingLayer.extend(canvasLayer);
		this.layers.attach(this.buildingLayer);
	},
	init: function(){
		var towerDisplay = new TowerDisplay(jet);
		this.buildingLayer.attach(towerDisplay.sprite);
		return jet;	
	},
	
})