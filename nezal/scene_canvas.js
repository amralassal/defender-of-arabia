
var SceneCanvas = Class.create(Scene, {
	//initializes the delay of the reactor

	
	initialize : function($super,delay){
		$super(delay);
		Object.extend(Layer.prototype ,CanvasLayer.prototype);
		Object.extend(Sprite.prototype , CanvasSprite.prototype);
	},
	
	createLayer:function(){
			return new Layer({ ctx : $("gamecanvas").getContext("2d")})
	},



	
})
