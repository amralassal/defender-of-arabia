var SceneDom = Class.create(Scene, {
	//initializes the delay of the reactor

	
	initialize : function($super,delay){
		$super(delay);
		Object.extend(Layer.prototype ,DomLayer.prototype);
		Object.extend(Sprite.prototype , DomSprite.prototype);
	},
	
	createLayer:function(z){
			return new Layer({zIndex : z});
	
	},

	
})
