var DomLayer = Class.create({
	
	initialize : function(options){
		this.init(options);
		this.zIndex = this.options.zIndex
	},
	
	attach : function(sprite){
		console.log(sprite)
		sprite.setZIndex(this.zIndex);
		if(!this.visible){
			sprite.hide()
		}
		return this
	},
		
	show : function(){
		this.visible = true
		for(var i=0;i<this.sprites.length;i++){
			var element  = this.sprites[i]
			element.show()
		}
		return this
	},
	
	hide : function(){
		this.visible = false
		for(var i=0;i<this.sprites.length;i++){
			var element  = this.sprites[i]
			element.hide()
		}
		return this
	},

	render : function(){
	}
}
)
