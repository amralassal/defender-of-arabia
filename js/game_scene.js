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
		this.initScene();
	},
	initScene :function(){
			
	},
})
