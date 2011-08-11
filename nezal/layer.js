var Layer = Class.create({
	
	initialize : function(options){ // z-index or ctx
		this.sprites = []
		this.visible = true
		this.options = options || {};
	},
		
	attach : function(sprite){
		sprite.layer = this
		this.sprites.push(sprite)
		return this
	},
		
	show : function(){
		this.visible = true
		return this
	},
	
	hide : function(){
		this.visible = false
		return this
	},

	render : function(){
		return this
	}
}
)
